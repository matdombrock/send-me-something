(function(e){function t(t){for(var r,u,a=t[0],s=t[1],i=t[2],d=0,b=[];d<a.length;d++)u=a[d],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&b.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var l=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1152:function(e,t,n){"use strict";n("d799")},"1d0b":function(e,t,n){"use strict";n("8087")},5194:function(e,t,n){"use strict";n("9229")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"app"},c={key:0},u={key:1};function a(e,t,n,a,s,i){var l=Object(r["j"])("Login"),d=Object(r["j"])("Upload");return Object(r["g"])(),Object(r["c"])("div",o,[e.user.isLoggedIn?(Object(r["g"])(),Object(r["c"])("div",u,[Object(r["f"])(d,{user:e.user},null,8,["user"])])):(Object(r["g"])(),Object(r["c"])("div",c,[Object(r["f"])(l,{onLoginSucess:i.login},null,8,["onLoginSucess"])]))])}var s=function(e){return Object(r["i"])("data-v-dcc4fdfe"),e=e(),Object(r["h"])(),e},i={class:"hello"},l={key:0},d=s((function(){return Object(r["d"])("h1",null,"SEND ME SOMETHING",-1)})),b={type:"file",ref:"file"},p=s((function(){return Object(r["d"])("br",null,null,-1)})),f=s((function(){return Object(r["d"])("br",null,null,-1)})),O={key:1},j=s((function(){return Object(r["d"])("h1",null,"SENDING",-1)})),g=Object(r["e"])(" Please do not close this tab... "),h=[j,g],v={key:2},m=s((function(){return Object(r["d"])("h1",null," ¯\\_(ツ)_/¯",-1)})),y=Object(r["e"])(" Something went wrong with your upload... "),k=s((function(){return Object(r["d"])("br",null,null,-1)})),w=Object(r["e"])(" Please refresh the page and try again. "),S=[m,y,k,w],L={key:3},x=s((function(){return Object(r["d"])("h1",null," SUCCESS ",-1)})),I=Object(r["e"])(" Your file has been sent. "),_=s((function(){return Object(r["d"])("br",null,null,-1)})),E=s((function(){return Object(r["d"])("button",null,"SEND ANOTHER FILE",-1)})),P=[x,I,_,E];function N(e,t,n,o,c,u){return Object(r["g"])(),Object(r["c"])("div",i,["upload"===e.state?(Object(r["g"])(),Object(r["c"])("div",l,[d,Object(r["d"])("input",b,null,512),p,f,Object(r["d"])("button",{onClick:t[0]||(t[0]=function(e){return u.upload()})},"SEND")])):Object(r["b"])("",!0),"uploading"===e.state?(Object(r["g"])(),Object(r["c"])("div",O,h)):Object(r["b"])("",!0),"error"===e.state?(Object(r["g"])(),Object(r["c"])("div",v,S)):Object(r["b"])("",!0),"success"===e.state?(Object(r["g"])(),Object(r["c"])("div",L,P)):Object(r["b"])("",!0)])}var U=n("1da1"),M=(n("96cf"),n("bc3a")),D=n.n(M),R={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"none",state:"upload"}},methods:{upload:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.state="uploading",e.prev=4,e.next=7,D.a.post("/upload/",t);case 7:n=e.sent,200===n.status?(alert("Upload Success"),this.state="success"):(alert("Something bad happened! Error: A"),this.state="error"),e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](4),alert("Something bad happened! Error: B"),console.log(e.t0),this.state="error";case 16:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}()}},C=(n("1d0b"),n("6b0d")),T=n.n(C);const A=T()(R,[["render",N],["__scopeId","data-v-dcc4fdfe"]]);var F=A,G=function(e){return Object(r["i"])("data-v-3a984998"),e=e(),Object(r["h"])(),e},H={class:"login"},J=G((function(){return Object(r["d"])("h1",null,"LOGIN",-1)})),V={key:0,class:"bad-login"},$=G((function(){return Object(r["d"])("br",null,null,-1)})),B=G((function(){return Object(r["d"])("br",null,null,-1)}));function Y(e,t,n,o,c,u){return Object(r["g"])(),Object(r["c"])("div",H,[J,e.badLogin?(Object(r["g"])(),Object(r["c"])("div",V," Incorrect login credentials. Please try again. ")):Object(r["b"])("",!0),Object(r["l"])(Object(r["d"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["k"],e.username]]),$,Object(r["l"])(Object(r["d"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["k"],e.password]]),B,Object(r["d"])("button",{onClick:t[2]||(t[2]=function(e){return u.login()})},"Login")])}var q={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},methods:{login:function(){var e=Object(U["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-sucess",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};n("1152");const z=T()(q,[["render",Y],["__scopeId","data-v-3a984998"]]);var K=z,Q={name:"App",components:{Upload:F,Login:K},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username}}};n("5194");const W=T()(Q,[["render",a]]);var X=W;Object(r["a"])(X).mount("#app")},8087:function(e,t,n){},9229:function(e,t,n){},d799:function(e,t,n){}});
//# sourceMappingURL=app.28af21f8.js.map