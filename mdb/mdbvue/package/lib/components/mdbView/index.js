(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbView"]=t():e["mdbView"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="fb15")}({8875:function(e,t,r){var n,o,i;(function(r,a){o=[],n=a,i="function"===typeof n?n.apply(t,o):n,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var e,t,r,n=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=n.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,s=i&&i[2]||!1,c=document.location.href.replace(document.location.hash,""),u=document.getElementsByTagName("script");a===c&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(s-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),r=e.replace(t,"$1").trim());for(var d=0;d<u.length;d++){if("interactive"===u[d].readyState)return u[d];if(u[d].src===a)return u[d];if(a===c&&u[d].innerHTML&&u[d].innerHTML.trim()===r)return u[d]}return null}}return e}))},fb15:function(e,t,r){"use strict";if(r.r(t),r.d(t,"mdbView",(function(){return c})),"undefined"!==typeof window){var n=window.document.currentScript,o=r("8875");n=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=n&&n.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(r.p=i[1])}var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r(e.tag,{tag:"component",class:e.className},[e.src&&!e.video?r("img",{class:e.imgClass,attrs:{src:e.src,alt:e.alt}}):e._e(),e.src&&e.video?r("video",{staticClass:"video-fluid",attrs:{autoplay:e.autoplay?"true":null,loop:e.loop?"true":null}},[r("source",{attrs:{src:e.src,type:e.videoType}})]):e._e(),e._t("default")],2)},s=[],c={props:{tag:{type:String,default:"div"},src:{type:String},alt:{type:String},hover:{type:Boolean,default:!1},zoom:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},shadow:{type:Boolean,default:!1},imageClass:{type:String},wrapperClass:{type:String},gradient:{type:String},circle:{type:Boolean},cascade:{type:Boolean},video:{type:Boolean,default:!1},videoType:{type:String,default:"video/mp4"},autoplay:{type:Boolean,default:!0},loop:{type:Boolean,default:!0}},computed:{className:function(){return["view",this.hover?"overlay":"",this.zoom?"zoom":"",this.wrapperClass?this.wrapperClass:"",this.rounded?"rounded":"",this.circle?"rounded-circle":"",this.gradient?"gradient-card-header "+this.gradient+"-gradient":"",this.cascade&&"view-cascade"]},imgClass:function(){return[this.zoom?"w-100":"","img-fluid",this.imageClass?this.imageClass:"",this.shadow?"hoverable":""]}}},u=c,d=u;function l(e,t,r,n,o,i,a,s){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},u._ssrRegister=c):o&&(c=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(e,t){return c.call(t),d(e,t)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:e,options:u}}var f=l(d,a,s,!1,null,null,null),p=f.exports;t["default"]=p}})["default"]}));
//# sourceMappingURL=index.umd.min.js.map