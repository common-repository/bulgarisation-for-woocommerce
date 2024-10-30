(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{134:function(e,t,n){"use strict";n.r(t);var o=n(135),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t.default=a.a},135:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(79)),a=s(n(18)),i=s(n(19)),r=s(n(80));function s(e){return e&&e.__esModule?e:{default:e}}t.default={components:{Multiselect:r.default},data:function(){return{loading:!1,type:"",types:[{id:"office",label:wooBg_econt.i18n.office},{id:"address",label:wooBg_econt.i18n.address}],paymentType:wooBg_econt.paymentType,paymentBy:"",paymentByTypes:[{id:"buyer",label:wooBg_econt.i18n.buyer},{id:"sender",label:wooBg_econt.i18n.sender},{id:"fixed",label:wooBg_econt.i18n.fixedPrice}],size:"10x9",shipmentStatus:"",labelData:wooBg_econt.label,document:e(document.body),shipmentType:"",shipmentTypes:(0,o.default)(wooBg_econt.shipmentTypes),office:"",offices:(0,o.default)(wooBg_econt.offices),street:"",streets:(0,o.default)(wooBg_econt.streets),testOption:"",testsOptions:(0,o.default)(wooBg_econt.testsOptions),streetNumber:"",other:"",message:"",i18n:wooBg_econt.i18n,declaredValue:"",useInvoiceNumber:!1}},watch:{shipmentType:function(e,t){this.labelData.shipmentType=e.id}},computed:{iframeUrl:function(){return this.shipmentStatus.label.pdfURL.replace(/^https?:/,"")+"&label="+this.size},labelJSON:function(){return JSON.stringify(this.labelData)},statuses:function(){var e=[];return this.shipmentStatus&&this.shipmentStatus.label.trackingEvents.length&&(this.shipmentStatus.label.trackingEvents.forEach((function(t){var n="",o=new Date(t.time),a=t.destinationDetails;o=o.getDate()+"/"+(o.getMonth()+1)+"/"+o.getFullYear()+" "+o.getHours()+":"+("0"+o.getMinutes()).slice(-2)+":"+("0"+o.getSeconds()).slice(-2),"office"===t.destinationType||"prepared"===t.destinationType?n="//ee.econt.com/images/icons/trace_office.png":"courier_direction"===t.destinationType?n="//ee.econt.com/images/icons/trace_line.png":"courier"===t.destinationType?n="//ee.econt.com/images/icons/trace_courier.png":"client"===t.destinationType?n="//ee.econt.com/images/icons/trace_ok.png":"return"===t.destinationType&&(n="//ee.econt.com/images/icons/trace_return.png"),e.push({time:o,image:n,destination:a})})),e.reverse()),e}},mounted:function(){var t=this;wooBg_econt.shipmentStatus&&(this.shipmentStatus=wooBg_econt.shipmentStatus),this.document.on("change",'input[name="label_size"]',(function(){t.size=e(this).val()})),this.types.forEach((function(e){e.id==wooBg_econt.cookie_data.type&&(t.type=e)})),this.shipmentTypes.forEach((function(e){e.id.toLowerCase()==wooBg_econt.label.shipmentType.toLowerCase()&&(t.shipmentType=e)})),this.testsOptions.forEach((function(e){e.id==wooBg_econt.testOption&&(t.testOption=e)})),"office"==wooBg_econt.cookie_data.type?this.offices.forEach((function(e){e.code==wooBg_econt.cookie_data.selectedOffice&&(t.office=e)})):(this.streetNumber=wooBg_econt.cookie_data.streetNumber,this.other=wooBg_econt.cookie_data.other,this.streets.forEach((function(e){e.id==wooBg_econt.cookie_data.selectedAddress.id&&(t.street=e)}))),this.paymentBy=this.paymentByTypes[1],wooBg_econt.label.paymentReceiverAmount?this.paymentBy=this.paymentByTypes[2]:wooBg_econt.label.paymentReceiverMethod&&(this.paymentBy=this.paymentByTypes[0]),wooBg_econt.label.services.declaredValueAmount&&(this.declaredValue=wooBg_econt.label.services.declaredValueAmount),wooBg_econt.useInvoiceNumber&&(this.useInvoiceNumber=!0,this.labelData.services.invoiceNum=wooBg_econt.invoiceNumber)},methods:{onCopy:function(e){alert(this.i18n.copyLabelDataMessage)},updateLabel:function(e){e.preventDefault(),this.loading=!0;var t=this;t.message="";var n={type:this.type,label_data:this.labelData,shipmentType:this.shipmentType,office:this.office,street:this.street,streetNumber:this.streetNumber,other:this.other,paymentBy:this.paymentBy,testOption:this.testOption,cookie_data:wooBg_econt.cookie_data,orderId:wooBg_econt.orderId,declaredValue:this.declaredValue,action:"woo_bg_econt_generate_label",nonce:wooBg_econt.nonce};a.default.post(woocommerce_admin.ajax_url,i.default.stringify(n)).then((function(e){t.loading=!1,e.data.data.message?t.message=e.data.data.message:(t.shipmentStatus=(0,o.default)(e.data.data.shipmentStatus,!0),t.labelData=(0,o.default)(e.data.data.label,!0),t.size="refresh",setTimeout((function(){t.document.find('input[name="label_size"]:checked').trigger("change")}),10))}))},updateShipmentStatus:function(e){e.preventDefault(),this.loading=!0;var t=this;t.message="";var n={orderId:wooBg_econt.orderId,shipmentStatus:this.shipmentStatus,action:"woo_bg_econt_update_shipment_status",nonce:wooBg_econt.nonce};a.default.post(woocommerce_admin.ajax_url,i.default.stringify(n)).then((function(e){t.loading=!1,e.data.data.message?t.message=e.data.data.message:(t.shipmentStatus.label=(0,o.default)(e.data.data.shipmentStatus,!0),t.size="refresh",setTimeout((function(){t.document.find('input[name="label_size"]:checked').trigger("change")}),10))}))},deleteLabel:function(e){e.preventDefault(),this.loading=!0;var t=this;t.message="";var n={orderId:wooBg_econt.orderId,shipmentStatus:this.shipmentStatus,action:"woo_bg_econt_delete_label",nonce:wooBg_econt.nonce};a.default.post(woocommerce_admin.ajax_url,i.default.stringify(n)).then((function(e){t.shipmentStatus="",t.loading=!1,t.size="refresh",setTimeout((function(){t.document.find('input[name="label_size"]:checked').trigger("change")}),10)}))}}}}).call(this,n(0))},20:function(e,t){},244:function(e,t,n){"use strict";n.r(t);var o=n(257),a=n(134);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);var r=n(75),s=Object(r.a)(a.default,o.a,o.b,!1,null,null,null);t.default=s.exports},257:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return a}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel-wrap woocommerce woocommerce--econt ajax-container",attrs:{"data-loading":e.loading}},[n("div",{staticClass:"panel woocommerce-order-data",attrs:{id:"order_data"}},[n("div",{staticClass:"order_data_column_container"},[n("div",{staticClass:"order_data_column order_data_column--half"},[n("h3",[e._v(e._s(e.i18n.labelData))]),e._v(" "),n("form",[e.shipmentStatus?e._e():n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.deliveryType)+":\n\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"label",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.types),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.label))])]}}],null,!1,275817578),model:{value:e.type,callback:function(t){e.type=t},expression:"type"}})],1),e._v(" "),"office"==e.type.id?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.office)+":\n\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"name",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.offices),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.name))])]}}],null,!1,2784876651),model:{value:e.office,callback:function(t){e.office=t},expression:"office"}})],1):e._e(),e._v(" "),"address"==e.type.id?n("div",[n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t\t"+e._s(e.i18n.streetQuarter)+":\n\t\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"label",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.streets),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.label))])]}}],null,!1,275817578),model:{value:e.street,callback:function(t){e.street=t},expression:"street"}})],1),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[e.street.type&&"streets"===e.street.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.streetNumber,expression:"streetNumber"}],staticClass:"woo-bg-multiselect--additional-field",attrs:{placeholder:e.i18n.streetNumber,type:"text"},domProps:{value:e.streetNumber},on:{input:function(t){t.target.composing||(e.streetNumber=t.target.value)}}}):e._e(),e._v(" "),e.street.type&&"quarters"===e.street.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.other,expression:"other"}],staticClass:"woo-bg-multiselect--additional-field",attrs:{placeholder:e.i18n.blVhEt,type:"text"},domProps:{value:e.other},on:{input:function(t){t.target.composing||(e.other=t.target.value)}}}):e._e()]),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[e.street.type&&"streets"===e.street.type?n("input",{directives:[{name:"model",rawName:"v-model",value:e.other,expression:"other"}],staticClass:"woo-bg-multiselect--additional-field",attrs:{placeholder:e.i18n.blVhEt,type:"text"},domProps:{value:e.other},on:{input:function(t){t.target.composing||(e.other=t.target.value)}}}):e._e()])]):e._e(),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.shipmentType)+":\n\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"label",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.shipmentTypes),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.label))])]}}]),model:{value:e.shipmentType,callback:function(t){e.shipmentType=t},expression:"shipmentType"}})],1),e._v(" "),e.labelData.packCount?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.packCount)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.packCount,expression:"labelData.packCount"}],attrs:{type:"number"},domProps:{value:e.labelData.packCount},on:{input:function(t){t.target.composing||e.$set(e.labelData,"packCount",t.target.value)}}})]):e._e(),e._v(" "),"cod"===e.paymentType?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.cd)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.services.cdAmount,expression:"labelData.services.cdAmount"}],attrs:{type:"number"},domProps:{value:e.labelData.services.cdAmount},on:{input:function(t){t.target.composing||e.$set(e.labelData.services,"cdAmount",t.target.value)}}})]):e._e(),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.declaredValue)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.declaredValue,expression:"declaredValue"}],attrs:{type:"number"},domProps:{value:e.declaredValue},on:{input:function(t){t.target.composing||(e.declaredValue=t.target.value)}}})]),e._v(" "),e.labelData.weight?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.weight)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.weight,expression:"labelData.weight"}],attrs:{type:"number"},domProps:{value:e.labelData.weight},on:{input:function(t){t.target.composing||e.$set(e.labelData,"weight",t.target.value)}}})]):e._e(),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.description)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.shipmentDescription,expression:"labelData.shipmentDescription"}],attrs:{type:"text"},domProps:{value:e.labelData.shipmentDescription},on:{input:function(t){t.target.composing||e.$set(e.labelData,"shipmentDescription",t.target.value)}}})]),e._v(" "),e.useInvoiceNumber?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.invoiceNum)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.services.invoiceNum,expression:"labelData.services.invoiceNum"}],attrs:{type:"text"},domProps:{value:e.labelData.services.invoiceNum},on:{input:function(t){t.target.composing||e.$set(e.labelData.services,"invoiceNum",t.target.value)}}})]):e._e(),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.deliveryPayedBy)+":\n\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"label",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.paymentByTypes),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.label))])]}}]),model:{value:e.paymentBy,callback:function(t){e.paymentBy=t},expression:"paymentBy"}})],1),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.reviewAndTest)+":\n\t\t\t\t\t\t")]),e._v(" "),n("multiselect",{attrs:{"deselect-label":"",selectLabel:"","track-by":"id",label:"label",selectedLabel:e.i18n.selected,placeholder:e.i18n.choose,options:Object.values(e.testsOptions),searchable:!0,"allow-empty":!1},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var o=t.option;return[n("strong",[e._v(e._s(o.label))])]}}]),model:{value:e.testOption,callback:function(t){e.testOption=t},expression:"testOption"}})],1),e._v(" "),"fixed"===e.paymentBy.id?n("p",{staticClass:"form-field form-field-wide"},[n("label",[e._v("\n\t\t\t\t\t\t\t"+e._s(e.i18n.fixedPrice)+":\n\t\t\t\t\t\t")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.labelData.paymentReceiverAmount,expression:"labelData.paymentReceiverAmount"}],attrs:{type:"number"},domProps:{value:e.labelData.paymentReceiverAmount},on:{input:function(t){t.target.composing||e.$set(e.labelData,"paymentReceiverAmount",t.target.value)}}})]):e._e(),e._v(" "),e.shipmentStatus?n("p",{staticClass:"form-field form-field-wide"},[n("button",{staticClass:"button-primary woocommerce-save-button",attrs:{name:"save",type:"submit",value:e.i18n.updateLabel},on:{click:e.updateLabel}},[e._v(e._s(e.i18n.updateLabel))]),e._v(" "),n("button",{staticClass:"button-primary woocommerce-save-button",attrs:{name:"save",type:"submit",value:e.i18n.updateShipmentStatus},on:{click:e.updateShipmentStatus}},[e._v(e._s(e.i18n.updateShipmentStatus))])]):n("p",{staticClass:"form-field form-field-wide"},[n("button",{staticClass:"button-primary woocommerce-save-button",attrs:{name:"save",type:"submit",value:e.i18n.generateLabel},on:{click:e.updateLabel}},[e._v(e._s(e.i18n.generateLabel))])]),e._v(" "),n("p",{staticClass:"form-field form-field-wide"},[n("button",{staticClass:"button-secondary",attrs:{name:"save",type:"submit",value:e.i18n.deleteLabel},on:{click:e.deleteLabel}},[e._v(e._s(e.i18n.deleteLabel))]),e._v(" "),n("a",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.labelJSON,expression:"labelJSON",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],staticClass:"button-secondary"},[e._v(e._s(e.i18n.copyLabelData))])])]),e._v(" "),n("div",{staticClass:"clear"}),e._v(" "),e.message?n("div",{staticClass:"notice notice-error notice-alt"},[n("p",[e._v(e._s(e.message))])]):e._e()]),e._v(" "),n("div",{staticClass:"order_data_column order_data_column--half"},[e.shipmentStatus?n("div",{staticClass:"generated-label"},[n("h3",[e._v(e._s(e.i18n.label)+": "+e._s(e.shipmentStatus.label.shipmentNumber))]),e._v(" "),n("br"),e._v(" "),n("div",[n("span",{staticClass:"woo-bg--radio"},[n("input",{attrs:{id:"label_size_default",type:"radio",name:"label_size",value:""}}),e._v(" "),n("label",{attrs:{for:"label_size_default"}},[e._v(" "+e._s(e.i18n.default))])]),e._v(" "),e._m(0),e._v(" "),e._m(1)]),e._v(" "),n("iframe",{attrs:{id:"woo-bg--econt-label-print",src:e.iframeUrl}})]):e._e()])]),e._v(" "),e.statuses.length?n("div",{staticClass:"woocommerce_order_status"},[n("h3",[e._v(e._s(e.i18n.shipmentStatus))]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v(" "+e._s(e.i18n.time)+" ")]),e._v(" "),n("th",[e._v(" "+e._s(e.i18n.event)+" ")]),e._v(" "),n("th",[e._v(" "+e._s(e.i18n.details)+" ")])])]),e._v(" "),n("tbody",e._l(e.statuses,(function(t,o){return n("tr",[n("th",[e._v(" "+e._s(t.time)+" ")]),e._v(" "),n("th",[n("img",{attrs:{src:t.image}})]),e._v(" "),n("th",[e._v(" "+e._s(t.destination)+" ")])])})),0)])]):e._e()]),e._v(" "),n("div",{staticClass:"clear"})])},a=[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"woo-bg--radio"},[t("input",{attrs:{id:"label_size_10x9",type:"radio",name:"label_size",value:"10x9",checked:""}}),this._v(" "),t("label",{attrs:{for:"label_size_10x9"}},[this._v("10x9")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"woo-bg--radio"},[t("input",{attrs:{id:"label_size_10x15",type:"radio",name:"label_size",value:"10x15"}}),this._v(" "),t("label",{attrs:{for:"label_size_10x15"}},[this._v(" 10x15")])])}]},72:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(78);var o=r(n(77)),a=r(n(244)),i=r(n(90));function r(e){return e&&e.__esModule?e:{default:e}}o.default.use(i.default),t.default=new o.default({el:"#woo-bg--econt-admin",render:function(e){return e(a.default)}})},90:function(e,t,n){var o=n(91),a={autoSetContainer:!1,appendToBody:!0},i={install:function(e){var t="3."===e.version.slice(0,2)?e.config.globalProperties:e.prototype;t.$clipboardConfig=a,t.$copyText=function(e,t){return new Promise((function(n,i){var r=document.createElement("button"),s=new o(r,{text:function(){return e},action:function(){return"copy"},container:"object"==typeof t?t:document.body});s.on("success",(function(e){s.destroy(),n(e)})),s.on("error",(function(e){s.destroy(),i(e)})),a.appendToBody&&document.body.appendChild(r),r.click(),a.appendToBody&&document.body.removeChild(r)}))},e.directive("clipboard",{bind:function(e,t,n){if("success"===t.arg)e._vClipboard_success=t.value;else if("error"===t.arg)e._vClipboard_error=t.value;else{var i=new o(e,{text:function(){return t.value},action:function(){return"cut"===t.arg?"cut":"copy"},container:a.autoSetContainer?e:void 0});i.on("success",(function(t){var n=e._vClipboard_success;n&&n(t)})),i.on("error",(function(t){var n=e._vClipboard_error;n&&n(t)})),e._vClipboard=i}},update:function(e,t){"success"===t.arg?e._vClipboard_success=t.value:"error"===t.arg?e._vClipboard_error=t.value:(e._vClipboard.text=function(){return t.value},e._vClipboard.action=function(){return"cut"===t.arg?"cut":"copy"})},unbind:function(e,t){e._vClipboard&&("success"===t.arg?delete e._vClipboard_success:"error"===t.arg?delete e._vClipboard_error:(e._vClipboard.destroy(),delete e._vClipboard))}})},config:a};e.exports=i},91:function(e,t,n){
/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
e.exports=function(){return t={686:function(e,t,n){"use strict";n.d(t,{default:function(){return b}}),t=n(279);var o=n.n(t),a=(t=n(370),n.n(t)),i=(t=n(817),n.n(t));function r(e){try{return document.execCommand(e)}catch(e){return}}var s=function(e){return e=i()(e),r("cut"),e};function l(e,t){var n,o;return n=e,o="rtl"===document.documentElement.getAttribute("dir"),(e=document.createElement("textarea")).style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[o?"right":"left"]="-9999px",o=window.pageYOffset||document.documentElement.scrollTop,e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=n,e=e,t.container.appendChild(e),t=i()(e),r("copy"),e.remove(),t}var c=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body},n="";return"string"==typeof e?n=l(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?n=l(e.value,t):(n=i()(e),r("copy")),n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){if(e="data-clipboard-".concat(e),t.hasAttribute(e))return t.getAttribute(e)}var b=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(r,o());var e,t,n,i=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=m(e);return n=t?(n=m(this).constructor,Reflect.construct(o,arguments,n)):o.apply(this,arguments),o=this,!(n=n)||"object"!==d(n)&&"function"!=typeof n?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(o):n}}(r);function r(e,t){var n;return function(e){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this),(n=i.call(this)).resolveOptions(t),n.listenClick(e),n}return e=r,n=[{key:"copy",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{container:document.body};return c(e,t)}},{key:"cut",value:function(e){return s(e)}},{key:"isSupported",value:function(){var e="string"==typeof(e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:["copy","cut"])?[e]:e,t=!!document.queryCommandSupported;return e.forEach((function(e){t=t&&!!document.queryCommandSupported(e)})),t}}],(t=[{key:"resolveOptions",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,n=this.action(t)||"copy";e=function(){var e=void 0===(n=(o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).action)?"copy":n,t=o.container,n=o.target,o=o.text;if("copy"!==e&&"cut"!==e)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==n){if(!n||"object"!==u(n)||1!==n.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===e&&n.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===e&&(n.hasAttribute("readonly")||n.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return o?c(o,{container:t}):n?"cut"===e?s(n):c(n,{container:t}):void 0}({action:n,container:this.container,target:this.target(t),text:this.text(t)}),this.emit(e?"success":"error",{action:n,text:e,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return v("action",e)}},{key:"defaultTarget",value:function(e){if(e=v("target",e))return document.querySelector(e)}},{key:"defaultText",value:function(e){return v("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}])&&p(e.prototype,t),n&&p(e,n),r}()},828:function(e){var t;"undefined"==typeof Element||Element.prototype.matches||((t=Element.prototype).matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector),e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,n){var o=n(828);function a(e,t,n,a,i){var r=function(e,t,n,a){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&a.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,r,i),{destroy:function(){e.removeEventListener(n,r,i)}}}e.exports=function(e,t,n,o,i){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,o,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,n){var o=n(879),a=n(438);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return c=t,u=n,(l=e).addEventListener(c,u),{destroy:function(){l.removeEventListener(c,u)}};if(o.nodeList(e))return i=e,r=t,s=n,Array.prototype.forEach.call(i,(function(e){e.addEventListener(r,s)})),{destroy:function(){Array.prototype.forEach.call(i,(function(e){e.removeEventListener(r,s)}))}};if(o.string(e))return e=e,t=t,n=n,a(document.body,e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");var i,r,s,l,c,u}},817:function(e){e.exports=function(e){var t,n="SELECT"===e.nodeName?(e.focus(),e.value):"INPUT"===e.nodeName||"TEXTAREA"===e.nodeName?((t=e.hasAttribute("readonly"))||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),t||e.removeAttribute("readonly"),e.value):(e.hasAttribute("contenteditable")&&e.focus(),n=window.getSelection(),(t=document.createRange()).selectNodeContents(e),n.removeAllRanges(),n.addRange(t),n.toString());return n}},279:function(e){function t(){}t.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function a(){o.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,a=n.length;o<a;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],a=[];if(o&&t)for(var i=0,r=o.length;i<r;i++)o[i].fn!==t&&o[i].fn._!==t&&a.push(o[i]);return a.length?n[e]=a:delete n[e],this}},e.exports=t,e.exports.TinyEmitter=t}},n={},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e(686).default;function e(o){if(n[o])return n[o].exports;var a=n[o]={exports:{}};return t[o](a,a.exports,e),a.exports}var t,n}()}}]);