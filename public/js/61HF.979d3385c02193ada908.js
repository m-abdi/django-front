(window.webpackJsonp=window.webpackJsonp||[]).push([["61HF"],{"/amy":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=t("4PhQ");var a=function(e){const r=/(<([^>^/]+)\s*\/>)|(<([^>]+)>([^<]*)<(\/?)([^>]+)>)|([^<]+)/gm;e=e.trim();const t=[];let a;for(;a=r.exec(e);)if(null!=a[2]){const e=a[2].trim();if(e.includes(" "))throw new n.KAError(`I18nInlineMarkup: expected a tag without attributes, but received: <${e}/>`,n.Errors.Internal);t.push({type:"tag",tag:e,children:null})}else if(null!=a[4]){const e=a[4].trim();if(e.includes(" "))throw new n.KAError(`I18nInlineMarkup: expected a tag without attributes, but received: <${a[4]}>`,n.Errors.Internal);if("/"!==a[6])throw new n.KAError(`I18nInlineMarkup: nested tags are not supported, but <${a[7]}> is nested underneath <${e}>.`,n.Errors.Internal);if(e!==a[7].trim())throw new n.KAError(`I18nInlineMarkup: expected closing tag </${a[4]}>, but got </${a[7]}>`,n.Errors.Internal);t.push({type:"tag",tag:e,children:a[5]})}else{if(null==a[8])throw new n.KAError("I18nInlineMarkup: unknown error (maybe you have an extra '<')?",n.Errors.Internal);t.push({type:"text",text:a[8]})}if(1===t.length&&("text"===t[0].type||!t[0].children))throw new n.KAError("Unnecessary use of I18nInlineMarkup.",n.Errors.Internal);return t};r.default=a},"0inE":function(e,r,t){"use strict";var n=t("TqRt");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a=n(t("8OQS")),o=c(t("q1tI")),u=c(t("4PhQ")),l=n(t("Q8Wn")),i=n(t("/amy"));const s=["children","elementWrapper"];function p(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(p=function(e){return e?t:r})(e)}function c(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=p(r);if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}class f extends o.PureComponent{render(){const e=this.props,{children:r,elementWrapper:t}=e,n=(0,a.default)(e,s);let p;try{p=(0,i.default)(r)}catch(e){return"en-pt"!==l.default.kaLocale&&u.default.error(`I18nInlineMarkup: Broken markup found for ${l.default.kaLocale} in: ${r}`,u.Errors.Internal),r}return p.map(((e,r)=>{if("text"===e.type)return t?o.createElement(o.Fragment,{key:r},t(e.text,"text",r)):e.text;if("tag"===e.type){const a=n[e.tag];if(!a)throw new u.KAError(`I18nInlineMarkup: missing render prop for ${e.tag}`,u.Errors.Internal);return t?o.createElement(o.Fragment,{key:r},t(a(e.children),e.tag,r)):o.createElement(o.Fragment,{key:r},a(e.children))}throw new u.KAError("Unknown child type.",u.Errors.Internal)}))}}r.default=f}}]);
//# sourceMappingURL=../../sourcemaps/en/61HF.979d3385c02193ada908.js.map