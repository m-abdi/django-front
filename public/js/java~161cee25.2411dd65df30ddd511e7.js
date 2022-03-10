(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~./javascript/app-shell-package/app-entry~./javascript/badges-package/viewbadges-entry~./java~161cee25"],{"4VHr":function(t,e,r){"use strict";r.r(e),r.d(e,"KindErrorData",(function(){return f})),r.d(e,"KindSentryError",(function(){return u}));var n=r("MrPL");function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var o=Object.freeze({tags:{},contexts:{},fingerprint:[]}),c=["metadata","sentryData","name"];class u extends n.KindError{constructor(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.Errors.Unknown,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.freeze({}),{metadata:a,sentryData:s,name:u}=r;super(t,e,i(i({},function(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}(r,c)),{},{name:null!=u?u:"Sentry",metadata:{sentry:i(i({},o),s),other:a}}))}get sentryData(){return this.metadata.sentry}}function l(t){return Object(n.truncateMiddle)(t,200)}new Set(["type"]);var g=(t,e)=>{var r=Object(n.errorsFromError)(e,n.Order.ConsequenceFirst),a=function(t,e){var r=i({},null==e?void 0:e.tags);for(var n of Object.keys(r))r[n]=l(r[n]);return i(i(i({},o),e),{},{tags:r})}(0,Array.from(r).reduceRight(((e,r,a)=>((t,e,r,a)=>{var s,{causalErrorContextPrefix:c}=t,{tags:l,contexts:g,fingerprint:d}=e,f=(s=r)instanceof u?s.sentryData:null,{tags:m,contexts:h,fingerprint:v}=null!=f?f:o,p=i(i({},l),m),b=i(i({},g),h),y=Array.from(new Set([...d,...v].filter(Boolean)));return 0!==a&&(b["".concat(c).concat(a)]={error:r.toString(),sentryData:Object(n.safeStringify)(f),originalStack:Object(n.getOriginalStackFromError)(r)}),{tags:p,contexts:b,fingerprint:y}})(t,e,r,a)),o)),{groupByTagName:s,concatenatedMessageTagName:c,kindTagName:g}=t,d=Object(n.getKindFromError)(e),f=e.message.trim().split("\n")[0].trim(),m=e instanceof u?e.message.replace(/[\n]+[\t]*/g," "):e.message.split("\n")[0].trim(),h=i(i({},a.tags),{},{[g]:l(d),[c]:l(m)});return f.length&&(h[s]=l(f)),{tags:h,contexts:a.contexts,fingerprint:a.fingerprint}},d={kindTagName:"kind",groupByTagName:"group_by_message",concatenatedMessageTagName:"concatenated_message",causalErrorContextPrefix:"Source Error - "};class f{constructor(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object.freeze({});s(this,"name",f.id),s(this,"_options",void 0),this._options=i(i({},d),t)}setupOnce(t,e){t(((t,r)=>{var n=e().getIntegration(f);return n?n.enhanceEventWithErrorData(t,r):t}))}enhanceEventWithErrorData(t,e){var r,n=null==e?void 0:e.originalException;if(!(n instanceof Error))return t;var{tags:a,contexts:s,fingerprint:o}=g(this._options,n);t.tags=i(i({},t.tags),a);var c=i(i({},t.contexts),s);return t.contexts=c,t.fingerprint=[...null!==(r=t.fingerprint)&&void 0!==r?r:[],...o],t}}s(f,"id","KindErrorData")},MrPL:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.r(e),r.d(e,"Errors",(function(){return a})),r.d(e,"KindError",(function(){return o})),r.d(e,"Order",(function(){return d})),r.d(e,"clone",(function(){return s})),r.d(e,"errorsFromError",(function(){return f})),r.d(e,"getKindFromError",(function(){return c})),r.d(e,"getOriginalStackFromError",(function(){return u})),r.d(e,"safeStringify",(function(){return g})),r.d(e,"truncateMiddle",(function(){return m}));var a=Object.freeze({Unknown:"Unknown",Internal:"Internal",InvalidInput:"InvalidInput"});class i{constructor(t,e,r){n(this,"_name",void 0),n(this,"_message",void 0),n(this,"_stackFrames",void 0),this._name=t,this._message=e,this._stackFrames=[...r]}get message(){return this._message}get name(){return this._name}get messageWithName(){return"".concat(this.name,": ").concat(this.message)}get stack(){return[...this._stackFrames]}get standardizedStack(){return"".concat(this.messageWithName,"\n").concat(this._stackFrames.join("\n"))}static fromConsequenceAndCause(t,e){var r;for(var n=[],a=e.stack,s=null!==(r=null==t?void 0:t.stack)&&void 0!==r?r:[],o=a.length-1,c=s.length-1;o>=0&&c>=0&&a[o]===s[c];)n.unshift(a[o]),o--,c--;for(;o>=0;o--)n.unshift(a[o]);for(;c>=0;c--)n.unshift(s[c]);return new i(t.name,((t,e)=>{var r=t=>(null==t?void 0:t.trim())||"(empty message)",n=r(t);return null==e?n:"".concat(n,"\n\tcaused by\n\t\t").concat(r(e))})(t.message,e.messageWithName),n)}static normalize(t){var e,r,n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;var o=null!==(e=t.message.toString().split("\n").find((t=>t.trim().length)))&&void 0!==e?e:"(empty message)",c=t.toString(),u=(null!==(r=t.stack)&&void 0!==r&&r.startsWith(c)&&t.stack!==c?t.stack.substring(c.length):null!==(n=t.stack)&&void 0!==n?n:"").split("\n").filter((t=>t.trim().length)),l=u.length>=a+s?a:0;return new i(t.name,o,u.slice(l))}static from(t){var e,r;var n=t.toString(),a=(null!==(e=t.stack)&&void 0!==e&&e.startsWith(n)&&t.stack!==n?t.stack.substring(n.length):null!==(r=t.stack)&&void 0!==r?r:"").split("\n").filter((t=>t.trim().length));return new i(t.name,t.message,a)}}var s=t=>null==t||"object"!=typeof t?t:Array.isArray(t)?t.map(s):Object.keys(t).reduce(((e,r)=>(e[r]=s(t[r]),e)),{});class o extends Error{constructor(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.Unknown,{cause:r,prefix:o,name:c,metadata:u,stripStackFrames:l,minimumFrameCount:g,compositeStack:d}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};super(t),n(this,"kind",void 0),n(this,"originalMessage",void 0),n(this,"originalStack",void 0),n(this,"metadata",void 0),n(this,"cause",void 0),this.originalMessage=t,this.metadata=(t=>{if(null==t)return t;var e=s(t);return Object.freeze(e)})(u),this.name="".concat(null!=o?o:"").concat(e).concat(null!=c?c:"","Error"),this.kind=e,this.originalStack=this.stack,this.cause=r;var f=i.normalize(this,null!=l?l:0,null!=g?g:1);if(delete this.stack,this.stack=f.standardizedStack,null!=r){var m=i.from(r),h=i.fromConsequenceAndCause(f,m);this.message=h.message,!0===d&&(this.stack=h.standardizedStack)}}}var c=t=>t instanceof o?t.kind:a.Unknown,u=t=>t instanceof o?t.originalStack:t.stack,l=t=>null==t||"string"==typeof t?{defaultValue:t}:t,g=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",{defaultValue:r="",indent:n}=l(e);if(null==t)return r;try{var a;return null!==(a=JSON.stringify(t,null,null!=n?n:0))&&void 0!==a?a:r}catch(t){return r}},d=Object.freeze({ConsequenceFirst:"consequence-first",CauseFirst:"cause-first"});function*f(t,e){if(e!==d.CauseFirst&&e!==d.ConsequenceFirst)throw new o("Invalid sequence order",a.InvalidInput,{metadata:{order:e}});null!=t&&(e===d.ConsequenceFirst&&(yield t),t instanceof o&&(yield*f(t.cause,e)),e===d.CauseFirst&&(yield t))}function m(t,e){if(t.length<=e)return t;var r=Math.floor(e/2),n=e-r-"...".length,a=t.substr(0,r),i=t.substr(t.length-n);return"".concat(a).concat("...").concat(i)}}}]);
//# sourceMappingURL=../../../../../../../../../sourcemaps/en/vendors~./javascript/app-shell-package/app-entry~./javascript/badges-package/viewbadges-entry~./java~161cee25.2411dd65df30ddd511e7.js.map