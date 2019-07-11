/*! @inotom/vue-roll-number v1.0.2 inotom (http://www.serendip.ws/) | MIT */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("RollNumber",[],t):"object"==typeof exports?exports.RollNumber=t():e.RollNumber=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var r=function(e,t,n,r,i,o,u,a){var l,s="function"==typeof e?e.options:e;if(t&&(s.render=t,s.staticRenderFns=n,s._compiled=!0),r&&(s.functional=!0),o&&(s._scopeId="data-v-"+o),u?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(u)},s._ssrRegister=l):i&&(l=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(s.functional){s._injectStyles=l;var c=s.render;s.render=function(e,t){return l.call(t),c(e,t)}}else{var f=s.beforeCreate;s.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:s}}({props:{numberValue:{type:String,required:!0},animDuration:{type:Number,default:3e3},animInterval:{type:Number,default:10},blockName:{type:String,default:"roll-number"}},data:function(){return{isAnimation:!1,currentNumber:this.numberValue,intervalID:-1}},watch:{numberValue:function(e,t){e!==t&&this.initialize()}},created:function(){this.initialize()},methods:{initialize:function(){var e=this;if(!this.isAnimation){this.isAnimation=!0;var t=0;this.intervalID=setInterval(function(){t+=e.animInterval;for(var n="",r=0;r<e.numberValue.length;r++)e.isUpdateTime(r,t)?n+=e.numberValue[r]:e.isSeparator(r)?n+=e.numberValue[r]:n+=e.getRandomInt(0,9)+"";e.currentNumber=n,t>e.animDuration&&(clearInterval(e.intervalID),e.isAnimation=!1)},this.animInterval)}},isUpdateTime:function(e,t){var n=this.numberValue.length;return this.animDuration-this.animInterval*(e+1)*n<t},isSeparator:function(e){return!Number.isInteger(parseInt(this.numberValue[e],10))},getRandomInt:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}}},function(){var e=this.$createElement;return(this._self._c||e)("span",{class:this.blockName,attrs:{"is-animation":this.isAnimation}},[this._v("\n  "+this._s(this.currentNumber)+"\n")])},[],!1,null,null,null);t.a=r.exports},function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"install",function(){return i});var r=n(0);function i(e){i.installed||(i.installed=!0,e.component("roll-number",r.a))}var o={install:i},u=null;"undefined"!=typeof window?u=window.Vue:void 0!==e&&(u=e.Vue),u&&u.use(o),t.default=r.a}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])});
//# sourceMappingURL=vue-roll-number.umd.js.map