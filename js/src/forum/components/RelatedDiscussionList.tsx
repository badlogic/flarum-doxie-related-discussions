import RelatedDiscussionState from "../states/RelatedDiscussionState";
import Component from "flarum/common/Component";
import LoadingIndicator from "flarum/common/components/LoadingIndicator";
import Placeholder from "flarum/common/components/Placeholder";
import app from "flarum/forum/app";
import DiscussionListItem from "flarum/forum/components/DiscussionListItem";
import type Mithril from "mithril";
import classList from 'flarum/common/utils/classList';
import textContrastClass from 'flarum/common/helpers/textContrastClass';
import extract from 'flarum/common/utils/extract';
import Link from 'flarum/common/components/Link';

function sortTags(tags: any[]) {
  return tags.slice(0).sort((a, b) => {
    const aPos = a.position();
    const bPos = b.position();

    // If they're both secondary tags, sort them by their discussions count,
    // descending.
    if (aPos === null && bPos === null) return b.discussionCount() - a.discussionCount();

    // If just one is a secondary tag, then the primary tag should
    // come first.
    if (bPos === null) return -1;
    if (aPos === null) return 1;

    // If we've made it this far, we know they're both primary tags. So we'll
    // need to see if they have parents.
    const aParent = a.parent();
    const bParent = b.parent();

    // If they both have the same parent, then their positions are local,
    // so we can compare them directly.
    if (aParent === bParent) return aPos - bPos;
    // If they are both child tags, then we will compare the positions of their
    // parents.
    else if (aParent && bParent) return aParent.position()! - bParent.position()!;
    // If we are comparing a child tag with its parent, then we let the parent
    // come first. If we are comparing an unrelated parent/child, then we
    // compare both of the parents.
    else if (aParent) return aParent === b ? 1 : aParent.position()! - bPos;
    else if (bParent) return bParent === a ? -1 : aPos - bParent.position()!;

    return 0;
  });
}

function tagIcon(tag: any, attrs: any = {}, settings: any = {}) {
  const hasIcon = tag && tag.icon();
  const { useColor = true } = settings;

  attrs.className = classList([attrs.className, 'icon text-colored', hasIcon ? tag.icon() : 'TagIcon']);

  if (tag && useColor) {
    attrs.style = attrs.style || {};
    attrs.style['--color'] = tag.color();
  } else if (!tag) {
    attrs.className += ' untagged';
  }

  return hasIcon ? <i {...attrs} /> : <span {...attrs} />;
}

function tagLabel(tag?: any, attrs: any = {}) {
  attrs.style = attrs.style || {};
  attrs.className = 'TagLabel ' + (attrs.className || '');

  const link = extract(attrs, 'link');
  const tagText = tag ? tag.name() : app.translator.trans('flarum-tags.lib.deleted_tag_text');

  if (tag) {
    const color = tag.color();
    if (color) {
      attrs.style['--tag-bg'] = color;
      attrs.className = classList(attrs.className, 'colored', textContrastClass(color));
    }

    if (link) {
      attrs.title = tag.description() || '';
      attrs.href = app.route('tag', { tags: tag.slug() });
    }

    if (tag.isChild()) {
      attrs.className += ' TagLabel--child';
    }
  } else {
    attrs.className += ' untagged';
  }

  return m(
    link ? Link : 'span',
    attrs,
    <span className="TagLabel-text">
      {tag && tag.icon() && tagIcon(tag, { className: 'TagLabel-icon' }, { useColor: false })}
      <span className="TagLabel-name">{tagText}</span>
    </span>
  );
}

function tagsLabel(tags: any, attrs: any = {}) {
  const children = [];
  const { link, ...otherAttrs } = attrs;

  otherAttrs.className = classList('TagsLabel', otherAttrs.className);

  if (tags) {
    sortTags(tags).forEach((tag) => {
      if (tag || tags.length === 1) {
        children.push(tagLabel(tag, { link }));
      }
    });
  } else {
    children.push(tagLabel());
  }

  return <span {...otherAttrs}>{children}</span>;
}

export default class RelatedDiscussionList extends Component {
  relatedDiscussionState!: RelatedDiscussionState;
  discussionId!: number;

  oninit(vnode: Mithril.Vnode<this>) {
    super.oninit(vnode);

    this.relatedDiscussionState = new RelatedDiscussionState(
      vnode.attrs.discussionId
    );
    this.relatedDiscussionState.load();
  }

  content() {
    if (this.relatedDiscussionState.isLoading()) {
      return <span>...</span>;
    }

    if (!this.relatedDiscussionState.getDiscussions().length) {
      return (
        <span class="no-result">
          {app.translator.trans(
            "badlogic-related-discussions.forum.no_results"
          )}
        </span>
      );
    }

    return this.relatedDiscussionState.getDiscussions().map((discussion, index) => {
      return (
        <div className="badlogicRelatedDiscussions" style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
          <Link
              href={app.route.discussion(discussion)}
          >
              <span>{discussion.title()}</span>
          </Link>
          {tagsLabel(discussion.tags())}
        </div>
    );
    });
  }

  view() {
    if (!this.relatedDiscussionState.isLoading() && this.relatedDiscussionState.getDiscussions().length == 0) {
      return <div></div>
    }

    return (
      <div class={`badlogicRelated`}>
        <div
          class={`badlogicRelatedDiscussions`}
        >
          <span class="heading">
            {app.translator.trans(
              "badlogic-related-discussions.forum.discussion_list_title"
            )}
          </span>
          <div>
            {this.content()}
          </div>
        </div>
      </div>
    );
  }
}
