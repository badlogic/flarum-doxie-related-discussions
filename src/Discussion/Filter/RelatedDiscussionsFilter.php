<?php

namespace Badlogic\RelatedDiscussions\Discussion\Filter;

use Carbon\Carbon;
use Flarum\Discussion\Discussion;
use Flarum\Extension\ExtensionManager;
use Flarum\Filter\FilterInterface;
use Flarum\Filter\FilterState;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Cache\Repository;

class RelatedDiscussionsFilter implements FilterInterface
{
    protected $pattern = '/^(?<days>([0-9]|[1-2][0-9]|[3][0-1]))d(?<hours>([0-9]|[1][0-9]|[2][0-3]))h(?<minutes>([0-9]|[1-5][0-9]))m$/';

    /**
     * @var SettingsRepositoryInterface
     */
    protected $settings;

    /**
     * @var ExtensionManager
     */
    protected $extensions;

    /**
     * @var Repository
     */
    protected $cache;

    public function __construct(SettingsRepositoryInterface $settings, ExtensionManager $extensions, Repository $cache)
    {
        $this->settings = $settings;
        $this->extensions = $extensions;
        $this->cache = $cache;
    }

    public function getFilterKey(): string
    {
        return 'badlogicRelatedDiscussions';
    }

    public function filter(FilterState $filterState, string $filterValue, bool $negate)
    {
        if (! $filterValue) {
            return;
        }

        $discussionId = intval($filterValue);

        if ($discussionId == 0) {
            return;
        }

        /** @var ?Discussion */
        $discussion = Discussion::find($discussionId);

        if (is_null($discussion)) {
            return;
        }

        $allowGuests = $this->settings->get('badlogic-related-discussions.allow-guests');

        if (! $allowGuests && $filterState->getActor()->isGuest()) {
            return;
        }

        $cache = (string) $this->settings->get('badlogic-related-discussions.cache');

        preg_match($this->pattern, $cache, $matches);

        $days = intval($matches['days']);
        $hours = intval($matches['hours']);
        $minutes = intval($matches['minutes']);

        if ($days || $hours || $minutes) {
            $ttl = Carbon::now()->addDays($days)->addHours($hours)->addMinutes($minutes);
        } else {
            $ttl = 0;
        }

        $ids = $this->cache->remember('badlogicRelatedDiscussions'.$discussionId, $ttl, function () use ($discussion) {
            return $this->getResults($discussion);
        });

        $filterState->getQuery()->whereIn('id', $ids);
    }

    private function getResults(Discussion $discussion)
    {
        $postsText = $discussion->title . "\n" . $discussion->posts()->whereNull('hidden_at')->get()->pluck('content')->implode(' ');
        $discussionId = $discussion->id;

        $client = new \GuzzleHttp\Client();

        try {
            $response = $client->get('https://doxie.marioslab.io/api/documents/65a4a88f26fcb786b2860223/65b7a917891eb446da44956c/query', [
                'query' => ["k" => 50, 'query' => $postsText],
            ]);

            $body = json_decode($response->getBody()->getContents(), true);

            $docUris = collect($body['data'] ?? [])
                        ->pluck('docUri')
                        ->unique()
                        ->map(function ($uri) use ($discussionId) {
                            preg_match('/forum\/d\/(\d+)/', $uri, $matches);
                            if ($matches[1] == $discussionId) return null;
                            return $matches[1] ?? null;
                        })
                        ->filter()
                        ->take(5)
                        ->values();
        } catch (\Exception $e) {
            $docUris = collect([]);
        }

        return $docUris;
    }

}
