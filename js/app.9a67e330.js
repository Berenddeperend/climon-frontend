(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/climon-frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},1755:function(e,t,n){"use strict";var r=n("481c"),o=n.n(r);o.a},4666:function(e,t,n){"use strict";var r=n("655d"),o=n.n(r);o.a},"481c":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("14c6"),n("08c1"),n("4842"),n("d9fc");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("give-water-abetoo")],1)},a=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ul",[n("h3",[e._v("collections:")]),e._l(e.collections,(function(t){return n("li",{key:t,class:{active:e.selectedCollection==t},on:{click:function(n){e.selectCollection(t)}}},[e._v(e._s(t))])}))],2),n("ul",[n("h3",[e._v("measurements:")]),e._l(e.measurements,(function(t){return n("li",{key:t,class:{active:e.selectedMeasurement==t},on:{click:function(n){e.selectMeasurement(t)}}},[e._v(e._s(t))])}))],2)])},i=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),l=n("2f62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={name:"DbSelector",data:function(){return{collections:null,selectedCollection:null,measurements:null,selectedMeasurement:null}},mounted:function(){this.getCollections()},computed:f({},Object(l["b"])(["data"])),methods:{selectCollection:function(e){this.selectedCollection=e,this.getMeasurements(e)},selectMeasurement:function(e){this.selectedMeasurement=e,this.getAllFromMeasurement(this.selectedCollection,e)},getCollections:function(){var e=this;fetch("".concat(this.URL,"/api/collections")).then((function(e){return e.json()})).then((function(t){e.collections=t}))},getMeasurements:function(e){var t=this;fetch("".concat(this.URL,"/api/").concat(e,"/measurements")).then((function(e){return e.json()})).then((function(e){t.measurements=e}))},getAllFromMeasurement:function(e,t){var n=this;fetch("".concat(this.URL,"/api/").concat(e,"/query"),{headers:{query:"SELECT * FROM ".concat(t)}}).then((function(e){return e.json()})).then((function(e){n.$store.commit("setData",e)}))}}},p=d,b=(n("8569"),n("2877")),h=Object(b["a"])(p,c,i,!1,null,"b27063c8",null),m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("table",[n("tr",e._l(e.keys,(function(t){return n("th",{key:t},[e._v(e._s(t))])})),0),e._l(e.data,(function(t,r){return n("tr",{key:r},e._l(e.keys,(function(r){return n("td",{key:r},[e._v("\n        "+e._s(t[r])+"\n      ")])})),0)}))],2)])},g=[];function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(s["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C={name:"TableData",computed:y({},Object(l["b"])(["data"]),{keys:function(){return this.data?Object.keys(this.data[0]):null}})},j=C,w=(n("1755"),Object(b["a"])(j,v,g,!1,null,"2d76e8e4",null)),_=w.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"nes-container with-title"},[n("h3",{staticClass:"title"},[e._v("Berend's plantenbak")]),n("p",{staticClass:"tac"},[e._v("Blijf de knop ingedrukt houden.")]),n("div",{staticClass:"nes-container-inner"},[n("button",{ref:"water",staticClass:"nes-btn is-primary"},[e._v("Geef water.")])])])])},S=[],P={methods:{giveWater:function(){console.log("give water."),fetch(this.WemosURL)}},mounted:function(){var e,t=this;function n(){t.giveWater()}console.log(this.URL),this.$refs.water.addEventListener("mousedown",(function(){n(),e=setInterval(n,450)})),document.addEventListener("mouseup",(function(){clearInterval(e)}))}},k=P,M=(n("4666"),Object(b["a"])(k,E,S,!1,null,null,null)),D=M.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"nes-container"},[n("p",{staticClass:"tac"},[e._v("Berend's plantenbak")]),n("div",{staticClass:"nes-container-inner"},[n("button",{ref:"water",staticClass:"nes-btn is-primary"},[e._v("Geef water")])]),e.temperature?n("div",{staticClass:"nes-balloon from-left"},[n("p",[e._v(e._s(e.temperature)+"°C")])]):e._e()])])},x=[],A={data:function(){return{temperature:null}},methods:{giveWater:function(){console.log("give water."),this.abetooInstance.sendMessage(this.WemosAbetooId,"water","-")}},mounted:function(){var e,t=this;this.abetooInstance.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e",n);function n(e){console.log("message: ",e),t.temperature=e}function r(){t.giveWater()}this.$refs.water.addEventListener("mousedown",(function(){r(),e=setInterval(r,450)})),document.addEventListener("mouseup",(function(){clearInterval(e)}))}},R=A,L=(n("f2db"),Object(b["a"])(R,I,x,!1,null,null,null)),T=L.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},G=[],N=(n("7f7f"),n("4917"),n("28a5"),n("a481"),n("6b54"),{data:function(){return{Abetoo:function(){function e(){return{init:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,i){o=e,a=i,c=new WebSocket("ws://abetoo.com:15674/ws"),c.onopen=function(){r=n.a,c.send("CONNECT\naccept-version:1.2\nlogin:abetoouser\npasscode:abetoopi\n\n\0")},c.onclose=function(){init(o,a)},c.onmessage=function(e){t+=e.data;e:{e=t;for(var i=0;i<e.length;i++)if("\0"===e.charAt(i)){e=i;break e}e=-1}if(-1!=e){if(e=t.substring(0,e),t=t.replace(e,""),t=t.replace(String.fromCharCode(0)+String.fromCharCode(10),""),null===e||0>=e.length)var s="";else s=e.split("\n"),s=0<s.length&&-1===s[0].indexOf(":")?s[0]:"";if("CONNECTED"===s){for(r=n.c,e="",s=0;50>s;s++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));c.send("SUBSCRIBE\nid:"+e+"\ndestination:/topic/"+o+"\nreceipt:subscribed\nclient:auto\n\n\0")}else"ERROR"===s?c.close():"MESSAGE"===s?(s=atob,null===e||0>=e.length?e="":(e=e.match("\n\n[^\0]+"),e=null===e?"":e),null!=a&&a(s(e))):((s="RECEIPT"===s)&&(null===e||0>=e.length?e="":(e=e.match("receipt-id:[^\n]+"),null===e?e="":(e=String(e).split(":"),e=2===e.length?e[1]:"")),s=0===e.localeCompare("subscribed")),s&&(r=n.b))}},c.onerror=function(){}})),sendMessage:function(e,t,a){return r==n.b&&(t=btoa(t),c.send("SEND\ndestination:/topic/"+e+"\ncontent-type:text/plain\ncontent-length:"+t.length+"\ncorrelationid:"+a+"\nfrom:"+o+"\n\n"+t+"\0"),!0)},g:function(){return r.name}}}var t="",n={a:{value:0,name:"Disconnected"},c:{value:1,name:"Connected"},b:{value:2,name:"Subscribed"}},r=n.a,o="",a=null,c=null,i=null;return{getInstance:function(){return i||(i=e()),i}}}()}},mounted:function(){console.log("abetoo:",this.Abetoo);var e=this.Abetoo.getInstance();function t(e){console.log("abetoo message recieved:"),console.log(e)}e.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e",t)}}),$=N,U=Object(b["a"])($,W,G,!1,null,null,null),B=U.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},F=[],J={},K=J,Q=Object(b["a"])(K,q,F,!1,null,null,null),V=Q.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"nes-container with-title"},[n("h3",{staticClass:"title"},[e._v("Berend's temperatuur")]),e.temp?n("p",{staticClass:"tac"},[e._v(e._s(e.temp)+" °C")]):n("p",{staticClass:"tac"},[e._v("Waiting for data...")])])])},H=[],X={data:function(){return{temp:null}},mounted:function(){var e=this;function t(t){e.temp=t}this.abetooInstance.init("-uLj2KEuibEGl0o5tfqauDA636307126198501918#0f82d535bd87d54e8ffd84cd518ecd2d3f90eb7e",t)}},Y=X,Z=Object(b["a"])(Y,z,H,!1,null,null,null),ee=Z.exports,te={name:"app",components:{DbSelector:m,TableData:_,GiveWater:D,GiveWaterAbetoo:T,PlantGraph:V,Temperature:ee,Abetoo:B},mounted:function(){}},ne=te,re=(n("034f"),Object(b["a"])(ne,o,a,!1,null,null,null)),oe=re.exports,ae=n("5c96"),ce=n.n(ae),ie=n("b2d6"),se=n.n(ie);n("0fae");r["default"].use(l["a"]);var le=new l["a"].Store({state:{data:null},getters:{data:function(e){return e.data}},mutations:{setData:function(e,t){e.data=t}}}),ue=le,fe=function(){function e(){return{init:function(e){function t(t,n){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e,i){o=e,a=i,c=new WebSocket("ws://abetoo.com:15674/ws"),c.onopen=function(){r=n.a,c.send("CONNECT\naccept-version:1.2\nlogin:abetoouser\npasscode:abetoopi\n\n\0")},c.onclose=function(){init(o,a)},c.onmessage=function(e){t+=e.data;e:{e=t;for(var i=0;i<e.length;i++)if("\0"===e.charAt(i)){e=i;break e}e=-1}if(-1!=e){if(e=t.substring(0,e),t=t.replace(e,""),t=t.replace(String.fromCharCode(0)+String.fromCharCode(10),""),null===e||0>=e.length)var s="";else s=e.split("\n"),s=0<s.length&&-1===s[0].indexOf(":")?s[0]:"";if("CONNECTED"===s){for(r=n.c,e="",s=0;50>s;s++)e+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(62*Math.random()));c.send("SUBSCRIBE\nid:"+e+"\ndestination:/topic/"+o+"\nreceipt:subscribed\nclient:auto\n\n\0")}else"ERROR"===s?c.close():"MESSAGE"===s?(s=atob,null===e||0>=e.length?e="":(e=e.match("\n\n[^\0]+"),e=null===e?"":e),null!=a&&a(s(e))):((s="RECEIPT"===s)&&(null===e||0>=e.length?e="":(e=e.match("receipt-id:[^\n]+"),null===e?e="":(e=String(e).split(":"),e=2===e.length?e[1]:"")),s=0===e.localeCompare("subscribed")),s&&(r=n.b))}},c.onerror=function(){}})),sendMessage:function(e,t,a){return r==n.b&&(t=btoa(t),c.send("SEND\ndestination:/topic/"+e+"\ncontent-type:text/plain\ncontent-length:"+t.length+"\ncorrelationid:"+a+"\nfrom:"+o+"\n\n"+t+"\0"),!0)},g:function(){return r.name}}}var t="",n={a:{value:0,name:"Disconnected"},c:{value:1,name:"Connected"},b:{value:2,name:"Subscribed"}},r=n.a,o="",a=null,c=null,i=null;return{getInstance:function(){return i||(i=e()),i}}}(),de={data:function(){return{}},computed:{abetooInstance:function(){var e=fe.getInstance();return console.log("abetooInstance: ",e),e}}};r["default"].prototype.WemosURL="http://192.168.2.31",r["default"].prototype.WemosAbetooId="-V898dmJStk-FIgeLCMbfhQ636307126199562031#970e53896952cb6fe023a0858025509fbc896d63",r["default"].prototype.URL="http://195.240.135.237:4000",r["default"].config.productionTip=!1,r["default"].use(ce.a,{locale:se.a}),r["default"].mixin(de),new r["default"]({store:ue,render:function(e){return e(oe)}}).$mount("#app")},"64a9":function(e,t,n){},"655d":function(e,t,n){},"6bb1":function(e,t,n){},8569:function(e,t,n){"use strict";var r=n("6bb1"),o=n.n(r);o.a},a80f:function(e,t,n){},f2db:function(e,t,n){"use strict";var r=n("a80f"),o=n.n(r);o.a}});
//# sourceMappingURL=app.9a67e330.js.map