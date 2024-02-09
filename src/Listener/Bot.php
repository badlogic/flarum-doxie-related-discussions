<?php

namespace Badlogic\RelatedDiscussions\Listener;

use Flarum\Post\Event\Saving;
use Flarum\Settings\SettingsRepositoryInterface;

class Bot
{
    public static function handleSaving(Saving $event)
    {
        $settings = resolve(SettingsRepositoryInterface::class); // Access settings
        $post = $event->post;
        $content = $post->content;
        $maxDiscussions = $settings->get('badlogic-related-discussions.max-discussions');

        // Log or process the content and settings as needed
        error_log("New post: " . $content . "; Max discussions: " . $maxDiscussions);
    }
}
?>