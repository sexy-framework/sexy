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
  } // if(render) {


  node.value = value(); // }

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
Object.defineProperty(exports, "parser", {
  enumerable: true,
  get: function get() {
    return _parser.parser;
  }
});

var _bind = __webpack_require__(/*! ./custom/bind */ "./packages/directives/dist/custom/bind.js");

var _parser = __webpack_require__(/*! ./parser */ "./packages/directives/dist/parser.js");

/***/ }),

/***/ "./packages/directives/dist/parser.js":
/*!********************************************!*\
  !*** ./packages/directives/dist/parser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parser = parser;

var _index = __webpack_require__(/*! ./parser/index */ "./packages/directives/dist/parser/index.js");

var directives = {
  bind: _index.bind
};

function parser(entity) {
  var entityDirectives = {};

  if (entity.option && entity.option.directives) {
    entityDirectives = entity.option.directives;
  }

  for (var name in entityDirectives) {
    if (directives[name]) {
      directives[name](entity, entityDirectives[name]);
    } else {
      console.warn("There is no parser modifier for directive '" + name + "' ");
    }
  }
}

/***/ }),

/***/ "./packages/directives/dist/parser/bind.js":
/*!*************************************************!*\
  !*** ./packages/directives/dist/parser/bind.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = bind;

function bind(entity, directive) {
  if (entity.type !== 'component') {
    return;
  }

  entity.option.props['value'] = {
    value: "(" + directive.value + ")()",
    isExpression: true
  };
}

/***/ }),

/***/ "./packages/directives/dist/parser/index.js":
/*!**************************************************!*\
  !*** ./packages/directives/dist/parser/index.js ***!
  \**************************************************/
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

var _bind = __webpack_require__(/*! ./bind */ "./packages/directives/dist/parser/bind.js");

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
exports.createHooks = createHooks;
exports.getHID = getHID;
exports.findAndDispatchHook = findAndDispatchHook;
exports.HOOK_NAME_CLEAN_TRIGGER = void 0;

var _render = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");

var LifecycleBindings = new Map();
var HOOK_NAME_CLEAN_TRIGGER = 'unmounted';
exports.HOOK_NAME_CLEAN_TRIGGER = HOOK_NAME_CLEAN_TRIGGER;

function isLifecycleNode(node) {
  return node.nodeType !== 8 && node.nodeType !== 3;
}

