/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/index.ts":
/*!****************************!*\
  !*** ./src/admin/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelatedDiscussionsSettings: () => (/* binding */ RelatedDiscussionsSettings)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerDefineProperty */ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/applyDecoratedDescriptor */ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js");
/* harmony import */ var _babel_runtime_helpers_esm_initializerWarningHelper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/initializerWarningHelper */ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lit/decorators.js */ "./node_modules/lit/decorators.js");
/* harmony import */ var lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-html/directives/repeat.js */ "./node_modules/lit-html/development/directives/repeat.js");







var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;






var styles = "\n.flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.gap-2 {\n  gap: 0.5em;\n}\n\n.gap-4 {\n  gap: 1em;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.self-start {\n  align-self: flex-start;\n}\n\n.mt-4 {\n  margin-top: 1em;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.text-xs\t{font-size: 0.75rem; line-height: 1rem; }\n.text-sm\t{font-size: 0.875rem; line-height: 1.25rem; }\n.text-base\t{font-size: 1rem; line-height: 1.5rem; }\n.text-lg\t{font-size: 1.125rem; line-height: 1.75rem; }\n.text-xl\t{font-size: 1.25rem; line-height: 1.75rem; }\n.font-semibold {font-weight: 600;}\n";
var RelatedDiscussionsSettings = (_dec = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.customElement)("related-discussions-settings"), _dec2 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec3 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec4 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec5 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec6 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec7 = (0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_11__.state)(), _dec(_class = (_class2 = /*#__PURE__*/function (_LitElement) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(RelatedDiscussionsSettings, _LitElement);
  function RelatedDiscussionsSettings() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _LitElement.call.apply(_LitElement, [this].concat(args)) || this;
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "isLoading", _descriptor, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "saved", _descriptor2, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "config", _descriptor3, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "sources", _descriptor4, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "bots", _descriptor5, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    (0,_babel_runtime_helpers_esm_initializerDefineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_this, "tags", _descriptor6, (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }
  var _proto = RelatedDiscussionsSettings.prototype;
  _proto.createRenderRoot = function createRenderRoot() {
    return this;
  };
  _proto.connectedCallback = function connectedCallback() {
    var _this$parentElement, _this$parentElement$p, _this$parentElement$p2;
    _LitElement.prototype.connectedCallback.call(this);
    (_this$parentElement = this.parentElement) == null ? void 0 : (_this$parentElement$p = _this$parentElement.parentElement) == null ? void 0 : (_this$parentElement$p2 = _this$parentElement$p.querySelector(".Form-group")) == null ? void 0 : _this$parentElement$p2.remove();
    this.load();
  };
  _proto.load = /*#__PURE__*/function () {
    var _load = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee() {
      var config, response, bots, sources, tagsResponse;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            config = (flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().data.settings["badlogic-related-discussions.config"]);
            console.log(config);
            if (config && config.trim().length > 0) {
              this.config = JSON.parse(config);
            }
            this.config.doxieApiUrl = "http://192.168.1.12:3333/api";
            if (!(this.config.doxieApiUrl.length > 0 && this.config.doxieApiToken.length > 0)) {
              _context.next = 36;
              break;
            }
            _context.next = 8;
            return fetch(this.config.doxieApiUrl + "/bots", {
              headers: {
                "Authorization": this.config.doxieApiToken
              }
            });
          case 8:
            response = _context.sent;
            if (response.ok) {
              _context.next = 12;
              break;
            }
            alert("Could not fetch bots. Check Doxie API URL and token");
            return _context.abrupt("return");
          case 12:
            _context.next = 14;
            return response.json();
          case 14:
            bots = _context.sent;
            if (bots.success) {
              _context.next = 18;
              break;
            }
            alert("Could not fetch bots. Check Doxie API URL and token");
            return _context.abrupt("return");
          case 18:
            this.bots = bots.data;
            _context.next = 21;
            return fetch(this.config.doxieApiUrl + "/sources", {
              headers: {
                "Authorization": this.config.doxieApiToken
              }
            });
          case 21:
            response = _context.sent;
            if (response.ok) {
              _context.next = 25;
              break;
            }
            alert("Could not fetch sources. Check Doxie API URL and token");
            return _context.abrupt("return");
          case 25:
            _context.next = 27;
            return response.json();
          case 27:
            sources = _context.sent;
            if (sources.success) {
              _context.next = 31;
              break;
            }
            alert("Could not fetch sources. Check Doxie API URL and token");
            return _context.abrupt("return");
          case 31:
            this.sources = sources.data;
            _context.next = 34;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().request({
              method: 'GET',
              url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().forum.attribute('apiUrl') + '/tags'
            });
          case 34:
            tagsResponse = _context.sent;
            this.tags = tagsResponse.data.map(function (tag) {
              return {
                name: tag.attributes.name,
                description: tag.attributes.description
              };
            });
          case 36:
            _context.next = 42;
            break;
          case 38:
            _context.prev = 38;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);
            alert("Could not load configuration");
          case 42:
            _context.prev = 42;
            this.isLoading = false;
            this.requestUpdate();
            return _context.finish(42);
          case 46:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[0, 38, 42, 46]]);
    }));
    function load() {
      return _load.apply(this, arguments);
    }
    return load;
  }();
  _proto.render = function render() {
    var _this2 = this;
    var isSourceForTag = function isSourceForTag(tag, source) {
      return _this2.config.tagsToSources.some(function (tagToSources) {
        return tagToSources.tag.toLowerCase() == tag.toLowerCase() && tagToSources.sources.some(function (other) {
          return other == source._id;
        });
      });
    };
    var setSourceForTag = function setSourceForTag(tag, source, ev) {
      var tagToSources = _this2.config.tagsToSources.find(function (tagToSources) {
        return tagToSources.tag.toLowerCase() == tag.toLowerCase();
      });
      if (!tagToSources) {
        tagToSources = {
          tag: tag,
          sources: []
        };
        _this2.config.tagsToSources.push(tagToSources);
      }
      if (ev.target.checked) {
        tagToSources.sources.push(source._id);
      } else {
        tagToSources.sources = tagToSources.sources.filter(function (other) {
          return other != tag;
        });
      }
      _this2.handleInput();
    };
    var getSourcesForTag = function getSourcesForTag(tag) {
      var _tagToSources$sources;
      var config = _this2.config;
      var tagToSources = config.tagsToSources.find(function (tagToSources) {
        return tagToSources.tag.toLowerCase() == tag.toLowerCase();
      });
      var sources = (_tagToSources$sources = tagToSources == null ? void 0 : tagToSources.sources) != null ? _tagToSources$sources : [];
      console.log(sources);
      return sources;
    };
    var openTestTab = function openTestTab(botId, sources) {
      var apiUrl = new URL(_this2.config.doxieApiUrl);
      var sourcesParam = encodeURIComponent(sources.join("|"));
      var url = "";
      if (apiUrl.hostname.includes("localhost") || apiUrl.host.includes("192.168.")) {
        url = "http://localhost:8080/answer/";
      } else {
        url = _this2.config.doxieApiUrl.replace("/api", "/answer/");
      }
      url += botId + (sources.length > 0 ? "?sources=" + sourcesParam : "");
      window.open(url, "_blank");
    };
    if (this.isLoading) return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<div>Loading ...</div>"])));
    return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<style>", "</style><div class=\"flex flex-col gap-2\" class=\"width: 320px\" @change=", " @input=", ">\n      <h2>Doxie Configuration</h2>\n      <label class=\"font-semibold mt-4\">Doxie API URL</label>\n      <span>E.g. https://doxie.marioslab.io/api</span>\n      <input id=\"doxieApiUrl\" class=\"self-start w-full\" value=", ">\n      <label class=\"font-semibold mt-4\">Doxie Token</label>\n      <input id=\"doxieApiToken\" class=\"self-start w-full\" value=", ">\n\n      ", "\n    </div>"])), styles, function () {
      return _this2.handleInput();
    }, function () {
      return _this2.handleInput();
    }, this.config.doxieApiUrl, this.config.doxieApiToken, this.bots.length > 0 && this.sources.length > 0 ? (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n      <h2>Related discussions</h2>\n      <label class=\"font-semibold\">Max. related discussions</label>\n      <input id=\"maxRelatedDiscussions\" type=\"number\" min=\"1\" class=\"self-start\" value=", ">\n      <label class=\"font-semibold\">Cache related discussions for N hours</label>\n      <input id=\"cacheHours\" type=\"number\" min=\"0\" class=\"self-start\" value=", ">\n      <label class=\"font-semibold mt-4\">Related discussions Doxie source</label>\n      <span class=\"text-xs\">Doxie source to fetch related discussions from</span>\n      <select id=\"relatedDiscussionsSourceId\" class=\"self-start\">\n        ", "\n      </select>\n\n      <h2>Answer bot</h2>\n      <label class=\"font-semibold\">Bot to use for answering questions</label>\n      <div class=\"flex items-center gap-2\">\n        <select id=\"botId\" class=\"self-start\" style=\"padding: 0.25em 0.5em;\">\n          ", "\n        </select>\n        <button @click=", ">Test</button>\n      </div>\n      <label class=\"font-semibold mt-4\">Sources to use to answer questions with given tag</label>\n      ", "\n      "])), this.config.maxRelatedDiscussions, this.config.cacheHours, (0,lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_12__.repeat)(this.sources, function (source) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<option value=", " ?selected=", ">", "</option>"])), source._id, _this2.config.relatedDiscussionsSourceId == source._id, source.name);
    }), (0,lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_12__.repeat)(this.bots, function (bot) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<option value=", " ?selected=", ">", "</option>"])), bot._id, _this2.config.botId == bot._id, bot.name);
    }), function () {
      return openTestTab(_this2.config.botId, []);
    }, (0,lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_12__.repeat)(this.tags, function (tag) {
      return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        <div class=\"flex items-center gap-2 mt-4\">\n          <span class=\"font-semibold self-start\" style=\"border: 1px solid rgba(0, 0, 0, 0.3); border-radius: 5px; padding: 0.25em 0.5em;\">", "</span>\n          <button @click=", ">Test</button>\n        </div>\n        <div class=\"flex gap-4\">\n          ", "\n        </div>\n      "])), tag.name, function () {
        return openTestTab(_this2.config.botId, getSourcesForTag(tag.name));
      }, (0,lit_html_directives_repeat_js__WEBPACK_IMPORTED_MODULE_12__.repeat)(_this2.sources, function (source) {
        return (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<label class=\"flex items-center gap-2\"><input type=\"checkbox\" ?checked=", " @change=", ">", "</label>"])), isSourceForTag(tag.name, source), function (ev) {
          return setSourceForTag(tag.name, source, ev);
        }, source.name);
      }));
    })) : (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<div></div>"]))));
  };
  _proto.handleInput = function handleInput() {
    if (this.isLoading) return;
    this.config.doxieApiUrl = this.querySelector("#doxieApiUrl").value;
    if (this.config.doxieApiUrl.endsWith("/")) {
      this.config.doxieApiUrl = this.config.doxieApiUrl.substring(0, this.config.doxieApiUrl.length - 1);
    }
    this.config.doxieApiToken = this.querySelector("#doxieApiToken").value;
    this.config.maxRelatedDiscussions = parseInt(this.querySelector("#maxRelatedDiscussions").value);
    this.config.cacheHours = parseInt(this.querySelector("#cacheHours").value);
    this.config.relatedDiscussionsSourceId = this.querySelector("#relatedDiscussionsSourceId").value;
    this.config.botId = this.querySelector("#botId").value;
    this.save();
  };
  _proto.save = /*#__PURE__*/function () {
    var _save = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().mark(function _callee2() {
      var _this3 = this;
      var key, value, _body;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            key = 'badlogic-related-discussions.config';
            value = JSON.stringify(this.config);
            _context2.prev = 2;
            _context2.next = 5;
            return flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().request({
              method: 'POST',
              url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().forum.attribute('apiUrl') + '/settings',
              body: (_body = {}, _body[key] = value, _body),
              errorHandler: function errorHandler(error) {
                console.error('Failed to save settings:', error);
                throw error;
              }
            });
          case 5:
            console.log('Settings saved successfully.');
            this.saved = true;
            this.requestUpdate();
            setTimeout(function () {
              _this3.saved = false;
              _this3.requestUpdate();
            }, 3000);
            _context2.next = 16;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            alert("Could not save settings");
            console.error('Error saving settings:', _context2.t0);
            throw _context2.t0;
          case 16:
          case "end":
            return _context2.stop();
        }
      }, _callee2, this, [[2, 11]]);
    }));
    function save() {
      return _save.apply(this, arguments);
    }
    return save;
  }();
  return RelatedDiscussionsSettings;
}(lit__WEBPACK_IMPORTED_MODULE_10__.LitElement), (_descriptor = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "isLoading", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return true;
  }
}), _descriptor2 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "saved", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return false;
  }
}), _descriptor3 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "config", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return {
      maxRelatedDiscussions: 5,
      cacheHours: 24,
      doxieApiUrl: "",
      doxieApiToken: "",
      relatedDiscussionsSourceId: "",
      botId: "",
      tagsToSources: []
    };
  }
}), _descriptor4 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "sources", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor5 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "bots", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor6 = (0,_babel_runtime_helpers_esm_applyDecoratedDescriptor__WEBPACK_IMPORTED_MODULE_5__["default"])(_class2.prototype, "tags", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return [];
  }
})), _class2)) || _class);
var SettingsForm = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(SettingsForm, _Component);
  function SettingsForm() {
    return _Component.apply(this, arguments) || this;
  }
  var _proto2 = SettingsForm.prototype;
  _proto2.view = function view() {
    return m("div", {
      id: "lit-host"
    });
  };
  _proto2.oncreate = function oncreate(vnode) {
    _Component.prototype.oncreate.call(this, vnode);
    var litHost = document.getElementById("lit-host");
    var litTemplate = (0,lit__WEBPACK_IMPORTED_MODULE_10__.html)(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(["<related-discussions-settings></related-discussions-settings>"])));
    if (litHost) {
      (0,lit__WEBPACK_IMPORTED_MODULE_10__.render)(litTemplate, litHost);
    }
  };
  return SettingsForm;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_9___default()));
flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().initializers.add("badlogic-related-discussions-custom-settings", function () {
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_8___default().extensionData["for"]("badlogic-related-discussions").registerSetting(function () {
    return m(SettingsForm);
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"]);
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/applyDecoratedDescriptor.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _applyDecoratedDescriptor)
/* harmony export */ });
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;
  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }
  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);
  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }
  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }
  return desc;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _construct)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if ((0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/initializerDefineProperty.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _initializerDefineProperty)
/* harmony export */ });
function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/initializerWarningHelper.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _initializerWarningHelper)
/* harmony export */ });
function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.');
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeFunction)
/* harmony export */ });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _taggedTemplateLiteralLoose)
/* harmony export */ });
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  strings.raw = raw;
  return strings;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _wrapNativeSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !(0,_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return (0,_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/css-tag.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/css-tag.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* binding */ CSSResult),
/* harmony export */   adoptStyles: () => (/* binding */ adoptStyles),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   getCompatibleStyle: () => (/* binding */ getCompatibleStyle),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* binding */ supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* binding */ unsafeCSS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var NODE_MODE = false;
// Allows minifiers to rename references to globalThis
var global = globalThis;
/**
 * Whether the current browser supports `adoptedStyleSheets`.
 */
var supportsAdoptingStyleSheets = global.ShadowRoot && (global.ShadyCSS === undefined || global.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
var constructionToken = Symbol();
var cssTagCache = new WeakMap();
/**
 * A container for a string of CSS text, that may be used to create a CSSStyleSheet.
 *
 * CSSResult is the return value of `css`-tagged template literals and
 * `unsafeCSS()`. In order to ensure that CSSResults are only created via the
 * `css` tag and `unsafeCSS()`, CSSResult cannot be constructed directly.
 */
var CSSResult = /*#__PURE__*/function () {
  function CSSResult(cssText, strings, safeToken) {
    // This property needs to remain unminified.
    this['_$cssResult$'] = true;
    if (safeToken !== constructionToken) {
      throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
    }
    this.cssText = cssText;
    this._strings = strings;
  }
  // This is a getter so that it's lazy. In practice, this means stylesheets
  // are not created until the first element instance is made.
  var _proto = CSSResult.prototype;
  _proto.toString = function toString() {
    return this.cssText;
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CSSResult, [{
    key: "styleSheet",
    get: function get() {
      // If `supportsAdoptingStyleSheets` is true then we assume CSSStyleSheet is
      // constructable.
      var styleSheet = this._styleSheet;
      var strings = this._strings;
      if (supportsAdoptingStyleSheets && styleSheet === undefined) {
        var cacheable = strings !== undefined && strings.length === 1;
        if (cacheable) {
          styleSheet = cssTagCache.get(strings);
        }
        if (styleSheet === undefined) {
          (this._styleSheet = styleSheet = new CSSStyleSheet()).replaceSync(this.cssText);
          if (cacheable) {
            cssTagCache.set(strings, styleSheet);
          }
        }
      }
      return styleSheet;
    }
  }]);
  return CSSResult;
}();
var textFromCSSResult = function textFromCSSResult(value) {
  // This property needs to remain unminified.
  if (value['_$cssResult$'] === true) {
    return value.cssText;
  } else if (typeof value === 'number') {
    return value;
  } else {
    throw new Error("Value passed to 'css' function must be a 'css' function result: " + (value + ". Use 'unsafeCSS' to pass non-literal values, but take care ") + "to ensure page security.");
  }
};
/**
 * Wrap a value for interpolation in a {@linkcode css} tagged template literal.
 *
 * This is unsafe because untrusted CSS text can be used to phone home
 * or exfiltrate data to an attacker controlled site. Take care to only use
 * this with trusted input.
 */
var unsafeCSS = function unsafeCSS(value) {
  return new CSSResult(typeof value === 'string' ? value : String(value), undefined, constructionToken);
};
/**
 * A template literal tag which can be used with LitElement's
 * {@linkcode LitElement.styles} property to set element styles.
 *
 * For security reasons, only literal string values and number may be used in
 * embedded expressions. To incorporate non-literal values {@linkcode unsafeCSS}
 * may be used inside an expression.
 */
var css = function css(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  var cssText = strings.length === 1 ? strings[0] : values.reduce(function (acc, v, idx) {
    return acc + textFromCSSResult(v) + strings[idx + 1];
  }, strings[0]);
  return new CSSResult(cssText, strings, constructionToken);
};
/**
 * Applies the given styles to a `shadowRoot`. When Shadow DOM is
 * available but `adoptedStyleSheets` is not, styles are appended to the
 * `shadowRoot` to [mimic spec behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
 * Note, when shimming is used, any styles that are subsequently placed into
 * the shadowRoot should be placed *before* any shimmed adopted styles. This
 * will match spec behavior that gives adopted sheets precedence over styles in
 * shadowRoot.
 */
var adoptStyles = function adoptStyles(renderRoot, styles) {
  if (supportsAdoptingStyleSheets) {
    renderRoot.adoptedStyleSheets = styles.map(function (s) {
      return s instanceof CSSStyleSheet ? s : s.styleSheet;
    });
  } else {
    for (var _iterator = _createForOfIteratorHelperLoose(styles), _step; !(_step = _iterator()).done;) {
      var s = _step.value;
      var style = document.createElement('style');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      var nonce = global['litNonce'];
      if (nonce !== undefined) {
        style.setAttribute('nonce', nonce);
      }
      style.textContent = s.cssText;
      renderRoot.appendChild(style);
    }
  }
};
var cssResultFromStyleSheet = function cssResultFromStyleSheet(sheet) {
  var cssText = '';
  for (var _iterator2 = _createForOfIteratorHelperLoose(sheet.cssRules), _step2; !(_step2 = _iterator2()).done;) {
    var rule = _step2.value;
    cssText += rule.cssText;
  }
  return unsafeCSS(cssText);
};
var getCompatibleStyle = supportsAdoptingStyleSheets || NODE_MODE && global.CSSStyleSheet === undefined ? function (s) {
  return s;
} : function (s) {
  return s instanceof CSSStyleSheet ? cssResultFromStyleSheet(s) : s;
};

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/base.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/base.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   desc: () => (/* binding */ desc)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Wraps up a few best practices when returning a property descriptor from a
 * decorator.
 *
 * Marks the defined property as configurable, and enumerable, and handles
 * the case where we have a busted Reflect.decorate zombiefill (e.g. in Angular
 * apps).
 *
 * @internal
 */
var desc = function desc(obj, name, descriptor) {
  // For backwards compatibility, we keep them configurable and enumerable.
  descriptor.configurable = true;
  descriptor.enumerable = true;
  if (
  // We check for Reflect.decorate each time, in case the zombiefill
  // is applied via lazy loading some Angular code.
  Reflect.decorate && typeof name !== 'object') {
    // If we're called as a legacy decorator, and Reflect.decorate is present
    // then we have no guarantees that the returned descriptor will be
    // defined on the class, so we must apply it directly ourselves.
    Object.defineProperty(obj, name, descriptor);
  }
  return descriptor;
};

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/custom-element.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* binding */ customElement)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
var customElement = function customElement(tagName) {
  return function (classOrTarget, context) {
    if (context !== undefined) {
      context.addInitializer(function () {
        customElements.define(tagName, classOrTarget);
      });
    } else {
      customElements.define(tagName, classOrTarget);
    }
  };
};

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/event-options.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/event-options.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   eventOptions: () => (/* binding */ eventOptions)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Adds event listener options to a method used as an event listener in a
 * lit-html template.
 *
 * @param options An object that specifies event listener options as accepted by
 * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
 *
 * Current browsers support the `capture`, `passive`, and `once` options. See:
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
 *
 * ```ts
 * class MyElement {
 *   clicked = false;
 *
 *   render() {
 *     return html`
 *       <div @click=${this._onClick}>
 *         <button></button>
 *       </div>
 *     `;
 *   }
 *
 *   @eventOptions({capture: true})
 *   _onClick(e) {
 *     this.clicked = true;
 *   }
 * }
 * ```
 * @category Decorator
 */
function eventOptions(options) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (protoOrValue, nameOrContext) {
    var method = typeof protoOrValue === 'function' ? protoOrValue : protoOrValue[nameOrContext];
    Object.assign(method, options);
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/property.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   property: () => (/* binding */ property),
/* harmony export */   standardProperty: () => (/* binding */ standardProperty)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _reactive_element_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reactive-element.js */ "./node_modules/@lit/reactive-element/development/reactive-element.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

var DEV_MODE = true;
var issueWarning;
if (DEV_MODE) {
  var _globalThis$litIssued;
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  var issuedWarnings = (_globalThis$litIssued = globalThis.litIssuedWarnings) != null ? _globalThis$litIssued : globalThis.litIssuedWarnings = new Set();
  // Issue a warning, if we haven't already.
  issueWarning = function issueWarning(code, warning) {
    warning += " See https://lit.dev/msg/" + code + " for more information.";
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
var legacyProperty = function legacyProperty(options, proto, name) {
  var hasOwnProperty = proto.hasOwnProperty(name);
  proto.constructor.createProperty(name, hasOwnProperty ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    wrapped: true
  }) : options);
  // For accessors (which have a descriptor on the prototype) we need to
  // return a descriptor, otherwise TypeScript overwrites the descriptor we
  // define in createProperty() with the original descriptor. We don't do this
  // for fields, which don't have a descriptor, because this could overwrite
  // descriptor defined by other decorators.
  return hasOwnProperty ? Object.getOwnPropertyDescriptor(proto, name) : undefined;
};
// This is duplicated from a similar variable in reactive-element.ts, but
// actually makes sense to have this default defined with the decorator, so
// that different decorators could have different defaults.
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: _reactive_element_js__WEBPACK_IMPORTED_MODULE_1__.defaultConverter,
  reflect: false,
  hasChanged: _reactive_element_js__WEBPACK_IMPORTED_MODULE_1__.notEqual
};
/**
 * Wraps a class accessor or setter so that `requestUpdate()` is called with the
 * property name and old value when the accessor is set.
 */
var standardProperty = function standardProperty(options, target, context) {
  if (options === void 0) {
    options = defaultPropertyDeclaration;
  }
  var kind = context.kind,
    metadata = context.metadata;
  if (DEV_MODE && metadata == null) {
    issueWarning('missing-class-metadata', "The class " + target + " is missing decorator metadata. This " + "could mean that you're using a compiler that supports decorators " + "but doesn't support decorator metadata, such as TypeScript 5.1. " + "Please update your compiler.");
  }
  // Store the property options
  var properties = globalThis.litPropertyMetadata.get(metadata);
  if (properties === undefined) {
    globalThis.litPropertyMetadata.set(metadata, properties = new Map());
  }
  properties.set(context.name, options);
  if (kind === 'accessor') {
    // Standard decorators cannot dynamically modify the class, so we can't
    // replace a field with accessors. The user must use the new `accessor`
    // keyword instead.
    var name = context.name;
    return {
      set: function set(v) {
        var oldValue = target.get.call(this);
        target.set.call(this, v);
        this.requestUpdate(name, oldValue, options);
      },
      init: function init(v) {
        if (v !== undefined) {
          this._$changeProperty(name, undefined, options);
        }
        return v;
      }
    };
  } else if (kind === 'setter') {
    var _name = context.name;
    return function (value) {
      var oldValue = this[_name];
      target.call(this, value);
      this.requestUpdate(_name, oldValue, options);
    };
  }
  throw new Error("Unsupported decorator location: " + kind);
};
/**
 * A class field or accessor decorator which creates a reactive property that
 * reflects a corresponding attribute value. When a decorated property is set
 * the element will update and render. A {@linkcode PropertyDeclaration} may
 * optionally be supplied to configure property features.
 *
 * This decorator should only be used for public fields. As public fields,
 * properties should be considered as primarily settable by element users,
 * either via attribute or the property itself.
 *
 * Generally, properties that are changed by the element should be private or
 * protected fields and should use the {@linkcode state} decorator.
 *
 * However, sometimes element code does need to set a public property. This
 * should typically only be done in response to user interaction, and an event
 * should be fired informing the user; for example, a checkbox sets its
 * `checked` property when clicked and fires a `changed` event. Mutating public
 * properties should typically not be done for non-primitive (object or array)
 * properties. In other cases when an element needs to manage state, a private
 * property decorated via the {@linkcode state} decorator should be used. When
 * needed, state properties can be initialized via public properties to
 * facilitate complex interactions.
 *
 * ```ts
 * class MyElement {
 *   @property({ type: Boolean })
 *   clicked = false;
 * }
 * ```
 * @category Decorator
 * @ExportDecoratedItems
 */
function property(options) {
  return function (protoOrTarget, nameOrContext
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) {
    return typeof nameOrContext === 'object' ? standardProperty(options, protoOrTarget, nameOrContext) : legacyProperty(options, protoOrTarget, nameOrContext);
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-all.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-all.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAll: () => (/* binding */ queryAll)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Shared fragment used to generate empty NodeLists when a render root is
// undefined
var fragment;
/**
 * A property decorator that converts a class property into a getter
 * that executes a querySelectorAll on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See:
 * https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
 *
 * ```ts
 * class MyElement {
 *   @queryAll('div')
 *   divs: NodeListOf<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function queryAll(selector) {
  return function (obj, name) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get: function get() {
        var _this$renderRoot, _fragment;
        var container = (_this$renderRoot = this.renderRoot) != null ? _this$renderRoot : (_fragment = fragment) != null ? _fragment : fragment = document.createDocumentFragment();
        return container.querySelectorAll(selector);
      }
    });
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedElements: () => (/* binding */ queryAssignedElements)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedElements` of the given `slot`. Provides a declarative
 * way to use
 * [`HTMLSlotElement.assignedElements`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements).
 *
 * Can be passed an optional {@linkcode QueryAssignedElementsOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedElements({ slot: 'list' })
 *   listItems!: Array<HTMLElement>;
 *   @queryAssignedElements()
 *   unnamedSlotEls!: Array<HTMLElement>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *       <slot></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note, the type of this property should be annotated as `Array<HTMLElement>`.
 *
 * @category Decorator
 */
function queryAssignedElements(options) {
  return function (obj, name) {
    var _ref = options != null ? options : {},
      slot = _ref.slot,
      selector = _ref.selector;
    var slotSelector = "slot" + (slot ? "[name=" + slot + "]" : ':not([name])');
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get: function get() {
        var _this$renderRoot, _slotEl$assignedEleme;
        var slotEl = (_this$renderRoot = this.renderRoot) == null ? void 0 : _this$renderRoot.querySelector(slotSelector);
        var elements = (_slotEl$assignedEleme = slotEl == null ? void 0 : slotEl.assignedElements(options)) != null ? _slotEl$assignedEleme : [];
        return selector === undefined ? elements : elements.filter(function (node) {
          return node.matches(selector);
        });
      }
    });
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAssignedNodes: () => (/* binding */ queryAssignedNodes)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * A property decorator that converts a class property into a getter that
 * returns the `assignedNodes` of the given `slot`.
 *
 * Can be passed an optional {@linkcode QueryAssignedNodesOptions} object.
 *
 * Example usage:
 * ```ts
 * class MyElement {
 *   @queryAssignedNodes({slot: 'list', flatten: true})
 *   listItems!: Array<Node>;
 *
 *   render() {
 *     return html`
 *       <slot name="list"></slot>
 *     `;
 *   }
 * }
 * ```
 *
 * Note the type of this property should be annotated as `Array<Node>`. Use the
 * queryAssignedElements decorator to list only elements, and optionally filter
 * the element list using a CSS selector.
 *
 * @category Decorator
 */
function queryAssignedNodes(options) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (obj, name) {
    var _ref = options != null ? options : {},
      slot = _ref.slot;
    var slotSelector = "slot" + (slot ? "[name=" + slot + "]" : ':not([name])');
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(obj, name, {
      get: function get() {
        var _this$renderRoot, _slotEl$assignedNodes;
        var slotEl = (_this$renderRoot = this.renderRoot) == null ? void 0 : _this$renderRoot.querySelector(slotSelector);
        return (_slotEl$assignedNodes = slotEl == null ? void 0 : slotEl.assignedNodes(options)) != null ? _slotEl$assignedNodes : [];
      }
    });
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query-async.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query-async.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   queryAsync: () => (/* binding */ queryAsync)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

// Note, in the future, we may extend this decorator to support the use case
// where the queried element may need to do work to become ready to interact
// with (e.g. load some implementation code). If so, we might elect to
// add a second argument defining a function that can be run to make the
// queried element loaded/updated/ready.
/**
 * A property decorator that converts a class property into a getter that
 * returns a promise that resolves to the result of a querySelector on the
 * element's renderRoot done after the element's `updateComplete` promise
 * resolves. When the queried property may change with element state, this
 * decorator can be used instead of requiring users to await the
 * `updateComplete` before accessing the property.
 *
 * @param selector A DOMString containing one or more selectors to match.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @queryAsync('#first')
 *   first: Promise<HTMLDivElement>;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 *
 * // external usage
 * async doSomethingWithFirst() {
 *  (await aMyElement.first).doSomething();
 * }
 * ```
 * @category Decorator
 */
function queryAsync(selector) {
  return function (obj, name) {
    return (0,_base_js__WEBPACK_IMPORTED_MODULE_2__.desc)(obj, name, {
      get: function get() {
        var _this = this;
        return (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.mark(function _callee() {
          var _this$renderRoot$quer, _this$renderRoot;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__.wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.updateComplete;
              case 2:
                return _context.abrupt("return", (_this$renderRoot$quer = (_this$renderRoot = _this.renderRoot) == null ? void 0 : _this$renderRoot.querySelector(selector)) != null ? _this$renderRoot$quer : null);
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }))();
      }
    });
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/query.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/query.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   query: () => (/* binding */ query)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/@lit/reactive-element/development/decorators/base.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var DEV_MODE = true;
var issueWarning;
if (DEV_MODE) {
  var _globalThis$litIssued;
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  var issuedWarnings = (_globalThis$litIssued = globalThis.litIssuedWarnings) != null ? _globalThis$litIssued : globalThis.litIssuedWarnings = new Set();
  // Issue a warning, if we haven't already.
  issueWarning = function issueWarning(code, warning) {
    warning += code ? " See https://lit.dev/msg/" + code + " for more information." : '';
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
/**
 * A property decorator that converts a class property into a getter that
 * executes a querySelector on the element's renderRoot.
 *
 * @param selector A DOMString containing one or more selectors to match.
 * @param cache An optional boolean which when true performs the DOM query only
 *     once and caches the result.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
 *
 * ```ts
 * class MyElement {
 *   @query('#first')
 *   first: HTMLDivElement;
 *
 *   render() {
 *     return html`
 *       <div id="first"></div>
 *       <div id="second"></div>
 *     `;
 *   }
 * }
 * ```
 * @category Decorator
 */
function query(selector, cache) {
  return function (protoOrTarget, nameOrContext, descriptor) {
    var doQuery = function doQuery(el) {
      var _el$renderRoot$queryS, _el$renderRoot;
      var result = (_el$renderRoot$queryS = (_el$renderRoot = el.renderRoot) == null ? void 0 : _el$renderRoot.querySelector(selector)) != null ? _el$renderRoot$queryS : null;
      if (DEV_MODE && result === null && cache && !el.hasUpdated) {
        var name = typeof nameOrContext === 'object' ? nameOrContext.name : nameOrContext;
        issueWarning('', "@query'd field " + JSON.stringify(String(name)) + " with the 'cache' " + ("flag set for selector '" + selector + "' has been accessed before ") + "the first update and returned null. This is expected if the " + "renderRoot tree has not been provided beforehand (e.g. via " + "Declarative Shadow DOM). Therefore the value hasn't been cached.");
      }
      // TODO: if we want to allow users to assert that the query will never
      // return null, we need a new option and to throw here if the result
      // is null.
      return result;
    };
    if (cache) {
      // Accessors to wrap from either:
      //   1. The decorator target, in the case of standard decorators
      //   2. The property descriptor, in the case of experimental decorators
      //      on auto-accessors.
      //   3. Functions that access our own cache-key property on the instance,
      //      in the case of experimental decorators on fields.
      var _ref = typeof nameOrContext === 'object' ? protoOrTarget : descriptor != null ? descriptor : function () {
          var key = DEV_MODE ? Symbol(String(nameOrContext) + " (@query() cache)") : Symbol();
          return {
            get: function get() {
              return this[key];
            },
            set: function set(v) {
              this[key] = v;
            }
          };
        }(),
        _get = _ref.get,
        set = _ref.set;
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get: function get() {
          var result = _get.call(this);
          if (result === undefined) {
            result = doQuery(this);
            if (result !== null || this.hasUpdated) {
              set.call(this, result);
            }
          }
          return result;
        }
      });
    } else {
      // This object works as the return type for both standard and
      // experimental decorators.
      return (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.desc)(protoOrTarget, nameOrContext, {
        get: function get() {
          return doQuery(this);
        }
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/decorators/state.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/decorators/state.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/*
 * IMPORTANT: For compatibility with tsickle and the Closure JS compiler, all
 * property decorators (but not class decorators) in this file that have
 * an @ExportDecoratedItems annotation must be defined as a regular function,
 * not an arrow function.
 */

/**
 * Declares a private or protected reactive property that still triggers
 * updates to the element when it changes. It does not reflect from the
 * corresponding attribute.
 *
 * Properties declared this way must not be used from HTML or HTML templating
 * systems, they're solely for properties internal to the element. These
 * properties may be renamed by optimization tools like closure compiler.
 * @category Decorator
 */
function state(options) {
  return (0,_property_js__WEBPACK_IMPORTED_MODULE_1__.property)((0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
    // Add both `state` and `attribute` because we found a third party
    // controller that is keying off of PropertyOptions.state to determine
    // whether a field is a private internal property or not.
    state: true,
    attribute: false
  }));
}

/***/ }),

/***/ "./node_modules/@lit/reactive-element/development/reactive-element.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@lit/reactive-element/development/reactive-element.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.CSSResult),
/* harmony export */   ReactiveElement: () => (/* binding */ ReactiveElement),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.css),
/* harmony export */   defaultConverter: () => (/* binding */ defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.getCompatibleStyle),
/* harmony export */   notEqual: () => (/* binding */ notEqual),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.supportsAdoptingStyleSheets),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _css_tag_js__WEBPACK_IMPORTED_MODULE_5__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _css_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css-tag.js */ "./node_modules/@lit/reactive-element/development/css-tag.js");




var _Symbol$metadata, _global$litPropertyMe, _global$reactiveEleme;

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * Use this module if you want to create your own base class extending
 * {@link ReactiveElement}.
 * @packageDocumentation
 */

// In the Node build, this import will be injected by Rollup:
// import {HTMLElement, customElements} from '@lit-labs/ssr-dom-shim';

// TODO (justinfagnani): Add `hasOwn` here when we ship ES2022
var is = Object.is,
  defineProperty = Object.defineProperty,
  getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
  getOwnPropertyNames = Object.getOwnPropertyNames,
  getOwnPropertySymbols = Object.getOwnPropertySymbols,
  getPrototypeOf = Object.getPrototypeOf;
var NODE_MODE = false;
// Lets a minifier replace globalThis references with a minified name
var global = globalThis;
if (NODE_MODE) {
  var _global$customElement;
  (_global$customElement = global.customElements) != null ? _global$customElement : global.customElements = customElements;
}
var DEV_MODE = true;
var issueWarning;
var trustedTypes = global.trustedTypes;
// Temporary workaround for https://crbug.com/993268
// Currently, any attribute starting with "on" is considered to be a
// TrustedScript source. Such boolean attributes must be set to the equivalent
// trusted emptyScript value.
var emptyStringForBooleanAttribute = trustedTypes ? trustedTypes.emptyScript : '';
var polyfillSupport = DEV_MODE ? global.reactiveElementPolyfillSupportDevMode : global.reactiveElementPolyfillSupport;
if (DEV_MODE) {
  var _global$litIssuedWarn, _global$ShadyDOM;
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  var issuedWarnings = (_global$litIssuedWarn = global.litIssuedWarnings) != null ? _global$litIssuedWarn : global.litIssuedWarnings = new Set();
  // Issue a warning, if we haven't already.
  issueWarning = function issueWarning(code, warning) {
    warning += " See https://lit.dev/msg/" + code + " for more information.";
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
  issueWarning('dev-mode', "Lit is in dev mode. Not recommended for production!");
  // Issue polyfill support warning.
  if ((_global$ShadyDOM = global.ShadyDOM) != null && _global$ShadyDOM.inUse && polyfillSupport === undefined) {
    issueWarning('polyfill-support-missing', "Shadow DOM is being polyfilled via `ShadyDOM` but " + "the `polyfill-support` module has not been loaded.");
  }
}
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
var debugLogEvent = DEV_MODE ? function (event) {
  var shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
var JSCompiler_renameProperty = function JSCompiler_renameProperty(prop, _obj) {
  return prop;
};
var defaultConverter = {
  toAttribute: function toAttribute(value, type) {
    switch (type) {
      case Boolean:
        value = value ? emptyStringForBooleanAttribute : null;
        break;
      case Object:
      case Array:
        // if the value is `null` or `undefined` pass this through
        // to allow removing/no change behavior.
        value = value == null ? value : JSON.stringify(value);
        break;
    }
    return value;
  },
  fromAttribute: function fromAttribute(value, type) {
    var fromValue = value;
    switch (type) {
      case Boolean:
        fromValue = value !== null;
        break;
      case Number:
        fromValue = value === null ? null : Number(value);
        break;
      case Object:
      case Array:
        // Do *not* generate exception when invalid JSON is set as elements
        // don't normally complain on being mis-configured.
        // TODO(sorvell): Do generate exception in *dev mode*.
        try {
          // Assert to adhere to Bazel's "must type assert JSON parse" rule.
          fromValue = JSON.parse(value);
        } catch (e) {
          fromValue = null;
        }
        break;
    }
    return fromValue;
  }
};
/**
 * Change function that returns true if `value` is different from `oldValue`.
 * This method is used as the default for a property's `hasChanged` function.
 */
var notEqual = function notEqual(value, old) {
  return !is(value, old);
};
var defaultPropertyDeclaration = {
  attribute: true,
  type: String,
  converter: defaultConverter,
  reflect: false,
  hasChanged: notEqual
};
// Ensure metadata is enabled. TypeScript does not polyfill
// Symbol.metadata, so we must ensure that it exists.
(_Symbol$metadata = Symbol.metadata) != null ? _Symbol$metadata : Symbol.metadata = Symbol('metadata');
// Map from a class's metadata object to property options
// Note that we must use nullish-coalescing assignment so that we only use one
// map even if we load multiple version of this module.
(_global$litPropertyMe = global.litPropertyMetadata) != null ? _global$litPropertyMe : global.litPropertyMetadata = new WeakMap();
/**
 * Base element class which manages element properties and attributes. When
 * properties change, the `update` method is asynchronously called. This method
 * should be supplied by subclasses to render updates as desired.
 * @noInheritDoc
 */
var ReactiveElement
// In the Node build, this `extends` clause will be substituted with
// `(globalThis.HTMLElement ?? HTMLElement)`.
//
// This way, we will first prefer any global `HTMLElement` polyfill that the
// user has assigned, and then fall back to the `HTMLElement` shim which has
// been imported (see note at the top of this file about how this import is
// generated by Rollup). Note that the `HTMLElement` variable has been
// shadowed by this import, so it no longer refers to the global.
= /*#__PURE__*/function (_HTMLElement) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(ReactiveElement, _HTMLElement);
  /**
   * Adds an initializer function to the class that is called during instance
   * construction.
   *
   * This is useful for code that runs against a `ReactiveElement`
   * subclass, such as a decorator, that needs to do work for each
   * instance, such as setting up a `ReactiveController`.
   *
   * ```ts
   * const myDecorator = (target: typeof ReactiveElement, key: string) => {
   *   target.addInitializer((instance: ReactiveElement) => {
   *     // This is run during construction of the element
   *     new MyController(instance);
   *   });
   * }
   * ```
   *
   * Decorating a field will then cause each instance to run an initializer
   * that adds a controller:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   @myDecorator foo;
   * }
   * ```
   *
   * Initializers are stored per-constructor. Adding an initializer to a
   * subclass does not add it to a superclass. Since initializers are run in
   * constructors, initializers will run in order of the class hierarchy,
   * starting with superclasses and progressing to the instance's class.
   *
   * @nocollapse
   */
  ReactiveElement.addInitializer = function addInitializer(initializer) {
    var _this$_initializers;
    this.__prepare();
    ((_this$_initializers = this._initializers) != null ? _this$_initializers : this._initializers = []).push(initializer);
  }
  /**
   * Returns a list of attributes corresponding to the registered properties.
   * @nocollapse
   * @category attributes
   */;
  /**
   * Creates a property accessor on the element prototype if one does not exist
   * and stores a {@linkcode PropertyDeclaration} for the property with the
   * given options. The property setter calls the property's `hasChanged`
   * property option or uses a strict identity check to determine whether or not
   * to request an update.
   *
   * This method may be overridden to customize properties; however,
   * when doing so, it's important to call `super.createProperty` to ensure
   * the property is setup correctly. This method calls
   * `getPropertyDescriptor` internally to get a descriptor to install.
   * To customize what properties do when they are get or set, override
   * `getPropertyDescriptor`. To customize the options for a property,
   * implement `createProperty` like this:
   *
   * ```ts
   * static createProperty(name, options) {
   *   options = Object.assign(options, {myOption: true});
   *   super.createProperty(name, options);
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */
  ReactiveElement.createProperty = function createProperty(name, options) {
    if (options === void 0) {
      options = defaultPropertyDeclaration;
    }
    // If this is a state property, force the attribute to false.
    if (options.state) {
      options.attribute = false;
    }
    this.__prepare();
    this.elementProperties.set(name, options);
    if (!options.noAccessor) {
      var key = DEV_MODE ?
      // Use Symbol.for in dev mode to make it easier to maintain state
      // when doing HMR.
      Symbol["for"](String(name) + " (@property() cache)") : Symbol();
      var descriptor = this.getPropertyDescriptor(name, key, options);
      if (descriptor !== undefined) {
        defineProperty(this.prototype, name, descriptor);
      }
    }
  }
  /**
   * Returns a property descriptor to be defined on the given named property.
   * If no descriptor is returned, the property will not become an accessor.
   * For example,
   *
   * ```ts
   * class MyElement extends LitElement {
   *   static getPropertyDescriptor(name, key, options) {
   *     const defaultDescriptor =
   *         super.getPropertyDescriptor(name, key, options);
   *     const setter = defaultDescriptor.set;
   *     return {
   *       get: defaultDescriptor.get,
   *       set(value) {
   *         setter.call(this, value);
   *         // custom action.
   *       },
   *       configurable: true,
   *       enumerable: true
   *     }
   *   }
   * }
   * ```
   *
   * @nocollapse
   * @category properties
   */;
  ReactiveElement.getPropertyDescriptor = function getPropertyDescriptor(name, key, options) {
    var _getOwnPropertyDescri;
    var _ref = (_getOwnPropertyDescri = getOwnPropertyDescriptor(this.prototype, name)) != null ? _getOwnPropertyDescri : {
        get: function get() {
          return this[key];
        },
        set: function set(v) {
          this[key] = v;
        }
      },
      _get = _ref.get,
      _set = _ref.set;
    if (DEV_MODE && _get == null) {
      var _getOwnPropertyDescri2;
      if ('value' in ((_getOwnPropertyDescri2 = getOwnPropertyDescriptor(this.prototype, name)) != null ? _getOwnPropertyDescri2 : {})) {
        throw new Error("Field " + JSON.stringify(String(name)) + " on " + (this.name + " was declared as a reactive property ") + "but it's actually declared as a value on the prototype. " + "Usually this is due to using @property or @state on a method.");
      }
      issueWarning('reactive-property-without-getter', "Field " + JSON.stringify(String(name)) + " on " + (this.name + " was declared as a reactive property ") + "but it does not have a getter. This will be an error in a " + "future version of Lit.");
    }
    return {
      get: function get() {
        return _get == null ? void 0 : _get.call(this);
      },
      set: function set(value) {
        var oldValue = _get == null ? void 0 : _get.call(this);
        _set.call(this, value);
        this.requestUpdate(name, oldValue, options);
      },
      configurable: true,
      enumerable: true
    };
  }
  /**
   * Returns the property options associated with the given property.
   * These options are defined with a `PropertyDeclaration` via the `properties`
   * object or the `@property` decorator and are registered in
   * `createProperty(...)`.
   *
   * Note, this method should be considered "final" and not overridden. To
   * customize the options for a given property, override
   * {@linkcode createProperty}.
   *
   * @nocollapse
   * @final
   * @category properties
   */;
  ReactiveElement.getPropertyOptions = function getPropertyOptions(name) {
    var _this$elementProperti;
    return (_this$elementProperti = this.elementProperties.get(name)) != null ? _this$elementProperti : defaultPropertyDeclaration;
  }
  /**
   * Initializes static own properties of the class used in bookkeeping
   * for element properties, initializers, etc.
   *
   * Can be called multiple times by code that needs to ensure these
   * properties exist before using them.
   *
   * This method ensures the superclass is finalized so that inherited
   * property metadata can be copied down.
   * @nocollapse
   */;
  ReactiveElement.__prepare = function __prepare() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('elementProperties', this))) {
      // Already prepared
      return;
    }
    // Finalize any superclasses
    var superCtor = getPrototypeOf(this);
    superCtor.finalize();
    // Create own set of initializers for this class if any exist on the
    // superclass and copy them down. Note, for a small perf boost, avoid
    // creating initializers unless needed.
    if (superCtor._initializers !== undefined) {
      this._initializers = [].concat(superCtor._initializers);
    }
    // Initialize elementProperties from the superclass
    this.elementProperties = new Map(superCtor.elementProperties);
  }
  /**
   * Finishes setting up the class so that it's ready to be registered
   * as a custom element and instantiated.
   *
   * This method is called by the ReactiveElement.observedAttributes getter.
   * If you override the observedAttributes getter, you must either call
   * super.observedAttributes to trigger finalization, or call finalize()
   * yourself.
   *
   * @nocollapse
   */;
  ReactiveElement.finalize = function finalize() {
    if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this))) {
      return;
    }
    this.finalized = true;
    this.__prepare();
    // Create properties from the static properties block:
    if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
      var props = this.properties;
      var propKeys = [].concat(getOwnPropertyNames(props), getOwnPropertySymbols(props));
      for (var _iterator = _createForOfIteratorHelperLoose(propKeys), _step; !(_step = _iterator()).done;) {
        var p = _step.value;
        this.createProperty(p, props[p]);
      }
    }
    // Create properties from standard decorator metadata:
    var metadata = this[Symbol.metadata];
    if (metadata !== null) {
      var properties = litPropertyMetadata.get(metadata);
      if (properties !== undefined) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(properties), _step2; !(_step2 = _iterator2()).done;) {
          var _step2$value = _step2.value,
            _p = _step2$value[0],
            options = _step2$value[1];
          this.elementProperties.set(_p, options);
        }
      }
    }
    // Create the attribute-to-property map
    this.__attributeToPropertyMap = new Map();
    for (var _iterator3 = _createForOfIteratorHelperLoose(this.elementProperties), _step3; !(_step3 = _iterator3()).done;) {
      var _step3$value = _step3.value,
        _p2 = _step3$value[0],
        _options = _step3$value[1];
      var attr = this.__attributeNameForProperty(_p2, _options);
      if (attr !== undefined) {
        this.__attributeToPropertyMap.set(attr, _p2);
      }
    }
    this.elementStyles = this.finalizeStyles(this.styles);
    if (DEV_MODE) {
      if (this.hasOwnProperty('createProperty')) {
        issueWarning('no-override-create-property', 'Overriding ReactiveElement.createProperty() is deprecated. ' + 'The override will not be called with standard decorators');
      }
      if (this.hasOwnProperty('getPropertyDescriptor')) {
        issueWarning('no-override-get-property-descriptor', 'Overriding ReactiveElement.getPropertyDescriptor() is deprecated. ' + 'The override will not be called with standard decorators');
      }
    }
  }
  /**
   * Takes the styles the user supplied via the `static styles` property and
   * returns the array of styles to apply to the element.
   * Override this method to integrate into a style management system.
   *
   * Styles are deduplicated preserving the _last_ instance in the list. This
   * is a performance optimization to avoid duplicated styles that can occur
   * especially when composing via subclassing. The last item is kept to try
   * to preserve the cascade order with the assumption that it's most important
   * that last added styles override previous styles.
   *
   * @nocollapse
   * @category styles
   */;
  ReactiveElement.finalizeStyles = function finalizeStyles(styles) {
    var elementStyles = [];
    if (Array.isArray(styles)) {
      // Dedupe the flattened array in reverse order to preserve the last items.
      // Casting to Array<unknown> works around TS error that
      // appears to come from trying to flatten a type CSSResultArray.
      var set = new Set(styles.flat(Infinity).reverse());
      // Then preserve original order by adding the set items in reverse order.
      for (var _iterator4 = _createForOfIteratorHelperLoose(set), _step4; !(_step4 = _iterator4()).done;) {
        var s = _step4.value;
        elementStyles.unshift((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_5__.getCompatibleStyle)(s));
      }
    } else if (styles !== undefined) {
      elementStyles.push((0,_css_tag_js__WEBPACK_IMPORTED_MODULE_5__.getCompatibleStyle)(styles));
    }
    return elementStyles;
  }
  /**
   * Returns the property name for the given attribute `name`.
   * @nocollapse
   */;
  ReactiveElement.__attributeNameForProperty = function __attributeNameForProperty(name, options) {
    var attribute = options.attribute;
    return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
  };
  function ReactiveElement() {
    var _this;
    _this = _HTMLElement.call(this) || this;
    _this.__instanceProperties = undefined;
    /**
     * True if there is a pending update as a result of calling `requestUpdate()`.
     * Should only be read.
     * @category updates
     */
    _this.isUpdatePending = false;
    /**
     * Is set to `true` after the first update. The element code cannot assume
     * that `renderRoot` exists before the element `hasUpdated`.
     * @category updates
     */
    _this.hasUpdated = false;
    /**
     * Name of currently reflecting property
     */
    _this.__reflectingProperty = null;
    _this.__initialize();
    return _this;
  }
  /**
   * Internal only override point for customizing work done when elements
   * are constructed.
   */
  var _proto = ReactiveElement.prototype;
  _proto.__initialize = function __initialize() {
    var _this2 = this,
      _this$constructor$_in;
    this.__updatePromise = new Promise(function (res) {
      return _this2.enableUpdating = res;
    });
    this._$changedProperties = new Map();
    // This enqueues a microtask that ust run before the first update, so it
    // must be called before requestUpdate()
    this.__saveInstanceProperties();
    // ensures first update will be caught by an early access of
    // `updateComplete`
    this.requestUpdate();
    (_this$constructor$_in = this.constructor._initializers) == null ? void 0 : _this$constructor$_in.forEach(function (i) {
      return i(_this2);
    });
  }
  /**
   * Registers a `ReactiveController` to participate in the element's reactive
   * update cycle. The element automatically calls into any registered
   * controllers during its lifecycle callbacks.
   *
   * If the element is connected when `addController()` is called, the
   * controller's `hostConnected()` callback will be immediately called.
   * @category controllers
   */;
  _proto.addController = function addController(controller) {
    var _this$__controllers;
    ((_this$__controllers = this.__controllers) != null ? _this$__controllers : this.__controllers = new Set()).add(controller);
    // If a controller is added after the element has been connected,
    // call hostConnected. Note, re-using existence of `renderRoot` here
    // (which is set in connectedCallback) to avoid the need to track a
    // first connected state.
    if (this.renderRoot !== undefined && this.isConnected) {
      controller.hostConnected == null ? void 0 : controller.hostConnected();
    }
  }
  /**
   * Removes a `ReactiveController` from the element.
   * @category controllers
   */;
  _proto.removeController = function removeController(controller) {
    var _this$__controllers2;
    (_this$__controllers2 = this.__controllers) == null ? void 0 : _this$__controllers2["delete"](controller);
  }
  /**
   * Fixes any properties set on the instance before upgrade time.
   * Otherwise these would shadow the accessor and break these properties.
   * The properties are stored in a Map which is played back after the
   * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
   * (<=41), properties created for native platform properties like (`id` or
   * `name`) may not have default values set in the element constructor. On
   * these browsers native properties appear on instances and therefore their
   * default value will overwrite any element default (e.g. if the element sets
   * this.id = 'id' in the constructor, the 'id' will become '' since this is
   * the native platform default).
   */;
  _proto.__saveInstanceProperties = function __saveInstanceProperties() {
    var instanceProperties = new Map();
    var elementProperties = this.constructor.elementProperties;
    for (var _iterator5 = _createForOfIteratorHelperLoose(elementProperties.keys()), _step5; !(_step5 = _iterator5()).done;) {
      var p = _step5.value;
      if (this.hasOwnProperty(p)) {
        instanceProperties.set(p, this[p]);
        delete this[p];
      }
    }
    if (instanceProperties.size > 0) {
      this.__instanceProperties = instanceProperties;
    }
  }
  /**
   * Returns the node into which the element should render and by default
   * creates and returns an open shadowRoot. Implement to customize where the
   * element's DOM is rendered. For example, to render into the element's
   * childNodes, return `this`.
   *
   * @return Returns a node into which to render.
   * @category rendering
   */;
  _proto.createRenderRoot = function createRenderRoot() {
    var _this$shadowRoot;
    var renderRoot = (_this$shadowRoot = this.shadowRoot) != null ? _this$shadowRoot : this.attachShadow(this.constructor.shadowRootOptions);
    (0,_css_tag_js__WEBPACK_IMPORTED_MODULE_5__.adoptStyles)(renderRoot, this.constructor.elementStyles);
    return renderRoot;
  }
  /**
   * On first connection, creates the element's renderRoot, sets up
   * element styling, and enables updating.
   * @category lifecycle
   */;
  _proto.connectedCallback = function connectedCallback() {
    var _this$renderRoot, _this$__controllers3;
    // Create renderRoot before controllers `hostConnected`
    (_this$renderRoot = this.renderRoot) != null ? _this$renderRoot : this.renderRoot = this.createRenderRoot();
    this.enableUpdating(true);
    (_this$__controllers3 = this.__controllers) == null ? void 0 : _this$__controllers3.forEach(function (c) {
      return c.hostConnected == null ? void 0 : c.hostConnected();
    });
  }
  /**
   * Note, this method should be considered final and not overridden. It is
   * overridden on the element instance with a function that triggers the first
   * update.
   * @category updates
   */;
  _proto.enableUpdating = function enableUpdating(_requestedUpdate) {}
  /**
   * Allows for `super.disconnectedCallback()` in extensions while
   * reserving the possibility of making non-breaking feature additions
   * when disconnecting at some point in the future.
   * @category lifecycle
   */;
  _proto.disconnectedCallback = function disconnectedCallback() {
    var _this$__controllers4;
    (_this$__controllers4 = this.__controllers) == null ? void 0 : _this$__controllers4.forEach(function (c) {
      return c.hostDisconnected == null ? void 0 : c.hostDisconnected();
    });
  }
  /**
   * Synchronizes property values when attributes change.
   *
   * Specifically, when an attribute is set, the corresponding property is set.
   * You should rarely need to implement this callback. If this method is
   * overridden, `super.attributeChangedCallback(name, _old, value)` must be
   * called.
   *
   * See [using the lifecycle callbacks](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks)
   * on MDN for more information about the `attributeChangedCallback`.
   * @category attributes
   */;
  _proto.attributeChangedCallback = function attributeChangedCallback(name, _old, value) {
    this._$attributeToProperty(name, value);
  };
  _proto.__propertyToAttribute = function __propertyToAttribute(name, value) {
    var elemProperties = this.constructor.elementProperties;
    var options = elemProperties.get(name);
    var attr = this.constructor.__attributeNameForProperty(name, options);
    if (attr !== undefined && options.reflect === true) {
      var _options$converter;
      var converter = ((_options$converter = options.converter) == null ? void 0 : _options$converter.toAttribute) !== undefined ? options.converter : defaultConverter;
      var attrValue = converter.toAttribute(value, options.type);
      if (DEV_MODE && this.constructor.enabledWarnings.includes('migration') && attrValue === undefined) {
        issueWarning('undefined-attribute-value', "The attribute value for the " + name + " property is " + ("undefined on element " + this.localName + ". The attribute will be ") + "removed, but in the previous version of `ReactiveElement`, " + "the attribute would not have changed.");
      }
      // Track if the property is being reflected to avoid
      // setting the property again via `attributeChangedCallback`. Note:
      // 1. this takes advantage of the fact that the callback is synchronous.
      // 2. will behave incorrectly if multiple attributes are in the reaction
      // stack at time of calling. However, since we process attributes
      // in `update` this should not be possible (or an extreme corner case
      // that we'd like to discover).
      // mark state reflecting
      this.__reflectingProperty = name;
      if (attrValue == null) {
        this.removeAttribute(attr);
      } else {
        this.setAttribute(attr, attrValue);
      }
      // mark state not reflecting
      this.__reflectingProperty = null;
    }
  }
  /** @internal */;
  _proto._$attributeToProperty = function _$attributeToProperty(name, value) {
    var ctor = this.constructor;
    // Note, hint this as an `AttributeMap` so closure clearly understands
    // the type; it has issues with tracking types through statics
    var propName = ctor.__attributeToPropertyMap.get(name);
    // Use tracking info to avoid reflecting a property value to an attribute
    // if it was just set because the attribute changed.
    if (propName !== undefined && this.__reflectingProperty !== propName) {
      var _options$converter2;
      var options = ctor.getPropertyOptions(propName);
      var converter = typeof options.converter === 'function' ? {
        fromAttribute: options.converter
      } : ((_options$converter2 = options.converter) == null ? void 0 : _options$converter2.fromAttribute) !== undefined ? options.converter : defaultConverter;
      // mark state reflecting
      this.__reflectingProperty = propName;
      this[propName] = converter.fromAttribute(value, options.type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      );
      // mark state not reflecting
      this.__reflectingProperty = null;
    }
  }
  /**
   * Requests an update which is processed asynchronously. This should be called
   * when an element should update based on some state not triggered by setting
   * a reactive property. In this case, pass no arguments. It should also be
   * called when manually implementing a property setter. In this case, pass the
   * property `name` and `oldValue` to ensure that any configured property
   * options are honored.
   *
   * @param name name of requesting property
   * @param oldValue old value of requesting property
   * @param options property options to use instead of the previously
   *     configured options
   * @category updates
   */;
  _proto.requestUpdate = function requestUpdate(name, oldValue, options) {
    // If we have a property key, perform property update steps.
    if (name !== undefined) {
      var _options2, _options$hasChanged;
      if (DEV_MODE && name instanceof Event) {
        issueWarning("", "The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");
      }
      (_options2 = options) != null ? _options2 : options = this.constructor.getPropertyOptions(name);
      var hasChanged = (_options$hasChanged = options.hasChanged) != null ? _options$hasChanged : notEqual;
      var newValue = this[name];
      if (hasChanged(newValue, oldValue)) {
        this._$changeProperty(name, oldValue, options);
      } else {
        // Abort the request if the property should not be considered changed.
        return;
      }
    }
    if (this.isUpdatePending === false) {
      this.__updatePromise = this.__enqueueUpdate();
    }
  }
  /**
   * @internal
   */;
  _proto._$changeProperty = function _$changeProperty(name, oldValue, options) {
    // TODO (justinfagnani): Create a benchmark of Map.has() + Map.set(
    // vs just Map.set()
    if (!this._$changedProperties.has(name)) {
      this._$changedProperties.set(name, oldValue);
    }
    // Add to reflecting properties set.
    // Note, it's important that every change has a chance to add the
    // property to `__reflectingProperties`. This ensures setting
    // attribute + property reflects correctly.
    if (options.reflect === true && this.__reflectingProperty !== name) {
      var _this$__reflectingPro;
      ((_this$__reflectingPro = this.__reflectingProperties) != null ? _this$__reflectingPro : this.__reflectingProperties = new Set()).add(name);
    }
  }
  /**
   * Sets up the element to asynchronously update.
   */;
  _proto.__enqueueUpdate =
  /*#__PURE__*/
  function () {
    var _enqueueUpdate = (0,_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.mark(function _callee() {
      var result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            this.isUpdatePending = true;
            _context.prev = 1;
            _context.next = 4;
            return this.__updatePromise;
          case 4:
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            // Refire any previous errors async so they do not disrupt the update
            // cycle. Errors are refired so developers have a chance to observe
            // them, and this can be done by implementing
            // `window.onunhandledrejection`.
            Promise.reject(_context.t0);
          case 9:
            result = this.scheduleUpdate(); // If `scheduleUpdate` returns a Promise, we await it. This is done to
            // enable coordinating updates with a scheduler. Note, the result is
            // checked to avoid delaying an additional microtask unless we need to.
            if (!(result != null)) {
              _context.next = 13;
              break;
            }
            _context.next = 13;
            return result;
          case 13:
            return _context.abrupt("return", !this.isUpdatePending);
          case 14:
          case "end":
            return _context.stop();
        }
      }, _callee, this, [[1, 6]]);
    }));
    function __enqueueUpdate() {
      return _enqueueUpdate.apply(this, arguments);
    }
    return __enqueueUpdate;
  }()
  /**
   * Schedules an element update. You can override this method to change the
   * timing of updates by returning a Promise. The update will await the
   * returned Promise, and you should resolve the Promise to allow the update
   * to proceed. If this method is overridden, `super.scheduleUpdate()`
   * must be called.
   *
   * For instance, to schedule updates to occur just before the next frame:
   *
   * ```ts
   * override protected async scheduleUpdate(): Promise<unknown> {
   *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
   *   super.scheduleUpdate();
   * }
   * ```
   * @category updates
   */
  ;
  _proto.scheduleUpdate = function scheduleUpdate() {
    var result = this.performUpdate();
    if (DEV_MODE && this.constructor.enabledWarnings.includes('async-perform-update') && typeof (result == null ? void 0 : result.then) === 'function') {
      issueWarning('async-perform-update', "Element " + this.localName + " returned a Promise from performUpdate(). " + "This behavior is deprecated and will be removed in a future " + "version of ReactiveElement.");
    }
    return result;
  }
  /**
   * Performs an element update. Note, if an exception is thrown during the
   * update, `firstUpdated` and `updated` will not be called.
   *
   * Call `performUpdate()` to immediately process a pending update. This should
   * generally not be needed, but it can be done in rare cases when you need to
   * update synchronously.
   *
   * @category updates
   */;
  _proto.performUpdate = function performUpdate() {
    var _this3 = this;
    // Abort any update if one is not pending when this is called.
    // This can happen if `performUpdate` is called early to "flush"
    // the update.
    if (!this.isUpdatePending) {
      return;
    }
    debugLogEvent == null ? void 0 : debugLogEvent({
      kind: 'update'
    });
    if (!this.hasUpdated) {
      var _this$renderRoot2;
      // Create renderRoot before first update. This occurs in `connectedCallback`
      // but is done here to support out of tree calls to `enableUpdating`/`performUpdate`.
      (_this$renderRoot2 = this.renderRoot) != null ? _this$renderRoot2 : this.renderRoot = this.createRenderRoot();
      if (DEV_MODE) {
        // Produce warning if any reactive properties on the prototype are
        // shadowed by class fields. Instance fields set before upgrade are
        // deleted by this point, so any own property is caused by class field
        // initialization in the constructor.
        var ctor = this.constructor;
        var shadowedProperties = [].concat(ctor.elementProperties.keys()).filter(function (p) {
          return _this3.hasOwnProperty(p) && p in getPrototypeOf(_this3);
        });
        if (shadowedProperties.length) {
          throw new Error("The following properties on element " + this.localName + " will not " + "trigger updates as expected because they are set using class " + ("fields: " + shadowedProperties.join(', ') + ". ") + "Native class fields and some compiled output will overwrite " + "accessors used for detecting changes. See " + "https://lit.dev/msg/class-field-shadowing " + "for more information.");
        }
      }
      // Mixin instance properties once, if they exist.
      if (this.__instanceProperties) {
        // TODO (justinfagnani): should we use the stored value? Could a new value
        // have been set since we stored the own property value?
        for (var _iterator6 = _createForOfIteratorHelperLoose(this.__instanceProperties), _step6; !(_step6 = _iterator6()).done;) {
          var _step6$value = _step6.value,
            p = _step6$value[0],
            value = _step6$value[1];
          this[p] = value;
        }
        this.__instanceProperties = undefined;
      }
      // Trigger initial value reflection and populate the initial
      // changedProperties map, but only for the case of experimental
      // decorators on accessors, which will not have already populated the
      // changedProperties map. We can't know if these accessors had
      // initializers, so we just set them anyway - a difference from
      // experimental decorators on fields and standard decorators on
      // auto-accessors.
      // For context why experimentalDecorators with auto accessors are handled
      // specifically also see:
      // https://github.com/lit/lit/pull/4183#issuecomment-1711959635
      var elementProperties = this.constructor.elementProperties;
      if (elementProperties.size > 0) {
        for (var _iterator7 = _createForOfIteratorHelperLoose(elementProperties), _step7; !(_step7 = _iterator7()).done;) {
          var _step7$value = _step7.value,
            _p3 = _step7$value[0],
            options = _step7$value[1];
          if (options.wrapped === true && !this._$changedProperties.has(_p3) && this[_p3] !== undefined) {
            this._$changeProperty(_p3, this[_p3], options);
          }
        }
      }
    }
    var shouldUpdate = false;
    var changedProperties = this._$changedProperties;
    try {
      shouldUpdate = this.shouldUpdate(changedProperties);
      if (shouldUpdate) {
        var _this$__controllers5;
        this.willUpdate(changedProperties);
        (_this$__controllers5 = this.__controllers) == null ? void 0 : _this$__controllers5.forEach(function (c) {
          return c.hostUpdate == null ? void 0 : c.hostUpdate();
        });
        this.update(changedProperties);
      } else {
        this.__markUpdated();
      }
    } catch (e) {
      // Prevent `firstUpdated` and `updated` from running when there's an
      // update exception.
      shouldUpdate = false;
      // Ensure element can accept additional updates after an exception.
      this.__markUpdated();
      throw e;
    }
    // The update is no longer considered pending and further updates are now allowed.
    if (shouldUpdate) {
      this._$didUpdate(changedProperties);
    }
  }
  /**
   * Invoked before `update()` to compute values needed during the update.
   *
   * Implement `willUpdate` to compute property values that depend on other
   * properties and are used in the rest of the update process.
   *
   * ```ts
   * willUpdate(changedProperties) {
   *   // only need to check changed properties for an expensive computation.
   *   if (changedProperties.has('firstName') || changedProperties.has('lastName')) {
   *     this.sha = computeSHA(`${this.firstName} ${this.lastName}`);
   *   }
   * }
   *
   * render() {
   *   return html`SHA: ${this.sha}`;
   * }
   * ```
   *
   * @category updates
   */;
  _proto.willUpdate = function willUpdate(_changedProperties) {}
  // Note, this is an override point for polyfill-support.
  // @internal
  ;
  _proto._$didUpdate = function _$didUpdate(changedProperties) {
    var _this$__controllers6;
    (_this$__controllers6 = this.__controllers) == null ? void 0 : _this$__controllers6.forEach(function (c) {
      return c.hostUpdated == null ? void 0 : c.hostUpdated();
    });
    if (!this.hasUpdated) {
      this.hasUpdated = true;
      this.firstUpdated(changedProperties);
    }
    this.updated(changedProperties);
    if (DEV_MODE && this.isUpdatePending && this.constructor.enabledWarnings.includes('change-in-update')) {
      issueWarning('change-in-update', "Element " + this.localName + " scheduled an update " + "(generally because a property was set) " + "after an update completed, causing a new update to be scheduled. " + "This is inefficient and should be avoided unless the next update " + "can only be scheduled as a side effect of the previous update.");
    }
  };
  _proto.__markUpdated = function __markUpdated() {
    this._$changedProperties = new Map();
    this.isUpdatePending = false;
  }
  /**
   * Returns a Promise that resolves when the element has completed updating.
   * The Promise value is a boolean that is `true` if the element completed the
   * update without triggering another update. The Promise result is `false` if
   * a property was set inside `updated()`. If the Promise is rejected, an
   * exception was thrown during the update.
   *
   * To await additional asynchronous work, override the `getUpdateComplete`
   * method. For example, it is sometimes useful to await a rendered element
   * before fulfilling this Promise. To do this, first await
   * `super.getUpdateComplete()`, then any subsequent state.
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */;
  /**
   * Override point for the `updateComplete` promise.
   *
   * It is not safe to override the `updateComplete` getter directly due to a
   * limitation in TypeScript which means it is not possible to call a
   * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
   * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
   * This method should be overridden instead. For example:
   *
   * ```ts
   * class MyElement extends LitElement {
   *   override async getUpdateComplete() {
   *     const result = await super.getUpdateComplete();
   *     await this._myChild.updateComplete;
   *     return result;
   *   }
   * }
   * ```
   *
   * @return A promise of a boolean that resolves to true if the update completed
   *     without triggering another update.
   * @category updates
   */
  _proto.getUpdateComplete = function getUpdateComplete() {
    return this.__updatePromise;
  }
  /**
   * Controls whether or not `update()` should be called when the element requests
   * an update. By default, this method always returns `true`, but this can be
   * customized to control when to update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */;
  _proto.shouldUpdate = function shouldUpdate(_changedProperties) {
    return true;
  }
  /**
   * Updates the element. This method reflects property values to attributes.
   * It can be overridden to render and keep updated element DOM.
   * Setting properties inside this method will *not* trigger
   * another update.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */;
  _proto.update = function update(_changedProperties) {
    var _this4 = this;
    // The forEach() expression will only run when when __reflectingProperties is
    // defined, and it returns undefined, setting __reflectingProperties to
    // undefined
    this.__reflectingProperties && (this.__reflectingProperties = this.__reflectingProperties.forEach(function (p) {
      return _this4.__propertyToAttribute(p, _this4[p]);
    }));
    this.__markUpdated();
  }
  /**
   * Invoked whenever the element is updated. Implement to perform
   * post-updating tasks via DOM APIs, for example, focusing an element.
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */;
  _proto.updated = function updated(_changedProperties) {}
  /**
   * Invoked when the element is first updated. Implement to perform one time
   * work on the element after update.
   *
   * ```ts
   * firstUpdated() {
   *   this.renderRoot.getElementById('my-text-area').focus();
   * }
   * ```
   *
   * Setting properties inside this method will trigger the element to update
   * again after this update cycle completes.
   *
   * @param _changedProperties Map of changed properties with old values
   * @category updates
   */;
  _proto.firstUpdated = function firstUpdated(_changedProperties) {};
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactiveElement, [{
    key: "updateComplete",
    get: function get() {
      return this.getUpdateComplete();
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      // Ensure we've created all properties
      this.finalize();
      // this.__attributeToPropertyMap is only undefined after finalize() in
      // ReactiveElement itself. ReactiveElement.observedAttributes is only
      // accessed with ReactiveElement as the receiver when a subclass or mixin
      // calls super.observedAttributes
      return this.__attributeToPropertyMap && [].concat(this.__attributeToPropertyMap.keys());
    }
  }]);
  return ReactiveElement;
}( /*#__PURE__*/(0,_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(HTMLElement));
/**
 * Memoized list of all element styles.
 * Created lazily on user subclasses when finalizing the class.
 * @nocollapse
 * @category styles
 */
ReactiveElement.elementStyles = [];
/**
 * Options used when calling `attachShadow`. Set this property to customize
 * the options for the shadowRoot; for example, to create a closed
 * shadowRoot: `{mode: 'closed'}`.
 *
 * Note, these options are used in `createRenderRoot`. If this method
 * is customized, options should be respected if possible.
 * @nocollapse
 * @category rendering
 */
ReactiveElement.shadowRootOptions = {
  mode: 'open'
};
// Assigned here to work around a jscompiler bug with static fields
// when compiling to ES5.
// https://github.com/google/closure-compiler/issues/3177
ReactiveElement[JSCompiler_renameProperty('elementProperties', ReactiveElement)] = new Map();
ReactiveElement[JSCompiler_renameProperty('finalized', ReactiveElement)] = new Map();
// Apply polyfills if available
polyfillSupport == null ? void 0 : polyfillSupport({
  ReactiveElement: ReactiveElement
});
// Dev mode warnings...
if (DEV_MODE) {
  // Default warning set.
  ReactiveElement.enabledWarnings = ['change-in-update', 'async-perform-update'];
  var ensureOwnWarnings = function ensureOwnWarnings(ctor) {
    if (!ctor.hasOwnProperty(JSCompiler_renameProperty('enabledWarnings', ctor))) {
      ctor.enabledWarnings = ctor.enabledWarnings.slice();
    }
  };
  ReactiveElement.enableWarning = function (warning) {
    ensureOwnWarnings(this);
    if (!this.enabledWarnings.includes(warning)) {
      this.enabledWarnings.push(warning);
    }
  };
  ReactiveElement.disableWarning = function (warning) {
    ensureOwnWarnings(this);
    var i = this.enabledWarnings.indexOf(warning);
    if (i >= 0) {
      this.enabledWarnings.splice(i, 1);
    }
  };
}
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for ReactiveElement usage.
((_global$reactiveEleme = global.reactiveElementVersions) != null ? _global$reactiveEleme : global.reactiveElementVersions = []).push('2.0.4');
if (DEV_MODE && global.reactiveElementVersions.length > 1) {
  issueWarning('multiple-versions', "Multiple versions of Lit loaded. Loading multiple versions " + "is not recommended.");
}

/***/ }),

