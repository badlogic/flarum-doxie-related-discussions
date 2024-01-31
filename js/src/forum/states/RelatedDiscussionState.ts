import Discussion from "flarum/common/models/Discussion";
import app from "flarum/forum/app";

export interface VectorDocument {
  docTitle: string;
  docUri: string;
}

export default class RelatedDiscussionState {
  discussionId: number;
  loading: boolean;
  discussions: Array<Discussion>;

  constructor(discussionId: number) {
    this.discussionId = discussionId;
    this.loading = true;
    this.discussions = [];
  }

  async load(): Promise<void> {
    try {
      const result = (await app.store.find("discussions", {
        "filter[badlogicRelatedDiscussions]": this.discussionId,
      } as any)) as any;
      this.discussions.push(...result);
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

  getDiscussions(): Array<Discussion> {
    return this.discussions;
  }
}
