webpackJsonp([11],{jyJz:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7t+N"),n=s.n(i),a=s("Wohh"),u={name:"user",data:function(){return{funcList:["所有应用","报销","审批","新闻管理","产品管理","信息管理","权限管理","退出"],showList:[],funcIndex:-1,funcStatus:!1,uploadStatus:!1,carouselList:["华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者"],newsList:["华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者"]}},methods:{hideList:function(){this.$root.eventHub.$emit("hide")},choose:function(t){switch(this.funcIndex=t,t){case 1:this.$router.push({path:"/user/reimbursement"});break;case 2:this.$router.push({path:"/user/accounting"});break;case 3:this.$router.push({path:"/user/news"});break;case 4:this.$router.push({path:"/user/products"});break;case 5:this.$router.push({path:"/user/setting"});break;case 6:this.$router.push({path:"/user/authority"});break;case 7:this.$root.eventHub.$emit("clear"),this.$router.push({path:"/home"})}},back:function(){this.funcIndex=-1,"NewsUpload"===this.$route.name?(this.$root.eventHub.$emit("cancelUpload"),this.$router.push({path:"/user/news"})):"ReApplication"===this.$route.name||"ReForm"===this.$route.name?(this.$root.eventHub.$emit("cancelReimbursement"),this.$router.push({path:"/user/reimbursement"})):this.$router.push({path:"/user"})},manageRoute:function(t){switch(t){case"user":this.funcStatus=!1,this.showList=this.funcList;break;case"Reimbursement":this.funcStatus=!0,this.showList=new Array("报销");break;case"ReApplication":this.funcStatus=!0,this.$root.eventHub.$emit("Reimbursement"),this.showList=new Array("申请");break;case"ReForm":this.funcStatus=!0,this.$root.eventHub.$emit("Reimbursement"),this.showList=new Array("汇总");break;case"Accounting":this.funcStatus=!0,this.showList=new Array("审批");break;case"NewsManage":this.funcStatus=!0,this.showList=new Array("新闻管理");break;case"NewsUpload":this.funcStatus=!0,this.$root.eventHub.$emit("Upload"),this.showList=new Array("新闻上传");break;case"ProductsManage":this.funcStatus=!0,this.showList=new Array("产品管理");break;case"Setting":this.funcStatus=!0,this.showList=new Array("信息管理");break;case"Authority":this.funcStatus=!0,this.showList=new Array("权限管理")}}},watch:{$route:function(t,e){this.manageRoute(t.name),"NewsManage"===t.name&&"NewsUpload"===e.name?this.$root.eventHub.$emit("cancelUpload"):"Reimbursement"===t.name&&"ReApplication"===e.name?this.$root.eventHub.$emit("cancelReimbursement"):"Reimbursement"===t.name&&"ReForm"===e.name&&this.$root.eventHub.$emit("cancelReimbursement")}},mounted:function(){if(n()("::-webkit-scrollbar").css("display","none"),Object(a.a)(2,"")?this.showList=this.funcList:this.$router.push({path:"/sign"}),!this.$root.adapt){var t=this.$root.carousel,e=(t-(n()("#main p:first-of-type").height()+n()("#main p:last-of-type").height()))/2;n()("#main").css("height",t),n()("#main p:first-of-type").css("margin-top",e),n()(".nav-bar").css("position","absolute")}this.manageRoute(this.$route.name)},destroyed:function(){this.$root.adapt||n()(".nav-bar").css("position","fixed")}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"user"},on:{touchstart:t.hideList}},[t._m(0),t._v(" "),s("div",{staticClass:"main-content"},[s("div",{staticClass:"main-function"},[s("transition-group",{attrs:{name:"funcList"}},t._l(t.showList,function(e,i){return s("div",{key:i,staticClass:"func-item left",class:{head:0===i},on:{click:function(e){t.choose(i)}}},[s("p",{staticClass:"left"},[t._v(t._s(e))]),t._v(" "),t.funcStatus&&0===i?s("div",{staticClass:"back pointer left",on:{click:t.back}}):t._e()])}))],1),t._v(" "),s("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("p",[this._v("个人中心")]),this._v(" "),e("p",[this._v("公司事务管理平台")])])}]};var o=s("VU/8")(u,r,!1,function(t){s("pvr5")},"data-v-4e0dfe20",null);e.default=o.exports},pvr5:function(t,e){}});
//# sourceMappingURL=11.c291ae917416a23d207f.js.map