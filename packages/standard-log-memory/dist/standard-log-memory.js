var StandardLogMemory=function(t){var n={};function u(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,u),r.l=!0,r.exports}return u.m=t,u.c=n,u.d=function(e,r,t){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(r,e){if(1&e&&(r=u(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)u.d(t,n,function(e){return r[e]}.bind(null,n));return t},u.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="",u(u.s=1)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={};function u(e,r){return n[e]=n[e]||r}function o(e,r){n[e]=r}r.createStore=function(r,e){return u(r,e),{get:function(){return u(r)},set:function(e){o(r,e)}}},r.getStoreValue=u,r.setStoreValue=o},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(2)),n(r(9))},function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var u=t(3),o=n(t(8));r.LogEntry={toString:function(e){return e.map(function(e){return e.id+" "+o.default(u.toLogLevelName(e.level))+" "+e.messages.join(" ")}).join("\n")}}},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(4)),n(r(7))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o=t(5);r.logLevel={none:0,emergency:10,alert:20,critical:30,error:40,warn:50,notice:60,info:70,debug:80,trace:90},r.addCustomLogLevel=function(e,r){var t=o.store.get(),n=t.customLevels,u=t.customLevelsReverse;n.set(e,r),u[r]=e},r.clearCustomLogLevel=function(){var e=o.store.get(),r=e.customLevels,t=e.customLevelsReverse;r.clear(),t.splice(0,t.length)},r.toLogLevel=function(e){return o.store.get().customLevels.get(e)||r.logLevel[e]},r.toLogLevelName=function(e){var r=o.store.get().customLevelsReverse[e];if(r)return r;switch(!0){case e<20:return"emergency";case e<30:return"alert";case e<40:return"critical";case e<50:return"error";case e<60:return"warn";case e<70:return"notice";case e<80:return"info";case e<90:return"debug";default:return"trace"}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(6);r.store=n.createStore("standard-log-core",{customLevels:new Map,customLevelsReverse:[]})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(0));var n=r(0);t.default=n.createStore},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.toSyslogSeverity=function(e){switch(!0){case e<20:return"emergency";case e<30:return"alert";case e<40:return"critical";case e<50:return"error";case e<60:return"warning";case e<70:return"notice";case e<80:return"informational";default:return"debug"}},r.toSyslogKeyword=function(e){switch(!0){case e<20:return"emerg";case e<30:return"alert";case e<40:return"crit";case e<50:return"err";case e<60:return"warning";case e<70:return"notice";case e<80:return"info";default:return"debug"}}},function(e,r){var n={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}};e.exports=function(e,r){var t=n[r];return e=null==e?"":String(e),t&&(e=e.replace(t.regexp,function(e){return t.map[e]})),e.toUpperCase()}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createMemoryLogWriter=function(){return{logs:[],write:function(e,r,t){var n=e.id;this.logs.push({id:n,level:r,messages:t})}}}}]);