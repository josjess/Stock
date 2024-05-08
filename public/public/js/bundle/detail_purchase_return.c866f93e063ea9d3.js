"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7644],{25242:(t,s,e)=>{e.r(s),e.d(s,{default:()=>c});var r=e(20629),n=e(74865),a=e.n(n);const i={computed:(0,r.Se)(["currentUserPermissions","currentUser"]),metaInfo:{title:"Detail Return Purchase"},data:function(){return{isLoading:!0,purchase_return:{},details:[],company:{},email:{to:"",subject:"",message:""}}},methods:{Return_PDF:function(){var t=this;a().start(),a().set(.1);var s=this.$route.params.id;axios.get("return_purchase_pdf/".concat(s),{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(s){var e=window.URL.createObjectURL(new Blob([s.data])),r=document.createElement("a");r.href=e,r.setAttribute("download","Return_Purchase_"+t.purchase_return.Ref+".pdf"),document.body.appendChild(r),r.click(),setTimeout((function(){return a().done()}),500)})).catch((function(){setTimeout((function(){return a().done()}),500)}))},print:function(){this.$htmlToPaper("print_Invoice")},formatNumber:function(t,s){var e=("string"==typeof t?t:t.toString()).split(".");if(s<=0)return e[0];var r=e[1]||"";if(r.length>s)return"".concat(e[0],".").concat(r.substr(0,s));for(;r.length<s;)r+="0";return"".concat(e[0],".").concat(r)},makeToast:function(t,s,e){this.$root.$bvToast.toast(s,{title:e,variant:t,solid:!0})},Get_Details:function(){var t=this,s=this.$route.params.id;axios.get("returns/purchase/".concat(s)).then((function(s){t.purchase_return=s.data.purchase_return,t.details=s.data.details,t.company=s.data.company,t.isLoading=!1})).catch((function(s){setTimeout((function(){t.isLoading=!1}),500)}))},Delete_Return:function(){var t=this,s=this.$route.params.id;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(e){e.value&&axios.delete("returns/purchase/"+s).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.ReturnDeleted"),"success"),t.$router.push({name:"index_purchase_return"})})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Details()}};const c=(0,e(51900).Z)(i,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"main-content"},[s("breadcumb",{attrs:{page:t.$t("ReturnDetail"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?s("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():s("b-card",[s("b-row",[s("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[t.currentUserPermissions&&t.currentUserPermissions.includes("Purchase_Returns_edit")?s("router-link",{staticClass:"btn btn-success btn-icon ripple btn-sm",attrs:{title:"Edit",to:"/app/purchase_return/edit/"+t.$route.params.id+"/"+t.purchase_return.purchase_id}},[s("i",{staticClass:"i-Edit"}),t._v(" "),s("span",[t._v(t._s(t.$t("EditReturn")))])]):t._e(),t._v(" "),s("button",{staticClass:"btn btn-primary btn-icon ripple btn-sm",on:{click:function(s){return t.Return_PDF()}}},[s("i",{staticClass:"i-File-TXT"}),t._v(" PDF\n        ")]),t._v(" "),s("button",{staticClass:"btn btn-warning btn-icon ripple btn-sm",on:{click:function(s){return t.print()}}},[s("i",{staticClass:"i-Billing"}),t._v("\n          "+t._s(t.$t("print"))+"\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("Purchase_Returns_delete")?s("button",{staticClass:"btn btn-danger btn-icon ripple btn-sm",on:{click:function(s){return t.Delete_Return()}}},[s("i",{staticClass:"i-Close-Window"}),t._v("\n          "+t._s(t.$t("Del"))+"\n        ")]):t._e()],1)],1),t._v(" "),s("div",{staticClass:"invoice",attrs:{id:"print_Invoice"}},[s("div",{staticClass:"invoice-print"},[s("b-row",{staticClass:"justify-content-md-center"},[s("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("ReturnDetail"))+" : "+t._s(t.purchase_return.Ref))])]),t._v(" "),s("hr"),t._v(" "),s("b-row",{staticClass:"mt-5"},[s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Supplier_Info")))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_name))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_email))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_phone))]),t._v(" "),s("div",[t._v(t._s(t.purchase_return.supplier_adr))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Company_Info")))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyName))]),t._v(" "),s("div",[t._v(t._s(t.company.email))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyPhone))]),t._v(" "),s("div",[t._v(t._s(t.company.CompanyAdress))])]),t._v(" "),s("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Return_Info")))]),t._v(" "),s("div",[t._v(t._s(t.$t("Reference"))+" : "+t._s(t.purchase_return.Ref))]),t._v(" "),s("div",[t._v(t._s(t.$t("Purchase_Ref"))+" : "+t._s(t.purchase_return.purchase_ref))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("Status"))+" :\n              "),"completed"==t.purchase_return.statut?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("complete")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Pending")))])]),t._v(" "),s("div",[t._v(t._s(t.$t("warehouse"))+" : "+t._s(t.purchase_return.warehouse))]),t._v(" "),s("div",[t._v("\n              "+t._s(t.$t("PaymentStatus"))+" :\n              "),"paid"==t.purchase_return.payment_status?s("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==t.purchase_return.payment_status?s("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("partial")))]):s("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])])])],1),t._v(" "),s("b-row",{staticClass:"mt-3"},[s("b-col",{attrs:{md:"12"}},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("list_product_returns")))]),t._v(" "),s("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.$t("products_refunded_alert")))]),t._v(" "),s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table table-hover table-md"},[s("thead",{staticClass:"bg-gray-300"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Cost")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty_return")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Unitcost")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),s("tbody",t._l(t.details,(function(e){return s("tr",[s("td",[s("span",[t._v(t._s(e.code)+" ("+t._s(e.name)+")")]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:e.is_imei&&null!==e.imei_number,expression:"detail.is_imei && detail.imei_number !==null "}]},[t._v(t._s(t.$t("IMEI_SN"))+" : "+t._s(e.imei_number))])]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.Net_cost,3)))]),t._v(" "),s("td",[t._v(t._s(t.formatNumber(e.quantity,2))+" "+t._s(e.unit_purchase))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.cost,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.DiscountNet,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(e.taxe,2)))]),t._v(" "),s("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(e.total.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])])})),0)])])]),t._v(" "),s("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[s("table",{staticClass:"table table-striped table-sm"},[s("tbody",[s("tr",[s("td",[s("span",[t._v(t._s(t.$t("OrderTax")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.TaxNet.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2}))+" ("+t._s(t.formatNumber(t.purchase_return.tax_rate,2))+" %)")])])]),t._v(" "),s("tr",[s("td",[s("span",[t._v(t._s(t.$t("Discount")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.discount.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])])]),t._v(" "),s("tr",[s("td",[s("span",[t._v(t._s(t.$t("Shipping")))])]),t._v(" "),s("td",[s("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.shipping.toLocaleString("en",{minimumFractionDigits:2,maximumFractionDigits:2})))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.GrandTotal))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Paid")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.paid_amount))])])]),t._v(" "),s("tr",[s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Due")))])]),t._v(" "),s("td",[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.purchase_return.due))])])])])])])],1),t._v(" "),s("hr",{directives:[{name:"show",rawName:"v-show",value:t.purchase_return.note,expression:"purchase_return.note"}]}),t._v(" "),s("b-row",{staticClass:"mt-4"},[s("b-col",{attrs:{md:"12"}},[s("p",[t._v(t._s(t.purchase_return.note))])])],1)],1)])],1)],1)}),[],!1,null,null,null).exports}}]);