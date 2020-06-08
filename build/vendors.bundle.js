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

/***/ "./packages/render/dist/dom.js":
/*!*************************************!*\
  !*** ./packages/render/dist/dom.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.hydrate = hydrate;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function render(component, rootNode) {
  var root = (0, _observable.getRoot)();
  var c = component();
  rootNode.innerHTML = '';
  rootNode.appendChild(c.node);

  if (c.hooks.mounted) {
    c.hooks.mounted();
  }

  return function () {
    root.cleanup();
  };
}

function hydrate(component, rootNode) {
  var tmp = rootNode.innerHTML;
  rootNode.innerHTML = tmp;
  var root = (0, _observable.getRoot)();
  var c = component(null, rootNode.firstChild);

  if (c.hooks.mounted) {
    c.hooks.mounted();
  }

  return function () {
    root.cleanup();
  };
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
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _dom.render;
  }
});
Object.defineProperty(exports, "hydrate", {
  enumerable: true,
  get: function get() {
    return _dom.hydrate;
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

var _dom = __webpack_require__(/*! ./dom */ "./packages/render/dist/dom.js");

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
    startMark = (0, _utils.castNode)('');
    parent.insertBefore(startMark, node);
  }

  var lastConditionIndex = getInitValue(args, render);
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
          return renderFn(startMark.nextSibling, lastConditionIndex !== i);
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
      } // console.log(lastConditionIndex, n, endMark)


      n.after(endMark);
      isFirstCall = false;
      return;
    }

    var hasRendered = currentConditionIndex !== lastConditionIndex;
    lastConditionIndex = currentConditionIndex;
    isFirstCall = false;

    if (!hasRendered) {
      return;
    } // remove old nodes


    var cleanNodes = createInitFragment(startMark, endMark);
    parent.removeChild((0, _utils.diffable)(cleanNodes, -1)); // add new nodes

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIl0sIm5hbWVzIjpbInZhbHVlUHJvcCIsIm5vZGUiLCJldmVudCIsInZhbHVlIiwiZGlyZWN0aXZlcyIsImJpbmQiLCJlbnRpdHlEaXJlY3RpdmVzIiwiZW50aXR5IiwiY29uc29sZSIsImRpcmVjdGl2ZSIsImlzRXhwcmVzc2lvbiIsIkxpZmVjeWNsZUJpbmRpbmdzIiwiSE9PS19OQU1FX0NMRUFOX1RSSUdHRVIiLCJpZCIsImhvb2tzIiwiaSIsIm5hbWUiLCJET01fSE9PS19BVFRSIiwiaXNMaWZlY3ljbGVOb2RlIiwibm9kZXMiLCJkaXNwYXRjaEhvb2siLCJnZXRISUQiLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJjdXN0b21QYXJlbnQiLCJwcmV2VHJhY2tpbmciLCJuZXdUcmFja2luZyIsInJlc3VsdCIsImZuIiwiYXJndW1lbnRzIiwiZGF0YSIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwibGFzdFZhbHVlIiwidW5zdWJzY3JpYmUiLCJjbGVhbnVwIiwicHJvcCIsInJlbmRlciIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInNldFBhcmVudCIsImFkZENoaWxkIiwidHJhY2tlciIsImRpc3Bvc2FsIiwiY2hpbGQiLCJBcnJheSIsImFyZ3MiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJ0b1JlbW92ZSIsInN0eWxlcyIsImF0dHJzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIkhBV0FfSUQiLCJ1bm1vdW50ZWQiLCJyb290IiwiYyIsImNvbXBvbmVudCIsInJvb3ROb2RlIiwiZGV0YWlsIiwib3B0aW9ucyIsImNvbXBvbmVudE5vZGUiLCJtYXJrIiwiYUlkeCIsImJJZHgiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJwYXJlbnQiLCJnZXQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImN1clRyYWNrZXIiLCJkaXNwb3NlcnMiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiZW5kTWFyayIsImJpbmROb2RlIiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJleHByIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsIm4iLCJjaGlsZE5vZGVzIiwiY29udGVudCIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIiRzbG90cyIsImNhbGxiYWNrIiwic2xvdE5vZGVzIiwic3RhcnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJub2RlVHlwZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJwbGFjZWhvbGRlciIsInN0YXJ0TWFyayIsImxhc3RDb25kaXRpb25JbmRleCIsImdldEluaXRWYWx1ZSIsImlzRmlyc3RDYWxsIiwiZGlzcG9zZUFsbCIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImhhc1JlbmRlcmVkIiwiY2xlYW5Ob2RlcyIsImNyZWF0ZUluaXRGcmFnbWVudCIsInRlbXBsYXRlIiwiJHJlZnMiLCIka2V5IiwiJHByb3BzIiwiY29udGV4dCIsIiRjdXN0b21Jbml0IiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwiX3ZhbHVlT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsTUFBSUEsU0FBUyxHQUFiOztBQUVBLE1BQUdDLElBQUksQ0FBSkEsU0FBSCxZQUE2QjtBQUM1QkQsYUFBUyxHQUFUQTtBQUNBOztBQUVELDhCQUNBO0FBQ0MsUUFBR0UsS0FBSyxZQUFSLGFBQWlDO0FBQ2hDQyxXQUFLLENBQUxBLFlBQWtCRCxLQUFLLENBQXZCQztBQURELFdBRU87QUFDTkEsV0FBSyxDQUFDRixJQUFJLENBQVZFLFNBQVUsQ0FBTCxDQUFMQTtBQUNBO0FBQ0Q7O0FBRURGLE1BQUksQ0FBSkEsU0FBSSxDQUFKQSxHQUFrQkUsS0FBbEJGO0FBRUFBLE1BQUksQ0FBSkE7QUFFQSxTQUFPLFlBQU07QUFDWkEsUUFBSSxDQUFKQTtBQUREO0FB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O0FBQUEsU0FDdkIxSSxJQUFJLENBQUpBLHdCQUNBLG9CQUNBMkksU0FBUyxHQUNUQyxXQUFXLENBQ1Y1SSxJQUFJLENBQUpBLFlBRFUsWUFFVkEsSUFBSSxDQUFKQSxZQUZVLGFBR1ZBLElBQUksQ0FBSkEsV0FIRDRJLFdBQVcsQ0FBWEEsSUFJSzVJLElBQUksQ0FMQSxjQU1UQSxJQUFJLENBUEosYUFRQTJJLFNBQVMsR0FDVDNJLElBQUksQ0FESyxRQUNUQSxFQURTLEdBRVRBLElBQUksQ0FYSkEsY0FEdUI7QUFBakI7Ozs7QUFlQSxJQUFNNkksVUFBVSxHQUFHLFNBQWJBLFVBQWEsV0FBYztBQUFBLE1BQy9CMUMsVUFEK0IsR0FDaEIyQyxRQURnQjtBQUFBLE1BRS9CakMsTUFGK0IsR0FFcEJWLFVBRm9CLFNBR3ZDO0FBQ0E7O0FBQ0EsTUFBSVUsTUFBTSxHQUFWLEdBQWdCLE9BQU9WLFVBQVUsQ0FBakIsQ0FBaUIsQ0FBakI7QUFDaEIsTUFBTWpGLEtBQUssR0FBRzZCLEtBQUssQ0FBTEEsS0FBZCxVQUFjQSxDQUFkO0FBQ0EsTUFBTStELFdBQVcsR0FBRzVGLEtBQUssQ0FBekIsQ0FBeUIsQ0FBekI7QUFDQSxNQUFNNkYsVUFBVSxHQUFHN0YsS0FBSyxDQUFDMkYsTUFBTSxHQUEvQixDQUF3QixDQUF4QjtBQUNBLFNBQU87QUFDTkcsWUFBUSxFQURGO0FBRU5GLGVBQVcsRUFGTDtBQUdOQyxjQUFVLEVBSEo7QUFJTmdDLFlBSk0sc0JBSUs7QUFDVixVQUFJNUMsVUFBVSxDQUFWQSxXQUFKLFFBQWtDO0FBQ2pDLFlBQUlyRixDQUFDLEdBQUw7O0FBQ0EsZUFBT0EsQ0FBQyxHQUFSO0FBQW1CZ0ksa0JBQVEsQ0FBUkEsWUFBcUI1SCxLQUFLLENBQUNKLENBQTNCZ0ksRUFBMEIsQ0FBMUJBO0FBQW5CO0FBQ0E7O0FBQ0Q7QUFDQTtBQVZLLEdBQVA7QUFUTSIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZSc7XG5cbi8vIHN0YXRpYyBwYXJzZXIoZW50aXR5KVxuLy8gXHR7XG4vLyBcdFx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0bGV0IG1vZGVsRGlyZWN0aXZlID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzW01vZGVsLmdldE5hbWUoKV07XG5cbi8vIFx0XHRpZihtb2RlbERpcmVjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcbi8vIFx0XHRcdHZhbHVlOiBgKCR7IG1vZGVsRGlyZWN0aXZlLnZhbHVlLnZhbHVlIH0pKClgLFxuLy8gXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuLy8gXHRcdH07XG5cdFx0XG4vLyBcdFx0Ly8gZ2V0XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZW50aXR5Lm9wdGlvbik7XG4vLyBcdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHZhbHVlUHJvcCA9ICd2YWx1ZSc7XG5cblx0aWYobm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0dmFsdWVQcm9wID0gJ2NoZWNrZWQnO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoZXZlbnQpXG5cdHtcblx0XHRpZihldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KSB7XG5cdFx0XHR2YWx1ZS5hcHBseShudWxsLCBldmVudC5kZXRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZShub2RlW3ZhbHVlUHJvcF0pO1xuXHRcdH1cblx0fVxuXG5cdG5vZGVbdmFsdWVQcm9wXSA9IHZhbHVlKCk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cdH1cbn0iLCJleHBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5leHBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmV4cG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5leHBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5leHBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmV4cG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJ1xuZXhwb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnXG5leHBvcnQgeyBjcmVhdGVDb21wb25lbnQsIERPTV9IT09LX0FUVFIgfSBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudCdcbmV4cG9ydCB7IGVtaXQgfSBmcm9tICcuL2VtaXQnXG5leHBvcnQgeyBjYWxsIH0gZnJvbSAnLi9jYWxsJ1xuZXhwb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbG9hZCdcblxuZXhwb3J0IHsgcmVuZGVyLCBoeWRyYXRlIH0gZnJvbSAnLi9kb20nXG5cbi8vIGV4cG9ydCB7XG4vLyBcdGF0dHJzLFxuLy8gXHRldmVudHMsXG4vLyBcdHNsb3QsXG4vLyBcdGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsXG4vLyBcdHN0YXRlbWVudCxcbi8vIFx0bWFwLFxuLy8gXHRkaXJlY3RpdmUsXG4vLyBcdGNhbGwsXG4vLyBcdGVtaXQsXG4vLyBcdGxvYWRDb21wb25lbnQsXG4vLyBcdGNyZWF0ZUNvbXBvbmVudCxcbi8vIFx0RE9NX0hPT0tfQVRUUlxuLy8gfSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL3BhcnNlci9pbmRleCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG5cdGJpbmQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZW50aXR5KVxue1xuXHRsZXQgZW50aXR5RGlyZWN0aXZlcyA9IHt9O1xuXG5cdGlmKGVudGl0eS5vcHRpb24gJiYgZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzKSB7XG5cdFx0ZW50aXR5RGlyZWN0aXZlcyA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlcztcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHlEaXJlY3RpdmVzKSB7XG5cdFx0aWYoZGlyZWN0aXZlc1tuYW1lXSkge1xuXHRcdFx0ZGlyZWN0aXZlc1tuYW1lXShlbnRpdHksIGVudGl0eURpcmVjdGl2ZXNbbmFtZV0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgVGhlcmUgaXMgbm8gcGFyc2VyIG1vZGlmaWVyIGZvciBkaXJlY3RpdmUgJyR7IG5hbWUgfScgYClcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYmluZChlbnRpdHksIGRpcmVjdGl2ZSlcbntcblx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcblx0XHR2YWx1ZTogYCgkeyBkaXJlY3RpdmUudmFsdWUgfSkoKWAsXG5cdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHR9O1xufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL2JpbmQnO1xuXG5leHBvcnQgeyBiaW5kIH0iLCJleHBvcnQgY2xhc3MgVHJhY2tlciB7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwb3NhbHMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHRzZXRQYXJlbnQocGFyZW50KVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRhZGRDaGlsZCh0cmFja2VyKVxuXHR7XG5cdFx0dHJhY2tlci5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jaGlsZHJlbi5hZGQodHJhY2tlcik7XG5cdH1cblxuXHRkaXNwb3NhbChjbGVhbnVwKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2FkZCcsIGNsZWFudXAucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpXG5cdFx0dGhpcy5kaXNwb3NhbHMuYWRkKGNsZWFudXApO1xuXHR9XG5cblx0Y2xlYW51cCgpXG5cdHtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2NsZWFudXAgc3RhcnQnLCB0aGlzKTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5mb3JFYWNoKGRpc3Bvc2FsID0+IGRpc3Bvc2FsKCkpO1xuXHRcdHRoaXMuZGlzcG9zYWxzLmNsZWFyKCk7XG5cblx0XHR0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQuY2xlYW51cCgpKTtcblx0XHQvLyB0aGlzLmNoaWxkcmVuLmNsZWFyKCk7XG5cblx0XHRpZih0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4uZGVsZXRlKHRoaXMpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4sIGhvb2tzLCBub2RlLCByZW5kZXIpXG57XG5cdGlmKGZuID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGZuKGhvb2tzLCBub2RlLCByZW5kZXIpO1xufSIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufSIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZSgkaG9va3MsIGRpcmVjdGl2ZSwgbm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHVubW91bnRlZCA9IGRpcmVjdGl2ZShub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxuXG5cdGNsZWFudXAodW5tb3VudGVkKTtcbn1cbiIsImltcG9ydCB7IHJvb3QsIGdldFJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRyb290Tm9kZS5pbm5lckhUTUwgPSAnJztcblx0cm9vdE5vZGUuYXBwZW5kQ2hpbGQoYy5ub2RlKTtcblxuXHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cm9vdC5jbGVhbnVwKCk7XG5cdH1cbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgdG1wID0gcm9vdE5vZGUuaW5uZXJIVE1MO1xuXHRyb290Tm9kZS5pbm5lckhUTUwgPSB0bXA7XG5cblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cblx0bGV0IGMgPSBjb21wb25lbnQobnVsbCwgcm9vdE5vZGUuZmlyc3RDaGlsZCk7XG5cblx0aWYoYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0Yy5ob29rcy5tb3VudGVkKCk7XG5cdH1cblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHJvb3QuY2xlYW51cCgpO1xuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiaW1wb3J0IHtcblx0ZGlzcGF0Y2hIb29rLFxufSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0bGV0IGNvbXBvbmVudE5vZGUgPSBjLm5vZGU7XG5cblx0aWYocmVuZGVyKSB7XG5cblx0XHRsZXQgbWFyayA9IGNvbXBvbmVudE5vZGUubGFzdENoaWxkO1xuXHRcdFxuXHRcdG5vZGUucmVwbGFjZVdpdGgoY29tcG9uZW50Tm9kZSk7XG5cblx0XHRjb21wb25lbnROb2RlID0gbWFyaztcblx0fVxuXG5cdGlmKGMuaG9va3MubW91bnRlZCkge1xuXHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHR9XG5cdC8vIGRpc3BhdGNoSG9vayhjLmlkLCAnbW91bnRlZCcpO1xuXG5cdHJldHVybiBjb21wb25lbnROb2RlO1xufSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUsIHJvb3QsIGdldFJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGN1clRyYWNrZXIgPSBnZXRSb290KCk7Ly8hZXhwci4kdDtcblxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXG5cdC8vIGh5ZHJhdGlvbiBwcmVwYXJlIFxuXHRpZihyZW5kZXIpIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cblx0XHQvLyBjb25zb2xlLmxvZygnc3RhcnQgZWFjaCcsIHBhcmVudCwgZW5kTWFyaylcblx0fSBlbHNlIHtcblx0XHRsZXQgX2l0ZW1zID0gdmFsdWUoaXRlbXMpO1xuXHRcdGxldCBub2RlID0gYmluZE5vZGU7XG5cdFx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblx0XHQvLyByZXR1cm47XG5cdFx0Zm9yIChsZXQga2V5IGluIF9pdGVtcykge1xuXHRcdFx0bGV0IGl0ZW0gPSBfaXRlbXNba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGxhc3RIeWRyYXRlZE5vZGUgPSBudWxsO1xuXG5cdFx0XHRpZihub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblxuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaXRlbUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cHIobm9kZSwgZmFsc2UsIGl0ZW1LZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0XHRub2RlID0gbGFzdEh5ZHJhdGVkTm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ2xhc3RIeWRyYXRlZE5vZGUnLCBsYXN0SHlkcmF0ZWROb2RlLCBub2RlKVxuXHRcdFx0XHRcdGxhc3ROb2RlID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihsYXN0SHlkcmF0ZWROb2RlICYmIGxhc3RIeWRyYXRlZE5vZGUuaGFzQXR0cmlidXRlKSB7XG5cdFx0XHRcdGxldCBoeWRyYXRlZE5vZGVzID0gW107XG5cblx0XHRcdFx0aWYoIWxhc3RIeWRyYXRlZE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWtleScpKSB7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0Tm9kZVNlYXJjaCA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cdFx0XHRcdFx0d2hpbGUoc3RhcnROb2RlU2VhcmNoKSB7XG5cdFx0XHRcdFx0XHRoeWRyYXRlZE5vZGVzLnVuc2hpZnQoc3RhcnROb2RlU2VhcmNoKTtcblx0XHRcdFx0XHRcdGlmKHN0YXJ0Tm9kZVNlYXJjaC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2V5JykpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHN0YXJ0Tm9kZVNlYXJjaCA9IHN0YXJ0Tm9kZVNlYXJjaC5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVmYXVsdEFba2V5XSA9IGl0ZW07XG5cblx0XHRcdFx0bGV0IG4gPSBsYXN0SHlkcmF0ZWROb2RlO1xuXG5cdFx0XHRcdGlmKGh5ZHJhdGVkTm9kZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdG4gPSBwZXJzaXN0ZW50KHtcblx0XHRcdFx0XHRcdGNoaWxkTm9kZXM6IGh5ZHJhdGVkTm9kZXNcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9kZXMuc2V0KGl0ZW1LZXksIG4pO1xuXHRcdFx0XHRkaWZmYWJsZShuLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhkZWZhdWx0QSk7XG5cblx0XHRlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0aWYobGFzdE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHJlbmRlciA9IHRydWU7XG5cdFx0XHRiaW5kTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZE5vZGUsIGxhc3ROb2RlLCBlbmRNYXJrLCBlbmRNYXJrLnBhcmVudE5vZGUpO1xuXHRcdC8vIGVuZE1hcmsgPSBhZGQobGFzdE5vZGUsICcnKTtcblx0fVxuXHRcblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoaXRlbXMsIGEgPT4ge1xuXG5cdFx0bGV0IGIgPSB2YWx1ZShpdGVtcyk7XG5cblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHRcdC8vIEFycmF5LmZyb20gdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgbGlzdC5cblx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdGRpZmYoZW5kTWFyay5wYXJlbnROb2RlLCBhIHx8IGRlZmF1bHRBLCBiLCBrZXlFeHByLCBhZGROb2RlLCBlbmRNYXJrKVxuXHRcdCk7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0Ly8gfSk7XG5cdH0sICFyZW5kZXIpO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbdW5zdWJzY3JpYmVdJywgdW5zdWJzY3JpYmUpO1xuXHQvLyBcdHVuc3Vic2NyaWJlKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0Ly8gaWYocmVuZGVyKSB7XG5cdC8vIFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblx0Ly8gfVxuXG5cdC8vIGRpc3Bvc2VBbGwoKTtcblxuXHRmdW5jdGlvbiBhZGROb2RlKGl0ZW0sIGtleSwgaSwgZWwgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zYWwgPT4ge1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdHJldHVybiBleHByKG51bGwsIHRydWUsIG5vZGVLZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXHRcdFx0XHRcblx0XHRcdFx0bm9kZXMuc2V0KG5vZGVLZXksIG4pO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGkgPT09IC0xKSB7XG5cdFx0XHR0b1JlbW92ZS5hZGQobm9kZUtleSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpZmZhYmxlKG4sIGkpO1xuXHR9XG5cblx0Ly8gY2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHRmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHRcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0XHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0XHRub2Rlcy5jbGVhcigpO1xuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSwgcm9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgY2FzdE5vZGUgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0d2hpbGUoc3RhcnQgIT09IG51bGwgJiYgIXN0YXJ0LmlzU2FtZU5vZGUoZW5kKSkge1xuXHRcdG5vZGVzLnB1c2goc3RhcnQpO1xuXHRcdHN0YXJ0ID0gc3RhcnQubmV4dFNpYmxpbmc7XG5cdH07XG5cblx0bm9kZXMuc2hpZnQoKTtcblxuXHRsZXQgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gbm9kZXNbMF07XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKVxue1xuXHRpZihyZW5kZXIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBpbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XG5cdC8vIGxldCBcblx0bGV0IHBhcmVudDtcblx0bGV0IGVuZE1hcmssIHN0YXJ0TWFyaztcblx0XG5cdGlmKHJlbmRlcikge1xuXHRcdGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG5cdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdHN0YXJ0TWFyayA9IGFkZChwYXJlbnQsICcnKTtcblx0XHRwbGFjZWhvbGRlciA9IGFkZChwYXJlbnQsIHBsYWNlaG9sZGVyKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXG5cdFx0bm9kZSA9IHBsYWNlaG9sZGVyO1xuXHRcdFxuXHRcdHBhcmVudCA9IGVuZE1hcmsucGFyZW50Tm9kZTtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0c3RhcnRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0bGV0IGxhc3RDb25kaXRpb25JbmRleCA9IGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpO1xuXG5cdGxldCBpc0ZpcnN0Q2FsbCA9IHRydWU7XG5cblx0Ly8gb2JzIHRyYWNrZXJzXG5cdGxldCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cblx0ZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0XHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdH1cblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXG5cdFx0ZGlzcG9zZUFsbCgpO1xuXG5cdFx0bGV0IG4gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlbmRlckZuKHN0YXJ0TWFyay5uZXh0U2libGluZywgbGFzdENvbmRpdGlvbkluZGV4ICE9PSBpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoaXNGaXJzdENhbGwgJiYgIXJlbmRlcikge1xuXHRcdFx0ZW5kTWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdFx0aWYobGFzdENvbmRpdGlvbkluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdG4gPSBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhsYXN0Q29uZGl0aW9uSW5kZXgsIG4sIGVuZE1hcmspXG5cdFx0XHRuLmFmdGVyKGVuZE1hcmspO1xuXG5cdFx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGhhc1JlbmRlcmVkID0gY3VycmVudENvbmRpdGlvbkluZGV4ICE9PSBsYXN0Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRsYXN0Q29uZGl0aW9uSW5kZXggPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0aWYoIWhhc1JlbmRlcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gcmVtb3ZlIG9sZCBub2Rlc1xuXHRcdGxldCBjbGVhbk5vZGVzID0gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0cGFyZW50LnJlbW92ZUNoaWxkKGRpZmZhYmxlKGNsZWFuTm9kZXMsIC0xKSk7XG5cblx0XHQvLyBhZGQgbmV3IG5vZGVzXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShkaWZmYWJsZShuLCAxKSwgZW5kTWFyayk7XG5cdH0pO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IHdhdGNoLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRjdXN0b21Jbml0ID0gY29udGV4dC4kY3VzdG9tSW5pdCB8fCBudWxsO1xuXHRcblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRjdXN0b21Jbml0LFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdHdoaWxlIChzdGFydE5vZGUgJiYgc3RhcnROb2RlICE9PSBlbmRNYXJrKSB7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==