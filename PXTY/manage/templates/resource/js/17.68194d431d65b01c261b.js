webpackJsonp([17],{ZN33:function(t,i){},mBSZ:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e("7t+N"),a=e.n(s),o={name:"products",data:function(){return{mode:0,detailStatus:!1,detailList:[],modeList:["产品","解决方案"],productList:["产品","eLTE行业无线专网","eLTE宽带集群","GSM-R","SDN控制器","安全","传送网","存储","服务器","管理系统","交换机","接入网","路由器","企业云通信","视频监控","数据中心能源","无线局域网","云计算&大数据"],industryList:["行业","ISP","电力","公共安全","智慧城市","交通","教育","金融","零售","石油和天然气","医疗","影视传媒","政务","制造"],solutionList:["解决方案","业务云化","云数据中心","企业网络","企业无线","企业协同","视频监控与应急调度","企业物联网","网络安全"]}},components:{foot:e("nq5D").a},methods:{modeSwitch:function(t){this.mode=t,this.detailStatus=!1},renderPage:function(t){return t%2==0?"background-color: white;":"background-color: #F0F2F5;"},hideList:function(){this.$root.eventHub.$emit("hide")},seeDetail:function(t,i){if(0!==t){this.detailList=[],this.detailList.push({title:i});for(var e=0;e<10;e++)this.detailList.push({title:e});this.detailStatus=!0}},back:function(){this.detailStatus=!1},search:function(){""!==a()("#search").val()&&alert(1)},seeProduct:function(t,i){0!==t&&(this.$root.detailStatus=this.detailStatus,this.$root.mode=this.mode,this.$root.detailTitle=this.detailList[0].title,this.$root.setRecord(this.$route.name,a()("#app").scrollTop()),this.$router.push({path:"/product",query:{productId:i}}))}},created:function(){if(1===this.$root.visitMode&&(this.detailStatus=this.$root.detailStatus,this.mode=this.$root.mode,this.detailStatus)){this.detailList=[],this.detailList.push({title:this.$root.detailTitle});for(var t=0;t<10;t++)this.detailList.push({title:t})}},mounted:function(){if(1===this.$root.visitMode&&(this.$root.visitMode=0,a()("#app").scrollTop(this.$root.getRecord(this.$route.name))),!this.$root.adapt){var t=this.$root.carousel,i=(t-(a()("#main .title").height()+a()("#main .search-bar").height()+24))/2;a()("#main").css("height",t),a()("#main>p:first-of-type").css("margin-top",i),a()("#main .subtitle-bar").css("margin-top",i+18-a()("#main .subtitle-bar").height())}}},n={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{attrs:{id:"products"},on:{touchstart:t.hideList}},[e("div",{attrs:{id:"main"}},[e("p",{staticClass:"title"},[t._v("产品 & 解决方案")]),t._v(" "),e("div",{staticClass:"search-bar"},[e("input",{staticClass:"left",attrs:{id:"search",type:"text",placeholder:"输入产品或解决方案的关键字"}}),t._v(" "),e("div",{staticClass:"search-icon pointer left",on:{click:t.search}})]),t._v(" "),e("div",{staticClass:"subtitle-bar"},[t._l(t.modeList,function(i,s){return e("div",{key:s,staticClass:"subtitle left pointer",class:{active:s===t.mode},on:{click:function(i){t.modeSwitch(s)}}},[e("p",[t._v(t._s(i))])])}),t._v(" "),t._m(0)],2)]),t._v(" "),e("div",{staticClass:"main-content"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.detailStatus&&0===t.mode,expression:"!detailStatus && mode === 0"}],staticClass:"main-content-page"},t._l(t.productList,function(i,s){return e("div",{key:s,staticClass:"main-content-item left",class:{head:0===s},on:{click:function(e){t.seeDetail(s,i)}}},[e("p",[t._v(t._s(i))])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.detailStatus&&1===t.mode,expression:"!detailStatus && mode === 1"}],staticClass:"main-content-page"},[t._l(t.industryList,function(i,s){return e("div",{key:s,staticClass:"main-content-item left",class:{head:0===s},on:{click:function(e){t.seeDetail(s,i)}}},[e("p",[t._v(t._s(i))])])}),t._v(" "),t._l(t.solutionList,function(i,s){return e("div",{key:t.productList.length+s,staticClass:"main-content-item left",class:{head:0===s},on:{click:function(e){t.seeDetail(s,i)}}},[e("p",[t._v(t._s(i))])])})],2),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailStatus,expression:"detailStatus"}],staticClass:"main-content-page"},t._l(t.detailList,function(i,s){return e("div",{key:s,staticClass:"main-content-item left",class:{head:0===s},on:{click:function(e){t.seeProduct(s,i.title)}}},[e("p",{staticClass:"left"},[t._v(t._s(i.title))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0===s,expression:"index === 0"}],staticClass:"back pointer left",on:{click:t.back}})])})),t._v(" "),e("foot")],1)])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"subtitle right pointer"},[i("p",[this._v("筛选")])])}]};var c=e("VU/8")(o,n,!1,function(t){e("ZN33")},"data-v-273c4d48",null);i.default=c.exports}});
//# sourceMappingURL=17.68194d431d65b01c261b.js.map