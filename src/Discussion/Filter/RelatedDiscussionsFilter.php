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
        $posts = $discussion->posts()->whereNull('hidden_at')->get();
        $postsText = $discussion->title . "\n";

        foreach ($posts as $post) {
            $postsText .= "\n" . $post->content . "\n";
            if (strlen($postsText) > 7000) {
                break;
            }
        }
        $discussionId = $discussion->id;

        $client = new \GuzzleHttp\Client();

        try {
            $forumQueryUrl = (string) $this->settings->get('badlogic-related-discussions.forum-query-url');
            $maxDicussions = (int) $this->settings->get('badlogic-related-discussions.max-discussions');
            $response = $client->post($forumQueryUrl, [
                'json' => ['k' => 50, 'query' => $postsText]
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
                        ->take($maxDicussions)
                        ->values();
        } catch (\Exception $e) {
            $docUris = collect([]);
        }

        return $docUris;
    }
}
