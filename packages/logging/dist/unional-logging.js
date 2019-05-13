var UnionalLogging=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=n(8),u={defaultAppender:new(n(3).SimpleConsoleAppender),logs:{},logLevel:r.logLevel.none,appenders:[]};t.store=o.createStore("@unional/logging",u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLogger=function(e){return o[e]||new d(e)},t.addAppender=function(e){1===u.push(e)&&p()},t.removeAppender=function(e){u=u.filter(function(t){return t!==e})},t.getAppenders=function(){return[].concat(u)},t.clearAppenders=function(){u=[],function(){var e=d.prototype;for(var t in r)"none"!==t&&(e[t]=function(){})}()},t.addCustomLevel=function(e,t){if(void 0!==r[e])throw Error('Log level "'+e+'" already exists.');if(isNaN(t))throw Error("Value must be a number.");r[e]=t,0<u.length?p():d.prototype[e]=function(){}},t.removeCustomLevel=function(e){if(void 0!==r[e]){if(f(e))throw Error('Built-in log level "'+e+'" cannot be removed.');delete r[e],delete d.prototype[e]}},t.setLevel=function(e){for(var t in i=e,o)o[t].setLevel(e)},t.getLevel=function(){return i};var r=t.logLevel={none:0,error:10,warn:20,info:30,debug:40},o={},u=[],i=r.none,c=["none","error","warn","info","debug"];function f(e){return 0<c.filter(function(t){return t===e}).length}function l(){return[this].concat(Array.prototype.slice.call(arguments))}function s(e){var t=r[e];return function(){if(!(this.level<t))for(var n=l.apply(this,arguments),r=u.length;r--;){var o;(o=u[r])[e].apply(o,n)}}}function a(e){var t=r[e];return function(){if(!(this.level<t))for(var n=l.apply(this,arguments),r=u.length;r--;){var o=u[r];void 0!==o[e]&&o[e].apply(o,n)}}}function p(){var e=d.prototype;for(var t in r)f(t)?"none"!==t&&(e[t]=s(t)):e[t]=a(t)}var d=t.Logger=(v.prototype.debug=function(e){},v.prototype.info=function(e){},v.prototype.warn=function(e){},v.prototype.error=function(e){},v.prototype.setLevel=function(e){this.level=e},v.prototype.isDebugEnabled=function(){return this.level===r.debug},v);function v(e){var t=o[e];if(t)return t;(o[e]=this).id=e,this.level=i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};function o(e,t){return r[e]=r[e]||t}function u(e,t){r[e]=t}t.createStore=function(e,t){return o(e,t),{get:function(){return o(e)},set:function(t){u(e,t)}}},t.getStoreValue=o,t.setStoreValue=u},function(e,t,n){"use strict";(function(e,r){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var u=o(n(10)),i=n(11),c=(f.prototype.debug=function(t){for(var n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];!function(){if(!u.default)return!0;if(!e.process)return!0;var t=r.version.startsWith("v")?r.version.slice(1):r.version;return i.semverGt(t,[9,3,0])}()?console.log.apply(console,n):console.debug.apply(console,n)},f.prototype.info=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.info.apply(console,t)},f.prototype.warn=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.warn.apply(console,t)},f.prototype.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,t)},f);function f(){}t.SimpleConsoleAppender=c}).call(this,n(9),n(4))},function(e,t){var n,r,o=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(e){r=i}}();var f,l=[],s=!1,a=-1;function p(){s&&f&&(s=!1,f.length?l=f.concat(l):a=-1,l.length&&d())}function d(){if(!s){var e=c(p);s=!0;for(var t=l.length;t;){for(f=l,l=[];++a<t;)f&&f[a].run();a=-1,t=l.length}f=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function v(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new v(e,t)),1!==l.length||s||c(d)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function o(e,t){return void 0===e[0]||null===e[0]?e[0]:e.filter(function(e){return!!e}).reduce(t,{})}function u(e,t){if(void 0===t&&(t=!1),"object"!=typeof e)return[];var n=Object.getOwnPropertyNames(e),r=t?n.filter(function(e){return"constructor"!==e}):n,o=Object.getPrototypeOf(e);return o!==Object.prototype?r.concat(u(o,!0)):r}Object.defineProperty(t,"__esModule",{value:!0}),t.required=function(e,t,n){return o([e,t,n],function(e,t){return r({},e,t)})},t.requiredDeep=function(e,t,n){return o([e,t,n],function(e,t){return function e(t,n){return"object"!=typeof t||null===t?void 0!==n?n:t:Array.isArray(t)?Array.isArray(n)?n:t.concat([n]):u(t).concat(u(n)).reduce(function(r,o){return r[o]=e(t[o],n&&n[o]),r},{})}(e,t)})}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}t.__esModule=!0;var o=n(1);t.logLevel=o.logLevel,r(n(7)),r(n(12)),r(n(14)),r(n(15)),r(n(3))},function(e,t,n){"use strict";t.__esModule=!0;var r,o=n(0);t.hasAppender=function(){return r},t.addAppender=function(e){o.store.get().appenders.push(e),r=!0},t.removeAppender=function(e){var t=o.store.get().appenders=o.store.get().appenders.filter(function(t){return t!==e});r=t&&0<t.length},t.clearAppenders=function(){o.store.get().appenders=[],r=!1},t.getAppenders=function(){return o.store.get().appenders}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(2));var r=n(2);t.default=r.createStore},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(t){e.exports=!(void 0===t||!t.versions||!t.versions.node)}).call(this,n(4))},function(e,t,n){"use strict";t.__esModule=!0,t.semverGt=function(e,t){return e.split(".").reverse().reduce(function(e,t,n){return e+Number.parseInt(t,10)*Math.pow(100,n)},0)>1e4*t[0]+100*t[1]+t[2]}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=n(13),u=n(0);t.getLogger=function(e,t){var n=u.store.get().logs;return n[e]?n[e]:n[e]=new i(e,t)};var i=(c.prototype.error=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.error){var o=u.store.get(),i=o.appenders,c=o.defaultAppender;0===i.length&&c.error.apply(c,[this].concat(t)),i.forEach(function(n){return n.error.apply(n,[e].concat(t))})}},c.prototype.warn=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.warn){var o=u.store.get(),i=o.appenders,c=o.defaultAppender;0===i.length&&c.warn.apply(c,[this].concat(t)),i.forEach(function(n){return n.warn.apply(n,[e].concat(t))})}},c.prototype.info=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.info){var o=u.store.get(),i=o.appenders,c=o.defaultAppender;0===i.length&&c.info.apply(c,[this].concat(t)),i.forEach(function(n){return n.info.apply(n,[e].concat(t))})}},c.prototype.debug=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.debug){var o=u.store.get(),i=o.appenders,c=o.defaultAppender;0===i.length&&c.debug.apply(c,[this].concat(t)),i.forEach(function(n){return n.debug.apply(n,[e].concat(t))})}},c.prototype.onError=function(e){this.on(r.logLevel.error,e)},c.prototype.onWarn=function(e){this.on(r.logLevel.warn,e)},c.prototype.onInfo=function(e){this.on(r.logLevel.info,e)},c.prototype.onDebug=function(e){this.on(r.logLevel.debug,e)},c.prototype.on=function(e,t){if(this.level>=e){var n=o.getLogMethodName(e);if(n){var r=this[n].bind(this),u=t(r);u&&r(u)}}},c);function c(e,t){this.id=e,this.level=void 0!==t?t:u.store.get().logLevel}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1);t.getLogMethodName=function(e){return e>=r.logLevel.debug?"debug":e>=r.logLevel.info?"info":e>=r.logLevel.warn?"warn":e>=r.logLevel.error?"error":void 0}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.setDefaultAppender=function(e){r.store.get().defaultAppender=e}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(16),o=n(0),u=n(17);t.setLevels=function(e,t){return r.getLoggers(e).map(function(e){return e.level=t,e})},t.setLevel=function(e){var t=o.store.get().logs;u.forEachKey(t,function(n){return t[n].level=e}),o.store.get().logLevel=e},t.getLevel=function(){return o.store.get().logLevel}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0);t.getLoggers=function(e){var t=r.store.get().logs;return Object.keys(t).filter(function(t){return e.test(t)}).map(function(e){return t[e]})}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0});var o=n(18);t.required=o.required,t.requiredDeep=o.requiredDeep,r(n(20)),r(n(21)),r(n(22)),r(n(23)),r(n(24)),r(n(25)),r(n(26)),r(n(27)),r(n(28)),r(n(29)),r(n(30)),r(n(31))},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),r(n(5)),r(n(19))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5);t.unpartial=function(e,t,n){return r.required(e,t,n)},t.unpartialRecursively=function(e,t,n){return r.requiredDeep(e,t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createBrandCreator=function(){return function(e){return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterKey=function(e,t,n){return Object.keys(e).filter(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findKey=function(e,t,n){return Object.keys(e).find(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forEachKey=function(e,t,n){return Object.keys(e).forEach(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createId=function(e,t){return{type:e,value:t}},t.createIdCreator=function(e){return function(t){return{type:e,value:t}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isPromise=function(e){return!!e&&"function"==typeof e.then}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.literalArray=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapKey=function(e,t,n){return Object.keys(e).map(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mapSeries=function(e,t){var n=[];return e.reduce(function(e,r){return e.then(function(){return t(r)}).then(function(e){return n.push(e),n})},Promise.resolve())}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.reduceKey=function(e,t,n){return Object.keys(e).reduce(t,n)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.tryAssign=function(e,t){return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typeAssert={isUndefined:function(e){},noUndefined:function(e){},isNull:function(e){},noNull:function(e){},isNumber:function(e){},noNumber:function(e){},isBoolean:function(e){},noBoolean:function(e){},isString:function(e){},noString:function(e){},isNever:function(e){}}}]);
//# sourceMappingURL=unional-logging.js.map