(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],d=0,b=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&b.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d4d":function(e,t,n){},"1a4b":function(e,t,n){},"1ab5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"},o={key:0},a={key:1},u={class:"top-bar"};function s(e,t,n,s,i,l){var d=Object(r["j"])("Login"),b=Object(r["j"])("Upload");return Object(r["g"])(),Object(r["c"])("div",c,[e.user.isLoggedIn?(Object(r["g"])(),Object(r["c"])("div",a,[Object(r["d"])("div",u,[Object(r["e"])(" Welcome "+Object(r["k"])(e.user.username)+" | ",1),Object(r["d"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return l.logout()})},"Logout")]),Object(r["f"])(b,{user:e.user},null,8,["user"])])):(Object(r["g"])(),Object(r["c"])("div",o,[Object(r["f"])(d,{onLoginSucess:l.login},null,8,["onLoginSucess"])]))])}var i=function(e){return Object(r["i"])("data-v-f02704c4"),e=e(),Object(r["h"])(),e},l={class:"hello"},d={key:0},b=i((function(){return Object(r["d"])("h1",null,"SEND ME SOMETHING",-1)})),p={class:"file-upload"},f={key:0},O={key:1},j=i((function(){return Object(r["d"])("br",null,null,-1)})),g=i((function(){return Object(r["d"])("br",null,null,-1)})),h={key:1},m=i((function(){return Object(r["d"])("h1",null,"SENDING",-1)})),v=i((function(){return Object(r["d"])("br",null,null,-1)})),y=Object(r["e"])(" Please do not close this tab... "),k={key:2},w=i((function(){return Object(r["d"])("h1",null," ¯\\_(ツ)_/¯",-1)})),S=Object(r["e"])(" Something went wrong with your upload... "),L=i((function(){return Object(r["d"])("br",null,null,-1)})),I=Object(r["e"])(" Please refresh the page and try again. "),N=[w,S,L,I],x={key:3},E=i((function(){return Object(r["d"])("h1",null," SUCCESS ",-1)})),_=i((function(){return Object(r["d"])("br",null,null,-1)}));function F(e,t,n,c,o,a){return Object(r["g"])(),Object(r["c"])("div",l,["upload"===e.state?(Object(r["g"])(),Object(r["c"])("div",d,[b,Object(r["d"])("label",p,["none"===e.selectedFileName?(Object(r["g"])(),Object(r["c"])("span",f," SELECT FILE ")):(Object(r["g"])(),Object(r["c"])("span",O,Object(r["k"])(e.selectedFileName),1)),Object(r["d"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return a.setSelectedFileName()})},null,544)]),j,g,Object(r["d"])("button",{onClick:t[1]||(t[1]=function(e){return a.upload()})},"SEND")])):Object(r["b"])("",!0),"uploading"===e.state?(Object(r["g"])(),Object(r["c"])("div",h,[m,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") is sending now. ",1),v,y])):Object(r["b"])("",!0),"error"===e.state?(Object(r["g"])(),Object(r["c"])("div",k,N)):Object(r["b"])("",!0),"success"===e.state?(Object(r["g"])(),Object(r["c"])("div",x,[E,Object(r["e"])(" Your file ("+Object(r["k"])(e.selectedFileName)+") has been sent. ",1),_,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return a.reset()})},"SEND ANOTHER FILE")])):Object(r["b"])("",!0)])}var P=n("1da1"),C=(n("96cf"),n("b0c0"),n("bc3a")),M=n.n(C),U={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"none",state:"upload"}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name},upload:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.state="uploading",e.prev=4,e.next=7,M.a.post("/upload/",t);case 7:n=e.sent,200===n.status?this.state="success":this.state="error",e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log(e.t0),this.state="error";case 15:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.state="upload"}}},D=(n("dc19"),n("6b0d")),R=n.n(D);const T=R()(U,[["render",F],["__scopeId","data-v-f02704c4"]]);var G=T,$=function(e){return Object(r["i"])("data-v-7a43d059"),e=e(),Object(r["h"])(),e},A={class:"login"},H=$((function(){return Object(r["d"])("h1",null,"LOGIN",-1)})),J={key:0,class:"bad-login"},V=$((function(){return Object(r["d"])("br",null,null,-1)})),Y=$((function(){return Object(r["d"])("br",null,null,-1)}));function W(e,t,n,c,o,a){return Object(r["g"])(),Object(r["c"])("div",A,[H,e.badLogin?(Object(r["g"])(),Object(r["c"])("div",J," Incorrect login credentials. Please try again. ")):Object(r["b"])("",!0),Object(r["m"])(Object(r["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["l"],e.username]]),V,Object(r["m"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["l"],e.password]]),Y,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return a.login()})},"Login")])}var q={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},methods:{login:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-sucess",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};n("ee88");const z=R()(q,[["render",W],["__scopeId","data-v-7a43d059"]]);var B=z,K={name:"App",components:{Upload:G,Login:B},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("fa56");const Q=R()(K,[["render",s]]);var X=Q;Object(r["a"])(X).mount("#app")},dc19:function(e,t,n){"use strict";n("0d4d")},ee88:function(e,t,n){"use strict";n("1ab5")},fa56:function(e,t,n){"use strict";n("1a4b")}});
//# sourceMappingURL=app.3317e2eb.js.map