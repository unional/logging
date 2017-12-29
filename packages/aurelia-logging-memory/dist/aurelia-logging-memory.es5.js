var AureliaLoggingMemory=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),i=function(){function e(){this.logs=[]}return e.addCustomLevel=function(n,t){e.prototype[n]=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];this.logs.push({id:e.id,level:t,messages:n})}},e.prototype.debug=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];this.logs.push({id:e.id,level:r.logLevel.debug,messages:n})},e.prototype.info=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];this.logs.push({id:e.id,level:r.logLevel.info,messages:n})},e.prototype.warn=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];this.logs.push({id:e.id,level:r.logLevel.warn,messages:n})},e.prototype.error=function(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];this.logs.push({id:e.id,level:r.logLevel.error,messages:n})},e}();n.MemoryAppender=i,n.stringifyLogLevel=function(e){return o(Object.keys(r.logLevel).find(function(n){return r.logLevel[n]===e})||e.toString())}},function(e,n,t){"use strict";function r(e){return c.filter(function(n){return n===e}).length>0}function o(){return[this].concat(Array.prototype.slice.call(arguments))}function i(e){var n=f[e];return function(){if(!(this.level<n))for(var t=o.apply(this,arguments),r=s.length;r--;){var i;(i=s[r])[e].apply(i,t)}}}function u(e){var n=f[e];return function(){if(!(this.level<n))for(var t=o.apply(this,arguments),r=s.length;r--;){var i=s[r];void 0!==i[e]&&i[e].apply(i,t)}}}function l(){var e=v.prototype;for(var n in f)r(n)?"none"!==n&&(e[n]=i(n)):e[n]=u(n)}Object.defineProperty(n,"__esModule",{value:!0}),n.getLogger=function(e){return p[e]||new v(e)},n.addAppender=function(e){1===s.push(e)&&l()},n.removeAppender=function(e){s=s.filter(function(n){return n!==e})},n.getAppenders=function(){return[].concat(s)},n.clearAppenders=function(){s=[],function(){var e=v.prototype;for(var n in f)"none"!==n&&(e[n]=function(){})}()},n.addCustomLevel=function(e,n){if(void 0!==f[e])throw Error('Log level "'+e+'" already exists.');if(isNaN(n))throw Error("Value must be a number.");f[e]=n,s.length>0?l():v.prototype[e]=function(){}},n.removeCustomLevel=function(e){if(void 0!==f[e]){if(r(e))throw Error('Built-in log level "'+e+'" cannot be removed.');delete f[e],delete v.prototype[e]}},n.setLevel=function(e){a=e;for(var n in p)p[n].setLevel(e)},n.getLevel=function(){return a};var f=n.logLevel={none:0,error:10,warn:20,info:30,debug:40},p={},s=[],a=f.none,c=["none","error","warn","info","debug"],v=n.Logger=function(){function e(e){var n=p[e];if(n)return n;p[e]=this,this.id=e,this.level=a}return e.prototype.debug=function(e){},e.prototype.info=function(e){},e.prototype.warn=function(e){},e.prototype.error=function(e){},e.prototype.setLevel=function(e){this.level=e},e}()},function(e,n){var t={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}};e.exports=function(e,n){var r=t[n];return e=null==e?"":String(e),r&&(e=e.replace(r.regexp,function(e){return r.map[e]})),e.toUpperCase()}}]);
//# sourceMappingURL=aurelia-logging-memory.es5.js.map