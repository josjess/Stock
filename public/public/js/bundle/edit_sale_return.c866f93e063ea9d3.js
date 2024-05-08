"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8815],{21671:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var r=a(20629),s=a(74865),i=a.n(s);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t,e,a){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const u={metaInfo:{title:"Edit Return"},data:function(){return{isLoading:!0,SubmitProcessing:!1,details:[],detail:{},sale_return:{id:"",date:"",notes:"",statut:"",client_id:"",warehouse_id:"",sale_id:"",tax_rate:0,TaxNet:0,shipping:0,discount:0},total:0,GrandTotal:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,r.Se)(["currentUser"])),methods:{Submit_Sale_return:function(){var t=this;this.$refs.edit_sale_return.validate().then((function(e){e?t.Update_Return():t.makeToast("danger",t.$t("Please_fill_the_form_correctly"),t.$t("Failed"))}))},getValidationState:function(t){var e=t.dirty,a=t.validated,r=t.valid;return e||a?void 0===r?null:r:null},makeToast:function(t,e,a){this.$root.$bvToast.toast(e,{title:a,variant:t,solid:!0})},Verified_Qty:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&(isNaN(t.quantity)&&(this.details[a].quantity=1),t.quantity>t.sale_quantity?(this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")),this.details[a].quantity=t.sale_quantity):this.details[a].quantity=t.quantity,this.Calcul_Total(),this.$forceUpdate())},increment:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&(t.quantity+1>t.sale_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")):this.formatNumber(this.details[a].quantity++,2));this.$forceUpdate(),this.Calcul_Total()},decrement:function(t,e){for(var a=0;a<this.details.length;a++)this.details[a].detail_id==e&&t.quantity-1>0&&(t.quantity-1>t.sale_quantity?this.makeToast("warning",this.$t("qty_return_is_greater_than_qty_sold"),this.$t("Warning")):this.formatNumber(this.details[a].quantity--,2));this.$forceUpdate(),this.Calcul_Total()},formatNumber:function(t,e){var a=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return a[0];var r=a[1]||"";if(r.length>e)return"".concat(a[0],".").concat(r.substr(0,e));for(;r.length<e;)r+="0";return"".concat(a[0],".").concat(r)},Calcul_Total:function(){this.total=0;for(var t=0;t<this.details.length;t++){var e=this.details[t].taxe*this.details[t].quantity;this.details[t].subtotal=parseFloat(this.details[t].quantity*this.details[t].Net_price+e),this.total=parseFloat(this.total+this.details[t].subtotal)}var a=parseFloat(this.total-this.sale_return.discount);this.sale_return.TaxNet=parseFloat(a*this.sale_return.tax_rate/100),this.GrandTotal=parseFloat(a+this.sale_return.TaxNet+this.sale_return.shipping);var r=this.GrandTotal.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2});this.GrandTotal=parseFloat(r)},keyup_OrderTax:function(){isNaN(this.sale_return.tax_rate)?this.sale_return.tax_rate=0:""==this.sale_return.tax_rate?(this.sale_return.tax_rate=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Discount:function(){isNaN(this.sale_return.discount)?this.sale_return.discount=0:""==this.sale_return.discount?(this.sale_return.discount=0,this.Calcul_Total()):this.Calcul_Total()},keyup_Shipping:function(){isNaN(this.sale_return.shipping)?this.sale_return.shipping=0:""==this.sale_return.shipping?(this.sale_return.shipping=0,this.Calcul_Total()):this.Calcul_Total()},verifiedForm:function(){if(this.details.length<=0)return this.makeToast("warning",this.$t("AddProductToList"),this.$t("Warning")),!1;for(var t=0,e=0;e<this.details.length;e++)""==this.details[e].quantity&&0===this.details[e].quantity||(t+=1);return 0!==t||(this.makeToast("warning",this.$t("Please_add_return_quantity"),this.$t("Warning")),!1)},Update_Return:function(){var t=this;if(this.verifiedForm()){this.SubmitProcessing=!0,i().start(),i().set(.1);var e=this.$route.params.id;axios.put("returns/sale/".concat(e),{date:this.sale_return.date,client_id:this.sale_return.client_id,sale_id:this.sale_return.sale_id,warehouse_id:this.sale_return.warehouse_id,statut:this.sale_return.statut,notes:this.sale_return.notes,tax_rate:this.sale_return.tax_rate?this.sale_return.tax_rate:0,TaxNet:this.sale_return.TaxNet?this.sale_return.TaxNet:0,discount:this.sale_return.discount?this.sale_return.discount:0,shipping:this.sale_return.shipping?this.sale_return.shipping:0,GrandTotal:this.GrandTotal,details:this.details}).then((function(e){i().done(),t.makeToast("success",t.$t("Update.TitleReturn"),t.$t("Success")),t.SubmitProcessing=!1,t.$router.push({name:"index_sale_return"})})).catch((function(e){i().done(),t.makeToast("danger",t.$t("InvalidData"),t.$t("Failed")),t.SubmitProcessing=!1}))}},GetElements:function(){var t=this,e=this.$route.params.id,a=this.$route.params.sale_id;axios.get("returns/sale/edit_sell_return/".concat(e,"/").concat(a)).then((function(e){t.sale_return=e.data.sale_return,t.details=e.data.details,t.Calcul_Total(),t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))}},created:function(){this.GetElements()}};const c=(0,a(51900).Z)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("EditSaleReturn"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("validation-observer",{ref:"edit_sale_return"},[e("b-form",{on:{submit:function(e){return e.preventDefault(),t.Submit_Sale_return.apply(null,arguments)}}},[e("b-row",[e("b-col",{attrs:{lg:"12",md:"12",sm:"12"}},[e("b-card",[e("b-row",[e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"date",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("date")+" *"}},[e("b-form-input",{attrs:{state:t.getValidationState(a),"aria-describedby":"date-feedback",type:"date"},model:{value:t.sale_return.date,callback:function(e){t.$set(t.sale_return,"date",e)},expression:"sale_return.date"}}),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!1,1946847383)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("b-form-group",{attrs:{label:t.$t("Sale")}},[e("b-form-input",{attrs:{label:"Sale",disabled:"disabled"},model:{value:t.sale_return.sale_ref,callback:function(e){t.$set(t.sale_return,"sale_ref",e)},expression:"sale_return.sale_ref"}})],1)],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Status",rules:{required:!0}},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.valid,s=a.errors;return e("b-form-group",{attrs:{label:t.$t("Status")+" *"}},[e("v-select",{class:{"is-invalid":!!s.length},attrs:{state:!s[0]&&(!!r||null),reduce:function(t){return t.value},placeholder:t.$t("Choose_Status"),options:[{label:"Received",value:"received"},{label:"Pending",value:"pending"}]},model:{value:t.sale_return.statut,callback:function(e){t.$set(t.sale_return,"statut",e)},expression:"sale_return.statut"}}),t._v(" "),e("b-form-invalid-feedback",[t._v(t._s(s[0]))])],1)}}],null,!1,3228354010)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("h5",[t._v(t._s(t.$t("list_product_returns"))+" *")]),t._v(" "),e("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.$t("products_refunded_alert")))]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("#")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Quantity_sold")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty_return")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),e("tbody",[t.details.length<=0?e("tr",[e("td",{attrs:{colspan:"9"}},[t._v(t._s(t.$t("NodataAvailable")))])]):t._e(),t._v(" "),t._l(t.details,(function(a){return e("tr",{key:a.detail_id,class:{row_deleted:1===a.del||0===a.no_unit&&"is_service"!=a.product_type}},[e("td",[t._v(t._s(a.detail_id))]),t._v(" "),e("td",[e("span",[t._v(t._s(a.code))]),t._v(" "),e("br"),t._v(" "),e("span",{staticClass:"badge badge-success"},[t._v(t._s(a.name))])]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(a.Net_price,3)))]),t._v(" "),e("td",[e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(a.sale_quantity)+" "+t._s(a.unitSale))])]),t._v(" "),e("td",[e("div",{staticClass:"quantity"},[e("b-input-group",[e("b-input-group-prepend",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==a.no_unit||"is_service"==a.product_type,expression:"detail.no_unit !== 0 || detail.product_type == 'is_service'"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.decrement(a,a.detail_id)}}},[t._v("-")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model.number",value:a.quantity,expression:"detail.quantity",modifiers:{number:!0}}],staticClass:"form-control",attrs:{min:0,disabled:1===a.del||0===a.no_unit&&"is_service"!=a.product_type},domProps:{value:a.quantity},on:{keyup:function(e){return t.Verified_Qty(a,a.detail_id)},input:function(e){e.target.composing||t.$set(a,"quantity",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("b-input-group-append",[e("span",{directives:[{name:"show",rawName:"v-show",value:0!==a.no_unit||"is_service"==a.product_type,expression:"detail.no_unit !== 0 || detail.product_type == 'is_service'"}],staticClass:"btn btn-primary btn-sm",on:{click:function(e){return t.increment(a,a.detail_id)}}},[t._v("+")])])],1)],1)]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(a.DiscountNet*a.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(a.taxe*a.quantity,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(a.subtotal.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])])}))],2)])])]),t._v(" "),e("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[e("table",{staticClass:"table table-striped table-sm"},[e("tbody",[e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),e("td",[e("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.TaxNet.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))+" ("+t._s(t.formatNumber(t.sale_return.tax_rate,2))+" %)")])])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.discount.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])]),t._v(" "),e("tr",[e("td",{staticClass:"bold"},[t._v(t._s(t.$t("Shipping")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.shipping.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.GrandTotal.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])])])])])]),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Order Tax",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("OrderTax")}},[e("b-input-group",{attrs:{append:"%"}},[e("b-form-input",{attrs:{state:t.getValidationState(a),"aria-describedby":"OrderTax-feedback",label:"Order Tax"},on:{keyup:function(e){return t.keyup_OrderTax()}},model:{value:t.sale_return.tax_rate,callback:function(e){t.$set(t.sale_return,"tax_rate",t._n(e))},expression:"sale_return.tax_rate"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"OrderTax-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!1,2565157719)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Discount",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("Discount")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(a),"aria-describedby":"Discount-feedback",label:"Discount"},on:{keyup:function(e){return t.keyup_Discount()}},model:{value:t.sale_return.discount,callback:function(e){t.$set(t.sale_return,"discount",t._n(e))},expression:"sale_return.discount"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Discount-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!1,535361776)})],1),t._v(" "),e("b-col",{staticClass:"mb-3",attrs:{lg:"4",md:"4",sm:"12"}},[e("validation-provider",{attrs:{name:"Shipping",rules:{regex:/^\d*\.?\d*$/}},scopedSlots:t._u([{key:"default",fn:function(a){return[e("b-form-group",{attrs:{label:t.$t("Shipping")}},[e("b-input-group",{attrs:{append:t.currentUser.currency}},[e("b-form-input",{attrs:{state:t.getValidationState(a),"aria-describedby":"Shipping-feedback",label:"Shipping"},on:{keyup:function(e){return t.keyup_Shipping()}},model:{value:t.sale_return.shipping,callback:function(e){t.$set(t.sale_return,"shipping",t._n(e))},expression:"sale_return.shipping"}})],1),t._v(" "),e("b-form-invalid-feedback",{attrs:{id:"Shipping-feedback"}},[t._v(t._s(a.errors[0]))])],1)]}}],null,!1,1484868304)})],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",{attrs:{label:t.$t("Please_provide_any_details")}},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sale_return.notes,expression:"sale_return.notes"}],staticClass:"form-control",attrs:{rows:"4",placeholder:t.$t("Afewwords")},domProps:{value:t.sale_return.notes},on:{input:function(e){e.target.composing||t.$set(t.sale_return,"notes",e.target.value)}}})])],1),t._v(" "),e("b-col",{attrs:{md:"12"}},[e("b-form-group",[e("b-button",{attrs:{variant:"primary",disabled:t.SubmitProcessing},on:{click:t.Submit_Sale_return}},[e("i",{staticClass:"i-Yes me-2 font-weight-bold"}),t._v(" "+t._s(t.$t("submit")))]),t._v(" "),t.SubmitProcessing?t._m(0):t._e()],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"typo__p"},[t("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);