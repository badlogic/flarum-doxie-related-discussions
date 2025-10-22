# Flarum Doxie Related Discussions Extension

This Flarum extension integrates with [doxietwo](https://github.com/badlogic/doxietwo) to provide AI-powered related discussion suggestions and automated bot answers to new forum posts.

## Deployment

To deploy the latest version to the production server:

```bash
ssh -p 726 mario@jp
cd /srv/flarum
sudo su
./update-related.sh
cd storage/cache
rm -rf *
```

## Features

- **Related Discussions**: Shows relevant discussions from your forum based on semantic similarity using RAG (Retrieval Augmented Generation)
- **Automated Bot Answers**: Automatically posts AI-generated answers to new discussions in configured tags
- **Tag-based Source Mapping**: Map different forum tags to different knowledge sources
- **Caching**: Configurable caching to reduce API calls and improve performance

## Requirements

- Flarum 1.x
- PHP 7.4+
- A running [doxietwo](https://github.com/badlogic/doxietwo) instance
- A Flarum user account for the bot to post as

## Installation

```bash
composer require badlogic/flarum-ext-related-discussions:"*"
php flarum migrate
```

## Update

```bash
composer update badlogic/flarum-ext-related-discussions:"*"
php flarum migrate
php flarum cache:clear
```

## Remove

```bash
composer remove badlogic/flarum-ext-related-discussions
php flarum cache:clear
```

## Configuration

Navigate to **Admin Dashboard → Extensions → Related Discussions** to configure:

### Doxie API Configuration

- **Doxie API URL**: The base URL of your doxietwo API (e.g., `https://doxietwo.mariozechner.at/api`)
  - **Important**: Include `/api` at the end
- **Doxie Token**: Your doxietwo admin key (from doxietwo setup)
  - This is used for authentication with `Authorization: Bearer <token>` header

### Related Discussions Settings

- **Max. related discussions**: Maximum number of related discussions to show (default: 5)
- **Cache related discussions for N hours**: How long to cache related discussion results (default: 24 hours)
  - **Note**: Cache is automatically cleared when you save configuration changes
- **Related discussions Doxie source**: Select which doxietwo source to query for related discussions
  - This should typically be a source that contains your forum posts

### Bot Answer Settings

- **Forum user name of bot**: The Flarum username that will post bot answers
  - **Important**: This user must exist in your Flarum database
  - Create a dedicated bot user account (e.g., "ForumBot") before configuring
- **Bot to use for answering questions**: Select which doxietwo bot to use for generating answers
- **Test**: Click to test the bot in a new tab with the selected bot configuration

### Tag-based Source Mapping

For each forum tag, you can configure which doxietwo sources the bot should use when answering questions in that tag:

- Check the sources you want the bot to use for each tag
- Different tags can use different combinations of sources
- The bot will only answer in tags that have at least one source configured

## API Integration

The extension integrates with doxietwo through two main API endpoints:

### 1. Search Endpoint (`POST /api/search`)

Used for finding related discussions.

**Request**:
```json
{
  "sourceId": "1761146024854-b8ux36n",
  "query": "Discussion title and content...",
  "limit": 50
}
```

**Headers**:
```
Authorization: Bearer <adminKey>
```

**Response**:
```json
{
  "results": [
    {
      "docUri": "https://example.com/forum/d/12345",
      "docTitle": "Similar Discussion",
      "text": "Content excerpt...",
      "similarity": 0.85
    }
  ]
}
```

### 2. Query Endpoint (`POST /api/query`)

Used for generating bot answers.

**Request**:
```json
{
  "botId": "1761146281819-muvtznp",
  "question": "Title and content of new post",
  "sourceIds": ["source1", "source2"]
}
```

**Headers**:
```
Authorization: Bearer <adminKey>
```

**Response**:
```json
{
  "answer": "AI-generated answer text",
  "sources": [...],
  "debug": {...}
}
```

## How It Works

### Related Discussions

1. When a user views a discussion, the extension fetches semantically similar discussions from doxietwo
2. Results are cached for the configured duration to reduce API calls
3. Related discussions are displayed at the top of the discussion thread
4. The regex pattern `/forum\/d\/(\d+)/` extracts discussion IDs from docUris

### Bot Answers

1. When a **new discussion** is created (first post only):
   - The extension checks if the discussion's tag has configured sources
   - If sources are configured, it dispatches a job to generate a bot answer

2. The job:
   - Extracts the discussion title and content
   - Calls doxietwo's `/api/query` endpoint with the configured bot and sources
   - Posts the AI-generated answer as the configured bot user
   - Only posts if the answer doesn't contain "I can not help with that"

3. **Important**: Jobs run **synchronously** by default (queue driver: `sync`)
   - This means bot answers are posted immediately when a discussion is created
   - If you enable `blomstra/database-queue`, jobs will be queued and processed by a worker

## Caching

The extension uses Flarum's cache system to store related discussion results:

- **Cache Key Format**: `badlogicRelatedDiscussions{discussionId}`
- **TTL**: Configurable via "Cache related discussions for N hours"
- **Auto-Clear**: Cache is automatically cleared when you:
  - Save configuration changes in the admin UI
  - Click "Reset config"

### Manual Cache Clearing

```bash
php flarum cache:clear
```

## Queue System

By default, the extension uses Flarum's `sync` queue driver, which processes jobs immediately.

If you have `blomstra/database-queue` installed and enabled:
1. Jobs will be queued in the database
2. You need to run a queue worker to process them
3. The extension assumes `queue:work` is scheduled via `php flarum schedule:run`

## Debugging

### Enable Logging

The extension logs all operations to PHP error log at `/var/log/php.log`:

**Related Discussions Logs** (prefix: `[RelatedDiscussions]`):
```
[RelatedDiscussions] Filter called with value: 29289
[RelatedDiscussions] Config loaded, cache TTL: 24 hours
[RelatedDiscussions] Cache key: badlogicRelatedDiscussions29289
[RelatedDiscussions] Getting results for discussion 29289: Discussion Title
[RelatedDiscussions] Calling API: https://doxietwo.mariozechner.at/api/search
[RelatedDiscussions] Source ID: 1761146024854-b8ux36n
[RelatedDiscussions] Query length: 69
[RelatedDiscussions] API response: {...}
[RelatedDiscussions] Found 5 related discussions: ["123","456","789"]
[RelatedDiscussions] Applying filter with 5 IDs
```

**Bot Answer Logs** (prefix: `[BotAnswer]`):
```
[BotAnswer] Processing discussion 29291, tag: Announcements
[BotAnswer] Found bot user: ForumBot (ID: 2)
[BotAnswer] Sources for tag 'Announcements': ["source1","source2"]
[BotAnswer] Calling API: https://doxietwo.mariozechner.at/api/query
[BotAnswer] Bot ID: 1761146281819-muvtznp
[BotAnswer] Question length: 150
[BotAnswer] API response keys: ["answer","sources","debug"]
[BotAnswer] Got answer, length: 450
[BotAnswer] Reply posted successfully (post ID: 123)
[BotAnswer] Discussion metadata refreshed
```

### Common Issues

#### 1. No related discussions showing

**Symptoms**: Related discussions section is empty or shows "no results"

**Possible causes**:
- No similar discussions found (low similarity scores)
- Source is empty or doesn't contain forum posts
- API authentication failing
- Cache contains old results

**Solutions**:
- Check PHP error log for `[RelatedDiscussions]` errors
- Clear cache: `php flarum cache:clear`
- Verify source contains forum posts with correct docUri format
- Test API manually: `curl -H "Authorization: Bearer <token>" https://your-api/api/search`

#### 2. Bot not posting answers

**Symptoms**: New discussions don't get bot answers

**Possible causes**:
- **Bot user not configured or doesn't exist** (most common!)
- Tag has no sources configured
- Queue worker not running (if using database queue)
- API authentication failing
- Bot declined to answer (response contains "I can not help with that")

**Solutions**:
- Check PHP error log for `[BotAnswer]` entries
- **Verify bot user exists**: `SELECT * FROM users WHERE username = 'YourBotUser';`
- **Set bot username in admin UI** (don't leave it empty!)
- Verify tag-to-sources mapping in admin UI
- Check queue driver: `php flarum info | grep "Queue driver"`
- If using database queue, ensure worker is running

#### 3. "409 Conflict" when clearing cache

**Symptoms**: Admin UI shows "409 Conflict POST http://localhost/api/cache"

**Possible causes**:
- Cache directory permissions issue
- Cache files owned by different user than PHP process

**Solutions**:
```bash
# Fix cache directory permissions
chmod -R 777 storage/cache
```

#### 4. API calls failing

**Symptoms**: Logs show connection errors or 401/403 responses

**Possible causes**:
- Incorrect API URL (missing `/api` suffix)
- Invalid or expired admin key
- doxietwo server not running
- Network connectivity issues

**Solutions**:
- Verify API URL format: `https://your-domain.com/api` (with `/api` at end)
- Test authentication: `curl -H "Authorization: Bearer <token>" https://your-api/api/bots`
- Check doxietwo logs for incoming requests
- Verify doxietwo is running: `curl https://your-api/api/health`

#### 5. Opcache issues (development)

**Symptoms**: PHP changes not taking effect

**Solution**:
- The extension directory is blacklisted from opcache (see `opcacheblacklist.txt`)
- Changes should be picked up automatically
- If not, restart PHP-FPM or the app container

## Development

### File Structure

```
flarum-doxie-related-discussions/
├── src/
│   ├── AddAnswerToDiscussionJob.php    # Job for posting bot answers
│   ├── RelatedDiscussionsFilter.php    # Filter for querying related discussions
│   └── ...
├── js/
│   ├── src/
│   │   ├── admin/index.ts              # Admin UI component
│   │   └── forum/index.ts              # Forum UI component
│   ├── dist/                           # Compiled JavaScript
│   └── package.json
├── extend.php                          # Extension registration
└── README.md
```

### Building JavaScript

```bash
cd js
npm install
npm run build
```

### Testing Locally

1. Set up spine-forum-local development environment
2. Extension is symlinked via docker-compose.yml volume:
   ```yaml
   - ./flarum-ext-related-discussions:/usr/src/app/forum/vendor/badlogic/flarum-ext-related-discussions
   ```
3. Changes to PHP files are picked up automatically (opcache blacklist)
4. JavaScript changes require rebuild: `cd js && npm run build`
5. Restart app container to reload JavaScript: `docker compose restart app`

## Migration from Old Doxie

If migrating from the old doxie implementation:

### API Changes

- **Endpoint format**: Old used `/bots` and `/sources`, new uses `/api/bots` and `/api/sources`
- **Authentication**: Changed from `Authorization: <token>` to `Authorization: Bearer <token>`
- **Response format**: Old returned `{success: true, data: [...]}`, new returns data directly
- **Field names**: Changed from `_id` to `id` for all entities

### Type Changes

**Bot interface**:
```typescript
// Old
{
  _id: string,
  sources: string[],
  botName: string,
  ...
}

// New
{
  id: string,
  sourceIds: string[],
  name: string,
  model: object,
  ...
}
```

**Source interface**:
```typescript
// Old
{
  _id: string,
  name: string,
  description: string
}

// New
{
  id: string,
  name: string,
  endpointUrl: string,
  chunking: object,
  documentCount?: number
}
```

## License

MIT

## Support

For issues and questions:
- Check the debugging section above
- Review PHP error logs at `/var/log/php.log`
- Check doxietwo logs for API request/response details
- Open an issue on GitHub with logs and configuration details
