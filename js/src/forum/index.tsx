import RelatedDiscussionList from "./components/RelatedDiscussionList";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import DiscussionPage from "flarum/forum/components/DiscussionPage";
import PostStream from "flarum/forum/components/PostStream";
import RelatedDocsList from "./components/RelatedDocsList";

app.initializers.add("badlogic-related-discussions", () => {
  extend(PostStream.prototype, "view", function (element) {
    const discussionId = this.discussion.id();
    element.children?.splice(
      1,
      0,
      <div class="badlogicRelated">
        <RelatedDiscussionList key={"badlogicRelatedDiscussions"} discussionId={discussionId}/>
      </div>
    );
  });
});
