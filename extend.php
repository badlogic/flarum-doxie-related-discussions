<?php

namespace Badlogic\RelatedDiscussions;

use Flarum\Discussion\Filter\DiscussionFilterer;
use Flarum\Extend;
use Badlogic\RelatedDiscussions\Discussion\Filter\RelatedDiscussionsFilter;
use Badlogic\RelatedDiscussions\Listener\SettingsSavingListener;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less')
        ->content(function ($document) {
            $settings = resolve("flarum.settings");
            $docsQueryUrl = (string)$settings->get('badlogic-related-discussions.docs-query-url');
            $maxDiscussions = (int) $settings->get('badlogic-related-discussions.max-discussions');
            $document->payload['badlogicRelatedDocsSettings'] = [
                'docsQueryUrl' => $docsQueryUrl,
                'maxDiscussions' => $maxDiscussions
            ];
        }),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Filter(DiscussionFilterer::class))
        ->addFilter(RelatedDiscussionsFilter::class),

    (new Extend\Settings)
        ->default('badlogic-related-discussions.forum-query-url', '')
        ->default('badlogic-related-discussions.docs-query-url', '')
        ->default('badlogic-related-discussions.max-discussions', 5)
        ->default('badlogic-related-discussions.position', 'first_post')
        ->default('badlogic-related-discussions.cache', '0d0h0m')
        ->serializeToForum('badlogicRelatedDiscussionsAllowGuests', 'badlogic-related-discussions.allow-guests', 'boolval')
        ->serializeToForum('badlogicRelatedDiscussionsPosition', 'badlogic-related-discussions.position'),

    (new Extend\Event)
        ->listen(\Flarum\Settings\Event\Saving::class, SettingsSavingListener::class),
];
