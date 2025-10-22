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
        error_log("[RelatedDiscussions] Filter called with value: {$filterValue}");

        if (! $filterValue) {
            error_log("[RelatedDiscussions] No filter value, returning");
            return;
        }

        $discussionId = intval($filterValue);

        if ($discussionId == 0) {
            error_log("[RelatedDiscussions] Invalid discussion ID, returning");
            return;
        }

        /** @var ?Discussion */
        $discussion = Discussion::find($discussionId);

        if (is_null($discussion)) {
            error_log("[RelatedDiscussions] Discussion {$discussionId} not found, returning");
            return;
        }

        $config = json_decode((string) $this->settings->get('badlogic-related-discussions.config'));
        if (!$config) {
            error_log("[RelatedDiscussions] No config found, returning");
            return;
        }

        error_log("[RelatedDiscussions] Config loaded, cache TTL: {$config->cacheHours} hours");
        $ttl = $config->cacheHours * 60;

        $cacheKey = 'badlogicRelatedDiscussions'.$discussionId;
        error_log("[RelatedDiscussions] Cache key: {$cacheKey}");

        $ids = $this->cache->remember($cacheKey, $ttl, function () use ($discussion) {
            return $this->getResults($discussion);
        });

        error_log("[RelatedDiscussions] Applying filter with " . count($ids) . " IDs");
        $filterState->getQuery()->whereIn('id', $ids);
    }

    private function getResults(Discussion $discussion)
    {
        error_log("[RelatedDiscussions] Getting results for discussion {$discussion->id}: {$discussion->title}");

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

            error_log("[RelatedDiscussions] Calling API: {$queryUrl}");
            error_log("[RelatedDiscussions] Source ID: {$config->relatedDiscussionsSourceId}");
            error_log("[RelatedDiscussions] Query length: " . strlen($postsText));

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

            error_log("[RelatedDiscussions] API response: " . json_encode($body));

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

            error_log("[RelatedDiscussions] Found " . count($docUris) . " related discussions: " . json_encode($docUris));
        } catch (\Exception $e) {
            error_log("[RelatedDiscussions] ERROR: " . $e->getMessage());
            error_log("[RelatedDiscussions] Stack trace: " . $e->getTraceAsString());
            $docUris = collect([]);
        }

        return $docUris;
    }
}
