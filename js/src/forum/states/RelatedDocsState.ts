import Discussion from "flarum/common/models/Discussion";
import app from "flarum/forum/app";

export interface VectorDocument {
  docTitle: string;
  docUri: string;
}

export default class RelatedDocsState {
  discussion: Discussion;
  loading: boolean;
  docs: Array<VectorDocument>;

  constructor(discussion: Discussion) {
    this.discussion = discussion;
    this.loading = true;
    this.docs = [];
  }

  async loadFirstPosts(discussionId: string, numberOfPosts: number) {
    try {
      const response = await app.store.find("posts", {
        filter: { discussion: discussionId },
        page: { limit: numberOfPosts },
      });

      return response;
    } catch (error) {
      console.error("Error loading posts:", error);
      return [];
    }
  }

  async load(): Promise<void> {
    const docsSettings = app.data.badlogicRelatedDocsSettings as {
      docsQueryUrl: string;
      maxDiscussions: number;
    };

    try {
      let query = "";
      const posts = await this.loadFirstPosts(this.discussion.id()!, 5);
      if (!posts) return;
      for (const post of posts) {
        if (post) query += post.attribute("content") ?? "";
        if (query.length > 7000) break;
      }
      const response = await fetch(docsSettings.docsQueryUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          k: 25,
          query,
        }),
      });
      if (!response.ok) throw new Error(await response.text());
      const result = await response.json();
      if (!result.success) throw new Error("Couldn't fetch related docs");
      const seenUris = new Set<string>();
      const uniqueDocuments = result.data
        .filter((doc: VectorDocument) => {
          if (!seenUris.has(doc.docUri)) {
            seenUris.add(doc.docUri);
            return true;
          }
          return false;
        })
        .splice(0, docsSettings.maxDiscussions);
      this.docs = uniqueDocuments;
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
      m.redraw();
    }
  }

  isLoading(): boolean {
    return this.loading;
  }

  getDocs(): Array<VectorDocument> {
    return this.docs;
  }
}