/***/ "./node_modules/lit-element/development/lit-element.js":
/*!*************************************************************!*\
  !*** ./node_modules/lit-element/development/lit-element.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* binding */ LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   _$LE: () => (/* binding */ _$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__.html),
/* harmony export */   noChange: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_html__WEBPACK_IMPORTED_MODULE_3__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");


var _globalThis$litElemen;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * The main LitElement module, which defines the {@linkcode LitElement} base
 * class and related APIs.
 *
 *  LitElement components can define a template and a set of observed
 * properties. Changing an observed property triggers a re-render of the
 * element.
 *
 *  Import {@linkcode LitElement} and {@linkcode html} from this module to
 * create a component:
 *
 *  ```js
 * import {LitElement, html} from 'lit-element';
 *
 * class MyElement extends LitElement {
 *
 *   // Declare observed properties
 *   static get properties() {
 *     return {
 *       adjective: {}
 *     }
 *   }
 *
 *   constructor() {
 *     this.adjective = 'awesome';
 *   }
 *
 *   // Define the element's template
 *   render() {
 *     return html`<p>your ${adjective} template here</p>`;
 *   }
 * }
 *
 * customElements.define('my-element', MyElement);
 * ```
 *
 * `LitElement` extends {@linkcode ReactiveElement} and adds lit-html
 * templating. The `ReactiveElement` class is provided for users that want to
 * build their own custom element base classes that don't use lit-html.
 *
 * @packageDocumentation
 */




