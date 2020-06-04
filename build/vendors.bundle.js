(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/directives/dist/custom/bind.js":
/*!*************************************************!*\
  !*** ./packages/directives/dist/custom/bind.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = bind; // import { Directive } from '../directive';
// static parser(entity)
// 	{
// 		if(entity.type !== 'component') {
// 			return;
// 		}
// 		let modelDirective = entity.option.directives[Model.getName()];
// 		if(modelDirective === undefined) {
// 			return;
// 		}
// 		entity.option.props['value'] = {
// 			value: `(${ modelDirective.value.value })()`,
// 			isExpression: true,
// 		};
// 		// get
// 		// console.log(entity.option);
// 	}

function bind(node, options, value, render) {
  function updateValue(event) {
    if (event instanceof CustomEvent) {
      value.apply(null, event.detail);
    } else {
      value(node.value);
    }
  }

  if (render) {
    node.value = value();
  }

  node.addEventListener('input', updateValue);
  return function () {
    node.removeEventListener('input', updateValue);
  };
}

/***/ }),

/***/ "./packages/directives/dist/index.js":
/*!*******************************************!*\
  !*** ./packages/directives/dist/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bind", {
  enumerable: true,
  get: function get() {
    return _bind.bind;
  }
});

var _bind = __webpack_require__(/*! ./custom/bind */ "./packages/directives/dist/custom/bind.js");

/***/ }),

/***/ "./packages/lifecycle/dist/index.js":
/*!******************************************!*\
  !*** ./packages/lifecycle/dist/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dispatchHook = dispatchHook;
exports.registerHooks = registerHooks;
exports.findAndDispatchHook = findAndDispatchHook;
exports.HAWA_ID = exports.HOOK_NAME_CLEAN_TRIGGER = exports.DOM_HOOK_ATTR = exports.DOM_HOOK_PROP = void 0;
var LifecycleBindings = new Map();
var DOM_HOOK_PROP = '__HAWA_hooks__';
exports.DOM_HOOK_PROP = DOM_HOOK_PROP;
var DOM_HOOK_ATTR = 'data-hid';
exports.DOM_HOOK_ATTR = DOM_HOOK_ATTR;
var HOOK_NAME_CLEAN_TRIGGER = 'unmounted';
exports.HOOK_NAME_CLEAN_TRIGGER = HOOK_NAME_CLEAN_TRIGGER;
var HAWA_ID = 0;
exports.HAWA_ID = HAWA_ID;

function isLifecycleNode(node) {
  return node.nodeType !== 8 && node.nodeType !== 3;
}

function dispatchHook(node, name) {
  if (!isLifecycleNode(node)) {
    return;
  }

  var id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
  var hooks = LifecycleBindings.get(id);

  if (hooks === undefined) {
    return;
  }

  for (var i = 0; i < hooks[name].length; i++) {
    hooks[name][i]();
  }

  if (name === HOOK_NAME_CLEAN_TRIGGER) {
    LifecycleBindings.delete(id);
  }
}

function registerHooks(hooks, node, render) {
  if (!isLifecycleNode(node)) {
    return;
  }

  var id;

  if (render) {
    id = exports.HAWA_ID = HAWA_ID = +HAWA_ID + 1;
    node.setAttribute(DOM_HOOK_ATTR, id);
  } else {
    id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
  }

  LifecycleBindings.set(id, hooks);
}

function findAndDispatchHook(node, name) {
  // disable for comments
  if (!isLifecycleNode(node)) {
    return;
  }

  var nodes = node.querySelectorAll("[" + DOM_HOOK_ATTR + "]");

  for (var i = 0; i < nodes.length; i++) {
    dispatchHook(nodes[i], name);
  }

  if (node.hasAttribute(DOM_HOOK_ATTR)) {
    dispatchHook(node, name);
  } // console.log(node, nodes);

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

var _lifecycle = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");

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
      var n = get(a[i], i, -1);
      (0, _lifecycle.findAndDispatchHook)(n, 'unmounted'); // No more elements in new, this is a delete

      parent.removeChild(n);
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
      var key_aElm = keyExpr(aElm, i);
      var key_bElm = keyExpr(bElm, j); // Look for the current element at this location in the new list
      // This gives us the idx of where this element should be

      var curElmInNew = bIdx.get(key_aElm); // Look for the the wanted elment at this location in the old list
      // This gives us the idx of where the wanted element is now

      var wantedElmInOld = aIdx.get(key_bElm);

      if (curElmInNew === undefined) {
        var _n = get(a[i], i, -1);

        (0, _lifecycle.findAndDispatchHook)(_n, 'unmounted'); // Current element is not in new list, it has been removed

        parent.removeChild(_n);
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

  var parent;
  var endMark;
  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = []; // hydration prepare 

  if (render) {
    parent = document.createDocumentFragment();
    endMark = (0, _utils.add)(parent, '');
    bindNode.replaceWith(parent);
  } else {
    var _items = (0, _observable.value)(items);

    var node = bindNode;
    var lastNode = null; // return;

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);
      var lastHydratedNode = null;

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          lastHydratedNode = expr(node, false, itemKey, item, key);
          node = lastHydratedNode.nextSibling; // console.warn('lastHydratedNode', lastHydratedNode, node)

          lastNode = lastHydratedNode;
        }
      }

      if (lastHydratedNode && lastHydratedNode.hasAttribute) {
        var hydratedNodes = [];

        if (!lastHydratedNode.hasAttribute('data-key')) {
          var startNodeSearch = lastHydratedNode;

          while (startNodeSearch) {
            hydratedNodes.unshift(startNodeSearch);

            if (startNodeSearch.hasAttribute('data-key')) {
              break;
            }

            startNodeSearch = startNodeSearch.previousSibling;
          }
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
    } // console.log(defaultA);


    endMark = document.createTextNode('');

    if (lastNode === null) {
      render = true;
      bindNode.after(endMark);
    } else {
      lastNode.after(endMark);
    } // console.error(bindNode, lastNode, endMark, endMark.parentNode);
    // endMark = add(lastNode, '');

  }

  var unsubscribe = (0, _observable.subscribe)(items, function (a) {
    var b = (0, _observable.value)(items);
    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark));
    toRemove.forEach(dispose);
    return content; // });
  }, !render); // if(render) {
  // 	bindNode.replaceWith(parent);
  // }
  // disposeAll();

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
        n = el ? el : expr(null, true, nodeKey, item, key);
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

    if (ob.$o !== undefined) {
      ob._observers.add(update);
    }
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
  if (prop === undefined) {
    return false;
  }

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
  var result = []; // args = args.concat([]);

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = result.concat(attrArgToString(args[i]));
    }
  } else if (typeof args === 'object') {
    for (var key in args) {
      if (args[key]) {
        result.push(key);
      }
    }
  } else {
    result.push(args);
  }

  return result;
}

function makeClass(node, value, render) {
  var lastClassAdopted = [];
  (0, _observable.watch)(value, function (v) {
    var tmp = node.classList;
    var toSet = Array.from(new Set(attrArgToString(v)));
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

/***/ "./packages/render/dist/call.js":
/*!**************************************!*\
  !*** ./packages/render/dist/call.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

function call(fn, hooks, node, render) {
  if (fn === null) {
    return;
  }

  return fn(hooks, node, render);
}

/***/ }),

