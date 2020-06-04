/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
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
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/nav/container.hawa":
/*!***************************************!*\
  !*** ./components/nav/container.hawa ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/map */ "./packages/map/dist/index.js");
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_3__);

		
		
		
		
		

		

		
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><span></span></div>';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["parseContext"])(context);
			
			let $emit, $id;
			// code
			let tick = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(24);

let test = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getProp"])($props, "test", null);

let value = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getProp"])($props, "value", null);

let classList = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick, tick, test], () => {
  return {
    red: tick() % 2 == 0,
    green: tick() % 3 == 0,
    some: test() === null
  };
});

function change() {
  $emit('input', 2);
}

function mounted() {
  console.log($id, 'container mounted'); // console.log('default value: ', value()); 
}

function unmounted() {
  console.log($id, 'container unmounted');
}

let $hooks = {
  mounted: [mounted],
  unmounted: [unmounted]
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["call"])($customInit, $hooks, _el$2, render);

$id = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["createComponent"])(_el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_3__["createHooks"])($hooks, $id);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["attrs"])(_el$2, render, {
  "class": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([classList, tick], () => {
    return [classList(), {
      active: tick() === 1
    }];
  }),
  "style": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick], () => {
    return [{
      fontSize: tick() + 'px'
    }];
  })
});

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["events"])(_el$2, {
  "click": function (event) {
    return change();
  }
});

let _el$3 = _el$2.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["slot"])($slots, "default", _el$3, render, node => {});

return {
  node: render ? _el$1 : _el$2,
  id: $id
};
		}

		/* harmony default export */ __webpack_exports__["default"] = (render);
		

/***/ }),

/***/ "./components/page.hawa":
/*!******************************!*\
  !*** ./components/page.hawa ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/map */ "./packages/map/dist/index.js");
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/directives */ "./packages/directives/dist/index.js");
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_directives__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__);

		
		
		
		
		

		

		
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><!----><input type="text"></input>{{ vv }}<!----></div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<!---->';

let _tpl$3 = document.createElement("template");
_tpl$3.innerHTML = 'test {{ item }}';

let _tpl$4 = document.createElement("template");
_tpl$4.innerHTML = '<div>if show test</div><span>some more</span>';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["parseContext"])(context);
			
			let $emit, $id;
			// code
			let items = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(Array.from({
  length: 3
}, (_, i) => i));
let vv = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])('test');

function eventd() {
  alert(1);
}

function mounted() {
  console.log('page mounted');
  setTimeout(() => {
    items(Array.from({
      length: 2
    }, (_, i) => i));
  }, 1000);
}

function unmounted() {
  console.log('page unmounted');
}

let $hooks = {
  mounted: [mounted],
  unmounted: [unmounted]
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["call"])($customInit, $hooks, _el$2, render);

$id = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["createComponent"])(_el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__["createHooks"])($hooks, $id);

let _el$3 = _el$2.firstChild;

let _el$9 = Object(_hawa_map__WEBPACK_IMPORTED_MODULE_1__["map"])(_el$3, Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items], () => {
  return items();
}), (item, key) => {
  return item;
}, (node, render, _eachNodeKey$, item, key) => {
  let _el$4 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

  let _el$5 = render ? _el$4.firstChild : _el$4;

  let _el$6 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__["default"], _el$5, render, {
    $customInit: ($hooks, node, render) => {
      Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["setRef"])($refs, node, "test");

      Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["events"])(node, {
        "input": function (event) {
          return eventd();
        }
      });

      Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["setKey"])(_eachNodeKey$, node, render);
    },
    $slots: {
      "default": () => {
        let _el$7 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$3, node, render);

        let _el$8 = render ? _el$7.firstChild : _el$7;

        Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
          _el$8.nodeValue = `test ${item}`;
        }, !render);
        return render ? _el$7 : _el$8;
      }
    }
  });

  return render ? _el$4 : _el$6;
}, render);

