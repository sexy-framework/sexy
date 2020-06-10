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
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/render */ "./packages/render/src/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hawa_transition__WEBPACK_IMPORTED_MODULE_3__);

		
		
		
		

		

		

		

		_hawa_transition__WEBPACK_IMPORTED_MODULE_3__["transition"]
		
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
  // $emit('input', 2);
  alert(1);
} // function mounted()
// {
// 	console.log($id, 'container mounted');
// 	// console.log('default value: ', value()); 
// }
// function unmounted()
// {
// 	console.log($id, 'container unmounted');	
// }


let $hooks = {
  mounted: null,
  unmounted: null
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["call"])($customInit, $hooks, _el$2, render);

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
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_transition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hawa/render */ "./packages/render/src/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__);

		
		

		
		

		

		

		

		_hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]
		
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

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["parseContext"])(context);
			
			let $emit, $id;
			// code
			function faded() {} // let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2


let items = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']);
let showItems = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(true);
let range = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(5); // function eventd()
// {
// 	alert(1)
// }
// function mounted()
// {
// 	console.log('page mounted');
// 	// setTimeout(() => {
// 	// 	items(['one', 'seven', 'three', 'four', 'five', 'six', 'two', 'eight', 'nine', 'ten'])
// 	// }, 1000);
// }
// function unmounted()
// {
// 	console.log('page unmounted');
// }

let $hooks = {
  mounted: null,
  unmounted: null
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["call"])($customInit, $hooks, _el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__["createHooks"])($hooks);

let _el$3 = _el$2.firstChild;
let _el$4 = _el$3.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, _hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$4, {}, showItems, render);

let _el$5 = _el$4.nextSibling;
let _el$6 = _el$3.nextSibling;
let _el$7 = _el$6.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, _hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$7, {}, range, render);

let _el$8 = _el$6.nextSibling;

