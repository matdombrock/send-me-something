(function(e){function t(t){for(var r,u,s=t[0],a=t[1],l=t[2],d=0,b=[];d<s.length;d++)u=s[d],Object.prototype.hasOwnProperty.call(c,u)&&c[u]&&b.push(c[u][0]),c[u]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);i&&i(t);while(b.length)b.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var a=n[s];0!==c[a]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},c={app:0},o=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var i=a;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"},o={key:0},u={key:1},s={class:"top-bar"};function a(e,t,n,a,l,i){var d=Object(r["j"])("Login"),b=Object(r["j"])("Upload");return Object(r["g"])(),Object(r["c"])("div",c,[e.user.isLoggedIn?(Object(r["g"])(),Object(r["c"])("div",u,[Object(r["d"])("div",s,[Object(r["e"])(" Welcome "+Object(r["k"])(e.user.username)+" | ",1),Object(r["d"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return i.logout()})},"Logout")]),Object(r["f"])(b,{user:e.user},null,8,["user"])])):(Object(r["g"])(),Object(r["c"])("div",o,[Object(r["f"])(d,{onLoginSucess:i.login},null,8,["onLoginSucess"])]))])}var l=function(e){return Object(r["i"])("data-v-1216d2fa"),e=e(),Object(r["h"])(),e},i={class:"hello"},d={key:0},b=l((function(){return Object(r["d"])("h1",null,"SEND ME SOMETHING",-1)})),p={key:0,class:"warning"},f={class:"file-upload"},O={key:0},j={key:1},g=l((function(){return Object(r["d"])("br",null,null,-1)})),h=l((function(){return Object(r["d"])("br",null,null,-1)})),m=l((function(){return Object(r["d"])("br",null,null,-1)})),v={key:1},k=l((function(){return Object(r["d"])("h1",null,"SENDING",-1)})),y=l((function(){return Object(r["d"])("br",null,null,-1)})),w=Object(r["e"])(" Please do not close this tab... "),S={key:2},L=l((function(){return Object(r["d"])("h1",null," ¯\\_(ツ)_/¯",-1)})),N=Object(r["e"])(" Something went wrong with your upload... "),E=l((function(){return Object(r["d"])("br",null,null,-1)})),I=Object(r["e"])(" Please refresh the page and try again. "),x=[L,N,E,I],F={key:3},P=l((function(){return Object(r["d"])("h1",null," SUCCESS ",-1)})),_=l((function(){return Object(r["d"])("br",null,null,-1)}));function C(e,t,n,c,o,u){return Object(r["g"])(),Object(r["c"])("div",i,["upload"===e.screen?(Object(r["g"])(),Object(r["c"])("div",d,[b,e.selectErr?(Object(r["g"])(),Object(r["c"])("div",p," Please select a file. ")):Object(r["b"])("",!0),Object(r["d"])("label",f,["none"===e.selectedFileName?(Object(r["g"])(),Object(r["c"])("span",O," SELECT FILE ")):(Object(r["g"])(),Object(r["c"])("span",j,Object(r["k"])(e.selectedFileName),1)),Object(r["d"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return u.setSelectedFileName()})},null,544)]),g,h,m,Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return u.upload()})},"SEND")])):Object(r["b"])("",!0),"uploading"===e.screen?(Object(r["g"])(),Object(r["c"])("div",v,[k,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") is sending now. ",1),y,w])):Object(r["b"])("",!0),"error"===e.screen?(Object(r["g"])(),Object(r["c"])("div",S,x)):Object(r["b"])("",!0),"success"===e.screen?(Object(r["g"])(),Object(r["c"])("div",F,[P,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") has been sent. ",1),_,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return u.reset()})},"SEND ANOTHER FILE")])):Object(r["b"])("",!0)])}var M=n("1da1"),U=(n("96cf"),n("b0c0"),n("bc3a")),D=n.n(U),R={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"none",screen:"upload",selectErr:!1}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name,this.selectErr=!1},upload:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.file.files[0]){e.next=2;break}return e.abrupt("return");case 2:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.screen="uploading",e.prev=6,e.next=9,D.a.post("/upload/",t);case 9:n=e.sent,200===n.status?this.screen="success":this.screen="error",e.next=17;break;case 13:e.prev=13,e.t0=e["catch"](6),console.log(e.t0),this.screen="error";case 17:case"end":return e.stop()}}),e,this,[[6,13]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.screen="upload"}}},T=(n("8699"),n("6b0d")),$=n.n(T);const G=$()(R,[["render",C],["__scopeId","data-v-1216d2fa"]]);var A=G,H={class:"login"},J=Object(r["d"])("h1",null,"LOGIN",-1),V={key:0,class:"warning"},Y=Object(r["d"])("br",null,null,-1),W=Object(r["d"])("br",null,null,-1);function q(e,t,n,c,o,u){return Object(r["g"])(),Object(r["c"])("div",H,[J,e.badLogin?(Object(r["g"])(),Object(r["c"])("div",V," Incorrect login credentials. Please try again. ")):Object(r["b"])("",!0),Object(r["m"])(Object(r["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["l"],e.username]]),Y,Object(r["m"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["l"],e.password]]),W,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return u.login()})},"Login")])}var z={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},methods:{login:function(){var e=Object(M["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-sucess",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};const B=$()(z,[["render",q]]);var K=B,Q={name:"App",components:{Upload:A,Login:K},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("edce");const X=$()(Q,[["render",a]]);var Z=X;Object(r["a"])(Z).mount("#app")},"66a6":function(e,t,n){},"7ee4":function(e,t,n){},8699:function(e,t,n){"use strict";n("7ee4")},edce:function(e,t,n){"use strict";n("66a6")}});
//# sourceMappingURL=app.c7951837.js.map