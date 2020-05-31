/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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
_tpl$1.innerHTML = '<!---->';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<button>${ buttonText }</button><div>test</div>';


	
	// component function
	function render(context, node = false) {
		let render = node === false;

		let { $props, $slots } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["parseContext"])(context);
		
		// code
		let visible = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(false);
let items = Array.from({
  length: 10
}, (_, i) => i);
let activeClass = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([visible], () => {
  return {
    red: visible()
  };
});
let buttonText = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([visible], () => {
  return visible() ? 'hide' : 'show';
});

function alert(d) {
  v(v() + 1);
}
		
		// render
		let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

let _el$8 = Object(_hawa_map__WEBPACK_IMPORTED_MODULE_1__["map"])(_el$2, items, (item, key) => {
  return item;
}, (node, render, _keyExpr$, item, key) => {
  let _el$3 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["getNode"])(_tpl$2, node, render);

  let _el$4 = render ? _el$3.firstChild : _el$3;

  _el$4.setAttribute("data-key", item);

  Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["events"])(_el$4, render, {
    "click": function (event) {
      return visible(!visible());
    }
  });

  let _el$5 = _el$4.firstChild;
  Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([buttonText], () => {
    _el$5.nodeValue = `${buttonText()}`;
  }, !render);
  let _el$6 = _el$4.nextSibling;

  Object(_hawa_render__WEBPACK_IMPORTED_MODULE_2__["attrs"])(_el$6, render, {
    "class": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([activeClass], () => {
      return activeClass();
    })
  });

  let _el$7 = _el$6.firstChild;
  return render ? _el$3 : _el$6;
}, render);

return render ? _el$1 : _el$8;
	}
	

/***/ }),

/***/ "./packages/map/dist/diff.js":
/*!***********************************!*\
  !*** ./packages/map/dist/diff.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = diff;

function diff(parent, a, b, keyExpr, get, before) {
  var aIdx = new Map();
  var bIdx = new Map();
  var i;
  var j; // Create a mapping from keys to their position in the old list

  for (i = 0; i < a.length; i++) {
    var key = keyExpr(a[i], i);
    aIdx.set(key, i);
  } // Create a mapping from keys to their position in the new list


  for (i = 0; i < b.length; i++) {
    var _key = keyExpr(b[i], i);

    bIdx.set(_key, i);
  } // console.log(aIdx, bIdx);


  for (i = j = 0; i !== a.length || j !== b.length;) {
    var aElm = a[i],
        bElm = b[j];

    if (aElm === null) {
      // This is a element that has been moved to earlier in the list
      i++;
    } else if (b.length <= j) {
      // No more elements in new, this is a delete
      parent.removeChild(get(a[i], i, -1));
      i++;
    } else if (a.length <= i) {
      // No more elements in old, this is an addition
      parent.insertBefore(get(bElm, j, 1), get(a[i], i, 0) || before);
      j++;
    } else if (aElm === bElm) {
      // No difference, we move on
      i++;
      j++;
    } else {
      // Look for the current element at this location in the new list
      // This gives us the idx of where this element should be
      var curElmInNew = bIdx.get(aElm); // Look for the the wanted elment at this location in the old list
      // This gives us the idx of where the wanted element is now

      var wantedElmInOld = aIdx.get(bElm);

      if (curElmInNew === undefined) {
        // Current element is not in new list, it has been removed
        parent.removeChild(get(a[i], i, -1));
        i++;
      } else if (wantedElmInOld === undefined) {
        // New element is not in old list, it has been added
        parent.insertBefore(get(bElm, j, 1), get(a[i], i, 0) || before);
        j++;
      } else {
        // Element is in both lists, it has been moved
        // console.log('move', a[i], 'from', wantedElmInOld, 'to', i)
        parent.insertBefore(get(a[wantedElmInOld], wantedElmInOld, 1), get(a[i], 0) || before);
        a[wantedElmInOld] = null;
        if (wantedElmInOld > i + 1) i++;
        j++;
      }
    }
  }

  return b;
}

/***/ }),