/*
 * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
 * replaced at compile time by the munged name for object[property]. We cannot
 * alias this function, so we have to use a small shim that has the same
 * behavior when not compiling.
 */
/*@__INLINE__*/
var JSCompiler_renameProperty = function JSCompiler_renameProperty(prop, _obj) {
  return prop;
};
var DEV_MODE = true;
var issueWarning;
if (DEV_MODE) {
  var _globalThis$litIssued;
  // Ensure warnings are issued only 1x, even if multiple versions of Lit
  // are loaded.
  var issuedWarnings = (_globalThis$litIssued = globalThis.litIssuedWarnings) != null ? _globalThis$litIssued : globalThis.litIssuedWarnings = new Set();
  // Issue a warning, if we haven't already.
  issueWarning = function issueWarning(code, warning) {
    warning += " See https://lit.dev/msg/" + code + " for more information.";
    if (!issuedWarnings.has(warning)) {
      console.warn(warning);
      issuedWarnings.add(warning);
    }
  };
}
/**
 * Base element class that manages element properties and attributes, and
 * renders a lit-html template.
 *
 * To define a component, subclass `LitElement` and implement a
 * `render` method to provide the component's template. Define properties
 * using the {@linkcode LitElement.properties properties} property or the
 * {@linkcode property} decorator.
 */
var LitElement = /*#__PURE__*/function (_ReactiveElement) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(LitElement, _ReactiveElement);
  function LitElement() {
    var _this;
    _this = _ReactiveElement.apply(this, arguments) || this;
    /**
     * @category rendering
     */
    _this.renderOptions = {
      host: (0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this)
    };
    _this.__childPart = undefined;
    return _this;
  }
  /**
   * @category rendering
   */
  var _proto = LitElement.prototype;
  _proto.createRenderRoot = function createRenderRoot() {
    var _this$renderOptions, _this$renderOptions$r;
    var renderRoot = _ReactiveElement.prototype.createRenderRoot.call(this);
    // When adoptedStyleSheets are shimmed, they are inserted into the
    // shadowRoot by createRenderRoot. Adjust the renderBefore node so that
    // any styles in Lit content render before adoptedStyleSheets. This is
    // important so that adoptedStyleSheets have precedence over styles in
    // the shadowRoot.
    (_this$renderOptions$r = (_this$renderOptions = this.renderOptions).renderBefore) != null ? _this$renderOptions$r : _this$renderOptions.renderBefore = renderRoot.firstChild;
    return renderRoot;
  }
  /**
   * Updates the element. This method reflects property values to attributes
   * and calls `render` to render DOM via lit-html. Setting properties inside
   * this method will *not* trigger another update.
   * @param changedProperties Map of changed properties with old values
   * @category updates
   */;
  _proto.update = function update(changedProperties) {
    // Setting properties in `render` should not trigger an update. Since
    // updates are allowed after super.update, it's important to call `render`
    // before that.
    var value = this.render();
    if (!this.hasUpdated) {
      this.renderOptions.isConnected = this.isConnected;
    }
    _ReactiveElement.prototype.update.call(this, changedProperties);
    this.__childPart = (0,lit_html__WEBPACK_IMPORTED_MODULE_3__.render)(value, this.renderRoot, this.renderOptions);
  }
  /**
   * Invoked when the component is added to the document's DOM.
   *
   * In `connectedCallback()` you should setup tasks that should only occur when
   * the element is connected to the document. The most common of these is
   * adding event listeners to nodes external to the element, like a keydown
   * event handler added to the window.
   *
   * ```ts
   * connectedCallback() {
   *   super.connectedCallback();
   *   addEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * Typically, anything done in `connectedCallback()` should be undone when the
   * element is disconnected, in `disconnectedCallback()`.
   *
   * @category lifecycle
   */;
  _proto.connectedCallback = function connectedCallback() {
    var _this$__childPart;
    _ReactiveElement.prototype.connectedCallback.call(this);
    (_this$__childPart = this.__childPart) == null ? void 0 : _this$__childPart.setConnected(true);
  }
  /**
   * Invoked when the component is removed from the document's DOM.
   *
   * This callback is the main signal to the element that it may no longer be
   * used. `disconnectedCallback()` should ensure that nothing is holding a
   * reference to the element (such as event listeners added to nodes external
   * to the element), so that it is free to be garbage collected.
   *
   * ```ts
   * disconnectedCallback() {
   *   super.disconnectedCallback();
   *   window.removeEventListener('keydown', this._handleKeydown);
   * }
   * ```
   *
   * An element may be re-connected after being disconnected.
   *
   * @category lifecycle
   */;
  _proto.disconnectedCallback = function disconnectedCallback() {
    var _this$__childPart2;
    _ReactiveElement.prototype.disconnectedCallback.call(this);
    (_this$__childPart2 = this.__childPart) == null ? void 0 : _this$__childPart2.setConnected(false);
  }
  /**
   * Invoked on each update to perform rendering tasks. This method may return
   * any value renderable by lit-html's `ChildPart` - typically a
   * `TemplateResult`. Setting properties inside this method will *not* trigger
   * the element to update.
   * @category rendering
   */;
  _proto.render = function render() {
    return lit_html__WEBPACK_IMPORTED_MODULE_3__.noChange;
  };
  return LitElement;
}(_lit_reactive_element__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement);
// This property needs to remain unminified.
LitElement['_$litElement$'] = true;
/**
 * Ensure this class is marked as `finalized` as an optimization ensuring
 * it will not needlessly try to `finalize`.
 *
 * Note this property name is a string to prevent breaking Closure JS Compiler
 * optimizations. See @lit/reactive-element for more information.
 */
LitElement[JSCompiler_renameProperty('finalized', LitElement)] = true;
// Install hydration if available
globalThis.litElementHydrateSupport == null ? void 0 : globalThis.litElementHydrateSupport({
  LitElement: LitElement
});
// Apply polyfills if available
var polyfillSupport = DEV_MODE ? globalThis.litElementPolyfillSupportDevMode : globalThis.litElementPolyfillSupport;
polyfillSupport == null ? void 0 : polyfillSupport({
  LitElement: LitElement
});
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LE object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-html, since this module re-exports all of lit-html.
 *
 * @private
 */
