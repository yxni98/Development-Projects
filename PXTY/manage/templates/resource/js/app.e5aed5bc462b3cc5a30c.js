webpackJsonp([21],{NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("7+uW"),i=e("7t+N"),s=e.n(i),a=e("Wohh"),r={name:"App",data:function(){return{navList:["产品与解决方案","新闻中心","技术支持","合作伙伴","关于我们"],func:["产品与解决方案","新闻中心","技术支持","合作伙伴","关于我们","登录 / 注册"],navStatus:!1,signStatus:!1,list:!1,navIndex:-1,top:!1,prompt:!1,isShow:!1,promptText:"",posY:0,contentMode:!0,timeout:""}},methods:{sign:function(){this.$root.visit=0,this.$router.push({path:"/sign"})},products:function(){this.$root.visit=0,this.$router.push({path:"/products"})},news:function(){this.$root.visit=0,this.$router.push({path:"/news"})},support:function(){this.$root.visit=0,this.$router.push({path:"/support"})},partner:function(){this.$root.visit=0,this.$router.push({path:"/partner"})},introduction:function(){this.$root.visit=0,this.$router.push({path:"/introduction"})},user:function(){this.$root.visit=0,this.$router.push({path:"/user"}),this.$root.adapt||(s()(".grey").css("opacity",0),this.top=!1)},home:function(){this.$root.visit=0,this.$router.push({path:"/"})},nav:function(){this.$root.adapt&&1===this.$root.dpr&&(this.navStatus=!0)},nav0:function(){this.$root.adapt&&1===this.$root.dpr&&(this.navStatus=!1)},showList:function(t){1===this.$root.dpr&&(this.navIndex=t)},showList0:function(){this.list?(s()(".nav-bar").css("border-bottom","none"),this.nav0()):(s()(".nav-bar").css("border-bottom","1px solid hsla(0,0%,100%,.15)"),this.nav()),this.list=!this.list,s()(".navList-wrapper").scrollTop(0)},hideList:function(){1===this.$root.dpr&&(this.list=!1,this.navIndex=-1)},hideList0:function(){this.hideList(),this.nav0()},hideList1:function(){this.$root.adapt||"nav-button right"!==event.target.className&&this.list&&this.showList0()},seeList:function(){this.navIndex=this.temp,this.nav()},fun:function(t){switch(this.$root.adapt?this.navIndex=-1:this.showList0(),t){case 0:this.products();break;case 1:this.news();break;case 2:this.support();break;case 3:this.partner();break;case 4:this.introduction();break;case 5:this.sign()}},focus:function(t){return t===this.navIndex},clear:function(){Object(a.b)(),this.signStatus=!1},backToTop:function(){s()("#app").animate({scrollTop:0},400)},cancelPrompt:function(){this.isShow||(this.prompt=!1,this.$root.eventHub.$emit("cancelPrompt"))},hideNav:function(t){switch(t.type){case"touchstart":this.posY=t.targetTouches[0].pageY;break;case"touchmove":var n=this.$root.carousel+50,e=t.targetTouches[0].pageY-this.posY;0===s()("#app").scrollTop()&&e>0&&t.preventDefault(),s()("#app").scrollTop()>n&&e<-30?this.contentMode=!1:this.contentMode=!0}},renderNav:function(){if(!this.$root.adapt){var t,n=this.$root.carousel;s()(".navList").css("height",n),n<300?(t=(n-150)/8,s()(".navList-item").css("padding",t+"px 0")):(t=(n-175)/10,s()(".navList-item").css("padding",t+"px 0"))}}},computed:{userHead:function(){return""===this.$root.head?"background: url('resource/assets/user.png')":"background: url('"+this.$root.head+"')"}},watch:{signStatus:"renderNav"},mounted:function(){var t=this;this.signStatus=Object(a.a)(2,""),this.renderNav(),s()("#app").scroll(function(n){t.list&&n.preventDefault();var e=s()("#main").height(),o=document.getElementById("app").scrollTop,i=t.$route.path.split("/")[1];if(!t.$root.adapt&&"user"!==i){var a=(o/(e-50)).toFixed(1);a=a>1?1:a,s()(".grey").css("opacity",a)}t.$root.adapt?o>=e-140?("user"!==i&&(t.top=!0),"home"===t.$route.name&&t.$root.eventHub.$emit("showSolution")):"user"!==i&&(t.top=!1):"home"===t.$route.name&&o>=e-120&&t.$root.eventHub.$emit("showSolution")}),this.$root.eventHub.$on("sign",function(){t.Sign="My Channel",t.signStatus=Object(a.a)(2,"")}),this.$root.eventHub.$on("hide",function(){t.list&&t.showList0()}),this.$root.eventHub.$on("clear",function(){t.clear()}),this.$root.eventHub.$on("prompt",function(){t.prompt=!t.prompt}),this.$root.eventHub.$on("showPrompt",function(n){t.prompt=!0,t.promptText=n.text,t.isShow=!0,setTimeout(function(){t.isShow&&(t.prompt=!1,t.isShow=!1,setTimeout(function(){t.promptText=""},250))},n.duration)})}},c={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"},on:{touchstart:t.hideNav,touchmove:t.hideNav,touchend:t.hideNav}},[e("transition",{attrs:{name:"contentMode"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.contentMode,expression:"contentMode"}],staticClass:"nav-bar",class:{active:t.navStatus,list:t.list},on:{mouseover:t.nav,mouseout:t.nav0}},[e("div",{staticClass:"grey",class:{active:t.navStatus}}),t._v(" "),e("div",{staticClass:"real",on:{click:t.hideList1}},[e("div",{staticClass:"nav-top"},[e("div",{staticClass:"name left pointer",on:{click:t.home}},[e("p",[t._v("普信天宇")])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.signStatus,expression:"!signStatus"}],staticClass:"func right pointer"},[e("p",{on:{click:t.sign}},[t._v("登录")])]),t._v(" "),t.signStatus?e("div",{staticClass:"pointer right",style:t.userHead,attrs:{id:"sign-user"},on:{click:t.user}}):t._e()]),t._v(" "),e("div",{staticClass:"nav-bottom"},[e("div",{staticClass:"nav-item-bar left"},t._l(t.navList,function(n,o){return e("div",{key:o,staticClass:"nav-item left",on:{mouseover:function(n){t.showList(o)},mouseout:t.hideList}},[e("div",{staticClass:"pointer",on:{click:function(n){t.fun(o)}}},[e("p",[t._v(t._s(n))]),t._v(" "),e("div",{staticClass:"input-bottom"},[e("transition",{attrs:{name:"input"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.focus(o),expression:"focus(index)"}],staticClass:"new"})])],1)])])})),t._v(" "),e("div",{staticClass:"nav-item pointer right",on:{mouseover:t.showList,mouseout:t.hideList}},[e("p",[t._v("全部导航")])])]),t._v(" "),e("div",{staticClass:"nav-button right",on:{click:t.showList0}}),t._v(" "),t.signStatus&&!this.$root.adapt?e("div",{staticClass:"right",attrs:{id:"mobile-sign-user"},on:{click:t.user}},[e("div",{style:t.userHead})]):t._e()])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.top,expression:"top"}],staticClass:"back-to-top pointer",on:{click:t.backToTop}},[e("div")]),t._v(" "),e("transition",{attrs:{name:"list"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.list,expression:"list"}],staticClass:"navList",on:{mouseover:t.seeList,mouseout:t.hideList0}},[this.$root.adapt?t._e():e("div",{staticClass:"navList-wrapper"},t._l(t.func,function(n,o){return e("div",{directives:[{name:"show",rawName:"v-show",value:!(5===o&&t.signStatus),expression:"!(index === 5 && signStatus)"}],key:o,staticClass:"navList-item",on:{click:function(n){t.fun(o)}}},[e("p",[t._v(t._s(n))])])}))])]),t._v(" "),e("transition",{attrs:{name:"grey"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!this.$root.adapt&&t.list,expression:"!this.$root.adapt && list"}],staticClass:"grey-cover",on:{click:t.showList0}})]),t._v(" "),e("transition",{attrs:{name:"grey"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.prompt,expression:"prompt"}],staticClass:"grey-prompt",on:{click:t.cancelPrompt}})]),t._v(" "),e("div",{staticClass:"prompt-bar"},[e("transition",{attrs:{name:"prompt"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"prompt-modal"},[e("p",[t._v(t._s(t.promptText))])])])],1),t._v(" "),e("router-view")],1)},staticRenderFns:[]};var u=e("VU/8")(r,c,!1,function(t){e("psi7")},null,null).exports,p=e("/ocq");o.a.use(p.a);var h=new p.a({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(t){return Promise.all([e.e(0),e.e(1)]).then(function(){var n=[e("s8dJ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/sign",name:"sign",component:function(t){return e.e(14).then(function(){var n=[e("o9Mw")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/products",name:"products",component:function(t){return Promise.all([e.e(0),e.e(17)]).then(function(){var n=[e("mBSZ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/product",name:"product",component:function(t){return e.e(11).then(function(){var n=[e("Cwn0")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/news",name:"news",component:function(t){return Promise.all([e.e(0),e.e(2)]).then(function(){var n=[e("EZvQ")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/support",name:"support",component:function(t){return Promise.all([e.e(0),e.e(6)]).then(function(){var n=[e("d9Q/")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/partner",name:"partner",component:function(t){return Promise.all([e.e(0),e.e(8)]).then(function(){var n=[e("ST6P")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/introduction",name:"introduction",component:function(t){return Promise.all([e.e(0),e.e(7)]).then(function(){var n=[e("xa4f")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/user",name:"user",component:function(t){return e.e(9).then(function(){var n=[e("jyJz")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/user/reimbursement",name:"Reimbursement",component:function(t){return e.e(19).then(function(){var n=[e("ZFIw")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/user/reimbursement/application",name:"ReApplication",component:function(t){return e.e(12).then(function(){var n=[e("weal")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/user/reimbursement/table",name:"ReForm",component:function(t){return e.e(18).then(function(){var n=[e("KNwU")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/user/accounting",name:"Accounting",component:function(t){return e.e(13).then(function(){var n=[e("DbhA")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/user/news",name:"NewsManage",component:function(t){return e.e(5).then(function(){var n=[e("3CaZ")];t.apply(null,n)}.bind(this)).catch(e.oe)},children:[{path:"/user/news/upload",name:"NewsUpload",component:function(t){return e.e(3).then(function(){var n=[e("Loi1")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/user/products",name:"ProductsManage",component:function(t){return e.e(4).then(function(){var n=[e("tftR")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/user/setting",name:"Setting",component:function(t){return e.e(15).then(function(){var n=[e("cbWt")];t.apply(null,n)}.bind(this)).catch(e.oe)}},{path:"/user/authority",name:"Authority",component:function(t){return e.e(16).then(function(){var n=[e("0M5r")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]},{path:"/article",name:"art",component:function(t){return Promise.all([e.e(0),e.e(10)]).then(function(){var n=[e("ruIB")];t.apply(null,n)}.bind(this)).catch(e.oe)}}]}),l=e("v5o6"),d=e.n(l),v=e("7oBh"),m=e.n(v),f=e("L+BA"),w=e.n(f);o.a.use(w.a,{AlloyFinger:m.a}),o.a.config.productionTip=!1,new o.a({el:"#app",router:h,components:{App:u},template:"<App/>",data:{eventHub:new o.a,article:{},head:"",width:window.innerWidth,height:window.innerHeight,dpr:window.devicePixelRatio,records:[{name:"home",pos:0},{name:"sign",pos:0},{name:"products",pos:0},{name:"product",pos:0},{name:"news",pos:0},{name:"support",pos:0},{name:"partner",pos:0},{name:"introduction",pos:0},{name:"user",pos:0},{name:"article",pos:0}],visit:1,visitMode:0,detailTitle:"",detailStatus:!1,mode:0,carousel:.525*window.innerHeight},methods:{setRecord:function(t,n){for(var e=0;e<this.$root.records.length;e++){var o=this.$root.records[e];if(o.name===t){o.pos=n;break}}},getRecord:function(t){for(var n=0;n<this.$root.records.length;n++){var e=this.$root.records[n];if(e.name===t)return e.pos}}},computed:{adapt:function(){return!(window.screen.width<768)}},watch:{$route:function(t,n){1===this.$root.visit&&t.name.substring(0,t.name.length-1)===n.name?this.$root.visitMode=1:(s()("#app").scrollTop(0),this.$root.visit=1,this.$root.visitMode=0)}}}),d.a.attach(document.body)},Wohh:function(t,n,e){"use strict";function o(t,n){if(1===t)return function(t,n,e){var o=new Date;o.setDate(o.getDate()+e),document.cookie=t+"="+escape(n)+(null===e?"":";expires="+o.toGMTString())}("username",n,365),!0;var e=function(t){if(document.cookie.length>0){var n=document.cookie.indexOf(t+"=");if(-1!==n){n=n+t.length+1;var e=document.cookie.indexOf(";",n);return-1===e&&(e=document.cookie.length),unescape(document.cookie.substring(n,e))}}return""}("username");return null!==e&&""!==e}function i(){var t=document.cookie.match(/[^ =;]+(?=\=)/g);if(t)for(var n=t.length;n--;)document.cookie=t[n]+"=0;expires="+new Date(0).toUTCString()}e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})},psi7:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.e5aed5bc462b3cc5a30c.js.map