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

			let { $props, $slots, $refs, $key } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["parseContext"])(context);
			
			// code
			let tick = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(24);

let test = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getProp"])($props, "test", null);

let classList = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick, tick, test], () => {
  return {
    red: tick() % 2 == 0,
    green: tick() % 3 == 0,
    some: test() === null
  };
});

function mounted() {
  console.log('container mounted');
}

function unmounted() {
  console.log('container unmounted');
}

let $hooks = {
  mounted: mounted,
  unmounted: unmounted
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["setKey"])($key, _el$2, render);

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
    return alert(1);
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
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__);

		
		
		
		

		

		
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><!----><!----></div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<!---->';

let _tpl$3 = document.createElement("template");
_tpl$3.innerHTML = 'test {{ item.v }}';

let _tpl$4 = document.createElement("template");
_tpl$4.innerHTML = 'test if';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $key } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["parseContext"])(context);
			
			// code
			let d = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(1);
let items = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])([{
  v: 'a'
}, {
  v: 'b'
}]);
let timers = []; //Array.from({ length: 2 }, (_, i) => i);

function mounted() {
  console.log('page mounted');
  let i = items();
  let t0 = i[0];
  let t1 = i[1];
  timers.push(setTimeout(() => {
    items([t1]);
  }, 1000));
  timers.push(setTimeout(() => {
    d(0);
    console.log('d=', d());
  }, 1000));
  timers.push(setTimeout(() => {
    d(1);
    console.log('d=', d());
  }, 2000));
}

function unmounted() {
  console.log('page unmounted');

  for (let time of timers) {
    clearTimeout(time);
    clearInterval(time);
  }
}

let $hooks = {
  mounted: mounted,
  unmounted: unmounted
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["setKey"])($key, _el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__["registerHooks"])($hooks, _el$2, render);

let _el$3 = _el$2.firstChild;

let _el$9 = Object(_hawa_map__WEBPACK_IMPORTED_MODULE_1__["map"])(_el$3, Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items], () => {
  return items();
}), (item, key) => {
  return item.v;
}, (node, render, _eachNodeKey$, item, key) => {
  let _el$4 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$2, node, render);

  let _el$5 = render ? _el$4.firstChild : _el$4;

  let _el$6 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__["default"], _el$5, render, {
    $props: {
      "test": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([d], () => {
        return d();
      })
    },
    $key: _eachNodeKey$,
    $slots: {
      "default": () => {
        let _el$7 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$3, node, render);

        let _el$8 = render ? _el$7.firstChild : _el$7;

        Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
          _el$8.nodeValue = `test ${item.v}`;
        }, !render);
        return render ? _el$7 : _el$8;
      }
    }
  });

  Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__["dispatchHook"])(_el$6, "mounted");

  Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["setRef"])($refs, _el$6, "test");

  return render ? _el$4 : _el$6;
}, render);

let _el$10 = _el$9.nextSibling;

