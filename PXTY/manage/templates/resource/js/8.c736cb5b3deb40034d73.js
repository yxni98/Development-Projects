webpackJsonp([8],{t2hx:function(t,n){},xa4f:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7t+N"),o=e.n(i),a={name:"intro",data:function(){return{mainContent:[{caption:"1"},{caption:"2"},{caption:"3"},{caption:"4"}]}},methods:{hideList:function(){this.$root.eventHub.$emit("hide")},renderPage:function(t){return t%2==0?"background-color: white;":"background-color: #F0F2F5;"}},components:{foot:e("nq5D").a},mounted:function(){if(!this.$root.adapt){var t=this.$root.carousel;o()("#main").css("height",t);for(var n=o()("#main p"),e=0,i=0;i<n.length;i++)e+=n.eq(i).height();o()("#main p:first-of-type").css("margin-top",(t-e)/2)}}},r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"intro"},on:{touchstart:t.hideList}},[t._m(0),t._v(" "),e("div",{staticClass:"main-content"},[t._l(t.mainContent,function(n,i){return e("div",{key:i,staticClass:"page",style:t.renderPage(i)},[e("p",[t._v(t._s(n.caption))])])}),t._v(" "),e("foot")],2)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"main"}},[n("p",[this._v("关于我们")]),this._v(" "),n("p",[this._v("公司简介，社会责任，管理层信息，网络安全，公司出版物等")])])}]};var s=e("VU/8")(a,r,!1,function(t){e("t2hx")},"data-v-a74afbf6",null);n.default=s.exports}});
//# sourceMappingURL=8.c736cb5b3deb40034d73.js.map