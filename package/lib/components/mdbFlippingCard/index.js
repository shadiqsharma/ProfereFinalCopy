(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbFlippingCard"]=t():e["mdbFlippingCard"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({8875:function(e,t,n){var r,o,i;(function(n,u){o=[],r=u,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(d){var e,t,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(d.stack)||o.exec(d.stack),u=i&&i[1]||!1,c=i&&i[2]||!1,a=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");u===a&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===u)return f[s];if(u===a&&f[s].innerHTML&&f[s].innerHTML.trim()===n)return f[s]}return null}}return e}))},fb15:function(e,t,n){"use strict";if(n.r(t),n.d(t,"mdbFlippingCard",(function(){return a})),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n(e.tag,{tag:"component",class:e.outerClasses},[n(e.innerTag,{tag:"component",class:e.innerClasses},[e._t("default")],2)],1)},c=[],a={props:{tag:{type:String,default:"div"},innerTag:{type:String,default:"div"},flipped:{type:Boolean,default:!1},outerClass:{type:[String,Array],default:""},innerClass:{type:[String,Array],default:""}},computed:{outerClasses:function(){return["card-wrapper",this.outerClass]},innerClasses:function(){return["card-rotating effect__click",this.flipped&&"flipped",this.innerClass]}}},f=a,s=f;function d(e,t,n,r,o,i,u,c){var a,f="function"===typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),u?(a=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},f._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(f.functional){f._injectStyles=a;var s=f.render;f.render=function(e,t){return a.call(t),s(e,t)}}else{var d=f.beforeCreate;f.beforeCreate=d?[].concat(d,a):[a]}return{exports:e,options:f}}var l=d(s,u,c,!1,null,"179663e0",null),p=l.exports;t["default"]=p}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map