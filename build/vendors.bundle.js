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
  var valueProp = 'value';

  if (node.type === 'checkbox') {
    valueProp = 'checked';
  }

  function updateValue(event) {
    if (event instanceof CustomEvent) {
      value.apply(null, event.detail);
    } else {
      value(node[valueProp]);
    }
  }

  node[valueProp] = value();
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

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

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
  if (!hooks.unmounted) {
    return;
  }

  (0, _observable.cleanup)(hooks.unmounted);
}

function getHID(node) {
  try {
    return node.getAttribute(_render.DOM_HOOK_ATTR); // return id;
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
exports.root = root;
exports.cleanup = cleanup;
exports.value = value;
exports.observable = observable;
exports.computed = computed;
exports.subscribe = subscribe;
exports.isObservable = isObservable;
exports.watch = watch;

var _tracker = __webpack_require__(/*! ./tracker */ "./packages/observable/dist/tracker.js");

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

var tracking = new _tracker.Tracker();

function root(fn, returnTracker) {
  if (returnTracker === void 0) {
    returnTracker = false;
  }

  var prevTracking = tracking;
  var newTracking = new _tracker.Tracker();
  tracking.addChild(newTracking);
  tracking = newTracking;
  var result = fn();
  tracking = prevTracking;

  if (returnTracker) {
    return {
      value: result,
      tracker: newTracking
    };
  }

  return result;
}

function cleanup(fn) {
  tracking.disposal(fn);
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

  obs = [].concat(obs); // change subscribe function to last value memorize

  var lastValue = null;

  var fn = function fn() {
    lastValue = value(lastValue);
  }; // Add subscribe to observers of observables


  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(fn);
    }
  } // Call subscribe if not skipping 


  if (!skip) {
    fn();
  }

  var unsubscribe = function unsubscribe() {
    for (var _iterator3 = _createForOfIteratorHelperLoose(obs), _step3; !(_step3 = _iterator3()).done;) {
      var ob = _step3.value;

      if (ob._observers) {
        ob._observers.delete(fn);
      }
    }
  };

  cleanup(unsubscribe);
  return unsubscribe;
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

/***/ }),

/***/ "./packages/observable/dist/tracker.js":
/*!*********************************************!*\
  !*** ./packages/observable/dist/tracker.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tracker = void 0;

var Tracker = /*#__PURE__*/function () {
  function Tracker() {
    this.children = new Set();
    this.parent = null;
    this.disposals = new Set();
  }

  var _proto = Tracker.prototype;

  _proto.setParent = function setParent(parent) {
    this.parent = parent;
  };

  _proto.addChild = function addChild(tracker) {
    tracker.setParent(this);
    this.children.add(tracker);
  };

  _proto.disposal = function disposal(cleanup) {
    console.log('add', cleanup.prototype.constructor.name, this);
    this.disposals.add(cleanup);
  };

  _proto.cleanup = function cleanup() {
    console.warn('cleanup start', this);
    this.disposals.forEach(function (disposal) {
      return disposal();
    });
    this.disposals.clear();
    this.children.forEach(function (child) {
      return child.cleanup();
    }); // this.children.clear();

    if (this.parent) {
      this.parent.children.delete(this);
    }

    delete this;
  };

  return Tracker;
}();

