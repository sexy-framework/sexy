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
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__);

		
		
		
		

		

		
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><span></span></div>';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["parseContext"])(context);
			
			let $emit, $id;
			// code
			let tick = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(24);

let test = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "test", null);

let value = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "value", null);

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
  mounted: mounted,
  unmounted: unmounted
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["call"])($customInit, $hooks, _el$2, render);

$id = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["createComponent"])(_el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__["createHooks"])($hooks);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["attrs"])(_el$2, render, {
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

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["events"])(_el$2, {
  "click": function (event) {
    return change();
  }
});

let _el$3 = _el$2.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["slot"])($slots, "default", _el$3, render, node => {});

return {
  node: render ? _el$1 : _el$2,
  hooks: $hooks
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
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/directives */ "./packages/directives/dist/index.js");
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_directives__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__);

		
		 // let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2
		
		

		

		
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><label><input type="checkbox"></input>show list</label><div><input type="range" max="10"></input></div><!----></div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<!---->';

let _tpl$3 = document.createElement("template");
_tpl$3.innerHTML = 'test {{ item }}';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["parseContext"])(context);
			
			let $emit, $id;
			// code
			// let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2
let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let showItems = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(true);
let range = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(5);

function eventd() {
  alert(1);
}

function mounted() {
  console.log('page mounted'); // setTimeout(() => {
  // 	items(Array.from({ length: 2 }, (_, i) => i))
  // }, 1000);
}

function unmounted() {
  console.log('page unmounted');
}

let $hooks = {
  mounted: mounted,
  unmounted: unmounted
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["call"])($customInit, $hooks, _el$2, render);

$id = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["createComponent"])(_el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__["createHooks"])($hooks);

let _el$3 = _el$2.firstChild;
let _el$4 = _el$3.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["directive"])($hooks, _hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$4, {}, showItems, render);

let _el$5 = _el$4.nextSibling;
let _el$6 = _el$3.nextSibling;
let _el$7 = _el$6.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["directive"])($hooks, _hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$7, {}, range, render);

let _el$8 = _el$6.nextSibling;

let _el$17 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["statement"])(_el$8, render, [showItems], () => {
  return showItems();
}, (node, render) => {
  let _el$9 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$2, node, render);

  let _el$10 = render ? _el$9.firstChild : _el$9;

  let _el$16 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["map"])(_el$10, Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([range], () => {
    return items.slice(0, range());
  }), (item, key) => {
    return item;
  }, (node, render, _eachNodeKey$, item, key) => {
    let _el$11 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$2, node, render);

    let _el$12 = render ? _el$11.firstChild : _el$11;

    let _el$13 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__["default"], _el$12, render, {
      $customInit: ($hooks, node, render) => {
        Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["setRef"])($refs, node, "test");

        Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["events"])(node, {
          "input": function (event) {
            return eventd();
          }
        });

        Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["setKey"])(_eachNodeKey$, node, render);
      },
      $slots: {
        "default": () => {
          let _el$14 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$3, node, render);

          let _el$15 = render ? _el$14.firstChild : _el$14;

          Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
            _el$15.nodeValue = `test ${item}`;
          }, !render);
          return render ? _el$14 : _el$15;
        }
      }
    });

    return render ? _el$11 : _el$13;
  }, render);

  return render ? _el$9 : _el$16;
});