/***/ "./packages/render/dist/directive.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/directive.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directive = directive; // import { RegisteredDirectives } from '@hawa/directives'

function directive($hooks, directive, node, options, value, render) {
  var unmounted = directive(node, options, value, render);
  $hooks.unmounted.push(unmounted);
}

/***/ }),

/***/ "./packages/render/dist/emit.js":
/*!**************************************!*\
  !*** ./packages/render/dist/emit.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emit = emit;

function emit(node) {
  return function (name) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var event = new CustomEvent(name, {
      detail: args
    });
    node.dispatchEvent(event);
  };
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
Object.defineProperty(exports, "getProp", {
  enumerable: true,
  get: function get() {
    return _templates.getProp;
  }
});
Object.defineProperty(exports, "setRef", {
  enumerable: true,
  get: function get() {
    return _templates.setRef;
  }
});
Object.defineProperty(exports, "setKey", {
  enumerable: true,
  get: function get() {
    return _templates.setKey;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.statement;
  }
});
Object.defineProperty(exports, "directive", {
  enumerable: true,
  get: function get() {
    return _directive.directive;
  }
});
Object.defineProperty(exports, "emit", {
  enumerable: true,
  get: function get() {
    return _emit.emit;
  }
});
Object.defineProperty(exports, "call", {
  enumerable: true,
  get: function get() {
    return _call.call;
  }
});
Object.defineProperty(exports, "loadComponent", {
  enumerable: true,
  get: function get() {
    return _load.loadComponent;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/render/dist/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/render/dist/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/render/dist/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

var _directive = __webpack_require__(/*! ./directive */ "./packages/render/dist/directive.js");

var _emit = __webpack_require__(/*! ./emit */ "./packages/render/dist/emit.js");

var _call = __webpack_require__(/*! ./call */ "./packages/render/dist/call.js");

var _load = __webpack_require__(/*! ./load */ "./packages/render/dist/load.js");

