webpackJsonp([11],{N0CY:function(t,e){},o9Mw:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Wohh"),i=s("7t+N"),n=s.n(i),o={name:"sign",data:function(){return{inputStatus:!1,inputStatus3:!1,inputData:!1,error:!1,error2:!1,error3:!1,page:0,prompt:"",button:"登录",check:!1,signMode:"",account:"",password:"",mode:-1,lock:!1}},methods:{input:function(){this.inputStatus=!0,this.lock=!1},input3:function(){this.inputStatus3=!0},leave:function(){var t=this;setTimeout(function(){t.lock||(t.inputStatus=!1)},30),""===event.target.value&&(this.inputData=!1)},leave3:function(){this.inputStatus3=!1},type:function(){""!==event.target.value?this.inputData=!0:this.inputData=!1},next:function(){var t=this;""!==n()(".account").val()||""!==n()(".password").val()?(this.error=!1,this.$root.adapt||(this.lock=!0,this.error2=!1),0===this.page?n.a.ajax({async:!1,url:"/login_first/",type:"GET",data:{account:n()(".account").val(),step1:"step1",csrfmiddlewaretoken:csrf_token},success:function(e){t.signMode=e,"sign in"===e?(t.button="登录",t.mode=1):(t.button="注册",t.mode=0),t.account=n()(".account").val(),t.page++,t.prompt="输入密码加入我们",t.$root.adapt||n()(".password").attr("placeholder","请输入密码"),setTimeout(function(){n()(".password").focus()},100)}}):1===this.page&&(this.password=n()(".password").val(),1===this.mode?n.a.ajax({url:"/sign_in/",type:"GET",data:{account:t.account,psd:t.password,csrfmiddlewaretoken:csrf_token},success:function(e){t.error3=!1,t.inputStatus3=!0,t.check=!1,t.page=2,t.lock=!1,Object(a.a)(1,t.account),t.$root.eventHub.$emit("sign"),setTimeout(function(){t.$router.push({path:"/home"})},1800),n()("#signBox input").val("")}}):0===this.mode&&n.a.ajax({url:"/sign_up/",type:"GET",data:{account:t.account,psd:t.password,csrfmiddlewaretoken:csrf_token},success:function(e){t.error3=!1,t.inputStatus3=!0,t.check=!1,t.page=2,t.lock=!1,Object(a.a)(1,t.account),t.$root.eventHub.$emit("sign"),setTimeout(function(){t.$router.push({path:"/home"})},1800),n()("#signBox input").val("")}}))):(this.error=!0,window.screen.width<768&&(this.error2=!0))},previous:function(){this.error=!1,n()(".password").val(""),this.$root.adapt?this.inputStatus=!1:this.lock=!0,this.inputData=!0,this.page--,setTimeout(function(){n()(".account").focus()},100)},back:function(){this.$router.push({path:"/home"})},submit:function(){var t=n()("#check").val(),e=this;return n.a.ajax({async:!1,url:"/form.php",type:"GET",data:{code:t},success:function(t){"正确"===t?n.a.ajax({url:"/sign_in_up.php",type:"GET",data:{account:e.account,psd:e.password,step2:e.signMode},success:function(t){e.error3=!1,e.inputStatus3=!0,e.check=!1,e.page=2}}):e.error3=!0}}),""},change:function(){n()("#img").attr("src","/checkcode.php?r="+Math.random())},cancelCheck:function(){this.check=!1,this.error3=!1,this.inputStatus3=!1,this.$root.adapt&&setTimeout(function(){n()(".password").focus()},100)}},computed:{resultRender:function(){return 1===this.mode?"登录":"注册"},mobile:function(){return!(window.screen.width<768&&this.inputStatus)}},mounted:function(){this.$root.adapt||(n()(".account").attr("placeholder","邮箱 / 手机号"),this.$root.eventHub.$emit("nav",3)),n()(".account").focus();var t=this;t.$root.eventHub.$emit("loading"),setTimeout(function(){t.loaded=!0,t.$root.eventHub.$emit("load")},1e3)}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:{active:t.inputStatus},attrs:{id:"sign"}},[s("svg",{attrs:{jsname:"BUfzDd",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 810",preserveAspectRatio:"xMinYMin slice","aria-hidden":"true"}},[s("path",{attrs:{fill:"#efefee",d:"M592.66 0c-15 64.092-30.7 125.285-46.598 183.777C634.056 325.56 748.348 550.932 819.642 809.5h419.672C1184.518 593.727 1083.124 290.064 902.637 0H592.66z"}}),t._v(" "),s("path",{attrs:{fill:"#f6f6f6",d:"M545.962 183.777c-53.796 196.576-111.592 361.156-163.49 490.74 11.7 44.494 22.8 89.49 33.1 134.883h404.07c-71.294-258.468-185.586-483.84-273.68-625.623z"}}),t._v(" "),s("path",{attrs:{fill:"#f7f7f7",d:"M153.89 0c74.094 180.678 161.088 417.448 228.483 674.517C449.67 506.337 527.063 279.465 592.56 0H153.89z"}}),t._v(" "),s("path",{attrs:{fill:"#fbfbfc",d:"M153.89 0H0v809.5h415.57C345.477 500.938 240.884 211.874 153.89 0z"}}),t._v(" "),s("path",{attrs:{fill:"#ebebec",d:"M1144.22 501.538c52.596-134.583 101.492-290.964 134.09-463.343 1.2-6.1 2.3-12.298 3.4-18.497 0-.2.1-.4.1-.6 1.1-6.3 2.3-12.7 3.4-19.098H902.536c105.293 169.28 183.688 343.158 241.684 501.638v-.1z"}}),t._v(" "),s("path",{attrs:{fill:"#e1e1e1",d:"M1285.31 0c-2.2 12.798-4.5 25.597-6.9 38.195C1321.507 86.39 1379.603 158.98 1440 257.168V0h-154.69z"}}),t._v(" "),s("path",{attrs:{fill:"#e7e7e7",d:"M1278.31,38.196C1245.81,209.874 1197.22,365.556 1144.82,499.838L1144.82,503.638C1185.82,615.924 1216.41,720.211 1239.11,809.6L1439.7,810L1439.7,256.768C1379.4,158.78 1321.41,86.288 1278.31,38.195L1278.31,38.196z"}})]),t._v(" "),s("p",{directives:[{name:"show",rawName:"v-show",value:2!==t.page,expression:"page !== 2"}],attrs:{id:"name"}},[t._v("普信天宇")]),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:2!==t.page,expression:"page !== 2"}],staticClass:"close2",attrs:{src:"resource/assets/close-grey.png",alt:"close"},on:{click:t.back}}),t._v(" "),s("div",{attrs:{id:"signBox"}},[s("img",{directives:[{name:"show",rawName:"v-show",value:2!==t.page,expression:"page !== 2"}],staticClass:"close",attrs:{src:"resource/assets/close-grey.png",alt:"close"},on:{click:t.back}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.page,expression:"page === 0"}],attrs:{id:"sign-start"}},[s("p",{staticClass:"cname"},[t._v("普信天宇")]),t._v(" "),s("p",{attrs:{id:"sign-in"}},[t._v("登录")]),t._v(" "),s("p",{attrs:{id:"sign-prompt"}},[t._v("进入你的中心")]),t._v(" "),s("p",{staticClass:"sign-placeholder",class:{active:t.inputStatus,active2:t.inputData,active3:t.error}},[t._v("邮箱 / 手机号")]),t._v(" "),s("input",{staticClass:"account",class:{active:t.error2},attrs:{type:"text"},on:{focus:t.input,focusout:t.leave,keyup:[t.type,function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.next(e)}]}}),t._v(" "),s("div",{staticClass:"input-bottom"},[s("div",{staticClass:"origin"}),t._v(" "),s("transition",{attrs:{name:"input"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputStatus,expression:"inputStatus"}],staticClass:"new"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"})],1),t._v(" "),s("p",{attrs:{id:"forget"}},[t._v("忘记密码")]),t._v(" "),s("p",{attrs:{id:"options"}},[t._v("更多选项")]),t._v(" "),s("div",{staticClass:"next",on:{click:t.next}},[t._v("下一步")]),t._v(" "),s("div",{attrs:{id:"user"}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.page,expression:"page === 1"}],attrs:{id:"in-or-up"}},[s("p",{staticClass:"cname"},[t._v("普信天宇")]),t._v(" "),s("p",{attrs:{id:"welcome"}},[t._v("欢迎")]),t._v(" "),s("p",{attrs:{id:"up-prompt"}},[t._v(t._s(t.prompt))]),t._v(" "),s("p",{staticClass:"sign-placeholder",class:{active:t.inputStatus,active2:t.inputData,active3:t.error}},[t._v("请输入密码")]),t._v(" "),s("input",{staticClass:"password",class:{active:t.error2},attrs:{type:"password"},on:{focus:t.input,focusout:t.leave,keyup:[t.type,function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.next(e)}]}}),t._v(" "),s("div",{staticClass:"input-bottom"},[s("div",{staticClass:"origin"}),t._v(" "),s("transition",{attrs:{name:"input"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputStatus,expression:"inputStatus"}],staticClass:"new"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error,expression:"error"}],staticClass:"error"})],1),t._v(" "),s("div",{staticClass:"next",attrs:{id:"back"},on:{click:t.previous}},[t._v("上一步")]),t._v(" "),s("div",{staticClass:"next",on:{click:t.next}},[t._v(t._s(t.button))]),t._v(" "),s("div",{staticClass:"back",on:{click:t.previous}}),t._v(" "),s("div",{attrs:{id:"user2"}})]),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:2===t.page,expression:"page === 2"}],attrs:{id:"success-img",src:"resource/assets/success.png",alt:"success"}}),t._v(" "),s("transition",{attrs:{name:"text1"}},[s("p",{directives:[{name:"show",rawName:"v-show",value:2===t.page,expression:"page === 2"}],staticClass:"success-text"},[t._v(t._s(t.resultRender)+"成功")])])],1),t._v(" "),s("transition",{attrs:{name:"check"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.check,expression:"check"}],staticClass:"checkBox"},[s("form",{attrs:{action:"/form.php",method:"get"}},[s("p",[t._v("验证码")]),t._v(" "),s("img",{attrs:{id:"img",src:"/checkcode.php?"},on:{click:t.change}}),t._v(" "),s("input",{attrs:{id:"check",name:"code"},on:{focus:t.input3,focusout:t.leave3,keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submit(e)}}}),t._v(" "),s("div",{staticClass:"input-bottom"},[s("div",{staticClass:"origin"}),t._v(" "),s("transition",{attrs:{name:"input"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inputStatus3,expression:"inputStatus3"}],staticClass:"new"})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.error3,expression:"error3"}],staticClass:"error"})],1),t._v(" "),s("input",{attrs:{id:"check-submit",type:"submit",value:"提交"},on:{click:function(e){e.preventDefault(),t.submit(e)}}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.check,expression:"check"}],staticClass:"grey-cover",on:{click:t.cancelCheck}})],1)},staticRenderFns:[]};var c=s("VU/8")(o,r,!1,function(t){s("N0CY")},"data-v-33afec02",null);e.default=c.exports}});
//# sourceMappingURL=11.6e7f71fb9d8fad2d8b79.js.map