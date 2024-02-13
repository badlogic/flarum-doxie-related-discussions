import app from "flarum/admin/app";
import Component from "flarum/common/Component";
import { LitElement, PropertyValueMap, css, html, nothing, render } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit-html/directives/repeat.js";

const styles = `
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.gap-2 {
  gap: 0.5em;
}

.gap-4 {
  gap: 1em;
}

.w-full {
  width: 100%;
}

.h-full {
  height: 100%;
}

.self-start {
  align-self: flex-start;
}

.mt-4 {
  margin-top: 1em;
}

.items-center {
  align-items: center;
}

.sticky {
  position: sticky;
  top: 60px;
}

.text-xs	{font-size: 0.75rem; line-height: 1rem; }
.text-sm	{font-size: 0.875rem; line-height: 1.25rem; }
.text-base	{font-size: 1rem; line-height: 1.5rem; }
.text-lg	{font-size: 1.125rem; line-height: 1.75rem; }
.text-xl	{font-size: 1.25rem; line-height: 1.75rem; }
.font-semibold {font-weight: 600;}
`

export interface Source {
  _id?: string;
  name: string;
  description: string;
}

export interface Bot {
  _id?: string;
  sources: string[];
  name: string;
  description: string;
  systemPrompt: string;
  botName: string;
  botIcon?: string;
  botWelcome?: string;
  botFooter?: string;
  botCss?: string;
}

export interface RelatedDiscussionsConfig {
  doxieApiUrl: string;
  doxieApiToken: string;

  maxRelatedDiscussions: number;
  cacheHours: number;
  relatedDiscussionsSourceId: string;

  botUser: string;
  botId: string;
  tagsToSources: {tag: string, sources: string[]}[];
}

const defaultConfig: RelatedDiscussionsConfig = {
  maxRelatedDiscussions: 5,
  cacheHours: 24,
  doxieApiUrl: "",
  doxieApiToken: "",
  relatedDiscussionsSourceId: "",
  botUser: "",
  botId: "",
  tagsToSources: []
}

@customElement("related-discussions-settings")
export class RelatedDiscussionsSettings extends LitElement {
  @state()
  isLoading = true;

  @state()
  config: RelatedDiscussionsConfig = {...defaultConfig};

  @state()
  sources: Source[] = [];

  @state()
  bots: Bot[] = [];

  @state()
  tags: {name: string, description: string}[] = [];

  protected createRenderRoot(): HTMLElement | DocumentFragment {
      return this;
  }

  connectedCallback(): void {
      super.connectedCallback();
      this.parentElement?.parentElement?.querySelector(".Form-group")?.remove();
      this.load();
  }

  async load () {
    this.isLoading = true;
    this.requestUpdate();
    try {
      const config = app.data.settings["badlogic-related-discussions.config"];
      console.log(config);
      if (config && config.trim().length > 0) {
        this.config = JSON.parse(config);
      }

      if (this.config.doxieApiUrl.length > 0 && this.config.doxieApiToken.length > 0) {
        let response = await fetch(this.config.doxieApiUrl + "/bots", {headers: {"Authorization": this.config.doxieApiToken}});
        if (!response.ok) {
          alert("Could not fetch bots. Check Doxie API URL and token");
          return;
        }
        const bots = await response.json();
        if (!bots.success) {
          alert("Could not fetch bots. Check Doxie API URL and token");
          return;
        }
        this.bots = bots.data;

        response = await fetch(this.config.doxieApiUrl + "/sources", {headers: {"Authorization": this.config.doxieApiToken}});
        if (!response.ok) {
          alert("Could not fetch sources. Check Doxie API URL and token");
          return;
        }
        const sources = await response.json();
        if (!sources.success) {
          alert("Could not fetch sources. Check Doxie API URL and token");
          return;
        }
        this.sources = sources.data;

        const tagsResponse = await app.request({
          method: 'GET',
          url: app.forum.attribute('apiUrl') + '/tags'
        }) as any;
        this.tags = (tagsResponse.data as {attributes: {
          name: string;
          description: string;
        }}[]).map((tag) => {return {name: tag.attributes.name, description: tag.attributes.description}});
      }
    } catch (e) {
      console.error(e);
      alert("Could not load configuration");
    } finally {
      this.isLoading = false;
      this.requestUpdate();
    }
  }

