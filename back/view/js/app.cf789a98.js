(function(e){function t(t){for(var r,s,a=t[0],u=t[1],l=t[2],d=0,b=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var i=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"},o={key:0},s={key:1},a={class:"top-bar"},u=Object(r["d"])("a",{class:"footer sm",href:"/public/",target:"_blank"},"VIEW MY PUBLIC FILES",-1);function l(e,t,n,l,i,d){var b=Object(r["j"])("Login"),f=Object(r["j"])("Upload");return Object(r["g"])(),Object(r["c"])("div",c,[e.user.isLoggedIn?(Object(r["g"])(),Object(r["c"])("div",s,[Object(r["d"])("div",a,[Object(r["e"])(" Welcome "+Object(r["k"])(e.user.username)+" | ",1),Object(r["d"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return d.logout()})},"Logout")]),Object(r["f"])(f,{user:e.user},null,8,["user"])])):(Object(r["g"])(),Object(r["c"])("div",o,[Object(r["f"])(b,{onLoginSuccess:d.login},null,8,["onLoginSuccess"])])),u])}var i=function(e){return Object(r["i"])("data-v-02609c6c"),e=e(),Object(r["h"])(),e},d={class:"hello"},b=i((function(){return Object(r["d"])("h1",null,"SEND ME SOMETHING",-1)})),f={class:"warning"},p={class:"file-upload"},O={key:0},j={key:1},g=i((function(){return Object(r["d"])("br",null,null,-1)})),m=i((function(){return Object(r["d"])("h1",null,"SENDING",-1)})),h=i((function(){return Object(r["d"])("br",null,null,-1)})),v=Object(r["e"])(" Please do not close this tab... "),k=i((function(){return Object(r["d"])("h1",null," ¯\\_(ツ)_/¯",-1)})),y=Object(r["e"])(" Something went wrong with your upload... "),w=i((function(){return Object(r["d"])("br",null,null,-1)})),S=Object(r["e"])(" Please refresh the page and try again. "),I=[k,y,w,S],L=i((function(){return Object(r["d"])("h1",null," SUCCESS ",-1)})),E=i((function(){return Object(r["d"])("div",{class:"checkmark"},"✓",-1)})),N=i((function(){return Object(r["d"])("br",null,null,-1)}));function x(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",d,[Object(r["n"])(Object(r["d"])("div",null,[b,Object(r["n"])(Object(r["d"])("div",f," Please select a file. ",512),[[r["m"],e.selectErr]]),Object(r["d"])("label",p,[""===e.selectedFileName?(Object(r["g"])(),Object(r["c"])("span",O," SELECT FILE ")):(Object(r["g"])(),Object(r["c"])("span",j,Object(r["k"])(e.selectedFileName),1)),Object(r["d"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return s.setSelectedFileName()})},null,544)]),g,Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return s.upload()})},"SEND")],512),[[r["m"],"upload"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,[m,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") is sending now. ",1),h,v],512),[[r["m"],"uploading"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,I,512),[[r["m"],"error"===e.screen]]),Object(r["n"])(Object(r["d"])("div",null,[L,E,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") has been sent. ",1),N,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return s.reset()})},"SEND ANOTHER FILE")],512),[[r["m"],"success"===e.screen]])])}var F=n("1da1"),P=(n("96cf"),n("b0c0"),n("bc3a")),_=n.n(P),C={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"",screen:"upload",selectErr:!1}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name,this.selectErr=!1},upload:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.file.files[0]){e.next=3;break}return this.selectErr=!0,e.abrupt("return");case 3:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.screen="uploading",e.prev=7,e.next=10,_.a.post("/upload/",t);case 10:n=e.sent,200===n.status?this.screen="success":this.screen="error",e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0),this.screen="error";case 18:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.screen="upload",this.selectedFileName="",this.$refs.file.value=""}}},U=(n("ce95"),n("6b0d")),M=n.n(U);const $=M()(C,[["render",x],["__scopeId","data-v-02609c6c"]]);var D=$,R={class:"login"},T=Object(r["d"])("h1",null,"LOGIN",-1),G={key:0,class:"warning"},A=Object(r["d"])("br",null,null,-1),V=Object(r["d"])("br",null,null,-1);function Y(e,t,n,c,o,s){return Object(r["g"])(),Object(r["c"])("div",R,[T,e.badLogin?(Object(r["g"])(),Object(r["c"])("div",G," Incorrect login credentials. Please try again. ")):Object(r["b"])("",!0),Object(r["n"])(Object(r["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["l"],e.username]]),A,Object(r["n"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["l"],e.password]]),V,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return s.login()})},"LOGIN")])}var H={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},mounted:function(){var e=localStorage.getItem("token"),t=localStorage.getItem("username");if(e&&t){var n={token:e,username:t};this.$emit("login-success",n),console.log("Found existing login token.")}},methods:{login:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-success",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};const J=M()(H,[["render",Y]]);var W=J,B={name:"App",metaInfo:{title:"About Us"},components:{Upload:D,Login:W},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("f319");const q=M()(B,[["render",l]]);var z=q,K=n("58ca");z.use(K["a"]),Object(r["a"])(z).mount("#app")},"5fe5":function(e,t,n){},b0c5:function(e,t,n){},ce95:function(e,t,n){"use strict";n("5fe5")},f319:function(e,t,n){"use strict";n("b0c5")}});
//# sourceMappingURL=app.cf789a98.js.map