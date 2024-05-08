/*! For license information please see module_settings.c866f93e063ea9d3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8984],{50990:(t,e,r)=>{r.r(e),r.d(e,{default:()=>d});var n=r(20629);r(74865);function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},s=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),s=new P(o||[]);return n(a,"_invoke",{value:L(t,r,s)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var p={};function h(){}function v(){}function m(){}var y={};l(y,s,(function(){return this}));var g=Object.getPrototypeOf,_=g&&g(g(j([])));_&&_!==e&&r.call(_,s)&&(y=_);var b=m.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,a,s,u){var c=f(t[n],t,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==o(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,s,u)}),(function(t){i("throw",t,s,u)})):e.resolve(d).then((function(t){l.value=t,s(l)}),(function(t){return i("throw",t,s,u)}))}u(c.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=S(a,r);if(s){if(s===p)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function S(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t||""===t){var e=t[s];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}throw new TypeError(o(t)+" is not iterable")}return v.prototype=m,n(b,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,s,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function a(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const l={metaInfo:{title:"Module Settings"},data:function(){return{isLoading:!0,SubmitProcessing:!1,modules_info:[],module_zip:"",data:new FormData}},methods:u(u({},(0,n.nv)(["refreshUserPermissions"])),{},{makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},onFileSelected:function(t){var e,r=this;return(e=i().mark((function e(){var n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$refs.Upload_Module.validate(t);case 2:n=e.sent,o=n.valid,r.module_zip=o?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function s(t){a(i,n,o,s,u,"next",t)}function u(t){a(i,n,o,s,u,"throw",t)}s(void 0)}))})()},update_status_module:function(t){var e=this;axios.post("update_status_module/",{status:t.status,name:t.module_name}).then((function(r){e.isLoading=!0,t.status?e.makeToast("success",e.$t("Module_enabled_success"),e.$t("Success")):e.makeToast("danger",e.$t("Module_Disabled_success"),e.$t("Warning")),window.location.href="/app/settings/module_settings"})).catch((function(t){e.makeToast("warning",e.$t("Delete.Therewassomethingwronge"),e.$t("Warning"))}))},get_modules_info:function(){var t=this;axios.get("get_modules_info").then((function(e){t.modules_info=e.data,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Submit_Upload_Module:function(){var t=this;this.$refs.ref_Upload_Module.validate().then((function(e){e?t.Upload_Module():t.makeToast("danger",t.$t("Please_Upload_the_Correct_Module"),t.$t("Failed"))}))},Upload_Module:function(){var t=this,e=this;e.SubmitProcessing=!0,e.data.append("module_zip",e.module_zip),axios.post("upload_module",e.data).then((function(r){e.SubmitProcessing=!1,window.location.reload(),t.makeToast("success",t.$t("Uploaded_Success"),t.$t("Success"))})).catch((function(r){e.SubmitProcessing=!1,t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed"))}))}}),created:function(){this.get_modules_info()}};const d=(0,r(51900).Z)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("module_settings"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-col",{attrs:{md:"12"}},[e("validation-observer",{ref:"ref_Upload_Module"},[e("b-form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.Submit_Upload_Module.apply(null,arguments)}}},[e("div",{staticClass:"row border rounded p-3 mt-3"},[e("b-col",{attrs:{md:"12"}},[e("validation-provider",{ref:"Upload_Module",attrs:{name:"Upload Module"},scopedSlots:t._u([{key:"default",fn:function(r){r.validate;var n=r.valid,o=r.errors;return e("b-form-group",{attrs:{label:"Install/Upload Module"}},[e("input",{class:{"is-invalid":!!o.length},attrs:{state:!o[0]&&(!!n||null),label:"Upload_Module",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Upload_Module-feedback"}},[t._v(t._s(o[0]))])],1)}}],null,!1,833920476)}),t._v(" "),e("span",[t._v("The module must be uploaded as zip file")])],1),t._v(" "),e("b-col",{staticClass:"text-center mt-3",attrs:{md:"12"}},[e("b-button",{attrs:{variant:"primary",type:"submit",disabled:t.SubmitProcessing}},[t._v("Upload Module")]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)])],1)],1),t._v(" "),t.isLoading?t._e():e("div",{staticClass:"mt-5"},[e("b-col",{attrs:{md:"12"}},[e("h4",{directives:[{name:"show",rawName:"v-show",value:t.modules_info.length>0,expression:"modules_info.length >0"}]},[t._v("All Modules Installed")])]),t._v(" "),t._l(t.modules_info,(function(r){return e("div",{key:r,staticClass:"col-md-6"},[e("div",{staticClass:"row border rounded p-3 mt-3"},[e("div",{staticClass:"col-md-12"},[e("h3",[t._v(t._s(r.module_name))])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("span",[e("strong",[t._v("Current Version")]),t._v(" : "+t._s(r.current_version))])]),t._v(" "),e("div",{staticClass:"col-md-12 mt-3"},[e("label",{staticClass:"switch switch-primary mr-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:r.status,expression:"module_item.status"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(r.status)?t._i(r.status,null)>-1:r.status},on:{change:[function(e){var n=r.status,o=e.target,i=!!o.checked;if(Array.isArray(n)){var a=t._i(n,null);o.checked?a<0&&t.$set(r,"status",n.concat([null])):a>-1&&t.$set(r,"status",n.slice(0,a).concat(n.slice(a+1)))}else t.$set(r,"status",i)},function(e){return t.update_status_module(r)}]}}),t._v(" "),e("span",{staticClass:"slider"})])])])])}))],2)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);