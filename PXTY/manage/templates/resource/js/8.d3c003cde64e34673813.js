webpackJsonp([8],{ZFIw:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("7t+N"),n=i.n(e),a={name:"reimbursement",data:function(){return{funcStatus:!0,history:!1,showHistory:!1,historyList:[{description:"打车",date:"2018/01/02",account:20,status:1},{description:"芜湖-安庆",date:"2018/01/02",account:63.5,status:0},{description:"打车",date:"2018/01/02",account:20,status:1},{description:"安庆-池州",date:"2018/01/02",account:17,status:1},{description:"打车",date:"2018/01/02",account:15,status:0},{description:"补贴",date:"2018/01/02",account:210,status:1},{description:"池州-安庆",date:"2018/01/03",account:17,status:0},{description:"打车",date:"2018/01/03",account:30,status:1},{description:"安庆-合肥",date:"2018/01/08",account:138,status:1},{description:"打车",date:"2018/01/09",account:10.2,status:1}]}},methods:{func:function(t){switch(this.funcStatus=!0,t){case 0:this.$router.push({path:"/user/reimbursement/application"});break;case 1:this.$router.push({path:"/user/reimbursement/table"})}},show:function(){if(this.showHistory=!this.showHistory,this.showHistory){var t=this;setTimeout(function(){var s,i=n()("#user").height()-window.innerHeight;i>(s=t.$root.adapt?n()("#main").height()+n()(".main-function").eq(0).height()+2*(n()(".money-item").eq(0).height()+17):n()("#main").height()+3*(n()(".func-item").eq(0).height()+17))&&(i=s),n()("#app").animate({scrollTop:i},300)},17)}},result:function(t){return 0===t?"未通过":"通 过"}},mounted:function(){var t=this;this.funcStatus=!1,this.$root.eventHub.$on("cancelReimbursement",function(){t.funcStatus=!1}),this.$root.eventHub.$on("Reimbursement",function(){t.funcStatus=!0})}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"reimbursement"}},[i("transition",{attrs:{name:"operation"}},[t.funcStatus?t._e():i("div",{staticClass:"func-operation"},[i("div",{staticClass:"money-item pointer",on:{click:function(s){t.func(0)}}},[i("p",{staticClass:"item-name"},[t._v("申请")])]),t._v(" "),i("div",{staticClass:"money-item pointer",on:{click:function(s){t.func(1)}}},[i("p",{staticClass:"item-name"},[t._v("汇总")])]),t._v(" "),i("div",{staticClass:"funcList"},[i("div",{staticClass:"money-item head pointer",on:{click:t.show}},[i("p",{staticClass:"item-name left"},[t._v("历史")]),t._v(" "),t.showHistory?i("div",{staticClass:"back pointer left"}):t._e()]),t._v(" "),i("transition",{attrs:{name:"operation"}},[t.showHistory?i("div",{staticClass:"carousel-wrapper"},t._l(t.historyList,function(s,e){return i("div",{key:e,staticClass:"money-item pointer"},[i("p",{staticClass:"date"},[t._v(t._s(s.date))]),t._v(" "),i("p",{staticClass:"text left"},[t._v(t._s(s.description))]),t._v(" "),i("div",{staticClass:"button right",class:{fail:0===s.status}},[i("p",[t._v(t._s(t.result(s.status)))])]),t._v(" "),i("p",{staticClass:"account right"},[t._v(t._s(s.account)+"元")])])})):t._e()])],1)])]),t._v(" "),t.funcStatus?i("router-view"):t._e()],1)},staticRenderFns:[]};var o=i("VU/8")(a,c,!1,function(t){i("iDEX")},"data-v-66ee359c",null);s.default=o.exports},iDEX:function(t,s){}});
//# sourceMappingURL=8.d3c003cde64e34673813.js.map