  render() {
    const isSourceForTag = (tag: string, source: Source) => {
      return this.config.tagsToSources.some((tagToSources) => tagToSources.tag.toLowerCase() == tag.toLowerCase() && tagToSources.sources.some((other) => other == source._id));
    }

    const setSourceForTag = (tag: string, source: Source, ev: Event) => {
      let tagToSources = this.config.tagsToSources.find((tagToSources) => tagToSources.tag.toLowerCase() == tag.toLowerCase());
      if (!tagToSources) {
        tagToSources = {
          tag,
          sources: []
        }
        this.config.tagsToSources.push(tagToSources);
      }
      if ((ev.target as HTMLInputElement).checked) {
        tagToSources.sources.push(source._id!);
      } else {
        tagToSources.sources = tagToSources.sources.filter((other) => other != source._id!);
      }
      this.handleInput();
    }

    const getSourcesForTag = (tag: string) => {
      const config = this.config;
      const tagToSources = config.tagsToSources.find((tagToSources) => tagToSources.tag.toLowerCase() == tag.toLowerCase());
      const sources = tagToSources?.sources ?? [];
      console.log(sources);
      return sources;
    }

    const openTestTab = (botId: string, sources: string[]) => {
      const apiUrl = new URL(this.config.doxieApiUrl);
      const sourcesParam = encodeURIComponent(sources.join("|"));
      let url: string = "";
      if (apiUrl.hostname.includes("localhost") || apiUrl.host.includes("192.168.")) {
        url = "http://localhost:8080/answer/";
      } else {
        url = this.config.doxieApiUrl.replace("/api", "/answer/");
      }
      url +=  botId + (sources.length > 0 ? "?sources=" + sourcesParam : "");
      window.open(url, "_blank");
    }

    if (this.isLoading) return html`<div>Loading ...</div>`;
    return html`<style>${styles}</style><div class="flex flex-col gap-2" style="position: relative;" @change=${() => this.handleInput()} @input=${() => this.handleInput()}>
      <h2>Doxie Configuration</h2>
      <label class="font-semibold mt-4">Doxie API URL</label>
      <span>E.g. https://doxie.marioslab.io/api</span>
      <input id="doxieApiUrl" class="self-start w-full" value=${this.config.doxieApiUrl}>
      <label class="font-semibold mt-4">Doxie Token</label>
      <input id="doxieApiToken" class="self-start w-full" value=${this.config.doxieApiToken}>

      <div class="flex gap-2 items-center">
        <button class="self-start" @click=${() => this.reset()}>Reset config</button>
        <button class="self-start" @click=${() => this.save(this.bots.length == 0 && this.sources.length == 0 )}>Save</button>
      </div>

      ${this.bots.length > 0 && this.sources.length > 0 ? html`

      <h2>Related discussions</h2>
      <label class="font-semibold">Max. related discussions</label>
      <input id="maxRelatedDiscussions" type="number" min="1" class="self-start" value=${this.config.maxRelatedDiscussions}>
      <label class="font-semibold">Cache related discussions for N hours</label>
      <input id="cacheHours" type="number" min="0" class="self-start" value=${this.config.cacheHours}>
      <label class="font-semibold mt-4">Related discussions Doxie source</label>
      <span class="text-xs">Doxie source to fetch related discussions from</span>
      <select id="relatedDiscussionsSourceId" class="self-start">
        ${repeat(this.sources, (source) => html`<option value=${source._id!} ?selected=${this.config.relatedDiscussionsSourceId == source._id}>${source.name}</option>`)}
      </select>

      <h2>Answer bot</h2>
      <label class="font-semibold">Forum user name of bot</label>
      <input id="botUser" class="self-start">
      <label class="font-semibold">Bot to use for answering questions</label>
      <div class="flex items-center gap-2">
        <select id="botId" class="self-start" style="padding: 0.25em 0.5em;">
          ${repeat(this.bots, (bot) => html`<option value=${bot._id!} ?selected=${this.config.botId == bot._id}>${bot.name}</option>`)}
        </select>
        <button @click=${() => openTestTab(this.config.botId, [])}>Test</button>
      </div>
      <label class="font-semibold mt-4">Sources to use to answer questions with given tag</label>
      ${repeat(this.tags, (tag) => html`
        <div class="flex items-center gap-2 mt-4">
          <span class="font-semibold self-start" style="border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 5px; padding: 0.25em 0.5em;">${tag.name}</span>
          <button @click=${() => openTestTab(this.config.botId, getSourcesForTag(tag.name))}>Test</button>
        </div>
        <div class="flex flex-wrap gap-4">
          ${repeat(this.sources, (source) => html`<label class="flex items-center gap-2"><input type="checkbox" ?checked=${isSourceForTag(tag.name, source)} @change=${(ev: Event) => setSourceForTag(tag.name, source, ev)}>${source.name}</label>`)}
        </div>
      `)}
      `: html`<div></div>`}
    </div>`;
  }

