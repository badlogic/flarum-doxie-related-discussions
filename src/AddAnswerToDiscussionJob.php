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
        error_log("[BotAnswer] Processing discussion {$this->discussionId}, tag: {$this->tag}");

        $botUser = User::where('username', $this->config->botUser)->first();
        if (!$botUser) {
            error_log("[BotAnswer] ERROR: Could not find bot user {$this->config->botUser}");
            return;
        }

        error_log("[BotAnswer] Found bot user: {$botUser->username} (ID: {$botUser->id})");

        $sources = [];
        foreach ($this->config->tagsToSources as $tagSource) {
            if ($tagSource->tag === $this->tag) {
                $sources = $tagSource->sources;
                break;
            }
        }

        error_log("[BotAnswer] Sources for tag '{$this->tag}': " . json_encode($sources));

        $queryUrl = $this->config->doxieApiUrl . "/query";
        $client = new \GuzzleHttp\Client();

        $question = $this->title . "\n\n" . $this->content;
        error_log("[BotAnswer] Calling API: {$queryUrl}");
        error_log("[BotAnswer] Bot ID: {$this->config->botId}");
        error_log("[BotAnswer] Question length: " . strlen($question));

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
            error_log("[BotAnswer] API response keys: " . json_encode(array_keys($body ?? [])));

            if (!isset($body["answer"])) {
                error_log("[BotAnswer] ERROR: No answer in response: " . json_encode($body));
                return;
            }

            error_log("[BotAnswer] Got answer, length: " . strlen($body["answer"]));

            if (stristr($body["answer"], "I can not help with that")) {
                error_log("[BotAnswer] Bot declined to answer");
                return;
            }

            $reply = CommentPost::reply(
                $this->discussionId,
                $body["answer"],
                $botUser->id,
                Arr::get($this->attributes, 'ip_address', null)
            );
            $reply->save();
            error_log("[BotAnswer] Reply posted successfully (post ID: {$reply->id})");

            $discussion = Discussion::find($this->discussionId);
            if ($discussion) {
                $discussion->refreshCommentCount()->refreshLastPost()->save();
                error_log("[BotAnswer] Discussion metadata refreshed");
            }
        } catch (\Exception $e) {
            error_log("[BotAnswer] ERROR: " . $e->getMessage());
            error_log("[BotAnswer] Stack trace: " . $e->getTraceAsString());
            throw $e;
        }
    }
}

?>