<?php

namespace Badlogic\RelatedDiscussions;

use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Extend;
use Flarum\Post\Event\Saving;
use Badlogic\RelatedDiscussions\Discussion\Filter\RelatedDiscussionsFilter;
use Badlogic\RelatedDiscussions\Listener\SettingsSavingListener;
use Badlogic\RelatedDiscussions\Listener\Bot;

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
        ->listen(Saving::class, function (Saving $event) {
            $post = $event->post; // Original post
            $content = $post->content; // Content of the original post
            error_log("New post " . $content);
        }),

    (new Extend\Event)
        ->listen(\Flarum\Settings\Event\Saving::class, SettingsSavingListener::class),
];
?>