return {
  node: render ? _el$1 : _el$2,
  hooks: $hooks
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

var _render = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import StaticComponent from '../components/static.hawa'
var layout = document.getElementById('layout');
console.log('start render');
(0, _time.default)('render');
var unmount = (0, _render.render)(_page.default, layout);
(0, _time.default)('render');
setTimeout(function () {
  unmount();
  console.log('start hydration');
  (0, _time.default)('hydrate');
  unmount = (0, _render.hydrate)(_page.default, layout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS5oYXdhPzQwYmIiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsInVubW91bnQiLCJQYWdlQ29tcG9uZW50Iiwic2V0VGltZW91dCIsInRpbWVzIiwidGltZSIsIm5hbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FB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QUFMLEdBQWNDLEdBQWQ7QUFDQSxXQUFPSCxLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBOztBQUVEUCxTQUFPLENBQUNDLEdBQVIsV0FBb0JNLElBQXBCLFNBQThCQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0UsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9GLEtBQUssQ0FBQ0UsSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cdFx0XG5cdFx0XG5cdFx0XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRtYXAgYXMgX2VhY2gkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGNyZWF0ZUhvb2tzIGFzIF9jcmVhdGVIb29rcyQsXG5cdFx0XHRkaXNwYXRjaEhvb2sgYXMgX2Rpc3BhdGNoSG9vayQsXG5cdFx0fSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+JztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdCwgJGlkO1xuXHRcdFx0Ly8gY29kZVxuXHRcdFx0bGV0IHRpY2sgPSBvYnNlcnZhYmxlKDI0KTtcblxubGV0IHRlc3QgPSBfZ2V0UHJvcCQoJHByb3BzLCBcInRlc3RcIiwgbnVsbCk7XG5cbmxldCB2YWx1ZSA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidmFsdWVcIiwgbnVsbCk7XG5cbmxldCBjbGFzc0xpc3QgPSBjb21wdXRlZChbdGljaywgdGljaywgdGVzdF0sICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZWQ6IHRpY2soKSAlIDIgPT0gMCxcbiAgICBncmVlbjogdGljaygpICUgMyA9PSAwLFxuICAgIHNvbWU6IHRlc3QoKSA9PT0gbnVsbFxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZSgpIHtcbiAgJGVtaXQoJ2lucHV0JywgMik7XG59XG5cbmZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gIGNvbnNvbGUubG9nKCRpZCwgJ2NvbnRhaW5lciBtb3VudGVkJyk7IC8vIGNvbnNvbGUubG9nKCdkZWZhdWx0IHZhbHVlOiAnLCB2YWx1ZSgpKTsgXG59XG5cbmZ1bmN0aW9uIHVubW91bnRlZCgpIHtcbiAgY29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIHVubW91bnRlZCcpO1xufVxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBtb3VudGVkLFxuICB1bm1vdW50ZWQ6IHVubW91bnRlZFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG4kZW1pdCA9IF9lbWl0JChfZWwkMik7XG5cbl9jYWxsJCgkY3VzdG9tSW5pdCwgJGhvb2tzLCBfZWwkMiwgcmVuZGVyKTtcblxuJGlkID0gX2NyZWF0ZUNvbXBvbmVudCQoX2VsJDIsIHJlbmRlcik7XG5cbl9jcmVhdGVIb29rcyQoJGhvb2tzKTtcblxuX21ha2VBdHRycyQoX2VsJDIsIHJlbmRlciwge1xuICBcImNsYXNzXCI6IGNvbXB1dGVkKFtjbGFzc0xpc3QsIHRpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFtjbGFzc0xpc3QoKSwge1xuICAgICAgYWN0aXZlOiB0aWNrKCkgPT09IDFcbiAgICB9XTtcbiAgfSksXG4gIFwic3R5bGVcIjogY29tcHV0ZWQoW3RpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBmb250U2l6ZTogdGljaygpICsgJ3B4J1xuICAgIH1dO1xuICB9KVxufSk7XG5cbl9tYWtlRXZlbnRzJChfZWwkMiwge1xuICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBjaGFuZ2UoKTtcbiAgfVxufSk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cbl9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkMywgcmVuZGVyLCBub2RlID0+IHt9KTtcblxucmV0dXJuIHtcbiAgbm9kZTogcmVuZGVyID8gX2VsJDEgOiBfZWwkMixcbiAgaG9va3M6ICRob29rc1xufTtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnQGhhd2EvZGlyZWN0aXZlcyc7IC8vIGxldCBpdGVtcyA9IG8oQXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9LCAoXywgaSkgPT4gaSkpO1xuLy8gbGV0IHZ2ID0gbygndGVzdCcpOyAyXG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cdFx0aW1wb3J0IF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2FcIjtcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdG1hcCBhcyBfZWFjaCQsXG5cdFx0XHRzdGF0ZW1lbnQgYXMgX3N0YXRlbWVudCQsXG5cdFx0XHRkaXJlY3RpdmUgYXMgX2RpcmVjdGl2ZSQsXG5cdFx0XHRnZXROb2RlLFxuXHRcdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0XHRzZXRSZWYgYXMgX3NldFJlZiQsXG5cdFx0XHRzZXRLZXkgYXMgX3NldEtleSQsXG5cdFx0XHRlbWl0IGFzIF9lbWl0JCxcblx0XHRcdGNhbGwgYXMgX2NhbGwkLFxuXHRcdFx0Y3JlYXRlQ29tcG9uZW50IGFzIF9jcmVhdGVDb21wb25lbnQkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ0BoYXdhL3JlbmRlcic7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0Y3JlYXRlSG9va3MgYXMgX2NyZWF0ZUhvb2tzJCxcblx0XHRcdGRpc3BhdGNoSG9vayBhcyBfZGlzcGF0Y2hIb29rJCxcblx0XHR9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblx0XHRcblx0XHQvLyB0ZW1wbGF0ZXNcblx0XHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2PjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+PC9pbnB1dD5zaG93IGxpc3Q8L2xhYmVsPjxkaXY+PGlucHV0IHR5cGU9XCJyYW5nZVwiIG1heD1cIjEwXCI+PC9pbnB1dD48L2Rpdj48IS0tLS0+PC9kaXY+JztcblxubGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMi5pbm5lckhUTUwgPSAnPCEtLS0tPic7XG5cbmxldCBfdHBsJDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDMuaW5uZXJIVE1MID0gJ3Rlc3Qge3sgaXRlbSB9fSc7XG5cblxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAkY3VzdG9tSW5pdCB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XG5cdFx0XHRsZXQgJGVtaXQsICRpZDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdC8vIGxldCBpdGVtcyA9IG8oQXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9LCAoXywgaSkgPT4gaSkpO1xuLy8gbGV0IHZ2ID0gbygndGVzdCcpOyAyXG5sZXQgaXRlbXMgPSBbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbiddO1xubGV0IHNob3dJdGVtcyA9IG9ic2VydmFibGUodHJ1ZSk7XG5sZXQgcmFuZ2UgPSBvYnNlcnZhYmxlKDUpO1xuXG5mdW5jdGlvbiBldmVudGQoKSB7XG4gIGFsZXJ0KDEpO1xufVxuXG5mdW5jdGlvbiBtb3VudGVkKCkge1xuICBjb25zb2xlLmxvZygncGFnZSBtb3VudGVkJyk7IC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyBcdGl0ZW1zKEFycmF5LmZyb20oeyBsZW5ndGg6IDIgfSwgKF8sIGkpID0+IGkpKVxuICAvLyB9LCAxMDAwKTtcbn1cblxuZnVuY3Rpb24gdW5tb3VudGVkKCkge1xuICBjb25zb2xlLmxvZygncGFnZSB1bm1vdW50ZWQnKTtcbn1cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbW91bnRlZCxcbiAgdW5tb3VudGVkOiB1bm1vdW50ZWRcbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbiRpZCA9IF9jcmVhdGVDb21wb25lbnQkKF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5sZXQgX2VsJDQgPSBfZWwkMy5maXJzdENoaWxkO1xuXG5fZGlyZWN0aXZlJCgkaG9va3MsIGJpbmQsIF9lbCQ0LCB7fSwgc2hvd0l0ZW1zLCByZW5kZXIpO1xuXG5sZXQgX2VsJDUgPSBfZWwkNC5uZXh0U2libGluZztcbmxldCBfZWwkNiA9IF9lbCQzLm5leHRTaWJsaW5nO1xubGV0IF9lbCQ3ID0gX2VsJDYuZmlyc3RDaGlsZDtcblxuX2RpcmVjdGl2ZSQoJGhvb2tzLCBiaW5kLCBfZWwkNywge30sIHJhbmdlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDggPSBfZWwkNi5uZXh0U2libGluZztcblxubGV0IF9lbCQxNyA9IF9zdGF0ZW1lbnQkKF9lbCQ4LCByZW5kZXIsIFtzaG93SXRlbXNdLCAoKSA9PiB7XG4gIHJldHVybiBzaG93SXRlbXMoKTtcbn0sIChub2RlLCByZW5kZXIpID0+IHtcbiAgbGV0IF9lbCQ5ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQxMCA9IHJlbmRlciA/IF9lbCQ5LmZpcnN0Q2hpbGQgOiBfZWwkOTtcblxuICBsZXQgX2VsJDE2ID0gX2VhY2gkKF9lbCQxMCwgY29tcHV0ZWQoW3JhbmdlXSwgKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcy5zbGljZSgwLCByYW5nZSgpKTtcbiAgfSksIChpdGVtLCBrZXkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSwgKG5vZGUsIHJlbmRlciwgX2VhY2hOb2RlS2V5JCwgaXRlbSwga2V5KSA9PiB7XG4gICAgbGV0IF9lbCQxMSA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gICAgbGV0IF9lbCQxMiA9IHJlbmRlciA/IF9lbCQxMS5maXJzdENoaWxkIDogX2VsJDExO1xuXG4gICAgbGV0IF9lbCQxMyA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkMTIsIHJlbmRlciwge1xuICAgICAgJGN1c3RvbUluaXQ6ICgkaG9va3MsIG5vZGUsIHJlbmRlcikgPT4ge1xuICAgICAgICBfc2V0UmVmJCgkcmVmcywgbm9kZSwgXCJ0ZXN0XCIpO1xuXG4gICAgICAgIF9tYWtlRXZlbnRzJChub2RlLCB7XG4gICAgICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBldmVudGQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZXRLZXkkKF9lYWNoTm9kZUtleSQsIG5vZGUsIHJlbmRlcik7XG4gICAgICB9LFxuICAgICAgJHNsb3RzOiB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiAoKSA9PiB7XG4gICAgICAgICAgbGV0IF9lbCQxNCA9IGdldE5vZGUoX3RwbCQzLCBub2RlLCByZW5kZXIpO1xuXG4gICAgICAgICAgbGV0IF9lbCQxNSA9IHJlbmRlciA/IF9lbCQxNC5maXJzdENoaWxkIDogX2VsJDE0O1xuXG4gICAgICAgICAgc3Vic2NyaWJlKFtdLCAoKSA9PiB7XG4gICAgICAgICAgICBfZWwkMTUubm9kZVZhbHVlID0gYHRlc3QgJHtpdGVtfWA7XG4gICAgICAgICAgfSwgIXJlbmRlcik7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlciA/IF9lbCQxNCA6IF9lbCQxNTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbmRlciA/IF9lbCQxMSA6IF9lbCQxMztcbiAgfSwgcmVuZGVyKTtcblxuICByZXR1cm4gcmVuZGVyID8gX2VsJDkgOiBfZWwkMTY7XG59KTtcblxucmV0dXJuIHtcbiAgbm9kZTogcmVuZGVyID8gX2VsJDEgOiBfZWwkMixcbiAgaG9va3M6ICRob29rc1xufTtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2hhd2EvY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzJzsiLCIvLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuaW1wb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnQGhhd2EvcmVuZGVyJztcblxubGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuY29uc29sZS5sb2coJ3N0YXJ0IHJlbmRlcicpO1xudGltZSgncmVuZGVyJyk7XG5sZXQgdW5tb3VudCA9IHJlbmRlcihQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xudGltZSgncmVuZGVyJyk7XG5cblxuXG5zZXRUaW1lb3V0KCgpID0+IHtcblx0dW5tb3VudCgpO1xuXG5cdGNvbnNvbGUubG9nKCdzdGFydCBoeWRyYXRpb24nKTtcblx0dGltZSgnaHlkcmF0ZScpO1xuXHRcblx0dW5tb3VudCA9IGh5ZHJhdGUoUGFnZUNvbXBvbmVudCwgbGF5b3V0KTtcblx0XG5cdHRpbWUoJ2h5ZHJhdGUnKTtcbn0sIDMwMClcblxuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==