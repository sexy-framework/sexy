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
exports.getRoot = getRoot;
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

function getRoot() {
  return tracking;
}

function root(fn, customParent) {
  if (customParent === void 0) {
    customParent = null;
  }

  var prevTracking = tracking;
  var newTracking = new _tracker.Tracker();

  if (customParent) {
    customParent.addChild(newTracking);
  } else {
    tracking.addChild(newTracking);
  }

  tracking = newTracking;
  var result = fn(function () {
    newTracking.cleanup();
  });
  tracking = prevTracking;
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
    // console.log('add', cleanup.prototype.constructor.name)
    this.disposals.add(cleanup);
  };

  _proto.cleanup = function cleanup() {
    // console.warn('cleanup start', this);
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
  var curTracker = (0, _observable.getRoot)(); //!expr.$t;

  console.log(curTracker);
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
    (function () {
      var _items = (0, _observable.value)(items);

      var node = bindNode;
      var lastNode = null; // return;

      var _loop = function _loop(key) {
        var item = _items[key];
        var itemKey = keyExpr(item, key);
        var lastHydratedNode = null;

        if (node && node.getAttribute) {
          if (node.getAttribute('data-key') == itemKey) {
            lastHydratedNode = (0, _observable.root)(function (disposal) {
              disposers.set(itemKey, disposal);
              return expr(node, false, itemKey, item, key);
            }, curTracker);
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
      };

      for (var key in _items) {
        _loop(key);
      } // console.log(defaultA);


      endMark = document.createTextNode('');

      if (lastNode === null) {
        render = true;
        bindNode.after(endMark);
      } else {
        lastNode.after(endMark);
      } // console.error(bindNode, lastNode, endMark, endMark.parentNode);
      // endMark = add(lastNode, '');

    })();
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
        n = (0, _observable.root)(function (disposal) {
          disposers.set(nodeKey, disposal);
          return expr(null, true, nodeKey, item, key);
        }, curTracker);
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

  var disposers = new Map();

  function disposeAll() {
    disposers.forEach(function (d) {
      return d();
    });
    disposers.clear();
  }

  (0, _observable.subscribe)(deps, function () {
    disposeAll();
    var n = document.createComment('');
    var currentConditionIndex = null;

    var _loop = function _loop() {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        n = (0, _observable.root)(function (dispose) {
          disposers.set(i, dispose);
          return renderFn(node, lastConditionIndex !== i);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInZhbHVlUHJvcCIsIm5vZGUiLCJldmVudCIsInZhbHVlIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJlbnRpdHlEaXJlY3RpdmVzIiwiZW50aXR5IiwiY29uc29sZSIsImRpcmVjdGl2ZSIsImlzRXhwcmVzc2lvbiIsIkxpZmVjeWNsZUJpbmRpbmdzIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJpZCIsImhvb2tzIiwiaSIsIm5hbWUiLCJET01fSE9PS19BVFRSIiwiaXNMaWZlY3ljbGVOb2RlIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJnZXRISUQiLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJjdXN0b21QYXJlbnQiLCJwcmV2VHJhY2tpbmciLCJuZXdUcmFja2luZyIsInJlc3VsdCIsImZuIiwiYXJndW1lbnRzIiwiZGF0YSIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwibGFzdFZhbHVlIiwidW5zdWJzY3JpYmUiLCJjbGVhbnVwIiwicHJvcCIsInJlbmRlciIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInNldFBhcmVudCIsImFkZENoaWxkIiwidHJhY2tlciIsImRpc3Bvc2FsIiwiY2hpbGQiLCJBcnJheSIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJ0b1JlbW92ZSIsInN0eWxlcyIsImF0dHJzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIkhBV0FfSUQiLCJ1bm1vdW50ZWQiLCJkZXRhaWwiLCJvcHRpb25zIiwiYyIsImNvbXBvbmVudCIsImNvbXBvbmVudE5vZGUiLCJtYXJrIiwiYUlkeCIsImJJZHgiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJwYXJlbnQiLCJnZXQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImN1clRyYWNrZXIiLCJkaXNwb3NlcnMiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiZW5kTWFyayIsImJpbmROb2RlIiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsIm4iLCJjaGlsZE5vZGVzIiwiY29udGVudCIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIiRzbG90cyIsImNhbGxiYWNrIiwic2xvdE5vZGVzIiwic3RhcnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJub2RlVHlwZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJwbGFjZWhvbGRlciIsInN0YXJ0TWFyayIsImxhc3RDb25kaXRpb25JbmRleCIsImdldEluaXRWYWx1ZSIsImlzRmlyc3RDYWxsIiwiZGlzcG9zZUFsbCIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImxhc3RUcmFja2VyIiwiaGFzUmVuZGVyZWQiLCJjbGVhbk5vZGVzIiwiY3JlYXRlSW5pdEZyYWdtZW50IiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiLCJfc3RhcnRNYXJrIiwiYWRkIiwiY2FzdE5vZGUiLCJmcmFnT3JOb2RlIiwiZnJhZyIsInN0YXJ0Tm9kZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJfdmFsdWVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3FCQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRU8sNENBQ1A7QUFDQyxNQUFJQSxTQUFTLEdBQWI7O0FBRUEsTUFBR0MsSUFBSSxDQUFKQSxTQUFILFlBQTZCO0FBQzVCRCxhQUFTLEdBQVRBO0FBQ0E7O0FBRUQsOEJBQ0E7QUFDQyxRQUFHRSxLQUFLLFlBQVIsYUFBaUM7QUFDaENDLFdBQUssQ0FBTEEsWUFBa0JELEtBQUssQ0FBdkJDO0FBREQsV0FFTztBQUNOQSxXQUFLLENBQUNGLElBQUksQ0FBVkUsU0FBVSxDQUFMLENBQUxBO0FBQ0E7QUFDRDs7QUFFREYsTUFBSSxDQUFKQSxTQUFJLENBQUpBLEdBQWtCRSxLQUFsQkY7QUFFQUEsTUFBSSxDQUFKQTtBQUVBLFNBQU8sWUFBTTtBQUNaQSxRQUFJLENBQUpBO0FBREQ7QUFHQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Q3lGLE1BQU0sR0FBL0IsQ0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQ05HLFlBQVEsRUFERjtBQUVORixlQUFXLEVBRkw7QUFHTkMsY0FBVSxFQUhKO0FBSU5pQyxZQUpNLHNCQUlLO0FBQ1YsVUFBSTdDLFVBQVUsQ0FBVkEsV0FBSixRQUFrQztBQUNqQyxZQUFJbkYsQ0FBQyxHQUFMOztBQUNBLGVBQU9BLENBQUMsR0FBUjtBQUFtQitILGtCQUFRLENBQVJBLFlBQXFCM0gsS0FBSyxDQUFDSixDQUEzQitILEVBQTBCLENBQTFCQTtBQUFuQjtBQUNBOztBQUNEO0FBQ0E7QUFWSyxHQUFQO0FBVE0iLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUnO1xuXG4vLyBzdGF0aWMgcGFyc2VyKGVudGl0eSlcbi8vIFx0e1xuLy8gXHRcdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGxldCBtb2RlbERpcmVjdGl2ZSA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1tNb2RlbC5nZXROYW1lKCldO1xuXG4vLyBcdFx0aWYobW9kZWxEaXJlY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG4vLyBcdFx0XHR2YWx1ZTogYCgkeyBtb2RlbERpcmVjdGl2ZS52YWx1ZS52YWx1ZSB9KSgpYCxcbi8vIFx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcbi8vIFx0XHR9O1xuXHRcdFxuLy8gXHRcdC8vIGdldFxuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVudGl0eS5vcHRpb24pO1xuLy8gXHR9XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB2YWx1ZVByb3AgPSAndmFsdWUnO1xuXG5cdGlmKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdHZhbHVlUHJvcCA9ICdjaGVja2VkJztcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dmFsdWUuYXBwbHkobnVsbCwgZXZlbnQuZGV0YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUobm9kZVt2YWx1ZVByb3BdKTtcblx0XHR9XG5cdH1cblxuXHRub2RlW3ZhbHVlUHJvcF0gPSB2YWx1ZSgpO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXHR9XG59IiwiaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJ1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90J1xuaW1wb3J0IHsgZ2V0Tm9kZSwgcGFyc2VDb250ZXh0LCBnZXRQcm9wLCBzZXRSZWYsIHNldEtleSB9IGZyb20gJy4vdGVtcGxhdGVzJ1xuaW1wb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnXG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBET01fSE9PS19BVFRSIH0gZnJvbSAnLi9jcmVhdGVDb21wb25lbnQnXG5pbXBvcnQgeyBlbWl0IH0gZnJvbSAnLi9lbWl0J1xuaW1wb3J0IHsgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7XG5cdGF0dHJzLFxuXHRldmVudHMsXG5cdHNsb3QsXG5cdGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsXG5cdHN0YXRlbWVudCxcblx0bWFwLFxuXHRkaXJlY3RpdmUsXG5cdGNhbGwsXG5cdGVtaXQsXG5cdGxvYWRDb21wb25lbnQsXG5cdGNyZWF0ZUNvbXBvbmVudCxcblx0RE9NX0hPT0tfQVRUUlxufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL3BhcnNlci9pbmRleCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG5cdGJpbmQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZW50aXR5KVxue1xuXHRsZXQgZW50aXR5RGlyZWN0aXZlcyA9IHt9O1xuXG5cdGlmKGVudGl0eS5vcHRpb24gJiYgZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzKSB7XG5cdFx0ZW50aXR5RGlyZWN0aXZlcyA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlcztcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHlEaXJlY3RpdmVzKSB7XG5cdFx0aWYoZGlyZWN0aXZlc1tuYW1lXSkge1xuXHRcdFx0ZGlyZWN0aXZlc1tuYW1lXShlbnRpdHksIGVudGl0eURpcmVjdGl2ZXNbbmFtZV0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgVGhlcmUgaXMgbm8gcGFyc2VyIG1vZGlmaWVyIGZvciBkaXJlY3RpdmUgJyR7IG5hbWUgfScgYClcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYmluZChlbnRpdHksIGRpcmVjdGl2ZSlcbntcblx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcblx0XHR2YWx1ZTogYCgkeyBkaXJlY3RpdmUudmFsdWUgfSkoKWAsXG5cdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHR9O1xufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL2JpbmQnO1xuXG5leHBvcnQgeyBiaW5kIH0iLCJleHBvcnQgY2xhc3MgVHJhY2tlciB7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwb3NhbHMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHRzZXRQYXJlbnQocGFyZW50KVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRhZGRDaGlsZCh0cmFja2VyKVxuXHR7XG5cdFx0dHJhY2tlci5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jaGlsZHJlbi5hZGQodHJhY2tlcik7XG5cdH1cblxuXHRkaXNwb3NhbChjbGVhbnVwKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2FkZCcsIGNsZWFudXAucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpXG5cdFx0dGhpcy5kaXNwb3NhbHMuYWRkKGNsZWFudXApO1xuXHR9XG5cblx0Y2xlYW51cCgpXG5cdHtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2NsZWFudXAgc3RhcnQnLCB0aGlzKTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5mb3JFYWNoKGRpc3Bvc2FsID0+IGRpc3Bvc2FsKCkpO1xuXHRcdHRoaXMuZGlzcG9zYWxzLmNsZWFyKCk7XG5cblx0XHR0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuY2xlYW51cCgpKTtcblx0XHQvLyB0aGlzLmNoaWxkcmVuLmNsZWFyKCk7XG5cblx0XHRpZih0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4uZGVsZXRlKHRoaXMpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4sIGhvb2tzLCBub2RlLCByZW5kZXIpXG57XG5cdGlmKGZuID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGZuKGhvb2tzLCBub2RlLCByZW5kZXIpO1xufSIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufSIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZSgkaG9va3MsIGRpcmVjdGl2ZSwgbm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHVubW91bnRlZCA9IGRpcmVjdGl2ZShub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxuXG5cdGNsZWFudXAodW5tb3VudGVkKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbWl0KG5vZGUpXG57XG5cdHJldHVybiAobmFtZSwgLi4uYXJncykgPT4ge1xuXHRcdHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG5cdFx0XHRkZXRhaWw6IGFyZ3Ncblx0XHR9KTtcblxuXHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImltcG9ydCB7XG5cdGRpc3BhdGNoSG9vayxcbn0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgYyA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdGxldCBjb21wb25lbnROb2RlID0gYy5ub2RlO1xuXG5cdGlmKHJlbmRlcikge1xuXG5cdFx0bGV0IG1hcmsgPSBjb21wb25lbnROb2RlLmxhc3RDaGlsZDtcblx0XHRcblx0XHRub2RlLnJlcGxhY2VXaXRoKGNvbXBvbmVudE5vZGUpO1xuXG5cdFx0Y29tcG9uZW50Tm9kZSA9IG1hcms7XG5cdH1cblxuXHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0fVxuXHQvLyBkaXNwYXRjaEhvb2soYy5pZCwgJ21vdW50ZWQnKTtcblxuXHRyZXR1cm4gY29tcG9uZW50Tm9kZTtcbn0iLCJpbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHZhbHVlLCByb290LCBnZXRSb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG4vKipcbiAqIE1hcCBvdmVyIGEgbGlzdCBvZiB1bmlxdWUgaXRlbXMgdGhhdCBjcmVhdGUgRE9NIG5vZGVzLlxuICpcbiAqIE5vIGR1cGxpY2F0ZXMgaW4gdGhlIGxpc3Qgb2YgaXRlbXMgaXMgYSBoYXJkIHJlcXVpcmVtZW50LCB0aGUgZGlmZmluZ1xuICogYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBkdXBsaWNhdGUgdmFsdWVzLiBTZWUgYC4vdW5pcXVlLmpzYC5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlbXMgLSBGdW5jdGlvbiBvciBvYnNlcnZhYmxlIHRoYXQgY3JlYXRlcyBhIGxpc3QuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZXhwclxuICogQHBhcmFtIHtib29sZWFufSBbY2xlYW5pbmddXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAoYmluZE5vZGUsIGl0ZW1zLCBrZXlFeHByLCBleHByLCByZW5kZXIpIFxue1xuXHQvLyBjb25zdCB7IHJvb3QsIHN1YnNjcmliZSwgc2FtcGxlLCBjbGVhbnVwIH0gPSBhcGk7XG5cblx0Ly8gRGlzYWJsZSBjbGVhbmluZyBmb3IgdGVtcGxhdGVzIGJ5IGRlZmF1bHQuXG5cdGxldCBjdXJUcmFja2VyID0gZ2V0Um9vdCgpOy8vIWV4cHIuJHQ7XG5cblx0Y29uc29sZS5sb2coY3VyVHJhY2tlcilcblx0bGV0IHBhcmVudDtcblx0bGV0IGVuZE1hcms7XG5cblx0Y29uc3QgZGlzcG9zZXJzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBub2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRlZmF1bHRBID0gW107XG5cblxuXHQvLyBoeWRyYXRpb24gcHJlcGFyZSBcblx0aWYocmVuZGVyKSB7XG5cdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGVuZE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cblx0XHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXG5cdFx0Ly8gY29uc29sZS5sb2coJ3N0YXJ0IGVhY2gnLCBwYXJlbnQsIGVuZE1hcmspXG5cdH0gZWxzZSB7XG5cdFx0bGV0IF9pdGVtcyA9IHZhbHVlKGl0ZW1zKTtcblx0XHRsZXQgbm9kZSA9IGJpbmROb2RlO1xuXHRcdGxldCBsYXN0Tm9kZSA9IG51bGw7XG5cdFx0Ly8gcmV0dXJuO1xuXHRcdGZvciAobGV0IGtleSBpbiBfaXRlbXMpIHtcblx0XHRcdGxldCBpdGVtID0gX2l0ZW1zW2tleV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblx0XHRcdGxldCBsYXN0SHlkcmF0ZWROb2RlID0gbnVsbDtcblxuXHRcdFx0aWYobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZSkge1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSA9PSBpdGVtS2V5KSB7XG5cblx0XHRcdFx0XHRsYXN0SHlkcmF0ZWROb2RlID0gcm9vdChkaXNwb3NhbCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGl0ZW1LZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRcdHJldHVybiBleHByKG5vZGUsIGZhbHNlLCBpdGVtS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXG5cdFx0XHRcdFx0bm9kZSA9IGxhc3RIeWRyYXRlZE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS53YXJuKCdsYXN0SHlkcmF0ZWROb2RlJywgbGFzdEh5ZHJhdGVkTm9kZSwgbm9kZSlcblx0XHRcdFx0XHRsYXN0Tm9kZSA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYobGFzdEh5ZHJhdGVkTm9kZSAmJiBsYXN0SHlkcmF0ZWROb2RlLmhhc0F0dHJpYnV0ZSkge1xuXHRcdFx0XHRsZXQgaHlkcmF0ZWROb2RlcyA9IFtdO1xuXG5cdFx0XHRcdGlmKCFsYXN0SHlkcmF0ZWROb2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1rZXknKSkge1xuXHRcdFx0XHRcdGxldCBzdGFydE5vZGVTZWFyY2ggPSBsYXN0SHlkcmF0ZWROb2RlO1xuXHRcdFx0XHRcdHdoaWxlKHN0YXJ0Tm9kZVNlYXJjaCkge1xuXHRcdFx0XHRcdFx0aHlkcmF0ZWROb2Rlcy51bnNoaWZ0KHN0YXJ0Tm9kZVNlYXJjaCk7XG5cdFx0XHRcdFx0XHRpZihzdGFydE5vZGVTZWFyY2guaGFzQXR0cmlidXRlKCdkYXRhLWtleScpKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRzdGFydE5vZGVTZWFyY2ggPSBzdGFydE5vZGVTZWFyY2gucHJldmlvdXNTaWJsaW5nO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXG5cdFx0XHRcdGxldCBuID0gbGFzdEh5ZHJhdGVkTm9kZTtcblxuXHRcdFx0XHRpZihoeWRyYXRlZE5vZGVzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRuID0gcGVyc2lzdGVudCh7XG5cdFx0XHRcdFx0XHRjaGlsZE5vZGVzOiBoeWRyYXRlZE5vZGVzXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdG5vZGVzLnNldChpdGVtS2V5LCBuKTtcblx0XHRcdFx0ZGlmZmFibGUobiwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS5sb2coZGVmYXVsdEEpO1xuXG5cdFx0ZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuXHRcdGlmKGxhc3ROb2RlID09PSBudWxsKSB7XG5cdFx0XHRyZW5kZXIgPSB0cnVlO1xuXHRcdFx0YmluZE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhc3ROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH1cblx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmROb2RlLCBsYXN0Tm9kZSwgZW5kTWFyaywgZW5kTWFyay5wYXJlbnROb2RlKTtcblx0XHQvLyBlbmRNYXJrID0gYWRkKGxhc3ROb2RlLCAnJyk7XG5cdH1cblx0XG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGl0ZW1zLCBhID0+IHtcblxuXHRcdGxldCBiID0gdmFsdWUoaXRlbXMpO1xuXG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oXG5cdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgYWRkTm9kZSwgZW5kTWFyaylcblx0XHQpO1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdHJldHVybiBjb250ZW50O1xuXHRcdC8vIH0pO1xuXHR9LCAhcmVuZGVyKTtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3Vuc3Vic2NyaWJlXScsIHVuc3Vic2NyaWJlKTtcblx0Ly8gXHR1bnN1YnNjcmliZSgpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdC8vIGlmKHJlbmRlcikge1xuXHQvLyBcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdC8vIH1cblxuXHQvLyBkaXNwb3NlQWxsKCk7XG5cblx0ZnVuY3Rpb24gYWRkTm9kZShpdGVtLCBrZXksIGksIGVsID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRyZXR1cm4gZXhwcihudWxsLCB0cnVlLCBub2RlS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHR9LCBjdXJUcmFja2VyKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblx0XHRcdFx0XG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBkaWZmYWJsZShuLCBpKTtcblx0fVxuXG5cdC8vIGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0ZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0XHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdFx0bm9kZXMuY2xlYXIoKTtcblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gZW5kTWFyaztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUsIHJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIGNhc3ROb2RlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdHdoaWxlKHN0YXJ0ICE9PSBudWxsICYmICFzdGFydC5pc1NhbWVOb2RlKGVuZCkpIHtcblx0XHRub2Rlcy5wdXNoKHN0YXJ0KTtcblx0XHRzdGFydCA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuXHR9O1xuXG5cdG5vZGVzLnNoaWZ0KCk7XG5cblx0bGV0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIG5vZGVzWzBdO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcilcbntcblx0aWYocmVuZGVyKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgaW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1xuXHQvLyBsZXQgXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrLCBzdGFydE1hcms7XG5cdFxuXHRpZihyZW5kZXIpIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblxuXHRcdHN0YXJ0TWFyayA9IGFkZChwYXJlbnQsICcnKTtcblx0XHRwbGFjZWhvbGRlciA9IGFkZChwYXJlbnQsIHBsYWNlaG9sZGVyKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXG5cdFx0bm9kZSA9IHBsYWNlaG9sZGVyO1xuXHRcdFxuXHRcdHBhcmVudCA9IGVuZE1hcmsucGFyZW50Tm9kZTtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cblx0XHRzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0TWFyaywgbm9kZSk7XG5cdH1cblxuXHRsZXQgbGFzdENvbmRpdGlvbkluZGV4ID0gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcik7XG5cblx0Ly8gbm9kZSA9IGRpZmZhYmxlKG5vZGUsIC0xKTtcblx0bGV0IGlzRmlyc3RDYWxsID0gdHJ1ZTtcblxuXHQvLyBvYnMgdHJhY2tlcnNcblx0bGV0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblxuXHRmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHRcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0XHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0fVxuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cblx0XHRkaXNwb3NlQWxsKCk7XG5cblx0XHRsZXQgbiA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zZSA9PiB7XG5cdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChpLCBkaXNwb3NlKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVuZGVyRm4obm9kZSwgbGFzdENvbmRpdGlvbkluZGV4ICE9PSBpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoaXNGaXJzdENhbGwgJiYgIXJlbmRlcikge1xuXHRcdFx0ZW5kTWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdFx0aWYobGFzdENvbmRpdGlvbkluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdG4gPSBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRuLmFmdGVyKGVuZE1hcmspO1xuXG5cdFx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXHRcdFx0bGFzdFRyYWNrZXIgPSBjdXJUcmFja2VyO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGhhc1JlbmRlcmVkID0gY3VycmVudENvbmRpdGlvbkluZGV4ICE9PSBsYXN0Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRsYXN0Q29uZGl0aW9uSW5kZXggPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0aWYoIWhhc1JlbmRlcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGNsZWFuTm9kZXMgPSBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnRNYXJrLCBlbmRNYXJrKTtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZGlmZmFibGUoY2xlYW5Ob2RlcywgLTEpKTtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZGlmZmFibGUobiwgMSksIGVuZE1hcmspO1xuXHR9KTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=