var _$LE = {
  _$attributeToProperty: function _$attributeToProperty(el, name, value) {
    // eslint-disable-next-line
    el._$attributeToProperty(name, value);
  },
  // eslint-disable-next-line
  _$changedProperties: function _$changedProperties(el) {
    return el._$changedProperties;
  }
};
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for LitElement usage.
((_globalThis$litElemen = globalThis.litElementVersions) != null ? _globalThis$litElemen : globalThis.litElementVersions = []).push('4.0.4');
if (DEV_MODE && globalThis.litElementVersions.length > 1) {
  issueWarning('multiple-versions', "Multiple versions of Lit loaded. Loading multiple versions " + "is not recommended.");
}

/***/ }),

/***/ "./node_modules/lit-html/development/directive-helpers.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directive-helpers.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemplateResultType: () => (/* binding */ TemplateResultType),
/* harmony export */   clearPart: () => (/* binding */ clearPart),
/* harmony export */   getCommittedValue: () => (/* binding */ getCommittedValue),
/* harmony export */   getDirectiveClass: () => (/* binding */ getDirectiveClass),
/* harmony export */   insertPart: () => (/* binding */ insertPart),
/* harmony export */   isCompiledTemplateResult: () => (/* binding */ isCompiledTemplateResult),
/* harmony export */   isDirectiveResult: () => (/* binding */ isDirectiveResult),
/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),
/* harmony export */   isSingleExpression: () => (/* binding */ isSingleExpression),
/* harmony export */   isTemplateResult: () => (/* binding */ isTemplateResult),
/* harmony export */   removePart: () => (/* binding */ removePart),
/* harmony export */   setChildPartValue: () => (/* binding */ setChildPartValue),
/* harmony export */   setCommittedValue: () => (/* binding */ setCommittedValue)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
var _window$ShadyDOM, _window$ShadyDOM2;
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

var ChildPart = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__._$LH._ChildPart;
var ENABLE_SHADYDOM_NOPATCH = true;
var wrap = ENABLE_SHADYDOM_NOPATCH && (_window$ShadyDOM = window.ShadyDOM) != null && _window$ShadyDOM.inUse && ((_window$ShadyDOM2 = window.ShadyDOM) == null ? void 0 : _window$ShadyDOM2.noPatch) === true ? window.ShadyDOM.wrap : function (node) {
  return node;
};
/**
 * Tests if a value is a primitive value.
 *
 * See https://tc39.github.io/ecma262/#sec-typeof-operator
 */
var isPrimitive = function isPrimitive(value) {
  return value === null || typeof value != 'object' && typeof value != 'function';
};
var TemplateResultType = {
  HTML: 1,
  SVG: 2
};
/**
 * Tests if a value is a TemplateResult or a CompiledTemplateResult.
 */
var isTemplateResult = function isTemplateResult(value, type) {
  return type === undefined ?
  // This property needs to remain unminified.
  (value == null ? void 0 : value['_$litType$']) !== undefined : (value == null ? void 0 : value['_$litType$']) === type;
};
/**
 * Tests if a value is a CompiledTemplateResult.
 */
var isCompiledTemplateResult = function isCompiledTemplateResult(value) {
  var _value$_$litType$;
  return (value == null ? void 0 : (_value$_$litType$ = value['_$litType$']) == null ? void 0 : _value$_$litType$.h) != null;
};
/**
 * Tests if a value is a DirectiveResult.
 */
var isDirectiveResult = function isDirectiveResult(value) {
  return (
    // This property needs to remain unminified.
    (value == null ? void 0 : value['_$litDirective$']) !== undefined
  );
};
/**
 * Retrieves the Directive class for a DirectiveResult
 */
var getDirectiveClass = function getDirectiveClass(value) {
  return (// This property needs to remain unminified.
    value == null ? void 0 : value['_$litDirective$']
  );
};
/**
 * Tests whether a part has only a single-expression with no strings to
 * interpolate between.
 *
 * Only AttributePart and PropertyPart can have multiple expressions.
 * Multi-expression parts have a `strings` property and single-expression
 * parts do not.
 */
var isSingleExpression = function isSingleExpression(part) {
  return part.strings === undefined;
};
var createMarker = function createMarker() {
  return document.createComment('');
};
/**
 * Inserts a ChildPart into the given container ChildPart's DOM, either at the
 * end of the container ChildPart, or before the optional `refPart`.
 *
 * This does not add the part to the containerPart's committed value. That must
 * be done by callers.
 *
 * @param containerPart Part within which to add the new ChildPart
 * @param refPart Part before which to add the new ChildPart; when omitted the
 *     part added to the end of the `containerPart`
 * @param part Part to insert, or undefined to create a new part
 */
var insertPart = function insertPart(containerPart, refPart, part) {
  var container = wrap(containerPart._$startNode).parentNode;
  var refNode = refPart === undefined ? containerPart._$endNode : refPart._$startNode;
  if (part === undefined) {
    var startNode = wrap(container).insertBefore(createMarker(), refNode);
    var endNode = wrap(container).insertBefore(createMarker(), refNode);
    part = new ChildPart(startNode, endNode, containerPart, containerPart.options);
  } else {
    var _endNode = wrap(part._$endNode).nextSibling;
    var oldParent = part._$parent;
    var parentChanged = oldParent !== containerPart;
    if (parentChanged) {
      part._$reparentDisconnectables == null ? void 0 : part._$reparentDisconnectables(containerPart);
      // Note that although `_$reparentDisconnectables` updates the part's
      // `_$parent` reference after unlinking from its current parent, that
      // method only exists if Disconnectables are present, so we need to
      // unconditionally set it here
      part._$parent = containerPart;
      // Since the _$isConnected getter is somewhat costly, only
      // read it once we know the subtree has directives that need
      // to be notified
      var newConnectionState;
      if (part._$notifyConnectionChanged !== undefined && (newConnectionState = containerPart._$isConnected) !== oldParent._$isConnected) {
        part._$notifyConnectionChanged(newConnectionState);
      }
    }
    if (_endNode !== refNode || parentChanged) {
      var start = part._$startNode;
      while (start !== _endNode) {
        var n = wrap(start).nextSibling;
        wrap(container).insertBefore(start, refNode);
        start = n;
      }
    }
  }
  return part;
};
/**
 * Sets the value of a Part.
 *
 * Note that this should only be used to set/update the value of user-created
 * parts (i.e. those created using `insertPart`); it should not be used
 * by directives to set the value of the directive's container part. Directives
 * should return a value from `update`/`render` to update their part state.
 *
 * For directives that require setting their part value asynchronously, they
 * should extend `AsyncDirective` and call `this.setValue()`.
 *
 * @param part Part to set
 * @param value Value to set
 * @param index For `AttributePart`s, the index to set
 * @param directiveParent Used internally; should not be set by user
 */
var setChildPartValue = function setChildPartValue(part, value, directiveParent) {
  if (directiveParent === void 0) {
    directiveParent = part;
  }
  part._$setValue(value, directiveParent);
  return part;
};
// A sentinel value that can never appear as a part value except when set by
// live(). Used to force a dirty-check to fail and cause a re-render.
var RESET_VALUE = {};
/**
 * Sets the committed value of a ChildPart directly without triggering the
 * commit stage of the part.
 *
 * This is useful in cases where a directive needs to update the part such
 * that the next update detects a value change or not. When value is omitted,
 * the next update will be guaranteed to be detected as a change.
 *
 * @param part
 * @param value
 */
var setCommittedValue = function setCommittedValue(part, value) {
  if (value === void 0) {
    value = RESET_VALUE;
  }
  return part._$committedValue = value;
};
/**
 * Returns the committed value of a ChildPart.
 *
 * The committed value is used for change detection and efficient updates of
 * the part. It can differ from the value set by the template or directive in
 * cases where the template value is transformed before being committed.
 *
 * - `TemplateResult`s are committed as a `TemplateInstance`
 * - Iterables are committed as `Array<ChildPart>`
 * - All other types are committed as the template value or value returned or
 *   set by a directive.
 *
 * @param part
 */
var getCommittedValue = function getCommittedValue(part) {
  return part._$committedValue;
};
/**
 * Removes a ChildPart from the DOM, including any of its content.
 *
 * @param part The Part to remove
 */
var removePart = function removePart(part) {
  part._$notifyConnectionChanged == null ? void 0 : part._$notifyConnectionChanged(false, true);
  var start = part._$startNode;
  var end = wrap(part._$endNode).nextSibling;
  while (start !== end) {
    var n = wrap(start).nextSibling;
    wrap(start).remove();
    start = n;
  }
};
var clearPart = function clearPart(part) {
  part._$clear();
};

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Directive: () => (/* binding */ Directive),
/* harmony export */   PartType: () => (/* binding */ PartType),
/* harmony export */   directive: () => (/* binding */ directive)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var PartType = {
  ATTRIBUTE: 1,
  CHILD: 2,
  PROPERTY: 3,
  BOOLEAN_ATTRIBUTE: 4,
  EVENT: 5,
  ELEMENT: 6
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
var directive = function directive(c) {
  return function () {
    var _ref;
    for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
      values[_key] = arguments[_key];
    }
    return _ref = {}, _ref['_$litDirective$'] = c, _ref.values = values, _ref;
  };
};
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
var Directive = /*#__PURE__*/function () {
  function Directive(_partInfo) {}
  // See comment in Disconnectable interface for why this is a getter
  var _proto = Directive.prototype;
  /** @internal */
  _proto._$initialize = function _$initialize(part, parent, attributeIndex) {
    this.__part = part;
    this._$parent = parent;
    this.__attributeIndex = attributeIndex;
  }
  /** @internal */;
  _proto._$resolve = function _$resolve(part, props) {
    return this.update(part, props);
  };
  _proto.update = function update(_part, props) {
    return this.render.apply(this, props);
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Directive, [{
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }]);
  return Directive;
}();

/***/ }),

/***/ "./node_modules/lit-html/development/directives/repeat.js":
/*!****************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/repeat.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   repeat: () => (/* binding */ repeat)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/* harmony import */ var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../directive-helpers.js */ "./node_modules/lit-html/development/directive-helpers.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */



// Helper for generating a map of array item to its index over a subset
// of an array (used to lazily generate `newKeyToIndexMap` and
// `oldKeyToIndexMap`)
var generateMap = function generateMap(list, start, end) {
  var map = new Map();
  for (var i = start; i <= end; i++) {
    map.set(list[i], i);
  }
  return map;
};
var RepeatDirective = /*#__PURE__*/function (_Directive) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(RepeatDirective, _Directive);
  function RepeatDirective(partInfo) {
    var _this;
    _this = _Directive.call(this, partInfo) || this;
    if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_2__.PartType.CHILD) {
      throw new Error('repeat() can only be used in text expressions');
    }
    return _this;
  }
  var _proto = RepeatDirective.prototype;
  _proto._getValuesAndKeys = function _getValuesAndKeys(items, keyFnOrTemplate, template) {
    var keyFn;
    if (template === undefined) {
      template = keyFnOrTemplate;
    } else if (keyFnOrTemplate !== undefined) {
      keyFn = keyFnOrTemplate;
    }
    var keys = [];
    var values = [];
    var index = 0;
    for (var _iterator = _createForOfIteratorHelperLoose(items), _step; !(_step = _iterator()).done;) {
      var item = _step.value;
      keys[index] = keyFn ? keyFn(item, index) : index;
      values[index] = template(item, index);
      index++;
    }
    return {
      values: values,
      keys: keys
    };
  };
  _proto.render = function render(items, keyFnOrTemplate, template) {
    return this._getValuesAndKeys(items, keyFnOrTemplate, template).values;
  };
  _proto.update = function update(containerPart, _ref) {
    var _this$_itemKeys;
    var items = _ref[0],
      keyFnOrTemplate = _ref[1],
      template = _ref[2];
    // Old part & key lists are retrieved from the last update (which may
    // be primed by hydration)
    var oldParts = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.getCommittedValue)(containerPart);
    var _this$_getValuesAndKe = this._getValuesAndKeys(items, keyFnOrTemplate, template),
      newValues = _this$_getValuesAndKe.values,
      newKeys = _this$_getValuesAndKe.keys;
    // We check that oldParts, the committed value, is an Array as an
    // indicator that the previous value came from a repeat() call. If
    // oldParts is not an Array then this is the first render and we return
    // an array for lit-html's array handling to render, and remember the
    // keys.
    if (!Array.isArray(oldParts)) {
      this._itemKeys = newKeys;
      return newValues;
    }
    // In SSR hydration it's possible for oldParts to be an array but for us
    // to not have item keys because the update() hasn't run yet. We set the
    // keys to an empty array. This will cause all oldKey/newKey comparisons
    // to fail and execution to fall to the last nested brach below which
    // reuses the oldPart.
    var oldKeys = (_this$_itemKeys = this._itemKeys) != null ? _this$_itemKeys : this._itemKeys = [];
    // New part list will be built up as we go (either reused from
    // old parts or created for new keys in this update). This is
    // saved in the above cache at the end of the update.
    var newParts = [];
    // Maps from key to index for current and previous update; these
    // are generated lazily only when needed as a performance
    // optimization, since they are only required for multiple
    // non-contiguous changes in the list, which are less common.
    var newKeyToIndexMap;
    var oldKeyToIndexMap;
    // Head and tail pointers to old parts and new values
    var oldHead = 0;
    var oldTail = oldParts.length - 1;
    var newHead = 0;
    var newTail = newValues.length - 1;
    // Overview of O(n) reconciliation algorithm (general approach
    // based on ideas found in ivi, vue, snabbdom, etc.):
    //
    // * We start with the list of old parts and new values (and
    //   arrays of their respective keys), head/tail pointers into
    //   each, and we build up the new list of parts by updating
    //   (and when needed, moving) old parts or creating new ones.
    //   The initial scenario might look like this (for brevity of
    //   the diagrams, the numbers in the array reflect keys
    //   associated with the old parts or new values, although keys
    //   and parts/values are actually stored in parallel arrays
    //   indexed using the same head/tail pointers):
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [ ,  ,  ,  ,  ,  ,  ]
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
    //                                      item order
    //      newHead ^                 ^ newTail
    //
    // * Iterate old & new lists from both sides, updating,
    //   swapping, or removing parts at the head/tail locations
    //   until neither head nor tail can move.
    //
    // * Example below: keys at head pointers match, so update old
    //   part 0 in-place (no need to move it) and record part 0 in
    //   the `newParts` list. The last thing we do is advance the
    //   `oldHead` and `newHead` pointers (will be reflected in the
    //   next diagram).
    //
    //      oldHead v                 v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //      newHead ^                 ^ newTail
    //
    // * Example below: head pointers don't match, but tail
    //   pointers do, so update part 6 in place (no need to move
    //   it), and record part 6 in the `newParts` list. Last,
    //   advance the `oldTail` and `oldHead` pointers.
    //
    //         oldHead v              v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
    //                                      & newTail
    //         newHead ^              ^ newTail
    //
    // * If neither head nor tail match; next check if one of the
    //   old head/tail items was removed. We first need to generate
    //   the reverse map of new keys to index (`newKeyToIndexMap`),
    //   which is done once lazily as a performance optimization,
    //   since we only hit this case if multiple non-contiguous
    //   changes were made. Note that for contiguous removal
    //   anywhere in the list, the head and tails would advance
    //   from either end and pass each other before we get to this
    //   case and removals would be handled in the final while loop
    //   without needing to generate the map.
    //
    // * Example below: The key at `oldTail` was removed (no longer
    //   in the `newKeyToIndexMap`), so remove that part from the
    //   DOM and advance just the `oldTail` pointer.
    //
    //         oldHead v           v oldTail
    //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
    //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
    //         newHead ^           ^ newTail
    //
    // * Once head and tail cannot move, any mismatches are due to
    //   either new or moved items; if a new key is in the previous
    //   "old key to old index" map, move the old part to the new
    //   location, otherwise create and insert a new part. Note
    //   that when moving an old part we null its position in the
    //   oldParts array if it lies between the head and tail so we
    //   know to skip it when the pointers get there.
    //
    // * Example below: neither head nor tail match, and neither
    //   were removed; so find the `newHead` key in the
    //   `oldKeyToIndexMap`, and move that old part's DOM into the
    //   next head position (before `oldParts[oldHead]`). Last,
    //   null the part in the `oldPart` array since it was
    //   somewhere in the remaining oldParts still to be scanned
    //   (between the head and tail pointers) so that we know to
    //   skip that old part on future iterations.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
    //                                      newHead
    //         newHead ^           ^ newTail
    //
    // * Note that for moves/insertions like the one above, a part
    //   inserted at the head pointer is inserted before the
    //   current `oldParts[oldHead]`, and a part inserted at the
    //   tail pointer is inserted before `newParts[newTail+1]`. The
    //   seeming asymmetry lies in the fact that new parts are
    //   moved into place outside in, so to the right of the head
    //   pointer are old parts, and to the right of the tail
    //   pointer are new parts.
    //
    // * We always restart back from the top of the algorithm,
    //   allowing matching and simple updates in place to
    //   continue...
    //
    // * Example below: the head pointers once again match, so
    //   simply update part 1 and record it in the `newParts`
    //   array.  Last, advance both head pointers.
    //
    //         oldHead v        v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
    //                                      & newHead
    //            newHead ^        ^ newTail
    //
    // * As mentioned above, items that were moved as a result of
    //   being stuck (the final else clause in the code below) are
    //   marked with null, so we always advance old pointers over
    //   these so we're comparing the next actual old value on
    //   either end.
    //
    // * Example below: `oldHead` is null (already placed in
    //   newParts), so advance `oldHead`.
    //
    //            oldHead v     v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
    //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //               newHead ^     ^ newTail
    //
    // * Note it's not critical to mark old parts as null when they
    //   are moved from head to tail or tail to head, since they
    //   will be outside the pointer range and never visited again.
    //
    // * Example below: Here the old tail key matches the new head
    //   key, so the part at the `oldTail` position and move its
    //   DOM to the new head position (before `oldParts[oldHead]`).
    //   Last, advance `oldTail` and `newHead` pointers.
    //
    //               oldHead v  v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
    //                                     advance oldTail & newHead
    //               newHead ^     ^ newTail
    //
    // * Example below: Old and new head keys match, so update the
    //   old head part in place, and advance the `oldHead` and
    //   `newHead` pointers.
    //
    //               oldHead v oldTail
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
    //                                      newHead
    //                  newHead ^  ^ newTail
    //
    // * Once the new or old pointers move past each other then all
    //   we have left is additions (if old list exhausted) or
    //   removals (if new list exhausted). Those are handled in the
    //   final while loops at the end.
    //
    // * Example below: `oldHead` exceeded `oldTail`, so we're done
    //   with the main loop.  Create the remaining part and insert
    //   it at the new head position, and the update is complete.
    //
    //                   (oldHead > oldTail)
    //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
    //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
    //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
    //                     newHead ^ newTail
    //
    // * Note that the order of the if/else clauses is not
    //   important to the algorithm, as long as the null checks
    //   come first (to ensure we're always working on valid old
    //   parts) and that the final else clause comes last (since
    //   that's where the expensive moves occur). The order of
    //   remaining clauses is is just a simple guess at which cases
    //   will be most common.
    //
    // * Note, we could calculate the longest
    //   increasing subsequence (LIS) of old items in new position,
    //   and only move those not in the LIS set. However that costs
    //   O(nlogn) time and adds a bit more code, and only helps
    //   make rare types of mutations require fewer moves. The
    //   above handles removes, adds, reversal, swaps, and single
    //   moves of contiguous items in linear time, in the minimum
    //   number of moves. As the number of multiple moves where LIS
    //   might help approaches a random shuffle, the LIS
    //   optimization becomes less helpful, so it seems not worth
    //   the code at this point. Could reconsider if a compelling
    //   case arises.
    while (oldHead <= oldTail && newHead <= newTail) {
      if (oldParts[oldHead] === null) {
        // `null` means old part at head has already been used
        // below; skip
        oldHead++;
      } else if (oldParts[oldTail] === null) {
        // `null` means old part at tail has already been used
        // below; skip
        oldTail--;
      } else if (oldKeys[oldHead] === newKeys[newHead]) {
        // Old head matches new head; update in place
        newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(oldParts[oldHead], newValues[newHead]);
        oldHead++;
        newHead++;
      } else if (oldKeys[oldTail] === newKeys[newTail]) {
        // Old tail matches new tail; update in place
        newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(oldParts[oldTail], newValues[newTail]);
        oldTail--;
        newTail--;
      } else if (oldKeys[oldHead] === newKeys[newTail]) {
        // Old head matches new tail; update and move to new tail
        newParts[newTail] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(oldParts[oldHead], newValues[newTail]);
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.insertPart)(containerPart, newParts[newTail + 1], oldParts[oldHead]);
        oldHead++;
        newTail--;
      } else if (oldKeys[oldTail] === newKeys[newHead]) {
        // Old tail matches new head; update and move to new head
        newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(oldParts[oldTail], newValues[newHead]);
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.insertPart)(containerPart, oldParts[oldHead], oldParts[oldTail]);
        oldTail--;
        newHead++;
      } else {
        if (newKeyToIndexMap === undefined) {
          // Lazily generate key-to-index maps, used for removals &
          // moves below
          newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
          oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
        }
        if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
          // Old head is no longer in new list; remove
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.removePart)(oldParts[oldHead]);
          oldHead++;
        } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
          // Old tail is no longer in new list; remove
          (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.removePart)(oldParts[oldTail]);
          oldTail--;
        } else {
          // Any mismatches at this point are due to additions or
          // moves; see if we have an old part we can reuse and move
          // into place
          var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
          var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;
          if (oldPart === null) {
            // No old part for this value; create a new one and
            // insert it
            var newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.insertPart)(containerPart, oldParts[oldHead]);
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(newPart, newValues[newHead]);
            newParts[newHead] = newPart;
          } else {
            // Reuse old part
            newParts[newHead] = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(oldPart, newValues[newHead]);
            (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.insertPart)(containerPart, oldParts[oldHead], oldPart);
            // This marks the old part as having been used, so that
            // it will be skipped in the first two checks above
            oldParts[oldIndex] = null;
          }
          newHead++;
        }
      }
    }
    // Add parts for any remaining new values
    while (newHead <= newTail) {
      // For all remaining additions, we insert before last new
      // tail, since old pointers are no longer valid
      var _newPart = (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.insertPart)(containerPart, newParts[newTail + 1]);
      (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setChildPartValue)(_newPart, newValues[newHead]);
      newParts[newHead++] = _newPart;
    }
    // Remove any remaining unused old parts
    while (oldHead <= oldTail) {
      var _oldPart = oldParts[oldHead++];
      if (_oldPart !== null) {
        (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.removePart)(_oldPart);
      }
    }
    // Save order of new parts for next round
    this._itemKeys = newKeys;
    // Directly set part value, bypassing it's dirty-checking
    (0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_3__.setCommittedValue)(containerPart, newParts);
    return _lit_html_js__WEBPACK_IMPORTED_MODULE_1__.noChange;
  };
  return RepeatDirective;
}(_directive_js__WEBPACK_IMPORTED_MODULE_2__.Directive);
/**
 * A directive that repeats a series of values (usually `TemplateResults`)
 * generated from an iterable, and updates those items efficiently when the
 * iterable changes based on user-provided `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
 * meaning previous DOM for a given key is moved into the new position if
 * needed, and DOM will never be reused with values for different keys (new DOM
 * will always be created for new keys). This is generally the most efficient
 * way to use `repeat` since it performs minimum unnecessary work for insertions
 * and removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *   <ol>
 *     ${repeat(this.items, (item) => item.id, (item, index) => {
 *       return html`<li>${index}: ${item.name}</li>`;
 *     })}
 *   </ol>
 * `
 * ```
 *
 * **Important**: If providing a `keyFn`, keys *must* be unique for all items in a
 * given call to `repeat`. The behavior when two or more items have the same key
 * is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping
 * items to values, and DOM will be reused against potentially different items.
 */