exports.Tracker = Tracker;

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
    id = (exports.HAWA_ID = HAWA_ID = +HAWA_ID + 1) + '';
    node.setAttribute(DOM_HOOK_ATTR, id);
  } else {
    id = node.getAttribute(DOM_HOOK_ATTR);
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
exports.directive = directive;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function directive($hooks, directive, node, options, value, render) {
  var unmounted = directive(node, options, value, render);
  (0, _observable.cleanup)(unmounted);
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
Object.defineProperty(exports, "map", {
  enumerable: true,
  get: function get() {
    return _map.map;
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

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/render/dist/map/index.js");

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

  if (c.hooks.mounted) {
    c.hooks.mounted();
  } // dispatchHook(c.id, 'mounted');


  return componentNode;
}

/***/ }),

/***/ "./packages/render/dist/map/diff.js":
/*!******************************************!*\
  !*** ./packages/render/dist/map/diff.js ***!
  \******************************************/
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
      var key_aElm = keyExpr(aElm, i);
      var key_bElm = keyExpr(bElm, j); // Look for the current element at this location in the new list
      // This gives us the idx of where this element should be

      var curElmInNew = bIdx.get(key_aElm); // Look for the the wanted elment at this location in the old list
      // This gives us the idx of where the wanted element is now

      var wantedElmInOld = aIdx.get(key_bElm);

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

/***/ "./packages/render/dist/map/index.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/map/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/render/dist/map/diff.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/dist/utils.js");

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
    bindNode.replaceWith(parent); // console.log('start each', parent, endMark)
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
  }, !render); // setTimeout(() => {
  // 	console.log('[unsubscribe]', unsubscribe);
  // 	unsubscribe();
  // }, 2000)
  // if(render) {
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
        var _root = (0, _observable.root)(function () {
          return expr(null, true, nodeKey, item, key);
        }, true),
            _value = _root.value,
            tracker = _root.tracker;

        n = _value;
        if (n.nodeType === 11) n = (0, _utils.persistent)(n) || n;
        nodes.set(nodeKey, n);
        disposers.set(nodeKey, tracker.cleanup.bind(tracker));
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

/***/ "./packages/render/dist/statement/index.js":
/*!*************************************************!*\
  !*** ./packages/render/dist/statement/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInitFragment = createInitFragment;
exports.getInitValue = getInitValue;
exports.statement = statement;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/dist/utils.js");

function createInitFragment(start, end) {
  var nodes = [];

  while (start !== null && !start.isSameNode(end)) {
    nodes.push(start);
    start = start.nextSibling;
  }

  ;
  nodes.shift();
  var length = nodes.length;
  if (length < 2) return nodes[0];
  var _firstChild = nodes[0];
  var _lastChild = nodes[length - 1];
  return {
    nodeType: 111,
    _firstChild: _firstChild,
    _lastChild: _lastChild
  };
}

function getInitValue(args, render) {
  if (render) {
    return null;
  }

  var index = null;

  for (var i = 0; i < args.length; i += 2) {
    var condition = args[i];
    var renderFn = args[i + 1];

    if (condition()) {
      index = i;
      break;
    }
  }

  return index;
}

function statement(node, render, deps) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  } // let 


  var parent;
  var endMark, startMark;

  if (render) {
    var placeholder = document.createComment('');
    parent = document.createDocumentFragment();
    startMark = (0, _utils.add)(parent, '');
    placeholder = (0, _utils.add)(parent, placeholder);
    endMark = (0, _utils.add)(parent, '');
    node.replaceWith(parent);
    node = placeholder;
    parent = endMark.parentNode;
  } else {
    parent = node.parentNode;
    startMark = document.createTextNode('');
    parent.insertBefore(startMark, node);
  }

  var lastConditionIndex = getInitValue(args, render); // node = diffable(node, -1);

  var isFirstCall = true; // obs trackers

  var lastTracker = null;
  var curTracker = null;
  var unsubscribe = (0, _observable.subscribe)(deps, function () {
    var n = document.createComment('');
    var currentConditionIndex = null;

    var _loop = function _loop() {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        var _root = (0, _observable.root)(function () {
          return renderFn(node, lastConditionIndex !== i);
        }, true),
            value = _root.value,
            tracker = _root.tracker;

        curTracker = tracker;
        n = value;
        if (n.nodeType === 11) n = (0, _utils.persistent)(n) || n;
        currentConditionIndex = i;
        return "break";
      }
    };

    for (var i = 0; i < args.length; i += 2) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    if (isFirstCall && !render) {
      endMark = (0, _utils.castNode)('');

      if (lastConditionIndex === null) {
        n = node;
      }

      n.after(endMark);
      isFirstCall = false;
      lastTracker = curTracker;
      return;
    }

    var hasRendered = currentConditionIndex !== lastConditionIndex;
    lastConditionIndex = currentConditionIndex;
    isFirstCall = false;

    if (!hasRendered) {
      return;
    }

    if (lastTracker) {
      lastTracker.cleanup();
    }

    lastTracker = curTracker;
    var cleanNodes = createInitFragment(startMark, endMark);
    parent.removeChild((0, _utils.diffable)(cleanNodes, -1));
    parent.insertBefore((0, _utils.diffable)(n, 1), endMark);
  });
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

/***/ }),