/***/ "./packages/map/dist/index.js":
/*!************************************!*\
  !*** ./packages/map/dist/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/map/dist/diff.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./packages/map/dist/utils.js");

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/**
 * Map over a list of unique items that create DOM nodes.
 *
 * No duplicates in the list of items is a hard requirement, the diffing
 * algorithm will not work with duplicate values. See `./unique.js`.
 *
 * @param  {Function} items - Function or observable that creates a list.
 * @param  {Function} expr
 * @param {boolean} [cleaning]
 * @return {DocumentFragment}
 */


function map(bindNode, items, keyExpr, expr, render) {
  // const { root, subscribe, sample, cleanup } = api;
  // Disable cleaning for templates by default.
  var cleaning = true; //!expr.$t;

  var parent = document.createDocumentFragment();
  var endMark = (0, _utils.add)(parent, '');
  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = []; // hydration prepare 

  if (!render) {
    var _items = (0, _observable.value)(items);

    var node = bindNode;
    var lastNode = null;

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);
      var lastHydratedNode = null;

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          lastHydratedNode = expr(node, false, keyExpr, item, key);
          node = lastHydratedNode.nextSibling; // console.warn('lastHydratedNode', lastHydratedNode, node)

          lastNode = lastHydratedNode;
        }
      }

      if (lastHydratedNode && lastHydratedNode.hasAttribute) {
        if (!lastHydratedNode.hasAttribute('data-key')) {
          var hydratedNodes = [];
          var startNodeSearch = lastHydratedNode;

          while (startNodeSearch) {
            hydratedNodes.unshift(startNodeSearch);

            if (startNodeSearch.hasAttribute('data-key')) {
              break;
            }

            startNodeSearch = startNodeSearch.previousSibling;
          }

          defaultA[key] = item;
          var n = lastHydratedNode;

          if (hydratedNodes.length > 0) {
            n = (0, _utils.persistent)({
              childNodes: hydratedNodes
            });
          }

          nodes.set(itemKey, n);
          (0, _utils.diffable)(n, 1);
        }
      }
    }

    endMark = document.createTextNode('');

    if (lastNode === null) {
      render = true;
      bindNode.after(endMark);
    } else {
      lastNode.after(endMark);
    } // console.log(lastNode);
    // endMark = add(lastNode, '');

  }

  var unsubscribe = (0, _observable.subscribe)(items, function (a) {
    var b = (0, _observable.value)(items);
    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark));
    toRemove.forEach(dispose);
    return content; // });
  }, !render);

  if (render) {
    bindNode.replaceWith(parent);
  } // disposeAll();


  function addNode(item, key, i, el) {
    if (el === void 0) {
      el = null;
    }

    if (item == null) return;
    var nodeKey = keyExpr(item, key);
    var n = nodes.get(nodeKey);

    if (i === 1) {
      toRemove.delete(item);

      if (!n) {
        n = el ? el : expr(null, true, keyExpr, item, key);
        if (n.nodeType === 11) n = (0, _utils.persistent)(n) || n;
        nodes.set(nodeKey, n);
      }
    } else if (i === -1) {
      toRemove.add(nodeKey);
    }

    return (0, _utils.diffable)(n, i);
  } // cleanup(disposeAll);


  function disposeAll() {
    disposers.forEach(function (d) {
      return d();
    });
    disposers.clear();
    nodes.clear();
    toRemove.clear();
  }

  function dispose(item) {
    var disposer = disposers.get(item);

    if (disposer) {
      disposer();
      disposers.delete(item);
    }

    nodes.delete(item);
  }

  return endMark;
}

/***/ }),