let _el$16 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["statement"])(_el$10, render, [d], () => {
  return d() === 1;
}, (node, render) => {
  let _el$11 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$3, _el$10, render);

  let _el$12 = render ? _el$11.firstChild : _el$11;

  let _el$13 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__["default"], _el$12, render, {
    $slots: {
      "default": () => {
        let _el$14 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$4, node, render);

        let _el$15 = render ? _el$14.firstChild : _el$14;

        return render ? _el$14 : _el$15;
      }
    }
  });

  Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__["dispatchHook"])(_el$13, "mounted");

  return render ? _el$11 : _el$13;
});

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
(0, _time.default)('render'); // setTimeout(() => {
// 	let tmp = layout.innerHTML;
// 	layout.innerHTML = tmp;
// 	dispatchHook(layout.firstChild, 'unmounted');
// 	console.log('start hydration');
// 	time('hydrate');
// 	let c = PageComponent(null, layout.firstChild);
// 	dispatchHook(c, 'mounted');
// 	layout.appendChild(c);
// 	time('hydrate');
// }, 300)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZS5oYXdhPzQwYmIiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9jLmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyJdLCJuYW1lcyI6WyJsYXlvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImlubmVySFRNTCIsImMiLCJmaXJzdENoaWxkIiwiYXBwZW5kQ2hpbGQiLCJ0aW1lcyIsInRpbWUiLCJuYW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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LEdBQUcsR0FBR0gsS0FBSyxDQUFDRSxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT0YsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBtYXAgYXMgX2VhY2gkIH0gZnJvbSAnQGhhd2EvbWFwJztcblx0XHRcblx0XHRcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHJlZ2lzdGVySG9va3MgYXMgX3JlZ2lzdGVySG9va3MkLFxuXHRcdFx0ZGlzcGF0Y2hIb29rIGFzIF9kaXNwYXRjaEhvb2skLFxuXHRcdH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PHNwYW4+PC9zcGFuPjwvZGl2Pic7XG5cblxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAka2V5IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdC8vIGNvZGVcblx0XHRcdGxldCB0aWNrID0gb2JzZXJ2YWJsZSgyNCk7XG5cbmxldCB0ZXN0ID0gX2dldFByb3AkKCRwcm9wcywgXCJ0ZXN0XCIsIG51bGwpO1xuXG5sZXQgY2xhc3NMaXN0ID0gY29tcHV0ZWQoW3RpY2ssIHRpY2ssIHRlc3RdLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkOiB0aWNrKCkgJSAyID09IDAsXG4gICAgZ3JlZW46IHRpY2soKSAlIDMgPT0gMCxcbiAgICBzb21lOiB0ZXN0KCkgPT09IG51bGxcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBtb3VudGVkKCkge1xuICBjb25zb2xlLmxvZygnY29udGFpbmVyIG1vdW50ZWQnKTtcbn1cblxuZnVuY3Rpb24gdW5tb3VudGVkKCkge1xuICBjb25zb2xlLmxvZygnY29udGFpbmVyIHVubW91bnRlZCcpO1xufVxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBtb3VudGVkLFxuICB1bm1vdW50ZWQ6IHVubW91bnRlZFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5fc2V0S2V5JCgka2V5LCBfZWwkMiwgcmVuZGVyKTtcblxuX3JlZ2lzdGVySG9va3MkKCRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbl9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcbiAgXCJjbGFzc1wiOiBjb21wdXRlZChbY2xhc3NMaXN0LCB0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbY2xhc3NMaXN0KCksIHtcbiAgICAgIGFjdGl2ZTogdGljaygpID09PSAxXG4gICAgfV07XG4gIH0pLFxuICBcInN0eWxlXCI6IGNvbXB1dGVkKFt0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgZm9udFNpemU6IHRpY2soKSArICdweCdcbiAgICB9XTtcbiAgfSlcbn0pO1xuXG5fbWFrZUV2ZW50cyQoX2VsJDIsIHJlbmRlciwge1xuICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBhbGVydCgxKTtcbiAgfVxufSk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cbl9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkMywgcmVuZGVyLCBub2RlID0+IHt9KTtcblxucmV0dXJuIHJlbmRlciA/IF9lbCQxIDogX2VsJDI7XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cdFx0aW1wb3J0IHsgbWFwIGFzIF9lYWNoJCB9IGZyb20gJ0BoYXdhL21hcCc7XG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cdFx0aW1wb3J0IF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2FcIjtcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHJlZ2lzdGVySG9va3MgYXMgX3JlZ2lzdGVySG9va3MkLFxuXHRcdFx0ZGlzcGF0Y2hIb29rIGFzIF9kaXNwYXRjaEhvb2skLFxuXHRcdH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PCEtLS0tPjwhLS0tLT48L2Rpdj4nO1xuXG5sZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQyLmlubmVySFRNTCA9ICc8IS0tLS0+JztcblxubGV0IF90cGwkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMy5pbm5lckhUTUwgPSAndGVzdCB7eyBpdGVtLnYgfX0nO1xuXG5sZXQgX3RwbCQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQ0LmlubmVySFRNTCA9ICd0ZXN0IGlmJztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRrZXkgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0Ly8gY29kZVxuXHRcdFx0bGV0IGQgPSBvYnNlcnZhYmxlKDEpO1xubGV0IGl0ZW1zID0gb2JzZXJ2YWJsZShbe1xuICB2OiAnYSdcbn0sIHtcbiAgdjogJ2InXG59XSk7XG5sZXQgdGltZXJzID0gW107IC8vQXJyYXkuZnJvbSh7IGxlbmd0aDogMiB9LCAoXywgaSkgPT4gaSk7XG5cbmZ1bmN0aW9uIG1vdW50ZWQoKSB7XG4gIGNvbnNvbGUubG9nKCdwYWdlIG1vdW50ZWQnKTtcbiAgbGV0IGkgPSBpdGVtcygpO1xuICBsZXQgdDAgPSBpWzBdO1xuICBsZXQgdDEgPSBpWzFdO1xuICB0aW1lcnMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpdGVtcyhbdDFdKTtcbiAgfSwgMTAwMCkpO1xuICB0aW1lcnMucHVzaChzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkKDApO1xuICAgIGNvbnNvbGUubG9nKCdkPScsIGQoKSk7XG4gIH0sIDEwMDApKTtcbiAgdGltZXJzLnB1c2goc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZCgxKTtcbiAgICBjb25zb2xlLmxvZygnZD0nLCBkKCkpO1xuICB9LCAyMDAwKSk7XG59XG5cbmZ1bmN0aW9uIHVubW91bnRlZCgpIHtcbiAgY29uc29sZS5sb2coJ3BhZ2UgdW5tb3VudGVkJyk7XG5cbiAgZm9yIChsZXQgdGltZSBvZiB0aW1lcnMpIHtcbiAgICBjbGVhclRpbWVvdXQodGltZSk7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lKTtcbiAgfVxufVxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBtb3VudGVkLFxuICB1bm1vdW50ZWQ6IHVubW91bnRlZFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5fc2V0S2V5JCgka2V5LCBfZWwkMiwgcmVuZGVyKTtcblxuX3JlZ2lzdGVySG9va3MkKCRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cbmxldCBfZWwkOSA9IF9lYWNoJChfZWwkMywgY29tcHV0ZWQoW2l0ZW1zXSwgKCkgPT4ge1xuICByZXR1cm4gaXRlbXMoKTtcbn0pLCAoaXRlbSwga2V5KSA9PiB7XG4gIHJldHVybiBpdGVtLnY7XG59LCAobm9kZSwgcmVuZGVyLCBfZWFjaE5vZGVLZXkkLCBpdGVtLCBrZXkpID0+IHtcbiAgbGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG4gIGxldCBfZWwkNiA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkNSwgcmVuZGVyLCB7XG4gICAgJHByb3BzOiB7XG4gICAgICBcInRlc3RcIjogY29tcHV0ZWQoW2RdLCAoKSA9PiB7XG4gICAgICAgIHJldHVybiBkKCk7XG4gICAgICB9KVxuICAgIH0sXG4gICAgJGtleTogX2VhY2hOb2RlS2V5JCxcbiAgICAkc2xvdHM6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiAoKSA9PiB7XG4gICAgICAgIGxldCBfZWwkNyA9IGdldE5vZGUoX3RwbCQzLCBub2RlLCByZW5kZXIpO1xuXG4gICAgICAgIGxldCBfZWwkOCA9IHJlbmRlciA/IF9lbCQ3LmZpcnN0Q2hpbGQgOiBfZWwkNztcblxuICAgICAgICBzdWJzY3JpYmUoW10sICgpID0+IHtcbiAgICAgICAgICBfZWwkOC5ub2RlVmFsdWUgPSBgdGVzdCAke2l0ZW0udn1gO1xuICAgICAgICB9LCAhcmVuZGVyKTtcbiAgICAgICAgcmV0dXJuIHJlbmRlciA/IF9lbCQ3IDogX2VsJDg7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBfZGlzcGF0Y2hIb29rJChfZWwkNiwgXCJtb3VudGVkXCIpO1xuXG4gIF9zZXRSZWYkKCRyZWZzLCBfZWwkNiwgXCJ0ZXN0XCIpO1xuXG4gIHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ2O1xufSwgcmVuZGVyKTtcblxubGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG5sZXQgX2VsJDE2ID0gX3N0YXRlbWVudCQoX2VsJDEwLCByZW5kZXIsIFtkXSwgKCkgPT4ge1xuICByZXR1cm4gZCgpID09PSAxO1xufSwgKG5vZGUsIHJlbmRlcikgPT4ge1xuICBsZXQgX2VsJDExID0gZ2V0Tm9kZShfdHBsJDMsIF9lbCQxMCwgcmVuZGVyKTtcblxuICBsZXQgX2VsJDEyID0gcmVuZGVyID8gX2VsJDExLmZpcnN0Q2hpbGQgOiBfZWwkMTE7XG5cbiAgbGV0IF9lbCQxMyA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkMTIsIHJlbmRlciwge1xuICAgICRzbG90czoge1xuICAgICAgXCJkZWZhdWx0XCI6ICgpID0+IHtcbiAgICAgICAgbGV0IF9lbCQxNCA9IGdldE5vZGUoX3RwbCQ0LCBub2RlLCByZW5kZXIpO1xuXG4gICAgICAgIGxldCBfZWwkMTUgPSByZW5kZXIgPyBfZWwkMTQuZmlyc3RDaGlsZCA6IF9lbCQxNDtcblxuICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDE0IDogX2VsJDE1O1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgX2Rpc3BhdGNoSG9vayQoX2VsJDEzLCBcIm1vdW50ZWRcIik7XG5cbiAgcmV0dXJuIHJlbmRlciA/IF9lbCQxMSA6IF9lbCQxMztcbn0pO1xuXG5yZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcvQXBwbGljYXRpb25zL01BTVAvaHRkb2NzL2hhd2EvY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzJzsiLCIvLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cbmltcG9ydCB7XG5cdGRpc3BhdGNoSG9vayxcbn0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXG5sZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG5sYXlvdXQuaW5uZXJIVE1MID0gJyc7XG50aW1lKCdyZW5kZXInKTtcblxubGV0IGMgPSBQYWdlQ29tcG9uZW50KCk7XG5kaXNwYXRjaEhvb2soYy5maXJzdENoaWxkLCAnbW91bnRlZCcpO1xubGF5b3V0LmFwcGVuZENoaWxkKGMpO1xuXG50aW1lKCdyZW5kZXInKTtcblxuXG5cblxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuLy8gXHRsYXlvdXQuaW5uZXJIVE1MID0gdG1wO1xuLy8gXHRkaXNwYXRjaEhvb2sobGF5b3V0LmZpcnN0Q2hpbGQsICd1bm1vdW50ZWQnKTtcblxuLy8gXHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdHRpbWUoJ2h5ZHJhdGUnKTtcblx0XG4vLyBcdGxldCBjID0gUGFnZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZCk7XG4vLyBcdGRpc3BhdGNoSG9vayhjLCAnbW91bnRlZCcpO1xuLy8gXHRsYXlvdXQuYXBwZW5kQ2hpbGQoYyk7XG5cdFxuLy8gXHR0aW1lKCdoeWRyYXRlJyk7XG4vLyB9LCAzMDApIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==