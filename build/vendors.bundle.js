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
exports.HAWA_ID = exports.DOM_HOOK_ATTR = exports.DOM_HOOK_PROP = void 0;
var LifecycleBindings = new Map();
var DOM_HOOK_PROP = '__HAWA_hooks__';
exports.DOM_HOOK_PROP = DOM_HOOK_PROP;
var DOM_HOOK_ATTR = 'data-hid';
exports.DOM_HOOK_ATTR = DOM_HOOK_ATTR;
var HAWA_ID = 0;
exports.HAWA_ID = HAWA_ID;

function dispatchHook(node, name) {
  var id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
  var hooks = LifecycleBindings.get(id);

  if (hooks === undefined) {
    return;
  }

  if (hooks[name]) {
    hooks[name]();
  }
}

function registerHooks(hooks, node, render) {
  var id;

  if (render) {
    id = exports.HAWA_ID = HAWA_ID = +HAWA_ID + 1;
    node.setAttribute(DOM_HOOK_ATTR, id);
  } else {
    id = node.getAttribute(DOM_HOOK_ATTR);
  } // console.warn(id, hooks)


  LifecycleBindings.set(id, hooks);
}

function findAndDispatchHook(node, name) {
  // disable for comments
  if (node.nodeType === 8) {
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

  var parent = document.createDocumentFragment();
  var endMark = (0, _utils.add)(parent, '');
  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = []; // hydration prepare 

  if (!render) {
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
        var child = node[i]; // console.log(child);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlmZi5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJMaWZlY3ljbGVCaW5kaW5ncyIsIkRPTV9IT09LX1BST1AiLCJET01fSE9PS19BVFRSIiwiSEFXQV9JRCIsImlkIiwicGFyc2VJbnQiLCJub2RlIiwiaG9va3MiLCJub2RlcyIsImkiLCJkaXNwYXRjaEhvb2siLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsIm4iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiZGlzcG9zZXJzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiZXhwciIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJjaGlsZE5vZGVzIiwicmVuZGVyIiwiYmluZE5vZGUiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsInZhbHVlIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJuYW1lIiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwib3B0aW9ucyIsImNvbXBvbmVudE5vZGUiLCJjb21wb25lbnQiLCJtYXJrIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJjdXJyZW50Q29uZGl0aW9uSW5kZXgiLCJjb25kaXRpb24iLCJyZW5kZXJGbiIsImN1cnJlbnQiLCJzdGFydCIsImFyciIsImNoaWxkIiwibGFzdENvbmRpdGlvbiIsImdldEZpcnN0Q29uZGl0aW9uIiwiZmlyc3RMb2FkIiwicmV0dXJuTm9kZSIsImhhc0NvbmRpdGlvblJlbmRlcmVkIiwic2hvdWxkUmVuZGVyIiwiZ2V0SW5pdGlhdGVkTm9kZXMiLCJpc1NhbWVDb25kaXRpb24iLCJjbG9uZSIsInRlbXBsYXRlIiwiJHJlZnMiLCIka2V5IiwiJHByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGlCQUFpQixHQUFHLElBQXhCLEdBQXdCLEVBQXhCO0FBRU8sSUFBTUMsYUFBYSxHQUFuQjs7QUFDQSxJQUFNQyxhQUFhLEdBQW5COztBQUVBLElBQUlDLE9BQU8sR0FBWDs7O0FBRUEsa0NBQ1A7QUFDQyxNQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsSUFBSSxDQUFKQSxhQUFsQixhQUFrQkEsQ0FB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QixJQUFzQixDQUFuQnZFLENBQUgsRUFBK0I7QUFDOUJ1RSxXQUFLLENBQUxBLElBQUssQ0FBTEE7QUFERCxXQUVPO0FBQ05BLFdBQUssQ0FBTEEsSUFBSyxDQUFMQSxHQUFjLENBQUNBLEtBQUssQ0FBTixJQUFNLENBQU4sU0FBZEEsSUFBYyxDQUFkQTtBQUNBO0FBQ0Q7QUFDRDs7QUFFTSxvQ0FDUDtBQUNDLE1BQUdDLElBQUksS0FBUCxNQUFrQjtBQUNqQjtBQUNBOztBQUVELCtCQUFZLFlBQU07QUFDakJoSCxRQUFJLENBQUpBO0FBREQ7QUFHQTs7QUFFTSxxQ0FDUDtBQUNDLE1BQUdpSCxNQUFNLENBQU5BLElBQU0sQ0FBTkEsS0FBSCxXQUErQjtBQUM5QixXQUFPLFlBQU07QUFDWjtBQUREO0FBR0E7O0FBRUQsTUFBRyw4QkFBYUEsTUFBTSxDQUF0QixJQUFzQixDQUFuQixDQUFILEVBQStCO0FBQzlCLFdBQU9BLE1BQU0sQ0FBYixJQUFhLENBQWI7QUFERCxTQUVPO0FBQ04sV0FBTyxZQUFNO0FBQ1osYUFBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQUREO0FBVkYsSUFjQzs7QUFDQTs7QUFFTSwrQkFBK0I7QUFDckMsTUFBSUMsT0FBTyxLQUFQQSxhQUF5QkEsT0FBTyxLQUFwQyxNQUErQztBQUM5Q0EsV0FBTyxHQUFQQTtBQUNBOztBQUVELE1BQUlELE1BQU0sR0FBR0MsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSXZCLE1BQU0sR0FBR3VCLE9BQU8sQ0FBUEEsVUFBYjtBQUNBLE1BQUlGLElBQUksR0FBR0UsT0FBTyxDQUFQQSw0QkFBb0NBLE9BQU8sQ0FBdEQ7QUFFQSxTQUFPO0FBQ05ELFVBQU0sRUFEQTtBQUVOdEIsVUFBTSxFQUZBO0FBR05xQixRQUFJLEVBSEU7QUFJTkQsU0FBSyxFQUFFO0FBSkQsR0FBUDtBQU1BLEMiLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHNsb3QsIGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsIHN0YXRlbWVudCwgbG9hZENvbXBvbmVudCB9IiwiaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdGZpbmRBbmREaXNwYXRjaEhvb2sobiwgJ3VubW91bnRlZCcpO1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChuKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgcmVuZGVyLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGNvbXBvbmVudE5vZGUgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdHJldHVybiBtYXJrO1xuXHR9XG5cblx0cmV0dXJuIGNvbXBvbmVudE5vZGU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKVxue1xuXHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENvbmRpdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhdGVkTm9kZXMoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0bGV0IGN1cnJlbnQgPSBzdGFydDtcblx0ZG8ge1xuXHRcdGxldCB0bXAgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuXHRcdG5vZGVzLnB1c2goY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IHRtcDtcblx0fSB3aGlsZShjdXJyZW50ICE9PSBlbmQgJiYgY3VycmVudCAhPT0gbnVsbCk7XG5cblx0bm9kZXMucHVzaChlbmQpO1xuXG5cdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBub2Rlc1swXTtcblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgbm9kZSlcbntcblx0c3RhcnQuYWZ0ZXIobm9kZSk7XG5cdC8vIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBzdGFydCwgbm9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG5vZGUpXG57XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0bGV0IGFyciA9IFtdOy8vZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGFyci5wdXNoKGNoaWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1x0XG5cdC8vIGxldCBzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdGxldCBlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcblx0Ly8gbm9kZS5iZWZvcmUoc3RhcnRNYXJrKTtcblx0XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSByZW5kZXIgPyBudWxsIDogZ2V0Rmlyc3RDb25kaXRpb24oYXJncyk7XG5cblx0aWYocmVuZGVyICYmIGxhc3RDb25kaXRpb24gPT09IG51bGwpIHtcblx0XHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXHR9XG5cblx0bGV0IGZpcnN0TG9hZCA9IHRydWU7XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdFxuXHRcdGxldCBoYXNDb25kaXRpb25SZW5kZXJlZCA9IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBsYXN0Q29uZGl0aW9uICE9PSBpO1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCFyZW5kZXIgJiYgZmlyc3RMb2FkKSB7XG5cdFx0XHRyZXR1cm5Ob2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdFx0bm9kZSA9IGdldEluaXRpYXRlZE5vZGVzKG5vZGUsIHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdGZpcnN0TG9hZCA9IGZhbHNlO1xuXG5cdFx0bGV0IGlzU2FtZUNvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAgPT09IGxhc3RDb25kaXRpb247XG5cblx0XHRsYXN0Q29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0Ly8gSWYgc2FtZSBjb25kaXRpb24gdGhhdCBpdCB3YXMgaHlkcmF0ZWQgYW5kIHdlIGRvbnQgbmVlZCB0byByZXBsYWNlIG5vZGVzXG5cdFx0aWYoaXNTYW1lQ29uZGl0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbc3RhdGVtZW50XScsIG5vZGUsIHJldHVybk5vZGUpO1xuXG5cdFx0Ly8gY2xlYW51cChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdC8vIGFwcGVuZChzdGFydE1hcmssIHJldHVybk5vZGUpO1xuXG5cdFx0XG5cdFx0aWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGlsZCA9IG5vZGVbaV07XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNoaWxkKTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhjaGlsZCwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHRcdGlmKGkgPT09IDApIHtcblx0XHRcdFx0XHRjaGlsZC5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gcmV0dXJuTm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHRtcCA9IGNsb25lKHJldHVybk5vZGUpO1xuXG5cdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG5vZGUsICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdG5vZGUgPSB0bXA7XG5cdFx0fVxuXHR9LCBmYWxzZSk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59IiwiaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBpc09ic2VydmFibGUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRpZiAocmVuZGVyKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZigkcmVmcywgbm9kZSwgbmFtZSlcbntcblx0aWYoJHJlZnNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdCRyZWZzW25hbWVdID0gbm9kZTtcblx0fSBlbHNlIHtcblx0XHRpZihBcnJheS5pc0FycmF5KCRyZWZzW25hbWVdKSkge1xuXHRcdFx0JHJlZnNbbmFtZV0ucHVzaChub2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHJlZnNbbmFtZV0gPSBbJHJlZnNbbmFtZV1dLmNvbmNhdChub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEtleSgka2V5LCBub2RlLCByZW5kZXIpXG57XG5cdGlmKCRrZXkgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3YXRjaCgka2V5LCAoKSA9PiB7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgJGtleSk7XG5cdH0sIHJlbmRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3AoJHByb3BzLCBuYW1lLCBzZWVkKVxue1xuXHRpZigkcHJvcHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VlZDtcblx0XHR9XG5cdH1cblxuXHRpZihpc09ic2VydmFibGUoJHByb3BzW25hbWVdKSkge1xuXHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cdC8vIHJldHVybiBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGNvbnRleHQgPSB7fTtcblx0fVxuXG5cdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXHRsZXQgJGtleSA9IGNvbnRleHQuJGtleSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbnRleHQuJGtleTtcblxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdFx0JGtleSwgXG5cdFx0JHJlZnM6IHt9LFxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==