let _el$17 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["statement"])(_el$8, render, [showItems], () => {
  return showItems();
}, (node, render) => {
  let _el$9 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

  let _el$10 = render ? _el$9.firstChild : _el$9;

  let _el$16 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["map"])(_el$10, Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items, range], () => {
    return items().slice(0, range());
  }), (item, key) => {
    return item;
  }, (node, render, _eachNodeKey$, item, key) => {
    let _el$11 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

    let _el$12 = render ? _el$11.firstChild : _el$11;

    let _el$13 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__["default"], _el$12, render, {
      $props: {
        "classed": "fade"
      },
      $customInit: ($hooks, node, render) => {
        Object(_hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"])(node, _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade', _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade');

        Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["setKey"])(_eachNodeKey$, node, render);
      },
      $slots: {
        "default": () => {
          let _el$14 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$3, node, render);

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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./test/c.js":
/*!*******************!*\
  !*** ./test/c.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _page = _interopRequireDefault(__webpack_require__(/*! ../components/page.hawa */ "./components/page.hawa"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./test/time.js"));

var _render = __webpack_require__(/*! @hawa/render */ "./packages/render/src/index.js");

// import StaticComponent from '../components/static.hawa'
// const PageComponent = import('../components/page.hawa')
var layout = document.getElementById('layout');
console.log('start render');
(0, _time.default)('render');
var unmount = (0, _render.render)(_page.default, layout);
(0, _time.default)('render'); // setTimeout(() => {
// 	unmount();
// 	refresh(layout);
// 	console.log('start hydration');
// 	time('hydrate');
// 	unmount = hydrate(PageComponent, layout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzP2ZkNTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2E/NDBiYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2MuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIl0sIm5hbWVzIjpbImxheW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwidW5tb3VudCIsIlBhZ2VDb21wb25lbnQiLCJ0aW1lcyIsInRpbWUiLCJuYW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtR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Ozs7QUM3QkEsSUFBSU8sS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjQyxJQUFkLEVBQ2Y7QUFDQyxNQUFJQyxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9MLEtBQUssQ0FBQ0UsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDRixTQUFLLENBQUNFLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0gsS0FBSyxDQUFDRSxJQUFELENBQVo7QUFDQTs7QUFFRE4sU0FBTyxDQUFDQyxHQUFSLFdBQW9CSyxJQUFwQixTQUE4QkMsR0FBRyxHQUFHSCxLQUFLLENBQUNFLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRixLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXHRcdFxuXHRcdFxuXHRcdFxuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdFx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0XHRcdHNsb3QgYXMgX3Nsb3QkLFxuXHRcdFx0bWFwIGFzIF9lYWNoJCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGRpcmVjdGl2ZSBhcyBfZGlyZWN0aXZlJCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdGVtaXQgYXMgX2VtaXQkLFxuXHRcdFx0Y2FsbCBhcyBfY2FsbCQsXG5cdFx0XHRjcmVhdGVDb21wb25lbnQgYXMgX2NyZWF0ZUNvbXBvbmVudCQsXG5cdFx0XHRwYXJzZUNvbnRleHQsXG5cdFx0XHRsb2FkQ29tcG9uZW50LFxuXHRcdH0gZnJvbSAnQGhhd2EvcmVuZGVyJztcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRjcmVhdGVIb29rcyBhcyBfY3JlYXRlSG9va3MkLFxuXHRcdH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHRyYW5zaXRpb24gYXMgX3RyYW5zaXRpb24kLFxuXHRcdH0gZnJvbSAnQGhhd2EvdHJhbnNpdGlvbidcblxuXHRcdF90cmFuc2l0aW9uJFxuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PHNwYW4+PC9zcGFuPjwvZGl2Pic7XG5cblxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAkY3VzdG9tSW5pdCB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XG5cdFx0XHRsZXQgJGVtaXQsICRpZDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdGxldCB0aWNrID0gb2JzZXJ2YWJsZSgyNCk7XG5cbmxldCB0ZXN0ID0gX2dldFByb3AkKCRwcm9wcywgXCJ0ZXN0XCIsIG51bGwpO1xuXG5sZXQgdmFsdWUgPSBfZ2V0UHJvcCQoJHByb3BzLCBcInZhbHVlXCIsIG51bGwpO1xuXG5sZXQgY2xhc3NMaXN0ID0gY29tcHV0ZWQoW3RpY2ssIHRpY2ssIHRlc3RdLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkOiB0aWNrKCkgJSAyID09IDAsXG4gICAgZ3JlZW46IHRpY2soKSAlIDMgPT0gMCxcbiAgICBzb21lOiB0ZXN0KCkgPT09IG51bGxcbiAgfTtcbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2UoKSB7XG4gIC8vICRlbWl0KCdpbnB1dCcsIDIpO1xuICBhbGVydCgxKTtcbn0gLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKCRpZCwgJ2NvbnRhaW5lciBtb3VudGVkJyk7XG4vLyBcdC8vIGNvbnNvbGUubG9nKCdkZWZhdWx0IHZhbHVlOiAnLCB2YWx1ZSgpKTsgXG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygkaWQsICdjb250YWluZXIgdW5tb3VudGVkJyk7XHRcbi8vIH1cblxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBudWxsLFxuICB1bm1vdW50ZWQ6IG51bGxcbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbl9jcmVhdGVIb29rcyQoJGhvb2tzKTtcblxuX21ha2VBdHRycyQoX2VsJDIsIHJlbmRlciwge1xuICBcImNsYXNzXCI6IGNvbXB1dGVkKFtjbGFzc0xpc3QsIHRpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFtjbGFzc0xpc3QoKSwge1xuICAgICAgYWN0aXZlOiB0aWNrKCkgPT09IDFcbiAgICB9XTtcbiAgfSksXG4gIFwic3R5bGVcIjogY29tcHV0ZWQoW3RpY2tdLCAoKSA9PiB7XG4gICAgcmV0dXJuIFt7XG4gICAgICBmb250U2l6ZTogdGljaygpICsgJ3B4J1xuICAgIH1dO1xuICB9KVxufSk7XG5cbl9tYWtlRXZlbnRzJChfZWwkMiwge1xuICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHJldHVybiBjaGFuZ2UoKTtcbiAgfVxufSk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cbl9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkMywgcmVuZGVyLCBub2RlID0+IHt9KTtcblxucmV0dXJuIHtcbiAgbm9kZTogcmVuZGVyID8gX2VsJDEgOiBfZWwkMixcbiAgaG9va3M6ICRob29rc1xufTtcblx0XHR9XG5cblx0XHRleHBvcnQgZGVmYXVsdCByZW5kZXI7XG5cdFx0IiwiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnQGhhd2EvZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBjbGFzc2VkIH0gZnJvbSAnQGhhd2EvdHJhbnNpdGlvbic7XG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cdFx0aW1wb3J0IF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2FcIjtcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdG1hcCBhcyBfZWFjaCQsXG5cdFx0XHRzdGF0ZW1lbnQgYXMgX3N0YXRlbWVudCQsXG5cdFx0XHRkaXJlY3RpdmUgYXMgX2RpcmVjdGl2ZSQsXG5cdFx0XHRnZXROb2RlLFxuXHRcdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0XHRzZXRSZWYgYXMgX3NldFJlZiQsXG5cdFx0XHRzZXRLZXkgYXMgX3NldEtleSQsXG5cdFx0XHRlbWl0IGFzIF9lbWl0JCxcblx0XHRcdGNhbGwgYXMgX2NhbGwkLFxuXHRcdFx0Y3JlYXRlQ29tcG9uZW50IGFzIF9jcmVhdGVDb21wb25lbnQkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ0BoYXdhL3JlbmRlcic7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0Y3JlYXRlSG9va3MgYXMgX2NyZWF0ZUhvb2tzJCxcblx0XHR9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxuXHRcdGltcG9ydCB7XG5cdFx0XHR0cmFuc2l0aW9uIGFzIF90cmFuc2l0aW9uJCxcblx0XHR9IGZyb20gJ0BoYXdhL3RyYW5zaXRpb24nXG5cblx0XHRfdHJhbnNpdGlvbiRcblx0XHRcblx0XHQvLyB0ZW1wbGF0ZXNcblx0XHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2PjxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCI+PC9pbnB1dD5zaG93IGxpc3Q8L2xhYmVsPjxkaXY+PGlucHV0IHR5cGU9XCJyYW5nZVwiIG1heD1cIjEwXCI+PC9pbnB1dD48L2Rpdj48IS0tLS0+PC9kaXY+JztcblxubGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMi5pbm5lckhUTUwgPSAnPCEtLS0tPic7XG5cbmxldCBfdHBsJDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDMuaW5uZXJIVE1MID0gJ3Rlc3Qge3sgaXRlbSB9fSc7XG5cblxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAkY3VzdG9tSW5pdCB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XG5cdFx0XHRsZXQgJGVtaXQsICRpZDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdGZ1bmN0aW9uIGZhZGVkKCkge30gLy8gbGV0IGl0ZW1zID0gbyhBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0sIChfLCBpKSA9PiBpKSk7XG4vLyBsZXQgdnYgPSBvKCd0ZXN0Jyk7IDJcblxuXG5sZXQgaXRlbXMgPSBvYnNlcnZhYmxlKFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJ10pO1xubGV0IHNob3dJdGVtcyA9IG9ic2VydmFibGUodHJ1ZSk7XG5sZXQgcmFuZ2UgPSBvYnNlcnZhYmxlKDUpOyAvLyBmdW5jdGlvbiBldmVudGQoKVxuLy8ge1xuLy8gXHRhbGVydCgxKVxuLy8gfVxuLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKCdwYWdlIG1vdW50ZWQnKTtcbi8vIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdC8vIFx0aXRlbXMoWydvbmUnLCAnc2V2ZW4nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICd0d28nLCAnZWlnaHQnLCAnbmluZScsICd0ZW4nXSlcbi8vIFx0Ly8gfSwgMTAwMCk7XG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygncGFnZSB1bm1vdW50ZWQnKTtcbi8vIH1cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbnVsbCxcbiAgdW5tb3VudGVkOiBudWxsXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5sZXQgX2VsJDQgPSBfZWwkMy5maXJzdENoaWxkO1xuXG5fZGlyZWN0aXZlJCgkaG9va3MsIGJpbmQsIF9lbCQ0LCB7fSwgc2hvd0l0ZW1zLCByZW5kZXIpO1xuXG5sZXQgX2VsJDUgPSBfZWwkNC5uZXh0U2libGluZztcbmxldCBfZWwkNiA9IF9lbCQzLm5leHRTaWJsaW5nO1xubGV0IF9lbCQ3ID0gX2VsJDYuZmlyc3RDaGlsZDtcblxuX2RpcmVjdGl2ZSQoJGhvb2tzLCBiaW5kLCBfZWwkNywge30sIHJhbmdlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDggPSBfZWwkNi5uZXh0U2libGluZztcblxubGV0IF9lbCQxNyA9IF9zdGF0ZW1lbnQkKF9lbCQ4LCByZW5kZXIsIFtzaG93SXRlbXNdLCAoKSA9PiB7XG4gIHJldHVybiBzaG93SXRlbXMoKTtcbn0sIChub2RlLCByZW5kZXIpID0+IHtcbiAgbGV0IF9lbCQ5ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQxMCA9IHJlbmRlciA/IF9lbCQ5LmZpcnN0Q2hpbGQgOiBfZWwkOTtcblxuICBsZXQgX2VsJDE2ID0gX2VhY2gkKF9lbCQxMCwgY29tcHV0ZWQoW2l0ZW1zLCByYW5nZV0sICgpID0+IHtcbiAgICByZXR1cm4gaXRlbXMoKS5zbGljZSgwLCByYW5nZSgpKTtcbiAgfSksIChpdGVtLCBrZXkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSwgKG5vZGUsIHJlbmRlciwgX2VhY2hOb2RlS2V5JCwgaXRlbSwga2V5KSA9PiB7XG4gICAgbGV0IF9lbCQxMSA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gICAgbGV0IF9lbCQxMiA9IHJlbmRlciA/IF9lbCQxMS5maXJzdENoaWxkIDogX2VsJDExO1xuXG4gICAgbGV0IF9lbCQxMyA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkMTIsIHJlbmRlciwge1xuICAgICAgJHByb3BzOiB7XG4gICAgICAgIFwiY2xhc3NlZFwiOiBcImZhZGVcIlxuICAgICAgfSxcbiAgICAgICRjdXN0b21Jbml0OiAoJGhvb2tzLCBub2RlLCByZW5kZXIpID0+IHtcbiAgICAgICAgX3RyYW5zaXRpb24kKG5vZGUsIGNsYXNzZWQsICdmYWRlJywgY2xhc3NlZCwgJ2ZhZGUnKTtcblxuICAgICAgICBfc2V0S2V5JChfZWFjaE5vZGVLZXkkLCBub2RlLCByZW5kZXIpO1xuICAgICAgfSxcbiAgICAgICRzbG90czoge1xuICAgICAgICBcImRlZmF1bHRcIjogKCkgPT4ge1xuICAgICAgICAgIGxldCBfZWwkMTQgPSBnZXROb2RlKF90cGwkMywgbm9kZSwgcmVuZGVyKTtcblxuICAgICAgICAgIGxldCBfZWwkMTUgPSByZW5kZXIgPyBfZWwkMTQuZmlyc3RDaGlsZCA6IF9lbCQxNDtcblxuICAgICAgICAgIHN1YnNjcmliZShbXSwgKCkgPT4ge1xuICAgICAgICAgICAgX2VsJDE1Lm5vZGVWYWx1ZSA9IGB0ZXN0ICR7aXRlbX1gO1xuICAgICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICAgIHJldHVybiByZW5kZXIgPyBfZWwkMTQgOiBfZWwkMTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZW5kZXIgPyBfZWwkMTEgOiBfZWwkMTM7XG4gIH0sIHJlbmRlcik7XG5cbiAgcmV0dXJuIHJlbmRlciA/IF9lbCQ5IDogX2VsJDE2O1xufSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9oYXdhL2NvbXBvbmVudHMvcGFnZS5oYXdhLmNzcyc7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwiLy8gaW1wb3J0IFN0YXRpY0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpYy5oYXdhJ1xuaW1wb3J0IFBhZ2VDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlLmhhd2EnXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cbi8vIGNvbnN0IFBhZ2VDb21wb25lbnQgPSBpbXBvcnQoJy4uL2NvbXBvbmVudHMvcGFnZS5oYXdhJylcblxuXG5pbXBvcnQgeyByZW5kZXIsIGh5ZHJhdGUsIHJlZnJlc2ggfSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5sZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG50aW1lKCdyZW5kZXInKTtcbmxldCB1bm1vdW50ID0gcmVuZGVyKFBhZ2VDb21wb25lbnQsIGxheW91dCk7XG50aW1lKCdyZW5kZXInKTtcblxuXG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gXHR1bm1vdW50KCk7XG4vLyBcdHJlZnJlc2gobGF5b3V0KTtcblxuLy8gXHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG4vLyBcdHRpbWUoJ2h5ZHJhdGUnKTtcblx0XG4vLyBcdHVubW91bnQgPSBoeWRyYXRlKFBhZ2VDb21wb25lbnQsIGxheW91dCk7XG5cdFxuLy8gXHR0aW1lKCdoeWRyYXRlJyk7XG4vLyB9LCAzMDApXG5cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=