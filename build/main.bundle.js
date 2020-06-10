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
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hawa_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa/lifecycle */ "./packages/hawa/lifecycle/src/index.js");
/* harmony import */ var hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hawa_transition__WEBPACK_IMPORTED_MODULE_3__);

		
		
		
		

		

		

		

		hawa_transition__WEBPACK_IMPORTED_MODULE_3__["transition"]
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><span></span></div>';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["parseContext"])(context);
			
			let $emit, $id;
			// code
			let tick = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(24);

let test = Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "test", null);

let value = Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "value", null);

let classList = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick, tick, test], () => {
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
			let _el$1 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["emit"])(_el$2);

Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["call"])($customInit, $hooks, _el$2, render);

Object(hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__["createHooks"])($hooks);

Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["attrs"])(_el$2, render, {
  "class": Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([classList, tick], () => {
    return [classList(), {
      active: tick() === 1
    }];
  }),
  "style": Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick], () => {
    return [{
      fontSize: tick() + 'px'
    }];
  })
});

Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["events"])(_el$2, {
  "click": function (event) {
    return change();
  }
});

let _el$3 = _el$2.firstChild;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["slot"])($slots, "default", _el$3, render, node => {});

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
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hawa_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hawa/directives */ "./packages/hawa/directives/src/index.js");
/* harmony import */ var hawa_directives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hawa_directives__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hawa_transition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hawa_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hawa/lifecycle */ "./packages/hawa/lifecycle/src/index.js");
/* harmony import */ var hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__);

		
		
 // let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2
		
		

		

		

		

		hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]
		
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

			let { $props, $slots, $refs, $customInit } = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["parseContext"])(context);
			
			let $emit, $id;
			// code
			// let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2
let items = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']);
let showItems = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(true);
let range = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(5); // function eventd()
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
			let _el$1 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["emit"])(_el$2);

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["call"])($customInit, $hooks, _el$2, render);

Object(hawa_lifecycle__WEBPACK_IMPORTED_MODULE_6__["createHooks"])($hooks);

let _el$3 = _el$2.firstChild;
let _el$4 = _el$3.firstChild;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$4, {}, showItems, render);

let _el$5 = _el$4.nextSibling;
let _el$6 = _el$3.nextSibling;
let _el$7 = _el$6.firstChild;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$7, {}, range, render);

let _el$8 = _el$6.nextSibling;