function dispatchHook(id, name) {
  if (id === null) {
    return;
  }

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

function createHooks(hooks, id) {
  LifecycleBindings.set(id, hooks);
}

function getHID(node) {
  try {
    var id = node.getAttribute(_render.DOM_HOOK_ATTR);
    return parseInt(id);
  } catch (err) {
    return null;
  }
}

function findAndDispatchHook(node, name) {
  // disable for comments
  if (!isLifecycleNode(node)) {
    return;
  }

  var nodes = node.querySelectorAll("[" + _render.DOM_HOOK_ATTR + "]");

  for (var i = 0; i < nodes.length; i++) {
    dispatchHook(getHID(nodes[i]), name);
  } // if(node.hasAttribute(DOM_HOOK_ATTR)) {


  dispatchHook(getHID(node), name); // }
  // console.log(node, nodes);
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

/***/ "./packages/render/dist/createComponent.js":
/*!*************************************************!*\
  !*** ./packages/render/dist/createComponent.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createComponent = createComponent;
exports.HAWA_ID = exports.DOM_HOOK_ATTR = void 0;
var DOM_HOOK_ATTR = 'data-hid';
exports.DOM_HOOK_ATTR = DOM_HOOK_ATTR;
var HAWA_ID = 0;
exports.HAWA_ID = HAWA_ID;

function createComponent(node, render) {
  var id;

  if (render) {
    id = exports.HAWA_ID = HAWA_ID = +HAWA_ID + 1;
    node.setAttribute(DOM_HOOK_ATTR, id);
  } else {
    id = parseInt(node.getAttribute(DOM_HOOK_ATTR));
  }

  return id;
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

function events(node, options) {
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
Object.defineProperty(exports, "createComponent", {
  enumerable: true,
  get: function get() {
    return _createComponent.createComponent;
  }
});
Object.defineProperty(exports, "DOM_HOOK_ATTR", {
  enumerable: true,
  get: function get() {
    return _createComponent.DOM_HOOK_ATTR;
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

var _createComponent = __webpack_require__(/*! ./createComponent */ "./packages/render/dist/createComponent.js");

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

var _lifecycle = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");

function loadComponent(component, node, render, options) {
  if (options === void 0) {
    options = {};
  }

  var c = component(options, render ? false : node);
  var componentNode = c.node;

  if (render) {
    var mark = componentNode.lastChild;
    node.replaceWith(componentNode);
    componentNode = mark;
  }

  (0, _lifecycle.dispatchHook)(c.id, 'mounted');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJldmVudCIsInZhbHVlIiwibm9kZSIsImRpcmVjdGl2ZXMiLCJiaW5kIiwiZW50aXR5RGlyZWN0aXZlcyIsImVudGl0eSIsImNvbnNvbGUiLCJkaXJlY3RpdmUiLCJpc0V4cHJlc3Npb24iLCJMaWZlY3ljbGVCaW5kaW5ncyIsIkhPT0tfTkFNRV9DTEVBTl9UUklHR0VSIiwiaWQiLCJob29rcyIsImkiLCJuYW1lIiwiRE9NX0hPT0tfQVRUUiIsInBhcnNlSW50IiwiaXNMaWZlY3ljbGVOb2RlIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJnZXRISUQiLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsIm4iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZGlzcG9zZXJzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiZW5kTWFyayIsImJpbmROb2RlIiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsImNoaWxkTm9kZXMiLCJyZW5kZXIiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJmbiIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJyZXN1bHQiLCJhcmdzIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0Iiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwiSEFXQV9JRCIsInVubW91bnRlZCIsIiRob29rcyIsImRldGFpbCIsIm9wdGlvbnMiLCJjIiwiY29tcG9uZW50IiwiY29tcG9uZW50Tm9kZSIsIm1hcmsiLCIkc2xvdHMiLCJjYWxsYmFjayIsInNsb3ROb2RlcyIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsOEJBQ0E7QUFDQyxRQUFHQSxLQUFLLFlBQVIsYUFBaUM7QUFDaENDLFdBQUssQ0FBTEEsWUFBa0JELEtBQUssQ0FBdkJDO0FBREQsV0FFTztBQUNOQSxXQUFLLENBQUNDLElBQUksQ0FBVkQsS0FBSyxDQUFMQTtBQUNBO0FBUEgsSUFVQzs7O0FBQ0FDLE1BQUksQ0FBSkEsUUFBYUQsS0FYZCxFQVdDQyxDQVhELENBWUM7O0FBRUFBLE1BQUksQ0FBSkE7QUFFQSxTQUFPLFlBQU07QUFDWkEsUUFBSSxDQUFKQTtBQUREO0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUNBLDBGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUpBO0FBRGtCLENBQW5COztBQUlPLHdCQUNQO0FBQ0MsTUFBSUMsZ0JBQWdCLEdBQXBCOztBQUVBLE1BQUdDLE1BQU0sQ0FBTkEsVUFBaUJBLE1BQU0sQ0FBTkEsT0FBcEIsWUFBOEM7QUFDN0NELG9CQUFnQixHQUFHQyxNQUFNLENBQU5BLE9BQW5CRDtBQUNBOztBQUVELE9BQUksSUFBSiwwQkFBa0M7QUFDakMsUUFBR0YsVUFB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O0FBRUQsTUFBRyw4QkFBYUEsTUFBTSxDQUF0QixJQUFzQixDQUFuQixDQUFILEVBQStCO0FBQzlCLFdBQU9BLE1BQU0sQ0FBYixJQUFhLENBQWI7QUFERCxTQUVPO0FBQ04sV0FBTyxZQUFNO0FBQ1osYUFBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQUREO0FBVkYsSUFjQzs7QUFDQTs7QUFFTSwrQkFBK0I7QUFDckMsTUFBSUMsT0FBTyxLQUFQQSxhQUF5QkEsT0FBTyxLQUFwQyxNQUErQztBQUM5Q0EsV0FBTyxHQUFQQTtBQUNBOztBQUVELE1BQUlELE1BQU0sR0FBR0MsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSXZCLE1BQU0sR0FBR3VCLE9BQU8sQ0FBUEEsVUFBYjtBQUNBLE1BQUlDLFdBQVcsR0FBR0QsT0FBTyxDQUFQQSxlQUFsQjtBQUVBLFNBQU87QUFDTkQsVUFBTSxFQURBO0FBRU50QixVQUFNLEVBRkE7QUFHTndCLGVBQVcsRUFITDtBQUlOSixTQUFLLEVBQUU7QUFKRCxHQUFQO0FBTUEsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZSc7XG5cbi8vIHN0YXRpYyBwYXJzZXIoZW50aXR5KVxuLy8gXHR7XG4vLyBcdFx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0bGV0IG1vZGVsRGlyZWN0aXZlID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzW01vZGVsLmdldE5hbWUoKV07XG5cbi8vIFx0XHRpZihtb2RlbERpcmVjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcbi8vIFx0XHRcdHZhbHVlOiBgKCR7IG1vZGVsRGlyZWN0aXZlLnZhbHVlLnZhbHVlIH0pKClgLFxuLy8gXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuLy8gXHRcdH07XG5cdFx0XG4vLyBcdFx0Ly8gZ2V0XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZW50aXR5Lm9wdGlvbik7XG4vLyBcdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoZXZlbnQpXG5cdHtcblx0XHRpZihldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KSB7XG5cdFx0XHR2YWx1ZS5hcHBseShudWxsLCBldmVudC5kZXRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZShub2RlLnZhbHVlKTtcblx0XHR9XG5cdH1cblxuXHQvLyBpZihyZW5kZXIpIHtcblx0bm9kZS52YWx1ZSA9IHZhbHVlKCk7XG5cdC8vIH1cblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblx0fVxufSIsImltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmltcG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCwgZ2V0UHJvcCwgc2V0UmVmLCBzZXRLZXkgfSBmcm9tICcuL3RlbXBsYXRlcydcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIERPTV9IT09LX0FUVFIgfSBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudCdcbmltcG9ydCB7IGVtaXQgfSBmcm9tICcuL2VtaXQnXG5pbXBvcnQgeyBjYWxsIH0gZnJvbSAnLi9jYWxsJ1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbG9hZCdcblxuZXhwb3J0IHsgYXR0cnMsIGV2ZW50cywgc2xvdCwgZ2V0Tm9kZSwgc2V0UmVmLCBzZXRLZXksIGdldFByb3AsIHBhcnNlQ29udGV4dCwgc3RhdGVtZW50LCBkaXJlY3RpdmUsIGNhbGwsIGVtaXQsIGxvYWRDb21wb25lbnQsIGNyZWF0ZUNvbXBvbmVudCwgRE9NX0hPT0tfQVRUUiB9IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHRsZXQgbiA9IGdldChhW2ldLCBpLCAtMSk7XG5cdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG4sICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChuKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpKTtcblx0fVxuXG5cdHJldHVybiBpZDtcbn0iLCIvLyBpbXBvcnQgeyBSZWdpc3RlcmVkRGlyZWN0aXZlcyB9IGZyb20gJ0BoYXdhL2RpcmVjdGl2ZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUoJGhvb2tzLCBkaXJlY3RpdmUsIG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB1bm1vdW50ZWQgPSBkaXJlY3RpdmUobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcblxuXHQkaG9va3MudW5tb3VudGVkLnB1c2goXG5cdFx0dW5tb3VudGVkXG5cdCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRkaXNwYXRjaEhvb2ssXG59IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGMubm9kZTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdGNvbXBvbmVudE5vZGUgPSBtYXJrO1xuXHR9XG5cblx0ZGlzcGF0Y2hIb29rKGMuaWQsICdtb3VudGVkJyk7XG5cblx0cmV0dXJuIGNvbXBvbmVudE5vZGU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKVxue1xuXHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENvbmRpdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhdGVkTm9kZXMoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0bGV0IGN1cnJlbnQgPSBzdGFydDtcblx0ZG8ge1xuXHRcdGxldCB0bXAgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuXHRcdG5vZGVzLnB1c2goY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IHRtcDtcblx0fSB3aGlsZShjdXJyZW50ICE9PSBlbmQgJiYgY3VycmVudCAhPT0gbnVsbCk7XG5cblx0bm9kZXMucHVzaChlbmQpO1xuXG5cdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBub2Rlc1swXTtcblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgbm9kZSlcbntcblx0c3RhcnQuYWZ0ZXIobm9kZSk7XG5cdC8vIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBzdGFydCwgbm9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG5vZGUpXG57XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0bGV0IGFyciA9IFtdOy8vZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGFyci5wdXNoKGNoaWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1x0XG5cdC8vIGxldCBzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdGxldCBlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcblx0Ly8gbm9kZS5iZWZvcmUoc3RhcnRNYXJrKTtcblx0XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSByZW5kZXIgPyBudWxsIDogZ2V0Rmlyc3RDb25kaXRpb24oYXJncyk7XG5cblx0aWYocmVuZGVyICYmIGxhc3RDb25kaXRpb24gPT09IG51bGwpIHtcblx0XHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXHR9XG5cblx0bGV0IGZpcnN0TG9hZCA9IHRydWU7XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG5cdFx0bGV0IGhhc0NvbmRpdGlvblJlbmRlcmVkID0gZmFsc2U7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0bGV0IHNob3VsZFJlbmRlciA9IGxhc3RDb25kaXRpb24gIT09IGk7XG5cdFx0XHRcdHJldHVybk5vZGUgPSByZW5kZXJGbihub2RlLCBzaG91bGRSZW5kZXIpO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0aWYoc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdFx0aGFzQ29uZGl0aW9uUmVuZGVyZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIXJlbmRlciAmJiBmaXJzdExvYWQpIHtcblx0XHRcdHJldHVybk5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0XHRub2RlID0gZ2V0SW5pdGlhdGVkTm9kZXMobm9kZSwgcmV0dXJuTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zmlyc3RMb2FkID0gZmFsc2U7XG5cblx0XHRsZXQgaXNTYW1lQ29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4ICA9PT0gbGFzdENvbmRpdGlvbjtcblxuXHRcdGxhc3RDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHQvLyBJZiBzYW1lIGNvbmRpdGlvbiB0aGF0IGl0IHdhcyBoeWRyYXRlZCBhbmQgd2UgZG9udCBuZWVkIHRvIHJlcGxhY2Ugbm9kZXNcblx0XHRpZihpc1NhbWVDb25kaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1tzdGF0ZW1lbnRdJywgbm9kZSwgcmV0dXJuTm9kZSk7XG5cblx0XHQvLyBjbGVhbnVwKHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0Ly8gYXBwZW5kKHN0YXJ0TWFyaywgcmV0dXJuTm9kZSk7XG5cblx0XHRcblx0XHRpZihBcnJheS5pc0FycmF5KG5vZGUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNoaWxkID0gbm9kZVtpXTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhjaGlsZCwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHRcdGlmKGkgPT09IDApIHtcblx0XHRcdFx0XHRjaGlsZC5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gcmV0dXJuTm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHRtcCA9IGNsb25lKHJldHVybk5vZGUpO1xuXHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhub2RlLCAndW5tb3VudGVkJyk7XG5cblx0XHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRub2RlID0gdG1wO1xuXHRcdH1cblx0fSwgZmFsc2UpO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IHdhdGNoLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRjdXN0b21Jbml0ID0gY29udGV4dC4kY3VzdG9tSW5pdCB8fCBudWxsO1xuXHRcblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRjdXN0b21Jbml0LFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=