/***/ }),

/***/ "./packages/render/dist/load.js":
/*!**************************************!*\
  !*** ./packages/render/dist/load.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComponent = loadComponent;

function loadComponent(component, node, render, options) {
  if (options === void 0) {
    options = {};
  }

  var componentNode = component(options, render ? false : node);

  if (render) {
    var mark = componentNode.lastChild;
    node.replaceWith(componentNode);
    return mark;
  }

  return componentNode;
}

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

function slot($slots, name, node, render, callback) {
  if ($slots[name] === undefined) {
    callback(node);
    return;
  }

  var slotNodes = $slots[name](); // console.log(node,slotNodes, render)

  if (render) {
    node.innerHTML = '';
    node.appendChild(slotNodes);
  }

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

var _lifecycle = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");

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
        var child = node[i];
        (0, _lifecycle.findAndDispatchHook)(child, 'unmounted');

        if (i === 0) {
          child.replaceWith(returnNode);
        } else {
          child.remove();
        }
      }

      node = returnNode;
    } else {
      var tmp = clone(returnNode);
      (0, _lifecycle.findAndDispatchHook)(node, 'unmounted');
      node.replaceWith(returnNode);
      node = tmp;
    }
  }, false);
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
exports.setRef = setRef;
exports.setKey = setKey;
exports.getProp = getProp;
exports.parseContext = parseContext;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function getNode(template, node, render) {
  if (render) {
    return template.content.cloneNode(true);
  }

  return node;
}

function setRef($refs, node, name) {
  if ($refs[name] === undefined) {
    $refs[name] = node;
  } else {
    if (Array.isArray($refs[name])) {
      $refs[name].push(node);
    } else {
      $refs[name] = [$refs[name]].concat(node);
    }
  }
}

function setKey($key, node, render) {
  if ($key === null) {
    return;
  }

  (0, _observable.watch)($key, function () {
    node.setAttribute('data-key', $key);
  }, render);
}

function getProp($props, name, seed) {
  if ($props[name] === undefined) {
    return function () {
      return seed;
    };
  }

  if ((0, _observable.isObservable)($props[name])) {
    return $props[name];
  } else {
    return function () {
      return $props[name];
    };
  } // return 

}

function parseContext(context) {
  if (context === undefined || context === null) {
    context = {};
  }

  var $props = context.$props || {};
  var $slots = context.$slots || {};
  var $customInit = context.$customInit || null;
  return {
    $props: $props,
    $slots: $slots,
    $customInit: $customInit,
    $refs: {}
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOlsiZXZlbnQiLCJ2YWx1ZSIsIm5vZGUiLCJMaWZlY3ljbGVCaW5kaW5ncyIsIkRPTV9IT09LX1BST1AiLCJET01fSE9PS19BVFRSIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJIQVdBX0lEIiwiaXNMaWZlY3ljbGVOb2RlIiwiaWQiLCJwYXJzZUludCIsImhvb2tzIiwiaSIsIm5hbWUiLCJub2RlcyIsImRpc3BhdGNoSG9vayIsImFJZHgiLCJiSWR4IiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiaiIsImFFbG0iLCJiRWxtIiwibiIsImdldCIsInBhcmVudCIsImtleV9hRWxtIiwia2V5X2JFbG0iLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiY2xlYW5pbmciLCJkaXNwb3NlcnMiLCJ0b1JlbW92ZSIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiYmluZE5vZGUiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImV4cHIiLCJoeWRyYXRlZE5vZGVzIiwic3RhcnROb2RlU2VhcmNoIiwiY2hpbGROb2RlcyIsInJlbmRlciIsInVuc3Vic2NyaWJlIiwiY29udGVudCIsIkFycmF5IiwiZWwiLCJub2RlS2V5IiwiZCIsImRpc3Bvc2VyIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJzdHlsZXMiLCJhdHRycyIsIm1ha2VDbGFzcyIsIm1ha2VTdHlsZXMiLCJ1bm1vdW50ZWQiLCJkaXJlY3RpdmUiLCIkaG9va3MiLCJkZXRhaWwiLCJvcHRpb25zIiwiY29tcG9uZW50Tm9kZSIsImNvbXBvbmVudCIsIm1hcmsiLCIkc2xvdHMiLCJjYWxsYmFjayIsInNsb3ROb2RlcyIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJj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V0FBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQURELFNBRU87QUFDTixXQUFPLFlBQU07QUFDWixhQUFPQSxNQUFNLENBQWIsSUFBYSxDQUFiO0FBREQ7QUFWRixJQWNDOztBQUNBOztBQUVNLCtCQUErQjtBQUNyQyxNQUFJQyxPQUFPLEtBQVBBLGFBQXlCQSxPQUFPLEtBQXBDLE1BQStDO0FBQzlDQSxXQUFPLEdBQVBBO0FBQ0E7O0FBRUQsTUFBSUQsTUFBTSxHQUFHQyxPQUFPLENBQVBBLFVBQWI7QUFDQSxNQUFJdkIsTUFBTSxHQUFHdUIsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSUMsV0FBVyxHQUFHRCxPQUFPLENBQVBBLGVBQWxCO0FBRUEsU0FBTztBQUNORCxVQUFNLEVBREE7QUFFTnRCLFVBQU0sRUFGQTtBQUdOd0IsZUFBVyxFQUhMO0FBSU5KLFNBQUssRUFBRTtBQUpELEdBQVA7QUFNQSxDIiwiZmlsZSI6InZlbmRvcnMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlJztcblxuLy8gc3RhdGljIHBhcnNlcihlbnRpdHkpXG4vLyBcdHtcbi8vIFx0XHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRsZXQgbW9kZWxEaXJlY3RpdmUgPSBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXNbTW9kZWwuZ2V0TmFtZSgpXTtcblxuLy8gXHRcdGlmKG1vZGVsRGlyZWN0aXZlID09PSB1bmRlZmluZWQpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuLy8gXHRcdFx0dmFsdWU6IGAoJHsgbW9kZWxEaXJlY3RpdmUudmFsdWUudmFsdWUgfSkoKWAsXG4vLyBcdFx0XHRpc0V4cHJlc3Npb246IHRydWUsXG4vLyBcdFx0fTtcblx0XHRcbi8vIFx0XHQvLyBnZXRcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbnRpdHkub3B0aW9uKTtcbi8vIFx0fVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZChub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShldmVudClcblx0e1xuXHRcdGlmKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdHZhbHVlLmFwcGx5KG51bGwsIGV2ZW50LmRldGFpbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlKG5vZGUudmFsdWUpO1xuXHRcdH1cblx0fVxuXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUudmFsdWUgPSB2YWx1ZSgpO1xuXHR9XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHsgZW1pdCB9IGZyb20gJy4vZW1pdCdcbmltcG9ydCB7IGNhbGwgfSBmcm9tICcuL2NhbGwnXG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkJ1xuXG5leHBvcnQgeyBhdHRycywgZXZlbnRzLCBzbG90LCBnZXROb2RlLCBzZXRSZWYsIHNldEtleSwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LCBzdGF0ZW1lbnQsIGRpcmVjdGl2ZSwgY2FsbCwgZW1pdCwgbG9hZENvbXBvbmVudCB9IiwiaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2sobiwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IG4gPSBnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG4sICd1bm1vdW50ZWQnKTtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQobik7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdHdoaWxlIChzdGFydE5vZGUgJiYgc3RhcnROb2RlICE9PSBlbmRNYXJrKSB7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIiwiaW1wb3J0IHsgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb09iaihhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0ge307XG5cblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gT2JqZWN0LmFzc2lnbihyZXN1bHQsIGF0dHJBcmdUb09iaihhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0cmVzdWx0ID0gYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9TdHJpbmcoYXJncylcbntcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGF0dHJBcmdUb1N0cmluZyhhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJncykge1xuXHRcdFx0aWYoYXJnc1trZXldKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdC5wdXNoKGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IEFycmF5LmZyb20oXG5cdFx0XHRuZXcgU2V0KGF0dHJBcmdUb1N0cmluZyh2KSlcblx0XHQpO1xuXHRcdGxldCB0b1JlbW92ZSA9IGxhc3RDbGFzc0Fkb3B0ZWQuZmlsdGVyKHggPT4gIXRvU2V0LmluY2x1ZGVzKHgpKTtcblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1NldCkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1JlbW92ZSkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXHRcdH1cblxuXHRcdGxhc3RDbGFzc0Fkb3B0ZWQgPSB0b1NldDtcblx0fSwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IGF0dHJBcmdUb09iaih2KTtcblx0XHRmb3IobGV0IG5hbWUgaW4gc3R5bGVzKSB7XG5cdFx0XHRub2RlLnN0eWxlW25hbWVdID0gc3R5bGVzW25hbWVdO1xuXHRcdH1cblx0fSwgcmVuZGVyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMobm9kZSwgcmVuZGVyLCBhdHRycylcbntcblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYobmFtZSA9PT0gJ2NsYXNzJykge1xuXHRcdFx0bWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0XHRtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG5cdFx0XHR9LCByZW5kZXIpO1xuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBjYWxsKGZuLCBob29rcywgbm9kZSwgcmVuZGVyKVxue1xuXHRpZihmbiA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJldHVybiBmbihob29rcywgbm9kZSwgcmVuZGVyKTtcbn0iLCIvLyBpbXBvcnQgeyBSZWdpc3RlcmVkRGlyZWN0aXZlcyB9IGZyb20gJ0BoYXdhL2RpcmVjdGl2ZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUoJGhvb2tzLCBkaXJlY3RpdmUsIG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB1bm1vdW50ZWQgPSBkaXJlY3RpdmUobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcblxuXHQkaG9va3MudW5tb3VudGVkLnB1c2goXG5cdFx0dW5tb3VudGVkXG5cdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBjb21wb25lbnROb2RlID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0aWYocmVuZGVyKSB7XG5cblx0XHRsZXQgbWFyayA9IGNvbXBvbmVudE5vZGUubGFzdENoaWxkO1xuXHRcdFxuXHRcdG5vZGUucmVwbGFjZVdpdGgoY29tcG9uZW50Tm9kZSk7XG5cblx0XHRyZXR1cm4gbWFyaztcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnROb2RlO1xufSIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDb25kaXRpb24oYXJncylcbntcblx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDb25kaXRpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYXRlZE5vZGVzKHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdGxldCBjdXJyZW50ID0gc3RhcnQ7XG5cdGRvIHtcblx0XHRsZXQgdG1wID0gY3VycmVudC5uZXh0U2libGluZztcblx0XHRub2Rlcy5wdXNoKGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSB0bXA7XG5cdH0gd2hpbGUoY3VycmVudCAhPT0gZW5kICYmIGN1cnJlbnQgIT09IG51bGwpO1xuXG5cdG5vZGVzLnB1c2goZW5kKTtcblxuXHRpZihub2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbm9kZXNbMF07XG5cdH1cblxuXHRyZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoc3RhcnQsIG5vZGUpXG57XG5cdHN0YXJ0LmFmdGVyKG5vZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnYXBwZW5kJywgc3RhcnQsIG5vZGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShub2RlKVxue1xuXHRpZihub2RlLm5vZGVUeXBlID09PSAxMSkge1xuXHRcdGxldCBhcnIgPSBbXTsvL2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRhcnIucHVzaChjaGlsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcdFxuXHQvLyBsZXQgc3RhcnRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRsZXQgZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0XG5cdC8vIG5vZGUuYmVmb3JlKHN0YXJ0TWFyayk7XG5cdFxuXG5cdGxldCBsYXN0Q29uZGl0aW9uID0gcmVuZGVyID8gbnVsbCA6IGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpO1xuXG5cdGlmKHJlbmRlciAmJiBsYXN0Q29uZGl0aW9uID09PSBudWxsKSB7XG5cdFx0bm9kZS5hZnRlcihlbmRNYXJrKTtcblx0fVxuXG5cdGxldCBmaXJzdExvYWQgPSB0cnVlO1xuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdGxldCBoYXNDb25kaXRpb25SZW5kZXJlZCA9IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBsYXN0Q29uZGl0aW9uICE9PSBpO1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCFyZW5kZXIgJiYgZmlyc3RMb2FkKSB7XG5cdFx0XHRyZXR1cm5Ob2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdFx0bm9kZSA9IGdldEluaXRpYXRlZE5vZGVzKG5vZGUsIHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdGZpcnN0TG9hZCA9IGZhbHNlO1xuXG5cdFx0bGV0IGlzU2FtZUNvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAgPT09IGxhc3RDb25kaXRpb247XG5cblx0XHRsYXN0Q29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0Ly8gSWYgc2FtZSBjb25kaXRpb24gdGhhdCBpdCB3YXMgaHlkcmF0ZWQgYW5kIHdlIGRvbnQgbmVlZCB0byByZXBsYWNlIG5vZGVzXG5cdFx0aWYoaXNTYW1lQ29uZGl0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbc3RhdGVtZW50XScsIG5vZGUsIHJldHVybk5vZGUpO1xuXG5cdFx0Ly8gY2xlYW51cChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdC8vIGFwcGVuZChzdGFydE1hcmssIHJldHVybk5vZGUpO1xuXG5cdFx0XG5cdFx0aWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGlsZCA9IG5vZGVbaV07XG5cdFx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2soY2hpbGQsICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0XHRpZihpID09PSAwKSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IHJldHVybk5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB0bXAgPSBjbG9uZShyZXR1cm5Ob2RlKTtcblx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2sobm9kZSwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0bm9kZSA9IHRtcDtcblx0XHR9XG5cdH0sIGZhbHNlKTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9