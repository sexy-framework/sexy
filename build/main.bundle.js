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

Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["createHooks"])($hooks);

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

    let _el$13 = Object(hawa_render__WEBPACK_IMPORTED_MODULE_5__["loadComponent"])(_components_nav_container_hawa__WEBPACK_IMPORTED_MODULE_3__["default"], _el$12, render, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2EuY3NzP2ZkNTEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2E/NTdlNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvYy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RpbWUuanMiXSwibmFtZXMiOlsibGF5b3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lIiwidW5tb3VudCIsInJlbmRlciIsIlBhZ2VDb21wb25lbnQiLCJ0aW1lcyIsIm5hbWUiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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SUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9KLEtBQUssQ0FBQ0MsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDRCxTQUFLLENBQUNDLElBQUQsQ0FBTCxHQUFjQyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDQyxJQUFELENBQVo7QUFDQTs7QUFFRFAsU0FBTyxDQUFDQyxHQUFSLFdBQW9CTSxJQUFwQixTQUE4QkMsR0FBRyxHQUFHRixLQUFLLENBQUNDLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPRCxLQUFLLENBQUNDLElBQUQsQ0FBWjtBQUNBLEMiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcblx0XHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cdFx0XG5cdFx0XG5cdFx0XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRtYXAgYXMgX2VhY2gkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdGNyZWF0ZUhvb2tzIGFzIF9jcmVhdGVIb29rcyQsXG5cdFx0XHRwYXJzZUNvbnRleHQsXG5cdFx0XHRsb2FkQ29tcG9uZW50LFxuXHRcdH0gZnJvbSAnaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHRyYW5zaXRpb24gYXMgX3RyYW5zaXRpb24kLFxuXHRcdH0gZnJvbSAnaGF3YS90cmFuc2l0aW9uJ1xuXG5cdFx0X3RyYW5zaXRpb24kXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48c3Bhbj48L3NwYW4+PC9kaXY+JztcblxuXG5cblx0XHRcblx0XHRcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRcdGxldCB7ICRwcm9wcywgJHNsb3RzLCAkcmVmcywgJGN1c3RvbUluaXQgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0bGV0ICRlbWl0LCAkaWQ7XG5cdFx0XHQvLyBjb2RlXG5cdFx0XHRsZXQgdGljayA9IG9ic2VydmFibGUoMjQpO1xuXG5sZXQgdGVzdCA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidGVzdFwiLCBudWxsKTtcblxubGV0IHZhbHVlID0gX2dldFByb3AkKCRwcm9wcywgXCJ2YWx1ZVwiLCBudWxsKTtcblxubGV0IGNsYXNzTGlzdCA9IGNvbXB1dGVkKFt0aWNrLCB0aWNrLCB0ZXN0XSwgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZDogdGljaygpICUgMiA9PSAwLFxuICAgIGdyZWVuOiB0aWNrKCkgJSAzID09IDAsXG4gICAgc29tZTogdGVzdCgpID09PSBudWxsXG4gIH07XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlKCkge1xuICAvLyAkZW1pdCgnaW5wdXQnLCAyKTtcbiAgYWxlcnQoMSk7XG59IC8vIGZ1bmN0aW9uIG1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygkaWQsICdjb250YWluZXIgbW91bnRlZCcpO1xuLy8gXHQvLyBjb25zb2xlLmxvZygnZGVmYXVsdCB2YWx1ZTogJywgdmFsdWUoKSk7IFxuLy8gfVxuLy8gZnVuY3Rpb24gdW5tb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIHVubW91bnRlZCcpO1x0XG4vLyB9XG5cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbnVsbCxcbiAgdW5tb3VudGVkOiBudWxsXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbl9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcbiAgXCJjbGFzc1wiOiBjb21wdXRlZChbY2xhc3NMaXN0LCB0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbY2xhc3NMaXN0KCksIHtcbiAgICAgIGFjdGl2ZTogdGljaygpID09PSAxXG4gICAgfV07XG4gIH0pLFxuICBcInN0eWxlXCI6IGNvbXB1dGVkKFt0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgZm9udFNpemU6IHRpY2soKSArICdweCdcbiAgICB9XTtcbiAgfSlcbn0pO1xuXG5fbWFrZUV2ZW50cyQoX2VsJDIsIHtcbiAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gY2hhbmdlKCk7XG4gIH1cbn0pO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5fc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDMsIHJlbmRlciwgbm9kZSA9PiB7fSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIlxuXHRcdGltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUsIHdhdGNoIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnaGF3YS9kaXJlY3RpdmVzJztcbmltcG9ydCB7IGNsYXNzZWQgfSBmcm9tICdoYXdhL3RyYW5zaXRpb24nOyAvLyBsZXQgaXRlbXMgPSBvKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcbi8vIGxldCB2diA9IG8oJ3Rlc3QnKTsgMlxuXHRcdGltcG9ydCBfY29tcG9uZW50X25hdmNvbnRhaW5lciQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2L2NvbnRhaW5lci5oYXdhXCI7XG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRtYXAgYXMgX2VhY2gkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdGNyZWF0ZUhvb2tzIGFzIF9jcmVhdGVIb29rcyQsXG5cdFx0XHRwYXJzZUNvbnRleHQsXG5cdFx0XHRsb2FkQ29tcG9uZW50LFxuXHRcdH0gZnJvbSAnaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdHRyYW5zaXRpb24gYXMgX3RyYW5zaXRpb24kLFxuXHRcdH0gZnJvbSAnaGF3YS90cmFuc2l0aW9uJ1xuXG5cdFx0X3RyYW5zaXRpb24kXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiPjwvaW5wdXQ+c2hvdyBsaXN0PC9sYWJlbD48ZGl2PjxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtYXg9XCIxMFwiPjwvaW5wdXQ+PC9kaXY+PCEtLS0tPjwvZGl2Pic7XG5cbmxldCBfdHBsJDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDIuaW5uZXJIVE1MID0gJzwhLS0tLT4nO1xuXG5sZXQgX3RwbCQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQzLmlubmVySFRNTCA9ICd0ZXN0IHt7IGl0ZW0gfX0nO1xuXG5cblxuXHRcdFxuXHRcdFxuXHRcdC8vIGNvbXBvbmVudCBmdW5jdGlvblxuXHRcdGZ1bmN0aW9uIHJlbmRlcihjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMsICRyZWZzLCAkY3VzdG9tSW5pdCB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdFx0XG5cdFx0XHRsZXQgJGVtaXQsICRpZDtcblx0XHRcdC8vIGNvZGVcblx0XHRcdC8vIGxldCBpdGVtcyA9IG8oQXJyYXkuZnJvbSh7IGxlbmd0aDogMyB9LCAoXywgaSkgPT4gaSkpO1xuLy8gbGV0IHZ2ID0gbygndGVzdCcpOyAyXG5sZXQgaXRlbXMgPSBvYnNlcnZhYmxlKFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJ10pO1xubGV0IHNob3dJdGVtcyA9IG9ic2VydmFibGUodHJ1ZSk7XG5sZXQgcmFuZ2UgPSBvYnNlcnZhYmxlKDUpOyAvLyBmdW5jdGlvbiBldmVudGQoKVxuLy8ge1xuLy8gXHRhbGVydCgxKVxuLy8gfVxuLy8gZnVuY3Rpb24gbW91bnRlZCgpXG4vLyB7XG4vLyBcdGNvbnNvbGUubG9nKCdwYWdlIG1vdW50ZWQnKTtcbi8vIFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyBcdC8vIFx0aXRlbXMoWydvbmUnLCAnc2V2ZW4nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICd0d28nLCAnZWlnaHQnLCAnbmluZScsICd0ZW4nXSlcbi8vIFx0Ly8gfSwgMTAwMCk7XG4vLyB9XG4vLyBmdW5jdGlvbiB1bm1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygncGFnZSB1bm1vdW50ZWQnKTtcbi8vIH1cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbnVsbCxcbiAgdW5tb3VudGVkOiBudWxsXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbmxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5sZXQgX2VsJDQgPSBfZWwkMy5maXJzdENoaWxkO1xuXG5fZGlyZWN0aXZlJCgkaG9va3MsIGJpbmQsIF9lbCQ0LCB7fSwgc2hvd0l0ZW1zLCByZW5kZXIpO1xuXG5sZXQgX2VsJDUgPSBfZWwkNC5uZXh0U2libGluZztcbmxldCBfZWwkNiA9IF9lbCQzLm5leHRTaWJsaW5nO1xubGV0IF9lbCQ3ID0gX2VsJDYuZmlyc3RDaGlsZDtcblxuX2RpcmVjdGl2ZSQoJGhvb2tzLCBiaW5kLCBfZWwkNywge30sIHJhbmdlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDggPSBfZWwkNi5uZXh0U2libGluZztcblxubGV0IF9lbCQxNyA9IF9zdGF0ZW1lbnQkKF9lbCQ4LCByZW5kZXIsIFtzaG93SXRlbXNdLCAoKSA9PiB7XG4gIHJldHVybiBzaG93SXRlbXMoKTtcbn0sIChub2RlLCByZW5kZXIpID0+IHtcbiAgbGV0IF9lbCQ5ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cbiAgbGV0IF9lbCQxMCA9IHJlbmRlciA/IF9lbCQ5LmZpcnN0Q2hpbGQgOiBfZWwkOTtcblxuICBsZXQgX2VsJDE2ID0gX2VhY2gkKF9lbCQxMCwgY29tcHV0ZWQoW2l0ZW1zLCByYW5nZV0sICgpID0+IHtcbiAgICByZXR1cm4gaXRlbXMoKS5zbGljZSgwLCByYW5nZSgpKTtcbiAgfSksIChpdGVtLCBrZXkpID0+IHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfSwgKG5vZGUsIHJlbmRlciwgX2VhY2hOb2RlS2V5JCwgaXRlbSwga2V5KSA9PiB7XG4gICAgbGV0IF9lbCQxMSA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gICAgbGV0IF9lbCQxMiA9IHJlbmRlciA/IF9lbCQxMS5maXJzdENoaWxkIDogX2VsJDExO1xuXG4gICAgbGV0IF9lbCQxMyA9IGxvYWRDb21wb25lbnQoX2NvbXBvbmVudF9uYXZjb250YWluZXIkLCBfZWwkMTIsIHJlbmRlciwge1xuICAgICAgJHByb3BzOiB7XG4gICAgICAgIFwiY2xhc3NlZFwiOiBcImZhZGVcIlxuICAgICAgfSxcbiAgICAgICRjdXN0b21Jbml0OiAoJGhvb2tzLCBub2RlLCByZW5kZXIpID0+IHtcbiAgICAgICAgX3RyYW5zaXRpb24kKG5vZGUsIGNsYXNzZWQsICdmYWRlJywgY2xhc3NlZCwgJ2ZhZGUnKTtcblxuICAgICAgICBfc2V0S2V5JChfZWFjaE5vZGVLZXkkLCBub2RlLCByZW5kZXIpO1xuICAgICAgfSxcbiAgICAgICRzbG90czoge1xuICAgICAgICBcImRlZmF1bHRcIjogKCkgPT4ge1xuICAgICAgICAgIGxldCBfZWwkMTQgPSBnZXROb2RlKF90cGwkMywgbm9kZSwgcmVuZGVyKTtcblxuICAgICAgICAgIGxldCBfZWwkMTUgPSByZW5kZXIgPyBfZWwkMTQuZmlyc3RDaGlsZCA6IF9lbCQxNDtcblxuICAgICAgICAgIHN1YnNjcmliZShbXSwgKCkgPT4ge1xuICAgICAgICAgICAgX2VsJDE1Lm5vZGVWYWx1ZSA9IGB0ZXN0ICR7aXRlbX1gO1xuICAgICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICAgIHJldHVybiByZW5kZXIgPyBfZWwkMTQgOiBfZWwkMTU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZW5kZXIgPyBfZWwkMTEgOiBfZWwkMTM7XG4gIH0sIHJlbmRlcik7XG5cbiAgcmV0dXJuIHJlbmRlciA/IF9lbCQ5IDogX2VsJDE2O1xufSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9oYXdhL2NvbXBvbmVudHMvcGFnZS5oYXdhLmNzcyc7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsIlxuXG5cblxuXG4vLyBpbXBvcnQgU3RhdGljQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGljLmhhd2EnXG5pbXBvcnQgUGFnZUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UuaGF3YSdcbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuLy8gY29uc3QgUGFnZUNvbXBvbmVudCA9IGltcG9ydCgnLi4vY29tcG9uZW50cy9wYWdlLmhhd2EnKVxuXG5cbmltcG9ydCB7IHJlbmRlciwgaHlkcmF0ZSwgcmVmcmVzaCB9IGZyb20gJ2hhd2EnO1xuXG5cblxubGV0IGxheW91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYXlvdXQnKTtcblxuY29uc29sZS5sb2coJ3N0YXJ0IHJlbmRlcicpO1xudGltZSgncmVuZGVyJyk7XG5sZXQgdW5tb3VudCA9IHJlbmRlcihQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xudGltZSgncmVuZGVyJyk7XG5cblxuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vIFx0dW5tb3VudCgpO1xuLy8gXHRyZWZyZXNoKGxheW91dCk7XG5cbi8vIFx0Y29uc29sZS5sb2coJ3N0YXJ0IGh5ZHJhdGlvbicpO1xuLy8gXHR0aW1lKCdoeWRyYXRlJyk7XG5cdFxuLy8gXHR1bm1vdW50ID0gaHlkcmF0ZShQYWdlQ29tcG9uZW50LCBsYXlvdXQpO1xuXHRcbi8vIFx0dGltZSgnaHlkcmF0ZScpO1xuLy8gfSwgMzAwKVxuXG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9