var repeat = (0,_directive_js__WEBPACK_IMPORTED_MODULE_2__.directive)(RepeatDirective);

/***/ }),

/***/ "./node_modules/lit-html/development/is-server.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/is-server.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isServer: () => (/* binding */ isServer)
/* harmony export */ });
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @fileoverview
 *
 * This file exports a boolean const whose value will depend on what environment
 * the module is being imported from.
 */
var NODE_MODE = false;
/**
 * A boolean that will be `true` in server environments like Node, and `false`
 * in browser environments. Note that your server environment or toolchain must
 * support the `"node"` export condition for this to be `true`.
 *
 * This can be used when authoring components to change behavior based on
 * whether or not the component is executing in an SSR context.
 */
var isServer = NODE_MODE;

/***/ }),

/***/ "./node_modules/lit-html/development/lit-html.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/development/lit-html.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _$LH: () => (/* binding */ _$LH),
/* harmony export */   html: () => (/* binding */ html),
/* harmony export */   noChange: () => (/* binding */ noChange),
/* harmony export */   nothing: () => (/* binding */ nothing),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   svg: () => (/* binding */ svg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var _global$ShadyDOM, _global$ShadyDOM2, _global$litHtmlVersio;
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var DEV_MODE = true;
var ENABLE_EXTRA_SECURITY_HOOKS = true;
var ENABLE_SHADYDOM_NOPATCH = true;
var NODE_MODE = false;
// Allows minifiers to rename references to globalThis
var global = globalThis;
/**
 * Useful for visualizing and logging insights into what the Lit template system is doing.
 *
 * Compiled out of prod mode builds.
 */
var debugLogEvent = DEV_MODE ? function (event) {
  var shouldEmit = global.emitLitDebugLogEvents;
  if (!shouldEmit) {
    return;
  }
  global.dispatchEvent(new CustomEvent('lit-debug', {
    detail: event
  }));
} : undefined;
// Used for connecting beginRender and endRender events when there are nested
// renders when errors are thrown preventing an endRender event from being
// called.
var debugLogRenderId = 0;
var issueWarning;
if (DEV_MODE) {
  var _global$litIssuedWarn;
  (_global$litIssuedWarn = global.litIssuedWarnings) != null ? _global$litIssuedWarn : global.litIssuedWarnings = new Set();
  // Issue a warning, if we haven't already.
  issueWarning = function issueWarning(code, warning) {
    warning += code ? " See https://lit.dev/msg/" + code + " for more information." : '';
    if (!global.litIssuedWarnings.has(warning)) {
      console.warn(warning);
      global.litIssuedWarnings.add(warning);
    }
  };
  issueWarning('dev-mode', "Lit is in dev mode. Not recommended for production!");
}
var wrap = ENABLE_SHADYDOM_NOPATCH && (_global$ShadyDOM = global.ShadyDOM) != null && _global$ShadyDOM.inUse && ((_global$ShadyDOM2 = global.ShadyDOM) == null ? void 0 : _global$ShadyDOM2.noPatch) === true ? global.ShadyDOM.wrap : function (node) {
  return node;
};
var trustedTypes = global.trustedTypes;
/**
 * Our TrustedTypePolicy for HTML which is declared using the html template
 * tag function.
 *
 * That HTML is a developer-authored constant, and is parsed with innerHTML
 * before any untrusted expressions have been mixed in. Therefor it is
 * considered safe by construction.
 */
var policy = trustedTypes ? trustedTypes.createPolicy('lit-html', {
  createHTML: function createHTML(s) {
    return s;
  }
}) : undefined;
var identityFunction = function identityFunction(value) {
  return value;
};
var noopSanitizer = function noopSanitizer(_node, _name, _type) {
  return identityFunction;
};
/** Sets the global sanitizer factory. */
var setSanitizer = function setSanitizer(newSanitizer) {
  if (!ENABLE_EXTRA_SECURITY_HOOKS) {
    return;
  }
  if (sanitizerFactoryInternal !== noopSanitizer) {
    throw new Error("Attempted to overwrite existing lit-html security policy." + " setSanitizeDOMValueFactory should be called at most once.");
  }
  sanitizerFactoryInternal = newSanitizer;
};
/**
 * Only used in internal tests, not a part of the public API.
 */
var _testOnlyClearSanitizerFactoryDoNotCallOrElse = function _testOnlyClearSanitizerFactoryDoNotCallOrElse() {
  sanitizerFactoryInternal = noopSanitizer;
};
var createSanitizer = function createSanitizer(node, name, type) {
  return sanitizerFactoryInternal(node, name, type);
};
// Added to an attribute name to mark the attribute as bound so we can find
// it easily.
var boundAttributeSuffix = '$lit$';
// This marker is used in many syntactic positions in HTML, so it must be
// a valid element name and attribute name. We don't support dynamic names (yet)
// but this at least ensures that the parse tree is closer to the template
// intention.
var marker = "lit$" + String(Math.random()).slice(9) + "$";
// String used to tell if a comment is a marker comment
var markerMatch = '?' + marker;
// Text used to insert a comment marker node. We use processing instruction
// syntax because it's slightly smaller, but parses as a comment node.
var nodeMarker = "<" + markerMatch + ">";
var d = NODE_MODE && global.document === undefined ? {
  createTreeWalker: function createTreeWalker() {
    return {};
  }
} : document;
// Creates a dynamic marker. We never have to search for these in the DOM.
var createMarker = function createMarker() {
  return d.createComment('');
};
var isPrimitive = function isPrimitive(value) {
  return value === null || typeof value != 'object' && typeof value != 'function';
};
var isArray = Array.isArray;
var isIterable = function isIterable(value) {
  return isArray(value) ||
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  typeof (value == null ? void 0 : value[Symbol.iterator]) === 'function';
};
var SPACE_CHAR = "[ \t\n\f\r]";
var ATTR_VALUE_CHAR = "[^ \t\n\f\r\"'`<>=]";
var NAME_CHAR = "[^\\s\"'>=/]";
// These regexes represent the five parsing states that we care about in the
// Template's HTML scanner. They match the *end* of the state they're named
// after.
// Depending on the match, we transition to a new state. If there's no match,
// we stay in the same state.
// Note that the regexes are stateful. We utilize lastIndex and sync it
// across the multiple regexes used. In addition to the five regexes below
// we also dynamically create a regex to find the matching end tags for raw
// text elements.
/**
 * End of text is: `<` followed by:
 *   (comment start) or (tag) or (dynamic tag binding)
 */
var textEndRegex = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var COMMENT_START = 1;
var TAG_NAME = 2;
var DYNAMIC_TAG_NAME = 3;
var commentEndRegex = /-->/g;
/**
 * Comments not started with <!--, like </{, can be ended by a single `>`
 */
var comment2EndRegex = />/g;
/**
 * The tagEnd regex matches the end of the "inside an opening" tag syntax
 * position. It either matches a `>`, an attribute-like sequence, or the end
 * of the string after a space (attribute-name position ending).
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \t\n\f\r" are HTML space characters:
 * https://infra.spec.whatwg.org/#ascii-whitespace
 *
 * So an attribute is:
 *  * The name: any character except a whitespace character, ("), ('), ">",
 *    "=", or "/". Note: this is different from the HTML spec which also excludes control characters.
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
var tagEndRegex = new RegExp(">|" + SPACE_CHAR + "(?:(" + NAME_CHAR + "+)(" + SPACE_CHAR + "*=" + SPACE_CHAR + "*(?:" + ATTR_VALUE_CHAR + "|(\"|')|))|$)", 'g');
var ENTIRE_MATCH = 0;
var ATTRIBUTE_NAME = 1;
var SPACES_AND_EQUALS = 2;
var QUOTE_CHAR = 3;
var singleQuoteAttrEndRegex = /'/g;
var doubleQuoteAttrEndRegex = /"/g;
/**
 * Matches the raw text elements.
 *
 * Comments are not parsed within raw text elements, so we need to search their
 * text content for marker strings.
 */
var rawTextElement = /^(?:script|style|textarea|title)$/i;
/** TemplateResult types */
var HTML_RESULT = 1;
var SVG_RESULT = 2;
// TemplatePart types
// IMPORTANT: these must match the values in PartType
var ATTRIBUTE_PART = 1;
var CHILD_PART = 2;
var PROPERTY_PART = 3;
var BOOLEAN_ATTRIBUTE_PART = 4;
var EVENT_PART = 5;
var ELEMENT_PART = 6;
var COMMENT_PART = 7;
/**
 * Generates a template literal tag function that returns a TemplateResult with
 * the given result type.
 */
var tag = function tag(type) {
  return function (strings) {
    var _ref;
    // Warn against templates octal escape sequences
    // We do this here rather than in render so that the warning is closer to the
    // template definition.
    if (DEV_MODE && strings.some(function (s) {
      return s === undefined;
    })) {
      console.warn('Some template strings are undefined.\n' + 'This is probably caused by illegal octal escape sequences.');
    }
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    if (DEV_MODE) {
      // Import static-html.js results in a circular dependency which g3 doesn't
      // handle. Instead we know that static values must have the field
      // `_$litStatic$`.
      if (values.some(function (val) {
        return val == null ? void 0 : val['_$litStatic$'];
      })) {
        issueWarning('', "Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.\n" + "Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions");
      }
    }
    return _ref = {}, _ref['_$litType$'] = type, _ref.strings = strings, _ref.values = values, _ref;
  };
};
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const header = (title: string) => html`<h1>${title}</h1>`;
 * ```
 *
 * The `html` tag returns a description of the DOM to render as a value. It is
 * lazy, meaning no work is done until the template is rendered. When rendering,
 * if a template comes from the same expression as a previously rendered result,
 * it's efficiently updated instead of replaced.
 */
var html = tag(HTML_RESULT);
/**
 * Interprets a template literal as an SVG fragment that can efficiently
 * render to and update a container.
 *
 * ```ts
 * const rect = svg`<rect width="10" height="10"></rect>`;
 *
 * const myImage = html`
 *   <svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
 *     ${rect}
 *   </svg>`;
 * ```
 *
 * The `svg` *tag function* should only be used for SVG fragments, or elements
 * that would be contained **inside** an `<svg>` HTML element. A common error is
 * placing an `<svg>` *element* in a template tagged with the `svg` tag
 * function. The `<svg>` element is an HTML element and should be used within a
 * template tagged with the {@linkcode html} tag function.
 *
 * In LitElement usage, it's invalid to return an SVG fragment from the
 * `render()` method, as the SVG fragment will be contained within the element's
 * shadow root and thus cannot be used within an `<svg>` HTML element.
 */
var svg = tag(SVG_RESULT);
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
var noChange = Symbol["for"]('lit-noChange');
/**
 * A sentinel value that signals a ChildPart to fully clear its content.
 *
 * ```ts
 * const button = html`${
 *  user.isAdmin
 *    ? html`<button>DELETE</button>`
 *    : nothing
 * }`;
 * ```
 *
 * Prefer using `nothing` over other falsy values as it provides a consistent
 * behavior between various expression binding contexts.
 *
 * In child expressions, `undefined`, `null`, `''`, and `nothing` all behave the
 * same and render no nodes. In attribute expressions, `nothing` _removes_ the
 * attribute, while `undefined` and `null` will render an empty string. In
 * property expressions `nothing` becomes `undefined`.
 */
var nothing = Symbol["for"]('lit-nothing');
/**
 * The cache of prepared templates, keyed by the tagged TemplateStringsArray
 * and _not_ accounting for the specific template tag used. This means that
 * template tags cannot be dynamic - the must statically be one of html, svg,
 * or attr. This restriction simplifies the cache lookup, which is on the hot
 * path for rendering.
 */
var templateCache = new WeakMap();
var walker = d.createTreeWalker(d, 129 /* NodeFilter.SHOW_{ELEMENT|COMMENT} */);
var sanitizerFactoryInternal = noopSanitizer;
function trustFromTemplateString(tsa, stringFromTSA) {
  // A security check to prevent spoofing of Lit template results.
  // In the future, we may be able to replace this with Array.isTemplateObject,
  // though we might need to make that check inside of the html and svg
  // functions, because precompiled templates don't come in as
  // TemplateStringArray objects.
  if (!Array.isArray(tsa) || !tsa.hasOwnProperty('raw')) {
    var message = 'invalid template strings array';
    if (DEV_MODE) {
      message = "\n          Internal Error: expected template strings to be an array\n          with a 'raw' field. Faking a template strings array by\n          calling html or svg like an ordinary function is effectively\n          the same as calling unsafeHtml and can lead to major security\n          issues, e.g. opening your code up to XSS attacks.\n          If you're using the html or svg tagged template functions normally\n          and still seeing this error, please file a bug at\n          https://github.com/lit/lit/issues/new?template=bug_report.md\n          and include information about your build tooling, if any.\n        ".trim().replace(/\n */g, '\n');
    }
    throw new Error(message);
  }
  return policy !== undefined ? policy.createHTML(stringFromTSA) : stringFromTSA;
}
/**
 * Returns an HTML string for the given TemplateStringsArray and result type
 * (HTML or SVG), along with the case-sensitive bound attribute names in
 * template order. The HTML contains comment markers denoting the `ChildPart`s
 * and suffixes on bound attributes denoting the `AttributeParts`.
 *
 * @param strings template strings array
 * @param type HTML or SVG
 * @return Array containing `[html, attrNames]` (array returned for terseness,
 *     to avoid object fields since this code is shared with non-minified SSR
 *     code)
 */
var getTemplateHtml = function getTemplateHtml(strings, type) {
  // Insert makers into the template HTML to represent the position of
  // bindings. The following code scans the template strings to determine the
  // syntactic position of the bindings. They can be in text position, where
  // we insert an HTML comment, attribute value position, where we insert a
  // sentinel string and re-write the attribute name, or inside a tag where
  // we insert the sentinel string.
  var l = strings.length - 1;
  // Stores the case-sensitive bound attribute names in the order of their
  // parts. ElementParts are also reflected in this array as undefined
  // rather than a string, to disambiguate from attribute bindings.
  var attrNames = [];
  var html = type === SVG_RESULT ? '<svg>' : '';
  // When we're inside a raw text tag (not it's text content), the regex
  // will still be tagRegex so we can find attributes, but will switch to
  // this regex when the tag ends.
  var rawTextEndRegex;
  // The current parsing state, represented as a reference to one of the
  // regexes
  var regex = textEndRegex;
  for (var i = 0; i < l; i++) {
    var s = strings[i];
    // The index of the end of the last attribute name. When this is
    // positive at end of a string, it means we're in an attribute value
    // position and need to rewrite the attribute name.
    // We also use a special value of -2 to indicate that we encountered
    // the end of a string in attribute name position.
    var attrNameEndIndex = -1;
    var attrName = void 0;
    var lastIndex = 0;
    var match = void 0;
    // The conditions in this loop handle the current parse state, and the
    // assignments to the `regex` variable are the state transitions.
    while (lastIndex < s.length) {
      // Make sure we start searching from where we previously left off
      regex.lastIndex = lastIndex;
      match = regex.exec(s);
      if (match === null) {
        break;
      }
      lastIndex = regex.lastIndex;
      if (regex === textEndRegex) {
        if (match[COMMENT_START] === '!--') {
          regex = commentEndRegex;
        } else if (match[COMMENT_START] !== undefined) {
          // We started a weird comment, like </{
          regex = comment2EndRegex;
        } else if (match[TAG_NAME] !== undefined) {
          if (rawTextElement.test(match[TAG_NAME])) {
            // Record if we encounter a raw-text element. We'll switch to
            // this regex at the end of the tag.
            rawTextEndRegex = new RegExp("</" + match[TAG_NAME], 'g');
          }
          regex = tagEndRegex;
        } else if (match[DYNAMIC_TAG_NAME] !== undefined) {
          if (DEV_MODE) {
            throw new Error('Bindings in tag names are not supported. Please use static templates instead. ' + 'See https://lit.dev/docs/templates/expressions/#static-expressions');
          }
          regex = tagEndRegex;
        }
      } else if (regex === tagEndRegex) {
        if (match[ENTIRE_MATCH] === '>') {
          var _rawTextEndRegex;
          // End of a tag. If we had started a raw-text element, use that
          // regex
          regex = (_rawTextEndRegex = rawTextEndRegex) != null ? _rawTextEndRegex : textEndRegex;
          // We may be ending an unquoted attribute value, so make sure we
          // clear any pending attrNameEndIndex
          attrNameEndIndex = -1;
        } else if (match[ATTRIBUTE_NAME] === undefined) {
          // Attribute name position
          attrNameEndIndex = -2;
        } else {
          attrNameEndIndex = regex.lastIndex - match[SPACES_AND_EQUALS].length;
          attrName = match[ATTRIBUTE_NAME];
          regex = match[QUOTE_CHAR] === undefined ? tagEndRegex : match[QUOTE_CHAR] === '"' ? doubleQuoteAttrEndRegex : singleQuoteAttrEndRegex;
        }
      } else if (regex === doubleQuoteAttrEndRegex || regex === singleQuoteAttrEndRegex) {
        regex = tagEndRegex;
      } else if (regex === commentEndRegex || regex === comment2EndRegex) {
        regex = textEndRegex;
      } else {
        // Not one of the five state regexes, so it must be the dynamically
        // created raw text regex and we're at the close of that element.
        regex = tagEndRegex;
        rawTextEndRegex = undefined;
      }
    }
    if (DEV_MODE) {
      // If we have a attrNameEndIndex, which indicates that we should
      // rewrite the attribute name, assert that we're in a valid attribute
      // position - either in a tag, or a quoted attribute value.
      console.assert(attrNameEndIndex === -1 || regex === tagEndRegex || regex === singleQuoteAttrEndRegex || regex === doubleQuoteAttrEndRegex, 'unexpected parse state B');
    }
    // We have four cases:
    //  1. We're in text position, and not in a raw text element
    //     (regex === textEndRegex): insert a comment marker.
    //  2. We have a non-negative attrNameEndIndex which means we need to
    //     rewrite the attribute name to add a bound attribute suffix.
    //  3. We're at the non-first binding in a multi-binding attribute, use a
    //     plain marker.
    //  4. We're somewhere else inside the tag. If we're in attribute name
    //     position (attrNameEndIndex === -2), add a sequential suffix to
    //     generate a unique attribute name.
    // Detect a binding next to self-closing tag end and insert a space to
    // separate the marker from the tag end:
    var end = regex === tagEndRegex && strings[i + 1].startsWith('/>') ? ' ' : '';
    html += regex === textEndRegex ? s + nodeMarker : attrNameEndIndex >= 0 ? (attrNames.push(attrName), s.slice(0, attrNameEndIndex) + boundAttributeSuffix + s.slice(attrNameEndIndex)) + marker + end : s + marker + (attrNameEndIndex === -2 ? i : end);
  }
  var htmlResult = html + (strings[l] || '<?>') + (type === SVG_RESULT ? '</svg>' : '');
  // Returned as an array for terseness
  return [trustFromTemplateString(strings, htmlResult), attrNames];
};
var Template = /*#__PURE__*/function () {
  function Template( // This property needs to remain unminified.
  _ref2, options) {
    var strings = _ref2.strings,
      type = _ref2['_$litType$'];
    this.parts = [];
    var node;
    var nodeIndex = 0;
    var attrNameIndex = 0;
    var partCount = strings.length - 1;
    var parts = this.parts;
    // Create template element
    var _getTemplateHtml = getTemplateHtml(strings, type),
      html = _getTemplateHtml[0],
      attrNames = _getTemplateHtml[1];
    this.el = Template.createElement(html, options);
    walker.currentNode = this.el.content;
    // Re-parent SVG nodes into template root
    if (type === SVG_RESULT) {
      var svgElement = this.el.content.firstChild;
      svgElement.replaceWith.apply(svgElement, svgElement.childNodes);
    }
    // Walk the template to find binding markers and create TemplateParts
    while ((node = walker.nextNode()) !== null && parts.length < partCount) {
      if (node.nodeType === 1) {
        if (DEV_MODE) {
          var _tag = node.localName;
          // Warn if `textarea` includes an expression and throw if `template`
          // does since these are not supported. We do this by checking
          // innerHTML for anything that looks like a marker. This catches
          // cases like bindings in textarea there markers turn into text nodes.
          if (/^(?:textarea|template)$/i.test(_tag) && node.innerHTML.includes(marker)) {
            var m = "Expressions are not supported inside `" + _tag + "` " + ("elements. See https://lit.dev/msg/expression-in-" + _tag + " for more ") + "information.";
            if (_tag === 'template') {
              throw new Error(m);
            } else issueWarning('', m);
          }
        }
        // TODO (justinfagnani): for attempted dynamic tag names, we don't
        // increment the bindingIndex, and it'll be off by 1 in the element
        // and off by two after it.
        if (node.hasAttributes()) {
          for (var _iterator = _createForOfIteratorHelperLoose(node.getAttributeNames()), _step; !(_step = _iterator()).done;) {
            var name = _step.value;
            if (name.endsWith(boundAttributeSuffix)) {
              var realName = attrNames[attrNameIndex++];
              var value = node.getAttribute(name);
              var statics = value.split(marker);
              var _m = /([.?@])?(.*)/.exec(realName);
              parts.push({
                type: ATTRIBUTE_PART,
                index: nodeIndex,
                name: _m[2],
                strings: statics,
                ctor: _m[1] === '.' ? PropertyPart : _m[1] === '?' ? BooleanAttributePart : _m[1] === '@' ? EventPart : AttributePart
              });
              node.removeAttribute(name);
            } else if (name.startsWith(marker)) {
              parts.push({
                type: ELEMENT_PART,
                index: nodeIndex
              });
              node.removeAttribute(name);
            }
          }
        }
        // TODO (justinfagnani): benchmark the regex against testing for each
        // of the 3 raw text element names.
        if (rawTextElement.test(node.tagName)) {
          // For raw text elements we need to split the text content on
          // markers, create a Text node for each segment, and create
          // a TemplatePart for each marker.
          var _strings = node.textContent.split(marker);
          var lastIndex = _strings.length - 1;
          if (lastIndex > 0) {
            node.textContent = trustedTypes ? trustedTypes.emptyScript : '';
            // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts
            // We can't use empty text nodes as markers because they're
            // normalized when cloning in IE (could simplify when
            // IE is no longer supported)
            for (var i = 0; i < lastIndex; i++) {
              node.append(_strings[i], createMarker());
              // Walk past the marker node we just added
              walker.nextNode();
              parts.push({
                type: CHILD_PART,
                index: ++nodeIndex
              });
            }
            // Note because this marker is added after the walker's current
            // node, it will be walked to in the outer loop (and ignored), so
            // we don't need to adjust nodeIndex here
            node.append(_strings[lastIndex], createMarker());
          }
        }
      } else if (node.nodeType === 8) {
        var data = node.data;
        if (data === markerMatch) {
          parts.push({
            type: CHILD_PART,
            index: nodeIndex
          });
        } else {
          var _i = -1;
          while ((_i = node.data.indexOf(marker, _i + 1)) !== -1) {
            // Comment node has a binding marker inside, make an inactive part
            // The binding won't work, but subsequent bindings will
            parts.push({
              type: COMMENT_PART,
              index: nodeIndex
            });
            // Move to the end of the match
            _i += marker.length - 1;
          }
        }
      }
      nodeIndex++;
    }
    if (DEV_MODE) {
      // If there was a duplicate attribute on a tag, then when the tag is
      // parsed into an element the attribute gets de-duplicated. We can detect
      // this mismatch if we haven't precisely consumed every attribute name
      // when preparing the template. This works because `attrNames` is built
      // from the template string and `attrNameIndex` comes from processing the
      // resulting DOM.
      if (attrNames.length !== attrNameIndex) {
        throw new Error("Detected duplicate attribute bindings. This occurs if your template " + "has duplicate attributes on an element tag. For example " + "\"<input ?disabled=${true} ?disabled=${false}>\" contains a " + "duplicate \"disabled\" attribute. The error was detected in " + "the following template: \n" + '`' + strings.join('${...}') + '`');
      }
    }
    // We could set walker.currentNode to another node here to prevent a memory
    // leak, but every time we prepare a template, we immediately render it
    // and re-use the walker in new TemplateInstance._clone().
    debugLogEvent && debugLogEvent({
      kind: 'template prep',
      template: this,
      clonableTemplate: this.el,
      parts: this.parts,
      strings: strings
    });
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @nocollapse */
  Template.createElement = function createElement(html, _options) {
    var el = d.createElement('template');
    el.innerHTML = html;
    return el;
  };
  return Template;
}();
function resolveDirective(part, value, parent, attributeIndex) {
  var _parent$__directives, _currentDirective;
  if (parent === void 0) {
    parent = part;
  }
  // Bail early if the value is explicitly noChange. Note, this means any
  // nested directive is still attached and is not run.
  if (value === noChange) {
    return value;
  }
  var currentDirective = attributeIndex !== undefined ? (_parent$__directives = parent.__directives) == null ? void 0 : _parent$__directives[attributeIndex] : parent.__directive;
  var nextDirectiveConstructor = isPrimitive(value) ? undefined :
  // This property needs to remain unminified.
  value['_$litDirective$'];
  if (((_currentDirective = currentDirective) == null ? void 0 : _currentDirective.constructor) !== nextDirectiveConstructor) {
    var _currentDirective2, _currentDirective2$_$;
    // This property needs to remain unminified.
    (_currentDirective2 = currentDirective) == null ? void 0 : (_currentDirective2$_$ = _currentDirective2['_$notifyDirectiveConnectionChanged']) == null ? void 0 : _currentDirective2$_$.call(_currentDirective2, false);
    if (nextDirectiveConstructor === undefined) {
      currentDirective = undefined;
    } else {
      currentDirective = new nextDirectiveConstructor(part);
      currentDirective._$initialize(part, parent, attributeIndex);
    }
    if (attributeIndex !== undefined) {
      var _parent, _parent$__directives2;
      ((_parent$__directives2 = (_parent = parent).__directives) != null ? _parent$__directives2 : _parent.__directives = [])[attributeIndex] = currentDirective;
    } else {
      parent.__directive = currentDirective;
    }
  }
  if (currentDirective !== undefined) {
    value = resolveDirective(part, currentDirective._$resolve(part, value.values), currentDirective, attributeIndex);
  }
  return value;
}
/**
 * An updateable instance of a Template. Holds references to the Parts used to
 * update the template instance.
 */
var TemplateInstance = /*#__PURE__*/function () {
  function TemplateInstance(template, parent) {
    this._$parts = [];
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$template = template;
    this._$parent = parent;
  }
  // Called by ChildPart parentNode getter
  var _proto = TemplateInstance.prototype;
  // This method is separate from the constructor because we need to return a
  // DocumentFragment and we don't want to hold onto it with an instance field.
  _proto._clone = function _clone(options) {
    var _options$creationScop;
    var _this$_$template = this._$template,
      content = _this$_$template.el.content,
      parts = _this$_$template.parts;
    var fragment = ((_options$creationScop = options == null ? void 0 : options.creationScope) != null ? _options$creationScop : d).importNode(content, true);
    walker.currentNode = fragment;
    var node = walker.nextNode();
    var nodeIndex = 0;
    var partIndex = 0;
    var templatePart = parts[0];
    while (templatePart !== undefined) {
      var _templatePart;
      if (nodeIndex === templatePart.index) {
        var part = void 0;
        if (templatePart.type === CHILD_PART) {
          part = new ChildPart(node, node.nextSibling, this, options);
        } else if (templatePart.type === ATTRIBUTE_PART) {
          part = new templatePart.ctor(node, templatePart.name, templatePart.strings, this, options);
        } else if (templatePart.type === ELEMENT_PART) {
          part = new ElementPart(node, this, options);
        }
        this._$parts.push(part);
        templatePart = parts[++partIndex];
      }
      if (nodeIndex !== ((_templatePart = templatePart) == null ? void 0 : _templatePart.index)) {
        node = walker.nextNode();
        nodeIndex++;
      }
    }
    // We need to set the currentNode away from the cloned tree so that we
    // don't hold onto the tree even if the tree is detached and should be
    // freed.
    walker.currentNode = d;
    return fragment;
  };
  _proto._update = function _update(values) {
    var i = 0;
    for (var _iterator2 = _createForOfIteratorHelperLoose(this._$parts), _step2; !(_step2 = _iterator2()).done;) {
      var part = _step2.value;
      if (part !== undefined) {
        debugLogEvent && debugLogEvent({
          kind: 'set part',
          part: part,
          value: values[i],
          valueIndex: i,
          values: values,
          templateInstance: this
        });
        if (part.strings !== undefined) {
          part._$setValue(values, part, i);
          // The number of values the part consumes is part.strings.length - 1
          // since values are in between template spans. We increment i by 1
          // later in the loop, so increment it by part.strings.length - 2 here
          i += part.strings.length - 2;
        } else {
          part._$setValue(values[i]);
        }
      }
      i++;
    }
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TemplateInstance, [{
    key: "parentNode",
    get: function get() {
      return this._$parent.parentNode;
    }
    // See comment in Disconnectable interface for why this is a getter
  }, {
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }]);
  return TemplateInstance;
}();
var ChildPart = /*#__PURE__*/function () {
  function ChildPart(startNode, endNode, parent, options) {
    var _options$isConnected;
    this.type = CHILD_PART;
    this._$committedValue = nothing;
    // The following fields will be patched onto ChildParts when required by
    // AsyncDirective
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$startNode = startNode;
    this._$endNode = endNode;
    this._$parent = parent;
    this.options = options;
    // Note __isConnected is only ever accessed on RootParts (i.e. when there is
    // no _$parent); the value on a non-root-part is "don't care", but checking
    // for parent would be more code
    this.__isConnected = (_options$isConnected = options == null ? void 0 : options.isConnected) != null ? _options$isConnected : true;
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      // Explicitly initialize for consistent class shape.
      this._textSanitizer = undefined;
    }
  }
  /**
   * The parent node into which the part renders its content.
   *
   * A ChildPart's content consists of a range of adjacent child nodes of
   * `.parentNode`, possibly bordered by 'marker nodes' (`.startNode` and
   * `.endNode`).
   *
   * - If both `.startNode` and `.endNode` are non-null, then the part's content
   * consists of all siblings between `.startNode` and `.endNode`, exclusively.
   *
   * - If `.startNode` is non-null but `.endNode` is null, then the part's
   * content consists of all siblings following `.startNode`, up to and
   * including the last child of `.parentNode`. If `.endNode` is non-null, then
   * `.startNode` will always be non-null.
   *
   * - If both `.endNode` and `.startNode` are null, then the part's content
   * consists of all child nodes of `.parentNode`.
   */
  var _proto2 = ChildPart.prototype;
  _proto2._$setValue = function _$setValue(value, directiveParent) {
    if (directiveParent === void 0) {
      directiveParent = this;
    }
    if (DEV_MODE && this.parentNode === null) {
      throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");
    }
    value = resolveDirective(this, value, directiveParent);
    if (isPrimitive(value)) {
      // Non-rendering child values. It's important that these do not render
      // empty text nodes to avoid issues with preventing default <slot>
      // fallback content.
      if (value === nothing || value == null || value === '') {
        if (this._$committedValue !== nothing) {
          debugLogEvent && debugLogEvent({
            kind: 'commit nothing to child',
            start: this._$startNode,
            end: this._$endNode,
            parent: this._$parent,
            options: this.options
          });
          this._$clear();
        }
        this._$committedValue = nothing;
      } else if (value !== this._$committedValue && value !== noChange) {
        this._commitText(value);
      }
      // This property needs to remain unminified.
    } else if (value['_$litType$'] !== undefined) {
      this._commitTemplateResult(value);
    } else if (value.nodeType !== undefined) {
      var _this$options;
      if (DEV_MODE && ((_this$options = this.options) == null ? void 0 : _this$options.host) === value) {
        this._commitText("[probable mistake: rendered a template's host in itself " + "(commonly caused by writing ${this} in a template]");
        console.warn("Attempted to render the template host", value, "inside itself. This is almost always a mistake, and in dev mode ", "we render some warning text. In production however, we'll ", "render it, which will usually result in an error, and sometimes ", "in the element disappearing from the DOM.");
        return;
      }
      this._commitNode(value);
    } else if (isIterable(value)) {
      this._commitIterable(value);
    } else {
      // Fallback, will render the string representation
      this._commitText(value);
    }
  };
  _proto2._insert = function _insert(node) {
    return wrap(wrap(this._$startNode).parentNode).insertBefore(node, this._$endNode);
  };
  _proto2._commitNode = function _commitNode(value) {
    if (this._$committedValue !== value) {
      this._$clear();
      if (ENABLE_EXTRA_SECURITY_HOOKS && sanitizerFactoryInternal !== noopSanitizer) {
        var _this$_$startNode$par;
        var parentNodeName = (_this$_$startNode$par = this._$startNode.parentNode) == null ? void 0 : _this$_$startNode$par.nodeName;
        if (parentNodeName === 'STYLE' || parentNodeName === 'SCRIPT') {
          var message = 'Forbidden';
          if (DEV_MODE) {
            if (parentNodeName === 'STYLE') {
              message = "Lit does not support binding inside style nodes. " + "This is a security risk, as style injection attacks can " + "exfiltrate data and spoof UIs. " + "Consider instead using css`...` literals " + "to compose styles, and make do dynamic styling with " + "css custom properties, ::parts, <slot>s, " + "and by mutating the DOM rather than stylesheets.";
            } else {
              message = "Lit does not support binding inside script nodes. " + "This is a security risk, as it could allow arbitrary " + "code execution.";
            }
          }
          throw new Error(message);
        }
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit node',
        start: this._$startNode,
        parent: this._$parent,
        value: value,
        options: this.options
      });
      this._$committedValue = this._insert(value);
    }
  };
  _proto2._commitText = function _commitText(value) {
    // If the committed value is a primitive it means we called _commitText on
    // the previous render, and we know that this._$startNode.nextSibling is a
    // Text node. We can now just replace the text content (.data) of the node.
    if (this._$committedValue !== nothing && isPrimitive(this._$committedValue)) {
      var node = wrap(this._$startNode).nextSibling;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(node, 'data', 'property');
        }
        value = this._textSanitizer(value);
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit text',
        node: node,
        value: value,
        options: this.options
      });
      node.data = value;
    } else {
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        var textNode = d.createTextNode('');
        this._commitNode(textNode);
        // When setting text content, for security purposes it matters a lot
        // what the parent is. For example, <style> and <script> need to be
        // handled with care, while <span> does not. So first we need to put a
        // text node into the document, then we can sanitize its content.
        if (this._textSanitizer === undefined) {
          this._textSanitizer = createSanitizer(textNode, 'data', 'property');
        }
        value = this._textSanitizer(value);
        debugLogEvent && debugLogEvent({
          kind: 'commit text',
          node: textNode,
          value: value,
          options: this.options
        });
        textNode.data = value;
      } else {
        this._commitNode(d.createTextNode(value));
        debugLogEvent && debugLogEvent({
          kind: 'commit text',
          node: wrap(this._$startNode).nextSibling,
          value: value,
          options: this.options
        });
      }
    }
    this._$committedValue = value;
  };
  _proto2._commitTemplateResult = function _commitTemplateResult(result) {
    var _this$_$committedValu;
    // This property needs to remain unminified.
    var values = result.values,
      type = result['_$litType$'];
    // If $litType$ is a number, result is a plain TemplateResult and we get
    // the template from the template cache. If not, result is a
    // CompiledTemplateResult and _$litType$ is a CompiledTemplate and we need
    // to create the <template> element the first time we see it.
    var template = typeof type === 'number' ? this._$getTemplate(result) : (type.el === undefined && (type.el = Template.createElement(trustFromTemplateString(type.h, type.h[0]), this.options)), type);
    if (((_this$_$committedValu = this._$committedValue) == null ? void 0 : _this$_$committedValu._$template) === template) {
      debugLogEvent && debugLogEvent({
        kind: 'template updating',
        template: template,
        instance: this._$committedValue,
        parts: this._$committedValue._$parts,
        options: this.options,
        values: values
      });
      this._$committedValue._update(values);
    } else {
      var instance = new TemplateInstance(template, this);
      var fragment = instance._clone(this.options);
      debugLogEvent && debugLogEvent({
        kind: 'template instantiated',
        template: template,
        instance: instance,
        parts: instance._$parts,
        options: this.options,
        fragment: fragment,
        values: values
      });
      instance._update(values);
      debugLogEvent && debugLogEvent({
        kind: 'template instantiated and updated',
        template: template,
        instance: instance,
        parts: instance._$parts,
        options: this.options,
        fragment: fragment,
        values: values
      });
      this._commitNode(fragment);
      this._$committedValue = instance;
    }
  }
  // Overridden via `litHtmlPolyfillSupport` to provide platform support.
  /** @internal */;
  _proto2._$getTemplate = function _$getTemplate(result) {
    var template = templateCache.get(result.strings);
    if (template === undefined) {
      templateCache.set(result.strings, template = new Template(result));
    }
    return template;
  };
  _proto2._commitIterable = function _commitIterable(value) {
    // For an Iterable, we create a new InstancePart per item, then set its
    // value to the item. This is a little bit of overhead for every item in
    // an Iterable, but it lets us recurse easily and efficiently update Arrays
    // of TemplateResults that will be commonly returned from expressions like:
    // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
    // If value is an array, then the previous render was of an
    // iterable and value will contain the ChildParts from the previous
    // render. If value is not an array, clear this part and make a new
    // array for ChildParts.
    if (!isArray(this._$committedValue)) {
      this._$committedValue = [];
      this._$clear();
    }
    // Lets us keep track of how many items we stamped so we can clear leftover
    // items from a previous render
    var itemParts = this._$committedValue;
    var partIndex = 0;
    var itemPart;
    for (var _iterator3 = _createForOfIteratorHelperLoose(value), _step3; !(_step3 = _iterator3()).done;) {
      var item = _step3.value;
      if (partIndex === itemParts.length) {
        // If no existing part, create a new one
        // TODO (justinfagnani): test perf impact of always creating two parts
        // instead of sharing parts between nodes
        // https://github.com/lit/lit/issues/1266
        itemParts.push(itemPart = new ChildPart(this._insert(createMarker()), this._insert(createMarker()), this, this.options));
      } else {
        // Reuse an existing part
        itemPart = itemParts[partIndex];
      }
      itemPart._$setValue(item);
      partIndex++;
    }
    if (partIndex < itemParts.length) {
      // itemParts always have end nodes
      this._$clear(itemPart && wrap(itemPart._$endNode).nextSibling, partIndex);
      // Truncate the parts array so _value reflects the current state
      itemParts.length = partIndex;
    }
  }
  /**
   * Removes the nodes contained within this Part from the DOM.
   *
   * @param start Start node to clear from, for clearing a subset of the part's
   *     DOM (used when truncating iterables)
   * @param from  When `start` is specified, the index within the iterable from
   *     which ChildParts are being removed, used for disconnecting directives in
   *     those Parts.
   *
   * @internal
   */;
  _proto2._$clear = function _$clear(start, from) {
    var _this$_$notifyConnect;
    if (start === void 0) {
      start = wrap(this._$startNode).nextSibling;
    }
    (_this$_$notifyConnect = this._$notifyConnectionChanged) == null ? void 0 : _this$_$notifyConnect.call(this, false, true, from);
    while (start && start !== this._$endNode) {
      var n = wrap(start).nextSibling;
      wrap(start).remove();
      start = n;
    }
  }
  /**
   * Implementation of RootPart's `isConnected`. Note that this metod
   * should only be called on `RootPart`s (the `ChildPart` returned from a
   * top-level `render()` call). It has no effect on non-root ChildParts.
   * @param isConnected Whether to set
   * @internal
   */;
  _proto2.setConnected = function setConnected(isConnected) {
    if (this._$parent === undefined) {
      var _this$_$notifyConnect2;
      this.__isConnected = isConnected;
      (_this$_$notifyConnect2 = this._$notifyConnectionChanged) == null ? void 0 : _this$_$notifyConnect2.call(this, isConnected);
    } else if (DEV_MODE) {
      throw new Error('part.setConnected() may only be called on a ' + 'RootPart returned from render().');
    }
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ChildPart, [{
    key: "_$isConnected",
    get:
    // See comment in Disconnectable interface for why this is a getter
    function get() {
      var _this$_$parent$_$isCo, _this$_$parent;
      // ChildParts that are not at the root should always be created with a
      // parent; only RootChildNode's won't, so they return the local isConnected
      // state
      return (_this$_$parent$_$isCo = (_this$_$parent = this._$parent) == null ? void 0 : _this$_$parent._$isConnected) != null ? _this$_$parent$_$isCo : this.__isConnected;
    }
  }, {
    key: "parentNode",
    get: function get() {
      var _parentNode;
      var parentNode = wrap(this._$startNode).parentNode;
      var parent = this._$parent;
      if (parent !== undefined && ((_parentNode = parentNode) == null ? void 0 : _parentNode.nodeType) === 11 /* Node.DOCUMENT_FRAGMENT */) {
        // If the parentNode is a DocumentFragment, it may be because the DOM is
        // still in the cloned fragment during initial render; if so, get the real
        // parentNode the part will be committed into by asking the parent.
        parentNode = parent.parentNode;
      }
      return parentNode;
    }
    /**
     * The part's leading marker node, if any. See `.parentNode` for more
     * information.
     */
  }, {
    key: "startNode",
    get: function get() {
      return this._$startNode;
    }
    /**
     * The part's trailing marker node, if any. See `.parentNode` for more
     * information.
     */
  }, {
    key: "endNode",
    get: function get() {
      return this._$endNode;
    }
  }]);
  return ChildPart;
}();
var AttributePart = /*#__PURE__*/function () {
  function AttributePart(element, name, strings, parent, options) {
    this.type = ATTRIBUTE_PART;
    /** @internal */
    this._$committedValue = nothing;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this.element = element;
    this.name = name;
    this._$parent = parent;
    this.options = options;
    if (strings.length > 2 || strings[0] !== '' || strings[1] !== '') {
      this._$committedValue = new Array(strings.length - 1).fill(new String());
      this.strings = strings;
    } else {
      this._$committedValue = nothing;
    }
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      this._sanitizer = undefined;
    }
  }
  /**
   * Sets the value of this part by resolving the value from possibly multiple
   * values and static strings and committing it to the DOM.
   * If this part is single-valued, `this._strings` will be undefined, and the
   * method will be called with a single value argument. If this part is
   * multi-value, `this._strings` will be defined, and the method is called
   * with the value array of the part's owning TemplateInstance, and an offset
   * into the value array from which the values should be read.
   * This method is overloaded this way to eliminate short-lived array slices
   * of the template instance values, and allow a fast-path for single-valued
   * parts.
   *
   * @param value The part value, or an array of values for multi-valued parts
   * @param valueIndex the index to start reading values from. `undefined` for
   *   single-valued parts
   * @param noCommit causes the part to not commit its value to the DOM. Used
   *   in hydration to prime attribute parts with their first-rendered value,
   *   but not set the attribute, and in SSR to no-op the DOM operation and
   *   capture the value for serialization.
   *
   * @internal
   */
  var _proto3 = AttributePart.prototype;
  _proto3._$setValue = function _$setValue(value, directiveParent, valueIndex, noCommit) {
    if (directiveParent === void 0) {
      directiveParent = this;
    }
    var strings = this.strings;
    // Whether any of the values has changed, for dirty-checking
    var change = false;
    if (strings === undefined) {
      // Single-value binding case
      value = resolveDirective(this, value, directiveParent, 0);
      change = !isPrimitive(value) || value !== this._$committedValue && value !== noChange;
      if (change) {
        this._$committedValue = value;
      }
    } else {
      // Interpolation case
      var values = value;
      value = strings[0];
      var i, v;
      for (i = 0; i < strings.length - 1; i++) {
        v = resolveDirective(this, values[valueIndex + i], directiveParent, i);
        if (v === noChange) {
          // If the user-provided value is `noChange`, use the previous value
          v = this._$committedValue[i];
        }
        change || (change = !isPrimitive(v) || v !== this._$committedValue[i]);
        if (v === nothing) {
          value = nothing;
        } else if (value !== nothing) {
          var _v;
          value += ((_v = v) != null ? _v : '') + strings[i + 1];
        }
        // We always record each value, even if one is `nothing`, for future
        // change detection.
        this._$committedValue[i] = v;
      }
    }
    if (change && !noCommit) {
      this._commitValue(value);
    }
  }
  /** @internal */;
  _proto3._commitValue = function _commitValue(value) {
    if (value === nothing) {
      wrap(this.element).removeAttribute(this.name);
    } else {
      var _value2;
      if (ENABLE_EXTRA_SECURITY_HOOKS) {
        var _value;
        if (this._sanitizer === undefined) {
          this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'attribute');
        }
        value = this._sanitizer((_value = value) != null ? _value : '');
      }
      debugLogEvent && debugLogEvent({
        kind: 'commit attribute',
        element: this.element,
        name: this.name,
        value: value,
        options: this.options
      });
      wrap(this.element).setAttribute(this.name, (_value2 = value) != null ? _value2 : '');
    }
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AttributePart, [{
    key: "tagName",
    get: function get() {
      return this.element.tagName;
    }
    // See comment in Disconnectable interface for why this is a getter
  }, {
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }]);
  return AttributePart;
}();
var PropertyPart = /*#__PURE__*/function (_AttributePart) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PropertyPart, _AttributePart);
  function PropertyPart() {
    var _this;
    _this = _AttributePart.apply(this, arguments) || this;
    _this.type = PROPERTY_PART;
    return _this;
  }
  /** @internal */
  var _proto4 = PropertyPart.prototype;
  _proto4._commitValue = function _commitValue(value) {
    if (ENABLE_EXTRA_SECURITY_HOOKS) {
      if (this._sanitizer === undefined) {
        this._sanitizer = sanitizerFactoryInternal(this.element, this.name, 'property');
      }
      value = this._sanitizer(value);
    }
    debugLogEvent && debugLogEvent({
      kind: 'commit property',
      element: this.element,
      name: this.name,
      value: value,
      options: this.options
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.element[this.name] = value === nothing ? undefined : value;
  };
  return PropertyPart;
}(AttributePart);
var BooleanAttributePart = /*#__PURE__*/function (_AttributePart2) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BooleanAttributePart, _AttributePart2);
  function BooleanAttributePart() {
    var _this2;
    _this2 = _AttributePart2.apply(this, arguments) || this;
    _this2.type = BOOLEAN_ATTRIBUTE_PART;
    return _this2;
  }
  /** @internal */
  var _proto5 = BooleanAttributePart.prototype;
  _proto5._commitValue = function _commitValue(value) {
    debugLogEvent && debugLogEvent({
      kind: 'commit boolean attribute',
      element: this.element,
      name: this.name,
      value: !!(value && value !== nothing),
      options: this.options
    });
    wrap(this.element).toggleAttribute(this.name, !!value && value !== nothing);
  };
  return BooleanAttributePart;
}(AttributePart);
var EventPart = /*#__PURE__*/function (_AttributePart3) {
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EventPart, _AttributePart3);
  function EventPart(element, name, strings, parent, options) {
    var _this3;
    _this3 = _AttributePart3.call(this, element, name, strings, parent, options) || this;
    _this3.type = EVENT_PART;
    if (DEV_MODE && _this3.strings !== undefined) {
      throw new Error("A `<" + element.localName + ">` has a `@" + name + "=...` listener with " + 'invalid content. Event listeners in templates must have exactly ' + 'one expression and no surrounding text.');
    }
    return _this3;
  }
  // EventPart does not use the base _$setValue/_resolveValue implementation
  // since the dirty checking is more complex
  /** @internal */
  var _proto6 = EventPart.prototype;
  _proto6._$setValue = function _$setValue(newListener, directiveParent) {
    var _resolveDirective;
    if (directiveParent === void 0) {
      directiveParent = this;
    }
    newListener = (_resolveDirective = resolveDirective(this, newListener, directiveParent, 0)) != null ? _resolveDirective : nothing;
    if (newListener === noChange) {
      return;
    }
    var oldListener = this._$committedValue;
    // If the new value is nothing or any options change we have to remove the
    // part as a listener.
    var shouldRemoveListener = newListener === nothing && oldListener !== nothing || newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive;
    // If the new value is not nothing and we removed the listener, we have
    // to add the part as a listener.
    var shouldAddListener = newListener !== nothing && (oldListener === nothing || shouldRemoveListener);
    debugLogEvent && debugLogEvent({
      kind: 'commit event listener',
      element: this.element,
      name: this.name,
      value: newListener,
      options: this.options,
      removeListener: shouldRemoveListener,
      addListener: shouldAddListener,
      oldListener: oldListener
    });
    if (shouldRemoveListener) {
      this.element.removeEventListener(this.name, this, oldListener);
    }
    if (shouldAddListener) {
      // Beware: IE11 and Chrome 41 don't like using the listener as the
      // options object. Figure out how to deal w/ this in IE11 - maybe
      // patch addEventListener?
      this.element.addEventListener(this.name, this, newListener);
    }
    this._$committedValue = newListener;
  };
  _proto6.handleEvent = function handleEvent(event) {
    if (typeof this._$committedValue === 'function') {
      var _this$options$host, _this$options2;
      this._$committedValue.call((_this$options$host = (_this$options2 = this.options) == null ? void 0 : _this$options2.host) != null ? _this$options$host : this.element, event);
    } else {
      this._$committedValue.handleEvent(event);
    }
  };
  return EventPart;
}(AttributePart);
var ElementPart = /*#__PURE__*/function () {
  function ElementPart(element, parent, options) {
    this.element = element;
    this.type = ELEMENT_PART;
    /** @internal */
    this._$disconnectableChildren = undefined;
    this._$parent = parent;
    this.options = options;
  }
  // See comment in Disconnectable interface for why this is a getter
  var _proto7 = ElementPart.prototype;
  _proto7._$setValue = function _$setValue(value) {
    debugLogEvent && debugLogEvent({
      kind: 'commit to element binding',
      element: this.element,
      value: value,
      options: this.options
    });
    resolveDirective(this, value);
  };
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ElementPart, [{
    key: "_$isConnected",
    get: function get() {
      return this._$parent._$isConnected;
    }
  }]);
  return ElementPart;
}();
/**
 * END USERS SHOULD NOT RELY ON THIS OBJECT.
 *
 * Private exports for use by other Lit packages, not intended for use by
 * external users.
 *
 * We currently do not make a mangled rollup build of the lit-ssr code. In order
 * to keep a number of (otherwise private) top-level exports  mangled in the
 * client side code, we export a _$LH object containing those members (or
 * helper methods for accessing private fields of those members), and then
 * re-export them for use in lit-ssr. This keeps lit-ssr agnostic to whether the
 * client-side code is being used in `dev` mode or `prod` mode.
 *
 * This has a unique name, to disambiguate it from private exports in
 * lit-element, which re-exports all of lit-html.
 *
 * @private
 */
var _$LH = {
  // Used in lit-ssr
  _boundAttributeSuffix: boundAttributeSuffix,
  _marker: marker,
  _markerMatch: markerMatch,
  _HTML_RESULT: HTML_RESULT,
  _getTemplateHtml: getTemplateHtml,
  // Used in tests and private-ssr-support
  _TemplateInstance: TemplateInstance,
  _isIterable: isIterable,
  _resolveDirective: resolveDirective,
  _ChildPart: ChildPart,
  _AttributePart: AttributePart,
  _BooleanAttributePart: BooleanAttributePart,
  _EventPart: EventPart,
  _PropertyPart: PropertyPart,
  _ElementPart: ElementPart
};
// Apply polyfills if available
var polyfillSupport = DEV_MODE ? global.litHtmlPolyfillSupportDevMode : global.litHtmlPolyfillSupport;
polyfillSupport == null ? void 0 : polyfillSupport(Template, ChildPart);
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
((_global$litHtmlVersio = global.litHtmlVersions) != null ? _global$litHtmlVersio : global.litHtmlVersions = []).push('3.1.2');
if (DEV_MODE && global.litHtmlVersions.length > 1) {
  issueWarning('multiple-versions', "Multiple versions of Lit loaded. " + "Loading multiple versions is not recommended.");
}
/**
 * Renders a value, usually a lit-html TemplateResult, to the container.
 *
 * This example renders the text "Hello, Zoe!" inside a paragraph tag, appending
 * it to the container `document.body`.
 *
 * ```js
 * import {html, render} from 'lit';
 *
 * const name = "Zoe";
 * render(html`<p>Hello, ${name}!</p>`, document.body);
 * ```
 *
 * @param value Any [renderable
 *   value](https://lit.dev/docs/templates/expressions/#child-expressions),
 *   typically a {@linkcode TemplateResult} created by evaluating a template tag
 *   like {@linkcode html} or {@linkcode svg}.
 * @param container A DOM container to render to. The first render will append
 *   the rendered value to the container, and subsequent renders will
 *   efficiently update the rendered value if the same result type was
 *   previously rendered there.
 * @param options See {@linkcode RenderOptions} for options documentation.
 * @see
 * {@link https://lit.dev/docs/libraries/standalone-templates/#rendering-lit-html-templates| Rendering Lit HTML Templates}
 */
var render = function render(value, container, options) {
  var _options$renderBefore;
  if (DEV_MODE && container == null) {
    // Give a clearer error message than
    //     Uncaught TypeError: Cannot read properties of null (reading
    //     '_$litPart$')
    // which reads like an internal Lit error.
    throw new TypeError("The container to render into may not be " + container);
  }
  var renderId = DEV_MODE ? debugLogRenderId++ : 0;
  var partOwnerNode = (_options$renderBefore = options == null ? void 0 : options.renderBefore) != null ? _options$renderBefore : container;
  // This property needs to remain unminified.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  var part = partOwnerNode['_$litPart$'];
  debugLogEvent && debugLogEvent({
    kind: 'begin render',
    id: renderId,
    value: value,
    container: container,
    options: options,
    part: part
  });
  if (part === undefined) {
    var _options$renderBefore2;
    var endNode = (_options$renderBefore2 = options == null ? void 0 : options.renderBefore) != null ? _options$renderBefore2 : null;
    // This property needs to remain unminified.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    partOwnerNode['_$litPart$'] = part = new ChildPart(container.insertBefore(createMarker(), endNode), endNode, undefined, options != null ? options : {});
  }
  part._$setValue(value);
  debugLogEvent && debugLogEvent({
    kind: 'end render',
    id: renderId,
    value: value,
    container: container,
    options: options,
    part: part
  });
  return part;
};
if (ENABLE_EXTRA_SECURITY_HOOKS) {
  render.setSanitizer = setSanitizer;
  render.createSanitizer = createSanitizer;
  if (DEV_MODE) {
    render._testOnlyClearSanitizerFactoryDoNotCallOrElse = _testOnlyClearSanitizerFactoryDoNotCallOrElse;
  }
}

/***/ }),

/***/ "./node_modules/lit/decorators.js":
/*!****************************************!*\
  !*** ./node_modules/lit/decorators.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customElement: () => (/* reexport safe */ _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__.customElement),
/* harmony export */   eventOptions: () => (/* reexport safe */ _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__.eventOptions),
/* harmony export */   property: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.property),
/* harmony export */   query: () => (/* reexport safe */ _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__.query),
/* harmony export */   queryAll: () => (/* reexport safe */ _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__.queryAll),
/* harmony export */   queryAssignedElements: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__.queryAssignedElements),
/* harmony export */   queryAssignedNodes: () => (/* reexport safe */ _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__.queryAssignedNodes),
/* harmony export */   queryAsync: () => (/* reexport safe */ _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__.queryAsync),
/* harmony export */   standardProperty: () => (/* reexport safe */ _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__.standardProperty),
/* harmony export */   state: () => (/* reexport safe */ _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__.state)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element_decorators_custom_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element/decorators/custom-element.js */ "./node_modules/@lit/reactive-element/development/decorators/custom-element.js");
/* harmony import */ var _lit_reactive_element_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lit/reactive-element/decorators/property.js */ "./node_modules/@lit/reactive-element/development/decorators/property.js");
/* harmony import */ var _lit_reactive_element_decorators_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lit/reactive-element/decorators/state.js */ "./node_modules/@lit/reactive-element/development/decorators/state.js");
/* harmony import */ var _lit_reactive_element_decorators_event_options_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @lit/reactive-element/decorators/event-options.js */ "./node_modules/@lit/reactive-element/development/decorators/event-options.js");
/* harmony import */ var _lit_reactive_element_decorators_query_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lit/reactive-element/decorators/query.js */ "./node_modules/@lit/reactive-element/development/decorators/query.js");
/* harmony import */ var _lit_reactive_element_decorators_query_all_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-all.js */ "./node_modules/@lit/reactive-element/development/decorators/query-all.js");
/* harmony import */ var _lit_reactive_element_decorators_query_async_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-async.js */ "./node_modules/@lit/reactive-element/development/decorators/query-async.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_elements_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-elements.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-elements.js");
/* harmony import */ var _lit_reactive_element_decorators_query_assigned_nodes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @lit/reactive-element/decorators/query-assigned-nodes.js */ "./node_modules/@lit/reactive-element/development/decorators/query-assigned-nodes.js");










/***/ }),

/***/ "./node_modules/lit/index.js":
/*!***********************************!*\
  !*** ./node_modules/lit/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSResult: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.CSSResult),
/* harmony export */   LitElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.LitElement),
/* harmony export */   ReactiveElement: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.ReactiveElement),
/* harmony export */   _$LE: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LE),
/* harmony export */   _$LH: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__._$LH),
/* harmony export */   adoptStyles: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.adoptStyles),
/* harmony export */   css: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.css),
/* harmony export */   defaultConverter: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.defaultConverter),
/* harmony export */   getCompatibleStyle: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.getCompatibleStyle),
/* harmony export */   html: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.html),
/* harmony export */   isServer: () => (/* reexport safe */ lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__.isServer),
/* harmony export */   noChange: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.noChange),
/* harmony export */   notEqual: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.notEqual),
/* harmony export */   nothing: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.nothing),
/* harmony export */   render: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.render),
/* harmony export */   supportsAdoptingStyleSheets: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.supportsAdoptingStyleSheets),
/* harmony export */   svg: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.svg),
/* harmony export */   unsafeCSS: () => (/* reexport safe */ lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__.unsafeCSS)
/* harmony export */ });
/* harmony import */ var _lit_reactive_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lit/reactive-element */ "./node_modules/@lit/reactive-element/development/reactive-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var lit_element_lit_element_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element/lit-element.js */ "./node_modules/lit-element/development/lit-element.js");
/* harmony import */ var lit_html_is_server_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-html/is-server.js */ "./node_modules/lit-html/development/is-server.js");





/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./admin.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RelatedDiscussionsSettings: () => (/* reexport safe */ _src_admin__WEBPACK_IMPORTED_MODULE_0__.RelatedDiscussionsSettings)
/* harmony export */ });
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.ts");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=admin.js.map