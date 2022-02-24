(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{524:function(e,t,o){var content=o(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("855d4ebc",content,!0,{sourceMap:!1})},525:function(e,t,o){"use strict";o.r(t);var n=o(2),l=o(529),r=Object(n.d)({components:{},props:{dialog:{type:Boolean,required:!0}},emits:["update:dialog","apply"],setup:function(e,t){var o=t.emit,l=Object(n.j)({multiplier:1});return{dialog_:Object(n.a)({get:function(){return e.dialog},set:function(e){o("update:dialog",e)}}),config:l}},methods:{onClickApply:function(){this.dialog_=!1,this.$emit("apply",Object(l.a)(this.config))}}}),c=(o(526),o(80)),d=o(88),f=o.n(d),v=o(522),m=o(228),h=o(181),_=o(521),x=o(589),C=o(504),y=o(518),k=o(588),O=o(69),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.dialog_,callback:function(t){e.dialog_=t},expression:"dialog_"}},[o("v-card",[o("v-toolbar",{attrs:{flat:"",color:"primary headline",dark:""}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-cog")]),e._v("\n        Chart Config\n        "),o("v-spacer")],1),e._v(" "),o("v-card-text",{staticClass:"pa-3 text-center"},[o("v-form",{on:{submit:function(t){return t.preventDefault(),e.onClickApply.apply(null,arguments)}}},[o("v-text-field",{attrs:{type:"number",label:"Multiplier",step:"0.1"},model:{value:e.config.multiplier,callback:function(t){e.$set(e.config,"multiplier",e._n(t))},expression:"config.multiplier"}})],1)],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog_=!1}}},[e._v("\n          CLOSE\n        ")]),e._v(" "),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.onClickApply}},[e._v("\n          APPLY\n        ")])],1)],1)],1)],1)}),[],!1,null,"06d005d2",null);t.default=component.exports;f()(component,{VBtn:v.a,VCard:m.a,VCardActions:h.a,VCardText:h.b,VDialog:_.a,VForm:x.a,VIcon:C.a,VSpacer:y.a,VTextField:k.a,VToolbar:O.a})},526:function(e,t,o){"use strict";o(524)},527:function(e,t,o){var n=o(30)(!1);n.push([e.i,".desc-line[data-v-06d005d2]{display:flex;align-items:center;justify-content:center}.desc-line a[data-v-06d005d2]{margin-left:10px}",""]),e.exports=n},536:function(e,t,o){"use strict";o.r(t);o(6),o(42),o(45),o(35),o(73),o(18);var n=o(2),l=o(87),r=o.n(l),c=o(540),d=o.n(c),f=o(525),v=o(111),m=o(225),h=r.a.getLogger("ChartCard"),_=["#fd7f6f","#7eb0d5","#b2e061","#bd7ebe","#ffb55a","#ffee65","#beb9db","#fdcce5","#8bd3c7"],x=["10s","30s","1m","10m","30m","1h"],C=Object(n.d)({components:{VueApexCharts:function(){return o.e(10).then(o.t.bind(null,590,7))},ChartConfigDialog:f.default},setup:function(){var e=Object(n.j)({multiplier:1}),t=Object(n.k)(!1),o=Object(n.k)("10m"),l=Object(n.k)(!1),r=Object(n.k)("DCV"),c=Object(n.k)(!0),f=Object(n.a)((function(){var e;return null===(e=v.bdmDevice.reported)||void 0===e?void 0:e.funcName}));Object(n.p)(f,(function(e){c.value&&e&&(r.value=e)}));var h=[],C=Object(n.a)((function(){var t,n=r.value,c=Date.now()-d()(o.value),f=[{name:"".concat(n," (").concat(void 0===(null===(t=v.bdmDevice.reported)||void 0===t?void 0:t.readValue)?"-":v.bdmDevice.reported.readValue*e.multiplier,")"),color:_[m.a.indexOf(n)%_.length],data:v.bdmDevice.historiesOf(n).filter((function(e){return e.timestamp>=c})).map((function(t){return{x:t.timestamp,y:t.readValue*e.multiplier}}))}];return Object.assign(f[0],{_isVue:!0}),l.value?h:(h=f,f)})),y=Object(n.k)(null),k={chart:{id:"history",type:"line",zoom:{type:"x",enabled:!0,autoScaleYaxis:!1},toolbar:{show:l.value,autoSelected:"zoom"},animations:{enabled:!1,easing:"linear",dynamicAnimation:{speed:1e3}}},markers:{size:0},legend:{show:!0,showForSingleSeries:!0,floating:!0,position:"top"},yaxis:{},xaxis:{type:"datetime",labels:{datetimeUTC:!1}},noData:{text:"No data"},tooltip:{x:{format:"yyyy-MM-ddTHH:mm:ss.fff"}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}};return Object(n.p)(l,(function(){var e;k.chart.toolbar.show=l.value,null===(e=y.value)||void 0===e||e.updateOptions(k)})),{chartConfig:e,configDialog:t,selectedPeriod:o,updatePaused:l,selectedSeriesName:r,autoSwitchEnabled:c,chartOptions:k,periodOptions:x,series:C,BDM_FUNC_NAMES:m.a,chart:y,bdmDevice:v.bdmDevice}},methods:{onConfigApply:function(e){h.debug("onConfigApply",e),this.chartConfig.multiplier=e.multiplier}}}),y=o(80),k=o(88),O=o.n(k),V=o(522),w=o(228),j=o(181),D=o(515),S=o(504),A=o(591),P=o(518),N=o(593),E=o(69),component=Object(y.a)(C,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{ref:"main",staticClass:"main-card rounded-card",attrs:{tile:"",flat:e.$vuetify.breakpoint.xs}},[o("v-toolbar",{staticClass:"headline",attrs:{dense:"",flat:"",color:"primary lighten-1",dark:""}},[o("v-icon",{attrs:{left:""}},[e._v("mdi-chart-timeline-variant")]),e._v(" "),o("v-spacer"),e._v(" "),o("v-col",{attrs:{cols:"2"}},[o("v-select",{attrs:{items:e.periodOptions,"hide-details":"",flat:"",dense:""},model:{value:e.selectedPeriod,callback:function(t){e.selectedPeriod=t},expression:"selectedPeriod"}})],1),e._v(" "),o("v-switch",{staticClass:"mr-3",attrs:{label:"Pause",color:"accent","hide-details":"",flat:"",dense:""},model:{value:e.updatePaused,callback:function(t){e.updatePaused=t},expression:"updatePaused"}}),e._v(" "),o("v-col",{attrs:{cols:"2"}},[o("v-select",{attrs:{items:e.BDM_FUNC_NAMES,"hide-details":"",flat:"",dense:""},model:{value:e.selectedSeriesName,callback:function(t){e.selectedSeriesName=t},expression:"selectedSeriesName"}})],1),e._v(" "),o("v-switch",{staticClass:"mr-3",attrs:{label:"Auto switch",color:"accent","hide-details":"",flat:"",dense:""},model:{value:e.autoSwitchEnabled,callback:function(t){e.autoSwitchEnabled=t},expression:"autoSwitchEnabled"}}),e._v(" "),o("v-btn",{attrs:{icon:"",color:"red"},on:{click:e.bdmDevice.resetHistory}},[o("v-icon",[e._v("mdi-delete")])],1),e._v(" "),o("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.configDialog=!0}}},[o("v-icon",[e._v("mdi-cog")])],1)],1),e._v(" "),o("v-card-text",[o("VueApexCharts",{ref:"chart",attrs:{options:e.chartOptions,series:e.series}})],1),e._v(" "),o("ChartConfigDialog",{attrs:{dialog:e.configDialog},on:{"update:dialog":function(t){e.configDialog=t},apply:e.onConfigApply}})],1)}),[],!1,null,"7e3079b5",null);t.default=component.exports;O()(component,{ChartConfigDialog:o(525).default}),O()(component,{VBtn:V.a,VCard:w.a,VCardText:j.b,VCol:D.a,VIcon:S.a,VSelect:A.a,VSpacer:P.a,VSwitch:N.a,VToolbar:E.a})}}]);