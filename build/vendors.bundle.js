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
          lastHydratedNode = expr(node, false, keyExpr, item, key);
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
  return {
    $props: $props,
    $slots: $slots,
    $refs: {}
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJhSWR4IiwiYklkeCIsImkiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJwYXJlbnQiLCJnZXQiLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiY2xlYW5pbmciLCJkb2N1bWVudCIsImVuZE1hcmsiLCJkaXNwb3NlcnMiLCJub2RlcyIsInRvUmVtb3ZlIiwiZGVmYXVsdEEiLCJfaXRlbXMiLCJub2RlIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsIm4iLCJjaGlsZE5vZGVzIiwicmVuZGVyIiwiYmluZE5vZGUiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsInZhbHVlIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJuYW1lIiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwib3B0aW9ucyIsImNvbXBvbmVudE5vZGUiLCJjb21wb25lbnQiLCJtYXJrIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJjdXJyZW50Q29uZGl0aW9uSW5kZXgiLCJjb25kaXRpb24iLCJyZW5kZXJGbiIsImN1cnJlbnQiLCJzdGFydCIsImFyciIsImNoaWxkIiwibGFzdENvbmRpdGlvbiIsImdldEZpcnN0Q29uZGl0aW9uIiwiZmlyc3RMb2FkIiwicmV0dXJuTm9kZSIsImhhc0NvbmRpdGlvblJlbmRlcmVkIiwic2hvdWxkUmVuZGVyIiwiZ2V0SW5pdGlhdGVkTm9kZXMiLCJpc1NhbWVDb25kaXRpb24iLCJjbG9uZSIsInRlbXBsYXRlIiwiJHJlZnMiLCIkcHJvcHMiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLGtEQUNQO0FBQ0MsTUFBTUEsSUFBSSxHQUFHLElBQWIsR0FBYSxFQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQWIsR0FBYSxFQUFiO0FBQ0E7QUFDQSxNQUpELENBSUMsQ0FKRCxDQU1DOztBQUNBLE9BQUtDLENBQUMsR0FBTixHQUFZQSxDQUFDLEdBQUdDLENBQUMsQ0FBakIsUUFBMEJELENBQTFCLElBQStCO0FBQzlCLFFBQUlFLEdBQUcsR0FBR0MsT0FBTyxDQUFDRixDQUFDLENBQUYsQ0FBRSxDQUFGLEVBQWpCLENBQWlCLENBQWpCO0FBQ0FILFFBQUksQ0FBSkE7QUFURixJQVlDOzs7QUFDQSxPQUFLRSxDQUFDLEdBQU4sR0FBWUEsQ0FB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QixDQUFILEVBQStCO0FBQzlCLFdBQU9BLE1BQU0sQ0FBYixJQUFhLENBQWI7QUFERCxTQUVPO0FBQ04sV0FBTyxZQUFNO0FBQ1osYUFBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQUREO0FBVkYsSUFjQzs7QUFDQTs7QUFFTSwrQkFBK0I7QUFDckMsTUFBSUMsT0FBTyxLQUFQQSxhQUF5QkEsT0FBTyxLQUFwQyxNQUErQztBQUM5Q0EsV0FBTyxHQUFQQTtBQUNBOztBQUVELE1BQUlELE1BQU0sR0FBR0MsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSXRCLE1BQU0sR0FBR3NCLE9BQU8sQ0FBUEEsVUFBYjtBQUVBLFNBQU87QUFDTkQsVUFBTSxFQURBO0FBRU5yQixVQUFNLEVBRkE7QUFHTm9CLFNBQUssRUFBRTtBQUhELEdBQVA7QUFLQSxDIiwiZmlsZSI6InZlbmRvcnMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmltcG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCwgZ2V0UHJvcCwgc2V0UmVmIH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHNsb3QsIGdldE5vZGUsIHNldFJlZiwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LCBzdGF0ZW1lbnQsIGxvYWRDb21wb25lbnQgfSIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdHdoaWxlIChzdGFydE5vZGUgJiYgc3RhcnROb2RlICE9PSBlbmRNYXJrKSB7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIiwiaW1wb3J0IHsgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb09iaihhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0ge307XG5cblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gT2JqZWN0LmFzc2lnbihyZXN1bHQsIGF0dHJBcmdUb09iaihhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0cmVzdWx0ID0gYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9TdHJpbmcoYXJncylcbntcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGF0dHJBcmdUb1N0cmluZyhhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJncykge1xuXHRcdFx0aWYoYXJnc1trZXldKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdC5wdXNoKGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IEFycmF5LmZyb20oXG5cdFx0XHRuZXcgU2V0KGF0dHJBcmdUb1N0cmluZyh2KSlcblx0XHQpO1xuXHRcdGxldCB0b1JlbW92ZSA9IGxhc3RDbGFzc0Fkb3B0ZWQuZmlsdGVyKHggPT4gIXRvU2V0LmluY2x1ZGVzKHgpKTtcblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1NldCkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1JlbW92ZSkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXHRcdH1cblxuXHRcdGxhc3RDbGFzc0Fkb3B0ZWQgPSB0b1NldDtcblx0fSwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IGF0dHJBcmdUb09iaih2KTtcblx0XHRmb3IobGV0IG5hbWUgaW4gc3R5bGVzKSB7XG5cdFx0XHRub2RlLnN0eWxlW25hbWVdID0gc3R5bGVzW25hbWVdO1xuXHRcdH1cblx0fSwgcmVuZGVyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMobm9kZSwgcmVuZGVyLCBhdHRycylcbntcblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYobmFtZSA9PT0gJ2NsYXNzJykge1xuXHRcdFx0bWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0XHRtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG5cdFx0XHR9LCByZW5kZXIpO1xuXHRcdH1cblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCByZW5kZXIsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdGlmKHJlbmRlcikge1xuXG5cdFx0bGV0IG1hcmsgPSBjb21wb25lbnROb2RlLmxhc3RDaGlsZDtcblx0XHRcblx0XHRub2RlLnJlcGxhY2VXaXRoKGNvbXBvbmVudE5vZGUpO1xuXG5cdFx0cmV0dXJuIG1hcms7XG5cdH1cblxuXHRyZXR1cm4gY29tcG9uZW50Tm9kZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKVxue1xuXHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENvbmRpdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhdGVkTm9kZXMoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0bGV0IGN1cnJlbnQgPSBzdGFydDtcblx0ZG8ge1xuXHRcdGxldCB0bXAgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuXHRcdG5vZGVzLnB1c2goY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IHRtcDtcblx0fSB3aGlsZShjdXJyZW50ICE9PSBlbmQgJiYgY3VycmVudCAhPT0gbnVsbCk7XG5cblx0bm9kZXMucHVzaChlbmQpO1xuXG5cdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBub2Rlc1swXTtcblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgbm9kZSlcbntcblx0c3RhcnQuYWZ0ZXIobm9kZSk7XG5cdC8vIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBzdGFydCwgbm9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG5vZGUpXG57XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0bGV0IGFyciA9IFtdOy8vZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGFyci5wdXNoKGNoaWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1x0XG5cdC8vIGxldCBzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdGxldCBlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcblx0Ly8gbm9kZS5iZWZvcmUoc3RhcnRNYXJrKTtcblx0XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSByZW5kZXIgPyBudWxsIDogZ2V0Rmlyc3RDb25kaXRpb24oYXJncyk7XG5cblx0aWYocmVuZGVyICYmIGxhc3RDb25kaXRpb24gPT09IG51bGwpIHtcblx0XHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXHR9XG5cblx0bGV0IGZpcnN0TG9hZCA9IHRydWU7XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdFxuXHRcdGxldCBoYXNDb25kaXRpb25SZW5kZXJlZCA9IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBsYXN0Q29uZGl0aW9uICE9PSBpO1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCFyZW5kZXIgJiYgZmlyc3RMb2FkKSB7XG5cdFx0XHRyZXR1cm5Ob2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdFx0bm9kZSA9IGdldEluaXRpYXRlZE5vZGVzKG5vZGUsIHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdGZpcnN0TG9hZCA9IGZhbHNlO1xuXG5cdFx0bGV0IGlzU2FtZUNvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAgPT09IGxhc3RDb25kaXRpb247XG5cblx0XHRsYXN0Q29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0Ly8gSWYgc2FtZSBjb25kaXRpb24gdGhhdCBpdCB3YXMgaHlkcmF0ZWQgYW5kIHdlIGRvbnQgbmVlZCB0byByZXBsYWNlIG5vZGVzXG5cdFx0aWYoaXNTYW1lQ29uZGl0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbc3RhdGVtZW50XScsIG5vZGUsIHJldHVybk5vZGUpO1xuXG5cdFx0Ly8gY2xlYW51cChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdC8vIGFwcGVuZChzdGFydE1hcmssIHJldHVybk5vZGUpO1xuXG5cdFx0XG5cdFx0aWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGlsZCA9IG5vZGVbaV07XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNoaWxkKTtcblx0XHRcdFx0aWYoaSA9PT0gMCkge1xuXHRcdFx0XHRcdGNoaWxkLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUgPSByZXR1cm5Ob2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgdG1wID0gY2xvbmUocmV0dXJuTm9kZSlcblx0XHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRub2RlID0gdG1wO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmV0dXJuTm9kZSwgcmV0dXJuTm9kZS5maXJzdENoaWxkKVxuXHRcdH1cblx0fSwgZmFsc2UpO1xuXG5cdC8vIGNvbnNvbGUuZXJyb3IoZW5kTWFyaywgZW5kTWFyay5wcmV2aW91c1NpYmxpbmcpXG5cblx0cmV0dXJuIGVuZE1hcms7XG59IiwiaW1wb3J0IHsgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=