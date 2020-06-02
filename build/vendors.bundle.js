(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

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

  var instance = new component(options, render ? false : node);
  var componentNode = instance.$node;

  if (render) {
    var mark = componentNode.lastChild;
    node.replaceWith(componentNode);
    componentNode = mark;
  }

  return {
    $node: componentNode,
    $hooks: instance.$hooks
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJhSWR4IiwiYklkeCIsImkiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJwYXJlbnQiLCJnZXQiLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiY2xlYW5pbmciLCJkb2N1bWVudCIsImVuZE1hcmsiLCJkaXNwb3NlcnMiLCJub2RlcyIsInRvUmVtb3ZlIiwiZGVmYXVsdEEiLCJfaXRlbXMiLCJub2RlIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsIm4iLCJjaGlsZE5vZGVzIiwicmVuZGVyIiwiYmluZE5vZGUiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsInZhbHVlIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJuYW1lIiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwib3B0aW9ucyIsImluc3RhbmNlIiwiY29tcG9uZW50Tm9kZSIsIm1hcmsiLCIkbm9kZSIsIiRob29rcyIsIiRzbG90cyIsImNhbGxiYWNrIiwic2xvdE5vZGVzIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJjdXJyZW50Iiwic3RhcnQiLCJhcnIiLCJjaGlsZCIsImxhc3RDb25kaXRpb24iLCJnZXRGaXJzdENvbmRpdGlvbiIsImZpcnN0TG9hZCIsInJldHVybk5vZGUiLCJoYXNDb25kaXRpb25SZW5kZXJlZCIsInNob3VsZFJlbmRlciIsImdldEluaXRpYXRlZE5vZGVzIiwiaXNTYW1lQ29uZGl0aW9uIiwiY2xvbmUiLCJ0ZW1wbGF0ZSIsIiRyZWZzIiwiJGtleSIsIiRwcm9wcyIsImNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sa0RBQ1A7QUFDQyxNQUFNQSxJQUFJLEdBQUcsSUFBYixHQUFhLEVBQWI7QUFDQSxNQUFNQyxJQUFJLEdBQUcsSUFBYixHQUFhLEVBQWI7QUFDQTtBQUNBLE1BSkQsQ0FJQyxDQUpELENBTUM7O0FBQ0EsT0FBS0MsQ0FBQyxHQUFOLEdBQVlBLENBQUMsR0FBR0MsQ0FBQyxDQUFqQixRQUEwQkQsQ0FBMUIsSUFBK0I7QUFDOUIsUUFBSUUsR0FBRyxHQUFHQyxPQUFPLENBQUNGLENBQUMsQ0FBRixDQUFFLENBQUYsRUFBakIsQ0FBaUIsQ0FBakI7QUFDQUgsUUFBSSxDQUFKQTtBQVRGLElBWUM7OztBQUNBLE9B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QUNEOztBQUVNLG9DQUNQO0FBQ0MsTUFBR0MsSUFBSSxLQUFQLE1BQWtCO0FBQ2pCO0FBQ0E7O0FBRUQsK0JBQVksWUFBTTtBQUNqQnhGLFFBQUksQ0FBSkE7QUFERDtBQUdBOztBQUVNLHFDQUNQO0FBQ0MsTUFBR3lGLE1BQU0sQ0FBTkEsSUFBTSxDQUFOQSxLQUFILFdBQStCO0FBQzlCLFdBQU8sWUFBTTtBQUNaO0FBREQ7QUFHQTs7QUFFRCxNQUFHLDhCQUFhQSxNQUFNLENBQXRCLElBQXNCLENBQW5CLENBQUgsRUFBK0I7QUFDOUIsV0FBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQURELFNBRU87QUFDTixXQUFPLFlBQU07QUFDWixhQUFPQSxNQUFNLENBQWIsSUFBYSxDQUFiO0FBREQ7QUFWRixJQWNDOztBQUNBOztBQUVNLCtCQUErQjtBQUNyQyxNQUFJQyxPQUFPLEtBQVBBLGFBQXlCQSxPQUFPLEtBQXBDLE1BQStDO0FBQzlDQSxXQUFPLEdBQVBBO0FBQ0E7O0FBRUQsTUFBSUQsTUFBTSxHQUFHQyxPQUFPLENBQVBBLFVBQWI7QUFDQSxNQUFJdkIsTUFBTSxHQUFHdUIsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSUYsSUFBSSxHQUFHRSxPQUFPLENBQVBBLDRCQUFvQ0EsT0FBTyxDQUF0RDtBQUVBLFNBQU87QUFDTkQsVUFBTSxFQURBO0FBRU50QixVQUFNLEVBRkE7QUFHTnFCLFFBQUksRUFIRTtBQUlORCxTQUFLLEVBQUU7QUFKRCxHQUFQO0FBTUEsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChhLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG9sZCwgdGhpcyBpcyBhbiBhZGRpdGlvblxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShnZXQoYkVsbSwgaiwgMSksIGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmUpO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSBpZiAoYUVsbSA9PT0gYkVsbSkge1xuXHRcdFx0Ly8gTm8gZGlmZmVyZW5jZSwgd2UgbW92ZSBvblxuXHRcdFx0aSsrO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoYUVsbSk7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgdGhlIHdhbnRlZCBlbG1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGUgd2FudGVkIGVsZW1lbnQgaXMgbm93XG5cdFx0XHR2YXIgd2FudGVkRWxtSW5PbGQgPSBhSWR4LmdldChiRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHNsb3QsIGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsIHN0YXRlbWVudCwgbG9hZENvbXBvbmVudCB9IiwiZXhwb3J0IGZ1bmN0aW9uIGZyYWcodmFsdWUpIHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSB2YWx1ZTtcblx0aWYgKCFjaGlsZE5vZGVzIHx8IHZhbHVlLm5vZGVUeXBlICE9PSAxMSkgcmV0dXJuO1xuXHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggPCAyKSB7XG5cdFx0cmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdH1cblxuXHQvLyBGb3IgYSBmcmFnbWVudCBvZiAyIGVsZW1lbnRzIG9yIG1vcmUgYWRkIGEgc3RhcnRNYXJrLiBUaGlzIGlzIHJlcXVpcmVkXG5cdC8vIGZvciBtdWx0aXBsZSBuZXN0ZWQgY29uZGl0aW9uYWwgY29tcHV0ZWRzIHRoYXQgcmV0dXJuIGZyYWdtZW50cy5cblx0Y29uc3QgX3N0YXJ0TWFyayA9IGFkZCh2YWx1ZSwgJycsIGNoaWxkTm9kZXNbMF0pO1xuXG5cdHJldHVybiB7XG5cdFx0X3N0YXJ0TWFya1xuXHR9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGFyZW50LCB2YWx1ZSwgZW5kTWFyayA9IG51bGwpIHtcblx0dmFsdWUgPSBjYXN0Tm9kZSh2YWx1ZSk7XG5cblx0Y29uc3QgZnJhZ09yTm9kZSA9IGZyYWcodmFsdWUpIHx8IHZhbHVlO1xuXG5cdC8vIElmIGVuZE1hcmsgaXMgYG51bGxgLCB2YWx1ZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdHBhcmVudC5pbnNlcnRCZWZvcmUodmFsdWUsIGVuZE1hcmsgJiYgZW5kTWFyay5wYXJlbnROb2RlICYmIGVuZE1hcmspO1xuXG5cdHJldHVybiBmcmFnT3JOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdE5vZGUodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXHR9XG5cdGlmICghKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkpIHtcblx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IGNyZWF0ZXMgYSBEb2N1bWVudEZyYWdtZW50LlxuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KFt2YWx1ZV0pO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCBzdGFydE5vZGUsIGVuZE1hcmspIHtcblx0d2hpbGUgKHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUgIT09IGVuZE1hcmspIHtcblx0XHRjb25zdCBuID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuXHRcdC8vIElzIG5lZWRlZCBpbiBjYXNlIHRoZSBjaGlsZCB3YXMgcHVsbGVkIG91dCB0aGUgcGFyZW50IGJlZm9yZSBjbGVhcmluZy5cblx0XHRpZiAocGFyZW50ID09PSBzdGFydE5vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHN0YXJ0Tm9kZSk7XG5cdFx0fVxuXHRcdHN0YXJ0Tm9kZSA9IG47XG5cdH1cbn1cblxuY29uc3Qgbm9kZVR5cGUgPSAxMTE7XG5cblxuZXhwb3J0IGNvbnN0IGRpZmZhYmxlID0gKG5vZGUsIG9wZXJhdGlvbikgPT5cblx0bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUgP1xuXHQxIC8gb3BlcmF0aW9uIDwgMCA/XG5cdG9wZXJhdGlvbiA/XG5cdHJlbW92ZU5vZGVzKFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQucGFyZW50Tm9kZSxcblx0XHRub2RlLl9maXJzdENoaWxkLm5leHRTaWJsaW5nLFxuXHRcdG5vZGUuX2xhc3RDaGlsZC5uZXh0U2libGluZ1xuXHQpIHx8IG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlLl9sYXN0Q2hpbGQgOlxuXHRvcGVyYXRpb24gP1xuXHRub2RlLl92YWx1ZU9mKCkgOlxuXHRub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZTtcblxuZXhwb3J0IGNvbnN0IHBlcnNpc3RlbnQgPSAoZnJhZ21lbnQpID0+IHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSBmcmFnbWVudDtcblx0Y29uc3QgeyBsZW5ndGggfSA9IGNoaWxkTm9kZXM7XG5cdC8vIElmIHRoZSBmcmFnbWVudCBoYXMgbm8gY29udGVudFxuXHQvLyBpdCBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBhbmQgYnJlYWtcblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oY2hpbGROb2Rlcyk7XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHRcdF92YWx1ZU9mKCkge1xuXHRcdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoICE9PSBsZW5ndGgpIHtcblx0XHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0XHR3aGlsZSAoaSA8IGxlbmd0aCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZXNbaSsrXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdFx0fSxcblx0fTtcbn07XG4iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBpbnN0YW5jZSA9IG5ldyBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGluc3RhbmNlLiRub2RlO1xuXG5cdGlmKHJlbmRlcikge1xuXG5cdFx0bGV0IG1hcmsgPSBjb21wb25lbnROb2RlLmxhc3RDaGlsZDtcblx0XHRcblx0XHRub2RlLnJlcGxhY2VXaXRoKGNvbXBvbmVudE5vZGUpO1xuXG5cdFx0Y29tcG9uZW50Tm9kZSA9IG1hcms7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdCRub2RlOiBjb21wb25lbnROb2RlLFxuXHRcdCRob29rczogaW5zdGFuY2UuJGhvb2tzLFxuXHR9O1xufSIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpXG57XG5cdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWF0ZWROb2RlcyhzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHRsZXQgY3VycmVudCA9IHN0YXJ0O1xuXHRkbyB7XG5cdFx0bGV0IHRtcCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG5cdFx0bm9kZXMucHVzaChjdXJyZW50KTtcblx0XHRjdXJyZW50ID0gdG1wO1xuXHR9IHdoaWxlKGN1cnJlbnQgIT09IGVuZCAmJiBjdXJyZW50ICE9PSBudWxsKTtcblxuXHRub2Rlcy5wdXNoKGVuZCk7XG5cblx0aWYobm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIG5vZGVzWzBdO1xuXHR9XG5cblx0cmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHN0YXJ0LCBub2RlKVxue1xuXHRzdGFydC5hZnRlcihub2RlKTtcblx0Ly8gY29uc29sZS5sb2coJ2FwcGVuZCcsIHN0YXJ0LCBub2RlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUobm9kZSlcbntcblx0aWYobm9kZS5ub2RlVHlwZSA9PT0gMTEpIHtcblx0XHRsZXQgYXJyID0gW107Ly9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0YXJyLnB1c2goY2hpbGQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XHRcblx0Ly8gbGV0IHN0YXJ0TWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0bGV0IGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdFxuXHQvLyBub2RlLmJlZm9yZShzdGFydE1hcmspO1xuXHRcblxuXHRsZXQgbGFzdENvbmRpdGlvbiA9IHJlbmRlciA/IG51bGwgOiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKTtcblxuXHRpZihyZW5kZXIgJiYgbGFzdENvbmRpdGlvbiA9PT0gbnVsbCkge1xuXHRcdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdH1cblxuXHRsZXQgZmlyc3RMb2FkID0gdHJ1ZTtcblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdFx0XG5cdFx0bGV0IGhhc0NvbmRpdGlvblJlbmRlcmVkID0gZmFsc2U7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0bGV0IHNob3VsZFJlbmRlciA9IGxhc3RDb25kaXRpb24gIT09IGk7XG5cdFx0XHRcdHJldHVybk5vZGUgPSByZW5kZXJGbihub2RlLCBzaG91bGRSZW5kZXIpO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0aWYoc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdFx0aGFzQ29uZGl0aW9uUmVuZGVyZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIXJlbmRlciAmJiBmaXJzdExvYWQpIHtcblx0XHRcdHJldHVybk5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0XHRub2RlID0gZ2V0SW5pdGlhdGVkTm9kZXMobm9kZSwgcmV0dXJuTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zmlyc3RMb2FkID0gZmFsc2U7XG5cblx0XHRsZXQgaXNTYW1lQ29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4ICA9PT0gbGFzdENvbmRpdGlvbjtcblxuXHRcdGxhc3RDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHQvLyBJZiBzYW1lIGNvbmRpdGlvbiB0aGF0IGl0IHdhcyBoeWRyYXRlZCBhbmQgd2UgZG9udCBuZWVkIHRvIHJlcGxhY2Ugbm9kZXNcblx0XHRpZihpc1NhbWVDb25kaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1tzdGF0ZW1lbnRdJywgbm9kZSwgcmV0dXJuTm9kZSk7XG5cblx0XHQvLyBjbGVhbnVwKHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0Ly8gYXBwZW5kKHN0YXJ0TWFyaywgcmV0dXJuTm9kZSk7XG5cblx0XHRcblx0XHRpZihBcnJheS5pc0FycmF5KG5vZGUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNoaWxkID0gbm9kZVtpXTtcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2hpbGQpO1xuXHRcdFx0XHRpZihpID09PSAwKSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0bm9kZSA9IHJldHVybk5vZGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB0bXAgPSBjbG9uZShyZXR1cm5Ob2RlKVxuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdG5vZGUgPSB0bXA7XG5cdFx0XHQvLyBjb25zb2xlLmxvZyhyZXR1cm5Ob2RlLCByZXR1cm5Ob2RlLmZpcnN0Q2hpbGQpXG5cdFx0fVxuXHR9LCBmYWxzZSk7XG5cblx0Ly8gY29uc29sZS5lcnJvcihlbmRNYXJrLCBlbmRNYXJrLnByZXZpb3VzU2libGluZylcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAka2V5ID0gY29udGV4dC4ka2V5ID09PSB1bmRlZmluZWQgPyBudWxsIDogY29udGV4dC4ka2V5O1xuXG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQka2V5LCBcblx0XHQkcmVmczoge30sXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9