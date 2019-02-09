var UnionalLogging=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=4)}([function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=t(6),i={defaultAppender:new(t(3).SimpleConsoleAppender),logs:{},logLevel:n.logLevel.none,appenders:[]};r.store=o.create("@unional/logging",i)},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.getLogger=function(e){return o[e]||new h(e)},r.addAppender=function(e){1===i.push(e)&&p()},r.removeAppender=function(e){i=i.filter(function(r){return r!==e})},r.getAppenders=function(){return[].concat(i)},r.clearAppenders=function(){i=[],function(){var e=h.prototype;for(var r in n)"none"!==r&&(e[r]=function(){})}()},r.addCustomLevel=function(e,r){if(void 0!==n[e])throw Error('Log level "'+e+'" already exists.');if(isNaN(r))throw Error("Value must be a number.");n[e]=r,0<i.length?p():h.prototype[e]=function(){}},r.removeCustomLevel=function(e){if(void 0!==n[e]){if(u(e))throw Error('Built-in log level "'+e+'" cannot be removed.');delete n[e],delete h.prototype[e]}},r.setLevel=function(e){for(var r in s=e,o)o[r].setLevel(e)},r.getLevel=function(){return s};var n=r.logLevel={none:0,error:10,warn:20,info:30,debug:40},o={},i=[],s=n.none,a=["none","error","warn","info","debug"];function u(e){return 0<a.filter(function(r){return r===e}).length}function c(){return[this].concat(Array.prototype.slice.call(arguments))}function l(e){var r=n[e];return function(){if(!(this.level<r))for(var t=c.apply(this,arguments),n=i.length;n--;){var o;(o=i[n])[e].apply(o,t)}}}function f(e){var r=n[e];return function(){if(!(this.level<r))for(var t=c.apply(this,arguments),n=i.length;n--;){var o=i[n];void 0!==o[e]&&o[e].apply(o,t)}}}function p(){var e=h.prototype;for(var r in n)u(r)?"none"!==r&&(e[r]=l(r)):e[r]=f(r)}var h=r.Logger=function(){function e(e){var r=o[e];if(r)return r;(o[e]=this).id=e,this.level=s}return e.prototype.debug=function(e){},e.prototype.info=function(e){},e.prototype.warn=function(e){},e.prototype.error=function(e){},e.prototype.setLevel=function(e){this.level=e},e.prototype.isDebugEnabled=function(){return this.level===n.debug},e}()},function(e,r){var t,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var u,c=[],l=!1,f=-1;function p(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=a(p);l=!0;for(var r=c.length;r;){for(u=c,c=[];++f<r;)u&&u[f].run();f=-1,r=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(r){try{return n.call(null,e)}catch(r){return n.call(this,e)}}}(e)}}function v(e,r){this.fun=e,this.array=r}function d(){}o.nextTick=function(e){var r=new Array(arguments.length-1);if(1<arguments.length)for(var t=1;t<arguments.length;t++)r[t-1]=arguments[t];c.push(new v(e,r)),1!==c.length||l||a(h)},v.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,r,t){"use strict";(function(e,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var i=o(t(8)),s=o(t(9)),a=function(){function r(){}return r.prototype.debug=function(r){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];!function(){if(!i.default)return!0;if(!e.process)return!0;var r=n.version.startsWith("v")?n.version.slice(1):n.version;return s.default.gt(r,"9.3.0")}()?console.log.apply(console,t):console.debug.apply(console,t)},r.prototype.info=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];console.info.apply(console,r)},r.prototype.warn=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];console.warn.apply(console,r)},r.prototype.error=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];console.error.apply(console,r)},r}();r.SimpleConsoleAppender=a}).call(this,t(7),t(2))},function(e,r,t){"use strict";function n(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0});var o=t(1);r.logLevel=o.logLevel,n(t(5)),n(t(10)),n(t(12)),n(t(13)),n(t(3))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n,o=t(0);r.hasAppender=function(){return n},r.addAppender=function(e){o.store.get().appenders.push(e),n=!0},r.removeAppender=function(e){var r=o.store.get().appenders=o.store.get().appenders.filter(function(r){return r!==e});n=r&&0<r.length},r.clearAppenders=function(){o.store.get().appenders=[],n=!1},r.getAppenders=function(){return o.store.get().appenders}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n={};function o(e,r){return n[e]=n[e]||r}function i(e,r){n[e]=r}function s(e,r){return{get:function(){return o(e,r)},set:function(r){i(e,r)}}}r.get=o,r.set=i,r.create=s,r.default=s},function(e,r){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,r,t){"use strict";(function(r){e.exports=!(void 0===r||!r.versions||!r.versions.node)}).call(this,t(2))},function(e,r,t){(function(t){var n;r=e.exports=F,n="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?function(){var e=Array.prototype.slice.call(arguments,0);e.unshift("SEMVER"),console.log.apply(console,e)}:function(){},r.SEMVER_SPEC_VERSION="2.0.0";var o=256,i=Number.MAX_SAFE_INTEGER||9007199254740991,s=r.re=[],a=r.src=[],u=0,c=u++;a[c]="0|[1-9]\\d*";var l=u++;a[l]="[0-9]+";var f=u++;a[f]="\\d*[a-zA-Z-][a-zA-Z0-9-]*";var p=u++;a[p]="("+a[c]+")\\.("+a[c]+")\\.("+a[c]+")";var h=u++;a[h]="("+a[l]+")\\.("+a[l]+")\\.("+a[l]+")";var v=u++;a[v]="(?:"+a[c]+"|"+a[f]+")";var d=u++;a[d]="(?:"+a[l]+"|"+a[f]+")";var g=u++;a[g]="(?:-("+a[v]+"(?:\\."+a[v]+")*))";var m=u++;a[m]="(?:-?("+a[d]+"(?:\\."+a[d]+")*))";var y=u++;a[y]="[0-9A-Za-z-]+";var w=u++;a[w]="(?:\\+("+a[y]+"(?:\\."+a[y]+")*))";var b=u++,j="v?"+a[p]+a[g]+"?"+a[w]+"?";a[b]="^"+j+"$";var _="[v=\\s]*"+a[h]+a[m]+"?"+a[w]+"?",E=u++;a[E]="^"+_+"$";var L=u++;a[L]="((?:<|>)?=?)";var P=u++;a[P]=a[l]+"|x|X|\\*";var O=u++;a[O]=a[c]+"|x|X|\\*";var M=u++;a[M]="[v=\\s]*("+a[O]+")(?:\\.("+a[O]+")(?:\\.("+a[O]+")(?:"+a[g]+")?"+a[w]+"?)?)?";var T=u++;a[T]="[v=\\s]*("+a[P]+")(?:\\.("+a[P]+")(?:\\.("+a[P]+")(?:"+a[m]+")?"+a[w]+"?)?)?";var A=u++;a[A]="^"+a[L]+"\\s*"+a[M]+"$";var k=u++;a[k]="^"+a[L]+"\\s*"+a[T]+"$";var S=u++;a[S]="(?:^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])";var x=u++;a[x]="(?:~>?)";var $=u++;a[$]="(\\s*)"+a[x]+"\\s+",s[$]=new RegExp(a[$],"g");var R=u++;a[R]="^"+a[x]+a[M]+"$";var N=u++;a[N]="^"+a[x]+a[T]+"$";var I=u++;a[I]="(?:\\^)";var C=u++;a[C]="(\\s*)"+a[I]+"\\s+",s[C]=new RegExp(a[C],"g");var V=u++;a[V]="^"+a[I]+a[M]+"$";var D=u++;a[D]="^"+a[I]+a[T]+"$";var K=u++;a[K]="^"+a[L]+"\\s*("+_+")$|^$";var B=u++;a[B]="^"+a[L]+"\\s*("+j+")$|^$";var U=u++;a[U]="(\\s*)"+a[L]+"\\s*("+_+"|"+a[M]+")",s[U]=new RegExp(a[U],"g");var q=u++;a[q]="^\\s*("+a[M]+")\\s+-\\s+("+a[M]+")\\s*$";var X=u++;a[X]="^\\s*("+a[T]+")\\s+-\\s+("+a[T]+")\\s*$";var z=u++;a[z]="(<|>)?=?\\s*\\*";for(var G=0;G<35;G++)n(G,a[G]),s[G]||(s[G]=new RegExp(a[G]));function Z(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof F)return e;if("string"!=typeof e)return null;if(e.length>o)return null;if(!(r.loose?s[E]:s[b]).test(e))return null;try{return new F(e,r)}catch(e){return null}}function F(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof F){if(e.loose===r.loose)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>o)throw new TypeError("version is longer than "+o+" characters");if(!(this instanceof F))return new F(e,r);n("SemVer",e,r),this.options=r,this.loose=!!r.loose;var t=e.trim().match(r.loose?s[E]:s[b]);if(!t)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+t[1],this.minor=+t[2],this.patch=+t[3],this.major>i||this.major<0)throw new TypeError("Invalid major version");if(this.minor>i||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>i||this.patch<0)throw new TypeError("Invalid patch version");t[4]?this.prerelease=t[4].split(".").map(function(e){if(/^[0-9]+$/.test(e)){var r=+e;if(0<=r&&r<i)return r}return e}):this.prerelease=[],this.build=t[5]?t[5].split("."):[],this.format()}r.parse=Z,r.valid=function(e,r){var t=Z(e,r);return t?t.version:null},r.clean=function(e,r){var t=Z(e.trim().replace(/^[=v]+/,""),r);return t?t.version:null},(r.SemVer=F).prototype.format=function(){return this.version=this.major+"."+this.minor+"."+this.patch,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version},F.prototype.toString=function(){return this.version},F.prototype.compare=function(e){return n("SemVer.compare",this.version,this.options,e),e instanceof F||(e=new F(e,this.options)),this.compareMain(e)||this.comparePre(e)},F.prototype.compareMain=function(e){return e instanceof F||(e=new F(e,this.options)),H(this.major,e.major)||H(this.minor,e.minor)||H(this.patch,e.patch)},F.prototype.comparePre=function(e){if(e instanceof F||(e=new F(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;var r=0;do{var t=this.prerelease[r],o=e.prerelease[r];if(n("prerelease compare",r,t,o),void 0===t&&void 0===o)return 0;if(void 0===o)return 1;if(void 0===t)return-1;if(t!==o)return H(t,o)}while(++r)},F.prototype.inc=function(e,r){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r),this.inc("pre",r);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",r),this.inc("pre",r);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{for(var t=this.prerelease.length;0<=--t;)"number"==typeof this.prerelease[t]&&(this.prerelease[t]++,t=-2);-1===t&&this.prerelease.push(0)}r&&(this.prerelease[0]===r?isNaN(this.prerelease[1])&&(this.prerelease=[r,0]):this.prerelease=[r,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this},r.inc=function(e,r,t,n){"string"==typeof t&&(n=t,t=void 0);try{return new F(e,t).inc(r,n).version}catch(e){return null}},r.diff=function(e,r){if(ee(e,r))return null;var t=Z(e),n=Z(r);if(t.prerelease.length||n.prerelease.length){for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return"pre"+o;return"prerelease"}for(var o in t)if(("major"===o||"minor"===o||"patch"===o)&&t[o]!==n[o])return o},r.compareIdentifiers=H;var W=/^[0-9]+$/;function H(e,r){var t=W.test(e),n=W.test(r);return t&&n&&(e=+e,r=+r),t&&!n?-1:n&&!t?1:e<r?-1:r<e?1:0}function J(e,r,t){return new F(e,t).compare(new F(r,t))}function Q(e,r,t){return 0<J(e,r,t)}function Y(e,r,t){return J(e,r,t)<0}function ee(e,r,t){return 0===J(e,r,t)}function re(e,r,t){return 0!==J(e,r,t)}function te(e,r,t){return 0<=J(e,r,t)}function ne(e,r,t){return J(e,r,t)<=0}function oe(e,r,t,n){var o;switch(r){case"===":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e===t;break;case"!==":"object"==typeof e&&(e=e.version),"object"==typeof t&&(t=t.version),o=e!==t;break;case"":case"=":case"==":o=ee(e,t,n);break;case"!=":o=re(e,t,n);break;case">":o=Q(e,t,n);break;case">=":o=te(e,t,n);break;case"<":o=Y(e,t,n);break;case"<=":o=ne(e,t,n);break;default:throw new TypeError("Invalid operator: "+r)}return o}function ie(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ie){if(e.loose===!!r.loose)return e;e=e.value}if(!(this instanceof ie))return new ie(e,r);n("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===se?this.value="":this.value=this.operator+this.semver.version,n("comp",this)}r.rcompareIdentifiers=function(e,r){return H(r,e)},r.major=function(e,r){return new F(e,r).major},r.minor=function(e,r){return new F(e,r).minor},r.patch=function(e,r){return new F(e,r).patch},r.compare=J,r.compareLoose=function(e,r){return J(e,r,!0)},r.rcompare=function(e,r,t){return J(r,e,t)},r.sort=function(e,t){return e.sort(function(e,n){return r.compare(e,n,t)})},r.rsort=function(e,t){return e.sort(function(e,n){return r.rcompare(e,n,t)})},r.gt=Q,r.lt=Y,r.eq=ee,r.neq=re,r.gte=te,r.lte=ne,r.cmp=oe,r.Comparator=ie;var se={};function ae(e,r){if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),e instanceof ae)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new ae(e.raw,r);if(e instanceof ie)return new ae(e.value,r);if(!(this instanceof ae))return new ae(e,r);if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(function(e){return this.parseRange(e.trim())},this).filter(function(e){return e.length}),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}function ue(e){return!e||"x"===e.toLowerCase()||"*"===e}function ce(e,r,t,n,o,i,s,a,u,c,l,f,p){return((r=ue(t)?"":ue(n)?">="+t+".0.0":ue(o)?">="+t+"."+n+".0":">="+r)+" "+(a=ue(u)?"":ue(c)?"<"+(+u+1)+".0.0":ue(l)?"<"+u+"."+(+c+1)+".0":f?"<="+u+"."+c+"."+l+"-"+f:"<="+a)).trim()}function le(e,r,t){for(var o=0;o<e.length;o++)if(!e[o].test(r))return!1;if(t||(t={}),!r.prerelease.length||t.includePrerelease)return!0;for(o=0;o<e.length;o++)if(n(e[o].semver),e[o].semver!==se&&0<e[o].semver.prerelease.length){var i=e[o].semver;if(i.major===r.major&&i.minor===r.minor&&i.patch===r.patch)return!0}return!1}function fe(e,r,t){try{r=new ae(r,t)}catch(e){return!1}return r.test(e)}function pe(e,r,t,n){var o,i,s,a,u;switch(e=new F(e,n),r=new ae(r,n),t){case">":o=Q,i=ne,s=Y,a=">",u=">=";break;case"<":o=Y,i=te,s=Q,a="<",u="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(fe(e,r,n))return!1;for(var c=0;c<r.set.length;++c){var l=r.set[c],f=null,p=null;if(l.forEach(function(e){e.semver===se&&(e=new ie(">=0.0.0")),f=f||e,p=p||e,o(e.semver,f.semver,n)?f=e:s(e.semver,p.semver,n)&&(p=e)}),f.operator===a||f.operator===u)return!1;if((!p.operator||p.operator===a)&&i(e,p.semver))return!1;if(p.operator===u&&s(e,p.semver))return!1}return!0}ie.prototype.parse=function(e){var r=this.options.loose?s[K]:s[B],t=e.match(r);if(!t)throw new TypeError("Invalid comparator: "+e);this.operator=t[1],"="===this.operator&&(this.operator=""),t[2]?this.semver=new F(t[2],this.options.loose):this.semver=se},ie.prototype.toString=function(){return this.value},ie.prototype.test=function(e){return n("Comparator.test",e,this.options.loose),this.semver===se||("string"==typeof e&&(e=new F(e,this.options)),oe(e,this.operator,this.semver,this.options))},ie.prototype.intersects=function(e,r){if(!(e instanceof ie))throw new TypeError("a Comparator is required");var t;if(r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1}),""===this.operator)return t=new ae(e.value,r),fe(this.value,t,r);if(""===e.operator)return t=new ae(this.value,r),fe(e.semver,t,r);var n=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),o=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),i=this.semver.version===e.semver.version,s=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),a=oe(this.semver,"<",e.semver,r)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=oe(this.semver,">",e.semver,r)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return n||o||i&&s||a||u},(r.Range=ae).prototype.format=function(){return this.range=this.set.map(function(e){return e.join(" ").trim()}).join("||").trim(),this.range},ae.prototype.toString=function(){return this.range},ae.prototype.parseRange=function(e){var r=this.options.loose;e=e.trim();var t=r?s[X]:s[q];e=e.replace(t,ce),n("hyphen replace",e),e=e.replace(s[U],"$1$2$3"),n("comparator trim",e,s[U]),e=(e=(e=e.replace(s[$],"$1~")).replace(s[C],"$1^")).split(/\s+/).join(" ");var o=r?s[K]:s[B],i=e.split(" ").map(function(e){return r=e,t=this.options,n("comp",r,t),c=t,r=r.trim().split(/\s+/).map(function(e){return function(e,r){n("caret",e,r),r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[D]:s[V];return e.replace(t,function(r,t,o,i,s){var a;return n("caret",e,r,t,o,i,s),a=ue(t)?"":ue(o)?">="+t+".0.0 <"+(+t+1)+".0.0":ue(i)?"0"===t?">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":">="+t+"."+o+".0 <"+(+t+1)+".0.0":s?(n("replaceCaret pr",s),"-"!==s.charAt(0)&&(s="-"+s),"0"===t?"0"===o?">="+t+"."+o+"."+i+s+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+s+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+s+" <"+(+t+1)+".0.0"):(n("no pr"),"0"===t?"0"===o?">="+t+"."+o+"."+i+" <"+t+"."+o+"."+(+i+1):">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0":">="+t+"."+o+"."+i+" <"+(+t+1)+".0.0"),n("caret return",a),a})}(e,c)}).join(" "),n("caret",r),u=t,r=r.trim().split(/\s+/).map(function(e){return function(e,r){r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[N]:s[R];return e.replace(t,function(r,t,o,i,s){var a;return n("tilde",e,r,t,o,i,s),a=ue(t)?"":ue(o)?">="+t+".0.0 <"+(+t+1)+".0.0":ue(i)?">="+t+"."+o+".0 <"+t+"."+(+o+1)+".0":s?(n("replaceTilde pr",s),"-"!==s.charAt(0)&&(s="-"+s),">="+t+"."+o+"."+i+s+" <"+t+"."+(+o+1)+".0"):">="+t+"."+o+"."+i+" <"+t+"."+(+o+1)+".0",n("tilde return",a),a})}(e,u)}).join(" "),n("tildes",r),n("replaceXRanges",i=r,a=t),r=i.split(/\s+/).map(function(e){return function(e,r){e=e.trim(),r&&"object"==typeof r||(r={loose:!!r,includePrerelease:!1});var t=r.loose?s[k]:s[A];return e.replace(t,function(r,t,o,i,s,a){n("xRange",e,r,t,o,i,s,a);var u=ue(o),c=u||ue(i),l=c||ue(s);return"="===t&&l&&(t=""),u?r=">"===t||"<"===t?"<0.0.0":"*":t&&l?(c&&(i=0),l&&(s=0),">"===t?(t=">=",c?(o=+o+1,s=i=0):l&&(i=+i+1,s=0)):"<="===t&&(t="<",c?o=+o+1:i=+i+1),r=t+o+"."+i+"."+s):c?r=">="+o+".0.0 <"+(+o+1)+".0.0":l&&(r=">="+o+"."+i+".0 <"+o+"."+(+i+1)+".0"),n("xRange return",r),r})}(e,a)}).join(" "),n("xrange",r),n("replaceStars",o=r,t),r=o.trim().replace(s[z],""),n("stars",r),r;var r,t,o,i,a,u,c},this).join(" ").split(/\s+/);return this.options.loose&&(i=i.filter(function(e){return!!e.match(o)})),i.map(function(e){return new ie(e,this.options)},this)},ae.prototype.intersects=function(e,r){if(!(e instanceof ae))throw new TypeError("a Range is required");return this.set.some(function(t){return t.every(function(t){return e.set.some(function(e){return e.every(function(e){return t.intersects(e,r)})})})})},r.toComparators=function(e,r){return new ae(e,r).set.map(function(e){return e.map(function(e){return e.value}).join(" ").trim().split(" ")})},ae.prototype.test=function(e){if(!e)return!1;"string"==typeof e&&(e=new F(e,this.options));for(var r=0;r<this.set.length;r++)if(le(this.set[r],e,this.options))return!0;return!1},r.satisfies=fe,r.maxSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ae(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&-1!==o.compare(e)||(o=new F(n=e,t)))}),n},r.minSatisfying=function(e,r,t){var n=null,o=null;try{var i=new ae(r,t)}catch(e){return null}return e.forEach(function(e){i.test(e)&&(n&&1!==o.compare(e)||(o=new F(n=e,t)))}),n},r.validRange=function(e,r){try{return new ae(e,r).range||"*"}catch(e){return null}},r.ltr=function(e,r,t){return pe(e,r,"<",t)},r.gtr=function(e,r,t){return pe(e,r,">",t)},r.outside=pe,r.prerelease=function(e,r){var t=Z(e,r);return t&&t.prerelease.length?t.prerelease:null},r.intersects=function(e,r,t){return e=new ae(e,t),r=new ae(r,t),e.intersects(r)},r.coerce=function(e){if(e instanceof F)return e;if("string"!=typeof e)return null;var r=e.match(s[S]);return null==r?null:Z((r[1]||"0")+"."+(r[2]||"0")+"."+(r[3]||"0"))}}).call(this,t(2))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1),o=t(11),i=t(0);r.getLogger=function(e,r){var t=i.store.get().logs;return t[e]?t[e]:t[e]=new s(e,r)};var s=function(){function e(e,r){this.id=e,this.level=void 0!==r?r:i.store.get().logLevel}return e.prototype.error=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(this.level>=n.logLevel.error){var o=i.store.get(),s=o.appenders,a=o.defaultAppender;0===s.length&&a.error.apply(a,[this].concat(r)),s.forEach(function(t){return t.error.apply(t,[e].concat(r))})}},e.prototype.warn=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(this.level>=n.logLevel.warn){var o=i.store.get(),s=o.appenders,a=o.defaultAppender;0===s.length&&a.warn.apply(a,[this].concat(r)),s.forEach(function(t){return t.warn.apply(t,[e].concat(r))})}},e.prototype.info=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(this.level>=n.logLevel.info){var o=i.store.get(),s=o.appenders,a=o.defaultAppender;0===s.length&&a.info.apply(a,[this].concat(r)),s.forEach(function(t){return t.info.apply(t,[e].concat(r))})}},e.prototype.debug=function(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(this.level>=n.logLevel.debug){var o=i.store.get(),s=o.appenders,a=o.defaultAppender;0===s.length&&a.debug.apply(a,[this].concat(r)),s.forEach(function(t){return t.debug.apply(t,[e].concat(r))})}},e.prototype.onError=function(e){this.on(n.logLevel.error,e)},e.prototype.onWarn=function(e){this.on(n.logLevel.warn,e)},e.prototype.onInfo=function(e){this.on(n.logLevel.info,e)},e.prototype.onDebug=function(e){this.on(n.logLevel.debug,e)},e.prototype.on=function(e,r){if(this.level>=e){var t=o.getLogMethodName(e);if(t){var n=this[t].bind(this),i=r(n);i&&n(i)}}},e}()},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(1);r.getLogMethodName=function(e){return e>=n.logLevel.debug?"debug":e>=n.logLevel.info?"info":e>=n.logLevel.warn?"warn":e>=n.logLevel.error?"error":void 0}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0);r.setDefaultAppender=function(e){n.store.get().defaultAppender=e}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(14),o=t(0),i=t(15);r.setLevels=function(e,r){return n.getLoggers(e).map(function(e){return e.level=r,e})},r.setLevel=function(e){var r=o.store.get().logs;i.forEachKey(r,function(t){return r[t].level=e}),o.store.get().logLevel=e},r.getLevel=function(){return o.store.get().logLevel}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t(0);r.getLoggers=function(e){var r=n.store.get().logs;return Object.keys(r).filter(function(r){return e.test(r)}).map(function(e){return r[e]})}},function(e,r,t){"use strict";function n(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}Object.defineProperty(r,"__esModule",{value:!0}),n(t(16)),n(t(17)),n(t(18)),n(t(19)),n(t(20)),n(t(21)),n(t(22)),n(t(23)),n(t(24))},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.filterKey=function(e,r,t){return Object.keys(e).filter(r,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.findKey=function(e,r,t){return Object.keys(e).find(r,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.forEachKey=function(e,r,t){return Object.keys(e).forEach(r,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createId=function(e,r){return{type:e,value:r}},r.createIdCreator=function(e){return function(r){return{type:e,value:r}}}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.isPromise=function(e){return!!e&&"function"==typeof e.then}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.literalArray=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.mapKey=function(e,r,t){return Object.keys(e).map(r,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.reduceKey=function(e,r,t){return Object.keys(e).reduce(r,t)}},function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.typeAssert={isUndefined:function(e){},noUndefined:function(e){},isNull:function(e){},noNull:function(e){},isNumber:function(e){},noNumber:function(e){},isBoolean:function(e){},noBoolean:function(e){},isString:function(e){},noString:function(e){},isNever:function(e){}}}]);
//# sourceMappingURL=unional-logging.js.map