/***/ "./packages/map/dist/utils.js":
/*!************************************!*\
  !*** ./packages/map/dist/utils.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.frag = frag;
exports.add = add;
exports.castNode = castNode;
exports.removeNodes = removeNodes;
exports.persistent = exports.diffable = void 0;

function frag(value) {
  var childNodes = value.childNodes;
  if (!childNodes || value.nodeType !== 11) return;

  if (childNodes.length < 2) {
    return childNodes[0];
  } // For a fragment of 2 elements or more add a startMark. This is required
  // for multiple nested conditional computeds that return fragments.


  var _startMark = add(value, '', childNodes[0]);

  return {
    _startMark: _startMark
  };
}

function add(parent, value, endMark) {
  if (endMark === void 0) {
    endMark = null;
  }

  value = castNode(value);
  var fragOrNode = frag(value) || value; // If endMark is `null`, value will be added to the end of the list.

  parent.insertBefore(value, endMark && endMark.parentNode && endMark);
  return fragOrNode;
}

function castNode(value) {
  if (typeof value === 'string') {
    return document.createTextNode(value);
  }

  if (!(value instanceof Node)) {
    // Passing an empty array creates a DocumentFragment.
    return document.createDocumentFragment([value]);
  }

  return value;
}

function removeNodes(parent, startNode, endMark) {
  while (startNode && startNode !== endMark) {
    var n = startNode.nextSibling; // Is needed in case the child was pulled out the parent before clearing.

    if (parent === startNode.parentNode) {
      parent.removeChild(startNode);
    }

    startNode = n;
  }
}

var nodeType = 111;

var diffable = function diffable(node, operation) {
  return node.nodeType === nodeType ? 1 / operation < 0 ? operation ? removeNodes(node._firstChild.parentNode, node._firstChild.nextSibling, node._lastChild.nextSibling) || node._firstChild : node._lastChild : operation ? node._valueOf() : node._firstChild : node;
};

exports.diffable = diffable;

var persistent = function persistent(fragment) {
  var childNodes = fragment.childNodes;
  var length = childNodes.length; // If the fragment has no content
  // it should return undefined and break

  if (length < 2) return childNodes[0];
  var nodes = Array.from(childNodes);
  var _firstChild = nodes[0];
  var _lastChild = nodes[length - 1];
  return {
    nodeType: nodeType,
    _firstChild: _firstChild,
    _lastChild: _lastChild,
    _valueOf: function _valueOf() {
      if (childNodes.length !== length) {
        var i = 0;

        while (i < length) {
          fragment.appendChild(nodes[i++]);
        }
      }

      return fragment;
    }
  };
};

exports.persistent = persistent;

/***/ }),

/***/ "./packages/observable/dist/index.js":
/*!*******************************************!*\
  !*** ./packages/observable/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = value;
exports.observable = observable;
exports.computed = computed;
exports.subscribe = subscribe;
exports.isObservable = isObservable;
exports.watch = watch;
exports.cleanup = cleanup;

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function value(value) {
  if (value.$o) {
    return value();
  } else {
    return value;
  }
}

function observable(value) {
  function data(nextValue) {
    if (arguments.length === 0) {
      return value;
    }

    value = nextValue;

    data._observers.forEach(function (observer) {
      observer._fresh = false;
    });

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  return data;
}

function computed(obs, value) {
  obs = [].concat(obs);

  for (var _iterator = _createForOfIteratorHelperLoose(obs), _step; !(_step = _iterator()).done;) {
    var ob = _step.value;

    ob._observers.add(update);
  }

  function data() {
    if (!update._fresh) {
      update();
    }

    return value();
  }

  function update() {
    update._fresh = true;

    data._observers.forEach(function (observer) {
      return observer();
    });

    return value;
  }

  data._observers = new Set();
  data.$o = true;
  update();
  return data;
}

function subscribe(obs, value, skip) {
  if (skip === void 0) {
    skip = false;
  }

  var lastValue = null;
  obs = [].concat(obs);

  var fn = function fn() {
    lastValue = value(lastValue);
  };

  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(fn);
    }

    if (ob._deps) {
      for (var _iterator3 = _createForOfIteratorHelperLoose(ob._deps), _step3; !(_step3 = _iterator3()).done;) {
        var dep = _step3.value;
        dep.add(fn);
      }
    }
  }

  if (!skip) {
    fn();
  }
} // Is property observable 


function isObservable(prop) {
  return prop.$o !== undefined || typeof prop === 'function';
}
/**
 * Watch property
 */


function watch(prop, fn, render) {
  if (render === void 0) {
    render = true;
  }

  if (!isObservable(prop)) {
    if (render) {
      fn(prop);
    }

    return;
  }

  subscribe(prop, function () {
    fn(prop());
  }, !render);
}

