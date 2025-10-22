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
            return;
        }

        $sources = [];
        foreach ($this->config->tagsToSources as $tagSource) {
            if ($tagSource->tag === $this->tag) {
                $sources = $tagSource->sources;
                break;
            }
        }

        $queryUrl = $this->config->doxieApiUrl . "/query";
        $client = new \GuzzleHttp\Client();

        $question = $this->title . "\n\n" . $this->content;

        try {
            $response = $client->post($queryUrl, [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->config->doxieApiToken,
                ],
                'json' => [
                    'botId' => $this->config->botId,
                    'question' => $question,
                    'sourceIds' => $sources
                ]
            ]);

            $body = json_decode($response->getBody()->getContents(), true);

            if (!isset($body["answer"])) {
                return;
            }

            if (stristr($body["answer"], "I can not help with that")) {
                return;
            }

            $reply = CommentPost::reply(
                $this->discussionId,
                $body["answer"],
                $botUser->id,
                Arr::get($this->attributes, 'ip_address', null)
            );
            $reply->save();

            $discussion = Discussion::find($this->discussionId);
            if ($discussion) {
                $discussion->refreshCommentCount()->refreshLastPost()->save();
            }
        } catch (\Exception $e) {
            error_log("[BotAnswer] ERROR: " . $e->getMessage());
            error_log("[BotAnswer] Stack trace: " . $e->getTraceAsString());
            throw $e;
        }
    }
}

?>