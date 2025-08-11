(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();var ld={exports:{}},Pl={},ad={exports:{}},ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _g;function Q0(){if(_g)return ge;_g=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),T=Symbol.iterator;function I(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,q={};function Q(O,V,se){this.props=O,this.context=V,this.refs=q,this.updater=se||W}Q.prototype.isReactComponent={},Q.prototype.setState=function(O,V){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,V,"setState")},Q.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function de(){}de.prototype=Q.prototype;function fe(O,V,se){this.props=O,this.context=V,this.refs=q,this.updater=se||W}var ve=fe.prototype=new de;ve.constructor=fe,z(ve,Q.prototype),ve.isPureReactComponent=!0;var Pe=Array.isArray,ht=Object.prototype.hasOwnProperty,Le={current:null},D={key:!0,ref:!0,__self:!0,__source:!0};function S(O,V,se){var pe,me={},Se=null,xe=null;if(V!=null)for(pe in V.ref!==void 0&&(xe=V.ref),V.key!==void 0&&(Se=""+V.key),V)ht.call(V,pe)&&!D.hasOwnProperty(pe)&&(me[pe]=V[pe]);var De=arguments.length-2;if(De===1)me.children=se;else if(1<De){for(var je=Array(De),dt=0;dt<De;dt++)je[dt]=arguments[dt+2];me.children=je}if(O&&O.defaultProps)for(pe in De=O.defaultProps,De)me[pe]===void 0&&(me[pe]=De[pe]);return{$$typeof:r,type:O,key:Se,ref:xe,props:me,_owner:Le.current}}function N(O,V){return{$$typeof:r,type:O.type,key:V,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function x(O){var V={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(se){return V[se]})}var L=/\/+/g;function C(O,V){return typeof O=="object"&&O!==null&&O.key!=null?x(""+O.key):V.toString(36)}function Ze(O,V,se,pe,me){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case r:case e:xe=!0}}if(xe)return xe=O,me=me(xe),O=pe===""?"."+C(xe,0):pe,Pe(me)?(se="",O!=null&&(se=O.replace(L,"$&/")+"/"),Ze(me,V,se,"",function(dt){return dt})):me!=null&&(P(me)&&(me=N(me,se+(!me.key||xe&&xe.key===me.key?"":(""+me.key).replace(L,"$&/")+"/")+O)),V.push(me)),1;if(xe=0,pe=pe===""?".":pe+":",Pe(O))for(var De=0;De<O.length;De++){Se=O[De];var je=pe+C(Se,De);xe+=Ze(Se,V,se,je,me)}else if(je=I(O),typeof je=="function")for(O=je.call(O),De=0;!(Se=O.next()).done;)Se=Se.value,je=pe+C(Se,De++),xe+=Ze(Se,V,se,je,me);else if(Se==="object")throw V=String(O),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return xe}function Nt(O,V,se){if(O==null)return O;var pe=[],me=0;return Ze(O,pe,"","",function(Se){return V.call(se,Se,me++)}),pe}function At(O){if(O._status===-1){var V=O._result;V=V(),V.then(function(se){(O._status===0||O._status===-1)&&(O._status=1,O._result=se)},function(se){(O._status===0||O._status===-1)&&(O._status=2,O._result=se)}),O._status===-1&&(O._status=0,O._result=V)}if(O._status===1)return O._result.default;throw O._result}var be={current:null},X={transition:null},oe={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:X,ReactCurrentOwner:Le};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ge.Children={map:Nt,forEach:function(O,V,se){Nt(O,function(){V.apply(this,arguments)},se)},count:function(O){var V=0;return Nt(O,function(){V++}),V},toArray:function(O){return Nt(O,function(V){return V})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ge.Component=Q,ge.Fragment=t,ge.Profiler=l,ge.PureComponent=fe,ge.StrictMode=s,ge.Suspense=_,ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,ge.act=Z,ge.cloneElement=function(O,V,se){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var pe=z({},O.props),me=O.key,Se=O.ref,xe=O._owner;if(V!=null){if(V.ref!==void 0&&(Se=V.ref,xe=Le.current),V.key!==void 0&&(me=""+V.key),O.type&&O.type.defaultProps)var De=O.type.defaultProps;for(je in V)ht.call(V,je)&&!D.hasOwnProperty(je)&&(pe[je]=V[je]===void 0&&De!==void 0?De[je]:V[je])}var je=arguments.length-2;if(je===1)pe.children=se;else if(1<je){De=Array(je);for(var dt=0;dt<je;dt++)De[dt]=arguments[dt+2];pe.children=De}return{$$typeof:r,type:O.type,key:me,ref:Se,props:pe,_owner:xe}},ge.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:c,_context:O},O.Consumer=O},ge.createElement=S,ge.createFactory=function(O){var V=S.bind(null,O);return V.type=O,V},ge.createRef=function(){return{current:null}},ge.forwardRef=function(O){return{$$typeof:m,render:O}},ge.isValidElement=P,ge.lazy=function(O){return{$$typeof:k,_payload:{_status:-1,_result:O},_init:At}},ge.memo=function(O,V){return{$$typeof:v,type:O,compare:V===void 0?null:V}},ge.startTransition=function(O){var V=X.transition;X.transition={};try{O()}finally{X.transition=V}},ge.unstable_act=Z,ge.useCallback=function(O,V){return be.current.useCallback(O,V)},ge.useContext=function(O){return be.current.useContext(O)},ge.useDebugValue=function(){},ge.useDeferredValue=function(O){return be.current.useDeferredValue(O)},ge.useEffect=function(O,V){return be.current.useEffect(O,V)},ge.useId=function(){return be.current.useId()},ge.useImperativeHandle=function(O,V,se){return be.current.useImperativeHandle(O,V,se)},ge.useInsertionEffect=function(O,V){return be.current.useInsertionEffect(O,V)},ge.useLayoutEffect=function(O,V){return be.current.useLayoutEffect(O,V)},ge.useMemo=function(O,V){return be.current.useMemo(O,V)},ge.useReducer=function(O,V,se){return be.current.useReducer(O,V,se)},ge.useRef=function(O){return be.current.useRef(O)},ge.useState=function(O){return be.current.useState(O)},ge.useSyncExternalStore=function(O,V,se){return be.current.useSyncExternalStore(O,V,se)},ge.useTransition=function(){return be.current.useTransition()},ge.version="18.3.1",ge}var yg;function nf(){return yg||(yg=1,ad.exports=Q0()),ad.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vg;function X0(){if(vg)return Pl;vg=1;var r=nf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(m,_,v){var k,T={},I=null,W=null;v!==void 0&&(I=""+v),_.key!==void 0&&(I=""+_.key),_.ref!==void 0&&(W=_.ref);for(k in _)s.call(_,k)&&!c.hasOwnProperty(k)&&(T[k]=_[k]);if(m&&m.defaultProps)for(k in _=m.defaultProps,_)T[k]===void 0&&(T[k]=_[k]);return{$$typeof:e,type:m,key:I,ref:W,props:T,_owner:l.current}}return Pl.Fragment=t,Pl.jsx=h,Pl.jsxs=h,Pl}var wg;function J0(){return wg||(wg=1,ld.exports=X0()),ld.exports}var re=J0(),bt=nf(),Du={},ud={exports:{}},Qt={},cd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function Z0(){return Eg||(Eg=1,function(r){function e(X,oe){var Z=X.length;X.push(oe);e:for(;0<Z;){var O=Z-1>>>1,V=X[O];if(0<l(V,oe))X[O]=oe,X[Z]=V,Z=O;else break e}}function t(X){return X.length===0?null:X[0]}function s(X){if(X.length===0)return null;var oe=X[0],Z=X.pop();if(Z!==oe){X[0]=Z;e:for(var O=0,V=X.length,se=V>>>1;O<se;){var pe=2*(O+1)-1,me=X[pe],Se=pe+1,xe=X[Se];if(0>l(me,Z))Se<V&&0>l(xe,me)?(X[O]=xe,X[Se]=Z,O=Se):(X[O]=me,X[pe]=Z,O=pe);else if(Se<V&&0>l(xe,Z))X[O]=xe,X[Se]=Z,O=Se;else break e}}return oe}function l(X,oe){var Z=X.sortIndex-oe.sortIndex;return Z!==0?Z:X.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var _=[],v=[],k=1,T=null,I=3,W=!1,z=!1,q=!1,Q=typeof setTimeout=="function"?setTimeout:null,de=typeof clearTimeout=="function"?clearTimeout:null,fe=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ve(X){for(var oe=t(v);oe!==null;){if(oe.callback===null)s(v);else if(oe.startTime<=X)s(v),oe.sortIndex=oe.expirationTime,e(_,oe);else break;oe=t(v)}}function Pe(X){if(q=!1,ve(X),!z)if(t(_)!==null)z=!0,At(ht);else{var oe=t(v);oe!==null&&be(Pe,oe.startTime-X)}}function ht(X,oe){z=!1,q&&(q=!1,de(S),S=-1),W=!0;var Z=I;try{for(ve(oe),T=t(_);T!==null&&(!(T.expirationTime>oe)||X&&!x());){var O=T.callback;if(typeof O=="function"){T.callback=null,I=T.priorityLevel;var V=O(T.expirationTime<=oe);oe=r.unstable_now(),typeof V=="function"?T.callback=V:T===t(_)&&s(_),ve(oe)}else s(_);T=t(_)}if(T!==null)var se=!0;else{var pe=t(v);pe!==null&&be(Pe,pe.startTime-oe),se=!1}return se}finally{T=null,I=Z,W=!1}}var Le=!1,D=null,S=-1,N=5,P=-1;function x(){return!(r.unstable_now()-P<N)}function L(){if(D!==null){var X=r.unstable_now();P=X;var oe=!0;try{oe=D(!0,X)}finally{oe?C():(Le=!1,D=null)}}else Le=!1}var C;if(typeof fe=="function")C=function(){fe(L)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,Nt=Ze.port2;Ze.port1.onmessage=L,C=function(){Nt.postMessage(null)}}else C=function(){Q(L,0)};function At(X){D=X,Le||(Le=!0,C())}function be(X,oe){S=Q(function(){X(r.unstable_now())},oe)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_continueExecution=function(){z||W||(z=!0,At(ht))},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return I},r.unstable_getFirstCallbackNode=function(){return t(_)},r.unstable_next=function(X){switch(I){case 1:case 2:case 3:var oe=3;break;default:oe=I}var Z=I;I=oe;try{return X()}finally{I=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(X,oe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var Z=I;I=X;try{return oe()}finally{I=Z}},r.unstable_scheduleCallback=function(X,oe,Z){var O=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?O+Z:O):Z=O,X){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=Z+V,X={id:k++,callback:oe,priorityLevel:X,startTime:Z,expirationTime:V,sortIndex:-1},Z>O?(X.sortIndex=Z,e(v,X),t(_)===null&&X===t(v)&&(q?(de(S),S=-1):q=!0,be(Pe,Z-O))):(X.sortIndex=V,e(_,X),z||W||(z=!0,At(ht))),X},r.unstable_shouldYield=x,r.unstable_wrapCallback=function(X){var oe=I;return function(){var Z=I;I=oe;try{return X.apply(this,arguments)}finally{I=Z}}}}(hd)),hd}var Sg;function eE(){return Sg||(Sg=1,cd.exports=Z0()),cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ig;function tE(){if(Ig)return Qt;Ig=1;var r=nf(),e=eE();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(l[n]=i,n=0;n<i.length;n++)s.add(i[n])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},T={};function I(n){return _.call(T,n)?!0:_.call(k,n)?!1:v.test(n)?T[n]=!0:(k[n]=!0,!1)}function W(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function z(n,i,o,u){if(i===null||typeof i>"u"||W(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,o,u,d,p,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=y}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Q[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];Q[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){Q[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Q[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Q[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){Q[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){Q[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){Q[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){Q[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var de=/[\-:]([a-z])/g;function fe(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(de,fe);Q[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(de,fe);Q[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(de,fe);Q[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){Q[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){Q[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function ve(n,i,o,u){var d=Q.hasOwnProperty(i)?Q[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(z(i,o,d,u)&&(o=null),u||d===null?I(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var Pe=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ht=Symbol.for("react.element"),Le=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),x=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),Ze=Symbol.for("react.suspense_list"),Nt=Symbol.for("react.memo"),At=Symbol.for("react.lazy"),be=Symbol.for("react.offscreen"),X=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,O;function V(n){if(O===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var se=!1;function pe(n,i){if(!n||se)return"";se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(U){var u=U}Reflect.construct(n,[],i)}else{try{i.call()}catch(U){u=U}n.call(i.prototype)}else{try{throw Error()}catch(U){u=U}n()}}catch(U){if(U&&u&&typeof U.stack=="string"){for(var d=U.stack.split(`
`),p=u.stack.split(`
`),y=d.length-1,E=p.length-1;1<=y&&0<=E&&d[y]!==p[E];)E--;for(;1<=y&&0<=E;y--,E--)if(d[y]!==p[E]){if(y!==1||E!==1)do if(y--,E--,0>E||d[y]!==p[E]){var A=`
`+d[y].replace(" at new "," at ");return n.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",n.displayName)),A}while(1<=y&&0<=E);break}}}finally{se=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?V(n):""}function me(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=pe(n.type,!1),n;case 11:return n=pe(n.type.render,!1),n;case 1:return n=pe(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case D:return"Fragment";case Le:return"Portal";case N:return"Profiler";case S:return"StrictMode";case C:return"Suspense";case Ze:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case x:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case L:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Nt:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case At:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===S?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function je(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function dt(n){var i=je(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){u=""+y,p.call(this,y)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(y){u=""+y},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function lr(n){n._valueTracker||(n._valueTracker=dt(n))}function vs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=je(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function Ur(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ki(n,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ws(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=De(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Lo(n,i){i=i.checked,i!=null&&ve(n,"checked",i,!1)}function Mo(n,i){Lo(n,i);var o=De(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Es(n,i.type,o):i.hasOwnProperty("defaultValue")&&Es(n,i.type,De(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ya(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Es(n,i,o){(i!=="number"||Ur(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var ar=Array.isArray;function ur(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+De(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function bo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ss(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(ar(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:De(o)}}function Is(n,i){var o=De(i.value),u=De(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Fo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function it(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function st(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?it(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cr,Uo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(cr=cr||document.createElement("div"),cr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=cr.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function jr(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ni={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ai=["Webkit","ms","Moz","O"];Object.keys(Ni).forEach(function(n){Ai.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ni[i]=Ni[n]})});function jo(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ni.hasOwnProperty(n)&&Ni[n]?(""+i).trim():i+"px"}function Vo(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=jo(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var zo=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,i){if(i){if(zo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Wo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ri=null;function Cs(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ho=null,an=null,$n=null;function Ts(n){if(n=ml(n)){if(typeof Ho!="function")throw Error(t(280));var i=n.stateNode;i&&(i=qa(i),Ho(n.stateNode,n.type,i))}}function hr(n){an?$n?$n.push(n):$n=[n]:an=n}function $o(){if(an){var n=an,i=$n;if($n=an=null,Ts(n),i)for(n=0;n<i.length;n++)Ts(i[n])}}function ks(n,i){return n(i)}function Go(){}var dr=!1;function qo(n,i,o){if(dr)return n(i,o);dr=!0;try{return ks(n,i,o)}finally{dr=!1,(an!==null||$n!==null)&&(Go(),$o())}}function et(n,i){var o=n.stateNode;if(o===null)return null;var u=qa(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ns=!1;if(m)try{var wn={};Object.defineProperty(wn,"passive",{get:function(){Ns=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Ns=!1}function Pi(n,i,o,u,d,p,y,E,A){var U=Array.prototype.slice.call(arguments,3);try{i.apply(o,U)}catch(H){this.onError(H)}}var xi=!1,As=null,En=!1,Ko=null,Lc={onError:function(n){xi=!0,As=n}};function Yo(n,i,o,u,d,p,y,E,A){xi=!1,As=null,Pi.apply(Lc,arguments)}function Mc(n,i,o,u,d,p,y,E,A){if(Yo.apply(this,arguments),xi){if(xi){var U=As;xi=!1,As=null}else throw Error(t(198));En||(En=!0,Ko=U)}}function Sn(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Di(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function In(n){if(Sn(n)!==n)throw Error(t(188))}function va(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return In(d),n;if(p===u)return In(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=p;else{for(var y=!1,E=d.child;E;){if(E===o){y=!0,o=d,u=p;break}if(E===u){y=!0,u=d,o=p;break}E=E.sibling}if(!y){for(E=p.child;E;){if(E===o){y=!0,o=p,u=d;break}if(E===u){y=!0,u=p,o=d;break}E=E.sibling}if(!y)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Qo(n){return n=va(n),n!==null?Rs(n):null}function Rs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Rs(n);if(i!==null)return i;n=n.sibling}return null}var Ps=e.unstable_scheduleCallback,Xo=e.unstable_cancelCallback,wa=e.unstable_shouldYield,bc=e.unstable_requestPaint,Ve=e.unstable_now,Ea=e.unstable_getCurrentPriorityLevel,Oi=e.unstable_ImmediatePriority,Vr=e.unstable_UserBlockingPriority,un=e.unstable_NormalPriority,Jo=e.unstable_LowPriority,Sa=e.unstable_IdlePriority,Li=null,en=null;function Ia(n){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Li,n,void 0,(n.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:Ta,Zo=Math.log,Ca=Math.LN2;function Ta(n){return n>>>=0,n===0?32:31-(Zo(n)/Ca|0)|0}var xs=64,Ds=4194304;function zr(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mi(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,p=n.pingedLanes,y=o&268435455;if(y!==0){var E=y&~d;E!==0?u=zr(E):(p&=y,p!==0&&(u=zr(p)))}else y=o&~d,y!==0?u=zr(y):p!==0&&(u=zr(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Ot(i),d=1<<o,u|=n[o],i&=~d;return u}function Fc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fr(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var y=31-Ot(p),E=1<<y,A=d[y];A===-1?((E&o)===0||(E&u)!==0)&&(d[y]=Fc(E,i)):A<=i&&(n.expiredLanes|=E),p&=~E}}function tn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function bi(){var n=xs;return xs<<=1,(xs&4194240)===0&&(xs=64),n}function Br(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Wr(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ot(i),n[i]=o}function Ue(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Ot(o),p=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~p}}function Hr(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Ot(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var Ee=0;function $r(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var ka,Os,Na,Aa,Ra,el=!1,Gn=[],wt=null,Cn=null,Tn=null,Gr=new Map,cn=new Map,qn=[],Uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pa(n,i){switch(n){case"focusin":case"focusout":wt=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Gr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":cn.delete(i.pointerId)}}function Bt(n,i,o,u,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[d]},i!==null&&(i=ml(i),i!==null&&Os(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function jc(n,i,o,u,d){switch(i){case"focusin":return wt=Bt(wt,n,i,o,u,d),!0;case"dragenter":return Cn=Bt(Cn,n,i,o,u,d),!0;case"mouseover":return Tn=Bt(Tn,n,i,o,u,d),!0;case"pointerover":var p=d.pointerId;return Gr.set(p,Bt(Gr.get(p)||null,n,i,o,u,d)),!0;case"gotpointercapture":return p=d.pointerId,cn.set(p,Bt(cn.get(p)||null,n,i,o,u,d)),!0}return!1}function xa(n){var i=Vi(n.target);if(i!==null){var o=Sn(i);if(o!==null){if(i=o.tag,i===13){if(i=Di(o),i!==null){n.blockedOn=i,Ra(n.priority,function(){Na(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function pr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Ls(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ri=u,o.target.dispatchEvent(u),Ri=null}else return i=ml(o),i!==null&&Os(i),n.blockedOn=o,!1;i.shift()}return!0}function Fi(n,i,o){pr(n)&&o.delete(i)}function Da(){el=!1,wt!==null&&pr(wt)&&(wt=null),Cn!==null&&pr(Cn)&&(Cn=null),Tn!==null&&pr(Tn)&&(Tn=null),Gr.forEach(Fi),cn.forEach(Fi)}function kn(n,i){n.blockedOn===i&&(n.blockedOn=null,el||(el=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Da)))}function Nn(n){function i(d){return kn(d,n)}if(0<Gn.length){kn(Gn[0],n);for(var o=1;o<Gn.length;o++){var u=Gn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(wt!==null&&kn(wt,n),Cn!==null&&kn(Cn,n),Tn!==null&&kn(Tn,n),Gr.forEach(i),cn.forEach(i),o=0;o<qn.length;o++)u=qn[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<qn.length&&(o=qn[0],o.blockedOn===null);)xa(o),o.blockedOn===null&&qn.shift()}var mr=Pe.ReactCurrentBatchConfig,qr=!0;function qe(n,i,o,u){var d=Ee,p=mr.transition;mr.transition=null;try{Ee=1,tl(n,i,o,u)}finally{Ee=d,mr.transition=p}}function Vc(n,i,o,u){var d=Ee,p=mr.transition;mr.transition=null;try{Ee=4,tl(n,i,o,u)}finally{Ee=d,mr.transition=p}}function tl(n,i,o,u){if(qr){var d=Ls(n,i,o,u);if(d===null)Xc(n,i,u,Ui,o),Pa(n,u);else if(jc(d,n,i,o,u))u.stopPropagation();else if(Pa(n,u),i&4&&-1<Uc.indexOf(n)){for(;d!==null;){var p=ml(d);if(p!==null&&ka(p),p=Ls(n,i,o,u),p===null&&Xc(n,i,u,Ui,o),p===d)break;d=p}d!==null&&u.stopPropagation()}else Xc(n,i,u,null,o)}}var Ui=null;function Ls(n,i,o,u){if(Ui=null,n=Cs(u),n=Vi(n),n!==null)if(i=Sn(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Di(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ui=n,null}function nl(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ea()){case Oi:return 1;case Vr:return 4;case un:case Jo:return 16;case Sa:return 536870912;default:return 16}default:return 16}}var nn=null,Ms=null,Wt=null;function rl(){if(Wt)return Wt;var n,i=Ms,o=i.length,u,d="value"in nn?nn.value:nn.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var y=o-n;for(u=1;u<=y&&i[o-u]===d[p-u];u++);return Wt=d.slice(n,1<u?1-u:void 0)}function bs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Kn(){return!0}function il(){return!1}function Et(n){function i(o,u,d,p,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var E in n)n.hasOwnProperty(E)&&(o=n[E],this[E]=o?o(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Kn:il,this.isPropagationStopped=il,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Kn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Kn)},persist:function(){},isPersistent:Kn}),i}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fs=Et(An),Yn=Z({},An,{view:0,detail:0}),zc=Et(Yn),Us,gr,Kr,ji=Z({},Yn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:a,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Kr&&(Kr&&n.type==="mousemove"?(Us=n.screenX-Kr.screenX,gr=n.screenY-Kr.screenY):gr=Us=0,Kr=n),Us)},movementY:function(n){return"movementY"in n?n.movementY:gr}}),js=Et(ji),sl=Z({},ji,{dataTransfer:0}),Oa=Et(sl),Vs=Z({},Yn,{relatedTarget:0}),zs=Et(Vs),La=Z({},An,{animationName:0,elapsedTime:0,pseudoElement:0}),_r=Et(La),Ma=Z({},An,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),ba=Et(Ma),Fa=Z({},An,{data:0}),ol=Et(Fa),Ht={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ua={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ja={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yr(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=ja[n])?!!i[n]:!1}function a(){return Yr}var f=Z({},Yn,{key:function(n){if(n.key){var i=Ht[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=bs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ua[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:a,charCode:function(n){return n.type==="keypress"?bs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?bs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),g=Et(f),w=Z({},ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),M=Et(w),j=Z({},Yn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:a}),Y=Et(j),Me=Z({},An,{propertyName:0,elapsedTime:0,pseudoElement:0}),ot=Et(Me),Ie=Z({},ji,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),ft=Et(Ie),pt=[9,13,27,32],Qn=m&&"CompositionEvent"in window,St=null;m&&"documentMode"in document&&(St=document.documentMode);var Bs=m&&"TextEvent"in window&&!St,Ws=m&&(!Qn||St&&8<St&&11>=St),cp=" ",hp=!1;function dp(n,i){switch(n){case"keyup":return pt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function qw(n,i){switch(n){case"compositionend":return fp(i);case"keypress":return i.which!==32?null:(hp=!0,cp);case"textInput":return n=i.data,n===cp&&hp?null:n;default:return null}}function Kw(n,i){if(Hs)return n==="compositionend"||!Qn&&dp(n,i)?(n=rl(),Wt=Ms=nn=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ws&&i.locale!=="ko"?null:i.data;default:return null}}var Yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Yw[n.type]:i==="textarea"}function mp(n,i,o,u){hr(u),i=Ha(i,"onChange"),0<i.length&&(o=new Fs("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var ll=null,al=null;function Qw(n){Op(n,0)}function Va(n){var i=Ys(n);if(vs(i))return n}function Xw(n,i){if(n==="change")return i}var gp=!1;if(m){var Bc;if(m){var Wc="oninput"in document;if(!Wc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Wc=typeof _p.oninput=="function"}Bc=Wc}else Bc=!1;gp=Bc&&(!document.documentMode||9<document.documentMode)}function yp(){ll&&(ll.detachEvent("onpropertychange",vp),al=ll=null)}function vp(n){if(n.propertyName==="value"&&Va(al)){var i=[];mp(i,al,n,Cs(n)),qo(Qw,i)}}function Jw(n,i,o){n==="focusin"?(yp(),ll=i,al=o,ll.attachEvent("onpropertychange",vp)):n==="focusout"&&yp()}function Zw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Va(al)}function e0(n,i){if(n==="click")return Va(i)}function t0(n,i){if(n==="input"||n==="change")return Va(i)}function n0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Rn=typeof Object.is=="function"?Object.is:n0;function ul(n,i){if(Rn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!_.call(i,d)||!Rn(n[d],i[d]))return!1}return!0}function wp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,i){var o=wp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=wp(o)}}function Sp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ip(){for(var n=window,i=Ur();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=Ur(n.document)}return i}function Hc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function r0(n){var i=Ip(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Sp(o.ownerDocument.documentElement,o)){if(u!==null&&Hc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(u.start,d);u=u.end===void 0?p:Math.min(u.end,d),!n.extend&&p>u&&(d=u,u=p,p=d),d=Ep(o,p);var y=Ep(o,u);d&&y&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var i0=m&&"documentMode"in document&&11>=document.documentMode,$s=null,$c=null,cl=null,Gc=!1;function Cp(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Gc||$s==null||$s!==Ur(u)||(u=$s,"selectionStart"in u&&Hc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),cl&&ul(cl,u)||(cl=u,u=Ha($c,"onSelect"),0<u.length&&(i=new Fs("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=$s)))}function za(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Gs={animationend:za("Animation","AnimationEnd"),animationiteration:za("Animation","AnimationIteration"),animationstart:za("Animation","AnimationStart"),transitionend:za("Transition","TransitionEnd")},qc={},Tp={};m&&(Tp=document.createElement("div").style,"AnimationEvent"in window||(delete Gs.animationend.animation,delete Gs.animationiteration.animation,delete Gs.animationstart.animation),"TransitionEvent"in window||delete Gs.transitionend.transition);function Ba(n){if(qc[n])return qc[n];if(!Gs[n])return n;var i=Gs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Tp)return qc[n]=i[o];return n}var kp=Ba("animationend"),Np=Ba("animationiteration"),Ap=Ba("animationstart"),Rp=Ba("transitionend"),Pp=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qr(n,i){Pp.set(n,i),c(i,[n])}for(var Kc=0;Kc<xp.length;Kc++){var Yc=xp[Kc],s0=Yc.toLowerCase(),o0=Yc[0].toUpperCase()+Yc.slice(1);Qr(s0,"on"+o0)}Qr(kp,"onAnimationEnd"),Qr(Np,"onAnimationIteration"),Qr(Ap,"onAnimationStart"),Qr("dblclick","onDoubleClick"),Qr("focusin","onFocus"),Qr("focusout","onBlur"),Qr(Rp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l0=new Set("cancel close invalid load scroll toggle".split(" ").concat(hl));function Dp(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,Mc(u,i,void 0,n),n.currentTarget=null}function Op(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var y=u.length-1;0<=y;y--){var E=u[y],A=E.instance,U=E.currentTarget;if(E=E.listener,A!==p&&d.isPropagationStopped())break e;Dp(d,E,U),p=A}else for(y=0;y<u.length;y++){if(E=u[y],A=E.instance,U=E.currentTarget,E=E.listener,A!==p&&d.isPropagationStopped())break e;Dp(d,E,U),p=A}}}if(En)throw n=Ko,En=!1,Ko=null,n}function He(n,i){var o=i[rh];o===void 0&&(o=i[rh]=new Set);var u=n+"__bubble";o.has(u)||(Lp(i,n,2,!1),o.add(u))}function Qc(n,i,o){var u=0;i&&(u|=4),Lp(o,n,u,i)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function dl(n){if(!n[Wa]){n[Wa]=!0,s.forEach(function(o){o!=="selectionchange"&&(l0.has(o)||Qc(o,!1,n),Qc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Wa]||(i[Wa]=!0,Qc("selectionchange",!1,i))}}function Lp(n,i,o,u){switch(nl(i)){case 1:var d=qe;break;case 4:d=Vc;break;default:d=tl}o=d.bind(null,i,o,n),d=void 0,!Ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function Xc(n,i,o,u,d){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var E=u.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(y===4)for(y=u.return;y!==null;){var A=y.tag;if((A===3||A===4)&&(A=y.stateNode.containerInfo,A===d||A.nodeType===8&&A.parentNode===d))return;y=y.return}for(;E!==null;){if(y=Vi(E),y===null)return;if(A=y.tag,A===5||A===6){u=p=y;continue e}E=E.parentNode}}u=u.return}qo(function(){var U=p,H=Cs(o),$=[];e:{var B=Pp.get(n);if(B!==void 0){var J=Fs,te=n;switch(n){case"keypress":if(bs(o)===0)break e;case"keydown":case"keyup":J=g;break;case"focusin":te="focus",J=zs;break;case"focusout":te="blur",J=zs;break;case"beforeblur":case"afterblur":J=zs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=js;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Oa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=Y;break;case kp:case Np:case Ap:J=_r;break;case Rp:J=ot;break;case"scroll":J=zc;break;case"wheel":J=ft;break;case"copy":case"cut":case"paste":J=ba;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=M}var ne=(i&4)!==0,tt=!ne&&n==="scroll",b=ne?B!==null?B+"Capture":null:B;ne=[];for(var R=U,F;R!==null;){F=R;var G=F.stateNode;if(F.tag===5&&G!==null&&(F=G,b!==null&&(G=et(R,b),G!=null&&ne.push(fl(R,G,F)))),tt)break;R=R.return}0<ne.length&&(B=new J(B,te,null,o,H),$.push({event:B,listeners:ne}))}}if((i&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",J=n==="mouseout"||n==="pointerout",B&&o!==Ri&&(te=o.relatedTarget||o.fromElement)&&(Vi(te)||te[yr]))break e;if((J||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,J?(te=o.relatedTarget||o.toElement,J=U,te=te?Vi(te):null,te!==null&&(tt=Sn(te),te!==tt||te.tag!==5&&te.tag!==6)&&(te=null)):(J=null,te=U),J!==te)){if(ne=js,G="onMouseLeave",b="onMouseEnter",R="mouse",(n==="pointerout"||n==="pointerover")&&(ne=M,G="onPointerLeave",b="onPointerEnter",R="pointer"),tt=J==null?B:Ys(J),F=te==null?B:Ys(te),B=new ne(G,R+"leave",J,o,H),B.target=tt,B.relatedTarget=F,G=null,Vi(H)===U&&(ne=new ne(b,R+"enter",te,o,H),ne.target=F,ne.relatedTarget=tt,G=ne),tt=G,J&&te)t:{for(ne=J,b=te,R=0,F=ne;F;F=qs(F))R++;for(F=0,G=b;G;G=qs(G))F++;for(;0<R-F;)ne=qs(ne),R--;for(;0<F-R;)b=qs(b),F--;for(;R--;){if(ne===b||b!==null&&ne===b.alternate)break t;ne=qs(ne),b=qs(b)}ne=null}else ne=null;J!==null&&Mp($,B,J,ne,!1),te!==null&&tt!==null&&Mp($,tt,te,ne,!0)}}e:{if(B=U?Ys(U):window,J=B.nodeName&&B.nodeName.toLowerCase(),J==="select"||J==="input"&&B.type==="file")var ie=Xw;else if(pp(B))if(gp)ie=t0;else{ie=Zw;var le=Jw}else(J=B.nodeName)&&J.toLowerCase()==="input"&&(B.type==="checkbox"||B.type==="radio")&&(ie=e0);if(ie&&(ie=ie(n,U))){mp($,ie,o,H);break e}le&&le(n,B,U),n==="focusout"&&(le=B._wrapperState)&&le.controlled&&B.type==="number"&&Es(B,"number",B.value)}switch(le=U?Ys(U):window,n){case"focusin":(pp(le)||le.contentEditable==="true")&&($s=le,$c=U,cl=null);break;case"focusout":cl=$c=$s=null;break;case"mousedown":Gc=!0;break;case"contextmenu":case"mouseup":case"dragend":Gc=!1,Cp($,o,H);break;case"selectionchange":if(i0)break;case"keydown":case"keyup":Cp($,o,H)}var ae;if(Qn)e:{switch(n){case"compositionstart":var ce="onCompositionStart";break e;case"compositionend":ce="onCompositionEnd";break e;case"compositionupdate":ce="onCompositionUpdate";break e}ce=void 0}else Hs?dp(n,o)&&(ce="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ce="onCompositionStart");ce&&(Ws&&o.locale!=="ko"&&(Hs||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Hs&&(ae=rl()):(nn=H,Ms="value"in nn?nn.value:nn.textContent,Hs=!0)),le=Ha(U,ce),0<le.length&&(ce=new ol(ce,n,null,o,H),$.push({event:ce,listeners:le}),ae?ce.data=ae:(ae=fp(o),ae!==null&&(ce.data=ae)))),(ae=Bs?qw(n,o):Kw(n,o))&&(U=Ha(U,"onBeforeInput"),0<U.length&&(H=new ol("onBeforeInput","beforeinput",null,o,H),$.push({event:H,listeners:U}),H.data=ae))}Op($,i)})}function fl(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ha(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=et(n,o),p!=null&&u.unshift(fl(n,p,d)),p=et(n,i),p!=null&&u.push(fl(n,p,d))),n=n.return}return u}function qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Mp(n,i,o,u,d){for(var p=i._reactName,y=[];o!==null&&o!==u;){var E=o,A=E.alternate,U=E.stateNode;if(A!==null&&A===u)break;E.tag===5&&U!==null&&(E=U,d?(A=et(o,p),A!=null&&y.unshift(fl(o,A,E))):d||(A=et(o,p),A!=null&&y.push(fl(o,A,E)))),o=o.return}y.length!==0&&n.push({event:i,listeners:y})}var a0=/\r\n?/g,u0=/\u0000|\uFFFD/g;function bp(n){return(typeof n=="string"?n:""+n).replace(a0,`
`).replace(u0,"")}function $a(n,i,o){if(i=bp(i),bp(n)!==i&&o)throw Error(t(425))}function Ga(){}var Jc=null,Zc=null;function eh(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var th=typeof setTimeout=="function"?setTimeout:void 0,c0=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,h0=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(n){return Fp.resolve(null).then(n).catch(d0)}:th;function d0(n){setTimeout(function(){throw n})}function nh(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),Nn(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);Nn(i)}function Xr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Up(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ks,pl="__reactProps$"+Ks,yr="__reactContainer$"+Ks,rh="__reactEvents$"+Ks,f0="__reactListeners$"+Ks,p0="__reactHandles$"+Ks;function Vi(n){var i=n[Xn];if(i)return i;for(var o=n.parentNode;o;){if(i=o[yr]||o[Xn]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Up(n);n!==null;){if(o=n[Xn])return o;n=Up(n)}return i}n=o,o=n.parentNode}return null}function ml(n){return n=n[Xn]||n[yr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qa(n){return n[pl]||null}var ih=[],Qs=-1;function Jr(n){return{current:n}}function $e(n){0>Qs||(n.current=ih[Qs],ih[Qs]=null,Qs--)}function ze(n,i){Qs++,ih[Qs]=n.current,n.current=i}var Zr={},Rt=Jr(Zr),$t=Jr(!1),zi=Zr;function Xs(n,i){var o=n.type.contextTypes;if(!o)return Zr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Gt(n){return n=n.childContextTypes,n!=null}function Ka(){$e($t),$e(Rt)}function jp(n,i,o){if(Rt.current!==Zr)throw Error(t(168));ze(Rt,i),ze($t,o)}function Vp(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,xe(n)||"Unknown",d));return Z({},o,u)}function Ya(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Zr,zi=Rt.current,ze(Rt,n),ze($t,$t.current),!0}function zp(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Vp(n,i,zi),u.__reactInternalMemoizedMergedChildContext=n,$e($t),$e(Rt),ze(Rt,n)):$e($t),ze($t,o)}var vr=null,Qa=!1,sh=!1;function Bp(n){vr===null?vr=[n]:vr.push(n)}function m0(n){Qa=!0,Bp(n)}function ei(){if(!sh&&vr!==null){sh=!0;var n=0,i=Ee;try{var o=vr;for(Ee=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}vr=null,Qa=!1}catch(d){throw vr!==null&&(vr=vr.slice(n+1)),Ps(Oi,ei),d}finally{Ee=i,sh=!1}}return null}var Js=[],Zs=0,Xa=null,Ja=0,hn=[],dn=0,Bi=null,wr=1,Er="";function Wi(n,i){Js[Zs++]=Ja,Js[Zs++]=Xa,Xa=n,Ja=i}function Wp(n,i,o){hn[dn++]=wr,hn[dn++]=Er,hn[dn++]=Bi,Bi=n;var u=wr;n=Er;var d=32-Ot(u)-1;u&=~(1<<d),o+=1;var p=32-Ot(i)+d;if(30<p){var y=d-d%5;p=(u&(1<<y)-1).toString(32),u>>=y,d-=y,wr=1<<32-Ot(i)+d|o<<d|u,Er=p+n}else wr=1<<p|o<<d|u,Er=n}function oh(n){n.return!==null&&(Wi(n,1),Wp(n,1,0))}function lh(n){for(;n===Xa;)Xa=Js[--Zs],Js[Zs]=null,Ja=Js[--Zs],Js[Zs]=null;for(;n===Bi;)Bi=hn[--dn],hn[dn]=null,Er=hn[--dn],hn[dn]=null,wr=hn[--dn],hn[dn]=null}var rn=null,sn=null,Ge=!1,Pn=null;function Hp(n,i){var o=gn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function $p(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,rn=n,sn=Xr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,rn=n,sn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Bi!==null?{id:wr,overflow:Er}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=gn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,rn=n,sn=null,!0):!1;default:return!1}}function ah(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uh(n){if(Ge){var i=sn;if(i){var o=i;if(!$p(n,i)){if(ah(n))throw Error(t(418));i=Xr(o.nextSibling);var u=rn;i&&$p(n,i)?Hp(u,o):(n.flags=n.flags&-4097|2,Ge=!1,rn=n)}}else{if(ah(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ge=!1,rn=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;rn=n}function Za(n){if(n!==rn)return!1;if(!Ge)return Gp(n),Ge=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!eh(n.type,n.memoizedProps)),i&&(i=sn)){if(ah(n))throw qp(),Error(t(418));for(;i;)Hp(n,i),i=Xr(i.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){sn=Xr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}sn=null}}else sn=rn?Xr(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=sn;n;)n=Xr(n.nextSibling)}function eo(){sn=rn=null,Ge=!1}function ch(n){Pn===null?Pn=[n]:Pn.push(n)}var g0=Pe.ReactCurrentBatchConfig;function gl(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(y){var E=d.refs;y===null?delete E[p]:E[p]=y},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function eu(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Kp(n){var i=n._init;return i(n._payload)}function Yp(n){function i(b,R){if(n){var F=b.deletions;F===null?(b.deletions=[R],b.flags|=16):F.push(R)}}function o(b,R){if(!n)return null;for(;R!==null;)i(b,R),R=R.sibling;return null}function u(b,R){for(b=new Map;R!==null;)R.key!==null?b.set(R.key,R):b.set(R.index,R),R=R.sibling;return b}function d(b,R){return b=ai(b,R),b.index=0,b.sibling=null,b}function p(b,R,F){return b.index=F,n?(F=b.alternate,F!==null?(F=F.index,F<R?(b.flags|=2,R):F):(b.flags|=2,R)):(b.flags|=1048576,R)}function y(b){return n&&b.alternate===null&&(b.flags|=2),b}function E(b,R,F,G){return R===null||R.tag!==6?(R=td(F,b.mode,G),R.return=b,R):(R=d(R,F),R.return=b,R)}function A(b,R,F,G){var ie=F.type;return ie===D?H(b,R,F.props.children,G,F.key):R!==null&&(R.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===At&&Kp(ie)===R.type)?(G=d(R,F.props),G.ref=gl(b,R,F),G.return=b,G):(G=Cu(F.type,F.key,F.props,null,b.mode,G),G.ref=gl(b,R,F),G.return=b,G)}function U(b,R,F,G){return R===null||R.tag!==4||R.stateNode.containerInfo!==F.containerInfo||R.stateNode.implementation!==F.implementation?(R=nd(F,b.mode,G),R.return=b,R):(R=d(R,F.children||[]),R.return=b,R)}function H(b,R,F,G,ie){return R===null||R.tag!==7?(R=Xi(F,b.mode,G,ie),R.return=b,R):(R=d(R,F),R.return=b,R)}function $(b,R,F){if(typeof R=="string"&&R!==""||typeof R=="number")return R=td(""+R,b.mode,F),R.return=b,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ht:return F=Cu(R.type,R.key,R.props,null,b.mode,F),F.ref=gl(b,null,R),F.return=b,F;case Le:return R=nd(R,b.mode,F),R.return=b,R;case At:var G=R._init;return $(b,G(R._payload),F)}if(ar(R)||oe(R))return R=Xi(R,b.mode,F,null),R.return=b,R;eu(b,R)}return null}function B(b,R,F,G){var ie=R!==null?R.key:null;if(typeof F=="string"&&F!==""||typeof F=="number")return ie!==null?null:E(b,R,""+F,G);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case ht:return F.key===ie?A(b,R,F,G):null;case Le:return F.key===ie?U(b,R,F,G):null;case At:return ie=F._init,B(b,R,ie(F._payload),G)}if(ar(F)||oe(F))return ie!==null?null:H(b,R,F,G,null);eu(b,F)}return null}function J(b,R,F,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return b=b.get(F)||null,E(R,b,""+G,ie);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case ht:return b=b.get(G.key===null?F:G.key)||null,A(R,b,G,ie);case Le:return b=b.get(G.key===null?F:G.key)||null,U(R,b,G,ie);case At:var le=G._init;return J(b,R,F,le(G._payload),ie)}if(ar(G)||oe(G))return b=b.get(F)||null,H(R,b,G,ie,null);eu(R,G)}return null}function te(b,R,F,G){for(var ie=null,le=null,ae=R,ce=R=0,_t=null;ae!==null&&ce<F.length;ce++){ae.index>ce?(_t=ae,ae=null):_t=ae.sibling;var Ae=B(b,ae,F[ce],G);if(Ae===null){ae===null&&(ae=_t);break}n&&ae&&Ae.alternate===null&&i(b,ae),R=p(Ae,R,ce),le===null?ie=Ae:le.sibling=Ae,le=Ae,ae=_t}if(ce===F.length)return o(b,ae),Ge&&Wi(b,ce),ie;if(ae===null){for(;ce<F.length;ce++)ae=$(b,F[ce],G),ae!==null&&(R=p(ae,R,ce),le===null?ie=ae:le.sibling=ae,le=ae);return Ge&&Wi(b,ce),ie}for(ae=u(b,ae);ce<F.length;ce++)_t=J(ae,b,ce,F[ce],G),_t!==null&&(n&&_t.alternate!==null&&ae.delete(_t.key===null?ce:_t.key),R=p(_t,R,ce),le===null?ie=_t:le.sibling=_t,le=_t);return n&&ae.forEach(function(ui){return i(b,ui)}),Ge&&Wi(b,ce),ie}function ne(b,R,F,G){var ie=oe(F);if(typeof ie!="function")throw Error(t(150));if(F=ie.call(F),F==null)throw Error(t(151));for(var le=ie=null,ae=R,ce=R=0,_t=null,Ae=F.next();ae!==null&&!Ae.done;ce++,Ae=F.next()){ae.index>ce?(_t=ae,ae=null):_t=ae.sibling;var ui=B(b,ae,Ae.value,G);if(ui===null){ae===null&&(ae=_t);break}n&&ae&&ui.alternate===null&&i(b,ae),R=p(ui,R,ce),le===null?ie=ui:le.sibling=ui,le=ui,ae=_t}if(Ae.done)return o(b,ae),Ge&&Wi(b,ce),ie;if(ae===null){for(;!Ae.done;ce++,Ae=F.next())Ae=$(b,Ae.value,G),Ae!==null&&(R=p(Ae,R,ce),le===null?ie=Ae:le.sibling=Ae,le=Ae);return Ge&&Wi(b,ce),ie}for(ae=u(b,ae);!Ae.done;ce++,Ae=F.next())Ae=J(ae,b,ce,Ae.value,G),Ae!==null&&(n&&Ae.alternate!==null&&ae.delete(Ae.key===null?ce:Ae.key),R=p(Ae,R,ce),le===null?ie=Ae:le.sibling=Ae,le=Ae);return n&&ae.forEach(function(Y0){return i(b,Y0)}),Ge&&Wi(b,ce),ie}function tt(b,R,F,G){if(typeof F=="object"&&F!==null&&F.type===D&&F.key===null&&(F=F.props.children),typeof F=="object"&&F!==null){switch(F.$$typeof){case ht:e:{for(var ie=F.key,le=R;le!==null;){if(le.key===ie){if(ie=F.type,ie===D){if(le.tag===7){o(b,le.sibling),R=d(le,F.props.children),R.return=b,b=R;break e}}else if(le.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===At&&Kp(ie)===le.type){o(b,le.sibling),R=d(le,F.props),R.ref=gl(b,le,F),R.return=b,b=R;break e}o(b,le);break}else i(b,le);le=le.sibling}F.type===D?(R=Xi(F.props.children,b.mode,G,F.key),R.return=b,b=R):(G=Cu(F.type,F.key,F.props,null,b.mode,G),G.ref=gl(b,R,F),G.return=b,b=G)}return y(b);case Le:e:{for(le=F.key;R!==null;){if(R.key===le)if(R.tag===4&&R.stateNode.containerInfo===F.containerInfo&&R.stateNode.implementation===F.implementation){o(b,R.sibling),R=d(R,F.children||[]),R.return=b,b=R;break e}else{o(b,R);break}else i(b,R);R=R.sibling}R=nd(F,b.mode,G),R.return=b,b=R}return y(b);case At:return le=F._init,tt(b,R,le(F._payload),G)}if(ar(F))return te(b,R,F,G);if(oe(F))return ne(b,R,F,G);eu(b,F)}return typeof F=="string"&&F!==""||typeof F=="number"?(F=""+F,R!==null&&R.tag===6?(o(b,R.sibling),R=d(R,F),R.return=b,b=R):(o(b,R),R=td(F,b.mode,G),R.return=b,b=R),y(b)):o(b,R)}return tt}var to=Yp(!0),Qp=Yp(!1),tu=Jr(null),nu=null,no=null,hh=null;function dh(){hh=no=nu=null}function fh(n){var i=tu.current;$e(tu),n._currentValue=i}function ph(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function ro(n,i){nu=n,hh=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qt=!0),n.firstContext=null)}function fn(n){var i=n._currentValue;if(hh!==n)if(n={context:n,memoizedValue:i,next:null},no===null){if(nu===null)throw Error(t(308));no=n,nu.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return i}var Hi=null;function mh(n){Hi===null?Hi=[n]:Hi.push(n)}function Xp(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,mh(i)):(o.next=d.next,d.next=o),i.interleaved=o,Sr(n,u)}function Sr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ti=!1;function gh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function ni(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ne&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Sr(n,o)}return d=u.interleaved,d===null?(i.next=i,mh(u)):(i.next=d.next,d.next=i),u.interleaved=i,Sr(n,o)}function ru(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Hr(n,o)}}function Zp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=y:p=p.next=y,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function iu(n,i,o,u){var d=n.updateQueue;ti=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var A=E,U=A.next;A.next=null,y===null?p=U:y.next=U,y=A;var H=n.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==y&&(E===null?H.firstBaseUpdate=U:E.next=U,H.lastBaseUpdate=A))}if(p!==null){var $=d.baseState;y=0,H=U=A=null,E=p;do{var B=E.lane,J=E.eventTime;if((u&B)===B){H!==null&&(H=H.next={eventTime:J,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var te=n,ne=E;switch(B=i,J=o,ne.tag){case 1:if(te=ne.payload,typeof te=="function"){$=te.call(J,$,B);break e}$=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ne.payload,B=typeof te=="function"?te.call(J,$,B):te,B==null)break e;$=Z({},$,B);break e;case 2:ti=!0}}E.callback!==null&&E.lane!==0&&(n.flags|=64,B=d.effects,B===null?d.effects=[E]:B.push(E))}else J={eventTime:J,lane:B,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(U=H=J,A=$):H=H.next=J,y|=B;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;B=E,E=B.next,B.next=null,d.lastBaseUpdate=B,d.shared.pending=null}}while(!0);if(H===null&&(A=$),d.baseState=A,d.firstBaseUpdate=U,d.lastBaseUpdate=H,i=d.shared.interleaved,i!==null){d=i;do y|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);qi|=y,n.lanes=y,n.memoizedState=$}}function em(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var _l={},Jn=Jr(_l),yl=Jr(_l),vl=Jr(_l);function $i(n){if(n===_l)throw Error(t(174));return n}function _h(n,i){switch(ze(vl,i),ze(yl,n),ze(Jn,_l),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:st(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=st(i,n)}$e(Jn),ze(Jn,i)}function io(){$e(Jn),$e(yl),$e(vl)}function tm(n){$i(vl.current);var i=$i(Jn.current),o=st(i,n.type);i!==o&&(ze(yl,n),ze(Jn,o))}function yh(n){yl.current===n&&($e(Jn),$e(yl))}var Ke=Jr(0);function su(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var vh=[];function wh(){for(var n=0;n<vh.length;n++)vh[n]._workInProgressVersionPrimary=null;vh.length=0}var ou=Pe.ReactCurrentDispatcher,Eh=Pe.ReactCurrentBatchConfig,Gi=0,Ye=null,lt=null,mt=null,lu=!1,wl=!1,El=0,_0=0;function Pt(){throw Error(t(321))}function Sh(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Rn(n[o],i[o]))return!1;return!0}function Ih(n,i,o,u,d,p){if(Gi=p,Ye=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ou.current=n===null||n.memoizedState===null?E0:S0,n=o(u,d),wl){p=0;do{if(wl=!1,El=0,25<=p)throw Error(t(301));p+=1,mt=lt=null,i.updateQueue=null,ou.current=I0,n=o(u,d)}while(wl)}if(ou.current=cu,i=lt!==null&&lt.next!==null,Gi=0,mt=lt=Ye=null,lu=!1,i)throw Error(t(300));return n}function Ch(){var n=El!==0;return El=0,n}function Zn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mt===null?Ye.memoizedState=mt=n:mt=mt.next=n,mt}function pn(){if(lt===null){var n=Ye.alternate;n=n!==null?n.memoizedState:null}else n=lt.next;var i=mt===null?Ye.memoizedState:mt.next;if(i!==null)mt=i,lt=n;else{if(n===null)throw Error(t(310));lt=n,n={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},mt===null?Ye.memoizedState=mt=n:mt=mt.next=n}return mt}function Sl(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=pn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=lt,d=u.baseQueue,p=o.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}u.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,u=u.baseState;var E=y=null,A=null,U=p;do{var H=U.lane;if((Gi&H)===H)A!==null&&(A=A.next={lane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),u=U.hasEagerState?U.eagerState:n(u,U.action);else{var $={lane:H,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null};A===null?(E=A=$,y=u):A=A.next=$,Ye.lanes|=H,qi|=H}U=U.next}while(U!==null&&U!==p);A===null?y=u:A.next=E,Rn(u,i.memoizedState)||(qt=!0),i.memoizedState=u,i.baseState=y,i.baseQueue=A,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Ye.lanes|=p,qi|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function kh(n){var i=pn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do p=n(p,y.action),y=y.next;while(y!==d);Rn(p,i.memoizedState)||(qt=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,u]}function nm(){}function rm(n,i){var o=Ye,u=pn(),d=i(),p=!Rn(u.memoizedState,d);if(p&&(u.memoizedState=d,qt=!0),u=u.queue,Nh(om.bind(null,o,u,n),[n]),u.getSnapshot!==i||p||mt!==null&&mt.memoizedState.tag&1){if(o.flags|=2048,Il(9,sm.bind(null,o,u,d,i),void 0,null),gt===null)throw Error(t(349));(Gi&30)!==0||im(o,i,d)}return d}function im(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function sm(n,i,o,u){i.value=o,i.getSnapshot=u,lm(i)&&am(n)}function om(n,i,o){return o(function(){lm(i)&&am(n)})}function lm(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Rn(n,o)}catch{return!0}}function am(n){var i=Sr(n,1);i!==null&&Ln(i,n,1,-1)}function um(n){var i=Zn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:n},i.queue=n,n=n.dispatch=w0.bind(null,Ye,n),[i.memoizedState,n]}function Il(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Ye.updateQueue,i===null?(i={lastEffect:null,stores:null},Ye.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function cm(){return pn().memoizedState}function au(n,i,o,u){var d=Zn();Ye.flags|=n,d.memoizedState=Il(1|i,o,void 0,u===void 0?null:u)}function uu(n,i,o,u){var d=pn();u=u===void 0?null:u;var p=void 0;if(lt!==null){var y=lt.memoizedState;if(p=y.destroy,u!==null&&Sh(u,y.deps)){d.memoizedState=Il(i,o,p,u);return}}Ye.flags|=n,d.memoizedState=Il(1|i,o,p,u)}function hm(n,i){return au(8390656,8,n,i)}function Nh(n,i){return uu(2048,8,n,i)}function dm(n,i){return uu(4,2,n,i)}function fm(n,i){return uu(4,4,n,i)}function pm(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mm(n,i,o){return o=o!=null?o.concat([n]):null,uu(4,4,pm.bind(null,i,n),o)}function Ah(){}function gm(n,i){var o=pn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Sh(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function _m(n,i){var o=pn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Sh(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function ym(n,i,o){return(Gi&21)===0?(n.baseState&&(n.baseState=!1,qt=!0),n.memoizedState=o):(Rn(o,i)||(o=bi(),Ye.lanes|=o,qi|=o,n.baseState=!0),i)}function y0(n,i){var o=Ee;Ee=o!==0&&4>o?o:4,n(!0);var u=Eh.transition;Eh.transition={};try{n(!1),i()}finally{Ee=o,Eh.transition=u}}function vm(){return pn().memoizedState}function v0(n,i,o){var u=oi(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},wm(n))Em(i,o);else if(o=Xp(n,i,o,u),o!==null){var d=Mt();Ln(o,n,u,d),Sm(o,i,u)}}function w0(n,i,o){var u=oi(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(wm(n))Em(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var y=i.lastRenderedState,E=p(y,o);if(d.hasEagerState=!0,d.eagerState=E,Rn(E,y)){var A=i.interleaved;A===null?(d.next=d,mh(i)):(d.next=A.next,A.next=d),i.interleaved=d;return}}catch{}finally{}o=Xp(n,i,d,u),o!==null&&(d=Mt(),Ln(o,n,u,d),Sm(o,i,u))}}function wm(n){var i=n.alternate;return n===Ye||i!==null&&i===Ye}function Em(n,i){wl=lu=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Sm(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,Hr(n,o)}}var cu={readContext:fn,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},E0={readContext:fn,useCallback:function(n,i){return Zn().memoizedState=[n,i===void 0?null:i],n},useContext:fn,useEffect:hm,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,au(4194308,4,pm.bind(null,i,n),o)},useLayoutEffect:function(n,i){return au(4194308,4,n,i)},useInsertionEffect:function(n,i){return au(4,2,n,i)},useMemo:function(n,i){var o=Zn();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Zn();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=v0.bind(null,Ye,n),[u.memoizedState,n]},useRef:function(n){var i=Zn();return n={current:n},i.memoizedState=n},useState:um,useDebugValue:Ah,useDeferredValue:function(n){return Zn().memoizedState=n},useTransition:function(){var n=um(!1),i=n[0];return n=y0.bind(null,n[1]),Zn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Ye,d=Zn();if(Ge){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),gt===null)throw Error(t(349));(Gi&30)!==0||im(u,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,hm(om.bind(null,u,p,n),[n]),u.flags|=2048,Il(9,sm.bind(null,u,p,o,i),void 0,null),o},useId:function(){var n=Zn(),i=gt.identifierPrefix;if(Ge){var o=Er,u=wr;o=(u&~(1<<32-Ot(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=El++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=_0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},S0={readContext:fn,useCallback:gm,useContext:fn,useEffect:Nh,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:_m,useReducer:Th,useRef:cm,useState:function(){return Th(Sl)},useDebugValue:Ah,useDeferredValue:function(n){var i=pn();return ym(i,lt.memoizedState,n)},useTransition:function(){var n=Th(Sl)[0],i=pn().memoizedState;return[n,i]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1},I0={readContext:fn,useCallback:gm,useContext:fn,useEffect:Nh,useImperativeHandle:mm,useInsertionEffect:dm,useLayoutEffect:fm,useMemo:_m,useReducer:kh,useRef:cm,useState:function(){return kh(Sl)},useDebugValue:Ah,useDeferredValue:function(n){var i=pn();return lt===null?i.memoizedState=n:ym(i,lt.memoizedState,n)},useTransition:function(){var n=kh(Sl)[0],i=pn().memoizedState;return[n,i]},useMutableSource:nm,useSyncExternalStore:rm,useId:vm,unstable_isNewReconciler:!1};function xn(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Rh(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Z({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var hu={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=Mt(),d=oi(n),p=Ir(u,d);p.payload=i,o!=null&&(p.callback=o),i=ni(n,p,d),i!==null&&(Ln(i,n,d,u),ru(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=Mt(),d=oi(n),p=Ir(u,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=ni(n,p,d),i!==null&&(Ln(i,n,d,u),ru(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Mt(),u=oi(n),d=Ir(o,u);d.tag=2,i!=null&&(d.callback=i),i=ni(n,d,u),i!==null&&(Ln(i,n,u,o),ru(i,n,u))}};function Im(n,i,o,u,d,p,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,y):i.prototype&&i.prototype.isPureReactComponent?!ul(o,u)||!ul(d,p):!0}function Cm(n,i,o){var u=!1,d=Zr,p=i.contextType;return typeof p=="object"&&p!==null?p=fn(p):(d=Gt(i)?zi:Rt.current,u=i.contextTypes,p=(u=u!=null)?Xs(n,d):Zr),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=hu,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Tm(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&hu.enqueueReplaceState(i,i.state,null)}function Ph(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},gh(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=fn(p):(p=Gt(i)?zi:Rt.current,d.context=Xs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Rh(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&hu.enqueueReplaceState(d,d.state,null),iu(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,i){try{var o="",u=i;do o+=me(u),u=u.return;while(u);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function xh(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Dh(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var C0=typeof WeakMap=="function"?WeakMap:Map;function km(n,i,o){o=Ir(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){yu||(yu=!0,qh=u),Dh(n,i)},o}function Nm(n,i,o){o=Ir(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){Dh(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Dh(n,i),typeof u!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),o}function Am(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new C0;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=U0.bind(null,n,i,o),i.then(n,n))}function Rm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Pm(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ir(-1,1),i.tag=2,ni(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var T0=Pe.ReactCurrentOwner,qt=!1;function Lt(n,i,o,u){i.child=n===null?Qp(i,null,o,u):to(i,n.child,o,u)}function xm(n,i,o,u,d){o=o.render;var p=i.ref;return ro(i,d),u=Ih(n,i,o,u,p,d),o=Ch(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Ge&&o&&oh(i),i.flags|=1,Lt(n,i,u,d),i.child)}function Dm(n,i,o,u,d){if(n===null){var p=o.type;return typeof p=="function"&&!ed(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Om(n,i,p,u,d)):(n=Cu(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var y=p.memoizedProps;if(o=o.compare,o=o!==null?o:ul,o(y,u)&&n.ref===i.ref)return Cr(n,i,d)}return i.flags|=1,n=ai(p,u),n.ref=i.ref,n.return=i,i.child=n}function Om(n,i,o,u,d){if(n!==null){var p=n.memoizedProps;if(ul(p,u)&&n.ref===i.ref)if(qt=!1,i.pendingProps=u=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(qt=!0);else return i.lanes=n.lanes,Cr(n,i,d)}return Oh(n,i,o,u,d)}function Lm(n,i,o){var u=i.pendingProps,d=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},ze(lo,on),on|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,ze(lo,on),on|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:o,ze(lo,on),on|=u}else p!==null?(u=p.baseLanes|o,i.memoizedState=null):u=o,ze(lo,on),on|=u;return Lt(n,i,d,o),i.child}function Mm(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Oh(n,i,o,u,d){var p=Gt(o)?zi:Rt.current;return p=Xs(i,p),ro(i,d),o=Ih(n,i,o,u,p,d),u=Ch(),n!==null&&!qt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Cr(n,i,d)):(Ge&&u&&oh(i),i.flags|=1,Lt(n,i,o,d),i.child)}function bm(n,i,o,u,d){if(Gt(o)){var p=!0;Ya(i)}else p=!1;if(ro(i,d),i.stateNode===null)fu(n,i),Cm(i,o,u),Ph(i,o,u,d),u=!0;else if(n===null){var y=i.stateNode,E=i.memoizedProps;y.props=E;var A=y.context,U=o.contextType;typeof U=="object"&&U!==null?U=fn(U):(U=Gt(o)?zi:Rt.current,U=Xs(i,U));var H=o.getDerivedStateFromProps,$=typeof H=="function"||typeof y.getSnapshotBeforeUpdate=="function";$||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==u||A!==U)&&Tm(i,y,u,U),ti=!1;var B=i.memoizedState;y.state=B,iu(i,u,y,d),A=i.memoizedState,E!==u||B!==A||$t.current||ti?(typeof H=="function"&&(Rh(i,o,H,u),A=i.memoizedState),(E=ti||Im(i,o,E,u,B,A,U))?($||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=A),y.props=u,y.state=A,y.context=U,u=E):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{y=i.stateNode,Jp(n,i),E=i.memoizedProps,U=i.type===i.elementType?E:xn(i.type,E),y.props=U,$=i.pendingProps,B=y.context,A=o.contextType,typeof A=="object"&&A!==null?A=fn(A):(A=Gt(o)?zi:Rt.current,A=Xs(i,A));var J=o.getDerivedStateFromProps;(H=typeof J=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(E!==$||B!==A)&&Tm(i,y,u,A),ti=!1,B=i.memoizedState,y.state=B,iu(i,u,y,d);var te=i.memoizedState;E!==$||B!==te||$t.current||ti?(typeof J=="function"&&(Rh(i,o,J,u),te=i.memoizedState),(U=ti||Im(i,o,U,u,B,te,A)||!1)?(H||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(u,te,A),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(u,te,A)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=te),y.props=u,y.state=te,y.context=A,u=U):(typeof y.componentDidUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&B===n.memoizedState||(i.flags|=1024),u=!1)}return Lh(n,i,o,u,p,d)}function Lh(n,i,o,u,d,p){Mm(n,i);var y=(i.flags&128)!==0;if(!u&&!y)return d&&zp(i,o,!1),Cr(n,i,p);u=i.stateNode,T0.current=i;var E=y&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&y?(i.child=to(i,n.child,null,p),i.child=to(i,null,E,p)):Lt(n,i,E,p),i.memoizedState=u.state,d&&zp(i,o,!0),i.child}function Fm(n){var i=n.stateNode;i.pendingContext?jp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jp(n,i.context,!1),_h(n,i.containerInfo)}function Um(n,i,o,u,d){return eo(),ch(d),i.flags|=256,Lt(n,i,o,u),i.child}var Mh={dehydrated:null,treeContext:null,retryLane:0};function bh(n){return{baseLanes:n,cachePool:null,transitions:null}}function jm(n,i,o){var u=i.pendingProps,d=Ke.current,p=!1,y=(i.flags&128)!==0,E;if((E=y)||(E=n!==null&&n.memoizedState===null?!1:(d&2)!==0),E?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),ze(Ke,d&1),n===null)return uh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(y=u.children,n=u.fallback,p?(u=i.mode,p=i.child,y={mode:"hidden",children:y},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=Tu(y,u,0,null),n=Xi(n,u,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=bh(o),i.memoizedState=Mh,n):Fh(i,y));if(d=n.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return k0(n,i,y,u,E,d,o);if(p){p=u.fallback,y=i.mode,d=n.child,E=d.sibling;var A={mode:"hidden",children:u.children};return(y&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=A,i.deletions=null):(u=ai(d,A),u.subtreeFlags=d.subtreeFlags&14680064),E!==null?p=ai(E,p):(p=Xi(p,y,o,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,y=n.child.memoizedState,y=y===null?bh(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=n.childLanes&~o,i.memoizedState=Mh,u}return p=n.child,n=p.sibling,u=ai(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Fh(n,i){return i=Tu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function du(n,i,o,u){return u!==null&&ch(u),to(i,n.child,null,o),n=Fh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function k0(n,i,o,u,d,p,y){if(o)return i.flags&256?(i.flags&=-257,u=xh(Error(t(422))),du(n,i,y,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,d=i.mode,u=Tu({mode:"visible",children:u.children},d,0,null),p=Xi(p,d,y,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&to(i,n.child,null,y),i.child.memoizedState=bh(y),i.memoizedState=Mh,p);if((i.mode&1)===0)return du(n,i,y,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var E=u.dgst;return u=E,p=Error(t(419)),u=xh(p,u,void 0),du(n,i,y,u)}if(E=(y&n.childLanes)!==0,qt||E){if(u=gt,u!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|y))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Sr(n,d),Ln(u,n,d,-1))}return Zh(),u=xh(Error(t(421))),du(n,i,y,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=j0.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,sn=Xr(d.nextSibling),rn=i,Ge=!0,Pn=null,n!==null&&(hn[dn++]=wr,hn[dn++]=Er,hn[dn++]=Bi,wr=n.id,Er=n.overflow,Bi=i),i=Fh(i,u.children),i.flags|=4096,i)}function Vm(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),ph(n.return,i,o)}function Uh(n,i,o,u,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=d)}function zm(n,i,o){var u=i.pendingProps,d=u.revealOrder,p=u.tail;if(Lt(n,i,u.children,o),u=Ke.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vm(n,o,i);else if(n.tag===19)Vm(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(ze(Ke,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&su(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Uh(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&su(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Uh(i,!0,o,null,p);break;case"together":Uh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fu(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Cr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),qi|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=ai(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=ai(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function N0(n,i,o){switch(i.tag){case 3:Fm(i),eo();break;case 5:tm(i);break;case 1:Gt(i.type)&&Ya(i);break;case 4:_h(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;ze(tu,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(ze(Ke,Ke.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?jm(n,i,o):(ze(Ke,Ke.current&1),n=Cr(n,i,o),n!==null?n.sibling:null);ze(Ke,Ke.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return zm(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ze(Ke,Ke.current),u)break;return null;case 22:case 23:return i.lanes=0,Lm(n,i,o)}return Cr(n,i,o)}var Bm,jh,Wm,Hm;Bm=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},jh=function(){},Wm=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,$i(Jn.current);var p=null;switch(o){case"input":d=ki(n,d),u=ki(n,u),p=[];break;case"select":d=Z({},d,{value:void 0}),u=Z({},u,{value:void 0}),p=[];break;case"textarea":d=bo(n,d),u=bo(n,u),p=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Ga)}Bo(o,u);var y;o=null;for(U in d)if(!u.hasOwnProperty(U)&&d.hasOwnProperty(U)&&d[U]!=null)if(U==="style"){var E=d[U];for(y in E)E.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else U!=="dangerouslySetInnerHTML"&&U!=="children"&&U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&U!=="autoFocus"&&(l.hasOwnProperty(U)?p||(p=[]):(p=p||[]).push(U,null));for(U in u){var A=u[U];if(E=d?.[U],u.hasOwnProperty(U)&&A!==E&&(A!=null||E!=null))if(U==="style")if(E){for(y in E)!E.hasOwnProperty(y)||A&&A.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in A)A.hasOwnProperty(y)&&E[y]!==A[y]&&(o||(o={}),o[y]=A[y])}else o||(p||(p=[]),p.push(U,o)),o=A;else U==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,E=E?E.__html:void 0,A!=null&&E!==A&&(p=p||[]).push(U,A)):U==="children"?typeof A!="string"&&typeof A!="number"||(p=p||[]).push(U,""+A):U!=="suppressContentEditableWarning"&&U!=="suppressHydrationWarning"&&(l.hasOwnProperty(U)?(A!=null&&U==="onScroll"&&He("scroll",n),p||E===A||(p=[])):(p=p||[]).push(U,A))}o&&(p=p||[]).push("style",o);var U=p;(i.updateQueue=U)&&(i.flags|=4)}},Hm=function(n,i,o,u){o!==u&&(i.flags|=4)};function Cl(n,i){if(!Ge)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function xt(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function A0(n,i,o){var u=i.pendingProps;switch(lh(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xt(i),null;case 1:return Gt(i.type)&&Ka(),xt(i),null;case 3:return u=i.stateNode,io(),$e($t),$e(Rt),wh(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Za(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Pn!==null&&(Qh(Pn),Pn=null))),jh(n,i),xt(i),null;case 5:yh(i);var d=$i(vl.current);if(o=i.type,n!==null&&i.stateNode!=null)Wm(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return xt(i),null}if(n=$i(Jn.current),Za(i)){u=i.stateNode,o=i.type;var p=i.memoizedProps;switch(u[Xn]=i,u[pl]=p,n=(i.mode&1)!==0,o){case"dialog":He("cancel",u),He("close",u);break;case"iframe":case"object":case"embed":He("load",u);break;case"video":case"audio":for(d=0;d<hl.length;d++)He(hl[d],u);break;case"source":He("error",u);break;case"img":case"image":case"link":He("error",u),He("load",u);break;case"details":He("toggle",u);break;case"input":ws(u,p),He("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},He("invalid",u);break;case"textarea":Ss(u,p),He("invalid",u)}Bo(o,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var E=p[y];y==="children"?typeof E=="string"?u.textContent!==E&&(p.suppressHydrationWarning!==!0&&$a(u.textContent,E,n),d=["children",E]):typeof E=="number"&&u.textContent!==""+E&&(p.suppressHydrationWarning!==!0&&$a(u.textContent,E,n),d=["children",""+E]):l.hasOwnProperty(y)&&E!=null&&y==="onScroll"&&He("scroll",u)}switch(o){case"input":lr(u),ya(u,p,!0);break;case"textarea":lr(u),Fo(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=Ga)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=it(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=y.createElement(o,{is:u.is}):(n=y.createElement(o),o==="select"&&(y=n,u.multiple?y.multiple=!0:u.size&&(y.size=u.size))):n=y.createElementNS(n,o),n[Xn]=i,n[pl]=u,Bm(n,i,!1,!1),i.stateNode=n;e:{switch(y=Wo(o,u),o){case"dialog":He("cancel",n),He("close",n),d=u;break;case"iframe":case"object":case"embed":He("load",n),d=u;break;case"video":case"audio":for(d=0;d<hl.length;d++)He(hl[d],n);d=u;break;case"source":He("error",n),d=u;break;case"img":case"image":case"link":He("error",n),He("load",n),d=u;break;case"details":He("toggle",n),d=u;break;case"input":ws(n,u),d=ki(n,u),He("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=Z({},u,{value:void 0}),He("invalid",n);break;case"textarea":Ss(n,u),d=bo(n,u),He("invalid",n);break;default:d=u}Bo(o,d),E=d;for(p in E)if(E.hasOwnProperty(p)){var A=E[p];p==="style"?Vo(n,A):p==="dangerouslySetInnerHTML"?(A=A?A.__html:void 0,A!=null&&Uo(n,A)):p==="children"?typeof A=="string"?(o!=="textarea"||A!=="")&&jr(n,A):typeof A=="number"&&jr(n,""+A):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(l.hasOwnProperty(p)?A!=null&&p==="onScroll"&&He("scroll",n):A!=null&&ve(n,p,A,y))}switch(o){case"input":lr(n),ya(n,u,!1);break;case"textarea":lr(n),Fo(n);break;case"option":u.value!=null&&n.setAttribute("value",""+De(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?ur(n,!!u.multiple,p,!1):u.defaultValue!=null&&ur(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Ga)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return xt(i),null;case 6:if(n&&i.stateNode!=null)Hm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=$i(vl.current),$i(Jn.current),Za(i)){if(u=i.stateNode,o=i.memoizedProps,u[Xn]=i,(p=u.nodeValue!==o)&&(n=rn,n!==null))switch(n.tag){case 3:$a(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$a(u.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Xn]=i,i.stateNode=u}return xt(i),null;case 13:if($e(Ke),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ge&&sn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qp(),eo(),i.flags|=98560,p=!1;else if(p=Za(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[Xn]=i}else eo(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;xt(i),p=!1}else Pn!==null&&(Qh(Pn),Pn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Ke.current&1)!==0?at===0&&(at=3):Zh())),i.updateQueue!==null&&(i.flags|=4),xt(i),null);case 4:return io(),jh(n,i),n===null&&dl(i.stateNode.containerInfo),xt(i),null;case 10:return fh(i.type._context),xt(i),null;case 17:return Gt(i.type)&&Ka(),xt(i),null;case 19:if($e(Ke),p=i.memoizedState,p===null)return xt(i),null;if(u=(i.flags&128)!==0,y=p.rendering,y===null)if(u)Cl(p,!1);else{if(at!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(y=su(n),y!==null){for(i.flags|=128,Cl(p,!1),u=y.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)p=o,n=u,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,n=y.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return ze(Ke,Ke.current&1|2),i.child}n=n.sibling}p.tail!==null&&Ve()>ao&&(i.flags|=128,u=!0,Cl(p,!1),i.lanes=4194304)}else{if(!u)if(n=su(y),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Cl(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Ge)return xt(i),null}else 2*Ve()-p.renderingStartTime>ao&&o!==1073741824&&(i.flags|=128,u=!0,Cl(p,!1),i.lanes=4194304);p.isBackwards?(y.sibling=i.child,i.child=y):(o=p.last,o!==null?o.sibling=y:i.child=y,p.last=y)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Ve(),i.sibling=null,o=Ke.current,ze(Ke,u?o&1|2:o&1),i):(xt(i),null);case 22:case 23:return Jh(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(on&1073741824)!==0&&(xt(i),i.subtreeFlags&6&&(i.flags|=8192)):xt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function R0(n,i){switch(lh(i),i.tag){case 1:return Gt(i.type)&&Ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return io(),$e($t),$e(Rt),wh(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return yh(i),null;case 13:if($e(Ke),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));eo()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $e(Ke),null;case 4:return io(),null;case 10:return fh(i.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var pu=!1,Dt=!1,P0=typeof WeakSet=="function"?WeakSet:Set,ee=null;function oo(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Qe(n,i,u)}else o.current=null}function Vh(n,i,o){try{o()}catch(u){Qe(n,i,u)}}var $m=!1;function x0(n,i){if(Jc=qr,n=Ip(),Hc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var y=0,E=-1,A=-1,U=0,H=0,$=n,B=null;t:for(;;){for(var J;$!==o||d!==0&&$.nodeType!==3||(E=y+d),$!==p||u!==0&&$.nodeType!==3||(A=y+u),$.nodeType===3&&(y+=$.nodeValue.length),(J=$.firstChild)!==null;)B=$,$=J;for(;;){if($===n)break t;if(B===o&&++U===d&&(E=y),B===p&&++H===u&&(A=y),(J=$.nextSibling)!==null)break;$=B,B=$.parentNode}$=J}o=E===-1||A===-1?null:{start:E,end:A}}else o=null}o=o||{start:0,end:0}}else o=null;for(Zc={focusedElem:n,selectionRange:o},qr=!1,ee=i;ee!==null;)if(i=ee,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,ee=n;else for(;ee!==null;){i=ee;try{var te=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(te!==null){var ne=te.memoizedProps,tt=te.memoizedState,b=i.stateNode,R=b.getSnapshotBeforeUpdate(i.elementType===i.type?ne:xn(i.type,ne),tt);b.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var F=i.stateNode.containerInfo;F.nodeType===1?F.textContent="":F.nodeType===9&&F.documentElement&&F.removeChild(F.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(G){Qe(i,i.return,G)}if(n=i.sibling,n!==null){n.return=i.return,ee=n;break}ee=i.return}return te=$m,$m=!1,te}function Tl(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Vh(i,o,p)}d=d.next}while(d!==u)}}function mu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function zh(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Gm(n){var i=n.alternate;i!==null&&(n.alternate=null,Gm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Xn],delete i[pl],delete i[rh],delete i[f0],delete i[p0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qm(n){return n.tag===5||n.tag===3||n.tag===4}function Km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bh(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ga));else if(u!==4&&(n=n.child,n!==null))for(Bh(n,i,o),n=n.sibling;n!==null;)Bh(n,i,o),n=n.sibling}function Wh(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Wh(n,i,o),n=n.sibling;n!==null;)Wh(n,i,o),n=n.sibling}var It=null,Dn=!1;function ri(n,i,o){for(o=o.child;o!==null;)Ym(n,i,o),o=o.sibling}function Ym(n,i,o){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Li,o)}catch{}switch(o.tag){case 5:Dt||oo(o,i);case 6:var u=It,d=Dn;It=null,ri(n,i,o),It=u,Dn=d,It!==null&&(Dn?(n=It,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):It.removeChild(o.stateNode));break;case 18:It!==null&&(Dn?(n=It,o=o.stateNode,n.nodeType===8?nh(n.parentNode,o):n.nodeType===1&&nh(n,o),Nn(n)):nh(It,o.stateNode));break;case 4:u=It,d=Dn,It=o.stateNode.containerInfo,Dn=!0,ri(n,i,o),It=u,Dn=d;break;case 0:case 11:case 14:case 15:if(!Dt&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&Vh(o,i,y),d=d.next}while(d!==u)}ri(n,i,o);break;case 1:if(!Dt&&(oo(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(E){Qe(o,i,E)}ri(n,i,o);break;case 21:ri(n,i,o);break;case 22:o.mode&1?(Dt=(u=Dt)||o.memoizedState!==null,ri(n,i,o),Dt=u):ri(n,i,o);break;default:ri(n,i,o)}}function Qm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new P0),i.forEach(function(u){var d=V0.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function On(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var p=n,y=i,E=y;e:for(;E!==null;){switch(E.tag){case 5:It=E.stateNode,Dn=!1;break e;case 3:It=E.stateNode.containerInfo,Dn=!0;break e;case 4:It=E.stateNode.containerInfo,Dn=!0;break e}E=E.return}if(It===null)throw Error(t(160));Ym(p,y,d),It=null,Dn=!1;var A=d.alternate;A!==null&&(A.return=null),d.return=null}catch(U){Qe(d,i,U)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xm(i,n),i=i.sibling}function Xm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(On(i,n),er(n),u&4){try{Tl(3,n,n.return),mu(3,n)}catch(ne){Qe(n,n.return,ne)}try{Tl(5,n,n.return)}catch(ne){Qe(n,n.return,ne)}}break;case 1:On(i,n),er(n),u&512&&o!==null&&oo(o,o.return);break;case 5:if(On(i,n),er(n),u&512&&o!==null&&oo(o,o.return),n.flags&32){var d=n.stateNode;try{jr(d,"")}catch(ne){Qe(n,n.return,ne)}}if(u&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,y=o!==null?o.memoizedProps:p,E=n.type,A=n.updateQueue;if(n.updateQueue=null,A!==null)try{E==="input"&&p.type==="radio"&&p.name!=null&&Lo(d,p),Wo(E,y);var U=Wo(E,p);for(y=0;y<A.length;y+=2){var H=A[y],$=A[y+1];H==="style"?Vo(d,$):H==="dangerouslySetInnerHTML"?Uo(d,$):H==="children"?jr(d,$):ve(d,H,$,U)}switch(E){case"input":Mo(d,p);break;case"textarea":Is(d,p);break;case"select":var B=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var J=p.value;J!=null?ur(d,!!p.multiple,J,!1):B!==!!p.multiple&&(p.defaultValue!=null?ur(d,!!p.multiple,p.defaultValue,!0):ur(d,!!p.multiple,p.multiple?[]:"",!1))}d[pl]=p}catch(ne){Qe(n,n.return,ne)}}break;case 6:if(On(i,n),er(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(ne){Qe(n,n.return,ne)}}break;case 3:if(On(i,n),er(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Nn(i.containerInfo)}catch(ne){Qe(n,n.return,ne)}break;case 4:On(i,n),er(n);break;case 13:On(i,n),er(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(Gh=Ve())),u&4&&Qm(n);break;case 22:if(H=o!==null&&o.memoizedState!==null,n.mode&1?(Dt=(U=Dt)||H,On(i,n),Dt=U):On(i,n),er(n),u&8192){if(U=n.memoizedState!==null,(n.stateNode.isHidden=U)&&!H&&(n.mode&1)!==0)for(ee=n,H=n.child;H!==null;){for($=ee=H;ee!==null;){switch(B=ee,J=B.child,B.tag){case 0:case 11:case 14:case 15:Tl(4,B,B.return);break;case 1:oo(B,B.return);var te=B.stateNode;if(typeof te.componentWillUnmount=="function"){u=B,o=B.return;try{i=u,te.props=i.memoizedProps,te.state=i.memoizedState,te.componentWillUnmount()}catch(ne){Qe(u,o,ne)}}break;case 5:oo(B,B.return);break;case 22:if(B.memoizedState!==null){eg($);continue}}J!==null?(J.return=B,ee=J):eg($)}H=H.sibling}e:for(H=null,$=n;;){if($.tag===5){if(H===null){H=$;try{d=$.stateNode,U?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(E=$.stateNode,A=$.memoizedProps.style,y=A!=null&&A.hasOwnProperty("display")?A.display:null,E.style.display=jo("display",y))}catch(ne){Qe(n,n.return,ne)}}}else if($.tag===6){if(H===null)try{$.stateNode.nodeValue=U?"":$.memoizedProps}catch(ne){Qe(n,n.return,ne)}}else if(($.tag!==22&&$.tag!==23||$.memoizedState===null||$===n)&&$.child!==null){$.child.return=$,$=$.child;continue}if($===n)break e;for(;$.sibling===null;){if($.return===null||$.return===n)break e;H===$&&(H=null),$=$.return}H===$&&(H=null),$.sibling.return=$.return,$=$.sibling}}break;case 19:On(i,n),er(n),u&4&&Qm(n);break;case 21:break;default:On(i,n),er(n)}}function er(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(qm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(jr(d,""),u.flags&=-33);var p=Km(n);Wh(n,p,d);break;case 3:case 4:var y=u.stateNode.containerInfo,E=Km(n);Bh(n,E,y);break;default:throw Error(t(161))}}catch(A){Qe(n,n.return,A)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function D0(n,i,o){ee=n,Jm(n)}function Jm(n,i,o){for(var u=(n.mode&1)!==0;ee!==null;){var d=ee,p=d.child;if(d.tag===22&&u){var y=d.memoizedState!==null||pu;if(!y){var E=d.alternate,A=E!==null&&E.memoizedState!==null||Dt;E=pu;var U=Dt;if(pu=y,(Dt=A)&&!U)for(ee=d;ee!==null;)y=ee,A=y.child,y.tag===22&&y.memoizedState!==null?tg(d):A!==null?(A.return=y,ee=A):tg(d);for(;p!==null;)ee=p,Jm(p),p=p.sibling;ee=d,pu=E,Dt=U}Zm(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,ee=p):Zm(n)}}function Zm(n){for(;ee!==null;){var i=ee;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Dt||mu(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!Dt)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:xn(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&em(i,p,u);break;case 3:var y=i.updateQueue;if(y!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}em(i,y,o)}break;case 5:var E=i.stateNode;if(o===null&&i.flags&4){o=E;var A=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":A.autoFocus&&o.focus();break;case"img":A.src&&(o.src=A.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var U=i.alternate;if(U!==null){var H=U.memoizedState;if(H!==null){var $=H.dehydrated;$!==null&&Nn($)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dt||i.flags&512&&zh(i)}catch(B){Qe(i,i.return,B)}}if(i===n){ee=null;break}if(o=i.sibling,o!==null){o.return=i.return,ee=o;break}ee=i.return}}function eg(n){for(;ee!==null;){var i=ee;if(i===n){ee=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ee=o;break}ee=i.return}}function tg(n){for(;ee!==null;){var i=ee;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{mu(4,i)}catch(A){Qe(i,o,A)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(A){Qe(i,d,A)}}var p=i.return;try{zh(i)}catch(A){Qe(i,p,A)}break;case 5:var y=i.return;try{zh(i)}catch(A){Qe(i,y,A)}}}catch(A){Qe(i,i.return,A)}if(i===n){ee=null;break}var E=i.sibling;if(E!==null){E.return=i.return,ee=E;break}ee=i.return}}var O0=Math.ceil,gu=Pe.ReactCurrentDispatcher,Hh=Pe.ReactCurrentOwner,mn=Pe.ReactCurrentBatchConfig,Ne=0,gt=null,nt=null,Ct=0,on=0,lo=Jr(0),at=0,kl=null,qi=0,_u=0,$h=0,Nl=null,Kt=null,Gh=0,ao=1/0,Tr=null,yu=!1,qh=null,ii=null,vu=!1,si=null,wu=0,Al=0,Kh=null,Eu=-1,Su=0;function Mt(){return(Ne&6)!==0?Ve():Eu!==-1?Eu:Eu=Ve()}function oi(n){return(n.mode&1)===0?1:(Ne&2)!==0&&Ct!==0?Ct&-Ct:g0.transition!==null?(Su===0&&(Su=bi()),Su):(n=Ee,n!==0||(n=window.event,n=n===void 0?16:nl(n.type)),n)}function Ln(n,i,o,u){if(50<Al)throw Al=0,Kh=null,Error(t(185));Wr(n,o,u),((Ne&2)===0||n!==gt)&&(n===gt&&((Ne&2)===0&&(_u|=o),at===4&&li(n,Ct)),Yt(n,u),o===1&&Ne===0&&(i.mode&1)===0&&(ao=Ve()+500,Qa&&ei()))}function Yt(n,i){var o=n.callbackNode;fr(n,i);var u=Mi(n,n===gt?Ct:0);if(u===0)o!==null&&Xo(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&Xo(o),i===1)n.tag===0?m0(rg.bind(null,n)):Bp(rg.bind(null,n)),h0(function(){(Ne&6)===0&&ei()}),o=null;else{switch($r(u)){case 1:o=Oi;break;case 4:o=Vr;break;case 16:o=un;break;case 536870912:o=Sa;break;default:o=un}o=hg(o,ng.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function ng(n,i){if(Eu=-1,Su=0,(Ne&6)!==0)throw Error(t(327));var o=n.callbackNode;if(uo()&&n.callbackNode!==o)return null;var u=Mi(n,n===gt?Ct:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Iu(n,u);else{i=u;var d=Ne;Ne|=2;var p=sg();(gt!==n||Ct!==i)&&(Tr=null,ao=Ve()+500,Yi(n,i));do try{b0();break}catch(E){ig(n,E)}while(!0);dh(),gu.current=p,Ne=d,nt!==null?i=0:(gt=null,Ct=0,i=at)}if(i!==0){if(i===2&&(d=tn(n),d!==0&&(u=d,i=Yh(n,d))),i===1)throw o=kl,Yi(n,0),li(n,u),Yt(n,Ve()),o;if(i===6)li(n,u);else{if(d=n.current.alternate,(u&30)===0&&!L0(d)&&(i=Iu(n,u),i===2&&(p=tn(n),p!==0&&(u=p,i=Yh(n,p))),i===1))throw o=kl,Yi(n,0),li(n,u),Yt(n,Ve()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Qi(n,Kt,Tr);break;case 3:if(li(n,u),(u&130023424)===u&&(i=Gh+500-Ve(),10<i)){if(Mi(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){Mt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=th(Qi.bind(null,n,Kt,Tr),i);break}Qi(n,Kt,Tr);break;case 4:if(li(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var y=31-Ot(u);p=1<<y,y=i[y],y>d&&(d=y),u&=~p}if(u=d,u=Ve()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*O0(u/1960))-u,10<u){n.timeoutHandle=th(Qi.bind(null,n,Kt,Tr),u);break}Qi(n,Kt,Tr);break;case 5:Qi(n,Kt,Tr);break;default:throw Error(t(329))}}}return Yt(n,Ve()),n.callbackNode===o?ng.bind(null,n):null}function Yh(n,i){var o=Nl;return n.current.memoizedState.isDehydrated&&(Yi(n,i).flags|=256),n=Iu(n,i),n!==2&&(i=Kt,Kt=o,i!==null&&Qh(i)),n}function Qh(n){Kt===null?Kt=n:Kt.push.apply(Kt,n)}function L0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],p=d.getSnapshot;d=d.value;try{if(!Rn(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function li(n,i){for(i&=~$h,i&=~_u,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Ot(i),u=1<<o;n[o]=-1,i&=~u}}function rg(n){if((Ne&6)!==0)throw Error(t(327));uo();var i=Mi(n,0);if((i&1)===0)return Yt(n,Ve()),null;var o=Iu(n,i);if(n.tag!==0&&o===2){var u=tn(n);u!==0&&(i=u,o=Yh(n,u))}if(o===1)throw o=kl,Yi(n,0),li(n,i),Yt(n,Ve()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Qi(n,Kt,Tr),Yt(n,Ve()),null}function Xh(n,i){var o=Ne;Ne|=1;try{return n(i)}finally{Ne=o,Ne===0&&(ao=Ve()+500,Qa&&ei())}}function Ki(n){si!==null&&si.tag===0&&(Ne&6)===0&&uo();var i=Ne;Ne|=1;var o=mn.transition,u=Ee;try{if(mn.transition=null,Ee=1,n)return n()}finally{Ee=u,mn.transition=o,Ne=i,(Ne&6)===0&&ei()}}function Jh(){on=lo.current,$e(lo)}function Yi(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,c0(o)),nt!==null)for(o=nt.return;o!==null;){var u=o;switch(lh(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ka();break;case 3:io(),$e($t),$e(Rt),wh();break;case 5:yh(u);break;case 4:io();break;case 13:$e(Ke);break;case 19:$e(Ke);break;case 10:fh(u.type._context);break;case 22:case 23:Jh()}o=o.return}if(gt=n,nt=n=ai(n.current,null),Ct=on=i,at=0,kl=null,$h=_u=qi=0,Kt=Nl=null,Hi!==null){for(i=0;i<Hi.length;i++)if(o=Hi[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,p=o.pending;if(p!==null){var y=p.next;p.next=d,u.next=y}o.pending=u}Hi=null}return n}function ig(n,i){do{var o=nt;try{if(dh(),ou.current=cu,lu){for(var u=Ye.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}lu=!1}if(Gi=0,mt=lt=Ye=null,wl=!1,El=0,Hh.current=null,o===null||o.return===null){at=1,kl=i,nt=null;break}e:{var p=n,y=o.return,E=o,A=i;if(i=Ct,E.flags|=32768,A!==null&&typeof A=="object"&&typeof A.then=="function"){var U=A,H=E,$=H.tag;if((H.mode&1)===0&&($===0||$===11||$===15)){var B=H.alternate;B?(H.updateQueue=B.updateQueue,H.memoizedState=B.memoizedState,H.lanes=B.lanes):(H.updateQueue=null,H.memoizedState=null)}var J=Rm(y);if(J!==null){J.flags&=-257,Pm(J,y,E,p,i),J.mode&1&&Am(p,U,i),i=J,A=U;var te=i.updateQueue;if(te===null){var ne=new Set;ne.add(A),i.updateQueue=ne}else te.add(A);break e}else{if((i&1)===0){Am(p,U,i),Zh();break e}A=Error(t(426))}}else if(Ge&&E.mode&1){var tt=Rm(y);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Pm(tt,y,E,p,i),ch(so(A,E));break e}}p=A=so(A,E),at!==4&&(at=2),Nl===null?Nl=[p]:Nl.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var b=km(p,A,i);Zp(p,b);break e;case 1:E=A;var R=p.type,F=p.stateNode;if((p.flags&128)===0&&(typeof R.getDerivedStateFromError=="function"||F!==null&&typeof F.componentDidCatch=="function"&&(ii===null||!ii.has(F)))){p.flags|=65536,i&=-i,p.lanes|=i;var G=Nm(p,E,i);Zp(p,G);break e}}p=p.return}while(p!==null)}lg(o)}catch(ie){i=ie,nt===o&&o!==null&&(nt=o=o.return);continue}break}while(!0)}function sg(){var n=gu.current;return gu.current=cu,n===null?cu:n}function Zh(){(at===0||at===3||at===2)&&(at=4),gt===null||(qi&268435455)===0&&(_u&268435455)===0||li(gt,Ct)}function Iu(n,i){var o=Ne;Ne|=2;var u=sg();(gt!==n||Ct!==i)&&(Tr=null,Yi(n,i));do try{M0();break}catch(d){ig(n,d)}while(!0);if(dh(),Ne=o,gu.current=u,nt!==null)throw Error(t(261));return gt=null,Ct=0,at}function M0(){for(;nt!==null;)og(nt)}function b0(){for(;nt!==null&&!wa();)og(nt)}function og(n){var i=cg(n.alternate,n,on);n.memoizedProps=n.pendingProps,i===null?lg(n):nt=i,Hh.current=null}function lg(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=A0(o,i,on),o!==null){nt=o;return}}else{if(o=R0(o,i),o!==null){o.flags&=32767,nt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{at=6,nt=null;return}}if(i=i.sibling,i!==null){nt=i;return}nt=i=n}while(i!==null);at===0&&(at=5)}function Qi(n,i,o){var u=Ee,d=mn.transition;try{mn.transition=null,Ee=1,F0(n,i,o,u)}finally{mn.transition=d,Ee=u}return null}function F0(n,i,o,u){do uo();while(si!==null);if((Ne&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(Ue(n,p),n===gt&&(nt=gt=null,Ct=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||vu||(vu=!0,hg(un,function(){return uo(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=mn.transition,mn.transition=null;var y=Ee;Ee=1;var E=Ne;Ne|=4,Hh.current=null,x0(n,o),Xm(o,n),r0(Zc),qr=!!Jc,Zc=Jc=null,n.current=o,D0(o),bc(),Ne=E,Ee=y,mn.transition=p}else n.current=o;if(vu&&(vu=!1,si=n,wu=d),p=n.pendingLanes,p===0&&(ii=null),Ia(o.stateNode),Yt(n,Ve()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(yu)throw yu=!1,n=qh,qh=null,n;return(wu&1)!==0&&n.tag!==0&&uo(),p=n.pendingLanes,(p&1)!==0?n===Kh?Al++:(Al=0,Kh=n):Al=0,ei(),null}function uo(){if(si!==null){var n=$r(wu),i=mn.transition,o=Ee;try{if(mn.transition=null,Ee=16>n?16:n,si===null)var u=!1;else{if(n=si,si=null,wu=0,(Ne&6)!==0)throw Error(t(331));var d=Ne;for(Ne|=4,ee=n.current;ee!==null;){var p=ee,y=p.child;if((ee.flags&16)!==0){var E=p.deletions;if(E!==null){for(var A=0;A<E.length;A++){var U=E[A];for(ee=U;ee!==null;){var H=ee;switch(H.tag){case 0:case 11:case 15:Tl(8,H,p)}var $=H.child;if($!==null)$.return=H,ee=$;else for(;ee!==null;){H=ee;var B=H.sibling,J=H.return;if(Gm(H),H===U){ee=null;break}if(B!==null){B.return=J,ee=B;break}ee=J}}}var te=p.alternate;if(te!==null){var ne=te.child;if(ne!==null){te.child=null;do{var tt=ne.sibling;ne.sibling=null,ne=tt}while(ne!==null)}}ee=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,ee=y;else e:for(;ee!==null;){if(p=ee,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Tl(9,p,p.return)}var b=p.sibling;if(b!==null){b.return=p.return,ee=b;break e}ee=p.return}}var R=n.current;for(ee=R;ee!==null;){y=ee;var F=y.child;if((y.subtreeFlags&2064)!==0&&F!==null)F.return=y,ee=F;else e:for(y=R;ee!==null;){if(E=ee,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:mu(9,E)}}catch(ie){Qe(E,E.return,ie)}if(E===y){ee=null;break e}var G=E.sibling;if(G!==null){G.return=E.return,ee=G;break e}ee=E.return}}if(Ne=d,ei(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Li,n)}catch{}u=!0}return u}finally{Ee=o,mn.transition=i}}return!1}function ag(n,i,o){i=so(o,i),i=km(n,i,1),n=ni(n,i,1),i=Mt(),n!==null&&(Wr(n,1,i),Yt(n,i))}function Qe(n,i,o){if(n.tag===3)ag(n,n,o);else for(;i!==null;){if(i.tag===3){ag(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ii===null||!ii.has(u))){n=so(o,n),n=Nm(i,n,1),i=ni(i,n,1),n=Mt(),i!==null&&(Wr(i,1,n),Yt(i,n));break}}i=i.return}}function U0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=Mt(),n.pingedLanes|=n.suspendedLanes&o,gt===n&&(Ct&o)===o&&(at===4||at===3&&(Ct&130023424)===Ct&&500>Ve()-Gh?Yi(n,0):$h|=o),Yt(n,i)}function ug(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ds,Ds<<=1,(Ds&130023424)===0&&(Ds=4194304)));var o=Mt();n=Sr(n,i),n!==null&&(Wr(n,i,o),Yt(n,o))}function j0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),ug(n,o)}function V0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),ug(n,o)}var cg;cg=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||$t.current)qt=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return qt=!1,N0(n,i,o);qt=(n.flags&131072)!==0}else qt=!1,Ge&&(i.flags&1048576)!==0&&Wp(i,Ja,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;fu(n,i),n=i.pendingProps;var d=Xs(i,Rt.current);ro(i,o),d=Ih(null,i,u,n,d,o);var p=Ch();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Gt(u)?(p=!0,Ya(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,gh(i),d.updater=hu,i.stateNode=d,d._reactInternals=i,Ph(i,u,n,o),i=Lh(null,i,u,!0,p,o)):(i.tag=0,Ge&&p&&oh(i),Lt(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(fu(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=B0(u),n=xn(u,n),d){case 0:i=Oh(null,i,u,n,o);break e;case 1:i=bm(null,i,u,n,o);break e;case 11:i=xm(null,i,u,n,o);break e;case 14:i=Dm(null,i,u,xn(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xn(u,d),Oh(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xn(u,d),bm(n,i,u,d,o);case 3:e:{if(Fm(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,d=p.element,Jp(n,i),iu(i,u,null,o);var y=i.memoizedState;if(u=y.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=so(Error(t(423)),i),i=Um(n,i,u,o,d);break e}else if(u!==d){d=so(Error(t(424)),i),i=Um(n,i,u,o,d);break e}else for(sn=Xr(i.stateNode.containerInfo.firstChild),rn=i,Ge=!0,Pn=null,o=Qp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(eo(),u===d){i=Cr(n,i,o);break e}Lt(n,i,u,o)}i=i.child}return i;case 5:return tm(i),n===null&&uh(i),u=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,y=d.children,eh(u,d)?y=null:p!==null&&eh(u,p)&&(i.flags|=32),Mm(n,i),Lt(n,i,y,o),i.child;case 6:return n===null&&uh(i),null;case 13:return jm(n,i,o);case 4:return _h(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=to(i,null,u,o):Lt(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xn(u,d),xm(n,i,u,d,o);case 7:return Lt(n,i,i.pendingProps,o),i.child;case 8:return Lt(n,i,i.pendingProps.children,o),i.child;case 12:return Lt(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,p=i.memoizedProps,y=d.value,ze(tu,u._currentValue),u._currentValue=y,p!==null)if(Rn(p.value,y)){if(p.children===d.children&&!$t.current){i=Cr(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var E=p.dependencies;if(E!==null){y=p.child;for(var A=E.firstContext;A!==null;){if(A.context===u){if(p.tag===1){A=Ir(-1,o&-o),A.tag=2;var U=p.updateQueue;if(U!==null){U=U.shared;var H=U.pending;H===null?A.next=A:(A.next=H.next,H.next=A),U.pending=A}}p.lanes|=o,A=p.alternate,A!==null&&(A.lanes|=o),ph(p.return,o,i),E.lanes|=o;break}A=A.next}}else if(p.tag===10)y=p.type===i.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(t(341));y.lanes|=o,E=y.alternate,E!==null&&(E.lanes|=o),ph(y,o,i),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===i){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}Lt(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ro(i,o),d=fn(d),u=u(d),i.flags|=1,Lt(n,i,u,o),i.child;case 14:return u=i.type,d=xn(u,i.pendingProps),d=xn(u.type,d),Dm(n,i,u,d,o);case 15:return Om(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:xn(u,d),fu(n,i),i.tag=1,Gt(u)?(n=!0,Ya(i)):n=!1,ro(i,o),Cm(i,u,d),Ph(i,u,d,o),Lh(null,i,u,!0,n,o);case 19:return zm(n,i,o);case 22:return Lm(n,i,o)}throw Error(t(156,i.tag))};function hg(n,i){return Ps(n,i)}function z0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(n,i,o,u){return new z0(n,i,o,u)}function ed(n){return n=n.prototype,!(!n||!n.isReactComponent)}function B0(n){if(typeof n=="function")return ed(n)?1:0;if(n!=null){if(n=n.$$typeof,n===L)return 11;if(n===Nt)return 14}return 2}function ai(n,i){var o=n.alternate;return o===null?(o=gn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Cu(n,i,o,u,d,p){var y=2;if(u=n,typeof n=="function")ed(n)&&(y=1);else if(typeof n=="string")y=5;else e:switch(n){case D:return Xi(o.children,d,p,i);case S:y=8,d|=8;break;case N:return n=gn(12,o,i,d|2),n.elementType=N,n.lanes=p,n;case C:return n=gn(13,o,i,d),n.elementType=C,n.lanes=p,n;case Ze:return n=gn(19,o,i,d),n.elementType=Ze,n.lanes=p,n;case be:return Tu(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:y=10;break e;case x:y=9;break e;case L:y=11;break e;case Nt:y=14;break e;case At:y=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gn(y,o,i,d),i.elementType=n,i.type=u,i.lanes=p,i}function Xi(n,i,o,u){return n=gn(7,n,u,i),n.lanes=o,n}function Tu(n,i,o,u){return n=gn(22,n,u,i),n.elementType=be,n.lanes=o,n.stateNode={isHidden:!1},n}function td(n,i,o){return n=gn(6,n,null,i),n.lanes=o,n}function nd(n,i,o){return i=gn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function W0(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Br(0),this.expirationTimes=Br(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Br(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function rd(n,i,o,u,d,p,y,E,A){return n=new W0(n,i,o,E,A),i===1?(i=1,p===!0&&(i|=8)):i=0,p=gn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(p),n}function H0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Le,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function dg(n){if(!n)return Zr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Gt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gt(o))return Vp(n,o,i)}return i}function fg(n,i,o,u,d,p,y,E,A){return n=rd(o,u,!0,n,d,p,y,E,A),n.context=dg(null),o=n.current,u=Mt(),d=oi(o),p=Ir(u,d),p.callback=i??null,ni(o,p,d),n.current.lanes=d,Wr(n,d,u),Yt(n,u),n}function ku(n,i,o,u){var d=i.current,p=Mt(),y=oi(d);return o=dg(o),i.context===null?i.context=o:i.pendingContext=o,i=Ir(p,y),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=ni(d,i,y),n!==null&&(Ln(n,d,y,p),ru(n,d,y)),y}function Nu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pg(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function id(n,i){pg(n,i),(n=n.alternate)&&pg(n,i)}function $0(){return null}var mg=typeof reportError=="function"?reportError:function(n){console.error(n)};function sd(n){this._internalRoot=n}Au.prototype.render=sd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ku(n,i,null,null)},Au.prototype.unmount=sd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ki(function(){ku(null,n,null,null)}),i[yr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var i=Aa();n={blockedOn:null,target:n,priority:i};for(var o=0;o<qn.length&&i!==0&&i<qn[o].priority;o++);qn.splice(o,0,n),o===0&&xa(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gg(){}function G0(n,i,o,u,d){if(d){if(typeof u=="function"){var p=u;u=function(){var U=Nu(y);p.call(U)}}var y=fg(i,u,n,0,null,!1,!1,"",gg);return n._reactRootContainer=y,n[yr]=y.current,dl(n.nodeType===8?n.parentNode:n),Ki(),y}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var E=u;u=function(){var U=Nu(A);E.call(U)}}var A=rd(n,0,!1,null,null,!1,!1,"",gg);return n._reactRootContainer=A,n[yr]=A.current,dl(n.nodeType===8?n.parentNode:n),Ki(function(){ku(i,A,o,u)}),A}function Pu(n,i,o,u,d){var p=o._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var E=d;d=function(){var A=Nu(y);E.call(A)}}ku(i,y,n,d)}else y=G0(o,i,n,d,u);return Nu(y)}ka=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=zr(i.pendingLanes);o!==0&&(Hr(i,o|1),Yt(i,Ve()),(Ne&6)===0&&(ao=Ve()+500,ei()))}break;case 13:Ki(function(){var u=Sr(n,1);if(u!==null){var d=Mt();Ln(u,n,1,d)}}),id(n,1)}},Os=function(n){if(n.tag===13){var i=Sr(n,134217728);if(i!==null){var o=Mt();Ln(i,n,134217728,o)}id(n,134217728)}},Na=function(n){if(n.tag===13){var i=oi(n),o=Sr(n,i);if(o!==null){var u=Mt();Ln(o,n,i,u)}id(n,i)}},Aa=function(){return Ee},Ra=function(n,i){var o=Ee;try{return Ee=n,i()}finally{Ee=o}},Ho=function(n,i,o){switch(i){case"input":if(Mo(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=qa(u);if(!d)throw Error(t(90));vs(u),Mo(u,d)}}}break;case"textarea":Is(n,o);break;case"select":i=o.value,i!=null&&ur(n,!!o.multiple,i,!1)}},ks=Xh,Go=Ki;var q0={usingClientEntryPoint:!1,Events:[ml,Ys,qa,hr,$o,Xh]},Rl={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},K0={bundleType:Rl.bundleType,version:Rl.version,rendererPackageName:Rl.rendererPackageName,rendererConfig:Rl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pe.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qo(n),n===null?null:n.stateNode},findFiberByHostInstance:Rl.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Li=xu.inject(K0),en=xu}catch{}}return Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q0,Qt.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(i))throw Error(t(200));return H0(n,i,null,o)},Qt.createRoot=function(n,i){if(!od(n))throw Error(t(299));var o=!1,u="",d=mg;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=rd(n,1,!1,null,null,o,!1,u,d),n[yr]=i.current,dl(n.nodeType===8?n.parentNode:n),new sd(i)},Qt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qo(i),n=n===null?null:n.stateNode,n},Qt.flushSync=function(n){return Ki(n)},Qt.hydrate=function(n,i,o){if(!Ru(i))throw Error(t(200));return Pu(null,n,i,!0,o)},Qt.hydrateRoot=function(n,i,o){if(!od(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,p="",y=mg;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),i=fg(i,null,n,1,o??null,d,!1,p,y),n[yr]=i.current,dl(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new Au(i)},Qt.render=function(n,i,o){if(!Ru(i))throw Error(t(200));return Pu(null,n,i,!1,o)},Qt.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(Ki(function(){Pu(null,null,n,!1,function(){n._reactRootContainer=null,n[yr]=null})}),!0):!1},Qt.unstable_batchedUpdates=Xh,Qt.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Ru(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Pu(n,i,o,!1,u)},Qt.version="18.3.1-next-f1338f8080-20240426",Qt}var Cg;function nE(){if(Cg)return ud.exports;Cg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),ud.exports=tE(),ud.exports}var Tg;function rE(){if(Tg)return Du;Tg=1;var r=nE();return Du.createRoot=r.createRoot,Du.hydrateRoot=r.hydrateRoot,Du}var iE=rE();const sE=()=>{};var kg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K=function(r,e){if(!r)throw Ao(e)},Ao=function(r){return new Error("Firebase Database ("+oy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+r)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ly=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},oE=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const l=r[t++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const c=r[t++];e[s++]=String.fromCharCode((l&31)<<6|c&63)}else if(l>239&&l<365){const c=r[t++],h=r[t++],m=r[t++],_=((l&7)<<18|(c&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(_>>10)),e[s++]=String.fromCharCode(56320+(_&1023))}else{const c=r[t++],h=r[t++];e[s++]=String.fromCharCode((l&15)<<12|(c&63)<<6|h&63)}}return e.join("")},rf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const c=r[l],h=l+1<r.length,m=h?r[l+1]:0,_=l+2<r.length,v=_?r[l+2]:0,k=c>>2,T=(c&3)<<4|m>>4;let I=(m&15)<<2|v>>6,W=v&63;_||(W=64,h||(I=64)),s.push(t[k],t[T],t[I],t[W])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ly(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):oE(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const c=t[r.charAt(l++)],m=l<r.length?t[r.charAt(l)]:0;++l;const v=l<r.length?t[r.charAt(l)]:64;++l;const T=l<r.length?t[r.charAt(l)]:64;if(++l,c==null||m==null||v==null||T==null)throw new lE;const I=c<<2|m>>4;if(s.push(I),v!==64){const W=m<<4&240|v>>2;if(s.push(W),T!==64){const z=v<<6&192|T;s.push(z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class lE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ay=function(r){const e=ly(r);return rf.encodeByteArray(e,!0)},Hu=function(r){return ay(r).replace(/\./g,"")},$u=function(r){try{return rf.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(r){return uy(void 0,r)}function uy(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!uE(t)||(r[t]=uy(r[t],e[t]));return r}function uE(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hE=()=>cE().__FIREBASE_DEFAULTS__,dE=()=>{if(typeof process>"u"||typeof kg>"u")return;const r=kg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},fE=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&$u(r[1]);return e&&JSON.parse(e)},sf=()=>{try{return sE()||hE()||dE()||fE()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},cy=r=>sf()?.emulatorHosts?.[r],hy=r=>{const e=cy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},dy=()=>sf()?.config,fy=r=>sf()?.[`_${r}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function of(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,c=r.sub||r.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Hu(JSON.stringify(t)),Hu(JSON.stringify(h)),""].join(".")}const Ml={};function pE(){const r={prod:[],emulator:[]};for(const e of Object.keys(Ml))Ml[e]?r.emulator.push(e):r.prod.push(e);return r}function mE(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Ng=!1;function lf(r,e){if(typeof window>"u"||typeof document>"u"||!ps(window.location.host)||Ml[r]===e||Ml[r]||Ng)return;Ml[r]=e;function t(I){return`__firebase__banner__${I}`}const s="__firebase__banner",c=pE().prod.length>0;function h(){const I=document.getElementById(s);I&&I.remove()}function m(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function _(I,W){I.setAttribute("width","24"),I.setAttribute("id",W),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function v(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Ng=!0,h()},I}function k(I,W){I.setAttribute("id",W),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=mE(s),W=t("text"),z=document.getElementById(W)||document.createElement("span"),q=t("learnmore"),Q=document.getElementById(q)||document.createElement("a"),de=t("preprendIcon"),fe=document.getElementById(de)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ve=I.element;m(ve),k(Q,q);const Pe=v();_(fe,de),ve.append(fe,z,Q,Pe),document.body.appendChild(ve)}c?(z.innerText="Preview backend disconnected.",fe.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(fe.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",W)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function af(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())}function gE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function my(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function gy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _E(){const r=Vt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function yE(){return oy.NODE_ADMIN===!0}function _y(){try{return typeof indexedDB=="object"}catch{return!1}}function yy(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{t=!1},l.onerror=()=>{e(l.error?.message||"")}}catch(t){e(t)}})}function vE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="FirebaseError";class Hn extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=wE,Object.setPrototypeOf(this,Hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ms.prototype.create)}}class ms{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},l=`${this.service}/${e}`,c=this.errors[e],h=c?EE(c,s):"Error",m=`${this.serviceName}: ${h} (${l}).`;return new Hn(l,m,s)}}function EE(r,e){return r.replace(SE,(t,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const SE=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){return JSON.parse(r)}function ct(r){return JSON.stringify(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vy=function(r){let e={},t={},s={},l="";try{const c=r.split(".");e=Gl($u(c[0])||""),t=Gl($u(c[1])||""),l=c[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:l}},IE=function(r){const e=vy(r),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},CE=function(r){const e=vy(r).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function wo(r,e){if(Object.prototype.hasOwnProperty.call(r,e))return r[e]}function xd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Gu(r,e,t){const s={};for(const l in r)Object.prototype.hasOwnProperty.call(r,l)&&(s[l]=e.call(t,r[l],l,r));return s}function Dr(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const l of t){if(!s.includes(l))return!1;const c=r[l],h=e[l];if(Ag(c)&&Ag(h)){if(!Dr(c,h))return!1}else if(c!==h)return!1}for(const l of s)if(!t.includes(l))return!1;return!0}function Ag(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let T=0;T<16;T++)s[T]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let T=0;T<16;T++)s[T]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let T=16;T<80;T++){const I=s[T-3]^s[T-8]^s[T-14]^s[T-16];s[T]=(I<<1|I>>>31)&4294967295}let l=this.chain_[0],c=this.chain_[1],h=this.chain_[2],m=this.chain_[3],_=this.chain_[4],v,k;for(let T=0;T<80;T++){T<40?T<20?(v=m^c&(h^m),k=1518500249):(v=c^h^m,k=1859775393):T<60?(v=c&h|m&(c|h),k=2400959708):(v=c^h^m,k=3395469782);const I=(l<<5|l>>>27)+v+_+k+s[T]&4294967295;_=m,m=h,h=(c<<30|c>>>2)&4294967295,c=l,l=I}this.chain_[0]=this.chain_[0]+l&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+m&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let l=0;const c=this.buf_;let h=this.inbuf_;for(;l<t;){if(h===0)for(;l<=s;)this.compress_(e,l),l+=this.blockSize;if(typeof e=="string"){for(;l<t;)if(c[h]=e.charCodeAt(l),++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}else for(;l<t;)if(c[h]=e[l],++h,++l,h===this.blockSize){this.compress_(c),h=0;break}}this.inbuf_=h,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let l=this.blockSize-1;l>=56;l--)this.buf_[l]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let l=0;l<5;l++)for(let c=24;c>=0;c-=8)e[s]=this.chain_[l]>>c&255,++s;return e}}function kE(r,e){const t=new NE(r,e);return t.subscribe.bind(t)}class NE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let l;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?l=e:l={next:e,error:t,complete:s},l.next===void 0&&(l.next=dd),l.error===void 0&&(l.error=dd),l.complete===void 0&&(l.complete=dd);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),c}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function dd(){}function gc(r,e){return`${r} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);if(l>=55296&&l<=56319){const c=l-55296;s++,K(s<r.length,"Surrogate pair missing trail surrogate.");const h=r.charCodeAt(s)-56320;l=65536+(c<<10)+h}l<128?e[t++]=l:l<2048?(e[t++]=l>>6|192,e[t++]=l&63|128):l<65536?(e[t++]=l>>12|224,e[t++]=l>>6&63|128,e[t++]=l&63|128):(e[t++]=l>>18|240,e[t++]=l>>12&63|128,e[t++]=l>>6&63|128,e[t++]=l&63|128)}return e},_c=function(r){let e=0;for(let t=0;t<r.length;t++){const s=r.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE=1e3,xE=2,DE=14400*1e3,OE=.5;function Rg(r,e=PE,t=xE){const s=e*Math.pow(t,r),l=Math.round(OE*s*(Math.random()-.5)*2);return Math.min(DE,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(r){return r&&r._delegate?r._delegate:r}class yn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new sa;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:t});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),s=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bE(e))try{this.getOrInitializeService({instanceIdentifier:Ji})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(t);try{const c=this.getOrInitializeService({instanceIdentifier:l});s.resolve(c)}catch{}}}}clearInstance(e=Ji){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ji){return this.instances.has(e)}getOptions(e=Ji){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[c,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(c);s===m&&h.resolve(l)}return l}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const l of s)try{l(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ME(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ji){return this.component?this.component.multipleInstances?e:Ji:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ME(r){return r===Ji?void 0:r}function bE(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Oe||(Oe={}));const UE={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},jE=Oe.INFO,VE={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},zE=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=VE[e];if(l)console[l](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oa{constructor(e){this.name=e,this._logLevel=jE,this._logHandler=zE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?UE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...e),this._logHandler(this,Oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...e),this._logHandler(this,Oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...e),this._logHandler(this,Oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...e),this._logHandler(this,Oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...e),this._logHandler(this,Oe.ERROR,...e)}}const BE=(r,e)=>e.some(t=>r instanceof t);let Pg,xg;function WE(){return Pg||(Pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HE(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wy=new WeakMap,Dd=new WeakMap,Ey=new WeakMap,fd=new WeakMap,uf=new WeakMap;function $E(r){const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("success",c),r.removeEventListener("error",h)},c=()=>{t(_i(r.result)),l()},h=()=>{s(r.error),l()};r.addEventListener("success",c),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&wy.set(t,r)}).catch(()=>{}),uf.set(e,r),e}function GE(r){if(Dd.has(r))return;const e=new Promise((t,s)=>{const l=()=>{r.removeEventListener("complete",c),r.removeEventListener("error",h),r.removeEventListener("abort",h)},c=()=>{t(),l()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",c),r.addEventListener("error",h),r.addEventListener("abort",h)});Dd.set(r,e)}let Od={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Dd.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ey.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _i(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function qE(r){Od=r(Od)}function KE(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(pd(this),e,...t);return Ey.set(s,e.sort?e.sort():[e]),_i(s)}:HE().includes(r)?function(...e){return r.apply(pd(this),e),_i(wy.get(this))}:function(...e){return _i(r.apply(pd(this),e))}}function YE(r){return typeof r=="function"?KE(r):(r instanceof IDBTransaction&&GE(r),BE(r,WE())?new Proxy(r,Od):r)}function _i(r){if(r instanceof IDBRequest)return $E(r);if(fd.has(r))return fd.get(r);const e=YE(r);return e!==r&&(fd.set(r,e),uf.set(e,r)),e}const pd=r=>uf.get(r);function Sy(r,e,{blocked:t,upgrade:s,blocking:l,terminated:c}={}){const h=indexedDB.open(r,e),m=_i(h);return s&&h.addEventListener("upgradeneeded",_=>{s(_i(h.result),_.oldVersion,_.newVersion,_i(h.transaction),_)}),t&&h.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),m.then(_=>{c&&_.addEventListener("close",()=>c()),l&&_.addEventListener("versionchange",v=>l(v.oldVersion,v.newVersion,v))}).catch(()=>{}),m}const QE=["get","getKey","getAll","getAllKeys","count"],XE=["put","add","delete","clear"],md=new Map;function Dg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(md.get(e))return md.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,l=XE.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(l||QE.includes(t)))return;const c=async function(h,...m){const _=this.transaction(h,l?"readwrite":"readonly");let v=_.store;return s&&(v=v.index(m.shift())),(await Promise.all([v[t](...m),l&&_.done]))[0]};return md.set(e,c),c}qE(r=>({...r,get:(e,t,s)=>Dg(e,t)||r.get(e,t,s),has:(e,t)=>!!Dg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZE(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ZE(r){return r.getComponent()?.type==="VERSION"}const Ld="@firebase/app",Og="0.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new oa("@firebase/app"),eS="@firebase/app-compat",tS="@firebase/analytics-compat",nS="@firebase/analytics",rS="@firebase/app-check-compat",iS="@firebase/app-check",sS="@firebase/auth",oS="@firebase/auth-compat",lS="@firebase/database",aS="@firebase/data-connect",uS="@firebase/database-compat",cS="@firebase/functions",hS="@firebase/functions-compat",dS="@firebase/installations",fS="@firebase/installations-compat",pS="@firebase/messaging",mS="@firebase/messaging-compat",gS="@firebase/performance",_S="@firebase/performance-compat",yS="@firebase/remote-config",vS="@firebase/remote-config-compat",wS="@firebase/storage",ES="@firebase/storage-compat",SS="@firebase/firestore",IS="@firebase/ai",CS="@firebase/firestore-compat",TS="firebase",kS="12.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="[DEFAULT]",NS={[Ld]:"fire-core",[eS]:"fire-core-compat",[nS]:"fire-analytics",[tS]:"fire-analytics-compat",[iS]:"fire-app-check",[rS]:"fire-app-check-compat",[sS]:"fire-auth",[oS]:"fire-auth-compat",[lS]:"fire-rtdb",[aS]:"fire-data-connect",[uS]:"fire-rtdb-compat",[cS]:"fire-fn",[hS]:"fire-fn-compat",[dS]:"fire-iid",[fS]:"fire-iid-compat",[pS]:"fire-fcm",[mS]:"fire-fcm-compat",[gS]:"fire-perf",[_S]:"fire-perf-compat",[yS]:"fire-rc",[vS]:"fire-rc-compat",[wS]:"fire-gcs",[ES]:"fire-gcs-compat",[SS]:"fire-fst",[CS]:"fire-fst-compat",[IS]:"fire-vertex","fire-js":"fire-js",[TS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu=new Map,AS=new Map,bd=new Map;function Lg(r,e){try{r.container.addComponent(e)}catch(t){Or.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Wn(r){const e=r.name;if(bd.has(e))return Or.debug(`There were multiple attempts to register component ${e}.`),!1;bd.set(e,r);for(const t of qu.values())Lg(t,r);for(const t of AS.values())Lg(t,r);return!0}function Ti(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function bn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yi=new ms("app","Firebase",RS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=kS;function Iy(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s={name:Md,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw yi.create("bad-app-name",{appName:String(l)});if(t||(t=dy()),!t)throw yi.create("no-options");const c=qu.get(l);if(c){if(Dr(t,c.options)&&Dr(s,c.config))return c;throw yi.create("duplicate-app",{appName:l})}const h=new FE(l);for(const _ of bd.values())h.addComponent(_);const m=new PS(t,s,h);return qu.set(l,m),m}function yc(r=Md){const e=qu.get(r);if(!e&&r===Md&&dy())return Iy();if(!e)throw yi.create("no-app",{appName:r});return e}function Jt(r,e,t){let s=NS[r]??r;t&&(s+=`-${t}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const h=[`Unable to register library "${s}" with version "${e}":`];l&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&h.push("and"),c&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Or.warn(h.join(" "));return}Wn(new yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="firebase-heartbeat-database",DS=1,ql="firebase-heartbeat-store";let gd=null;function Cy(){return gd||(gd=Sy(xS,DS,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ql)}catch(t){console.warn(t)}}}}).catch(r=>{throw yi.create("idb-open",{originalErrorMessage:r.message})})),gd}async function OS(r){try{const t=(await Cy()).transaction(ql),s=await t.objectStore(ql).get(Ty(r));return await t.done,s}catch(e){if(e instanceof Hn)Or.warn(e.message);else{const t=yi.create("idb-get",{originalErrorMessage:e?.message});Or.warn(t.message)}}}async function Mg(r,e){try{const s=(await Cy()).transaction(ql,"readwrite");await s.objectStore(ql).put(e,Ty(r)),await s.done}catch(t){if(t instanceof Hn)Or.warn(t.message);else{const s=yi.create("idb-set",{originalErrorMessage:t?.message});Or.warn(s.message)}}}function Ty(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=1024,MS=30;class bS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new US(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=bg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats.length>MS){const l=jS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Or.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bg(),{heartbeatsToSend:t,unsentEntries:s}=FS(this._heartbeatsCache.heartbeats),l=Hu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(e){return Or.warn(e),""}}}function bg(){return new Date().toISOString().substring(0,10)}function FS(r,e=LS){const t=[];let s=r.slice();for(const l of r){const c=t.find(h=>h.agent===l.agent);if(c){if(c.dates.push(l.date),Fg(t)>e){c.dates.pop();break}}else if(t.push({agent:l.agent,dates:[l.date]}),Fg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class US{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _y()?yy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await OS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Mg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fg(r){return Hu(JSON.stringify({version:2,heartbeats:r})).length}function jS(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let s=1;s<r.length;s++)r[s].date<t&&(t=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(r){Wn(new yn("platform-logger",e=>new JE(e),"PRIVATE")),Wn(new yn("heartbeat",e=>new bS(e),"PRIVATE")),Jt(Ld,Og,r),Jt(Ld,Og,"esm2020"),Jt("fire-js","")}VS("");var Ug={};const jg="@firebase/database",Vg="1.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ky="";function zS(r){ky=r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ct(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Gl(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return or(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=function(r){try{if(typeof window<"u"&&typeof window[r]<"u"){const e=window[r];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new BS(e)}}catch{}return new WS},ts=Ny("localStorage"),HS=Ny("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new oa("@firebase/database"),$S=function(){let r=1;return function(){return r++}}(),Ay=function(r){const e=RE(r),t=new TE;t.update(e);const s=t.digest();return rf.encodeByteArray(s)},la=function(...r){let e="";for(let t=0;t<r.length;t++){const s=r[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=la.apply(null,s):typeof s=="object"?e+=ct(s):e+=s,e+=" "}return e};let bl=null,zg=!0;const GS=function(r,e){K(!0,"Can't turn on custom loggers persistently."),po.logLevel=Oe.VERBOSE,bl=po.log.bind(po)},Tt=function(...r){if(zg===!0&&(zg=!1,bl===null&&HS.get("logging_enabled")===!0&&GS()),bl){const e=la.apply(null,r);bl(e)}},aa=function(r){return function(...e){Tt(r,...e)}},Fd=function(...r){const e="FIREBASE INTERNAL ERROR: "+la(...r);po.error(e)},Lr=function(...r){const e=`FIREBASE FATAL ERROR: ${la(...r)}`;throw po.error(e),new Error(e)},jt=function(...r){const e="FIREBASE WARNING: "+la(...r);po.warn(e)},qS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&jt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},cf=function(r){return typeof r=="number"&&(r!==r||r===Number.POSITIVE_INFINITY||r===Number.NEGATIVE_INFINITY)},KS=function(r){if(document.readyState==="complete")r();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,r())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Eo="[MIN_NAME]",ls="[MAX_NAME]",_s=function(r,e){if(r===e)return 0;if(r===Eo||e===ls)return-1;if(e===Eo||r===ls)return 1;{const t=Bg(r),s=Bg(e);return t!==null?s!==null?t-s===0?r.length-e.length:t-s:-1:s!==null?1:r<e?-1:1}},YS=function(r,e){return r===e?0:r<e?-1:1},xl=function(r,e){if(e&&r in e)return e[r];throw new Error("Missing required key ("+r+") in object: "+ct(e))},hf=function(r){if(typeof r!="object"||r===null)return ct(r);const e=[];for(const s in r)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=ct(e[s]),t+=":",t+=hf(r[e[s]]);return t+="}",t},Ry=function(r,e){const t=r.length;if(t<=e)return[r];const s=[];for(let l=0;l<t;l+=e)l+e>t?s.push(r.substring(l,t)):s.push(r.substring(l,l+e));return s};function kt(r,e){for(const t in r)r.hasOwnProperty(t)&&e(t,r[t])}const Py=function(r){K(!cf(r),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let l,c,h,m,_;r===0?(c=0,h=0,l=1/r===-1/0?1:0):(l=r<0,r=Math.abs(r),r>=Math.pow(2,1-s)?(m=Math.min(Math.floor(Math.log(r)/Math.LN2),s),c=m+s,h=Math.round(r*Math.pow(2,t-m)-Math.pow(2,t))):(c=0,h=Math.round(r/Math.pow(2,1-s-t))));const v=[];for(_=t;_;_-=1)v.push(h%2?1:0),h=Math.floor(h/2);for(_=e;_;_-=1)v.push(c%2?1:0),c=Math.floor(c/2);v.push(l?1:0),v.reverse();const k=v.join("");let T="";for(_=0;_<64;_+=8){let I=parseInt(k.substr(_,8),2).toString(16);I.length===1&&(I="0"+I),T=T+I}return T.toLowerCase()},QS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},XS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function JS(r,e){let t="Unknown Error";r==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":r==="permission_denied"?t="Client doesn't have permission to access the desired data.":r==="unavailable"&&(t="The service is unavailable");const s=new Error(r+" at "+e._path.toString()+": "+t);return s.code=r.toUpperCase(),s}const ZS=new RegExp("^-?(0*)\\d{1,10}$"),eI=-2147483648,tI=2147483647,Bg=function(r){if(ZS.test(r)){const e=Number(r);if(e>=eI&&e<=tI)return e}return null},Po=function(r){try{r()}catch(e){setTimeout(()=>{const t=e.stack||"";throw jt("Exception was thrown by user callback.",t),e},Math.floor(0))}},nI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fl=function(r,e){const t=setTimeout(r,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rI{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,bn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){jt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(l=>this.auth_=l)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Tt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',jt(e)}}class Uu{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Uu.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="5",xy="v",Dy="s",Oy="r",Ly="f",My=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,by="ls",Fy="p",Ud="ac",Uy="websocket",jy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,t,s,l,c=!1,h="",m=!1,_=!1,v=null){this.secure=t,this.namespace=s,this.webSocketOnly=l,this.nodeAdmin=c,this.persistenceKey=h,this.includeNamespaceInQueryParams=m,this.isUsingEmulator=_,this.emulatorOptions=v,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ts.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ts.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function sI(r){return r.host!==r.internalHost||r.isCustomHost()||r.includeNamespaceInQueryParams}function zy(r,e,t){K(typeof e=="string","typeof type must == string"),K(typeof t=="object","typeof params must == object");let s;if(e===Uy)s=(r.secure?"wss://":"ws://")+r.internalHost+"/.ws?";else if(e===jy)s=(r.secure?"https://":"http://")+r.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);sI(r)&&(t.ns=r.namespace);const l=[];return kt(t,(c,h)=>{l.push(c+"="+h)}),s+l.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oI{constructor(){this.counters_={}}incrementCounter(e,t=1){or(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return aE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d={},yd={};function ff(r){const e=r.toString();return _d[e]||(_d[e]=new oI),_d[e]}function lI(r,e){const t=r.toString();return yd[t]||(yd[t]=e()),yd[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let l=0;l<s.length;++l)s[l]&&Po(()=>{this.onMessage_(s[l])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="start",uI="close",cI="pLPCommand",hI="pRTLPCB",By="id",Wy="pw",Hy="ser",dI="cb",fI="seg",pI="ts",mI="d",gI="dframe",$y=1870,Gy=30,_I=$y-Gy,yI=25e3,vI=3e4;class ho{constructor(e,t,s,l,c,h,m){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.transportSessionId=h,this.lastSessionId=m,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=aa(e),this.stats_=ff(t),this.urlFn=_=>(this.appCheckToken&&(_[Ud]=this.appCheckToken),zy(t,jy,_))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new aI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(vI)),KS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new pf((...c)=>{const[h,m,_,v,k]=c;if(this.incrementIncomingBytes_(c),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===Wg)this.id=m,this.password=_;else if(h===uI)m?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(m,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+h)},(...c)=>{const[h,m]=c;this.incrementIncomingBytes_(c),this.myPacketOrderer.handleResponse(h,m)},()=>{this.onClosed_()},this.urlFn);const s={};s[Wg]="t",s[Hy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[dI]=this.scriptTagHolder.uniqueCallbackIdentifier),s[xy]=df,this.transportSessionId&&(s[Dy]=this.transportSessionId),this.lastSessionId&&(s[by]=this.lastSessionId),this.applicationId&&(s[Fy]=this.applicationId),this.appCheckToken&&(s[Ud]=this.appCheckToken),typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(s[Oy]=Ly);const l=this.urlFn(s);this.log_("Connecting via long-poll to "+l),this.scriptTagHolder.addTag(l,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ho.forceAllow_=!0}static forceDisallow(){ho.forceDisallow_=!0}static isAvailable(){return ho.forceAllow_?!0:!ho.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!QS()&&!XS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ay(t),l=Ry(s,_I);for(let c=0;c<l.length;c++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,l.length,l[c]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[gI]="t",s[By]=e,s[Wy]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ct(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class pf{constructor(e,t,s,l){this.onDisconnect=s,this.urlFn=l,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=$S(),window[cI+this.uniqueCallbackIdentifier]=e,window[hI+this.uniqueCallbackIdentifier]=t,this.myIFrame=pf.createIFrame_();let c="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(c='<script>document.domain="'+document.domain+'";<\/script>');const h="<html><body>"+c+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(h),this.myIFrame.doc.close()}catch(m){Tt("frame writing exception"),m.stack&&Tt(m.stack),Tt(m)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Tt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[By]=this.myID,e[Wy]=this.myPW,e[Hy]=this.currentSerial;let t=this.urlFn(e),s="",l=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gy+s.length<=$y;){const h=this.pendingSegs.shift();s=s+"&"+fI+l+"="+h.seg+"&"+pI+l+"="+h.ts+"&"+mI+l+"="+h.d,l++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},l=setTimeout(s,Math.floor(yI)),c=()=>{clearTimeout(l),s()};this.addTag(e,c)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const l=s.readyState;(!l||l==="loaded"||l==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Tt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=16384,EI=45e3;let Ku=null;typeof MozWebSocket<"u"?Ku=MozWebSocket:typeof WebSocket<"u"&&(Ku=WebSocket);class Fn{constructor(e,t,s,l,c,h,m){this.connId=e,this.applicationId=s,this.appCheckToken=l,this.authToken=c,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=aa(this.connId),this.stats_=ff(t),this.connURL=Fn.connectionURL_(t,h,m,l,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,l,c){const h={};return h[xy]=df,typeof location<"u"&&location.hostname&&My.test(location.hostname)&&(h[Oy]=Ly),t&&(h[Dy]=t),s&&(h[by]=s),l&&(h[Ud]=l),c&&(h[Fy]=c),zy(e,Uy,h)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ts.set("previous_websocket_failure",!0);try{let s;yE(),this.mySock=new Ku(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const l=s.message||s.data;l&&this.log_(l),this.onClosed_()}}start(){}static forceDisallow(){Fn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ku!==null&&!Fn.forceDisallow_}static previouslyFailed(){return ts.isInMemoryStorage||ts.get("previous_websocket_failure")===!0}markConnectionHealthy(){ts.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Gl(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(K(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=ct(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ry(t,wI);s.length>1&&this.sendString_(String(s.length));for(let l=0;l<s.length;l++)this.sendString_(s[l])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(EI))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Fn.responsesRequiredToBeHealthy=2;Fn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{static get ALL_TRANSPORTS(){return[ho,Fn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=Fn&&Fn.isAvailable();let s=t&&!Fn.previouslyFailed();if(e.webSocketOnly&&(t||jt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Fn];else{const l=this.transports_=[];for(const c of Kl.ALL_TRANSPORTS)c&&c.isAvailable()&&l.push(c);Kl.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Kl.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=6e4,II=5e3,CI=10*1024,TI=100*1024,vd="t",Hg="d",kI="s",$g="r",NI="e",Gg="o",qg="a",Kg="n",Yg="p",AI="h";class RI{constructor(e,t,s,l,c,h,m,_,v,k){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=l,this.authToken_=c,this.onMessage_=h,this.onReady_=m,this.onDisconnect_=_,this.onKill_=v,this.lastSessionId=k,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=aa("c:"+this.id+":"),this.transportManager_=new Kl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const l=e.healthyTimeout||0;l>0&&(this.healthyTimeout_=Fl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>TI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>CI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(l)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vd in e){const t=e[vd];t===qg?this.upgradeIfSecondaryHealthy_():t===$g?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Gg&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=xl("t",e),s=xl("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Yg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:qg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Kg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=xl("t",e),s=xl("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=xl(vd,e);if(Hg in e){const s=e[Hg];if(t===AI){const l={...s};this.repoInfo_.isUsingEmulator&&(l.h=this.repoInfo_.host),this.onHandshake_(l)}else if(t===Kg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let l=0;l<this.pendingDataMessages.length;++l)this.onDataMessage_(this.pendingDataMessages[l]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===kI?this.onConnectionShutdown_(s):t===$g?this.onReset_(s):t===NI?Fd("Server Error: "+s):t===Gg?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Fd("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,l=e.h;this.sessionId=e.s,this.repoInfo_.host=l,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),df!==s&&jt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Fl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(SI))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(II))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Yg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ts.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{put(e,t,s,l){}merge(e,t,s,l){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e){this.allowedEvents_=e,this.listeners_={},K(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let l=0;l<s.length;l++)s[l].callback.apply(s[l].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const l=this.getInitialEvent(e);l&&t.apply(s,l)}off(e,t,s){this.validateEventType_(e);const l=this.listeners_[e]||[];for(let c=0;c<l.length;c++)if(l[c].callback===t&&(!s||s===l[c].context)){l.splice(c,1);return}}validateEventType_(e){K(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Ky{static getInstance(){return new Yu}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!af()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return K(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=32,Xg=768;class Fe{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let l=0;l<this.pieces_.length;l++)this.pieces_[l].length>0&&(this.pieces_[s]=this.pieces_[l],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Re(){return new Fe("")}function _e(r){return r.pieceNum_>=r.pieces_.length?null:r.pieces_[r.pieceNum_]}function Ei(r){return r.pieces_.length-r.pieceNum_}function We(r){let e=r.pieceNum_;return e<r.pieces_.length&&e++,new Fe(r.pieces_,e)}function mf(r){return r.pieceNum_<r.pieces_.length?r.pieces_[r.pieces_.length-1]:null}function PI(r){let e="";for(let t=r.pieceNum_;t<r.pieces_.length;t++)r.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(r.pieces_[t])));return e||"/"}function Yl(r,e=0){return r.pieces_.slice(r.pieceNum_+e)}function Yy(r){if(r.pieceNum_>=r.pieces_.length)return null;const e=[];for(let t=r.pieceNum_;t<r.pieces_.length-1;t++)e.push(r.pieces_[t]);return new Fe(e,0)}function Xe(r,e){const t=[];for(let s=r.pieceNum_;s<r.pieces_.length;s++)t.push(r.pieces_[s]);if(e instanceof Fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let l=0;l<s.length;l++)s[l].length>0&&t.push(s[l])}return new Fe(t,0)}function we(r){return r.pieceNum_>=r.pieces_.length}function Ut(r,e){const t=_e(r),s=_e(e);if(t===null)return e;if(t===s)return Ut(We(r),We(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+r+")")}function xI(r,e){const t=Yl(r,0),s=Yl(e,0);for(let l=0;l<t.length&&l<s.length;l++){const c=_s(t[l],s[l]);if(c!==0)return c}return t.length===s.length?0:t.length<s.length?-1:1}function gf(r,e){if(Ei(r)!==Ei(e))return!1;for(let t=r.pieceNum_,s=e.pieceNum_;t<=r.pieces_.length;t++,s++)if(r.pieces_[t]!==e.pieces_[s])return!1;return!0}function _n(r,e){let t=r.pieceNum_,s=e.pieceNum_;if(Ei(r)>Ei(e))return!1;for(;t<r.pieces_.length;){if(r.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class DI{constructor(e,t){this.errorPrefix_=t,this.parts_=Yl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=_c(this.parts_[s]);Qy(this)}}function OI(r,e){r.parts_.length>0&&(r.byteLength_+=1),r.parts_.push(e),r.byteLength_+=_c(e),Qy(r)}function LI(r){const e=r.parts_.pop();r.byteLength_-=_c(e),r.parts_.length>0&&(r.byteLength_-=1)}function Qy(r){if(r.byteLength_>Xg)throw new Error(r.errorPrefix_+"has a key path longer than "+Xg+" bytes ("+r.byteLength_+").");if(r.parts_.length>Qg)throw new Error(r.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qg+") or object contains a cycle "+Zi(r))}function Zi(r){return r.parts_.length===0?"":"in property '"+r.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f extends Ky{static getInstance(){return new _f}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return K(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=1e3,MI=300*1e3,Jg=30*1e3,bI=1.3,FI=3e4,UI="server_kill",Zg=3;class xr extends qy{constructor(e,t,s,l,c,h,m,_){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=l,this.onServerInfoUpdate_=c,this.authTokenProvider_=h,this.appCheckTokenProvider_=m,this.authOverride_=_,this.id=xr.nextPersistentConnectionId_++,this.log_=aa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dl,this.maxReconnectDelay_=MI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,_)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");_f.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yu.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const l=++this.requestNumber_,c={r:l,a:e,b:t};this.log_(ct(c)),K(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(c),s&&(this.requestCBHash_[l]=s)}get(e){this.initConnection_();const t=new sa,l={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:h=>{const m=h.d;h.s==="ok"?t.resolve(m):t.reject(m)}};this.outstandingGets_.push(l),this.outstandingGetCount_++;const c=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(c),t.promise}listen(e,t,s,l){this.initConnection_();const c=e._queryIdentifier,h=e._path.toString();this.log_("Listen called for "+h+" "+c),this.listens.has(h)||this.listens.set(h,new Map),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),K(!this.listens.get(h).has(c),"listen() called twice for same path/queryId.");const m={onComplete:l,hashFn:t,query:e,tag:s};this.listens.get(h).set(c,m),this.connected_&&this.sendListen_(m)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),l=t._queryIdentifier;this.log_("Listen on "+s+" for "+l);const c={p:s},h="q";e.tag&&(c.q=t._queryObject,c.t=e.tag),c.h=e.hashFn(),this.sendRequest(h,c,m=>{const _=m.d,v=m.s;xr.warnOnListenWarnings_(_,t),(this.listens.get(s)&&this.listens.get(s).get(l))===e&&(this.log_("listen response",m),v!=="ok"&&this.removeListen_(s,l),e.onComplete&&e.onComplete(v,_))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&or(e,"w")){const s=wo(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const l='".indexOn": "'+t._queryParams.getIndex().toString()+'"',c=t._path.toString();jt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${l} at ${c} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||CE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=IE(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,l=>{const c=l.s,h=l.d||"error";this.authToken_===e&&(c==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(c,h))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),l=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+l),K(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,l)&&this.connected_&&this.sendUnlisten_(s,l,e._queryObject,t)}sendUnlisten_(e,t,s,l){this.log_("Unlisten on "+e+" for "+t);const c={p:e},h="n";l&&(c.q=s,c.t=l),this.sendRequest(h,c)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,l){const c={p:t,d:s};this.log_("onDisconnect "+e,c),this.sendRequest(e,c,h=>{l&&setTimeout(()=>{l(h.s,h.d)},Math.floor(0))})}put(e,t,s,l){this.putInternal("p",e,t,s,l)}merge(e,t,s,l){this.putInternal("m",e,t,s,l)}putInternal(e,t,s,l,c){this.initConnection_();const h={p:t,d:s};c!==void 0&&(h.h=c),this.outstandingPuts_.push({action:e,request:h,onComplete:l}),this.outstandingPutCount_++;const m=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(m):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,l=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,c=>{this.log_(t+" response",c),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),l&&l(c.s,c.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const c=s.d;this.log_("reportStats","Error sending stats: "+c)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ct(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Fd("Unrecognized action received from server: "+ct(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){K(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>FI&&(this.reconnectDelay_=Dl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),l=this.id+":"+xr.nextConnectionId_++,c=this.lastSessionId;let h=!1,m=null;const _=function(){m?m.close():(h=!0,s())},v=function(T){K(m,"sendRequest call when we're not connected not allowed."),m.sendRequest(T)};this.realtime_={close:_,sendRequest:v};const k=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[T,I]=await Promise.all([this.authTokenProvider_.getToken(k),this.appCheckTokenProvider_.getToken(k)]);h?Tt("getToken() completed but was canceled"):(Tt("getToken() completed. Creating connection."),this.authToken_=T&&T.accessToken,this.appCheckToken_=I&&I.token,m=new RI(l,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,W=>{jt(W+" ("+this.repoInfo_.toString()+")"),this.interrupt(UI)},c))}catch(T){this.log_("Failed to get token: "+T),h||(this.repoInfo_.nodeAdmin&&jt(T),_())}}}interrupt(e){Tt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Tt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],xd(this.interruptReasons_)&&(this.reconnectDelay_=Dl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(c=>hf(c)).join("$"):s="default";const l=this.removeListen_(e,s);l&&l.onComplete&&l.onComplete("permission_denied")}removeListen_(e,t){const s=new Fe(e).toString();let l;if(this.listens.has(s)){const c=this.listens.get(s);l=c.get(t),c.delete(t),c.size===0&&this.listens.delete(s)}else l=void 0;return l}onAuthRevoked_(e,t){Tt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zg&&(this.reconnectDelay_=Jg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Tt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+ky.replace(/\./g,"-")]=1,af()?e["framework.cordova"]=1:gy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yu.getInstance().currentlyOnline();return xd(this.interruptReasons_)&&e}}xr.nextPersistentConnectionId_=0;xr.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new ye(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new ye(Eo,e),l=new ye(Eo,t);return this.compare(s,l)!==0}minPost(){return ye.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;class Xy extends vc{static get __EMPTY_NODE(){return Ou}static set __EMPTY_NODE(e){Ou=e}compare(e,t){return _s(e.name,t.name)}isDefinedOn(e){throw Ao("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return ye.MIN}maxPost(){return new ye(ls,Ou)}makePost(e,t){return K(typeof e=="string","KeyIndex indexValue must always be a string."),new ye(e,Ou)}toString(){return".key"}}const mo=new Xy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,t,s,l,c=null){this.isReverse_=l,this.resultGenerator_=c,this.nodeStack_=[];let h=1;for(;!e.isEmpty();)if(e=e,h=t?s(e.key,t):1,l&&(h*=-1),h<0)this.isReverse_?e=e.left:e=e.right;else if(h===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class vt{constructor(e,t,s,l,c){this.key=e,this.value=t,this.color=s??vt.RED,this.left=l??Xt.EMPTY_NODE,this.right=c??Xt.EMPTY_NODE}copy(e,t,s,l,c){return new vt(e??this.key,t??this.value,s??this.color,l??this.left,c??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let l=this;const c=s(e,l.key);return c<0?l=l.copy(null,null,null,l.left.insert(e,t,s),null):c===0?l=l.copy(null,t,null,null,null):l=l.copy(null,null,null,null,l.right.insert(e,t,s)),l.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,l;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Xt.EMPTY_NODE;l=s.right.min_(),s=s.copy(l.key,l.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}vt.RED=!0;vt.BLACK=!1;class jI{copy(e,t,s,l,c){return this}insert(e,t,s){return new vt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Xt{constructor(e,t=Xt.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Xt(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,vt.BLACK,null,null))}remove(e){return new Xt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,vt.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,l=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return l?l.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(l=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Lu(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Lu(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Lu(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Lu(this.root_,null,this.comparator_,!0,e)}}Xt.EMPTY_NODE=new jI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(r,e){return _s(r.name,e.name)}function yf(r,e){return _s(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jd;function zI(r){jd=r}const Jy=function(r){return typeof r=="number"?"number:"+Py(r):"string:"+r},Zy=function(r){if(r.isLeafNode()){const e=r.val();K(typeof e=="string"||typeof e=="number"||typeof e=="object"&&or(e,".sv"),"Priority must be a string or number.")}else K(r===jd||r.isEmpty(),"priority of unexpected type.");K(r===jd||r.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_;class yt{static set __childrenNodeConstructor(e){e_=e}static get __childrenNodeConstructor(){return e_}constructor(e,t=yt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,K(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Zy(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new yt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:yt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return we(e)?this:_e(e)===".priority"?this.priorityNode_:yt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:yt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=_e(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(K(s!==".priority"||Ei(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,yt.__childrenNodeConstructor.EMPTY_NODE.updateChild(We(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jy(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Py(this.value_):e+=this.value_,this.lazyHash_=Ay(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===yt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof yt.__childrenNodeConstructor?-1:(K(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,l=yt.VALUE_TYPE_ORDER.indexOf(t),c=yt.VALUE_TYPE_ORDER.indexOf(s);return K(l>=0,"Unknown leaf type: "+t),K(c>=0,"Unknown leaf type: "+s),l===c?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:c-l}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}yt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ev,tv;function BI(r){ev=r}function WI(r){tv=r}class HI extends vc{compare(e,t){const s=e.node.getPriority(),l=t.node.getPriority(),c=s.compareTo(l);return c===0?_s(e.name,t.name):c}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return ye.MIN}maxPost(){return new ye(ls,new yt("[PRIORITY-POST]",tv))}makePost(e,t){const s=ev(e);return new ye(t,new yt("[PRIORITY-POST]",s))}toString(){return".priority"}}const Je=new HI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=Math.log(2);class GI{constructor(e){const t=c=>parseInt(Math.log(c)/$I,10),s=c=>parseInt(Array(c+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const l=s(this.count);this.bits_=e+1&l}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qu=function(r,e,t,s){r.sort(e);const l=function(_,v){const k=v-_;let T,I;if(k===0)return null;if(k===1)return T=r[_],I=t?t(T):T,new vt(I,T.node,vt.BLACK,null,null);{const W=parseInt(k/2,10)+_,z=l(_,W),q=l(W+1,v);return T=r[W],I=t?t(T):T,new vt(I,T.node,vt.BLACK,z,q)}},c=function(_){let v=null,k=null,T=r.length;const I=function(z,q){const Q=T-z,de=T;T-=z;const fe=l(Q+1,de),ve=r[Q],Pe=t?t(ve):ve;W(new vt(Pe,ve.node,q,null,fe))},W=function(z){v?(v.left=z,v=z):(k=z,v=z)};for(let z=0;z<_.count;++z){const q=_.nextBitIsOne(),Q=Math.pow(2,_.count-(z+1));q?I(Q,vt.BLACK):(I(Q,vt.BLACK),I(Q,vt.RED))}return k},h=new GI(r.length),m=c(h);return new Xt(s||e,m)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;const co={};class Ar{static get Default(){return K(co&&Je,"ChildrenNode.ts has not been loaded"),wd=wd||new Ar({".priority":co},{".priority":Je}),wd}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=wo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Xt?t:null}hasIndex(e){return or(this.indexSet_,e.toString())}addIndex(e,t){K(e!==mo,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let l=!1;const c=t.getIterator(ye.Wrap);let h=c.getNext();for(;h;)l=l||e.isDefinedOn(h.node),s.push(h),h=c.getNext();let m;l?m=Qu(s,e.getCompare()):m=co;const _=e.toString(),v={...this.indexSet_};v[_]=e;const k={...this.indexes_};return k[_]=m,new Ar(k,v)}addToIndexes(e,t){const s=Gu(this.indexes_,(l,c)=>{const h=wo(this.indexSet_,c);if(K(h,"Missing index implementation for "+c),l===co)if(h.isDefinedOn(e.node)){const m=[],_=t.getIterator(ye.Wrap);let v=_.getNext();for(;v;)v.name!==e.name&&m.push(v),v=_.getNext();return m.push(e),Qu(m,h.getCompare())}else return co;else{const m=t.get(e.name);let _=l;return m&&(_=_.remove(new ye(e.name,m))),_.insert(e,e.node)}});return new Ar(s,this.indexSet_)}removeFromIndexes(e,t){const s=Gu(this.indexes_,l=>{if(l===co)return l;{const c=t.get(e.name);return c?l.remove(new ye(e.name,c)):l}});return new Ar(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ol;class ue{static get EMPTY_NODE(){return Ol||(Ol=new ue(new Xt(yf),null,Ar.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Zy(this.priorityNode_),this.children_.isEmpty()&&K(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ol}updatePriority(e){return this.children_.isEmpty()?this:new ue(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ol:t}}getChild(e){const t=_e(e);return t===null?this:this.getImmediateChild(t).getChild(We(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(K(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new ye(e,t);let l,c;t.isEmpty()?(l=this.children_.remove(e),c=this.indexMap_.removeFromIndexes(s,this.children_)):(l=this.children_.insert(e,t),c=this.indexMap_.addToIndexes(s,this.children_));const h=l.isEmpty()?Ol:this.priorityNode_;return new ue(l,h,c)}}updateChild(e,t){const s=_e(e);if(s===null)return t;{K(_e(e)!==".priority"||Ei(e)===1,".priority must be the last token in a path");const l=this.getImmediateChild(s).updateChild(We(e),t);return this.updateImmediateChild(s,l)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,l=0,c=!0;if(this.forEachChild(Je,(h,m)=>{t[h]=m.val(e),s++,c&&ue.INTEGER_REGEXP_.test(h)?l=Math.max(l,Number(h)):c=!1}),!e&&c&&l<2*s){const h=[];for(const m in t)h[m]=t[m];return h}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jy(this.getPriority().val())+":"),this.forEachChild(Je,(t,s)=>{const l=s.hash();l!==""&&(e+=":"+t+":"+l)}),this.lazyHash_=e===""?"":Ay(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const l=this.resolveIndex_(s);if(l){const c=l.getPredecessorKey(new ye(e,t));return c?c.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new ye(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new ye(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(l=>t(l.name,l.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,l=>l);{const l=this.children_.getIteratorFrom(e.name,ye.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)<0;)l.getNext(),c=l.peek();return l}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,l=>l);{const l=this.children_.getReverseIteratorFrom(e.name,ye.Wrap);let c=l.peek();for(;c!=null&&t.compare(c,e)>0;)l.getNext(),c=l.peek();return l}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ua?-1:0}withIndex(e){if(e===mo||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ue(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===mo||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(Je),l=t.getIterator(Je);let c=s.getNext(),h=l.getNext();for(;c&&h;){if(c.name!==h.name||!c.node.equals(h.node))return!1;c=s.getNext(),h=l.getNext()}return c===null&&h===null}else return!1;else return!1}}resolveIndex_(e){return e===mo?null:this.indexMap_.get(e.toString())}}ue.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class qI extends ue{constructor(){super(new Xt(yf),ue.EMPTY_NODE,Ar.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ue.EMPTY_NODE}isEmpty(){return!1}}const ua=new qI;Object.defineProperties(ye,{MIN:{value:new ye(Eo,ue.EMPTY_NODE)},MAX:{value:new ye(ls,ua)}});Xy.__EMPTY_NODE=ue.EMPTY_NODE;yt.__childrenNodeConstructor=ue;zI(ua);WI(ua);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=!0;function ut(r,e=null){if(r===null)return ue.EMPTY_NODE;if(typeof r=="object"&&".priority"in r&&(e=r[".priority"]),K(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof r=="object"&&".value"in r&&r[".value"]!==null&&(r=r[".value"]),typeof r!="object"||".sv"in r){const t=r;return new yt(t,ut(e))}if(!(r instanceof Array)&&KI){const t=[];let s=!1;if(kt(r,(h,m)=>{if(h.substring(0,1)!=="."){const _=ut(m);_.isEmpty()||(s=s||!_.getPriority().isEmpty(),t.push(new ye(h,_)))}}),t.length===0)return ue.EMPTY_NODE;const c=Qu(t,VI,h=>h.name,yf);if(s){const h=Qu(t,Je.getCompare());return new ue(c,ut(e),new Ar({".priority":h},{".priority":Je}))}else return new ue(c,ut(e),Ar.Default)}else{let t=ue.EMPTY_NODE;return kt(r,(s,l)=>{if(or(r,s)&&s.substring(0,1)!=="."){const c=ut(l);(c.isLeafNode()||!c.isEmpty())&&(t=t.updateImmediateChild(s,c))}}),t.updatePriority(ut(e))}}BI(ut);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends vc{constructor(e){super(),this.indexPath_=e,K(!we(e)&&_e(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),l=this.extractChild(t.node),c=s.compareTo(l);return c===0?_s(e.name,t.name):c}makePost(e,t){const s=ut(e),l=ue.EMPTY_NODE.updateChild(this.indexPath_,s);return new ye(t,l)}maxPost(){const e=ue.EMPTY_NODE.updateChild(this.indexPath_,ua);return new ye(ls,e)}toString(){return Yl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI extends vc{compare(e,t){const s=e.node.compareTo(t.node);return s===0?_s(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return ye.MIN}maxPost(){return ye.MAX}makePost(e,t){const s=ut(e);return new ye(t,s)}toString(){return".value"}}const XI=new QI;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(r){return{type:"value",snapshotNode:r}}function So(r,e){return{type:"child_added",snapshotNode:e,childName:r}}function Ql(r,e){return{type:"child_removed",snapshotNode:e,childName:r}}function Xl(r,e,t){return{type:"child_changed",snapshotNode:e,childName:r,oldSnap:t}}function JI(r,e){return{type:"child_moved",snapshotNode:e,childName:r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.index_=e}updateChild(e,t,s,l,c,h){K(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const m=e.getImmediateChild(t);return m.getChild(l).equals(s.getChild(l))&&m.isEmpty()===s.isEmpty()||(h!=null&&(s.isEmpty()?e.hasChild(t)?h.trackChildChange(Ql(t,m)):K(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):m.isEmpty()?h.trackChildChange(So(t,s)):h.trackChildChange(Xl(t,s,m))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Je,(l,c)=>{t.hasChild(l)||s.trackChildChange(Ql(l,c))}),t.isLeafNode()||t.forEachChild(Je,(l,c)=>{if(e.hasChild(l)){const h=e.getImmediateChild(l);h.equals(c)||s.trackChildChange(Xl(l,c,h))}else s.trackChildChange(So(l,c))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ue.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e){this.indexedFilter_=new vf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jl.getStartPost_(e),this.endPost_=Jl.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,l,c,h){return this.matches(new ye(t,s))||(s=ue.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,l,c,h)}updateFullNode(e,t,s){t.isLeafNode()&&(t=ue.EMPTY_NODE);let l=t.withIndex(this.index_);l=l.updatePriority(ue.EMPTY_NODE);const c=this;return t.forEachChild(Je,(h,m)=>{c.matches(new ye(h,m))||(l=l.updateImmediateChild(h,ue.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Jl(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,l,c,h){return this.rangedFilter_.matches(new ye(t,s))||(s=ue.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,l,c,h):this.fullLimitUpdateChild_(e,t,s,c,h)}updateFullNode(e,t,s){let l;if(t.isLeafNode()||t.isEmpty())l=ue.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){l=ue.EMPTY_NODE.withIndex(this.index_);let c;this.reverse_?c=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):c=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let h=0;for(;c.hasNext()&&h<this.limit_;){const m=c.getNext();if(this.withinDirectionalStart(m))if(this.withinDirectionalEnd(m))l=l.updateImmediateChild(m.name,m.node),h++;else break;else continue}}else{l=t.withIndex(this.index_),l=l.updatePriority(ue.EMPTY_NODE);let c;this.reverse_?c=l.getReverseIterator(this.index_):c=l.getIterator(this.index_);let h=0;for(;c.hasNext();){const m=c.getNext();h<this.limit_&&this.withinDirectionalStart(m)&&this.withinDirectionalEnd(m)?h++:l=l.updateImmediateChild(m.name,ue.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,l,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,l,c){let h;if(this.reverse_){const T=this.index_.getCompare();h=(I,W)=>T(W,I)}else h=this.index_.getCompare();const m=e;K(m.numChildren()===this.limit_,"");const _=new ye(t,s),v=this.reverse_?m.getFirstChild(this.index_):m.getLastChild(this.index_),k=this.rangedFilter_.matches(_);if(m.hasChild(t)){const T=m.getImmediateChild(t);let I=l.getChildAfterChild(this.index_,v,this.reverse_);for(;I!=null&&(I.name===t||m.hasChild(I.name));)I=l.getChildAfterChild(this.index_,I,this.reverse_);const W=I==null?1:h(I,_);if(k&&!s.isEmpty()&&W>=0)return c?.trackChildChange(Xl(t,s,T)),m.updateImmediateChild(t,s);{c?.trackChildChange(Ql(t,T));const q=m.updateImmediateChild(t,ue.EMPTY_NODE);return I!=null&&this.rangedFilter_.matches(I)?(c?.trackChildChange(So(I.name,I.node)),q.updateImmediateChild(I.name,I.node)):q}}else return s.isEmpty()?e:k&&h(v,_)>=0?(c!=null&&(c.trackChildChange(Ql(v.name,v.node)),c.trackChildChange(So(t,s))),m.updateImmediateChild(t,s).updateImmediateChild(v.name,ue.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Je}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return K(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return K(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Eo}hasEnd(){return this.endSet_}getIndexEndValue(){return K(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return K(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ls}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return K(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Je}copy(){const e=new wf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function eC(r){return r.loadsAllData()?new vf(r.getIndex()):r.hasLimit()?new ZI(r):new Jl(r)}function t_(r){const e={};if(r.isDefault())return e;let t;if(r.index_===Je?t="$priority":r.index_===XI?t="$value":r.index_===mo?t="$key":(K(r.index_ instanceof YI,"Unrecognized index type!"),t=r.index_.toString()),e.orderBy=ct(t),r.startSet_){const s=r.startAfterSet_?"startAfter":"startAt";e[s]=ct(r.indexStartValue_),r.startNameSet_&&(e[s]+=","+ct(r.indexStartName_))}if(r.endSet_){const s=r.endBeforeSet_?"endBefore":"endAt";e[s]=ct(r.indexEndValue_),r.endNameSet_&&(e[s]+=","+ct(r.indexEndName_))}return r.limitSet_&&(r.isViewFromLeft()?e.limitToFirst=r.limit_:e.limitToLast=r.limit_),e}function n_(r){const e={};if(r.startSet_&&(e.sp=r.indexStartValue_,r.startNameSet_&&(e.sn=r.indexStartName_),e.sin=!r.startAfterSet_),r.endSet_&&(e.ep=r.indexEndValue_,r.endNameSet_&&(e.en=r.indexEndName_),e.ein=!r.endBeforeSet_),r.limitSet_){e.l=r.limit_;let t=r.viewFrom_;t===""&&(r.isViewFromLeft()?t="l":t="r"),e.vf=t}return r.index_!==Je&&(e.i=r.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends qy{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(K(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,l){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=l,this.log_=aa("p:rest:"),this.listens_={}}listen(e,t,s,l){const c=e._path.toString();this.log_("Listen called for "+c+" "+e._queryIdentifier);const h=Xu.getListenId_(e,s),m={};this.listens_[h]=m;const _=t_(e._queryParams);this.restRequest_(c+".json",_,(v,k)=>{let T=k;if(v===404&&(T=null,v=null),v===null&&this.onDataUpdate_(c,T,!1,s),wo(this.listens_,h)===m){let I;v?v===401?I="permission_denied":I="rest_error:"+v:I="ok",l(I,null)}})}unlisten(e,t){const s=Xu.getListenId_(e,t);delete this.listens_[s]}get(e){const t=t_(e._queryParams),s=e._path.toString(),l=new sa;return this.restRequest_(s+".json",t,(c,h)=>{let m=h;c===404&&(m=null,c=null),c===null?(this.onDataUpdate_(s,m,!1,null),l.resolve(m)):l.reject(new Error(m))}),l.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([l,c])=>{l&&l.accessToken&&(t.auth=l.accessToken),c&&c.token&&(t.ac=c.token);const h=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ro(t);this.log_("Sending REST request for "+h);const m=new XMLHttpRequest;m.onreadystatechange=()=>{if(s&&m.readyState===4){this.log_("REST Response for "+h+" received. status:",m.status,"response:",m.responseText);let _=null;if(m.status>=200&&m.status<300){try{_=Gl(m.responseText)}catch{jt("Failed to parse JSON response for "+h+": "+m.responseText)}s(null,_)}else m.status!==401&&m.status!==404&&jt("Got unsuccessful REST response for "+h+" Status: "+m.status),s(m.status);s=null}},m.open("GET",h,!0),m.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tC{constructor(){this.rootNode_=ue.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){return{value:null,children:new Map}}function rv(r,e,t){if(we(e))r.value=t,r.children.clear();else if(r.value!==null)r.value=r.value.updateChild(e,t);else{const s=_e(e);r.children.has(s)||r.children.set(s,Ju());const l=r.children.get(s);e=We(e),rv(l,e,t)}}function Vd(r,e,t){r.value!==null?t(e,r.value):nC(r,(s,l)=>{const c=new Fe(e.toString()+"/"+s);Vd(l,c,t)})}function nC(r,e){r.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&kt(this.last_,(s,l)=>{t[s]=t[s]-l}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=10*1e3,iC=30*1e3,sC=300*1e3;class oC{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new rC(e);const s=r_+(iC-r_)*Math.random();Fl(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;kt(e,(l,c)=>{c>0&&or(this.statsToReport_,l)&&(t[l]=c,s=!0)}),s&&this.server_.reportStats(t),Fl(this.reportStats_.bind(this),Math.floor(Math.random()*2*sC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un;(function(r){r[r.OVERWRITE=0]="OVERWRITE",r[r.MERGE=1]="MERGE",r[r.ACK_USER_WRITE=2]="ACK_USER_WRITE",r[r.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Un||(Un={}));function Ef(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function If(r){return{fromUser:!1,fromServer:!0,queryId:r,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=Un.ACK_USER_WRITE,this.source=Ef()}operationForChild(e){if(we(this.path)){if(this.affectedTree.value!=null)return K(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Fe(e));return new Zu(Re(),t,this.revert)}}else return K(_e(this.path)===e,"operationForChild called for unrelated child."),new Zu(We(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,t){this.source=e,this.path=t,this.type=Un.LISTEN_COMPLETE}operationForChild(e){return we(this.path)?new Zl(this.source,Re()):new Zl(this.source,We(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=Un.OVERWRITE}operationForChild(e){return we(this.path)?new as(this.source,Re(),this.snap.getImmediateChild(e)):new as(this.source,We(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=Un.MERGE}operationForChild(e){if(we(this.path)){const t=this.children.subtree(new Fe(e));return t.isEmpty()?null:t.value?new as(this.source,Re(),t.value):new Io(this.source,Re(),t)}else return K(_e(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Io(this.source,We(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(we(e))return this.isFullyInitialized()&&!this.filtered_;const t=_e(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function aC(r,e,t,s){const l=[],c=[];return e.forEach(h=>{h.type==="child_changed"&&r.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)&&c.push(JI(h.childName,h.snapshotNode))}),Ll(r,l,"child_removed",e,s,t),Ll(r,l,"child_added",e,s,t),Ll(r,l,"child_moved",c,s,t),Ll(r,l,"child_changed",e,s,t),Ll(r,l,"value",e,s,t),l}function Ll(r,e,t,s,l,c){const h=s.filter(m=>m.type===t);h.sort((m,_)=>cC(r,m,_)),h.forEach(m=>{const _=uC(r,m,c);l.forEach(v=>{v.respondsTo(m.type)&&e.push(v.createEvent(_,r.query_))})})}function uC(r,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,r.index_)),e}function cC(r,e,t){if(e.childName==null||t.childName==null)throw Ao("Should only compare child_ events.");const s=new ye(e.childName,e.snapshotNode),l=new ye(t.childName,t.snapshotNode);return r.index_.compare(s,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(r,e){return{eventCache:r,serverCache:e}}function Ul(r,e,t,s){return wc(new Si(e,t,s),r.serverCache)}function iv(r,e,t,s){return wc(r.eventCache,new Si(e,t,s))}function ec(r){return r.eventCache.isFullyInitialized()?r.eventCache.getNode():null}function us(r){return r.serverCache.isFullyInitialized()?r.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ed;const hC=()=>(Ed||(Ed=new Xt(YS)),Ed);class Be{static fromObject(e){let t=new Be(null);return kt(e,(s,l)=>{t=t.set(new Fe(s),l)}),t}constructor(e,t=hC()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Re(),value:this.value};if(we(e))return null;{const s=_e(e),l=this.children.get(s);if(l!==null){const c=l.findRootMostMatchingPathAndValue(We(e),t);return c!=null?{path:Xe(new Fe(s),c.path),value:c.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(we(e))return this;{const t=_e(e),s=this.children.get(t);return s!==null?s.subtree(We(e)):new Be(null)}}set(e,t){if(we(e))return new Be(t,this.children);{const s=_e(e),c=(this.children.get(s)||new Be(null)).set(We(e),t),h=this.children.insert(s,c);return new Be(this.value,h)}}remove(e){if(we(e))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const t=_e(e),s=this.children.get(t);if(s){const l=s.remove(We(e));let c;return l.isEmpty()?c=this.children.remove(t):c=this.children.insert(t,l),this.value===null&&c.isEmpty()?new Be(null):new Be(this.value,c)}else return this}}get(e){if(we(e))return this.value;{const t=_e(e),s=this.children.get(t);return s?s.get(We(e)):null}}setTree(e,t){if(we(e))return t;{const s=_e(e),c=(this.children.get(s)||new Be(null)).setTree(We(e),t);let h;return c.isEmpty()?h=this.children.remove(s):h=this.children.insert(s,c),new Be(this.value,h)}}fold(e){return this.fold_(Re(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((l,c)=>{s[l]=c.fold_(Xe(e,l),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,Re(),t)}findOnPath_(e,t,s){const l=this.value?s(t,this.value):!1;if(l)return l;if(we(e))return null;{const c=_e(e),h=this.children.get(c);return h?h.findOnPath_(We(e),Xe(t,c),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Re(),t)}foreachOnPath_(e,t,s){if(we(e))return this;{this.value&&s(t,this.value);const l=_e(e),c=this.children.get(l);return c?c.foreachOnPath_(We(e),Xe(t,l),s):new Be(null)}}foreach(e){this.foreach_(Re(),e)}foreach_(e,t){this.children.inorderTraversal((s,l)=>{l.foreach_(Xe(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.writeTree_=e}static empty(){return new Bn(new Be(null))}}function jl(r,e,t){if(we(e))return new Bn(new Be(t));{const s=r.writeTree_.findRootMostValueAndPath(e);if(s!=null){const l=s.path;let c=s.value;const h=Ut(l,e);return c=c.updateChild(h,t),new Bn(r.writeTree_.set(l,c))}else{const l=new Be(t),c=r.writeTree_.setTree(e,l);return new Bn(c)}}}function zd(r,e,t){let s=r;return kt(t,(l,c)=>{s=jl(s,Xe(e,l),c)}),s}function i_(r,e){if(we(e))return Bn.empty();{const t=r.writeTree_.setTree(e,new Be(null));return new Bn(t)}}function Bd(r,e){return ys(r,e)!=null}function ys(r,e){const t=r.writeTree_.findRootMostValueAndPath(e);return t!=null?r.writeTree_.get(t.path).getChild(Ut(t.path,e)):null}function s_(r){const e=[],t=r.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Je,(s,l)=>{e.push(new ye(s,l))}):r.writeTree_.children.inorderTraversal((s,l)=>{l.value!=null&&e.push(new ye(s,l.value))}),e}function vi(r,e){if(we(e))return r;{const t=ys(r,e);return t!=null?new Bn(new Be(t)):new Bn(r.writeTree_.subtree(e))}}function Wd(r){return r.writeTree_.isEmpty()}function Co(r,e){return sv(Re(),r.writeTree_,e)}function sv(r,e,t){if(e.value!=null)return t.updateChild(r,e.value);{let s=null;return e.children.inorderTraversal((l,c)=>{l===".priority"?(K(c.value!==null,"Priority writes must always be leaf nodes"),s=c.value):t=sv(Xe(r,l),c,t)}),!t.getChild(r).isEmpty()&&s!==null&&(t=t.updateChild(Xe(r,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(r,e){return uv(e,r)}function dC(r,e,t,s,l){K(s>r.lastWriteId,"Stacking an older write on top of newer ones"),l===void 0&&(l=!0),r.allWrites.push({path:e,snap:t,writeId:s,visible:l}),l&&(r.visibleWrites=jl(r.visibleWrites,e,t)),r.lastWriteId=s}function fC(r,e,t,s){K(s>r.lastWriteId,"Stacking an older merge on top of newer ones"),r.allWrites.push({path:e,children:t,writeId:s,visible:!0}),r.visibleWrites=zd(r.visibleWrites,e,t),r.lastWriteId=s}function pC(r,e){for(let t=0;t<r.allWrites.length;t++){const s=r.allWrites[t];if(s.writeId===e)return s}return null}function mC(r,e){const t=r.allWrites.findIndex(m=>m.writeId===e);K(t>=0,"removeWrite called with nonexistent writeId.");const s=r.allWrites[t];r.allWrites.splice(t,1);let l=s.visible,c=!1,h=r.allWrites.length-1;for(;l&&h>=0;){const m=r.allWrites[h];m.visible&&(h>=t&&gC(m,s.path)?l=!1:_n(s.path,m.path)&&(c=!0)),h--}if(l){if(c)return _C(r),!0;if(s.snap)r.visibleWrites=i_(r.visibleWrites,s.path);else{const m=s.children;kt(m,_=>{r.visibleWrites=i_(r.visibleWrites,Xe(s.path,_))})}return!0}else return!1}function gC(r,e){if(r.snap)return _n(r.path,e);for(const t in r.children)if(r.children.hasOwnProperty(t)&&_n(Xe(r.path,t),e))return!0;return!1}function _C(r){r.visibleWrites=ov(r.allWrites,yC,Re()),r.allWrites.length>0?r.lastWriteId=r.allWrites[r.allWrites.length-1].writeId:r.lastWriteId=-1}function yC(r){return r.visible}function ov(r,e,t){let s=Bn.empty();for(let l=0;l<r.length;++l){const c=r[l];if(e(c)){const h=c.path;let m;if(c.snap)_n(t,h)?(m=Ut(t,h),s=jl(s,m,c.snap)):_n(h,t)&&(m=Ut(h,t),s=jl(s,Re(),c.snap.getChild(m)));else if(c.children){if(_n(t,h))m=Ut(t,h),s=zd(s,m,c.children);else if(_n(h,t))if(m=Ut(h,t),we(m))s=zd(s,Re(),c.children);else{const _=wo(c.children,_e(m));if(_){const v=_.getChild(We(m));s=jl(s,Re(),v)}}}else throw Ao("WriteRecord should have .snap or .children")}}return s}function lv(r,e,t,s,l){if(!s&&!l){const c=ys(r.visibleWrites,e);if(c!=null)return c;{const h=vi(r.visibleWrites,e);if(Wd(h))return t;if(t==null&&!Bd(h,Re()))return null;{const m=t||ue.EMPTY_NODE;return Co(h,m)}}}else{const c=vi(r.visibleWrites,e);if(!l&&Wd(c))return t;if(!l&&t==null&&!Bd(c,Re()))return null;{const h=function(v){return(v.visible||l)&&(!s||!~s.indexOf(v.writeId))&&(_n(v.path,e)||_n(e,v.path))},m=ov(r.allWrites,h,e),_=t||ue.EMPTY_NODE;return Co(m,_)}}}function vC(r,e,t){let s=ue.EMPTY_NODE;const l=ys(r.visibleWrites,e);if(l)return l.isLeafNode()||l.forEachChild(Je,(c,h)=>{s=s.updateImmediateChild(c,h)}),s;if(t){const c=vi(r.visibleWrites,e);return t.forEachChild(Je,(h,m)=>{const _=Co(vi(c,new Fe(h)),m);s=s.updateImmediateChild(h,_)}),s_(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}else{const c=vi(r.visibleWrites,e);return s_(c).forEach(h=>{s=s.updateImmediateChild(h.name,h.node)}),s}}function wC(r,e,t,s,l){K(s||l,"Either existingEventSnap or existingServerSnap must exist");const c=Xe(e,t);if(Bd(r.visibleWrites,c))return null;{const h=vi(r.visibleWrites,c);return Wd(h)?l.getChild(t):Co(h,l.getChild(t))}}function EC(r,e,t,s){const l=Xe(e,t),c=ys(r.visibleWrites,l);if(c!=null)return c;if(s.isCompleteForChild(t)){const h=vi(r.visibleWrites,l);return Co(h,s.getNode().getImmediateChild(t))}else return null}function SC(r,e){return ys(r.visibleWrites,e)}function IC(r,e,t,s,l,c,h){let m;const _=vi(r.visibleWrites,e),v=ys(_,Re());if(v!=null)m=v;else if(t!=null)m=Co(_,t);else return[];if(m=m.withIndex(h),!m.isEmpty()&&!m.isLeafNode()){const k=[],T=h.getCompare(),I=c?m.getReverseIteratorFrom(s,h):m.getIteratorFrom(s,h);let W=I.getNext();for(;W&&k.length<l;)T(W,s)!==0&&k.push(W),W=I.getNext();return k}else return[]}function CC(){return{visibleWrites:Bn.empty(),allWrites:[],lastWriteId:-1}}function tc(r,e,t,s){return lv(r.writeTree,r.treePath,e,t,s)}function Cf(r,e){return vC(r.writeTree,r.treePath,e)}function o_(r,e,t,s){return wC(r.writeTree,r.treePath,e,t,s)}function nc(r,e){return SC(r.writeTree,Xe(r.treePath,e))}function TC(r,e,t,s,l,c){return IC(r.writeTree,r.treePath,e,t,s,l,c)}function Tf(r,e,t){return EC(r.writeTree,r.treePath,e,t)}function av(r,e){return uv(Xe(r.treePath,e),r.writeTree)}function uv(r,e){return{treePath:r,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kC{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;K(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),K(s!==".priority","Only non-priority child changes can be tracked.");const l=this.changeMap.get(s);if(l){const c=l.type;if(t==="child_added"&&c==="child_removed")this.changeMap.set(s,Xl(s,e.snapshotNode,l.snapshotNode));else if(t==="child_removed"&&c==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&c==="child_changed")this.changeMap.set(s,Ql(s,l.oldSnap));else if(t==="child_changed"&&c==="child_added")this.changeMap.set(s,So(s,e.snapshotNode));else if(t==="child_changed"&&c==="child_changed")this.changeMap.set(s,Xl(s,e.snapshotNode,l.oldSnap));else throw Ao("Illegal combination of changes: "+e+" occurred after "+l)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const cv=new NC;class kf{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Si(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Tf(this.writes_,e,s)}}getChildAfterChild(e,t,s){const l=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:us(this.viewCache_),c=TC(this.writes_,l,t,1,s,e);return c.length===0?null:c[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(r){return{filter:r}}function RC(r,e){K(e.eventCache.getNode().isIndexed(r.filter.getIndex()),"Event snap not indexed"),K(e.serverCache.getNode().isIndexed(r.filter.getIndex()),"Server snap not indexed")}function PC(r,e,t,s,l){const c=new kC;let h,m;if(t.type===Un.OVERWRITE){const v=t;v.source.fromUser?h=Hd(r,e,v.path,v.snap,s,l,c):(K(v.source.fromServer,"Unknown source."),m=v.source.tagged||e.serverCache.isFiltered()&&!we(v.path),h=rc(r,e,v.path,v.snap,s,l,m,c))}else if(t.type===Un.MERGE){const v=t;v.source.fromUser?h=DC(r,e,v.path,v.children,s,l,c):(K(v.source.fromServer,"Unknown source."),m=v.source.tagged||e.serverCache.isFiltered(),h=$d(r,e,v.path,v.children,s,l,m,c))}else if(t.type===Un.ACK_USER_WRITE){const v=t;v.revert?h=MC(r,e,v.path,s,l,c):h=OC(r,e,v.path,v.affectedTree,s,l,c)}else if(t.type===Un.LISTEN_COMPLETE)h=LC(r,e,t.path,s,c);else throw Ao("Unknown operation type: "+t.type);const _=c.getChanges();return xC(e,h,_),{viewCache:h,changes:_}}function xC(r,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const l=s.getNode().isLeafNode()||s.getNode().isEmpty(),c=ec(r);(t.length>0||!r.eventCache.isFullyInitialized()||l&&!s.getNode().equals(c)||!s.getNode().getPriority().equals(c.getPriority()))&&t.push(nv(ec(e)))}}function hv(r,e,t,s,l,c){const h=e.eventCache;if(nc(s,t)!=null)return e;{let m,_;if(we(t))if(K(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const v=us(e),k=v instanceof ue?v:ue.EMPTY_NODE,T=Cf(s,k);m=r.filter.updateFullNode(e.eventCache.getNode(),T,c)}else{const v=tc(s,us(e));m=r.filter.updateFullNode(e.eventCache.getNode(),v,c)}else{const v=_e(t);if(v===".priority"){K(Ei(t)===1,"Can't have a priority with additional path components");const k=h.getNode();_=e.serverCache.getNode();const T=o_(s,t,k,_);T!=null?m=r.filter.updatePriority(k,T):m=h.getNode()}else{const k=We(t);let T;if(h.isCompleteForChild(v)){_=e.serverCache.getNode();const I=o_(s,t,h.getNode(),_);I!=null?T=h.getNode().getImmediateChild(v).updateChild(k,I):T=h.getNode().getImmediateChild(v)}else T=Tf(s,v,e.serverCache);T!=null?m=r.filter.updateChild(h.getNode(),v,T,k,l,c):m=h.getNode()}}return Ul(e,m,h.isFullyInitialized()||we(t),r.filter.filtersNodes())}}function rc(r,e,t,s,l,c,h,m){const _=e.serverCache;let v;const k=h?r.filter:r.filter.getIndexedFilter();if(we(t))v=k.updateFullNode(_.getNode(),s,null);else if(k.filtersNodes()&&!_.isFiltered()){const W=_.getNode().updateChild(t,s);v=k.updateFullNode(_.getNode(),W,null)}else{const W=_e(t);if(!_.isCompleteForPath(t)&&Ei(t)>1)return e;const z=We(t),Q=_.getNode().getImmediateChild(W).updateChild(z,s);W===".priority"?v=k.updatePriority(_.getNode(),Q):v=k.updateChild(_.getNode(),W,Q,z,cv,null)}const T=iv(e,v,_.isFullyInitialized()||we(t),k.filtersNodes()),I=new kf(l,T,c);return hv(r,T,t,l,I,m)}function Hd(r,e,t,s,l,c,h){const m=e.eventCache;let _,v;const k=new kf(l,e,c);if(we(t))v=r.filter.updateFullNode(e.eventCache.getNode(),s,h),_=Ul(e,v,!0,r.filter.filtersNodes());else{const T=_e(t);if(T===".priority")v=r.filter.updatePriority(e.eventCache.getNode(),s),_=Ul(e,v,m.isFullyInitialized(),m.isFiltered());else{const I=We(t),W=m.getNode().getImmediateChild(T);let z;if(we(I))z=s;else{const q=k.getCompleteChild(T);q!=null?mf(I)===".priority"&&q.getChild(Yy(I)).isEmpty()?z=q:z=q.updateChild(I,s):z=ue.EMPTY_NODE}if(W.equals(z))_=e;else{const q=r.filter.updateChild(m.getNode(),T,z,I,k,h);_=Ul(e,q,m.isFullyInitialized(),r.filter.filtersNodes())}}}return _}function l_(r,e){return r.eventCache.isCompleteForChild(e)}function DC(r,e,t,s,l,c,h){let m=e;return s.foreach((_,v)=>{const k=Xe(t,_);l_(e,_e(k))&&(m=Hd(r,m,k,v,l,c,h))}),s.foreach((_,v)=>{const k=Xe(t,_);l_(e,_e(k))||(m=Hd(r,m,k,v,l,c,h))}),m}function a_(r,e,t){return t.foreach((s,l)=>{e=e.updateChild(s,l)}),e}function $d(r,e,t,s,l,c,h,m){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let _=e,v;we(t)?v=s:v=new Be(null).setTree(t,s);const k=e.serverCache.getNode();return v.children.inorderTraversal((T,I)=>{if(k.hasChild(T)){const W=e.serverCache.getNode().getImmediateChild(T),z=a_(r,W,I);_=rc(r,_,new Fe(T),z,l,c,h,m)}}),v.children.inorderTraversal((T,I)=>{const W=!e.serverCache.isCompleteForChild(T)&&I.value===null;if(!k.hasChild(T)&&!W){const z=e.serverCache.getNode().getImmediateChild(T),q=a_(r,z,I);_=rc(r,_,new Fe(T),q,l,c,h,m)}}),_}function OC(r,e,t,s,l,c,h){if(nc(l,t)!=null)return e;const m=e.serverCache.isFiltered(),_=e.serverCache;if(s.value!=null){if(we(t)&&_.isFullyInitialized()||_.isCompleteForPath(t))return rc(r,e,t,_.getNode().getChild(t),l,c,m,h);if(we(t)){let v=new Be(null);return _.getNode().forEachChild(mo,(k,T)=>{v=v.set(new Fe(k),T)}),$d(r,e,t,v,l,c,m,h)}else return e}else{let v=new Be(null);return s.foreach((k,T)=>{const I=Xe(t,k);_.isCompleteForPath(I)&&(v=v.set(k,_.getNode().getChild(I)))}),$d(r,e,t,v,l,c,m,h)}}function LC(r,e,t,s,l){const c=e.serverCache,h=iv(e,c.getNode(),c.isFullyInitialized()||we(t),c.isFiltered());return hv(r,h,t,s,cv,l)}function MC(r,e,t,s,l,c){let h;if(nc(s,t)!=null)return e;{const m=new kf(s,e,l),_=e.eventCache.getNode();let v;if(we(t)||_e(t)===".priority"){let k;if(e.serverCache.isFullyInitialized())k=tc(s,us(e));else{const T=e.serverCache.getNode();K(T instanceof ue,"serverChildren would be complete if leaf node"),k=Cf(s,T)}k=k,v=r.filter.updateFullNode(_,k,c)}else{const k=_e(t);let T=Tf(s,k,e.serverCache);T==null&&e.serverCache.isCompleteForChild(k)&&(T=_.getImmediateChild(k)),T!=null?v=r.filter.updateChild(_,k,T,We(t),m,c):e.eventCache.getNode().hasChild(k)?v=r.filter.updateChild(_,k,ue.EMPTY_NODE,We(t),m,c):v=_,v.isEmpty()&&e.serverCache.isFullyInitialized()&&(h=tc(s,us(e)),h.isLeafNode()&&(v=r.filter.updateFullNode(v,h,c)))}return h=e.serverCache.isFullyInitialized()||nc(s,Re())!=null,Ul(e,v,h,r.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,l=new vf(s.getIndex()),c=eC(s);this.processor_=AC(c);const h=t.serverCache,m=t.eventCache,_=l.updateFullNode(ue.EMPTY_NODE,h.getNode(),null),v=c.updateFullNode(ue.EMPTY_NODE,m.getNode(),null),k=new Si(_,h.isFullyInitialized(),l.filtersNodes()),T=new Si(v,m.isFullyInitialized(),c.filtersNodes());this.viewCache_=wc(T,k),this.eventGenerator_=new lC(this.query_)}get query(){return this.query_}}function FC(r){return r.viewCache_.serverCache.getNode()}function UC(r){return ec(r.viewCache_)}function jC(r,e){const t=us(r.viewCache_);return t&&(r.query._queryParams.loadsAllData()||!we(e)&&!t.getImmediateChild(_e(e)).isEmpty())?t.getChild(e):null}function u_(r){return r.eventRegistrations_.length===0}function VC(r,e){r.eventRegistrations_.push(e)}function c_(r,e,t){const s=[];if(t){K(e==null,"A cancel should cancel all event registrations.");const l=r.query._path;r.eventRegistrations_.forEach(c=>{const h=c.createCancelEvent(t,l);h&&s.push(h)})}if(e){let l=[];for(let c=0;c<r.eventRegistrations_.length;++c){const h=r.eventRegistrations_[c];if(!h.matches(e))l.push(h);else if(e.hasAnyCallback()){l=l.concat(r.eventRegistrations_.slice(c+1));break}}r.eventRegistrations_=l}else r.eventRegistrations_=[];return s}function h_(r,e,t,s){e.type===Un.MERGE&&e.source.queryId!==null&&(K(us(r.viewCache_),"We should always have a full cache before handling merges"),K(ec(r.viewCache_),"Missing event cache, even though we have a server cache"));const l=r.viewCache_,c=PC(r.processor_,l,e,t,s);return RC(r.processor_,c.viewCache),K(c.viewCache.serverCache.isFullyInitialized()||!l.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),r.viewCache_=c.viewCache,dv(r,c.changes,c.viewCache.eventCache.getNode(),null)}function zC(r,e){const t=r.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Je,(c,h)=>{s.push(So(c,h))}),t.isFullyInitialized()&&s.push(nv(t.getNode())),dv(r,s,t.getNode(),e)}function dv(r,e,t,s){const l=s?[s]:r.eventRegistrations_;return aC(r.eventGenerator_,e,t,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;class fv{constructor(){this.views=new Map}}function BC(r){K(!ic,"__referenceConstructor has already been defined"),ic=r}function WC(){return K(ic,"Reference.ts has not been loaded"),ic}function HC(r){return r.views.size===0}function Nf(r,e,t,s){const l=e.source.queryId;if(l!==null){const c=r.views.get(l);return K(c!=null,"SyncTree gave us an op for an invalid query."),h_(c,e,t,s)}else{let c=[];for(const h of r.views.values())c=c.concat(h_(h,e,t,s));return c}}function pv(r,e,t,s,l){const c=e._queryIdentifier,h=r.views.get(c);if(!h){let m=tc(t,l?s:null),_=!1;m?_=!0:s instanceof ue?(m=Cf(t,s),_=!1):(m=ue.EMPTY_NODE,_=!1);const v=wc(new Si(m,_,!1),new Si(s,l,!1));return new bC(e,v)}return h}function $C(r,e,t,s,l,c){const h=pv(r,e,s,l,c);return r.views.has(e._queryIdentifier)||r.views.set(e._queryIdentifier,h),VC(h,t),zC(h,t)}function GC(r,e,t,s){const l=e._queryIdentifier,c=[];let h=[];const m=Ii(r);if(l==="default")for(const[_,v]of r.views.entries())h=h.concat(c_(v,t,s)),u_(v)&&(r.views.delete(_),v.query._queryParams.loadsAllData()||c.push(v.query));else{const _=r.views.get(l);_&&(h=h.concat(c_(_,t,s)),u_(_)&&(r.views.delete(l),_.query._queryParams.loadsAllData()||c.push(_.query)))}return m&&!Ii(r)&&c.push(new(WC())(e._repo,e._path)),{removed:c,events:h}}function mv(r){const e=[];for(const t of r.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function wi(r,e){let t=null;for(const s of r.views.values())t=t||jC(s,e);return t}function gv(r,e){if(e._queryParams.loadsAllData())return Sc(r);{const s=e._queryIdentifier;return r.views.get(s)}}function _v(r,e){return gv(r,e)!=null}function Ii(r){return Sc(r)!=null}function Sc(r){for(const e of r.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sc;function qC(r){K(!sc,"__referenceConstructor has already been defined"),sc=r}function KC(){return K(sc,"Reference.ts has not been loaded"),sc}let YC=1;class d_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Be(null),this.pendingWriteTree_=CC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function yv(r,e,t,s,l){return dC(r.pendingWriteTree_,e,t,s,l),l?xo(r,new as(Ef(),e,t)):[]}function QC(r,e,t,s){fC(r.pendingWriteTree_,e,t,s);const l=Be.fromObject(t);return xo(r,new Io(Ef(),e,l))}function mi(r,e,t=!1){const s=pC(r.pendingWriteTree_,e);if(mC(r.pendingWriteTree_,e)){let c=new Be(null);return s.snap!=null?c=c.set(Re(),!0):kt(s.children,h=>{c=c.set(new Fe(h),!0)}),xo(r,new Zu(s.path,c,t))}else return[]}function ca(r,e,t){return xo(r,new as(Sf(),e,t))}function XC(r,e,t){const s=Be.fromObject(t);return xo(r,new Io(Sf(),e,s))}function JC(r,e){return xo(r,new Zl(Sf(),e))}function ZC(r,e,t){const s=Rf(r,t);if(s){const l=Pf(s),c=l.path,h=l.queryId,m=Ut(c,e),_=new Zl(If(h),m);return xf(r,c,_)}else return[]}function oc(r,e,t,s,l=!1){const c=e._path,h=r.syncPointTree_.get(c);let m=[];if(h&&(e._queryIdentifier==="default"||_v(h,e))){const _=GC(h,e,t,s);HC(h)&&(r.syncPointTree_=r.syncPointTree_.remove(c));const v=_.removed;if(m=_.events,!l){const k=v.findIndex(I=>I._queryParams.loadsAllData())!==-1,T=r.syncPointTree_.findOnPath(c,(I,W)=>Ii(W));if(k&&!T){const I=r.syncPointTree_.subtree(c);if(!I.isEmpty()){const W=n1(I);for(let z=0;z<W.length;++z){const q=W[z],Q=q.query,de=Sv(r,q);r.listenProvider_.startListening(Vl(Q),ea(r,Q),de.hashFn,de.onComplete)}}}!T&&v.length>0&&!s&&(k?r.listenProvider_.stopListening(Vl(e),null):v.forEach(I=>{const W=r.queryToTagMap.get(Ic(I));r.listenProvider_.stopListening(Vl(I),W)}))}r1(r,v)}return m}function vv(r,e,t,s){const l=Rf(r,s);if(l!=null){const c=Pf(l),h=c.path,m=c.queryId,_=Ut(h,e),v=new as(If(m),_,t);return xf(r,h,v)}else return[]}function e1(r,e,t,s){const l=Rf(r,s);if(l){const c=Pf(l),h=c.path,m=c.queryId,_=Ut(h,e),v=Be.fromObject(t),k=new Io(If(m),_,v);return xf(r,h,k)}else return[]}function Gd(r,e,t,s=!1){const l=e._path;let c=null,h=!1;r.syncPointTree_.foreachOnPath(l,(I,W)=>{const z=Ut(I,l);c=c||wi(W,z),h=h||Ii(W)});let m=r.syncPointTree_.get(l);m?(h=h||Ii(m),c=c||wi(m,Re())):(m=new fv,r.syncPointTree_=r.syncPointTree_.set(l,m));let _;c!=null?_=!0:(_=!1,c=ue.EMPTY_NODE,r.syncPointTree_.subtree(l).foreachChild((W,z)=>{const q=wi(z,Re());q&&(c=c.updateImmediateChild(W,q))}));const v=_v(m,e);if(!v&&!e._queryParams.loadsAllData()){const I=Ic(e);K(!r.queryToTagMap.has(I),"View does not exist, but we have a tag");const W=i1();r.queryToTagMap.set(I,W),r.tagToQueryMap.set(W,I)}const k=Ec(r.pendingWriteTree_,l);let T=$C(m,e,t,k,c,_);if(!v&&!h&&!s){const I=gv(m,e);T=T.concat(s1(r,e,I))}return T}function Af(r,e,t){const l=r.pendingWriteTree_,c=r.syncPointTree_.findOnPath(e,(h,m)=>{const _=Ut(h,e),v=wi(m,_);if(v)return v});return lv(l,e,c,t,!0)}function t1(r,e){const t=e._path;let s=null;r.syncPointTree_.foreachOnPath(t,(v,k)=>{const T=Ut(v,t);s=s||wi(k,T)});let l=r.syncPointTree_.get(t);l?s=s||wi(l,Re()):(l=new fv,r.syncPointTree_=r.syncPointTree_.set(t,l));const c=s!=null,h=c?new Si(s,!0,!1):null,m=Ec(r.pendingWriteTree_,e._path),_=pv(l,e,m,c?h.getNode():ue.EMPTY_NODE,c);return UC(_)}function xo(r,e){return wv(e,r.syncPointTree_,null,Ec(r.pendingWriteTree_,Re()))}function wv(r,e,t,s){if(we(r.path))return Ev(r,e,t,s);{const l=e.get(Re());t==null&&l!=null&&(t=wi(l,Re()));let c=[];const h=_e(r.path),m=r.operationForChild(h),_=e.children.get(h);if(_&&m){const v=t?t.getImmediateChild(h):null,k=av(s,h);c=c.concat(wv(m,_,v,k))}return l&&(c=c.concat(Nf(l,r,s,t))),c}}function Ev(r,e,t,s){const l=e.get(Re());t==null&&l!=null&&(t=wi(l,Re()));let c=[];return e.children.inorderTraversal((h,m)=>{const _=t?t.getImmediateChild(h):null,v=av(s,h),k=r.operationForChild(h);k&&(c=c.concat(Ev(k,m,_,v)))}),l&&(c=c.concat(Nf(l,r,s,t))),c}function Sv(r,e){const t=e.query,s=ea(r,t);return{hashFn:()=>(FC(e)||ue.EMPTY_NODE).hash(),onComplete:l=>{if(l==="ok")return s?ZC(r,t._path,s):JC(r,t._path);{const c=JS(l,t);return oc(r,t,null,c)}}}}function ea(r,e){const t=Ic(e);return r.queryToTagMap.get(t)}function Ic(r){return r._path.toString()+"$"+r._queryIdentifier}function Rf(r,e){return r.tagToQueryMap.get(e)}function Pf(r){const e=r.indexOf("$");return K(e!==-1&&e<r.length-1,"Bad queryKey."),{queryId:r.substr(e+1),path:new Fe(r.substr(0,e))}}function xf(r,e,t){const s=r.syncPointTree_.get(e);K(s,"Missing sync point for query tag that we're tracking");const l=Ec(r.pendingWriteTree_,e);return Nf(s,t,l,null)}function n1(r){return r.fold((e,t,s)=>{if(t&&Ii(t))return[Sc(t)];{let l=[];return t&&(l=mv(t)),kt(s,(c,h)=>{l=l.concat(h)}),l}})}function Vl(r){return r._queryParams.loadsAllData()&&!r._queryParams.isDefault()?new(KC())(r._repo,r._path):r}function r1(r,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const l=Ic(s),c=r.queryToTagMap.get(l);r.queryToTagMap.delete(l),r.tagToQueryMap.delete(c)}}}function i1(){return YC++}function s1(r,e,t){const s=e._path,l=ea(r,e),c=Sv(r,t),h=r.listenProvider_.startListening(Vl(e),l,c.hashFn,c.onComplete),m=r.syncPointTree_.subtree(s);if(l)K(!Ii(m.value),"If we're adding a query, it shouldn't be shadowed");else{const _=m.fold((v,k,T)=>{if(!we(v)&&k&&Ii(k))return[Sc(k).query];{let I=[];return k&&(I=I.concat(mv(k).map(W=>W.query))),kt(T,(W,z)=>{I=I.concat(z)}),I}});for(let v=0;v<_.length;++v){const k=_[v];r.listenProvider_.stopListening(Vl(k),ea(r,k))}}return h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Df(t)}node(){return this.node_}}class Of{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Xe(this.path_,e);return new Of(this.syncTree_,t)}node(){return Af(this.syncTree_,this.path_)}}const o1=function(r){return r=r||{},r.timestamp=r.timestamp||new Date().getTime(),r},f_=function(r,e,t){if(!r||typeof r!="object")return r;if(K(".sv"in r,"Unexpected leaf node or priority contents"),typeof r[".sv"]=="string")return l1(r[".sv"],e,t);if(typeof r[".sv"]=="object")return a1(r[".sv"],e);K(!1,"Unexpected server value: "+JSON.stringify(r,null,2))},l1=function(r,e,t){switch(r){case"timestamp":return t.timestamp;default:K(!1,"Unexpected server value: "+r)}},a1=function(r,e,t){r.hasOwnProperty("increment")||K(!1,"Unexpected server value: "+JSON.stringify(r,null,2));const s=r.increment;typeof s!="number"&&K(!1,"Unexpected increment value: "+s);const l=e.node();if(K(l!==null&&typeof l<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!l.isLeafNode())return s;const h=l.getValue();return typeof h!="number"?s:h+s},Iv=function(r,e,t,s){return Lf(e,new Of(t,r),s)},Cv=function(r,e,t){return Lf(r,new Df(e),t)};function Lf(r,e,t){const s=r.getPriority().val(),l=f_(s,e.getImmediateChild(".priority"),t);let c;if(r.isLeafNode()){const h=r,m=f_(h.getValue(),e,t);return m!==h.getValue()||l!==h.getPriority().val()?new yt(m,ut(l)):r}else{const h=r;return c=h,l!==h.getPriority().val()&&(c=c.updatePriority(new yt(l))),h.forEachChild(Je,(m,_)=>{const v=Lf(_,e.getImmediateChild(m),t);v!==_&&(c=c.updateImmediateChild(m,v))}),c}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function bf(r,e){let t=e instanceof Fe?e:new Fe(e),s=r,l=_e(t);for(;l!==null;){const c=wo(s.node.children,l)||{children:{},childCount:0};s=new Mf(l,s,c),t=We(t),l=_e(t)}return s}function Do(r){return r.node.value}function Tv(r,e){r.node.value=e,qd(r)}function kv(r){return r.node.childCount>0}function u1(r){return Do(r)===void 0&&!kv(r)}function Cc(r,e){kt(r.node.children,(t,s)=>{e(new Mf(t,r,s))})}function Nv(r,e,t,s){t&&e(r),Cc(r,l=>{Nv(l,e,!0)})}function c1(r,e,t){let s=r.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ha(r){return new Fe(r.parent===null?r.name:ha(r.parent)+"/"+r.name)}function qd(r){r.parent!==null&&h1(r.parent,r.name,r)}function h1(r,e,t){const s=u1(t),l=or(r.node.children,e);s&&l?(delete r.node.children[e],r.node.childCount--,qd(r)):!s&&!l&&(r.node.children[e]=t.node,r.node.childCount++,qd(r))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1=/[\[\].#$\/\u0000-\u001F\u007F]/,f1=/[\[\].#$\u0000-\u001F\u007F]/,Sd=10*1024*1024,Ff=function(r){return typeof r=="string"&&r.length!==0&&!d1.test(r)},Av=function(r){return typeof r=="string"&&r.length!==0&&!f1.test(r)},p1=function(r){return r&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Av(r)},m1=function(r){return r===null||typeof r=="string"||typeof r=="number"&&!cf(r)||r&&typeof r=="object"&&or(r,".sv")},Rv=function(r,e,t,s){s&&e===void 0||Tc(gc(r,"value"),e,t)},Tc=function(r,e,t){const s=t instanceof Fe?new DI(t,r):t;if(e===void 0)throw new Error(r+"contains undefined "+Zi(s));if(typeof e=="function")throw new Error(r+"contains a function "+Zi(s)+" with contents = "+e.toString());if(cf(e))throw new Error(r+"contains "+e.toString()+" "+Zi(s));if(typeof e=="string"&&e.length>Sd/3&&_c(e)>Sd)throw new Error(r+"contains a string greater than "+Sd+" utf8 bytes "+Zi(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let l=!1,c=!1;if(kt(e,(h,m)=>{if(h===".value")l=!0;else if(h!==".priority"&&h!==".sv"&&(c=!0,!Ff(h)))throw new Error(r+" contains an invalid key ("+h+") "+Zi(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);OI(s,h),Tc(r,m,s),LI(s)}),l&&c)throw new Error(r+' contains ".value" child '+Zi(s)+" in addition to actual children.")}},g1=function(r,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const c=Yl(s);for(let h=0;h<c.length;h++)if(!(c[h]===".priority"&&h===c.length-1)){if(!Ff(c[h]))throw new Error(r+"contains an invalid key ("+c[h]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(xI);let l=null;for(t=0;t<e.length;t++){if(s=e[t],l!==null&&_n(l,s))throw new Error(r+"contains a path "+l.toString()+" that is ancestor of another path "+s.toString());l=s}},_1=function(r,e,t,s){const l=gc(r,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(l+" must be an object containing the children to replace.");const c=[];kt(e,(h,m)=>{const _=new Fe(h);if(Tc(l,m,Xe(t,_)),mf(_)===".priority"&&!m1(m))throw new Error(l+"contains an invalid value for '"+_.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");c.push(_)}),g1(l,c)},Pv=function(r,e,t,s){if(!Av(t))throw new Error(gc(r,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},y1=function(r,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Pv(r,e,t)},Uf=function(r,e){if(_e(e)===".info")throw new Error(r+" failed = Can't modify data under /.info/")},v1=function(r,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ff(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!p1(t))throw new Error(gc(r,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function kc(r,e){let t=null;for(let s=0;s<e.length;s++){const l=e[s],c=l.getPath();t!==null&&!gf(c,t.path)&&(r.eventLists_.push(t),t=null),t===null&&(t={events:[],path:c}),t.events.push(l)}t&&r.eventLists_.push(t)}function xv(r,e,t){kc(r,t),Dv(r,s=>gf(s,e))}function vn(r,e,t){kc(r,t),Dv(r,s=>_n(s,e)||_n(e,s))}function Dv(r,e){r.recursionDepth_++;let t=!0;for(let s=0;s<r.eventLists_.length;s++){const l=r.eventLists_[s];if(l){const c=l.path;e(c)?(E1(r.eventLists_[s]),r.eventLists_[s]=null):t=!1}}t&&(r.eventLists_=[]),r.recursionDepth_--}function E1(r){for(let e=0;e<r.events.length;e++){const t=r.events[e];if(t!==null){r.events[e]=null;const s=t.getEventRunner();bl&&Tt("event: "+t.toString()),Po(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1="repo_interrupt",I1=25;class C1{constructor(e,t,s,l){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=l,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new w1,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ju(),this.transactionQueueTree_=new Mf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function T1(r,e,t){if(r.stats_=ff(r.repoInfo_),r.forceRestClient_||nI())r.server_=new Xu(r.repoInfo_,(s,l,c,h)=>{p_(r,s,l,c,h)},r.authTokenProvider_,r.appCheckProvider_),setTimeout(()=>m_(r,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ct(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}r.persistentConnection_=new xr(r.repoInfo_,e,(s,l,c,h)=>{p_(r,s,l,c,h)},s=>{m_(r,s)},s=>{k1(r,s)},r.authTokenProvider_,r.appCheckProvider_,t),r.server_=r.persistentConnection_}r.authTokenProvider_.addTokenChangeListener(s=>{r.server_.refreshAuthToken(s)}),r.appCheckProvider_.addTokenChangeListener(s=>{r.server_.refreshAppCheckToken(s.token)}),r.statsReporter_=lI(r.repoInfo_,()=>new oC(r.stats_,r.server_)),r.infoData_=new tC,r.infoSyncTree_=new d_({startListening:(s,l,c,h)=>{let m=[];const _=r.infoData_.getNode(s._path);return _.isEmpty()||(m=ca(r.infoSyncTree_,s._path,_),setTimeout(()=>{h("ok")},0)),m},stopListening:()=>{}}),jf(r,"connected",!1),r.serverSyncTree_=new d_({startListening:(s,l,c,h)=>(r.server_.listen(s,c,l,(m,_)=>{const v=h(m,_);vn(r.eventQueue_,s._path,v)}),[]),stopListening:(s,l)=>{r.server_.unlisten(s,l)}})}function Ov(r){const t=r.infoData_.getNode(new Fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Nc(r){return o1({timestamp:Ov(r)})}function p_(r,e,t,s,l){r.dataUpdateCount++;const c=new Fe(e);t=r.interceptServerDataCallback_?r.interceptServerDataCallback_(e,t):t;let h=[];if(l)if(s){const _=Gu(t,v=>ut(v));h=e1(r.serverSyncTree_,c,_,l)}else{const _=ut(t);h=vv(r.serverSyncTree_,c,_,l)}else if(s){const _=Gu(t,v=>ut(v));h=XC(r.serverSyncTree_,c,_)}else{const _=ut(t);h=ca(r.serverSyncTree_,c,_)}let m=c;h.length>0&&(m=To(r,c)),vn(r.eventQueue_,m,h)}function m_(r,e){jf(r,"connected",e),e===!1&&P1(r)}function k1(r,e){kt(e,(t,s)=>{jf(r,t,s)})}function jf(r,e,t){const s=new Fe("/.info/"+e),l=ut(t);r.infoData_.updateSnapshot(s,l);const c=ca(r.infoSyncTree_,s,l);vn(r.eventQueue_,s,c)}function Vf(r){return r.nextWriteId_++}function N1(r,e,t){const s=t1(r.serverSyncTree_,e);return s!=null?Promise.resolve(s):r.server_.get(e).then(l=>{const c=ut(l).withIndex(e._queryParams.getIndex());Gd(r.serverSyncTree_,e,t,!0);let h;if(e._queryParams.loadsAllData())h=ca(r.serverSyncTree_,e._path,c);else{const m=ea(r.serverSyncTree_,e);h=vv(r.serverSyncTree_,e._path,c,m)}return vn(r.eventQueue_,e._path,h),oc(r.serverSyncTree_,e,t,null,!0),c},l=>(da(r,"get for query "+ct(e)+" failed: "+l),Promise.reject(new Error(l))))}function A1(r,e,t,s,l){da(r,"set",{path:e.toString(),value:t,priority:s});const c=Nc(r),h=ut(t,s),m=Af(r.serverSyncTree_,e),_=Cv(h,m,c),v=Vf(r),k=yv(r.serverSyncTree_,e,_,v,!0);kc(r.eventQueue_,k),r.server_.put(e.toString(),h.val(!0),(I,W)=>{const z=I==="ok";z||jt("set at "+e+" failed: "+I);const q=mi(r.serverSyncTree_,v,!z);vn(r.eventQueue_,e,q),Kd(r,l,I,W)});const T=Bf(r,e);To(r,T),vn(r.eventQueue_,T,[])}function R1(r,e,t,s){da(r,"update",{path:e.toString(),value:t});let l=!0;const c=Nc(r),h={};if(kt(t,(m,_)=>{l=!1,h[m]=Iv(Xe(e,m),ut(_),r.serverSyncTree_,c)}),l)Tt("update() called with empty data.  Don't do anything."),Kd(r,s,"ok",void 0);else{const m=Vf(r),_=QC(r.serverSyncTree_,e,h,m);kc(r.eventQueue_,_),r.server_.merge(e.toString(),t,(v,k)=>{const T=v==="ok";T||jt("update at "+e+" failed: "+v);const I=mi(r.serverSyncTree_,m,!T),W=I.length>0?To(r,e):e;vn(r.eventQueue_,W,I),Kd(r,s,v,k)}),kt(t,v=>{const k=Bf(r,Xe(e,v));To(r,k)}),vn(r.eventQueue_,e,[])}}function P1(r){da(r,"onDisconnectEvents");const e=Nc(r),t=Ju();Vd(r.onDisconnect_,Re(),(l,c)=>{const h=Iv(l,c,r.serverSyncTree_,e);rv(t,l,h)});let s=[];Vd(t,Re(),(l,c)=>{s=s.concat(ca(r.serverSyncTree_,l,c));const h=Bf(r,l);To(r,h)}),r.onDisconnect_=Ju(),vn(r.eventQueue_,Re(),s)}function x1(r,e,t){let s;_e(e._path)===".info"?s=Gd(r.infoSyncTree_,e,t):s=Gd(r.serverSyncTree_,e,t),xv(r.eventQueue_,e._path,s)}function D1(r,e,t){let s;_e(e._path)===".info"?s=oc(r.infoSyncTree_,e,t):s=oc(r.serverSyncTree_,e,t),xv(r.eventQueue_,e._path,s)}function O1(r){r.persistentConnection_&&r.persistentConnection_.interrupt(S1)}function da(r,...e){let t="";r.persistentConnection_&&(t=r.persistentConnection_.id+":"),Tt(t,...e)}function Kd(r,e,t,s){e&&Po(()=>{if(t==="ok")e(null);else{const l=(t||"error").toUpperCase();let c=l;s&&(c+=": "+s);const h=new Error(c);h.code=l,e(h)}})}function Lv(r,e,t){return Af(r.serverSyncTree_,e,t)||ue.EMPTY_NODE}function zf(r,e=r.transactionQueueTree_){if(e||Ac(r,e),Do(e)){const t=bv(r,e);K(t.length>0,"Sending zero length transaction queue"),t.every(l=>l.status===0)&&L1(r,ha(e),t)}else kv(e)&&Cc(e,t=>{zf(r,t)})}function L1(r,e,t){const s=t.map(v=>v.currentWriteId),l=Lv(r,e,s);let c=l;const h=l.hash();for(let v=0;v<t.length;v++){const k=t[v];K(k.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),k.status=1,k.retryCount++;const T=Ut(e,k.path);c=c.updateChild(T,k.currentOutputSnapshotRaw)}const m=c.val(!0),_=e;r.server_.put(_.toString(),m,v=>{da(r,"transaction put response",{path:_.toString(),status:v});let k=[];if(v==="ok"){const T=[];for(let I=0;I<t.length;I++)t[I].status=2,k=k.concat(mi(r.serverSyncTree_,t[I].currentWriteId)),t[I].onComplete&&T.push(()=>t[I].onComplete(null,!0,t[I].currentOutputSnapshotResolved)),t[I].unwatcher();Ac(r,bf(r.transactionQueueTree_,e)),zf(r,r.transactionQueueTree_),vn(r.eventQueue_,e,k);for(let I=0;I<T.length;I++)Po(T[I])}else{if(v==="datastale")for(let T=0;T<t.length;T++)t[T].status===3?t[T].status=4:t[T].status=0;else{jt("transaction at "+_.toString()+" failed: "+v);for(let T=0;T<t.length;T++)t[T].status=4,t[T].abortReason=v}To(r,e)}},h)}function To(r,e){const t=Mv(r,e),s=ha(t),l=bv(r,t);return M1(r,l,s),s}function M1(r,e,t){if(e.length===0)return;const s=[];let l=[];const h=e.filter(m=>m.status===0).map(m=>m.currentWriteId);for(let m=0;m<e.length;m++){const _=e[m],v=Ut(t,_.path);let k=!1,T;if(K(v!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),_.status===4)k=!0,T=_.abortReason,l=l.concat(mi(r.serverSyncTree_,_.currentWriteId,!0));else if(_.status===0)if(_.retryCount>=I1)k=!0,T="maxretry",l=l.concat(mi(r.serverSyncTree_,_.currentWriteId,!0));else{const I=Lv(r,_.path,h);_.currentInputSnapshot=I;const W=e[m].update(I.val());if(W!==void 0){Tc("transaction failed: Data returned ",W,_.path);let z=ut(W);typeof W=="object"&&W!=null&&or(W,".priority")||(z=z.updatePriority(I.getPriority()));const Q=_.currentWriteId,de=Nc(r),fe=Cv(z,I,de);_.currentOutputSnapshotRaw=z,_.currentOutputSnapshotResolved=fe,_.currentWriteId=Vf(r),h.splice(h.indexOf(Q),1),l=l.concat(yv(r.serverSyncTree_,_.path,fe,_.currentWriteId,_.applyLocally)),l=l.concat(mi(r.serverSyncTree_,Q,!0))}else k=!0,T="nodata",l=l.concat(mi(r.serverSyncTree_,_.currentWriteId,!0))}vn(r.eventQueue_,t,l),l=[],k&&(e[m].status=2,function(I){setTimeout(I,Math.floor(0))}(e[m].unwatcher),e[m].onComplete&&(T==="nodata"?s.push(()=>e[m].onComplete(null,!1,e[m].currentInputSnapshot)):s.push(()=>e[m].onComplete(new Error(T),!1,null))))}Ac(r,r.transactionQueueTree_);for(let m=0;m<s.length;m++)Po(s[m]);zf(r,r.transactionQueueTree_)}function Mv(r,e){let t,s=r.transactionQueueTree_;for(t=_e(e);t!==null&&Do(s)===void 0;)s=bf(s,t),e=We(e),t=_e(e);return s}function bv(r,e){const t=[];return Fv(r,e,t),t.sort((s,l)=>s.order-l.order),t}function Fv(r,e,t){const s=Do(e);if(s)for(let l=0;l<s.length;l++)t.push(s[l]);Cc(e,l=>{Fv(r,l,t)})}function Ac(r,e){const t=Do(e);if(t){let s=0;for(let l=0;l<t.length;l++)t[l].status!==2&&(t[s]=t[l],s++);t.length=s,Tv(e,t.length>0?t:void 0)}Cc(e,s=>{Ac(r,s)})}function Bf(r,e){const t=ha(Mv(r,e)),s=bf(r.transactionQueueTree_,e);return c1(s,l=>{Id(r,l)}),Id(r,s),Nv(s,l=>{Id(r,l)}),t}function Id(r,e){const t=Do(e);if(t){const s=[];let l=[],c=-1;for(let h=0;h<t.length;h++)t[h].status===3||(t[h].status===1?(K(c===h-1,"All SENT items should be at beginning of queue."),c=h,t[h].status=3,t[h].abortReason="set"):(K(t[h].status===0,"Unexpected transaction status in abort"),t[h].unwatcher(),l=l.concat(mi(r.serverSyncTree_,t[h].currentWriteId,!0)),t[h].onComplete&&s.push(t[h].onComplete.bind(null,new Error("set"),!1,null))));c===-1?Tv(e,void 0):t.length=c+1,vn(r.eventQueue_,ha(e),l);for(let h=0;h<s.length;h++)Po(s[h])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(r){let e="";const t=r.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let l=t[s];try{l=decodeURIComponent(l.replace(/\+/g," "))}catch{}e+="/"+l}return e}function F1(r){const e={};r.charAt(0)==="?"&&(r=r.substring(1));for(const t of r.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):jt(`Invalid query segment '${t}' in query '${r}'`)}return e}const g_=function(r,e){const t=U1(r),s=t.namespace;t.domain==="firebase.com"&&Lr(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&Lr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||qS();const l=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Vy(t.host,t.secure,s,l,e,"",s!==t.subdomain),path:new Fe(t.pathString)}},U1=function(r){let e="",t="",s="",l="",c="",h=!0,m="https",_=443;if(typeof r=="string"){let v=r.indexOf("//");v>=0&&(m=r.substring(0,v-1),r=r.substring(v+2));let k=r.indexOf("/");k===-1&&(k=r.length);let T=r.indexOf("?");T===-1&&(T=r.length),e=r.substring(0,Math.min(k,T)),k<T&&(l=b1(r.substring(k,T)));const I=F1(r.substring(Math.min(r.length,T)));v=e.indexOf(":"),v>=0?(h=m==="https"||m==="wss",_=parseInt(e.substring(v+1),10)):v=e.length;const W=e.slice(0,v);if(W.toLowerCase()==="localhost")t="localhost";else if(W.split(".").length<=2)t=W;else{const z=e.indexOf(".");s=e.substring(0,z).toLowerCase(),t=e.substring(z+1),c=s}"ns"in I&&(c=I.ns)}return{host:e,port:_,domain:t,subdomain:s,secure:h,scheme:m,pathString:l,namespace:c}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",j1=function(){let r=0;const e=[];return function(t){const s=t===r;r=t;let l;const c=new Array(8);for(l=7;l>=0;l--)c[l]=__.charAt(t%64),t=Math.floor(t/64);K(t===0,"Cannot push at time == 0");let h=c.join("");if(s){for(l=11;l>=0&&e[l]===63;l--)e[l]=0;e[l]++}else for(l=0;l<12;l++)e[l]=Math.floor(Math.random()*64);for(l=0;l<12;l++)h+=__.charAt(e[l]);return K(h.length===20,"nextPushId: Length should be 20."),h}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,t,s,l){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=l}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ct(this.snapshot.exportVal())}}class z1{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return K(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,s,l){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=l}get key(){return we(this._path)?null:mf(this._path)}get ref(){return new Fr(this._repo,this._path)}get _queryIdentifier(){const e=n_(this._queryParams),t=hf(e);return t==="{}"?"default":t}get _queryObject(){return n_(this._queryParams)}isEqual(e){if(e=zt(e),!(e instanceof Wf))return!1;const t=this._repo===e._repo,s=gf(this._path,e._path),l=this._queryIdentifier===e._queryIdentifier;return t&&s&&l}toJSON(){return this.toString()}toString(){return this._repo.toString()+PI(this._path)}}class Fr extends Wf{constructor(e,t){super(e,t,new wf,!1)}get parent(){const e=Yy(this._path);return e===null?null:new Fr(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ta{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Fe(e),s=na(this.ref,e);return new ta(this._node.getChild(t),s,Je)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,l)=>e(new ta(l,na(this.ref,s),Je)))}hasChild(e){const t=new Fe(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kr(r,e){return r=zt(r),r._checkNotDeleted("ref"),e!==void 0?na(r._root,e):r._root}function na(r,e){return r=zt(r),_e(r._path)===null?y1("child","path",e):Pv("child","path",e),new Fr(r._repo,Xe(r._path,e))}function B1(r,e){r=zt(r),Uf("push",r._path),Rv("push",e,r._path,!0);const t=Ov(r._repo),s=j1(t),l=na(r,s),c=na(r,s);let h;return e!=null?h=jv(c,e).then(()=>c):h=Promise.resolve(c),l.then=h.then.bind(h),l.catch=h.then.bind(h,void 0),l}function W1(r){return Uf("remove",r._path),jv(r,null)}function jv(r,e){r=zt(r),Uf("set",r._path),Rv("set",e,r._path,!1);const t=new sa;return A1(r._repo,r._path,e,null,t.wrapCallback(()=>{})),t.promise}function Yd(r,e){_1("update",e,r._path);const t=new sa;return R1(r._repo,r._path,e,t.wrapCallback(()=>{})),t.promise}function Hf(r){r=zt(r);const e=new Uv(()=>{}),t=new Rc(e);return N1(r._repo,r,t).then(s=>new ta(s,new Fr(r._repo,r._path),r._queryParams.getIndex()))}class Rc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new V1("value",this,new ta(e.snapshotNode,new Fr(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new z1(this,e,t):null}matches(e){return e instanceof Rc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function H1(r,e,t,s,l){const c=new Uv(t,void 0),h=new Rc(c);return x1(r._repo,r,h),()=>D1(r._repo,r,h)}function $1(r,e,t,s){return H1(r,"value",e)}BC(Fr);qC(Fr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1="FIREBASE_DATABASE_EMULATOR_HOST",Qd={};let q1=!1;function K1(r,e,t,s){const l=e.lastIndexOf(":"),c=e.substring(0,l),h=ps(c);r.repoInfo_=new Vy(e,h,r.repoInfo_.namespace,r.repoInfo_.webSocketOnly,r.repoInfo_.nodeAdmin,r.repoInfo_.persistenceKey,r.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(r.authTokenProvider_=s)}function Y1(r,e,t,s,l){let c=s||r.options.databaseURL;c===void 0&&(r.options.projectId||Lr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Tt("Using default host for project ",r.options.projectId),c=`${r.options.projectId}-default-rtdb.firebaseio.com`);let h=g_(c,l),m=h.repoInfo,_;typeof process<"u"&&Ug&&(_=Ug[G1]),_?(c=`http://${_}?ns=${m.namespace}`,h=g_(c,l),m=h.repoInfo):h.repoInfo.secure;const v=new iI(r.name,r.options,e);v1("Invalid Firebase Database URL",h),we(h.path)||Lr("Database URL must point to the root of a Firebase Database (not including a child path).");const k=X1(m,r,v,new rI(r,t));return new J1(k,r)}function Q1(r,e){const t=Qd[e];(!t||t[r.key]!==r)&&Lr(`Database ${e}(${r.repoInfo_}) has already been deleted.`),O1(r),delete t[r.key]}function X1(r,e,t,s){let l=Qd[e.name];l||(l={},Qd[e.name]=l);let c=l[r.toURLString()];return c&&Lr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),c=new C1(r,q1,t,s),l[r.toURLString()]=c,c}class J1{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(T1(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fr(this._repo,Re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Q1(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Lr("Cannot call "+e+" on a deleted database.")}}function gi(r=yc(),e){const t=Ti(r,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=hy("database");s&&Z1(t,...s)}return t}function Z1(r,e,t,s={}){r=zt(r),r._checkNotDeleted("useEmulator");const l=`${e}:${t}`,c=r._repoInternal;if(r._instanceStarted){if(l===r._repoInternal.repoInfo_.host&&Dr(s,c.repoInfo_.emulatorOptions))return;Lr("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let h;if(c.repoInfo_.nodeAdmin)s.mockUserToken&&Lr('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),h=new Uu(Uu.OWNER);else if(s.mockUserToken){const m=typeof s.mockUserToken=="string"?s.mockUserToken:py(s.mockUserToken,r.app.options.projectId);h=new Uu(m)}ps(e)&&(of(e),lf("Database",!0)),K1(c,l,s,h)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(r){zS(gs),Wn(new yn("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return Y1(s,l,c,t)},"PUBLIC").setMultipleInstances(!0)),Jt(jg,Vg,r),Jt(jg,Vg,"esm2020")}xr.prototype.simpleListen=function(r,e){this.sendRequest("q",{p:r},e)};xr.prototype.echo=function(r,e){this.sendRequest("echo",{d:r},e)};eT();var tT="firebase",nT="12.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jt(tT,nT,"app");const Vv="@firebase/installations",$f="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=1e4,Bv=`w:${$f}`,Wv="FIS_v2",rT="https://firebaseinstallations.googleapis.com/v1",iT=3600*1e3,sT="installations",oT="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lT={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},cs=new ms(sT,oT,lT);function Hv(r){return r instanceof Hn&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v({projectId:r}){return`${rT}/projects/${r}/installations`}function Gv(r){return{token:r.token,requestStatus:2,expiresIn:uT(r.expiresIn),creationTime:Date.now()}}async function qv(r,e){const s=(await e.json()).error;return cs.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Kv({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function aT(r,{refreshToken:e}){const t=Kv(r);return t.append("Authorization",cT(e)),t}async function Yv(r){const e=await r();return e.status>=500&&e.status<600?r():e}function uT(r){return Number(r.replace("s","000"))}function cT(r){return`${Wv} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hT({appConfig:r,heartbeatServiceProvider:e},{fid:t}){const s=$v(r),l=Kv(r),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const h={fid:t,authVersion:Wv,appId:r.appId,sdkVersion:Bv},m={method:"POST",headers:l,body:JSON.stringify(h)},_=await Yv(()=>fetch(s,m));if(_.ok){const v=await _.json();return{fid:v.fid||t,registrationStatus:2,refreshToken:v.refreshToken,authToken:Gv(v.authToken)}}else throw await qv("Create Installation",_)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qv(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dT(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT=/^[cdef][\w-]{21}$/,Xd="";function pT(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const t=mT(r);return fT.test(t)?t:Xd}catch{return Xd}}function mT(r){return dT(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv=new Map;function Jv(r,e){const t=Pc(r);Zv(t,e),gT(t,e)}function Zv(r,e){const t=Xv.get(r);if(t)for(const s of t)s(e)}function gT(r,e){const t=_T();t&&t.postMessage({key:r,fid:e}),yT()}let ns=null;function _T(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=r=>{Zv(r.data.key,r.data.fid)}),ns}function yT(){Xv.size===0&&ns&&(ns.close(),ns=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="firebase-installations-database",wT=1,hs="firebase-installations-store";let Cd=null;function Gf(){return Cd||(Cd=Sy(vT,wT,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(hs)}}})),Cd}async function lc(r,e){const t=Pc(r),l=(await Gf()).transaction(hs,"readwrite"),c=l.objectStore(hs),h=await c.get(t);return await c.put(e,t),await l.done,(!h||h.fid!==e.fid)&&Jv(r,e.fid),e}async function ew(r){const e=Pc(r),s=(await Gf()).transaction(hs,"readwrite");await s.objectStore(hs).delete(e),await s.done}async function xc(r,e){const t=Pc(r),l=(await Gf()).transaction(hs,"readwrite"),c=l.objectStore(hs),h=await c.get(t),m=e(h);return m===void 0?await c.delete(t):await c.put(m,t),await l.done,m&&(!h||h.fid!==m.fid)&&Jv(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(r){let e;const t=await xc(r.appConfig,s=>{const l=ET(s),c=ST(r,l);return e=c.registrationPromise,c.installationEntry});return t.fid===Xd?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function ET(r){const e=r||{fid:pT(),registrationStatus:0};return tw(e)}function ST(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(cs.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=IT(r,t);return{installationEntry:t,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:CT(r)}:{installationEntry:e}}async function IT(r,e){try{const t=await hT(r,e);return lc(r.appConfig,t)}catch(t){throw Hv(t)&&t.customData.serverCode===409?await ew(r.appConfig):await lc(r.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function CT(r){let e=await y_(r.appConfig);for(;e.registrationStatus===1;)await Qv(100),e=await y_(r.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:s}=await qf(r);return s||t}return e}function y_(r){return xc(r,e=>{if(!e)throw cs.create("installation-not-found");return tw(e)})}function tw(r){return TT(r)?{fid:r.fid,registrationStatus:0}:r}function TT(r){return r.registrationStatus===1&&r.registrationTime+zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT({appConfig:r,heartbeatServiceProvider:e},t){const s=NT(r,t),l=aT(r,t),c=e.getImmediate({optional:!0});if(c){const v=await c.getHeartbeatsHeader();v&&l.append("x-firebase-client",v)}const h={installation:{sdkVersion:Bv,appId:r.appId}},m={method:"POST",headers:l,body:JSON.stringify(h)},_=await Yv(()=>fetch(s,m));if(_.ok){const v=await _.json();return Gv(v)}else throw await qv("Generate Auth Token",_)}function NT(r,{fid:e}){return`${$v(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kf(r,e=!1){let t;const s=await xc(r.appConfig,c=>{if(!nw(c))throw cs.create("not-registered");const h=c.authToken;if(!e&&PT(h))return c;if(h.requestStatus===1)return t=AT(r,e),c;{if(!navigator.onLine)throw cs.create("app-offline");const m=DT(c);return t=RT(r,m),m}});return t?await t:s.authToken}async function AT(r,e){let t=await v_(r.appConfig);for(;t.authToken.requestStatus===1;)await Qv(100),t=await v_(r.appConfig);const s=t.authToken;return s.requestStatus===0?Kf(r,e):s}function v_(r){return xc(r,e=>{if(!nw(e))throw cs.create("not-registered");const t=e.authToken;return OT(t)?{...e,authToken:{requestStatus:0}}:e})}async function RT(r,e){try{const t=await kT(r,e),s={...e,authToken:t};return await lc(r.appConfig,s),t}catch(t){if(Hv(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ew(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await lc(r.appConfig,s)}throw t}}function nw(r){return r!==void 0&&r.registrationStatus===2}function PT(r){return r.requestStatus===2&&!xT(r)}function xT(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+iT}function DT(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function OT(r){return r.requestStatus===1&&r.requestTime+zv<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(r){const e=r,{installationEntry:t,registrationPromise:s}=await qf(e);return s?s.catch(console.error):Kf(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MT(r,e=!1){const t=r;return await bT(t),(await Kf(t,e)).token}async function bT(r){const{registrationPromise:e}=await qf(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(r){if(!r||!r.options)throw Td("App Configuration");if(!r.name)throw Td("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!r.options[t])throw Td(t);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function Td(r){return cs.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="installations",UT="installations-internal",jT=r=>{const e=r.getProvider("app").getImmediate(),t=FT(e),s=Ti(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},VT=r=>{const e=r.getProvider("app").getImmediate(),t=Ti(e,rw).getImmediate();return{getId:()=>LT(t),getToken:l=>MT(t,l)}};function zT(){Wn(new yn(rw,jT,"PUBLIC")),Wn(new yn(UT,VT,"PRIVATE"))}zT();Jt(Vv,$f);Jt(Vv,$f,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac="analytics",BT="firebase_id",WT="origin",HT=60*1e3,$T="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Yf="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=new oa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ln=new ms("analytics","Analytics",GT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(r){if(!r.startsWith(Yf)){const e=ln.create("invalid-gtag-resource",{gtagURL:r});return Zt.warn(e.message),""}return r}function iw(r){return Promise.all(r.map(e=>e.catch(t=>t)))}function KT(r,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(r,e)),t}function YT(r,e){const t=KT("firebase-js-sdk-policy",{createScriptURL:qT}),s=document.createElement("script"),l=`${Yf}?l=${r}&id=${e}`;s.src=t?t?.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function QT(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function XT(r,e,t,s,l,c){const h=s[l];try{if(h)await e[h];else{const _=(await iw(t)).find(v=>v.measurementId===l);_&&await e[_.appId]}}catch(m){Zt.error(m)}r("config",l,c)}async function JT(r,e,t,s,l){try{let c=[];if(l&&l.send_to){let h=l.send_to;Array.isArray(h)||(h=[h]);const m=await iw(t);for(const _ of h){const v=m.find(T=>T.measurementId===_),k=v&&e[v.appId];if(k)c.push(k);else{c=[];break}}}c.length===0&&(c=Object.values(e)),await Promise.all(c),r("event",s,l||{})}catch(c){Zt.error(c)}}function ZT(r,e,t,s){async function l(c,...h){try{if(c==="event"){const[m,_]=h;await JT(r,e,t,m,_)}else if(c==="config"){const[m,_]=h;await XT(r,e,t,s,m,_)}else if(c==="consent"){const[m,_]=h;r("consent",m,_)}else if(c==="get"){const[m,_,v]=h;r("get",m,_,v)}else if(c==="set"){const[m]=h;r("set",m)}else r(c,...h)}catch(m){Zt.error(m)}}return l}function ek(r,e,t,s,l){let c=function(...h){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(c=window[l]),window[l]=ZT(c,r,e,t),{gtagCore:c,wrappedGtag:window[l]}}function tk(r){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Yf)&&t.src.includes(r))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=30,rk=1e3;class ik{constructor(e={},t=rk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const sw=new ik;function sk(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function ok(r){const{appId:e,apiKey:t}=r,s={method:"GET",headers:sk(t)},l=$T.replace("{app-id}",e),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let h="";try{const m=await c.json();m.error?.message&&(h=m.error.message)}catch{}throw ln.create("config-fetch-failed",{httpStatus:c.status,responseMessage:h})}return c.json()}async function lk(r,e=sw,t){const{appId:s,apiKey:l,measurementId:c}=r.options;if(!s)throw ln.create("no-app-id");if(!l){if(c)return{measurementId:c,appId:s};throw ln.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new ck;return setTimeout(async()=>{m.abort()},HT),ow({appId:s,apiKey:l,measurementId:c},h,m,e)}async function ow(r,{throttleEndTimeMillis:e,backoffCount:t},s,l=sw){const{appId:c,measurementId:h}=r;try{await ak(s,e)}catch(m){if(h)return Zt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${m?.message}]`),{appId:c,measurementId:h};throw m}try{const m=await ok(r);return l.deleteThrottleMetadata(c),m}catch(m){const _=m;if(!uk(_)){if(l.deleteThrottleMetadata(c),h)return Zt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${h} provided in the "measurementId" field in the local Firebase config. [${_?.message}]`),{appId:c,measurementId:h};throw m}const v=Number(_?.customData?.httpStatus)===503?Rg(t,l.intervalMillis,nk):Rg(t,l.intervalMillis),k={throttleEndTimeMillis:Date.now()+v,backoffCount:t+1};return l.setThrottleMetadata(c,k),Zt.debug(`Calling attemptFetch again in ${v} millis`),ow(r,k,s,l)}}function ak(r,e){return new Promise((t,s)=>{const l=Math.max(e-Date.now(),0),c=setTimeout(t,l);r.addEventListener(()=>{clearTimeout(c),s(ln.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function uk(r){if(!(r instanceof Hn)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class ck{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function hk(r,e,t,s,l){if(l&&l.global){r("event",t,s);return}else{const c=await e,h={...s,send_to:c};r("event",t,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dk(){if(_y())try{await yy()}catch(r){return Zt.warn(ln.create("indexeddb-unavailable",{errorInfo:r?.toString()}).message),!1}else return Zt.warn(ln.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function fk(r,e,t,s,l,c,h){const m=lk(r);m.then(I=>{t[I.measurementId]=I.appId,r.options.measurementId&&I.measurementId!==r.options.measurementId&&Zt.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${I.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(I=>Zt.error(I)),e.push(m);const _=dk().then(I=>{if(I)return s.getId()}),[v,k]=await Promise.all([m,_]);tk(c)||YT(c,v.measurementId),l("js",new Date);const T=h?.config??{};return T[WT]="firebase",T.update=!0,k!=null&&(T[BT]=k),l("config",v.measurementId,T),v.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pk{constructor(e){this.app=e}_delete(){return delete zl[this.app.options.appId],Promise.resolve()}}let zl={},w_=[];const E_={};let kd="dataLayer",mk="gtag",S_,lw,I_=!1;function gk(){const r=[];if(my()&&r.push("This is a browser extension environment."),vE()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),t=ln.create("invalid-analytics-context",{errorInfo:e});Zt.warn(t.message)}}function _k(r,e,t){gk();const s=r.options.appId;if(!s)throw ln.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)Zt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ln.create("no-api-key");if(zl[s]!=null)throw ln.create("already-exists",{id:s});if(!I_){QT(kd);const{wrappedGtag:c,gtagCore:h}=ek(zl,w_,E_,kd,mk);lw=c,S_=h,I_=!0}return zl[s]=fk(r,w_,E_,e,S_,kd,t),new pk(r)}function yk(r=yc()){r=zt(r);const e=Ti(r,ac);return e.isInitialized()?e.getImmediate():vk(r)}function vk(r,e={}){const t=Ti(r,ac);if(t.isInitialized()){const l=t.getImmediate();if(Dr(e,t.getOptions()))return l;throw ln.create("already-initialized")}return t.initialize({options:e})}function wk(r,e,t,s){r=zt(r),hk(lw,zl[r.app.options.appId],e,t,s).catch(l=>Zt.error(l))}const C_="@firebase/analytics",T_="0.10.18";function Ek(){Wn(new yn(ac,(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("installations-internal").getImmediate();return _k(s,l,t)},"PUBLIC")),Wn(new yn("analytics-internal",r,"PRIVATE")),Jt(C_,T_),Jt(C_,T_,"esm2020");function r(e){try{const t=e.getProvider(ac).getImmediate();return{logEvent:(s,l,c)=>wk(t,s,l,c)}}catch(t){throw ln.create("interop-component-reg-failed",{reason:t})}}}Ek();function aw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sk=aw,uw=new ms("auth","Firebase",aw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc=new oa("@firebase/auth");function Ik(r,...e){uc.logLevel<=Oe.WARN&&uc.warn(`Auth (${gs}): ${r}`,...e)}function ju(r,...e){uc.logLevel<=Oe.ERROR&&uc.error(`Auth (${gs}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(r,...e){throw Qf(r,...e)}function ir(r,...e){return Qf(r,...e)}function cw(r,e,t){const s={...Sk(),[e]:t};return new ms("auth","Firebase",s).create(e,{appName:r.name})}function is(r){return cw(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Qf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return uw.create(r,...e)}function he(r,e,...t){if(!r)throw Qf(e,...t)}function Rr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ju(e),new Error(e)}function br(r,e){r||Rr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(){return typeof self<"u"&&self.location?.href||""}function Ck(){return k_()==="http:"||k_()==="https:"}function k_(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ck()||my()||"connection"in navigator)?navigator.onLine:!0}function kk(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,t){this.shortDelay=e,this.longDelay=t,br(t>e,"Short delay should be less than long delay!"),this.isMobile=af()||gy()}get(){return Tk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(r,e){br(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ak=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Rk=new fa(3e4,6e4);function Jf(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Oo(r,e,t,s,l={}){return dw(r,l,async()=>{let c={},h={};s&&(e==="GET"?h=s:c={body:JSON.stringify(s)});const m=Ro({key:r.config.apiKey,...h}).slice(1),_=await r._getAdditionalHeaders();_["Content-Type"]="application/json",r.languageCode&&(_["X-Firebase-Locale"]=r.languageCode);const v={method:e,headers:_,...c};return gE()||(v.referrerPolicy="no-referrer"),r.emulatorConfig&&ps(r.emulatorConfig.host)&&(v.credentials="include"),hw.fetch()(await fw(r,r.config.apiHost,t,m),v)})}async function dw(r,e,t){r._canInitEmulator=!1;const s={...Nk,...e};try{const l=new xk(r),c=await Promise.race([t(),l.promise]);l.clearNetworkTimeout();const h=await c.json();if("needConfirmation"in h)throw Mu(r,"account-exists-with-different-credential",h);if(c.ok&&!("errorMessage"in h))return h;{const m=c.ok?h.errorMessage:h.error.message,[_,v]=m.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mu(r,"credential-already-in-use",h);if(_==="EMAIL_EXISTS")throw Mu(r,"email-already-in-use",h);if(_==="USER_DISABLED")throw Mu(r,"user-disabled",h);const k=s[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw cw(r,k,v);Mr(r,k)}}catch(l){if(l instanceof Hn)throw l;Mr(r,"network-request-failed",{message:String(l)})}}async function Pk(r,e,t,s,l={}){const c=await Oo(r,e,t,s,l);return"mfaPendingCredential"in c&&Mr(r,"multi-factor-auth-required",{_serverResponse:c}),c}async function fw(r,e,t,s){const l=`${e}${t}?${s}`,c=r,h=c.config.emulator?Xf(r.config,l):`${r.config.apiScheme}://${l}`;return Ak.includes(t)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(h).toString():h}class xk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(ir(this.auth,"network-request-failed")),Rk.get())})}}function Mu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const l=ir(r,e,s);return l.customData._tokenResponse=t,l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dk(r,e){return Oo(r,"POST","/v1/accounts:delete",e)}async function cc(r,e){return Oo(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ok(r,e=!1){const t=zt(r),s=await t.getIdToken(e),l=Zf(s);he(l&&l.exp&&l.auth_time&&l.iat,t.auth,"internal-error");const c=typeof l.firebase=="object"?l.firebase:void 0,h=c?.sign_in_provider;return{claims:l,token:s,authTime:Bl(Nd(l.auth_time)),issuedAtTime:Bl(Nd(l.iat)),expirationTime:Bl(Nd(l.exp)),signInProvider:h||null,signInSecondFactor:c?.sign_in_second_factor||null}}function Nd(r){return Number(r)*1e3}function Zf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return ju("JWT malformed, contained fewer than 3 sections"),null;try{const l=$u(t);return l?JSON.parse(l):(ju("Failed to decode base64 JWT payload"),null)}catch(l){return ju("Caught error parsing JWT payload as JSON",l?.toString()),null}}function N_(r){const e=Zf(r);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Hn&&Lk(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function Lk({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bl(this.lastLoginAt),this.creationTime=Bl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(r){const e=r.auth,t=await r.getIdToken(),s=await ra(r,cc(e,{idToken:t}));he(s?.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const c=l.providerUserInfo?.length?pw(l.providerUserInfo):[],h=Fk(r.providerData,c),m=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!h?.length,v=m?_:!1,k={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Zd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,k)}async function bk(r){const e=zt(r);await hc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fk(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function pw(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uk(r,e){const t=await dw(r,{},async()=>{const s=Ro({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:c}=r.config,h=await fw(r,l,"/v1/token",`key=${c}`),m=await r._getAdditionalHeaders();m["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:m,body:s};return r.emulatorConfig&&ps(r.emulatorConfig.host)&&(_.credentials="include"),hw.fetch()(h,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function jk(r,e){return Oo(r,"POST","/v2/accounts:revokeToken",Jf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):N_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=N_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:l,expiresIn:c}=await Uk(e,t);this.updateTokensAndExpiration(s,l,Number(c))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:l,expirationTime:c}=t,h=new go;return s&&(he(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),l&&(he(typeof l=="string","internal-error",{appName:e}),h.accessToken=l),c&&(he(typeof c=="number","internal-error",{appName:e}),h.expirationTime=c),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return Rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(r,e){he(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class jn{constructor({uid:e,auth:t,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new Mk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Zd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await ra(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ok(this,e)}reload(){return bk(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new jn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await hc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(is(this.auth));const e=await this.getIdToken();return await ra(this,Dk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const s=t.displayName??void 0,l=t.email??void 0,c=t.phoneNumber??void 0,h=t.photoURL??void 0,m=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,k=t.lastLoginAt??void 0,{uid:T,emailVerified:I,isAnonymous:W,providerData:z,stsTokenManager:q}=t;he(T&&q,e,"internal-error");const Q=go.fromJSON(this.name,q);he(typeof T=="string",e,"internal-error"),ci(s,e.name),ci(l,e.name),he(typeof I=="boolean",e,"internal-error"),he(typeof W=="boolean",e,"internal-error"),ci(c,e.name),ci(h,e.name),ci(m,e.name),ci(_,e.name),ci(v,e.name),ci(k,e.name);const de=new jn({uid:T,auth:e,email:l,emailVerified:I,displayName:s,isAnonymous:W,photoURL:h,phoneNumber:c,tenantId:m,stsTokenManager:Q,createdAt:v,lastLoginAt:k});return z&&Array.isArray(z)&&(de.providerData=z.map(fe=>({...fe}))),_&&(de._redirectEventId=_),de}static async _fromIdTokenResponse(e,t,s=!1){const l=new go;l.updateFromServerResponse(t);const c=new jn({uid:t.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await hc(c),c}static async _fromGetAccountInfoResponse(e,t,s){const l=t.users[0];he(l.localId!==void 0,"internal-error");const c=l.providerUserInfo!==void 0?pw(l.providerUserInfo):[],h=!(l.email&&l.passwordHash)&&!c?.length,m=new go;m.updateFromIdToken(s);const _=new jn({uid:l.localId,auth:e,stsTokenManager:m,isAnonymous:h}),v={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:c,metadata:new Zd(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!c?.length};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=new Map;function Pr(r){br(r instanceof Function,"Expected a class definition");let e=A_.get(r);return e?(br(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,A_.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}mw.type="NONE";const R_=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(r,e,t){return`firebase:${r}:${e}:${t}`}class _o{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:l,name:c}=this.auth;this.fullUserKey=Vu(this.userKey,l.apiKey,c),this.fullPersistenceKey=Vu("persistence",l.apiKey,c),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await cc(this.auth,{idToken:e}).catch(()=>{});return t?jn._fromGetAccountInfoResponse(this.auth,t,e):null}return jn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new _o(Pr(R_),e,s);const l=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let c=l[0]||Pr(R_);const h=Vu(s,e.config.apiKey,e.name);let m=null;for(const v of t)try{const k=await v._get(h);if(k){let T;if(typeof k=="string"){const I=await cc(e,{idToken:k}).catch(()=>{});if(!I)break;T=await jn._fromGetAccountInfoResponse(e,I,k)}else T=jn._fromJSON(e,k);v!==c&&(m=T),c=v;break}}catch{}const _=l.filter(v=>v._shouldAllowMigration);return!c._shouldAllowMigration||!_.length?new _o(c,e,s):(c=_[0],m&&await c._set(h,m.toJSON()),await Promise.all(t.map(async v=>{if(v!==c)try{await v._remove(h)}catch{}})),new _o(c,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ew(e))return"Blackberry";if(Sw(e))return"Webos";if(_w(e))return"Safari";if((e.includes("chrome/")||yw(e))&&!e.includes("edge/"))return"Chrome";if(ww(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if(s?.length===2)return s[1]}return"Other"}function gw(r=Vt()){return/firefox\//i.test(r)}function _w(r=Vt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yw(r=Vt()){return/crios\//i.test(r)}function vw(r=Vt()){return/iemobile/i.test(r)}function ww(r=Vt()){return/android/i.test(r)}function Ew(r=Vt()){return/blackberry/i.test(r)}function Sw(r=Vt()){return/webos/i.test(r)}function ep(r=Vt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function Vk(r=Vt()){return ep(r)&&!!window.navigator?.standalone}function zk(){return _E()&&document.documentMode===10}function Iw(r=Vt()){return ep(r)||ww(r)||Sw(r)||Ew(r)||/windows phone/i.test(r)||vw(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(r,e=[]){let t;switch(r){case"Browser":t=P_(Vt());break;case"Worker":t=`${P_(Vt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gs}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=c=>new Promise((h,m)=>{try{const _=e(c);h(_)}catch(_){m(_)}});s.onAbort=t,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const l of t)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wk(r,e={}){return Oo(r,"GET","/v2/passwordPolicy",Jf(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=6;class $k{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Hk,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),l&&(t.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,l,c){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,t,s,l){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new x_(this),this.idTokenSubscription=new x_(this),this.beforeStateQueue=new Bk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Pr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await _o.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cc(this,{idToken:e}),s=await jn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(bn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(h,h))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let s=t,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=this.redirectUser?._redirectEventId,h=s?._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===h)&&m?.user&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await hc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(is(this));const t=e?zt(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(is(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(is(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Pr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Wk(this),t=new $k(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ms("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await jk(this,s)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Pr(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await _o.create(this,[Pr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,l){if(this._deleted)return()=>{};const c=typeof t=="function"?t:t.next.bind(t);let h=!1;const m=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(m,this,"internal-error"),m.then(()=>{h||c(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,s,l);return()=>{h=!0,_()}}else{const _=e.addObserver(t);return()=>{h=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Ik(`Error while retrieving App Check token: ${e.error}`),e?.token}}function tp(r){return zt(r)}class x_{constructor(e){this.auth=e,this.observer=null,this.addObserver=kE(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let np={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function qk(r){np=r}function Kk(r){return np.loadJS(r)}function Yk(){return np.gapiScript}function Qk(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xk(r,e){const t=Ti(r,"auth");if(t.isInitialized()){const l=t.getImmediate(),c=t.getOptions();if(Dr(c,e??{}))return l;Mr(l,"already-initialized")}return t.initialize({options:e})}function Jk(r,e){const t=e?.persistence||[],s=(Array.isArray(t)?t:[t]).map(Pr);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e?.popupRedirectResolver)}function Zk(r,e,t){const s=tp(r);he(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,c=Tw(e),{host:h,port:m}=eN(e),_=m===null?"":`:${m}`,v={url:`${c}//${h}${_}/`},k=Object.freeze({host:h,port:m,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){he(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),he(Dr(v,s.config.emulator)&&Dr(k,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=v,s.emulatorConfig=k,s.settings.appVerificationDisabledForTesting=!0,ps(h)?(of(`${c}//${h}${_}`),lf("Auth",!0)):tN()}function Tw(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function eN(r){const e=Tw(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const c=l[1];return{host:c,port:D_(s.substr(c.length+1))}}else{const[c,h]=s.split(":");return{host:c,port:D_(h)}}}function D_(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function tN(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Rr("not implemented")}_getIdTokenResponse(e){return Rr("not implemented")}_linkToIdToken(e,t){return Rr("not implemented")}_getReauthenticationResolver(e){return Rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(r,e){return Pk(r,"POST","/v1/accounts:signInWithIdp",Jf(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nN="http://localhost";class ds extends kw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Mr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...c}=t;if(!s||!l)return null;const h=new ds(s,l);return h.idToken=c.idToken||void 0,h.accessToken=c.accessToken||void 0,h.secret=c.secret,h.nonce=c.nonce,h.pendingToken=c.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return yo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,yo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,yo(e,t)}buildRequest(){const e={requestUri:nN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ro(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Nw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends pa{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:hi.PROVIDER_ID,signInMethod:hi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hi.credentialFromTaggedObject(e)}static credentialFromError(e){return hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hi.credential(e.oauthAccessToken)}catch{return null}}}hi.FACEBOOK_SIGN_IN_METHOD="facebook.com";hi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ds._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return di.credential(t,s)}catch{return null}}}di.GOOGLE_SIGN_IN_METHOD="google.com";di.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi extends pa{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:fi.PROVIDER_ID,signInMethod:fi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fi.credentialFromTaggedObject(e)}static credentialFromError(e){return fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fi.credential(e.oauthAccessToken)}catch{return null}}}fi.GITHUB_SIGN_IN_METHOD="github.com";fi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends pa{constructor(){super("twitter.com")}static credential(e,t){return ds._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return pi.credential(t,s)}catch{return null}}}pi.TWITTER_SIGN_IN_METHOD="twitter.com";pi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,l=!1){const c=await jn._fromIdTokenResponse(e,s,l),h=O_(s);return new ko({user:c,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const l=O_(s);return new ko({user:e,providerId:l,_tokenResponse:s,operationType:t})}}function O_(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc extends Hn{constructor(e,t,s,l){super(t.code,t.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,dc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,l){return new dc(e,t,s,l)}}function Aw(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?dc._fromErrorAndOperation(r,c,e,s):c})}async function rN(r,e,t=!1){const s=await ra(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ko._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(r,e,t=!1){const{auth:s}=r;if(bn(s.app))return Promise.reject(is(s));const l="reauthenticate";try{const c=await ra(r,Aw(s,l,e,r),t);he(c.idToken,s,"internal-error");const h=Zf(c.idToken);he(h,s,"internal-error");const{sub:m}=h;return he(r.uid===m,s,"user-mismatch"),ko._forOperation(r,l,c)}catch(c){throw c?.code==="auth/user-not-found"&&Mr(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sN(r,e,t=!1){if(bn(r.app))return Promise.reject(is(r));const s="signIn",l=await Aw(r,s,e),c=await ko._fromIdTokenResponse(r,s,l);return t||await r._updateCurrentUser(c.user),c}function oN(r,e,t,s){return zt(r).onIdTokenChanged(e,t,s)}function lN(r,e,t){return zt(r).beforeAuthStateChanged(e,t)}const fc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(fc,"1"),this.storage.removeItem(fc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aN=1e3,uN=10;class Pw extends Rw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Iw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),l=this.localCache[t];s!==l&&e(t,l,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,m,_)=>{this.notifyListeners(h,_)});return}const s=e.key;t?this.detachListener():this.stopPolling();const l=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},c=this.storage.getItem(s);zk()&&c!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,uN):l()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},aN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pw.type="LOCAL";const cN=Pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw extends Rw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xw.type="SESSION";const Dw=xw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hN(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(l=>l.isListeningto(e));if(t)return t;const s=new Dc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:l,data:c}=t.data,h=this.handlersMap[l];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const m=Array.from(h).map(async v=>v(t.origin,c)),_=await hN(m);t.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let c,h;return new Promise((m,_)=>{const v=rp("",20);l.port1.start();const k=setTimeout(()=>{_(new Error("unsupported_event"))},s);h={messageChannel:l,onMessage(T){const I=T;if(I.data.eventId===v)switch(I.data.status){case"ack":clearTimeout(k),c=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),m(I.data.response);break;default:clearTimeout(k),clearTimeout(c),_(new Error("invalid_response"));break}}},this.handlers.add(h),l.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[l.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(){return window}function fN(r){sr().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(){return typeof sr().WorkerGlobalScope<"u"&&typeof sr().importScripts=="function"}async function pN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mN(){return navigator?.serviceWorker?.controller||null}function gN(){return Ow()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw="firebaseLocalStorageDb",_N=1,pc="firebaseLocalStorage",Mw="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oc(r,e){return r.transaction([pc],e?"readwrite":"readonly").objectStore(pc)}function yN(){const r=indexedDB.deleteDatabase(Lw);return new ma(r).toPromise()}function ef(){const r=indexedDB.open(Lw,_N);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(pc,{keyPath:Mw})}catch(l){t(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(pc)?e(s):(s.close(),await yN(),e(await ef()))})})}async function L_(r,e,t){const s=Oc(r,!0).put({[Mw]:e,value:t});return new ma(s).toPromise()}async function vN(r,e){const t=Oc(r,!1).get(e),s=await new ma(t).toPromise();return s===void 0?null:s.value}function M_(r,e){const t=Oc(r,!0).delete(e);return new ma(t).toPromise()}const wN=800,EN=3;class bw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ef(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>EN)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ow()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dc._getInstance(gN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await pN(),!this.activeServiceWorker)return;this.sender=new dN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||mN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ef();return await L_(e,fc,"1"),await M_(e,fc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>L_(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>vN(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>M_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const c=Oc(l,!1).getAll();return new ma(c).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:c}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(c)&&(this.notifyListeners(l,c),t.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),t.push(l));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bw.type="LOCAL";const SN=bw;new fa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(r,e){return e?Pr(e):(he(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends kw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return yo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return yo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return yo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function CN(r){return sN(r.auth,new ip(r),r.bypassAuthState)}function TN(r){const{auth:e,user:t}=r;return he(t,e,"internal-error"),iN(t,new ip(r),r.bypassAuthState)}async function kN(r){const{auth:e,user:t}=r;return he(t,e,"internal-error"),rN(t,new ip(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t,s,l,c=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:l,tenantId:c,error:h,type:m}=e;if(h){this.reject(h);return}const _={auth:this.auth,requestUri:t,sessionId:s,tenantId:c||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(m)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return CN;case"linkViaPopup":case"linkViaRedirect":return kN;case"reauthViaPopup":case"reauthViaRedirect":return TN;default:Mr(this.auth,"internal-error")}}resolve(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=new fa(2e3,1e4);class fo extends Fw{constructor(e,t,s,l,c){super(e,t,l,c),this.provider=s,this.authWindow=null,this.pollId=null,fo.currentPopupAction&&fo.currentPopupAction.cancel(),fo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){br(this.filter.length===1,"Popup operations only handle one event");const e=rp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ir(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ir(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,fo.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ir(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,NN.get())};e()}}fo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="pendingRedirect",zu=new Map;class RN extends Fw{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=zu.get(this.auth._key());if(!e){try{const s=await PN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}zu.set(this.auth._key(),e)}return this.bypassAuthState||zu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PN(r,e){const t=ON(e),s=DN(r);if(!await s._isAvailable())return!1;const l=await s._get(t)==="true";return await s._remove(t),l}function xN(r,e){zu.set(r._key(),e)}function DN(r){return Pr(r._redirectPersistence)}function ON(r){return Vu(AN,r.config.apiKey,r.name)}async function LN(r,e,t=!1){if(bn(r.app))return Promise.reject(is(r));const s=tp(r),l=IN(s,e),h=await new RN(s,l,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=600*1e3;class bN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FN(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Uw(e)){const s=e.error.code?.split("auth/")[1]||"internal-error";t.onError(ir(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MN&&this.cachedEventUids.clear(),this.cachedEventUids.has(b_(e))}saveEventToCache(e){this.cachedEventUids.add(b_(e)),this.lastProcessedEventTime=Date.now()}}function b_(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Uw({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function FN(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uw(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UN(r,e={}){return Oo(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VN=/^https?/;async function zN(r){if(r.config.emulator)return;const{authorizedDomains:e}=await UN(r);for(const t of e)try{if(BN(t))return}catch{}Mr(r,"unauthorized-domain")}function BN(r){const e=Jd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!VN.test(t))return!1;if(jN.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN=new fa(3e4,6e4);function F_(){const r=sr().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function HN(r){return new Promise((e,t)=>{function s(){F_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{F_(),t(ir(r,"network-request-failed"))},timeout:WN.get()})}if(sr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(sr().gapi?.load)s();else{const l=Qk("iframefcb");return sr()[l]=()=>{gapi.load?s():t(ir(r,"network-request-failed"))},Kk(`${Yk()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Bu=null,e})}let Bu=null;function $N(r){return Bu=Bu||HN(r),Bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=new fa(5e3,15e3),qN="__/auth/iframe",KN="emulator/auth/iframe",YN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XN(r){const e=r.config;he(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Xf(e,KN):`https://${r.config.authDomain}/${qN}`,s={apiKey:e.apiKey,appName:r.name,v:gs},l=QN.get(r.config.apiHost);l&&(s.eid=l);const c=r._getFrameworks();return c.length&&(s.fw=c.join(",")),`${t}?${Ro(s).slice(1)}`}async function JN(r){const e=await $N(r),t=sr().gapi;return he(t,r,"internal-error"),e.open({where:document.body,url:XN(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YN,dontclear:!0},s=>new Promise(async(l,c)=>{await s.restyle({setHideOnLeave:!1});const h=ir(r,"network-request-failed"),m=sr().setTimeout(()=>{c(h)},GN.get());function _(){sr().clearTimeout(m),l(s)}s.ping(_).then(_,()=>{c(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eA=500,tA=600,nA="_blank",rA="http://localhost";class U_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iA(r,e,t,s=eA,l=tA){const c=Math.max((window.screen.availHeight-l)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let m="";const _={...ZN,width:s.toString(),height:l.toString(),top:c,left:h},v=Vt().toLowerCase();t&&(m=yw(v)?nA:t),gw(v)&&(e=e||rA,_.scrollbars="yes");const k=Object.entries(_).reduce((I,[W,z])=>`${I}${W}=${z},`,"");if(Vk(v)&&m!=="_self")return sA(e||"",m),new U_(null);const T=window.open(e||"",m,k);he(T,r,"popup-blocked");try{T.focus()}catch{}return new U_(T)}function sA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oA="__/auth/handler",lA="emulator/auth/handler",aA=encodeURIComponent("fac");async function j_(r,e,t,s,l,c){he(r.config.authDomain,r,"auth-domain-config-required"),he(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:gs,eventId:l};if(e instanceof Nw){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",xd(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,T]of Object.entries({}))h[k]=T}if(e instanceof pa){const k=e.getScopes().filter(T=>T!=="");k.length>0&&(h.scopes=k.join(","))}r.tenantId&&(h.tid=r.tenantId);const m=h;for(const k of Object.keys(m))m[k]===void 0&&delete m[k];const _=await r._getAppCheckToken(),v=_?`#${aA}=${encodeURIComponent(_)}`:"";return`${uA(r)}?${Ro(m).slice(1)}${v}`}function uA({config:r}){return r.emulator?Xf(r,lA):`https://${r.authDomain}/${oA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="webStorageSupport";class cA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dw,this._completeRedirectFn=LN,this._overrideRedirectResult=xN}async _openPopup(e,t,s,l){br(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const c=await j_(e,t,s,Jd(),l);return iA(e,c,rp())}async _openRedirect(e,t,s,l){await this._originValidation(e);const c=await j_(e,t,s,Jd(),l);return fN(c),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:l,promise:c}=this.eventManagers[t];return l?Promise.resolve(l):(br(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await JN(e),s=new bN(e);return t.register("authEvent",l=>(he(l?.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ad,{type:Ad},l=>{const c=l?.[0]?.[Ad];c!==void 0&&t(!!c),Mr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zN(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Iw()||_w()||ep()}}const hA=cA;var V_="@firebase/auth",z_="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pA(r){Wn(new yn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),c=e.getProvider("app-check-internal"),{apiKey:h,authDomain:m}=s.options;he(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const _={apiKey:h,authDomain:m,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cw(r)},v=new Gk(s,l,c,_);return Jk(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Wn(new yn("auth-internal",e=>{const t=tp(e.getProvider("auth").getImmediate());return(s=>new dA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jt(V_,z_,fA(r)),Jt(V_,z_,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mA=300,gA=fy("authIdTokenMaxAge")||mA;let B_=null;const _A=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>gA)return;const l=t?.token;B_!==l&&(B_=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function yA(r=yc()){const e=Ti(r,"auth");if(e.isInitialized())return e.getImmediate();const t=Xk(r,{popupRedirectResolver:hA,persistence:[SN,cN,Dw]}),s=fy("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const h=_A(c.toString());lN(t,h,()=>h(t.currentUser)),oN(t,m=>h(m))}}const l=cy("auth");return l&&Zk(t,`http://${l}`),t}function vA(){return document.getElementsByTagName("head")?.[0]??document}qk({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const c=ir("internal-error");c.customData=l,t(c)},s.type="text/javascript",s.charset="UTF-8",vA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pA("Browser");var W_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sp;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(D,S){function N(){}N.prototype=S.prototype,D.D=S.prototype,D.prototype=new N,D.prototype.constructor=D,D.C=function(P,x,L){for(var C=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)C[Ze-2]=arguments[Ze];return S.prototype[x].apply(P,C)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(D,S,N){N||(N=0);var P=Array(16);if(typeof S=="string")for(var x=0;16>x;++x)P[x]=S.charCodeAt(N++)|S.charCodeAt(N++)<<8|S.charCodeAt(N++)<<16|S.charCodeAt(N++)<<24;else for(x=0;16>x;++x)P[x]=S[N++]|S[N++]<<8|S[N++]<<16|S[N++]<<24;S=D.g[0],N=D.g[1],x=D.g[2];var L=D.g[3],C=S+(L^N&(x^L))+P[0]+3614090360&4294967295;S=N+(C<<7&4294967295|C>>>25),C=L+(x^S&(N^x))+P[1]+3905402710&4294967295,L=S+(C<<12&4294967295|C>>>20),C=x+(N^L&(S^N))+P[2]+606105819&4294967295,x=L+(C<<17&4294967295|C>>>15),C=N+(S^x&(L^S))+P[3]+3250441966&4294967295,N=x+(C<<22&4294967295|C>>>10),C=S+(L^N&(x^L))+P[4]+4118548399&4294967295,S=N+(C<<7&4294967295|C>>>25),C=L+(x^S&(N^x))+P[5]+1200080426&4294967295,L=S+(C<<12&4294967295|C>>>20),C=x+(N^L&(S^N))+P[6]+2821735955&4294967295,x=L+(C<<17&4294967295|C>>>15),C=N+(S^x&(L^S))+P[7]+4249261313&4294967295,N=x+(C<<22&4294967295|C>>>10),C=S+(L^N&(x^L))+P[8]+1770035416&4294967295,S=N+(C<<7&4294967295|C>>>25),C=L+(x^S&(N^x))+P[9]+2336552879&4294967295,L=S+(C<<12&4294967295|C>>>20),C=x+(N^L&(S^N))+P[10]+4294925233&4294967295,x=L+(C<<17&4294967295|C>>>15),C=N+(S^x&(L^S))+P[11]+2304563134&4294967295,N=x+(C<<22&4294967295|C>>>10),C=S+(L^N&(x^L))+P[12]+1804603682&4294967295,S=N+(C<<7&4294967295|C>>>25),C=L+(x^S&(N^x))+P[13]+4254626195&4294967295,L=S+(C<<12&4294967295|C>>>20),C=x+(N^L&(S^N))+P[14]+2792965006&4294967295,x=L+(C<<17&4294967295|C>>>15),C=N+(S^x&(L^S))+P[15]+1236535329&4294967295,N=x+(C<<22&4294967295|C>>>10),C=S+(x^L&(N^x))+P[1]+4129170786&4294967295,S=N+(C<<5&4294967295|C>>>27),C=L+(N^x&(S^N))+P[6]+3225465664&4294967295,L=S+(C<<9&4294967295|C>>>23),C=x+(S^N&(L^S))+P[11]+643717713&4294967295,x=L+(C<<14&4294967295|C>>>18),C=N+(L^S&(x^L))+P[0]+3921069994&4294967295,N=x+(C<<20&4294967295|C>>>12),C=S+(x^L&(N^x))+P[5]+3593408605&4294967295,S=N+(C<<5&4294967295|C>>>27),C=L+(N^x&(S^N))+P[10]+38016083&4294967295,L=S+(C<<9&4294967295|C>>>23),C=x+(S^N&(L^S))+P[15]+3634488961&4294967295,x=L+(C<<14&4294967295|C>>>18),C=N+(L^S&(x^L))+P[4]+3889429448&4294967295,N=x+(C<<20&4294967295|C>>>12),C=S+(x^L&(N^x))+P[9]+568446438&4294967295,S=N+(C<<5&4294967295|C>>>27),C=L+(N^x&(S^N))+P[14]+3275163606&4294967295,L=S+(C<<9&4294967295|C>>>23),C=x+(S^N&(L^S))+P[3]+4107603335&4294967295,x=L+(C<<14&4294967295|C>>>18),C=N+(L^S&(x^L))+P[8]+1163531501&4294967295,N=x+(C<<20&4294967295|C>>>12),C=S+(x^L&(N^x))+P[13]+2850285829&4294967295,S=N+(C<<5&4294967295|C>>>27),C=L+(N^x&(S^N))+P[2]+4243563512&4294967295,L=S+(C<<9&4294967295|C>>>23),C=x+(S^N&(L^S))+P[7]+1735328473&4294967295,x=L+(C<<14&4294967295|C>>>18),C=N+(L^S&(x^L))+P[12]+2368359562&4294967295,N=x+(C<<20&4294967295|C>>>12),C=S+(N^x^L)+P[5]+4294588738&4294967295,S=N+(C<<4&4294967295|C>>>28),C=L+(S^N^x)+P[8]+2272392833&4294967295,L=S+(C<<11&4294967295|C>>>21),C=x+(L^S^N)+P[11]+1839030562&4294967295,x=L+(C<<16&4294967295|C>>>16),C=N+(x^L^S)+P[14]+4259657740&4294967295,N=x+(C<<23&4294967295|C>>>9),C=S+(N^x^L)+P[1]+2763975236&4294967295,S=N+(C<<4&4294967295|C>>>28),C=L+(S^N^x)+P[4]+1272893353&4294967295,L=S+(C<<11&4294967295|C>>>21),C=x+(L^S^N)+P[7]+4139469664&4294967295,x=L+(C<<16&4294967295|C>>>16),C=N+(x^L^S)+P[10]+3200236656&4294967295,N=x+(C<<23&4294967295|C>>>9),C=S+(N^x^L)+P[13]+681279174&4294967295,S=N+(C<<4&4294967295|C>>>28),C=L+(S^N^x)+P[0]+3936430074&4294967295,L=S+(C<<11&4294967295|C>>>21),C=x+(L^S^N)+P[3]+3572445317&4294967295,x=L+(C<<16&4294967295|C>>>16),C=N+(x^L^S)+P[6]+76029189&4294967295,N=x+(C<<23&4294967295|C>>>9),C=S+(N^x^L)+P[9]+3654602809&4294967295,S=N+(C<<4&4294967295|C>>>28),C=L+(S^N^x)+P[12]+3873151461&4294967295,L=S+(C<<11&4294967295|C>>>21),C=x+(L^S^N)+P[15]+530742520&4294967295,x=L+(C<<16&4294967295|C>>>16),C=N+(x^L^S)+P[2]+3299628645&4294967295,N=x+(C<<23&4294967295|C>>>9),C=S+(x^(N|~L))+P[0]+4096336452&4294967295,S=N+(C<<6&4294967295|C>>>26),C=L+(N^(S|~x))+P[7]+1126891415&4294967295,L=S+(C<<10&4294967295|C>>>22),C=x+(S^(L|~N))+P[14]+2878612391&4294967295,x=L+(C<<15&4294967295|C>>>17),C=N+(L^(x|~S))+P[5]+4237533241&4294967295,N=x+(C<<21&4294967295|C>>>11),C=S+(x^(N|~L))+P[12]+1700485571&4294967295,S=N+(C<<6&4294967295|C>>>26),C=L+(N^(S|~x))+P[3]+2399980690&4294967295,L=S+(C<<10&4294967295|C>>>22),C=x+(S^(L|~N))+P[10]+4293915773&4294967295,x=L+(C<<15&4294967295|C>>>17),C=N+(L^(x|~S))+P[1]+2240044497&4294967295,N=x+(C<<21&4294967295|C>>>11),C=S+(x^(N|~L))+P[8]+1873313359&4294967295,S=N+(C<<6&4294967295|C>>>26),C=L+(N^(S|~x))+P[15]+4264355552&4294967295,L=S+(C<<10&4294967295|C>>>22),C=x+(S^(L|~N))+P[6]+2734768916&4294967295,x=L+(C<<15&4294967295|C>>>17),C=N+(L^(x|~S))+P[13]+1309151649&4294967295,N=x+(C<<21&4294967295|C>>>11),C=S+(x^(N|~L))+P[4]+4149444226&4294967295,S=N+(C<<6&4294967295|C>>>26),C=L+(N^(S|~x))+P[11]+3174756917&4294967295,L=S+(C<<10&4294967295|C>>>22),C=x+(S^(L|~N))+P[2]+718787259&4294967295,x=L+(C<<15&4294967295|C>>>17),C=N+(L^(x|~S))+P[9]+3951481745&4294967295,D.g[0]=D.g[0]+S&4294967295,D.g[1]=D.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,D.g[2]=D.g[2]+x&4294967295,D.g[3]=D.g[3]+L&4294967295}s.prototype.u=function(D,S){S===void 0&&(S=D.length);for(var N=S-this.blockSize,P=this.B,x=this.h,L=0;L<S;){if(x==0)for(;L<=N;)l(this,D,L),L+=this.blockSize;if(typeof D=="string"){for(;L<S;)if(P[x++]=D.charCodeAt(L++),x==this.blockSize){l(this,P),x=0;break}}else for(;L<S;)if(P[x++]=D[L++],x==this.blockSize){l(this,P),x=0;break}}this.h=x,this.o+=S},s.prototype.v=function(){var D=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);D[0]=128;for(var S=1;S<D.length-8;++S)D[S]=0;var N=8*this.o;for(S=D.length-8;S<D.length;++S)D[S]=N&255,N/=256;for(this.u(D),D=Array(16),S=N=0;4>S;++S)for(var P=0;32>P;P+=8)D[N++]=this.g[S]>>>P&255;return D};function c(D,S){var N=m;return Object.prototype.hasOwnProperty.call(N,D)?N[D]:N[D]=S(D)}function h(D,S){this.h=S;for(var N=[],P=!0,x=D.length-1;0<=x;x--){var L=D[x]|0;P&&L==S||(N[x]=L,P=!1)}this.g=N}var m={};function _(D){return-128<=D&&128>D?c(D,function(S){return new h([S|0],0>S?-1:0)}):new h([D|0],0>D?-1:0)}function v(D){if(isNaN(D)||!isFinite(D))return T;if(0>D)return Q(v(-D));for(var S=[],N=1,P=0;D>=N;P++)S[P]=D/N|0,N*=4294967296;return new h(S,0)}function k(D,S){if(D.length==0)throw Error("number format error: empty string");if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(D.charAt(0)=="-")return Q(k(D.substring(1),S));if(0<=D.indexOf("-"))throw Error('number format error: interior "-" character');for(var N=v(Math.pow(S,8)),P=T,x=0;x<D.length;x+=8){var L=Math.min(8,D.length-x),C=parseInt(D.substring(x,x+L),S);8>L?(L=v(Math.pow(S,L)),P=P.j(L).add(v(C))):(P=P.j(N),P=P.add(v(C)))}return P}var T=_(0),I=_(1),W=_(16777216);r=h.prototype,r.m=function(){if(q(this))return-Q(this).m();for(var D=0,S=1,N=0;N<this.g.length;N++){var P=this.i(N);D+=(0<=P?P:4294967296+P)*S,S*=4294967296}return D},r.toString=function(D){if(D=D||10,2>D||36<D)throw Error("radix out of range: "+D);if(z(this))return"0";if(q(this))return"-"+Q(this).toString(D);for(var S=v(Math.pow(D,6)),N=this,P="";;){var x=Pe(N,S).g;N=de(N,x.j(S));var L=((0<N.g.length?N.g[0]:N.h)>>>0).toString(D);if(N=x,z(N))return L+P;for(;6>L.length;)L="0"+L;P=L+P}},r.i=function(D){return 0>D?0:D<this.g.length?this.g[D]:this.h};function z(D){if(D.h!=0)return!1;for(var S=0;S<D.g.length;S++)if(D.g[S]!=0)return!1;return!0}function q(D){return D.h==-1}r.l=function(D){return D=de(this,D),q(D)?-1:z(D)?0:1};function Q(D){for(var S=D.g.length,N=[],P=0;P<S;P++)N[P]=~D.g[P];return new h(N,~D.h).add(I)}r.abs=function(){return q(this)?Q(this):this},r.add=function(D){for(var S=Math.max(this.g.length,D.g.length),N=[],P=0,x=0;x<=S;x++){var L=P+(this.i(x)&65535)+(D.i(x)&65535),C=(L>>>16)+(this.i(x)>>>16)+(D.i(x)>>>16);P=C>>>16,L&=65535,C&=65535,N[x]=C<<16|L}return new h(N,N[N.length-1]&-2147483648?-1:0)};function de(D,S){return D.add(Q(S))}r.j=function(D){if(z(this)||z(D))return T;if(q(this))return q(D)?Q(this).j(Q(D)):Q(Q(this).j(D));if(q(D))return Q(this.j(Q(D)));if(0>this.l(W)&&0>D.l(W))return v(this.m()*D.m());for(var S=this.g.length+D.g.length,N=[],P=0;P<2*S;P++)N[P]=0;for(P=0;P<this.g.length;P++)for(var x=0;x<D.g.length;x++){var L=this.i(P)>>>16,C=this.i(P)&65535,Ze=D.i(x)>>>16,Nt=D.i(x)&65535;N[2*P+2*x]+=C*Nt,fe(N,2*P+2*x),N[2*P+2*x+1]+=L*Nt,fe(N,2*P+2*x+1),N[2*P+2*x+1]+=C*Ze,fe(N,2*P+2*x+1),N[2*P+2*x+2]+=L*Ze,fe(N,2*P+2*x+2)}for(P=0;P<S;P++)N[P]=N[2*P+1]<<16|N[2*P];for(P=S;P<2*S;P++)N[P]=0;return new h(N,0)};function fe(D,S){for(;(D[S]&65535)!=D[S];)D[S+1]+=D[S]>>>16,D[S]&=65535,S++}function ve(D,S){this.g=D,this.h=S}function Pe(D,S){if(z(S))throw Error("division by zero");if(z(D))return new ve(T,T);if(q(D))return S=Pe(Q(D),S),new ve(Q(S.g),Q(S.h));if(q(S))return S=Pe(D,Q(S)),new ve(Q(S.g),S.h);if(30<D.g.length){if(q(D)||q(S))throw Error("slowDivide_ only works with positive integers.");for(var N=I,P=S;0>=P.l(D);)N=ht(N),P=ht(P);var x=Le(N,1),L=Le(P,1);for(P=Le(P,2),N=Le(N,2);!z(P);){var C=L.add(P);0>=C.l(D)&&(x=x.add(N),L=C),P=Le(P,1),N=Le(N,1)}return S=de(D,x.j(S)),new ve(x,S)}for(x=T;0<=D.l(S);){for(N=Math.max(1,Math.floor(D.m()/S.m())),P=Math.ceil(Math.log(N)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),L=v(N),C=L.j(S);q(C)||0<C.l(D);)N-=P,L=v(N),C=L.j(S);z(L)&&(L=I),x=x.add(L),D=de(D,C)}return new ve(x,D)}r.A=function(D){return Pe(this,D).h},r.and=function(D){for(var S=Math.max(this.g.length,D.g.length),N=[],P=0;P<S;P++)N[P]=this.i(P)&D.i(P);return new h(N,this.h&D.h)},r.or=function(D){for(var S=Math.max(this.g.length,D.g.length),N=[],P=0;P<S;P++)N[P]=this.i(P)|D.i(P);return new h(N,this.h|D.h)},r.xor=function(D){for(var S=Math.max(this.g.length,D.g.length),N=[],P=0;P<S;P++)N[P]=this.i(P)^D.i(P);return new h(N,this.h^D.h)};function ht(D){for(var S=D.g.length+1,N=[],P=0;P<S;P++)N[P]=D.i(P)<<1|D.i(P-1)>>>31;return new h(N,D.h)}function Le(D,S){var N=S>>5;S%=32;for(var P=D.g.length-N,x=[],L=0;L<P;L++)x[L]=0<S?D.i(L+N)>>>S|D.i(L+N+1)<<32-S:D.i(L+N);return new h(x,D.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=v,h.fromString=k,sp=h}).apply(typeof W_<"u"?W_:typeof self<"u"?self:typeof window<"u"?window:{});var bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,f,g){return a==Array.prototype||a==Object.prototype||(a[f]=g.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof bu=="object"&&bu];for(var f=0;f<a.length;++f){var g=a[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=t(this);function l(a,f){if(f)e:{var g=s;a=a.split(".");for(var w=0;w<a.length-1;w++){var M=a[w];if(!(M in g))break e;g=g[M]}a=a[a.length-1],w=g[a],f=f(w),f!=w&&f!=null&&e(g,a,{configurable:!0,writable:!0,value:f})}}function c(a,f){a instanceof String&&(a+="");var g=0,w=!1,M={next:function(){if(!w&&g<a.length){var j=g++;return{value:f(j,a[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return M[Symbol.iterator]=function(){return M},M}l("Array.prototype.values",function(a){return a||function(){return c(this,function(f,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function _(a){var f=typeof a;return f=f!="object"?f:a?Array.isArray(a)?"array":f:"null",f=="array"||f=="object"&&typeof a.length=="number"}function v(a){var f=typeof a;return f=="object"&&a!=null||f=="function"}function k(a,f,g){return a.call.apply(a.bind,arguments)}function T(a,f,g){if(!a)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var M=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(M,w),a.apply(f,M)}}return function(){return a.apply(f,arguments)}}function I(a,f,g){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:T,I.apply(null,arguments)}function W(a,f){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),a.apply(this,w)}}function z(a,f){function g(){}g.prototype=f.prototype,a.aa=f.prototype,a.prototype=new g,a.prototype.constructor=a,a.Qb=function(w,M,j){for(var Y=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)Y[Me-2]=arguments[Me];return f.prototype[M].apply(w,Y)}}function q(a){const f=a.length;if(0<f){const g=Array(f);for(let w=0;w<f;w++)g[w]=a[w];return g}return[]}function Q(a,f){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(_(w)){const M=a.length||0,j=w.length||0;a.length=M+j;for(let Y=0;Y<j;Y++)a[M+Y]=w[Y]}else a.push(w)}}class de{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function fe(a){return/^[\s\xa0]*$/.test(a)}function ve(){var a=m.navigator;return a&&(a=a.userAgent)?a:""}function Pe(a){return Pe[" "](a),a}Pe[" "]=function(){};var ht=ve().indexOf("Gecko")!=-1&&!(ve().toLowerCase().indexOf("webkit")!=-1&&ve().indexOf("Edge")==-1)&&!(ve().indexOf("Trident")!=-1||ve().indexOf("MSIE")!=-1)&&ve().indexOf("Edge")==-1;function Le(a,f,g){for(const w in a)f.call(g,a[w],w,a)}function D(a,f){for(const g in a)f.call(void 0,a[g],g,a)}function S(a){const f={};for(const g in a)f[g]=a[g];return f}const N="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(a,f){let g,w;for(let M=1;M<arguments.length;M++){w=arguments[M];for(g in w)a[g]=w[g];for(let j=0;j<N.length;j++)g=N[j],Object.prototype.hasOwnProperty.call(w,g)&&(a[g]=w[g])}}function x(a){var f=1;a=a.split(":");const g=[];for(;0<f&&a.length;)g.push(a.shift()),f--;return a.length&&g.push(a.join(":")),g}function L(a){m.setTimeout(()=>{throw a},0)}function C(){var a=oe;let f=null;return a.g&&(f=a.g,a.g=a.g.next,a.g||(a.h=null),f.next=null),f}class Ze{constructor(){this.h=this.g=null}add(f,g){const w=Nt.get();w.set(f,g),this.h?this.h.next=w:this.g=w,this.h=w}}var Nt=new de(()=>new At,a=>a.reset());class At{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let be,X=!1,oe=new Ze,Z=()=>{const a=m.Promise.resolve(void 0);be=()=>{a.then(O)}};var O=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(g){L(g)}var f=Nt;f.j(a),100>f.h&&(f.h++,a.next=f.g,f.g=a)}X=!1};function V(){this.s=this.s,this.C=this.C}V.prototype.s=!1,V.prototype.ma=function(){this.s||(this.s=!0,this.N())},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(a,f){this.type=a,this.g=this.target=f,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var pe=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var a=!1,f=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const g=()=>{};m.addEventListener("test",g,f),m.removeEventListener("test",g,f)}catch{}return a}();function me(a,f){if(se.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var g=this.type=a.type,w=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=f,f=a.relatedTarget){if(ht){e:{try{Pe(f.nodeName);var M=!0;break e}catch{}M=!1}M||(f=null)}}else g=="mouseover"?f=a.fromElement:g=="mouseout"&&(f=a.toElement);this.relatedTarget=f,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Se[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&me.aa.h.call(this)}}z(me,se);var Se={2:"touch",3:"pen",4:"mouse"};me.prototype.h=function(){me.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),De=0;function je(a,f,g,w,M){this.listener=a,this.proxy=null,this.src=f,this.type=g,this.capture=!!w,this.ha=M,this.key=++De,this.da=this.fa=!1}function dt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function lr(a){this.src=a,this.g={},this.h=0}lr.prototype.add=function(a,f,g,w,M){var j=a.toString();a=this.g[j],a||(a=this.g[j]=[],this.h++);var Y=Ur(a,f,w,M);return-1<Y?(f=a[Y],g||(f.fa=!1)):(f=new je(f,this.src,j,!!w,M),f.fa=g,a.push(f)),f};function vs(a,f){var g=f.type;if(g in a.g){var w=a.g[g],M=Array.prototype.indexOf.call(w,f,void 0),j;(j=0<=M)&&Array.prototype.splice.call(w,M,1),j&&(dt(f),a.g[g].length==0&&(delete a.g[g],a.h--))}}function Ur(a,f,g,w){for(var M=0;M<a.length;++M){var j=a[M];if(!j.da&&j.listener==f&&j.capture==!!g&&j.ha==w)return M}return-1}var ki="closure_lm_"+(1e6*Math.random()|0),ws={};function Lo(a,f,g,w,M){if(Array.isArray(f)){for(var j=0;j<f.length;j++)Lo(a,f[j],g,w,M);return null}return g=Fo(g),a&&a[xe]?a.K(f,g,v(w)?!!w.capture:!1,M):Mo(a,f,g,!1,w,M)}function Mo(a,f,g,w,M,j){if(!f)throw Error("Invalid event type");var Y=v(M)?!!M.capture:!!M,Me=Ss(a);if(Me||(a[ki]=Me=new lr(a)),g=Me.add(f,g,w,Y,j),g.proxy)return g;if(w=ya(),g.proxy=w,w.src=a,w.listener=g,a.addEventListener)pe||(M=Y),M===void 0&&(M=!1),a.addEventListener(f.toString(),w,M);else if(a.attachEvent)a.attachEvent(ur(f.toString()),w);else if(a.addListener&&a.removeListener)a.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ya(){function a(g){return f.call(a.src,a.listener,g)}const f=bo;return a}function Es(a,f,g,w,M){if(Array.isArray(f))for(var j=0;j<f.length;j++)Es(a,f[j],g,w,M);else w=v(w)?!!w.capture:!!w,g=Fo(g),a&&a[xe]?(a=a.i,f=String(f).toString(),f in a.g&&(j=a.g[f],g=Ur(j,g,w,M),-1<g&&(dt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete a.g[f],a.h--)))):a&&(a=Ss(a))&&(f=a.g[f.toString()],a=-1,f&&(a=Ur(f,g,w,M)),(g=-1<a?f[a]:null)&&ar(g))}function ar(a){if(typeof a!="number"&&a&&!a.da){var f=a.src;if(f&&f[xe])vs(f.i,a);else{var g=a.type,w=a.proxy;f.removeEventListener?f.removeEventListener(g,w,a.capture):f.detachEvent?f.detachEvent(ur(g),w):f.addListener&&f.removeListener&&f.removeListener(w),(g=Ss(f))?(vs(g,a),g.h==0&&(g.src=null,f[ki]=null)):dt(a)}}}function ur(a){return a in ws?ws[a]:ws[a]="on"+a}function bo(a,f){if(a.da)a=!0;else{f=new me(f,this);var g=a.listener,w=a.ha||a.src;a.fa&&ar(a),a=g.call(w,f)}return a}function Ss(a){return a=a[ki],a instanceof lr?a:null}var Is="__closure_events_fn_"+(1e9*Math.random()>>>0);function Fo(a){return typeof a=="function"?a:(a[Is]||(a[Is]=function(f){return a.handleEvent(f)}),a[Is])}function it(){V.call(this),this.i=new lr(this),this.M=this,this.F=null}z(it,V),it.prototype[xe]=!0,it.prototype.removeEventListener=function(a,f,g,w){Es(this,a,f,g,w)};function st(a,f){var g,w=a.F;if(w)for(g=[];w;w=w.F)g.push(w);if(a=a.M,w=f.type||f,typeof f=="string")f=new se(f,a);else if(f instanceof se)f.target=f.target||a;else{var M=f;f=new se(w,a),P(f,M)}if(M=!0,g)for(var j=g.length-1;0<=j;j--){var Y=f.g=g[j];M=cr(Y,w,!0,f)&&M}if(Y=f.g=a,M=cr(Y,w,!0,f)&&M,M=cr(Y,w,!1,f)&&M,g)for(j=0;j<g.length;j++)Y=f.g=g[j],M=cr(Y,w,!1,f)&&M}it.prototype.N=function(){if(it.aa.N.call(this),this.i){var a=this.i,f;for(f in a.g){for(var g=a.g[f],w=0;w<g.length;w++)dt(g[w]);delete a.g[f],a.h--}}this.F=null},it.prototype.K=function(a,f,g,w){return this.i.add(String(a),f,!1,g,w)},it.prototype.L=function(a,f,g,w){return this.i.add(String(a),f,!0,g,w)};function cr(a,f,g,w){if(f=a.i.g[String(f)],!f)return!0;f=f.concat();for(var M=!0,j=0;j<f.length;++j){var Y=f[j];if(Y&&!Y.da&&Y.capture==g){var Me=Y.listener,ot=Y.ha||Y.src;Y.fa&&vs(a.i,Y),M=Me.call(ot,w)!==!1&&M}}return M&&!w.defaultPrevented}function Uo(a,f,g){if(typeof a=="function")g&&(a=I(a,g));else if(a&&typeof a.handleEvent=="function")a=I(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:m.setTimeout(a,f||0)}function jr(a){a.g=Uo(()=>{a.g=null,a.i&&(a.i=!1,jr(a))},a.l);const f=a.h;a.h=null,a.m.apply(null,f)}class Ni extends V{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:jr(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(a){V.call(this),this.h=a,this.g={}}z(Ai,V);var jo=[];function Vo(a){Le(a.g,function(f,g){this.g.hasOwnProperty(g)&&ar(f)},a),a.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Vo(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zo=m.JSON.stringify,Bo=m.JSON.parse,Wo=class{stringify(a){return m.JSON.stringify(a,void 0)}parse(a){return m.JSON.parse(a,void 0)}};function Ri(){}Ri.prototype.h=null;function Cs(a){return a.h||(a.h=a.i())}function Ho(){}var an={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function $n(){se.call(this,"d")}z($n,se);function Ts(){se.call(this,"c")}z(Ts,se);var hr={},$o=null;function ks(){return $o=$o||new it}hr.La="serverreachability";function Go(a){se.call(this,hr.La,a)}z(Go,se);function dr(a){const f=ks();st(f,new Go(f))}hr.STAT_EVENT="statevent";function qo(a,f){se.call(this,hr.STAT_EVENT,a),this.stat=f}z(qo,se);function et(a){const f=ks();st(f,new qo(f,a))}hr.Ma="timingevent";function Ns(a,f){se.call(this,hr.Ma,a),this.size=f}z(Ns,se);function wn(a,f){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){a()},f)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function xi(a,f,g,w,M,j){a.info(function(){if(a.g)if(j)for(var Y="",Me=j.split("&"),ot=0;ot<Me.length;ot++){var Ie=Me[ot].split("=");if(1<Ie.length){var ft=Ie[0];Ie=Ie[1];var pt=ft.split("_");Y=2<=pt.length&&pt[1]=="type"?Y+(ft+"="+Ie+"&"):Y+(ft+"=redacted&")}}else Y=null;else Y=j;return"XMLHTTP REQ ("+w+") [attempt "+M+"]: "+f+`
`+g+`
`+Y})}function As(a,f,g,w,M,j,Y){a.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+M+"]: "+f+`
`+g+`
`+j+" "+Y})}function En(a,f,g,w){a.info(function(){return"XMLHTTP TEXT ("+f+"): "+Lc(a,g)+(w?" "+w:"")})}function Ko(a,f){a.info(function(){return"TIMEOUT: "+f})}Pi.prototype.info=function(){};function Lc(a,f){if(!a.g)return f;if(!f)return null;try{var g=JSON.parse(f);if(g){for(a=0;a<g.length;a++)if(Array.isArray(g[a])){var w=g[a];if(!(2>w.length)){var M=w[1];if(Array.isArray(M)&&!(1>M.length)){var j=M[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Y=1;Y<M.length;Y++)M[Y]=""}}}}return zo(g)}catch{return f}}var Yo={NO_ERROR:0,TIMEOUT:8},Mc={},Sn;function Di(){}z(Di,Ri),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},Sn=new Di;function In(a,f,g,w){this.j=a,this.i=f,this.l=g,this.R=w||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new va}function va(){this.i=null,this.g="",this.h=!1}var Qo={},Rs={};function Ps(a,f,g){a.L=1,a.v=Hr(tn(f)),a.m=g,a.P=!0,Xo(a,null)}function Xo(a,f){a.F=Date.now(),Ve(a),a.A=tn(a.v);var g=a.A,w=a.R;Array.isArray(w)||(w=[String(w)]),Gr(g.i,"t",w),a.C=0,g=a.j.J,a.h=new va,a.g=Fa(a.j,g?f:null,!a.m),0<a.O&&(a.M=new Ni(I(a.Y,a,a.g),a.O)),f=a.U,g=a.g,w=a.ca;var M="readystatechange";Array.isArray(M)||(M&&(jo[0]=M.toString()),M=jo);for(var j=0;j<M.length;j++){var Y=Lo(g,M[j],w||f.handleEvent,!1,f.h||f);if(!Y)break;f.g[Y.key]=Y}f=a.H?S(a.H):{},a.m?(a.u||(a.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,f)):(a.u="GET",a.g.ea(a.A,a.u,null,f)),dr(),xi(a.i,a.u,a.A,a.l,a.R,a.m)}In.prototype.ca=function(a){a=a.target;const f=this.M;f&&Wt(a)==3?f.j():this.Y(a)},In.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Wt(this.g);var f=this.g.Ba();const Qn=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||rl(this.g)))){this.J||pt!=4||f==7||(f==8||0>=Qn?dr(3):dr(2)),Oi(this);var g=this.g.Z();this.X=g;t:if(wa(this)){var w=rl(this.g);a="";var M=w.length,j=Wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){un(this),Vr(this);var Y="";break t}this.h.i=new m.TextDecoder}for(f=0;f<M;f++)this.h.h=!0,a+=this.h.i.decode(w[f],{stream:!(j&&f==M-1)});w.length=0,this.h.g+=a,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=g==200,As(this.i,this.u,this.A,this.l,this.R,pt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,ot=this.g;if((Me=ot.g?ot.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!fe(Me)){var Ie=Me;break t}}Ie=null}if(g=Ie)En(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jo(this,g);else{this.o=!1,this.s=3,et(12),un(this),Vr(this);break e}}if(this.P){g=!0;let St;for(;!this.J&&this.C<Y.length;)if(St=bc(this,Y),St==Rs){pt==4&&(this.s=4,et(14),g=!1),En(this.i,this.l,null,"[Incomplete Response]");break}else if(St==Qo){this.s=4,et(15),En(this.i,this.l,Y,"[Invalid Chunk]"),g=!1;break}else En(this.i,this.l,St,null),Jo(this,St);if(wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||Y.length!=0||this.h.h||(this.s=1,et(16),g=!1),this.o=this.o&&g,!g)En(this.i,this.l,Y,"[Invalid Chunked Response]"),un(this),Vr(this);else if(0<Y.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),sl(ft),ft.M=!0,et(11))}}else En(this.i,this.l,Y,null),Jo(this,Y);pt==4&&un(this),this.o&&!this.J&&(pt==4?zs(this.j,this):(this.o=!1,Ve(this)))}else bs(this.g),g==400&&0<Y.indexOf("Unknown SID")?(this.s=3,et(12)):(this.s=0,et(13)),un(this),Vr(this)}}}catch{}finally{}};function wa(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function bc(a,f){var g=a.C,w=f.indexOf(`
`,g);return w==-1?Rs:(g=Number(f.substring(g,w)),isNaN(g)?Qo:(w+=1,w+g>f.length?Rs:(f=f.slice(w,w+g),a.C=w+g,f)))}In.prototype.cancel=function(){this.J=!0,un(this)};function Ve(a){a.S=Date.now()+a.I,Ea(a,a.I)}function Ea(a,f){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wn(I(a.ba,a),f)}function Oi(a){a.B&&(m.clearTimeout(a.B),a.B=null)}In.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ko(this.i,this.A),this.L!=2&&(dr(),et(17)),un(this),this.s=2,Vr(this)):Ea(this,this.S-a)};function Vr(a){a.j.G==0||a.J||zs(a.j,a)}function un(a){Oi(a);var f=a.M;f&&typeof f.ma=="function"&&f.ma(),a.M=null,Vo(a.U),a.g&&(f=a.g,a.g=null,f.abort(),f.ma())}function Jo(a,f){try{var g=a.j;if(g.G!=0&&(g.g==a||Ot(g.h,a))){if(!a.K&&Ot(g.h,a)&&g.G==3){try{var w=g.Da.g.parse(f)}catch{w=null}if(Array.isArray(w)&&w.length==3){var M=w;if(M[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<a.F)Vs(g),An(g);else break e;js(g),et(18)}}else g.za=M[1],0<g.za-g.T&&37500>M[2]&&g.F&&g.v==0&&!g.C&&(g.C=wn(I(g.Za,g),6e3));if(1>=Ia(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else _r(g,11)}else if((a.K||g.g==a)&&Vs(g),!fe(f))for(M=g.Da.g.parse(f),f=0;f<M.length;f++){let Ie=M[f];if(g.T=Ie[0],Ie=Ie[1],g.G==2)if(Ie[0]=="c"){g.K=Ie[1],g.ia=Ie[2];const ft=Ie[3];ft!=null&&(g.la=ft,g.j.info("VER="+g.la));const pt=Ie[4];pt!=null&&(g.Aa=pt,g.j.info("SVER="+g.Aa));const Qn=Ie[5];Qn!=null&&typeof Qn=="number"&&0<Qn&&(w=1.5*Qn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const St=a.g;if(St){const Bs=St.g?St.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bs){var j=w.h;j.g||Bs.indexOf("spdy")==-1&&Bs.indexOf("quic")==-1&&Bs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Zo(j,j.h),j.h=null))}if(w.D){const Ws=St.g?St.g.getResponseHeader("X-HTTP-Session-Id"):null;Ws&&(w.ya=Ws,Ue(w.I,w.D,Ws))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-a.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var Y=a;if(w.qa=ba(w,w.J?w.ia:null,w.W),Y.K){Ca(w.h,Y);var Me=Y,ot=w.L;ot&&(Me.I=ot),Me.B&&(Oi(Me),Ve(Me)),w.g=Y}else ji(w);0<g.i.length&&Yn(g)}else Ie[0]!="stop"&&Ie[0]!="close"||_r(g,7);else g.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?_r(g,7):Et(g):Ie[0]!="noop"&&g.l&&g.l.ta(Ie),g.v=0)}}dr(4)}catch{}}var Sa=class{constructor(a,f){this.g=a,this.map=f}};function Li(a){this.l=a||10,m.PerformanceNavigationTiming?(a=m.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function en(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ia(a){return a.h?1:a.g?a.g.size:0}function Ot(a,f){return a.h?a.h==f:a.g?a.g.has(f):!1}function Zo(a,f){a.g?a.g.add(f):a.h=f}function Ca(a,f){a.h&&a.h==f?a.h=null:a.g&&a.g.has(f)&&a.g.delete(f)}Li.prototype.cancel=function(){if(this.i=Ta(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ta(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let f=a.i;for(const g of a.g.values())f=f.concat(g.D);return f}return q(a.i)}function xs(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(_(a)){for(var f=[],g=a.length,w=0;w<g;w++)f.push(a[w]);return f}f=[],g=0;for(w in a)f[g++]=a[w];return f}function Ds(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(_(a)||typeof a=="string"){var f=[];a=a.length;for(var g=0;g<a;g++)f.push(g);return f}f=[],g=0;for(const w in a)f[g++]=w;return f}}}function zr(a,f){if(a.forEach&&typeof a.forEach=="function")a.forEach(f,void 0);else if(_(a)||typeof a=="string")Array.prototype.forEach.call(a,f,void 0);else for(var g=Ds(a),w=xs(a),M=w.length,j=0;j<M;j++)f.call(void 0,w[j],g&&g[j],a)}var Mi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fc(a,f){if(a){a=a.split("&");for(var g=0;g<a.length;g++){var w=a[g].indexOf("="),M=null;if(0<=w){var j=a[g].substring(0,w);M=a[g].substring(w+1)}else j=a[g];f(j,M?decodeURIComponent(M.replace(/\+/g," ")):"")}}}function fr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof fr){this.h=a.h,bi(this,a.j),this.o=a.o,this.g=a.g,Br(this,a.s),this.l=a.l;var f=a.i,g=new Gn;g.i=f.i,f.g&&(g.g=new Map(f.g),g.h=f.h),Wr(this,g),this.m=a.m}else a&&(f=String(a).match(Mi))?(this.h=!1,bi(this,f[1]||"",!0),this.o=Ee(f[2]||""),this.g=Ee(f[3]||"",!0),Br(this,f[4]),this.l=Ee(f[5]||"",!0),Wr(this,f[6]||"",!0),this.m=Ee(f[7]||"")):(this.h=!1,this.i=new Gn(null,this.h))}fr.prototype.toString=function(){var a=[],f=this.j;f&&a.push($r(f,Os,!0),":");var g=this.g;return(g||f=="file")&&(a.push("//"),(f=this.o)&&a.push($r(f,Os,!0),"@"),a.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&a.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&a.push("/"),a.push($r(g,g.charAt(0)=="/"?Aa:Na,!0))),(g=this.i.toString())&&a.push("?",g),(g=this.m)&&a.push("#",$r(g,el)),a.join("")};function tn(a){return new fr(a)}function bi(a,f,g){a.j=g?Ee(f,!0):f,a.j&&(a.j=a.j.replace(/:$/,""))}function Br(a,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);a.s=f}else a.s=null}function Wr(a,f,g){f instanceof Gn?(a.i=f,qn(a.i,a.h)):(g||(f=$r(f,Ra)),a.i=new Gn(f,a.h))}function Ue(a,f,g){a.i.set(f,g)}function Hr(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ee(a,f){return a?f?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function $r(a,f,g){return typeof a=="string"?(a=encodeURI(a).replace(f,ka),g&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ka(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Os=/[#\/\?@]/g,Na=/[#\?:]/g,Aa=/[#\?]/g,Ra=/[#\?@]/g,el=/#/g;function Gn(a,f){this.h=this.g=null,this.i=a||null,this.j=!!f}function wt(a){a.g||(a.g=new Map,a.h=0,a.i&&Fc(a.i,function(f,g){a.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}r=Gn.prototype,r.add=function(a,f){wt(this),this.i=null,a=cn(this,a);var g=this.g.get(a);return g||this.g.set(a,g=[]),g.push(f),this.h+=1,this};function Cn(a,f){wt(a),f=cn(a,f),a.g.has(f)&&(a.i=null,a.h-=a.g.get(f).length,a.g.delete(f))}function Tn(a,f){return wt(a),f=cn(a,f),a.g.has(f)}r.forEach=function(a,f){wt(this),this.g.forEach(function(g,w){g.forEach(function(M){a.call(f,M,w,this)},this)},this)},r.na=function(){wt(this);const a=Array.from(this.g.values()),f=Array.from(this.g.keys()),g=[];for(let w=0;w<f.length;w++){const M=a[w];for(let j=0;j<M.length;j++)g.push(f[w])}return g},r.V=function(a){wt(this);let f=[];if(typeof a=="string")Tn(this,a)&&(f=f.concat(this.g.get(cn(this,a))));else{a=Array.from(this.g.values());for(let g=0;g<a.length;g++)f=f.concat(a[g])}return f},r.set=function(a,f){return wt(this),this.i=null,a=cn(this,a),Tn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[f]),this.h+=1,this},r.get=function(a,f){return a?(a=this.V(a),0<a.length?String(a[0]):f):f};function Gr(a,f,g){Cn(a,f),0<g.length&&(a.i=null,a.g.set(cn(a,f),q(g)),a.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],f=Array.from(this.g.keys());for(var g=0;g<f.length;g++){var w=f[g];const j=encodeURIComponent(String(w)),Y=this.V(w);for(w=0;w<Y.length;w++){var M=j;Y[w]!==""&&(M+="="+encodeURIComponent(String(Y[w]))),a.push(M)}}return this.i=a.join("&")};function cn(a,f){return f=String(f),a.j&&(f=f.toLowerCase()),f}function qn(a,f){f&&!a.j&&(wt(a),a.i=null,a.g.forEach(function(g,w){var M=w.toLowerCase();w!=M&&(Cn(this,w),Gr(this,M,g))},a)),a.j=f}function Uc(a,f){const g=new Pi;if(m.Image){const w=new Image;w.onload=W(Bt,g,"TestLoadImage: loaded",!0,f,w),w.onerror=W(Bt,g,"TestLoadImage: error",!1,f,w),w.onabort=W(Bt,g,"TestLoadImage: abort",!1,f,w),w.ontimeout=W(Bt,g,"TestLoadImage: timeout",!1,f,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=a}else f(!1)}function Pa(a,f){const g=new Pi,w=new AbortController,M=setTimeout(()=>{w.abort(),Bt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(a,{signal:w.signal}).then(j=>{clearTimeout(M),j.ok?Bt(g,"TestPingServer: ok",!0,f):Bt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(M),Bt(g,"TestPingServer: error",!1,f)})}function Bt(a,f,g,w,M){try{M&&(M.onload=null,M.onerror=null,M.onabort=null,M.ontimeout=null),w(g)}catch{}}function jc(){this.g=new Wo}function xa(a,f,g){const w=g||"";try{zr(a,function(M,j){let Y=M;v(M)&&(Y=zo(M)),f.push(w+j+"="+encodeURIComponent(Y))})}catch(M){throw f.push(w+"type="+encodeURIComponent("_badmap")),M}}function pr(a){this.l=a.Ub||null,this.j=a.eb||!1}z(pr,Ri),pr.prototype.g=function(){return new Fi(this.l,this.j)},pr.prototype.i=function(a){return function(){return a}}({});function Fi(a,f){it.call(this),this.D=a,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Fi,it),r=Fi.prototype,r.open=function(a,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=f,this.readyState=1,Nn(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(f.body=a),(this.D||m).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,kn(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Nn(this)),this.g&&(this.readyState=3,Nn(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Da(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Da(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var f=a.value?a.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!a.done}))&&(this.response=this.responseText+=f)}a.done?kn(this):Nn(this),this.readyState==3&&Da(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,kn(this))},r.Qa=function(a){this.g&&(this.response=a,kn(this))},r.ga=function(){this.g&&kn(this)};function kn(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Nn(a)}r.setRequestHeader=function(a,f){this.u.append(a,f)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,a.push(g[0]+": "+g[1]),g=f.next();return a.join(`\r
`)};function Nn(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function mr(a){let f="";return Le(a,function(g,w){f+=w,f+=":",f+=g,f+=`\r
`}),f}function qr(a,f,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=mr(g),typeof a=="string"?g!=null&&encodeURIComponent(String(g)):Ue(a,f,g))}function qe(a){it.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(qe,it);var Vc=/^https?$/i,tl=["POST","PUT"];r=qe.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,f,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);f=f?f.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?Cs(this.o):Cs(Sn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(f,String(a),!0),this.B=!1}catch(j){Ui(this,j);return}if(a=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var M in w)g.set(M,w[M]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),M=m.FormData&&a instanceof m.FormData,!(0<=Array.prototype.indexOf.call(tl,f,void 0))||w||M||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Y]of g)this.g.setRequestHeader(j,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ms(this),this.u=!0,this.g.send(a),this.u=!1}catch(j){Ui(this,j)}};function Ui(a,f){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=f,a.m=5,Ls(a),nn(a)}function Ls(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),nn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),nn(this,!0)),qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?nl(this):this.bb())},r.bb=function(){nl(this)};function nl(a){if(a.h&&typeof h<"u"&&(!a.v[1]||Wt(a)!=4||a.Z()!=2)){if(a.u&&Wt(a)==4)Uo(a.Ea,0,a);else if(st(a,"readystatechange"),Wt(a)==4){a.h=!1;try{const Y=a.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var w;if(w=Y===0){var M=String(a.D).match(Mi)[1]||null;!M&&m.self&&m.self.location&&(M=m.self.location.protocol.slice(0,-1)),w=!Vc.test(M?M.toLowerCase():"")}g=w}if(g)st(a,"complete"),st(a,"success");else{a.m=6;try{var j=2<Wt(a)?a.g.statusText:""}catch{j=""}a.l=j+" ["+a.Z()+"]",Ls(a)}}finally{nn(a)}}}}function nn(a,f){if(a.g){Ms(a);const g=a.g,w=a.v[0]?()=>{}:null;a.g=null,a.v=null,f||st(a,"ready");try{g.onreadystatechange=w}catch{}}}function Ms(a){a.I&&(m.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function Wt(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<Wt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var f=this.g.responseText;return a&&f.indexOf(a)==0&&(f=f.substring(a.length)),Bo(f)}};function rl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function bs(a){const f={};a=(a.g&&2<=Wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<a.length;w++){if(fe(a[w]))continue;var g=x(a[w]);const M=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=f[M]||[];f[M]=j,j.push(g)}D(f,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Kn(a,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[a]||f}function il(a){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Kn("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Kn("baseRetryDelayMs",5e3,a),this.cb=Kn("retryDelaySeedMs",1e4,a),this.Wa=Kn("forwardChannelMaxRetries",2,a),this.wa=Kn("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(a&&a.concurrentRequestLimit),this.Da=new jc,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=il.prototype,r.la=8,r.G=1,r.connect=function(a,f,g,w){et(0),this.W=a,this.H=f||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=ba(this,null,this.W),Yn(this)};function Et(a){if(Fs(a),a.G==3){var f=a.U++,g=tn(a.I);if(Ue(g,"SID",a.K),Ue(g,"RID",f),Ue(g,"TYPE","terminate"),gr(a,g),f=new In(a,a.j,f),f.L=2,f.v=Hr(tn(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(f.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=f.v,g=!0),g||(f.g=Fa(f.j,null),f.g.ea(f.v)),f.F=Date.now(),Ve(f)}Ma(a)}function An(a){a.g&&(sl(a),a.g.cancel(),a.g=null)}function Fs(a){An(a),a.u&&(m.clearTimeout(a.u),a.u=null),Vs(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&m.clearTimeout(a.s),a.s=null)}function Yn(a){if(!en(a.h)&&!a.s){a.s=!0;var f=a.Ga;be||Z(),X||(be(),X=!0),oe.add(f,a),a.B=0}}function zc(a,f){return Ia(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=f.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wn(I(a.Ga,a,f),La(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const M=new In(this,this.j,a);let j=this.o;if(this.S&&(j?(j=S(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(M.H=j,j=null),this.P)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(f+=w,4096<f){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=Kr(this,M,f),g=tn(this.I),Ue(g,"RID",a),Ue(g,"CVER",22),this.D&&Ue(g,"X-HTTP-Session-Id",this.D),gr(this,g),j&&(this.O?f="headers="+encodeURIComponent(String(mr(j)))+"&"+f:this.m&&qr(g,this.m,j)),Zo(this.h,M),this.Ua&&Ue(g,"TYPE","init"),this.P?(Ue(g,"$req",f),Ue(g,"SID","null"),M.T=!0,Ps(M,g,null)):Ps(M,g,f),this.G=2}}else this.G==3&&(a?Us(this,a):this.i.length==0||en(this.h)||Us(this))};function Us(a,f){var g;f?g=f.l:g=a.U++;const w=tn(a.I);Ue(w,"SID",a.K),Ue(w,"RID",g),Ue(w,"AID",a.T),gr(a,w),a.m&&a.o&&qr(w,a.m,a.o),g=new In(a,a.j,g,a.B+1),a.m===null&&(g.H=a.o),f&&(a.i=f.D.concat(a.i)),f=Kr(a,g,1e3),g.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Zo(a.h,g),Ps(g,w,f)}function gr(a,f){a.H&&Le(a.H,function(g,w){Ue(f,w,g)}),a.l&&zr({},function(g,w){Ue(f,w,g)})}function Kr(a,f,g){g=Math.min(a.i.length,g);var w=a.l?I(a.l.Na,a.l,a):null;e:{var M=a.i;let j=-1;for(;;){const Y=["count="+g];j==-1?0<g?(j=M[0].g,Y.push("ofs="+j)):j=0:Y.push("ofs="+j);let Me=!0;for(let ot=0;ot<g;ot++){let Ie=M[ot].g;const ft=M[ot].map;if(Ie-=j,0>Ie)j=Math.max(0,M[ot].g-100),Me=!1;else try{xa(ft,Y,"req"+Ie+"_")}catch{w&&w(ft)}}if(Me){w=Y.join("&");break e}}}return a=a.i.splice(0,g),f.D=a,w}function ji(a){if(!a.g&&!a.u){a.Y=1;var f=a.Fa;be||Z(),X||(be(),X=!0),oe.add(f,a),a.v=0}}function js(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wn(I(a.Fa,a),La(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Oa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wn(I(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,et(10),An(this),Oa(this))};function sl(a){a.A!=null&&(m.clearTimeout(a.A),a.A=null)}function Oa(a){a.g=new In(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var f=tn(a.qa);Ue(f,"RID","rpc"),Ue(f,"SID",a.K),Ue(f,"AID",a.T),Ue(f,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(f,"TO",a.ja),Ue(f,"TYPE","xmlhttp"),gr(a,f),a.m&&a.o&&qr(f,a.m,a.o),a.L&&(a.g.I=a.L);var g=a.g;a=a.ia,g.L=1,g.v=Hr(tn(f)),g.m=null,g.P=!0,Xo(g,a)}r.Za=function(){this.C!=null&&(this.C=null,An(this),js(this),et(19))};function Vs(a){a.C!=null&&(m.clearTimeout(a.C),a.C=null)}function zs(a,f){var g=null;if(a.g==f){Vs(a),sl(a),a.g=null;var w=2}else if(Ot(a.h,f))g=f.D,Ca(a.h,f),w=1;else return;if(a.G!=0){if(f.o)if(w==1){g=f.m?f.m.length:0,f=Date.now()-f.F;var M=a.B;w=ks(),st(w,new Ns(w,g)),Yn(a)}else ji(a);else if(M=f.s,M==3||M==0&&0<f.X||!(w==1&&zc(a,f)||w==2&&js(a)))switch(g&&0<g.length&&(f=a.h,f.i=f.i.concat(g)),M){case 1:_r(a,5);break;case 4:_r(a,10);break;case 3:_r(a,6);break;default:_r(a,2)}}}function La(a,f){let g=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(g*=2),g*f}function _r(a,f){if(a.j.info("Error code "+f),f==2){var g=I(a.fb,a),w=a.Xa;const M=!w;w=new fr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||bi(w,"https"),Hr(w),M?Uc(w.toString(),g):Pa(w.toString(),g)}else et(2);a.G=0,a.l&&a.l.sa(f),Ma(a),Fs(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),et(2)):(this.j.info("Failed to ping google.com"),et(1))};function Ma(a){if(a.G=0,a.ka=[],a.l){const f=Ta(a.h);(f.length!=0||a.i.length!=0)&&(Q(a.ka,f),Q(a.ka,a.i),a.h.i.length=0,q(a.i),a.i.length=0),a.l.ra()}}function ba(a,f,g){var w=g instanceof fr?tn(g):new fr(g);if(w.g!="")f&&(w.g=f+"."+w.g),Br(w,w.s);else{var M=m.location;w=M.protocol,f=f?f+"."+M.hostname:M.hostname,M=+M.port;var j=new fr(null);w&&bi(j,w),f&&(j.g=f),M&&Br(j,M),g&&(j.l=g),w=j}return g=a.D,f=a.ya,g&&f&&Ue(w,g,f),Ue(w,"VER",a.la),gr(a,w),w}function Fa(a,f,g){if(f&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=a.Ca&&!a.pa?new qe(new pr({eb:g})):new qe(a.pa),f.Ha(a.J),f}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ol(){}r=ol.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ht(a,f){it.call(this),this.g=new il(f),this.l=a,this.h=f&&f.messageUrlParams||null,a=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(a?a["X-WebChannel-Content-Type"]=f.messageContentType:a={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(a?a["X-WebChannel-Client-Profile"]=f.va:a={"X-WebChannel-Client-Profile":f.va}),this.g.S=a,(a=f&&f.Sb)&&!fe(a)&&(this.g.m=a),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!fe(f)&&(this.g.D=f,a=this.h,a!==null&&f in a&&(a=this.h,f in a&&delete a[f])),this.j=new Yr(this)}z(Ht,it),Ht.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ht.prototype.close=function(){Et(this.g)},Ht.prototype.o=function(a){var f=this.g;if(typeof a=="string"){var g={};g.__data__=a,a=g}else this.u&&(g={},g.__data__=zo(a),a=g);f.i.push(new Sa(f.Ya++,a)),f.G==3&&Yn(f)},Ht.prototype.N=function(){this.g.l=null,delete this.j,Et(this.g),delete this.g,Ht.aa.N.call(this)};function Ua(a){$n.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var f=a.__sm__;if(f){e:{for(const g in f){a=g;break e}a=void 0}(this.i=a)&&(a=this.i,f=f!==null&&a in f?f[a]:void 0),this.data=f}else this.data=a}z(Ua,$n);function ja(){Ts.call(this),this.status=1}z(ja,Ts);function Yr(a){this.g=a}z(Yr,ol),Yr.prototype.ua=function(){st(this.g,"a")},Yr.prototype.ta=function(a){st(this.g,new Ua(a))},Yr.prototype.sa=function(a){st(this.g,new ja)},Yr.prototype.ra=function(){st(this.g,"b")},Ht.prototype.send=Ht.prototype.o,Ht.prototype.open=Ht.prototype.m,Ht.prototype.close=Ht.prototype.close,Yo.NO_ERROR=0,Yo.TIMEOUT=8,Yo.HTTP_ERROR=6,Mc.COMPLETE="complete",Ho.EventType=an,an.OPEN="a",an.CLOSE="b",an.ERROR="c",an.MESSAGE="d",it.prototype.listen=it.prototype.K,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha}).apply(typeof bu<"u"?bu:typeof self<"u"?self:typeof window<"u"?window:{});const H_="@firebase/firestore",$_="4.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ga="12.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=new oa("@firebase/firestore");function Vn(r,...e){if(No.logLevel<=Oe.DEBUG){const t=e.map(op);No.debug(`Firestore (${ga}): ${r}`,...t)}}function jw(r,...e){if(No.logLevel<=Oe.ERROR){const t=e.map(op);No.error(`Firestore (${ga}): ${r}`,...t)}}function wA(r,...e){if(No.logLevel<=Oe.WARN){const t=e.map(op);No.warn(`Firestore (${ga}): ${r}`,...t)}}function op(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(r,e,t){let s="Unexpected state";typeof e=="string"?s=e:t=e,Vw(r,s,t)}function Vw(r,e,t){let s=`FIRESTORE (${ga}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{s+=" CONTEXT: "+JSON.stringify(t)}catch{s+=" CONTEXT: "+t}throw jw(s),new Error(s)}function Wl(r,e,t,s){let l="Unexpected state";typeof t=="string"?l=t:s=t,r||Vw(e,l,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class ke extends Hn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ft.UNAUTHENTICATED))}shutdown(){}}class SA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class IA{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Wl(this.o===void 0,42304);let s=this.i;const l=_=>this.i!==s?(s=this.i,t(_)):Promise.resolve();let c=new Hl;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Hl,e.enqueueRetryable(()=>l(this.currentUser))};const h=()=>{const _=c;e.enqueueRetryable(async()=>{await _.promise,await l(this.currentUser)})},m=_=>{Vn("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(_=>m(_)),setTimeout(()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?m(_):(Vn("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Hl)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(Vn("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Wl(typeof s.accessToken=="string",31837,{l:s}),new zw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Wl(e===null||typeof e=="string",2055,{h:e}),new Ft(e)}}class CA{constructor(e,t,s){this.P=e,this.T=t,this.I=s,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TA{constructor(e,t,s){this.P=e,this.T=t,this.I=s}getToken(){return Promise.resolve(new CA(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class G_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kA{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Wl(this.o===void 0,3512);const s=c=>{c.error!=null&&Vn("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const h=c.token!==this.m;return this.m=c.token,Vn("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>s(c))};const l=c=>{Vn("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>l(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?l(c):Vn("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new G_(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Wl(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new G_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=NA(40);for(let c=0;c<l.length;++c)s.length<20&&l[c]<t&&(s+=e.charAt(l[c]%62))}return s}}function Ci(r,e){return r<e?-1:r>e?1:0}function RA(r,e){const t=Math.min(r.length,e.length);for(let s=0;s<t;s++){const l=r.charAt(s),c=e.charAt(s);if(l!==c)return Rd(l)===Rd(c)?Ci(l,c):Rd(l)?1:-1}return Ci(r.length,e.length)}const PA=55296,xA=57343;function Rd(r){const e=r.charCodeAt(0);return e>=PA&&e<=xA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q_="__name__";class tr{constructor(e,t,s){t===void 0?t=0:t>e.length&&ia(637,{offset:t,range:e.length}),s===void 0?s=e.length-t:s>e.length-t&&ia(1746,{length:s,range:e.length-t}),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return tr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tr?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let l=0;l<s;l++){const c=tr.compareSegments(e.get(l),t.get(l));if(c!==0)return c}return Ci(e.length,t.length)}static compareSegments(e,t){const s=tr.isNumericId(e),l=tr.isNumericId(t);return s&&!l?-1:!s&&l?1:s&&l?tr.extractNumericId(e).compare(tr.extractNumericId(t)):RA(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return sp.fromString(e.substring(4,e.length-2))}}class Mn extends tr{construct(e,t,s){return new Mn(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new ke(Te.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(l=>l.length>0))}return new Mn(t)}static emptyPath(){return new Mn([])}}const DA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class es extends tr{construct(e,t,s){return new es(e,t,s)}static isValidIdentifier(e){return DA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),es.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===q_}static keyField(){return new es([q_])}static fromServerFormat(e){const t=[];let s="",l=0;const c=()=>{if(s.length===0)throw new ke(Te.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;l<e.length;){const m=e[l];if(m==="\\"){if(l+1===e.length)throw new ke(Te.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[l+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ke(Te.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=_,l+=2}else m==="`"?(h=!h,l++):m!=="."||h?(s+=m,l++):(c(),l++)}if(c(),h)throw new ke(Te.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new es(t)}static emptyPath(){return new es([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.path=e}static fromPath(e){return new rs(Mn.fromString(e))}static fromName(e){return new rs(Mn.fromString(e).popFirst(5))}static empty(){return new rs(Mn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Mn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Mn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new rs(new Mn(e.slice()))}}function OA(r,e,t,s){if(e===!0&&s===!0)throw new ke(Te.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function LA(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function MA(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":ia(12329,{type:typeof r})}function bA(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ke(Te.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=MA(r);throw new ke(Te.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(r,e){const t={typeString:r};return e&&(t.value=e),t}function _a(r,e){if(!LA(r))throw new ke(Te.INVALID_ARGUMENT,"JSON must be an object");let t;for(const s in e)if(e[s]){const l=e[s].typeString,c="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){t=`JSON missing required field: '${s}'`;break}const h=r[s];if(l&&typeof h!==l){t=`JSON field '${s}' must be a ${l}.`;break}if(c!==void 0&&h!==c.value){t=`Expected '${s}' field to equal '${c.value}'`;break}}if(t)throw new ke(Te.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_=-62135596800,Y_=1e6;class nr{static now(){return nr.fromMillis(Date.now())}static fromDate(e){return nr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor((e-1e3*t)*Y_);return new nr(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ke(Te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ke(Te.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<K_)throw new ke(Te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ke(Te.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Y_}_compareTo(e){return this.seconds===e.seconds?Ci(this.nanoseconds,e.nanoseconds):Ci(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:nr._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(_a(e,nr._jsonSchema))return new nr(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-K_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}nr._jsonSchemaVersion="firestore/timestamp/1.0",nr._jsonSchema={type:rt("string",nr._jsonSchemaVersion),seconds:rt("number"),nanoseconds:rt("number")};function FA(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(l){try{return atob(l)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new UA("Invalid base64 string: "+c):c}}(e);return new fs(t)}static fromUint8Array(e){const t=function(l){let c="";for(let h=0;h<l.length;++h)c+=String.fromCharCode(l[h]);return c}(e);return new fs(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let l=0;l<t.length;l++)s[l]=t.charCodeAt(l);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ci(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fs.EMPTY_BYTE_STRING=new fs("");const tf="(default)";class mc{constructor(e,t){this.projectId=e,this.database=t||tf}static empty(){return new mc("","")}get isDefaultDatabase(){return this.database===tf}isEqual(e){return e instanceof mc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t=null,s=[],l=[],c=null,h="F",m=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=l,this.limit=c,this.limitType=h,this.startAt=m,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function VA(r){return new jA(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q_,Ce;(Ce=Q_||(Q_={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new sp([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BA=1048576;function Pd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(e,t,s=1e3,l=1.5,c=6e4){this.Mi=e,this.timerId=t,this.d_=s,this.A_=l,this.R_=c,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,t-s);l>0&&Vn("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,t,s,l,c){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=l,this.removalCallback=c,this.deferred=new Hl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,l,c){const h=Date.now()+s,m=new lp(e,t,h,l,c);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(Te.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var X_,J_;(J_=X_||(X_={})).Ma="default",J_.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="firestore.googleapis.com",ey=!0;class ty{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ke(Te.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Bw,this.ssl=ey}else this.host=e.host,this.ssl=e.ssl??ey;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zA;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<BA)throw new ke(Te.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=HA(e.experimentalLongPollingOptions??{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ke(Te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ke(Te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ke(Te.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,l){return s.timeoutSeconds===l.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ww{constructor(e,t,s,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ty({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ke(Te.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ke(Te.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ty(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new EA;switch(s.type){case"firstParty":return new TA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ke(Te.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Z_.get(t);s&&(Vn("ComponentProvider","Removing Datastore"),Z_.delete(t),s.terminate())}(this),Promise.resolve()}}function $A(r,e,t,s={}){r=bA(r,Ww);const l=ps(e),c=r._getSettings(),h={...c,emulatorOptions:r._getEmulatorOptions()},m=`${e}:${t}`;l&&(of(`https://${m}`),lf("Firestore",!0)),c.host!==Bw&&c.host!==m&&wA("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...c,host:m,ssl:l,emulatorOptions:s};if(!Dr(_,h)&&(r._setSettings(_),s.mockUserToken)){let v,k;if(typeof s.mockUserToken=="string")v=s.mockUserToken,k=Ft.MOCK_USER;else{v=py(s.mockUserToken,r._app?.options.projectId);const T=s.mockUserToken.sub||s.mockUserToken.user_id;if(!T)throw new ke(Te.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");k=new Ft(T)}r._authCredentials=new SA(new zw(v,k))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ap(this.firestore,e,this._query)}}class rr{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new up(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rr(this.firestore,e,this._key)}toJSON(){return{type:rr._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,s){if(_a(t,rr._jsonSchema))return new rr(e,s||null,new rs(Mn.fromString(t.referencePath)))}}rr._jsonSchemaVersion="firestore/documentReference/1.0",rr._jsonSchema={type:rt("string",rr._jsonSchemaVersion),referencePath:rt("string")};class up extends ap{constructor(e,t,s){super(e,t,VA(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rr(this.firestore,null,new rs(e))}withConverter(e){return new up(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="AsyncQueue";class ry{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new WA(this,"async_queue_retry"),this._c=()=>{const s=Pd();s&&Vn(ny,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const t=Pd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Pd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Hl;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!FA(e))throw e;Vn(ny,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(s=>{throw this.nc=s,this.rc=!1,jw("INTERNAL UNHANDLED ERROR: ",iy(s)),s}).then(s=>(this.rc=!1,s))));return this.ac=t,t}enqueueAfterDelay(e,t,s){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const l=lp.createAndSchedule(this,e,t,s,c=>this.hc(c));return this.tc.push(l),l}uc(){this.nc&&ia(47125,{Pc:iy(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function iy(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class GA extends Ww{constructor(e,t,s,l){super(e,t,s,l),this.type="firestore",this._queue=new ry,this._persistenceKey=l?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ry(e),this._firestoreClient=void 0,await e}}}function qA(r,e){const t=typeof r=="object"?r:yc(),s=typeof r=="string"?r:tf,l=Ti(t,"firestore").getImmediate({identifier:s});if(!l._initialized){const c=hy("firestore");c&&$A(l,...c)}return l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nr(fs.fromBase64String(e))}catch(t){throw new ke(Te.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nr(fs.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nr._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(_a(e,Nr._jsonSchema))return Nr.fromBase64String(e.bytes)}}Nr._jsonSchemaVersion="firestore/bytes/1.0",Nr._jsonSchema={type:rt("string",Nr._jsonSchemaVersion),bytes:rt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ke(Te.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new es(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ke(Te.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ke(Te.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ci(this._lat,e._lat)||Ci(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ss._jsonSchemaVersion}}static fromJSON(e){if(_a(e,ss._jsonSchema))return new ss(e.latitude,e.longitude)}}ss._jsonSchemaVersion="firestore/geoPoint/1.0",ss._jsonSchema={type:rt("string",ss._jsonSchemaVersion),latitude:rt("number"),longitude:rt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,l){if(s.length!==l.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==l[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:os._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(_a(e,os._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new os(e.vectorValues);throw new ke(Te.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}os._jsonSchemaVersion="firestore/vectorValue/1.0",os._jsonSchema={type:rt("string",os._jsonSchemaVersion),vectorValues:rt("object")};const KA=new RegExp("[~\\*/\\[\\]]");function YA(r,e,t){if(e.search(KA)>=0)throw sy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r);try{return new Hw(...e.split("."))._internalPath}catch{throw sy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r)}}function sy(r,e,t,s,l){let c=`Function ${e}() called with invalid data`;c+=". ";let h="";return new ke(Te.INVALID_ARGUMENT,c+r+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,s,l,c){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=l,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new rr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new QA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Gw("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class QA extends $w{data(){return super.data()}}function Gw(r,e){return typeof e=="string"?YA(r,e):e instanceof Hw?e._internalPath:e._delegate._internalPath}class Fu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vo extends $w{constructor(e,t,s,l,c,h){super(e,t,s,l,h),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Wu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Gw("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ke(Te.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vo._jsonSchemaVersion="firestore/documentSnapshot/1.0",vo._jsonSchema={type:rt("string",vo._jsonSchemaVersion),bundleSource:rt("string","DocumentSnapshot"),bundleName:rt("string"),bundle:rt("string")};class Wu extends vo{data(e={}){return super.data(e)}}class $l{constructor(e,t,s,l){this._firestore=e,this._userDataWriter=t,this._snapshot=l,this.metadata=new Fu(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Wu(this._firestore,this._userDataWriter,s.key,s,new Fu(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ke(Te.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(l,c){if(l._snapshot.oldDocs.isEmpty()){let h=0;return l._snapshot.docChanges.map(m=>{const _=new Wu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Fu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);return m.doc,{type:"added",doc:_,oldIndex:-1,newIndex:h++}})}{let h=l._snapshot.oldDocs;return l._snapshot.docChanges.filter(m=>c||m.type!==3).map(m=>{const _=new Wu(l._firestore,l._userDataWriter,m.doc.key,m.doc,new Fu(l._snapshot.mutatedKeys.has(m.doc.key),l._snapshot.fromCache),l.query.converter);let v=-1,k=-1;return m.type!==0&&(v=h.indexOf(m.doc.key),h=h.delete(m.doc.key)),m.type!==1&&(h=h.add(m.doc),k=h.indexOf(m.doc.key)),{type:XA(m.type),doc:_,oldIndex:v,newIndex:k}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ke(Te.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$l._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=AA.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],s=[],l=[];return this.docs.forEach(c=>{c._document!==null&&(t.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),l.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function XA(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ia(61501,{type:r})}}$l._jsonSchemaVersion="firestore/querySnapshot/1.0",$l._jsonSchema={type:rt("string",$l._jsonSchemaVersion),bundleSource:rt("string","QuerySnapshot"),bundleName:rt("string"),bundle:rt("string")};(function(e,t=!0){(function(l){ga=l})(gs),Wn(new yn("firestore",(s,{instanceIdentifier:l,options:c})=>{const h=s.getProvider("app").getImmediate(),m=new GA(new IA(s.getProvider("auth-internal")),new kA(h,s.getProvider("app-check-internal")),function(v,k){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ke(Te.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mc(v.options.projectId,k)}(h,l),h);return c={useFetchStreams:t,...c},m._setSettings(c),m},"PUBLIC").setMultipleInstances(!0)),Jt(H_,$_,e),Jt(H_,$_,"esm2020")})();const JA={apiKey:"AIzaSyALzAz2o7bLY9ecdtz4KtpMVNzqy-Byhp0",authDomain:"mimi-notes.firebaseapp.com",databaseURL:"https://mimi-notes-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"mimi-notes",storageBucket:"mimi-notes.firebasestorage.app",messagingSenderId:"252580139989",appId:"1:252580139989:web:fba80c2e41fe49b942635c",measurementId:"G-6Y8XW8J5M2"},zn=Iy(JA);yk(zn);yA(zn);qA(zn);async function ZA(){try{const r=gi(zn),e=await Hf(kr(r,"/"));if(!e.exists()){console.error("No data found in Firebase");return}const s=e.val().mode;if(!s){console.error("Mode is missing in database");return}s==="dark"?(document.documentElement.style.setProperty("--theme-bg","#000000"),document.documentElement.style.setProperty("--theme-text","#ffffffff"),document.documentElement.style.setProperty("--theme-text-second","#000000"),document.documentElement.style.setProperty("--theme-primary","#ffb6c1"),document.documentElement.style.setProperty("--theme-secondary","#ffe4e1")):(document.documentElement.style.setProperty("--theme-bg","#ffffff"),document.documentElement.style.setProperty("--theme-text","#000000"),document.documentElement.style.setProperty("--theme-text-second","#000000"),document.documentElement.style.setProperty("--theme-primary","#ff6fb5"),document.documentElement.style.setProperty("--theme-secondary","#ffc8dd")),console.log("🎨 Theme applied:",s)}catch(r){console.error("Theme load failed:",r)}}const eR=r=>localStorage.setItem("mimi_session",JSON.stringify(r)),tR=()=>JSON.parse(localStorage.getItem("mimi_session")||"false"),nR=()=>localStorage.removeItem("mimi_session");function rR({setLoggedIn:r}){const[e,t]=bt.useState(""),[s,l]=bt.useState(!1),c=async()=>{try{const m=gi(zn),_=await Hf(kr(m,"/"));return _.exists()?_.val().password?.trim()||null:(console.error("No password found in DB"),null)}catch(m){return console.error("Error fetching password:",m),null}},h=async()=>{l(!0);const m=await c();if(l(!1),!m){alert("Failed to fetch password.");return}e===m?(eR(!0),r(!0)):alert("❌ Oops! Wrong password.")};return re.jsx("div",{className:"login-wrapper",children:re.jsxs("div",{className:"login-card",children:[re.jsx("h2",{className:"login-title",children:"MimiNotes 🕊"}),re.jsx("p",{className:"login-subtitle",children:"Your dove’s diary"}),re.jsx("input",{type:"password",className:"login-input",placeholder:"Little dove’s code here 🕊",value:e,onChange:m=>t(m.target.value)}),re.jsx("button",{className:"login-button",onClick:h,disabled:s,children:s?"Taking flight...":"Flappy 🕊"})]})})}function iR({note:r,onClick:e}){return re.jsxs("div",{className:"note-card",onClick:()=>e(r),children:[re.jsx("div",{className:"note-content",children:r.content}),re.jsx("div",{className:"note-name",children:r.name||r.date.toLocaleString()})]})}function sR({note:r,onChange:e,onSave:t,onCancel:s,onDelete:l}){return r?re.jsx("div",{className:"note-modal",children:re.jsxs("div",{className:"note-modal-content",children:[re.jsx("h3",{children:r.id?"Edit Note":"New Note"}),re.jsx("input",{type:"text",placeholder:"Note name",value:r.name,onChange:c=>e({...r,name:c.target.value})}),re.jsx("textarea",{rows:"6",placeholder:"Text here...",value:r.content,onChange:c=>e({...r,content:c.target.value})}),re.jsxs("div",{className:"modal-actions",children:[re.jsx("button",{onClick:t,children:"Save"}),r.id&&re.jsx("button",{className:"delete-btn",onClick:l,children:"Delete"}),re.jsx("button",{onClick:s,children:"Cancel"})]})]})}):null}function oR({themeSettings:r,setThemeSettings:e,onClose:t}){const[s,l]=bt.useState("password"),[c,h]=bt.useState("");async function m(v){const k=v==="dark";document.documentElement.style.setProperty("--theme-bg",k?"#000000":"#ffffff"),document.documentElement.style.setProperty("--theme-text",k?"#ffffffff":"#000000"),document.documentElement.style.setProperty("--theme-primary",k?"#ffb6c1":"#ff6fb5"),document.documentElement.style.setProperty("--theme-secondary",k?"#ffe4e1":"#ffc8dd"),e({...r,mode:v});try{const T=gi(zn);await Yd(kr(T),{mode:v}),console.log("✅ Theme saved to Firebase")}catch(T){console.error("❌ Error saving theme:",T)}}async function _(){if(!c.trim()){alert("⚠️ Please enter a password before saving!");return}try{const v=gi(zn);await Yd(kr(v),{password:c}),alert("✅ Password saved successfully! 🕊"),h("")}catch(v){console.error("❌ Error saving password:",v),alert(`Error: ${v.message}`)}}return re.jsx("div",{className:"settings-modal",children:re.jsxs("div",{className:"settings-modal-content",children:[re.jsxs("div",{className:"settings-sidebar",children:[re.jsx("button",{className:s==="password"?"active":"",onClick:()=>l("password"),children:"Change Password"}),re.jsx("button",{className:s==="theme"?"active":"",onClick:()=>l("theme"),children:"Theme"}),re.jsx("button",{className:"close-btn",onClick:t,children:"Close"})]}),re.jsxs("div",{className:"settings-content",children:[s==="password"&&re.jsxs("div",{children:[re.jsx("h4",{children:"Change Password"}),re.jsx("input",{class:"password",type:"password",placeholder:"New password",value:c,onChange:v=>h(v.target.value)}),re.jsx("button",{onClick:_,children:"Save Password"})]}),s==="theme"&&re.jsxs("div",{className:"theme-tab",children:[re.jsx("h4",{children:"Theme Mode"}),re.jsxs("div",{className:"dark-mode-toggle",children:[re.jsxs("label",{className:"switch",children:[re.jsx("input",{type:"checkbox",checked:r.mode==="dark",onChange:v=>m(v.target.checked?"dark":"light")}),re.jsx("span",{className:"slider"})]}),re.jsx("span",{className:"mode-label light",children:"Light"}),re.jsx("span",{className:"mode-label dark",children:"Dark"})]})]})]})]})})}function lR({setLoggedIn:r}){const[e,t]=bt.useState("light"),[s,l]=bt.useState([]),[c,h]=bt.useState(null),[m,_]=bt.useState(!1),[v,k]=bt.useState(!0),[T,I]=bt.useState({primaryColor:getComputedStyle(document.documentElement).getPropertyValue("--theme-primary"),secondaryColor:getComputedStyle(document.documentElement).getPropertyValue("--theme-secondary"),mode:"light"});bt.useEffect(()=>{const q=gi(zn);async function Q(){try{const de=await Hf(kr(q,"/"));if(de.exists()){const fe=de.val();fe.mode?(t(fe.mode),I(ve=>({...ve,mode:fe.mode}))):console.error("Mode is missing in database")}else console.error("No data found in Firebase")}catch(de){console.error("Error fetching mode:",de)}}Q()},[]),bt.useEffect(()=>{const q=gi(zn),Q=kr(q,"notes");k(!0);const de=$1(Q,fe=>{const ve=fe.val();if(ve){const Pe=Object.entries(ve).map(([ht,Le])=>({id:ht,...Le,date:Le.date?new Date(Le.date):new Date}));l(Pe)}else l([]);k(!1)});return()=>de()},[]);const W=async()=>{if(!c.name.trim()&&!c.content.trim()){alert("⚠️ Please enter some content for your note!");return}const q=gi(zn),Q={name:c.name||new Date().toLocaleString(),content:c.content,date:new Date().toISOString()};try{c.id?await Yd(kr(q,`notes/${c.id}`),Q):await B1(kr(q,"notes"),Q)}catch(de){console.error("❌ Error saving note:",de)}h(null)},z=async()=>{if(!c?.id)return;const q=gi(zn);try{await W1(kr(q,`notes/${c.id}`)),h(null)}catch(Q){console.error("❌ Error deleting note:",Q)}};return re.jsxs("div",{className:"dashboard",children:[re.jsxs("nav",{className:"navbar",children:[re.jsx("div",{className:"nav-title",children:"MimiNotes"}),re.jsxs("div",{className:"nav-links",children:[re.jsx("button",{children:"My Notes"}),re.jsx("button",{onClick:()=>_(!0),children:"Settings"}),re.jsx("button",{onClick:()=>{r(!1),nR()},children:"GoodBye 🕊"})]})]}),re.jsx("div",{className:"quote",children:'✨ "A short note is better than a long memory." ✨'}),re.jsx("div",{className:"notes-grid",children:v?re.jsx("div",{className:"center-message",children:"Loading notes..."}):s.length===0?re.jsx("div",{className:"center-message",children:"No notes available."}):s.map(q=>re.jsx(iR,{note:q,onClick:()=>h(q)},q.id))}),re.jsx("button",{className:"add-btn",onClick:()=>h({name:"",content:""}),children:"＋"}),re.jsx(sR,{note:c,onChange:h,onSave:W,onCancel:()=>h(null),onDelete:z}),m&&re.jsx("div",{className:"modal",children:re.jsx("div",{className:"modal-content large",children:re.jsx(oR,{themeSettings:T,setThemeSettings:I,onClose:()=>_(!1)})})})]})}function aR(){const[r,e]=bt.useState(tR()),[t,s]=bt.useState(!1);return bt.useEffect(()=>{(async()=>{await ZA(),s(!0)})()},[]),t?r?re.jsx(lR,{setLoggedIn:e}):re.jsx(rR,{setLoggedIn:e}):re.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",fontFamily:"'Poppins', sans-serif"},children:[re.jsx("div",{className:"dove-loader",children:"🕊"}),re.jsx("p",{style:{marginTop:"20px",fontSize:"1.2rem",color:"#888"},children:"Fluffing feathers for your notes..."}),re.jsx("style",{children:`
          .dove-loader {
            font-size: 3rem;
            animation: fly 2s ease-in-out infinite;
          }
          @keyframes fly {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            25% {
              transform: translateY(-10px) rotate(-10deg);
            }
            50% {
              transform: translateY(0) rotate(0deg);
            }
            75% {
              transform: translateY(-10px) rotate(10deg);
            }
          }
        `})]})}iE.createRoot(document.getElementById("app")).render(re.jsx(aR,{}));
