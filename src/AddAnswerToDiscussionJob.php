<?php

namespace Badlogic\RelatedDiscussions;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\SerializesModels;
use Flarum\Post\CommentPost;
use Illuminate\Support\Arr;
use Flarum\User\User;
use Flarum\Discussion\Discussion;
use Illuminate\Support\Facades\Log;

$debug = false;

class AddAnswerToDiscussionJob implements ShouldQueue
{
    use Queueable, SerializesModels;

    protected $discussionId;
    protected $title;
    protected $content;
    protected $tag;
    protected $config;
    protected $attributes;

    public function __construct($discussionId, $title, $content, $tag, $config, $attributes)

    {
        $this->discussionId = $discussionId;
        $this->title = $title;
        $this->content = $content;
        $this->tag = $tag;
        $this->config = $config;
        $this->attributes = $attributes;
    }

    public function handle()
    {
        $botUser = User::where('username', $this->config->botUser)->first();
        if (!$botUser) {
            Log::error("Bot: Could not find bot user " . $this->config->botUser);
            return;
        }

        $sources = [];
        foreach ($this->config->tagsToSources as $tagSource) {
            if ($tagSource->tag === $this->tag) {
                $sources = $tagSource->sources;
                break;
            }
        }

        $queryUrl = $this->config->doxieApiUrl . "/answer/";
        $client = new \GuzzleHttp\Client();

        $response = $client->post($queryUrl, [
            'json' => ['botId' => $this->config->botId, 'question' => $this->title . "\n\n" . $this->content, "sourceIds" => $sources]
        ]);

        $body = json_decode($response->getBody()->getContents(), true);
        if ($body["success"] != true) {
            Log::error("Bot: Could not get bot answer");
            return;
        }
        if (stristr($body["data"]["answer"], "I can not help with that")) {
            Log::error("Bot: Bot could not help with answer");
            return;
        }
        $reply = CommentPost::reply(
            $this->discussionId,
            $body["data"]["answer"],
            $botUser->id,
            Arr::get($this->attributes, 'ip_address', null)
        );
        $reply->save();
        $discussion = Discussion::find($discussionId);
        if ($discussion) {
            $discussion->refreshCommentCount()->refreshLastPost()->save();
        }
    }
}

?>