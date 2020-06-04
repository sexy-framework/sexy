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
			
			let $emit;
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
} // function mounted()
// {
// 	// console.log('container mounted');
// 	// console.log('default value: ', value()); 
// }
// function unmounted()
// {
// 	console.log('container unmounted');	
// }


let $hooks = {
  mounted: [],
  unmounted: []
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["call"])($customInit, $hooks, _el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_3__["registerHooks"])($hooks, _el$2, render);

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

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["events"])(_el$2, render, {
  "click": function (event) {
    return change();
  }
});

let _el$3 = _el$2.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["slot"])($slots, "default", _el$3, render, node => {});

return render ? _el$1 : _el$2;
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
_tpl$1.innerHTML = '<div><!----><input type="text"></input>{{ vv }}</div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<!---->';

let _tpl$3 = document.createElement("template");
_tpl$3.innerHTML = 'test {{ item }}';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["parseContext"])(context);
			
			let $emit;
			// code
			let items = Array.from({
  length: 3
}, (_, i) => i);
let vv = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])('test');

function eventd() {
  alert(1);
} // function mounted()
// {
// }
// function unmounted()
// {
// }


let $hooks = {
  mounted: [],
  unmounted: []
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["call"])($customInit, $hooks, _el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__["registerHooks"])($hooks, _el$2, render);

let _el$3 = _el$2.firstChild;

