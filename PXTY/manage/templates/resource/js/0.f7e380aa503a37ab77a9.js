webpackJsonp([0],{"3fi7":function(t,a){},nq5D:function(t,a,i){"use strict";var s={name:"foot",data:function(){return{about:["公司介绍","愿景与使命","管理团队","联系我们"],map:["产品与解决方案","新闻中心","技术支持","合作伙伴"],links:[{name:"华为",url:"http://www.huawei.com/cn/?utm_source=bdpz&utm_campaign=regular&utm_medium=cpc"},{name:"新华三",url:"http://www.h3c.com/"},{name:"安天",url:"http://www.antiy.cn/"},{name:"思科",url:"https://www.cisco.com/c/zh_cn/index.html"}],QR:!1,company:{name:"深圳市普信天宇电子科技有限公司",initialTime:2009}}},methods:{see:function(){this.$root.adapt||(this.QR=!this.QR,this.QR&&this.$root.eventHub.$emit("prompt"))}},computed:{renderDuration:function(){var t=new Date;return this.company.initialTime+"-"+t.getFullYear()}},mounted:function(){var t=this;this.$root.eventHub.$on("cancelPrompt",function(){t.QR=!1})}},e={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"foot"}},[i("div",{staticClass:"foot-content"},[i("div",{staticClass:"foot-column left"},[i("p",[t._v("关于普信天宇")]),t._v(" "),i("div",{staticClass:"foot-item-wrapper"},t._l(t.about,function(a,s){return i("div",{key:s,staticClass:"foot-item"},[i("p",{staticClass:"pointer left"},[t._v(t._s(a))])])}))]),t._v(" "),i("div",{staticClass:"foot-column left"},[i("p",[t._v("网站地图")]),t._v(" "),i("div",{staticClass:"foot-item-wrapper"},t._l(t.map,function(a,s){return i("div",{key:s,staticClass:"foot-item"},[i("p",{staticClass:"pointer left"},[t._v(t._s(a))])])}))]),t._v(" "),i("div",{staticClass:"foot-column left"},[i("p",[t._v("快速链接")]),t._v(" "),i("div",{staticClass:"foot-item-wrapper"},t._l(t.links,function(a,s){return i("div",{key:s,staticClass:"foot-item"},[i("a",{staticClass:"pointer left",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.name))])])}))]),t._v(" "),i("div",{staticClass:"we-chat"},[i("p",{on:{click:t.see}},[t._v("官方微信")]),t._v(" "),i("transition",{attrs:{name:"icon"}},[this.$root.adapt||t.QR?i("div",{staticClass:"we-chat-icon"}):t._e()]),t._v(" "),this.$root.adapt?t._e():i("div",[i("p",[t._v("联系我们")]),t._v(" "),i("p",[t._v("法律声明")])])],1),t._v(" "),i("div",{staticClass:"foot-bar"},[i("p",{staticClass:"left pointer"},[t._v("法律声明")]),t._v(" "),i("p",{staticClass:"left"},[t._v("|")]),t._v(" "),i("p",{staticClass:"left pointer"},[t._v("联系我们")]),t._v(" "),i("p",{staticClass:"right"},[t._v("版权所有 © "+t._s(t.renderDuration)+" "+t._s(t.company.name)+". 保留一切权利.")])])])])},staticRenderFns:[]};var n=i("VU/8")(s,e,!1,function(t){i("3fi7")},"data-v-94ed6f84",null);a.a=n.exports}});
//# sourceMappingURL=0.f7e380aa503a37ab77a9.js.map