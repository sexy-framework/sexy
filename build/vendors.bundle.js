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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJldmVudCIsInZhbHVlIiwibm9kZSIsImRpcmVjdGl2ZXMiLCJiaW5kIiwiZW50aXR5RGlyZWN0aXZlcyIsImVudGl0eSIsImNvbnNvbGUiLCJkaXJlY3RpdmUiLCJpc0V4cHJlc3Npb24iLCJMaWZlY3ljbGVCaW5kaW5ncyIsIkRPTV9IT09LX1BST1AiLCJET01fSE9PS19BVFRSIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJIQVdBX0lEIiwiaXNMaWZlY3ljbGVOb2RlIiwiaWQiLCJwYXJzZUludCIsImhvb2tzIiwiaSIsIm5hbWUiLCJub2RlcyIsImRpc3BhdGNoSG9vayIsImFJZHgiLCJiSWR4IiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiaiIsImFFbG0iLCJiRWxtIiwibiIsImdldCIsInBhcmVudCIsImtleV9hRWxtIiwia2V5X2JFbG0iLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiY2xlYW5pbmciLCJkaXNwb3NlcnMiLCJ0b1JlbW92ZSIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiYmluZE5vZGUiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImV4cHIiLCJoeWRyYXRlZE5vZGVzIiwic3RhcnROb2RlU2VhcmNoIiwiY2hpbGROb2RlcyIsInJlbmRlciIsInVuc3Vic2NyaWJlIiwiY29udGVudCIsIkFycmF5IiwiZWwiLCJub2RlS2V5IiwiZCIsImRpc3Bvc2VyIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwiZGVwIiwicHJvcCIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJzdHlsZXMiLCJhdHRycyIsIm1ha2VDbGFzcyIsIm1ha2VTdHlsZXMiLCJ1bm1vdW50ZWQiLCIkaG9va3MiLCJkZXRhaWwiLCJvcHRpb25zIiwiY29tcG9uZW50Tm9kZSIsImNvbXBvbmVudCIsIm1hcmsiLCIkc2xvdHMiLCJjYWxsYmFjayIsInNsb3ROb2RlcyIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsOEJBQ0E7QUFDQyxRQUFHQSxLQUFLLFlBQVIsYUFBaUM7QUFDaENDLFdBQUssQ0FBTEEsWUFBa0JELEtBQUssQ0FBdkJDO0FBREQsV0FFTztBQUNOQSxXQUFLLENBQUNDLElBQUksQ0FBVkQsS0FBSyxDQUFMQTtBQUNBO0FBUEgsSUFVQzs7O0FBQ0FDLE1BQUksQ0FBSkEsUUFBYUQsS0FYZCxFQVdDQyxDQVhELENBWUM7O0FBRUFBLE1BQUksQ0FBSkE7QUFFQSxTQUFPLFlBQU07QUFDWkEsUUFBSSxDQUFKQTtBQUREO0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUNBLDBGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRUEsSUFBTUMsVUFBVSxHQUFHO0FBQ2xCQyxNQUFJLEVBQUpBO0FBRGtCLENBQW5COztBQUlPLHdCQUNQO0FBQ0MsTUFBSUMsZ0JBQWdCLEdBQXBCOztBQUVBLE1BQUdDLE1BQU0sQ0FBTkEsVUFBaUJBLE1BQU0sQ0FBTkEsT0FBcEIsWUFBOEM7QUFDN0NELG9CQUFnQixHQUFHQyxNQUFNLENBQU5BLE9BQW5CRDtBQUNBOztBQUVELE9BQUksSUFBSiwwQkFBa0M7QUFDakMsUUFBR0YsVUFBVSxDQUFiLElBQWEsQ0FBYixFQUFxQjtBQUNwQkEsZ0JBQVUs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K0JBQStCO0FBQ3JDLE1BQUlDLE9BQU8sS0FBUEEsYUFBeUJBLE9BQU8sS0FBcEMsTUFBK0M7QUFDOUNBLFdBQU8sR0FBUEE7QUFDQTs7QUFFRCxNQUFJRCxNQUFNLEdBQUdDLE9BQU8sQ0FBUEEsVUFBYjtBQUNBLE1BQUl2QixNQUFNLEdBQUd1QixPQUFPLENBQVBBLFVBQWI7QUFDQSxNQUFJQyxXQUFXLEdBQUdELE9BQU8sQ0FBUEEsZUFBbEI7QUFFQSxTQUFPO0FBQ05ELFVBQU0sRUFEQTtBQUVOdEIsVUFBTSxFQUZBO0FBR053QixlQUFXLEVBSEw7QUFJTkosU0FBSyxFQUFFO0FBSkQsR0FBUDtBQU1BLEMiLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUnO1xuXG4vLyBzdGF0aWMgcGFyc2VyKGVudGl0eSlcbi8vIFx0e1xuLy8gXHRcdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGxldCBtb2RlbERpcmVjdGl2ZSA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1tNb2RlbC5nZXROYW1lKCldO1xuXG4vLyBcdFx0aWYobW9kZWxEaXJlY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG4vLyBcdFx0XHR2YWx1ZTogYCgkeyBtb2RlbERpcmVjdGl2ZS52YWx1ZS52YWx1ZSB9KSgpYCxcbi8vIFx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcbi8vIFx0XHR9O1xuXHRcdFxuLy8gXHRcdC8vIGdldFxuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVudGl0eS5vcHRpb24pO1xuLy8gXHR9XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dmFsdWUuYXBwbHkobnVsbCwgZXZlbnQuZGV0YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUobm9kZS52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gaWYocmVuZGVyKSB7XG5cdG5vZGUudmFsdWUgPSB2YWx1ZSgpO1xuXHQvLyB9XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHsgZW1pdCB9IGZyb20gJy4vZW1pdCdcbmltcG9ydCB7IGNhbGwgfSBmcm9tICcuL2NhbGwnXG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkJ1xuXG5leHBvcnQgeyBhdHRycywgZXZlbnRzLCBzbG90LCBnZXROb2RlLCBzZXRSZWYsIHNldEtleSwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LCBzdGF0ZW1lbnQsIGRpcmVjdGl2ZSwgY2FsbCwgZW1pdCwgbG9hZENvbXBvbmVudCB9IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHRsZXQgbiA9IGdldChhW2ldLCBpLCAtMSk7XG5cdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG4sICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChuKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiLy8gaW1wb3J0IHsgUmVnaXN0ZXJlZERpcmVjdGl2ZXMgfSBmcm9tICdAaGF3YS9kaXJlY3RpdmVzJ1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0JGhvb2tzLnVubW91bnRlZC5wdXNoKFxuXHRcdHVubW91bnRlZFxuXHQpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCByZW5kZXIsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdGlmKHJlbmRlcikge1xuXG5cdFx0bGV0IG1hcmsgPSBjb21wb25lbnROb2RlLmxhc3RDaGlsZDtcblx0XHRcblx0XHRub2RlLnJlcGxhY2VXaXRoKGNvbXBvbmVudE5vZGUpO1xuXG5cdFx0cmV0dXJuIG1hcms7XG5cdH1cblxuXHRyZXR1cm4gY29tcG9uZW50Tm9kZTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpXG57XG5cdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0aWF0ZWROb2RlcyhzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHRsZXQgY3VycmVudCA9IHN0YXJ0O1xuXHRkbyB7XG5cdFx0bGV0IHRtcCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG5cdFx0bm9kZXMucHVzaChjdXJyZW50KTtcblx0XHRjdXJyZW50ID0gdG1wO1xuXHR9IHdoaWxlKGN1cnJlbnQgIT09IGVuZCAmJiBjdXJyZW50ICE9PSBudWxsKTtcblxuXHRub2Rlcy5wdXNoKGVuZCk7XG5cblx0aWYobm9kZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIG5vZGVzWzBdO1xuXHR9XG5cblx0cmV0dXJuIG5vZGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kKHN0YXJ0LCBub2RlKVxue1xuXHRzdGFydC5hZnRlcihub2RlKTtcblx0Ly8gY29uc29sZS5sb2coJ2FwcGVuZCcsIHN0YXJ0LCBub2RlKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUobm9kZSlcbntcblx0aWYobm9kZS5ub2RlVHlwZSA9PT0gMTEpIHtcblx0XHRsZXQgYXJyID0gW107Ly9kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cdFx0Zm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5jaGlsZHJlbikge1xuXHRcdFx0YXJyLnB1c2goY2hpbGQpO1xuXHRcdH1cblxuXHRcdHJldHVybiBhcnI7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XHRcblx0Ly8gbGV0IHN0YXJ0TWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0bGV0IGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdFxuXHQvLyBub2RlLmJlZm9yZShzdGFydE1hcmspO1xuXHRcblxuXHRsZXQgbGFzdENvbmRpdGlvbiA9IHJlbmRlciA/IG51bGwgOiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKTtcblxuXHRpZihyZW5kZXIgJiYgbGFzdENvbmRpdGlvbiA9PT0gbnVsbCkge1xuXHRcdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdH1cblxuXHRsZXQgZmlyc3RMb2FkID0gdHJ1ZTtcblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cblx0XHRsZXQgaGFzQ29uZGl0aW9uUmVuZGVyZWQgPSBmYWxzZTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0XHRsZXQgc2hvdWxkUmVuZGVyID0gbGFzdENvbmRpdGlvbiAhPT0gaTtcblx0XHRcdFx0cmV0dXJuTm9kZSA9IHJlbmRlckZuKG5vZGUsIHNob3VsZFJlbmRlcik7XG5cblx0XHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblxuXHRcdFx0XHRpZihzaG91bGRSZW5kZXIpIHtcblx0XHRcdFx0XHRoYXNDb25kaXRpb25SZW5kZXJlZCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZighcmVuZGVyICYmIGZpcnN0TG9hZCkge1xuXHRcdFx0cmV0dXJuTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHRcdG5vZGUgPSBnZXRJbml0aWF0ZWROb2Rlcyhub2RlLCByZXR1cm5Ob2RlKTtcblx0XHR9XG5cblx0XHRmaXJzdExvYWQgPSBmYWxzZTtcblxuXHRcdGxldCBpc1NhbWVDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggID09PSBsYXN0Q29uZGl0aW9uO1xuXG5cdFx0bGFzdENvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdC8vIElmIHNhbWUgY29uZGl0aW9uIHRoYXQgaXQgd2FzIGh5ZHJhdGVkIGFuZCB3ZSBkb250IG5lZWQgdG8gcmVwbGFjZSBub2Rlc1xuXHRcdGlmKGlzU2FtZUNvbmRpdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybignW3N0YXRlbWVudF0nLCBub2RlLCByZXR1cm5Ob2RlKTtcblxuXHRcdC8vIGNsZWFudXAoc3RhcnRNYXJrLCBlbmRNYXJrKTtcblx0XHQvLyBhcHBlbmQoc3RhcnRNYXJrLCByZXR1cm5Ob2RlKTtcblxuXHRcdFxuXHRcdGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgY2hpbGQgPSBub2RlW2ldO1xuXHRcdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKGNoaWxkLCAndW5tb3VudGVkJyk7XG5cblx0XHRcdFx0aWYoaSA9PT0gMCkge1xuXHRcdFx0XHRcdGNoaWxkLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUgPSByZXR1cm5Ob2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgdG1wID0gY2xvbmUocmV0dXJuTm9kZSk7XG5cdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG5vZGUsICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdG5vZGUgPSB0bXA7XG5cdFx0fVxuXHR9LCBmYWxzZSk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59IiwiaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBpc09ic2VydmFibGUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRpZiAocmVuZGVyKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZigkcmVmcywgbm9kZSwgbmFtZSlcbntcblx0aWYoJHJlZnNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdCRyZWZzW25hbWVdID0gbm9kZTtcblx0fSBlbHNlIHtcblx0XHRpZihBcnJheS5pc0FycmF5KCRyZWZzW25hbWVdKSkge1xuXHRcdFx0JHJlZnNbbmFtZV0ucHVzaChub2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHJlZnNbbmFtZV0gPSBbJHJlZnNbbmFtZV1dLmNvbmNhdChub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEtleSgka2V5LCBub2RlLCByZW5kZXIpXG57XG5cdGlmKCRrZXkgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3YXRjaCgka2V5LCAoKSA9PiB7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgJGtleSk7XG5cdH0sIHJlbmRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3AoJHByb3BzLCBuYW1lLCBzZWVkKVxue1xuXHRpZigkcHJvcHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VlZDtcblx0XHR9XG5cdH1cblxuXHRpZihpc09ic2VydmFibGUoJHByb3BzW25hbWVdKSkge1xuXHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cdC8vIHJldHVybiBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGNvbnRleHQgPSB7fTtcblx0fVxuXG5cdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXHRsZXQgJGN1c3RvbUluaXQgPSBjb250ZXh0LiRjdXN0b21Jbml0IHx8IG51bGw7XG5cdFxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdFx0JGN1c3RvbUluaXQsXG5cdFx0JHJlZnM6IHt9LFxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==