function cleanup(fn) {}

/***/ }),

/***/ "./packages/render/dist/attrs.js":
/*!***************************************!*\
  !*** ./packages/render/dist/attrs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrArgToObj = attrArgToObj;
exports.attrArgToString = attrArgToString;
exports.makeClass = makeClass;
exports.makeStyles = makeStyles;
exports.attrs = attrs;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _extends() {
  _extends = Object.assign || function (target) {
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

attrArgToObj;

function attrArgToObj(args) {
  var result = {};

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = _extends(result, attrArgToObj(args[i]));
    }
  } else if (typeof args === 'object') {
    result = args;
  }

  return result;
}

function attrArgToString(args) {
  var result = new Set(); // args = args.concat([]);

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = new Set([].concat(result, attrArgToString(args[i])));
    }
  } else if (typeof args === 'object') {
    for (var key in args) {
      if (args[key]) {
        result.add(key);
      }
    }
  } else {
    result.add(args);
  }

  return result;
}

function makeClass(node, value, render) {
  var lastClassAdopted = [];
  (0, _observable.watch)(value, function (v) {
    var tmp = node.classList;
    var toSet = Array.from(attrArgToString(v));
    var toRemove = lastClassAdopted.filter(function (x) {
      return !toSet.includes(x);
    });

    for (var _i = 0, _toSet = toSet; _i < _toSet.length; _i++) {
      var name = _toSet[_i];
      node.classList.add(name);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(toRemove), _step; !(_step = _iterator()).done;) {
      var _name = _step.value;
      node.classList.remove(_name);
    }

    lastClassAdopted = toSet;
  }, render);
}

function makeStyles(node, value, render) {
  (0, _observable.watch)(value, function (v) {
    var styles = attrArgToObj(v);

    for (var name in styles) {
      node.style[name] = styles[name];
    }
  }, render);
}

function attrs(node, render, attrs) {
  var _loop = function _loop(name) {
    var value = attrs[name];

    if (name === 'class') {
      makeClass(node, value, render);
    } else if (name === 'style') {
      makeStyles(node, value, render);
    } else {
      (0, _observable.watch)(value, function (v) {
        node.setAttribute(name, v);
      }, render);
    }
  };

  for (var name in attrs) {
    _loop(name);
  }
}

/***/ }),

/***/ "./packages/render/dist/events.js":
/*!****************************************!*\
  !*** ./packages/render/dist/events.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = events;

function events(node, render, options) {
  for (var key in options) {
    node.addEventListener(key, options[key]);
  }
}

/***/ }),

/***/ "./packages/render/dist/index.js":
/*!***************************************!*\
  !*** ./packages/render/dist/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "attrs", {
  enumerable: true,
  get: function get() {
    return _attrs.attrs;
  }
});
Object.defineProperty(exports, "events", {
  enumerable: true,
  get: function get() {
    return _events.events;
  }
});
Object.defineProperty(exports, "slot", {
  enumerable: true,
  get: function get() {
    return _slot.slot;
  }
});
Object.defineProperty(exports, "getNode", {
  enumerable: true,
  get: function get() {
    return _templates.getNode;
  }
});
Object.defineProperty(exports, "parseContext", {
  enumerable: true,
  get: function get() {
    return _templates.parseContext;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.statement;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/render/dist/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/render/dist/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/render/dist/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

/***/ }),

/***/ "./packages/render/dist/slot.js":
/*!**************************************!*\
  !*** ./packages/render/dist/slot.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.slot = slot;

function slot($slots, name, node, callback) {
  if ($slots[name] === undefined) {
    callback(node);
    return;
  }

  node.innerHTML = $slots[name];
  return node;
}

/***/ }),

