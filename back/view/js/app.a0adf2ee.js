(function(e){function t(t){for(var r,u,s=t[0],a=t[1],l=t[2],d=0,b=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&b.push(c[u][0]),c[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);i&&i(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"115b":function(e,t,n){"use strict";n("f6c6")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"},o={key:0},u={key:1},s={class:"top-bar"};function a(e,t,n,a,l,i){var d=Object(r["j"])("Login"),b=Object(r["j"])("Upload");return Object(r["g"])(),Object(r["c"])("div",c,[e.user.isLoggedIn?(Object(r["g"])(),Object(r["c"])("div",u,[Object(r["d"])("div",s,[Object(r["e"])(" Welcome "+Object(r["k"])(e.user.username)+" | ",1),Object(r["d"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return i.logout()})},"Logout")]),Object(r["f"])(b,{user:e.user},null,8,["user"])])):(Object(r["g"])(),Object(r["c"])("div",o,[Object(r["f"])(d,{onLoginSucess:i.login},null,8,["onLoginSucess"])]))])}var l=function(e){return Object(r["i"])("data-v-480d0804"),e=e(),Object(r["h"])(),e},i={class:"hello"},d=l((function(){return Object(r["d"])("h1",null,"SEND ME SOMETHING",-1)})),b={class:"warning"},p={class:"file-upload"},f={key:0},O={key:1},j=l((function(){return Object(r["d"])("br",null,null,-1)})),h=l((function(){return Object(r["d"])("br",null,null,-1)})),g=l((function(){return Object(r["d"])("br",null,null,-1)})),m=l((function(){return Object(r["d"])("h1",null,"SENDING",-1)})),v=l((function(){return Object(r["d"])("br",null,null,-1)})),k=Object(r["e"])(" Please do not close this tab... "),y=l((function(){return Object(r["d"])("h1",null," ¯\\_(ツ)_/¯",-1)})),w=Object(r["e"])(" Something went wrong with your upload... "),S=l((function(){return Object(r["d"])("br",null,null,-1)})),L=Object(r["e"])(" Please refresh the page and try again. "),N=[y,w,S,L],E=l((function(){return Object(r["d"])("h1",null," SUCCESS ",-1)})),I=l((function(){return Object(r["d"])("div",{class:"checkmark"},"✓",-1)})),x=l((function(){return Object(r["d"])("br",null,null,-1)}));function F(e,t,n,c,o,u){return Object(r["g"])(),Object(r["c"])("div",i,[Object(r["n"])(Object(r["d"])("div",null,[d,Object(r["n"])(Object(r["d"])("div",b," Please select a file. ",512),[[r["m"],e.selectErr]]),Object(r["d"])("label",p,[""===e.selectedFileName?(Object(r["g"])(),Object(r["c"])("span",f," SELECT FILE ")):(Object(r["g"])(),Object(r["c"])("span",O,Object(r["k"])(e.selectedFileName),1)),Object(r["d"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return u.setSelectedFileName()})},null,544)]),j,h,g,Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return u.upload()})},"SEND")],512),[[r["m"],"upload"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,[m,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") is sending now. ",1),v,k],512),[[r["m"],"uploading"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,N,512),[[r["m"],"error"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,[E,I,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") has been sent. ",1),x,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return u.reset()})},"SEND ANOTHER FILE")],512),[[r["m"],"success"===e.screen]])])}var P=n("1da1"),_=(n("96cf"),n("b0c0"),n("bc3a")),C=n.n(_),M={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"",screen:"upload",selectErr:!1}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name,this.selectErr=!1},upload:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.file.files[0]){e.next=3;break}return this.selectErr=!0,e.abrupt("return");case 3:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.screen="uploading",e.prev=7,e.next=10,C.a.post("/upload/",t);case 10:n=e.sent,200===n.status?this.screen="success":this.screen="error",e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0),this.screen="error";case 18:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.screen="upload",this.selectedFileName="",this.$refs.file.value=""}}},U=(n("98f0"),n("6b0d")),D=n.n(U);const R=D()(M,[["render",F],["__scopeId","data-v-480d0804"]]);var T=R,$={class:"login"},G=Object(r["d"])("h1",null,"LOGIN",-1),A={key:0,class:"warning"},H=Object(r["d"])("br",null,null,-1),J=Object(r["d"])("br",null,null,-1);function V(e,t,n,c,o,u){return Object(r["g"])(),Object(r["c"])("div",$,[G,e.badLogin?(Object(r["g"])(),Object(r["c"])("div",A," Incorrect login credentials. Please try again. ")):Object(r["b"])("",!0),Object(r["n"])(Object(r["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["l"],e.username]]),H,Object(r["n"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["l"],e.password]]),J,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return u.login()})},"LOGIN")])}var Y={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},methods:{login:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-sucess",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};const W=D()(Y,[["render",V]]);var q=W,z={name:"App",components:{Upload:T,Login:q},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("115b");const B=D()(z,[["render",a]]);var K=B;Object(r["a"])(K).mount("#app")},"8eab":function(e,t,n){},"98f0":function(e,t,n){"use strict";n("8eab")},f6c6:function(e,t,n){}});
//# sourceMappingURL=app.a0adf2ee.js.map