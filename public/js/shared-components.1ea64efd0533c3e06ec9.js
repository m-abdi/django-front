(window.webpackJsonp=window.webpackJsonp||[]).push([["shared-components"],{"7e7+":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("pVnL")),i=g(r("q1tI")),a=r("mR6N"),l=g(r("4PhQ")),u=r("Pk2J"),s=r("yhei"),c=r("JimW"),f=n(r("Pwnf")),p=n(r("gE8/")),d=r("g8Be"),y=n(r("cfQQ")),h=g(r("HEOz")),m=n(r("CdqX"));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}return n.default=e,r&&r.set(e,n),n}const O={timedOut:h._("We're sorry this is taking so long...")},b=Math.random()<.1;class w extends i.Component{constructor(e){super(e),this.state={firstTimeoutHit:!1,secondTimeoutHit:!1},this._mounted=!1}componentDidMount(){this._mounted=!0;const{sentryId:e,sentryTeam:t,timeoutSeconds:r,schedule:n}=this.props,o=`${e}|${Date.now()}|${Math.floor(1e5*Math.random())}`,i=()=>{this._mounted&&this.setState({secondTimeoutHit:!0}),this.logTimeout(`Spinner timeout: second (${t})`,2*r,o)};n.timeout((()=>{this._mounted&&this.setState({firstTimeoutHit:!0}),this.logTimeout(`Spinner timeout: first (${t})`,r,o),n.timeout(i,1e3*r)}),1e3*r)}componentWillUnmount(){this._mounted=!1}logTimeout(e,t,r){const{description:n,profile:i,sentryExtras:a,sentryId:u}=this.props,s=null==i?void 0:i.get("nickname"),c=(0,o.default)({},a,{sentryId:u,description:n,timeoutSeconds:t,user:s,timeoutId:r});b?l.default.error(e,l.Errors.Internal,{sentryData:{contexts:{"Timeout Details":c}}}):l.default.log(e,c)}render(){const{notifyUser:e,size:t,light:r,style:n}=this.props,{firstTimeoutHit:o,secondTimeoutHit:a}=this.state,l=r?f.default.white64:f.default.offBlack;return i.createElement(c.View,{style:[j.containerDefault,n]},i.createElement(s.CircularSpinner,{size:t,light:r}),o&&e&&i.createElement(c.Text,{style:[j.userNotification,{color:l}]},a?i.createElement(m.default,null):O.timedOut))}}w.defaultProps={size:"large",light:!1,timeoutSeconds:15};const j=a.StyleSheet.create({containerDefault:{alignItems:"center"},userNotification:{marginTop:p.default.xSmall_8,marginBottom:p.default.xSmall_8,fontSize:16}});var k=(0,u.compose)(d.withActionScheduler,y.default)(w);t.default=k},"9XoI":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pathIsInShell=t.onClickWithMarkConversions=t.getLinkElement=void 0;var n=r("55Ip"),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r("ZpD3"));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}const a=e=>!(e.indexOf("//")>=0)&&(!e.startsWith("javascript:")&&("/mission/sat"!==e&&"/sat"!==e));t.pathIsInShell=a;t.getLinkElement=(e="",t,r)=>t&&!r&&a(e)?n.Link:"a";t.onClickWithMarkConversions=(e,t,r,n)=>i=>{if(t&&t(i),r)for(const t of r)e("string"==typeof t?{id:t}:t);n&&o.markMinorConversions(n)}},CaQm:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Skeleton=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),i=r("mR6N"),a=n(r("Pwnf")),l=n(r("duQp"));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}t.Skeleton=({width:e,height:t})=>o.createElement("div",{style:{width:e,height:t},className:(0,i.css)(s.skeleton)});const s=i.StyleSheet.create({shimmer:{animationName:{"0%":{opacity:.4},"50%":{opacity:1},"100%":{opacity:.4}},animationDuration:"2s",animationIterationCount:"infinite"},skeleton:{background:a.default.offBlack8}});var c=(0,l.default)((({children:e,prefersReducedMotion:t})=>t?e:o.createElement("div",{className:(0,i.css)(s.shimmer)},e)));t.default=c},QCGh:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("pVnL")),i=n(r("8OQS")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),l=r("mR6N");const u=["children","className","highlighted","href","inlineStyles","referrer","style","target","testId","element"];function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}const c="javascript:void(0)";class f extends a.Component{render(){const e=this.props,{children:t,className:r,highlighted:n,href:s,inlineStyles:f,referrer:d,style:y,target:h,testId:m,element:v}=e,g=(0,i.default)(e,u),[O,b]=s?s.split("#"):[c];let w=O;d&&(w.indexOf("?")>-1?w+="&ref="+d:w+="?ref="+d),b&&(w+="#"+b);const j=[p.link,n&&p.highlighted];Array.isArray(y)?j.push.apply(j,y):j.push(y);const k=r?" "+r:"",P="a"===v?{href:w}:{to:w};let M=g.rel;return"_blank"!==h||M||(M="noopener noreferrer"),a.createElement(v,(0,o.default)({"data-test-id":m},g,P,{className:l.css.apply(void 0,j)+k,style:f,target:h,rel:M}),t)}}f.defaultProps={highlighted:!1,href:c,style:[],element:"a"};const p=l.StyleSheet.create({link:{backgroundColor:"transparent",color:"inherit",textDecoration:"none",":hover":{textDecoration:"underline"}},highlighted:{textDecoration:"underline"}});var d=f;t.default=d},"g+DZ":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(r("pVnL")),i=n(r("8OQS")),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var a=o?Object.getOwnPropertyDescriptor(e,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),l=r("Ty5D"),u=r("9XoI"),s=n(r("QCGh")),c=n(r("bHum"));const f=["forceServer","to","onClick","conversions","inputRef","minorConversions"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var d=e=>{let{forceServer:t,to:r,onClick:n,conversions:p,inputRef:d,minorConversions:y}=e,h=(0,i.default)(e,f);const m=a.useContext(l.__RouterContext);return a.createElement(c.default,null,(e=>a.createElement(s.default,(0,o.default)({},h,{href:r,ref:d,element:(0,u.getLinkElement)(r,m,t),onClick:(0,u.onClickWithMarkConversions)(e,n,p,y)}))))};t.default=d},mCQM:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),o=r("mR6N");function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}class a extends n.Component{render(){return n.createElement("div",{className:(0,o.css)(l.grow)})}}const l=o.StyleSheet.create({grow:{flexGrow:1}});var u=a;t.default=u},nVHT:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=a(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(n,i,l):n[i]=e[i]}n.default=e,r&&r.set(e,n);return n}(r("q1tI")),o=r("mR6N"),i=r("yhei");function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}class l extends n.Component{render(){const{size:e,light:t,inline:r}=this.props;return n.createElement(i.CircularSpinner,{size:e,light:t,style:[u.spinnerContainer,r&&u.inlineSpinnerContainer]})}}l.defaultProps={size:"large",light:!1};const u=o.StyleSheet.create({spinnerContainer:{display:"flex",alignItems:"center"},inlineSpinnerContainer:{display:"inline"}});var s=l;t.default=s}}]);
//# sourceMappingURL=../../sourcemaps/en/shared-components.1ea64efd0533c3e06ec9.js.map