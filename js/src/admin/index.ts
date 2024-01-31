import app from "flarum/admin/app";

alert("Fuck p");

app.initializers.add("badlogic-related-discussions", () => {
  app.extensionData
    .for("badlogic-related-discussions")
    .registerSetting({
      setting: "badlogic-related-discussions.allow-guests",
      type: "boolean",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.allow_guests"
      ),
    })
    .registerSetting({
      setting: "badlogic-related-discussions.generator",
      type: "select",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.generator"
      ),
      options: {
        random: app.translator.trans(
          "badlogic-related-discussions.admin.settings.generator_options.random"
        ),
        title: app.translator.trans(
          "badlogic-related-discussions.admin.settings.generator_options.title"
        ),
      },
      default: "random",
      help: "",
    })
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
      setting: "badlogic-related-discussions.position",
      type: "select",
      label: app.translator.trans(
        "badlogic-related-discussions.admin.settings.position"
      ),
      options: {
        first_post: app.translator.trans(
          "badlogic-related-discussions.admin.settings.position_options.first_post"
        ),
        last_post: app.translator.trans(
          "badlogic-related-discussions.admin.settings.position_options.last_post"
        ),
        reply_block: app.translator.trans(
          "badlogic-related-discussions.admin.settings.position_options.reply_block"
        ),
      },
      default: "first_post",
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
    });
});
