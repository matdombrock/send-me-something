(function(e){function t(t){for(var r,s,i=t[0],o=t[1],u=t[2],b=0,d=[];b<i.length;b++)s=i[b],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&d.push(c[s][0]),c[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==c[o]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=o;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3afe":function(e,t,n){"use strict";n("fa1a")},"3b37":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c={class:"app"},a={key:0},s={key:1},i={class:"top-bar"},o=Object(r["e"])("a",{class:"footer sm",href:"/public/",target:"_blank"},"VIEW MY PUBLIC FILES",-1);function u(e,t,n,u,l,b){var d=Object(r["l"])("Login"),p=Object(r["l"])("Upload"),f=Object(r["l"])("Listing");return Object(r["h"])(),Object(r["d"])("div",c,[e.user.isLoggedIn?(Object(r["h"])(),Object(r["d"])("div",s,[Object(r["e"])("div",i,[Object(r["f"])(" Welcome "+Object(r["m"])(e.user.username)+" | ",1),Object(r["e"])("span",{class:"span-btn",onClick:t[0]||(t[0]=function(e){return b.logout()})},"Logout")]),Object(r["g"])(p,{user:e.user},null,8,["user"])])):(Object(r["h"])(),Object(r["d"])("div",a,[Object(r["g"])(d,{onLoginSuccess:b.login},null,8,["onLoginSuccess"])])),Object(r["g"])(f),o])}var l=function(e){return Object(r["j"])("data-v-02609c6c"),e=e(),Object(r["i"])(),e},b={class:"hello"},d=l((function(){return Object(r["e"])("h1",null,"SEND ME SOMETHING",-1)})),p={class:"warning"},f={class:"file-upload"},h={key:0},O={key:1},j=l((function(){return Object(r["e"])("br",null,null,-1)})),m=l((function(){return Object(r["e"])("h1",null,"SENDING",-1)})),g=l((function(){return Object(r["e"])("br",null,null,-1)})),v=Object(r["f"])(" Please do not close this tab... "),k=l((function(){return Object(r["e"])("h1",null," ¯\\_(ツ)_/¯",-1)})),y=Object(r["f"])(" Something went wrong with your upload... "),w=l((function(){return Object(r["e"])("br",null,null,-1)})),S=Object(r["f"])(" Please refresh the page and try again. "),L=[k,y,w,S],I=l((function(){return Object(r["e"])("h1",null," SUCCESS ",-1)})),_=l((function(){return Object(r["e"])("div",{class:"checkmark"},"✓",-1)})),E=l((function(){return Object(r["e"])("br",null,null,-1)}));function N(e,t,n,c,a,s){return Object(r["h"])(),Object(r["d"])("div",b,[Object(r["p"])(Object(r["e"])("div",null,[d,Object(r["p"])(Object(r["e"])("div",p," Please select a file. ",512),[[r["o"],e.selectErr]]),Object(r["e"])("label",f,[""===e.selectedFileName?(Object(r["h"])(),Object(r["d"])("span",h," SELECT FILE ")):(Object(r["h"])(),Object(r["d"])("span",O,Object(r["m"])(e.selectedFileName),1)),Object(r["e"])("input",{type:"file",ref:"file",style:{display:"none"},onChange:t[0]||(t[0]=function(e){return s.setSelectedFileName()})},null,544)]),j,Object(r["e"])("button",{onClick:t[1]||(t[1]=function(e){return s.upload()})},"SEND")],512),[[r["o"],"upload"===e.screen]]),Object(r["p"])(Object(r["e"])("div",null,[m,Object(r["f"])(" Your file ("+Object(r["m"])(e.selectedFileName)+") is sending now. ",1),g,v],512),[[r["o"],"uploading"===e.screen]]),Object(r["p"])(Object(r["e"])("div",null,L,512),[[r["o"],"error"===e.screen]]),Object(r["p"])(Object(r["e"])("div",null,[I,_,Object(r["f"])(" Your file ("+Object(r["m"])(e.selectedFileName)+") has been sent. ",1),E,Object(r["e"])("button",{onClick:t[2]||(t[2]=function(e){return s.reset()})},"SEND ANOTHER FILE")],512),[[r["o"],"success"===e.screen]])])}var P=n("1da1"),x=(n("96cf"),n("b0c0"),n("bc3a")),F=n.n(x),C={name:"Upload",props:{user:Object},data:function(){return{selectedFileName:"",screen:"upload",selectErr:!1}},methods:{setSelectedFileName:function(){this.selectedFileName=this.$refs.file.files[0].name,this.selectErr=!1},upload:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.$refs.file.files[0]){e.next=3;break}return this.selectErr=!0,e.abrupt("return");case 3:return t=new FormData,t.append("upload",this.$refs.file.files[0]),t.append("token",this.user.token),this.screen="uploading",e.prev=7,e.next=10,F.a.post("/upload/",t);case 10:n=e.sent,200===n.status?this.screen="success":this.screen="error",e.next=18;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0),this.screen="error";case 18:case"end":return e.stop()}}),e,this,[[7,14]])})));function t(){return e.apply(this,arguments)}return t}(),reset:function(){this.screen="upload",this.selectedFileName="",this.$refs.file.value=""}}},D=(n("ce95"),n("6b0d")),U=n.n(D);const M=U()(C,[["render",N],["__scopeId","data-v-02609c6c"]]);var W=M,$={class:"login"},A=Object(r["e"])("h1",null,"LOGIN",-1),B={key:0,class:"warning"},R=Object(r["e"])("br",null,null,-1),T=Object(r["e"])("br",null,null,-1);function G(e,t,n,c,a,s){return Object(r["h"])(),Object(r["d"])("div",$,[A,e.badLogin?(Object(r["h"])(),Object(r["d"])("div",B," Incorrect login credentials. Please try again. ")):Object(r["c"])("",!0),Object(r["p"])(Object(r["e"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.username=t}),type:"text",placeholder:"username"},null,512),[[r["n"],e.username]]),R,Object(r["p"])(Object(r["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.password=t}),type:"password",placeholder:"password"},null,512),[[r["n"],e.password]]),T,Object(r["e"])("button",{onClick:t[2]||(t[2]=function(e){return s.login()})},"LOGIN")])}var K={name:"Login",data:function(){return{username:"admin",password:"admin",badLogin:!1}},mounted:function(){var e=localStorage.getItem("token"),t=localStorage.getItem("username");if(e&&t){var n={token:e,username:t};this.$emit("login-success",n),console.log("Found existing login token.")}},methods:{login:function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.a.post("/login/",{username:this.username,password:this.password});case 3:t=e.sent,console.log(t),localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),n={token:t.data.token,username:t.data.username},this.$emit("login-success",n),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),this.badLogin=!0;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));function t(){return e.apply(this,arguments)}return t}()}};const V=U()(K,[["render",G]]);var Y=V,H=function(e){return Object(r["j"])("data-v-0fdfdb68"),e=e(),Object(r["i"])(),e},J={class:"listing"},q=H((function(){return Object(r["e"])("br",null,null,-1)})),z=["onClick"],Q=["href"],X=H((function(){return Object(r["e"])("br",null,null,-1)}));function Z(e,t,n,c,a,s){return Object(r["h"])(),Object(r["d"])("div",J,[Object(r["e"])("span",{class:"listing-item",onClick:t[0]||(t[0]=function(e){return s.back()})},"🗀 .."),q,(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(e.data.children,(function(e,t){return Object(r["h"])(),Object(r["d"])("div",{class:"listing-item",key:t},[e.children?(Object(r["h"])(),Object(r["d"])("span",{key:0,onClick:function(t){return s.selectDir(e.path)}},"🗀 "+Object(r["m"])(e.name),9,z)):(Object(r["h"])(),Object(r["d"])("a",{key:1,href:e.path,target:"_blank"},Object(r["m"])(e.name),9,Q)),X])})),128))])}var ee=n("b85c"),te=(n("ac1f"),n("00b4"),{name:"App",metaInfo:{title:"About Us"},components:{},mounted:function(){this.data=this.test},data:function(){return{test:{path:"/public/",name:"public",children:[{path:"/public/music",name:"music",children:[{path:"/public/music/BoardOfWashington.wav",name:"BoardOfWashington.wav"},{path:"/public/music/KeyPadDemo.wav",name:"KeyPadDemo.wav"},{path:"/public/music/KeyPadWBeatDemo.wav",name:"KeyPadWBeatDemo.wav"},{path:"/public/music/side_b_urban_beaches.aif",name:"side_b_urban_beaches.aif"}]},{path:"/public/seaplane2.png",name:"seaplane2.png"},{path:"/public/selectseaplane.png",name:"selectseaplane.png"}]},target:[],data:[]}},methods:{selectDir:function(e){this.target.push(e),this.refreshListing()},refreshListing:function(){var e,t=this.test,n=Object(ee["a"])(this.target);try{for(n.s();!(e=n.n()).done;){var r,c=e.value,a=Object(ee["a"])(t.children);try{for(a.s();!(r=a.n()).done;){var s=r.value;s.path===c&&(t=s)}}catch(i){a.e(i)}finally{a.f()}}}catch(i){n.e(i)}finally{n.f()}t.children&&(this.data=t)},back:function(){this.target.length>1?this.target=this.target.pop():this.target=[],this.refreshListing()}}});n("3afe");const ne=U()(te,[["render",Z],["__scopeId","data-v-0fdfdb68"]]);var re=ne,ce={name:"App",metaInfo:{title:"About Us"},components:{Upload:W,Login:Y,Listing:re},data:function(){return{user:{isLoggedIn:!1,token:""}}},methods:{login:function(e){this.user.isLoggedIn=!0,this.user.token=e.token,this.user.username=e.username},logout:function(){this.user.isLoggedIn=!1,this.user.token="",this.user.username="",localStorage.removeItem("token"),localStorage.removeItem("username")}}};n("833e");const ae=U()(ce,[["render",u]]);var se=ae;Object(r["b"])(se).mount("#app")},"5fe5":function(e,t,n){},"833e":function(e,t,n){"use strict";n("3b37")},ce95:function(e,t,n){"use strict";n("5fe5")},fa1a:function(e,t,n){}});
//# sourceMappingURL=app.80ee6dd7.js.map