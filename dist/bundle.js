(()=>{var e={56:e=>{e.exports=function(){var e=document.createElement("div");e.className="container mt-5";var t=document.createElement("h2");t.textContent="Contact Us",t.className="text-center mb-5";var n=document.createElement("button");n.setAttribute("type","button"),n.className="btn btn-primary",n.textContent="Submit";for(var r=document.createElement("form"),a=0;a<2;a++){var i=document.createElement("div");i.className="mb-3";var o=document.createElement("label");if(o.className="form-label",0==a){o.setAttribute("for","email"),o.textContent="Eamil adress";var c=document.createElement("input");c.setAttribute("type","email"),c.setAttribute("id","email"),c.setAttribute("placeholder","name@example.com"),c.className="form-control",i.appendChild(o),i.appendChild(c)}else{o.setAttribute("for","message"),o.textContent="Enter your message";var l=document.createElement("textarea");l.setAttribute("id","message"),l.setAttribute("rows","3"),l.className="form-control",i.appendChild(o),i.appendChild(l)}r.appendChild(i)}return r.appendChild(n),e.appendChild(t),e.appendChild(r),e}()},903:e=>{e.exports=function(){var e=document.createElement("main");e.className="container row mx-auto";for(var t=0;t<4;t++){var n=document.createElement("div");if(0==t){n.className="col-12";var r=document.createElement("img");r.className="img-fluid",r.setAttribute("alt","Main Image"),r.setAttribute("src","../src/imgs/main.jpg"),n.appendChild(r),e.appendChild(n)}else if(1==t){n.className="col-6";var a=document.createElement("img");a.className="img-fluid w-100",a.setAttribute("alt","Second Image"),a.setAttribute("src","../src/imgs/second.jpg"),n.appendChild(a),e.appendChild(n)}else if(2==t){n.className="col-6";var i=document.createElement("img");i.className="img-fluid w-100",i.setAttribute("alt","Third Image"),i.setAttribute("src","../src/imgs/third.jpg"),n.appendChild(i),e.appendChild(n)}else{n.className="col-12";var o=document.createElement("img");o.className="img-fluid",o.setAttribute("alt","Fourth Image"),o.setAttribute("src","../src/imgs/fourth.jpg"),n.appendChild(o),e.appendChild(n)}}return e}()},955:(e,t,n)=>{var r=n(97),a=r.home,i=r.recipes,o=r.contact;e.exports=function(){var e=document.createElement("header"),t=document.createElement("nav");t.className="navbar navbar-expand-lg navbar-light bg-light";var n=document.createElement("div");n.className="container";var r=document.createElement("a");r.className="navbar-brand",r.setAttribute("href","/"),r.textContent="Saj Al-Reef";var c=document.createElement("ul");return c.className="d-flex",c.appendChild(a),c.appendChild(i),c.appendChild(o),n.appendChild(r),n.appendChild(c),t.appendChild(n),e.appendChild(t),e}()},97:e=>{e.exports=function(){var e=document.createElement("a");e.className="nav-link",e.textContent="Home";var t=document.createElement("a");t.className="nav-link",t.textContent="Recipes";var n=document.createElement("a");return n.className="nav-link",n.textContent="Contact Us",{home:e,recipes:t,contact:n}}()},566:e=>{e.exports=function(){var e=document.createElement("div");e.className="container text-center text-white";var t=document.createElement("div");t.className="setBg";var n=document.createElement("div");n.className="trptDiv";var r=document.createElement("h2");r.textContent="Saj Sandwiches",r.className="pt-5";var a=document.createElement("div");a.className="row";for(var i=0;i<4;i++){var o=document.createElement("div");o.className="col-6 p-4";var c=document.createElement("div"),l=document.createElement("h4"),s=document.createElement("p");s.className="text-color",0==i?(l.textContent="Special Thyme Saj",s.textContent="Thyme, Tomatoes, Olive Oil, and Cheese."):1==i?(l.textContent="Thyme and Cheese Saj",s.textContent="Thyme, Olive Oil, and Mozzarella Cheese."):2==i?(l.textContent="Omelet Saj",s.textContent="Two Egg Omelet, Mayo, and French Fries."):(l.textContent="Chinese Vegetable Saj",s.textContent="Sautéed Mixed Vegetables in Soy Sauce."),c.appendChild(l),c.appendChild(s),o.appendChild(c),a.appendChild(o)}return n.appendChild(r),n.appendChild(a),t.appendChild(n),e.appendChild(t),e}()},740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(645),a=n.n(r),i=n(667),o=n.n(i),c=n(244),l=a()((function(e){return e[1]})),s=o()(c.Z);l.push([e.id,"body {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.container {\r\n  max-width: 900px;\r\n}\r\n\r\n.text-color {\r\n  color: #420303;\r\n}\r\n\r\n.setBg {\r\n  background-image: url("+s+");\r\n  background-size: cover;\r\n  background-position: center;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.trptDiv {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(250, 250, 250, 0.2);\r\n}\r\n\r\nform {\r\n  max-width: 600px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.row {\r\n  --bs-gutter-x: 0;\r\n}\r\n\r\n.nav-link {\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.nav-link:hover {\r\n  color: red;\r\n}\r\n",""]);const d=l},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},667:e=>{"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},244:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=n.p+"33bc18ff0f9cd32921e09f62f7805ff7.jpg"},913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(379),a=n.n(r),i=n(740);a()(i.Z,{insert:"head",singleton:!1});const o=i.Z.locals||{}},379:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],l=t.base?c[0]+t.base:c[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=o(d),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:d,updater:f(m,t),references:1}),r.push(d)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var s,d=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,h=0;function f(e,t){var n,r,a;if(t.singleton){var i=h++;n=p||(p=l(t)),r=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=l(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var l=c(e,t),s=0;s<n.length;s++){var d=o(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=l}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(955),t=n(903),r=n(566),a=n(56),i=n(97),o=i.home,c=i.recipes,l=i.contact;n(913);var s=document.querySelector("#content");s.appendChild(e);var d=document.createElement("div");d.appendChild(t),s.appendChild(d),o.addEventListener("click",(function(){d.innerHTML="",d.appendChild(t)})),c.addEventListener("click",(function(){d.innerHTML="",d.appendChild(r)})),l.addEventListener("click",(function(){d.innerHTML="",d.appendChild(a)}))})()})();