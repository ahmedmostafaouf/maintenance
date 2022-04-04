/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"/js/app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/chunks/" + ({}[chunkId]||chunkId) + "." + {"0":"0851b43f3524120e249a","2":"72a63b08683cca34489e","3":"b31ad2790be5fb7e284a","4":"20fe84b9401b61615154","7":"398bf74ae5c5c0a7f5bc","8":"332d80b5f6f9deca8f13","9":"89e4c18cb088508f0432","10":"5ad9de6062298e45afef"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\classCallCheck.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\createClass.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\defineProperty.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\objectSpread2.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\slicedToArray.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@babel\\runtime\\helpers\\esm\\toConsumableArray.js'");

/***/ }),

/***/ "./node_modules/@casl/ability/dist/es5m/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@casl/ability/dist/es5m/index.js ***!
  \*******************************************************/
/*! exports provided: Ability, AbilityBuilder, ForbiddenError, PureAbility, buildMongoQueryMatcher, createAliasResolver, defineAbility, detectSubjectType, fieldPatternMatcher, getDefaultErrorMessage, mongoQueryMatcher, subject, wrapArray */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@casl\\ability\\dist\\es5m\\index.js'");

/***/ }),

/***/ "./node_modules/@casl/vue/dist/es5m/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@casl/vue/dist/es5m/index.js ***!
  \***************************************************/
/*! exports provided: Can, abilitiesPlugin */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@casl\\vue\\dist\\es5m\\index.js'");

/***/ }),

/***/ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs ***!
  \************************************************************************/
/*! exports provided: default, EffectScope, computed, createApp, createRef, customRef, defineAsyncComponent, defineComponent, del, effectScope, getCurrentInstance, getCurrentScope, h, inject, isRaw, isReactive, isReadonly, isRef, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useAttrs, useCSSModule, useCssModule, useSlots, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@vue\\composition-api\\dist\\vue-composition-api.mjs'");

/***/ }),

/***/ "./node_modules/@vueuse/core/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@vueuse/core/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: and, assert, biSyncRef, bypassFilter, clamp, containsProp, controlledComputed, controlledRef, createEventHook, createFilterWrapper, createSingletonPromise, debounceFilter, debouncedWatch, extendRef, get, ignorableWatch, increaseWithUnit, invoke, isBoolean, isClient, isDef, isFunction, isNumber, isObject, isString, isWindow, makeDestructurable, noop, not, now, or, pausableFilter, pausableWatch, promiseTimeout, reactify, reactifyObject, reactivePick, set, syncRef, throttleFilter, throttledWatch, timestamp, tryOnMounted, tryOnUnmounted, until, useCounter, useDebounce, useDebounceFn, useInterval, useIntervalFn, useLastChanged, useThrottle, useThrottleFn, useTimeout, useTimeoutFn, useToggle, watchWithFilter, when, whenever, DefaultMagicKeysAliasMap, SwipeDirection, TransitionPresets, asyncComputed, autoResetRef, breakpointsAntDesign, breakpointsBootstrapV5, breakpointsSematic, breakpointsTailwind, breakpointsVuetify, createFetch, createGlobalState, onClickOutside, onKeyDown, onKeyPressed, onKeyStroke, onKeyUp, onStartTyping, templateRef, toRefs, unrefElement, useActiveElement, useAsyncState, useBattery, useBreakpoints, useBrowserLocation, useClipboard, useCssVar, useDark, useDeviceLight, useDeviceMotion, useDeviceOrientation, useDevicePixelRatio, useDevicesList, useDocumentVisibility, useElementBounding, useElementSize, useElementVisibility, useEventListener, useEventSource, useFavicon, useFetch, useFullscreen, useGeolocation, useIdle, useIntersectionObserver, useLocalStorage, useMagicKeys, useManualRefHistory, useMediaControls, useMediaQuery, useMouse, useMouseInElement, useMousePressed, useMutationObserver, useNetwork, useNow, useOnline, usePageLeave, useParallax, usePermission, usePointerSwipe, usePreferredColorScheme, usePreferredDark, usePreferredLanguages, useRafFn, useRefHistory, useResizeObserver, useScriptTag, useSessionStorage, useShare, useSpeechRecognition, useStorage, useSwipe, useTimeAgo, useTimestamp, useTitle, useTransition, useUrlSearchParams, useUserMedia, useVModel, useVModels, useWebSocket, useWebWorker, useWebWorkerFn, useWindowScroll, useWindowSize */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\@vueuse\\core\\dist\\index.esm.js'");

/***/ }),

/***/ "./node_modules/axios-mock-adapter/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/axios-mock-adapter/src/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\axios-mock-adapter\\src\\index.js'");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FeatherIcon',
  functional: true,
  props: {
    icon: {
      required: true,
      type: [String, Object]
    },
    size: {
      type: String,
      "default": '14'
    },
    badge: {
      type: [String, Object, Number],
      "default": null
    },
    badgeClasses: {
      type: [String, Object, Array],
      "default": 'badge-primary'
    }
  },
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    // Create Feather Icon
    var svg = h(vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__[props.icon], Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
      props: {
        size: props.size
      }
    }, data)); // If no badge is provided => Render just SVG

    if (!props.badge) return svg; // Badge

    var badgeEl = h('span', {
      staticClass: 'badge badge-up badge-pill',
      "class": props.badgeClasses
    }, [props.badge]); // Return span with children

    return h('span', {
      staticClass: 'feather-icon position-relative'
    }, [svg, badgeEl]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/dist/index.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"]
  },
  setup: function setup() {
    var _useWindowScroll = Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_0__["useWindowScroll"])(),
        y = _useWindowScroll.y;

    var scrollToTop = function scrollToTop() {
      var rootEle = document.documentElement;
      rootEle.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    return {
      y: y,
      scrollToTop: scrollToTop
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/App.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/App.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_components_scroll_to_top_ScrollToTop_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/components/scroll-to-top/ScrollToTop.vue */ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-toastification/composition */ "./node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _vueuse_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @vueuse/core */ "./node_modules/@vueuse/core/dist/index.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");






//
//
//
//
//
//
//
//
//
//
 // This will be populated in `beforeCreate` hook








var LayoutVertical = function LayoutVertical() {
  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, /*! @/layouts/vertical/LayoutVertical.vue */ "./resources/js/src/layouts/vertical/LayoutVertical.vue"));
};

var LayoutHorizontal = function LayoutHorizontal() {
  return Promise.all(/*! import() */[__webpack_require__.e(4), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! @/layouts/horizontal/LayoutHorizontal.vue */ "./resources/js/src/layouts/horizontal/LayoutHorizontal.vue"));
};

var LayoutFull = function LayoutFull() {
  return __webpack_require__.e(/*! import() */ 8).then(__webpack_require__.bind(null, /*! @/layouts/full/LayoutFull.vue */ "./resources/js/src/layouts/full/LayoutFull.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    // Layouts
    LayoutVertical: LayoutVertical,
    LayoutHorizontal: LayoutHorizontal,
    LayoutFull: LayoutFull,
    ScrollToTop: _core_components_scroll_to_top_ScrollToTop_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // ! We can move this computed: layout & contentLayoutType once we get to use Vue 3
  // Currently, router.currentRoute is not reactive and doesn't trigger any change
  computed: {
    layout: function layout() {
      if (this.$route.meta.layout === "full") return "layout-full";
      return "layout-".concat(this.contentLayoutType);
    },
    contentLayoutType: function contentLayoutType() {
      return this.$store.state.appConfig.layout.type;
    }
  },
  beforeCreate: function beforeCreate() {
    // Set colors in theme
    var colors = ["primary", "secondary", "success", "info", "warning", "danger", "light", "dark"]; // eslint-disable-next-line no-plusplus

    for (var i = 0, len = colors.length; i < len; i++) {
      _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeColors"][colors[i]] = Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_11__["useCssVar"])("--".concat(colors[i]), document.documentElement).value.trim();
    } // Set Theme Breakpoints


    var breakpoints = ["xs", "sm", "md", "lg", "xl"]; // eslint-disable-next-line no-plusplus

    for (var _i = 0, _len = breakpoints.length; _i < _len; _i++) {
      _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeBreakpoints"][breakpoints[_i]] = Number(Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_11__["useCssVar"])("--breakpoint-".concat(breakpoints[_i]), document.documentElement).value.slice(0, -2));
    } // Set RTL


    var isRTL = _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeConfig"].layout.isRTL;
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        skin = _useAppConfig.skin,
        skinClasses = _useAppConfig.skinClasses;

    var enableScrollToTop = _themeConfig__WEBPACK_IMPORTED_MODULE_7__["$themeConfig"].layout.enableScrollToTop; // If skin is dark when initialized => Add class to body

    if (skin.value === "dark") document.body.classList.add("dark-layout"); // Provide toast for Composition API usage
    // This for those apps/components which uses composition API
    // Demos will still use Options API for ease

    Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_8__["provideToast"])({
      hideProgressBar: true,
      closeOnClick: false,
      closeButton: false,
      icon: false,
      timeout: 3000,
      transition: "Vue-Toastification__fade"
    }); // Set Window Width in store

    _store__WEBPACK_IMPORTED_MODULE_12__["default"].commit("app/UPDATE_WINDOW_WIDTH", window.innerWidth);

    var _useWindowSize = Object(_vueuse_core__WEBPACK_IMPORTED_MODULE_11__["useWindowSize"])(),
        windowWidth = _useWindowSize.width;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_9__["watch"])(windowWidth, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_12__["default"].commit("app/UPDATE_WINDOW_WIDTH", val);
    });
    return {
      skinClasses: skinClasses,
      enableScrollToTop: enableScrollToTop
    };
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/index.js ***!
  \*************************************************/
/*! exports provided: install, NAME, BVConfigPlugin, BVConfig, BootstrapVue, BVModalPlugin, BVToastPlugin, IconsPlugin, BootstrapVueIcons, BIcon, BIconstack, BIconBlank, BIconAlarm, BIconAlarmFill, BIconAlignBottom, BIconAlignCenter, BIconAlignEnd, BIconAlignMiddle, BIconAlignStart, BIconAlignTop, BIconAlt, BIconApp, BIconAppIndicator, BIconArchive, BIconArchiveFill, BIconArrow90degDown, BIconArrow90degLeft, BIconArrow90degRight, BIconArrow90degUp, BIconArrowBarDown, BIconArrowBarLeft, BIconArrowBarRight, BIconArrowBarUp, BIconArrowClockwise, BIconArrowCounterclockwise, BIconArrowDown, BIconArrowDownCircle, BIconArrowDownCircleFill, BIconArrowDownLeft, BIconArrowDownLeftCircle, BIconArrowDownLeftCircleFill, BIconArrowDownLeftSquare, BIconArrowDownLeftSquareFill, BIconArrowDownRight, BIconArrowDownRightCircle, BIconArrowDownRightCircleFill, BIconArrowDownRightSquare, BIconArrowDownRightSquareFill, BIconArrowDownShort, BIconArrowDownSquare, BIconArrowDownSquareFill, BIconArrowDownUp, BIconArrowLeft, BIconArrowLeftCircle, BIconArrowLeftCircleFill, BIconArrowLeftRight, BIconArrowLeftShort, BIconArrowLeftSquare, BIconArrowLeftSquareFill, BIconArrowRepeat, BIconArrowReturnLeft, BIconArrowReturnRight, BIconArrowRight, BIconArrowRightCircle, BIconArrowRightCircleFill, BIconArrowRightShort, BIconArrowRightSquare, BIconArrowRightSquareFill, BIconArrowUp, BIconArrowUpCircle, BIconArrowUpCircleFill, BIconArrowUpLeft, BIconArrowUpLeftCircle, BIconArrowUpLeftCircleFill, BIconArrowUpLeftSquare, BIconArrowUpLeftSquareFill, BIconArrowUpRight, BIconArrowUpRightCircle, BIconArrowUpRightCircleFill, BIconArrowUpRightSquare, BIconArrowUpRightSquareFill, BIconArrowUpShort, BIconArrowUpSquare, BIconArrowUpSquareFill, BIconArrowsAngleContract, BIconArrowsAngleExpand, BIconArrowsCollapse, BIconArrowsExpand, BIconArrowsFullscreen, BIconArrowsMove, BIconAspectRatio, BIconAspectRatioFill, BIconAsterisk, BIconAt, BIconAward, BIconAwardFill, BIconBack, BIconBackspace, BIconBackspaceFill, BIconBackspaceReverse, BIconBackspaceReverseFill, BIconBadge4k, BIconBadge4kFill, BIconBadge8k, BIconBadge8kFill, BIconBadgeAd, BIconBadgeAdFill, BIconBadgeCc, BIconBadgeCcFill, BIconBadgeHd, BIconBadgeHdFill, BIconBadgeTm, BIconBadgeTmFill, BIconBadgeVo, BIconBadgeVoFill, BIconBag, BIconBagCheck, BIconBagCheckFill, BIconBagDash, BIconBagDashFill, BIconBagFill, BIconBagPlus, BIconBagPlusFill, BIconBagX, BIconBagXFill, BIconBarChart, BIconBarChartFill, BIconBarChartLine, BIconBarChartLineFill, BIconBarChartSteps, BIconBasket, BIconBasket2, BIconBasket2Fill, BIconBasket3, BIconBasket3Fill, BIconBasketFill, BIconBattery, BIconBatteryCharging, BIconBatteryFull, BIconBatteryHalf, BIconBell, BIconBellFill, BIconBezier, BIconBezier2, BIconBicycle, BIconBinoculars, BIconBinocularsFill, BIconBlockquoteLeft, BIconBlockquoteRight, BIconBook, BIconBookFill, BIconBookHalf, BIconBookmark, BIconBookmarkCheck, BIconBookmarkCheckFill, BIconBookmarkDash, BIconBookmarkDashFill, BIconBookmarkFill, BIconBookmarkHeart, BIconBookmarkHeartFill, BIconBookmarkPlus, BIconBookmarkPlusFill, BIconBookmarkStar, BIconBookmarkStarFill, BIconBookmarkX, BIconBookmarkXFill, BIconBookmarks, BIconBookmarksFill, BIconBookshelf, BIconBootstrap, BIconBootstrapFill, BIconBootstrapReboot, BIconBorderStyle, BIconBorderWidth, BIconBoundingBox, BIconBoundingBoxCircles, BIconBox, BIconBoxArrowDown, BIconBoxArrowDownLeft, BIconBoxArrowDownRight, BIconBoxArrowInDown, BIconBoxArrowInDownLeft, BIconBoxArrowInDownRight, BIconBoxArrowInLeft, BIconBoxArrowInRight, BIconBoxArrowInUp, BIconBoxArrowInUpLeft, BIconBoxArrowInUpRight, BIconBoxArrowLeft, BIconBoxArrowRight, BIconBoxArrowUp, BIconBoxArrowUpLeft, BIconBoxArrowUpRight, BIconBoxSeam, BIconBraces, BIconBricks, BIconBriefcase, BIconBriefcaseFill, BIconBrightnessAltHigh, BIconBrightnessAltHighFill, BIconBrightnessAltLow, BIconBrightnessAltLowFill, BIconBrightnessHigh, BIconBrightnessHighFill, BIconBrightnessLow, BIconBrightnessLowFill, BIconBroadcast, BIconBroadcastPin, BIconBrush, BIconBrushFill, BIconBucket, BIconBucketFill, BIconBug, BIconBugFill, BIconBuilding, BIconBullseye, BIconCalculator, BIconCalculatorFill, BIconCalendar, BIconCalendar2, BIconCalendar2Check, BIconCalendar2CheckFill, BIconCalendar2Date, BIconCalendar2DateFill, BIconCalendar2Day, BIconCalendar2DayFill, BIconCalendar2Event, BIconCalendar2EventFill, BIconCalendar2Fill, BIconCalendar2Minus, BIconCalendar2MinusFill, BIconCalendar2Month, BIconCalendar2MonthFill, BIconCalendar2Plus, BIconCalendar2PlusFill, BIconCalendar2Range, BIconCalendar2RangeFill, BIconCalendar2Week, BIconCalendar2WeekFill, BIconCalendar2X, BIconCalendar2XFill, BIconCalendar3, BIconCalendar3Event, BIconCalendar3EventFill, BIconCalendar3Fill, BIconCalendar3Range, BIconCalendar3RangeFill, BIconCalendar3Week, BIconCalendar3WeekFill, BIconCalendar4, BIconCalendar4Event, BIconCalendar4Range, BIconCalendar4Week, BIconCalendarCheck, BIconCalendarCheckFill, BIconCalendarDate, BIconCalendarDateFill, BIconCalendarDay, BIconCalendarDayFill, BIconCalendarEvent, BIconCalendarEventFill, BIconCalendarFill, BIconCalendarMinus, BIconCalendarMinusFill, BIconCalendarMonth, BIconCalendarMonthFill, BIconCalendarPlus, BIconCalendarPlusFill, BIconCalendarRange, BIconCalendarRangeFill, BIconCalendarWeek, BIconCalendarWeekFill, BIconCalendarX, BIconCalendarXFill, BIconCamera, BIconCamera2, BIconCameraFill, BIconCameraReels, BIconCameraReelsFill, BIconCameraVideo, BIconCameraVideoFill, BIconCameraVideoOff, BIconCameraVideoOffFill, BIconCapslock, BIconCapslockFill, BIconCardChecklist, BIconCardHeading, BIconCardImage, BIconCardList, BIconCardText, BIconCaretDown, BIconCaretDownFill, BIconCaretDownSquare, BIconCaretDownSquareFill, BIconCaretLeft, BIconCaretLeftFill, BIconCaretLeftSquare, BIconCaretLeftSquareFill, BIconCaretRight, BIconCaretRightFill, BIconCaretRightSquare, BIconCaretRightSquareFill, BIconCaretUp, BIconCaretUpFill, BIconCaretUpSquare, BIconCaretUpSquareFill, BIconCart, BIconCart2, BIconCart3, BIconCart4, BIconCartCheck, BIconCartCheckFill, BIconCartDash, BIconCartDashFill, BIconCartFill, BIconCartPlus, BIconCartPlusFill, BIconCartX, BIconCartXFill, BIconCash, BIconCashStack, BIconCast, BIconChat, BIconChatDots, BIconChatDotsFill, BIconChatFill, BIconChatLeft, BIconChatLeftDots, BIconChatLeftDotsFill, BIconChatLeftFill, BIconChatLeftQuote, BIconChatLeftQuoteFill, BIconChatLeftText, BIconChatLeftTextFill, BIconChatQuote, BIconChatQuoteFill, BIconChatRight, BIconChatRightDots, BIconChatRightDotsFill, BIconChatRightFill, BIconChatRightQuote, BIconChatRightQuoteFill, BIconChatRightText, BIconChatRightTextFill, BIconChatSquare, BIconChatSquareDots, BIconChatSquareDotsFill, BIconChatSquareFill, BIconChatSquareQuote, BIconChatSquareQuoteFill, BIconChatSquareText, BIconChatSquareTextFill, BIconChatText, BIconChatTextFill, BIconCheck, BIconCheck2, BIconCheck2All, BIconCheck2Circle, BIconCheck2Square, BIconCheckAll, BIconCheckCircle, BIconCheckCircleFill, BIconCheckSquare, BIconCheckSquareFill, BIconChevronBarContract, BIconChevronBarDown, BIconChevronBarExpand, BIconChevronBarLeft, BIconChevronBarRight, BIconChevronBarUp, BIconChevronCompactDown, BIconChevronCompactLeft, BIconChevronCompactRight, BIconChevronCompactUp, BIconChevronContract, BIconChevronDoubleDown, BIconChevronDoubleLeft, BIconChevronDoubleRight, BIconChevronDoubleUp, BIconChevronDown, BIconChevronExpand, BIconChevronLeft, BIconChevronRight, BIconChevronUp, BIconCircle, BIconCircleFill, BIconCircleHalf, BIconCircleSquare, BIconClipboard, BIconClipboardCheck, BIconClipboardData, BIconClipboardMinus, BIconClipboardPlus, BIconClipboardX, BIconClock, BIconClockFill, BIconClockHistory, BIconCloud, BIconCloudArrowDown, BIconCloudArrowDownFill, BIconCloudArrowUp, BIconCloudArrowUpFill, BIconCloudCheck, BIconCloudCheckFill, BIconCloudDownload, BIconCloudDownloadFill, BIconCloudFill, BIconCloudMinus, BIconCloudMinusFill, BIconCloudPlus, BIconCloudPlusFill, BIconCloudSlash, BIconCloudSlashFill, BIconCloudUpload, BIconCloudUploadFill, BIconCode, BIconCodeSlash, BIconCodeSquare, BIconCollection, BIconCollectionFill, BIconCollectionPlay, BIconCollectionPlayFill, BIconColumns, BIconColumnsGap, BIconCommand, BIconCompass, BIconCompassFill, BIconCone, BIconConeStriped, BIconController, BIconCpu, BIconCpuFill, BIconCreditCard, BIconCreditCard2Back, BIconCreditCard2BackFill, BIconCreditCard2Front, BIconCreditCard2FrontFill, BIconCreditCardFill, BIconCrop, BIconCup, BIconCupFill, BIconCupStraw, BIconCursor, BIconCursorFill, BIconCursorText, BIconDash, BIconDashCircle, BIconDashCircleFill, BIconDashSquare, BIconDashSquareFill, BIconDiagram2, BIconDiagram2Fill, BIconDiagram3, BIconDiagram3Fill, BIconDiamond, BIconDiamondFill, BIconDiamondHalf, BIconDice1, BIconDice1Fill, BIconDice2, BIconDice2Fill, BIconDice3, BIconDice3Fill, BIconDice4, BIconDice4Fill, BIconDice5, BIconDice5Fill, BIconDice6, BIconDice6Fill, BIconDisc, BIconDiscFill, BIconDiscord, BIconDisplay, BIconDisplayFill, BIconDistributeHorizontal, BIconDistributeVertical, BIconDoorClosed, BIconDoorClosedFill, BIconDoorOpen, BIconDoorOpenFill, BIconDot, BIconDownload, BIconDroplet, BIconDropletFill, BIconDropletHalf, BIconEarbuds, BIconEasel, BIconEaselFill, BIconEgg, BIconEggFill, BIconEggFried, BIconEject, BIconEjectFill, BIconEmojiAngry, BIconEmojiAngryFill, BIconEmojiDizzy, BIconEmojiDizzyFill, BIconEmojiExpressionless, BIconEmojiExpressionlessFill, BIconEmojiFrown, BIconEmojiFrownFill, BIconEmojiHeartEyes, BIconEmojiHeartEyesFill, BIconEmojiLaughing, BIconEmojiLaughingFill, BIconEmojiNeutral, BIconEmojiNeutralFill, BIconEmojiSmile, BIconEmojiSmileFill, BIconEmojiSmileUpsideDown, BIconEmojiSmileUpsideDownFill, BIconEmojiSunglasses, BIconEmojiSunglassesFill, BIconEmojiWink, BIconEmojiWinkFill, BIconEnvelope, BIconEnvelopeFill, BIconEnvelopeOpen, BIconEnvelopeOpenFill, BIconExclamation, BIconExclamationCircle, BIconExclamationCircleFill, BIconExclamationDiamond, BIconExclamationDiamondFill, BIconExclamationOctagon, BIconExclamationOctagonFill, BIconExclamationSquare, BIconExclamationSquareFill, BIconExclamationTriangle, BIconExclamationTriangleFill, BIconExclude, BIconEye, BIconEyeFill, BIconEyeSlash, BIconEyeSlashFill, BIconEyeglasses, BIconFacebook, BIconFile, BIconFileArrowDown, BIconFileArrowDownFill, BIconFileArrowUp, BIconFileArrowUpFill, BIconFileBarGraph, BIconFileBarGraphFill, BIconFileBinary, BIconFileBinaryFill, BIconFileBreak, BIconFileBreakFill, BIconFileCheck, BIconFileCheckFill, BIconFileCode, BIconFileCodeFill, BIconFileDiff, BIconFileDiffFill, BIconFileEarmark, BIconFileEarmarkArrowDown, BIconFileEarmarkArrowDownFill, BIconFileEarmarkArrowUp, BIconFileEarmarkArrowUpFill, BIconFileEarmarkBarGraph, BIconFileEarmarkBarGraphFill, BIconFileEarmarkBinary, BIconFileEarmarkBinaryFill, BIconFileEarmarkBreak, BIconFileEarmarkBreakFill, BIconFileEarmarkCheck, BIconFileEarmarkCheckFill, BIconFileEarmarkCode, BIconFileEarmarkCodeFill, BIconFileEarmarkDiff, BIconFileEarmarkDiffFill, BIconFileEarmarkEasel, BIconFileEarmarkEaselFill, BIconFileEarmarkExcel, BIconFileEarmarkExcelFill, BIconFileEarmarkFill, BIconFileEarmarkFont, BIconFileEarmarkFontFill, BIconFileEarmarkImage, BIconFileEarmarkImageFill, BIconFileEarmarkLock, BIconFileEarmarkLock2, BIconFileEarmarkLock2Fill, BIconFileEarmarkLockFill, BIconFileEarmarkMedical, BIconFileEarmarkMedicalFill, BIconFileEarmarkMinus, BIconFileEarmarkMinusFill, BIconFileEarmarkMusic, BIconFileEarmarkMusicFill, BIconFileEarmarkPerson, BIconFileEarmarkPersonFill, BIconFileEarmarkPlay, BIconFileEarmarkPlayFill, BIconFileEarmarkPlus, BIconFileEarmarkPlusFill, BIconFileEarmarkPost, BIconFileEarmarkPostFill, BIconFileEarmarkPpt, BIconFileEarmarkPptFill, BIconFileEarmarkRichtext, BIconFileEarmarkRichtextFill, BIconFileEarmarkRuled, BIconFileEarmarkRuledFill, BIconFileEarmarkSlides, BIconFileEarmarkSlidesFill, BIconFileEarmarkSpreadsheet, BIconFileEarmarkSpreadsheetFill, BIconFileEarmarkText, BIconFileEarmarkTextFill, BIconFileEarmarkWord, BIconFileEarmarkWordFill, BIconFileEarmarkX, BIconFileEarmarkXFill, BIconFileEarmarkZip, BIconFileEarmarkZipFill, BIconFileEasel, BIconFileEaselFill, BIconFileExcel, BIconFileExcelFill, BIconFileFill, BIconFileFont, BIconFileFontFill, BIconFileImage, BIconFileImageFill, BIconFileLock, BIconFileLock2, BIconFileLock2Fill, BIconFileLockFill, BIconFileMedical, BIconFileMedicalFill, BIconFileMinus, BIconFileMinusFill, BIconFileMusic, BIconFileMusicFill, BIconFilePerson, BIconFilePersonFill, BIconFilePlay, BIconFilePlayFill, BIconFilePlus, BIconFilePlusFill, BIconFilePost, BIconFilePostFill, BIconFilePpt, BIconFilePptFill, BIconFileRichtext, BIconFileRichtextFill, BIconFileRuled, BIconFileRuledFill, BIconFileSlides, BIconFileSlidesFill, BIconFileSpreadsheet, BIconFileSpreadsheetFill, BIconFileText, BIconFileTextFill, BIconFileWord, BIconFileWordFill, BIconFileX, BIconFileXFill, BIconFileZip, BIconFileZipFill, BIconFiles, BIconFilesAlt, BIconFilm, BIconFilter, BIconFilterCircle, BIconFilterCircleFill, BIconFilterLeft, BIconFilterRight, BIconFilterSquare, BIconFilterSquareFill, BIconFlag, BIconFlagFill, BIconFlower1, BIconFlower2, BIconFlower3, BIconFolder, BIconFolder2, BIconFolder2Open, BIconFolderCheck, BIconFolderFill, BIconFolderMinus, BIconFolderPlus, BIconFolderSymlink, BIconFolderSymlinkFill, BIconFolderX, BIconFonts, BIconForward, BIconForwardFill, BIconFront, BIconFullscreen, BIconFullscreenExit, BIconFunnel, BIconFunnelFill, BIconGear, BIconGearFill, BIconGearWide, BIconGearWideConnected, BIconGem, BIconGeo, BIconGeoAlt, BIconGeoAltFill, BIconGeoFill, BIconGift, BIconGiftFill, BIconGithub, BIconGlobe, BIconGlobe2, BIconGoogle, BIconGraphDown, BIconGraphUp, BIconGrid, BIconGrid1x2, BIconGrid1x2Fill, BIconGrid3x2, BIconGrid3x2Gap, BIconGrid3x2GapFill, BIconGrid3x3, BIconGrid3x3Gap, BIconGrid3x3GapFill, BIconGridFill, BIconGripHorizontal, BIconGripVertical, BIconHammer, BIconHandIndex, BIconHandIndexThumb, BIconHandThumbsDown, BIconHandThumbsUp, BIconHandbag, BIconHandbagFill, BIconHash, BIconHdd, BIconHddFill, BIconHddNetwork, BIconHddNetworkFill, BIconHddRack, BIconHddRackFill, BIconHddStack, BIconHddStackFill, BIconHeadphones, BIconHeadset, BIconHeart, BIconHeartFill, BIconHeartHalf, BIconHeptagon, BIconHeptagonFill, BIconHeptagonHalf, BIconHexagon, BIconHexagonFill, BIconHexagonHalf, BIconHourglass, BIconHourglassBottom, BIconHourglassSplit, BIconHourglassTop, BIconHouse, BIconHouseDoor, BIconHouseDoorFill, BIconHouseFill, BIconHr, BIconImage, BIconImageAlt, BIconImageFill, BIconImages, BIconInbox, BIconInboxFill, BIconInboxes, BIconInboxesFill, BIconInfo, BIconInfoCircle, BIconInfoCircleFill, BIconInfoSquare, BIconInfoSquareFill, BIconInputCursor, BIconInputCursorText, BIconInstagram, BIconIntersect, BIconJournal, BIconJournalAlbum, BIconJournalArrowDown, BIconJournalArrowUp, BIconJournalBookmark, BIconJournalBookmarkFill, BIconJournalCheck, BIconJournalCode, BIconJournalMedical, BIconJournalMinus, BIconJournalPlus, BIconJournalRichtext, BIconJournalText, BIconJournalX, BIconJournals, BIconJoystick, BIconJustify, BIconJustifyLeft, BIconJustifyRight, BIconKanban, BIconKanbanFill, BIconKey, BIconKeyFill, BIconKeyboard, BIconKeyboardFill, BIconLadder, BIconLamp, BIconLampFill, BIconLaptop, BIconLaptopFill, BIconLayers, BIconLayersFill, BIconLayersHalf, BIconLayoutSidebar, BIconLayoutSidebarInset, BIconLayoutSidebarInsetReverse, BIconLayoutSidebarReverse, BIconLayoutSplit, BIconLayoutTextSidebar, BIconLayoutTextSidebarReverse, BIconLayoutTextWindow, BIconLayoutTextWindowReverse, BIconLayoutThreeColumns, BIconLayoutWtf, BIconLifePreserver, BIconLightning, BIconLightningFill, BIconLink, BIconLink45deg, BIconLinkedin, BIconList, BIconListCheck, BIconListNested, BIconListOl, BIconListStars, BIconListTask, BIconListUl, BIconLock, BIconLockFill, BIconMailbox, BIconMailbox2, BIconMap, BIconMapFill, BIconMarkdown, BIconMarkdownFill, BIconMenuApp, BIconMenuAppFill, BIconMenuButton, BIconMenuButtonFill, BIconMenuButtonWide, BIconMenuButtonWideFill, BIconMenuDown, BIconMenuUp, BIconMic, BIconMicFill, BIconMicMute, BIconMicMuteFill, BIconMinecart, BIconMinecartLoaded, BIconMoon, BIconMouse, BIconMouse2, BIconMouse3, BIconMusicNote, BIconMusicNoteBeamed, BIconMusicNoteList, BIconMusicPlayer, BIconMusicPlayerFill, BIconNewspaper, BIconNodeMinus, BIconNodeMinusFill, BIconNodePlus, BIconNodePlusFill, BIconNut, BIconNutFill, BIconOctagon, BIconOctagonFill, BIconOctagonHalf, BIconOption, BIconOutlet, BIconPaperclip, BIconParagraph, BIconPatchCheck, BIconPatchCheckFill, BIconPatchExclamation, BIconPatchExclamationFill, BIconPatchMinus, BIconPatchMinusFill, BIconPatchPlus, BIconPatchPlusFill, BIconPatchQuestion, BIconPatchQuestionFill, BIconPause, BIconPauseBtn, BIconPauseBtnFill, BIconPauseCircle, BIconPauseCircleFill, BIconPauseFill, BIconPeace, BIconPeaceFill, BIconPen, BIconPenFill, BIconPencil, BIconPencilFill, BIconPencilSquare, BIconPentagon, BIconPentagonFill, BIconPentagonHalf, BIconPeople, BIconPeopleFill, BIconPercent, BIconPerson, BIconPersonBadge, BIconPersonBadgeFill, BIconPersonBoundingBox, BIconPersonCheck, BIconPersonCheckFill, BIconPersonCircle, BIconPersonDash, BIconPersonDashFill, BIconPersonFill, BIconPersonLinesFill, BIconPersonPlus, BIconPersonPlusFill, BIconPersonSquare, BIconPersonX, BIconPersonXFill, BIconPhone, BIconPhoneFill, BIconPhoneLandscape, BIconPhoneLandscapeFill, BIconPhoneVibrate, BIconPieChart, BIconPieChartFill, BIconPip, BIconPipFill, BIconPlay, BIconPlayBtn, BIconPlayBtnFill, BIconPlayCircle, BIconPlayCircleFill, BIconPlayFill, BIconPlug, BIconPlugFill, BIconPlus, BIconPlusCircle, BIconPlusCircleFill, BIconPlusSquare, BIconPlusSquareFill, BIconPower, BIconPrinter, BIconPrinterFill, BIconPuzzle, BIconPuzzleFill, BIconQuestion, BIconQuestionCircle, BIconQuestionCircleFill, BIconQuestionDiamond, BIconQuestionDiamondFill, BIconQuestionOctagon, BIconQuestionOctagonFill, BIconQuestionSquare, BIconQuestionSquareFill, BIconReceipt, BIconReceiptCutoff, BIconReception0, BIconReception1, BIconReception2, BIconReception3, BIconReception4, BIconRecord, BIconRecord2, BIconRecord2Fill, BIconRecordBtn, BIconRecordBtnFill, BIconRecordCircle, BIconRecordCircleFill, BIconRecordFill, BIconReply, BIconReplyAll, BIconReplyAllFill, BIconReplyFill, BIconRss, BIconRssFill, BIconScissors, BIconScrewdriver, BIconSearch, BIconSegmentedNav, BIconServer, BIconShare, BIconShareFill, BIconShield, BIconShieldCheck, BIconShieldExclamation, BIconShieldFill, BIconShieldFillCheck, BIconShieldFillExclamation, BIconShieldFillMinus, BIconShieldFillPlus, BIconShieldFillX, BIconShieldLock, BIconShieldLockFill, BIconShieldMinus, BIconShieldPlus, BIconShieldShaded, BIconShieldSlash, BIconShieldSlashFill, BIconShieldX, BIconShift, BIconShiftFill, BIconShop, BIconShopWindow, BIconShuffle, BIconSignpost, BIconSignpost2, BIconSignpost2Fill, BIconSignpostFill, BIconSignpostSplit, BIconSignpostSplitFill, BIconSim, BIconSimFill, BIconSkipBackward, BIconSkipBackwardBtn, BIconSkipBackwardBtnFill, BIconSkipBackwardCircle, BIconSkipBackwardCircleFill, BIconSkipBackwardFill, BIconSkipEnd, BIconSkipEndBtn, BIconSkipEndBtnFill, BIconSkipEndCircle, BIconSkipEndCircleFill, BIconSkipEndFill, BIconSkipForward, BIconSkipForwardBtn, BIconSkipForwardBtnFill, BIconSkipForwardCircle, BIconSkipForwardCircleFill, BIconSkipForwardFill, BIconSkipStart, BIconSkipStartBtn, BIconSkipStartBtnFill, BIconSkipStartCircle, BIconSkipStartCircleFill, BIconSkipStartFill, BIconSlack, BIconSlash, BIconSlashCircle, BIconSlashCircleFill, BIconSlashSquare, BIconSlashSquareFill, BIconSliders, BIconSmartwatch, BIconSortAlphaDown, BIconSortAlphaDownAlt, BIconSortAlphaUp, BIconSortAlphaUpAlt, BIconSortDown, BIconSortDownAlt, BIconSortNumericDown, BIconSortNumericDownAlt, BIconSortNumericUp, BIconSortNumericUpAlt, BIconSortUp, BIconSortUpAlt, BIconSoundwave, BIconSpeaker, BIconSpeakerFill, BIconSpellcheck, BIconSquare, BIconSquareFill, BIconSquareHalf, BIconStar, BIconStarFill, BIconStarHalf, BIconStickies, BIconStickiesFill, BIconSticky, BIconStickyFill, BIconStop, BIconStopBtn, BIconStopBtnFill, BIconStopCircle, BIconStopCircleFill, BIconStopFill, BIconStoplights, BIconStoplightsFill, BIconStopwatch, BIconStopwatchFill, BIconSubtract, BIconSuitClub, BIconSuitClubFill, BIconSuitDiamond, BIconSuitDiamondFill, BIconSuitHeart, BIconSuitHeartFill, BIconSuitSpade, BIconSuitSpadeFill, BIconSun, BIconSunglasses, BIconTable, BIconTablet, BIconTabletFill, BIconTabletLandscape, BIconTabletLandscapeFill, BIconTag, BIconTagFill, BIconTags, BIconTagsFill, BIconTelephone, BIconTelephoneFill, BIconTelephoneForward, BIconTelephoneForwardFill, BIconTelephoneInbound, BIconTelephoneInboundFill, BIconTelephoneMinus, BIconTelephoneMinusFill, BIconTelephoneOutbound, BIconTelephoneOutboundFill, BIconTelephonePlus, BIconTelephonePlusFill, BIconTelephoneX, BIconTelephoneXFill, BIconTerminal, BIconTerminalFill, BIconTextCenter, BIconTextIndentLeft, BIconTextIndentRight, BIconTextLeft, BIconTextParagraph, BIconTextRight, BIconTextarea, BIconTextareaResize, BIconTextareaT, BIconThermometer, BIconThermometerHalf, BIconThreeDots, BIconThreeDotsVertical, BIconToggle2Off, BIconToggle2On, BIconToggleOff, BIconToggleOn, BIconToggles, BIconToggles2, BIconTools, BIconTrash, BIconTrash2, BIconTrash2Fill, BIconTrashFill, BIconTree, BIconTreeFill, BIconTriangle, BIconTriangleFill, BIconTriangleHalf, BIconTrophy, BIconTrophyFill, BIconTruck, BIconTruckFlatbed, BIconTv, BIconTvFill, BIconTwitch, BIconTwitter, BIconType, BIconTypeBold, BIconTypeH1, BIconTypeH2, BIconTypeH3, BIconTypeItalic, BIconTypeStrikethrough, BIconTypeUnderline, BIconUiChecks, BIconUiChecksGrid, BIconUiRadios, BIconUiRadiosGrid, BIconUnion, BIconUnlock, BIconUnlockFill, BIconUpc, BIconUpcScan, BIconUpload, BIconVectorPen, BIconViewList, BIconViewStacked, BIconVinyl, BIconVinylFill, BIconVoicemail, BIconVolumeDown, BIconVolumeDownFill, BIconVolumeMute, BIconVolumeMuteFill, BIconVolumeOff, BIconVolumeOffFill, BIconVolumeUp, BIconVolumeUpFill, BIconVr, BIconWallet, BIconWallet2, BIconWalletFill, BIconWatch, BIconWifi, BIconWifi1, BIconWifi2, BIconWifiOff, BIconWindow, BIconWrench, BIconX, BIconXCircle, BIconXCircleFill, BIconXDiamond, BIconXDiamondFill, BIconXOctagon, BIconXOctagonFill, BIconXSquare, BIconXSquareFill, BIconYoutube, BIconZoomIn, BIconZoomOut, AlertPlugin, BAlert, AspectPlugin, BAspect, AvatarPlugin, BAvatar, BAvatarGroup, BadgePlugin, BBadge, BreadcrumbPlugin, BBreadcrumb, BBreadcrumbItem, ButtonPlugin, BButton, BButtonClose, ButtonGroupPlugin, BButtonGroup, ButtonToolbarPlugin, BButtonToolbar, CalendarPlugin, BCalendar, CardPlugin, BCard, BCardBody, BCardFooter, BCardGroup, BCardHeader, BCardImg, BCardImgLazy, BCardSubTitle, BCardText, BCardTitle, CarouselPlugin, BCarousel, BCarouselSlide, CollapsePlugin, BCollapse, DropdownPlugin, BDropdown, BDropdownItem, BDropdownItemButton, BDropdownDivider, BDropdownForm, BDropdownGroup, BDropdownHeader, BDropdownText, EmbedPlugin, BEmbed, FormPlugin, BForm, BFormDatalist, BFormText, BFormInvalidFeedback, BFormValidFeedback, FormCheckboxPlugin, BFormCheckbox, BFormCheckboxGroup, FormDatepickerPlugin, BFormDatepicker, FormFilePlugin, BFormFile, FormGroupPlugin, BFormGroup, FormInputPlugin, BFormInput, FormRadioPlugin, BFormRadio, BFormRadioGroup, FormRatingPlugin, BFormRating, FormTagsPlugin, BFormTags, BFormTag, FormSelectPlugin, BFormSelect, BFormSelectOption, BFormSelectOptionGroup, FormSpinbuttonPlugin, BFormSpinbutton, FormTextareaPlugin, BFormTextarea, FormTimepickerPlugin, BFormTimepicker, ImagePlugin, BImg, BImgLazy, InputGroupPlugin, BInputGroup, BInputGroupAddon, BInputGroupAppend, BInputGroupPrepend, BInputGroupText, JumbotronPlugin, BJumbotron, LayoutPlugin, BContainer, BRow, BCol, BFormRow, LinkPlugin, BLink, ListGroupPlugin, BListGroup, BListGroupItem, MediaPlugin, BMedia, BMediaAside, BMediaBody, ModalPlugin, BModal, NavPlugin, BNav, BNavForm, BNavItem, BNavItemDropdown, BNavText, NavbarPlugin, BNavbar, BNavbarBrand, BNavbarNav, BNavbarToggle, OverlayPlugin, BOverlay, PaginationPlugin, BPagination, PaginationNavPlugin, BPaginationNav, PopoverPlugin, BPopover, ProgressPlugin, BProgress, BProgressBar, SidebarPlugin, BSidebar, SkeletonPlugin, BSkeleton, BSkeletonIcon, BSkeletonImg, BSkeletonTable, BSkeletonWrapper, SpinnerPlugin, BSpinner, TablePlugin, TableLitePlugin, TableSimplePlugin, BTable, BTableLite, BTableSimple, BTbody, BThead, BTfoot, BTr, BTh, BTd, TabsPlugin, BTabs, BTab, TimePlugin, BTime, ToastPlugin, BToast, BToaster, TooltipPlugin, BTooltip, VBHoverPlugin, VBHover, VBModalPlugin, VBModal, VBPopoverPlugin, VBPopover, VBScrollspyPlugin, VBScrollspy, VBTogglePlugin, VBToggle, VBTooltipPlugin, VBTooltip, VBVisiblePlugin, VBVisible, default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\bootstrap-vue\\esm\\index.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.concat.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.filter.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find-index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.find-index.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.find.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.includes.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.map.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.slice.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.slice.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.slice.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.sort.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.sort.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.sort.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.array.splice.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.function.name.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.json.stringify.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.json.stringify.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.json.stringify.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.number.constructor.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.object.entries.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.object.to-string.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.regexp.exec.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.string.includes.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.string.iterator.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.string.match.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.string.split.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\es.string.trim.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\web.dom-collections.for-each.js'");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\core-js\\modules\\web.dom-collections.iterator.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/@core/scss/core.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./resources/js/src/@core/scss/core.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources\\js\\src\\@core\\scss\\base\\bootstrap-extended\\_include.scss 14:9  @import\n  resources\\js\\src\\@core\\scss\\base\\bootstrap.scss 10:9                    @import\n  resources\\js\\src\\@core\\scss\\core.scss 2:9                               root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/@core/scss/vue/libs/toastification.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./resources/js/src/@core/scss/vue/libs/toastification.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources\\js\\src\\@core\\scss\\base\\bootstrap-extended\\_include.scss 14:9  @import\n  resources\\js\\src\\@core\\scss\\vue\\libs\\toastification.scss 2:9            root stylesheet");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/assets/scss/style.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./resources/js/src/assets/scss/style.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*================================================================================\n\nNOTE:\n------\nPLACE HERE YOUR OWN SCSS CODES AND IF NEEDED, OVERRIDE THE STYLES FROM THE OTHER STYLESHEETS.\nWE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR STYLES IT'S BETTER LIKE THIS.  */", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "svg.feather {\n  outline: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".btn-scroll-to-top[data-v-480ba03e] {\n  position: fixed;\n  bottom: 5%;\n  z-index: 99;\n  opacity: 0;\n  transition: all 0.5s ease;\n}[dir=ltr] .btn-scroll-to-top[data-v-480ba03e] {\n  right: 30px;\n}[dir=rtl] .btn-scroll-to-top[data-v-480ba03e] {\n  left: 30px;\n}\n.btn-scroll-to-top.show[data-v-480ba03e] {\n  opacity: 1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/@core/assets/fonts/feather/iconfont.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/src/@core/assets/fonts/feather/iconfont.css ***!
  \**************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./fonts/feather.eot?t=1525787366991 */ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.eot?t=1525787366991");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./fonts/feather.woff?t=1525787366991 */ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.woff?t=1525787366991");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./fonts/feather.ttf?t=1525787366991 */ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.ttf?t=1525787366991");
var ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./fonts/feather.svg?t=1525787366991 */ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.svg?t=1525787366991");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___, { hash: "#feather" });
// Module
exports.push([module.i, "@font-face {\r\n  font-family: 'feather';\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "); /* IE9*/\r\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('embedded-opentype'),\r\n     url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('woff'),\r\n     url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format('truetype'),\r\n     url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")\r\n      format('svg'); /* iOS 4.1- */\r\n}\r\n\r\n.feather {\r\n  /* use !important to prevent issues with browser extensions that change fonts */\r\n  font-family: 'feather' !important;\r\n  speak: none;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n\r\n  /* Better Font Rendering =========== */\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.icon-alert-octagon:before {\r\n  content: '\\e81b';\r\n}\r\n\r\n.icon-alert-circle:before {\r\n  content: '\\e81c';\r\n}\r\n\r\n.icon-activity:before {\r\n  content: '\\e81d';\r\n}\r\n\r\n.icon-alert-triangle:before {\r\n  content: '\\e81e';\r\n}\r\n\r\n.icon-align-center:before {\r\n  content: '\\e81f';\r\n}\r\n\r\n.icon-airplay:before {\r\n  content: '\\e820';\r\n}\r\n\r\n.icon-align-justify:before {\r\n  content: '\\e821';\r\n}\r\n\r\n.icon-align-left:before {\r\n  content: '\\e822';\r\n}\r\n\r\n.icon-align-right:before {\r\n  content: '\\e823';\r\n}\r\n\r\n.icon-arrow-down-left:before {\r\n  content: '\\e824';\r\n}\r\n\r\n.icon-arrow-down-right:before {\r\n  content: '\\e825';\r\n}\r\n\r\n.icon-anchor:before {\r\n  content: '\\e826';\r\n}\r\n\r\n.icon-aperture:before {\r\n  content: '\\e827';\r\n}\r\n\r\n.icon-arrow-left:before {\r\n  content: '\\e828';\r\n}\r\n\r\n.icon-arrow-right:before {\r\n  content: '\\e829';\r\n}\r\n\r\n.icon-arrow-down:before {\r\n  content: '\\e82a';\r\n}\r\n\r\n.icon-arrow-up-left:before {\r\n  content: '\\e82b';\r\n}\r\n\r\n.icon-arrow-up-right:before {\r\n  content: '\\e82c';\r\n}\r\n\r\n.icon-arrow-up:before {\r\n  content: '\\e82d';\r\n}\r\n\r\n.icon-award:before {\r\n  content: '\\e82e';\r\n}\r\n\r\n.icon-bar-chart:before {\r\n  content: '\\e82f';\r\n}\r\n\r\n.icon-at-sign:before {\r\n  content: '\\e830';\r\n}\r\n\r\n.icon-bar-chart-2:before {\r\n  content: '\\e831';\r\n}\r\n\r\n.icon-battery-charging:before {\r\n  content: '\\e832';\r\n}\r\n\r\n.icon-bell-off:before {\r\n  content: '\\e833';\r\n}\r\n\r\n.icon-battery:before {\r\n  content: '\\e834';\r\n}\r\n\r\n.icon-bluetooth:before {\r\n  content: '\\e835';\r\n}\r\n\r\n.icon-bell:before {\r\n  content: '\\e836';\r\n}\r\n\r\n.icon-book:before {\r\n  content: '\\e837';\r\n}\r\n\r\n.icon-briefcase:before {\r\n  content: '\\e838';\r\n}\r\n\r\n.icon-camera-off:before {\r\n  content: '\\e839';\r\n}\r\n\r\n.icon-calendar:before {\r\n  content: '\\e83a';\r\n}\r\n\r\n.icon-bookmark:before {\r\n  content: '\\e83b';\r\n}\r\n\r\n.icon-box:before {\r\n  content: '\\e83c';\r\n}\r\n\r\n.icon-camera:before {\r\n  content: '\\e83d';\r\n}\r\n\r\n.icon-check-circle:before {\r\n  content: '\\e83e';\r\n}\r\n\r\n.icon-check:before {\r\n  content: '\\e83f';\r\n}\r\n\r\n.icon-check-square:before {\r\n  content: '\\e840';\r\n}\r\n\r\n.icon-cast:before {\r\n  content: '\\e841';\r\n}\r\n\r\n.icon-chevron-down:before {\r\n  content: '\\e842';\r\n}\r\n\r\n.icon-chevron-left:before {\r\n  content: '\\e843';\r\n}\r\n\r\n.icon-chevron-right:before {\r\n  content: '\\e844';\r\n}\r\n\r\n.icon-chevron-up:before {\r\n  content: '\\e845';\r\n}\r\n\r\n.icon-chevrons-down:before {\r\n  content: '\\e846';\r\n}\r\n\r\n.icon-chevrons-right:before {\r\n  content: '\\e847';\r\n}\r\n\r\n.icon-chevrons-up:before {\r\n  content: '\\e848';\r\n}\r\n\r\n.icon-chevrons-left:before {\r\n  content: '\\e849';\r\n}\r\n\r\n.icon-circle:before {\r\n  content: '\\e84a';\r\n}\r\n\r\n.icon-clipboard:before {\r\n  content: '\\e84b';\r\n}\r\n\r\n.icon-chrome:before {\r\n  content: '\\e84c';\r\n}\r\n\r\n.icon-clock:before {\r\n  content: '\\e84d';\r\n}\r\n\r\n.icon-cloud-lightning:before {\r\n  content: '\\e84e';\r\n}\r\n\r\n.icon-cloud-drizzle:before {\r\n  content: '\\e84f';\r\n}\r\n\r\n.icon-cloud-rain:before {\r\n  content: '\\e850';\r\n}\r\n\r\n.icon-cloud-off:before {\r\n  content: '\\e851';\r\n}\r\n\r\n.icon-codepen:before {\r\n  content: '\\e852';\r\n}\r\n\r\n.icon-cloud-snow:before {\r\n  content: '\\e853';\r\n}\r\n\r\n.icon-compass:before {\r\n  content: '\\e854';\r\n}\r\n\r\n.icon-copy:before {\r\n  content: '\\e855';\r\n}\r\n\r\n.icon-corner-down-right:before {\r\n  content: '\\e856';\r\n}\r\n\r\n.icon-corner-down-left:before {\r\n  content: '\\e857';\r\n}\r\n\r\n.icon-corner-left-down:before {\r\n  content: '\\e858';\r\n}\r\n\r\n.icon-corner-left-up:before {\r\n  content: '\\e859';\r\n}\r\n\r\n.icon-corner-up-left:before {\r\n  content: '\\e85a';\r\n}\r\n\r\n.icon-corner-up-right:before {\r\n  content: '\\e85b';\r\n}\r\n\r\n.icon-corner-right-down:before {\r\n  content: '\\e85c';\r\n}\r\n\r\n.icon-corner-right-up:before {\r\n  content: '\\e85d';\r\n}\r\n\r\n.icon-cpu:before {\r\n  content: '\\e85e';\r\n}\r\n\r\n.icon-credit-card:before {\r\n  content: '\\e85f';\r\n}\r\n\r\n.icon-crosshair:before {\r\n  content: '\\e860';\r\n}\r\n\r\n.icon-disc:before {\r\n  content: '\\e861';\r\n}\r\n\r\n.icon-delete:before {\r\n  content: '\\e862';\r\n}\r\n\r\n.icon-download-cloud:before {\r\n  content: '\\e863';\r\n}\r\n\r\n.icon-download:before {\r\n  content: '\\e864';\r\n}\r\n\r\n.icon-droplet:before {\r\n  content: '\\e865';\r\n}\r\n\r\n.icon-edit-2:before {\r\n  content: '\\e866';\r\n}\r\n\r\n.icon-edit:before {\r\n  content: '\\e867';\r\n}\r\n\r\n.icon-edit-1:before {\r\n  content: '\\e868';\r\n}\r\n\r\n.icon-external-link:before {\r\n  content: '\\e869';\r\n}\r\n\r\n.icon-eye:before {\r\n  content: '\\e86a';\r\n}\r\n\r\n.icon-feather:before {\r\n  content: '\\e86b';\r\n}\r\n\r\n.icon-facebook:before {\r\n  content: '\\e86c';\r\n}\r\n\r\n.icon-file-minus:before {\r\n  content: '\\e86d';\r\n}\r\n\r\n.icon-eye-off:before {\r\n  content: '\\e86e';\r\n}\r\n\r\n.icon-fast-forward:before {\r\n  content: '\\e86f';\r\n}\r\n\r\n.icon-file-text:before {\r\n  content: '\\e870';\r\n}\r\n\r\n.icon-film:before {\r\n  content: '\\e871';\r\n}\r\n\r\n.icon-file:before {\r\n  content: '\\e872';\r\n}\r\n\r\n.icon-file-plus:before {\r\n  content: '\\e873';\r\n}\r\n\r\n.icon-folder:before {\r\n  content: '\\e874';\r\n}\r\n\r\n.icon-filter:before {\r\n  content: '\\e875';\r\n}\r\n\r\n.icon-flag:before {\r\n  content: '\\e876';\r\n}\r\n\r\n.icon-globe:before {\r\n  content: '\\e877';\r\n}\r\n\r\n.icon-grid:before {\r\n  content: '\\e878';\r\n}\r\n\r\n.icon-heart:before {\r\n  content: '\\e879';\r\n}\r\n\r\n.icon-home:before {\r\n  content: '\\e87a';\r\n}\r\n\r\n.icon-github:before {\r\n  content: '\\e87b';\r\n}\r\n\r\n.icon-image:before {\r\n  content: '\\e87c';\r\n}\r\n\r\n.icon-inbox:before {\r\n  content: '\\e87d';\r\n}\r\n\r\n.icon-layers:before {\r\n  content: '\\e87e';\r\n}\r\n\r\n.icon-info:before {\r\n  content: '\\e87f';\r\n}\r\n\r\n.icon-instagram:before {\r\n  content: '\\e880';\r\n}\r\n\r\n.icon-layout:before {\r\n  content: '\\e881';\r\n}\r\n\r\n.icon-link-2:before {\r\n  content: '\\e882';\r\n}\r\n\r\n.icon-life-buoy:before {\r\n  content: '\\e883';\r\n}\r\n\r\n.icon-link:before {\r\n  content: '\\e884';\r\n}\r\n\r\n.icon-log-in:before {\r\n  content: '\\e885';\r\n}\r\n\r\n.icon-list:before {\r\n  content: '\\e886';\r\n}\r\n\r\n.icon-lock:before {\r\n  content: '\\e887';\r\n}\r\n\r\n.icon-log-out:before {\r\n  content: '\\e888';\r\n}\r\n\r\n.icon-loader:before {\r\n  content: '\\e889';\r\n}\r\n\r\n.icon-mail:before {\r\n  content: '\\e88a';\r\n}\r\n\r\n.icon-maximize-2:before {\r\n  content: '\\e88b';\r\n}\r\n\r\n.icon-map:before {\r\n  content: '\\e88c';\r\n}\r\n\r\n.icon-map-pin:before {\r\n  content: '\\e88e';\r\n}\r\n\r\n.icon-menu:before {\r\n  content: '\\e88f';\r\n}\r\n\r\n.icon-message-circle:before {\r\n  content: '\\e890';\r\n}\r\n\r\n.icon-message-square:before {\r\n  content: '\\e891';\r\n}\r\n\r\n.icon-minimize-2:before {\r\n  content: '\\e892';\r\n}\r\n\r\n.icon-mic-off:before {\r\n  content: '\\e893';\r\n}\r\n\r\n.icon-minus-circle:before {\r\n  content: '\\e894';\r\n}\r\n\r\n.icon-mic:before {\r\n  content: '\\e895';\r\n}\r\n\r\n.icon-minus-square:before {\r\n  content: '\\e896';\r\n}\r\n\r\n.icon-minus:before {\r\n  content: '\\e897';\r\n}\r\n\r\n.icon-moon:before {\r\n  content: '\\e898';\r\n}\r\n\r\n.icon-monitor:before {\r\n  content: '\\e899';\r\n}\r\n\r\n.icon-more-vertical:before {\r\n  content: '\\e89a';\r\n}\r\n\r\n.icon-more-horizontal:before {\r\n  content: '\\e89b';\r\n}\r\n\r\n.icon-move:before {\r\n  content: '\\e89c';\r\n}\r\n\r\n.icon-music:before {\r\n  content: '\\e89d';\r\n}\r\n\r\n.icon-navigation-2:before {\r\n  content: '\\e89e';\r\n}\r\n\r\n.icon-navigation:before {\r\n  content: '\\e89f';\r\n}\r\n\r\n.icon-octagon:before {\r\n  content: '\\e8a0';\r\n}\r\n\r\n.icon-package:before {\r\n  content: '\\e8a1';\r\n}\r\n\r\n.icon-pause-circle:before {\r\n  content: '\\e8a2';\r\n}\r\n\r\n.icon-pause:before {\r\n  content: '\\e8a3';\r\n}\r\n\r\n.icon-percent:before {\r\n  content: '\\e8a4';\r\n}\r\n\r\n.icon-phone-call:before {\r\n  content: '\\e8a5';\r\n}\r\n\r\n.icon-phone-forwarded:before {\r\n  content: '\\e8a6';\r\n}\r\n\r\n.icon-phone-missed:before {\r\n  content: '\\e8a7';\r\n}\r\n\r\n.icon-phone-off:before {\r\n  content: '\\e8a8';\r\n}\r\n\r\n.icon-phone-incoming:before {\r\n  content: '\\e8a9';\r\n}\r\n\r\n.icon-phone:before {\r\n  content: '\\e8aa';\r\n}\r\n\r\n.icon-phone-outgoing:before {\r\n  content: '\\e8ab';\r\n}\r\n\r\n.icon-pie-chart:before {\r\n  content: '\\e8ac';\r\n}\r\n\r\n.icon-play-circle:before {\r\n  content: '\\e8ad';\r\n}\r\n\r\n.icon-play:before {\r\n  content: '\\e8ae';\r\n}\r\n\r\n.icon-plus-square:before {\r\n  content: '\\e8af';\r\n}\r\n\r\n.icon-plus-circle:before {\r\n  content: '\\e8b0';\r\n}\r\n\r\n.icon-plus:before {\r\n  content: '\\e8b1';\r\n}\r\n\r\n.icon-pocket:before {\r\n  content: '\\e8b2';\r\n}\r\n\r\n.icon-printer:before {\r\n  content: '\\e8b3';\r\n}\r\n\r\n.icon-power:before {\r\n  content: '\\e8b4';\r\n}\r\n\r\n.icon-radio:before {\r\n  content: '\\e8b5';\r\n}\r\n\r\n.icon-repeat:before {\r\n  content: '\\e8b6';\r\n}\r\n\r\n.icon-refresh-ccw:before {\r\n  content: '\\e8b7';\r\n}\r\n\r\n.icon-rewind:before {\r\n  content: '\\e8b8';\r\n}\r\n\r\n.icon-rotate-ccw:before {\r\n  content: '\\e8b9';\r\n}\r\n\r\n.icon-refresh-cw:before {\r\n  content: '\\e8ba';\r\n}\r\n\r\n.icon-rotate-cw:before {\r\n  content: '\\e8bb';\r\n}\r\n\r\n.icon-save:before {\r\n  content: '\\e8bc';\r\n}\r\n\r\n.icon-search:before {\r\n  content: '\\e8bd';\r\n}\r\n\r\n.icon-server:before {\r\n  content: '\\e8be';\r\n}\r\n\r\n.icon-scissors:before {\r\n  content: '\\e8bf';\r\n}\r\n\r\n.icon-share-2:before {\r\n  content: '\\e8c0';\r\n}\r\n\r\n.icon-share:before {\r\n  content: '\\e8c1';\r\n}\r\n\r\n.icon-shield:before {\r\n  content: '\\e8c2';\r\n}\r\n\r\n.icon-settings:before {\r\n  content: '\\e8c3';\r\n}\r\n\r\n.icon-skip-back:before {\r\n  content: '\\e8c4';\r\n}\r\n\r\n.icon-shuffle:before {\r\n  content: '\\e8c5';\r\n}\r\n\r\n.icon-sidebar:before {\r\n  content: '\\e8c6';\r\n}\r\n\r\n.icon-skip-forward:before {\r\n  content: '\\e8c7';\r\n}\r\n\r\n.icon-slack:before {\r\n  content: '\\e8c8';\r\n}\r\n\r\n.icon-slash:before {\r\n  content: '\\e8c9';\r\n}\r\n\r\n.icon-smartphone:before {\r\n  content: '\\e8ca';\r\n}\r\n\r\n.icon-square:before {\r\n  content: '\\e8cb';\r\n}\r\n\r\n.icon-speaker:before {\r\n  content: '\\e8cc';\r\n}\r\n\r\n.icon-star:before {\r\n  content: '\\e8cd';\r\n}\r\n\r\n.icon-stop-circle:before {\r\n  content: '\\e8ce';\r\n}\r\n\r\n.icon-sun:before {\r\n  content: '\\e8cf';\r\n}\r\n\r\n.icon-sunrise:before {\r\n  content: '\\e8d0';\r\n}\r\n\r\n.icon-tablet:before {\r\n  content: '\\e8d1';\r\n}\r\n\r\n.icon-tag:before {\r\n  content: '\\e8d2';\r\n}\r\n\r\n.icon-sunset:before {\r\n  content: '\\e8d3';\r\n}\r\n\r\n.icon-target:before {\r\n  content: '\\e8d4';\r\n}\r\n\r\n.icon-thermometer:before {\r\n  content: '\\e8d5';\r\n}\r\n\r\n.icon-thumbs-up:before {\r\n  content: '\\e8d6';\r\n}\r\n\r\n.icon-thumbs-down:before {\r\n  content: '\\e8d7';\r\n}\r\n\r\n.icon-toggle-left:before {\r\n  content: '\\e8d8';\r\n}\r\n\r\n.icon-toggle-right:before {\r\n  content: '\\e8d9';\r\n}\r\n\r\n.icon-trash-2:before {\r\n  content: '\\e8da';\r\n}\r\n\r\n.icon-trash:before {\r\n  content: '\\e8db';\r\n}\r\n\r\n.icon-trending-up:before {\r\n  content: '\\e8dc';\r\n}\r\n\r\n.icon-trending-down:before {\r\n  content: '\\e8dd';\r\n}\r\n\r\n.icon-triangle:before {\r\n  content: '\\e8de';\r\n}\r\n\r\n.icon-type:before {\r\n  content: '\\e8df';\r\n}\r\n\r\n.icon-twitter:before {\r\n  content: '\\e8e0';\r\n}\r\n\r\n.icon-upload:before {\r\n  content: '\\e8e1';\r\n}\r\n\r\n.icon-umbrella:before {\r\n  content: '\\e8e2';\r\n}\r\n\r\n.icon-upload-cloud:before {\r\n  content: '\\e8e3';\r\n}\r\n\r\n.icon-unlock:before {\r\n  content: '\\e8e4';\r\n}\r\n\r\n.icon-user-check:before {\r\n  content: '\\e8e5';\r\n}\r\n\r\n.icon-user-minus:before {\r\n  content: '\\e8e6';\r\n}\r\n\r\n.icon-user-plus:before {\r\n  content: '\\e8e7';\r\n}\r\n\r\n.icon-user-x:before {\r\n  content: '\\e8e8';\r\n}\r\n\r\n.icon-user:before {\r\n  content: '\\e8e9';\r\n}\r\n\r\n.icon-users:before {\r\n  content: '\\e8ea';\r\n}\r\n\r\n.icon-video-off:before {\r\n  content: '\\e8eb';\r\n}\r\n\r\n.icon-video:before {\r\n  content: '\\e8ec';\r\n}\r\n\r\n.icon-voicemail:before {\r\n  content: '\\e8ed';\r\n}\r\n\r\n.icon-volume-x:before {\r\n  content: '\\e8ee';\r\n}\r\n\r\n.icon-volume-2:before {\r\n  content: '\\e8ef';\r\n}\r\n\r\n.icon-volume-1:before {\r\n  content: '\\e8f0';\r\n}\r\n\r\n.icon-volume:before {\r\n  content: '\\e8f1';\r\n}\r\n\r\n.icon-watch:before {\r\n  content: '\\e8f2';\r\n}\r\n\r\n.icon-wifi:before {\r\n  content: '\\e8f3';\r\n}\r\n\r\n.icon-x-square:before {\r\n  content: '\\e8f4';\r\n}\r\n\r\n.icon-wind:before {\r\n  content: '\\e8f5';\r\n}\r\n\r\n.icon-x:before {\r\n  content: '\\e8f6';\r\n}\r\n\r\n.icon-x-circle:before {\r\n  content: '\\e8f7';\r\n}\r\n\r\n.icon-zap:before {\r\n  content: '\\e8f8';\r\n}\r\n\r\n.icon-zoom-in:before {\r\n  content: '\\e8f9';\r\n}\r\n\r\n.icon-zoom-out:before {\r\n  content: '\\e8fa';\r\n}\r\n\r\n.icon-command:before {\r\n  content: '\\e8fb';\r\n}\r\n\r\n.icon-cloud:before {\r\n  content: '\\e8fc';\r\n}\r\n\r\n.icon-hash:before {\r\n  content: '\\e8fd';\r\n}\r\n\r\n.icon-headphones:before {\r\n  content: '\\e8fe';\r\n}\r\n\r\n.icon-underline:before {\r\n  content: '\\e8ff';\r\n}\r\n\r\n.icon-italic:before {\r\n  content: '\\e900';\r\n}\r\n\r\n.icon-bold:before {\r\n  content: '\\e901';\r\n}\r\n\r\n.icon-crop:before {\r\n  content: '\\e902';\r\n}\r\n\r\n.icon-help-circle:before {\r\n  content: '\\e903';\r\n}\r\n\r\n.icon-paperclip:before {\r\n  content: '\\e904';\r\n}\r\n\r\n.icon-shopping-cart:before {\r\n  content: '\\e905';\r\n}\r\n\r\n.icon-tv:before {\r\n  content: '\\e906';\r\n}\r\n\r\n.icon-wifi-off:before {\r\n  content: '\\e907';\r\n}\r\n\r\n.icon-minimize:before {\r\n  content: '\\e88d';\r\n}\r\n\r\n.icon-maximize:before {\r\n  content: '\\e908';\r\n}\r\n\r\n.icon-gitlab:before {\r\n  content: '\\e909';\r\n}\r\n\r\n.icon-sliders:before {\r\n  content: '\\e90a';\r\n}\r\n\r\n.icon-star-on:before {\r\n  content: '\\e90b';\r\n}\r\n\r\n.icon-heart-on:before {\r\n  content: '\\e90c';\r\n}\r\n\r\n.icon-archive:before {\r\n  content: '\\e90d';\r\n}\r\n\r\n.icon-arrow-down-circle:before {\r\n  content: '\\e90e';\r\n}\r\n\r\n.icon-arrow-up-circle:before {\r\n  content: '\\e90f';\r\n}\r\n\r\n.icon-arrow-left-circle:before {\r\n  content: '\\e910';\r\n}\r\n\r\n.icon-arrow-right-circle:before {\r\n  content: '\\e911';\r\n}\r\n\r\n.icon-bar-chart-line-:before {\r\n  content: '\\e912';\r\n}\r\n\r\n.icon-bar-chart-line:before {\r\n  content: '\\e913';\r\n}\r\n\r\n.icon-book-open:before {\r\n  content: '\\e914';\r\n}\r\n\r\n.icon-code:before {\r\n  content: '\\e915';\r\n}\r\n\r\n.icon-database:before {\r\n  content: '\\e916';\r\n}\r\n\r\n.icon-dollar-sign:before {\r\n  content: '\\e917';\r\n}\r\n\r\n.icon-folder-plus:before {\r\n  content: '\\e918';\r\n}\r\n\r\n.icon-gift:before {\r\n  content: '\\e919';\r\n}\r\n\r\n.icon-folder-minus:before {\r\n  content: '\\e91a';\r\n}\r\n\r\n.icon-git-commit:before {\r\n  content: '\\e91b';\r\n}\r\n\r\n.icon-git-branch:before {\r\n  content: '\\e91c';\r\n}\r\n\r\n.icon-git-pull-request:before {\r\n  content: '\\e91d';\r\n}\r\n\r\n.icon-git-merge:before {\r\n  content: '\\e91e';\r\n}\r\n\r\n.icon-linkedin:before {\r\n  content: '\\e91f';\r\n}\r\n\r\n.icon-hard-drive:before {\r\n  content: '\\e920';\r\n}\r\n\r\n.icon-more-vertical-:before {\r\n  content: '\\e921';\r\n}\r\n\r\n.icon-more-horizontal-:before {\r\n  content: '\\e922';\r\n}\r\n\r\n.icon-rss:before {\r\n  content: '\\e923';\r\n}\r\n\r\n.icon-send:before {\r\n  content: '\\e924';\r\n}\r\n\r\n.icon-shield-off:before {\r\n  content: '\\e925';\r\n}\r\n\r\n.icon-shopping-bag:before {\r\n  content: '\\e926';\r\n}\r\n\r\n.icon-terminal:before {\r\n  content: '\\e927';\r\n}\r\n\r\n.icon-truck:before {\r\n  content: '\\e928';\r\n}\r\n\r\n.icon-zap-off:before {\r\n  content: '\\e929';\r\n}\r\n\r\n.icon-youtube:before {\r\n  content: '\\e92a';\r\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\css-loader\\dist\\runtime\\api.js'");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\css-loader\\dist\\runtime\\getUrl.js'");

/***/ }),

/***/ "./node_modules/jsonwebtoken/index.js":
/*!********************************************!*\
  !*** ./node_modules/jsonwebtoken/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\jsonwebtoken\\index.js'");

/***/ }),

/***/ "./node_modules/portal-vue/dist/portal-vue.common.js":
/*!***********************************************************!*\
  !*** ./node_modules/portal-vue/dist/portal-vue.common.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\portal-vue\\dist\\portal-vue.common.js'");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\process\\browser.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-clipboard2/vue-clipboard.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-clipboard2/vue-clipboard.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-clipboard2\\vue-clipboard.js'");

/***/ }),

/***/ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js ***!
  \*********************************************************************/
/*! exports provided: ActivityIcon, AirplayIcon, AlertCircleIcon, AlertOctagonIcon, AlertTriangleIcon, AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon, AnchorIcon, ApertureIcon, ArchiveIcon, ArrowDownCircleIcon, ArrowDownLeftIcon, ArrowDownRightIcon, ArrowDownIcon, ArrowLeftCircleIcon, ArrowLeftIcon, ArrowRightCircleIcon, ArrowRightIcon, ArrowUpCircleIcon, ArrowUpLeftIcon, ArrowUpRightIcon, ArrowUpIcon, AtSignIcon, AwardIcon, BarChart2Icon, BarChartIcon, BatteryChargingIcon, BatteryIcon, BellOffIcon, BellIcon, BluetoothIcon, BoldIcon, BookOpenIcon, BookIcon, BookmarkIcon, BoxIcon, BriefcaseIcon, CalendarIcon, CameraOffIcon, CameraIcon, CastIcon, CheckCircleIcon, CheckSquareIcon, CheckIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ChevronsDownIcon, ChevronsLeftIcon, ChevronsRightIcon, ChevronsUpIcon, ChromeIcon, CircleIcon, ClipboardIcon, ClockIcon, CloudDrizzleIcon, CloudLightningIcon, CloudOffIcon, CloudRainIcon, CloudSnowIcon, CloudIcon, CodeIcon, CodepenIcon, CodesandboxIcon, CoffeeIcon, ColumnsIcon, CommandIcon, CompassIcon, CopyIcon, CornerDownLeftIcon, CornerDownRightIcon, CornerLeftDownIcon, CornerLeftUpIcon, CornerRightDownIcon, CornerRightUpIcon, CornerUpLeftIcon, CornerUpRightIcon, CpuIcon, CreditCardIcon, CropIcon, CrosshairIcon, DatabaseIcon, DeleteIcon, DiscIcon, DivideCircleIcon, DivideSquareIcon, DivideIcon, DollarSignIcon, DownloadCloudIcon, DownloadIcon, DribbbleIcon, DropletIcon, Edit2Icon, Edit3Icon, EditIcon, ExternalLinkIcon, EyeOffIcon, EyeIcon, FacebookIcon, FastForwardIcon, FeatherIcon, FigmaIcon, FileMinusIcon, FilePlusIcon, FileTextIcon, FileIcon, FilmIcon, FilterIcon, FlagIcon, FolderMinusIcon, FolderPlusIcon, FolderIcon, FramerIcon, FrownIcon, GiftIcon, GitBranchIcon, GitCommitIcon, GitMergeIcon, GitPullRequestIcon, GithubIcon, GitlabIcon, GlobeIcon, GridIcon, HardDriveIcon, HashIcon, HeadphonesIcon, HeartIcon, HelpCircleIcon, HexagonIcon, HomeIcon, ImageIcon, InboxIcon, InfoIcon, InstagramIcon, ItalicIcon, KeyIcon, LayersIcon, LayoutIcon, LifeBuoyIcon, Link2Icon, LinkIcon, LinkedinIcon, ListIcon, LoaderIcon, LockIcon, LogInIcon, LogOutIcon, MailIcon, MapPinIcon, MapIcon, Maximize2Icon, MaximizeIcon, MehIcon, MenuIcon, MessageCircleIcon, MessageSquareIcon, MicOffIcon, MicIcon, Minimize2Icon, MinimizeIcon, MinusCircleIcon, MinusSquareIcon, MinusIcon, MonitorIcon, MoonIcon, MoreHorizontalIcon, MoreVerticalIcon, MousePointerIcon, MoveIcon, MusicIcon, Navigation2Icon, NavigationIcon, OctagonIcon, PackageIcon, PaperclipIcon, PauseCircleIcon, PauseIcon, PenToolIcon, PercentIcon, PhoneCallIcon, PhoneForwardedIcon, PhoneIncomingIcon, PhoneMissedIcon, PhoneOffIcon, PhoneOutgoingIcon, PhoneIcon, PieChartIcon, PlayCircleIcon, PlayIcon, PlusCircleIcon, PlusSquareIcon, PlusIcon, PocketIcon, PowerIcon, PrinterIcon, RadioIcon, RefreshCcwIcon, RefreshCwIcon, RepeatIcon, RewindIcon, RotateCcwIcon, RotateCwIcon, RssIcon, SaveIcon, ScissorsIcon, SearchIcon, SendIcon, ServerIcon, SettingsIcon, Share2Icon, ShareIcon, ShieldOffIcon, ShieldIcon, ShoppingBagIcon, ShoppingCartIcon, ShuffleIcon, SidebarIcon, SkipBackIcon, SkipForwardIcon, SlackIcon, SlashIcon, SlidersIcon, SmartphoneIcon, SmileIcon, SpeakerIcon, SquareIcon, StarIcon, StopCircleIcon, SunIcon, SunriseIcon, SunsetIcon, TabletIcon, TagIcon, TargetIcon, TerminalIcon, ThermometerIcon, ThumbsDownIcon, ThumbsUpIcon, ToggleLeftIcon, ToggleRightIcon, ToolIcon, Trash2Icon, TrashIcon, TrelloIcon, TrendingDownIcon, TrendingUpIcon, TriangleIcon, TruckIcon, TvIcon, TwitchIcon, TwitterIcon, TypeIcon, UmbrellaIcon, UnderlineIcon, UnlockIcon, UploadCloudIcon, UploadIcon, UserCheckIcon, UserMinusIcon, UserPlusIcon, UserXIcon, UserIcon, UsersIcon, VideoOffIcon, VideoIcon, VoicemailIcon, Volume1Icon, Volume2Icon, VolumeXIcon, VolumeIcon, WatchIcon, WifiOffIcon, WifiIcon, WindIcon, XCircleIcon, XOctagonIcon, XSquareIcon, XIcon, YoutubeIcon, ZapOffIcon, ZapIcon, ZoomInIcon, ZoomOutIcon */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-feather-icons\\dist\\vue-feather-icons.es.js'");

/***/ }),

/***/ "./node_modules/vue-i18n/dist/vue-i18n.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-i18n/dist/vue-i18n.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-i18n\\dist\\vue-i18n.esm.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "btn-scroll-to-top", class: { show: _vm.y > 250 } },
    [
      _c(
        "b-button",
        {
          directives: [
            {
              name: "ripple",
              rawName: "v-ripple.400",
              value: "rgba(255, 255, 255, 0.15)",
              expression: "'rgba(255, 255, 255, 0.15)'",
              modifiers: { 400: true },
            },
          ],
          staticClass: "btn-icon",
          attrs: { variant: "primary" },
          on: { click: _vm.scrollToTop },
        },
        [_c("feather-icon", { attrs: { icon: "ArrowUpIcon", size: "16" } })],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/App.vue?vue&type=template&id=7201f370&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/App.vue?vue&type=template&id=7201f370& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "h-100", class: [_vm.skinClasses], attrs: { id: "app" } },
    [
      _c(_vm.layout, { tag: "component" }, [_c("router-view")], 1),
      _vm._v(" "),
      _vm.enableScrollToTop ? _c("scroll-to-top") : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-ripple-directive/src/ripple.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue-ripple-directive/src/ripple.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-ripple-directive\\src\\ripple.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue-select/dist/vue-select.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-select/dist/vue-select.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-select\\dist\\vue-select.js'");

/***/ }),

/***/ "./node_modules/vue-sweetalert2/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-sweetalert2/dist/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-sweetalert2\\dist\\index.js'");

/***/ }),

/***/ "./node_modules/vue-toastification/composition/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-toastification/composition/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-toastification\\composition\\index.js'");

/***/ }),

/***/ "./node_modules/vue-toastification/dist/esm/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-toastification/dist/esm/index.js ***!
  \***********************************************************/
/*! exports provided: default, POSITION, TYPE, createToastInterface */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-toastification\\dist\\esm\\index.js'");

/***/ }),

/***/ "./node_modules/vue-tour/dist/vue-tour.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-tour/dist/vue-tour.umd.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue-tour\\dist\\vue-tour.umd.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createLogger, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\vuex\\dist\\vuex.esm.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/main.js */ "./resources/js/src/main.js");

/***/ }),

/***/ "./resources/js/src/@core/app-config/useAppConfig.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/@core/app-config/useAppConfig.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usAppConfig; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function usAppConfig() {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val);
    }
  }); // ------------------------------------------------
  // RTL
  // ------------------------------------------------

  var isRTL = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.isRTL;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/TOGGLE_RTL', val);
    }
  }); // ------------------------------------------------
  // Skin
  // ------------------------------------------------

  var skin = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.skin;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_SKIN', val);
    }
  });
  var skinClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (skin.value === 'bordered') return 'bordered-layout';
    if (skin.value === 'semi-dark') return 'semi-dark-layout'; // Do not return any class for dark layout because dark layout updates class in body
    // Do not return any class for light layout as that is default layout

    return null;
  }); // ------------------------------------------------
  // routerTransition
  // ------------------------------------------------

  var routerTransition = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.routerTransition;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_ROUTER_TRANSITION', val);
    }
  }); // *===============================================---*
  // *--------- LAYOUT ---------------------------------------*
  // *===============================================---*
  // ------------------------------------------------
  // layoutType
  // ------------------------------------------------

  var layoutType = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.type;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_LAYOUT_TYPE', val);
    }
  }); // Reset skin if skin is semi-dark and move to horizontal layout

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(layoutType, function (val) {
    if (val === 'horizontal' && skin.value === 'semi-dark') skin.value = 'light';
  }); // ------------------------------------------------
  // Content Width (Full/Boxed)
  // ------------------------------------------------

  var contentWidth = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.contentWidth;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_CONTENT_WIDTH', val);
    }
  }); // ------------------------------------------------
  // isNavMenuHidden
  // ------------------------------------------------

  var isNavMenuHidden = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.menu.hidden;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_NAV_MENU_HIDDEN', val);
    }
  }); // *===============================================---*
  // *--------- NAVBAR ---------------------------------------*
  // *===============================================---*

  var navbarBackgroundColor = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.navbar.backgroundColor;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_NAVBAR_CONFIG', {
        backgroundColor: val
      });
    }
  });
  var navbarType = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.navbar.type;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_NAVBAR_CONFIG', {
        type: val
      });
    }
  }); // *===============================================---*
  // *--------- FOOTER ---------------------------------------*
  // *===============================================---*

  var footerType = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.appConfig.layout.footer.type;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('appConfig/UPDATE_FOOTER_CONFIG', {
        type: val
      });
    }
  });
  return {
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    isRTL: isRTL,
    skin: skin,
    skinClasses: skinClasses,
    routerTransition: routerTransition,
    // Navbar
    navbarBackgroundColor: navbarBackgroundColor,
    navbarType: navbarType,
    // Footer
    footerType: footerType,
    // Layout
    layoutType: layoutType,
    contentWidth: contentWidth,
    isNavMenuHidden: isNavMenuHidden
  };
}

/***/ }),

/***/ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.eot?t=1525787366991":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/@core/assets/fonts/feather/fonts/feather.eot?t=1525787366991 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/feather.eot?931c9e74d0b20947054bfe6a5b74a838";

/***/ }),

/***/ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.svg?t=1525787366991":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/@core/assets/fonts/feather/fonts/feather.svg?t=1525787366991 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/feather.svg?e909dd1831804f969b03bf76dc952eda";

/***/ }),

/***/ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.ttf?t=1525787366991":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/@core/assets/fonts/feather/fonts/feather.ttf?t=1525787366991 ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/feather.ttf?6a750f0119ba9c8ab8a994a4796599a6";

/***/ }),

/***/ "./resources/js/src/@core/assets/fonts/feather/fonts/feather.woff?t=1525787366991":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/@core/assets/fonts/feather/fonts/feather.woff?t=1525787366991 ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/feather.woff?3d2fa2e544004aef2ea641698b715af6";

/***/ }),

/***/ "./resources/js/src/@core/assets/fonts/feather/iconfont.css":
/*!******************************************************************!*\
  !*** ./resources/js/src/@core/assets/fonts/feather/iconfont.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../../../node_modules/postcss-loader/src??ref--6-2!./iconfont.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/src/@core/assets/fonts/feather/iconfont.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/@core/auth/sanctum/sanctumDefaultConfig.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/@core/auth/sanctum/sanctumDefaultConfig.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  loginEndpoint: 'login',
  registerEndpoint: 'register',
  refreshEndpoint: 'refresh-token',
  logoutEndpoint: 'logout',
  // This will be prefixed in authorization header with token
  // e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',
  // Value of this property will be used as key to store Sanctum token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken'
});

/***/ }),

/***/ "./resources/js/src/@core/auth/sanctum/sanctumService.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@core/auth/sanctum/sanctumService.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SanctumService; });
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanctumDefaultConfig__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sanctumDefaultConfig */ "./resources/js/src/@core/auth/sanctum/sanctumDefaultConfig.js");









var SanctumService = /*#__PURE__*/function () {
  // Will be used by this service for making API calls
  // sanctumConfig <= Will be used by this service
  // For Refreshing Token
  // For Refreshing Token
  function SanctumService(axiosIns, sanctumOverrideConfig) {
    var _this = this;

    Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SanctumService);

    Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "axiosIns", null);

    Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "sanctumConfig", Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _sanctumDefaultConfig__WEBPACK_IMPORTED_MODULE_7__["default"]));

    Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "isAlreadyFetchingAccessToken", false);

    Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "subscribers", []);

    this.axiosIns = axiosIns;
    this.sanctumConfig = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.sanctumConfig), sanctumOverrideConfig); // Request Interceptor

    this.axiosIns.interceptors.request.use(function (config) {
      // Get token from localStorage
      var accessToken = _this.getToken(); // If token is present add it to request's Authorization Header


      if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = "".concat(_this.sanctumConfig.tokenType, " ").concat(accessToken);
      }

      return config;
    }, function (error) {
      return Promise.reject(error);
    }); // Add request/response interceptor

    this.axiosIns.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      // const { config, response: { status } } = error
      var config = error.config,
          response = error.response;
      var originalRequest = config; // if (status === 401) {

      if (response && response.status === 401) {
        if (!_this.isAlreadyFetchingAccessToken) {
          _this.isAlreadyFetchingAccessToken = true;

          _this.refreshToken().then(function (r) {
            _this.isAlreadyFetchingAccessToken = false; // Update accessToken in localStorage

            _this.setToken(r.data.accessToken);

            _this.setRefreshToken(r.data.refreshToken);

            _this.onAccessTokenFetched(r.data.accessToken);
          });
        }

        var retryOriginalRequest = new Promise(function (resolve) {
          _this.addSubscriber(function (accessToken) {
            // Make sure to assign accessToken according to your response.
            // Check: https://pixinvent.ticksy.com/ticket/2413870
            // Change Authorization header
            originalRequest.headers.Authorization = "".concat(_this.sanctumConfig.tokenType, " ").concat(accessToken);
            resolve(_this.axiosIns(originalRequest));
          });
        });
        return retryOriginalRequest;
      }

      return Promise.reject(error);
    });
  }

  Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(SanctumService, [{
    key: "onAccessTokenFetched",
    value: function onAccessTokenFetched(accessToken) {
      this.subscribers = this.subscribers.filter(function (callback) {
        return callback(accessToken);
      });
    }
  }, {
    key: "addSubscriber",
    value: function addSubscriber(callback) {
      this.subscribers.push(callback);
    }
  }, {
    key: "getToken",
    value: function getToken() {
      return localStorage.getItem(this.sanctumConfig.storageTokenKeyName);
    }
  }, {
    key: "login",
    value: function login() {
      var _this$axiosIns;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return (_this$axiosIns = this.axiosIns).post.apply(_this$axiosIns, [this.sanctumConfig.loginEndpoint].concat(args));
    }
  }, {
    key: "register",
    value: function register() {
      var _this$axiosIns2;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return (_this$axiosIns2 = this.axiosIns).post.apply(_this$axiosIns2, [this.sanctumConfig.registerEndpoint].concat(args));
    }
  }, {
    key: "getRefreshToken",
    value: function getRefreshToken() {
      return localStorage.getItem(this.sanctumConfig.storageRefreshTokenKeyName);
    }
  }, {
    key: "setToken",
    value: function setToken(value) {
      localStorage.setItem(this.sanctumConfig.storageTokenKeyName, value);
    }
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(value) {
      localStorage.setItem(this.sanctumConfig.storageRefreshTokenKeyName, value);
    }
  }, {
    key: "refreshToken",
    value: function refreshToken() {
      return this.axiosIns.post(this.sanctumConfig.refreshEndpoint, {
        refreshToken: this.getRefreshToken()
      });
    }
  }]);

  return SanctumService;
}();



/***/ }),

/***/ "./resources/js/src/@core/auth/sanctum/useSanctum.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/@core/auth/sanctum/useSanctum.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSanctum; });
/* harmony import */ var _sanctumService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanctumService */ "./resources/js/src/@core/auth/sanctum/sanctumService.js");

function useSanctum(axiosIns, sanctumOverrideConfig) {
  var sanctum = new _sanctumService__WEBPACK_IMPORTED_MODULE_0__["default"](axiosIns, sanctumOverrideConfig);
  return {
    sanctum: sanctum
  };
}

/***/ }),

/***/ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/@core/components/feather-icon/FeatherIcon.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeatherIcon.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/feather-icon/FeatherIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./FeatherIcon.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/feather-icon/FeatherIcon.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeatherIcon_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true& */ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true&");
/* harmony import */ var _ScrollToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollToTop.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& */ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ScrollToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "480ba03e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollToTop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=style&index=0&id=480ba03e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_style_index_0_id_480ba03e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/components/scroll-to-top/ScrollToTop.vue?vue&type=template&id=480ba03e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScrollToTop_vue_vue_type_template_id_480ba03e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/scss/core.scss":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/scss/core.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!./core.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/@core/scss/core.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/@core/scss/vue/libs/toastification.scss":
/*!******************************************************************!*\
  !*** ./resources/js/src/@core/scss/vue/libs/toastification.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!./toastification.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/@core/scss/vue/libs/toastification.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/calendar.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/calendar.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");











var date = new Date();
var nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); // prettier-ignore

var nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1); // prettier-ignore

var prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1);
var data = {
  events: [{
    id: 1,
    url: '',
    title: 'Design Review',
    start: date,
    end: nextDay,
    allDay: false,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 2,
    url: '',
    title: 'Meeting With Client',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 3,
    url: '',
    title: 'Family Trip',
    allDay: true,
    start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
    extendedProps: {
      calendar: 'Holiday'
    }
  }, {
    id: 4,
    url: '',
    title: "Doctor's Appointment",
    start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }, {
    id: 5,
    url: '',
    title: 'Dart Game?',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'ETC'
    }
  }, {
    id: 6,
    url: '',
    title: 'Meditation',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }, {
    id: 7,
    url: '',
    title: 'Dinner',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Family'
    }
  }, {
    id: 8,
    url: '',
    title: 'Product Review',
    start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
    end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 9,
    url: '',
    title: 'Monthly Meeting',
    start: nextMonth,
    end: nextMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Business'
    }
  }, {
    id: 10,
    url: '',
    title: 'Monthly Checkup',
    start: prevMonth,
    end: prevMonth,
    allDay: true,
    extendedProps: {
      calendar: 'Personal'
    }
  }]
}; // ------------------------------------------------
// GET: Return calendar events
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/calendar/events').reply(function (config) {
  // Get requested calendars as Array
  var calendars = config.params.calendars.split(',');
  return [200, data.events.filter(function (event) {
    return calendars.includes(event.extendedProps.calendar);
  })];
}); // ------------------------------------------------
// POST: Add new event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onPost('/apps/calendar/events').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      event = _JSON$parse.event;

  var length = data.events.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.events[length - 1].id;
  }

  event.id = lastIndex + 1;
  data.events.push(event);
  return [201, {
    event: event
  }];
}); // ------------------------------------------------
// POST: Update Event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onPost(/\/apps\/calendar\/events\/\d+/).reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      eventData = _JSON$parse2.event; // Convert Id to number


  eventData.id = Number(eventData.id);
  var event = data.events.find(function (e) {
    return e.id === Number(eventData.id);
  });
  Object.assign(event, eventData);
  return [200, {
    event: event
  }];
}); // ------------------------------------------------
// DELETE: Remove Event
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onDelete(/\/apps\/calendar\/events\/\d+/).reply(function (config) {
  // Get event id from URL
  var eventId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  eventId = Number(eventId);
  var eventIndex = data.events.findIndex(function (e) {
    return e.id === eventId;
  });
  data.events.splice(eventIndex, 1);
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/chat.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/chat.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");





var previousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
var dayBeforePreviousDay = new Date(new Date().getTime() - 24 * 60 * 60 * 1000 * 2);
/* eslint-disable global-require */

var data = {
  profileUser: {
    id: 11,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png"),
    fullName: 'John Doe',
    role: 'admin',
    about: 'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    status: 'online',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  contacts: [{
    id: 1,
    fullName: 'Felecia Rower',
    role: 'Frontend Developer',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png"),
    status: 'offline'
  }, {
    id: 2,
    fullName: 'Adalberto Granzin',
    role: 'UI/UX Designer',
    about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png"),
    status: 'busy'
  }, {
    id: 3,
    fullName: 'Joaquina Weisenborn',
    role: 'Town planner',
    about: 'Soufflé soufflé caramels sweet roll. Jelly lollipop sesame snaps bear claw jelly beans sugar plum sugar plum.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png"),
    status: 'busy'
  }, {
    id: 4,
    fullName: 'Verla Morgano',
    role: 'Data scientist',
    about: 'Chupa chups candy canes chocolate bar marshmallow liquorice muffin. Lemon drops oat cake tart liquorice tart cookie. Jelly-o cookie tootsie roll halvah.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png"),
    status: 'online'
  }, {
    id: 5,
    fullName: 'Margot Henschke',
    role: 'Dietitian',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png"),
    status: 'busy'
  }, {
    id: 6,
    fullName: 'Sal Piggee',
    role: 'Marketing executive',
    about: 'Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop. Sweet liquorice croissant candy danish dessert icing. Cake macaroon gingerbread toffee sweet.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png"),
    status: 'online'
  }, {
    id: 7,
    fullName: 'Miguel Guelff',
    role: 'Special educational needs teacher',
    about: 'Biscuit powder oat cake donut brownie ice cream I love soufflé. I love tootsie roll I love powder tootsie roll.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png"),
    status: 'online'
  }, {
    id: 8,
    fullName: 'Mauro Elenbaas',
    role: 'Advertising copywriter',
    about: 'Bear claw ice cream lollipop gingerbread carrot cake. Brownie gummi bears chocolate muffin croissant jelly I love marzipan wafer.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png"),
    status: 'away'
  }, {
    id: 9,
    fullName: 'Bridgett Omohundro',
    role: 'Designer, television/film set',
    about: 'Gummies gummi bears I love candy icing apple pie I love marzipan bear claw. I love tart biscuit I love candy canes pudding chupa chups liquorice croissant.',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png"),
    status: 'offline'
  }, {
    id: 10,
    fullName: 'Zenia Jacobs',
    role: 'Building surveyor',
    about: 'Cake pie jelly jelly beans. Marzipan lemon drops halvah cake. Pudding cookie lemon drops icing',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png"),
    status: 'away'
  }],
  chats: [{
    id: 1,
    userId: 2,
    unseenMsgs: 0,
    chat: [{
      message: 'Hi',
      time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Hello. How can I help You?',
      time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'Can I get details of my last transaction I made last month?',
      time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'We need to check if we can provide you such information.',
      time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'I will inform you as I get update on this.',
      time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
      senderId: 2
    }, {
      message: 'If it takes long you can mail me at my mail address.',
      time: dayBeforePreviousDay,
      senderId: 11
    }]
  }, {
    id: 2,
    userId: 1,
    unseenMsgs: 1,
    chat: [{
      message: "How can we help? We're here for you!",
      time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
      time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'It should be Bootstrap 4 compatible.',
      time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'Absolutely!',
      time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Modern admin is the responsive bootstrap 4 admin template.!',
      time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'Looks clean and fresh UI.',
      time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: "It's perfect for my next project.",
      time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'How can I purchase it?',
      time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
      senderId: 1
    }, {
      message: 'Thanks, from ThemeForest.',
      time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
      senderId: 11
    }, {
      message: 'I will purchase it for sure. 👍',
      time: previousDay,
      senderId: 1
    }]
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Chats Contacts and Contacts
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet('/apps/chat/chats-and-contacts').reply(function () {
  var chatsContacts = data.chats.map(function (chat) {
    var contact = data.contacts.find(function (c) {
      return c.id === chat.userId;
    });
    contact.chat = {
      id: chat.id,
      unseenMsgs: chat.unseenMsgs,
      lastMessage: chat.chat[chat.chat.length - 1]
    };
    return contact;
  }).reverse();
  var profileUserData = {
    id: data.profileUser.id,
    avatar: data.profileUser.avatar,
    fullName: data.profileUser.fullName,
    status: data.profileUser.status
  };
  return [200, {
    chatsContacts: chatsContacts,
    contacts: data.contacts,
    profileUser: profileUserData
  }];
}); // ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet('/apps/chat/users/profile-user').reply(function () {
  return [200, data.profileUser];
}); // ------------------------------------------------
// GET: Return Single Chat
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onGet(/\/apps\/chat\/chats\/\d+/).reply(function (config) {
  // Get event id from URL
  var userId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  userId = Number(userId);
  var chat = data.chats.find(function (c) {
    return c.userId === userId;
  });
  if (chat) chat.unseenMsgs = 0;
  return [200, {
    chat: chat,
    contact: data.contacts.find(function (c) {
      return c.id === userId;
    })
  }];
}); // ------------------------------------------------
// POST: Add new chat message
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_4__["default"].onPost(/\/apps\/chat\/chats\/\d+/).reply(function (config) {
  // Get user id from URL
  var contactId = Number(config.url.substring(config.url.lastIndexOf('/') + 1)); // Get event from post data

  var _JSON$parse = JSON.parse(config.data),
      message = _JSON$parse.message,
      senderId = _JSON$parse.senderId;

  var activeChat = data.chats.find(function (chat) {
    return chat.userId === contactId;
  });
  var newMessageData = {
    message: message,
    time: new Date(),
    senderId: senderId
  }; // If there's new chat for user create one

  var isNewChat = false;

  if (activeChat === undefined) {
    isNewChat = true;
    var length = data.chats.length;
    var lastId = data.chats[length - 1].id;
    data.chats.push({
      id: lastId + 1,
      userId: contactId,
      unseenMsgs: 0,
      chat: []
    });
    activeChat = data.chats[data.chats.length - 1];
  }

  activeChat.chat.push(newMessageData);
  var response = {
    newMessageData: newMessageData
  };
  if (isNewChat) response.chat = activeChat;
  return [201, response];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/eCommerce.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/eCommerce.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");













 // eslint-disable-next-line object-curly-newline


var nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var nextWeek = new Date(nextDay.getTime() + 7 * 24 * 60 * 60 * 1000);
/* eslint-disable global-require */

var data = {
  products: [{
    id: 1,
    name: 'VicTsing Wireless Mouse,',
    slug: 'vic-tsing-wireless-mouse-1',
    description: 'After thousands of samples of palm data, we designed this ergonomic mouse. The laptop mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the laptop mouse.',
    brand: 'VicTsing',
    price: 10.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/27.png */ "./resources/js/src/assets/images/pages/eCommerce/27.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 2,
    name: 'Bose Frames Tenor - Rectangular Polarized, Bluetooth Audio Sunglasses',
    slug: 'bose-frames-tenor-rectangular-polarized-bluetooth-audio-sunglasses-2',
    description: 'Redesigned for luxury — Thoughtfully refined and strikingly elegant, the latest Bose sunglasses blend enhanced features and designs for an elevated way to listen',
    brand: 'Bose',
    price: 249.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/26.png */ "./resources/js/src/assets/images/pages/eCommerce/26.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 3,
    name: 'Willful Smart Watch for Men Women 2020,',
    slug: 'willful-smart-watch-for-men-women-2020-3',
    description: 'Are you looking for a smart watch, which can not only easily keep tracking of your steps, calories, heart rate and sleep quality, but also keep you informed of incoming calls.',
    brand: 'Willful',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/25.png */ "./resources/js/src/assets/images/pages/eCommerce/25.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 4,
    name: 'Ronyes Unisex College Bag Bookbags for Women',
    slug: 'ronyes-unisex-college-bag-bookbags-for-women-4',
    description: 'Made of high quality water-resistant material; padded and adjustable shoulder straps; external USB with built-in charging cable offers a convenient charging',
    brand: 'Ronyes',
    price: 23.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/24.png */ "./resources/js/src/assets/images/pages/eCommerce/24.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 5,
    name: 'Toshiba Canvio Advance 2TB Portable External Hard Drive',
    slug: 'toshiba-canvio-advance-2-tb-portable-external-hard-drive-5',
    description: 'Up to 3TB of storage capacity to store your growing files and content',
    brand: 'Toshiba',
    price: 69.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/23.png */ "./resources/js/src/assets/images/pages/eCommerce/23.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 6,
    name: 'Tile Pro - High Performance Bluetooth Tracker',
    slug: 'tile-pro-high-performance-bluetooth-tracker-6',
    description: 'FIND KEYS, BAGS & MORE -- Pro is our high-performance finder ideal for keys, backpacks, luggage or any other items you want to keep track of. The easy-to-use finder and free app work with iOS and Android.',
    brand: 'Tile',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/22.png */ "./resources/js/src/assets/images/pages/eCommerce/22.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 7,
    name: 'Bugani M90 Portable Bluetooth Speaker',
    slug: 'bugani-m90-portable-bluetooth-speaker-7',
    description: 'Bluetooth Speakers-The M90 Bluetooth speaker uses the latest Bluetooth 5.0 technology and the latest Bluetooth ATS chip, Connecting over Bluetooth in seconds to iPhone, iPad, Smart-phones, Tablets, Windows, and other Bluetooth devices.',
    brand: 'Bugani',
    price: 56.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/21.png */ "./resources/js/src/assets/images/pages/eCommerce/21.png"),
    hasFreeShipping: false,
    rating: 3
  }, {
    id: 8,
    name: 'PlayStation 4 Console',
    slug: 'play-station-4-console-8',
    description: 'All the greatest, games, TV, music and more. Connect with your friends to broadcast and celebrate your epic moments at the press of the Share button to Twitch, YouTube, Facebook and Twitter.',
    brand: 'Sony',
    price: 339.95,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/20.png */ "./resources/js/src/assets/images/pages/eCommerce/20.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 9,
    name: 'Giotto 32oz Leakproof BPA Free Drinking Water',
    slug: 'giotto-32oz-leakproof-bpa-free-drinking-water-9',
    description: 'With unique inspirational quote and time markers on it,this water bottle is great for measuring your daily intake of water,reminding you stay hydrated and drink enough water throughout the day.A must have for any fitness goals including weight loss,appetite control and overall health.',
    brand: '3M',
    price: 16.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/19.png */ "./resources/js/src/assets/images/pages/eCommerce/19.png"),
    hasFreeShipping: true,
    rating: 4
  }, {
    id: 10,
    name: 'Oculus Quest All-in-one VR',
    slug: 'oculus-quest-all-in-one-vr-10',
    description: 'All-in-one VR: No PC. No wires. No limits. Oculus quest is an all-in-one gaming system built for virtual reality. Now you can play almost anywhere with just a VR headset and controllers. Oculus touch controllers: arm yourself with the award-winning Oculus touch controllers. Your slashes, throws and grab appear in VR with intuitive, realistic Precision, transporting your hands and gestures right into the game',
    brand: 'Oculus',
    price: 645.0,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/18.png */ "./resources/js/src/assets/images/pages/eCommerce/18.png"),
    hasFreeShipping: false,
    rating: 1
  }, {
    id: 11,
    name: 'Handbags for Women Large Designer bag',
    slug: 'handbags-for-women-large-designer-bag-11',
    description: 'Classic Hobo Purse: Top zipper closure, with 2 side zipper pockets design and elegant tassels decoration, fashionable and practical handbags for women, perfect for shopping, dating, travel and business',
    brand: 'Hobo',
    price: 39.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/17.png */ "./resources/js/src/assets/images/pages/eCommerce/17.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 12,
    name: 'Adidas Mens Tech Response Shoes',
    slug: 'adidas-mens-tech-response-shoes-12',
    description: 'Comfort + performance.  Designed with materials that are durable, lightweight and extremely comfortable. Core performance delivers the perfect mix of fit, style and all-around performance.',
    brand: 'Adidas',
    price: 54.59,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/16.png */ "./resources/js/src/assets/images/pages/eCommerce/16.png"),
    hasFreeShipping: false,
    rating: 5
  }, {
    id: 13,
    name: 'Laptop Bag',
    slug: 'laptop-bag-13',
    description: 'TSA FRIENDLY- A separate DIGI SMART compartment can hold 15.6 inch Laptop as well as 15 inch, 14 inch Macbook, 12.9 inch iPad, and tech accessories like charger for quick TSA checkpoint when traveling',
    brand: 'TAS',
    price: 29.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/15.png */ "./resources/js/src/assets/images/pages/eCommerce/15.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 14,
    name: 'Wireless Charger 5W Max',
    slug: 'wireless-charger-5-w-max-14',
    description: 'Charge with case: transmits charging power directly through protective cases. Rubber/plastic/TPU cases under 5 mm thickness . Do not use any magnetic and metal attachments or cards, or it will prevent charging.',
    brand: '3M',
    price: 10.83,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/14.png */ "./resources/js/src/assets/images/pages/eCommerce/14.png"),
    hasFreeShipping: true,
    rating: 3
  }, {
    id: 15,
    name: 'Vankyo leisure 3 mini projector',
    slug: '3-m-filtrete-vacuum-belt-for-select-hoover-t-series-upright-vacuums-15',
    description: 'SUPERIOR VIEWING EXPERIENCE: Supporting 1920x1080 resolution, VANKYO Leisure 3 projector is powered by MStar Advanced Color Engine, which is ideal for home entertainment. 2020 upgraded LED lighting provides a superior viewing experience for you.',
    brand: 'Vankyo Store',
    price: 99.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/13.png */ "./resources/js/src/assets/images/pages/eCommerce/13.png"),
    hasFreeShipping: true,
    rating: 2
  }, {
    id: 16,
    name: 'New Apple iPad Pro',
    slug: '3-m-hoover-y-z-pet-micro-allergen-vacuum-bag-for-select-hoover-vacuums-3-pack-16',
    description: 'Up to 10 hours of surﬁng the web on Wi‑Fi, watching video, or listening to music. Up to 9 hours of surﬁng the web using cellular data network, Compatible with Smart Keyboard Folio and Bluetooth keyboards',
    brand: 'Apple',
    price: 799.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/12.png */ "./resources/js/src/assets/images/pages/eCommerce/12.png"),
    hasFreeShipping: false,
    rating: 3
  }, {
    id: 17,
    name: 'Nike Air Max',
    slug: '72-9301-speaker-wire-harness-adapter-for-most-plymouth-dodge-and-mitsubishi-vehicles-multi-17',
    description: 'With a bold application of colorblocking inspired by modern art styles, the Nike Air Max 270 React sneaker is constructed with layers of lightweight material to achieve its artful look and comfortable feel.',
    brand: 'Nike',
    price: 81.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/11.png */ "./resources/js/src/assets/images/pages/eCommerce/11.png"),
    hasFreeShipping: true,
    rating: 5
  }, {
    id: 18,
    name: 'Logitech K380 Wireless Keyboard',
    slug: 'acer-11-6-chromebook-intel-celeron-2-gb-memory-16-gb-e-mmc-flash-memory-moonstone-white-18',
    description: 'Logitech K380 Bluetooth Wireless Keyboard gives you the comfort and convenience of desktop typing on your smartphone, and tablet. It is a wireless keyboard that connects to all Bluetooth wireless devices that support external keyboards. Take this compact, lightweight, Bluetooth keyboard anywhere in your home. Type wherever you like, on any compatible computer, phone or tablet.',
    brand: 'Logitech',
    price: 81.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/10.png */ "./resources/js/src/assets/images/pages/eCommerce/10.png"),
    hasFreeShipping: false,
    rating: 4
  }, {
    id: 19,
    name: 'OnePlus 7 Pro ',
    slug: 'one-plus-7-pro-19',
    brand: 'Philips',
    price: 14.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/9.png */ "./resources/js/src/assets/images/pages/eCommerce/9.png"),
    hasFreeShipping: false,
    rating: 4,
    description: "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels\n    very premium but\u2019s it\u2019s also very heavy. The Nebula Blue variant looks slick but it\u2019s quite slippery, which\n    makes single-handed use a real challenge. It has a massive 6.67-inch \u2018Fluid AMOLED\u2019 display with a QHD+\n    resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks\n    and has good viewing angles."
  }, {
    id: 20,
    name: 'Sony 4K Ultra HD LED TV ',
    slug: 'sony-4-k-ultra-hd-led-tv-20',
    brand: 'Apple',
    price: 7999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/8.png */ "./resources/js/src/assets/images/pages/eCommerce/8.png"),
    hasFreeShipping: false,
    rating: 5,
    description: "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality\n    and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI.\n    You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
  }, {
    id: 21,
    name: 'Google - Google Home - White/Slate fabric',
    slug: 'google-google-home-white-slate-fabric-21',
    brand: 'Google',
    price: 129.29,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/7.png */ "./resources/js/src/assets/images/pages/eCommerce/7.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use\n    voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with\n    Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest."
  }, {
    id: 22,
    name: 'Switch Pro Controller',
    slug: 'switch-pro-controller-22',
    brand: 'Sharp',
    price: 429.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/6.png */ "./resources/js/src/assets/images/pages/eCommerce/6.png"),
    hasFreeShipping: false,
    rating: 3,
    description: "The Nintendo Switch Pro Controller is one of the priciest \"baseline\" controllers in the current console\n    generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features\n    impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an\n    adapter to use it with your PC."
  }, {
    id: 23,
    name: 'Apple - MacBook Air® (Latest Model) - 13.3" Display - Silver',
    slug: 'apple-mac-book-air-latest-model-13-3-display-silver-23',
    brand: 'Apple',
    price: 999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/5.png */ "./resources/js/src/assets/images/pages/eCommerce/5.png"),
    hasFreeShipping: false,
    rating: 4,
    description: "MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a\n    fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin,\n    light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there,\n    better."
  }, {
    id: 24,
    name: 'OneOdio A71 Wired Headphones',
    slug: 'one-odio-a71-wired-headphones-24',
    brand: 'OneOdio',
    price: 49.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/4.png */ "./resources/js/src/assets/images/pages/eCommerce/4.png"),
    hasFreeShipping: true,
    rating: 3,
    description: "Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business,\n    podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice\n    activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device\n    turns any home into a smart device on a smartphone or tablet."
  }, {
    id: 25,
    name: 'Apple iMac 27-inch',
    slug: 'apple-i-mac-27-inch-25',
    brand: 'Apple',
    price: 999.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/3.png */ "./resources/js/src/assets/images/pages/eCommerce/3.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "The all-in-one for all. If you can dream it, you can do it on iMac. It\u2019s beautifully & incredibly intuitive and\n    packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the\n    experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video\n    capabilities, and an even more stunning Retina 5K display. It\u2019s the desktop that does it all \u2014 better and faster\n    than ever."
  }, {
    id: 26,
    name: 'Apple iPhone 11 (64GB, Black)',
    slug: 'apple-i-phone-11-64-gb-black-26',
    brand: 'Apple',
    price: 669.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/2.png */ "./resources/js/src/assets/images/pages/eCommerce/2.png"),
    hasFreeShipping: true,
    rating: 5,
    description: "The Apple iPhone 11 is a great smartphone, which was loaded with a lot of quality features. It comes with a\n    waterproof and dustproof body which is the key attraction of the device. The excellent set of cameras offer\n    excellent images as well as capable of recording crisp videos. However, expandable storage and a fingerprint\n    scanner would have made it a perfect option to go for around this price range."
  }, {
    id: 27,
    name: 'Apple Watch Series 5',
    slug: 'apple-watch-series-5-27',
    brand: 'Apple',
    price: 339.99,
    image: __webpack_require__(/*! @/assets/images/pages/eCommerce/1.png */ "./resources/js/src/assets/images/pages/eCommerce/1.png"),
    hasFreeShipping: true,
    rating: 4,
    description: "On Retina display that never sleeps, so it\u2019s easy to see the time and other important information, without\n    raising or tapping the display. New location features, from a built-in compass to current elevation, help users\n    better navigate their day, while international emergency calling1 allows customers to call emergency services\n    directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available\n    in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
  }],
  userWishlist: [{
    id: 1,
    productId: 26
  }, {
    id: 2,
    productId: 23
  }, {
    id: 3,
    productId: 11
  }, {
    id: 4,
    productId: 10
  }, {
    id: 5,
    productId: 5
  }, {
    id: 6,
    productId: 8
  }, {
    id: 7,
    productId: 9
  }, {
    id: 8,
    productId: 13
  }, {
    id: 9,
    productId: 17
  }],
  userCart: [{
    id: 1,
    productId: 27,
    qty: 1
  }, {
    id: 2,
    productId: 21,
    qty: 1
  }, {
    id: 3,
    productId: 26,
    qty: 1
  }, {
    id: 4,
    productId: 25,
    qty: 1
  }, {
    id: 5,
    productId: 23,
    qty: 1
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/products').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'featured' : _config$params$sortBy,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 9 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page;
  var queryLowered = q.toLowerCase();
  var filteredData = data.products.filter(function (product) {
    return product.name.toLowerCase().includes(queryLowered);
  });
  var sortDesc = false;

  var sortByKey = function () {
    if (sortBy === 'price-desc') {
      sortDesc = true;
      return 'price';
    }

    if (sortBy === 'price-asc') {
      return 'price';
    }

    sortDesc = true;
    return 'id';
  }();

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["sortCompare"])(sortByKey));
  if (sortDesc) sortedData.reverse();
  var paginatedData = JSON.parse(JSON.stringify(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["paginateArray"])(sortedData, perPage, page)));
  paginatedData.forEach(function (product) {
    /* eslint-disable no-param-reassign */
    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    /* eslint-enable */
  });
  return [200, {
    products: paginatedData,
    total: filteredData.length,
    userWishlist: data.userWishlist,
    userCart: data.userCart
  }];
}); // ------------------------------------------------
// GET: Return Single Product
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet(/\/apps\/ecommerce\/products\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.products.findIndex(function (p) {
    return p.id === productId;
  });
  var product = data.products[productIndex];

  if (product) {
    // Add data of wishlist and cart
    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1;
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === product.id;
    }) > -1; // * Add Dummy data for details page

    product.colorOptions = ['primary', 'success', 'warning', 'danger', 'info'];
    return [200, {
      product: product
    }];
  }

  return [404];
}); // ------------------------------------------------
// GET: Return Wishlist Products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/wishlist').reply(function () {
  var products = data.userWishlist.map(function (wishlistProduct) {
    var product = data.products.find(function (p) {
      return p.id === wishlistProduct.productId;
    });
    product.isInCart = data.userCart.findIndex(function (p) {
      return p.productId === wishlistProduct.productId;
    }) > -1;
    return product;
  });
  return [200, {
    products: products
  }];
}); // ------------------------------------------------
// GET: Return Cart Products
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onGet('/apps/ecommerce/cart').reply(function () {
  var products = data.userCart.map(function (cartProduct) {
    var product = data.products.find(function (p) {
      return p.id === cartProduct.productId;
    }); // Other data

    product.isInWishlist = data.userWishlist.findIndex(function (p) {
      return p.productId === cartProduct.productId;
    }) > -1;
    product.qty = cartProduct.qty;
    product.shippingDate = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["randomDate"])(nextDay, nextWeek);
    product.offers = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["getRandomInt"])(1, 4);
    product.discountPercentage = Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_14__["getRandomInt"])(3, 20);
    return product;
  });
  return [200, {
    products: products
  }];
}); // ------------------------------------------------
// POST: Add Item in user Cart
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onPost('/apps/ecommerce/cart').reply(function (config) {
  // Get product from post data
  var _JSON$parse = JSON.parse(config.data),
      productId = _JSON$parse.productId;

  var length = data.userCart.length;
  var lastId = 0;
  if (length) lastId = data.userCart[length - 1].i;
  data.userCart.push({
    id: lastId + 1,
    productId: productId,
    qty: 1
  });
  return [201];
}); // ------------------------------------------------
// DELETE: Remove Item from user Cart
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onDelete(/\/apps\/ecommerce\/cart\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.userCart.findIndex(function (i) {
    return i.productId === productId;
  });
  if (productIndex > -1) data.userCart.splice(productIndex, 1);
  return [200];
}); // ------------------------------------------------
// POST: Add Item in user Wishlist
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onPost('/apps/ecommerce/wishlist').reply(function (config) {
  // Get product from post data
  var _JSON$parse2 = JSON.parse(config.data),
      productId = _JSON$parse2.productId;

  var length = data.userWishlist.length;
  var lastId = 0;
  if (length) lastId = data.userWishlist[length - 1].i;
  data.userWishlist.push({
    id: lastId + 1,
    productId: productId
  });
  return [201];
}); // ------------------------------------------------
// DELETE: Remove Item from user Wishlist
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_13__["default"].onDelete(/\/apps\/ecommerce\/wishlist\/\d+/).reply(function (config) {
  // Get product id from URL
  var productId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  productId = Number(productId);
  var productIndex = data.userWishlist.findIndex(function (i) {
    return i.productId === productId;
  });
  if (productIndex > -1) data.userWishlist.splice(productIndex, 1);
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/email.js":
/*!******************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/email.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");








/* eslint-disable global-require */

var data = {
  emails: [{
    id: 1,
    from: {
      email: 'tommys@mail.com',
      name: 'Tommy Sicilia',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Theme Update',
    cc: [],
    bcc: [],
    message: '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
    attachments: [{
      fileName: 'log.txt',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/txt.png */ "./resources/js/src/assets/images/icons/txt.png"),
      url: '',
      size: '5mb'
    }, {
      fileName: 'performance.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '10mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 2,
    from: {
      email: 'tressag@mail.com',
      name: 'Tressa Gass',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Company Report',
    cc: ['vrushankbrahmshatriya@mail.com'],
    bcc: ['menka@mail.com'],
    message: ' <p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Tressa Gass</p>',
    attachments: [],
    isStarred: true,
    labels: ['company', 'private'],
    time: 'Mon Dec 10 2018 07:55:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 3,
    from: {
      email: 'hettiem@mail.com',
      name: 'Hettie Mcerlean',
      avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }, {
      name: 'Pixinvent',
      email: 'hello@pixinvent.net'
    }],
    subject: 'Order Delivered',
    cc: [],
    bcc: [],
    message: '<p>Hello John,</p><p>Chocolate bar chupa chups sweet roll chocolate muffin macaroon liquorice tart. Carrot cake topping jelly-o cupcake sweet apple pie jelly I love. Chocolate cake I love dessert carrot cake tootsie roll chocolate I love. Tootsie roll pie marzipan sesame snaps. Lemon drops cake I love chocolate I love. Cheesecake croissant croissant cheesecake tootsie roll chocolate cake caramels. I love I love cake jelly. Pastry jelly beans I love I love. I love tootsie roll gummies toffee I love cookie cookie. Brownie tart croissant.</p><p>I love jelly pie. Croissant jelly beans lemon drops oat cake. Cupcake carrot cake ice cream cake cookie jelly-o fruitcake jelly macaroon. Biscuit muffin cupcake chocolate bar lollipop danish.</p><p>Ice cream I love I love lemon drops cotton candy macaroon. Jujubes soufflé oat cake sweet roll bear claw cotton candy cookie toffee tootsie roll. Danish sesame snaps sesame snaps cookie jelly danish chocolate bar.</p><p>Fruitcake pastry bear claw chocolate cookie. Biscuit icing bear claw. Sweet roll liquorice jelly-o muffin toffee I love wafer. Candy pastry halvah. Pie pastry candy canes tart. Fruitcake I love liquorice icing sweet roll macaroon. I love ice cream jelly-o biscuit brownie marzipan topping pudding sesame snaps. Chupa chups brownie brownie cotton candy sugar plum toffee. Tiramisu tootsie roll gingerbread biscuit I love ice cream brownie sesame snaps. I love croissant I love I love brownie pie marshmallow.</p><p>Regrads</p><p>Hettie Mcerlean</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Mon Dec 10 2018 08:35:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 4,
    from: {
      email: 'louettae@mail.com',
      name: 'Louetta Esses',
      avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@mail.com'
    }],
    subject: 'Waterfall Model Update',
    cc: [],
    bcc: [],
    message: '<p>Hi John,</p><p>Biscuit lemon drops marshmallow. Cotton candy marshmallow bear claw. Dragée tiramisu cookie cotton candy. Carrot cake sweet roll I love macaroon wafer jelly soufflé I love dragée. Jujubes jelly I love carrot cake topping I love. Sweet candy I love chupa chups dragée. Tart I love gummies. Chocolate bar carrot cake candy wafer candy canes oat cake I love. Sesame snaps icing pudding sweet roll marshmallow. Cupcake brownie sweet roll chocolate bar I love gummies. Biscuit biscuit macaroon sesame snaps macaroon icing I love soufflé caramels. Apple pie candy jelly. I love icing gummi bears jelly-o pie muffin apple pie.</p><p>Marshmallow halvah brownie cake marzipan ice cream marshmallow. I love lollipop toffee croissant liquorice wafer muffin. Lollipop jelly beans caramels lollipop tootsie roll pudding pie macaroon tootsie roll. Oat cake jujubes gummies cake cake powder cupcake soufflé muffin. Chocolate caramels muffin tart. Jelly beans caramels dessert cotton candy liquorice chocolate cake. Chupa chups muffin bear claw I love. Biscuit jujubes soufflé tart caramels pie sugar plum. Croissant jelly beans cake. Ice cream chocolate liquorice dessert cookie chocolate cake. Powder tart sweet roll macaroon croissant. Sweet tootsie roll macaroon gummi bears macaroon. Gingerbread cake tart.</p><p>Regrads,</p><p>Kristeen Sicilia</p>',
    attachments: [{
      fileName: 'report.doc',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      url: '',
      size: '32mb'
    }],
    isStarred: false,
    labels: ['important'],
    time: 'Mon Dec 11 2018 09:04:10 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 5,
    from: {
      email: 'bposvner0@zdnet.com',
      name: 'Bobbie Posvner',
      avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@dot.gov'
    }],
    subject: 'Re-contextualized zero administration toolset',
    cc: [],
    bcc: [],
    message: '<p>Hello John,</p><p>Epiboly henbill hemichorea composedness resequent hearthpenny racialization freeboard Reboulia Albuginaceae Violales Trisagion resinlike plumlet insalubrious Urocoptis Orthoceratidae ogmic plateaux reinsist preconsumption rattener venipuncture Rhadamanthine</p><p>perversely corpusculated theophoric uncemented weiring myolipoma gudesire dramatics trichomaphyte adventitious video polychaete glossorrhaphy bestially zoospore nonnotional sawbones unprejudiciable wali collaborative coppled shammish manless predisorder</p>',
    attachments: [],
    isStarred: true,
    labels: ['private'],
    time: 'Tue Dec 12 2018 11:55:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 6,
    from: {
      email: 'rgilder1@illinois.edu',
      name: 'Rebecca Gilder',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@google.co.uk'
    }],
    subject: 'Integrated bi-directional help-desk',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>irretraceably indestructibility sisi fiddle pyretic Gerbera vocable hoped Chartreux thinglet whister fetiferous Guhayna overloud yuca suggestibly atmiatrics serioludicrous prehaustorium androgenic betulin chiropterite sprittail atrochal</p><p>stopper acinaceous bandcutter unprostituted undependableness Saffarid parasympathetic dishonorer embryogeny overscrupulous deicidal Tapuya roupily devotee alfet sophiologic hydrobromide onlook preverb Dottore primitial frostlike overbig Monocyclica</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Thu Dec 13 2018 08:25:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: true
  }, {
    id: 7,
    from: {
      email: 'swilby2@yandex.ru',
      name: 'Shawn Wilby',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@altervista.org'
    }],
    subject: 'Devolved regional product',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>scalpellum unisometrical emend esotrope gether separatical passionwise cringe flawful annotinous jiboa thrombotic essoinment successional backrope oligohemia gitaligenin formulaic bradycinesia paralgesic eumycetic receptoral eyrie yearly</p><p>atomistical semischolastic clour discardment pseudelytron cheson path Bennet Herat pinchem Tho extravagantly shaking procidence flocker amidoketone gyric Moi petrolific clink immunization estrepement spalder poitrail</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Fri Dec 14 2018 04:49:23 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: true
  }, {
    id: 8,
    from: {
      email: 'wmannering3@mozilla.org',
      name: 'Waldemar Mannering',
      avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@sciencedaily.com'
    }],
    subject: 'Quality-focused methodical flexibility',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>wartproof ketoheptose incomplicate hyomental organal supermaterial monogene sophister nizamate rightle multifilament phloroglucic overvehement boatloading derelictly probudgeting archantiquary unknighted pallograph Volcanalia Jacobitiana ethyl neth Jugatae</p><p>noumenalize irredential energeia phlebotomist galp dactylitis unparticipated solepiece demure metarhyolite toboggan unpleased perilaryngeal binoxalate rabbitry atomic duali dihexahedron Pseudogryphus boomboat obelisk undreaded unadmired podometer</p>',
    attachments: [],
    isStarred: false,
    labels: ['private'],
    time: 'Tue Dec 15 2018 11:02:28 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 9,
    from: {
      email: 'hfrostdyke4@scientificamerican.com',
      name: 'Heath Frostdyke',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@weibo.com'
    }],
    subject: 'Secured optimal algorithm',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>prefertility volumetrical subdivision Alpinist hypostomous foreyard lede knuckling Agade viking protometallic unsting palaeobiologist trierarchic bigheartedness Slartibartfast tabitude popadam idioplasm fabulous arsenite cingle backhandedness denizenship</p><p>argo trickish dependingly unhouseled aegeriid ophthalmophlebotomy crazy freedwoman unspinsterlike clinical epistemologically hermodactyl humbugger misogynist plunder Sabbathly tabule feckless cerite porringer benumb duograph propatagian pressman</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 01 2018 18:31:19 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: false
  }, {
    id: 10,
    from: {
      email: 'pjentzsch5@tamu.edu',
      name: 'Paulita Jentzsch',
      avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@skype.com'
    }],
    subject: 'Profound user-facing frame',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>unstintedly septifarious prevalid implicative esere Kedarite Nekkar encampment Issedones Saururus Turkize Tshi misengrave lamnid benzamine rigidulous octonion hydrophilous coxalgic nasturtium epileptogenic biporose undenominationalism widu</p><p>melioration pager infiltrate plouky tribesmanship transudate heinous exhibitionistic klendusic lienocele tractate unemotioned castigate selenate appealable Palladianism chloracetate penna moellon detector halcyon amidofluorid damascene hollaite</p>',
    attachments: [{
      fileName: 'UtNulla.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '1mb'
    }],
    isStarred: true,
    labels: ['important'],
    time: 'Tue Jan 03 2018 08:05:33 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: false
  }, {
    id: 11,
    from: {
      email: 'lminghetti6@yale.edu',
      name: 'Lowell Minghetti',
      avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@fda.gov'
    }],
    subject: 'Reactive full-range encryption',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>Jaime stadimeter reshearer adfix exaristate herby chrysomonad ostentous Abrahamic Marsipobranchii skil linguodental relaster restbalk enhorror glycerizine foremelt difficultness Ostreidae Euphues panduriform howler Finmark primordality</p><p>semicurvilinear skeet sociogenetic dicephalism ghalva ethnicon katagenesis tasklike triachenium abuser henbane strubbly streetway Ramaism besetting saccos enzymically wickiup inopulent poetship Miranda hemianesthesia sphericle oariopathy</p>',
    attachments: [{
      fileName: 'ElementumLigula.js',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/js.png */ "./resources/js/src/assets/images/icons/js.png"),
      url: '',
      size: '29mb'
    }],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 03 2018 01:05:20 GMT+0000 (GMT)',
    replies: [],
    folder: 'trash',
    isRead: true
  }, {
    id: 12,
    from: {
      email: 'efinessy7@sbwire.com',
      name: 'Eugenie Finessy',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@odnoklassniki.ru'
    }],
    subject: 'Polarised holistic protocol',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>nonmotile generale punctated humanify escharine unlatch alrighty unshepherding standstill upcrane unilobular prefrontal primate fluviatic premundane tritocone compaternity dolina phonautographic cobby corse neurohypnotic cyrtopia wreathy</p><p>slanderousness Lemosi myxochondroma haemogram electrothermostat piperonyl spital reappeal pyopneumothorax Yunca eyoty forecourse extensive kickout germanization vigilant Criophoros muss aortostenosis Berchta phonophotoscopic precorrespondence rigidist castling</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Tue Jan 04 2018 21:26:54 GMT+0000 (GMT)',
    replies: [],
    folder: 'sent',
    isRead: true
  }, {
    id: 13,
    from: {
      email: 'tmckeurton8@163.com',
      name: 'Tadio McKeurton',
      avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@nifty.com'
    }],
    subject: 'Down-sized transitional intranet',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>calcimine gramineal nonfreezable interradial setula undertakable Abranchiata ultrasystematic spectroelectric Astarte Abraham bedsite enantiopathia exlex precoincident thiocarbamic mesenteriform daturism thioantimoniate tripudiate unsultry predynastic benzidino doxasticon</p><p>overstale confessory glossed jane smoodger modernization Dehkan progymnospermic gangliectomy volumenometry Paulinistically tippy Gelfomino hive preredemption coccygine horrendous unintrusted plainer interrelatedly tearer arrojadite incircumspectly yokemating</p>',
    attachments: [],
    isStarred: false,
    labels: ['important'],
    time: 'Tue Jan 05 2018 19:00:00 GMT+0000 (GMT)',
    replies: [],
    folder: 'draft',
    isRead: true
  }, {
    id: 14,
    from: {
      email: 'ebegg9@wikia.com',
      name: 'Eb Begg',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@51.la'
    }],
    subject: 'Organized value-added model',
    cc: [],
    bcc: [],
    message: '<p>Hello Sir, </p><p>Lituola restrengthen bathofloric manciple decaffeinize Debby aciliated eatage proscribe prejurisdiction buttle quacky hyposecretion indemonstrableness schelling lymphopathy consumptivity nonappointment filminess spumiform erotogenicity equestrianize boneflower interlardation</p><p>allocate ponzite cote guilder tuff strind blamefully cocaine monstrously apocalyptically sublanate cherubimical oligoplasmia Miltonian hydrazyl unbeset statured Unami Cordeau strouthiocamelian geitjie larigo sociometry align</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 06 2018 23:12:13 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: true
  }, {
    id: 15,
    from: {
      email: 'mspata@sina.com.cn',
      name: 'Modestine Spat',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@oracle.com'
    }],
    subject: 'Profound systemic alliance 🎉 🎊',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>Parthenopean logeion chipwood tonsilitic cockleshell substance Stilbum dismayed tape Alderamin Phororhacos bridewain zoonomia lujaurite printline extraction weanedness charterless splitmouth bindoree unfit philological Pythonissa scintillescent</p><p>cinchonism sabbaton thyrocricoid dissuasively schematograph immerse pristane stimulability unreligion uncomplemental uteritis nef bavenite Hachiman teleutosorus anterolateral infirmate Nahani Hyla barile farthing crea venesector Cirrostomi</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 07 2018 12:25:03 GMT+0000 (GMT)',
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 16,
    from: {
      email: 'cprandob@rambler.ru',
      name: 'Chase Prando',
      avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@vistaprint.com'
    }],
    subject: 'Centralized intermediate instruction set',
    cc: [],
    bcc: [],
    message: '<p>Respected Sir, </p><p>drainman merman pleurosteal slatted serenader Tantalus slodder cachalot guerdon flannelflower digestibility priggish loa monocarbide endive rented kelep pangamous gummata siris stockproof butlerism polycrystalline begetter</p><p>rack unpaining beglue astucious yardstick laniflorous tetrachloride avidious Biblicistic clival myosinogen antilobium unamiability unperforate Elaphurus wrapping deformity revocative kovil unwainscoted councilmanic saccharobiose federalize procellous</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: 'Tue Jan 08 2018 00:36:40 GMT+0000 (GMT)',
    replies: [],
    folder: 'sent',
    isRead: true
  }, {
    id: 17,
    from: {
      email: 'nbartlesc@merriam-webster.com',
      name: 'Normand Bartles',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@si.edu'
    }],
    subject: 'Re-contextualized leading edge projection',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>orpine anidiomatic protoreptilian lacklusterness macromastia obstetricate Phaneroglossa tripleness laxatively hypophloeous ocellate sinoauricular porch lignitic miche strinkle hyperthyreosis tugui Alascan unrailroaded Cypriote vesuvian gradative hardener</p><p>forthink Locarno wattlework Nordicist formoxime demipriest medrick Lomentaria lucible Canossa Manatus anaplasty Spirochaete bonus overgown Amurru Skupshtina opisthorchiasis preworthy Brodie shortchange Nikko Gaviae crosscut</p>',
    attachments: [],
    isStarred: false,
    labels: ['personal'],
    time: 'Tue Jan 09 2018 22:06:50 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 18,
    from: {
      email: 'rgennd@dedecms.com',
      name: 'Robin Genn',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@about.com'
    }],
    subject: 'Team-oriented system-worthy intranet',
    cc: [],
    bcc: [],
    message: '<p>Hi John, </p><p>balsamation teachableness enarthrodia dentilation superguarantee Yuapin schedulize antarctically biocoenotic unspottedly stinter admonitorily uncollatedness umquhile grayhead dephase stopgap evenglow photogenically desmacyte rink osiered specking ratwa</p><p>hospitize epithymetical montage rhapsodical Ninja superdramatist westerner clubionid haustellate Saltator rodding ophthalmomalacia concupiscibleness tingle hyperuresis Trigoniidae rearousal sanctimonial Munychia counterpaned exhibitable communer triadism Janiform</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 10 2018 01:51:24 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: true
  }, {
    id: 19,
    from: {
      email: 'eramelote@webeden.co.uk',
      name: 'Emmalynn Ramelot',
      avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@tinypic.com'
    }],
    subject: 'Phased eco-centric architecture',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>hightoby Maja vindicatorship unglobe poduran bronchodilatation uncontorted underwarden cyclometric orgiacs tigerhearted upscale curatize Scylliorhinidae slick unisolated nanocephalous cuirassier heartwise Venusian titanitic requirement antirestoration toluido</p><p>Trematosaurus procreant ethos pessimistic antiselene pisk Amphipneusta anconad Corchorus unswabbed sizable Balanites sardonical shovelbill trammeler carpetwork rhexis remade myelinated right bounteous unsin retroduction Montanist</p>',
    attachments: [],
    isStarred: true,
    labels: ['personal'],
    time: 'Tue Jan 11 2018 14:25:46 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: false
  }, {
    id: 20,
    from: {
      email: 'pcuzenf@mediafire.com',
      name: 'Penni Cuzen',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@google.es'
    }],
    subject: 'Future-proofed motivating support',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>yonder secessionalist astringer Ovangangela overcumber supracaecal scutulate Aglaonema Pakawan citril unsubducted cavernal multivalve ladify Cichorium supplication flexion cricothyroidean picaro locally etiogenic timeously scalpeen sapropel</p><p>agglutinative hyperideation Flamandize antipragmatic wincer brachyphalangia forenotion Angloman ornamentation merch revulsed windingly tristate orgic sateless orseilline Anchietea pilferer aroid counselor forevermore kulmet maladventure haruspice</p>',
    attachments: [{
      fileName: 'Augue.js',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/js.png */ "./resources/js/src/assets/images/icons/js.png"),
      url: '',
      size: '4mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: 'Tue Jan 12 2018 04:16:10 GMT+0000 (GMT)',
    replies: [],
    folder: 'spam',
    isRead: false
  }, {
    id: 21,
    from: {
      email: 'abaldersong@utexas.edu',
      name: 'Ardis Balderson',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@ow.ly'
    }],
    subject: 'Focused impactful open system 📷 😃',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>bah kivu decrete epanorthotic unnotched Argyroneta nonius veratrine preimaginary saunders demidolmen Chaldaic allusiveness lorriker unworshipping ribaldish tableman hendiadys outwrest unendeavored fulfillment scientifical Pianokoto Chelonia</p><p>Freudian sperate unchary hyperneurotic phlogiston duodecahedron unflown Paguridea catena disrelishable Stygian paleopsychology cantoris phosphoritic disconcord fruited inblow somewhatly ilioperoneal forrard palfrey Satyrinae outfreeman melebiose</p>',
    attachments: [],
    isStarred: true,
    labels: ['company'],
    time: new Date(new Date().getTime() - 7 * 60 * 60 * 1000),
    replies: [],
    folder: 'inbox',
    isRead: false
  }, {
    id: 22,
    from: {
      email: 'dmallallh@ask.com',
      name: 'Dagmar Mallall',
      avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@furl.net'
    }],
    subject: 'Function-based local productivity 💻',
    cc: [],
    bcc: [],
    message: '<p>Dear Consumer, </p><p>gibbed preconceptual passionwort Goanese confluence ungnaw aubepine coadjacency Romipetal isochronic convener overinsistently psammophyte colpenchyma unlogic instinctivist motorcab wellhole receptacle sinistrocular avifaunal decagram paramountness samhita</p><p>sphincterismus Aunjetitz vagabondage parallelotropism unreceipted io wheretoever semivolcanic Chlamydomonadidae spittlestaff spermatogenic Sephardi berrigan lowly grotesquerie Pentameridae unsuccessive archlexicographer Stephanian reimpatriate untossed beth ventriloquial dedicational</p>',
    attachments: [],
    isStarred: false,
    labels: ['company'],
    time: new Date(new Date().getTime() - 5 * 20 * 60 * 1000),
    replies: [],
    folder: 'draft',
    isRead: false
  }, {
    id: 23,
    from: {
      email: 'nmacgaughyi@aol.com',
      name: 'Nada MacGaughy',
      avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@cnet.com'
    }],
    subject: 'Compatible object-oriented policy ',
    cc: [],
    bcc: [],
    message: '<p>Hello John, </p><p>miraculous pirijiri meekheartedness superoxygenation Elric paries epideictical Prajapati reassign stridlins spoach overreadily abusion sailmaking illiterately septangularness retinene Hler exceptionary ferberite possessionalist piperide Oschophoria beau</p><p>abnormalize yearnfulness Janiculum sixhaend abstemiousness uterogestation orchestrina gallotannin muckment melanoblast supercivilization inclusionist electroosmotically immatchable stomatoplastic satinity hydrogen unexorable quinamidine milksopism fascinating ratsbane endocline Zolaist</p>',
    attachments: [{
      fileName: 'Leo.xls',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./resources/js/src/assets/images/icons/xls.png"),
      url: '',
      size: '33mb'
    }],
    isStarred: false,
    labels: ['private'],
    time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
    replies: [],
    folder: 'trash',
    isRead: false
  }, {
    id: 24,
    from: {
      email: 'douldcottj@yellowpages.com',
      name: 'Dalila Ouldcott',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    to: [{
      name: 'me',
      email: 'johndoe@github.io'
    }],
    subject: 'User-friendly value-added application 😊',
    cc: [],
    bcc: [],
    message: '<p>Hey John, </p><p>wellish laminable ineunt popshop catalyte prismatize campimetrical lentisk excluding portlet coccinellid impestation Bangash Lollardist perameloid procerebrum presume cashmerette washbasin nainsook Odontolcae Alea holcodont welted</p><p>cibarious terrifical uploop naphthaleneacetic containable nonsailor Zwinglian blighty benchful guar porch fallectomy building coinvolve eidolism warmth unclericalize seismographic recongeal ethanethial clog regicidal regainment legific</p>',
    attachments: [{
      fileName: 'example.doc',
      thumbnail: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./resources/js/src/assets/images/icons/doc.png"),
      url: '',
      size: '21mb'
    }],
    isStarred: false,
    labels: ['personal'],
    time: new Date(new Date().getTime() - 1 * 30 * 60 * 1000),
    replies: [{
      id: 25,
      from: {
        email: 'johndoe@mail.com',
        name: 'John Doe',
        avatar: __webpack_require__(/*! @/assets/images/avatars/11.png */ "./resources/js/src/assets/images/avatars/11.png")
      },
      to: [{
        name: 'me',
        email: 'hettiem@mail.com'
      }],
      subject: '🎯 Focused impactful open system',
      cc: [],
      bcc: [],
      message: '<p>Hello Hettie,</p><p>Marshmallow cookie jelly liquorice. Powder macaroon cake pastry biscuit. Cotton candy cotton candy jelly chocolate bar. Sesame snaps candy gummi bears cake cookie jujubes. Sweet I love sweet roll. Sesame snaps I love marzipan. Jelly powder tootsie roll. Marshmallow pudding cookie fruitcake liquorice powder. I love I love cookie chupa chups fruitcake ice cream I love biscuit I love. Tiramisu apple pie candy canes cookie gummies. Donut toffee bear claw topping jelly-o. Cupcake icing muffin. Cookie brownie wafer pie sweet. Icing sesame snaps halvah toffee marshmallow lemon drops jelly.</p><p>Tiramisu candy canes powder. Powder chocolate bar halvah liquorice cake I love danish. Cake wafer apple pie. Bear claw fruitcake I love marzipan dessert marzipan lollipop. Halvah gingerbread jelly chupa chups tiramisu I love wafer gummi bears. Candy powder caramels candy gummies. Tart tart cupcake brownie. Bear claw gummies toffee. Tiramisu donut cake chocolate bar. Halvah chocolate bar donut jelly-o. Icing candy brownie chocolate. Pastry bear claw halvah gummies chocolate bar chocolate. Apple pie danish wafer I love biscuit.</p><p>Regrads,</p><p>John Doe</p>',
      attachments: [],
      isStarred: false,
      labels: [],
      time: 'Mon Dec 10 2018 10:56:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false
    }, {
      id: 26,
      from: {
        email: 'hettiem@mail.com',
        name: 'Hettie Mcerlean',
        avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
      },
      to: [{
        name: 'me',
        email: 'johndoe@mail.com'
      }],
      subject: 'Profound systemic alliance 🎉 🎊',
      cc: [],
      bcc: [],
      message: '<p>Oat cake tart danish jelly beans brownie I love. Liquorice I love lollipop chocolate cake carrot cake toffee. Tart muffin candy canes croissant sugar plum lollipop. Macaroon cheesecake marshmallow powder sweet roll bonbon candy apple pie candy canes.</p><p>Regrads,</p><p>Hettie Mcerlean</p>',
      attachments: [],
      isStarred: false,
      labels: [],
      time: 'Mon Dec 10 2018 11:25:00 GMT+0000 (GMT)',
      replies: [],
      folder: 'inbox',
      isRead: false
    }],
    folder: 'inbox',
    isRead: true
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Emails
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/email/emails').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$folder = _config$params.folder,
      folder = _config$params$folder === void 0 ? 'inbox' : _config$params$folder,
      label = _config$params.label;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();

  function isInFolder(email) {
    if (folder === 'trash') return email.folder === 'trash';
    if (folder === 'starred') return email.isStarred && email.folder !== 'trash';
    return email.folder === (folder || email.folder) && email.folder !== 'trash'; // email.folder === (folder || email.folder)
    // if (filter === 'important') return task.isImportant && !task.isDeleted
    // if (filter === 'completed') return task.isCompleted && !task.isDeleted
    // if (filter === 'deleted') return task.isDeleted
    // return !task.isDeleted
  }

  var filteredData = data.emails.filter(function (email) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      email.subject.toLowerCase().includes(queryLowered) && isInFolder(email) && (label ? email.labels.includes(label) : true)
    );
  });
  /* eslint-enable  */
  // ------------------------------------------------
  // Email Meta
  // ------------------------------------------------

  var emailsMeta = {
    inbox: data.emails.filter(function (email) {
      return !email.isDeleted && !email.isRead && email.folder === 'inbox';
    }).length,
    draft: data.emails.filter(function (email) {
      return email.folder === 'draft';
    }).length,
    spam: data.emails.filter(function (email) {
      return !email.isDeleted && !email.isRead && email.folder === 'spam';
    }).length
  };
  return [200, {
    emails: filteredData.reverse(),
    emailsMeta: emailsMeta
  }];
}); // ------------------------------------------------
// POST: Update Email
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/email/update-emails').reply(function (config) {
  var _JSON$parse = JSON.parse(config.data),
      emailIds = _JSON$parse.emailIds,
      dataToUpdate = _JSON$parse.dataToUpdate;

  function updateMailData(email) {
    Object.assign(email, dataToUpdate);
  }

  data.emails.forEach(function (email) {
    if (emailIds.includes(email.id)) updateMailData(email);
  });
  return [200];
}); // ------------------------------------------------
// POST: Update Emails Label
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/email/update-emails-label').reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      emailIds = _JSON$parse2.emailIds,
      label = _JSON$parse2.label;

  function updateMailLabels(email) {
    var labelIndex = email.labels.indexOf(label);
    if (labelIndex === -1) email.labels.push(label);else email.labels.splice(labelIndex, 1);
  }

  data.emails.forEach(function (email) {
    if (emailIds.includes(email.id)) updateMailLabels(email);
  });
  return [200];
}); // ------------------------------------------------
// GET: Paginate Existing Email
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/email/paginate-email').reply(function (config) {
  var _config$params2 = config.params,
      dir = _config$params2.dir,
      emailId = _config$params2.emailId;
  var currentEmailIndex = data.emails.findIndex(function (e) {
    return e.id === emailId;
  });
  var newEmailIndex = dir === 'previous' ? currentEmailIndex - 1 : currentEmailIndex + 1;
  var newEmail = data.emails[newEmailIndex];
  return newEmail ? [200, newEmail] : [404];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/invoice.js":
/*!********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/invoice.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");












/* eslint-disable global-require */

var data = {
  invoices: [{
    id: 4987,
    issuedDate: '13 Dec 2019',
    client: {
      address: '7777 Mendez Plains',
      company: 'Hall-Robbins PLC',
      companyEmail: 'don85@johnson.com',
      country: 'USA',
      contact: '(616) 865-4180',
      name: 'Jordan Stevenson'
    },
    service: 'Software Development',
    total: 3428,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$724',
    dueDate: '23 Apr 2019'
  }, {
    id: 4988,
    issuedDate: '17 Jul 2019',
    client: {
      address: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      companyEmail: 'brenda49@taylor.info',
      country: 'Haiti',
      contact: '(226) 204-8287',
      name: 'Stephanie Burns'
    },
    service: 'UI/UX Design & Development',
    total: 5219,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '15 Dec 2019'
  }, {
    id: 4989,
    issuedDate: '19 Oct 2019',
    client: {
      address: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      companyEmail: 'smithtiffany@powers.com',
      country: 'Denmark',
      contact: '(955) 676-1076',
      name: 'Tony Herrera'
    },
    service: 'Unlimited Extended License',
    total: 3719,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '03 Nov 2019'
  }, {
    id: 4990,
    issuedDate: '06 Mar 2020',
    client: {
      address: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      companyEmail: 'mejiageorge@lee-perez.com',
      country: 'Cambodia',
      contact: '(832) 323-6914',
      name: 'Kevin Patton'
    },
    service: 'Software Development',
    total: 4749,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '11 Feb 2020'
  }, {
    id: 4991,
    issuedDate: '08 Feb 2020',
    client: {
      address: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      companyEmail: 'brandon07@pierce.com',
      country: 'Martinique',
      contact: '(970) 982-3353',
      name: 'Mrs. Julie Donovan MD'
    },
    service: 'UI/UX Design & Development',
    total: 4056,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Draft',
    balance: '$815',
    dueDate: '30 Jun 2019'
  }, {
    id: 4992,
    issuedDate: '26 Aug 2019',
    client: {
      address: '661 Perez Run Apt. 778',
      company: 'Burnett-Young PLC',
      companyEmail: 'guerrerobrandy@beasley-harper.com',
      country: 'Botswana',
      contact: '(511) 938-9617',
      name: 'Amanda Phillips'
    },
    service: 'UI/UX Design & Development',
    total: 2771,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '24 Jun 2019'
  }, {
    id: 4993,
    issuedDate: '17 Sep 2019',
    client: {
      address: '074 Long Union',
      company: 'Wilson-Lee LLC',
      companyEmail: 'williamshenry@moon-smith.com',
      country: 'Montserrat',
      contact: '(504) 859-2893',
      name: 'Christina Collier'
    },
    service: 'UI/UX Design & Development',
    total: 2713,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: '$407',
    dueDate: '22 Nov 2019'
  }, {
    id: 4994,
    issuedDate: '11 Feb 2020',
    client: {
      address: '5225 Ford Cape Apt. 840',
      company: 'Schwartz, Henry and Rhodes Group',
      companyEmail: 'margaretharvey@russell-murray.com',
      country: 'Oman',
      contact: '(758) 403-7718',
      name: 'David Flores'
    },
    service: 'Template Customization',
    total: 4309,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: '-$205',
    dueDate: '10 Feb 2020'
  }, {
    id: 4995,
    issuedDate: '26 Jan 2020',
    client: {
      address: '23717 James Club Suite 277',
      company: 'Henderson-Holder PLC',
      companyEmail: 'dianarodriguez@villegas.com',
      country: 'Cambodia',
      contact: '(292) 873-8254',
      name: 'Valerie Perez'
    },
    service: 'Software Development',
    total: 3367,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '24 Dec 2019'
  }, {
    id: 4996,
    issuedDate: '15 Jan 2020',
    client: {
      address: '4528 Myers Gateway',
      company: 'Page-Wise PLC',
      companyEmail: 'bwilson@norris-brock.com',
      country: 'Guam',
      contact: '(956) 803-2008',
      name: 'Susan Dickerson'
    },
    service: 'Software Development',
    total: 4776,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$305',
    dueDate: '02 Jun 2019'
  }, {
    id: 4997,
    issuedDate: '27 Sep 2019',
    client: {
      address: '4234 Mills Club Suite 107',
      company: 'Turner PLC Inc',
      companyEmail: 'markcampbell@bell.info',
      country: 'United States Virgin Islands',
      contact: '(716) 962-8635',
      name: 'Kelly Smith'
    },
    service: 'Unlimited Extended License',
    total: 3789,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '$666',
    dueDate: '18 Mar 2020'
  }, {
    id: 4998,
    issuedDate: '31 Jul 2019',
    client: {
      address: '476 Keith Meadow',
      company: 'Levine-Dorsey PLC',
      companyEmail: 'mary61@rosario.com',
      country: 'Syrian Arab Republic',
      contact: '(523) 449-0782',
      name: 'Jamie Jones'
    },
    service: 'Unlimited Extended License',
    total: 5200,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '17 Jan 2020'
  }, {
    id: 4999,
    issuedDate: '14 Feb 2020',
    client: {
      address: '56381 Ashley Village Apt. 332',
      company: 'Hall, Thompson and Ramirez LLC',
      companyEmail: 'sean22@cook.com',
      country: 'Ukraine',
      contact: '(583) 470-8356',
      name: 'Ruben Garcia'
    },
    service: 'Software Development',
    total: 4558,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '01 Oct 2019'
  }, {
    id: 5000,
    issuedDate: '21 May 2019',
    client: {
      address: '6946 Gregory Plaza Apt. 310',
      company: 'Lambert-Thomas Group',
      companyEmail: 'mccoymatthew@lopez-jenkins.net',
      country: 'Vanuatu',
      contact: '(366) 906-6467',
      name: 'Ryan Meyer'
    },
    service: 'Template Customization',
    total: 3503,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '22 May 2019'
  }, {
    id: 5001,
    issuedDate: '30 Jun 2019',
    client: {
      address: '64351 Andrew Lights',
      company: 'Gregory-Haynes PLC',
      companyEmail: 'novakshannon@mccarty-murillo.com',
      country: 'Romania',
      contact: '(320) 616-3915',
      name: 'Valerie Valdez'
    },
    service: 'Unlimited Extended License',
    total: 5285,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$202',
    dueDate: '02 Aug 2019'
  }, {
    id: 5002,
    issuedDate: '21 Jun 2019',
    client: {
      address: '5702 Sarah Heights',
      company: 'Wright-Schmidt LLC',
      companyEmail: 'smithrachel@davis-rose.net',
      country: 'Costa Rica',
      contact: '(435) 899-1963',
      name: 'Melissa Wheeler'
    },
    service: 'UI/UX Design & Development',
    total: 3668,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$731',
    dueDate: '15 Dec 2019'
  }, {
    id: 5003,
    issuedDate: '30 Dec 2019',
    client: {
      address: '668 Robert Flats',
      company: 'Russell-Abbott Ltd',
      companyEmail: 'scott96@mejia.net',
      country: 'Congo',
      contact: '(254) 399-4728',
      name: 'Alan Jimenez'
    },
    service: 'Unlimited Extended License',
    total: 4372,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: '-$344',
    dueDate: '17 Sep 2019'
  }, {
    id: 5004,
    issuedDate: '27 May 2019',
    client: {
      address: '55642 Chang Extensions Suite 373',
      company: 'Williams LLC Inc',
      companyEmail: 'cramirez@ross-bass.biz',
      country: 'Saint Pierre and Miquelon',
      contact: '(648) 500-4338',
      name: 'Jennifer Morris'
    },
    service: 'Template Customization',
    total: 3198,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$253',
    dueDate: '16 Aug 2019'
  }, {
    id: 5005,
    issuedDate: '30 Jul 2019',
    client: {
      address: '56694 Eric Orchard',
      company: 'Hudson, Bell and Phillips PLC',
      companyEmail: 'arielberg@wolfe-smith.com',
      country: 'Uruguay',
      contact: '(896) 544-3796',
      name: 'Timothy Stevenson'
    },
    service: 'Unlimited Extended License',
    total: 5293,
    avatar: '',
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '01 Aug 2019'
  }, {
    id: 5006,
    issuedDate: '10 Jun 2019',
    client: {
      address: '3727 Emma Island Suite 879',
      company: 'Berry, Gonzalez and Heath Inc',
      companyEmail: 'yrobinson@nichols.com',
      country: 'Israel',
      contact: '(236) 784-5142',
      name: 'Erik Hayden'
    },
    service: 'Template Customization',
    total: 5612,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Downloaded',
    balance: '$883',
    dueDate: '12 Apr 2019'
  }, {
    id: 5007,
    issuedDate: '01 Feb 2020',
    client: {
      address: '953 Miller Common Suite 580',
      company: 'Martinez, Fuller and Chavez and Sons',
      companyEmail: 'tatejennifer@allen.net',
      country: 'Cook Islands',
      contact: '(436) 717-2419',
      name: 'Katherine Kennedy'
    },
    service: 'Software Development',
    total: 2230,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '19 Nov 2019'
  }, {
    id: 5008,
    issuedDate: '22 Mar 2020',
    client: {
      address: '808 Sullivan Street Apt. 135',
      company: 'Wilson and Sons LLC',
      companyEmail: 'gdurham@lee.com',
      country: 'Nepal',
      contact: '(489) 946-3041',
      name: 'Monica Fuller'
    },
    service: 'Unlimited Extended License',
    total: 2032,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8-small.png */ "./resources/js/src/assets/images/avatars/8-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '30 Nov 2019'
  }, {
    id: 5009,
    issuedDate: '30 Nov 2019',
    client: {
      address: '25135 Christopher Creek',
      company: 'Hawkins, Johnston and Mcguire PLC',
      companyEmail: 'jenny96@lawrence-thompson.com',
      country: 'Kiribati',
      contact: '(274) 246-3725',
      name: 'Stacey Carter'
    },
    service: 'UI/UX Design & Development',
    total: 3128,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '10 Sep 2019'
  }, {
    id: 5010,
    issuedDate: '06 Jan 2020',
    client: {
      address: '81285 Rebecca Estates Suite 046',
      company: 'Huynh-Mills and Sons',
      companyEmail: 'jgutierrez@jackson.com',
      country: 'Swaziland',
      contact: '(258) 211-5970',
      name: 'Chad Davis'
    },
    service: 'Software Development',
    total: 2060,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '08 Dec 2019'
  }, {
    id: 5011,
    issuedDate: '01 Jun 2019',
    client: {
      address: '3102 Briggs Dale Suite 118',
      company: 'Jones-Cooley and Sons',
      companyEmail: 'hunter14@jones.com',
      country: 'Congo',
      contact: '(593) 965-4100',
      name: 'Chris Reyes'
    },
    service: 'UI/UX Design & Development',
    total: 4077,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Feb 2020'
  }, {
    id: 5012,
    issuedDate: '30 Oct 2019',
    client: {
      address: '811 Jill Skyway',
      company: 'Jones PLC Ltd',
      companyEmail: 'pricetodd@johnson-jenkins.com',
      country: 'Brazil',
      contact: '(585) 829-2603',
      name: 'Laurie Summers'
    },
    service: 'Template Customization',
    total: 2872,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '18 Oct 2019'
  }, {
    id: 5013,
    issuedDate: '05 Feb 2020',
    client: {
      address: '2223 Brandon Inlet Suite 597',
      company: 'Jordan, Gomez and Ross Group',
      companyEmail: 'perrydavid@chapman-rogers.com',
      country: 'Congo',
      contact: '(527) 351-5517',
      name: 'Lindsay Wilson'
    },
    service: 'Software Development',
    total: 3740,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Nov 2019'
  }, {
    id: 5014,
    issuedDate: '01 Dec 2019',
    client: {
      address: '08724 Barry Causeway',
      company: 'Gonzalez, Moody and Glover LLC',
      companyEmail: 'leahgriffin@carpenter.com',
      country: 'Equatorial Guinea',
      contact: '(628) 903-0132',
      name: 'Jenna Castro'
    },
    service: 'Unlimited Extended License',
    total: 3623,
    avatar: '',
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '23 Sep 2019'
  }, {
    id: 5015,
    issuedDate: '16 Apr 2019',
    client: {
      address: '073 Holt Ramp Apt. 755',
      company: 'Ashley-Pacheco Ltd',
      companyEmail: 'esparzadaniel@allen.com',
      country: 'Seychelles',
      contact: '(847) 396-9904',
      name: 'Wendy Weber'
    },
    service: 'Software Development',
    total: 2477,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '01 Apr 2019'
  }, {
    id: 5016,
    issuedDate: '24 Jan 2020',
    client: {
      address: '984 Sherry Trail Apt. 953',
      company: 'Berry PLC Group',
      companyEmail: 'todd34@owens-morgan.com',
      country: 'Ireland',
      contact: '(852) 249-4539',
      name: 'April Yates'
    },
    service: 'Unlimited Extended License',
    total: 3904,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$951',
    dueDate: '30 Sep 2019'
  }, {
    id: 5017,
    issuedDate: '24 Feb 2020',
    client: {
      address: '093 Jonathan Camp Suite 953',
      company: 'Allen Group Ltd',
      companyEmail: 'roydavid@bailey.com',
      country: 'Netherlands',
      contact: '(917) 984-2232',
      name: 'Daniel Marshall PhD'
    },
    service: 'UI/UX Design & Development',
    total: 3102,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$153',
    dueDate: '25 Aug 2019'
  }, {
    id: 5018,
    issuedDate: '29 Feb 2020',
    client: {
      address: '4735 Kristie Islands Apt. 259',
      company: 'Chapman-Schneider LLC',
      companyEmail: 'baldwinjoel@washington.com',
      country: 'Cocos (Keeling) Islands',
      contact: '(670) 409-3703',
      name: 'Randy Rich'
    },
    service: 'UI/UX Design & Development',
    total: 2483,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '10 Jul 2019'
  }, {
    id: 5019,
    issuedDate: '07 Aug 2019',
    client: {
      address: '92218 Andrew Radial',
      company: 'Mcclure, Hernandez and Simon Ltd',
      companyEmail: 'psmith@morris.info',
      country: 'Macao',
      contact: '(646) 263-0257',
      name: 'Mrs. Jodi Chapman'
    },
    service: 'Unlimited Extended License',
    total: 2825,
    avatar: __webpack_require__(/*! @/assets/images/avatars/8-small.png */ "./resources/js/src/assets/images/avatars/8-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: '-$459',
    dueDate: '14 Oct 2019'
  }, {
    id: 5020,
    issuedDate: '10 May 2019',
    client: {
      address: '2342 Michelle Valley',
      company: 'Hamilton PLC and Sons',
      companyEmail: 'lori06@morse.com',
      country: 'Somalia',
      contact: '(751) 213-4288',
      name: 'Steven Myers'
    },
    service: 'Unlimited Extended License',
    total: 2029,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '28 Mar 2019'
  }, {
    id: 5021,
    issuedDate: '02 Apr 2019',
    client: {
      address: '16039 Brittany Terrace Apt. 128',
      company: 'Silva-Reeves LLC',
      companyEmail: 'zpearson@miller.com',
      country: 'Slovakia (Slovak Republic)',
      contact: '(655) 649-7872',
      name: 'Charles Alexander'
    },
    service: 'Software Development',
    total: 3208,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '06 Sep 2019'
  }, {
    id: 5022,
    issuedDate: '02 May 2019',
    client: {
      address: '37856 Olsen Lakes Apt. 852',
      company: 'Solis LLC Ltd',
      companyEmail: 'strongpenny@young.net',
      country: 'Brazil',
      contact: '(402) 935-0735',
      name: 'Elizabeth Jones'
    },
    service: 'Software Development',
    total: 3077,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '09 May 2019'
  }, {
    id: 5023,
    issuedDate: '23 Mar 2020',
    client: {
      address: '11489 Griffin Plaza Apt. 927',
      company: 'Munoz-Peters and Sons',
      companyEmail: 'carrietorres@acosta.com',
      country: 'Argentina',
      contact: '(915) 448-6271',
      name: 'Heidi Walton'
    },
    service: 'Software Development',
    total: 5578,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '23 Jul 2019'
  }, {
    id: 5024,
    issuedDate: '28 Sep 2019',
    client: {
      address: '276 Michael Gardens Apt. 004',
      company: 'Shea, Velez and Garcia LLC',
      companyEmail: 'zjohnson@nichols-powers.com',
      country: 'Philippines',
      contact: '(817) 700-2984',
      name: 'Christopher Allen'
    },
    service: 'Software Development',
    total: 2787,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '25 Sep 2019'
  }, {
    id: 5025,
    issuedDate: '21 Feb 2020',
    client: {
      address: '633 Bell Well Apt. 057',
      company: 'Adams, Simmons and Brown Group',
      companyEmail: 'kayla09@thomas.com',
      country: 'Martinique',
      contact: '(266) 611-9482',
      name: 'Joseph Oliver'
    },
    service: 'UI/UX Design & Development',
    total: 5591,
    avatar: '',
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '07 Jun 2019'
  }, {
    id: 5026,
    issuedDate: '24 May 2019',
    client: {
      address: '1068 Lopez Fall',
      company: 'Williams-Lawrence and Sons',
      companyEmail: 'melvindavis@allen.info',
      country: 'Mexico',
      contact: '(739) 745-9728',
      name: 'Megan Roberts'
    },
    service: 'Template Customization',
    total: 2783,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5027,
    issuedDate: '13 Jan 2020',
    client: {
      address: '86691 Mackenzie Light Suite 568',
      company: 'Deleon Inc LLC',
      companyEmail: 'gjordan@fernandez-coleman.com',
      country: 'Costa Rica',
      contact: '(682) 804-6506',
      name: 'Mary Garcia'
    },
    service: 'Template Customization',
    total: 2719,
    avatar: '',
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '04 Feb 2020'
  }, {
    id: 5028,
    issuedDate: '18 May 2019',
    client: {
      address: '86580 Sarah Bridge',
      company: 'Farmer, Johnson and Anderson Group',
      companyEmail: 'robertscott@garcia.com',
      country: 'Cameroon',
      contact: '(775) 366-0411',
      name: 'Crystal Mays'
    },
    service: 'Template Customization',
    total: 3325,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$361',
    dueDate: '02 Mar 2020'
  }, {
    id: 5029,
    issuedDate: '29 Oct 2019',
    client: {
      address: '49709 Edwin Ports Apt. 353',
      company: 'Sherman-Johnson PLC',
      companyEmail: 'desiree61@kelly.com',
      country: 'Macedonia',
      contact: '(510) 536-6029',
      name: 'Nicholas Tanner'
    },
    service: 'Template Customization',
    total: 3851,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '25 Aug 2019'
  }, {
    id: 5030,
    issuedDate: '07 Apr 2019',
    client: {
      address: '3856 Mathis Squares Apt. 584',
      company: 'Byrd LLC PLC',
      companyEmail: 'jeffrey25@martinez-hodge.com',
      country: 'Congo',
      contact: '(253) 230-4657',
      name: 'Mr. Justin Richardson'
    },
    service: 'Template Customization',
    total: 5565,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: 0,
    dueDate: '06 Mar 2020'
  }, {
    id: 5031,
    issuedDate: '21 Aug 2019',
    client: {
      address: '141 Adrian Ridge Suite 550',
      company: 'Stone-Zimmerman Group',
      companyEmail: 'john77@anderson.net',
      country: 'Falkland Islands (Malvinas)',
      contact: '(612) 546-3485',
      name: 'Jennifer Summers'
    },
    service: 'Template Customization',
    total: 3313,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '09 Jun 2019'
  }, {
    id: 5032,
    issuedDate: '31 May 2019',
    client: {
      address: '01871 Kristy Square',
      company: 'Yang, Hansen and Hart PLC',
      companyEmail: 'ywagner@jones.com',
      country: 'Germany',
      contact: '(203) 601-8603',
      name: 'Richard Payne'
    },
    service: 'Template Customization',
    total: 5181,
    avatar: '',
    invoiceStatus: 'Past Due',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5033,
    issuedDate: '12 Jul 2019',
    client: {
      address: '075 Smith Views',
      company: 'Jenkins-Rosales Inc',
      companyEmail: 'calvin07@joseph-edwards.org',
      country: 'Colombia',
      contact: '(895) 401-4255',
      name: 'Lori Wells'
    },
    service: 'Template Customization',
    total: 2869,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    invoiceStatus: 'Partial Payment',
    balance: 0,
    dueDate: '22 Mar 2020'
  }, {
    id: 5034,
    issuedDate: '10 Jul 2019',
    client: {
      address: '2577 Pearson Overpass Apt. 314',
      company: 'Mason-Reed PLC',
      companyEmail: 'eric47@george-castillo.com',
      country: 'Paraguay',
      contact: '(602) 336-9806',
      name: 'Tammy Sanchez'
    },
    service: 'Unlimited Extended License',
    total: 4836,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '22 Oct 2019'
  }, {
    id: 5035,
    issuedDate: '20 Jul 2019',
    client: {
      address: '1770 Sandra Mountains Suite 636',
      company: 'Foster-Pham PLC',
      companyEmail: 'jamesjoel@chapman.net',
      country: 'Western Sahara',
      contact: '(936) 550-1638',
      name: 'Dana Carey'
    },
    service: 'UI/UX Design & Development',
    total: 4263,
    avatar: '',
    invoiceStatus: 'Draft',
    balance: '$762',
    dueDate: '12 Jun 2019'
  }, {
    id: 5036,
    issuedDate: '19 Apr 2019',
    client: {
      address: '78083 Laura Pines',
      company: 'Richardson and Sons LLC',
      companyEmail: 'pwillis@cross.org',
      country: 'Bhutan',
      contact: '(687) 660-2473',
      name: 'Andrew Burns'
    },
    service: 'Unlimited Extended License',
    total: 3171,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    invoiceStatus: 'Paid',
    balance: '-$205',
    dueDate: '25 Sep 2019'
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/invoice/invoices').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 10 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'id' : _config$params$sortBy,
      _config$params$sortDe = _config$params.sortDesc,
      sortDesc = _config$params$sortDe === void 0 ? false : _config$params$sortDe,
      _config$params$status = _config$params.status,
      status = _config$params$status === void 0 ? null : _config$params$status;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();
  var filteredData = data.invoices.filter(function (invoice) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (invoice.client.companyEmail.toLowerCase().includes(queryLowered) || invoice.client.name.toLowerCase().includes(queryLowered)) && invoice.invoiceStatus === (status || invoice.invoiceStatus)
    );
  });
  /* eslint-enable  */

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_11__["sortCompare"])(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, {
    invoices: Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_11__["paginateArray"])(sortedData, perPage, page),
    total: filteredData.length
  }];
}); // ------------------------------------------------
// GET: Return Single Invoice
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet(/\/apps\/invoice\/invoices\/\d+/).reply(function (config) {
  // Get event id from URL
  var invoiceId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  invoiceId = Number(invoiceId);
  var invoiceIndex = data.invoices.findIndex(function (e) {
    return e.id === invoiceId;
  });
  var invoice = data.invoices[invoiceIndex];
  var responseData = {
    invoice: invoice,
    paymentDetails: {
      totalDue: '$12,110.55',
      bankName: 'American Bank',
      country: 'United States',
      iban: 'ETD95476213874685',
      swiftCode: 'BR91905'
    }
  };
  if (invoice) return [200, responseData];
  return [404];
}); // ------------------------------------------------
// GET: Return Clients
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_10__["default"].onGet('/apps/invoice/clients').reply(function () {
  var clients = data.invoices.map(function (invoice) {
    return invoice.client;
  });
  return [200, clients.slice(0, 5)];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/todo.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/todo.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");







 // import { paginateArray, sortCompare } from '@/@fake-db/utils'

/* eslint-disable global-require */

var data = {
  tasks: [{
    id: 1,
    title: 'Entire change break our wife wide it daughter mention member.',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Jacob Ramirez',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    tags: ['update'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 2,
    title: 'Citizen stand administration step agency century.',
    dueDate: '2020-12-14',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Andrew Anderson',
      avatar: ''
    },
    tags: ['team', 'medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 3,
    title: 'Meet Jane and ask for coffee ❤️',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Benjamin Jacobs',
      avatar: ''
    },
    tags: ['high'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 4,
    title: 'Answer the support tickets and close completed tickets. ',
    dueDate: '2020-11-20',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Curtis Schmidt',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }, {
    id: 5,
    title: 'Test functionality of apps developed by dev team for enhancements. ',
    dueDate: '2020-12-06',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Katherine Perkins',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
    },
    tags: ['medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 6,
    title: 'Conduct a mini awareness meeting regarding health care. ',
    dueDate: '2020-12-06',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'David Murphy',
      avatar: ''
    },
    tags: ['high', 'medium'],
    isCompleted: true,
    isDeleted: true,
    isImportant: false
  }, {
    id: 7,
    title: 'Plan new dashboard design with design team for Google app store. ',
    dueDate: '2020-12-05',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Karina Miller',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }, {
    id: 8,
    title: 'Pick up Nats from her school and drop at dance class😁 ',
    dueDate: '2020-12-08',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Thomas Moses',
      avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
    },
    tags: ['low', 'medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 9,
    title: 'Finish documentation and make it live',
    dueDate: '2020-11-25',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Angel Morrow',
      avatar: ''
    },
    tags: ['high', 'update'],
    isCompleted: false,
    isDeleted: true,
    isImportant: false
  }, {
    id: 10,
    title: 'List out all the SEO resources and send it to new SEO team. ',
    dueDate: '2020-12-09',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Karen Carrillo',
      avatar: ''
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 11,
    title: 'Refactor Code and fix the bugs and test it on server ',
    dueDate: '2020-12-01',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Timothy Brewer',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 12,
    title: 'Reminder to mail clients for holidays',
    dueDate: '2020-12-09',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Brian Barry',
      avatar: ''
    },
    tags: ['team'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 13,
    title: "Submit quotation for Abid's ecommerce website and admin project",
    dueDate: '2020-12-01',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Joshua Golden',
      avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
    },
    tags: ['team'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 14,
    title: 'Send PPT with real-time reports',
    dueDate: '2020-11-29',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Paula Hammond',
      avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
    },
    tags: ['medium'],
    isCompleted: true,
    isDeleted: false,
    isImportant: true
  }, {
    id: 15,
    title: 'Skype Tommy for project status & report',
    dueDate: '2020-11-29',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Tyler Garcia',
      avatar: ''
    },
    tags: ['medium'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 16,
    title: 'Hire 5 new Fresher or Experienced, frontend and backend developers ',
    dueDate: '2020-12-12',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Darlene Shields',
      avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
    },
    tags: ['low'],
    isCompleted: true,
    isDeleted: false,
    isImportant: false
  }, {
    id: 17,
    title: 'Plan a party for development team 🎁',
    dueDate: '2020-12-04',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Destiny Michael',
      avatar: ''
    },
    tags: ['medium', 'low'],
    isCompleted: false,
    isDeleted: false,
    isImportant: false
  }, {
    id: 18,
    title: 'Fix Responsiveness for new structure 💻',
    dueDate: '2020-11-18',
    description: '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
    assignee: {
      fullName: 'Danielle Anderson',
      avatar: __webpack_require__(/*! @/assets/images/avatars/12.png */ "./resources/js/src/assets/images/avatars/12.png")
    },
    tags: ['low'],
    isCompleted: false,
    isDeleted: false,
    isImportant: true
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/todo/tasks').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      filter = _config$params.filter,
      tag = _config$params.tag,
      _config$params$sortBy = _config$params.sortBy,
      sortByParam = _config$params$sortBy === void 0 ? 'latest' : _config$params$sortBy;
  /* eslint-enable */
  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------

  var sortDesc = true;

  var sortBy = function () {
    if (sortByParam === 'title-asc') {
      sortDesc = false;
      return 'title';
    }

    if (sortByParam === 'title-desc') return 'title';

    if (sortByParam === 'assignee') {
      sortDesc = false;
      return 'assignee';
    }

    if (sortByParam === 'due-date') {
      sortDesc = false;
      return 'dueDate';
    }

    return 'id';
  }(); // ------------------------------------------------
  // Filtering
  // ------------------------------------------------


  var queryLowered = q.toLowerCase();

  var hasFilter = function hasFilter(task) {
    if (filter === 'important') return task.isImportant && !task.isDeleted;
    if (filter === 'completed') return task.isCompleted && !task.isDeleted;
    if (filter === 'deleted') return task.isDeleted;
    return !task.isDeleted;
  };
  /* eslint-disable no-confusing-arrow, implicit-arrow-linebreak, arrow-body-style */


  var filteredData = data.tasks.filter(function (task) {
    return task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true);
  });
  /* eslint-enable  */
  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------

  var sortTasks = function sortTasks(key) {
    return function (a, b) {
      var fieldA;
      var fieldB; // If sorting is by dueDate => Convert data to date

      if (key === 'dueDate') {
        fieldA = new Date(a[key]);
        fieldB = new Date(b[key]); // eslint-disable-next-line brace-style
      } // If sorting is by assignee => Use `fullName` of assignee
      else if (key === 'assignee') {
        fieldA = a.assignee ? a.assignee.fullName : null;
        fieldB = b.assignee ? b.assignee.fullName : null;
      } else {
        fieldA = a[key];
        fieldB = b[key];
      }

      var comparison = 0;

      if (fieldA === fieldB) {
        comparison = 0;
      } else if (fieldA === null) {
        comparison = 1;
      } else if (fieldB === null) {
        comparison = -1;
      } else if (fieldA > fieldB) {
        comparison = 1;
      } else if (fieldA < fieldB) {
        comparison = -1;
      }

      return comparison;
    };
  }; // Sort Data


  var sortedData = filteredData.sort(sortTasks(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, sortedData];
}); // ------------------------------------------------
// POST: Add new task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/todo/tasks').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      task = _JSON$parse.task;

  var length = data.tasks.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.tasks[length - 1].id;
  }

  task.id = lastIndex + 1;
  data.tasks.push(task);
  return [201, {
    task: task
  }];
}); // ------------------------------------------------
// POST: Update Task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost(/\/apps\/todo\/tasks\/\d+/).reply(function (config) {
  var _JSON$parse2 = JSON.parse(config.data),
      taskData = _JSON$parse2.task; // Convert Id to number


  taskData.id = Number(taskData.id);
  var task = data.tasks.find(function (e) {
    return e.id === Number(taskData.id);
  });
  Object.assign(task, taskData);
  return [200, {
    task: task
  }];
}); // ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onDelete(/\/apps\/todo\/tasks\/\d+/).reply(function (config) {
  // Get task id from URL
  var taskId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  taskId = Number(taskId);
  var task = data.tasks.find(function (t) {
    return t.id === taskId;
  });
  Object.assign(task, {
    isDeleted: true
  });
  return [200];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/apps/user.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/@fake-db/data/apps/user.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "./node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "./node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _fake_db_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/@fake-db/utils */ "./resources/js/src/@fake-db/utils.js");









/* eslint-disable global-require */

var data = {
  users: [{
    id: 1,
    fullName: 'Galen Slixby',
    company: 'Yotz PVT LTD',
    role: 'editor',
    username: 'gslixby0',
    country: 'El Salvador',
    contact: '(479) 232-9151',
    email: 'gslixby0@abc.net.au',
    currentPlan: 'enterprise',
    status: 'inactive',
    avatar: ''
  }, {
    id: 2,
    fullName: 'Halsey Redmore',
    company: 'Skinder PVT LTD',
    role: 'author',
    username: 'hredmore1',
    country: 'Albania',
    contact: '(472) 607-9137',
    email: 'hredmore1@imgur.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 3,
    fullName: 'Marjory Sicely',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    username: 'msicely2',
    country: 'Russia',
    contact: '(321) 264-4599',
    email: 'msicely2@who.int',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 4,
    fullName: 'Cyrill Risby',
    company: 'Oozz PVT LTD',
    role: 'maintainer',
    username: 'crisby3',
    country: 'China',
    contact: '(923) 690-6806',
    email: 'crisby3@wordpress.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 5,
    fullName: 'Maggy Hurran',
    company: 'Aimbo PVT LTD',
    role: 'subscriber',
    username: 'mhurran4',
    country: 'Pakistan',
    contact: '(669) 914-1078',
    email: 'mhurran4@yahoo.co.jp',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 6,
    fullName: 'Silvain Halstead',
    company: 'Jaxbean PVT LTD',
    role: 'author',
    username: 'shalstead5',
    country: 'China',
    contact: '(958) 973-3093',
    email: 'shalstead5@shinystat.com',
    currentPlan: 'company',
    status: 'active',
    avatar: ''
  }, {
    id: 7,
    fullName: 'Breena Gallemore',
    company: 'Jazzy PVT LTD',
    role: 'subscriber',
    username: 'bgallemore6',
    country: 'Canada',
    contact: '(825) 977-8152',
    email: 'bgallemore6@boston.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: ''
  }, {
    id: 8,
    fullName: 'Kathryne Liger',
    company: 'Pixoboo PVT LTD',
    role: 'author',
    username: 'kliger7',
    country: 'France',
    contact: '(187) 440-0934',
    email: 'kliger7@vinaora.com',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 9,
    fullName: 'Franz Scotfurth',
    company: 'Tekfly PVT LTD',
    role: 'subscriber',
    username: 'fscotfurth8',
    country: 'China',
    contact: '(978) 146-5443',
    email: 'fscotfurth8@dailymotion.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 10,
    fullName: 'Jillene Bellany',
    company: 'Gigashots PVT LTD',
    role: 'maintainer',
    username: 'jbellany9',
    country: 'Jamaica',
    contact: '(589) 284-6732',
    email: 'jbellany9@kickstarter.com',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 11,
    fullName: 'Jonah Wharlton',
    company: 'Eare PVT LTD',
    role: 'subscriber',
    username: 'jwharltona',
    country: 'United States',
    contact: '(176) 532-6824',
    email: 'jwharltona@oakley.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 12,
    fullName: 'Seth Hallam',
    company: 'Yakitri PVT LTD',
    role: 'subscriber',
    username: 'shallamb',
    country: 'Peru',
    contact: '(234) 464-0600',
    email: 'shallamb@hugedomains.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
  }, {
    id: 13,
    fullName: 'Yoko Pottie',
    company: 'Leenti PVT LTD',
    role: 'subscriber',
    username: 'ypottiec',
    country: 'Philippines',
    contact: '(907) 284-5083',
    email: 'ypottiec@privacy.gov.au',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 14,
    fullName: 'Maximilianus Krause',
    company: 'Digitube PVT LTD',
    role: 'author',
    username: 'mkraused',
    country: 'Democratic Republic of the Congo',
    contact: '(167) 135-7392',
    email: 'mkraused@stanford.edu',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 15,
    fullName: 'Zsazsa McCleverty',
    company: 'Kaymbo PVT LTD',
    role: 'maintainer',
    username: 'zmcclevertye',
    country: 'France',
    contact: '(317) 409-6565',
    email: 'zmcclevertye@soundcloud.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 16,
    fullName: 'Bentlee Emblin',
    company: 'Yambee PVT LTD',
    role: 'author',
    username: 'bemblinf',
    country: 'Spain',
    contact: '(590) 606-1056',
    email: 'bemblinf@wired.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 17,
    fullName: 'Brockie Myles',
    company: 'Wikivu PVT LTD',
    role: 'maintainer',
    username: 'bmylesg',
    country: 'Poland',
    contact: '(553) 225-9905',
    email: 'bmylesg@amazon.com',
    currentPlan: 'basic',
    status: 'active',
    avatar: ''
  }, {
    id: 18,
    fullName: 'Bertha Biner',
    company: 'Twinte PVT LTD',
    role: 'editor',
    username: 'bbinerh',
    country: 'Yemen',
    contact: '(901) 916-9287',
    email: 'bbinerh@mozilla.com',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 19,
    fullName: 'Travus Bruntjen',
    company: 'Cogidoo PVT LTD',
    role: 'admin',
    username: 'tbruntjeni',
    country: 'France',
    contact: '(524) 586-6057',
    email: 'tbruntjeni@sitemeter.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: ''
  }, {
    id: 20,
    fullName: 'Wesley Burland',
    company: 'Bubblemix PVT LTD',
    role: 'editor',
    username: 'wburlandj',
    country: 'Honduras',
    contact: '(569) 683-1292',
    email: 'wburlandj@uiuc.edu',
    currentPlan: 'team',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 21,
    fullName: 'Selina Kyle',
    company: 'Wayne Enterprises',
    role: 'admin',
    username: 'catwomen1940',
    country: 'USA',
    contact: '(829) 537-0057',
    email: 'irena.dubrovna@wayne.com',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 22,
    fullName: 'Jameson Lyster',
    company: 'Quaxo PVT LTD',
    role: 'editor',
    username: 'jlysterl',
    country: 'Ukraine',
    contact: '(593) 624-0222',
    email: 'jlysterl@guardian.co.uk',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
  }, {
    id: 23,
    fullName: 'Kare Skitterel',
    company: 'Ainyx PVT LTD',
    role: 'maintainer',
    username: 'kskitterelm',
    country: 'Poland',
    contact: '(254) 845-4107',
    email: 'kskitterelm@washingtonpost.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
  }, {
    id: 24,
    fullName: 'Cleavland Hatherleigh',
    company: 'Flipopia PVT LTD',
    role: 'admin',
    username: 'chatherleighn',
    country: 'Brazil',
    contact: '(700) 783-7498',
    email: 'chatherleighn@washington.edu',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/2.png */ "./resources/js/src/assets/images/avatars/2.png")
  }, {
    id: 25,
    fullName: 'Adeline Micco',
    company: 'Topicware PVT LTD',
    role: 'admin',
    username: 'amiccoo',
    country: 'France',
    contact: '(227) 598-1841',
    email: 'amiccoo@whitehouse.gov',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: ''
  }, {
    id: 26,
    fullName: 'Hugh Hasson',
    company: 'Skinix PVT LTD',
    role: 'admin',
    username: 'hhassonp',
    country: 'China',
    contact: '(582) 516-1324',
    email: 'hhassonp@bizjournals.com',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 27,
    fullName: 'Germain Jacombs',
    company: 'Youopia PVT LTD',
    role: 'editor',
    username: 'gjacombsq',
    country: 'Zambia',
    contact: '(137) 467-5393',
    email: 'gjacombsq@jigsy.com',
    currentPlan: 'enterprise',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/10.png */ "./resources/js/src/assets/images/avatars/10.png")
  }, {
    id: 28,
    fullName: 'Bree Kilday',
    company: 'Jetpulse PVT LTD',
    role: 'maintainer',
    username: 'bkildayr',
    country: 'Portugal',
    contact: '(412) 476-0854',
    email: 'bkildayr@mashable.com',
    currentPlan: 'team',
    status: 'active',
    avatar: ''
  }, {
    id: 29,
    fullName: 'Candice Pinyon',
    company: 'Kare PVT LTD',
    role: 'maintainer',
    username: 'cpinyons',
    country: 'Sweden',
    contact: '(170) 683-1520',
    email: 'cpinyons@behance.net',
    currentPlan: 'team',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/7.png */ "./resources/js/src/assets/images/avatars/7.png")
  }, {
    id: 30,
    fullName: 'Isabel Mallindine',
    company: 'Voomm PVT LTD',
    role: 'subscriber',
    username: 'imallindinet',
    country: 'Slovenia',
    contact: '(332) 803-1983',
    email: 'imallindinet@shinystat.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 31,
    fullName: 'Gwendolyn Meineken',
    company: 'Oyondu PVT LTD',
    role: 'admin',
    username: 'gmeinekenu',
    country: 'Moldova',
    contact: '(551) 379-7460',
    email: 'gmeinekenu@hc360.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 32,
    fullName: 'Rafaellle Snowball',
    company: 'Fivespan PVT LTD',
    role: 'editor',
    username: 'rsnowballv',
    country: 'Philippines',
    contact: '(974) 829-0911',
    email: 'rsnowballv@indiegogo.com',
    currentPlan: 'basic',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/5.png */ "./resources/js/src/assets/images/avatars/5.png")
  }, {
    id: 33,
    fullName: 'Rochette Emer',
    company: 'Thoughtworks PVT LTD',
    role: 'admin',
    username: 'remerw',
    country: 'North Korea',
    contact: '(841) 889-3339',
    email: 'remerw@blogtalkradio.com',
    currentPlan: 'basic',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/8.png */ "./resources/js/src/assets/images/avatars/8.png")
  }, {
    id: 34,
    fullName: 'Ophelie Fibbens',
    company: 'Jaxbean PVT LTD',
    role: 'subscriber',
    username: 'ofibbensx',
    country: 'Indonesia',
    contact: '(764) 885-7351',
    email: 'ofibbensx@booking.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/4.png */ "./resources/js/src/assets/images/avatars/4.png")
  }, {
    id: 35,
    fullName: 'Stephen MacGilfoyle',
    company: 'Browseblab PVT LTD',
    role: 'maintainer',
    username: 'smacgilfoyley',
    country: 'Japan',
    contact: '(350) 589-8520',
    email: 'smacgilfoyley@bigcartel.com',
    currentPlan: 'company',
    status: 'pending',
    avatar: ''
  }, {
    id: 36,
    fullName: 'Bradan Rosebotham',
    company: 'Agivu PVT LTD',
    role: 'subscriber',
    username: 'brosebothamz',
    country: 'Belarus',
    contact: '(882) 933-2180',
    email: 'brosebothamz@tripadvisor.com',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 37,
    fullName: 'Skip Hebblethwaite',
    company: 'Katz PVT LTD',
    role: 'admin',
    username: 'shebblethwaite10',
    country: 'Canada',
    contact: '(610) 343-1024',
    email: 'shebblethwaite10@arizona.edu',
    currentPlan: 'company',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }, {
    id: 38,
    fullName: 'Moritz Piccard',
    company: 'Twitternation PVT LTD',
    role: 'maintainer',
    username: 'mpiccard11',
    country: 'Croatia',
    contact: '(365) 277-2986',
    email: 'mpiccard11@vimeo.com',
    currentPlan: 'enterprise',
    status: 'inactive',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 39,
    fullName: 'Tyne Widmore',
    company: 'Yombu PVT LTD',
    role: 'subscriber',
    username: 'twidmore12',
    country: 'Finland',
    contact: '(531) 731-0928',
    email: 'twidmore12@bravesites.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 40,
    fullName: 'Florenza Desporte',
    company: 'Kamba PVT LTD',
    role: 'author',
    username: 'fdesporte13',
    country: 'Ukraine',
    contact: '(312) 104-2638',
    email: 'fdesporte13@omniture.com',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/6.png */ "./resources/js/src/assets/images/avatars/6.png")
  }, {
    id: 41,
    fullName: 'Edwina Baldetti',
    company: 'Dazzlesphere PVT LTD',
    role: 'maintainer',
    username: 'ebaldetti14',
    country: 'Haiti',
    contact: '(315) 329-3578',
    email: 'ebaldetti14@theguardian.com',
    currentPlan: 'team',
    status: 'pending',
    avatar: ''
  }, {
    id: 42,
    fullName: 'Benedetto Rossiter',
    company: 'Mybuzz PVT LTD',
    role: 'editor',
    username: 'brossiter15',
    country: 'Indonesia',
    contact: '(323) 175-6741',
    email: 'brossiter15@craigslist.org',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 43,
    fullName: 'Micaela McNirlan',
    company: 'Tambee PVT LTD',
    role: 'admin',
    username: 'mmcnirlan16',
    country: 'Indonesia',
    contact: '(242) 952-0916',
    email: 'mmcnirlan16@hc360.com',
    currentPlan: 'basic',
    status: 'inactive',
    avatar: ''
  }, {
    id: 44,
    fullName: 'Vladamir Koschek',
    company: 'Centimia PVT LTD',
    role: 'author',
    username: 'vkoschek17',
    country: 'Guatemala',
    contact: '(531) 758-8335',
    email: 'vkoschek17@abc.net.au',
    currentPlan: 'team',
    status: 'active',
    avatar: ''
  }, {
    id: 45,
    fullName: 'Corrie Perot',
    company: 'Flipopia PVT LTD',
    role: 'subscriber',
    username: 'cperot18',
    country: 'China',
    contact: '(659) 385-6808',
    email: 'cperot18@goo.ne.jp',
    currentPlan: 'team',
    status: 'pending',
    avatar: __webpack_require__(/*! @/assets/images/avatars/3.png */ "./resources/js/src/assets/images/avatars/3.png")
  }, {
    id: 46,
    fullName: 'Saunder Offner',
    company: 'Skalith PVT LTD',
    role: 'maintainer',
    username: 'soffner19',
    country: 'Poland',
    contact: '(200) 586-2264',
    email: 'soffner19@mac.com',
    currentPlan: 'enterprise',
    status: 'pending',
    avatar: ''
  }, {
    id: 47,
    fullName: 'Karena Courtliff',
    company: 'Feedfire PVT LTD',
    role: 'admin',
    username: 'kcourtliff1a',
    country: 'China',
    contact: '(478) 199-0020',
    email: 'kcourtliff1a@bbc.co.uk',
    currentPlan: 'basic',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")
  }, {
    id: 48,
    fullName: 'Onfre Wind',
    company: 'Thoughtmix PVT LTD',
    role: 'admin',
    username: 'owind1b',
    country: 'Ukraine',
    contact: '(344) 262-7270',
    email: 'owind1b@yandex.ru',
    currentPlan: 'basic',
    status: 'pending',
    avatar: ''
  }, {
    id: 49,
    fullName: 'Paulie Durber',
    company: 'Babbleblab PVT LTD',
    role: 'subscriber',
    username: 'pdurber1c',
    country: 'Sweden',
    contact: '(694) 676-1275',
    email: 'pdurber1c@gov.uk',
    currentPlan: 'team',
    status: 'inactive',
    avatar: ''
  }, {
    id: 50,
    fullName: 'Beverlie Krabbe',
    company: 'Kaymbo PVT LTD',
    role: 'editor',
    username: 'bkrabbe1d',
    country: 'China',
    contact: '(397) 294-5153',
    email: 'bkrabbe1d@home.pl',
    currentPlan: 'company',
    status: 'active',
    avatar: __webpack_require__(/*! @/assets/images/avatars/9.png */ "./resources/js/src/assets/images/avatars/9.png")
  }]
};
/* eslint-enable */
// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet('/apps/user/users').reply(function (config) {
  // eslint-disable-next-line object-curly-newline
  var _config$params = config.params,
      _config$params$q = _config$params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q,
      _config$params$perPag = _config$params.perPage,
      perPage = _config$params$perPag === void 0 ? 10 : _config$params$perPag,
      _config$params$page = _config$params.page,
      page = _config$params$page === void 0 ? 1 : _config$params$page,
      _config$params$sortBy = _config$params.sortBy,
      sortBy = _config$params$sortBy === void 0 ? 'id' : _config$params$sortBy,
      _config$params$sortDe = _config$params.sortDesc,
      sortDesc = _config$params$sortDe === void 0 ? false : _config$params$sortDe,
      _config$params$role = _config$params.role,
      role = _config$params$role === void 0 ? null : _config$params$role,
      _config$params$plan = _config$params.plan,
      plan = _config$params$plan === void 0 ? null : _config$params$plan,
      _config$params$status = _config$params.status,
      status = _config$params$status === void 0 ? null : _config$params$status;
  /* eslint-enable */

  var queryLowered = q.toLowerCase();
  var filteredData = data.users.filter(function (user) {
    return (
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) && user.role === (role || user.role) && user.currentPlan === (plan || user.currentPlan) && user.status === (status || user.status)
    );
  });
  /* eslint-enable  */

  var sortedData = filteredData.sort(Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_8__["sortCompare"])(sortBy));
  if (sortDesc) sortedData.reverse();
  return [200, {
    users: Object(_fake_db_utils__WEBPACK_IMPORTED_MODULE_8__["paginateArray"])(sortedData, perPage, page),
    total: filteredData.length
  }];
}); // ------------------------------------------------
// POST: Add new user
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onPost('/apps/user/users').reply(function (config) {
  // Get event from post data
  var _JSON$parse = JSON.parse(config.data),
      user = _JSON$parse.user; // Assign Status


  user.status = 'active';
  var length = data.users.length;
  var lastIndex = 0;

  if (length) {
    lastIndex = data.users[length - 1].id;
  }

  user.id = lastIndex + 1;
  data.users.push(user);
  return [201, {
    user: user
  }];
}); // ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------

_fake_db_mock__WEBPACK_IMPORTED_MODULE_7__["default"].onGet(/\/apps\/user\/users\/\d+/).reply(function (config) {
  // Get event id from URL
  var userId = config.url.substring(config.url.lastIndexOf('/') + 1); // Convert Id to number

  userId = Number(userId);
  var userIndex = data.users.findIndex(function (e) {
    return e.id === userId;
  });
  var user = data.users[userIndex];
  if (user) return [200, user];
  return [404];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/card/card-analytics.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/card/card-analytics.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

var data = {
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1
  },
  revenueReport: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800'
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561'
  },
  revenue: {
    thisMonth: '86,589',
    lastMonth: '73,683'
  },
  productOrders: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: {
      finished: 23043,
      pending: 14658,
      rejected: 4758
    }
  },
  sessionsDevice: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: [{
      icon: 'MonitorIcon',
      name: 'Desktop',
      iconColor: 'text-primary',
      usage: 58.6,
      upDown: 2
    }, {
      icon: 'TabletIcon',
      name: 'Mobile',
      iconColor: 'text-warning',
      usage: 34.9,
      upDown: 8
    }, {
      icon: 'TabletIcon',
      name: 'Tablet',
      iconColor: 'text-danger',
      usage: 6.5,
      upDown: -5
    }]
  },
  customers: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    listData: [{
      icon: 'CircleIcon',
      iconColor: 'text-primary',
      text: 'New',
      result: 890
    }, {
      icon: 'CircleIcon',
      iconColor: 'text-warning',
      text: 'Returning',
      result: 258
    }, {
      icon: 'CircleIcon',
      iconColor: 'text-danger',
      text: 'Referrals',
      result: 149
    }]
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/support-tracker').reply(function () {
  return [200, data.supportTracker];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/avg-sessions').reply(function () {
  return [200, data.avgSessions];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/revenue-report').reply(function () {
  return [200, data.revenueReport];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/goal-overview').reply(function () {
  return [200, data.goalOverview];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/revenue').reply(function () {
  return [200, data.revenue];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/product-orders').reply(function () {
  return [200, data.productOrders];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/sessions-device').reply(function () {
  return [200, data.sessionsDevice];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-analytics/customers').reply(function () {
  return [200, data.customers];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/card/card-statistics.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/card/card-statistics.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

var data = {
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    analyticsData: {
      subscribers: 92600
    }
  },
  revenueGenerated: {
    series: [{
      name: 'Revenue',
      data: [350, 275, 400, 300, 350, 300, 450]
    }],
    analyticsData: {
      revenue: 97500
    }
  },
  quarterlySales: {
    series: [{
      name: 'Sales',
      data: [10, 15, 7, 12, 3, 16]
    }],
    analyticsData: {
      sales: '36%'
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    analyticsData: {
      orders: 97500
    }
  },
  siteTraffic: {
    series: [{
      name: 'Traffic Rate',
      data: [150, 200, 125, 225, 200, 250]
    }]
  },
  activeUsers: {
    series: [{
      name: 'Active Users',
      data: [750, 1000, 900, 1250, 1000, 1200, 1100]
    }]
  },
  newsletter: {
    series: [{
      name: 'Newsletter',
      data: [365, 390, 365, 400, 375, 400]
    }]
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/subscribers').reply(function () {
  return [200, data.subscribersGained];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/revenue').reply(function () {
  return [200, data.revenueGenerated];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/sales').reply(function () {
  return [200, data.quarterlySales];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/orders').reply(function () {
  return [200, data.ordersRecevied];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/site-traffic').reply(function () {
  return [200, data.siteTraffic];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/active-users').reply(function () {
  return [200, data.activeUsers];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/card/card-statistics/newsletter').reply(function () {
  return [200, data.newsletter];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/dashboard/analytics.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/dashboard/analytics.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  congratulations: {
    name: 'John',
    saleToday: '57.6'
  },
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    analyticsData: {
      subscribers: 92600
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    analyticsData: {
      orders: 38400
    }
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1,
    salesBar: {
      series: [{
        name: 'Sessions',
        data: [75, 125, 225, 175, 125, 75, 25]
      }]
    }
  },
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1,
    supportTrackerRadialBar: {
      series: [83]
    }
  },
  timeline: {
    step1: {
      title: '12 Invoices have been paid',
      subtitle: 'Invoices have been paid to the company.',
      img: __webpack_require__(/*! @/assets/images/icons/json.png */ "./resources/js/src/assets/images/icons/json.png"),
      fileName: 'data.json',
      duration: '12 min ago'
    },
    step2: {
      title: 'Client Meeting',
      subtitle: 'Project meeting with john @10:15am',
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      avatarName: 'John Doe (Client)',
      occupation: 'CEO of Infibeam',
      duration: '45 min ago'
    },
    step3: {
      title: 'Create a new project for client',
      subtitle: 'Add files to new design folder',
      duration: '2 day ago',
      avatars: [{
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        name: 'Billy Hopkins'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        name: 'Amy Carson'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        name: 'Brandon Miles'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
        name: 'Daisy Weber'
      }, {
        userImg: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
        name: 'Jenny Looper'
      }]
    },
    step4: {
      title: 'Create a new project for client',
      duration: '5 day ago',
      subtitle: 'Add files to new design folder'
    }
  },
  salesChart: {
    series: [{
      name: 'Sales',
      data: [90, 50, 86, 40, 100, 20]
    }, {
      name: 'Visit',
      data: [70, 75, 70, 76, 20, 85]
    }]
  },
  appDesign: {
    date: '03 Sep, 20',
    title: 'App design',
    subtitle: 'You can Find Only Post and Quotes Related to IOS like ipad app design, iphone app design',
    teams: [{
      name: 'Figma',
      color: 'light-warning'
    }, {
      name: 'Wireframe',
      color: 'light-primary'
    }],
    members: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      color: 'primary'
    }, {
      text: 'PI',
      color: 'light-danger'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-14.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg"),
      color: 'primary'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      color: 'primary'
    }, {
      text: 'AL',
      color: 'light-secondary'
    }],
    planing: [{
      title: 'Due Date',
      subtitle: '12 Apr, 21'
    }, {
      title: 'Budget',
      subtitle: '$49251.91'
    }, {
      title: 'Cost',
      subtitle: '$840.99'
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/analytics/data').reply(function () {
  return [200, data];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/dashboard/ecommerce.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/dashboard/ecommerce.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  congratulations: {
    name: 'John',
    saleToday: '48900'
  },
  statisticsItems: [{
    icon: 'TrendingUpIcon',
    color: 'light-primary',
    title: '230k',
    subtitle: 'Sales',
    customClass: 'mb-2 mb-xl-0'
  }, {
    icon: 'UserIcon',
    color: 'light-info',
    title: '8.549k',
    subtitle: 'Customers',
    customClass: 'mb-2 mb-xl-0'
  }, {
    icon: 'BoxIcon',
    color: 'light-danger',
    title: '1.423k',
    subtitle: 'Products',
    customClass: 'mb-2 mb-sm-0'
  }, {
    icon: 'DollarSignIcon',
    color: 'light-success',
    title: '$9745',
    subtitle: 'Revenue',
    customClass: ''
  }],
  statisticsOrder: {
    series: [{
      name: '2020',
      data: [45, 85, 65, 45, 65]
    }]
  },
  statisticsProfit: {
    series: [{
      data: [0, 20, 5, 30, 15, 45]
    }]
  },
  earningsChart: {
    series: [53, 16, 31]
  },
  revenue: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800',
    revenueReport: {
      series: [{
        name: 'Earning',
        data: [95, 177, 284, 256, 105, 63, 168, 218, 72]
      }, {
        name: 'Expense',
        data: [-145, -80, -60, -180, -100, -60, -85, -75, -100]
      }]
    },
    budgetChart: {
      series: [{
        data: [61, 48, 69, 52, 60, 40, 79, 60, 59, 43, 62]
      }, {
        data: [20, 10, 30, 15, 23, 0, 25, 15, 20, 5, 27]
      }]
    }
  },
  companyTable: [{
    avatarImg: __webpack_require__(/*! @/assets/images/icons/toolbox.svg */ "./resources/js/src/assets/images/icons/toolbox.svg"),
    title: 'Dixons',
    subtitle: 'meguc@ruj.io',
    avatarIcon: 'MonitorIcon',
    avatarColor: 'light-primary',
    avatarTitle: 'Technology',
    viewTitle: '23.4k',
    viewsub: 'in 24 hours',
    revenue: '891.2',
    sales: '68',
    loss: true
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/parachute.svg */ "./resources/js/src/assets/images/icons/parachute.svg"),
    title: 'Motels',
    subtitle: 'vecav@hodzi.co.uk',
    avatarIcon: 'CoffeeIcon',
    avatarColor: 'light-success',
    avatarTitle: 'Grocery',
    viewTitle: '78k',
    viewsub: 'in 2 days',
    revenue: '668.51',
    sales: '97',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/brush.svg */ "./resources/js/src/assets/images/icons/brush.svg"),
    title: 'Zipcar',
    subtitle: 'davcilse@is.gov',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '162',
    viewsub: 'in 5 days',
    revenue: '522.29',
    sales: '62',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/star.svg */ "./resources/js/src/assets/images/icons/star.svg"),
    title: 'Owning',
    subtitle: 'us@cuhil.gov',
    avatarIcon: 'MonitorIcon',
    avatarColor: 'light-primary',
    avatarTitle: 'Technology',
    viewTitle: '214',
    viewsub: 'in 24 hours',
    revenue: '291.01',
    sales: '88',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/book.svg */ "./resources/js/src/assets/images/icons/book.svg"),
    title: 'Cafés',
    subtitle: 'pudais@jife.com',
    avatarIcon: 'CoffeeIcon',
    avatarColor: 'light-success',
    avatarTitle: 'Grocery',
    viewTitle: '208',
    viewsub: 'in 1 week',
    revenue: '783.93',
    sales: '16',
    loss: true
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/rocket.svg */ "./resources/js/src/assets/images/icons/rocket.svg"),
    title: 'Kmart',
    subtitle: 'bipri@cawiw.com',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '990',
    viewsub: 'in 1 month',
    revenue: '780.05',
    sales: '78',
    loss: false
  }, {
    avatarImg: __webpack_require__(/*! @/assets/images/icons/speaker.svg */ "./resources/js/src/assets/images/icons/speaker.svg"),
    title: 'Payers',
    subtitle: 'luk@izug.io',
    avatarIcon: 'WatchIcon',
    avatarColor: 'light-warning',
    avatarTitle: 'Fashion',
    viewTitle: '12.9k',
    viewsub: 'in 12 hours',
    revenue: '531.49',
    sales: '42',
    loss: false
  }],
  meetup: {
    mediaData: [{
      avatar: 'CalendarIcon',
      title: 'Sat, May 25, 2020',
      subtitle: '10:AM to 6:PM'
    }, {
      avatar: 'MapPinIcon',
      title: 'Central Park',
      subtitle: 'Manhattan, New york City'
    }],
    avatars: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      fullName: 'Billy Hopkins'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
      fullName: 'Amy Carson'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
      fullName: 'Brandon Miles'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      fullName: 'Daisy Weber'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
      fullName: 'Jenny Looper'
    }]
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561',
    series: [83]
  },
  transactionData: [{
    mode: 'Wallet',
    types: 'Starbucks',
    avatar: 'PocketIcon',
    avatarVariant: 'light-primary',
    payment: '-$74',
    deduction: true
  }, {
    mode: 'Bank Transfer',
    types: 'Add Money',
    avatar: 'CheckIcon',
    avatarVariant: 'light-success',
    payment: '+$480',
    deduction: false
  }, {
    mode: 'Paypal',
    types: 'Add Money',
    avatar: 'DollarSignIcon',
    avatarVariant: 'light-danger',
    payment: '+$480',
    deduction: false
  }, {
    mode: 'Mastercard',
    types: 'Ordered Food',
    avatar: 'CreditCardIcon',
    avatarVariant: 'light-warning',
    payment: '-$23',
    deduction: true
  }, {
    mode: 'Transfer',
    types: 'Refund',
    avatar: 'TrendingUpIcon',
    avatarVariant: 'light-info',
    payment: '+$98',
    deduction: false
  }]
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/ecommerce/data').reply(function () {
  return [200, data];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/extensions/auto-suggest.js":
/*!*******************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/extensions/auto-suggest.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  dataSuggest: [{
    // developers
    developers: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
      name: 'Rena Brant',
      email: 'nephrod@preany.co.uk',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Mariano Packard',
      email: 'seek@sparaxis.org',
      time: '14/01/2018'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Risa Montufar',
      email: 'vagary@unblist.org',
      time: '10/08/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
      name: 'Maragaret Cimo',
      email: 'designed@insanely.net',
      time: '01/12/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Jona Prattis',
      email: 'unwieldable@unblist.org',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
      name: 'Edmond Chicon',
      email: 'museist@anaphyte.co.uk',
      time: '15/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Abbey Darden',
      email: 'astema@defectively.co.uk',
      time: '07/05/2019'
    }],
    // designers
    designers: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Seema Moallankamp',
      email: 'fernando@storkish.co.uk',
      time: '13/08/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Charleen Warmington',
      email: 'furphy@cannibal.net',
      time: '11/08/1891'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Geri Linch',
      email: 'insignia@markab.org',
      time: '18/01/2015'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Shellie Muster',
      email: 'maxillary@equalize.co.uk',
      time: '26/07/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg"),
      name: 'Jesenia Vanbramer',
      email: 'hypotony@phonetist.net',
      time: '12/09/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Mardell Channey',
      email: 'peseta@myrica.com',
      time: '11/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Lilliana Stroman',
      email: 'lilliana@stroman.com',
      time: '12/11/2020'
    }],
    // pages
    pages: [{
      icon: 'MailIcon',
      name: 'Email'
    }, {
      icon: 'MessageSquareIcon',
      name: 'Chat'
    }, {
      icon: 'CheckSquareIcon',
      name: 'Todo'
    }, {
      icon: 'CalendarIcon',
      name: 'Calendar'
    }, {
      icon: 'GridIcon',
      name: 'Kanban'
    }, {
      icon: 'FileTextIcon',
      name: 'Invoice'
    }, {
      icon: 'SaveIcon',
      name: 'File Manager'
    }, {
      icon: 'ShoppingCartIcon',
      name: 'ECommerce'
    }]
  }]
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/autosuggest/data').reply(function () {
  return [200, data.dataSuggest];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/extensions/good-table.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/extensions/good-table.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  tableBasic: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    email: 'kocrevy0@thetimes.co.uk',
    startDate: '09/23/2016',
    salary: '$23896.35',
    status: 'Professional'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    email: 'bcoulman1@yolasite.com',
    startDate: '05/20/2018',
    salary: '$13633.69',
    status: 'Resigned'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    email: 'sganderton2@tuttocitta.it',
    startDate: '03/24/2018',
    salary: '$13076.28',
    status: 'Professional'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    email: 'dcrossman3@google.co.jp',
    startDate: '12/03/2017',
    salary: '$12336.17',
    status: 'Applied'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    email: 'hnisius4@gnu.org',
    startDate: '08/25/2017',
    salary: '$10909.52',
    status: 'Professional'
  }, {
    id: 6,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    fullName: 'Genevra Honeywood',
    email: 'ghoneywood5@narod.ru',
    startDate: '06/01/2017',
    salary: '$17803.8',
    status: 'Current'
  }, {
    id: 7,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    fullName: 'Eileen Diehn',
    email: 'ediehn6@163.com',
    startDate: '10/15/2017',
    salary: '$18991.67',
    status: 'Professional'
  }, {
    id: 8,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Richardo Aldren',
    email: 'raldren7@mtv.com',
    startDate: '11/05/2016',
    salary: '$19230.13',
    status: 'Rejected'
  }, {
    id: 9,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    fullName: 'Allyson Moakler',
    email: 'amoakler8@shareasale.com',
    startDate: '12/29/2018',
    salary: '$11677.32',
    status: 'Applied'
  }, {
    id: 10,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    fullName: 'Merline Penhalewick',
    email: 'mpenhalewick9@php.net',
    startDate: '04/19/2019',
    salary: '$15939.52',
    status: 'Professional'
  }],
  tableRowGrp: [{
    mode: 'span',
    label: 'Accountant',
    html: false,
    children: [{
      id: 1,
      avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
      fullName: "Korrie O'Crevy",
      email: 'kocrevy0@thetimes.co.uk',
      startDate: '09/23/2016',
      salary: '$23896.35',
      experience: '1 Year',
      status: 'Professional'
    }]
  }, {
    mode: 'span',
    label: 'Actuary',
    children: [{
      id: 2,
      avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      fullName: 'Bailie Coulman',
      email: 'bcoulman1@yolasite.com',
      startDate: '05/20/2018',
      salary: '$13633.69',
      status: 'Current'
    }]
  }, {
    mode: 'span',
    label: 'Administrative Assistan',
    children: [{
      id: 3,
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
      fullName: 'Stella Ganderton',
      email: 'sganderton2@tuttocitta.it',
      startDate: '03/24/2018',
      salary: '$13076.28',
      status: 'Applied'
    }, {
      id: 4,
      avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
      fullName: 'Dorolice Crossman',
      email: 'dcrossman3@google.co.jp',
      startDate: '12/03/2017',
      salary: '$12336.17',
      status: 'Professional'
    }, {
      id: 5,
      avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
      fullName: 'Harmonia Nisius',
      email: 'hnisius4@gnu.org',
      startDate: '08/25/2017',
      salary: '$10909.52',
      status: 'Resigned'
    }]
  }, {
    mode: 'span',
    label: 'Analog Circuit Design manager',
    children: [{
      id: 6,
      avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      fullName: 'Genevra Honeywood',
      email: 'ghoneywood5@narod.ru',
      startDate: '06/01/2017',
      salary: '$17803.8',
      experience: '1 Year',
      status: 'Current'
    }, {
      id: 7,
      avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
      fullName: 'Eileen Diehn',
      email: 'ediehn6@163.com',
      startDate: '10/15/2017',
      salary: '$18991.67',
      status: 'Professional'
    }]
  }, {
    mode: 'span',
    label: 'Analyst Programmer',
    children: [{
      id: 8,
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
      fullName: 'Richardo Aldren',
      email: 'raldren7@mtv.com',
      startDate: '11/05/2016',
      salary: '$19230.13',
      status: 'Rejected'
    }, {
      id: 9,
      avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
      fullName: 'Allyson Moakler',
      email: 'amoakler8@shareasale.com',
      startDate: '12/29/2018',
      salary: '$11677.32',
      status: 'Applied'
    }, {
      id: 10,
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
      fullName: 'Merline Penhalewick',
      email: 'mpenhalewick9@php.net',
      startDate: '04/19/2019',
      salary: '$15939.52',
      status: 'Professional'
    }]
  }],
  tableAdvancedSearch: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    post: 'Nuclear Power Engineer',
    email: 'kocrevy0@thetimes.co.uk',
    city: 'Krasnosilka',
    startDate: '09/23/2016',
    salary: '$23896.35'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    post: 'VP Quality Control',
    email: 'bcoulman1@yolasite.com',
    city: 'Hinigaran',
    startDate: '05/20/2018',
    salary: '$13633.69'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    post: 'Operator',
    email: 'sganderton2@tuttocitta.it',
    city: 'Golcowa',
    startDate: '03/24/2018',
    salary: '$13076.28'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    post: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp',
    city: 'Paquera',
    startDate: '12/03/2017',
    salary: '$12336.17'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    post: 'Senior Cost Accountant',
    email: 'hnisius4@gnu.org',
    city: 'Lucan',
    startDate: '08/25/2017',
    salary: '$10909.52'
  }, {
    id: 6,
    avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
    fullName: 'Genevra Honeywood',
    post: 'Geologist',
    email: 'ghoneywood5@narod.ru',
    city: 'Maofan',
    startDate: '06/01/2017',
    salary: '$17803.8'
  }, {
    id: 7,
    avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./resources/js/src/assets/images/avatars/7-small.png"),
    fullName: 'Eileen Diehn',
    post: 'Environmental Specialist',
    email: 'ediehn6@163.com',
    city: 'Lampuyang',
    startDate: '10/15/2017',
    salary: '$18991.67'
  }, {
    id: 8,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Richardo Aldren',
    post: 'Senior Sales Associate',
    email: 'raldren7@mtv.com',
    city: 'Skoghall',
    startDate: '11/05/2016',
    salary: '$19230.13'
  }, {
    id: 9,
    avatar: __webpack_require__(/*! @/assets/images/avatars/2-small.png */ "./resources/js/src/assets/images/avatars/2-small.png"),
    fullName: 'Allyson Moakler',
    post: 'Safety Technician',
    email: 'amoakler8@shareasale.com',
    city: 'Mogilany',
    startDate: '12/29/2018',
    salary: '$11677.32'
  }, {
    id: 10,
    avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
    fullName: 'Merline Penhalewick',
    post: 'Junior Executive',
    email: 'mpenhalewick9@php.net',
    city: 'Kanuma',
    startDate: '04/19/2019',
    salary: '$15939.52'
  }],
  tableSsr: [{
    id: 1,
    avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
    fullName: "Korrie O'Crevy",
    email: 'kocrevy0@thetimes.co.uk',
    startDate: '09/23/2016',
    salary: '$23896.35',
    status: 'Professional'
  }, {
    id: 2,
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    fullName: 'Bailie Coulman',
    email: 'bcoulman1@yolasite.com',
    startDate: '05/20/2018',
    salary: '$13633.69',
    status: 'Resigned'
  }, {
    id: 3,
    avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./resources/js/src/assets/images/avatars/9-small.png"),
    fullName: 'Stella Ganderton',
    email: 'sganderton2@tuttocitta.it',
    startDate: '03/24/2018',
    salary: '$13076.28',
    status: 'Professional'
  }, {
    id: 4,
    avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
    fullName: 'Dorolice Crossman',
    email: 'dcrossman3@google.co.jp',
    startDate: '12/03/2017',
    salary: '$12336.17',
    status: 'Applied'
  }, {
    id: 5,
    avatar: __webpack_require__(/*! @/assets/images/avatars/4-small.png */ "./resources/js/src/assets/images/avatars/4-small.png"),
    fullName: 'Harmonia Nisius',
    email: 'hnisius4@gnu.org',
    startDate: '08/25/2017',
    salary: '$10909.52',
    status: 'Professional'
  }]
  /* eslint-disable global-require */

};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/basic').reply(function () {
  return [200, data.tableBasic];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/row-group').reply(function () {
  return [200, data.tableRowGrp];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/advanced-search').reply(function () {
  return [200, data.tableAdvancedSearch];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/good-table/table_ssr').reply(function () {
  return [200, data.tableSsr];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/account-setting.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/account-setting.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  accountSetting: {
    general: {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-11.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg"),
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'granger007@hogward.com',
      company: 'Crystal Technologies'
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: ''
      },
      connections: {
        twitter: {
          profileImg: __webpack_require__(/*! @/assets/images/avatars/11-small.png */ "./resources/js/src/assets/images/avatars/11-small.png"),
          id: 'johndoe'
        },
        google: {
          profileImg: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
          id: 'luraweber'
        },
        facebook: {},
        github: {}
      }
    },
    notification: {
      commentOnArticle: true,
      AnswerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false
    }
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/account-setting/data').reply(function () {
  return [200, data.accountSetting];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/blog.js":
/*!******************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/blog.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  // blog list
  blogList: [{
    id: 1,
    img: __webpack_require__(/*! @/assets/images/slider/02.jpg */ "./resources/js/src/assets/images/slider/02.jpg"),
    title: 'The Best Features Coming to iOS and Web design',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
    userFullName: 'Ghani Pradita',
    blogPosted: 'Jan 10, 2020',
    tags: ['Quote', 'Fashion'],
    excerpt: 'Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.',
    comment: 76
  }, {
    id: 2,
    img: __webpack_require__(/*! @/assets/images/slider/06.jpg */ "./resources/js/src/assets/images/slider/06.jpg"),
    title: 'Latest Quirky Opening Sentence or Paragraph',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
    userFullName: 'Jorge Griffin',
    blogPosted: 'Jan 10, 2020',
    tags: ['Gaming', 'Video'],
    excerpt: 'Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.',
    comment: 2100
  }, {
    id: 3,
    img: __webpack_require__(/*! @/assets/images/slider/04.jpg */ "./resources/js/src/assets/images/slider/04.jpg"),
    title: 'Share an Amazing and Shocking Fact or Statistic',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
    userFullName: 'Claudia Neal',
    blogPosted: 'Jan 10, 2020',
    tags: ['Gaming', 'Food'],
    excerpt: 'Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.',
    comment: 243
  }, {
    id: 4,
    img: __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg"),
    title: 'Withhold a Compelling Piece of Information',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-14.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg"),
    userFullName: 'Fred Boone',
    blogPosted: 'Jan 10, 2020',
    tags: ['Video'],
    excerpt: 'Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.',
    comment: 10
  }, {
    id: 5,
    img: __webpack_require__(/*! @/assets/images/slider/09.jpg */ "./resources/js/src/assets/images/slider/09.jpg"),
    title: 'Unadvertised Bonus Opening: Share a Quote',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-13.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg"),
    userFullName: 'Billy French',
    blogPosted: 'Jan 10, 2020',
    tags: ['Quote', 'Fashion'],
    excerpt: 'Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.',
    comment: 319
  }, {
    id: 6,
    img: __webpack_require__(/*! @/assets/images/slider/10.jpg */ "./resources/js/src/assets/images/slider/10.jpg"),
    title: 'Ships at a distance have Every Man’s Wish on Board',
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-13.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg"),
    userFullName: 'Helena Hunt',
    blogPosted: 'Jan 10, 2020',
    tags: ['Fashion', 'Video'],
    excerpt: 'A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.',
    comment: 1500
  }],
  // sidebar
  blogSidebar: {
    recentPosts: [{
      id: 7,
      img: __webpack_require__(/*! @/assets/images/banner/banner-22.jpg */ "./resources/js/src/assets/images/banner/banner-22.jpg"),
      title: 'Why Should Forget Facebook?',
      createdTime: 'Jan 14 2020'
    }, {
      id: 8,
      img: __webpack_require__(/*! @/assets/images/banner/banner-27.jpg */ "./resources/js/src/assets/images/banner/banner-27.jpg"),
      title: 'Publish your passions, your way',
      createdTime: 'Mar 04 2020'
    }, {
      id: 9,
      img: __webpack_require__(/*! @/assets/images/banner/banner-39.jpg */ "./resources/js/src/assets/images/banner/banner-39.jpg"),
      title: 'The Best Ways to Retain More',
      createdTime: 'Feb 18 2020'
    }, {
      id: 10,
      img: __webpack_require__(/*! @/assets/images/banner/banner-35.jpg */ "./resources/js/src/assets/images/banner/banner-35.jpg"),
      title: 'Share a Shocking Fact or Statistic',
      createdTime: 'Oct 08 2020'
    }],
    categories: [{
      category: 'Fashion',
      icon: 'WatchIcon'
    }, {
      category: 'Food',
      icon: 'ShoppingCartIcon'
    }, {
      category: 'Gaming',
      icon: 'CommandIcon'
    }, {
      category: 'Quote',
      icon: 'HashIcon'
    }, {
      category: 'Video',
      icon: 'VideoIcon'
    }]
  },
  // detail
  blogDetail: {
    blog: {
      img: __webpack_require__(/*! @/assets/images/banner/banner-12.jpg */ "./resources/js/src/assets/images/banner/banner-12.jpg"),
      title: 'The Best Features Coming to iOS and Web design',
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      content: '<p>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul class="mb-2"><li>Preliminary thinking systems</li><li>Bandwidth efficient</li><li>Green space</li><li>Social impact</li><li>Thought partnership</li><li>Fully ethical life</li></ul>  ',
      comments: 19100,
      bookmarked: 139,
      UserComment: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        fullName: 'Willie Clark',
        comment: 'Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.'
      }]
    },
    comments: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      userFullName: 'Chad Alexander',
      commentedAt: 'May 24, 2020',
      commentText: 'A variation on the question technique above, the multiple-choice question great way to engage your reader.'
    }]
  },
  // edit
  blogEdit: {
    avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
    userFullName: 'Chad Alexander',
    createdTime: 'May 24, 2020',
    blogTitle: 'The Best Features Coming to iOS and Web design',
    blogCategories: ['Fashion', 'Gaming'],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt: '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
    featuredImage: __webpack_require__(/*! @/assets/images/slider/03.jpg */ "./resources/js/src/assets/images/slider/03.jpg")
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data').reply(function () {
  return [200, data.blogList];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/sidebar').reply(function () {
  return [200, data.blogSidebar];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/detail').reply(function () {
  return [200, data.blogDetail];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/blog/list/data/edit').reply(function () {
  return [200, data.blogEdit];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/faq-data.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/faq-data.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "./node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");









/* eslint-disable global-require */

var data = {
  faqData: {
    // payment
    payment: {
      icon: 'CreditCardIcon',
      title: 'Payment',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Does my subscription automatically renew?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'Can I store the item on an intranet so everyone has access?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'What does non-exclusive mean?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'Is the Regular License the same thing as an editorial license?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'Which license do I need for an end product that is only accessible to paying users?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }, {
        question: 'Which license do I need to use an item in a commercial?',
        ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.'
      }, {
        question: 'Can I re-distribute an item? What about under an Extended License?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
      }]
    },
    // delivery
    delivery: {
      icon: 'ShoppingBagIcon',
      title: 'Delivery',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Where has my order reached?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'The shipment status shows that it has been returned/cancelled. What does it mean and who do I contact?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'What if my shipment is marked as lost?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'My shipment status shows that it’s out for delivery. By when will I receive it?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'What do I need to do to get the shipment delivered within a specific timeframe?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }]
    },
    // cancellation and return
    cancellationReturn: {
      icon: 'RefreshCwIcon',
      title: 'Cancellation & Return',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Can my security guard or neighbour receive my shipment if I am not available?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'How can I get the contact number of my delivery agent?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I cancel my shipment?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'I have received a defective/damaged product. What do I do?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'How do I change my delivery address?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }, {
        question: 'What documents do I need to carry for self-collection of my shipment?',
        ans: 'At tempor commodo ullamcorper a lacus vestibulum. Ultrices neque ornare aenean euismod. Dui vivamus arcu felis bibendum. Turpis in eu mi bibendum neque egestas congue. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Tortor consequat id porta nibh. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus nisl tincidunt eget nullam non nisi. Enim nunc faucibus a pellentesque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Nec nam aliquam sem et tortor consequat id. Fringilla est ullamcorper eget nulla facilisi. Morbi tristique senectus et netus et.'
      }, {
        question: 'What are the timings for self-collecting shipments from the Delhivery Branch?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Euismod lacinia at quis risus sed vulputate odio ut enim. Dictum at tempor commodo ullamcorper a lacus vestibulum.'
      }]
    },
    // my orders
    myOrders: {
      icon: 'PackageIcon',
      title: 'My Orders',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'Can I avail of an open delivery?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'I haven’t received the refund of my returned shipment. What do I do?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I ship my order to an international location?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'I missed the delivery of my order today. What should I do?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }, {
        question: 'The delivery of my order is delayed. What should I do?',
        ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }]
    },
    // product and services
    productServices: {
      icon: 'SettingsIcon',
      title: 'Product & Services',
      subtitle: 'Which license do I need?',
      qandA: [{
        question: 'How can I register a complaint against the courier executive who came to deliver my order?',
        ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
      }, {
        question: 'The status for my shipment shows as ‘not picked up’. What do I do?',
        ans: 'Sweet pie candy jelly. Sesame snaps biscuit sugar plum. Sweet roll topping fruitcake. Caramels liquorice biscuit ice cream fruitcake cotton candy tart. Donut caramels gingerbread jelly-o gingerbread pudding. Gummi bears pastry marshmallow candy canes pie. Pie apple pie carrot cake.'
      }, {
        question: 'How can I get a proof of delivery for my shipment?',
        ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan.'
      }, {
        question: 'How can I avail your services?',
        ans: 'Cheesecake muffin cupcake dragée lemon drops tiramisu cake gummies chocolate cake. Marshmallow tart croissant. Tart dessert tiramisu marzipan lollipop lemon drops. Cake bonbon bonbon gummi bears topping jelly beans brownie jujubes muffin. Donut croissant jelly-o cake marzipan. Liquorice marzipan cookie wafer tootsie roll. Tootsie roll sweet cupcake.'
      }]
    }
  }
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_8__["default"].onGet('/faq/data').reply(function (config) {
  var _config$params$q = config.params.q,
      q = _config$params$q === void 0 ? '' : _config$params$q;
  var queryLowered = q.toLowerCase();
  var filteredData = {};
  Object.entries(data.faqData).forEach(function (entry) {
    var _entry = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entry, 2),
        categoryName = _entry[0],
        categoryObj = _entry[1]; // eslint-disable-next-line arrow-body-style


    var filteredQAndAOfCategory = categoryObj.qandA.filter(function (qAndAObj) {
      return qAndAObj.question.toLowerCase().includes(queryLowered);
    });

    if (filteredQAndAOfCategory.length) {
      filteredData[categoryName] = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, categoryObj), {}, {
        qandA: filteredQAndAOfCategory
      });
    }
  });
  return [200, filteredData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/knowledge-base.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/knowledge-base.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  // knowledge base
  knowledgeBase: [{
    id: 1,
    category: 'sales-automation',
    img: __webpack_require__(/*! @/assets/images/illustration/sales.svg */ "./resources/js/src/assets/images/illustration/sales.svg"),
    title: 'Sales Automation',
    desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.'
  }, {
    id: 2,
    category: 'marketing-automation',
    img: __webpack_require__(/*! @/assets/images/illustration/marketing.svg */ "./resources/js/src/assets/images/illustration/marketing.svg"),
    title: 'Marketing Automation',
    desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.'
  }, {
    id: 3,
    category: 'api-questions',
    img: __webpack_require__(/*! @/assets/images/illustration/api.svg */ "./resources/js/src/assets/images/illustration/api.svg"),
    title: 'API Questions',
    desc: 'every hero and coward, every creator and destroyer of civilization.'
  }, {
    id: 4,
    category: 'personalization',
    img: __webpack_require__(/*! @/assets/images/illustration/personalization.svg */ "./resources/js/src/assets/images/illustration/personalization.svg"),
    title: 'Personalization',
    desc: 'It has been said that astronomy is a humbling and character experience.'
  }, {
    id: 5,
    category: 'email-marketing',
    img: __webpack_require__(/*! @/assets/images/illustration/email.svg */ "./resources/js/src/assets/images/illustration/email.svg"),
    title: 'Email Marketing',
    desc: 'There is perhaps no better demonstration of the folly of human conceits.'
  }, {
    id: 6,
    category: 'demand-generation',
    img: __webpack_require__(/*! @/assets/images/illustration/demand.svg */ "./resources/js/src/assets/images/illustration/demand.svg"),
    title: 'Demand Generation',
    desc: 'Competent means we will never take anything for granted.'
  }],
  categoryData: [{
    id: 0,
    title: 'Account Settings',
    icon: 'SettingsIcon',
    iconColor: 'text-primary',
    questions: [{
      id: 0,
      question: 'How Secure Is My Password?',
      slug: 'how-secure-is-my-password'
    }, {
      id: 1,
      question: 'Can I Change My Username?',
      slug: 'can-i-change-my-username'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?',
      slug: 'where-can-i-upload-my-avatar'
    }, {
      id: 3,
      question: 'How Do I Change My Timezone?',
      slug: 'how-do-i-change-my-timezone'
    }, {
      id: 4,
      question: 'How Do I Change My Password?',
      slug: 'how-do-i-change-my-password'
    }]
  }, {
    id: 1,
    title: 'API Questions',
    icon: 'LinkIcon',
    iconColor: 'text-success',
    questions: [{
      id: 0,
      question: 'What Technologies Are Used?',
      slug: 'what-technologies-are-used'
    }, {
      id: 1,
      question: 'What Are The API Limits?',
      slug: 'what-are-the-api-limits'
    }, {
      id: 2,
      question: 'Why Was My Application Rejected?',
      slug: 'why-was-my-application-rejected?'
    }, {
      id: 3,
      question: 'Where can I find the documentation?',
      slug: 'where-can-i-find-the-documentation'
    }, {
      id: 4,
      question: 'How Do I Get An API Key?',
      slug: 'how-do-i-get-an-api-key?'
    }]
  }, {
    id: 2,
    title: 'Billing',
    icon: 'FileTextIcon',
    iconColor: 'text-danger',
    questions: [{
      id: 0,
      question: 'Can I Contact A Salés Rep?',
      slug: 'can-i-contact-a-salés-rep'
    }, {
      id: 1,
      question: 'Do I Need To Pay VAT?',
      slug: 'do-i-needto-pay-vat'
    }, {
      id: 2,
      question: 'Can I Get A Refund?',
      slug: 'can-i-get-a-refund'
    }, {
      id: 3,
      question: 'Difference Annual & Monthly Billing',
      slug: 'difference-annual-monthly-billing'
    }, {
      id: 4,
      question: 'What Happens If The Price Increases?',
      slug: 'what-happens-if-the-price-increases?'
    }]
  }, {
    id: 3,
    title: 'Copyright & Legal',
    icon: 'LockIcon',
    iconColor: 'text-warning',
    questions: [{
      id: 0,
      question: 'How Do I Contact Legal?',
      slug: 'how-do-i-contact-legal'
    }, {
      id: 1,
      question: 'Where Are Your Offices Located?',
      slug: 'where-are-your-offices-located'
    }, {
      id: 2,
      question: 'Who Owns The Copyright On Text?',
      slug: 'who-owns-the-copyright-on-text'
    }, {
      id: 3,
      question: 'Our Content Policy',
      slug: 'our-content-policy'
    }, {
      id: 4,
      question: 'How Do I File A DMCA?',
      slug: 'how-do-i-file-a-dmca'
    }]
  }, {
    id: 4,
    title: 'Mobile Apps',
    icon: 'SmartphoneIcon',
    iconColor: 'text-info',
    questions: [{
      id: 0,
      question: 'How Do I Download The Android App?',
      slug: 'how-do-i-download-the-android-app'
    }, {
      id: 1,
      question: 'How To Download Our iPad App',
      slug: 'how-to-download-our-ipad-app'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?',
      slug: 'where-can-i-upload-my-avatar'
    }, {
      id: 3,
      question: 'Can I Use My Android Phone?',
      slug: 'can-i-use-my-android-phone'
    }, {
      id: 4,
      question: 'Is There An iOS App?',
      slug: 'is-there-an-ios-app'
    }]
  }, {
    id: 5,
    title: 'Using KnowHow',
    icon: 'InfoIcon',
    iconColor: '',
    questions: [{
      id: 0,
      question: 'Customization',
      slug: 'customization'
    }, {
      id: 1,
      question: 'Upgrading',
      slug: 'upgrading'
    }, {
      id: 2,
      question: 'Customizing Your Theme',
      slug: 'customizing-your-theme'
    }, {
      id: 3,
      question: 'Upgrading Your Theme',
      slug: 'upgrading-your-theme'
    }]
  }],
  questionData: {
    title: 'Why Was My Developer Application Rejected?',
    lastUpdated: '10 Dec 2018',
    relatedQuestions: [{
      id: 0,
      question: 'How Secure Is My Password?'
    }, {
      id: 1,
      question: 'Can I Change My Username?'
    }, {
      id: 2,
      question: 'Where Can I Upload My Avatar?'
    }, {
      id: 3,
      question: 'How Do I Change My Timezone?'
    }, {
      id: 4,
      question: 'How Do I Change My Password?'
    }],
    // ! Here we have used require for image source but in API it shall be URL of live image, this is just for demo purpose
    content: "<p>It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we\u2019ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.</p><p class=\"ql-align-center\"><img class=\"img-fluid w-100\" src=\"".concat(__webpack_require__(/*! @/assets/images/pages/kb-image.jpg */ "./resources/js/src/assets/images/pages/kb-image.jpg"), "\"></p></p><h5>Houston</h5><p>that may have seemed like a very long final phase. The auto targeting was taking us right into a \u2026 crater, with a large number of big boulders and rocks \u2026 and it required \u2026 flying manually over the rock field to find a reasonably good area.</p><ul><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.</a></li><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >It\u2019s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it\u2019s hard to be articulate when your mind\u2019s blown\u2014but in a very good way.</a></li><li><a href=\"javascript:void(0)\" rel=\"noopener noreferrer\" >A good rule for rocket experimenters to follow is this</a></li></ul>")
  } // category

};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/knowledge_base').reply(function () {
  return [200, data.knowledgeBase];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/category').reply(function () {
  return [200, data.categoryData];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/kb/data/question').reply(function () {
  return [200, data.questionData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/pricing-data.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/pricing-data.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  pricing: {
    basicPlan: {
      title: 'Basic',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot1.svg */ "./resources/js/src/assets/images/illustration/Pot1.svg"),
      subtitle: 'A simple start for everyone',
      monthlyPrice: 0,
      yearlyPlan: {
        perMonth: 0,
        totalAnual: 0
      },
      planBenefits: ['100 responses a month', 'Unlimited forms and surveys', 'Unlimited fields', 'Basic form creation tools', 'Up to 2 subdomains'],
      popular: false
    },
    standardPlan: {
      title: 'Standard',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot2.svg */ "./resources/js/src/assets/images/illustration/Pot2.svg"),
      subtitle: 'For small to medium businesses',
      monthlyPrice: 49,
      yearlyPlan: {
        perMonth: 40,
        totalAnual: 480
      },
      planBenefits: ['Unlimited responses', 'Unlimited forms and surveys', 'Instagram profile page', 'Google Docs integration', 'Custom “Thank you” page'],
      popular: true
    },
    enterprisePlan: {
      title: 'Enterprise',
      img: __webpack_require__(/*! @/assets/images/illustration/Pot3.svg */ "./resources/js/src/assets/images/illustration/Pot3.svg"),
      subtitle: 'Solution for big organizations',
      monthlyPrice: 99,
      yearlyPlan: {
        perMonth: 80,
        totalAnual: 960
      },
      planBenefits: ['PayPal payments', 'Logic Jumps', 'File upload with 5GB storage', 'Custom domain support', 'Stripe integration'],
      popular: false
    },
    qandA: [{
      question: 'Does my subscription automatically renew?',
      ans: 'Pastry pudding cookie toffee bonbon jujubes jujubes powder topping. Jelly beans gummi bears sweet roll bonbon muffin liquorice. Wafer lollipop sesame snaps. Brownie macaroon cookie muffin cupcake candy caramels tiramisu. Oat cake chocolate cake sweet jelly-o brownie biscuit marzipan. Jujubes donut marzipan chocolate bar. Jujubes sugar plum jelly beans tiramisu icing cheesecake.'
    }, {
      question: 'Can I store the item on an intranet so everyone has access?',
      ans: 'Tiramisu marshmallow dessert halvah bonbon cake gingerbread. Jelly beans chocolate pie powder. Dessert pudding chocolate cake bonbon bear claw cotton candy cheesecake. Biscuit fruitcake macaroon carrot cake. Chocolate cake bear claw muffin chupa chups pudding.'
    }, {
      question: 'Am I allowed to modify the item that I purchased?',
      ans: 'Tart gummies dragée lollipop fruitcake pastry oat cake. Cookie jelly jelly macaroon icing jelly beans soufflé cake sweet. Macaroon sesame snaps cheesecake tart cake sugar plum. Dessert jelly-o sweet muffin chocolate candy pie tootsie roll marzipan. Carrot cake marshmallow pastry. Bonbon biscuit pastry topping toffee dessert gummies. Topping apple pie pie croissant cotton candy dessert tiramisu.'
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/pricing/data').reply(function () {
  return [200, data.pricing];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/data/pages/profile-data.js":
/*!**************************************************************!*\
  !*** ./resources/js/src/@fake-db/data/pages/profile-data.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");

/* eslint-disable global-require */

var data = {
  profileData: {
    header: {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
      username: 'Kitty Allanson',
      designation: 'UI/UX Designer',
      coverImg: __webpack_require__(/*! @/assets/images/profile/user-uploads/timeline.jpg */ "./resources/js/src/assets/images/profile/user-uploads/timeline.jpg")
    },
    userAbout: {
      about: 'Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.',
      joined: 'November 15, 2015',
      lives: 'New York, USA',
      email: 'bucketful@fiendhead.org',
      website: 'www.pixinvent.com'
    },
    suggestedPages: [{
      avatar: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
      username: 'Peter Reed',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      username: 'Harriett Adkins',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/10-small.png */ "./resources/js/src/assets/images/avatars/10-small.png"),
      username: 'Juan Weaver',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./resources/js/src/assets/images/avatars/3-small.png"),
      username: 'Claudia Chandler',
      subtitle: 'Company',
      favorite: false
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      username: 'Earl Briggs',
      subtitle: 'Company',
      favorite: true
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./resources/js/src/assets/images/avatars/6-small.png"),
      username: 'Jonathan Lyons',
      subtitle: 'Beauty Store',
      favorite: false
    }],
    twitterFeeds: [{
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./resources/js/src/assets/images/avatars/5-small.png"),
      title: 'Gertrude Stevens',
      id: 'tiana59 ',
      tags: '#design #fasion',
      desc: 'I love cookie chupa chups sweet tart apple pie ⭐️ chocolate bar.',
      favorite: false
    }, {
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/12-small.png */ "./resources/js/src/assets/images/avatars/12-small.png"),
      title: 'Lura Jones',
      id: 'tiana59 ',
      tags: '#vuejs #code #coffeez',
      desc: 'Halvah I love powder jelly I love cheesecake cotton candy. 😍',
      favorite: true
    }, {
      imgUrl: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
      title: 'Norman Gross',
      id: 'tiana59 ',
      tags: '#sketch #uiux #figma',
      desc: 'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
      favorite: false
    }],
    post: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-18.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg"),
      username: 'Leeanna Alvord',
      postTime: '12 Dec 2018 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postImg: __webpack_require__(/*! @/assets/images/profile/post-media/2.jpg */ "./resources/js/src/assets/images/profile/post-media/2.jpg"),
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 140,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        username: 'Jackey Potter',
        comment: 'Unlimited color🖌 options allows you to set your application color as per your branding 🤪.',
        commentsLikes: 61,
        youLiked: true
      }]
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-22.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg"),
      username: 'Rosa Walters',
      postTime: '11 Dec 2019 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postImg: __webpack_require__(/*! @/assets/images/profile/post-media/25.jpg */ "./resources/js/src/assets/images/profile/post-media/25.jpg"),
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 271,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }]
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg"),
      username: 'Charles Watson',
      postTime: '12 Dec 2019 at 1:16 AM',
      postText: 'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
      postVid: 'https://www.youtube.com/embed/6stlCkUDG_s',
      likes: 1240,
      youLiked: true,
      comments: 1240,
      share: 1240,
      likedUsers: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Trine Lynes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg"),
        username: 'Lilian Nenes'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Alberto Glotzbach'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'George Nordic'
      }, {
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg"),
        username: 'Vinnie Mostowy'
      }],
      likedCount: 264,
      detailedComments: [{
        avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-3.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg"),
        username: 'Kitty Allanson',
        comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
        commentsLikes: 34,
        youLiked: false
      }]
    }],
    latestPhotos: [{
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-13.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-13.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-02.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-02.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-03.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-03.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-04.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-04.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-05.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-05.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-06.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-06.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-07.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-07.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-08.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-08.jpg")
    }, {
      img: __webpack_require__(/*! @/assets/images/profile/user-uploads/user-09.jpg */ "./resources/js/src/assets/images/profile/user-uploads/user-09.jpg")
    }],
    suggestions: [{
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
      name: 'Peter Reed',
      mutualFriend: '6 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-6.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg"),
      name: 'Harriett Adkins',
      mutualFriend: '3 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Juan Weaver',
      mutualFriend: '1 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
      name: 'Claudia Chandler',
      mutualFriend: '16 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
      name: 'Earl Briggs',
      mutualFriend: '4 Mutual Friends'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Jonathan Lyons',
      mutualFriend: '25 Mutual Friends'
    }],
    polls: [{
      name: 'RDJ',
      result: '82%',
      votedUser: [{
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-12.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg"),
        username: 'Tonia Seabold'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg"),
        username: 'Carissa Dolle'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        username: 'Kelle Herrick'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg"),
        username: 'Len Bregantini'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-11.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg"),
        username: 'John Doe'
      }]
    }, {
      name: 'Chris Hemswort',
      result: '67%',
      votedUser: [{
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-9.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg"),
        username: 'Tonia Seabold'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-1.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg"),
        username: 'Carissa Dolle'
      }, {
        img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-8.jpg */ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg"),
        username: 'Jonathan Lyons'
      }]
    }]
  }
};
/* eslint-disable global-require */

_fake_db_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onGet('/profile/data').reply(function () {
  return [200, data.profileData];
});

/***/ }),

/***/ "./resources/js/src/@fake-db/db.js":
/*!*****************************************!*\
  !*** ./resources/js/src/@fake-db/db.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var _jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt */ "./resources/js/src/@fake-db/jwt/index.js");
/* harmony import */ var _data_extensions_good_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/extensions/good-table */ "./resources/js/src/@fake-db/data/extensions/good-table.js");
/* harmony import */ var _data_extensions_auto_suggest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/extensions/auto-suggest */ "./resources/js/src/@fake-db/data/extensions/auto-suggest.js");
/* harmony import */ var _data_card_card_statistics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/card/card-statistics */ "./resources/js/src/@fake-db/data/card/card-statistics.js");
/* harmony import */ var _data_card_card_analytics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/card/card-analytics */ "./resources/js/src/@fake-db/data/card/card-analytics.js");
/* harmony import */ var _data_apps_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/apps/calendar */ "./resources/js/src/@fake-db/data/apps/calendar.js");
/* harmony import */ var _data_apps_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/apps/user */ "./resources/js/src/@fake-db/data/apps/user.js");
/* harmony import */ var _data_apps_email__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/apps/email */ "./resources/js/src/@fake-db/data/apps/email.js");
/* harmony import */ var _data_apps_invoice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/apps/invoice */ "./resources/js/src/@fake-db/data/apps/invoice.js");
/* harmony import */ var _data_apps_todo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/apps/todo */ "./resources/js/src/@fake-db/data/apps/todo.js");
/* harmony import */ var _data_apps_chat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/apps/chat */ "./resources/js/src/@fake-db/data/apps/chat.js");
/* harmony import */ var _data_apps_eCommerce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/apps/eCommerce */ "./resources/js/src/@fake-db/data/apps/eCommerce.js");
/* harmony import */ var _data_dashboard_analytics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/dashboard/analytics */ "./resources/js/src/@fake-db/data/dashboard/analytics.js");
/* harmony import */ var _data_dashboard_ecommerce__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/dashboard/ecommerce */ "./resources/js/src/@fake-db/data/dashboard/ecommerce.js");
/* harmony import */ var _data_pages_faq_data__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/pages/faq-data */ "./resources/js/src/@fake-db/data/pages/faq-data.js");
/* harmony import */ var _data_pages_knowledge_base__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/pages/knowledge-base */ "./resources/js/src/@fake-db/data/pages/knowledge-base.js");
/* harmony import */ var _data_pages_pricing_data__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/pages/pricing-data */ "./resources/js/src/@fake-db/data/pages/pricing-data.js");
/* harmony import */ var _data_pages_account_setting__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data/pages/account-setting */ "./resources/js/src/@fake-db/data/pages/account-setting.js");
/* harmony import */ var _data_pages_profile_data__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data/pages/profile-data */ "./resources/js/src/@fake-db/data/pages/profile-data.js");
/* harmony import */ var _data_pages_blog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./data/pages/blog */ "./resources/js/src/@fake-db/data/pages/blog.js");

/* eslint-disable import/extensions */
// JWT

 // Table




 // Apps







 // dashboard


 // pages







/* eslint-enable import/extensions */

_mock__WEBPACK_IMPORTED_MODULE_0__["default"].onAny().passThrough(); // forwards the matched request over network

/***/ }),

/***/ "./resources/js/src/@fake-db/jwt/index.js":
/*!************************************************!*\
  !*** ./resources/js/src/@fake-db/jwt/index.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fake_db_mock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/@fake-db/mock */ "./resources/js/src/@fake-db/mock.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jsonwebtoken */ "./node_modules/jsonwebtoken/index.js");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);





var data = {
  users: [{
    id: 1,
    fullName: 'John Doe',
    username: 'johndoe',
    password: 'admin',
    // eslint-disable-next-line global-require
    avatar: __webpack_require__(/*! @/assets/images/avatars/13-small.png */ "./resources/js/src/assets/images/avatars/13-small.png"),
    email: 'admin@demo.com',
    role: 'admin',
    ability: [{
      action: 'manage',
      subject: 'all'
    }],
    extras: {
      eCommerceCartItemsCount: 5
    }
  }, {
    id: 2,
    fullName: 'Jane Doe',
    username: 'janedoe',
    password: 'client',
    // eslint-disable-next-line global-require
    avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./resources/js/src/assets/images/avatars/1-small.png"),
    email: 'client@demo.com',
    role: 'client',
    ability: [{
      action: 'read',
      subject: 'ACL'
    }, {
      action: 'read',
      subject: 'Auth'
    }],
    extras: {
      eCommerceCartItemsCount: 5
    }
  }]
}; // ! These two secrets shall be in .env file and not in any other file

var jwtConfig = {
  secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
  refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
  expireTime: '10m',
  refreshTokenExpireTime: '10m'
};
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/login').reply(function (request) {
  var _JSON$parse = JSON.parse(request.data),
      email = _JSON$parse.email,
      password = _JSON$parse.password;

  var error = {
    email: ['Something went wrong']
  };
  var user = data.users.find(function (u) {
    return u.email === email && u.password === password;
  });

  if (user) {
    try {
      var accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
        id: user.id
      }, jwtConfig.secret, {
        expiresIn: jwtConfig.expireTime
      });
      var refreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
        id: user.id
      }, jwtConfig.refreshTokenSecret, {
        expiresIn: jwtConfig.refreshTokenExpireTime
      });

      var userData = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, user);

      delete userData.password;
      var response = {
        userData: userData,
        accessToken: accessToken,
        refreshToken: refreshToken
      };
      return [200, response];
    } catch (e) {
      error = e;
    }
  } else {
    error = {
      email: ['Email or Password is Invalid']
    };
  }

  return [400, {
    error: error
  }];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/register').reply(function (request) {
  var _JSON$parse2 = JSON.parse(request.data),
      username = _JSON$parse2.username,
      email = _JSON$parse2.email,
      password = _JSON$parse2.password; // If not any of data is missing return 400


  if (!(username && email && password)) return [400];
  var isEmailAlreadyInUse = data.users.find(function (user) {
    return user.email === email;
  });
  var isUsernameAlreadyInUse = data.users.find(function (user) {
    return user.username === username;
  });
  var error = {
    password: !password ? ['Please enter password'] : null,
    email: function () {
      if (!email) return ['Please enter your email.'];
      if (isEmailAlreadyInUse) return ['This email is already in use.'];
      return null;
    }(),
    username: function () {
      if (!username) return ['Please enter your username.'];
      if (isUsernameAlreadyInUse) return ['This username is already in use.'];
      return null;
    }()
  };

  if (!error.username && !error.email) {
    var userData = {
      email: email,
      password: password,
      username: username,
      fullName: '',
      avatar: null,
      role: 'admin',
      ability: [{
        action: 'manage',
        subject: 'all'
      }]
    }; // Add user id

    var length = data.users.length;
    var lastIndex = 0;

    if (length) {
      lastIndex = data.users[length - 1].id;
    }

    userData.id = lastIndex + 1;
    data.users.push(userData);
    var accessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.secret, {
      expiresIn: jwtConfig.expireTime
    });

    var user = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, userData);

    delete user.password;
    var response = {
      userData: user,
      accessToken: accessToken
    };
    return [200, response];
  }

  return [400, {
    error: error
  }];
});
_fake_db_mock__WEBPACK_IMPORTED_MODULE_3__["default"].onPost('/jwt/refresh-token').reply(function (request) {
  var _JSON$parse3 = JSON.parse(request.data),
      refreshToken = _JSON$parse3.refreshToken;

  try {
    var _jwt$verify = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.verify(refreshToken, jwtConfig.refreshTokenSecret),
        id = _jwt$verify.id;

    var userData = Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, data.users.find(function (user) {
      return user.id === id;
    }));

    var newAccessToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.secret, {
      expiresIn: jwtConfig.expiresIn
    });
    var newRefreshToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default.a.sign({
      id: userData.id
    }, jwtConfig.refreshTokenSecret, {
      expiresIn: jwtConfig.refreshTokenExpireTime
    });
    delete userData.password;
    var response = {
      userData: userData,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken
    };
    return [200, response];
  } catch (e) {
    var error = 'Invalid refresh token';
    return [401, {
      error: error
    }];
  }
});

/***/ }),

/***/ "./resources/js/src/@fake-db/mock.js":
/*!*******************************************!*\
  !*** ./resources/js/src/@fake-db/mock.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-mock-adapter */ "./node_modules/axios-mock-adapter/src/index.js");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__);

 // This sets the mock adapter on the axios instance

var mock = new axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default.a(_axios__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (mock);

/***/ }),

/***/ "./resources/js/src/@fake-db/utils.js":
/*!********************************************!*\
  !*** ./resources/js/src/@fake-db/utils.js ***!
  \********************************************/
/*! exports provided: paginateArray, sortCompare, getRandomInt, randomDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateArray", function() { return paginateArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCompare", function() { return sortCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomDate", function() { return randomDate; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);

var paginateArray = function paginateArray(array, perPage, page) {
  return array.slice((page - 1) * perPage, page * perPage);
};
var sortCompare = function sortCompare(key) {
  return function (a, b) {
    var fieldA = a[key];
    var fieldB = b[key];
    var comparison = 0;

    if (fieldA > fieldB) {
      comparison = 1;
    } else if (fieldA < fieldB) {
      comparison = -1;
    }

    return comparison;
  };
};
var getRandomInt = function getRandomInt(min, max) {
  if (min > max) {
    var temp = max;
    /* eslint-disable no-param-reassign */

    max = min;
    min = temp;
    /* eslint-enable */
  }

  if (min <= 0) {
    return Math.floor(Math.random() * (max + Math.abs(min) + 1)) + min;
  }

  return Math.floor(Math.random() * max) + min;
};
var randomDate = function randomDate(start, end) {
  var diff = end.getTime() - start.getTime();
  var newDiff = diff * Math.random();
  var date = new Date(start.getTime() + newDiff);
  return date;
};

/***/ }),

/***/ "./resources/js/src/App.vue":
/*!**********************************!*\
  !*** ./resources/js/src/App.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7201f370& */ "./resources/js/src/App.vue?vue&type=template&id=7201f370&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/App.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./resources/js/src/App.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/App.vue?vue&type=template&id=7201f370&":
/*!*****************************************************************!*\
  !*** ./resources/js/src/App.vue?vue&type=template&id=7201f370& ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7201f370& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/App.vue?vue&type=template&id=7201f370&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7201f370___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/1-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/10-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/10-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/10-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/10.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/10.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/10.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/11-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/11-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/11-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/11.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/11.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/11.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/12-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/12-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/12-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/12.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/12.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/12.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/13-small.png":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/13-small.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/13-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/2-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/2-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/2-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/2.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/2.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/2.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/3-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/3-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/3-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/3.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/3.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/3.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/4-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/4-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/4-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/4.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/4.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/5-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/5-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/5-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/5.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/5.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/6-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/6-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/6-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/6.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/6.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/7-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/7-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/7-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/7.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/7.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/8-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/8-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/8-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/8.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/8.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/9-small.png":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/9-small.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/9-small.png";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/9.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/9.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/avatars/9.png";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-12.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-12.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/banner/banner-12.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-22.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-22.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/banner/banner-22.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-27.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-27.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/banner/banner-27.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-35.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-35.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/banner/banner-35.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/banner/banner-39.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/banner/banner-39.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/banner/banner-39.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/book.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/book.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/book.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/brush.svg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/brush.svg ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/brush.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/doc.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/doc.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/doc.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/js.png":
/*!*****************************************************!*\
  !*** ./resources/js/src/assets/images/icons/js.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/js.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/json.png":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/json.png ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/json.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/parachute.svg":
/*!************************************************************!*\
  !*** ./resources/js/src/assets/images/icons/parachute.svg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/parachute.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/rocket.svg":
/*!*********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/rocket.svg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/rocket.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/speaker.svg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/speaker.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/speaker.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/star.svg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/star.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/star.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/toolbox.svg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/icons/toolbox.svg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/toolbox.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/txt.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/txt.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/txt.png";

/***/ }),

/***/ "./resources/js/src/assets/images/icons/xls.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/icons/xls.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/icons/xls.png";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot1.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot1.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/Pot1.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot2.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot2.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/Pot2.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/Pot3.svg":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/Pot3.svg ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/Pot3.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/api.svg":
/*!*************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/api.svg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/api.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/demand.svg":
/*!****************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/demand.svg ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/demand.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/email.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/email.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/email.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/marketing.svg":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/marketing.svg ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/marketing.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/personalization.svg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/personalization.svg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/personalization.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/illustration/sales.svg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/illustration/sales.svg ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/illustration/sales.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/logo/logo.svg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/logo/logo.svg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/logo/logo.svg";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/1.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/1.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/1.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/10.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/10.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/10.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/11.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/11.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/11.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/12.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/12.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/12.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/13.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/13.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/13.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/14.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/14.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/14.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/15.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/15.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/15.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/16.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/16.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/16.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/17.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/17.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/17.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/18.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/18.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/18.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/19.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/19.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/19.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/2.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/2.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/2.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/20.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/20.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/20.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/21.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/21.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/21.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/22.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/22.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/22.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/23.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/23.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/23.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/24.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/24.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/24.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/25.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/25.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/25.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/26.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/26.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/26.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/27.png":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/27.png ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/27.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/3.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/3.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/3.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/4.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/4.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/4.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/5.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/5.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/5.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/6.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/6.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/6.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/7.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/7.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/7.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/8.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/8.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/eCommerce/9.png":
/*!**************************************************************!*\
  !*** ./resources/js/src/assets/images/pages/eCommerce/9.png ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/eCommerce/9.png";

/***/ }),

/***/ "./resources/js/src/assets/images/pages/kb-image.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/pages/kb-image.jpg ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/pages/kb-image.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-1.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-1.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-10.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-10.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-11.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-11.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-12.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-12.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-13.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-13.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-14.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-14.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-15.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-15.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-18.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-18.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-2.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-2.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-20.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-20.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-22.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-22.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-23.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-23.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-24.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-24.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg":
/*!***********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-25.jpg ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-25.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-3.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-3.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-4.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-4.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-5.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-5.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-6.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-6.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-7.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-7.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-8.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-8.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg":
/*!**********************************************************************!*\
  !*** ./resources/js/src/assets/images/portrait/small/avatar-s-9.jpg ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/portrait/small/avatar-s-9.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/post-media/2.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/post-media/2.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/post-media/2.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/post-media/25.jpg":
/*!******************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/post-media/25.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/post-media/25.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/timeline.jpg":
/*!**************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/timeline.jpg ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/timeline.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-02.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-02.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-02.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-03.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-03.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-03.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-04.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-04.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-04.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-05.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-05.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-05.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-06.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-06.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-06.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-07.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-07.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-07.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-08.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-08.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-08.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-09.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-09.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-09.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile/user-uploads/user-13.jpg":
/*!*************************************************************************!*\
  !*** ./resources/js/src/assets/images/profile/user-uploads/user-13.jpg ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/profile/user-uploads/user-13.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/02.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/02.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/02.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/03.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/03.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/03.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/04.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/04.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/04.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/06.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/06.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/06.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/09.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/09.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/09.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/slider/10.jpg":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/slider/10.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/bot/resources/js/src/assets/images/slider/10.jpg";

/***/ }),

/***/ "./resources/js/src/assets/scss/style.scss":
/*!*************************************************!*\
  !*** ./resources/js/src/assets/scss/style.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/js/src/assets/scss/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/auth/sanctum/useSanctum.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/auth/sanctum/useSanctum.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_auth_sanctum_useSanctum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/auth/sanctum/useSanctum */ "./resources/js/src/@core/auth/sanctum/useSanctum.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");



var _useSanctum = Object(_core_auth_sanctum_useSanctum__WEBPACK_IMPORTED_MODULE_0__["default"])(_axios__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
    sanctum = _useSanctum.sanctum;

/* harmony default export */ __webpack_exports__["default"] = (sanctum);

/***/ }),

/***/ "./resources/js/src/auth/utils.js":
/*!****************************************!*\
  !*** ./resources/js/src/auth/utils.js ***!
  \****************************************/
/*! exports provided: isUserLoggedIn, getUserData, getHomeRouteForLoggedInUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUserLoggedIn", function() { return isUserLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHomeRouteForLoggedInUser", function() { return getHomeRouteForLoggedInUser; });
/* harmony import */ var _auth_sanctum_useSanctum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth/sanctum/useSanctum */ "./resources/js/src/auth/sanctum/useSanctum.js");

/**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 */

var isUserLoggedIn = function isUserLoggedIn() {
  return localStorage.getItem('userData') && localStorage.getItem(_auth_sanctum_useSanctum__WEBPACK_IMPORTED_MODULE_0__["default"].sanctumConfig.storageTokenKeyName);
};
var getUserData = function getUserData() {
  return JSON.parse(localStorage.getItem('userData'));
};
/**
 * This function is used for demo purpose route navigation
 * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 * Please note role field is just for showing purpose it's not used by anything in frontend
 * We are checking role just for ease
 * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 */

var getHomeRouteForLoggedInUser = function getHomeRouteForLoggedInUser(userRole) {
  if (userRole === 'admin') return '/';
  if (userRole === 'client') return {
    name: 'access-control'
  };
  return {
    name: 'auth-login'
  };
};
/*
import useJwt from '@/auth/jwt/useJwt'

/!**
 * Return if user is logged in
 * This is completely up to you and how you want to store the token in your frontend application
 * e.g. If you are using cookies to store the application please update this function
 *!/
// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData') && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

/!**
 * This function is used for demo purpose route navigation
 * In real app you won't need this function because your app will navigate to same route for each users regardless of ability
 * Please note role field is just for showing purpose it's not used by anything in frontend
 * We are checking role just for ease
 * NOTE: If you have different pages to navigate based on user ability then this function can be useful. However, you need to update it.
 * @param {String} userRole Role of user
 *!/
export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/'
  if (userRole === 'client') return { name: 'access-control' }
  return { name: 'auth-login' }
}
*/

/***/ }),

/***/ "./resources/js/src/global-components.js":
/*!***********************************************!*\
  !*** ./resources/js/src/global-components.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_feather_icon_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/feather-icon/FeatherIcon.vue */ "./resources/js/src/@core/components/feather-icon/FeatherIcon.vue");



vue__WEBPACK_IMPORTED_MODULE_1___default.a.component(_core_components_feather_icon_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"].name, _core_components_feather_icon_FeatherIcon_vue__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./resources/js/src/libs/acl/ability.js":
/*!**********************************************!*\
  !*** ./resources/js/src/libs/acl/ability.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _casl_ability__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @casl/ability */ "./node_modules/@casl/ability/dist/es5m/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./resources/js/src/libs/acl/config.js");

 //  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in user
// ? You can update this if you store user abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this

var userData = JSON.parse(localStorage.getItem('userData'));
var existingAbility = userData ? userData.ability : null;
/* harmony default export */ __webpack_exports__["default"] = (new _casl_ability__WEBPACK_IMPORTED_MODULE_0__["Ability"](existingAbility || _config__WEBPACK_IMPORTED_MODULE_1__["initialAbility"]));

/***/ }),

/***/ "./resources/js/src/libs/acl/config.js":
/*!*********************************************!*\
  !*** ./resources/js/src/libs/acl/config.js ***!
  \*********************************************/
/*! exports provided: initialAbility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialAbility", function() { return initialAbility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var initialAbility = [{
  action: 'read',
  subject: 'Auth'
}];
var _ = undefined;

/***/ }),

/***/ "./resources/js/src/libs/acl/index.js":
/*!********************************************!*\
  !*** ./resources/js/src/libs/acl/index.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _casl_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @casl/vue */ "./node_modules/@casl/vue/dist/es5m/index.js");
/* harmony import */ var _ability__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ability */ "./resources/js/src/libs/acl/ability.js");



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_casl_vue__WEBPACK_IMPORTED_MODULE_1__["abilitiesPlugin"], _ability__WEBPACK_IMPORTED_MODULE_2__["default"]);

/***/ }),

/***/ "./resources/js/src/libs/acl/routeProtection.js":
/*!******************************************************!*\
  !*** ./resources/js/src/libs/acl/routeProtection.js ***!
  \******************************************************/
/*! exports provided: canNavigate, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canNavigate", function() { return canNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ability__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ability */ "./resources/js/src/libs/acl/ability.js");


var canNavigate = function canNavigate(to) {
  return to.matched.some(function (route) {
    return _ability__WEBPACK_IMPORTED_MODULE_1__["default"].can(route.meta.action || 'read', route.meta.resource);
  });
};
var _ = undefined;

/***/ }),

/***/ "./resources/js/src/libs/axios.js":
/*!****************************************!*\
  !*** ./resources/js/src/libs/axios.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
 // axios


axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.baseURL = '/api/v1';
var axiosIns = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({// You can add your headers here
  // ================================
  // baseURL: 'https://some-domain.com/api/v1',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});
vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$http = axiosIns;
/* harmony default export */ __webpack_exports__["default"] = (axiosIns);

/***/ }),

/***/ "./resources/js/src/libs/clipboard.js":
/*!********************************************!*\
  !*** ./resources/js/src/libs/clipboard.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-clipboard2 */ "./node_modules/vue-clipboard2/vue-clipboard.js");
/* harmony import */ var vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1__);

 // clipboard

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_clipboard2__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./resources/js/src/libs/i18n/index.js":
/*!*********************************************!*\
  !*** ./resources/js/src/libs/i18n/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-i18n */ "./node_modules/vue-i18n/dist/vue-i18n.esm.js");







vue__WEBPACK_IMPORTED_MODULE_5___default.a.use(vue_i18n__WEBPACK_IMPORTED_MODULE_6__["default"]);

function loadLocaleMessages() {
  var locales = __webpack_require__("./resources/js/src/libs/i18n/locales sync recursive [A-Za-z0-9-_,\\s]+\\.json$/");

  var messages = {};
  locales.keys().forEach(function (key) {
    var matched = key.match(/([A-Za-z0-9-_]+)\./i);

    if (matched && matched.length > 1) {
      var locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

/* harmony default export */ __webpack_exports__["default"] = (new vue_i18n__WEBPACK_IMPORTED_MODULE_6__["default"]({
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages()
}));

/***/ }),

/***/ "./resources/js/src/libs/i18n/locales sync recursive [A-Za-z0-9-_,\\s]+\\.json$/":
/*!***************************************************************************!*\
  !*** ./resources/js/src/libs/i18n/locales sync [A-Za-z0-9-_,\s]+\.json$/ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de.json": "./resources/js/src/libs/i18n/locales/de.json",
	"./en.json": "./resources/js/src/libs/i18n/locales/en.json",
	"./fr.json": "./resources/js/src/libs/i18n/locales/fr.json",
	"./pt.json": "./resources/js/src/libs/i18n/locales/pt.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/js/src/libs/i18n/locales sync recursive [A-Za-z0-9-_,\\s]+\\.json$/";

/***/ }),

/***/ "./resources/js/src/libs/i18n/locales/de.json":
/*!****************************************************!*\
  !*** ./resources/js/src/libs/i18n/locales/de.json ***!
  \****************************************************/
/*! exports provided: message, UI Elements, Forms & Tables, Pages, Charts & Maps, Others, Typography, Colors, Feather, Cards, Basic, Advance, Statistic, Analytic, Card Action, Components, Alert, Aspect, Avatar, Badge, Breadcrumb, Button, Button Group, Button Toolbar, Calendar, Carousel, Collapse, Dropdown, Embed, Image, List Group, Media, Modal, Nav, Overlay, Pagination, Pagination Nav, Pill, Pill Badge, Popover, Progress, Sidebar, spinner, Tab, Time, Toasts, Tooltip, Extensions, Sweet Alert, Quill Editor, Drag & Drop, Swiper, Clipboard, Video Player, Context Menu, Toastification, I18n, Slider, Tour, Auto Suggest, Tree, Date Time Picker, Vue Select, Forms Elements, Select, Switch, Checkbox, Radio, Input, Textarea, Spinbutton, Input Group, Form Rating, Form Tag, Form Datepicker, Form Timepicker, File Input, Input Mask, Form Layout, Form Wizard, Form Validation, Form Repeater, BS Table, Good Table, Charts, Apex Chart, Chartjs, Echart, Leaflet, Profile, Account Settings, Faq, Knowledge Base, Pricing, Blog, List, Detail, Edit, Search, Menu Levels, Menu Level2.1, Menu Level2.2, Menu Level3.1, Menu Level3.2, Disabled Menu, Support, Raise Support, Documentation, Dashboards, Apps & Pages, Email, Chat, Todo, Invoice, Preview, Add, eCommerce, Shop, Details, Wishlist, Checkout, User, View, Authentication, Login v1, Login v2, Register v1, Register v2, Forget Password v1, Forget Password v2, Forgot Password v1, Forgot Password v2, Reset Password v1, Reset Password v2, Miscellaneous, Coming Soon, Not Authorized, Under Maintenance, Error, Statistics, Analytics, Card Actions, Media Objects, Timeline, Access Control, Menu Level 2.1, Menu Level 2.2, Menu Level 3.1, Menu Level 3.2, Apps, User Interface, Mail Templates, Welcome, Reset Password, Verify Email, Deactivate Account, Promotional, Page Layouts, Collapsed Menu, Layout Boxed, Without Menu, Layout Empty, Layout Blank, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":{\"title\":\"Kartentitel\",\"text\":\"Kuchen Sesam Schnaps Cupcake Lebkuchen Dänisch Ich liebe Lebkuchen. Apfelkuchen-Torte-Jujuben chupa chups muffin halvah Lutscher. Schokoladenkuchenhaferkuchen Tiramisu-Marzipanzuckerpflaume. Donut süße Kuchen Hafer Kuchen Dragée Obstkuchen Zuckerwatte Zitrone Tropfen.\",\"pagelength\":\"Zeige 1 bis\",\"of\":\"von\",\"pageText2\":\"Einträge\",\"seachLabel\":\"Suche\",\"SearchPlaceholder\":\"Suche\",\"tableHeader\":{\"name\":\"Name\",\"email\":\"Email\",\"date\":\"Datum\",\"salary\":\"Gehalt\",\"status\":\"Status\",\"action\":\"Aktion\"}},\"UI Elements\":\"UI-Elemente\",\"Forms & Tables\":\"Formulare & Tabellen\",\"Pages\":\"Seiten\",\"Charts & Maps\":\"Diagramme & Karten\",\"Others\":\"Andere\",\"Typography\":\"Typografie\",\"Colors\":\"Colors\",\"Feather\":\"Feder\",\"Cards\":\"Karten\",\"Basic\":\"Basic\",\"Advance\":\"Voraus\",\"Statistic\":\"Statistik\",\"Analytic\":\"Analytisch\",\"Card Action\":\"Kartenaktion\",\"Components\":\"Komponenten\",\"Alert\":\"Aufmerksam\",\"Aspect\":\"Aspekt\",\"Avatar\":\"Benutzerbild\",\"Badge\":\"Abzeichen\",\"Breadcrumb\":\"Brotkrume\",\"Button\":\"Taste\",\"Button Group\":\"Schaltflächengruppe\",\"Button Toolbar\":\"Schaltflächensymbolleiste\",\"Calendar\":\"Kalender\",\"Carousel\":\"Karussell\",\"Collapse\":\"Zusammenbruch\",\"Dropdown\":\"Dropdown-Liste\",\"Embed\":\"Einbetten\",\"Image\":\"Bild\",\"List Group\":\"Listengruppe\",\"Media\":\"Medien\",\"Modal\":\"Modal\",\"Nav\":\"Nav\",\"Overlay\":\"Überlagerung\",\"Pagination\":\"Seitennummerierung\",\"Pagination Nav\":\"Paginierung Nav\",\"Pill\":\"Pille\",\"Pill Badge\":\"Pillenabzeichen\",\"Popover\":\"Popover\",\"Progress\":\"Fortschritt\",\"Sidebar\":\"Seitenleiste\",\"spinner\":\"Spinner\",\"Tab\":\"Tab\",\"Time\":\"Zeit\",\"Toasts\":\"Toast\",\"Tooltip\":\"Tooltip\",\"Extensions\":\"Erweiterungen\",\"Sweet Alert\":\"Süßer Alarm\",\"Quill Editor\":\"Federkiel-Editor\",\"Drag & Drop\":\"Ziehen und loslassen\",\"Swiper\":\"Swiper\",\"Clipboard\":\"Zwischenablage\",\"Video Player\":\"Videoplayer\",\"Context Menu\":\"Kontextmenü\",\"Toastification\":\"Toastifizierung\",\"I18n\":\"I18n\",\"Slider\":\"Schieberegler\",\"Tour\":\"Tour\",\"Auto Suggest\":\"Automatisch vorschlagen\",\"Tree\":\"Baum\",\"Date Time Picker\":\"Datum Uhrzeit Auswahl\",\"Vue Select\":\"Vue Wählen\",\"Forms Elements\":\"Bildet Elemente\",\"Select\":\"Wählen\",\"Switch\":\"Schalter\",\"Checkbox\":\"Kontrollkästchen\",\"Radio\":\"Radio\",\"Input\":\"Eingang\",\"Textarea\":\"Textbereich\",\"Spinbutton\":\"Drehknopf\",\"Input Group\":\"Eingabegruppe\",\"Form Rating\":\"Formularbewertung\",\"Form Tag\":\"Formular-Tag\",\"Form Datepicker\":\"Formular Datepicker\",\"Form Timepicker\":\"Form Timepicker\",\"File Input\":\"Dateieingabe\",\"Input Mask\":\"Eingabemaske\",\"Form Layout\":\"Formularlayout\",\"Form Wizard\":\"Formzauberer\",\"Form Validation\":\"Formularvalidierung\",\"Form Repeater\":\"Form Repeater\",\"BS Table\":\"BS-Tabelle\",\"Good Table\":\"Guter Tisch\",\"Charts\":\"Diagramme\",\"Apex Chart\":\"Apex-Diagramm\",\"Chartjs\":\"Chartjs\",\"Echart\":\"Echart\",\"Leaflet\":\"Flugblatt\",\"Profile\":\"Profil\",\"Account Settings\":\"Kontoeinstellungen\",\"Faq\":\"FAQ\",\"Knowledge Base\":\"Wissensbasis\",\"Pricing\":\"Preisgestaltung\",\"Blog\":\"Blog\",\"List\":\"Liste\",\"Detail\":\"Detail\",\"Edit\":\"Bearbeiten\",\"Search\":\"Suche\",\"Menu Levels\":\"Menüebenen\",\"Menu Level2.1\":\"Menüebene 2.1\",\"Menu Level2.2\":\"Menüebene 2.2\",\"Menu Level3.1\":\"Menüebene 3.1\",\"Menu Level3.2\":\"Menüebene 3.2\",\"Disabled Menu\":\"Deaktiviertes Menü\",\"Support\":\"Unterstützung\",\"Raise Support\":\"Unterstützung erhöhen\",\"Documentation\":\"Dokumentation\",\"Dashboards\":\"Dashboards\",\"Apps & Pages\":\"Apps & Seiten\",\"Email\":\"Email\",\"Chat\":\"Plaudern\",\"Todo\":\"Machen\",\"Invoice\":\"Rechnung\",\"Preview\":\"Vorschau\",\"Add\":\"Hinzufügen\",\"eCommerce\":\"E-Commerce\",\"Shop\":\"Geschäft\",\"Details\":\"Einzelheiten\",\"Wishlist\":\"Wunschzettel\",\"Checkout\":\"Auschecken\",\"User\":\"Nutzer\",\"View\":\"Aussicht\",\"Authentication\":\"Authentifizierung\",\"Login v1\":\"Login v1\",\"Login v2\":\"Login v2\",\"Register v1\":\"Registrieren Sie v1\",\"Register v2\":\"Registrieren Sie v2\",\"Forget Password v1\":\"Passwort vergessen v1\",\"Forget Password v2\":\"Passwort vergessen v2\",\"Forgot Password v1\":\"Passwort vergessen v1\",\"Forgot Password v2\":\"Passwort vergessen v2\",\"Reset Password v1\":\"Passwort zurücksetzen v1\",\"Reset Password v2\":\"Passwort zurücksetzen v2\",\"Miscellaneous\":\"Verschiedenes\",\"Coming Soon\":\"Kommt bald\",\"Not Authorized\":\"Nicht genehmigt\",\"Under Maintenance\":\"Wird gewartet\",\"Error\":\"Error\",\"Statistics\":\"Statistiken\",\"Analytics\":\"Analytik\",\"Card Actions\":\"Kartenaktionen\",\"Media Objects\":\"Medienobjekte\",\"Timeline\":\"Zeitleiste\",\"Access Control\":\"Zugangskontrolle\",\"Menu Level 2.1\":\"Menüebene 2.1\",\"Menu Level 2.2\":\"Menüebene 2.2\",\"Menu Level 3.1\":\"Menüebene 3.1\",\"Menu Level 3.2\":\"Menüebene 3.2\",\"Apps\":\"Apps\",\"User Interface\":\"Benutzeroberfläche\",\"Mail Templates\":\"Mail-Vorlagen\",\"Welcome\":\"Herzlich willkommen\",\"Reset Password\":\"Passwort zurücksetzen\",\"Verify Email\":\"E-Mail bestätigen\",\"Deactivate Account\":\"Benutzerkonto deaktivieren\",\"Promotional\":\"Werbung\",\"Page Layouts\":\"Seitenlayouts\",\"Collapsed Menu\":\"Reduziertes Menü\",\"Layout Boxed\":\"Layout Boxed\",\"Without Menu\":\"Ohne Menü\",\"Layout Empty\":\"Layout leer\",\"Layout Blank\":\"Layout leer\"}");

/***/ }),

/***/ "./resources/js/src/libs/i18n/locales/en.json":
/*!****************************************************!*\
  !*** ./resources/js/src/libs/i18n/locales/en.json ***!
  \****************************************************/
/*! exports provided: message, UI Elements, Forms & Tables, Pages, Charts & Maps, Others, Typography, Colors, Feather, Cards, Basic, Advance, Statistic, Analytic, Card Action, Components, Alert, Aspect, Avatar, Badge, Breadcrumb, Button, Button Group, Button Toolbar, Calendar, Carousel, Collapse, Dropdown, Embed, Image, List Group, Media, Modal, Nav, Overlay, Pagination, Pagination Nav, Pill, Pill Badge, Popover, Progress, Sidebar, spinner, Tab, Time, Toasts, Tooltip, Extensions, Sweet Alert, Quill Editor, Drag & Drop, Swiper, Clipboard, Video Player, Context Menu, Toastification, I18n, Slider, Tour, Auto Suggest, Tree, Date Time Picker, Vue Select, Forms Elements, Select, Switch, Checkbox, Radio, Input, Textarea, Spinbutton, Input Group, Form Rating, Form Tag, Form Datepicker, Form Timepicker, File Input, Input Mask, Form Layout, Form Wizard, Form Validation, Form Repeater, BS Table, Good Table, Charts, Apex Chart, Chartjs, Echart, Leaflet, Profile, Account Settings, Faq, Knowledge Base, Pricing, Blog, List, Detail, Edit, Search, Menu Levels, Menu Level 2.1, Menu Level 2.2, Menu Level 3.1, Menu Level 3.2, Disabled Menu, Support, Raise Support, Documentation, Dashboards, eCommerce, Analytics, Apps & Pages, Email, Chat, Todo, Invoice, Preview, Add, Shop, Details, Wishlist, Checkout, User, View, Authentication, Login v1, Login v2, Register v1, Register v2, Forget Password v1, Forget Password v2, Forgot Password v1, Forgot Password v2, Reset Password v1, Reset Password v2, Miscellaneous, Coming Soon, Not Authorized, Under Maintenance, Error, Statistics, Card Actions, Media Objects, Timeline, Access Control, Apps, User Interface, Mail Templates, Welcome, Reset Password, Verify Email, Deactivate Account, Promotional, Page Layouts, Collapsed Menu, Layout Boxed, Without Menu, Layout Empty, Layout Blank, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":{\"title\":\"Card Title\",\"text\":\"Cake sesame snaps cupcake gingerbread danish I love gingerbread. Apple pie pie jujubes chupa chups muffin halvah lollipop. Chocolate cake oat cake tiramisu marzipan sugar plum. Donut sweet pie oat cake dragée fruitcake cotton candy lemon drops.\",\"pagelength\":\"Showing 1 to\",\"of\":\"of\",\"pageText2\":\"entries\",\"seachLabel\":\"Search\",\"SearchPlaceholder\":\"Search\",\"tableHeader\":{\"name\":\"Name\",\"email\":\"Email\",\"date\":\"Date\",\"salary\":\"Salary\",\"status\":\"Status\",\"action\":\"Action\"}},\"UI Elements\":\"UI Elements\",\"Forms & Tables\":\"Forms & Tables\",\"Pages\":\"Pages\",\"Charts & Maps\":\"Charts & Maps\",\"Others\":\"Others\",\"Typography\":\"Typography\",\"Colors\":\"Colors\",\"Feather\":\"Feather\",\"Cards\":\"Cards\",\"Basic\":\"Basic\",\"Advance\":\"Advance\",\"Statistic\":\"Statistic\",\"Analytic\":\"Analytic\",\"Card Action\":\"Card Action\",\"Components\":\"Components\",\"Alert\":\"Alert\",\"Aspect\":\"Aspect\",\"Avatar\":\"Avatar\",\"Badge\":\"Badge\",\"Breadcrumb\":\"Breadcrumb\",\"Button\":\"Button\",\"Button Group\":\"Button Group\",\"Button Toolbar\":\"Button Toolbar\",\"Calendar\":\"Calendar\",\"Carousel\":\"Carousel\",\"Collapse\":\"Collapse\",\"Dropdown\":\"Dropdown\",\"Embed\":\"Embed\",\"Image\":\"Image\",\"List Group\":\"List Group\",\"Media\":\"Media\",\"Modal\":\"Modal\",\"Nav\":\"Nav\",\"Overlay\":\"Overlay\",\"Pagination\":\"Pagination\",\"Pagination Nav\":\"Pagination Nav\",\"Pill\":\"Pill\",\"Pill Badge\":\"Pill Badge\",\"Popover\":\"Popover\",\"Progress\":\"Progress\",\"Sidebar\":\"Sidebar\",\"spinner\":\"spinner\",\"Tab\":\"Tab\",\"Time\":\"Time\",\"Toasts\":\"Toasts\",\"Tooltip\":\"Tooltip\",\"Extensions\":\"Extensions\",\"Sweet Alert\":\"Sweet Alert\",\"Quill Editor\":\"Quill Editor\",\"Drag & Drop\":\"Drag & Drop\",\"Swiper\":\"Swiper\",\"Clipboard\":\"Clipboard\",\"Video Player\":\"Video Player\",\"Context Menu\":\"Context Menu\",\"Toastification\":\"Toastification\",\"I18n\":\"I18n\",\"Slider\":\"Slider\",\"Tour\":\"Tour\",\"Auto Suggest\":\"Auto Suggest\",\"Tree\":\"Tree\",\"Date Time Picker\":\"Date Time Picker\",\"Vue Select\":\"Vue Select\",\"Forms Elements\":\"Forms elements\",\"Select\":\"Select\",\"Switch\":\"Switch\",\"Checkbox\":\"Checkbox\",\"Radio\":\"Radio\",\"Input\":\"Input\",\"Textarea\":\"Textarea\",\"Spinbutton\":\"Spinbutton\",\"Input Group\":\"Input Group\",\"Form Rating\":\"Form Rating\",\"Form Tag\":\"Form Tag\",\"Form Datepicker\":\"Form Datepicker\",\"Form Timepicker\":\"Form Timepicker\",\"File Input\":\"File Input\",\"Input Mask\":\"Input Mask\",\"Form Layout\":\"Form Layout\",\"Form Wizard\":\"Form Wizard\",\"Form Validation\":\"Form Validation\",\"Form Repeater\":\"Form Repeater\",\"BS Table\":\"BS Table\",\"Good Table\":\"Good Table\",\"Charts\":\"Charts\",\"Apex Chart\":\"Apex Chart\",\"Chartjs\":\"Chartjs\",\"Echart\":\"Echart\",\"Leaflet\":\"Leaflet\",\"Profile\":\"Profile\",\"Account Settings\":\"Account Settings\",\"Faq\":\"Faq\",\"Knowledge Base\":\"Knowledge Base\",\"Pricing\":\"Pricing\",\"Blog\":\"Blog\",\"List\":\"List\",\"Detail\":\"Detail\",\"Edit\":\"Edit\",\"Search\":\"Search\",\"Menu Levels\":\"Menu Levels\",\"Menu Level 2.1\":\"Menu Level 2.1\",\"Menu Level 2.2\":\"Menu Level 2.2\",\"Menu Level 3.1\":\"Menu Level 3.1\",\"Menu Level 3.2\":\"Menu Level 3.2\",\"Disabled Menu\":\"Disabled Menu\",\"Support\":\"Support\",\"Raise Support\":\"Raise Support\",\"Documentation\":\"Documentation\",\"Dashboards\":\"Dashboards\",\"eCommerce\":\"eCommerce\",\"Analytics\":\"Analytics\",\"Apps & Pages\":\"Apps & Pages\",\"Email\":\"Email\",\"Chat\":\"Chat\",\"Todo\":\"Todo\",\"Invoice\":\"Invoice\",\"Preview\":\"Preview\",\"Add\":\"Add\",\"Shop\":\"Shop\",\"Details\":\"Details\",\"Wishlist\":\"Wishlist\",\"Checkout\":\"Checkout\",\"User\":\"User\",\"View\":\"View\",\"Authentication\":\"Authentication\",\"Login v1\":\"Login v1\",\"Login v2\":\"Login v2\",\"Register v1\":\"Register v1\",\"Register v2\":\"Register v2\",\"Forget Password v1\":\"Forget Password v1\",\"Forget Password v2\":\"Forget Password v2\",\"Forgot Password v1\":\"Forgot Password v1\",\"Forgot Password v2\":\"Forgot Password v2\",\"Reset Password v1\":\"Reset Password v1\",\"Reset Password v2\":\"Reset Password v2\",\"Miscellaneous\":\"Miscellaneous\",\"Coming Soon\":\"Coming Soon\",\"Not Authorized\":\"Not Authorized\",\"Under Maintenance\":\"Under Maintenance\",\"Error\":\"Error\",\"Statistics\":\"Statistics\",\"Card Actions\":\"Card Actions\",\"Media Objects\":\"Media Objects\",\"Timeline\":\"Timeline\",\"Access Control\":\"Access Control\",\"Apps\":\"Apps\",\"User Interface\":\"User Interface\",\"Mail Templates\":\"Mail Templates\",\"Welcome\":\"Welcome\",\"Reset Password\":\"Reset Password\",\"Verify Email\":\"Verify Email\",\"Deactivate Account\":\"Deactivate Account\",\"Promotional\":\"Promotional\",\"Page Layouts\":\"Page Layouts\",\"Collapsed Menu\":\"Collapsed Menu\",\"Layout Boxed\":\"Layout Boxed\",\"Without Menu\":\"Without Menu\",\"Layout Empty\":\"Layout Empty\",\"Layout Blank\":\"Layout Blank\"}");

/***/ }),

/***/ "./resources/js/src/libs/i18n/locales/fr.json":
/*!****************************************************!*\
  !*** ./resources/js/src/libs/i18n/locales/fr.json ***!
  \****************************************************/
/*! exports provided: message, UI Elements, Forms & Tables, Pages, Charts & Maps, Others, Typography, Colors, Feather, Cards, Basic, Advance, Statistic, Analytic, Card Action, Components, Alert, Aspect, Avatar, Badge, Breadcrumb, Button, Button Group, Button Toolbar, Calendar, Carousel, Collapse, Dropdown, Embed, Image, List Group, Media, Modal, Nav, Overlay, Pagination, Pagination Nav, Pill, Pill Badge, Popover, Progress, Sidebar, spinner, Tab, Time, Toasts, Tooltip, Extensions, Sweet Alert, Quill Editor, Drag & Drop, Swiper, Clipboard, Video Player, Context Menu, Toastification, I18n, Slider, Tour, Auto Suggest, Tree, Date Time Picker, Vue Select, Forms Elements, Select, Switch, Checkbox, Radio, Input, Textarea, Spinbutton, Input Group, Form Rating, Form Tag, Form Datepicker, Form Timepicker, File Input, Input Mask, Form Layout, Form Wizard, Form Validation, Form Repeater, BS Table, Good Table, Charts, Apex Chart, Chartjs, Echart, Leaflet, Profile, Account Settings, Faq, Knowledge Base, Pricing, Blog, List, Detail, Edit, Search, Menu Levels, Menu Level2.1, Menu Level2.2, Menu Level3.1, Menu Level3.2, Disabled Menu, Support, Raise Support, Documentation, Dashboards, eCommerce, Analytics, Apps & Pages, Email, Chat, Todo, Invoice, Preview, Add, Shop, Details, Wishlist, Checkout, User, View, Authentication, Login v1, Login v2, Register v1, Register v2, Forget Password v1, Forget Password v2, Forgot Password v1, Forgot Password v2, Reset Password v1, Reset Password v2, Miscellaneous, Coming Soon, Not Authorized, Under Maintenance, Error, Statistics, Card Actions, Media Objects, Timeline, Access Control, Menu Level 2.1, Menu Level 2.2, Menu Level 3.1, Menu Level 3.2, Apps, User Interface, Mail Templates, Welcome, Reset Password, Verify Email, Deactivate Account, Promotional, Page Layouts, Collapsed Menu, Layout Boxed, Without Menu, Layout Empty, Layout Blank, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":{\"title\":\"Titre de la carte\",\"text\":\"Le gâteau au sésame s'enclenche au petit pain au pain d'épices danois J'adore le pain d'épices. Tarte aux pommes et jujubes chupa chups muffin halvah sucette. Tiramisu gâteau au chocolat gâteau d'avoine tiramisu prune sucre. Donut tarte sucrée gâteau à l'avoine dragée gouttes de fruits gâteau au citron en barbe à papa.\",\"pagelength\":\"Affichage de 1 à\",\"of\":\"de\",\"pageText2\":\"entrées\",\"seachLabel\":\"Chercher\",\"SearchPlaceholder\":\"Chercher\",\"tableHeader\":{\"name\":\"Nom\",\"email\":\"Email\",\"date\":\"Date\",\"salary\":\"Un salaire\",\"status\":\"Statut\",\"action\":\"action\"}},\"UI Elements\":\"ÉLÉMENTS DE L'UI\",\"Forms & Tables\":\"Formulaires et tableaux\",\"Pages\":\"Des pages\",\"Charts & Maps\":\"Graphiques et cartes\",\"Others\":\"Autres\",\"Typography\":\"Typographie\",\"Colors\":\"Colors\",\"Feather\":\"Plume\",\"Cards\":\"Cartes\",\"Basic\":\"De base\",\"Advance\":\"Avance\",\"Statistic\":\"Statistique\",\"Analytic\":\"Analytique\",\"Card Action\":\"Action de la carte\",\"Components\":\"Composants\",\"Alert\":\"Alerte\",\"Aspect\":\"Aspect\",\"Avatar\":\"Avatar\",\"Badge\":\"Badge\",\"Breadcrumb\":\"Miette de pain\",\"Button\":\"Bouton\",\"Button Group\":\"Groupe de boutons\",\"Button Toolbar\":\"Barre d'outils des boutons\",\"Calendar\":\"Calendrier\",\"Carousel\":\"Carrousel\",\"Collapse\":\"Effondrer\",\"Dropdown\":\"Menu déroulant\",\"Embed\":\"Incorporer\",\"Image\":\"Image\",\"List Group\":\"Groupe de listes\",\"Media\":\"Médias\",\"Modal\":\"Modal\",\"Nav\":\"Nav\",\"Overlay\":\"Recouvrir\",\"Pagination\":\"Pagination\",\"Pagination Nav\":\"Nav de pagination\",\"Pill\":\"Pilule\",\"Pill Badge\":\"Badge de pilule\",\"Popover\":\"Popover\",\"Progress\":\"Le progrès\",\"Sidebar\":\"Barre latérale\",\"spinner\":\"fileur\",\"Tab\":\"Languette\",\"Time\":\"Temps\",\"Toasts\":\"Toasts\",\"Tooltip\":\"Info-bulle\",\"Extensions\":\"Extensions\",\"Sweet Alert\":\"Douce alerte\",\"Quill Editor\":\"Éditeur de plumes\",\"Drag & Drop\":\"Glisser-déposer\",\"Swiper\":\"Swiper\",\"Clipboard\":\"Presse-papiers\",\"Video Player\":\"Lecteur vidéo\",\"Context Menu\":\"Menu contextuel\",\"Toastification\":\"Toastification\",\"I18n\":\"I18n\",\"Slider\":\"Glissière\",\"Tour\":\"Tour\",\"Auto Suggest\":\"Suggestion automatique\",\"Tree\":\"Arbre\",\"Date Time Picker\":\"Sélecteur de date et d'heure\",\"Vue Select\":\"Vue Select\",\"Forms Elements\":\"Éléments de formulaires\",\"Select\":\"Sélectionner\",\"Switch\":\"Commutateur\",\"Checkbox\":\"Case à cocher\",\"Radio\":\"Radio\",\"Input\":\"Contribution\",\"Textarea\":\"Textarea\",\"Spinbutton\":\"Bouton tournant\",\"Input Group\":\"Groupe d'entrée\",\"Form Rating\":\"Évaluation du formulaire\",\"Form Tag\":\"Balise de formulaire\",\"Form Datepicker\":\"Formulaire Datepicker\",\"Form Timepicker\":\"Timepicker de formulaire\",\"File Input\":\"Entrée de fichier\",\"Input Mask\":\"Masque de saisie\",\"Form Layout\":\"Disposition du formulaire\",\"Form Wizard\":\"Assistant de formulaire\",\"Form Validation\":\"Validation de formulaire\",\"Form Repeater\":\"Répéteur de formulaire\",\"BS Table\":\"Tableau BS\",\"Good Table\":\"Bonne table\",\"Charts\":\"Graphiques\",\"Apex Chart\":\"Graphique Apex\",\"Chartjs\":\"Chartjs\",\"Echart\":\"Echart\",\"Leaflet\":\"Brochure\",\"Profile\":\"Profil\",\"Account Settings\":\"Paramètres du compte\",\"Faq\":\"FAQ\",\"Knowledge Base\":\"Base de connaissances\",\"Pricing\":\"Tarification\",\"Blog\":\"Blog\",\"List\":\"liste\",\"Detail\":\"Détail\",\"Edit\":\"Éditer\",\"Search\":\"Chercher\",\"Menu Levels\":\"Niveaux de menu\",\"Menu Level2.1\":\"Niveau de menu 2.1\",\"Menu Level2.2\":\"Niveau de menu 2.2\",\"Menu Level3.1\":\"Niveau de menu 3.1\",\"Menu Level3.2\":\"Niveau de menu 3.2\",\"Disabled Menu\":\"Menu désactivé\",\"Support\":\"Soutien\",\"Raise Support\":\"Augmenter le soutien\",\"Documentation\":\"Documentation\",\"Dashboards\":\"Tableaux de bord\",\"eCommerce\":\"commerce électronique\",\"Analytics\":\"Analytique\",\"Apps & Pages\":\"Applications et pages\",\"Email\":\"Email\",\"Chat\":\"Bavarder\",\"Todo\":\"Faire\",\"Invoice\":\"Facture d'achat\",\"Preview\":\"Aperçu\",\"Add\":\"Ajouter\",\"Shop\":\"Boutique\",\"Details\":\"Détails\",\"Wishlist\":\"Liste de souhaits\",\"Checkout\":\"Check-out\",\"User\":\"Utilisateur\",\"View\":\"Vue\",\"Authentication\":\"Authentification\",\"Login v1\":\"Connexion v1\",\"Login v2\":\"Connexion v2\",\"Register v1\":\"S'inscrire v1\",\"Register v2\":\"S'inscrire v2\",\"Forget Password v1\":\"Oubliez le mot de passe v1\",\"Forget Password v2\":\"Oubliez le mot de passe v2\",\"Forgot Password v1\":\"Oubliez le mot de passe v1\",\"Forgot Password v2\":\"Oubliez le mot de passe v2\",\"Reset Password v1\":\"Réinitialiser le mot de passe v1\",\"Reset Password v2\":\"Réinitialiser le mot de passe v2\",\"Miscellaneous\":\"Divers\",\"Coming Soon\":\"Bientôt disponible\",\"Not Authorized\":\"Pas autorisé\",\"Under Maintenance\":\"En maintenance\",\"Error\":\"Erreur\",\"Statistics\":\"Statistiques\",\"Card Actions\":\"Actions de la carte\",\"Media Objects\":\"Objets multimédias\",\"Timeline\":\"Chronologie\",\"Access Control\":\"Contrôle d'accès\",\"Menu Level 2.1\":\"Niveau de menu 2.1\",\"Menu Level 2.2\":\"Niveau de menu 2.2\",\"Menu Level 3.1\":\"Niveau de menu 3.1\",\"Menu Level 3.2\":\"Niveau de menu 3.2\",\"Apps\":\"applications\",\"User Interface\":\"Interface utilisateur\",\"Mail Templates\":\"Modèles de courrier\",\"Welcome\":\"Bienvenue\",\"Reset Password\":\"réinitialiser le mot de passe\",\"Verify Email\":\"Vérifier les courriels\",\"Deactivate Account\":\"Désactiver le compte\",\"Promotional\":\"Promotionnel\",\"Page Layouts\":\"Mises en page\",\"Collapsed Menu\":\"Menu réduit\",\"Layout Boxed\":\"Disposition encadrée\",\"Without Menu\":\"Sans menu\",\"Layout Empty\":\"Disposition vide\",\"Layout Blank\":\"Mise en page vierge\"}");

/***/ }),

/***/ "./resources/js/src/libs/i18n/locales/pt.json":
/*!****************************************************!*\
  !*** ./resources/js/src/libs/i18n/locales/pt.json ***!
  \****************************************************/
/*! exports provided: message, UI Elements, Forms & Tables, Pages, Charts & Maps, Others, Typography, Colors, Feather, Cards, Basic, Advance, Statistic, Analytic, Card Action, Components, Alert, Aspect, Avatar, Badge, Breadcrumb, Button, Button Group, Button Toolbar, Calendar, Carousel, Collapse, Dropdown, Embed, Image, List Group, Media, Modal, Nav, Overlay, Pagination, Pagination Nav, Pill, Pill Badge, Popover, Progress, Sidebar, spinner, Tab, Time, Toasts, Tooltip, Extensions, Sweet Alert, Quill Editor, Drag & Drop, Swiper, Clipboard, Video Player, Context Menu, Toastification, I18n, Slider, Tour, Auto Suggest, Tree, Date Time Picker, Vue Select, Forms Elements, Select, Switch, Checkbox, Radio, Input, Textarea, Spinbutton, Input Group, Form Rating, Form Tag, Form Datepicker, Form Timepicker, File Input, Input Mask, Form Layout, Form Wizard, Form Validation, Form Repeater, BS Table, Good Table, Charts, ApexChart, Chartjs, Echart, Leaflet, Profile, Account Settings, Faq, Knowledge Base, Pricing, Blog, List, Detail, Edit, Search, Menu Levels, Menu Level2.1, Menu Level2.2, Menu Level3.1, Menu Level3.2, Disabled Menu, Support, Raise Support, Documentation, Dashboards, Apps & Pages, Email, Chat, Todo, Invoice, Preview, Add, eCommerce, Shop, Details, Wishlist, Checkout, User, View, Authentication, Login v1, Login v2, Register v1, Register v2, Forget Password v1, Forget Password v2, Forgot Password v1, Forgot Password v2, Reset Password v1, Reset Password v2, Miscellaneous, Coming Soon, Not Authorized, Under Maintenance, Error, Statistics, Analytics, Card Actions, Media Objects, Timeline, Apex Chart, Access Control, Menu Level 2.1, Menu Level 2.2, Menu Level 3.1, Menu Level 3.2, Apps, User Interface, Mail Templates, Welcome, Reset Password, Verify Email, Deactivate Account, Promotional, Page Layouts, Collapsed Menu, Layout Boxed, Without Menu, Layout Empty, Layout Blank, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":{\"title\":\"Título do cartão\",\"text\":\"O sésamo do bolo agarra dinamarquês do pão-de-espécie do queque eu amo o pão-de-espécie. Torta de torta de maçã jujuba chupa chups muffin halvah pirulito. Ameixa do açúcar do maçapão do tiramisu do bolo da aveia do bolo de chocolate. Bolo de aveia de torta doce rosquinha dragée fruitcake algodão doce gotas de limão.\",\"pagelength\":\"Mostrando 1 para\",\"of\":\"do\",\"pageText2\":\"entradas\",\"seachLabel\":\"Procurar\",\"SearchPlaceholder\":\"Procurar\",\"tableHeader\":{\"name\":\"nome\",\"email\":\"O email\",\"date\":\"Encontro\",\"salary\":\"Salário\",\"status\":\"Status\",\"action\":\"Açao\"}},\"UI Elements\":\"Elementos da IU\",\"Forms & Tables\":\"Formulários e tabelas\",\"Pages\":\"Páginas\",\"Charts & Maps\":\"Gráficos e mapas\",\"Others\":\"Outras\",\"Typography\":\"Tipografia\",\"Colors\":\"Cores\",\"Feather\":\"Pena\",\"Cards\":\"Cartas\",\"Basic\":\"Básico\",\"Advance\":\"Avançar\",\"Statistic\":\"Estatística\",\"Analytic\":\"Analítico\",\"Card Action\":\"Ação do cartão\",\"Components\":\"Componentes\",\"Alert\":\"Alerta\",\"Aspect\":\"Aspecto\",\"Avatar\":\"Avatar\",\"Badge\":\"Distintivo\",\"Breadcrumb\":\"Migalhas de pão\",\"Button\":\"Botão\",\"Button Group\":\"Grupo de Botão\",\"Button Toolbar\":\"Barra de ferramentas de botões\",\"Calendar\":\"Calendário\",\"Carousel\":\"Carrossel\",\"Collapse\":\"Colapso\",\"Dropdown\":\"Suspenso\",\"Embed\":\"Embutir\",\"Image\":\"Imagem\",\"List Group\":\"Grupo de Lista\",\"Media\":\"meios de comunicação\",\"Modal\":\"Modal\",\"Nav\":\"Nav\",\"Overlay\":\"Sobreposição\",\"Pagination\":\"Paginação\",\"Pagination Nav\":\"Nav de paginação\",\"Pill\":\"Comprimido\",\"Pill Badge\":\"Emblema de comprimido\",\"Popover\":\"Dar um pulo\",\"Progress\":\"Progresso\",\"Sidebar\":\"Barra Lateral\",\"spinner\":\"spinner\",\"Tab\":\"Aba\",\"Time\":\"Tempo\",\"Toasts\":\"Torradas\",\"Tooltip\":\"Dica de ferramenta\",\"Extensions\":\"Extensões\",\"Sweet Alert\":\"Alerta Doce\",\"Quill Editor\":\"Editor de pena\",\"Drag & Drop\":\"Arraste e solte\",\"Swiper\":\"Swiper\",\"Clipboard\":\"Prancheta\",\"Video Player\":\"Video Player\",\"Context Menu\":\"Menu contextual\",\"Toastification\":\"Toastification\",\"I18n\":\"I18n\",\"Slider\":\"Slider\",\"Tour\":\"Tour\",\"Auto Suggest\":\"Sugestão Automática\",\"Tree\":\"Árvore\",\"Date Time Picker\":\"Selecionador de data e hora\",\"Vue Select\":\"Vue Select\",\"Forms Elements\":\"Elementos de formulários\",\"Select\":\"Selecione\",\"Switch\":\"Interruptor\",\"Checkbox\":\"Caixa de seleção\",\"Radio\":\"Rádio\",\"Input\":\"Entrada\",\"Textarea\":\"Textarea\",\"Spinbutton\":\"Spinbutton\",\"Input Group\":\"Grupo de Entrada\",\"Form Rating\":\"Avaliação do formulário\",\"Form Tag\":\"Tag de formulário\",\"Form Datepicker\":\"Selecionador de data do formulário\",\"Form Timepicker\":\"Timepicker de formulário\",\"File Input\":\"Entrada de arquivo\",\"Input Mask\":\"Máscara de entrada\",\"Form Layout\":\"Layout do formulário\",\"Form Wizard\":\"Assistente de Formulários\",\"Form Validation\":\"Validação de Formulário\",\"Form Repeater\":\"Repetidor de Formulário\",\"BS Table\":\"Mesa BS\",\"Good Table\":\"Boa mesa\",\"Charts\":\"Gráficos\",\"ApexChart\":\"Apex Chart\",\"Chartjs\":\"Chartjs\",\"Echart\":\"Echart\",\"Leaflet\":\"Folheto\",\"Profile\":\"Perfil\",\"Account Settings\":\"Configurações da conta\",\"Faq\":\"Perguntas frequentes\",\"Knowledge Base\":\"Base de Conhecimento\",\"Pricing\":\"Preços\",\"Blog\":\"Blog\",\"List\":\"Lista\",\"Detail\":\"Detalhe\",\"Edit\":\"Editar\",\"Search\":\"Pesquisa\",\"Menu Levels\":\"Níveis de Menu\",\"Menu Level2.1\":\"Nível de Menu 2.1\",\"Menu Level2.2\":\"Nível de Menu 2.2\",\"Menu Level3.1\":\"Nível de Menu 3.1\",\"Menu Level3.2\":\"Nível de Menu 3.2\",\"Disabled Menu\":\"Menu Desabilitado\",\"Support\":\"Apoio, suporte\",\"Raise Support\":\"Levante o Suporte\",\"Documentation\":\"Documentação\",\"Dashboards\":\"Dashboards\",\"Apps & Pages\":\"Aplicativos e páginas\",\"Email\":\"O email\",\"Chat\":\"Bate-papo\",\"Todo\":\"Façam\",\"Invoice\":\"Fatura\",\"Preview\":\"Antevisão\",\"Add\":\"Adicionar\",\"eCommerce\":\"comércio eletrônico\",\"Shop\":\"fazer compras\",\"Details\":\"Detalhes\",\"Wishlist\":\"Lista de Desejos\",\"Checkout\":\"Verificação de saída\",\"User\":\"Do utilizador\",\"View\":\"Visão\",\"Authentication\":\"Autenticação\",\"Login v1\":\"Login v1\",\"Login v2\":\"Login v2\",\"Register v1\":\"Registrar v1\",\"Register v2\":\"Registrar v2\",\"Forget Password v1\":\"Esquecer a senha v1\",\"Forget Password v2\":\"Esquecer a senha v2\",\"Forgot Password v1\":\"Esquecer a senha v1\",\"Forgot Password v2\":\"Esquecer a senha v2\",\"Reset Password v1\":\"Redefinir senha v1\",\"Reset Password v2\":\"Redefinir senha v2\",\"Miscellaneous\":\"Diversos\",\"Coming Soon\":\"Em breve\",\"Not Authorized\":\"Não autorizado\",\"Under Maintenance\":\"Em manutenção\",\"Error\":\"Erro\",\"Statistics\":\"Estatisticas\",\"Analytics\":\"Analytics\",\"Card Actions\":\"Ações do cartão\",\"Media Objects\":\"Objetos de mídia\",\"Timeline\":\"Linha do tempo\",\"Apex Chart\":\"Apex Chart\",\"Access Control\":\"Controle de acesso\",\"Menu Level 2.1\":\"Nível de Menu 2.1\",\"Menu Level 2.2\":\"Nível de Menu 2.2\",\"Menu Level 3.1\":\"Nível de Menu 3.1\",\"Menu Level 3.2\":\"Nível de Menu 3.2\",\"Apps\":\"Apps\",\"User Interface\":\"Interface de usuário\",\"Mail Templates\":\"Modelos de Correio\",\"Welcome\":\"Bem-vinda\",\"Reset Password\":\"Redefinir senha\",\"Verify Email\":\"Verificar e-mail\",\"Deactivate Account\":\"Desativar conta\",\"Promotional\":\"Promocional\",\"Page Layouts\":\"Layouts de página\",\"Collapsed Menu\":\"Menu recolhido\",\"Layout Boxed\":\"Layout em caixa\",\"Without Menu\":\"Sem Menu\",\"Layout Empty\":\"Layout Vazio\",\"Layout Blank\":\"Layout em branco\"}");

/***/ }),

/***/ "./resources/js/src/libs/portal-vue.js":
/*!*********************************************!*\
  !*** ./resources/js/src/libs/portal-vue.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! portal-vue */ "./node_modules/portal-vue/dist/portal-vue.common.js");
/* harmony import */ var portal_vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(portal_vue__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(portal_vue__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./resources/js/src/libs/sweet-alerts.js":
/*!***********************************************!*\
  !*** ./resources/js/src/libs/sweet-alerts.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-sweetalert2 */ "./node_modules/vue-sweetalert2/dist/index.js");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_sweetalert2__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./resources/js/src/libs/toastification.js":
/*!*************************************************!*\
  !*** ./resources/js/src/libs/toastification.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_toastification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-toastification */ "./node_modules/vue-toastification/dist/esm/index.js");
/* harmony import */ var _core_scss_vue_libs_toastification_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/scss/vue/libs/toastification.scss */ "./resources/js/src/@core/scss/vue/libs/toastification.scss");
/* harmony import */ var _core_scss_vue_libs_toastification_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_scss_vue_libs_toastification_scss__WEBPACK_IMPORTED_MODULE_2__);

 // Toast Notification Component Styles


/**
 * NOTE: If you are using other transition them make sure to import it in `src/@core/scss/vue/libs/notification.scss` from it's source
 */

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_toastification__WEBPACK_IMPORTED_MODULE_1__["default"], {
  hideProgressBar: true,
  closeOnClick: false,
  closeButton: false,
  icon: false,
  timeout: 3000,
  transition: 'Vue-Toastification__fade'
});

/***/ }),

/***/ "./resources/js/src/libs/tour.js":
/*!***************************************!*\
  !*** ./resources/js/src/libs/tour.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_tour__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-tour */ "./node_modules/vue-tour/dist/vue-tour.umd.js");
/* harmony import */ var vue_tour__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_tour__WEBPACK_IMPORTED_MODULE_1__);


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_tour__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./resources/js/src/libs/vue-select.js":
/*!*********************************************!*\
  !*** ./resources/js/src/libs/vue-select.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);

 // Set the components prop default to return our fresh components

vue_select__WEBPACK_IMPORTED_MODULE_1___default.a.props.components["default"] = function () {
  return {
    Deselect: {
      render: function render(h) {
        return h('feather-icon', {
          props: {
            size: '14',
            icon: 'XIcon'
          }
        });
      }
    },
    OpenIndicator: {
      render: function render(h) {
        return h('feather-icon', {
          props: {
            size: '15',
            icon: 'ChevronDownIcon'
          },
          "class": 'open-indicator'
        });
      }
    }
  };
};

vue__WEBPACK_IMPORTED_MODULE_0___default.a.component(vue_select__WEBPACK_IMPORTED_MODULE_1___default.a);

/***/ }),

/***/ "./resources/js/src/main.js":
/*!**********************************!*\
  !*** ./resources/js/src/main.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _libs_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/libs/i18n */ "./resources/js/src/libs/i18n/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./router */ "./resources/js/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./resources/js/src/store/index.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.vue */ "./resources/js/src/App.vue");
/* harmony import */ var _global_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global-components */ "./resources/js/src/global-components.js");
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @axios */ "./resources/js/src/libs/axios.js");
/* harmony import */ var _libs_acl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/libs/acl */ "./resources/js/src/libs/acl/index.js");
/* harmony import */ var _libs_portal_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/libs/portal-vue */ "./resources/js/src/libs/portal-vue.js");
/* harmony import */ var _libs_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/libs/clipboard */ "./resources/js/src/libs/clipboard.js");
/* harmony import */ var _libs_toastification__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/libs/toastification */ "./resources/js/src/libs/toastification.js");
/* harmony import */ var _libs_sweet_alerts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/libs/sweet-alerts */ "./resources/js/src/libs/sweet-alerts.js");
/* harmony import */ var _libs_vue_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/libs/vue-select */ "./resources/js/src/libs/vue-select.js");
/* harmony import */ var _libs_tour__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/libs/tour */ "./resources/js/src/libs/tour.js");
/* harmony import */ var _fake_db_db__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/@fake-db/db */ "./resources/js/src/@fake-db/db.js");






 // Global Components

 // 3rd party plugins








 // Axios Mock Adapter

 // BSV Plugin Registration

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["ToastPlugin"]);
vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["ModalPlugin"]); // Composition API

vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["default"]); // Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard

__webpack_require__(/*! @core/assets/fonts/feather/iconfont.css */ "./resources/js/src/@core/assets/fonts/feather/iconfont.css"); // For form-wizard
// import core styles


__webpack_require__(/*! @core/scss/core.scss */ "./resources/js/src/@core/scss/core.scss"); // import assets styles


__webpack_require__(/*! @/assets/scss/style.scss */ "./resources/js/src/assets/scss/style.scss");

vue__WEBPACK_IMPORTED_MODULE_0___default.a.config.productionTip = false;
new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
  router: _router__WEBPACK_IMPORTED_MODULE_4__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_5__["default"],
  i18n: _libs_i18n__WEBPACK_IMPORTED_MODULE_3__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./resources/js/src/router/index.js":
/*!******************************************!*\
  !*** ./resources/js/src/router/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _libs_acl_routeProtection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/libs/acl/routeProtection */ "./resources/js/src/libs/acl/routeProtection.js");
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/auth/utils */ "./resources/js/src/auth/utils.js");
/* harmony import */ var _routes_dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/dashboard */ "./resources/js/src/router/routes/dashboard.js");
/* harmony import */ var _routes_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/pages */ "./resources/js/src/router/routes/pages.js");



 // Routes





vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]);
var router = new vue_router__WEBPACK_IMPORTED_MODULE_3__["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
    path: '/',
    redirect: {
      name: 'dashboard'
    }
  }].concat(Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_routes_dashboard__WEBPACK_IMPORTED_MODULE_6__["default"]), Object(C_Users_Administrator_Desktop_bot_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_routes_pages__WEBPACK_IMPORTED_MODULE_7__["default"]), [{
    path: '*',
    redirect: 'error-404'
  }])
});
router.beforeEach(function (to, _, next) {
  var isLoggedIn = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_5__["isUserLoggedIn"])();

  if (!Object(_libs_acl_routeProtection__WEBPACK_IMPORTED_MODULE_4__["canNavigate"])(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({
      name: 'auth-login'
    }); // If logged in => not authorized

    return next({
      name: 'misc-not-authorized'
    });
  } // Redirect if logged in


  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    var userData = Object(_auth_utils__WEBPACK_IMPORTED_MODULE_5__["getUserData"])();
    next(Object(_auth_utils__WEBPACK_IMPORTED_MODULE_5__["getHomeRouteForLoggedInUser"])(userData ? userData.role : null));
  }

  return next();
}); // ? For splash screen
// Remove afterEach hook if you are not using splash screen

router.afterEach(function () {
  // Remove initial loading
  var appLoading = document.getElementById('loading-bg');

  if (appLoading) {
    appLoading.style.display = 'none';
  }
});
/* harmony default export */ __webpack_exports__["default"] = (router);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/src/router/routes/dashboard.js":
/*!*****************************************************!*\
  !*** ./resources/js/src/router/routes/dashboard.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/dashboard/',
  name: 'dashboard',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/views/dashboard/homepage/Index.vue */ "./resources/js/src/views/dashboard/homepage/Index.vue"));
  }
}, {
  path: '/dashboard/roles',
  name: 'dashboard',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! @/views/dashboard/roles/Index.vue */ "./resources/js/src/views/dashboard/roles/Index.vue"));
  }
}]);

/***/ }),

/***/ "./resources/js/src/router/routes/pages.js":
/*!*************************************************!*\
  !*** ./resources/js/src/router/routes/pages.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/error-404',
  name: 'error-404',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! @/views/pages/error/Error404.vue */ "./resources/js/src/views/pages/error/Error404.vue"));
  },
  meta: {
    layout: 'full',
    resource: 'Auth',
    action: 'read'
  }
}, {
  path: '/login',
  name: 'auth-login',
  component: function component() {
    return __webpack_require__.e(/*! import() */ 9).then(__webpack_require__.bind(null, /*! @/views/pages/login/index.vue */ "./resources/js/src/views/pages/login/index.vue"));
  },
  meta: {
    layout: 'full',
    resource: 'Auth',
    redirectIfLoggedIn: true
  }
}]);

/***/ }),

/***/ "./resources/js/src/store/app-config/index.js":
/*!****************************************************!*\
  !*** ./resources/js/src/store/app-config/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    layout: {
      isRTL: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.isRTL,
      skin: localStorage.getItem('vuexy-skin') || _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.skin,
      routerTransition: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.routerTransition,
      type: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.type,
      contentWidth: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.contentWidth,
      menu: {
        hidden: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.menu.hidden
      },
      navbar: {
        type: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.navbar.type,
        backgroundColor: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.navbar.backgroundColor
      },
      footer: {
        type: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.footer.type
      }
    }
  },
  getters: {},
  mutations: {
    TOGGLE_RTL: function TOGGLE_RTL(state) {
      state.layout.isRTL = !state.layout.isRTL;
      document.documentElement.setAttribute('dir', state.layout.isRTL ? 'rtl' : 'ltr');
    },
    UPDATE_SKIN: function UPDATE_SKIN(state, skin) {
      state.layout.skin = skin; // Update value in localStorage

      localStorage.setItem('vuexy-skin', skin); // Update DOM for dark-layout

      if (skin === 'dark') document.body.classList.add('dark-layout');else if (document.body.className.match('dark-layout')) document.body.classList.remove('dark-layout');
    },
    UPDATE_ROUTER_TRANSITION: function UPDATE_ROUTER_TRANSITION(state, val) {
      state.layout.routerTransition = val;
    },
    UPDATE_LAYOUT_TYPE: function UPDATE_LAYOUT_TYPE(state, val) {
      state.layout.type = val;
    },
    UPDATE_CONTENT_WIDTH: function UPDATE_CONTENT_WIDTH(state, val) {
      state.layout.contentWidth = val;
    },
    UPDATE_NAV_MENU_HIDDEN: function UPDATE_NAV_MENU_HIDDEN(state, val) {
      state.layout.menu.hidden = val;
    },
    UPDATE_NAVBAR_CONFIG: function UPDATE_NAVBAR_CONFIG(state, obj) {
      Object.assign(state.layout.navbar, obj);
    },
    UPDATE_FOOTER_CONFIG: function UPDATE_FOOTER_CONFIG(state, obj) {
      Object.assign(state.layout.footer, obj);
    }
  },
  actions: {}
});

/***/ }),

/***/ "./resources/js/src/store/app/index.js":
/*!*********************************************!*\
  !*** ./resources/js/src/store/app/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false
  },
  getters: {
    currentBreakPoint: function currentBreakPoint(state) {
      var windowWidth = state.windowWidth;
      if (windowWidth >= _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].xl) return 'xl';
      if (windowWidth >= _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].lg) return 'lg';
      if (windowWidth >= _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].md) return 'md';
      if (windowWidth >= _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].sm) return 'sm';
      return 'xs';
    }
  },
  mutations: {
    UPDATE_WINDOW_WIDTH: function UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val;
    },
    TOGGLE_OVERLAY: function TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay;
    }
  },
  actions: {}
});

/***/ }),

/***/ "./resources/js/src/store/index.js":
/*!*****************************************!*\
  !*** ./resources/js/src/store/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./resources/js/src/store/app/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-config */ "./resources/js/src/store/app-config/index.js");
/* harmony import */ var _vertical_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vertical-menu */ "./resources/js/src/store/vertical-menu/index.js");

 // Modules




vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    app: _app__WEBPACK_IMPORTED_MODULE_2__["default"],
    appConfig: _app_config__WEBPACK_IMPORTED_MODULE_3__["default"],
    verticalMenu: _vertical_menu__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  strict: process.env.DEV
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./resources/js/src/store/vertical-menu/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/store/vertical-menu/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    isVerticalMenuCollapsed: _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeConfig"].layout.menu.isCollapsed
  },
  getters: {},
  mutations: {
    UPDATE_VERTICAL_MENU_COLLAPSED: function UPDATE_VERTICAL_MENU_COLLAPSED(state, val) {
      state.isVerticalMenuCollapsed = val;
    }
  },
  actions: {}
});

/***/ }),

/***/ "./resources/js/themeConfig.js":
/*!*************************************!*\
  !*** ./resources/js/themeConfig.js ***!
  \*************************************/
/*! exports provided: $themeColors, $themeBreakpoints, $themeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$themeColors", function() { return $themeColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$themeBreakpoints", function() { return $themeBreakpoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$themeConfig", function() { return $themeConfig; });
// Theme Colors
// Initially this will be blank. Later on when app is initialized we will assign bootstrap colors to this from CSS variables.
var $themeColors = {}; // App Breakpoints
// Initially this will be blank. Later on when app is initialized we will assign bootstrap breakpoints to this object from CSS variables.

var $themeBreakpoints = {}; // APP CONFIG

var $themeConfig = {
  app: {
    appName: 'Vuexy',
    // Will update name in navigation menu (Branding)
    // eslint-disable-next-line global-require
    appLogoImage: __webpack_require__(/*! @/assets/images/logo/logo.svg */ "./resources/js/src/assets/images/logo/logo.svg") // Will update logo in navigation menu (Branding)

  },
  layout: {
    isRTL: false,
    skin: 'light',
    // light, dark, bordered, semi-dark
    routerTransition: 'zoom-fade',
    // zoom-fade, slide-fade, fade-bottom, fade, zoom-out, none
    type: 'vertical',
    // vertical, horizontal
    contentWidth: 'full',
    // full, boxed
    menu: {
      hidden: false,
      isCollapsed: false
    },
    navbar: {
      // ? For horizontal menu, navbar type will work for navMenu type
      type: 'floating',
      // static , sticky , floating, hidden
      backgroundColor: '' // BS color options [primary, success, etc]

    },
    footer: {
      type: 'static' // static, sticky, hidden

    },
    customizer: true,
    enableScrollToTop: true
  }
};

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/dist/cjs.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n14 │ @import 'bootstrap/scss/functions'; // Bootstrap core function\r\n   │         ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   ╵\n  resources\\js\\src\\@core\\scss\\base\\bootstrap-extended\\_include.scss 14:9  @import\n  resources\\js\\src\\@core\\scss\\base\\bootstrap.scss 10:9                    @import\n  resources\\js\\src\\@core\\scss\\core.scss 2:9                               @import\n  resources\\scss\\app.scss 1:9                                             root stylesheet\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass-loader\\dist\\index.js:62:7\n    at Function.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:92646:16)\n    at _render_closure1.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:81147:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:27268:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25818:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:26116:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4539:77)\n    at _Future._completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25948:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25602:12)\n    at Object._asyncRethrow (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4338:17)\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:12858:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4363:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25623:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25615:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:27268:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25818:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:26116:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4539:77)\n    at _Future._completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25948:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25602:12)\n    at Object._asyncRethrow (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4338:17)\n    at C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:18047:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4363:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25623:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25615:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:27268:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25818:19)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:26116:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4539:77)\n    at _Future._completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25948:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:25602:12)\n    at Object._asyncRethrow (C:\\Users\\Administrator\\Desktop\\bot\\node_modules\\sass\\sass.dart.js:4338:17)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/scss/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Administrator\Desktop\bot\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\bot\resources\scss\app.scss */"./resources/scss/app.scss");


/***/ })

/******/ });