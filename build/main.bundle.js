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
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");

		
		
		
		

		

		

		hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]
		
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

Object(hawa_render__WEBPACK_IMPORTED_MODULE_1__["createHooks"])($hooks);

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
/* harmony import */ var hawa_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hawa/directives */ "./packages/hawa/directives/src/index.js");
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");
/* harmony import */ var _components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/nav/container.hawa */ "./components/nav/container.hawa");
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");

		
		
 // let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2
		
		

		

		

		hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><label><input type="checkbox"></input>show list</label><div><input type="range" max="10"></input></div><div>add</div>{{ counter }}<!----></div>';

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
let range = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(5);
let counter = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(1);

function add() {
  counter(counter() + 1);
} // function eventd()
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

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["createHooks"])($hooks);

let _el$3 = _el$2.firstChild;
let _el$4 = _el$3.firstChild;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$4, {}, showItems, render);

let _el$5 = _el$4.nextSibling;
let _el$6 = _el$3.nextSibling;
let _el$7 = _el$6.firstChild;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["directive"])($hooks, hawa_directives__WEBPACK_IMPORTED_MODULE_1__["bind"], _el$7, {}, range, render);

let _el$8 = _el$6.nextSibling;

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["events"])(_el$8, {
  "click": function (event) {
    return add();
  }
});

let _el$9 = _el$8.firstChild;
let _el$10 = _el$8.nextSibling;
Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([counter], () => {
  _el$10.nodeValue = `${counter()}`;
}, !render);
let _el$11 = _el$10.nextSibling;

let _el$20 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["statement"])(_el$11, render, [showItems], () => {
  return showItems();
}, (node, render) => {
  let _el$12 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

  let _el$13 = render ? _el$12.firstChild : _el$12;

  let _el$19 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["map"])(_el$13, Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items, range], () => {
    return items().slice(0, range());
  }), (item, key) => {
    return item;
  }, (node, render, _eachNodeKey$, item, key) => {
    let _el$14 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$2, node, render);

    let _el$15 = render ? _el$14.firstChild : _el$14;

    let _el$16 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__["default"], _el$15, render, {
      $props: {
        "classed": "fade"
      },
      $customInit: ($hooks, node, render) => {
        Object(hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"])(node, hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade', hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade');

        Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["setKey"])(_eachNodeKey$, node, render);
      },
      $slots: {
        "default": () => {
          let _el$17 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["getNode"])(_tpl$3, node, render);

          let _el$18 = render ? _el$17.firstChild : _el$17;

          Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
            _el$18.nodeValue = `test ${item}`;
          }, !render);
          return render ? _el$17 : _el$18;
        }
      }
    });

    return render ? _el$14 : _el$16;
  }, render);

  return render ? _el$12 : _el$19;
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

/***/ "./test/c.js":
/*!*******************!*\
  !*** ./test/c.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_page_hawa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/page.hawa */ "./components/page.hawa");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "./test/time.js");
/* harmony import */ var hawa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa */ "./packages/hawa/src/index.js");
// import StaticComponent from '../components/static.hawa'

 // const PageComponent = import('../components/page.hawa')


