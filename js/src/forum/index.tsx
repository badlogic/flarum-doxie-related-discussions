import RelatedDiscussionList from "./components/RelatedDiscussionList";
import { extend } from "flarum/common/extend";
import app from "flarum/forum/app";
import DiscussionPage from "flarum/forum/components/DiscussionPage";
import PostStream from "flarum/forum/components/PostStream";

alert("Hello world");

app.initializers.add("badlogic-related-discussions", () => {
  extend(PostStream.prototype, "view", function (element) {
    const allowGuests = app.forum.attribute(
      "badlogicRelatedDiscussionsAllowGuests"
    );

    if (!app.session.user && !allowGuests) {
      return;
    }

    const discussionId = this.discussion.id();
    const position: string = app.forum.attribute(
      "badlogicRelatedDiscussionsPosition"
    );
    const key = "badlogicRelatedDiscussions";

    if (position === "first_post") {
      element.children?.splice(
        1,
        0,
        <RelatedDiscussionList
          key={key}
          discussionId={discussionId}
          position={1}
        />
      );
    }

    if (position === "last_post") {
      element.children?.splice(
        element.children.length - 1,
        0,
        <RelatedDiscussionList
          key={key}
          discussionId={discussionId}
          position={2}
        />
      );
    }
  });

  extend(DiscussionPage.prototype, "mainContent", function (items) {
    const allowGuests = app.forum.attribute(
      "badlogicRelatedDiscussionsAllowGuests"
    );

    if (!app.session.user && !allowGuests) {
      return;
    }

    const discussionId = this.discussion?.id();
    const position: string = app.forum.attribute(
      "badlogicRelatedDiscussionsPosition"
    );

    if (position === "reply_block") {
      items.add(
        "badlogicRelatedDiscussions",
        <RelatedDiscussionList discussionId={discussionId} position={3} />
      );
    }
  });
});
