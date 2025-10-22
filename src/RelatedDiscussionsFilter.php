<?php

namespace Badlogic\RelatedDiscussions;

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

        $config = json_decode((string) $this->settings->get('badlogic-related-discussions.config'));
        if (!$config) {
            return;
        }

        $ttl = $config->cacheHours * 60;

        $cacheKey = 'badlogicRelatedDiscussions'.$discussionId;

        $ids = $this->cache->remember($cacheKey, $ttl, function () use ($discussion) {
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
            if (strlen($postsText) > 3000) {
                break;
            }
        }
        $discussionId = $discussion->id;

        $client = new \GuzzleHttp\Client();

        try {
            $config = json_decode((string) $this->settings->get('badlogic-related-discussions.config'));
            $queryUrl = $config->doxieApiUrl . "/search";

            $response = $client->post($queryUrl, [
                'headers' => [
                    'Authorization' => 'Bearer ' . $config->doxieApiToken,
                ],
                'json' => [
                    'sourceId' => $config->relatedDiscussionsSourceId,
                    'query' => $postsText,
                    'limit' => 50
                ]
            ]);

            $body = json_decode($response->getBody()->getContents(), true);

            $docUris = collect($body['results'] ?? [])
                        ->pluck('docUri')
                        ->map(function ($uri) use ($discussionId) {
                            preg_match('/forum\/d\/(\d+)/', $uri, $matches);
                            if (isset($matches[1]) && $matches[1] == $discussionId) return null;
                            return $matches[1] ?? null;
                        })
                        ->filter()
                        ->unique()
                        ->take($config->maxRelatedDiscussions)
                        ->values();

        } catch (\Exception $e) {
            error_log("[RelatedDiscussions] ERROR: " . $e->getMessage());
            error_log("[RelatedDiscussions] Stack trace: " . $e->getTraceAsString());
            $docUris = collect([]);
        }

        return $docUris;
    }
}
