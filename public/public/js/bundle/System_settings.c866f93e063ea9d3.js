/*! For license information please see System_settings.c866f93e063ea9d3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4806],{96466:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var n=r(20629),a=r(74865),o=r.n(a);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function s(){s=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function d(t,e,r,a){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),s=new L(a||[]);return n(i,"_invoke",{value:C(t,r,s)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=d;var m={};function p(){}function v(){}function g(){}var h={};u(h,o,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(P([])));_&&_!==e&&r.call(_,o)&&(h=_);var y=g.prototype=p.prototype=Object.create(h);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function a(n,o,s,l){var c=f(t[n],t,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==i(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){a("next",t,s,l)}),(function(t){a("throw",t,s,l)})):e.resolve(d).then((function(t){u.value=t,s(u)}),(function(t){return a("throw",t,s,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function C(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return{value:void 0,done:!0}}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var s=$(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=f(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===m)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function $(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var a=f(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,m;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t||""===t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}throw new TypeError(i(t)+" is not iterable")}return v.prototype=g,n(y,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:v,configurable:!0}),v.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(k.prototype),u(k.prototype,l,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new k(d(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(y),u(y,c,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function l(t,e,r,n,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void r(t)}s.done?e(l):Promise.resolve(l).then(n,a)}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function d(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const f={metaInfo:{title:"System Settings"},data:function(){return{isLoading:!0,data:new FormData,settings:[],currencies:[],clients:[],warehouses:[],sms_gateway:[],zones_array:[],setting:{client_id:"",warehouse_id:"",currency_id:"",email:"",logo:"",CompanyName:"",CompanyPhone:"",CompanyAdress:"",footer:"",developed_by:"",default_language:"",sms_gateway:"",is_invoice_footer:"",invoice_footer:"",quotation_with_stock:""}}},methods:u(u({},(0,n.nv)(["refreshUserPermissions"])),{},{SetLocal:function(t){this.$i18n.locale=t,this.$store.dispatch("language/setLanguage",t),Fire.$emit("ChangeLanguage")},Submit_Setting:function(){var t=this;this.$refs.form_setting.validate().then((function(e){e?t.Update_Settings():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},makeToast:function(t,e,r){this.$root.$bvToast.toast(e,{title:r,variant:t,solid:!0})},getValidationState:function(t){var e=t.dirty,r=t.validated,n=t.valid;return e||r?void 0===n?null:n:null},onFileSelected:function(t){var e,r=this;return(e=s().mark((function e(){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.$refs.Logo.validate(t);case 2:n=e.sent,a=n.valid,r.setting.logo=a?t.target.files[0]:"";case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(t){l(o,n,a,i,s,"next",t)}function s(t){l(o,n,a,i,s,"throw",t)}i(void 0)}))})()},Selected_Time_Zone:function(t){null===t&&(this.setting.timezone="")},Update_Settings:function(){var t=this;o().start(),o().set(.1);var e=this;e.data.append("client",e.setting.client_id),e.data.append("warehouse",e.setting.warehouse_id),e.data.append("currency",e.setting.currency_id),e.data.append("email",e.setting.email),e.data.append("logo",e.setting.logo),e.data.append("CompanyName",e.setting.CompanyName),e.data.append("CompanyPhone",e.setting.CompanyPhone),e.data.append("CompanyAdress",e.setting.CompanyAdress),e.data.append("footer",e.setting.footer),e.data.append("developed_by",e.setting.developed_by),e.data.append("default_language",e.setting.default_language),e.data.append("sms_gateway",e.setting.sms_gateway),e.data.append("is_invoice_footer",e.setting.is_invoice_footer),e.data.append("invoice_footer",e.setting.invoice_footer),e.data.append("quotation_with_stock",e.setting.quotation_with_stock),e.data.append("timezone",e.setting.timezone),e.data.append("_method","put"),axios.post("settings/"+e.setting.id,e.data).then((function(r){Fire.$emit("Event_Setting"),t.makeToast("success",t.$t("Successfully_Updated"),t.$t("Success")),t.refreshUserPermissions(),o().done(),t.SetLocal(e.setting.default_language)})).catch((function(e){t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),o().done()}))},Clear_Cache:function(){var t=this;o().start(),o().set(.1),axios.get("clear_cache").then((function(e){t.makeToast("success",t.$t("Cache_cleared_successfully"),t.$t("Success")),o().done()})).catch((function(e){o().done(),t.makeToast("danger",t.$t("Failed_to_clear_cache"),t.$t("Failed"))}))},Get_Settings:function(){var t=this;axios.get("get_Settings_data").then((function(e){t.setting=e.data.settings,t.currencies=e.data.currencies,t.clients=e.data.clients,t.warehouses=e.data.warehouses,t.sms_gateway=e.data.sms_gateway,t.zones_array=e.data.zones_array,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}}),created:function(){var t=this;this.Get_Settings(),Fire.$on("Event_Setting",(function(){t.Get_Settings()}))}};const m=(0,r(51900).Z)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("SystemSettings"),folder:t.$t("Settings")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"form_setting"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Setting.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("SystemSettings")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultCurrency")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Currency"),options:t.currencies.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.currency_id,callback:function(e){t.$set(t.setting,"currency_id",e)},expression:"setting.currency_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Email",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("DefaultEmail")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Email-feedback",label:"Email",placeholder:t.$t("DefaultEmail")},model:{value:t.setting.email,callback:function(e){t.$set(t.setting,"email",e)},expression:"setting.email"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Email-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,4279491894)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{ref:"Logo",attrs:{name:"Logo",rules:"mimes:image/*|size:200"},scopedSlots:t._u([{key:"default",fn:function(r){r.validate;var n=r.valid,a=r.errors;return e("b-form-group",{attrs:{label:t.$t("ChangeLogo")}},[e("input",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!n||null),label:"Choose Logo",type:"file"},on:{change:t.onFileSelected}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Logo-feedback"}},[t._v(t._s(a[0]))])],1)}}],null,!1,3189141354)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Company Name",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("CompanyName")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Company-feedback",label:"Company Name",placeholder:t.$t("CompanyName")},model:{value:t.setting.CompanyName,callback:function(e){t.$set(t.setting,"CompanyName",e)},expression:"setting.CompanyName"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Company-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,1317089302)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Company Phone",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("CompanyPhone")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(r),"aria-describedby":"Phone-feedback",label:"Company Phone",placeholder:t.$t("CompanyPhone")},model:{value:t.setting.CompanyPhone,callback:function(e){t.$set(t.setting,"CompanyPhone",e)},expression:"setting.CompanyPhone"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Phone-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,1395357846)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"developed by",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("developed_by")+" *"}},[e("b-form-input",{staticClass:"form-control",attrs:{state:t.getValidationState(r),"aria-describedby":"developed_by-feedback"},model:{value:t.setting.developed_by,callback:function(e){t.$set(t.setting,"developed_by",e)},expression:"setting.developed_by"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"developed_by-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,4204870398)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"footer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("footer")+" *"}},[e("b-form-input",{staticClass:"form-control",attrs:{state:t.getValidationState(r),"aria-describedby":"footer-feedback"},model:{value:t.setting.footer,callback:function(e){t.$set(t.setting,"footer",e)},expression:"setting.footer"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"footer-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,3264557662)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"DefaultLanguage",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){var n=r.valid,a=r.errors;return e("b-form-group",{attrs:{label:t.$t("DefaultLanguage")+" *"}},[e("v-select",{class:{"is-invalid":!!a.length},attrs:{state:!a[0]&&(!!n||null),reduce:function(t){return t.value},placeholder:t.$t("DefaultLanguage"),options:[{label:"English",value:"en"},{label:"French",value:"fr"},{label:"Arabic",value:"ar"},{label:"Turkish",value:"tur"},{label:"Simplified Chinese",value:"sm_ch"},{label:"Thaï",value:"thai"},{label:"Hindi",value:"hn"},{label:"German",value:"de"},{label:"Spanish",value:"es"},{label:"Italien",value:"it"},{label:"Indonesian",value:"Ind"},{label:"Traditional Chinese",value:"tr_ch"},{label:"Russian",value:"ru"},{label:"Vietnamese",value:"vn"},{label:"Korean",value:"kr"},{label:"Bangla",value:"ba"},{label:"Portuguese",value:"br"},{label:"Danish",value:"da"}]},model:{value:t.setting.default_language,callback:function(e){t.$set(t.setting,"default_language",e)},expression:"setting.default_language"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(a[0]))])],1)}}],null,!1,3878027193)})],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultCustomer")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Customer"),options:t.clients.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.client_id,callback:function(e){t.$set(t.setting,"client_id",e)},expression:"setting.client_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("DefaultWarehouse")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_Warehouse"),options:t.warehouses.map((function(t){return{label:t.name,value:t.id}}))},model:{value:t.setting.warehouse_id,callback:function(e){t.$set(t.setting,"warehouse_id",e)},expression:"setting.warehouse_id"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Default_SMS_Gateway")}},[e("v-select",{attrs:{reduce:function(t){return t.value},placeholder:t.$t("Choose_SMS_Gateway"),options:t.sms_gateway.map((function(t){return{label:t.title,value:t.id}}))},model:{value:t.setting.sms_gateway,callback:function(e){t.$set(t.setting,"sms_gateway",e)},expression:"setting.sms_gateway"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Time_Zone")}},[e("v-select",{attrs:{placeholder:t.$t("Time_Zone"),reduce:function(t){return t.value},options:t.zones_array.map((function(t){return{label:t.label,value:t.zone}}))},on:{input:t.Selected_Time_Zone},model:{value:t.setting.timezone,callback:function(e){t.$set(t.setting,"timezone",e)},expression:"setting.timezone"}})],1)],1),t._v(" "),e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("validation-provider",{attrs:{name:"Adress",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("Adress")+" *"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.setting.CompanyAdress,expression:"setting.CompanyAdress"}],staticClass:"form-control",attrs:{state:t.getValidationState(r),"aria-describedby":"Adress-feedback",placeholder:t.$t("Afewwords")},domProps:{value:t.setting.CompanyAdress},on:{input:function(e){e.target.composing||t.$set(t.setting,"CompanyAdress",e.target.value)}}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Adress-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,758978009)})],1),t._v(" "),e("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"2",sm:"2"}},[e("label",{staticClass:"checkbox checkbox-primary mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.setting.is_invoice_footer,expression:"setting.is_invoice_footer"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.setting.is_invoice_footer)?t._i(t.setting.is_invoice_footer,null)>-1:t.setting.is_invoice_footer},on:{change:function(e){var r=t.setting.is_invoice_footer,n=e.target,a=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&t.$set(t.setting,"is_invoice_footer",r.concat([null])):o>-1&&t.$set(t.setting,"is_invoice_footer",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.setting,"is_invoice_footer",a)}}}),e("h5",[t._v(t._s(t.$t("invoice_footer"))+" ")]),e("span",{staticClass:"checkmark"})])]),t._v(" "),t.setting.is_invoice_footer?e("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"6",sm:"6"}},[e("validation-provider",{attrs:{name:"invoice_footer",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(r){return[e("b-form-group",{attrs:{label:t.$t("invoice_footer")+" *"}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.setting.invoice_footer,expression:"setting.invoice_footer"}],staticClass:"form-control",attrs:{state:t.getValidationState(r),"aria-describedby":"invoice_footer-feedback",placeholder:t.$t("invoice_footer")},domProps:{value:t.setting.invoice_footer},on:{input:function(e){e.target.composing||t.$set(t.setting,"invoice_footer",e.target.value)}}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"invoice_footer-feedback"}},[t._v(t._s(r.errors[0]))])],1)]}}],null,!1,4052989155)})],1):t._e(),t._v(" "),e("b-col",{staticClass:"mt-4 mb-4",attrs:{md:"4"}},[e("label",{staticClass:"checkbox checkbox-primary mb-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.setting.quotation_with_stock,expression:"setting.quotation_with_stock"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.setting.quotation_with_stock)?t._i(t.setting.quotation_with_stock,null)>-1:t.setting.quotation_with_stock},on:{change:function(e){var r=t.setting.quotation_with_stock,n=e.target,a=!!n.checked;if(Array.isArray(r)){var o=t._i(r,null);n.checked?o<0&&t.$set(t.setting,"quotation_with_stock",r.concat([null])):o>-1&&t.$set(t.setting,"quotation_with_stock",r.slice(0,o).concat(r.slice(o+1)))}else t.$set(t.setting,"quotation_with_stock",a)}}}),e("h5",[t._v(t._s(t.$t("Create_Quotation_with_Stock"))+" ")]),e("span",{staticClass:"checkmark"})])]),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",type:"submit"}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))])],1)],1)],1)],1)],1)],1)],1)],1)],1),t._v(" "),t.isLoading?t._e():e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Clear_Cache.apply(null,arguments)}}},[e("b-row",{staticClass:"mt-5"},[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",{attrs:{"no-body":"",header:t.$t("Clear_Cache")}},[e("b-card-body",[e("b-row",[e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.Clear_Cache()}}},[t._v(t._s(t.$t("Clear_Cache")))])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);