  async reset() {
    const key = 'badlogic-related-discussions.config';
    const value = "";

    try {
      await app.request({
        method: 'POST',
        url: app.forum.attribute('apiUrl') + '/settings',
        body: { [key]: value },
        errorHandler: (error: any) => {
          console.error('Failed to save settings:', error);
          throw error;
        },
      });
      this.bots = [];
      this.sources = [];
      this.config = {...defaultConfig};
      this.load();
    } catch (e) {
      alert("Could not save settings");
      console.error('Error saving settings:', e);
    }
  }

  handleInput() {
    if (this.isLoading) return;
    this.config.doxieApiUrl = this.querySelector<HTMLInputElement>("#doxieApiUrl")!.value;
    if (this.config.doxieApiUrl.endsWith("/")) {
      this.config.doxieApiUrl = this.config.doxieApiUrl.substring(0, this.config.doxieApiUrl.length - 1);
    }
    this.config.doxieApiToken = this.querySelector<HTMLInputElement>("#doxieApiToken")!.value;

    if (this.bots.length > 0) {
      this.config.botUser = this.querySelector<HTMLInputElement>("#botUser")!.value;
      this.config.maxRelatedDiscussions = parseInt(this.querySelector<HTMLInputElement>("#maxRelatedDiscussions")!.value);
      this.config.cacheHours = parseInt(this.querySelector<HTMLInputElement>("#cacheHours")!.value);
      this.config.relatedDiscussionsSourceId = this.querySelector<HTMLSelectElement>("#relatedDiscussionsSourceId")!.value;

      this.config.botId = this.querySelector<HTMLSelectElement>("#botId")!.value;
    }
  }

  async save(reload=false) {
    const key = 'badlogic-related-discussions.config';
    const value = JSON.stringify(this.config);

    try {
      await app.request({
        method: 'POST',
        url: app.forum.attribute('apiUrl') + '/settings',
        body: { [key]: value },
        errorHandler: (error: any) => {
          console.error('Failed to save settings:', error);
          throw error;
        },
      });

      console.log('Settings saved successfully.');
      if(reload) {
        this.isLoading = true;
        this.requestUpdate();
        this.load();
      } else {
        this.requestUpdate();
      }
    } catch (error) {
      alert("Could not save settings");
      console.error('Error saving settings:', error);
      throw error;
    }
  }

}

class SettingsForm extends Component {
  view() {
    return m("div", { id: "lit-host" });
  }

  oncreate(vnode: any) {
    super.oncreate(vnode);
    const litHost = document.getElementById("lit-host");
    const litTemplate = html`<related-discussions-settings></related-discussions-settings>`;

    if (litHost) {
      render(litTemplate, litHost);
    }
  }
}

app.initializers.add("badlogic-related-discussions-custom-settings", () => {
  app.extensionData.for("badlogic-related-discussions").registerSetting(() => {
    return m(SettingsForm);
  });
});
