!function(e){var r={};function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(r){return e[r]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}({3:function(e,r){const t=(e,r)=>e.url<r.url?-1:e.url>r.url?1:0;document.querySelector("#sort").addEventListener("click",()=>{chrome.tabs.query({windowId:chrome.windows.WINDOW_ID_CURRENT},e=>{e.sort(t);for(let r=0;r<e.length;r++)chrome.tabs.move(e[r].id,{index:r});e.forEach((e,r)=>{chrome.tabs.move(e.id,{index:r})}),e.forEach((e,r)=>{chrome.tabs.move(e.id,{index:r})}),(e=>{document.write("<h3>Tabs ordered as below:</h3>"),document.write("<ul>"),e.forEach(e=>{document.write(`<li>${e.url}</li>`)}),document.write("</ul>")})(e)})})}});