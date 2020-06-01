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

/***/ "./components/page.hawa":
/*!******************************!*\
  !*** ./components/page.hawa ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/map */ "./packages/map/dist/index.js");
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_static_hawa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/static.hawa */ "./components/static.hawa");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_3__);

	
	
	

	
	
	// templates
	let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><!----></div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '{{ `button ${ item }` }}';


	
	// component function
	function render(context, node = false) {
		let render = node === false;

		let { $props, $slots } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_3__["parseContext"])(context);
		
		// code
		let items = Array.from({
  length: 1000
}, (_, i) => i);
let d = false; // function mounted()
// {
// 	setTimeout(() => {
// 	d(true);
// }, 1000)
// }
		
		// render
		let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_3__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

let _el$3 = _el$2.firstChild;

let _el$10 = Object(_hawa_map__WEBPACK_IMPORTED_MODULE_1__["map"])(_el$3, items, (item, key) => {
  return item;
}, (node, render, _keyExpr$, item, key) => {
  let _el$4 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_3__["getNode"])(_tpl$1, node, render);

  let _el$5 = render ? _el$4.firstChild : _el$4;

  Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
    _el$5.setAttribute("data-key", item);
  }, !render);
  let _el$6 = _el$5.firstChild;

  let _el$7 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_3__["loadComponent"])(_components_static_hawa__WEBPACK_IMPORTED_MODULE_2__["default"], _el$6, render, {
    $props: {
      "size": d
    },
    $slots: {
      "default": () => {
        let _el$8 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_3__["getNode"])(_tpl$2, node, render);

        let _el$9 = render ? _el$8.firstChild : _el$8;

        Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
          _el$9.nodeValue = `${`button ${item}`}`;
        }, !render);
        return render ? _el$8 : _el$9;
      }
    }
  });

  return render ? _el$4 : _el$5;
}, render);

return render ? _el$1 : _el$2;
	}
	

/***/ }),

/***/ "./components/static.hawa":
/*!********************************!*\
  !*** ./components/static.hawa ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/map */ "./packages/map/dist/index.js");
/* harmony import */ var _hawa_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_2__);

	
	
	

	
	
	// templates
	let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div class="button"><span>Default button text</span></div>';


	
	// component function
	function render(context, node = false) {
		let render = node === false;

		let { $props, $slots } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["parseContext"])(context);
		
		// code
		// let d = o(12);
// let size = p('medium');
// let someClass = () => {
// 	return {
// 		active: size() === true,
// 	}
// }
// let styles = () => {
// 	return {
// 		color: d() % 2 === 0 ? 'red' : 'green',
// 		fontSize: d() + 'px'
// 	}
// }
// function debug(v)
// {
// 	console.log(v, size());
// }
		
		// render
		let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

let _el$3 = _el$2.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["slot"])($slots, "default", _el$3, render, node => {
  let _el$4 = _el$3.firstChild;
});