let _el$10 = _el$9.nextSibling;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, _hawa_directives__WEBPACK_IMPORTED_MODULE_2__["bind"], _el$10, {}, vv, render);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["setRef"])($refs, _el$10, "input");

let _el$11 = _el$10.nextSibling;
Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([vv], () => {
  _el$11.nodeValue = `${vv()}`;
}, !render);
let _el$12 = _el$11.nextSibling;

let _el$18 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["statement"])(_el$12, render, [vv], () => {
  return vv() == 'test';
}, (node, render) => {
  let _el$13 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$4, _el$12, render);

  let _el$14 = render ? _el$13.firstChild : _el$13;

  let _el$15 = _el$14.firstChild;
  let _el$16 = _el$14.nextSibling;
  let _el$17 = _el$16.firstChild;
  return render ? _el$13 : _el$16;
});

return {
  node: render ? _el$1 : _el$2,
  id: $id
};
		}

		/* harmony default export */ __webpack_exports__["default"] = (render);
		

/***/ }),

/***/ "./components/page.hawa.css":
/*!**********************************!*\
  !*** ./components/page.hawa.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/page.hawa?type=style":
/*!*****************************************!*\
  !*** ./components/page.hawa?type=style ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page.hawa.css */ "./components/page.hawa.css");
/* harmony import */ var _Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./test/c.js":
/*!*******************!*\
  !*** ./test/c.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _page = _interopRequireDefault(__webpack_require__(/*! ../components/page.hawa */ "./components/page.hawa"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./test/time.js"));

var _lifecycle = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StaticComponent from '../components/static.hawa'
var layout = document.getElementById('layout');
console.log('start render');
layout.innerHTML = '';
(0, _time.default)('render');
var c = (0, _page.default)();
var ID = c.id;
(0, _lifecycle.dispatchHook)(ID, 'mounted');
layout.appendChild(c.node);
(0, _time.default)('render');
setTimeout(function () {
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  (0, _lifecycle.findAndDispatchHook)(layout, 'unmounted');
  console.log('start hydration');
  (0, _time.default)('hydrate');
  var c = (0, _page.default)(null, layout.firstChild);
  (0, _lifecycle.dispatchHook)(c.id, 'mounted');
  (0, _time.default)('hydrate');
}, 300);

/***/ }),