let _el$9 = Object(_hawa_map__WEBPACK_IMPORTED_MODULE_1__["map"])(_el$3, items, (item, key) => {
  return item;
}, (node, render, _eachNodeKey$, item, key) => {
  let _el$4 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

  let _el$5 = render ? _el$4.firstChild : _el$4;

  let _el$6 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__["default"], _el$5, render, {
    $customInit: ($hooks, node, render) => {
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

  Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__["dispatchHook"])(_el$6, "mounted");

  Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["setRef"])($refs, _el$6, "test");

  Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["events"])(_el$6, render, {
    "input": function (event) {
      return eventd();
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
return render ? _el$1 : _el$2;
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
(0, _lifecycle.dispatchHook)(c.firstChild, 'mounted');
layout.appendChild(c);
(0, _time.default)('render');
setTimeout(function () {
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  (0, _lifecycle.dispatchHook)(layout.firstChild, 'unmounted');
  console.log('start hydration');
  (0, _time.default)('hydrate');
  var c = (0, _page.default)(null, layout.firstChild);
  (0, _lifecycle.dispatchHook)(c, 'mounted');
  layout.appendChild(c);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS5oYXdhPzQwYmIiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImMiLCJmaXJzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwidG1wIiwidGltZXMiLCJ0aW1lIiwibmFtZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztR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V0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0wsS0FBSyxDQUFDRSxJQUFELENBQVosS0FBdUIsV0FBMUIsRUFBdUM7QUFDdENGLFNBQUssQ0FBQ0UsSUFBRCxDQUFMLEdBQWNDLEdBQWQ7QUFDQSxXQUFPSCxLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBOztBQUVEVixTQUFPLENBQUNDLEdBQVIsV0FBb0JTLElBQXBCLFNBQThCQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0UsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9GLEtBQUssQ0FBQ0UsSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cdFx0aW1wb3J0IHsgbWFwIGFzIF9lYWNoJCB9IGZyb20gJ0BoYXdhL21hcCc7XG5cdFx0XG5cdFx0XG5cdFx0XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRzdGF0ZW1lbnQgYXMgX3N0YXRlbWVudCQsXG5cdFx0XHRkaXJlY3RpdmUgYXMgX2RpcmVjdGl2ZSQsXG5cdFx0XHRnZXROb2RlLFxuXHRcdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0XHRzZXRSZWYgYXMgX3NldFJlZiQsXG5cdFx0XHRzZXRLZXkgYXMgX3NldEtleSQsXG5cdFx0XHRlbWl0IGFzIF9lbWl0JCxcblx0XHRcdGNhbGwgYXMgX2NhbGwkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ0BoYXdhL3JlbmRlcic7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0cmVnaXN0ZXJIb29rcyBhcyBfcmVnaXN0ZXJIb29rcyQsXG5cdFx0XHRkaXNwYXRjaEhvb2sgYXMgX2Rpc3BhdGNoSG9vayQsXG5cdFx0fSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+JztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdGxldCB0aWNrID0gb2JzZXJ2YWJsZSgyNCk7XG5cbmxldCB0ZXN0ID0gX2dldFByb3AkKCRwcm9wcywgXCJ0ZXN0XCIsIG51bGwpO1xuXG5sZXQgdmFsdWUgPSBfZ2V0UHJvcCQoJHByb3BzLCBcInZhbHVlXCIsIG51bGwpO1xuXG5sZXQgY2xhc3NMaXN0ID0gY29tcHV0ZWQoW3RpY2ssIHRpY2ssIHRlc3RdLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkOiB0aWNrKCkgJSAyID09IDAsXG4gICAgZ3JlZW46IHRpY2soKSAlIDMgPT0gMCxcbiAgICBzb21lOiB0ZXN0KCkgPT09IG51bGxcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2UoKSB7XG4gICRlbWl0KCdpbnB1dCcsIDIpO1xufSAvLyBmdW5jdGlvbiBtb3VudGVkKClcbi8vIHtcbi8vIFx0Ly8gY29uc29sZS5sb2coJ2NvbnRhaW5lciBtb3VudGVkJyk7XG4vLyBcdC8vIGNvbnNvbGUubG9nKCdkZWZhdWx0IHZhbHVlOiAnLCB2YWx1ZSgpKTsgXG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygnY29udGFpbmVyIHVubW91bnRlZCcpO1x0XG4vLyB9XG5cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogW10sXG4gIHVubW91bnRlZDogW11cbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbl9yZWdpc3Rlckhvb2tzJCgkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fbWFrZUF0dHJzJChfZWwkMiwgcmVuZGVyLCB7XG4gIFwiY2xhc3NcIjogY29tcHV0ZWQoW2NsYXNzTGlzdCwgdGlja10sICgpID0+IHtcbiAgICByZXR1cm4gW2NsYXNzTGlzdCgpLCB7XG4gICAgICBhY3RpdmU6IHRpY2soKSA9PT0gMVxuICAgIH1dO1xuICB9KSxcbiAgXCJzdHlsZVwiOiBjb21wdXRlZChbdGlja10sICgpID0+IHtcbiAgICByZXR1cm4gW3tcbiAgICAgIGZvbnRTaXplOiB0aWNrKCkgKyAncHgnXG4gICAgfV07XG4gIH0pXG59KTtcblxuX21ha2VFdmVudHMkKF9lbCQyLCByZW5kZXIsIHtcbiAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gY2hhbmdlKCk7XG4gIH1cbn0pO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5fc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDMsIHJlbmRlciwgbm9kZSA9PiB7fSk7XG5cbnJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyO1xuXHRcdH1cblxuXHRcdGV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcblx0XHQiLCJcblx0XHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXHRcdGltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXHRcdGltcG9ydCB7IGJpbmQgfSBmcm9tICdAaGF3YS9kaXJlY3RpdmVzJztcblx0XHRpbXBvcnQgX2NvbXBvbmVudF9zdHlsZXMkIGZyb20gXCIuL3BhZ2UuaGF3YT90eXBlPXN0eWxlXCJcblx0XHRpbXBvcnQgX2NvbXBvbmVudF9uYXZjb250YWluZXIkIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi9jb250YWluZXIuaGF3YVwiO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdFx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0XHRcdHNsb3QgYXMgX3Nsb3QkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHJlZ2lzdGVySG9va3MgYXMgX3JlZ2lzdGVySG9va3MkLFxuXHRcdFx0ZGlzcGF0Y2hIb29rIGFzIF9kaXNwYXRjaEhvb2skLFxuXHRcdH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PCEtLS0tPjxpbnB1dCB0eXBlPVwidGV4dFwiPjwvaW5wdXQ+e3sgdnYgfX08L2Rpdj4nO1xuXG5sZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQyLmlubmVySFRNTCA9ICc8IS0tLS0+JztcblxubGV0IF90cGwkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMy5pbm5lckhUTUwgPSAndGVzdCB7eyBpdGVtIH19JztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdGxldCBpdGVtcyA9IEFycmF5LmZyb20oe1xuICBsZW5ndGg6IDNcbn0sIChfLCBpKSA9PiBpKTtcbmxldCB2diA9IG9ic2VydmFibGUoJ3Rlc3QnKTtcblxuZnVuY3Rpb24gZXZlbnRkKCkge1xuICBhbGVydCgxKTtcbn0gLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gfVxuXG5cbmxldCAkaG9va3MgPSB7XG4gIG1vdW50ZWQ6IFtdLFxuICB1bm1vdW50ZWQ6IFtdXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fcmVnaXN0ZXJIb29rcyQoJGhvb2tzLCBfZWwkMiwgcmVuZGVyKTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxubGV0IF9lbCQ5ID0gX2VhY2gkKF9lbCQzLCBpdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICByZXR1cm4gaXRlbTtcbn0sIChub2RlLCByZW5kZXIsIF9lYWNoTm9kZUtleSQsIGl0ZW0sIGtleSkgPT4ge1xuICBsZXQgX2VsJDQgPSBnZXROb2RlKF90cGwkMiwgbm9kZSwgcmVuZGVyKTtcblxuICBsZXQgX2VsJDUgPSByZW5kZXIgPyBfZWwkNC5maXJzdENoaWxkIDogX2VsJDQ7XG5cbiAgbGV0IF9lbCQ2ID0gbG9hZENvbXBvbmVudChfY29tcG9uZW50X25hdmNvbnRhaW5lciQsIF9lbCQ1LCByZW5kZXIsIHtcbiAgICAkY3VzdG9tSW5pdDogKCRob29rcywgbm9kZSwgcmVuZGVyKSA9PiB7XG4gICAgICBfc2V0S2V5JChfZWFjaE5vZGVLZXkkLCBub2RlLCByZW5kZXIpO1xuICAgIH0sXG4gICAgJHNsb3RzOiB7XG4gICAgICBcImRlZmF1bHRcIjogKCkgPT4ge1xuICAgICAgICBsZXQgX2VsJDcgPSBnZXROb2RlKF90cGwkMywgbm9kZSwgcmVuZGVyKTtcblxuICAgICAgICBsZXQgX2VsJDggPSByZW5kZXIgPyBfZWwkNy5maXJzdENoaWxkIDogX2VsJDc7XG5cbiAgICAgICAgc3Vic2NyaWJlKFtdLCAoKSA9PiB7XG4gICAgICAgICAgX2VsJDgubm9kZVZhbHVlID0gYHRlc3QgJHtpdGVtfWA7XG4gICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDcgOiBfZWwkODtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIF9kaXNwYXRjaEhvb2skKF9lbCQ2LCBcIm1vdW50ZWRcIik7XG5cbiAgX3NldFJlZiQoJHJlZnMsIF9lbCQ2LCBcInRlc3RcIik7XG5cbiAgX21ha2VFdmVudHMkKF9lbCQ2LCByZW5kZXIsIHtcbiAgICBcImlucHV0XCI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgcmV0dXJuIGV2ZW50ZCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDY7XG59LCByZW5kZXIpO1xuXG5sZXQgX2VsJDEwID0gX2VsJDkubmV4dFNpYmxpbmc7XG5cbl9kaXJlY3RpdmUkKCRob29rcywgYmluZCwgX2VsJDEwLCB7fSwgdnYsIHJlbmRlcik7XG5cbl9zZXRSZWYkKCRyZWZzLCBfZWwkMTAsIFwiaW5wdXRcIik7XG5cbmxldCBfZWwkMTEgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5zdWJzY3JpYmUoW3Z2XSwgKCkgPT4ge1xuICBfZWwkMTEubm9kZVZhbHVlID0gYCR7dnYoKX1gO1xufSwgIXJlbmRlcik7XG5yZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2hhd2EvY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzJzsiLCIvLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cbmltcG9ydCB7XG5cdGRpc3BhdGNoSG9vayxcbn0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXG5sZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG5sYXlvdXQuaW5uZXJIVE1MID0gJyc7XG50aW1lKCdyZW5kZXInKTtcblxubGV0IGMgPSBQYWdlQ29tcG9uZW50KCk7XG5kaXNwYXRjaEhvb2soYy5maXJzdENoaWxkLCAnbW91bnRlZCcpO1xubGF5b3V0LmFwcGVuZENoaWxkKGMpO1xuXG50aW1lKCdyZW5kZXInKTtcblxuXG5cblxuc2V0VGltZW91dCgoKSA9PiB7XG5cdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gdG1wO1xuXHRkaXNwYXRjaEhvb2sobGF5b3V0LmZpcnN0Q2hpbGQsICd1bm1vdW50ZWQnKTtcblxuXHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0XG5cdGxldCBjID0gUGFnZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZCk7XG5cdGRpc3BhdGNoSG9vayhjLCAnbW91bnRlZCcpO1xuXHRsYXlvdXQuYXBwZW5kQ2hpbGQoYyk7XG5cdFxuXHR0aW1lKCdoeWRyYXRlJyk7XG59LCAzMDApIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==