/***/ "./packages/render/dist/statement.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/statement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstCondition = getFirstCondition;
exports.getInitiatedNodes = getInitiatedNodes;
exports.append = append;
exports.clone = clone;
exports.statement = statement;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      return function () {
        if (i >= o.length) return {
          done: true
        };
        return {
          done: false,
          value: o[i++]
        };
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  it = o[Symbol.iterator]();
  return it.next.bind(it);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function getFirstCondition(args) {
  var currentConditionIndex = null;

  for (var i = 0; i < args.length; i += 2) {
    var condition = args[i];
    var renderFn = args[i + 1];

    if (condition()) {
      currentConditionIndex = i;
      break;
    }
  }

  return currentConditionIndex;
}

function getInitiatedNodes(start, end) {
  var nodes = [];
  var current = start;

  do {
    var tmp = current.nextSibling;
    nodes.push(current);
    current = tmp;
  } while (current !== end && current !== null);

  nodes.push(end);

  if (nodes.length === 0) {
    return nodes[0];
  }

  return nodes;
}

function append(start, node) {
  start.after(node); // console.log('append', start, node)
}

function clone(node) {
  if (node.nodeType === 11) {
    var arr = []; //document.createDocumentFragment();

    for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      arr.push(child);
    }

    return arr;
  }

  return node;
}

function statement(node, render, deps) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  } // let startMark = document.createTextNode('');


  var endMark = document.createTextNode(''); // node.before(startMark);

  var lastCondition = render ? null : getFirstCondition(args);

  if (render && lastCondition === null) {
    node.after(endMark);
  }

  var firstLoad = true;
  (0, _observable.subscribe)(deps, function () {
    var returnNode = document.createComment('');
    var hasConditionRendered = false;
    var currentConditionIndex = null;

    for (var i = 0; i < args.length; i += 2) {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        var shouldRender = lastCondition !== i;
        returnNode = renderFn(node, shouldRender);
        currentConditionIndex = i;

        if (shouldRender) {
          hasConditionRendered = true;
        }

        break;
      }
    }

    if (!render && firstLoad) {
      returnNode.after(endMark);
      node = getInitiatedNodes(node, returnNode);
    }

    firstLoad = false;
    var isSameCondition = currentConditionIndex === lastCondition;
    lastCondition = currentConditionIndex; // If same condition that it was hydrated and we dont need to replace nodes

    if (isSameCondition) {
      return;
    } // console.warn('[statement]', node, returnNode);
    // cleanup(startMark, endMark);
    // append(startMark, returnNode);


    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i]; // console.log(child);

        if (i === 0) {
          child.replaceWith(returnNode);
        } else {
          child.remove();
        }
      }

      node = returnNode;
    } else {
      var tmp = clone(returnNode);
      node.replaceWith(returnNode);
      node = tmp; // console.log(returnNode, returnNode.firstChild)
    }
  }, false); // console.error(endMark, endMark.previousSibling)

  return endMark;
}

/***/ }),

/***/ "./packages/render/dist/templates.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/templates.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNode = getNode;
exports.parseContext = parseContext;

function getNode(template, node, render) {
  if (render) {
    return template.content.cloneNode(true);
  }

  return node;
}

function parseContext(context) {
  if (context === undefined || context === null) {
    context = {};
  }

  var $props = context.$props || {};
  var $slots = context.$slots || {};
  return {
    $props: $props,
    $slots: $slots
  };
}

/***/ }),

