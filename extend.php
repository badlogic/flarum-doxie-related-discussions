<?php

namespace Badlogic\RelatedDiscussions;

use Flarum\Extend;
use Flarum\Discussion\Filter\DiscussionFilterer;
use Badlogic\RelatedDiscussions\RelatedDiscussionsFilter;
use Badlogic\RelatedDiscussions\AddAnswerToDiscussionJob;
use Flarum\Post\Event\Posted;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\Post\CommentPost;
use Illuminate\Support\Arr;
use Flarum\User\User;

$debug = false;

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
                        if ($debug) error_log("Bot: Bot not configured");
                        return;
                    }

                    $config = json_decode($configStr);
                    $discussion = $post->discussion;
                    $title = $discussion->title;
                    $content = $post->content;
                    $tag = optional($discussion->tags)->pluck('name')->last() ?? '';

                    resolve('flarum.queue.connection')->push(
                        new AddAnswerToDiscussionJob($discussion->id, $title, $content, $tag, $config, $post->getAttributes())
                    );
                } catch (\Exception $e) {
                    if ($debug) error_log("Bot: Could not create bot answer: " . $e->getMessage());
                    if ($debug) error_log("Exception trace: " . $e->getTraceAsString());
                }
            }
        }),
];
?>