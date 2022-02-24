(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4,5],{524:function(e,t,n){var content=n(527);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("855d4ebc",content,!0,{sourceMap:!1})},525:function(e,t,n){"use strict";n.r(t);var l=n(2),o=n(529),r=Object(l.d)({components:{},props:{dialog:{type:Boolean,required:!0}},emits:["update:dialog","apply"],setup:function(e,t){var n=t.emit,o=Object(l.j)({multiplier:1});return{dialog_:Object(l.a)({get:function(){return e.dialog},set:function(e){n("update:dialog",e)}}),config:o}},methods:{onClickApply:function(){this.dialog_=!1,this.$emit("apply",Object(o.a)(this.config))}}}),c=(n(526),n(80)),d=n(88),m=n.n(d),v=n(522),f=n(228),h=n(181),C=n(521),_=n(589),x=n(504),y=n(518),k=n(588),w=n(68),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:e.dialog_,callback:function(t){e.dialog_=t},expression:"dialog_"}},[n("v-card",[n("v-toolbar",{attrs:{flat:"",color:"primary headline",dark:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-cog")]),e._v("\n        Chart Config\n        "),n("v-spacer")],1),e._v(" "),n("v-card-text",{staticClass:"pa-3 text-center"},[n("v-form",{on:{submit:function(t){return t.preventDefault(),e.onClickApply.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"number",label:"Multiplier",step:"0.1"},model:{value:e.config.multiplier,callback:function(t){e.$set(e.config,"multiplier",e._n(t))},expression:"config.multiplier"}})],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog_=!1}}},[e._v("\n          CLOSE\n        ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.onClickApply}},[e._v("\n          APPLY\n        ")])],1)],1)],1)],1)}),[],!1,null,"06d005d2",null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardText:h.b,VDialog:C.a,VForm:_.a,VIcon:x.a,VSpacer:y.a,VTextField:k.a,VToolbar:w.a})},526:function(e,t,n){"use strict";n(524)},527:function(e,t,n){var l=n(30)(!1);l.push([e.i,".desc-line[data-v-06d005d2]{display:flex;align-items:center;justify-content:center}.desc-line a[data-v-06d005d2]{margin-left:10px}",""]),e.exports=l},536:function(e,t,n){"use strict";n.r(t);n(6),n(42),n(45),n(35),n(73),n(18);var l=n(2),o=n(87),r=n.n(o),c=n(540),d=n.n(c),m=n(525),v=n(111),f=n(225),h=r.a.getLogger("ChartCard"),C=["#fd7f6f","#7eb0d5","#b2e061","#bd7ebe","#ffb55a","#ffee65","#beb9db","#fdcce5","#8bd3c7"],_=["10s","30s","1m","10m","30m","1h"],x=Object(l.d)({components:{VueApexCharts:function(){return n.e(10).then(n.t.bind(null,590,7))},ChartConfigDialog:m.default},setup:function(){var e=Object(l.j)({multiplier:1}),t=Object(l.k)(!1),n=Object(l.k)("10m"),o=Object(l.k)(!1),r=Object(l.k)("DCV"),c=Object(l.k)(!0),m=Object(l.a)((function(){var e;return null===(e=v.bdmDevice.reported)||void 0===e?void 0:e.funcName}));Object(l.p)(m,(function(e){c.value&&e&&(r.value=e)}));var h=[],x=Object(l.a)((function(){var t,l=r.value,c=Date.now()-d()(n.value),m=[{name:"".concat(l," (").concat(void 0===(null===(t=v.bdmDevice.reported)||void 0===t?void 0:t.readValue)?"-":v.bdmDevice.reported.readValue*e.multiplier,")"),color:C[f.a.indexOf(l)%C.length],data:v.bdmDevice.historiesOf(l).filter((function(e){return e.timestamp>=c})).map((function(t){return{x:t.timestamp,y:t.readValue*e.multiplier}}))}];return o.value?h:(h=m,m)})),y=Object(l.k)(null),k={chart:{id:"history",type:"line",zoom:{type:"x",enabled:!0,autoScaleYaxis:!1},toolbar:{show:o.value,autoSelected:"zoom"},animations:{enabled:!1,easing:"linear",dynamicAnimation:{speed:1e3}}},markers:{size:1},legend:{show:!0,showForSingleSeries:!0,floating:!0,position:"top"},yaxis:{},xaxis:{type:"datetime",labels:{datetimeUTC:!1}},noData:{text:"No data"},tooltip:{x:{format:"yyyy-MM-ddTHH:mm:ss.fff"}},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}}};return Object(l.p)(o,(function(){var e;k.chart.toolbar.show=o.value,null===(e=y.value)||void 0===e||e.updateOptions(k)})),{chartConfig:e,configDialog:t,selectedPeriod:n,updatePaused:o,selectedSeriesName:r,autoSwitchEnabled:c,chartOptions:k,periodOptions:_,series:x,BDM_FUNC_NAMES:f.a,chart:y,bdmDevice:v.bdmDevice}},methods:{onConfigApply:function(e){h.debug("onConfigApply",e),this.chartConfig.multiplier=e.multiplier}}}),y=n(80),k=n(88),w=n.n(k),O=n(522),V=n(228),j=n(181),D=n(515),S=n(504),E=n(591),A=n(518),B=n(593),M=n(68),component=Object(y.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{ref:"main",staticClass:"main-card rounded-card",attrs:{tile:"",flat:e.$vuetify.breakpoint.xs}},[n("v-toolbar",{staticClass:"headline",attrs:{dense:"",flat:"",color:"primary lighten-1",dark:""}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-chart-timeline-variant")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{items:e.periodOptions,"hide-details":"",flat:"",dense:""},model:{value:e.selectedPeriod,callback:function(t){e.selectedPeriod=t},expression:"selectedPeriod"}})],1),e._v(" "),n("v-switch",{staticClass:"mr-3",attrs:{label:"Pause",color:"accent","hide-details":"",flat:"",dense:""},model:{value:e.updatePaused,callback:function(t){e.updatePaused=t},expression:"updatePaused"}}),e._v(" "),n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{items:e.BDM_FUNC_NAMES,"hide-details":"",flat:"",dense:""},model:{value:e.selectedSeriesName,callback:function(t){e.selectedSeriesName=t},expression:"selectedSeriesName"}})],1),e._v(" "),n("v-switch",{staticClass:"mr-3",attrs:{label:"Auto switch",color:"accent","hide-details":"",flat:"",dense:""},model:{value:e.autoSwitchEnabled,callback:function(t){e.autoSwitchEnabled=t},expression:"autoSwitchEnabled"}}),e._v(" "),n("v-btn",{attrs:{icon:"",color:"red"},on:{click:e.bdmDevice.resetHistory}},[n("v-icon",[e._v("mdi-delete")])],1),e._v(" "),n("v-btn",{attrs:{icon:"",color:"white"},on:{click:function(t){e.configDialog=!0}}},[n("v-icon",[e._v("mdi-cog")])],1)],1),e._v(" "),n("v-card-text",[n("VueApexCharts",{ref:"chart",attrs:{options:e.chartOptions,series:e.series}})],1),e._v(" "),n("ChartConfigDialog",{attrs:{dialog:e.configDialog},on:{"update:dialog":function(t){e.configDialog=t},apply:e.onConfigApply}})],1)}),[],!1,null,"31e846bd",null);t.default=component.exports;w()(component,{ChartConfigDialog:n(525).default}),w()(component,{VBtn:O.a,VCard:V.a,VCardText:j.b,VCol:D.a,VIcon:S.a,VSelect:E.a,VSpacer:A.a,VSwitch:B.a,VToolbar:M.a})},537:function(e,t,n){"use strict";n.r(t);var l=n(2),o=n(111),r=Object(l.d)({components:{},setup:function(){var e=Object(l.a)((function(){var e;return(null===(e=o.bdmDevice.reported)||void 0===e?void 0:e.readingTypes)||{max:!1,min:!1,lowBattery:!1,autoRange:!1,delta:!1,hold:!1}}));return{readingTypes:e,stateButtons:[{cmd:"Auto",label:"Auto",isEnabled:function(){return!e.value.autoRange}},{cmd:"Relative",label:"Delta",isEnabled:function(){return!e.value.delta}},{cmd:"Hold",label:"Hold",isEnabled:function(){return!e.value.hold}},{label:"Max",isEnabled:function(){return!e.value.max}},{label:"Min",isEnabled:function(){return!e.value.min}}],commandButtons:[{cmd:"Select",color:"accent darken-1"},{cmd:"Range",color:"accent darken-1"},{cmd:"Hz/Duty",color:"accent darken-1"},{cmd:"Min/Max",color:"accent darken-1"},{cmd:"Backlight",color:"primary lighten-3"},{cmd:"Bluetooth Off",color:"primary lighten-3"},{cmd:"Normal",color:"primary lighten-3"}],bdmDevice:o.bdmDevice}}}),c=n(80),d=n(88),m=n.n(d),v=n(522),f=n(228),h=n(181),C=n(533),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"rounded-card",attrs:{flat:e.$vuetify.breakpoint.xs,tile:""}},[n("v-card-text",{staticClass:"pb-0"},[e._l(e.stateButtons,(function(t){return[t.cmd?n("v-btn",{key:t.label+t.cmd,staticClass:"ml-1",attrs:{small:"",color:"secondary",depressed:"",outlined:t.isEnabled()},on:{click:function(n){t.cmd&&e.bdmDevice.sendCommand(t.cmd)}}},[e._v(e._s(t.label))]):n("v-chip",{key:t.label,staticClass:"ml-1",attrs:{small:"",color:"secondary",depressed:"",outlined:t.isEnabled()}},[e._v("\n        "+e._s(t.label))])]})),e._v(" "),n("v-chip",{staticClass:"ml-1",attrs:{small:"",color:"secondary",disabled:!e.readingTypes.lowBattery,outlined:!e.readingTypes.lowBattery}},[e._v("Low BAT")])],2),e._v(" "),n("v-card-text",e._l(e.commandButtons,(function(t){return n("v-btn",{key:t.cmd,staticClass:"ml-1",attrs:{small:"",depressed:"",color:t.color},on:{click:function(n){return e.bdmDevice.sendCommand(t.cmd)}}},[e._v("\n      "+e._s(t.cmd)+"\n    ")])})),1)],1)}),[],!1,null,"8a435d6e",null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:f.a,VCardText:h.b,VChip:C.a})},544:function(e,t,n){var content=n(586);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(31).default)("418eeae4",content,!0,{sourceMap:!1})},585:function(e,t,n){"use strict";n(544)},586:function(e,t,n){var l=n(30)(!1);l.push([e.i,".main-row{max-width:1000px;margin:0 auto}.rounded-card{border-radius:5px!important}.main-card{min-width:300px}",""]),e.exports=l},592:function(e,t,n){"use strict";n.r(t);var l=n(2),o=n(536),r=n(537),c=Object(l.d)({components:{ChartCard:o.default,CommandCard:r.default},setup:function(){return{}}}),d=(n(585),n(80)),m=n(88),v=n.n(m),f=n(515),h=n(523),C=n(517),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"main-row"},[n("v-col",{staticClass:"pa-1",attrs:{cols:"12",justify:"center"}},[n("CommandCard")],1),e._v(" "),n("v-col",{staticClass:"pa-1",attrs:{cols:"12",justify:"center"}},[n("ChartCard")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{CommandCard:n(537).default,ChartCard:n(536).default}),v()(component,{VCol:f.a,VContainer:h.a,VRow:C.a})}}]);