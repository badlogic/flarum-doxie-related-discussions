(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var s in a)e.o(a,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:a[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const a=flarum.core.compat["admin/app"];var s=e.n(a);s().initializers.add("nearata/related-discussions",(function(){s().extensionData.for("nearata-related-discussions").registerSetting({setting:"nearata-related-discussions.allow-guests",type:"boolean",label:s().translator.trans("nearata-related-discussions.admin.settings.allow_guests")}).registerSetting({setting:"nearata-related-discussions.generator",type:"select",label:s().translator.trans("nearata-related-discussions.admin.settings.generator"),options:{random:s().translator.trans("nearata-related-discussions.admin.settings.generator_options.random"),title:s().translator.trans("nearata-related-discussions.admin.settings.generator_options.title")},default:"random",help:""}).registerSetting({setting:"nearata-related-discussions.max-discussions",type:"number",label:s().translator.trans("nearata-related-discussions.admin.settings.max_discussions"),min:1,help:s().translator.trans("nearata-related-discussions.admin.settings.max_discussions_help")})}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map