var UnionalLogging=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(5),u={defaultAppender:new(n(2).SimpleConsoleAppender),logs:{},logLevel:r.logLevel.none,appenders:[]};t.store=o.create("@unional/logging",u)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLogger=function(e){return o[e]||new v(e)},t.addAppender=function(e){1===u.push(e)&&s()},t.removeAppender=function(e){u=u.filter(function(t){return t!==e})},t.getAppenders=function(){return[].concat(u)},t.clearAppenders=function(){u=[],function(){var e=v.prototype;for(var t in r)"none"!==t&&(e[t]=function(){})}()},t.addCustomLevel=function(e,t){if(void 0!==r[e])throw Error('Log level "'+e+'" already exists.');if(isNaN(t))throw Error("Value must be a number.");r[e]=t,0<u.length?s():v.prototype[e]=function(){}},t.removeCustomLevel=function(e){if(void 0!==r[e]){if(f(e))throw Error('Built-in log level "'+e+'" cannot be removed.');delete r[e],delete v.prototype[e]}},t.setLevel=function(e){for(var t in i=e,o)o[t].setLevel(e)},t.getLevel=function(){return i};var r=t.logLevel={none:0,error:10,warn:20,info:30,debug:40},o={},u=[],i=r.none,l=["none","error","warn","info","debug"];function f(e){return 0<l.filter(function(t){return t===e}).length}function c(){return[this].concat(Array.prototype.slice.call(arguments))}function p(e){var t=r[e];return function(){if(!(this.level<t))for(var n=c.apply(this,arguments),r=u.length;r--;){var o;(o=u[r])[e].apply(o,n)}}}function a(e){var t=r[e];return function(){if(!(this.level<t))for(var n=c.apply(this,arguments),r=u.length;r--;){var o=u[r];void 0!==o[e]&&o[e].apply(o,n)}}}function s(){var e=v.prototype;for(var t in r)f(t)?"none"!==t&&(e[t]=p(t)):e[t]=a(t)}var v=t.Logger=function(){function e(e){var t=o[e];if(t)return t;(o[e]=this).id=e,this.level=i}return e.prototype.debug=function(e){},e.prototype.info=function(e){},e.prototype.warn=function(e){},e.prototype.error=function(e){},e.prototype.setLevel=function(e){this.level=e},e.prototype.isDebugEnabled=function(){return this.level===r.debug},e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){}return e.prototype.debug=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.debug.apply(console,t)},e.prototype.info=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.info.apply(console,t)},e.prototype.warn=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.warn.apply(console,t)},e.prototype.error=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];console.error.apply(console,t)},e}();t.SimpleConsoleAppender=r},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);t.logLevel=o.logLevel,r(n(4)),r(n(6)),r(n(8)),r(n(9)),r(n(2))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(0);t.hasAppender=function(){return r},t.addAppender=function(e){o.store.get().appenders.push(e),r=!0},t.removeAppender=function(e){var t=o.store.get().appenders=o.store.get().appenders.filter(function(t){return t!==e});r=t&&0<t.length},t.clearAppenders=function(){o.store.get().appenders=[],r=!1},t.getAppenders=function(){return o.store.get().appenders}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={};function o(e,t){return r[e]=r[e]||t}function u(e,t){r[e]=t}function i(e,t){return{get:function(){return o(e,t)},set:function(t){u(e,t)}}}t.get=o,t.set=u,t.create=i,t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(7),u=n(0);t.getLogger=function(e,t){var n=u.store.get().logs;return n[e]?n[e]:n[e]=new i(e,t)};var i=function(){function e(e,t){this.id=e,this.level=void 0!==t?t:u.store.get().logLevel}return e.prototype.error=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.error){var o=u.store.get(),i=o.appenders,l=o.defaultAppender;0===i.length&&l.error.apply(l,[this].concat(t)),i.forEach(function(n){return n.error.apply(n,[e].concat(t))})}},e.prototype.warn=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.warn){var o=u.store.get(),i=o.appenders,l=o.defaultAppender;0===i.length&&l.warn.apply(l,[this].concat(t)),i.forEach(function(n){return n.warn.apply(n,[e].concat(t))})}},e.prototype.info=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.info){var o=u.store.get(),i=o.appenders,l=o.defaultAppender;0===i.length&&l.info.apply(l,[this].concat(t)),i.forEach(function(n){return n.info.apply(n,[e].concat(t))})}},e.prototype.debug=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(this.level>=r.logLevel.debug){var o=u.store.get(),i=o.appenders,l=o.defaultAppender;0===i.length&&l.debug.apply(l,[this].concat(t)),i.forEach(function(n){return n.debug.apply(n,[e].concat(t))})}},e.prototype.onError=function(e){this.on(r.logLevel.error,e)},e.prototype.onWarn=function(e){this.on(r.logLevel.warn,e)},e.prototype.onInfo=function(e){this.on(r.logLevel.info,e)},e.prototype.onDebug=function(e){this.on(r.logLevel.debug,e)},e.prototype.on=function(e,t){if(this.level>=e){var n=o.getLogMethodName(e);if(n){var r=this[n].bind(this),u=t(r);u&&r(u)}}},e}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1);t.getLogMethodName=function(e){return e>=r.logLevel.debug?"debug":e>=r.logLevel.info?"info":e>=r.logLevel.warn?"warn":e>=r.logLevel.error?"error":void 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.setDefaultAppender=function(e){r.store.get().defaultAppender=e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),o=n(0),u=n(11);t.setLevels=function(e,t){return r.getLoggers(e).map(function(e){return e.level=t,e})},t.setLevel=function(e){var t=o.store.get().logs;u.forEachKey(t,function(n){return t[n].level=e}),o.store.get().logLevel=e},t.getLevel=function(){return o.store.get().logLevel}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.getLoggers=function(e){var t=r.store.get().logs;return Object.keys(t).filter(function(t){return e.test(t)}).map(function(e){return t[e]})}},function(e,t,n){"use strict";function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}t.__esModule=!0,r(n(12)),r(n(13)),r(n(14)),r(n(15))},function(e,t,n){"use strict";t.__esModule=!0,t.findKey=function(e,t,n){return Object.keys(e).find(t,n)}},function(e,t,n){"use strict";t.__esModule=!0,t.forEachKey=function(e,t,n){return Object.keys(e).forEach(t,n)}},function(e,t,n){"use strict";t.__esModule=!0,t.mapKey=function(e,t,n){return Object.keys(e).map(t,n)}},function(e,t,n){"use strict";t.__esModule=!0,t.reduceKey=function(e,t,n){return Object.keys(e).reduce(t,n)}}]);
//# sourceMappingURL=unional-logging.js.map