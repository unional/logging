var AureliaLoggingColor=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){var n,o,r=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{o="function"==typeof clearTimeout?clearTimeout:u}catch(t){o=u}}();var a,l=[],s=!1,f=-1;function p(){s&&a&&(s=!1,a.length?l=a.concat(l):f=-1,l.length&&h())}function h(){if(!s){var t=c(p);s=!0;for(var e=l.length;e;){for(a=l,l=[];++f<e;)a&&a[f].run();f=-1,e=l.length}a=null,s=!1,function(t){if(o===clearTimeout)return clearTimeout(t);if((o===u||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(t);try{o(t)}catch(e){try{return o.call(null,t)}catch(e){return o.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}r.nextTick=function(t){var e=new Array(arguments.length-1);if(1<arguments.length)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new d(t,e)),1!==l.length||s||c(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=g,r.addListener=g,r.once=g,r.off=g,r.removeListener=g,r.removeAllListeners=g,r.emit=g,r.prependListener=g,r.prependOnceListener=g,r.listeners=function(t){return[]},r.binding=function(t){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(t){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},function(t,e){t.exports=ColorMap},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.rainbow=[{index:0,rgb:[150,0,90]},{index:.125,rgb:[0,0,200]},{index:.25,rgb:[0,25,255]},{index:.375,rgb:[0,152,255]},{index:.5,rgb:[44,255,150]},{index:.625,rgb:[151,255,0]},{index:.75,rgb:[255,234,0]},{index:.875,rgb:[255,111,0]},{index:1,rgb:[255,0,0]}]},function(t,e,n){"use strict";var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(12));e.isNode=r.default;var i="undefined"!=typeof navigator?navigator.userAgent:void 0,u="undefined"!=typeof navigator?navigator.vendor:void 0,c=!(!i||!u)&&/Chrome/.test(i)&&/Google Inc/.test(u),a=!!i&&/firefox/i.test(i);e.getSupportedColorMode=function(){return r.default?"ANSI":c||a?"CSS":"NONE"}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(5))},function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0});var r=n(7),i=n(8),u=n(3),c=n(13),a=function(){if(!u.isNode)return!0;if(!t.process)return!0;var e=o.version.startsWith("v")?o.version.slice(1):o.version;return c.semverGt(e,[9,3,0])}()?console.debug:console.log,l="function"==typeof console.info?console.info:console.log,s="function"==typeof console.warn?console.warn:console.log,f="function"==typeof console.error?console.error:console.log,p=function(){function t(t){this.brush=i.createBrush(t)}return t.addCustomLevel=function(e,n){t.prototype[e]=function(t){for(var e,o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];var u=function(t){return t>=r.logLevel.debug?a:t>=r.logLevel.info?l:t>=r.logLevel.warn?s:t>=r.logLevel.error?f:void 0}(n);u&&u.apply(console,(e=this.brush).color.apply(e,[t.id].concat(o)))}},t.prototype.error=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];f.call.apply(f,[console].concat((e=this.brush).color.apply(e,[t.id].concat(n))))},t.prototype.warn=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];s.call.apply(s,[console].concat((e=this.brush).color.apply(e,[t.id].concat(n))))},t.prototype.info=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];l.call.apply(l,[console].concat((e=this.brush).color.apply(e,[t.id].concat(n))))},t.prototype.debug=function(t){for(var e,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];a.call.apply(a,[console].concat((e=this.brush).color.apply(e,[t.id].concat(n))))},t}();e.ColorAppender=p}).call(this,n(6),n(0))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getLogger=function(t){return r[t]||new h(t)},e.addAppender=function(t){1===i.push(t)&&p()},e.removeAppender=function(t){i=i.filter(function(e){return e!==t})},e.getAppenders=function(){return[].concat(i)},e.clearAppenders=function(){i=[],function(){var t=h.prototype;for(var e in o)"none"!==e&&(t[e]=function(){})}()},e.addCustomLevel=function(t,e){if(void 0!==o[t])throw Error('Log level "'+t+'" already exists.');if(isNaN(e))throw Error("Value must be a number.");o[t]=e,0<i.length?p():h.prototype[t]=function(){}},e.removeCustomLevel=function(t){if(void 0!==o[t]){if(a(t))throw Error('Built-in log level "'+t+'" cannot be removed.');delete o[t],delete h.prototype[t]}},e.setLevel=function(t){for(var e in u=t,r)r[e].setLevel(t)},e.getLevel=function(){return u};var o=e.logLevel={none:0,error:10,warn:20,info:30,debug:40},r={},i=[],u=o.none,c=["none","error","warn","info","debug"];function a(t){return 0<c.filter(function(e){return e===t}).length}function l(){return[this].concat(Array.prototype.slice.call(arguments))}function s(t){var e=o[t];return function(){if(!(this.level<e))for(var n=l.apply(this,arguments),o=i.length;o--;){var r;(r=i[o])[t].apply(r,n)}}}function f(t){var e=o[t];return function(){if(!(this.level<e))for(var n=l.apply(this,arguments),o=i.length;o--;){var r=i[o];void 0!==r[t]&&r[t].apply(r,n)}}}function p(){var t=h.prototype;for(var e in o)a(e)?"none"!==e&&(t[e]=s(e)):t[e]=f(e)}var h=e.Logger=function(){function t(t){var e=r[t];if(e)return e;(r[t]=this).id=t,this.level=u}return t.prototype.debug=function(t){},t.prototype.info=function(t){},t.prototype.warn=function(t){},t.prototype.error=function(t){},t.prototype.setLevel=function(t){this.level=t},t.prototype.isDebugEnabled=function(){return this.level===o.debug},t}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),r=n(10),i=n(11),u=n(3),c=function(){function t(){}return t.prototype.color=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return[t].concat(e)},t}();e.PlainBrush=c,e.createBrush=function(t){var e;switch(void 0===t&&(t={}),t.colorMode||u.getSupportedColorMode()){case"CSS":e=new i.CSSBrush(t);break;case"ANSI":e=new r.AnsiBrush(t);break;case"ANSI16M":e=new o.Ansi16mBrush(t);break;default:case"NONE":e=new c}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){function t(t){void 0===t&&(t={}),this.count=0,this.map={},this.option={maxColor:t.maxColor||20,coloringText:t.coloringText||!1};var e=this.option.coloringText?r.rainbow:r.rainbow.map(function(t){return{index:t.index,rgb:[t.rgb[0],.7*t.rgb[1],t.rgb[2]]}});this.colors=o.createColorsFromMap(e,t.maxColor||20),this.color=this.option.coloringText?this.colorAnsi16m:this.getAnsi16mBackgroundString}return t.prototype.getRgb=function(t){return this.map[t]=this.map[t]||this.colors[this.count++%this.option.maxColor]},t.prototype.colorAnsi16m=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=this.getRgb(t);return[this.wrapAnsi16m(t,o)].concat(e)},t.prototype.getAnsi16mBackgroundString=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=this.getRgb(t);return[this.wrapAnsi16m(" "+t+" ",o,10)].concat(e)},t.prototype.wrapAnsi16m=function(t,e,n){return void 0===n&&(n=0),"["+(38+n)+";2;"+e[0]+";"+e[1]+";"+e[2]+"m"+t+"["+(39+n)+"m"},t}();e.Ansi16mBrush=i},function(t,e,n){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){void 0===t&&(t={}),this.count=0,this.map={},this.codes=o=o||function(){var t=i.map(function(t){return[t]});t.push.apply(t,i.map(function(t){return[t,31]})),t.push.apply(t,i.map(function(t){return[t,32]})),t.push.apply(t,i.map(function(t){return[t,33]})),t.push.apply(t,i.map(function(t){return[t,34]})),t.push.apply(t,i.map(function(t){return[t,35]})),t.push.apply(t,i.map(function(t){return[t,36]}));var e=(t=function(t){return t.filter(function(t){return!(1===t.length&&43===t[0]||2===t.length&&45===t[0]&&31===t[1]||2===t.length&&46===t[0]&&32===t[1]||2===t.length&&41===t[0]&&34===t[1]||2===t.length&&45===t[0]&&35===t[1]||2===t.length&&41===t[0]&&35===t[1])})}(t=function(t){return t.filter(function(t){return 1===t.length||t[0]!==t[1]+10})}(t))).map(function(t){return t.concat([1])}),n=t.map(function(t){return t.concat([2])}),o=t.map(function(t){return t.concat([4])});return t.concat(e,n,o)}(),this.option={maxColor:t.maxColor||this.codes.length,coloringText:t.coloringText||!1}}return t.prototype.color=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var o=this.getCodes(t);return[this.wrapAnsi(t,o)].concat(e)},t.prototype.getCodes=function(t){return this.map[t]=this.map[t]||this.codes[this.count++%this.option.maxColor]},t.prototype.wrapAnsi=function(t,e){var n=e.join(";");return e.some(function(t){return 40<t})&&(t=" "+t+" "),"["+n+"m"+t+"[0m"},t}();e.AnsiBrush=r;var i=[41,42,43,44,45,46]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=1/12.92,u=function(){function t(t){void 0===t&&(t={}),this.count=0,this.map={},this.option={maxColor:t.maxColor||20,coloringText:t.coloringText||!1},this.colors=o.createColorsFromMap(r.rainbow,t.maxColor||20)}return t.prototype.color=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=this.getRgb(t),i=o.rgbHex(r),u=o.rgbHex(r.map(function(t){return Math.max(0,t-32)})),c=this.getForegroundColor(r),a="%c "+t+" ";return 1<e.length&&"string"==typeof e[0]&&-1!==e[0].indexOf("%c")&&(a+=e.shift()),[a,"padding: 2px; margin: 2px; line-height: 1.8em;background: "+i+";border: 1px solid "+u+";color: "+c+";"].concat(e)},t.prototype.getRgb=function(t){return this.map[t]=this.map[t]||this.colors[this.count++%this.option.maxColor]},t.prototype.getForegroundColor=function(t){var e=this.getComplementary(t),n=this.getRelativeLuminance(t),o="#ffffff"===e?this.getRelativeLuminance([255,255,255]):this.getRelativeLuminance([0,0,0]);return(o<n?(n+.05)/(o+.05):(o+.05)/(n+.05))<4.5&&(e=.2126*t[0]+.7152*t[1]+.0722*t[2]<220?"#ffffff":"#000000"),e},t.prototype.getComplementary=function(t){var e=255-t[0],n=255-t[1],r=255-t[2];return o.rgbHex([e,n,r])},t.prototype.getRelativeLuminance=function(t){var e=t[0]/255,n=t[1]/255,o=t[2]/255;return.2126*(e<=.03928?e*i:Math.pow((.055+e)/1.055,2.4))+.7152*(n<=.03928?n*i:Math.pow((.055+n)/1.055,2.4))+.0722*(o<=.03928?o*i:Math.pow((.055+o)/1.055,2.4))},t}();e.CSSBrush=u},function(t,e,n){"use strict";(function(e){t.exports=!(void 0===e||!e.versions||!e.versions.node)}).call(this,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.semverGt=function(t,e){return t.split(".").reverse().reduce(function(t,e,n){return t+Number.parseInt(e,10)*Math.pow(100,n)},0)>1e4*e[0]+100*e[1]+e[2]}}]);
//# sourceMappingURL=aurelia-logging-color.js.map