let _el$17 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["statement"])(_el$8, render, [showItems], () => {
  return showItems();
}, (node, render) => {
  let _el$9 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

  let _el$10 = render ? _el$9.firstChild : _el$9;

  let _el$16 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["map"])(_el$10, Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items, range], () => {
    return items().slice(0, range());
  }), (item, key) => {
    return item;
  }, (node, render, _eachNodeKey$, item, key) => {
    let _el$11 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

    let _el$12 = render ? _el$11.firstChild : _el$11;

    let _el$13 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_4__["default"], _el$12, render, {
      $props: {
        "classed": "fade"
      },
      $customInit: ($hooks, node, render) => {
        Object(hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"])(node, hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade', hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade');

        Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["setKey"])(_eachNodeKey$, node, render);
      },
      $slots: {
        "default": () => {
          let _el$14 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$3, node, render);

          let _el$15 = render ? _el$14.firstChild : _el$14;

          Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
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

var _hawa = __webpack_require__(/*! hawa */ "./packages/hawa/src/index.js");

// import StaticComponent from '../components/static.hawa'
// const PageComponent = import('../components/page.hawa')
var layout = document.getElementById('layout');
console.log('start render');
(0, _time.default)('render');
var unmount = (0, _hawa.render)(_page.default, layout);
(0, _time.default)('render');
setTimeout(function () {
  unmount();
  (0, _hawa.refresh)(layout);
  console.log('start hydration');
  (0, _time.default)('hydrate');
  unmount = (0, _hawa.hydrate)(_page.default, layout);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzP2ZkNTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2E/NTdlNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2MuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIl0sIm5hbWVzIjpbImxheW91dCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwidW5tb3VudCIsIlBhZ2VDb21wb25lbnQiLCJzZXRUaW1lb3V0IiwidGltZXMiLCJ0aW1lIiwibmFtZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVB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QUFPO0FBQ1AscUJBQVFMLE1BQVI7QUFFQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxxQkFBSyxTQUFMO0FBRUFDLFNBQU8sR0FBRyxtQkFBUUMsYUFBUixFQUF1Qk4sTUFBdkIsQ0FBVjtBQUVBLHFCQUFLLFNBQUw7QUFDQSxDQVZTLEVBVVAsR0FWTyxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQSxJQUFJUSxLQUFLLEdBQUcsRUFBWjs7QUFFZSxTQUFTQyxJQUFULENBQWNDLElBQWQsRUFDZjtBQUNDLE1BQUlDLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0wsS0FBSyxDQUFDRSxJQUFELENBQVosS0FBdUIsV0FBMUIsRUFBdUM7QUFDdENGLFNBQUssQ0FBQ0UsSUFBRCxDQUFMLEdBQWNDLEdBQWQ7QUFDQSxXQUFPSCxLQUFLLENBQUNFLElBQUQsQ0FBWjtBQUNBOztBQUVEUCxTQUFPLENBQUNDLEdBQVIsV0FBb0JNLElBQXBCLFNBQThCQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0UsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9GLEtBQUssQ0FBQ0UsSUFBRCxDQUFaO0FBQ0EsQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcblx0XHRcblx0XHRcblx0XHRcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdG1hcCBhcyBfZWFjaCQsXG5cdFx0XHRzdGF0ZW1lbnQgYXMgX3N0YXRlbWVudCQsXG5cdFx0XHRkaXJlY3RpdmUgYXMgX2RpcmVjdGl2ZSQsXG5cdFx0XHRnZXROb2RlLFxuXHRcdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0XHRzZXRSZWYgYXMgX3NldFJlZiQsXG5cdFx0XHRzZXRLZXkgYXMgX3NldEtleSQsXG5cdFx0XHRlbWl0IGFzIF9lbWl0JCxcblx0XHRcdGNhbGwgYXMgX2NhbGwkLFxuXHRcdFx0Y3JlYXRlQ29tcG9uZW50IGFzIF9jcmVhdGVDb21wb25lbnQkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ2hhd2EvcmVuZGVyJztcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRjcmVhdGVIb29rcyBhcyBfY3JlYXRlSG9va3MkLFxuXHRcdH0gZnJvbSAnaGF3YS9saWZlY3ljbGUnXG5cblx0XHRpbXBvcnQge1xuXHRcdFx0dHJhbnNpdGlvbiBhcyBfdHJhbnNpdGlvbiQsXG5cdFx0fSBmcm9tICdoYXdhL3RyYW5zaXRpb24nXG5cblx0XHRfdHJhbnNpdGlvbiRcblx0XHRcblx0XHQvLyB0ZW1wbGF0ZXNcblx0XHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2PjxzcGFuPjwvc3Bhbj48L2Rpdj4nO1xuXG5cblx0XHRcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRcdGxldCB7ICRwcm9wcywgJHNsb3RzLCAkcmVmcywgJGN1c3RvbUluaXQgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0bGV0ICRlbWl0LCAkaWQ7XG5cdFx0XHQvLyBjb2RlXG5cdFx0XHRsZXQgdGljayA9IG9ic2VydmFibGUoMjQpO1xuXG5sZXQgdGVzdCA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidGVzdFwiLCBudWxsKTtcblxubGV0IHZhbHVlID0gX2dldFByb3AkKCRwcm9wcywgXCJ2YWx1ZVwiLCBudWxsKTtcblxubGV0IGNsYXNzTGlzdCA9IGNvbXB1dGVkKFt0aWNrLCB0aWNrLCB0ZXN0XSwgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZDogdGljaygpICUgMiA9PSAwLFxuICAgIGdyZWVuOiB0aWNrKCkgJSAzID09IDAsXG4gICAgc29tZTogdGVzdCgpID09PSBudWxsXG4gIH07XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlKCkge1xuICAvLyAkZW1pdCgnaW5wdXQnLCAyKTtcbiAgYWxlcnQoMSk7XG59IC8vIGZ1bmN0aW9uIG1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygkaWQsICdjb250YWluZXIgbW91bnRlZCcpO1xuLy8gXHQvLyBjb25zb2xlLmxvZygnZGVmYXVsdCB2YWx1ZTogJywgdmFsdWUoKSk7IFxuLy8gfVxuLy8gZnVuY3Rpb24gdW5tb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIHVubW91bnRlZCcpO1x0XG4vLyB9XG5cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbnVsbCxcbiAgdW5tb3VudGVkOiBudWxsXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbl9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcbiAgXCJjbGFzc1wiOiBjb21wdXRlZChbY2xhc3NMaXN0LCB0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbY2xhc3NMaXN0KCksIHtcbiAgICAgIGFjdGl2ZTogdGljaygpID09PSAxXG4gICAgfV07XG4gIH0pLFxuICBcInN0eWxlXCI6IGNvbXB1dGVkKFt0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgZm9udFNpemU6IHRpY2soKSArICdweCdcbiAgICB9XTtcbiAgfSlcbn0pO1xuXG5fbWFrZUV2ZW50cyQoX2VsJDIsIHtcbiAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gY2hhbmdlKCk7XG4gIH1cbn0pO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5fc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDMsIHJlbmRlciwgbm9kZSA9PiB7fSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnaGF3YS9kaXJlY3RpdmVzJztcbmltcG9ydCB7IGNsYXNzZWQgfSBmcm9tICdoYXdhL3RyYW5zaXRpb24nOyAvLyBsZXQgaXRlbXMgPSBvKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcbi8vIGxldCB2diA9IG8oJ3Rlc3QnKTsgMlxuXHRcdGltcG9ydCBfY29tcG9uZW50X3N0eWxlcyQgZnJvbSBcIi4vcGFnZS5oYXdhP3R5cGU9c3R5bGVcIlxuXHRcdGltcG9ydCBfY29tcG9uZW50X25hdmNvbnRhaW5lciQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2L2NvbnRhaW5lci5oYXdhXCI7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRtYXAgYXMgX2VhY2gkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdoYXdhL3JlbmRlcic7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0Y3JlYXRlSG9va3MgYXMgX2NyZWF0ZUhvb2tzJCxcblx0XHR9IGZyb20gJ2hhd2EvbGlmZWN5Y2xlJ1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHRyYW5zaXRpb24gYXMgX3RyYW5zaXRpb24kLFxuXHRcdH0gZnJvbSAnaGF3YS90cmFuc2l0aW9uJ1xuXG5cdFx0X3RyYW5zaXRpb24kXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvaW5wdXQ+c2hvdyBsaXN0PC9sYWJlbD48ZGl2PjxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtYXg9XCIxMFwiPjwvaW5wdXQ+PC9kaXY+PCEtLS0tPjwvZGl2Pic7XG5cbmxldCBfdHBsJDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDIuaW5uZXJIVE1MID0gJzwhLS0tLT4nO1xuXG5sZXQgX3RwbCQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQzLmlubmVySFRNTCA9ICd0ZXN0IHt7IGl0ZW0gfX0nO1xuXG5cblx0XHRcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRcdGxldCB7ICRwcm9wcywgJHNsb3RzLCAkcmVmcywgJGN1c3RvbUluaXQgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0bGV0ICRlbWl0LCAkaWQ7XG5cdFx0XHQvLyBjb2RlXG5cdFx0XHQvLyBsZXQgaXRlbXMgPSBvKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcbi8vIGxldCB2diA9IG8oJ3Rlc3QnKTsgMlxubGV0IGl0ZW1zID0gb2JzZXJ2YWJsZShbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbiddKTtcbmxldCBzaG93SXRlbXMgPSBvYnNlcnZhYmxlKHRydWUpO1xubGV0IHJhbmdlID0gb2JzZXJ2YWJsZSg1KTsgLy8gZnVuY3Rpb24gZXZlbnRkKClcbi8vIHtcbi8vIFx0YWxlcnQoMSlcbi8vIH1cbi8vIGZ1bmN0aW9uIG1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygncGFnZSBtb3VudGVkJyk7XG4vLyBcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gXHQvLyBcdGl0ZW1zKFsnb25lJywgJ3NldmVuJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnLCAndHdvJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJ10pXG4vLyBcdC8vIH0sIDEwMDApO1xuLy8gfVxuLy8gZnVuY3Rpb24gdW5tb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJ3BhZ2UgdW5tb3VudGVkJyk7XG4vLyB9XG5cbmxldCAkaG9va3MgPSB7XG4gIG1vdW50ZWQ6IG51bGwsXG4gIHVubW91bnRlZDogbnVsbFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG4kZW1pdCA9IF9lbWl0JChfZWwkMik7XG5cbl9jYWxsJCgkY3VzdG9tSW5pdCwgJGhvb2tzLCBfZWwkMiwgcmVuZGVyKTtcblxuX2NyZWF0ZUhvb2tzJCgkaG9va3MpO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xubGV0IF9lbCQ0ID0gX2VsJDMuZmlyc3RDaGlsZDtcblxuX2RpcmVjdGl2ZSQoJGhvb2tzLCBiaW5kLCBfZWwkNCwge30sIHNob3dJdGVtcywgcmVuZGVyKTtcblxubGV0IF9lbCQ1ID0gX2VsJDQubmV4dFNpYmxpbmc7XG5sZXQgX2VsJDYgPSBfZWwkMy5uZXh0U2libGluZztcbmxldCBfZWwkNyA9IF9lbCQ2LmZpcnN0Q2hpbGQ7XG5cbl9kaXJlY3RpdmUkKCRob29rcywgYmluZCwgX2VsJDcsIHt9LCByYW5nZSwgcmVuZGVyKTtcblxubGV0IF9lbCQ4ID0gX2VsJDYubmV4dFNpYmxpbmc7XG5cbmxldCBfZWwkMTcgPSBfc3RhdGVtZW50JChfZWwkOCwgcmVuZGVyLCBbc2hvd0l0ZW1zXSwgKCkgPT4ge1xuICByZXR1cm4gc2hvd0l0ZW1zKCk7XG59LCAobm9kZSwgcmVuZGVyKSA9PiB7XG4gIGxldCBfZWwkOSA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gIGxldCBfZWwkMTAgPSByZW5kZXIgPyBfZWwkOS5maXJzdENoaWxkIDogX2VsJDk7XG5cbiAgbGV0IF9lbCQxNiA9IF9lYWNoJChfZWwkMTAsIGNvbXB1dGVkKFtpdGVtcywgcmFuZ2VdLCAoKSA9PiB7XG4gICAgcmV0dXJuIGl0ZW1zKCkuc2xpY2UoMCwgcmFuZ2UoKSk7XG4gIH0pLCAoaXRlbSwga2V5KSA9PiB7XG4gICAgcmV0dXJuIGl0ZW07XG4gIH0sIChub2RlLCByZW5kZXIsIF9lYWNoTm9kZUtleSQsIGl0ZW0sIGtleSkgPT4ge1xuICAgIGxldCBfZWwkMTEgPSBnZXROb2RlKF90cGwkMiwgbm9kZSwgcmVuZGVyKTtcblxuICAgIGxldCBfZWwkMTIgPSByZW5kZXIgPyBfZWwkMTEuZmlyc3RDaGlsZCA6IF9lbCQxMTtcblxuICAgIGxldCBfZWwkMTMgPSBsb2FkQ29tcG9uZW50KF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCwgX2VsJDEyLCByZW5kZXIsIHtcbiAgICAgICRwcm9wczoge1xuICAgICAgICBcImNsYXNzZWRcIjogXCJmYWRlXCJcbiAgICAgIH0sXG4gICAgICAkY3VzdG9tSW5pdDogKCRob29rcywgbm9kZSwgcmVuZGVyKSA9PiB7XG4gICAgICAgIF90cmFuc2l0aW9uJChub2RlLCBjbGFzc2VkLCAnZmFkZScsIGNsYXNzZWQsICdmYWRlJyk7XG5cbiAgICAgICAgX3NldEtleSQoX2VhY2hOb2RlS2V5JCwgbm9kZSwgcmVuZGVyKTtcbiAgICAgIH0sXG4gICAgICAkc2xvdHM6IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6ICgpID0+IHtcbiAgICAgICAgICBsZXQgX2VsJDE0ID0gZ2V0Tm9kZShfdHBsJDMsIG5vZGUsIHJlbmRlcik7XG5cbiAgICAgICAgICBsZXQgX2VsJDE1ID0gcmVuZGVyID8gX2VsJDE0LmZpcnN0Q2hpbGQgOiBfZWwkMTQ7XG5cbiAgICAgICAgICBzdWJzY3JpYmUoW10sICgpID0+IHtcbiAgICAgICAgICAgIF9lbCQxNS5ub2RlVmFsdWUgPSBgdGVzdCAke2l0ZW19YDtcbiAgICAgICAgICB9LCAhcmVuZGVyKTtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDE0IDogX2VsJDE1O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVuZGVyID8gX2VsJDExIDogX2VsJDEzO1xuICB9LCByZW5kZXIpO1xuXG4gIHJldHVybiByZW5kZXIgPyBfZWwkOSA6IF9lbCQxNjtcbn0pO1xuXG5yZXR1cm4ge1xuICBub2RlOiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyLFxuICBob29rczogJGhvb2tzXG59O1xuXHRcdH1cblxuXHRcdGV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcblx0XHQiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy9BcHBsaWNhdGlvbnMvTUFNUC9odGRvY3MvaGF3YS9jb21wb25lbnRzL3BhZ2UuaGF3YS5jc3MnOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsIlxuXG5cblxuXG4vLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgUGFnZUNvbXBvbmVudCA9IGltcG9ydCgnLi4vY29tcG9uZW50cy9wYWdlLmhhd2EnKVxuXG5cbmltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSwgcmVmcmVzaCB9IGZyb20gJ2hhd2EnO1xuXG5cblxubGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuY29uc29sZS5sb2coJ3N0YXJ0IHJlbmRlcicpO1xudGltZSgncmVuZGVyJyk7XG5sZXQgdW5tb3VudCA9IHJlbmRlcihQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xudGltZSgncmVuZGVyJyk7XG5cblxuXG5zZXRUaW1lb3V0KCgpID0+IHtcblx0dW5tb3VudCgpO1xuXHRyZWZyZXNoKGxheW91dCk7XG5cblx0Y29uc29sZS5sb2coJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuXHR0aW1lKCdoeWRyYXRlJyk7XG5cdFxuXHR1bm1vdW50ID0gaHlkcmF0ZShQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xuXHRcblx0dGltZSgnaHlkcmF0ZScpO1xufSwgMzAwKVxuXG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9