/***/ "./test/components.js":
/*!****************************!*\
  !*** ./test/components.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _static = _interopRequireDefault(__webpack_require__(/*! ../components/static.hawa */ "./components/static.hawa"));

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./test/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var layout = document.getElementById('layout');
console.log('start render');
layout.innerHTML = '';
(0, _time.default)('render');
layout.appendChild((0, _static.default)());
(0, _time.default)('render');
setTimeout(function () {
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  console.log('start hydration');
  (0, _time.default)('hydrate');
  (0, _static.default)(null, layout.firstChild);
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
/*!**********************************!*\
  !*** multi ./test/components.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./test/components.js */"./test/components.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zdGF0aWMuaGF3YSIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi9zcmMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RpbWUuanMiXSwibmFtZXMiOlsiYUlkeCIsImJJZHgiLCJpIiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiaiIsImFFbG0iLCJiRWxtIiwicGFyZW50IiwiZ2V0IiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiZGlzcG9zZXJzIiwibm9kZXMiLCJ0b1JlbW92ZSIsImRlZmF1bHRBIiwiX2l0ZW1zIiwibm9kZSIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiZXhwciIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJuIiwiY2hpbGROb2RlcyIsInJlbmRlciIsImJpbmROb2RlIiwidW5zdWJzY3JpYmUiLCJjb250ZW50IiwiQXJyYXkiLCJlbCIsIm5vZGVLZXkiLCJkIiwiZGlzcG9zZXIiLCJ2YWx1ZSIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJmbiIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJhdHRyQXJnVG9PYmoiLCJyZXN1bHQiLCJhcmdzIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0IiwibmFtZSIsInN0eWxlcyIsImF0dHJzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIm9wdGlvbnMiLCIkc2xvdHMiLCJjYWxsYmFjayIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCJjb250ZXh0IiwiJHByb3BzIiwibGF5b3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwiZmlyc3RDaGlsZCIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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LENBQUNJLFNBQVAsR0FBbUJqQyxHQUFuQjtBQUVBK0IsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQSxxQkFBSyxTQUFMO0FBQ0EsdUJBQWdCLElBQWhCLEVBQXNCSCxNQUFNLENBQUNPLFVBQTdCO0FBQ0EscUJBQUssU0FBTDtBQUNBLENBUlMsRUFRUCxHQVJPLENBQVYsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsSUFBSUMsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU0MsSUFBVCxDQUFjcEMsSUFBZCxFQUNmO0FBQ0MsTUFBSXFDLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0osS0FBSyxDQUFDbkMsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDbUMsU0FBSyxDQUFDbkMsSUFBRCxDQUFMLEdBQWNxQyxHQUFkO0FBQ0EsV0FBT0YsS0FBSyxDQUFDbkMsSUFBRCxDQUFaO0FBQ0E7O0FBRUQ2QixTQUFPLENBQUNDLEdBQVIsV0FBb0I5QixJQUFwQixTQUE4QnFDLEdBQUcsR0FBR0YsS0FBSyxDQUFDbkMsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9tQyxLQUFLLENBQUNuQyxJQUFELENBQVo7QUFDQSxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuXHRpbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlLCB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXHRpbXBvcnQgeyBtYXAgYXMgX2VhY2gkIH0gZnJvbSAnQGhhd2EvbWFwJztcblxuXHRpbXBvcnQge1xuXHRcdGF0dHJzIGFzIF9tYWtlQXR0cnMkLFxuXHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdGdldE5vZGUsXG5cdFx0cGFyc2VDb250ZXh0LFxuXHR9IGZyb20gJ0BoYXdhL3JlbmRlcic7XG5cdFxuXHQvLyB0ZW1wbGF0ZXNcblx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPCEtLS0tPic7XG5cbmxldCBfdHBsJDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5fdHBsJDIuaW5uZXJIVE1MID0gJzxidXR0b24+JHsgYnV0dG9uVGV4dCB9PC9idXR0b24+PGRpdj50ZXN0PC9kaXY+JztcblxuXG5cdFxuXHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0ZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdGxldCB7ICRwcm9wcywgJHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XG5cdFx0Ly8gY29kZVxuXHRcdGxldCB2aXNpYmxlID0gb2JzZXJ2YWJsZShmYWxzZSk7XG5sZXQgaXRlbXMgPSBBcnJheS5mcm9tKHtcbiAgbGVuZ3RoOiAxMFxufSwgKF8sIGkpID0+IGkpO1xubGV0IGFjdGl2ZUNsYXNzID0gY29tcHV0ZWQoW3Zpc2libGVdLCAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVkOiB2aXNpYmxlKClcbiAgfTtcbn0pO1xubGV0IGJ1dHRvblRleHQgPSBjb21wdXRlZChbdmlzaWJsZV0sICgpID0+IHtcbiAgcmV0dXJuIHZpc2libGUoKSA/ICdoaWRlJyA6ICdzaG93Jztcbn0pO1xuXG5mdW5jdGlvbiBhbGVydChkKSB7XG4gIHYodigpICsgMSk7XG59XG5cdFx0XG5cdFx0Ly8gcmVuZGVyXG5cdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cbmxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxubGV0IF9lbCQ4ID0gX2VhY2gkKF9lbCQyLCBpdGVtcywgKGl0ZW0sIGtleSkgPT4ge1xuICByZXR1cm4gaXRlbTtcbn0sIChub2RlLCByZW5kZXIsIF9rZXlFeHByJCwgaXRlbSwga2V5KSA9PiB7XG4gIGxldCBfZWwkMyA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gIGxldCBfZWwkNCA9IHJlbmRlciA/IF9lbCQzLmZpcnN0Q2hpbGQgOiBfZWwkMztcblxuICBfZWwkNC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCBpdGVtKTtcblxuICBfbWFrZUV2ZW50cyQoX2VsJDQsIHJlbmRlciwge1xuICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICByZXR1cm4gdmlzaWJsZSghdmlzaWJsZSgpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBfZWwkNSA9IF9lbCQ0LmZpcnN0Q2hpbGQ7XG4gIHN1YnNjcmliZShbYnV0dG9uVGV4dF0sICgpID0+IHtcbiAgICBfZWwkNS5ub2RlVmFsdWUgPSBgJHtidXR0b25UZXh0KCl9YDtcbiAgfSwgIXJlbmRlcik7XG4gIGxldCBfZWwkNiA9IF9lbCQ0Lm5leHRTaWJsaW5nO1xuXG4gIF9tYWtlQXR0cnMkKF9lbCQ2LCByZW5kZXIsIHtcbiAgICBcImNsYXNzXCI6IGNvbXB1dGVkKFthY3RpdmVDbGFzc10sICgpID0+IHtcbiAgICAgIHJldHVybiBhY3RpdmVDbGFzcygpO1xuICAgIH0pXG4gIH0pO1xuXG4gIGxldCBfZWwkNyA9IF9lbCQ2LmZpcnN0Q2hpbGQ7XG4gIHJldHVybiByZW5kZXIgPyBfZWwkMyA6IF9lbCQ2O1xufSwgcmVuZGVyKTtcblxucmV0dXJuIHJlbmRlciA/IF9lbCQxIDogX2VsJDg7XG5cdH1cblx0IiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmltcG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCB9IGZyb20gJy4vdGVtcGxhdGVzJ1xuaW1wb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnXG5cbmV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHNsb3QsIGdldE5vZGUsIHBhcnNlQ29udGV4dCwgc3RhdGVtZW50IH0iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmF0dHJBcmdUb09ialxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gbmV3IFNldCgpO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBuZXcgU2V0KFtcblx0XHRcdFx0Li4ucmVzdWx0LFxuXHRcdFx0XHQuLi5hdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSksXG5cdFx0XHRdKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LmFkZChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQuYWRkKGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IEFycmF5LmZyb20oYXR0ckFyZ1RvU3RyaW5nKHYpKTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgcmVuZGVyLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRub2RlLmlubmVySFRNTCA9ICRzbG90c1tuYW1lXTtcblxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpXG57XG5cdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWF0ZWROb2RlcyhzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHRsZXQgY3VycmVudCA9IHN0YXJ0O1xuXHRkbyB7XG5cdFx0bGV0IHRtcCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG5cdFx0bm9kZXMucHVzaChjdXJyZW50KTtcblx0XHRjdXJyZW50ID0gdG1wO1xuXHR9IHdoaWxlKGN1cnJlbnQgIT09IGVuZCAmJiBjdXJyZW50ICE9PSBudWxsKTtcblxuXHRub2Rlcy5wdXNoKGVuZCk7XG5cblx0aWYobm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIG5vZGVzWzBdO1xuXHR9XG5cblx0cmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHN0YXJ0LCBub2RlKVxue1xuXHRzdGFydC5hZnRlcihub2RlKTtcblx0Ly8gY29uc29sZS5sb2coJ2FwcGVuZCcsIHN0YXJ0LCBub2RlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUobm9kZSlcbntcblx0aWYobm9kZS5ub2RlVHlwZSA9PT0gMTEpIHtcblx0XHRsZXQgYXJyID0gW107Ly9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0YXJyLnB1c2goY2hpbGQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XHRcblx0Ly8gbGV0IHN0YXJ0TWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0bGV0IGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdFxuXHQvLyBub2RlLmJlZm9yZShzdGFydE1hcmspO1xuXHRcblxuXHRsZXQgbGFzdENvbmRpdGlvbiA9IHJlbmRlciA/IG51bGwgOiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKTtcblxuXHRpZihyZW5kZXIgJiYgbGFzdENvbmRpdGlvbiA9PT0gbnVsbCkge1xuXHRcdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdH1cblxuXHRsZXQgZmlyc3RMb2FkID0gdHJ1ZTtcblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdFx0XG5cdFx0bGV0IGhhc0NvbmRpdGlvblJlbmRlcmVkID0gZmFsc2U7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0bGV0IHNob3VsZFJlbmRlciA9IGxhc3RDb25kaXRpb24gIT09IGk7XG5cdFx0XHRcdHJldHVybk5vZGUgPSByZW5kZXJGbihub2RlLCBzaG91bGRSZW5kZXIpO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0aWYoc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdFx0aGFzQ29uZGl0aW9uUmVuZGVyZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIXJlbmRlciAmJiBmaXJzdExvYWQpIHtcblx0XHRcdHJldHVybk5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0XHRub2RlID0gZ2V0SW5pdGlhdGVkTm9kZXMobm9kZSwgcmV0dXJuTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zmlyc3RMb2FkID0gZmFsc2U7XG5cblx0XHRsZXQgaXNTYW1lQ29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4ICA9PT0gbGFzdENvbmRpdGlvbjtcblxuXHRcdGxhc3RDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHQvLyBJZiBzYW1lIGNvbmRpdGlvbiB0aGF0IGl0IHdhcyBoeWRyYXRlZCBhbmQgd2UgZG9udCBuZWVkIHRvIHJlcGxhY2Ugbm9kZXNcblx0XHRpZihpc1NhbWVDb25kaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1tzdGF0ZW1lbnRdJywgbm9kZSwgcmV0dXJuTm9kZSk7XG5cblx0XHQvLyBjbGVhbnVwKHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0Ly8gYXBwZW5kKHN0YXJ0TWFyaywgcmV0dXJuTm9kZSk7XG5cblx0XHRcblx0XHRpZihBcnJheS5pc0FycmF5KG5vZGUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNoaWxkID0gbm9kZVtpXTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2hpbGQpO1xuXHRcdFx0XHRpZihpID09PSAwKSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IHJldHVybk5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB0bXAgPSBjbG9uZShyZXR1cm5Ob2RlKVxuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdG5vZGUgPSB0bXA7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXR1cm5Ob2RlLCByZXR1cm5Ob2RlLmZpcnN0Q2hpbGQpXG5cdFx0fVxuXHR9LCBmYWxzZSk7XG5cblx0Ly8gY29uc29sZS5lcnJvcihlbmRNYXJrLCBlbmRNYXJrLnByZXZpb3VzU2libGluZylcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHR9XG59IiwiaW1wb3J0IFN0YXRpY0NvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpYy5oYXdhJ1xuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJztcblxuXG5sZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5jb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG5sYXlvdXQuaW5uZXJIVE1MID0gJyc7XG50aW1lKCdyZW5kZXInKTtcbmxheW91dC5hcHBlbmRDaGlsZChTdGF0aWNDb21wb25lbnQoKSk7XG50aW1lKCdyZW5kZXInKTtcblxuXG5cblxuc2V0VGltZW91dCgoKSA9PiB7XG5cdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gdG1wO1xuXG5cdGNvbnNvbGUubG9nKCdzdGFydCBoeWRyYXRpb24nKTtcblx0dGltZSgnaHlkcmF0ZScpO1xuXHRTdGF0aWNDb21wb25lbnQobnVsbCwgbGF5b3V0LmZpcnN0Q2hpbGQpXG5cdHRpbWUoJ2h5ZHJhdGUnKTtcbn0sIDMwMCkiLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9