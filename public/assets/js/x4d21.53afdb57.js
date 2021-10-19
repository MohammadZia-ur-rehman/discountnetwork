(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["x4d21"],{"0798":function(t,e,a){"use strict";a("0c18");var r=a("10d2"),s=a("afdd"),o=a("9d26"),i=a("f2e7"),n=a("7560"),l=a("2b0e"),c=l["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),d=a("58df"),u=a("d9bd");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){p(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e["a"]=Object(d["a"])(r["a"],i["a"],c).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:p({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(s["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(o["a"],{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(o["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=f({},r["a"].options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||n["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(u["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0c18":function(t,e,a){},3469:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"viewContainer"},[a("v-container",{staticClass:"inner-container"},[a("v-card",{staticClass:"mt-md-12 mt-0 content-tabs-wrapper",attrs:{tile:"",elevation:"0"}},[a("v-tabs",{staticClass:"px-5 content-tabs",attrs:{color:t.$store.state.app.dark?"white":"black","icons-and-text":"",height:"100","slider-size":"4","show-arrows":""}},[a("v-tab",{staticClass:"no-caps",attrs:{to:{name:"settings.profile"},ripple:!1}},[t._v(" "+t._s(t.$t("profile"))+" "),a("v-icon",{attrs:{size:"24"}},[t._v("mdi-account-circle")])],1),3===t.$auth.user().role?a("v-tab",{staticClass:"no-caps",attrs:{to:{name:"settings.business"},ripple:!1}},[t._v(" "+t._s(t.$t("business"))+" "),a("v-icon",{attrs:{size:"24"}},[t._v("mdi-briefcase")])],1):t._e(),3===t.$auth.user().role?a("v-tab",{staticClass:"no-caps",attrs:{to:{name:"settings.business.subscription"},ripple:!1}},[t._v(" "+t._s(t.$t("subscription"))+" "),a("v-icon",{attrs:{size:"24"}},[t._v("mdi-domain")])],1):t._e()],1),a("v-divider"),a("v-tabs",{staticClass:"mt-5 px-5 content-tabs",attrs:{color:t.$store.state.app.dark?"white":"black","slider-size":"2","show-arrows":"","active-class":"font-weight-bold"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",{staticClass:"no-caps",attrs:{href:"#general",ripple:!1}},[t._v(" "+t._s(t.$t("general"))+" ")]),a("v-tab",{staticClass:"no-caps",attrs:{href:"#localization",ripple:!1}},[t._v(" "+t._s(t.$t("localization"))+" ")]),a("v-tab",{staticClass:"no-caps",attrs:{href:"#password",ripple:!1}},[t._v(" "+t._s(t.$t("password"))+" ")])],1),a("v-divider"),a("v-card",{staticClass:"content-tabs-card pa-5 mb-0 mb-md-12",attrs:{flat:"",tile:""}},[a("ValidationObserver",{ref:"form1",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("v-form",{attrs:{model:t.form1,id:"form1","lazy-validation":"",autocomplete:"off",method:"post","accept-charset":"UTF-8",enctype:"multipart/form-data"},on:{submit:function(e){return e.preventDefault(),t.submitForm("form1")}}},[a("v-card-text",[a("v-alert",{staticClass:"mb-8",attrs:{value:t.form1.has_error&&!t.form1.success,type:"error"}},["registration_validation_error"===t.form1.error?a("span",[t._v(t._s(t.$t("server_error")))]):"demo"===t.form1.error?a("span",[t._v("This is a demo user. You can't update or delete anything this account. If you want to test all user features, sign up with a new account.")]):a("span",[t._v(t._s(t.$t("correct_errors")))])]),a("v-alert",{staticClass:"mb-4",attrs:{value:t.form1.success,type:"success"}},[t._v(" "+t._s(t.$t("update_success"))+" ")]),a("v-tabs-items",{attrs:{touchless:!1},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1,value:"general"}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"9",md:"6"}},[a("v-row",[a("v-col",{staticClass:"pt-0 pb-8",attrs:{cols:"12",sm:"6"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.hover;return[a("v-avatar",{attrs:{size:"150"}},[a("v-img",{attrs:{src:t.form1.avatar_media_url}},[a("v-fade-transition",[r?a("v-overlay",{attrs:{absolute:""}},[a("v-btn-toggle",{attrs:{rounded:""}},[a("v-btn",{attrs:{"x-small":"",color:"primary",rounded:""},on:{click:function(e){return t.pickFile("avatar")}}},[a("v-icon",{staticClass:"mr-1",attrs:{size:"14"}},[t._v("mdi-upload")]),t._v(" "+t._s(t.$t("upload")))],1),t.showDeleteAvatar?a("v-btn",{attrs:{"x-small":"",color:"red",rounded:""},on:{click:function(e){t.form1.avatar_media_url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9JREFUeNpiuHbtGkCAAQAFCAKDZcGh3gAAAABJRU5ErkJggg==",t.form1.avatar_media_changed=!0,t.showDeleteAvatar=!1}}},[a("v-icon",{attrs:{size:"14"}},[t._v("mdi-close")])],1):t._e()],1)],1):t._e()],1)],1)],1)]}}],null,!0)}),a("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"avatar",name:"avatar",accept:"image/*"},on:{change:t.onFilePicked}})],1)],1),a("v-row",[a("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[a("x-text-field",{ref:"form1.first_name",attrs:{id:"form1.first_name",label:t.$t("first_name"),name:t.$t("first_name"),rules:"required|min:1|max:32",dense:""},model:{value:t.form1.first_name,callback:function(e){t.$set(t.form1,"first_name",e)},expression:"form1.first_name"}})],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[a("x-text-field",{ref:"form1.last_name",attrs:{id:"form1.last_name",label:t.$t("last_name"),name:t.$t("last_name"),rules:"required|min:1|max:32",dense:""},model:{value:t.form1.last_name,callback:function(e){t.$set(t.form1,"last_name",e)},expression:"form1.last_name"}})],1)],1),a("x-text-field",{ref:"form1.email",attrs:{type:"email",id:"form1.email",label:t.$t("email"),rules:"required|max:64|email",dense:""},model:{value:t.form1.email,callback:function(e){t.$set(t.form1,"email",e)},expression:"form1.email"}})],1)],1)],1)],1),a("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1,value:"localization"}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"9",md:"6"}},[a("x-autocomplete",{attrs:{items:t.locales,"item-value":"0","item-text":"1",label:t.$t("locale"),name:t.$t("locale"),rules:"required",hint:t.$t("locale_hint"),"persistent-hint":!0,dense:""},model:{value:t.form1.locale,callback:function(e){t.$set(t.form1,"locale",e)},expression:"form1.locale"}}),a("x-autocomplete",{attrs:{items:t.timezones,"item-value":"0","item-text":"1",label:t.$t("timezone"),name:t.$t("timezone"),rules:"required",dense:""},model:{value:t.form1.timezone,callback:function(e){t.$set(t.form1,"timezone",e)},expression:"form1.timezone"}})],1)],1)],1)],1),a("v-tab-item",{attrs:{transition:!1,"reverse-transition":!1,value:"password"}},[a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",sm:"9",md:"6"}},[a("x-password",{ref:"form1.new_password",attrs:{id:"form1.new_password",label:t.$t("change_password"),name:t.$t("password"),rules:"min:8|max:24",hint:t.$t("leave_empty_for_no_change"),"persistent-hint":!0,dense:""},model:{value:t.form1.new_password,callback:function(e){t.$set(t.form1,"new_password",e)},expression:"form1.new_password"}})],1)],1)],1)],1)],1),a("v-container",{staticClass:"pa-0"},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"8"}},[a("x-password",{ref:"form1.current_password",attrs:{id:"form1.current_password",label:t.$t("current_password"),name:t.$t("current_password"),rules:"required|min:8|max:24",hint:t.$t("current_password_info"),"persistent-hint":"",dense:""},model:{value:t.form1.current_password,callback:function(e){t.$set(t.form1,"current_password",e)},expression:"form1.current_password"}})],1)],1)],1)],1),a("v-card-actions",{staticClass:"mx-2"},[a("v-btn",{staticClass:"no-caps mb-2",staticStyle:{"min-width":"200px"},attrs:{color:"ctaBg ctaFg--text",tile:"",depressed:"","x-large":"",loading:t.form1.loading,disabled:t.form1.loading||r,type:"submit"}},[t._v(t._s(t.$t("update"))+" "),a("v-icon",{attrs:{right:""}},[t._v("mdi-arrow-right")])],1)],1)],1)]}}])})],1)],1)],1)],1)},s=[],o=a("a34a"),i=a.n(o);function n(t,e,a,r,s,o,i){try{var n=t[o](i),l=n.value}catch(c){return void a(c)}n.done?e(l):Promise.resolve(l).then(r,s)}function l(t){return function(){var e=this,a=arguments;return new Promise((function(r,s){var o=t.apply(e,a);function i(t){n(o,r,s,i,l,"next",t)}function l(t){n(o,r,s,i,l,"throw",t)}i(void 0)}))}}var c={data:function(){return{tab:"general",activeFilePickerId:null,showDeleteAvatar:!1,showDeleteCover:!1,locales:[],timezones:[],formDirty:!1,form1:{loading:!1,first_name:this.$auth.user().first_name,last_name:this.$auth.user().last_name,email:this.$auth.user().email,avatar_media_url:this.$auth.user().avatar,avatar_media_changed:!1,locale:this.$auth.user().locale,timezone:this.$auth.user().timezone,new_password:null,current_password:null,has_error:!1,error:null,success:!1}}},mounted:function(){var t=this;this.axios.get("/localization/locales",{params:{locale:this.$i18n.locale}}).then((function(e){t.locales=t.$_.toPairs(e.data)})),this.axios.get("/localization/timezones",{params:{locale:this.$i18n.locale}}).then((function(e){t.timezones=t.$_.toPairs(e.data)}))},created:function(){this.showDeleteAvatar=!this.$_.startsWith(this.form1.avatar_media_url,"data:image/png;base64")},watch:{form1:{handler:function(t,e){this.formDirty||(this.$refs["form1.current_password"].validate(),this.formDirty=!0)},deep:!0}},methods:{submitForm:function(t){var e=this;return l(i.a.mark((function a(){return i.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.$refs[t].reset(),e[t].success=!1,e[t].has_error=!1,e[t].loading=!0,e.updateProfile(t);case 5:case"end":return a.stop()}}),a)})))()},updateProfile:function(t){var e=this,a=this[t],r={headers:{"content-type":"multipart/form-data"}},s=Object.assign({},this.form1);s.avatar_media_url=null,s.language=this.$i18n.locale;var o=new FormData(document.getElementById("form1"));for(var i in s){var n=null===s[i]?"":s[i];o.append(i,n)}this.axios.post("/auth/profile",o,r).then((function(r){"success"===r.data.status&&(a.success=!0,a.new_password=null,a.current_password=null,e.$nextTick((function(){return e.$refs[t].reset()})),e.$auth.user(r.data.user))})).catch((function(r){if(a.has_error=!0,"error"===r.response.data.status){"undefined"!==typeof r.response.data.error&&(a.error=r.response.data.error),e.errorMsg=r.response.data.error;var s=r.response.data.errors||[];for(var o in s)e.$refs[t+"."+o].applyResult({errors:s[o],valid:!1,failedRules:{}})}})).finally((function(){window.scrollTo(0,0),a.loading=!1}))},pickFile:function(t){this.activeFilePickerId=t,document.getElementById(t).click()},onFilePicked:function(t){var e=this,a=t.target.files;if(void 0!==a[0]){if(a[0].name.lastIndexOf(".")<=0)return;var r=new FileReader;r.readAsDataURL(a[0]),r.addEventListener("load",(function(){switch(e.form1[e.activeFilePickerId+"_media_url"]=r.result,e.form1[e.activeFilePickerId+"_media_file"]=a[0],e.form1[e.activeFilePickerId+"_media_changed"]=!0,e.activeFilePickerId){case"avatar":e.showDeleteAvatar=!0;break}}))}else this.form1[this.activeFilePickerId+"_media_file"]="",this.form1[this.activeFilePickerId+"_media_url"]="",this.form1[this.activeFilePickerId+"_media_changed"]=!0}},computed:{app:function(){return this.$store.getters.app}}},d=c,u=a("2877"),m=a("6544"),f=a.n(m),p=a("0798"),v=a("8212"),h=a("8336"),_=a("a609"),b=a("b0af"),g=a("99d9"),w=a("62ad"),$=a("a523"),y=a("ce7e"),x=a("0789"),C=a("4bd4"),A=a("ce87"),k=a("132d"),B=a("adda"),P=a("a797"),O=a("0fd9"),F=a("71a3"),z=a("c671"),I=a("fe57"),V=a("aac8"),D=Object(u["a"])(d,r,s,!1,null,null,null);e["default"]=D.exports;f()(D,{VAlert:p["a"],VAvatar:v["a"],VBtn:h["a"],VBtnToggle:_["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCol:w["a"],VContainer:$["a"],VDivider:y["a"],VFadeTransition:x["c"],VForm:C["a"],VHover:A["a"],VIcon:k["a"],VImg:B["a"],VOverlay:P["a"],VRow:O["a"],VTab:F["a"],VTabItem:z["a"],VTabs:I["a"],VTabsItems:V["a"]})},a34a:function(t,e,a){t.exports=a("96cf")}}]);
//# sourceMappingURL=x4d21.53afdb57.js.map