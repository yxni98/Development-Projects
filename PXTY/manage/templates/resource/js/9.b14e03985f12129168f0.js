webpackJsonp([9],{"3CaZ":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7t+N"),a=e.n(i),n={name:"news-manage",data:function(){return{uploadStatus:!0,showCarousel:!1,showAllNews:!1,carouselList:[],newsList:["华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者","华为FusionCube跃居超融合挑战者"]}},methods:{upload:function(){this.$router.push({path:"/user/news/upload"})},show:function(t){0===t?this.showCarousel=!this.showCarousel:this.showAllNews=!this.showAllNews;var s=this;setTimeout(function(){var e,i=a()("#user").height()-window.innerHeight;i>(e=s.$root.adapt?0===t?a()("#main").height()+a()(".main-function").eq(0).height()+a()(".news-item").eq(0).height()+20:a()("#main").height()+a()(".main-function").eq(0).height()+a()(".news-item").eq(0).height()+20+a()(".newsList").eq(0).height():0===t?a()("#main").height()+a()(".func-item").eq(0).height()+17+a()(".news-item").eq(0).height():a()("#main").height()+a()(".func-item").eq(0).height()+17+a()(".news-item").eq(0).height()+17+a()(".newsList").eq(0).height())&&(i=e),a()("#app").animate({scrollTop:i},300)},17)},read:function(t){alert(t)},deleteItem:function(t){this.carouselList.splice(t,1)},hideItem:function(t){this.newsList.unshift(this.carouselList[t]),this.carouselList.splice(t,1)},downItem:function(t){if(t<this.carouselList.length-1){var s=this.carouselList[t];this.$set(this.carouselList,t,this.carouselList[t+1]),this.$set(this.carouselList,t+1,s)}},upItem:function(t){if(t>0){var s=this.carouselList[t];this.$set(this.carouselList,t,this.carouselList[t-1]),this.$set(this.carouselList,t-1,s)}}},created:function(){var t=this;a.a.ajax({async:!0,url:"/carousel/",type:"GET",data:{},success:function(s){t.carouselList=s;for(var e=0;e<t.carouselList.length;e++)t.carouselList[e].title=t.carouselList[e].title.replace(/≮/g," ")}})},mounted:function(){var t=this;t.uploadStatus=!1,this.$root.eventHub.$on("cancelUpload",function(){t.uploadStatus=!1}),this.$root.eventHub.$on("Upload",function(){t.uploadStatus=!0})}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"news-manage"}},[e("transition",{attrs:{name:"funcList"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.uploadStatus,expression:"!uploadStatus"}],staticClass:"func-operation"},[e("div",{staticClass:"news-item head pointer",on:{click:t.upload}},[e("p",[t._v("新闻上传")])]),t._v(" "),e("div",{staticClass:"newsList"},[e("div",{staticClass:"news-item head pointer",on:{click:function(s){t.show(0)}}},[e("p",{staticClass:"left"},[t._v("首页新闻")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCarousel,expression:"showCarousel"}],staticClass:"back pointer left"})]),t._v(" "),e("transition",{attrs:{name:"operation"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCarousel,expression:"showCarousel"}],staticClass:"carousel-wrapper"},t._l(t.carouselList,function(s,i){return e("div",{key:i,staticClass:"news-item"},[e("p",{staticClass:"pointer",on:{click:function(s){t.read(i)}}},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"button delete right",on:{click:function(s){t.deleteItem(i)}}},[e("p",[t._v("删除")])]),t._v(" "),e("div",{staticClass:"button hide right",on:{click:function(s){t.hideItem(i)}}},[e("p",[t._v("隐藏")])]),t._v(" "),e("div",{staticClass:"button setting right",on:{click:function(s){t.downItem(i)}}},[e("p",[t._v("下移")])]),t._v(" "),e("div",{staticClass:"button setting right",on:{click:function(s){t.upItem(i)}}},[e("p",[t._v("上移")])])])}))])],1),t._v(" "),e("div",{staticClass:"newsList"},[e("div",{staticClass:"news-item head pointer",on:{click:function(s){t.show(1)}}},[e("p",{staticClass:"left"},[t._v("全部新闻")]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showAllNews,expression:"showAllNews"}],staticClass:"back pointer left"})]),t._v(" "),e("transition",{attrs:{name:"operation"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showAllNews,expression:"showAllNews"}],staticClass:"carousel-wrapper"},t._l(t.newsList,function(s,i){return e("div",{key:i,staticClass:"news-item"},[e("p",{staticClass:"pointer",on:{click:function(s){t.read(i)}}},[t._v(t._s(s))]),t._v(" "),e("div",{staticClass:"button delete right"},[e("p",[t._v("删除")])]),t._v(" "),e("div",{staticClass:"button setting right"},[e("p",[t._v("修改")])]),t._v(" "),e("div",{staticClass:"button show right"},[e("p",[t._v("置顶")])])])}))])],1)])]),t._v(" "),e("router-view",{directives:[{name:"show",rawName:"v-show",value:t.uploadStatus,expression:"uploadStatus"}]})],1)},staticRenderFns:[]};var u=e("VU/8")(n,o,!1,function(t){e("UAkL")},"data-v-4eaaac3f",null);s.default=u.exports},UAkL:function(t,s){}});
//# sourceMappingURL=9.b14e03985f12129168f0.js.map