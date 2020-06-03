(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

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
  var $key = context.$key === undefined ? null : context.$key;
  return {
    $props: $props,
    $slots: $slots,
    $key: $key,
    $refs: {}
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJMaWZlY3ljbGVCaW5kaW5ncyIsIkRPTV9IT09LX1BST1AiLCJET01fSE9PS19BVFRSIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJIQVdBX0lEIiwibm9kZSIsImlzTGlmZWN5Y2xlTm9kZSIsImlkIiwicGFyc2VJbnQiLCJob29rcyIsImkiLCJuYW1lIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsIm4iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZGlzcG9zZXJzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiZW5kTWFyayIsImJpbmROb2RlIiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsImNoaWxkTm9kZXMiLCJyZW5kZXIiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsInZhbHVlIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJzdHlsZXMiLCJhdHRycyIsIm1ha2VDbGFzcyIsIm1ha2VTdHlsZXMiLCJvcHRpb25zIiwiY29tcG9uZW50Tm9kZSIsImNvbXBvbmVudCIsIm1hcmsiLCIkc2xvdHMiLCJjYWxsYmFjayIsInNsb3ROb2RlcyIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsaUJBQWlCLEdBQUcsSUFBeEIsR0FBd0IsRUFBeEI7QUFFTyxJQUFNQyxhQUFhLEdBQW5COztBQUNBLElBQU1DLGFBQWEsR0FBbkI7O0FBQ0EsSUFBTUMsdUJBQXVCLEdBQTdCOztBQUVBLElBQUlDLE9BQU8sR0FBWDs7O0FB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QUFJQyxPQUFPLEtBQVBBLGFBQXlCQSxPQUFPLEtBQXBDLE1BQStDO0FBQzlDQSxXQUFPLEdBQVBBO0FBQ0E7O0FBRUQsTUFBSUQsTUFBTSxHQUFHQyxPQUFPLENBQVBBLFVBQWI7QUFDQSxNQUFJdkIsTUFBTSxHQUFHdUIsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSUYsSUFBSSxHQUFHRSxPQUFPLENBQVBBLDRCQUFvQ0EsT0FBTyxDQUF0RDtBQUVBLFNBQU87QUFDTkQsVUFBTSxFQURBO0FBRU50QixVQUFNLEVBRkE7QUFHTnFCLFFBQUksRUFIRTtBQUlORCxTQUFLLEVBQUU7QUFKRCxHQUFQO0FBTUEsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmltcG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCwgZ2V0UHJvcCwgc2V0UmVmLCBzZXRLZXkgfSBmcm9tICcuL3RlbXBsYXRlcydcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbG9hZCdcblxuZXhwb3J0IHsgYXR0cnMsIGV2ZW50cywgc2xvdCwgZ2V0Tm9kZSwgc2V0UmVmLCBzZXRLZXksIGdldFByb3AsIHBhcnNlQ29udGV4dCwgc3RhdGVtZW50LCBsb2FkQ29tcG9uZW50IH0iLCJpbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0bGV0IG4gPSBnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQobik7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChhLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG9sZCwgdGhpcyBpcyBhbiBhZGRpdGlvblxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShnZXQoYkVsbSwgaiwgMSksIGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmUpO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSBpZiAoYUVsbSA9PT0gYkVsbSkge1xuXHRcdFx0Ly8gTm8gZGlmZmVyZW5jZSwgd2UgbW92ZSBvblxuXHRcdFx0aSsrO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQga2V5X2FFbG0gPSBrZXlFeHByKGFFbG0sIGkpO1xuXHRcdFx0bGV0IGtleV9iRWxtID0ga2V5RXhwcihiRWxtLCBqKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChrZXlfYUVsbSk7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgdGhlIHdhbnRlZCBlbG1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGUgd2FudGVkIGVsZW1lbnQgaXMgbm93XG5cdFx0XHR2YXIgd2FudGVkRWxtSW5PbGQgPSBhSWR4LmdldChrZXlfYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRsZXQgbiA9IGdldChhW2ldLCBpLCAtMSk7XG5cdFx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2sobiwgJ3VubW91bnRlZCcpO1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChuKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZyYWcodmFsdWUpIHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSB2YWx1ZTtcblx0aWYgKCFjaGlsZE5vZGVzIHx8IHZhbHVlLm5vZGVUeXBlICE9PSAxMSkgcmV0dXJuO1xuXHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggPCAyKSB7XG5cdFx0cmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdH1cblxuXHQvLyBGb3IgYSBmcmFnbWVudCBvZiAyIGVsZW1lbnRzIG9yIG1vcmUgYWRkIGEgc3RhcnRNYXJrLiBUaGlzIGlzIHJlcXVpcmVkXG5cdC8vIGZvciBtdWx0aXBsZSBuZXN0ZWQgY29uZGl0aW9uYWwgY29tcHV0ZWRzIHRoYXQgcmV0dXJuIGZyYWdtZW50cy5cblx0Y29uc3QgX3N0YXJ0TWFyayA9IGFkZCh2YWx1ZSwgJycsIGNoaWxkTm9kZXNbMF0pO1xuXG5cdHJldHVybiB7XG5cdFx0X3N0YXJ0TWFya1xuXHR9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGFyZW50LCB2YWx1ZSwgZW5kTWFyayA9IG51bGwpIHtcblx0dmFsdWUgPSBjYXN0Tm9kZSh2YWx1ZSk7XG5cblx0Y29uc3QgZnJhZ09yTm9kZSA9IGZyYWcodmFsdWUpIHx8IHZhbHVlO1xuXG5cdC8vIElmIGVuZE1hcmsgaXMgYG51bGxgLCB2YWx1ZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdHBhcmVudC5pbnNlcnRCZWZvcmUodmFsdWUsIGVuZE1hcmsgJiYgZW5kTWFyay5wYXJlbnROb2RlICYmIGVuZE1hcmspO1xuXG5cdHJldHVybiBmcmFnT3JOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdE5vZGUodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXHR9XG5cdGlmICghKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkpIHtcblx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IGNyZWF0ZXMgYSBEb2N1bWVudEZyYWdtZW50LlxuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KFt2YWx1ZV0pO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCBzdGFydE5vZGUsIGVuZE1hcmspIHtcblx0d2hpbGUgKHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUgIT09IGVuZE1hcmspIHtcblx0XHRjb25zdCBuID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuXHRcdC8vIElzIG5lZWRlZCBpbiBjYXNlIHRoZSBjaGlsZCB3YXMgcHVsbGVkIG91dCB0aGUgcGFyZW50IGJlZm9yZSBjbGVhcmluZy5cblx0XHRpZiAocGFyZW50ID09PSBzdGFydE5vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHN0YXJ0Tm9kZSk7XG5cdFx0fVxuXHRcdHN0YXJ0Tm9kZSA9IG47XG5cdH1cbn1cblxuY29uc3Qgbm9kZVR5cGUgPSAxMTE7XG5cblxuZXhwb3J0IGNvbnN0IGRpZmZhYmxlID0gKG5vZGUsIG9wZXJhdGlvbikgPT5cblx0bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUgP1xuXHQxIC8gb3BlcmF0aW9uIDwgMCA/XG5cdG9wZXJhdGlvbiA/XG5cdHJlbW92ZU5vZGVzKFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQucGFyZW50Tm9kZSxcblx0XHRub2RlLl9maXJzdENoaWxkLm5leHRTaWJsaW5nLFxuXHRcdG5vZGUuX2xhc3RDaGlsZC5uZXh0U2libGluZ1xuXHQpIHx8IG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlLl9sYXN0Q2hpbGQgOlxuXHRvcGVyYXRpb24gP1xuXHRub2RlLl92YWx1ZU9mKCkgOlxuXHRub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZTtcblxuZXhwb3J0IGNvbnN0IHBlcnNpc3RlbnQgPSAoZnJhZ21lbnQpID0+IHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSBmcmFnbWVudDtcblx0Y29uc3QgeyBsZW5ndGggfSA9IGNoaWxkTm9kZXM7XG5cdC8vIElmIHRoZSBmcmFnbWVudCBoYXMgbm8gY29udGVudFxuXHQvLyBpdCBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBhbmQgYnJlYWtcblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oY2hpbGROb2Rlcyk7XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHRcdF92YWx1ZU9mKCkge1xuXHRcdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoICE9PSBsZW5ndGgpIHtcblx0XHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0XHR3aGlsZSAoaSA8IGxlbmd0aCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZXNbaSsrXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdFx0fSxcblx0fTtcbn07XG4iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBjb21wb25lbnROb2RlID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0aWYocmVuZGVyKSB7XG5cblx0XHRsZXQgbWFyayA9IGNvbXBvbmVudE5vZGUubGFzdENoaWxkO1xuXHRcdFxuXHRcdG5vZGUucmVwbGFjZVdpdGgoY29tcG9uZW50Tm9kZSk7XG5cblx0XHRyZXR1cm4gbWFyaztcblx0fVxuXG5cdHJldHVybiBjb21wb25lbnROb2RlO1xufSIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDb25kaXRpb24oYXJncylcbntcblx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDb25kaXRpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYXRlZE5vZGVzKHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdGxldCBjdXJyZW50ID0gc3RhcnQ7XG5cdGRvIHtcblx0XHRsZXQgdG1wID0gY3VycmVudC5uZXh0U2libGluZztcblx0XHRub2Rlcy5wdXNoKGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSB0bXA7XG5cdH0gd2hpbGUoY3VycmVudCAhPT0gZW5kICYmIGN1cnJlbnQgIT09IG51bGwpO1xuXG5cdG5vZGVzLnB1c2goZW5kKTtcblxuXHRpZihub2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbm9kZXNbMF07XG5cdH1cblxuXHRyZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoc3RhcnQsIG5vZGUpXG57XG5cdHN0YXJ0LmFmdGVyKG5vZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnYXBwZW5kJywgc3RhcnQsIG5vZGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShub2RlKVxue1xuXHRpZihub2RlLm5vZGVUeXBlID09PSAxMSkge1xuXHRcdGxldCBhcnIgPSBbXTsvL2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRhcnIucHVzaChjaGlsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcdFxuXHQvLyBsZXQgc3RhcnRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRsZXQgZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0XG5cdC8vIG5vZGUuYmVmb3JlKHN0YXJ0TWFyayk7XG5cdFxuXG5cdGxldCBsYXN0Q29uZGl0aW9uID0gcmVuZGVyID8gbnVsbCA6IGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpO1xuXG5cdGlmKHJlbmRlciAmJiBsYXN0Q29uZGl0aW9uID09PSBudWxsKSB7XG5cdFx0bm9kZS5hZnRlcihlbmRNYXJrKTtcblx0fVxuXG5cdGxldCBmaXJzdExvYWQgPSB0cnVlO1xuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdGxldCBoYXNDb25kaXRpb25SZW5kZXJlZCA9IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBsYXN0Q29uZGl0aW9uICE9PSBpO1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCFyZW5kZXIgJiYgZmlyc3RMb2FkKSB7XG5cdFx0XHRyZXR1cm5Ob2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdFx0bm9kZSA9IGdldEluaXRpYXRlZE5vZGVzKG5vZGUsIHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdGZpcnN0TG9hZCA9IGZhbHNlO1xuXG5cdFx0bGV0IGlzU2FtZUNvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAgPT09IGxhc3RDb25kaXRpb247XG5cblx0XHRsYXN0Q29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0Ly8gSWYgc2FtZSBjb25kaXRpb24gdGhhdCBpdCB3YXMgaHlkcmF0ZWQgYW5kIHdlIGRvbnQgbmVlZCB0byByZXBsYWNlIG5vZGVzXG5cdFx0aWYoaXNTYW1lQ29uZGl0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbc3RhdGVtZW50XScsIG5vZGUsIHJldHVybk5vZGUpO1xuXG5cdFx0Ly8gY2xlYW51cChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdC8vIGFwcGVuZChzdGFydE1hcmssIHJldHVybk5vZGUpO1xuXG5cdFx0XG5cdFx0aWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGlsZCA9IG5vZGVbaV07XG5cdFx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2soY2hpbGQsICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0XHRpZihpID09PSAwKSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IHJldHVybk5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB0bXAgPSBjbG9uZShyZXR1cm5Ob2RlKTtcblx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2sobm9kZSwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0bm9kZSA9IHRtcDtcblx0XHR9XG5cdH0sIGZhbHNlKTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAka2V5ID0gY29udGV4dC4ka2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogY29udGV4dC4ka2V5O1xuXG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQka2V5LCBcblx0XHQkcmVmczoge30sXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9