var layout = document.getElementById('layout');
console.log('start render');
Object(_time__WEBPACK_IMPORTED_MODULE_1__["default"])('render');
var unmount = Object(hawa__WEBPACK_IMPORTED_MODULE_2__["render"])(_components_page_hawa__WEBPACK_IMPORTED_MODULE_0__["default"], layout);
Object(_time__WEBPACK_IMPORTED_MODULE_1__["default"])('render'); // setTimeout(() => {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return time; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzP2ZkNTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2E/NTdlNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RpbWUuanMiXSwibmFtZXMiOlsibGF5b3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lIiwidW5tb3VudCIsInJlbmRlciIsIlBhZ2VDb21wb25lbnQiLCJ0aW1lcyIsIm5hbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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Q0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0EsVTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQSxJQUFJSSxLQUFLLEdBQUcsRUFBWjtBQUVlLFNBQVNKLElBQVQsQ0FBY0ssSUFBZCxFQUNmO0FBQ0MsTUFBSUMsR0FBRyxHQUFJLElBQUlDLElBQUosRUFBRCxDQUFXQyxPQUFYLEVBQVY7O0FBRUEsTUFBRyxPQUFPSixLQUFLLENBQUNDLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0Q0QsU0FBSyxDQUFDQyxJQUFELENBQUwsR0FBY0MsR0FBZDtBQUNBLFdBQU9GLEtBQUssQ0FBQ0MsSUFBRCxDQUFaO0FBQ0E7O0FBRURQLFNBQU8sQ0FBQ0MsR0FBUixXQUFvQk0sSUFBcEIsU0FBOEJDLEdBQUcsR0FBR0YsS0FBSyxDQUFDQyxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT0QsS0FBSyxDQUFDQyxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuXHRcdFxuXHRcdFxuXHRcdFxuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdFx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0XHRcdHNsb3QgYXMgX3Nsb3QkLFxuXHRcdFx0bWFwIGFzIF9lYWNoJCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGRpcmVjdGl2ZSBhcyBfZGlyZWN0aXZlJCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdGVtaXQgYXMgX2VtaXQkLFxuXHRcdFx0Y2FsbCBhcyBfY2FsbCQsXG5cdFx0XHRjcmVhdGVDb21wb25lbnQgYXMgX2NyZWF0ZUNvbXBvbmVudCQsXG5cdFx0XHRjcmVhdGVIb29rcyBhcyBfY3JlYXRlSG9va3MkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ2hhd2EvcmVuZGVyJztcblxuXHRcdGltcG9ydCB7XG5cdFx0XHR0cmFuc2l0aW9uIGFzIF90cmFuc2l0aW9uJCxcblx0XHR9IGZyb20gJ2hhd2EvdHJhbnNpdGlvbidcblxuXHRcdF90cmFuc2l0aW9uJFxuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PHNwYW4+PC9zcGFuPjwvZGl2Pic7XG5cblxuXG5cdFx0XG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdCwgJGlkO1xuXHRcdFx0Ly8gY29kZVxuXHRcdFx0bGV0IHRpY2sgPSBvYnNlcnZhYmxlKDI0KTtcblxubGV0IHRlc3QgPSBfZ2V0UHJvcCQoJHByb3BzLCBcInRlc3RcIiwgbnVsbCk7XG5cbmxldCB2YWx1ZSA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidmFsdWVcIiwgbnVsbCk7XG5cbmxldCBjbGFzc0xpc3QgPSBjb21wdXRlZChbdGljaywgdGljaywgdGVzdF0sICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZWQ6IHRpY2soKSAlIDIgPT0gMCxcbiAgICBncmVlbjogdGljaygpICUgMyA9PSAwLFxuICAgIHNvbWU6IHRlc3QoKSA9PT0gbnVsbFxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZSgpIHtcbiAgLy8gJGVtaXQoJ2lucHV0JywgMik7XG4gIGFsZXJ0KDEpO1xufSAvLyBmdW5jdGlvbiBtb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIG1vdW50ZWQnKTtcbi8vIFx0Ly8gY29uc29sZS5sb2coJ2RlZmF1bHQgdmFsdWU6ICcsIHZhbHVlKCkpOyBcbi8vIH1cbi8vIGZ1bmN0aW9uIHVubW91bnRlZCgpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKCRpZCwgJ2NvbnRhaW5lciB1bm1vdW50ZWQnKTtcdFxuLy8gfVxuXG5cbmxldCAkaG9va3MgPSB7XG4gIG1vdW50ZWQ6IG51bGwsXG4gIHVubW91bnRlZDogbnVsbFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG4kZW1pdCA9IF9lbWl0JChfZWwkMik7XG5cbl9jYWxsJCgkY3VzdG9tSW5pdCwgJGhvb2tzLCBfZWwkMiwgcmVuZGVyKTtcblxuX2NyZWF0ZUhvb2tzJCgkaG9va3MpO1xuXG5fbWFrZUF0dHJzJChfZWwkMiwgcmVuZGVyLCB7XG4gIFwiY2xhc3NcIjogY29tcHV0ZWQoW2NsYXNzTGlzdCwgdGlja10sICgpID0+IHtcbiAgICByZXR1cm4gW2NsYXNzTGlzdCgpLCB7XG4gICAgICBhY3RpdmU6IHRpY2soKSA9PT0gMVxuICAgIH1dO1xuICB9KSxcbiAgXCJzdHlsZVwiOiBjb21wdXRlZChbdGlja10sICgpID0+IHtcbiAgICByZXR1cm4gW3tcbiAgICAgIGZvbnRTaXplOiB0aWNrKCkgKyAncHgnXG4gICAgfV07XG4gIH0pXG59KTtcblxuX21ha2VFdmVudHMkKF9lbCQyLCB7XG4gIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgcmV0dXJuIGNoYW5nZSgpO1xuICB9XG59KTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxuX3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQzLCByZW5kZXIsIG5vZGUgPT4ge30pO1xuXG5yZXR1cm4ge1xuICBub2RlOiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyLFxuICBob29rczogJGhvb2tzXG59O1xuXHRcdH1cblxuXHRcdGV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcblx0XHQiLCJcblx0XHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cdFx0aW1wb3J0IHsgYmluZCB9IGZyb20gJ2hhd2EvZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBjbGFzc2VkIH0gZnJvbSAnaGF3YS90cmFuc2l0aW9uJzsgLy8gbGV0IGl0ZW1zID0gbyhBcnJheS5mcm9tKHsgbGVuZ3RoOiAzIH0sIChfLCBpKSA9PiBpKSk7XG4vLyBsZXQgdnYgPSBvKCd0ZXN0Jyk7IDJcblx0XHRpbXBvcnQgX2NvbXBvbmVudF9uYXZjb250YWluZXIkIGZyb20gXCIuLi9jb21wb25lbnRzL25hdi9jb250YWluZXIuaGF3YVwiO1xuXHRcdGltcG9ydCBfY29tcG9uZW50X3N0eWxlcyQgZnJvbSBcIi4vcGFnZS5oYXdhP3R5cGU9c3R5bGVcIlxuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdFx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0XHRcdHNsb3QgYXMgX3Nsb3QkLFxuXHRcdFx0bWFwIGFzIF9lYWNoJCxcblx0XHRcdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0XHRcdGRpcmVjdGl2ZSBhcyBfZGlyZWN0aXZlJCxcblx0XHRcdGdldE5vZGUsXG5cdFx0XHRnZXRQcm9wIGFzIF9nZXRQcm9wJCxcblx0XHRcdHNldFJlZiBhcyBfc2V0UmVmJCxcblx0XHRcdHNldEtleSBhcyBfc2V0S2V5JCxcblx0XHRcdGVtaXQgYXMgX2VtaXQkLFxuXHRcdFx0Y2FsbCBhcyBfY2FsbCQsXG5cdFx0XHRjcmVhdGVDb21wb25lbnQgYXMgX2NyZWF0ZUNvbXBvbmVudCQsXG5cdFx0XHRjcmVhdGVIb29rcyBhcyBfY3JlYXRlSG9va3MkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ2hhd2EvcmVuZGVyJztcblxuXHRcdGltcG9ydCB7XG5cdFx0XHR0cmFuc2l0aW9uIGFzIF90cmFuc2l0aW9uJCxcblx0XHR9IGZyb20gJ2hhd2EvdHJhbnNpdGlvbidcblxuXHRcdF90cmFuc2l0aW9uJFxuXHRcdFxuXHRcdC8vIHRlbXBsYXRlc1xuXHRcdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDEuaW5uZXJIVE1MID0gJzxkaXY+PGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj48L2lucHV0PnNob3cgbGlzdDwvbGFiZWw+PGRpdj48aW5wdXQgdHlwZT1cInJhbmdlXCIgbWF4PVwiMTBcIj48L2lucHV0PjwvZGl2PjxkaXY+YWRkPC9kaXY+e3sgY291bnRlciB9fTwhLS0tLT48L2Rpdj4nO1xuXG5sZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQyLmlubmVySFRNTCA9ICc8IS0tLS0+JztcblxubGV0IF90cGwkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMy5pbm5lckhUTUwgPSAndGVzdCB7eyBpdGVtIH19JztcblxuXG5cblx0XHRcblx0XHRcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRcdGxldCB7ICRwcm9wcywgJHNsb3RzLCAkcmVmcywgJGN1c3RvbUluaXQgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0bGV0ICRlbWl0LCAkaWQ7XG5cdFx0XHQvLyBjb2RlXG5cdFx0XHQvLyBsZXQgaXRlbXMgPSBvKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcbi8vIGxldCB2diA9IG8oJ3Rlc3QnKTsgMlxubGV0IGl0ZW1zID0gb2JzZXJ2YWJsZShbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsICduaW5lJywgJ3RlbiddKTtcbmxldCBzaG93SXRlbXMgPSBvYnNlcnZhYmxlKHRydWUpO1xubGV0IHJhbmdlID0gb2JzZXJ2YWJsZSg1KTtcbmxldCBjb3VudGVyID0gb2JzZXJ2YWJsZSgxKTtcblxuZnVuY3Rpb24gYWRkKCkge1xuICBjb3VudGVyKGNvdW50ZXIoKSArIDEpO1xufSAvLyBmdW5jdGlvbiBldmVudGQoKVxuLy8ge1xuLy8gXHRhbGVydCgxKVxuLy8gfVxuLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKCdwYWdlIG1vdW50ZWQnKTtcbi8vIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdC8vIFx0aXRlbXMoWydvbmUnLCAnc2V2ZW4nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICd0d28nLCAnZWlnaHQnLCAnbmluZScsICd0ZW4nXSlcbi8vIFx0Ly8gfSwgMTAwMCk7XG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygncGFnZSB1bm1vdW50ZWQnKTtcbi8vIH1cblxuXG5sZXQgJGhvb2tzID0ge1xuICBtb3VudGVkOiBudWxsLFxuICB1bm1vdW50ZWQ6IG51bGxcbn07XG5cdFx0XHRcblx0XHRcdC8vIHJlbmRlclxuXHRcdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuJGVtaXQgPSBfZW1pdCQoX2VsJDIpO1xuXG5fY2FsbCQoJGN1c3RvbUluaXQsICRob29rcywgX2VsJDIsIHJlbmRlcik7XG5cbl9jcmVhdGVIb29rcyQoJGhvb2tzKTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcbmxldCBfZWwkNCA9IF9lbCQzLmZpcnN0Q2hpbGQ7XG5cbl9kaXJlY3RpdmUkKCRob29rcywgYmluZCwgX2VsJDQsIHt9LCBzaG93SXRlbXMsIHJlbmRlcik7XG5cbmxldCBfZWwkNSA9IF9lbCQ0Lm5leHRTaWJsaW5nO1xubGV0IF9lbCQ2ID0gX2VsJDMubmV4dFNpYmxpbmc7XG5sZXQgX2VsJDcgPSBfZWwkNi5maXJzdENoaWxkO1xuXG5fZGlyZWN0aXZlJCgkaG9va3MsIGJpbmQsIF9lbCQ3LCB7fSwgcmFuZ2UsIHJlbmRlcik7XG5cbmxldCBfZWwkOCA9IF9lbCQ2Lm5leHRTaWJsaW5nO1xuXG5fbWFrZUV2ZW50cyQoX2VsJDgsIHtcbiAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gYWRkKCk7XG4gIH1cbn0pO1xuXG5sZXQgX2VsJDkgPSBfZWwkOC5maXJzdENoaWxkO1xubGV0IF9lbCQxMCA9IF9lbCQ4Lm5leHRTaWJsaW5nO1xuc3Vic2NyaWJlKFtjb3VudGVyXSwgKCkgPT4ge1xuICBfZWwkMTAubm9kZVZhbHVlID0gYCR7Y291bnRlcigpfWA7XG59LCAhcmVuZGVyKTtcbmxldCBfZWwkMTEgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cbmxldCBfZWwkMjAgPSBfc3RhdGVtZW50JChfZWwkMTEsIHJlbmRlciwgW3Nob3dJdGVtc10sICgpID0+IHtcbiAgcmV0dXJuIHNob3dJdGVtcygpO1xufSwgKG5vZGUsIHJlbmRlcikgPT4ge1xuICBsZXQgX2VsJDEyID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQxMyA9IHJlbmRlciA/IF9lbCQxMi5maXJzdENoaWxkIDogX2VsJDEyO1xuXG4gIGxldCBfZWwkMTkgPSBfZWFjaCQoX2VsJDEzLCBjb21wdXRlZChbaXRlbXMsIHJhbmdlXSwgKCkgPT4ge1xuICAgIHJldHVybiBpdGVtcygpLnNsaWNlKDAsIHJhbmdlKCkpO1xuICB9KSwgKGl0ZW0sIGtleSkgPT4ge1xuICAgIHJldHVybiBpdGVtO1xuICB9LCAobm9kZSwgcmVuZGVyLCBfZWFjaE5vZGVLZXkkLCBpdGVtLCBrZXkpID0+IHtcbiAgICBsZXQgX2VsJDE0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgICBsZXQgX2VsJDE1ID0gcmVuZGVyID8gX2VsJDE0LmZpcnN0Q2hpbGQgOiBfZWwkMTQ7XG5cbiAgICBsZXQgX2VsJDE2ID0gbG9hZENvbXBvbmVudChfY29tcG9uZW50X25hdmNvbnRhaW5lciQsIF9lbCQxNSwgcmVuZGVyLCB7XG4gICAgICAkcHJvcHM6IHtcbiAgICAgICAgXCJjbGFzc2VkXCI6IFwiZmFkZVwiXG4gICAgICB9LFxuICAgICAgJGN1c3RvbUluaXQ6ICgkaG9va3MsIG5vZGUsIHJlbmRlcikgPT4ge1xuICAgICAgICBfdHJhbnNpdGlvbiQobm9kZSwgY2xhc3NlZCwgJ2ZhZGUnLCBjbGFzc2VkLCAnZmFkZScpO1xuXG4gICAgICAgIF9zZXRLZXkkKF9lYWNoTm9kZUtleSQsIG5vZGUsIHJlbmRlcik7XG4gICAgICB9LFxuICAgICAgJHNsb3RzOiB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiAoKSA9PiB7XG4gICAgICAgICAgbGV0IF9lbCQxNyA9IGdldE5vZGUoX3RwbCQzLCBub2RlLCByZW5kZXIpO1xuXG4gICAgICAgICAgbGV0IF9lbCQxOCA9IHJlbmRlciA/IF9lbCQxNy5maXJzdENoaWxkIDogX2VsJDE3O1xuXG4gICAgICAgICAgc3Vic2NyaWJlKFtdLCAoKSA9PiB7XG4gICAgICAgICAgICBfZWwkMTgubm9kZVZhbHVlID0gYHRlc3QgJHtpdGVtfWA7XG4gICAgICAgICAgfSwgIXJlbmRlcik7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlciA/IF9lbCQxNyA6IF9lbCQxODtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbmRlciA/IF9lbCQxNCA6IF9lbCQxNjtcbiAgfSwgcmVuZGVyKTtcblxuICByZXR1cm4gcmVuZGVyID8gX2VsJDEyIDogX2VsJDE5O1xufSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9oYXdhL2NvbXBvbmVudHMvcGFnZS5oYXdhLmNzcyc7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsIlxuXG5cblxuXG4vLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgUGFnZUNvbXBvbmVudCA9IGltcG9ydCgnLi4vY29tcG9uZW50cy9wYWdlLmhhd2EnKVxuXG5cbmltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSwgcmVmcmVzaCB9IGZyb20gJ2hhd2EnO1xuXG5cblxubGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuY29uc29sZS5sb2coJ3N0YXJ0IHJlbmRlcicpO1xudGltZSgncmVuZGVyJyk7XG5sZXQgdW5tb3VudCA9IHJlbmRlcihQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xudGltZSgncmVuZGVyJyk7XG5cblxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vIFx0dW5tb3VudCgpO1xuLy8gXHRyZWZyZXNoKGxheW91dCk7XG5cbi8vIFx0Y29uc29sZS5sb2coJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHR0aW1lKCdoeWRyYXRlJyk7XG5cdFxuLy8gXHR1bm1vdW50ID0gaHlkcmF0ZShQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xuXHRcbi8vIFx0dGltZSgnaHlkcmF0ZScpO1xuLy8gfSwgMzAwKVxuXG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9