(function(e){function t(t){for(var a,s,i=t[0],o=t[1],u=t[2],b=0,p=[];b<i.length;b++)s=i[b],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);l&&l(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,i=1;i<n.length;i++){var o=n[i];0!==r[o]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},c=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"45dc":function(e,t,n){"use strict";n("89d3")},"50fd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"app"},c={key:0},s={key:1},i={class:"top-bar"},o=Object(a["e"])("a",{class:"footer sm",href:"/public/",target:"_blank"},"VIEW MY PUBLIC FILES",-1);function u(e,t,n,u,l,b){var p=Object(a["l"])("Login"),d=Object(a["l"])("Upload"),f=Object(a["l"])("Listing");return Object(a["h"])(),Object(a["d"])("div",r,[e.user.isLoggedIn?(Object(a["h"])(),Object(a["d"])("div",s,[Object(a["e"])("div",i,[Object(a["f"])(" Welcome "+Object(a["m"])(e.user.username)+" | ",1),Object(a["e"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return b.logout()})},"Logout")]),Object(a["g"])(d,{user:e.user},null,8,["user"])])):(Object(a["h"])(),Object(a["d"])("div",c,[Object(a["g"])(p,{onLoginSuccess:b.login},null,8,["onLoginSuccess"])])),Object(a["g"])(f),o])}var l=function(e){return Object(a["j"])("data-v-02609c6c"),e=e(),Object(a["i"])(),e},b={class:"hello"},p=l((function(){return Object(a["e"])("h1",null,"SEND ME SOMETHING",-1)})),d={class:"warning"},f={class:"file-upload"},h={key:0},m={key:1},O=l((function(){return Object(a["e"])("br",null,null,-1)})),j=l((function(){return Object(a["e"])("h1",null,"SENDING",-1)})),g=l((function(){return Object(a["e"])("br",null,null,-1)})),v=Object(a["f"])(" Please do not close this tab... "),y=l((function(){return Object(a["e"])("h1",null," ¯\\_(ツ)_/¯",-1)})),k=Object(a["f"])(" Something went wrong with your upload... "),w=l((function(){return Object(a["e"])("br",null,null,-1)})),S=Object(a["f"])(" Please refresh the page and try again. "),_=[y,k,w,S],L=l((function(){return Object(a["e"])("h1",null," SUCCESS ",-1)})),I=l((function(){return Object(a["e"])("div",{class:"checkmark"},"✓",-1)})),P=l((function(){return Object(a["e"])("br",null,null,-1)}));function E(e,t,n,r,c,s){return Object(a["h"])(),Object(a["d"])("div",b,[Object(a["p"])(Object(a["e"])("div",null,[p,Object(a["p"])(Object(a["e"])("div",d," Please select a file. ",512),[[a["o"],e.selectErr]]),Object(a["e"])("label",f,[""===e.selectedFileName?(Object(a["h"])(),Object(a["d"])("span",h," SELECT FILE ")):(Object(a["h"])(),Object(a["d"])("span",m,Object(a["m"])(e.selectedFileName),1)),Object(a["e"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return s.setSelectedFileName()})},null,544)]),O,Object(a["e"])("button",{onClick:t[1]||(t[1]=function(e){return s.upload()})},"SEND")],512),[[a["o"],"upload"===e.screen]]),Object(a["p"])(Object(a["e"])("div",null,[j,Object(a["f"])(" Your file ("+Object(a["m"])(e.selectedFileName)+") is sending now. ",1),g,v],512),[[a["o"],"uploading"===e.screen]]),Object(a["p"])(Object(a["e"])("div",null,_,512),[[a["o"],"error"===e.screen]]),Object(a["p"])(Object(a["e"])("div",null,[L,I,Object(a["f"])(" Your file ("+Object(a["m"])(e.selectedFileName)+") has been sent. ",1),P,Object(a["e"])("button",{onClick:t[2]||(t[2]=function(e){return s.reset()})},"SEND ANOTHER FILE")],512),[[a["o"],"success"===e.screen]])])}var N=n("1da1"),x=(n("96cf"),n("b0c0"),n("bc3a")),D=n.n(x),F={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"",screen:"upload",selectErr:!1}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name,this.selectErr=!1},upload:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.file.files[0]){e.next=3;break}return this.selectErr=!0,e.abrupt("return");case 3:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.screen="uploading",e.prev=7,e.next=10,D.a.post("/upload/",t);case 10:n=e.sent,200===n.status?this.screen="success":this.screen="error",e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0),this.screen="error";case 18:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.screen="upload",this.selectedFileName="",this.$refs.file.value=""}}},C=(n("ce95"),n("6b0d")),W=n.n(C);const B=W()(F,[["render",E],["__scopeId","data-v-02609c6c"]]);var U=B,K={class:"login"},M=Object(a["e"])("h1",null,"LOGIN",-1),$={key:0,class:"warning"},A=Object(a["e"])("br",null,null,-1),R=Object(a["e"])("br",null,null,-1);function T(e,t,n,r,c,s){return Object(a["h"])(),Object(a["d"])("div",K,[M,e.badLogin?(Object(a["h"])(),Object(a["d"])("div",$," Incorrect login credentials. Please try again. ")):Object(a["c"])("",!0),Object(a["p"])(Object(a["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[a["n"],e.username]]),A,Object(a["p"])(Object(a["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[a["n"],e.password]]),R,Object(a["e"])("button",{onClick:t[2]||(t[2]=function(e){return s.login()})},"LOGIN")])}var G={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},mounted:function(){var e=localStorage.getItem("token"),t=localStorage.getItem("username");if(e&&t){var n={token:e,username:t};this.$emit("login-success",n),console.log("Found existing login token.")}},methods:{login:function(){var e=Object(N["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-success",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};const V=W()(G,[["render",T]]);var Y=V,H=function(e){return Object(a["j"])("data-v-c54f9e3a"),e=e(),Object(a["i"])(),e},J={class:"listing"},q=["onClick"],z=["href"],Q=H((function(){return Object(a["e"])("br",null,null,-1)}));function X(e,t,n,r,c,s){return Object(a["h"])(),Object(a["d"])("div",J,[Object(a["e"])("span",{class:"listing-item",onClick:t[0]||(t[0]=function(e){return s.back()})},"🗀 .."),(Object(a["h"])(!0),Object(a["d"])(a["a"],null,Object(a["k"])(e.data.children,(function(e,t){return Object(a["h"])(),Object(a["d"])("div",{class:"listing-item",key:t},[e.children?(Object(a["h"])(),Object(a["d"])("span",{key:0,onClick:function(e){return s.selectDir(t)}},"🗀 "+Object(a["m"])(e.name),9,q)):(Object(a["h"])(),Object(a["d"])("a",{key:1,href:e.path,target:"_blank"},Object(a["m"])(e.name),9,z)),Q])})),128))])}var Z=n("b85c"),ee=(n("ac1f"),n("00b4"),{name:"App",metaInfo:{title:"About Us"},components:{},mounted:function(){this.data=this.test},data:function(){return{test:{path:"/public/",name:"public",children:[{path:"/public/music",name:"music",children:[{path:"/public/music/BoardOfWashington.wav",name:"BoardOfWashington.wav"},{path:"/public/music/KeyPadDemo.wav",name:"KeyPadDemo.wav"},{path:"/public/music/KeyPadWBeatDemo.wav",name:"KeyPadWBeatDemo.wav"},{path:"/public/music/side_b_urban_beaches.aif",name:"side_b_urban_beaches.aif"}]},{path:"/public/seaplane2.png",name:"seaplane2.png"},{path:"/public/selectseaplane.png",name:"selectseaplane.png"}]},target:[],data:[]}},methods:{selectDir:function(e){this.target.push(e),this.refreshListing()},refreshListing:function(){var e,t=this.test,n=Object(Z["a"])(this.target);try{for(n.s();!(e=n.n()).done;){var a=e.value;t=t.children[a]}}catch(r){n.e(r)}finally{n.f()}t.children&&(this.data=t)},back:function(){this.target.length>1?this.target=this.target.pop():this.target=[],this.refreshListing()}}});n("73e3");const te=W()(ee,[["render",X],["__scopeId","data-v-c54f9e3a"]]);var ne=te,ae={name:"App",metaInfo:{title:"About Us"},components:{Upload:U,Login:Y,Listing:ne},data:function(){return{user:{isLoggedIn:!1,token:""},test:{path:"/public/",name:"public",children:[{path:"/public/music",name:"music",children:[{path:"/public/music/BoardOfWashington.wav",name:"BoardOfWashington.wav"},{path:"/public/music/KeyPadDemo.wav",name:"KeyPadDemo.wav"},{path:"/public/music/KeyPadWBeatDemo.wav",name:"KeyPadWBeatDemo.wav"},{path:"/public/music/side_b_urban_beaches.aif",name:"side_b_urban_beaches.aif"}]},{path:"/public/seaplane2.png",name:"seaplane2.png"},{path:"/public/selectseaplane.png",name:"selectseaplane.png"}]}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("45dc");const re=W()(ae,[["render",u]]);var ce=re;Object(a["b"])(ce).mount("#app")},"5fe5":function(e,t,n){},"73e3":function(e,t,n){"use strict";n("50fd")},"89d3":function(e,t,n){},ce95:function(e,t,n){"use strict";n("5fe5")}});
//# sourceMappingURL=app.1f3ca3f7.js.map