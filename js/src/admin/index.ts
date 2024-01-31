import app from "flarum/admin/app";

app.initializers.add("badlogic-related-discussions", () => {
  app.extensionData
    .for("badlogic-related-discussions")
    .registerSetting({
      setting: "badlogic-related-discussions.max-discussions",
      type: "number",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.max_discussions"
      ),
      min: 1,
      help: app.translator.trans(
        "badlogic-related-discussions.admin.settings.max_discussions_help"
      ),
    })
    .registerSetting({
      setting: "badlogic-related-discussions.cache",
      type: "text",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.cache"
      ),
      help: app.translator.trans(
        "badlogic-related-discussions.admin.settings.cache_help"
      ),
      placeholder: "0d0h0m",
    })
    .registerSetting({
      setting: "badlogic-related-discussions.forum-query-url",
      type: "text",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.forum-query-url"
      ),
      help: app.translator.trans(
        "badlogic-related-discussions.admin.settings.forum-query-url-help"
      ),
      placeholder: "",
    })
    .registerSetting({
      setting: "badlogic-related-discussions.docs-query-url",
      type: "text",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.docs-query-url"
      ),
      help: app.translator.trans(
        "badlogic-related-discussions.admin.settings.docs-query-url-help"
      ),
      placeholder: "",
    });
});