/***/ "./packages/render/dist/utils.js":
/*!***************************************!*\
  !*** ./packages/render/dist/utils.js ***!
  \***************************************/
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInZhbHVlUHJvcCIsIm5vZGUiLCJldmVudCIsInZhbHVlIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJlbnRpdHlEaXJlY3RpdmVzIiwiZW50aXR5IiwiY29uc29sZSIsImRpcmVjdGl2ZSIsImlzRXhwcmVzc2lvbiIsIkxpZmVjeWNsZUJpbmRpbmdzIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJpZCIsImhvb2tzIiwiaSIsIm5hbWUiLCJET01fSE9PS19BVFRSIiwiaXNMaWZlY3ljbGVOb2RlIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJnZXRISUQiLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJyZXR1cm5UcmFja2VyIiwicHJldlRyYWNraW5nIiwibmV3VHJhY2tpbmciLCJyZXN1bHQiLCJmbiIsInRyYWNrZXIiLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsImNsZWFudXAiLCJwcm9wIiwicmVuZGVyIiwiaXNPYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwic2V0UGFyZW50IiwiYWRkQ2hpbGQiLCJkaXNwb3NhbCIsImNoaWxkIiwiQXJyYXkiLCJhcmdzIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0IiwidG9SZW1vdmUiLCJzdHlsZXMiLCJhdHRycyIsIm1ha2VDbGFzcyIsIm1ha2VTdHlsZXMiLCJIQVdBX0lEIiwidW5tb3VudGVkIiwiZGV0YWlsIiwib3B0aW9ucyIsImMiLCJjb21wb25lbnQiLCJjb21wb25lbnROb2RlIiwibWFyayIsImFJZHgiLCJiSWR4IiwiYSIsImtleSIsImtleUV4cHIiLCJiIiwiaiIsImFFbG0iLCJiRWxtIiwicGFyZW50IiwiZ2V0Iiwia2V5X2FFbG0iLCJrZXlfYkVsbSIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRpc3Bvc2VycyIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiYmluZE5vZGUiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImV4cHIiLCJoeWRyYXRlZE5vZGVzIiwic3RhcnROb2RlU2VhcmNoIiwibiIsImNoaWxkTm9kZXMiLCJjb250ZW50IiwiZWwiLCJub2RlS2V5IiwiZCIsImRpc3Bvc2VyIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJzdGFydCIsImxlbmd0aCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsIm5vZGVUeXBlIiwiaW5kZXgiLCJjb25kaXRpb24iLCJyZW5kZXJGbiIsInBsYWNlaG9sZGVyIiwic3RhcnRNYXJrIiwibGFzdENvbmRpdGlvbkluZGV4IiwiZ2V0SW5pdFZhbHVlIiwiaXNGaXJzdENhbGwiLCJsYXN0VHJhY2tlciIsImN1clRyYWNrZXIiLCJjdXJyZW50Q29uZGl0aW9uSW5kZXgiLCJoYXNSZW5kZXJlZCIsImNsZWFuTm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJ0ZW1wbGF0ZSIsIiRyZWZzIiwiJGtleSIsIiRwcm9wcyIsImNvbnRleHQiLCIkY3VzdG9tSW5pdCIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwiZGlmZmFibGUiLCJvcGVyYXRpb24iLCJyZW1vdmVOb2RlcyIsInBlcnNpc3RlbnQiLCJmcmFnbWVudCIsIl92YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyw0Q0FDUDtBQUNDLE1BQUlBLFNBQVMsR0FBYjs7QUFFQSxNQUFHQyxJQUFJLENBQUpBLFNBQUgsWUFBNkI7QUFDNUJELGFBQVMsR0FBVEE7QUFDQTs7QUFFRCw4QkFDQTtBQUNDLFFBQUdFLEtBQUssWUFBUixhQUFpQztBQUNoQ0MsV0FBSyxDQUFMQSxZQUFrQkQsS0FBSyxDQUF2QkM7QUFERCxXQUVPO0FBQ05BLFdBQUssQ0FBQ0YsSUFBSSxDQUFWRSxTQUFVLENBQUwsQ0FBTEE7QUFDQTtBQUNEOztBQUVERixNQUFJLENBQUpBLFNBQUksQ0FBSkEsR0FBa0JFLEtBQWxCRjtBQUVBQSxNQUFJLENBQUpBO0FBRUEsU0FBTyxZQUFNO0FBQ1pBLFFBQUksQ0FBSkE7QUFERDtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SyxDQUFDeUYsTUFBTSxHQUEvQixDQUF3QixDQUF4QjtBQUNBLFNBQU87QUFDTkcsWUFBUSxFQURGO0FBRU5GLGVBQVcsRUFGTDtBQUdOQyxjQUFVLEVBSEo7QUFJTmlDLFlBSk0sc0JBSUs7QUFDVixVQUFJN0MsVUFBVSxDQUFWQSxXQUFKLFFBQWtDO0FBQ2pDLFlBQUluRixDQUFDLEdBQUw7O0FBQ0EsZUFBT0EsQ0FBQyxHQUFSO0FBQW1CK0gsa0JBQVEsQ0FBUkEsWUFBcUIzSCxLQUFLLENBQUNKLENBQTNCK0gsRUFBMEIsQ0FBMUJBO0FBQW5CO0FBQ0E7O0FBQ0Q7QUFDQTtBQVZLLEdBQVA7QUFUTSIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZSc7XG5cbi8vIHN0YXRpYyBwYXJzZXIoZW50aXR5KVxuLy8gXHR7XG4vLyBcdFx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0bGV0IG1vZGVsRGlyZWN0aXZlID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzW01vZGVsLmdldE5hbWUoKV07XG5cbi8vIFx0XHRpZihtb2RlbERpcmVjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcbi8vIFx0XHRcdHZhbHVlOiBgKCR7IG1vZGVsRGlyZWN0aXZlLnZhbHVlLnZhbHVlIH0pKClgLFxuLy8gXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuLy8gXHRcdH07XG5cdFx0XG4vLyBcdFx0Ly8gZ2V0XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZW50aXR5Lm9wdGlvbik7XG4vLyBcdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHZhbHVlUHJvcCA9ICd2YWx1ZSc7XG5cblx0aWYobm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0dmFsdWVQcm9wID0gJ2NoZWNrZWQnO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoZXZlbnQpXG5cdHtcblx0XHRpZihldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KSB7XG5cdFx0XHR2YWx1ZS5hcHBseShudWxsLCBldmVudC5kZXRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZShub2RlW3ZhbHVlUHJvcF0pO1xuXHRcdH1cblx0fVxuXG5cdG5vZGVbdmFsdWVQcm9wXSA9IHZhbHVlKCk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJ1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnXG5pbXBvcnQgeyBjcmVhdGVDb21wb25lbnQsIERPTV9IT09LX0FUVFIgfSBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudCdcbmltcG9ydCB7IGVtaXQgfSBmcm9tICcuL2VtaXQnXG5pbXBvcnQgeyBjYWxsIH0gZnJvbSAnLi9jYWxsJ1xuaW1wb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbG9hZCdcblxuZXhwb3J0IHtcblx0YXR0cnMsXG5cdGV2ZW50cyxcblx0c2xvdCxcblx0Z2V0Tm9kZSwgc2V0UmVmLCBzZXRLZXksIGdldFByb3AsIHBhcnNlQ29udGV4dCxcblx0c3RhdGVtZW50LFxuXHRtYXAsXG5cdGRpcmVjdGl2ZSxcblx0Y2FsbCxcblx0ZW1pdCxcblx0bG9hZENvbXBvbmVudCxcblx0Y3JlYXRlQ29tcG9uZW50LFxuXHRET01fSE9PS19BVFRSXG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImV4cG9ydCBjbGFzcyBUcmFja2VyIHtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0XHR0aGlzLmRpc3Bvc2FscyA9IG5ldyBTZXQoKTtcblx0fVxuXG5cdHNldFBhcmVudChwYXJlbnQpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGFkZENoaWxkKHRyYWNrZXIpXG5cdHtcblx0XHR0cmFja2VyLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmNoaWxkcmVuLmFkZCh0cmFja2VyKTtcblx0fVxuXG5cdGRpc3Bvc2FsKGNsZWFudXApXG5cdHtcblx0XHRjb25zb2xlLmxvZygnYWRkJywgY2xlYW51cC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSwgdGhpcylcblx0XHR0aGlzLmRpc3Bvc2Fscy5hZGQoY2xlYW51cCk7XG5cdH1cblxuXHRjbGVhbnVwKClcblx0e1xuXHRcdGNvbnNvbGUud2FybignY2xlYW51cCBzdGFydCcsIHRoaXMpO1xuXHRcdHRoaXMuZGlzcG9zYWxzLmZvckVhY2goZGlzcG9zYWwgPT4gZGlzcG9zYWwoKSk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuY2xlYXIoKTtcblxuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5jbGVhbnVwKCkpO1xuXHRcdC8vIHRoaXMuY2hpbGRyZW4uY2xlYXIoKTtcblxuXHRcdGlmKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5jaGlsZHJlbi5kZWxldGUodGhpcyk7XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIHRoaXM7XG5cdH1cblxufSIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEICsgJyc7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUiwgaWQpO1xuXHR9IGVsc2Uge1xuXHRcdGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUik7XG5cdH1cblxuXHRyZXR1cm4gaWQ7XG59IiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0Y2xlYW51cCh1bm1vdW50ZWQpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiaW1wb3J0IHtcblx0ZGlzcGF0Y2hIb29rLFxufSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0bGV0IGNvbXBvbmVudE5vZGUgPSBjLm5vZGU7XG5cblx0aWYocmVuZGVyKSB7XG5cblx0XHRsZXQgbWFyayA9IGNvbXBvbmVudE5vZGUubGFzdENoaWxkO1xuXHRcdFxuXHRcdG5vZGUucmVwbGFjZVdpdGgoY29tcG9uZW50Tm9kZSk7XG5cblx0XHRjb21wb25lbnROb2RlID0gbWFyaztcblx0fVxuXG5cdGlmKGMuaG9va3MubW91bnRlZCkge1xuXHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHR9XG5cdC8vIGRpc3BhdGNoSG9vayhjLmlkLCAnbW91bnRlZCcpO1xuXG5cdHJldHVybiBjb21wb25lbnROb2RlO1xufSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUsIHJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGNsZWFuaW5nID0gdHJ1ZTsvLyFleHByLiR0O1xuXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cblx0Ly8gaHlkcmF0aW9uIHByZXBhcmUgXG5cdGlmKHJlbmRlcikge1xuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdC8vIGNvbnNvbGUubG9nKCdzdGFydCBlYWNoJywgcGFyZW50LCBlbmRNYXJrKVxuXHR9IGVsc2Uge1xuXHRcdGxldCBfaXRlbXMgPSB2YWx1ZShpdGVtcyk7XG5cdFx0bGV0IG5vZGUgPSBiaW5kTm9kZTtcblx0XHRsZXQgbGFzdE5vZGUgPSBudWxsO1xuXHRcdC8vIHJldHVybjtcblx0XHRmb3IgKGxldCBrZXkgaW4gX2l0ZW1zKSB7XG5cdFx0XHRsZXQgaXRlbSA9IF9pdGVtc1trZXldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cdFx0XHRsZXQgbGFzdEh5ZHJhdGVkTm9kZSA9IG51bGw7XG5cblx0XHRcdGlmKG5vZGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSBleHByKG5vZGUsIGZhbHNlLCBpdGVtS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdG5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUud2FybignbGFzdEh5ZHJhdGVkTm9kZScsIGxhc3RIeWRyYXRlZE5vZGUsIG5vZGUpXG5cdFx0XHRcdFx0bGFzdE5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGxhc3RIeWRyYXRlZE5vZGUgJiYgbGFzdEh5ZHJhdGVkTm9kZS5oYXNBdHRyaWJ1dGUpIHtcblx0XHRcdFx0bGV0IGh5ZHJhdGVkTm9kZXMgPSBbXTtcblxuXHRcdFx0XHRpZighbGFzdEh5ZHJhdGVkTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2V5JykpIHtcblx0XHRcdFx0XHRsZXQgc3RhcnROb2RlU2VhcmNoID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0XHR3aGlsZShzdGFydE5vZGVTZWFyY2gpIHtcblx0XHRcdFx0XHRcdGh5ZHJhdGVkTm9kZXMudW5zaGlmdChzdGFydE5vZGVTZWFyY2gpO1xuXHRcdFx0XHRcdFx0aWYoc3RhcnROb2RlU2VhcmNoLmhhc0F0dHJpYnV0ZSgnZGF0YS1rZXknKSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c3RhcnROb2RlU2VhcmNoID0gc3RhcnROb2RlU2VhcmNoLnByZXZpb3VzU2libGluZztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblxuXHRcdFx0XHRsZXQgbiA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cblx0XHRcdFx0aWYoaHlkcmF0ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0biA9IHBlcnNpc3RlbnQoe1xuXHRcdFx0XHRcdFx0Y2hpbGROb2RlczogaHlkcmF0ZWROb2Rlc1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRub2Rlcy5zZXQoaXRlbUtleSwgbik7XG5cdFx0XHRcdGRpZmZhYmxlKG4sIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKGRlZmF1bHRBKTtcblxuXHRcdGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cblx0XHRpZihsYXN0Tm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0cmVuZGVyID0gdHJ1ZTtcblx0XHRcdGJpbmROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0Tm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kTm9kZSwgbGFzdE5vZGUsIGVuZE1hcmssIGVuZE1hcmsucGFyZW50Tm9kZSk7XG5cdFx0Ly8gZW5kTWFyayA9IGFkZChsYXN0Tm9kZSwgJycpO1xuXHR9XG5cdFxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShpdGVtcywgYSA9PiB7XG5cblx0XHRsZXQgYiA9IHZhbHVlKGl0ZW1zKTtcblxuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdFx0Ly8gQXJyYXkuZnJvbSB0byBtYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBsaXN0LlxuXHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIGFkZE5vZGUsIGVuZE1hcmspXG5cdFx0KTtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRyZXR1cm4gY29udGVudDtcblx0XHQvLyB9KTtcblx0fSwgIXJlbmRlcik7XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1t1bnN1YnNjcmliZV0nLCB1bnN1YnNjcmliZSk7XG5cdC8vIFx0dW5zdWJzY3JpYmUoKTtcblx0Ly8gfSwgMjAwMClcblxuXHQvLyBpZihyZW5kZXIpIHtcblx0Ly8gXHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHQvLyB9XG5cblx0Ly8gZGlzcG9zZUFsbCgpO1xuXG5cdGZ1bmN0aW9uIGFkZE5vZGUoaXRlbSwga2V5LCBpLCBlbCA9IG51bGwpIHtcblx0XHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgbm9kZUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblxuXHRcdGxldCBuID0gbm9kZXMuZ2V0KG5vZGVLZXkpO1xuXHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHR0b1JlbW92ZS5kZWxldGUoaXRlbSk7XG5cblx0XHRcdGlmICghbikge1xuXHRcdFx0XHRsZXQgeyB2YWx1ZSwgdHJhY2tlciB9ID0gcm9vdCgoKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cHIobnVsbCwgdHJ1ZSwgbm9kZUtleSwgaXRlbSwga2V5KTtcblx0XHRcdFx0fSwgdHJ1ZSlcblxuXHRcdFx0XHRuID0gdmFsdWU7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBwZXJzaXN0ZW50KG4pIHx8IG47XG5cdFx0XHRcdFxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgdHJhY2tlci5jbGVhbnVwLmJpbmQodHJhY2tlcikpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdHRvUmVtb3ZlLmFkZChub2RlS2V5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlmZmFibGUobiwgaSk7XG5cdH1cblxuXHQvLyBjbGVhbnVwKGRpc3Bvc2VBbGwpO1xuXG5cdGZ1bmN0aW9uIGRpc3Bvc2VBbGwoKSB7XG5cdFx0ZGlzcG9zZXJzLmZvckVhY2goZCA9PiBkKCkpO1xuXHRcdGRpc3Bvc2Vycy5jbGVhcigpO1xuXHRcdG5vZGVzLmNsZWFyKCk7XG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcigpO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdFx0bm9kZXMuZGVsZXRlKGl0ZW0pO1xuXHR9XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlLCByb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBhZGQsIHBlcnNpc3RlbnQsIGRpZmZhYmxlLCBjYXN0Tm9kZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRGcmFnbWVudChzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHR3aGlsZShzdGFydCAhPT0gbnVsbCAmJiAhc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0bm9kZXMucHVzaChzdGFydCk7XG5cdFx0c3RhcnQgPSBzdGFydC5uZXh0U2libGluZztcblx0fTtcblxuXHRub2Rlcy5zaGlmdCgpO1xuXG5cdGxldCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBub2Rlc1swXTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlOiAxMTEsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpXG57XG5cdGlmKHJlbmRlcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IGluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcblx0Ly8gbGV0IFxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaywgc3RhcnRNYXJrO1xuXHRcblx0aWYocmVuZGVyKSB7XG5cdFx0bGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cblx0XHRzdGFydE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cdFx0cGxhY2Vob2xkZXIgPSBhZGQocGFyZW50LCBwbGFjZWhvbGRlcik7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdG5vZGUgPSBwbGFjZWhvbGRlcjtcblx0XHRcblx0XHRwYXJlbnQgPSBlbmRNYXJrLnBhcmVudE5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG5cdFx0c3RhcnRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0bGV0IGxhc3RDb25kaXRpb25JbmRleCA9IGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpO1xuXG5cdC8vIG5vZGUgPSBkaWZmYWJsZShub2RlLCAtMSk7XG5cdGxldCBpc0ZpcnN0Q2FsbCA9IHRydWU7XG5cblx0Ly8gb2JzIHRyYWNrZXJzXG5cdGxldCBsYXN0VHJhY2tlciA9IG51bGw7XG5cdGxldCBjdXJUcmFja2VyID0gbnVsbDtcblxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cdFx0bGV0IG4gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCB7IHZhbHVlLCB0cmFja2VyIH0gPSByb290KCgpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gcmVuZGVyRm4obm9kZSwgbGFzdENvbmRpdGlvbkluZGV4ICE9PSBpKTtcblx0XHRcdFx0fSwgdHJ1ZSk7XG5cblx0XHRcdFx0Y3VyVHJhY2tlciA9IHRyYWNrZXI7XG5cblx0XHRcdFx0biA9IHZhbHVlO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGlzRmlyc3RDYWxsICYmICFyZW5kZXIpIHtcblx0XHRcdGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRcdGlmKGxhc3RDb25kaXRpb25JbmRleCA9PT0gbnVsbCkge1xuXHRcdFx0XHRuID0gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0bi5hZnRlcihlbmRNYXJrKTtcblxuXHRcdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblx0XHRcdGxhc3RUcmFja2VyID0gY3VyVHJhY2tlcjtcblx0XHRcdFxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBoYXNSZW5kZXJlZCA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAhPT0gbGFzdENvbmRpdGlvbkluZGV4O1xuXG5cdFx0bGFzdENvbmRpdGlvbkluZGV4ID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdGlmKCFoYXNSZW5kZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKGxhc3RUcmFja2VyKSB7XG5cdFx0XHRsYXN0VHJhY2tlci5jbGVhbnVwKCk7XG5cdFx0fVxuXG5cdFx0bGFzdFRyYWNrZXIgPSBjdXJUcmFja2VyO1xuXHRcblx0XHRsZXQgY2xlYW5Ob2RlcyA9IGNyZWF0ZUluaXRGcmFnbWVudChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdHBhcmVudC5yZW1vdmVDaGlsZChkaWZmYWJsZShjbGVhbk5vZGVzLCAtMSkpO1xuXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShkaWZmYWJsZShuLCAxKSwgZW5kTWFyayk7XG5cdH0pO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IHdhdGNoLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRjdXN0b21Jbml0ID0gY29udGV4dC4kY3VzdG9tSW5pdCB8fCBudWxsO1xuXHRcblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRjdXN0b21Jbml0LFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdHdoaWxlIChzdGFydE5vZGUgJiYgc3RhcnROb2RlICE9PSBlbmRNYXJrKSB7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==