import RelatedDiscussionState from "../states/RelatedDiscussionState";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Placeholder from "flarum/common/components/Placeholder";
import app from "flarum/forum/app";
import DiscussionListItem from "flarum/forum/components/DiscussionListItem";
import type Mithril from "mithril";
import RelatedDocsState from "../states/RelatedDocsState";
import Discussion from "flarum/common/models/Discussion";

export default class RelatedDocsList extends Component {
  docsState!: RelatedDocsState;
  discussion!: Discussion;

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);


    this.docsState = new RelatedDocsState(
      vnode.attrs.discussion
    );
    this.docsState.load();
  }

  content() {
    if (this.docsState.isLoading()) {
      return <LoadingIndicator />;
    }

    if (!this.docsState.getDocs().length) {
      return (
        <Placeholder
          text={app.translator.trans(
            "badlogic-related-discussions.forum.no_results"
          )}
        />
      );
    }

    return this.docsState.getDocs().map((doc, index) => {
      return (
        <div><a href={doc.docUri} target="_blank">{doc.docTitle.split(" - ")[0]}</a></div>
      );
    });
  }

  view() {
    return (
      <div class={`badlogicRelatedDiscussions`}>
        <h3>
          {app.translator.trans(
            "badlogic-related-discussions.forum.docs_list_title"
          )}
        </h3>
        <div>
          {this.content()}
        </div>
      </div>
    );
  }
}