/***/ "./test/time.js":
/*!**********************!*\
  !*** ./test/time.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = time;
var times = {};

function time(name) {
  var now = new Date().getTime();

  if (typeof times[name] === 'undefined') {
    times[name] = now;
    return times[name];
  }

  console.log("[ tb " + name + " ]", now - times[name], 'ms');
  delete times[name];
}

/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./test/c.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./test/c.js */"./test/c.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS5oYXdhPzQwYmIiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImMiLCJJRCIsImlkIiwiYXBwZW5kQ2hpbGQiLCJub2RlIiwic2V0VGltZW91dCIsInRtcCIsImZpcnN0Q2hpbGQiLCJ0aW1lcyIsInRpbWUiLCJuYW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtR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LG1CQUFjLElBQWQsRUFBb0JOLE1BQU0sQ0FBQ2EsVUFBM0IsQ0FBUjtBQUNBLCtCQUFhUCxDQUFDLENBQUNFLEVBQWYsRUFBbUIsU0FBbkI7QUFFQSxxQkFBSyxTQUFMO0FBQ0EsQ0FaUyxFQVlQLEdBWk8sQ0FBVixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkEsSUFBSU0sS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjQyxJQUFkLEVBQ2Y7QUFDQyxNQUFJQyxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9MLEtBQUssQ0FBQ0UsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDRixTQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0gsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQTs7QUFFRGIsU0FBTyxDQUFDQyxHQUFSLFdBQW9CWSxJQUFwQixTQUE4QkMsR0FBRyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRixLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXHRcdGltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXHRcdFxuXHRcdFxuXHRcdFxuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdFx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0XHRcdHNsb3QgYXMgX3Nsb3QkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGNyZWF0ZUhvb2tzIGFzIF9jcmVhdGVIb29rcyQsXG5cdFx0XHRkaXNwYXRjaEhvb2sgYXMgX2Rpc3BhdGNoSG9vayQsXG5cdFx0fSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+JztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdCwgJGlkO1xuXHRcdFx0Ly8gY29kZVxuXHRcdFx0bGV0IHRpY2sgPSBvYnNlcnZhYmxlKDI0KTtcblxubGV0IHRlc3QgPSBfZ2V0UHJvcCQoJHByb3BzLCBcInRlc3RcIiwgbnVsbCk7XG5cbmxldCB2YWx1ZSA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidmFsdWVcIiwgbnVsbCk7XG5cbmxldCBjbGFzc0xpc3QgPSBjb21wdXRlZChbdGljaywgdGljaywgdGVzdF0sICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZWQ6IHRpY2soKSAlIDIgPT0gMCxcbiAgICBncmVlbjogdGljaygpICUgMyA9PSAwLFxuICAgIHNvbWU6IHRlc3QoKSA9PT0gbnVsbFxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZSgpIHtcbiAgJGVtaXQoJ2lucHV0JywgMik7XG59XG5cbmZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gIGNvbnNvbGUubG9nKCRpZCwgJ2NvbnRhaW5lciBtb3VudGVkJyk7IC8vIGNvbnNvbGUubG9nKCdkZWZhdWx0IHZhbHVlOiAnLCB2YWx1ZSgpKTsgXG59XG5cbmZ1bmN0aW9uIHVubW91bnRlZCgpIHtcbiAgY29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIHVubW91bnRlZCcpO1xufVxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBbbW91bnRlZF0sXG4gIHVubW91bnRlZDogW3VubW91bnRlZF1cbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbiRpZCA9IF9jcmVhdGVDb21wb25lbnQkKF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcywgJGlkKTtcblxuX21ha2VBdHRycyQoX2VsJDIsIHJlbmRlciwge1xuICBcImNsYXNzXCI6IGNvbXB1dGVkKFtjbGFzc0xpc3QsIHRpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFtjbGFzc0xpc3QoKSwge1xuICAgICAgYWN0aXZlOiB0aWNrKCkgPT09IDFcbiAgICB9XTtcbiAgfSksXG4gIFwic3R5bGVcIjogY29tcHV0ZWQoW3RpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBmb250U2l6ZTogdGljaygpICsgJ3B4J1xuICAgIH1dO1xuICB9KVxufSk7XG5cbl9tYWtlRXZlbnRzJChfZWwkMiwge1xuICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBjaGFuZ2UoKTtcbiAgfVxufSk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cbl9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkMywgcmVuZGVyLCBub2RlID0+IHt9KTtcblxucmV0dXJuIHtcbiAgbm9kZTogcmVuZGVyID8gX2VsJDEgOiBfZWwkMixcbiAgaWQ6ICRpZFxufTtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBtYXAgYXMgX2VhY2gkIH0gZnJvbSAnQGhhd2EvbWFwJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnQGhhd2EvZGlyZWN0aXZlcyc7XG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cdFx0aW1wb3J0IF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2FcIjtcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGRpcmVjdGl2ZSBhcyBfZGlyZWN0aXZlJCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdGVtaXQgYXMgX2VtaXQkLFxuXHRcdFx0Y2FsbCBhcyBfY2FsbCQsXG5cdFx0XHRjcmVhdGVDb21wb25lbnQgYXMgX2NyZWF0ZUNvbXBvbmVudCQsXG5cdFx0XHRwYXJzZUNvbnRleHQsXG5cdFx0XHRsb2FkQ29tcG9uZW50LFxuXHRcdH0gZnJvbSAnQGhhd2EvcmVuZGVyJztcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRjcmVhdGVIb29rcyBhcyBfY3JlYXRlSG9va3MkLFxuXHRcdFx0ZGlzcGF0Y2hIb29rIGFzIF9kaXNwYXRjaEhvb2skLFxuXHRcdH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PCEtLS0tPjxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+e3sgdnYgfX08IS0tLS0+PC9kaXY+JztcblxubGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMi5pbm5lckhUTUwgPSAnPCEtLS0tPic7XG5cbmxldCBfdHBsJDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDMuaW5uZXJIVE1MID0gJ3Rlc3Qge3sgaXRlbSB9fSc7XG5cbmxldCBfdHBsJDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDQuaW5uZXJIVE1MID0gJzxkaXY+aWYgc2hvdyB0ZXN0PC9kaXY+PHNwYW4+c29tZSBtb3JlPC9zcGFuPic7XG5cblxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAkY3VzdG9tSW5pdCB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XG5cdFx0XHRsZXQgJGVtaXQsICRpZDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdGxldCBpdGVtcyA9IG9ic2VydmFibGUoQXJyYXkuZnJvbSh7XG4gIGxlbmd0aDogM1xufSwgKF8sIGkpID0+IGkpKTtcbmxldCB2diA9IG9ic2VydmFibGUoJ3Rlc3QnKTtcblxuZnVuY3Rpb24gZXZlbnRkKCkge1xuICBhbGVydCgxKTtcbn1cblxuZnVuY3Rpb24gbW91bnRlZCgpIHtcbiAgY29uc29sZS5sb2coJ3BhZ2UgbW91bnRlZCcpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpdGVtcyhBcnJheS5mcm9tKHtcbiAgICAgIGxlbmd0aDogMlxuICAgIH0sIChfLCBpKSA9PiBpKSk7XG4gIH0sIDEwMDApO1xufVxuXG5mdW5jdGlvbiB1bm1vdW50ZWQoKSB7XG4gIGNvbnNvbGUubG9nKCdwYWdlIHVubW91bnRlZCcpO1xufVxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBbbW91bnRlZF0sXG4gIHVubW91bnRlZDogW3VubW91bnRlZF1cbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbiRpZCA9IF9jcmVhdGVDb21wb25lbnQkKF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcywgJGlkKTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxubGV0IF9lbCQ5ID0gX2VhY2gkKF9lbCQzLCBjb21wdXRlZChbaXRlbXNdLCAoKSA9PiB7XG4gIHJldHVybiBpdGVtcygpO1xufSksIChpdGVtLCBrZXkpID0+IHtcbiAgcmV0dXJuIGl0ZW07XG59LCAobm9kZSwgcmVuZGVyLCBfZWFjaE5vZGVLZXkkLCBpdGVtLCBrZXkpID0+IHtcbiAgbGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG4gIGxldCBfZWwkNiA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkNSwgcmVuZGVyLCB7XG4gICAgJGN1c3RvbUluaXQ6ICgkaG9va3MsIG5vZGUsIHJlbmRlcikgPT4ge1xuICAgICAgX3NldFJlZiQoJHJlZnMsIG5vZGUsIFwidGVzdFwiKTtcblxuICAgICAgX21ha2VFdmVudHMkKG5vZGUsIHtcbiAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICByZXR1cm4gZXZlbnRkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBfc2V0S2V5JChfZWFjaE5vZGVLZXkkLCBub2RlLCByZW5kZXIpO1xuICAgIH0sXG4gICAgJHNsb3RzOiB7XG4gICAgICBcImRlZmF1bHRcIjogKCkgPT4ge1xuICAgICAgICBsZXQgX2VsJDcgPSBnZXROb2RlKF90cGwkMywgbm9kZSwgcmVuZGVyKTtcblxuICAgICAgICBsZXQgX2VsJDggPSByZW5kZXIgPyBfZWwkNy5maXJzdENoaWxkIDogX2VsJDc7XG5cbiAgICAgICAgc3Vic2NyaWJlKFtdLCAoKSA9PiB7XG4gICAgICAgICAgX2VsJDgubm9kZVZhbHVlID0gYHRlc3QgJHtpdGVtfWA7XG4gICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDcgOiBfZWwkODtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ2O1xufSwgcmVuZGVyKTtcblxubGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG5fZGlyZWN0aXZlJCgkaG9va3MsIGJpbmQsIF9lbCQxMCwge30sIHZ2LCByZW5kZXIpO1xuXG5fc2V0UmVmJCgkcmVmcywgX2VsJDEwLCBcImlucHV0XCIpO1xuXG5sZXQgX2VsJDExID0gX2VsJDEwLm5leHRTaWJsaW5nO1xuc3Vic2NyaWJlKFt2dl0sICgpID0+IHtcbiAgX2VsJDExLm5vZGVWYWx1ZSA9IGAke3Z2KCl9YDtcbn0sICFyZW5kZXIpO1xubGV0IF9lbCQxMiA9IF9lbCQxMS5uZXh0U2libGluZztcblxubGV0IF9lbCQxOCA9IF9zdGF0ZW1lbnQkKF9lbCQxMiwgcmVuZGVyLCBbdnZdLCAoKSA9PiB7XG4gIHJldHVybiB2digpID09ICd0ZXN0Jztcbn0sIChub2RlLCByZW5kZXIpID0+IHtcbiAgbGV0IF9lbCQxMyA9IGdldE5vZGUoX3RwbCQ0LCBfZWwkMTIsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQxNCA9IHJlbmRlciA/IF9lbCQxMy5maXJzdENoaWxkIDogX2VsJDEzO1xuXG4gIGxldCBfZWwkMTUgPSBfZWwkMTQuZmlyc3RDaGlsZDtcbiAgbGV0IF9lbCQxNiA9IF9lbCQxNC5uZXh0U2libGluZztcbiAgbGV0IF9lbCQxNyA9IF9lbCQxNi5maXJzdENoaWxkO1xuICByZXR1cm4gcmVuZGVyID8gX2VsJDEzIDogX2VsJDE2O1xufSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGlkOiAkaWRcbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9oYXdhL2NvbXBvbmVudHMvcGFnZS5oYXdhLmNzcyc7IiwiLy8gaW1wb3J0IFN0YXRpY0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpYy5oYXdhJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlLmhhd2EnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5pbXBvcnQge1xuXHRkaXNwYXRjaEhvb2ssXG5cdGZpbmRBbmREaXNwYXRjaEhvb2ssXG59IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxubGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuY29uc29sZS5sb2coJ3N0YXJ0IHJlbmRlcicpO1xubGF5b3V0LmlubmVySFRNTCA9ICcnO1xudGltZSgncmVuZGVyJyk7XG5cbmxldCBjID0gUGFnZUNvbXBvbmVudCgpO1xubGV0IElEID0gYy5pZDtcbmRpc3BhdGNoSG9vayhJRCwgJ21vdW50ZWQnKTtcbmxheW91dC5hcHBlbmRDaGlsZChjLm5vZGUpO1xuXG50aW1lKCdyZW5kZXInKTtcblxuXG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuXHRsZXQgdG1wID0gbGF5b3V0LmlubmVySFRNTDtcblx0bGF5b3V0LmlubmVySFRNTCA9IHRtcDtcblx0ZmluZEFuZERpc3BhdGNoSG9vayhsYXlvdXQsICd1bm1vdW50ZWQnKTtcblxuXHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0XG5cdGxldCBjID0gUGFnZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZCk7XG5cdGRpc3BhdGNoSG9vayhjLmlkLCAnbW91bnRlZCcpO1xuXHRcblx0dGltZSgnaHlkcmF0ZScpO1xufSwgMzAwKSIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=