return render ? _el$1 : _el$2;
	}
	

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StaticComponent from '../components/static.hawa'
var layout = document.getElementById('layout');
console.log('start render');
layout.innerHTML = '';
(0, _time.default)('render');
layout.appendChild((0, _page.default)());
(0, _time.default)('render');
setTimeout(function () {
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  console.log('start hydration');
  (0, _time.default)('hydrate');
  (0, _page.default)(null, layout.firstChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0aWMuaGF3YSIsIndlYnBhY2s6Ly8vLi90ZXN0L2MuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIl0sIm5hbWVzIjpbImxheW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwidG1wIiwiZmlyc3RDaGlsZCIsInRpbWVzIiwidGltZSIsIm5hbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlE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O0FBQ3RDRixTQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0gsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQTs7QUFFRFQsU0FBTyxDQUFDQyxHQUFSLFdBQW9CUSxJQUFwQixTQUE4QkMsR0FBRyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRixLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0aW1wb3J0IHsgbWFwIGFzIF9lYWNoJCB9IGZyb20gJ0BoYXdhL21hcCc7XG5cdGltcG9ydCBfY29tcG9uZW50X3N0YXRpYyQgZnJvbSBcIi4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2FcIjtcblxuXHRpbXBvcnQge1xuXHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdGdldE5vZGUsXG5cdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0cGFyc2VDb250ZXh0LFxuXHRcdGxvYWRDb21wb25lbnQsXG5cdH0gZnJvbSAnQGhhd2EvcmVuZGVyJztcblx0XG5cdC8vIHRlbXBsYXRlc1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2PjwhLS0tLT48L2Rpdj4nO1xuXG5sZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQyLmlubmVySFRNTCA9ICd7eyBgYnV0dG9uICR7IGl0ZW0gfWAgfX0nO1xuXG5cblx0XG5cdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcblx0XHQvLyBjb2RlXG5cdFx0bGV0IGl0ZW1zID0gQXJyYXkuZnJvbSh7XG4gIGxlbmd0aDogMTAwMFxufSwgKF8sIGkpID0+IGkpO1xubGV0IGQgPSBmYWxzZTsgLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyBcdHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gXHRkKHRydWUpO1xuLy8gfSwgMTAwMClcbi8vIH1cblx0XHRcblx0XHQvLyByZW5kZXJcblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5sZXQgX2VsJDEwID0gX2VhY2gkKF9lbCQzLCBpdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICByZXR1cm4gaXRlbTtcbn0sIChub2RlLCByZW5kZXIsIF9rZXlFeHByJCwgaXRlbSwga2V5KSA9PiB7XG4gIGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG4gIGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuICBzdWJzY3JpYmUoW10sICgpID0+IHtcbiAgICBfZWwkNS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBpdGVtKTtcbiAgfSwgIXJlbmRlcik7XG4gIGxldCBfZWwkNiA9IF9lbCQ1LmZpcnN0Q2hpbGQ7XG5cbiAgbGV0IF9lbCQ3ID0gbG9hZENvbXBvbmVudChfY29tcG9uZW50X3N0YXRpYyQsIF9lbCQ2LCByZW5kZXIsIHtcbiAgICAkcHJvcHM6IHtcbiAgICAgIFwic2l6ZVwiOiBkXG4gICAgfSxcbiAgICAkc2xvdHM6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiAoKSA9PiB7XG4gICAgICAgIGxldCBfZWwkOCA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gICAgICAgIGxldCBfZWwkOSA9IHJlbmRlciA/IF9lbCQ4LmZpcnN0Q2hpbGQgOiBfZWwkODtcblxuICAgICAgICBzdWJzY3JpYmUoW10sICgpID0+IHtcbiAgICAgICAgICBfZWwkOS5ub2RlVmFsdWUgPSBgJHtgYnV0dG9uICR7aXRlbX1gfWA7XG4gICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDggOiBfZWwkOTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ1O1xufSwgcmVuZGVyKTtcblxucmV0dXJuIHJlbmRlciA/IF9lbCQxIDogX2VsJDI7XG5cdH1cblx0IiwiXG5cdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cdGltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXHRcblxuXHRpbXBvcnQge1xuXHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdGdldE5vZGUsXG5cdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0cGFyc2VDb250ZXh0LFxuXHRcdGxvYWRDb21wb25lbnQsXG5cdH0gZnJvbSAnQGhhd2EvcmVuZGVyJztcblx0XG5cdC8vIHRlbXBsYXRlc1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdCBidXR0b24gdGV4dDwvc3Bhbj48L2Rpdj4nO1xuXG5cblx0XG5cdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcblx0XHQvLyBjb2RlXG5cdFx0Ly8gbGV0IGQgPSBvKDEyKTtcbi8vIGxldCBzaXplID0gcCgnbWVkaXVtJyk7XG4vLyBsZXQgc29tZUNsYXNzID0gKCkgPT4ge1xuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdGFjdGl2ZTogc2l6ZSgpID09PSB0cnVlLFxuLy8gXHR9XG4vLyB9XG4vLyBsZXQgc3R5bGVzID0gKCkgPT4ge1xuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdGNvbG9yOiBkKCkgJSAyID09PSAwID8gJ3JlZCcgOiAnZ3JlZW4nLFxuLy8gXHRcdGZvbnRTaXplOiBkKCkgKyAncHgnXG4vLyBcdH1cbi8vIH1cbi8vIGZ1bmN0aW9uIGRlYnVnKHYpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKHYsIHNpemUoKSk7XG4vLyB9XG5cdFx0XG5cdFx0Ly8gcmVuZGVyXG5cdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxuX3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQzLCByZW5kZXIsIG5vZGUgPT4ge1xuICBsZXQgX2VsJDQgPSBfZWwkMy5maXJzdENoaWxkO1xufSk7XG5cbnJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyO1xuXHR9XG5cdCIsIi8vIGltcG9ydCBTdGF0aWNDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9zdGF0aWMuaGF3YSdcbmltcG9ydCBQYWdlQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZS5oYXdhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJztcblxuXG5sZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG5sYXlvdXQuaW5uZXJIVE1MID0gJyc7XG50aW1lKCdyZW5kZXInKTtcbmxheW91dC5hcHBlbmRDaGlsZChQYWdlQ29tcG9uZW50KCkpO1xudGltZSgncmVuZGVyJyk7XG5cblxuXG5cbnNldFRpbWVvdXQoKCkgPT4ge1xuXHRsZXQgdG1wID0gbGF5b3V0LmlubmVySFRNTDtcblx0bGF5b3V0LmlubmVySFRNTCA9IHRtcDtcblxuXHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0UGFnZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZClcblx0dGltZSgnaHlkcmF0ZScpO1xufSwgMzAwKSIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=