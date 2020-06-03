(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/directives/dist/directive.js":
/*!***********************************************!*\
  !*** ./packages/directives/dist/directive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Directive = void 0;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var Directive = /*#__PURE__*/function () {
  function Directive(node, _ref, render) {
    var options = _ref.options,
        value = _ref.value,
        rawValue = _ref.rawValue;
    this.node = node;
    this.options = options;
    this.value = value;
    this.rawValue = rawValue;
    this.render = render;
  }

  Directive.getName = function getName() {
    return this.name.toLowerCase();
  };

  Directive.parser = function parser(entity) {};

  Directive.get = function get(entity) {
    entity.option.directives[this.name];
  };

  var _proto = Directive.prototype;

  _proto.mounted = function mounted() {};

  _proto.unmounted = function unmounted() {};

  _createClass(Directive, [{
    key: "name",
    get: function get() {
      return this.constructor.name.toLowerCase();
    }
  }]);

  return Directive;
}();

exports.Directive = Directive;

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
Object.defineProperty(exports, "Directive", {
  enumerable: true,
  get: function get() {
    return _directive.Directive;
  }
});
Object.defineProperty(exports, "parser", {
  enumerable: true,
  get: function get() {
    return _parser.parser;
  }
});
Object.defineProperty(exports, "register", {
  enumerable: true,
  get: function get() {
    return _register.register;
  }
});
Object.defineProperty(exports, "RegisteredDirectives", {
  enumerable: true,
  get: function get() {
    return _register.RegisteredDirectives;
  }
});

var _directive = __webpack_require__(/*! ./directive */ "./packages/directives/dist/directive.js");

var _parser = __webpack_require__(/*! ./parser */ "./packages/directives/dist/parser.js");

var _register = __webpack_require__(/*! ./register */ "./packages/directives/dist/register.js");

/***/ }),

/***/ "./packages/directives/dist/model/index.js":
/*!*************************************************!*\
  !*** ./packages/directives/dist/model/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _directive = __webpack_require__(/*! ../directive */ "./packages/directives/dist/directive.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Model = /*#__PURE__*/function (_Directive) {
  _inheritsLoose(Model, _Directive);

  function Model() {
    return _Directive.apply(this, arguments) || this;
  } // constructor()
  // {
  // 	super();
  // }


  Model.parser = function parser(entity) {
    if (entity.type !== 'component') {
      return;
    }

    var modelDirective = entity.option.directives[Model.getName()];

    if (modelDirective === undefined) {
      return;
    }

    entity.option.props['value'] = {
      value: "(" + modelDirective.value.value + ")()",
      isExpression: true
    }; // get
    // console.log(entity.option);
  };

  var _proto = Model.prototype;

  _proto.bindEvent = function bindEvent(event) {
    if (event instanceof CustomEvent) {
      this.value.apply(null, event.detail);
    } else {
      this.value(this.node.value);
    }
  };

  _proto.mounted = function mounted() {
    if (this.render) {
      this.node.value = this.value();
    }

    this.node.addEventListener('input', this.bindEvent.bind(this));
  };

  _proto.unmounted = function unmounted() {
    this.node.removeEventListener('input', this.bindEvent.bind(this));
  };

  return Model;
}(_directive.Directive);

exports.default = Model;

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

var _register = __webpack_require__(/*! ./register */ "./packages/directives/dist/register.js");

function parser(entity) {
  _register.RegisteredDirectives.forEach(function (directive) {
    return directive.parser(entity);
  });
}

/***/ }),

/***/ "./packages/directives/dist/register.js":
/*!**********************************************!*\
  !*** ./packages/directives/dist/register.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.RegisteredDirectives = void 0;

var _model = _interopRequireDefault(__webpack_require__(/*! ./model */ "./packages/directives/dist/model/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var RegisteredDirectives = new Map([['model', _model.default]]);
exports.RegisteredDirectives = RegisteredDirectives;

function register(name, instance) {
  RegisteredDirectives.add(name, instance);
}

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

/***/ "./packages/render/dist/directives.js":
/*!********************************************!*\
  !*** ./packages/render/dist/directives.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directives = directives;

var _directives = __webpack_require__(/*! @hawa/directives */ "./packages/directives/dist/index.js");

