(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{524:function(t,e,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("741082c4",content,!0,{sourceMap:!1})},525:function(t,e,n){"use strict";n.r(e);var o=n(2),l=n(529),c=Object(o.d)({components:{},props:{dialog:{type:Boolean,required:!0}},emits:["update:dialog","apply"],setup:function(t,e){var n=e.emit,l=Object(o.j)({multiplier:1});return{dialog_:Object(o.a)({get:function(){return t.dialog},set:function(t){n("update:dialog",t)}}),config:l}},methods:{onClickApply:function(){this.dialog_=!1,this.$emit("apply",Object(l.a)(this.config))}}}),r=(n(526),n(80)),d=n(88),f=n.n(d),v=n(522),m=n(228),_=n(181),x=n(521),k=n(589),h=n(504),y=n(518),V=n(588),C=n(68),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.dialog_,callback:function(e){t.dialog_=e},expression:"dialog_"}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary headline",dark:""}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-cog")]),t._v("\n        Chart Config\n        "),n("v-spacer")],1),t._v(" "),n("v-card-text",{staticClass:"pa-3 text-center"},[n("v-form",[n("v-text-field",{attrs:{type:"number",label:"Multiplier",step:"0.1"},model:{value:t.config.multiplier,callback:function(e){t.$set(t.config,"multiplier",t._n(e))},expression:"config.multiplier"}})],1)],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog_=!1}}},[t._v("\n          CLOSE\n        ")]),t._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.onClickApply}},[t._v("\n          APPLY\n        ")])],1)],1)],1)],1)}),[],!1,null,"67b0c1ae",null);e.default=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardActions:_.a,VCardText:_.b,VDialog:x.a,VForm:k.a,VIcon:h.a,VSpacer:y.a,VTextField:V.a,VToolbar:C.a})},526:function(t,e,n){"use strict";n(524)},527:function(t,e,n){var o=n(30)(!1);o.push([t.i,".desc-line[data-v-67b0c1ae]{display:flex;align-items:center;justify-content:center}.desc-line a[data-v-67b0c1ae]{margin-left:10px}",""]),t.exports=o}}]);