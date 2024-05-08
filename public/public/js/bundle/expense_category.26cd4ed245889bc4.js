"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2885],{92057:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var s=r(20629),i=r(74865),a=r.n(i);function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var s=r.call(e,t||"default");if("object"!==o(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={metaInfo:{title:"Expense Category"},data:function(){return{isLoading:!0,SubmitProcessing:!1,serverParams:{columnFilters:{},sort:{field:"id",type:"desc"},page:1,perPage:10},selectedIds:[],totalRows:"",search:"",categories:[],editmode:!1,limit:"10",category:{id:"",name:"",description:""}}},computed:c(c({},(0,s.Se)(["currentUserPermissions"])),{},{columns:function(){return[{label:this.$t("Namecategorie"),field:"name",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Description"),field:"description",tdClass:"text-left",thClass:"text-left"},{label:this.$t("Action"),field:"actions",html:!0,tdClass:"text-right",thClass:"text-right",sortable:!1}]}}),methods:{Submit_Category:function(){var e=this;this.$refs.Create_Category.validate().then((function(t){t?e.editmode?e.Update_Category():e.Create_Category():e.makeToast("danger",e.$t("Please_fill_the_form_correctly"),e.$t("Failed"))}))},makeToast:function(e,t,r){this.$root.$bvToast.toast(t,{title:r,variant:e,solid:!0})},updateParams:function(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange:function(e){var t=e.currentPage;this.serverParams.page!==t&&(this.updateParams({page:t}),this.Get_Categories(t))},onPerPageChange:function(e){var t=e.currentPerPage;this.limit!==t&&(this.limit=t,this.updateParams({page:1,perPage:t}),this.Get_Categories(1))},selectionChanged:function(e){var t=this,r=e.selectedRows;this.selectedIds=[],r.forEach((function(e,r){t.selectedIds.push(e.id)}))},onSortChange:function(e){this.updateParams({sort:{type:e[0].type,field:e[0].field}}),this.Get_Categories(this.serverParams.page)},onSearch:function(e){this.search=e.searchTerm,this.Get_Categories(this.serverParams.page)},getValidationState:function(e){var t=e.dirty,r=e.validated,s=e.valid;return t||r?void 0===s?null:s:null},New_Category:function(){this.reset_Form(),this.editmode=!1,this.$bvModal.show("New_Category")},Edit_Category:function(e){this.Get_Categories(this.serverParams.page),this.reset_Form(),this.category=e,this.editmode=!0,this.$bvModal.show("New_Category")},reset_Form:function(){this.category={id:"",name:"",description:""}},Get_Categories:function(e){var t=this;a().start(),a().set(.1),axios.get("expenses_category?page="+e+"&SortField="+this.serverParams.sort.field+"&SortType="+this.serverParams.sort.type+"&search="+this.search+"&limit="+this.limit).then((function(e){t.categories=e.data.Expenses_category,t.totalRows=e.data.totalRows,a().done(),t.isLoading=!1})).catch((function(e){a().done(),setTimeout((function(){t.isLoading=!1}),500)}))},Create_Category:function(){var e=this;this.SubmitProcessing=!0,axios.post("expenses_category",{name:this.category.name,description:this.category.description}).then((function(t){Fire.$emit("Create_Category_Expense"),e.makeToast("success",e.$t("Successfully_Created"),e.$t("Success")),e.SubmitProcessing=!1})).catch((function(t){e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed")),e.SubmitProcessing=!1}))},Update_Category:function(){var e=this;this.SubmitProcessing=!0,axios.put("expenses_category/"+this.category.id,{name:this.category.name,description:this.category.description}).then((function(t){Fire.$emit("Create_Category_Expense"),e.makeToast("success",e.$t("Successfully_Updated"),e.$t("Success")),e.SubmitProcessing=!1})).catch((function(t){e.makeToast("danger",e.$t("InvalidData"),e.$t("Failed")),e.SubmitProcessing=!1}))},Delete_Category:function(e){var t=this;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(r){r.value&&axios.delete("expenses_category/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.CatDeleted"),"success"),Fire.$emit("Delete_Category_Expense")})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){var e=this;this.Get_Categories(1),Fire.$on("Create_Category_Expense",(function(){e.Get_Categories(e.serverParams.page),e.$bvModal.hide("New_Category")})),Fire.$on("Delete_Category_Expense",(function(){e.Get_Categories(e.serverParams.page)}))}};const d=(0,r(51900).Z)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"main-content"},[t("breadcumb",{attrs:{page:e.$t("Expense_Category"),folder:e.$t("Expenses")}}),e._v(" "),e.isLoading?t("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t("div",[t("vue-good-table",{attrs:{mode:"remote",columns:e.columns,totalRows:e.totalRows,rows:e.categories,"search-options":{enabled:!0,placeholder:e.$t("Search_this_table")},"pagination-options":{enabled:!0,mode:"records",nextLabel:"next",prevLabel:"prev"},styleClass:"tableOne table-hover vgt-table"},on:{"on-page-change":e.onPageChange,"on-per-page-change":e.onPerPageChange,"on-sort-change":e.onSortChange,"on-search":e.onSearch},scopedSlots:e._u([{key:"table-row",fn:function(r){return["actions"==r.column.field?t("span",[e.currentUserPermissions&&e.currentUserPermissions.includes("expense_edit")?t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Edit"},on:{click:function(t){return e.Edit_Category(r.row)}}},[t("i",{staticClass:"i-Edit text-25 text-success"})]):e._e(),e._v(" "),e.currentUserPermissions&&e.currentUserPermissions.includes("expense_delete")?t("a",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"cursor-pointer",attrs:{title:"Delete"},on:{click:function(t){return e.Delete_Category(r.row.id)}}},[t("i",{staticClass:"i-Close-Window text-25 text-danger"})]):e._e()]):e._e()]}}])},[t("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[t("button",{staticClass:"btn btn-danger btn-sm",on:{click:function(t){return e.delete_by_selected()}}},[e._v(e._s(e.$t("Del")))])]),e._v(" "),t("div",{staticClass:"mt-2 mb-3",attrs:{slot:"table-actions"},slot:"table-actions"},[e.currentUserPermissions&&e.currentUserPermissions.includes("expense_add")?t("b-button",{attrs:{size:"sm",variant:"primary ripple m-1"},on:{click:function(t){return e.New_Category()}}},[t("i",{staticClass:"i-Add"}),e._v("\n          "+e._s(e.$t("Add"))+"\n        ")]):e._e()],1)])],1),e._v(" "),t("validation-observer",{ref:"Create_Category"},[t("b-modal",{attrs:{"hide-footer":"",size:"lg",id:"New_Category",title:e.editmode?e.$t("Edit"):e.$t("Add")}},[t("b-form",{on:{submit:function(t){return t.preventDefault(),e.Submit_Category.apply(null,arguments)}}},[t("b-row",[t("b-col",{attrs:{md:"12"}},[t("validation-provider",{attrs:{name:"Name category",rules:{required:!0}},scopedSlots:e._u([{key:"default",fn:function(r){return[t("b-form-group",{attrs:{label:e.$t("Namecategorie")+" *"}},[t("b-form-input",{attrs:{state:e.getValidationState(r),"aria-describedby":"category-feedback",label:"name"},model:{value:e.category.name,callback:function(t){e.$set(e.category,"name",t)},expression:"category.name"}}),e._v(" "),t("b-form-invalid-feedback",{attrs:{id:"category-feedback"}},[e._v(e._s(r.errors[0]))])],1)]}}])})],1),e._v(" "),t("b-col",{attrs:{md:"12"}},[t("b-form-group",{attrs:{label:e.$t("Description")}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.category.description,expression:"category.description"}],staticClass:"form-control",attrs:{rows:"4",name:"Description",id:"Description",placeholder:e.$t("Afewwords")},domProps:{value:e.category.description},on:{input:function(t){t.target.composing||e.$set(e.category,"description",t.target.value)}}})])],1),e._v(" "),t("b-col",{staticClass:"mt-3",attrs:{md:"12"}},[t("b-button",{attrs:{variant:"primary",type:"submit",disabled:e.SubmitProcessing}},[t("i",{staticClass:"i-Yes me-2 font-weight-bold"}),e._v(" "+e._s(e.$t("submit")))]),e._v(" "),e.SubmitProcessing?e._m(0):e._e()],1)],1)],1)],1)],1)],1)}),[function(){var e=this._self._c;return e("div",{staticClass:"typo__p"},[e("div",{staticClass:"spinner sm spinner-primary mt-3"})])}],!1,null,null,null).exports}}]);