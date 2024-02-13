<?php

namespace Badlogic\RelatedDiscussions;

use Flarum\Extend;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Badlogic\RelatedDiscussions\Discussion\Filter\RelatedDiscussionsFilter;
use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Post\CommentPost;
use Illuminate\Support\Arr;
use Flarum\User\User;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(RelatedDiscussionsFilter::class),

    (new Extend\Settings)
        ->default("badlogic-related-discussions.config", ""),

    (new Extend\Event)
        ->listen(Posted::class, function (Posted $event) {
            $post = $event->post;
            if ($post->number === 1) {
                try {
                    $discussion = $post->discussion;
                    $title = $discussion->title;
                    $content = $post->content;
                    $tag = optional($discussion->tags)->pluck('name')->last() ?? '';

                    $settings = resolve(SettingsRepositoryInterface::class);
                    $configStr = (string) $settings->get('badlogic-related-discussions.config');
                    if (strlen(trim($configStr)) === 0) {
                        error_log("Bot: Bot not configured");
                        return;
                    }

                    $config = json_decode($configStr);
                    $botUser = $user = User::where('username', $config->botUser)->first();
                    if (!$botUser) {
                        error_log("Bot: Could not find bot user " . $config->botUser);
                        return;
                    }

                    $sources = [];
                    foreach ($config->tagsToSources as $tagSource) {
                        if ($tagSource->tag === $tag) {
                            $sources = $tagSource->sources;
                            break;
                        }
                    }

                    $queryUrl = $config->doxieApiUrl . "/answer/";
                    $client = new \GuzzleHttp\Client();

                    $response = $client->post($queryUrl, [
                        'json' => ['botId' => $config->botId, 'question' => $title . "\n\n" . $content, "sourceIds" => $sources]
                    ]);

                    $body = json_decode($response->getBody()->getContents(), true);
                    if ($body["success"] != true) {
                        error_log("Bot: Could not get bot answer");
                        return;
                    }
                    if (stristr($body["data"]["answer"], "I can not help with that")) {
                        error_log("Bot: Bot could not help with answer");
                        return;
                    }
                    $reply = CommentPost::reply(
                        $discussion->id,
                        $body["data"]["answer"],
                        $botUser->id,
                        Arr::get($post->getAttributes(), 'ip_address', null)
                    );
                    $reply->save();
                    $discussion->refreshCommentCount()->refreshLastPost()->save();
                } catch (\Exception $e) {
                    error_log("Bot: Could not create bot answer: " . $e->getMessage());
                    error_log("Exception trace: " . $e->getTraceAsString());
                }
            }
        }),
];
?>