(function(t){function e(e){for(var n,o,s=e[0],l=e[1],i=e[2],b=0,d=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return c.push.apply(c,i||[]),r()}function r(){for(var t,e=0;e<c.length;e++){for(var r=c[e],n=!0,s=1;s<r.length;s++){var l=r[s];0!==a[l]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},c=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var i=0;i<s.length;i++)e(s[i]);var u=l;c.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"537b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),a={class:"container-fluid"},c={class:"row justify-content-center"},o={class:"col-md-10 col-lg-7"};function s(t,e,r,s,l,i){var u=Object(n["y"])("my-header"),b=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["f"])(n["a"],null,[Object(n["i"])(u),Object(n["g"])("div",a,[Object(n["g"])("div",c,[Object(n["g"])("div",o,[Object(n["i"])(b)])])])],64)}var l=function(t){return Object(n["u"])("data-v-9ae3898e"),t=t(),Object(n["s"])(),t},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(n["h"])("Ride Share"),d=l((function(){return Object(n["g"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["g"])("span",{class:"navbar-toggler-icon"})],-1)})),O={class:"collapse navbar-collapse",id:"navbarNav"},j={class:"navbar-nav ms-auto"},p={class:"nav-item"},f=Object(n["h"])("Drivers"),g={class:"nav-item"},m=Object(n["h"])("My Account"),v={class:"nav-item"},h=l((function(){return Object(n["g"])("button",{class:"btn btn-warning text-dark"}," Login ",-1)})),y={class:"nav-item"},w=l((function(){return Object(n["g"])("button",{class:"btn btn-outline-warning text-dark"}," Sign Up ",-1)})),k=l((function(){return Object(n["g"])("li",{class:"nav-item"},[Object(n["g"])("button",{class:"btn btn-warning text-dark"},"Logout")],-1)}));function E(t,e){var r=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("nav",i,[Object(n["g"])("div",u,[Object(n["i"])(r,{class:"navbar-brand",to:"/"},{default:Object(n["E"])((function(){return[b]})),_:1}),d,Object(n["g"])("div",O,[Object(n["g"])("ul",j,[Object(n["g"])("li",p,[Object(n["i"])(r,{class:"nav-link active","aria-current":"page",to:"/drivers"},{default:Object(n["E"])((function(){return[f]})),_:1})]),Object(n["g"])("li",g,[Object(n["i"])(r,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(n["E"])((function(){return[m]})),_:1})]),Object(n["g"])("li",v,[Object(n["i"])(r,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(n["E"])((function(){return[h]})),_:1})]),Object(n["g"])("li",y,[Object(n["i"])(r,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(n["E"])((function(){return[w]})),_:1})]),k])])])])}r("7503");var x=r("6b0d"),A=r.n(x);const F={},S=A()(F,[["render",E],["__scopeId","data-v-9ae3898e"]]);var D=S,L={name:"App",components:{"my-header":D},created:function(){this.$store.dispatch("getDrivers")}};r("fc16");const P=A()(L,[["render",s]]);var _=P,N=r("bc3a"),U=r.n(N),$=r("6c02"),T=Object(n["g"])("h1",null,"Home",-1),M=[T];function V(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,M)}var C={};const I=A()(C,[["render",V]]);var R=I,q=Object(n["g"])("h1",null,"Login",-1),B={key:0,class:"alert alert-success"},K={class:"mb-3"},z=Object(n["g"])("label",{for:"email-input",class:"form-label"},"Password",-1),G={class:"mb-3"},J=Object(n["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),H=Object(n["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,[q,this.$route.query.signupsuccess?(Object(n["r"])(),Object(n["f"])("div",B," Thanks for signing up, please log in now. ")):Object(n["e"])("",!0),Object(n["g"])("form",{onSubmit:e[2]||(e[2]=Object(n["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",K,[z,Object(n["F"])(Object(n["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.email=t})},null,512),[[n["C"],c.email]])]),Object(n["g"])("div",G,[J,Object(n["F"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.password=t})},null,512),[[n["C"],c.password]])]),H,c.credentialsError?(Object(n["r"])(),Object(n["f"])("p",Q," Invalid Credentials ")):Object(n["e"])("",!0),c.loginError?(Object(n["r"])(),Object(n["f"])("p",W," Could not log you in, please try again later ")):Object(n["e"])("",!0)],32)])}r("ac1f"),r("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var t=this,e={Email:this.email,Password:this.password};U.a.post("/customers/login",e).then((function(e){t.$store.commit("storeTokenInApp",e.data.token),t.$store.commit("storeUserInApp",e.data.user),t.$router.replace("/account")})).catch((function(e){console.log("error in /contacts/login",e),401===e.response.status?t.credentialsError=!0:t.loginError=!0}))}}};const Z=A()(Y,[["render",X]]);var tt=Z,et={class:"card"},rt={class:"card-body"},nt={class:"text-primary"},at=Object(n["g"])("br",null,null,-1),ct=Object(n["h"])("Vehicle Type: "),ot=Object(n["g"])("br",null,null,-1),st=Object(n["g"])("br",null,null,-1),lt=Object(n["g"])("button",{class:"btn btn-success"},"Add a Ride",-1),it=Object(n["g"])("button",{class:"btn btn-outline-success"},"Sign In to Add a Ride",-1);function ut(t,e,r,a,c,o){var s=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("div",null,[Object(n["g"])("div",et,[Object(n["g"])("div",rt,[Object(n["g"])("h2",nt,'"'+Object(n["A"])(o.driver.DriverFirstName)+" "+Object(n["A"])(o.driver.DriverLastName)+'"',1),at,Object(n["g"])("p",null,[ct,ot,Object(n["g"])("strong",null,Object(n["A"])(o.driver.VehicleType),1)])])]),st,o.auth?(Object(n["r"])(),Object(n["d"])(s,{key:0,to:"/drivers/".concat(this.$route.params.pk,"/ride")},{default:Object(n["E"])((function(){return[lt]})),_:1},8,["to"])):(Object(n["r"])(),Object(n["d"])(s,{key:1,to:"/login"},{default:Object(n["E"])((function(){return[it]})),_:1}))])}r("7db0"),r("d3b7");var bt={computed:{driver:function(){var t=this,e=this.$store.state.drivers,r=e.find((function(e){return e.DriverPK==t.$route.params.pk}));return r},auth:function(){return this.$store.state.token}}};const dt=A()(bt,[["render",ut]]);var Ot=dt,jt=Object(n["g"])("h1",null,"Drivers",-1),pt=Object(n["g"])("hr",null,null,-1),ft={class:"table"},gt=Object(n["g"])("thead",null,[Object(n["g"])("tr",null,[Object(n["g"])("th",null,"Driver First Name"),Object(n["g"])("th",null,"Driver Last Name"),Object(n["g"])("th",null,"Vehicle Type"),Object(n["g"])("th")])],-1),mt=Object(n["g"])("button",{class:"btn btn-primary"},"Details",-1),vt=Object(n["g"])("tbody",null,null,-1);function ht(t,e,r,a,c,o){var s=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["f"])("div",null,[jt,pt,Object(n["g"])("table",ft,[gt,Object(n["g"])("tbody",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(o.theDrivers,(function(t){return Object(n["r"])(),Object(n["f"])("tr",{key:t.DriverPK},[Object(n["g"])("th",null,Object(n["A"])(t.DriverFirstName),1),Object(n["g"])("th",null,Object(n["A"])(t.DriverLastName),1),Object(n["g"])("th",null,Object(n["A"])(t.VehicleType),1),Object(n["g"])("th",null,[Object(n["i"])(s,{to:"/drivers/".concat(t.DriverPK)},{default:Object(n["E"])((function(){return[mt]})),_:2},1032,["to"])])])})),128))]),vt])])}var yt={computed:{theDrivers:function(){return this.$store.state.drivers}}};const wt=A()(yt,[["render",ht]]);var kt=wt,Et=Object(n["g"])("h1",null,"Not found",-1),xt=Object(n["g"])("h4",null,"Sorry, this page can't be found.",-1),At=[Et,xt];function Ft(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,At)}var St={};const Dt=A()(St,[["render",Ft]]);var Lt=Dt,Pt=Object(n["g"])("h1",null,"Log a Ride",-1),_t=[Pt];function Nt(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,_t)}var Ut={};const $t=A()(Ut,[["render",Nt]]);var Tt=$t,Mt=Object(n["g"])("h1",null,"Sign Up",-1),Vt={class:"mb-3"},Ct=Object(n["g"])("label",{for:"fname-input",class:"form-label"},"First name",-1),It={class:"mb-3"},Rt=Object(n["g"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),qt={class:"mb-3"},Bt=Object(n["g"])("label",{for:"email-input",class:"form-label"},"Email",-1),Kt={key:0,class:"text-danger"},zt={class:"mb-3"},Gt=Object(n["g"])("label",{for:"password-input",class:"form-label"},"Password",-1),Jt=Object(n["g"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Ht={id:"error-signup",class:"text-danger"};function Qt(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,[Mt,Object(n["g"])("form",{onSubmit:e[4]||(e[4]=Object(n["G"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",Vt,[Ct,Object(n["F"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":e[0]||(e[0]=function(t){return c.nameFirst=t})},null,512),[[n["C"],c.nameFirst]])]),Object(n["g"])("div",It,[Rt,Object(n["F"])(Object(n["g"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":e[1]||(e[1]=function(t){return c.nameLast=t})},null,512),[[n["C"],c.nameLast]])]),Object(n["g"])("div",qt,[Bt,Object(n["F"])(Object(n["g"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":e[2]||(e[2]=function(t){return c.email=t})},null,512),[[n["C"],c.email]]),c.dupEmail?(Object(n["r"])(),Object(n["f"])("small",Kt,"Please choose a different email")):Object(n["e"])("",!0)]),Object(n["g"])("div",zt,[Gt,Object(n["F"])(Object(n["g"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":e[3]||(e[3]=function(t){return c.password=t})},null,512),[[n["C"],c.password]])]),Jt,Object(n["g"])("p",Ht,Object(n["A"])(c.errorMessage),1)],32)])}var Wt={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var t=this,e={FirstName:this.nameFirst,LastName:this.nameLast,Email:this.email,Password:this.password};U.a.post("/customers",e).then((function(e){console.log("the response",e),t.$router.replace("/login?signupsuccess=true")})).catch((function(e){409===e.response.status?t.dupEmail=!0:t.errorMessage="cannot sign you up, please try again later"}))}}};const Xt=A()(Wt,[["render",Qt]]);var Yt=Xt,Zt=Object(n["g"])("h1",null,"Account",-1),te=Object(n["g"])("hr",null,null,-1),ee={key:0,class:"text-danger"},re={key:1,class:"table"},ne=Object(n["g"])("thead",null,[Object(n["g"])("th",null,"Driver ID"),Object(n["g"])("th",null,"Location From"),Object(n["g"])("th",null,"Location To")],-1);function ae(t,e,r,a,c,o){return Object(n["r"])(),Object(n["f"])("div",null,[Zt,te,Object(n["g"])("h3",null,Object(n["A"])(o.firstName)+"'s Rides",1),c.accountError?(Object(n["r"])(),Object(n["f"])("p",ee," Cannot get your account information, please try again later. ")):Object(n["e"])("",!0),c.ridesByUser?(Object(n["r"])(),Object(n["f"])("table",re,[ne,Object(n["g"])("tbody",null,[(Object(n["r"])(!0),Object(n["f"])(n["a"],null,Object(n["x"])(c.ridesByUser,(function(t){return Object(n["r"])(),Object(n["f"])("tr",{key:t.RidePK},[Object(n["g"])("th",null,Object(n["A"])(t.DriverFK),1),Object(n["g"])("th",null,Object(n["A"])(t.LocationTo),1),Object(n["g"])("th",null,Object(n["A"])(t.LocationFrom),1)])})),128))])])):Object(n["e"])("",!0)])}var ce={data:function(){return{ridesByUser:null,accountError:!1}},computed:{firstName:function(){return console.log(this.$store.state),this.$store.state.user.FirstName}},created:function(){var t=this;U.a.get("/rides/me",{headers:{Authorization:"Bearer ".concat(this.$store.state.token)}}).then((function(e){console.log("here is the response",e),t.ridesByUser=e.data})).catch((function(){t.accountError=!0}))}};const oe=A()(ce,[["render",ae]]);var se=oe,le=Object($["a"])({history:Object($["b"])(),routes:[{path:"/",component:R},{path:"/account",component:se},{path:"/login",component:tt},{path:"/drivers",component:kt},{path:"/drivers/:pk",component:Ot,children:[{path:"ride",component:Tt}]},{path:"/signup",component:Yt},{path:"/:invalidroute(.*)",component:Lt}]}),ie=le,ue=r("5502"),be=Object(ue["a"])({state:{token:null,user:null,drivers:[]},mutations:{storeTokenInApp:function(t,e){t.token=e},storeUserInApp:function(t,e){t.user=e},storeMovies:function(t,e){t.drivers=e}},actions:{getDrivers:function(t){var e=t.commit;U.a.get("/drivers").then((function(t){console.log("Response in /drivers",t),e("storeMovies",t.data)}))}}});U.a.defaults.baseURL="https://cis410-rideshare-api.azurewebsites.net/";var de=Object(n["c"])(_);de.use(ie),de.use(be),de.mount("#app")},7503:function(t,e,r){"use strict";r("537b")},af45:function(t,e,r){},fc16:function(t,e,r){"use strict";r("af45")}});
//# sourceMappingURL=app.b1ff8118.js.map