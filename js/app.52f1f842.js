(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/ssnelhest/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("BirthdaySex"),n("SSNSection")],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns is-multiline is-1-mobile is-6-desktop is-8-widescreen mt-4 mb-4"},[n("div",{staticClass:"container"},[n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.dateOfBirth,expression:"dateOfBirth"}],staticClass:"input is-large is-primary",attrs:{type:"date"},domProps:{value:e.dateOfBirth},on:{input:function(t){t.target.composing||(e.dateOfBirth=t.target.value)}}})])]),n("div",{staticClass:"control"},[n("label",{staticClass:"radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],staticClass:" is-large",attrs:{type:"radio",name:"sex",value:"male"},domProps:{checked:e._q(e.sex,"male")},on:{change:function(t){e.sex="male"}}}),e._v(" Male ")]),n("label",{staticClass:"radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.sex,expression:"sex"}],staticClass:" is-large",attrs:{type:"radio",name:"sex",value:"female"},domProps:{checked:e._q(e.sex,"female")},on:{change:function(t){e.sex="female"}}}),e._v(" Female ")])])])])},o=[],c={name:"BirthdaySex",computed:{sex:{get:function(){return this.$store.state.sex},set:function(e){this.$store.commit("changeSex",e)}},dateOfBirth:{get:function(){return this.$store.state.dateOfBirth},set:function(e){this.$store.commit("setDate",e)}}},methods:{}},u=c,l=n("2877"),d=Object(l["a"])(u,i,o,!1,null,"06d84da3",null),f=d.exports,p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar has-background-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[n("div",{staticClass:"navbar-brand has-text-white"},[n("a",{staticClass:"navbar-item",attrs:{href:"https://bulma.io"}},[n("h1",{staticClass:"title has-text-white"},[e._v("SSNELHEST")])])])])}],m={name:"Header"},v=m,b=Object(l["a"])(v,p,h,!1,null,"116219f4",null),g=b.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"columns is-multiline is-1-mobile is-6-desktop is-8-widescreen is-vcentered is-centered"},e._l(e.countries,(function(e){return n("SSNTile",{key:e,attrs:{country:e}})})),1)},w=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"column tile is-parent is-2 has-background-info ml-4 has-text-white"},[n("article",{staticClass:"tile is-child"},[n("p",{staticClass:"title has-text-white"},[e._v(e._s(e.country.country))]),n("div",{staticClass:"content "},[n("p",[e._v(e._s(e.country.state))]),n("h2",[e._v(e._s(e.ssn))]),n("div",{staticClass:"tags has-addons"},[n("span",{staticClass:"tag is-medium"},[e._v("Copy by pressing")]),n("span",{staticClass:"tag is-medium is-primary"},[n("b",[e._v(e._s(e.country.copy))])])])])])])},S=[],O=(n("d3b7"),n("ac1f"),n("3ca3"),n("1276"),n("10d1"),n("ddb0"),n("d4ec")),_=n("bee2"),j=n("5364"),k=n("9bd1"),C=n("b3c7"),N=n("0623"),B=n("6e1a"),$=n.n(B);n("99af"),n("d81d"),n("13d5"),n("25f0");function M(e){var t=e.toString();return 1===t.length?"0".concat(t):t}function P(e){var t=[1,6,3,7,9,10,5,8,4,2],n=e.split("").map((function(e){return parseInt(e)})),r=n.reduce((function(e,n,r){return n*t[r]+e}));return(1101-r)%11}function E(){return"1".concat(Math.floor(899*Math.random()+100))}function T(e,t,n){var r="",a=M(e),s=M(t),i=n.toString().substring(2),o="".concat(a).concat(s).concat(i),c="00";while(2===c.toString().length)r=o+E(),c=P(r);return r+=c,r="".concat(r.substring(0,6),"-").concat(r.substring(6)),r}var F=new WeakMap,A=new WeakMap,D=new WeakMap,W=function(){function e(t,n){Object(O["a"])(this,e),F.set(this,{writable:!0,value:void 0}),A.set(this,{writable:!0,value:void 0}),D.set(this,{writable:!0,value:void 0}),Object(k["a"])(this,F,n),Object(k["a"])(this,A,t.split("-"))}return Object(_["a"])(e,[{key:"sex",get:function(){return Object(j["a"])(this,F)}},{key:"birthdate",get:function(){return Object(j["a"])(this,A)}},{key:"year",get:function(){return parseInt(Object(j["a"])(this,A)[0],10)}},{key:"month",get:function(){return parseInt(Object(j["a"])(this,A)[1],10)}},{key:"day",get:function(){return parseInt(Object(j["a"])(this,A)[2],10)}},{key:"ssn",set:function(e){Object(k["a"])(this,D,e)},get:function(){return Object(j["a"])(this,D)}}]),e}();function I(e,t,n){switch(e.country){case"sweden":return $.a.generateSSNWithParameters(new Date(n),t);case"finland":var r=new W(n,t);return C["FinnishSSN"].createWithAge(2020-r.year);case"estonia":var a=new W(n,t);return a.ssn=N["generate"]({gender:a.sex,birthDay:a.day,birthMonth:a.month,birthYear:a.year}),a.ssn;case"latvia":var s=new W(n,t);return T(s.day,s.month,s.year);default:return C["FinnishSSN"].createWithAge(20)}}var q={name:"SSNTile",props:["country"],created:function(){var e=this;navigator.permissions.query({name:"clipboard-write"}).then((function(t){"granted"!==t.state&&"prompt"!==t.state||window.addEventListener("keydown",(function(t){t.key===e.country.copy&&navigator.clipboard.writeText(e.ssn)}))}))},computed:{sex:{get:function(){return this.$store.state.sex}},dateOfBirth:{get:function(){return this.$store.state.dateOfBirth}},ssn:{get:function(){return I(this.country,this.sex,this.dateOfBirth)}}}},H=q,Y=(n("dbf4"),Object(l["a"])(H,x,S,!1,null,"7d61721b",null)),J=Y.exports,L={name:"SSNSection",components:{SSNTile:J},data:function(){var e=[{country:"sweden",comment:"",copy:"s"},{country:"finland",comment:"Does not take into account date of birth",copy:"f"},{country:"estonia",comment:"",copy:"e"},{country:"latvia",comment:"",copy:"l"}];return{countries:e}}},z=L,G=Object(l["a"])(z,y,w,!1,null,"770e6e42",null),K=G.exports,Q={name:"App",components:{BirthdaySex:f,Header:g,SSNSection:K}},R=Q,U=Object(l["a"])(R,a,s,!1,null,null,null),V=U.exports,X=n("9483");Object(X["a"])("".concat("/ssnelhest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var Z=n("2f62");function ee(){var e=new Date;return e.setFullYear(e.getFullYear()-70),e=e.toISOString().substring(0,10),e}r["a"].use(Z["a"]);var te=new Z["a"].Store({state:{dateOfBirth:ee(),sex:"male"},mutations:{setDate:function(e,t){e.dateOfBirth=t},changeSex:function(e,t){e.sex=t}}});r["a"].config.productionTip=!1,new r["a"]({store:te,render:function(e){return e(V)}}).$mount("#app")},d915:function(e,t,n){},dbf4:function(e,t,n){"use strict";var r=n("d915"),a=n.n(r);a.a}});
//# sourceMappingURL=app.52f1f842.js.map