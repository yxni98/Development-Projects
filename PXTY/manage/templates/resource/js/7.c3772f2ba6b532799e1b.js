webpackJsonp([7],{"3CaZ":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7t+N"),n=e.n(i),a={name:"news-manage",data:function(){return{uploadStatus:!0,showCarousel:!1,showAllNews:!1,carouselList:["华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者"],newsList:["华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者"]}},methods:{upload:function(){this.$router.push({path:"/user/news/upload"})},show:function(t){0===t?this.showCarousel=!this.showCarousel:this.showAllNews=!this.showAllNews;var s=this;setTimeout(function(){var e,i=n()("#user").height()-window.innerHeight;i>(e=s.$root.adapt?0===t?n()("#main").height()+n()(".main-function").eq(0).height()+n()(".news-item").eq(0).height()+20:n()("#main").height()+n()(".main-function").eq(0).height()+n()(".news-item").eq(0).height()+20+n()(".newsList").eq(0).height():0===t?n()("#main").height()+n()(".func-item").eq(0).height()+17+n()(".news-item").eq(0).height():n()("#main").height()+n()(".func-item").eq(0).height()+17+n()(".news-item").eq(0).height()+17+n()(".newsList").eq(0).height())&&(i=e),n()("#app").animate({scrollTop:i},300)},17)},read:function(t){alert(t)}},mounted:function(){var t=this;t.uploadStatus=!1,this.$root.eventHub.$on("cancelUpload",function(){t.uploadStatus=!1}),this.$root.eventHub.$on("Upload",function(){t.uploadStatus=!0})}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"news-manage"}},[e("transition",{attrs:{name:"funcList"}},[t.uploadStatus?t._e():e("div",{staticClass:"func-operation"},[e("div",{staticClass:"news-item head pointer",on:{click:t.upload}},[e("p",[t._v("新闻上传")])]),t._v(" "),e("div",{staticClass:"newsList"},[e("div",{staticClass:"news-item head pointer",on:{click:function(s){t.show(0)}}},[e("p",{staticClass:"left"},[t._v("首页新闻")]),t._v(" "),t.showCarousel?e("div",{staticClass:"back pointer left"}):t._e()]),t._v(" "),e("transition",{attrs:{name:"operation"}},[t.showCarousel?e("div",{staticClass:"carousel-wrapper"},t._l(t.carouselList,function(s,i){return e("div",{key:i,staticClass:"news-item"},[e("p",{staticClass:"pointer",on:{click:function(s){t.read(i)}}},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"button delete right"},[e("p",[t._v("删除")])]),t._v(" "),e("div",{staticClass:"button hide right"},[e("p",[t._v("隐藏")])]),t._v(" "),e("div",{staticClass:"button setting right"},[e("p",[t._v("下移")])]),t._v(" "),e("div",{staticClass:"button setting right"},[e("p",[t._v("上移")])])])})):t._e()])],1),t._v(" "),e("div",{staticClass:"newsList"},[e("div",{staticClass:"news-item head pointer",on:{click:function(s){t.show(1)}}},[e("p",{staticClass:"left"},[t._v("全部新闻")]),t._v(" "),t.showAllNews?e("div",{staticClass:"back pointer left"}):t._e()]),t._v(" "),e("transition",{attrs:{name:"operation"}},[t.showAllNews?e("div",{staticClass:"carousel-wrapper"},t._l(t.newsList,function(s,i){return e("div",{key:i,staticClass:"news-item"},[e("p",{staticClass:"pointer",on:{click:function(s){t.read(i)}}},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"button delete right"},[e("p",[t._v("删除")])]),t._v(" "),e("div",{staticClass:"button setting right"},[e("p",[t._v("修改")])]),t._v(" "),e("div",{staticClass:"button show right"},[e("p",[t._v("置顶")])])])})):t._e()])],1)])]),t._v(" "),t.uploadStatus?e("router-view"):t._e()],1)},staticRenderFns:[]};var u=e("VU/8")(a,o,!1,function(t){e("USMS")},"data-v-6c769c6e",null);s.default=u.exports},USMS:function(t,s){}});
//# sourceMappingURL=7.c3772f2ba6b532799e1b.js.map