function directives($hooks, node, directives, render) {
  for (var name in directives) {
    if (!_directives.RegisteredDirectives.has(name)) {
      continue;
    }

    var directive = _directives.RegisteredDirectives.get(name);

    var instance = new directive(node, directives[name], render);
    instance.mounted();
    $hooks.unmounted.push(instance.unmounted.bind(instance));
  }
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
Object.defineProperty(exports, "directives", {
  enumerable: true,
  get: function get() {
    return _directives.directives;
  }
});
Object.defineProperty(exports, "emit", {
  enumerable: true,
  get: function get() {
    return _emit.emit;
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

var _directives = __webpack_require__(/*! ./directives */ "./packages/render/dist/directives.js");

var _emit = __webpack_require__(/*! ./emit */ "./packages/render/dist/emit.js");

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
  var $directives = context.$directives || {};
  var $key = context.$key === undefined ? null : context.$key;
  return {
    $props: $props,
    $slots: $slots,
    $key: $key,
    $directives: $directives,
    $refs: {}
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9yZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvZGlyZWN0aXZlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyJdLCJuYW1lcyI6WyJEaXJlY3RpdmUiLCJvcHRpb25zIiwidmFsdWUiLCJyYXdWYWx1ZSIsImdldE5hbWUiLCJwYXJzZXIiLCJnZXQiLCJlbnRpdHkiLCJtb3VudGVkIiwidW5tb3VudGVkIiwiTW9kZWwiLCJtb2RlbERpcmVjdGl2ZSIsImlzRXhwcmVzc2lvbiIsImJpbmRFdmVudCIsImV2ZW50IiwiUmVnaXN0ZXJlZERpcmVjdGl2ZXMiLCJkaXJlY3RpdmUiLCJMaWZlY3ljbGVCaW5kaW5ncyIsIkRPTV9IT09LX1BST1AiLCJET01fSE9PS19BVFRSIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJIQVdBX0lEIiwibm9kZSIsImlzTGlmZWN5Y2xlTm9kZSIsImlkIiwicGFyc2VJbnQiLCJob29rcyIsImkiLCJuYW1lIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsIm4iLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZGlzcG9zZXJzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiZW5kTWFyayIsImJpbmROb2RlIiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsImNoaWxkTm9kZXMiLCJyZW5kZXIiLCJ1bnN1YnNjcmliZSIsImNvbnRlbnQiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJmbiIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJyZXN1bHQiLCJhcmdzIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0Iiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwiaW5zdGFuY2UiLCJkaXJlY3RpdmVzIiwiJGhvb2tzIiwiZGV0YWlsIiwiY29tcG9uZW50Tm9kZSIsImNvbXBvbmVudCIsIm1hcmsiLCIkc2xvdHMiLCJjYWxsYmFjayIsInNsb3ROb2RlcyIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImNvbmRpdGlvbiIsInJlbmRlckZuIiwiY3VycmVudCIsInN0YXJ0IiwiYXJyIiwiY2hpbGQiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGRpcmVjdGl2ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUNhQSxTO0FBRVoseUNBQ0E7QUFBQSxRQURvQkMsT0FDcEIsUUFEb0JBLE9BQ3BCO0FBQUEsUUFENkJDLEtBQzdCLFFBRDZCQSxLQUM3QjtBQUFBLFFBRG9DQyxRQUNwQyxRQURvQ0EsUUFDcEM7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O1lBT01DLE8sR0FBUCxtQkFDQTtBQUNDLFdBQU8sVUFBUCxXQUFPLEVBQVA7OztZQUdNQyxNLEdBQVAsd0JBQ0EsQzs7WUFJT0MsRyxHQUFQLHFCQUNBO0FBQ0NDLFVBQU0sQ0FBTkEsa0JBQXlCLEtBQXpCQTs7Ozs7U0FHREMsTyxHQUFBQSxtQkFDQSxDOztTQUlBQyxTLEdBQUFBLHFCQUNBLEM7Ozs7d0JBekJBO0FBQ0MsYUFBTyxzQkFBUCxXQUFPLEVBQVA7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkY7O0FBQ0E7O0FBQ0EsZ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7SUFFcUJDLEs7Ozs7O0lBRXBCO0FBQ0E7QUFDQTtBQUNBOzs7UUFFT0wsTSxHQUFQLHdCQUNBO0FBQ0MsUUFBR0UsTUFBTSxDQUFOQSxTQUFILGFBQWdDO0FBQy9CO0FBQ0E7O0FBRUQsUUFBSUksY0FBYyxHQUFHSixNQUFNLENBQU5BLGtCQUF5QkcsS0FBSyxDQUFuRCxPQUE4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dCBjbGFzcyBEaXJlY3RpdmVcbntcblx0Y29uc3RydWN0b3Iobm9kZSwgeyBvcHRpb25zLCB2YWx1ZSwgcmF3VmFsdWUgfSwgcmVuZGVyKVxuXHR7XG5cdFx0dGhpcy5ub2RlID0gbm9kZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLnJhd1ZhbHVlID0gcmF3VmFsdWU7XG5cdFx0dGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cdH1cblxuXHRnZXQgbmFtZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TmFtZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH1cblxuXHRzdGF0aWMgcGFyc2VyKGVudGl0eSlcblx0e1xuXG5cdH1cblxuXHRzdGF0aWMgZ2V0KGVudGl0eSlcblx0e1xuXHRcdGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1t0aGlzLm5hbWVdO1xuXHR9XG5cblx0bW91bnRlZCgpXG5cdHtcblxuXHR9XG5cblx0dW5tb3VudGVkKClcblx0e1xuXG5cdH1cblxufSIsImltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmltcG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCwgZ2V0UHJvcCwgc2V0UmVmLCBzZXRLZXkgfSBmcm9tICcuL3RlbXBsYXRlcydcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuaW1wb3J0IHsgZGlyZWN0aXZlcyB9IGZyb20gJy4vZGlyZWN0aXZlcydcbmltcG9ydCB7IGVtaXQgfSBmcm9tICcuL2VtaXQnXG5pbXBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkJ1xuXG5leHBvcnQgeyBhdHRycywgZXZlbnRzLCBzbG90LCBnZXROb2RlLCBzZXRSZWYsIHNldEtleSwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LCBzdGF0ZW1lbnQsIGRpcmVjdGl2ZXMsIGVtaXQsIGxvYWRDb21wb25lbnQgfSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIGV4dGVuZHMgRGlyZWN0aXZlXG57XG5cdC8vIGNvbnN0cnVjdG9yKClcblx0Ly8ge1xuXHQvLyBcdHN1cGVyKCk7XG5cdC8vIH1cblxuXHRzdGF0aWMgcGFyc2VyKGVudGl0eSlcblx0e1xuXHRcdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBtb2RlbERpcmVjdGl2ZSA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1tNb2RlbC5nZXROYW1lKCldO1xuXG5cdFx0aWYobW9kZWxEaXJlY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG5cdFx0XHR2YWx1ZTogYCgkeyBtb2RlbERpcmVjdGl2ZS52YWx1ZS52YWx1ZSB9KSgpYCxcblx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcblx0XHR9O1xuXHRcdFxuXHRcdC8vIGdldFxuXHRcdC8vIGNvbnNvbGUubG9nKGVudGl0eS5vcHRpb24pO1xuXHR9XG5cblx0YmluZEV2ZW50KGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dGhpcy52YWx1ZS5hcHBseShudWxsLCBldmVudC5kZXRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnZhbHVlKHRoaXMubm9kZS52YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bW91bnRlZCgpXG5cdHtcblx0XHRpZih0aGlzLnJlbmRlcikge1xuXHRcdFx0dGhpcy5ub2RlLnZhbHVlID0gdGhpcy52YWx1ZSgpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYmluZEV2ZW50LmJpbmQodGhpcykpO1xuXHR9XG5cblx0dW5tb3VudGVkKClcblx0e1xuXHRcdHRoaXMubm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYmluZEV2ZW50LmJpbmQodGhpcykpO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBSZWdpc3RlcmVkRGlyZWN0aXZlcyB9IGZyb20gJy4vcmVnaXN0ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VyKGVudGl0eSlcbntcblx0UmVnaXN0ZXJlZERpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLnBhcnNlcihlbnRpdHkpKTtcbn0iLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBsZXQgUmVnaXN0ZXJlZERpcmVjdGl2ZXMgPSBuZXcgTWFwKFtcblx0Wydtb2RlbCcsIE1vZGVsXVxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlZ2lzdGVyKG5hbWUsIGluc3RhbmNlKVxue1xuXHRSZWdpc3RlcmVkRGlyZWN0aXZlcy5hZGQobmFtZSwgaW5zdGFuY2UpO1xufSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHRsZXQgbiA9IGdldChhW2ldLCBpLCAtMSk7XG5cdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG4sICd1bm1vdW50ZWQnKTtcblxuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChuKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGxldCBuID0gZ2V0KGFbaV0sIGksIC0xKTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBSZWdpc3RlcmVkRGlyZWN0aXZlcyB9IGZyb20gJ0BoYXdhL2RpcmVjdGl2ZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVzKCRob29rcywgbm9kZSwgZGlyZWN0aXZlcywgcmVuZGVyKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gZGlyZWN0aXZlcykge1xuXHRcdGlmKCFSZWdpc3RlcmVkRGlyZWN0aXZlcy5oYXMobmFtZSkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGxldCBkaXJlY3RpdmUgPSBSZWdpc3RlcmVkRGlyZWN0aXZlcy5nZXQobmFtZSk7XG5cblx0XHRsZXQgaW5zdGFuY2UgPSBuZXcgZGlyZWN0aXZlKG5vZGUsIGRpcmVjdGl2ZXNbbmFtZV0sIHJlbmRlcik7XG5cblx0XHRpbnN0YW5jZS5tb3VudGVkKCk7XG5cdFxuXHRcdCRob29rcy51bm1vdW50ZWQucHVzaChcblx0XHRcdGluc3RhbmNlLnVubW91bnRlZC5iaW5kKGluc3RhbmNlKVxuXHRcdCk7XG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbWl0KG5vZGUpXG57XG5cdHJldHVybiAobmFtZSwgLi4uYXJncykgPT4ge1xuXHRcdHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG5cdFx0XHRkZXRhaWw6IGFyZ3Ncblx0XHR9KTtcblxuXHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgcmVuZGVyLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGNvbXBvbmVudE5vZGUgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdHJldHVybiBtYXJrO1xuXHR9XG5cblx0cmV0dXJuIGNvbXBvbmVudE5vZGU7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKVxue1xuXHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENvbmRpdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhdGVkTm9kZXMoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0bGV0IGN1cnJlbnQgPSBzdGFydDtcblx0ZG8ge1xuXHRcdGxldCB0bXAgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuXHRcdG5vZGVzLnB1c2goY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IHRtcDtcblx0fSB3aGlsZShjdXJyZW50ICE9PSBlbmQgJiYgY3VycmVudCAhPT0gbnVsbCk7XG5cblx0bm9kZXMucHVzaChlbmQpO1xuXG5cdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBub2Rlc1swXTtcblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgbm9kZSlcbntcblx0c3RhcnQuYWZ0ZXIobm9kZSk7XG5cdC8vIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBzdGFydCwgbm9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG5vZGUpXG57XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0bGV0IGFyciA9IFtdOy8vZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGFyci5wdXNoKGNoaWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1x0XG5cdC8vIGxldCBzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdGxldCBlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcblx0Ly8gbm9kZS5iZWZvcmUoc3RhcnRNYXJrKTtcblx0XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSByZW5kZXIgPyBudWxsIDogZ2V0Rmlyc3RDb25kaXRpb24oYXJncyk7XG5cblx0aWYocmVuZGVyICYmIGxhc3RDb25kaXRpb24gPT09IG51bGwpIHtcblx0XHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXHR9XG5cblx0bGV0IGZpcnN0TG9hZCA9IHRydWU7XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG5cdFx0bGV0IGhhc0NvbmRpdGlvblJlbmRlcmVkID0gZmFsc2U7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0bGV0IHNob3VsZFJlbmRlciA9IGxhc3RDb25kaXRpb24gIT09IGk7XG5cdFx0XHRcdHJldHVybk5vZGUgPSByZW5kZXJGbihub2RlLCBzaG91bGRSZW5kZXIpO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0aWYoc2hvdWxkUmVuZGVyKSB7XG5cdFx0XHRcdFx0aGFzQ29uZGl0aW9uUmVuZGVyZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoIXJlbmRlciAmJiBmaXJzdExvYWQpIHtcblx0XHRcdHJldHVybk5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0XHRub2RlID0gZ2V0SW5pdGlhdGVkTm9kZXMobm9kZSwgcmV0dXJuTm9kZSk7XG5cdFx0fVxuXG5cdFx0Zmlyc3RMb2FkID0gZmFsc2U7XG5cblx0XHRsZXQgaXNTYW1lQ29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4ICA9PT0gbGFzdENvbmRpdGlvbjtcblxuXHRcdGxhc3RDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHQvLyBJZiBzYW1lIGNvbmRpdGlvbiB0aGF0IGl0IHdhcyBoeWRyYXRlZCBhbmQgd2UgZG9udCBuZWVkIHRvIHJlcGxhY2Ugbm9kZXNcblx0XHRpZihpc1NhbWVDb25kaXRpb24pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLndhcm4oJ1tzdGF0ZW1lbnRdJywgbm9kZSwgcmV0dXJuTm9kZSk7XG5cblx0XHQvLyBjbGVhbnVwKHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0Ly8gYXBwZW5kKHN0YXJ0TWFyaywgcmV0dXJuTm9kZSk7XG5cblx0XHRcblx0XHRpZihBcnJheS5pc0FycmF5KG5vZGUpKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bGV0IGNoaWxkID0gbm9kZVtpXTtcblx0XHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhjaGlsZCwgJ3VubW91bnRlZCcpO1xuXG5cdFx0XHRcdGlmKGkgPT09IDApIHtcblx0XHRcdFx0XHRjaGlsZC5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gcmV0dXJuTm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHRtcCA9IGNsb25lKHJldHVybk5vZGUpO1xuXHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhub2RlLCAndW5tb3VudGVkJyk7XG5cblx0XHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRub2RlID0gdG1wO1xuXHRcdH1cblx0fSwgZmFsc2UpO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IHdhdGNoLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRkaXJlY3RpdmVzID0gY29udGV4dC4kZGlyZWN0aXZlcyB8fCB7fTtcblx0bGV0ICRrZXkgPSBjb250ZXh0LiRrZXkgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb250ZXh0LiRrZXk7XG5cdFxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdFx0JGtleSxcblx0XHQkZGlyZWN0aXZlcyxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9