(()=>{var e={903:e=>{e.exports=function(){var e=document.createElement("main");e.className="container row mx-auto";for(var t=0;t<4;t++){var n=document.createElement("div");if(0==t){n.className="col-12";var r=document.createElement("img");r.className="img-fluid",r.setAttribute("alt","Main Image"),r.setAttribute("src","../src/imgs/main.jpg"),n.appendChild(r),e.appendChild(n)}else if(1==t){n.className="col-6";var a=document.createElement("img");a.className="img-fluid w-100",a.setAttribute("alt","Second Image"),a.setAttribute("src","../src/imgs/second.jpg"),n.appendChild(a),e.appendChild(n)}else if(2==t){n.className="col-6";var i=document.createElement("img");i.className="img-fluid w-100",i.setAttribute("alt","Third Image"),i.setAttribute("src","../src/imgs/third.jpg"),n.appendChild(i),e.appendChild(n)}else{n.className="col-12";var o=document.createElement("img");o.className="img-fluid",o.setAttribute("alt","Fourth Image"),o.setAttribute("src","../src/imgs/fourth.jpg"),n.appendChild(o),e.appendChild(n)}}return e}},955:e=>{e.exports=function(){var e=document.createElement("header"),t=document.createElement("nav");t.className="navbar navbar-expand-lg navbar-light bg-light";var n=document.createElement("div");n.className="container";var r=document.createElement("a");r.className="navbar-brand",r.setAttribute("href","/"),r.textContent="Saj Al-Reef";var a=document.createElement("ul");a.className="d-flex";for(var i=0;i<3;i++){var o=document.createElement("a");o.className="nav-link",o.textContent=0==i?"Home":1==i?"Recipes":"Contact Us",a.appendChild(o)}return n.appendChild(r),n.appendChild(a),t.appendChild(n),e.appendChild(t),e}},740:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,"body {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.row {\r\n  --bs-gutter-x: 0;\r\n}\r\n",""]);const i=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var o=this[i][0];null!=o&&(a[o]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},913:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(379),a=n.n(r),i=n(740);a()(i.Z,{insert:"head",singleton:!1});const o=i.Z.locals||{}},379:(e,t,n)=>{"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function o(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var c=e[a],s=t.base?c[0]+t.base:c[0],l=n[s]||0,d="".concat(s," ").concat(l);n[s]=l+1;var u=o(d),m={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(i[u].references++,i[u].updater(m)):i.push({identifier:d,updater:v(m,t),references:1}),r.push(d)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var o=a(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var l,d=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(i,o[t]):e.appendChild(i)}}function m(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,p=0;function v(e,t){var n,r,a;if(t.singleton){var i=p++;n=f||(f=s(t)),r=u.bind(null,n,i,!1),a=u.bind(null,n,i,!0)}else n=s(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);i[a].references--}for(var s=c(e,t),l=0;l<n.length;l++){var d=o(n[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=s}}}}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e=n(955),t=n(903);n(913);var r=document.querySelector("#content");r.appendChild(e()),r.appendChild(t())})()})();