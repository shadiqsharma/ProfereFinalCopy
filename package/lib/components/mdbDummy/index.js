(function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports["mdbDummy"]=t():e["mdbDummy"]=t()})("undefined"!==typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="fb15")}({"06cf":function(e,t,n){var r=n("83ab"),o=n("d1e7"),i=n("5c6c"),a=n("fc6a"),c=n("c04e"),u=n("5135"),f=n("0cfb"),s=Object.getOwnPropertyDescriptor;t.f=r?s:function(e,t){if(e=a(e),t=c(t,!0),f)try{return s(e,t)}catch(n){}if(u(e,t))return i(!o.f.call(e,t),e[t])}},"0cfb":function(e,t,n){var r=n("83ab"),o=n("d039"),i=n("cc12");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"159b":function(e,t,n){var r=n("da84"),o=n("fdbc"),i=n("17c2"),a=n("9112");for(var c in o){var u=r[c],f=u&&u.prototype;if(f&&f.forEach!==i)try{a(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,o=n("b301");e.exports=o("forEach")?function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}:[].forEach},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c0b":function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1dde":function(e,t,n){var r=n("d039"),o=n("b622"),i=o("species");e.exports=function(e){return!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"23cb":function(e,t,n){var r=n("a691"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},"23e7":function(e,t,n){var r=n("da84"),o=n("06cf").f,i=n("9112"),a=n("6eeb"),c=n("ce4e"),u=n("e893"),f=n("94ca");e.exports=function(e,t){var n,s,l,p,d,m,y=e.target,b=e.global,v=e.stat;if(s=b?r:v?r[y]||c(y,{}):(r[y]||{}).prototype,s)for(l in t){if(d=t[l],e.noTargetGet?(m=o(s,l),p=m&&m.value):p=s[l],n=f(b?l:y+(v?".":"#")+l,e.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(e.sham||p&&p.sham)&&i(d,"sham",!0),a(s,l,d,e)}}},"241c":function(e,t,n){var r=n("ca84"),o=n("7839"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"37e8":function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("825a"),a=n("df75");e.exports=r?Object.defineProperties:function(e,t){i(e);var n,r=a(t),c=r.length,u=0;while(c>u)o.f(e,n=r[u++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},4160:function(e,t,n){"use strict";var r=n("23e7"),o=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(e,t,n){e.exports=n("da84")},"44ad":function(e,t,n){var r=n("d039"),o=n("c6b6"),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),o=n("7c73"),i=n("9112"),a=r("unscopables"),c=Array.prototype;void 0==c[a]&&i(c,a,o(null)),e.exports=function(e){c[a][e]=!0}},4930:function(e,t,n){var r=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(e,t,n){var r=n("fc6a"),o=n("50c4"),i=n("23cb"),a=function(e){return function(t,n,a){var c,u=r(t),f=o(u.length),s=i(a,f);if(e&&n!=n){while(f>s)if(c=u[s++],c!=c)return!0}else for(;f>s;s++)if((e||s in u)&&u[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},"50c4":function(e,t,n){var r=n("a691"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},5135:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},5692:function(e,t,n){var r=n("c430"),o=n("c6cd");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.3.2",mode:r?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),o=n("241c"),i=n("7418"),a=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("5899"),i="["+o+"]",a=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),u=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(a,"")),2&e&&(n=n.replace(c,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"65f0":function(e,t,n){var r=n("861d"),o=n("e8b5"),i=n("b622"),a=i("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"69f3":function(e,t,n){var r,o,i,a=n("7f9a"),c=n("da84"),u=n("861d"),f=n("9112"),s=n("5135"),l=n("f772"),p=n("d012"),d=c.WeakMap,m=function(e){return i(e)?o(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(a){var b=new d,v=b.get,h=b.has,g=b.set;r=function(e,t){return g.call(b,e,t),t},o=function(e){return v.call(b,e)||{}},i=function(e){return h.call(b,e)}}else{var x=l("state");p[x]=!0,r=function(e,t){return f(e,x,t),t},o=function(e){return s(e,x)?e[x]:{}},i=function(e){return s(e,x)}}e.exports={set:r,get:o,has:i,enforce:m,getterFor:y}},"6eeb":function(e,t,n){var r=n("da84"),o=n("5692"),i=n("9112"),a=n("5135"),c=n("ce4e"),u=n("9e81"),f=n("69f3"),s=f.get,l=f.enforce,p=String(u).split("toString");o("inspectSource",(function(e){return u.call(e)})),(e.exports=function(e,t,n,o){var u=!!o&&!!o.unsafe,f=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||i(n,"name",t),l(n).source=p.join("string"==typeof t?t:"")),e!==r?(u?!s&&e[t]&&(f=!0):delete e[t],f?e[t]=n:i(e,t,n)):f?e[t]=n:c(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u.call(this)}))},7156:function(e,t,n){var r=n("861d"),o=n("d2bb");e.exports=function(e,t,n){var i,a;return o&&"function"==typeof(i=t.constructor)&&i!==n&&r(a=i.prototype)&&a!==n.prototype&&o(e,a),e}},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7c73":function(e,t,n){var r=n("825a"),o=n("37e8"),i=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),f=n("f772"),s=f("IE_PROTO"),l="prototype",p=function(){},d=function(){var e,t=u("iframe"),n=i.length,r="<",o="script",a=">",f="java"+o+":";t.style.display="none",c.appendChild(t),t.src=String(f),e=t.contentWindow.document,e.open(),e.write(r+o+a+"document.F=Object"+r+"/"+o+a),e.close(),d=e.F;while(n--)delete d[l][i[n]];return d()};e.exports=Object.create||function(e,t){var n;return null!==e?(p[l]=r(e),n=new p,p[l]=null,n[s]=e):n=d(),void 0===t?n:o(n,t)},a[s]=!0},"7f9a":function(e,t,n){var r=n("da84"),o=n("9e81"),i=r.WeakMap;e.exports="function"===typeof i&&/native code/.test(o.call(i))},"81d5":function(e,t,n){"use strict";var r=n("7b0b"),o=n("23cb"),i=n("50c4");e.exports=function(e){var t=r(this),n=i(t.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,n),u=a>2?arguments[2]:void 0,f=void 0===u?n:o(u,n);while(f>c)t[c++]=e;return t}},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},8418:function(e,t,n){"use strict";var r=n("c04e"),o=n("9bf2"),i=n("5c6c");e.exports=function(e,t,n){var a=r(t);a in e?o.f(e,a,i(0,n)):e[a]=n}},"861d":function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},8875:function(e,t,n){var r,o,i;(function(n,a){o=[],r=a,i="function"===typeof r?r.apply(t,o):r,void 0===i||(e.exports=i)})("undefined"!==typeof self&&self,(function(){function e(){if(document.currentScript)return document.currentScript;try{throw new Error}catch(l){var e,t,n,r=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,o=/@([^@]*):(\d+):(\d+)\s*$/gi,i=r.exec(l.stack)||o.exec(l.stack),a=i&&i[1]||!1,c=i&&i[2]||!1,u=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");a===u&&(e=document.documentElement.outerHTML,t=new RegExp("(?:[^\\n]+?\\n){0,"+(c-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),n=e.replace(t,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===a)return f[s];if(a===u&&f[s].innerHTML&&f[s].innerHTML.trim()===n)return f[s]}return null}}return e}))},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),o=n("9bf2"),i=n("5c6c");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),o=/#|\.prototype\./,i=function(e,t){var n=c[a(e)];return n==f||n!=u&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",f=i.POLYFILL="P";e.exports=i},"99af":function(e,t,n){"use strict";var r=n("23e7"),o=n("d039"),i=n("e8b5"),a=n("861d"),c=n("7b0b"),u=n("50c4"),f=n("8418"),s=n("65f0"),l=n("1dde"),p=n("b622"),d=p("isConcatSpreadable"),m=9007199254740991,y="Maximum allowed index exceeded",b=!o((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),v=l("concat"),h=function(e){if(!a(e))return!1;var t=e[d];return void 0!==t?!!t:i(e)},g=!b||!v;r({target:"Array",proto:!0,forced:g},{concat:function(e){var t,n,r,o,i,a=c(this),l=s(a,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?a:arguments[t],h(i)){if(o=u(i.length),p+o>m)throw TypeError(y);for(n=0;n<o;n++,p++)n in i&&f(l,p,i[n])}else{if(p>=m)throw TypeError(y);f(l,p++,i)}return l.length=p,l}})},"9bf2":function(e,t,n){var r=n("83ab"),o=n("0cfb"),i=n("825a"),a=n("c04e"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9e81":function(e,t,n){var r=n("5692");e.exports=r("native-function-to-string",Function.toString)},a15b:function(e,t,n){"use strict";var r=n("23e7"),o=n("44ad"),i=n("fc6a"),a=n("b301"),c=[].join,u=o!=Object,f=a("join",",");r({target:"Array",proto:!0,forced:u||f},{join:function(e){return c.call(i(this),void 0===e?",":e)}})},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a9e3:function(e,t,n){"use strict";var r=n("83ab"),o=n("da84"),i=n("94ca"),a=n("6eeb"),c=n("5135"),u=n("c6b6"),f=n("7156"),s=n("c04e"),l=n("d039"),p=n("7c73"),d=n("241c").f,m=n("06cf").f,y=n("9bf2").f,b=n("58a8").trim,v="Number",h=o[v],g=h.prototype,x=u(p(g))==v,w=function(e){var t,n,r,o,i,a,c,u,f=s(e,!1);if("string"==typeof f&&f.length>2)if(f=b(f),t=f.charCodeAt(0),43===t||45===t){if(n=f.charCodeAt(2),88===n||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(i=f.slice(2),a=i.length,c=0;c<a;c++)if(u=i.charCodeAt(c),u<48||u>o)return NaN;return parseInt(i,r)}return+f};if(i(v,!h(" 0o1")||!h("0b1")||h("+0x1"))){for(var S,j=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof j&&(x?l((function(){g.valueOf.call(n)})):u(n)!=v)?f(new h(w(t)),n,j):w(t)},O=r?d(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;O.length>E;E++)c(h,S=O[E])&&!c(j,S)&&y(j,S,m(h,S));j.prototype=g,g.constructor=j,a(o,v,j)}},b301:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!n||!r((function(){n.call(null,t||function(){throw 1},1)}))}},b622:function(e,t,n){var r=n("da84"),o=n("5692"),i=n("90e3"),a=n("4930"),c=r.Symbol,u=o("wks");e.exports=function(e){return u[e]||(u[e]=a&&c[e]||(a?c:i)("Symbol."+e))}},b727:function(e,t,n){var r=n("f8c2"),o=n("44ad"),i=n("7b0b"),a=n("50c4"),c=n("65f0"),u=[].push,f=function(e){var t=1==e,n=2==e,f=3==e,s=4==e,l=6==e,p=5==e||l;return function(d,m,y,b){for(var v,h,g=i(d),x=o(g),w=r(m,y,3),S=a(x.length),j=0,O=b||c,E=t?O(d,S):n?O(d,0):void 0;S>j;j++)if((p||j in x)&&(v=x[j],h=w(v,j,g),e))if(t)E[j]=h;else if(h)switch(e){case 3:return!0;case 5:return v;case 6:return j;case 2:u.call(E,v)}else if(s)return!1;return l?-1:f||s?s:E}};e.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},c04e:function(e,t,n){var r=n("861d");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),o=n("ce4e"),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),o=n("fc6a"),i=n("4d64").indexOf,a=n("d012");e.exports=function(e,t){var n,c=o(e),u=0,f=[];for(n in c)!r(a,n)&&r(c,n)&&f.push(n);while(t.length>u)r(c,n=t[u++])&&(~i(f,n)||f.push(n));return f}},cb29:function(e,t,n){var r=n("23e7"),o=n("81d5"),i=n("44d2");r({target:"Array",proto:!0},{fill:o}),i("fill")},cc12:function(e,t,n){var r=n("da84"),o=n("861d"),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},ce4e:function(e,t,n){var r=n("da84"),o=n("9112");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("428f"),o=n("da84"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(i){}return function(n,i){return r(n),o(i),t?e.call(n,i):n.__proto__=i,n}}():void 0)},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde");r({target:"Array",proto:!0,forced:!i("map")},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))},df75:function(e,t,n){var r=n("ca84"),o=n("7839");e.exports=Object.keys||function(e){return r(e,o)}},e893:function(e,t,n){var r=n("5135"),o=n("56ef"),i=n("06cf"),a=n("9bf2");e.exports=function(e,t){for(var n=o(t),c=a.f,u=i.f,f=0;f<n.length;f++){var s=n[f];r(e,s)||c(e,s,u(t,s))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},f772:function(e,t,n){var r=n("5692"),o=n("90e3"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},f8c2:function(e,t,n){var r=n("1c0b");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},fb15:function(e,t,n){"use strict";if(n.r(t),"undefined"!==typeof window){var r=window.document.currentScript,o=n("8875");r=o(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:o});var i=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);i&&(n.p=i[1])}n("99af"),n("cb29"),n("4160"),n("a15b"),n("d81d"),n("fb6a"),n("a9e3"),n("159b");var a={inserted:function(e,t){e.dummy={value:t.value,arg:t.arg},e.dummy.generateText=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=["radioelement","actinolitic","chromic","strikeboard","cloverleaf","trimming","heedfulness","phenylamine","alloplasmatic","winnipeg","savour","airwoman","compute","nitrobenzene","coinstantaneously","havel","stimulatingly","superextreme","noyau","stark","preelect","scripture","rubric","revoted","melchizedek","intertidal","immorally","spacious","dodecastylar","modulate","botulinuses","aimlessly","mirkier","cadman","yokel","cactaceous","blame","bridelike","unexported","diapedesis","irritate","accuracy","keyman","habitudinal","outraved","militancy","contrive","unacetic","homoeopath","snippiness","nonnobility","stambul","schumpeter","eulis","gavin","rainproof","philonis","xograph","ester","anaglyph","equities","biosphere","premeditatingly","marg","stephanie","dauk","nomad","bootie","clark","spouter","crackly","corticate","hipping","contemptuous","unfree","swagman","bedizenment","snakeweed","reoperate","valorise","dido","cated","anatolian","stupefy","camaraderie","kenny","sweat","vaporimeter","lineamental","overcriticized","nonphilosophy","politicalize","professed","milstein","unit","revaccinate","parochial","soc","cudbear","intercarpellary","precociousness","pretaste","holophyte","scarless","rekindle","reappearance","dimensionless","julienne","gasholder","fluidally","teutonism","legroom","adolescent","camila","agana","overcertify","disembowelment","anemochorous","discreditability","unincludible","folia","frankfurter","maravedi","tribunitial","boulle","pretincture","hermetical","impanel","underyoke","beset","scoff","exophthalmos","manly","nahant","sandarac","diseasing","dolphinfishes","desulfurization","inescapableness","solum","outthrow","rareripe","highness","synonymized","attractive","residency","predaciou","dosshouse","crookesite","unmoldy","drawability","comedical","chromoplasmic","unillusioned","altimetrical","araucan","conveyor","laggardness","unpolitely","strutting","bloodwort","hysteretically","baalistic","contritely","nonexcavation","mdoc","benthamite","moseley","coercively","horologe","bivalvular","agribusiness","norbert","invigorated","imprudently","trippingly","mds","unabatable","assidaean","glandes","reidentify","fluffier","geek","unstunned","battue","innutritious","terminism","cannibalistically","flowerage","duopoly","jurisp","exitance","menace","speciously","ungossiping","realizable","candlenut","uncombinational","semifrontier","pseudopolitical","atomize","brunetness","reperused","leverrier","unaccustomed","aeaea","monopsony","posttibial","filbert","pellucidity","italian","preinstructional","balkanised","sanctity","multigravida","study","hulloo","gyges","tiglinic","dubonnet","postfebrile","cotype","abbreviator","saffian","zogan","pfitzner","decampment","predictated","prejudgement","gormandising","thoreau","ruralised","laryngeal","coleridgian","azerbaijani","featherlike","alogi","dunstable","punish","energistic","newsbeat","keswick","noncommutative","totable","pothunting","steatite","typikon","unanswering","repositories","peduncle","stirpiculture","varietally","burletta","salvia","farraginous","anteroom","rhamnaceous","southernwood","hyporight","dysteleological","kilopound","hyperbatic","barquisimeto","unfitly","humorless","untackling","doom","beefless","gruesomeness","yeastlike","leucosis","enrober","canton","gutterlike","plesiosaur","shaksperian","ramayana","factorize","currieries","carracci","unrevoked","purposed","kline","sanderling","inculpatory","postgenial","holism","clearly","alfur","tuberless","perugino","instilment","reamendment","trinitrophenylmethylnitramine","intertrafficking","predeterminate","cataplane","bleariest"],n=function(){return t[Math.floor(Math.random()*t.length)]},r=n();r=r.charAt(0).toUpperCase()+r.slice(1);while(r.length<e)r+=" "+n();return r=r.slice(0,e),r},e.dummy.findElements=function(e,t){var n=[],r=function e(r){r.tagName&&r.tagName.toLowerCase()===t?n.push(r):r.childNodes&&r.childNodes.forEach((function(t){return e(t)}))};return r(e),n},e.dummy.generateImg=function(e){var t=150;return"number"===typeof e?t=e:void 0!==e&&(t="".concat(e.width||150,"x").concat(e.height||150)),"https://via.placeholder.com/".concat(t)},e.dummy.generateTable=function(e){var t=e||{},n=t.rows,r=void 0===n?10:n,o=t.columns,i=void 0===o?5:o,a=new Array(Number(i)).fill("Column"),c=new Array(Number(i)).fill("Row"),u=new Array(Number(r)).fill(c),f="\n      <thead>\n        <tr>\n          ".concat(a.map((function(e){return"<th>".concat(e,"</th>")})).join(""),"\n        </tr>\n      </thead>\n      <tbody>\n        ").concat(u.map((function(e){return"\n            <tr>\n            ".concat(e.map((function(e){return"<td>".concat(e,"</td>")})).join(" "),"\n            </tr>\n          ")})).join(" "),"\n      </tbody>");return f},e.dummy.generateList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t="<li>List item</li>",n=new Array(Number(e)).fill(t).join(" ");return n},e.dummy.generatePlaceholders=function(){switch(e.dummy.arg){case"text":e.innerText=e.dummy.generateText(e.dummy.value);break;case"img":e.dummy.findElements(e,"img").forEach((function(t){return t.src=e.dummy.generateImg(e.dummy.value)}));break;case"table":e.innerHTML=e.dummy.generateTable(e.dummy.value);break;case"list":e.innerHTML=e.dummy.generateList(e.dummy.value);break}},e.dummy.generatePlaceholders()},update:function(e,t){e.dummy.value!==t.value&&(e.dummy.value=t.value,e.dummy.generatePlaceholders())}};t["default"]=a},fb6a:function(e,t,n){"use strict";var r=n("23e7"),o=n("861d"),i=n("e8b5"),a=n("23cb"),c=n("50c4"),u=n("fc6a"),f=n("8418"),s=n("1dde"),l=n("b622"),p=l("species"),d=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!s("slice")},{slice:function(e,t){var n,r,s,l=u(this),y=c(l.length),b=a(e,y),v=a(void 0===t?y:t,y);if(i(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[p],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return d.call(l,b,v);for(r=new(void 0===n?Array:n)(m(v-b,0)),s=0;b<v;b++,s++)b in l&&f(r,s,l[b]);return r.length=s,r}})},fc6a:function(e,t,n){var r=n("44ad"),o=n("1d80");e.exports=function(e){return r(o(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}})}));
//# sourceMappingURL=index.umd.min.js.map