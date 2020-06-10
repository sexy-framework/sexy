(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/hawa/directives/src/custom/bind.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/directives/src/custom/bind.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bind = bind;

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

/***/ "./packages/hawa/directives/src/custom/html.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/directives/src/custom/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.html = html;

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function html(node, options, html, render) {
  if (render) {
    node.innerHTML = (0, _observable.value)(html);
  }

  return function () {// node.removeEventListener('input', updateValue);
  };
}

/***/ }),

/***/ "./packages/hawa/directives/src/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/directives/src/index.js ***!
  \***********************************************/
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
Object.defineProperty(exports, "html", {
  enumerable: true,
  get: function get() {
    return _html.html;
  }
});
Object.defineProperty(exports, "parser", {
  enumerable: true,
  get: function get() {
    return _parser.parser;
  }
});

var _bind = __webpack_require__(/*! ./custom/bind */ "./packages/hawa/directives/src/custom/bind.js");

var _html = __webpack_require__(/*! ./custom/html */ "./packages/hawa/directives/src/custom/html.js");

var _parser = __webpack_require__(/*! ./parser */ "./packages/hawa/directives/src/parser.js");

/***/ }),

/***/ "./packages/hawa/directives/src/parser.js":
/*!************************************************!*\
  !*** ./packages/hawa/directives/src/parser.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parser = parser;

var _index = __webpack_require__(/*! ./parser/index */ "./packages/hawa/directives/src/parser/index.js");

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

/***/ "./packages/hawa/directives/src/parser/bind.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/directives/src/parser/bind.js ***!
  \*****************************************************/
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

/***/ "./packages/hawa/directives/src/parser/index.js":
/*!******************************************************!*\
  !*** ./packages/hawa/directives/src/parser/index.js ***!
  \******************************************************/
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

var _bind = __webpack_require__(/*! ./bind */ "./packages/hawa/directives/src/parser/bind.js");

/***/ }),

/***/ "./packages/hawa/lifecycle/src/index.js":
/*!**********************************************!*\
  !*** ./packages/hawa/lifecycle/src/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHooks = createHooks;

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function createHooks(hooks) {
  if (!hooks.unmounted) {
    return;
  }

  (0, _observable.cleanup)(hooks.unmounted);
}

/***/ }),

/***/ "./packages/hawa/observable/src/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/observable/src/index.js ***!
  \***********************************************/
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

var _tracker = __webpack_require__(/*! ./tracker */ "./packages/hawa/observable/src/tracker.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tracking = new _tracker.Tracker();

function getRoot() {
  return tracking;
}

function root(fn, customParent, transParent) {
  if (customParent === void 0) {
    customParent = null;
  }

  if (transParent === void 0) {
    transParent = null;
  }

  var prevTracking = tracking;
  var newTracking = new _tracker.Tracker();

  if (customParent) {
    customParent.addChild(newTracking);
  } else {
    tracking.addChild(newTracking);
  }

  tracking = newTracking;
  var result = fn(function (callback) {
    newTracking.cleanup(callback);
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

/***/ "./packages/hawa/observable/src/tracker.js":
/*!*************************************************!*\
  !*** ./packages/hawa/observable/src/tracker.js ***!
  \*************************************************/
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

  _proto.cleanup = function cleanup(callback) {
    var maxDuration = 0; // console.warn('cleanup start', this);

    this.disposals.forEach(function (disposal) {
      var result = disposal();

      if (result && result.duration) {
        if (result.duration > maxDuration) {
          maxDuration = result.duration;
        }
      }
    });
    this.disposals.clear();
    this.children.forEach(function (child) {
      var duration = child.cleanup();

      if (duration > maxDuration) {
        maxDuration = duration;
      }
    }); // this.children.clear();

    if (this.parent) {
      this.parent.children.delete(this);
    }

    delete this;

    if (callback) {
      setTimeout(callback, maxDuration);
    }

    return maxDuration;
  };

  return Tracker;
}();

exports.Tracker = Tracker;

/***/ }),

/***/ "./packages/hawa/render/src/attrs.js":
/*!*******************************************!*\
  !*** ./packages/hawa/render/src/attrs.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrArgToObj = attrArgToObj;
exports.attrArgToString = attrArgToString;
exports.makeClass = makeClass;
exports.makeStyles = makeStyles;
exports.attrs = attrs;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function attrArgToObj(args) {
  var result = {};

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = (0, _extends2.default)(result, attrArgToObj(args[i]));
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

/***/ "./packages/hawa/render/src/call.js":
/*!******************************************!*\
  !*** ./packages/hawa/render/src/call.js ***!
  \******************************************/
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

/***/ "./packages/hawa/render/src/createComponent.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/render/src/createComponent.js ***!
  \*****************************************************/
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

/***/ "./packages/hawa/render/src/directive.js":
/*!***********************************************!*\
  !*** ./packages/hawa/render/src/directive.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.directive = directive;

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function directive($hooks, directive, node, options, value, render) {
  var unmounted = directive(node, options, value, render);
  (0, _observable.cleanup)(unmounted);
}

/***/ }),

/***/ "./packages/hawa/render/src/dom.js":
/*!*****************************************!*\
  !*** ./packages/hawa/render/src/dom.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.refresh = refresh;
exports.hydrate = hydrate;

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

var _load = __webpack_require__(/*! ./load */ "./packages/hawa/render/src/load.js");

function render(component, rootNode) {
  var root = (0, _observable.getRoot)();
  (0, _load.lazy)(component, function (component) {
    var c = component();
    rootNode.innerHTML = '';
    rootNode.appendChild(c.node);

    if (c.hooks.mounted) {
      c.hooks.mounted();
    }
  });
  return function () {
    root.cleanup();
  };
}

function refresh(rootNode) {
  var tmp = rootNode.innerHTML;
  rootNode.innerHTML = tmp;
}

function hydrate(component, rootNode) {
  var root = (0, _observable.getRoot)();
  (0, _load.lazy)(component, function (component) {
    var c = component(null, rootNode.firstChild);

    if (c.hooks && c.hooks.mounted) {
      c.hooks.mounted();
    }
  });
  return function () {
    root.cleanup();
  };
}

/***/ }),

/***/ "./packages/hawa/render/src/emit.js":
/*!******************************************!*\
  !*** ./packages/hawa/render/src/emit.js ***!
  \******************************************/
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

/***/ "./packages/hawa/render/src/events.js":
/*!********************************************!*\
  !*** ./packages/hawa/render/src/events.js ***!
  \********************************************/
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

/***/ "./packages/hawa/render/src/index.js":
/*!*******************************************!*\
  !*** ./packages/hawa/render/src/index.js ***!
  \*******************************************/
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
Object.defineProperty(exports, "refresh", {
  enumerable: true,
  get: function get() {
    return _dom.refresh;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/hawa/render/src/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/hawa/render/src/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/hawa/render/src/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/hawa/render/src/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/hawa/render/src/statement/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/hawa/render/src/map/index.js");

var _directive = __webpack_require__(/*! ./directive */ "./packages/hawa/render/src/directive.js");

var _createComponent = __webpack_require__(/*! ./createComponent */ "./packages/hawa/render/src/createComponent.js");

var _emit = __webpack_require__(/*! ./emit */ "./packages/hawa/render/src/emit.js");

var _call = __webpack_require__(/*! ./call */ "./packages/hawa/render/src/call.js");

var _load = __webpack_require__(/*! ./load */ "./packages/hawa/render/src/load.js");

var _dom = __webpack_require__(/*! ./dom */ "./packages/hawa/render/src/dom.js");

/***/ }),

/***/ "./packages/hawa/render/src/load.js":
/*!******************************************!*\
  !*** ./packages/hawa/render/src/load.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLazy = isLazy;
exports.lazy = lazy;
exports.loadComponent = loadComponent;

var _utils = __webpack_require__(/*! ./utils.js */ "./packages/hawa/render/src/utils.js");

function isLazy(component) {
  return component instanceof Promise;
}

function lazy(component, callback) {
  if (isLazy(component)) {
    component.then(function (module) {
      callback(module.default);
    });
    return;
  }

  callback(component);
}

function loadComponent(component, node, render, options) {
  if (options === void 0) {
    options = {};
  }

  var endMark = (0, _utils.castNode)('');
  var startMark = (0, _utils.castNode)(''); // console.log(node.parentNode.childNodes);

  node.after(endMark);

  if (isLazy(component)) {
    node.parentNode.insertBefore(startMark, node);
  } // console.log(node.parentNode.childNodes);
  // let c = component(options, render ? false : node);


  lazy(component, function (component) {
    var c = component(options, render ? false : node);
    var componentNode = c.node;

    if (render) {
      node.replaceWith(c.node);
    }

    if (c.hooks.mounted) {
      c.hooks.mounted();
    } // endMark = componentNode;

  }); // console.log(node, endMark)
  // console.log(endMark, endMark.parentNode.childNodes);

  return endMark;
}

/***/ }),

/***/ "./packages/hawa/render/src/map/diff.js":
/*!**********************************************!*\
  !*** ./packages/hawa/render/src/map/diff.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = diff;

var _lifecycle = __webpack_require__(/*! hawa/lifecycle */ "./packages/hawa/lifecycle/src/index.js");

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
      get(a[i], i, -1, parent);
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
        get(a[i], i, -1, parent);
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

/***/ "./packages/hawa/render/src/map/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/render/src/map/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/hawa/render/src/map/diff.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/hawa/render/src/utils.js");

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

var _transition = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");

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
    bindNode.replaceWith(parent);
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
            var n = (0, _utils.manualPersistent)(node, lastHydratedNode);
            defaultA[key] = item;
            nodes.set(itemKey, n); // console.warn('[hydr]', itemKey, n)

            node = lastHydratedNode.nextSibling;
            lastNode = lastHydratedNode;
          }
        }
      };

      for (var key in _items) {
        _loop(key);
      }

      endMark = document.createTextNode('');

      if (lastNode === null) {
        render = true;
        bindNode.after(endMark);
      } else {
        lastNode.after(endMark);
      }
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

  function addNode(item, key, i, parent) {
    if (parent === void 0) {
      parent = null;
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
      var disposer = disposers.get(nodeKey);

      if (disposer) {
        disposers.set(nodeKey, disposer.bind(null, function () {
          endMark.parentNode.removeChild((0, _utils.diffable)(n, -1));
        }));
      }

      return;
    }

    return (0, _utils.diffable)(n, i);
  } // cleanup(disposeAll);
  // function disposeAll() {
  // 	disposers.forEach(d => d());
  // 	disposers.clear();
  // 	nodes.clear();
  // 	toRemove.clear();
  // }


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

/***/ "./packages/hawa/render/src/slot.js":
/*!******************************************!*\
  !*** ./packages/hawa/render/src/slot.js ***!
  \******************************************/
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

/***/ "./packages/hawa/render/src/statement/index.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/render/src/statement/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createInitFragment = createInitFragment;
exports.getInitValue = getInitValue;
exports.statement = statement;

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/hawa/render/src/utils.js");

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
  }

  // let 
  var parent;
  var endMark, startMark;

  function cleanup() {
    var cleanNodes = createInitFragment(startMark, endMark);
    parent.removeChild((0, _utils.diffable)(cleanNodes, -1));
  }

  if (render) {
    var placeholder = document.createComment('');
    parent = document.createDocumentFragment();
    startMark = (0, _utils.add)(parent, '');
    placeholder = (0, _utils.add)(parent, placeholder);
    endMark = (0, _utils.add)(parent, '');
    node.replaceWith(parent);
    node = placeholder;
    parent = endMark.parentNode;
    cleanup();
  } else {
    parent = node.parentNode;
    startMark = (0, _utils.castNode)('');
    parent.insertBefore(startMark, node);
  }

  var lastConditionIndex = getInitValue(args, render);
  var isFirstCall = true; // obs trackers

  var disposers = new Map();
  var toRemove = new Set(); // .clear();

  function dispose(item) {
    var disposer = disposers.get(item);

    if (disposer) {
      disposer(cleanup);
      disposers.delete(item);
    }
  }

  (0, _observable.subscribe)(deps, function () {
    toRemove.forEach(dispose);
    var n = document.createComment('');
    var currentConditionIndex = null;

    var _loop = function _loop() {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        n = (0, _observable.root)(function (dispose) {
          toRemove.add(i);
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
    } // add new nodes


    parent.insertBefore((0, _utils.diffable)(n, 1), endMark);
  });
  return endMark;
}

/***/ }),

/***/ "./packages/hawa/render/src/templates.js":
/*!***********************************************!*\
  !*** ./packages/hawa/render/src/templates.js ***!
  \***********************************************/
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

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

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

/***/ "./packages/hawa/render/src/utils.js":
/*!*******************************************!*\
  !*** ./packages/hawa/render/src/utils.js ***!
  \*******************************************/
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
exports.persistent = exports.manualPersistent = exports.diffable = void 0;

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
  // console.warn(startNode, endMark)
  while (startNode && !startNode.isSameNode(endMark)) {
    // console.log(startNode);
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

var manualPersistent = function manualPersistent(start, end) {
  if (start.isSameNode(end)) {
    return start;
  }

  return {
    nodeType: 111,
    _firstChild: start,
    _lastChild: end
  };
};

exports.manualPersistent = manualPersistent;

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

/***/ "./packages/hawa/src/index.js":
/*!************************************!*\
  !*** ./packages/hawa/src/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _render.render;
  }
});
Object.defineProperty(exports, "hydrate", {
  enumerable: true,
  get: function get() {
    return _render.hydrate;
  }
});
Object.defineProperty(exports, "refresh", {
  enumerable: true,
  get: function get() {
    return _render.refresh;
  }
});

var _render = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");

/***/ }),

/***/ "./packages/hawa/transition/src/classed.js":
/*!*************************************************!*\
  !*** ./packages/hawa/transition/src/classed.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classed = classed;
var cache = new Map();

function getDuration(node, activeClass, out) {
  var cached = cache.get(activeClass);

  if (cached) {
    return cached;
  }

  var tmp = document.createElement('div');
  tmp.classList.add(activeClass);
  document.body.append(tmp);
  var duration = getComputedStyle(tmp).transitionDuration;
  tmp.remove();
  duration = parseFloat(duration.replace(/[^0-9\.]/g, '')) * 1000;
  cache.set(activeClass, duration);
  return duration;
}

function classed(node, name, out) {
  if (out === void 0) {
    out = false;
  }

  var prefix = 'enter';

  if (out) {
    prefix = 'leave';
  }

  var toRemove = new Set();
  var activeClass = name + "-" + prefix + "-active";
  var startClass = name + "-" + prefix;
  var finishClass = name + "-" + prefix + "-to";
  var duration = getDuration(node, activeClass, out);
  node.classList.add(activeClass);
  node.classList.add(startClass);
  setTimeout(function () {
    node.classList.add(finishClass);
    node.classList.remove(startClass);
  }, 20); // cleanup

  setTimeout(function () {
    node.classList.remove(activeClass);
    node.classList.remove(finishClass);
  }, duration);
  return {
    duration: duration
  };
}

/***/ }),

/***/ "./packages/hawa/transition/src/fade.js":
/*!**********************************************!*\
  !*** ./packages/hawa/transition/src/fade.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fade = fade;

function fade(node, _ref) {
  var _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 0 : _ref$delay,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 400 : _ref$duration;
  return {
    delay: delay,
    duration: duration,
    effect: effect,
    css: {}
  };
}

/***/ }),

/***/ "./packages/hawa/transition/src/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/transition/src/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transition = transition;
Object.defineProperty(exports, "fade", {
  enumerable: true,
  get: function get() {
    return _fade.fade;
  }
});
Object.defineProperty(exports, "classed", {
  enumerable: true,
  get: function get() {
    return _classed.classed;
  }
});

var _observable = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

var _fade = __webpack_require__(/*! ./fade */ "./packages/hawa/transition/src/fade.js");

var _classed = __webpack_require__(/*! ./classed */ "./packages/hawa/transition/src/classed.js");

function transition(node, t_in, t_in_opts, t_out, t_out_opts) {
  if (t_in) {
    transition_in(node, t_in, t_in_opts);
  }

  if (t_out) {
    (0, _observable.cleanup)(transition_out.bind(null, node, t_out, t_out_opts));
  }
}

function transition_in(node, transition, options) {
  return transition(node, options);
}

function transition_out(node, transition, options) {
  return transition(node, options, true);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvZGlyZWN0aXZlcy9zcmMvY3VzdG9tL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9kaXJlY3RpdmVzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL3BhcnNlci9iaW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvZGlyZWN0aXZlcy9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvbGlmZWN5Y2xlL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL29ic2VydmFibGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2Evb2JzZXJ2YWJsZS9zcmMvdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2NyZWF0ZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3RyYW5zaXRpb24vc3JjL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS90cmFuc2l0aW9uL3NyYy9mYWRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvdHJhbnNpdGlvbi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiYmluZCIsIm5vZGUiLCJvcHRpb25zIiwidmFsdWUiLCJyZW5kZXIiLCJ2YWx1ZVByb3AiLCJ0eXBlIiwidXBkYXRlVmFsdWUiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiYXBwbHkiLCJkZXRhaWwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImh0bWwiLCJpbm5lckhUTUwiLCJkaXJlY3RpdmVzIiwicGFyc2VyIiwiZW50aXR5IiwiZW50aXR5RGlyZWN0aXZlcyIsIm9wdGlvbiIsIm5hbWUiLCJjb25zb2xlIiwid2FybiIsImRpcmVjdGl2ZSIsInByb3BzIiwiaXNFeHByZXNzaW9uIiwiY3JlYXRlSG9va3MiLCJob29rcyIsInVubW91bnRlZCIsInRyYWNraW5nIiwiVHJhY2tlciIsImdldFJvb3QiLCJyb290IiwiZm4iLCJjdXN0b21QYXJlbnQiLCJ0cmFuc1BhcmVudCIsInByZXZUcmFja2luZyIsIm5ld1RyYWNraW5nIiwiYWRkQ2hpbGQiLCJyZXN1bHQiLCJjYWxsYmFjayIsImNsZWFudXAiLCJkaXNwb3NhbCIsIiRvIiwib2JzZXJ2YWJsZSIsImRhdGEiLCJuZXh0VmFsdWUiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJfb2JzZXJ2ZXJzIiwiZm9yRWFjaCIsIm9ic2VydmVyIiwiX2ZyZXNoIiwiU2V0IiwiY29tcHV0ZWQiLCJvYnMiLCJjb25jYXQiLCJvYiIsInVuZGVmaW5lZCIsImFkZCIsInVwZGF0ZSIsInN1YnNjcmliZSIsInNraXAiLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsImRlbGV0ZSIsImlzT2JzZXJ2YWJsZSIsInByb3AiLCJ3YXRjaCIsImNoaWxkcmVuIiwicGFyZW50IiwiZGlzcG9zYWxzIiwic2V0UGFyZW50IiwidHJhY2tlciIsIm1heER1cmF0aW9uIiwiZHVyYXRpb24iLCJjbGVhciIsImNoaWxkIiwic2V0VGltZW91dCIsImF0dHJBcmdUb09iaiIsImFyZ3MiLCJBcnJheSIsImlzQXJyYXkiLCJpIiwiYXR0ckFyZ1RvU3RyaW5nIiwia2V5IiwicHVzaCIsIm1ha2VDbGFzcyIsImxhc3RDbGFzc0Fkb3B0ZWQiLCJ2IiwidG1wIiwiY2xhc3NMaXN0IiwidG9TZXQiLCJmcm9tIiwidG9SZW1vdmUiLCJmaWx0ZXIiLCJ4IiwiaW5jbHVkZXMiLCJyZW1vdmUiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwic3R5bGUiLCJhdHRycyIsInNldEF0dHJpYnV0ZSIsImNhbGwiLCJET01fSE9PS19BVFRSIiwiSEFXQV9JRCIsImNyZWF0ZUNvbXBvbmVudCIsImlkIiwiZ2V0QXR0cmlidXRlIiwiJGhvb2tzIiwiY29tcG9uZW50Iiwicm9vdE5vZGUiLCJjIiwiYXBwZW5kQ2hpbGQiLCJtb3VudGVkIiwicmVmcmVzaCIsImh5ZHJhdGUiLCJmaXJzdENoaWxkIiwiZW1pdCIsImRpc3BhdGNoRXZlbnQiLCJldmVudHMiLCJpc0xhenkiLCJQcm9taXNlIiwibGF6eSIsInRoZW4iLCJtb2R1bGUiLCJkZWZhdWx0IiwibG9hZENvbXBvbmVudCIsImVuZE1hcmsiLCJzdGFydE1hcmsiLCJhZnRlciIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjb21wb25lbnROb2RlIiwicmVwbGFjZVdpdGgiLCJkaWZmIiwiYSIsImIiLCJrZXlFeHByIiwiZ2V0IiwiYmVmb3JlIiwiYUlkeCIsIk1hcCIsImJJZHgiLCJqIiwic2V0IiwiYUVsbSIsImJFbG0iLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsIm1hcCIsImJpbmROb2RlIiwiaXRlbXMiLCJleHByIiwiY3VyVHJhY2tlciIsImRpc3Bvc2VycyIsIm5vZGVzIiwiZGVmYXVsdEEiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsIm4iLCJuZXh0U2libGluZyIsImNyZWF0ZVRleHROb2RlIiwiY29udGVudCIsImFkZE5vZGUiLCJkaXNwb3NlIiwibm9kZUtleSIsIm5vZGVUeXBlIiwiZGlzcG9zZXIiLCJyZW1vdmVDaGlsZCIsInNsb3QiLCIkc2xvdHMiLCJzbG90Tm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJzdGFydCIsImVuZCIsImlzU2FtZU5vZGUiLCJzaGlmdCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsImdldEluaXRWYWx1ZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJzdGF0ZW1lbnQiLCJkZXBzIiwiY2xlYW5Ob2RlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29tbWVudCIsImxhc3RDb25kaXRpb25JbmRleCIsImlzRmlyc3RDYWxsIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiaGFzUmVuZGVyZWQiLCJnZXROb2RlIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJzZXRSZWYiLCIkcmVmcyIsInNldEtleSIsIiRrZXkiLCJnZXRQcm9wIiwiJHByb3BzIiwic2VlZCIsInBhcnNlQ29udGV4dCIsImNvbnRleHQiLCIkY3VzdG9tSW5pdCIsImZyYWciLCJjaGlsZE5vZGVzIiwiX3N0YXJ0TWFyayIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsIk5vZGUiLCJyZW1vdmVOb2RlcyIsInN0YXJ0Tm9kZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwiX3ZhbHVlT2YiLCJtYW51YWxQZXJzaXN0ZW50IiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwiY2FjaGUiLCJnZXREdXJhdGlvbiIsImFjdGl2ZUNsYXNzIiwib3V0IiwiY2FjaGVkIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwicGFyc2VGbG9hdCIsInJlcGxhY2UiLCJjbGFzc2VkIiwicHJlZml4Iiwic3RhcnRDbGFzcyIsImZpbmlzaENsYXNzIiwiZmFkZSIsImRlbGF5IiwiZWZmZWN0IiwiY3NzIiwidHJhbnNpdGlvbiIsInRfaW4iLCJ0X2luX29wdHMiLCJ0X291dCIsInRfb3V0X29wdHMiLCJ0cmFuc2l0aW9uX2luIiwidHJhbnNpdGlvbl9vdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sU0FBU0EsSUFBVCxDQUFjQyxJQUFkLEVBQW9CQyxPQUFwQixFQUE2QkMsS0FBN0IsRUFBb0NDLE1BQXBDLEVBQ1A7QUFDQyxNQUFJQyxTQUFTLEdBQUcsT0FBaEI7O0FBRUEsTUFBR0osSUFBSSxDQUFDSyxJQUFMLEtBQWMsVUFBakIsRUFBNkI7QUFDNUJELGFBQVMsR0FBRyxTQUFaO0FBQ0E7O0FBRUQsV0FBU0UsV0FBVCxDQUFxQkMsS0FBckIsRUFDQTtBQUNDLFFBQUdBLEtBQUssWUFB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QUEwQ3ZQLE9BQTFDLEVBQ0E7QUFDQyxTQUFPdVAsVUFBVSxDQUFDeFAsSUFBRCxFQUFPQyxPQUFQLEVBQWdCLElBQWhCLENBQWpCO0FBQ0EsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBiaW5kKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB2YWx1ZVByb3AgPSAndmFsdWUnO1xuXG5cdGlmKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdHZhbHVlUHJvcCA9ICdjaGVja2VkJztcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dmFsdWUuYXBwbHkobnVsbCwgZXZlbnQuZGV0YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUobm9kZVt2YWx1ZVByb3BdKTtcblx0XHR9XG5cdH1cblxuXHRub2RlW3ZhbHVlUHJvcF0gPSB2YWx1ZSgpO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXHR9XG59XG4iLCJpbXBvcnQgeyB2YWx1ZSB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGh0bWwobm9kZSwgb3B0aW9ucywgaHRtbCwgcmVuZGVyKVxue1xuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9IHZhbHVlKGh0bWwpO1xuXHR9XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHQvLyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXHR9XG59XG4iLCJcbmV4cG9ydCB7IGJpbmQgfSBmcm9tICcuL2N1c3RvbS9iaW5kJztcbmV4cG9ydCB7IGh0bWwgfSBmcm9tICcuL2N1c3RvbS9odG1sJztcbmV4cG9ydCB7IHBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcblxuIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGJpbmQoZW50aXR5LCBkaXJlY3RpdmUpXG57XG5cdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG5cdFx0dmFsdWU6IGAoJHsgZGlyZWN0aXZlLnZhbHVlIH0pKClgLFxuXHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcblx0fTtcbn1cbiIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL2JpbmQnO1xuXG5leHBvcnQgeyBiaW5kIH1cbiIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9va3MoaG9va3MpXG57XG5cdGlmKCFob29rcy51bm1vdW50ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGNsZWFudXAoaG9va3MudW5tb3VudGVkKTtcbn1cbiIsImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuL3RyYWNrZXInO1xuXG5sZXQgdHJhY2tpbmcgPSBuZXcgVHJhY2tlcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdCgpXG57XG5cdHJldHVybiB0cmFja2luZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvb3QoZm4sIGN1c3RvbVBhcmVudCA9IG51bGwsIHRyYW5zUGFyZW50ID0gbnVsbClcbntcblx0bGV0IHByZXZUcmFja2luZyA9IHRyYWNraW5nO1xuXHRsZXQgbmV3VHJhY2tpbmcgPSBuZXcgVHJhY2tlcigpO1xuXG5cdGlmKGN1c3RvbVBhcmVudCkge1xuXHRcdGN1c3RvbVBhcmVudC5hZGRDaGlsZChuZXdUcmFja2luZyk7XG5cdH0gZWxzZSB7XG5cdFx0dHJhY2tpbmcuYWRkQ2hpbGQobmV3VHJhY2tpbmcpO1xuXHR9XG5cdFxuXHR0cmFja2luZyA9IG5ld1RyYWNraW5nO1xuXG5cdGxldCByZXN1bHQgPSBmbigoY2FsbGJhY2spID0+IHtcblx0XHRuZXdUcmFja2luZy5jbGVhbnVwKGNhbGxiYWNrKTtcblx0fSk7XG5cblx0dHJhY2tpbmcgPSBwcmV2VHJhY2tpbmc7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXAoZm4pXG57XG5cdHRyYWNraW5nLmRpc3Bvc2FsKGZuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih2YWx1ZS4kbykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2YWx1ZSlcbntcblx0ZnVuY3Rpb24gZGF0YShuZXh0VmFsdWUpXG5cdHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHZhbHVlID0gbmV4dFZhbHVlO1xuXG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4geyBvYnNlcnZlci5fZnJlc2ggPSBmYWxzZTsgfSk7XG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIoKSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRkYXRhLl9vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cdGRhdGEuJG8gPSB0cnVlO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZChvYnMsIHZhbHVlKVxue1xuXHRvYnMgPSBbXS5jb25jYXQob2JzKTtcblxuXHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdGlmKG9iLiRvICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG9iLl9vYnNlcnZlcnMuYWRkKHVwZGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGF0YSgpXG5cdHtcblx0XHRpZighdXBkYXRlLl9mcmVzaCkge1xuXHRcdFx0dXBkYXRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGUoKVxuXHR7XG5cdFx0dXBkYXRlLl9mcmVzaCA9IHRydWU7XG5cblx0XHRkYXRhLl9vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlcigpKTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGRhdGEuX29ic2VydmVycyA9IG5ldyBTZXQoKTtcblx0ZGF0YS4kbyA9IHRydWU7XG5cblx0dXBkYXRlKCk7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUob2JzLCB2YWx1ZSwgc2tpcCA9IGZhbHNlKVxue1xuXHRvYnMgPSBbXS5jb25jYXQob2JzKTtcblxuXHQvLyBjaGFuZ2Ugc3Vic2NyaWJlIGZ1bmN0aW9uIHRvIGxhc3QgdmFsdWUgbWVtb3JpemVcblx0bGV0IGxhc3RWYWx1ZSA9IG51bGw7XG5cblx0bGV0IGZuID0gKCkgPT4ge1xuXHRcdGxhc3RWYWx1ZSA9IHZhbHVlKGxhc3RWYWx1ZSk7XG5cdH1cblxuXHQvLyBBZGQgc3Vic2NyaWJlIHRvIG9ic2VydmVycyBvZiBvYnNlcnZhYmxlc1xuXHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdGlmKG9iLl9vYnNlcnZlcnMpIHtcblx0XHRcdG9iLl9vYnNlcnZlcnMuYWRkKGZuKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsIHN1YnNjcmliZSBpZiBub3Qgc2tpcHBpbmcgXG5cdGlmKCFza2lwKSB7XG5cdFx0Zm4oKTtcblx0fVxuXG5cdGxldCB1bnN1YnNjcmliZSA9ICgpID0+IHtcblx0XHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdFx0aWYob2IuX29ic2VydmVycykge1xuXHRcdFx0XHRvYi5fb2JzZXJ2ZXJzLmRlbGV0ZShmbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNsZWFudXAodW5zdWJzY3JpYmUpO1xuXG5cdHJldHVybiB1bnN1YnNjcmliZTtcbn1cblxuLy8gSXMgcHJvcGVydHkgb2JzZXJ2YWJsZSBcbmV4cG9ydCBmdW5jdGlvbiBpc09ic2VydmFibGUocHJvcClcbntcblx0aWYocHJvcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHByb3AuJG8gIT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBXYXRjaCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2gocHJvcCwgZm4sIHJlbmRlciA9IHRydWUpXG57XG5cdGlmKCFpc09ic2VydmFibGUocHJvcCkpIHtcblx0XHRpZihyZW5kZXIpIHtcblx0XHRcdGZuKHByb3ApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXG5cdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdFx0Zm4ocHJvcCgpKTtcblx0fSwgIXJlbmRlcik7XG59XG4iLCJleHBvcnQgY2xhc3MgVHJhY2tlciB7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwb3NhbHMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHRzZXRQYXJlbnQocGFyZW50KVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRhZGRDaGlsZCh0cmFja2VyKVxuXHR7XG5cdFx0dHJhY2tlci5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jaGlsZHJlbi5hZGQodHJhY2tlcik7XG5cdH1cblxuXHRkaXNwb3NhbChjbGVhbnVwKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2FkZCcsIGNsZWFudXAucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpXG5cdFx0dGhpcy5kaXNwb3NhbHMuYWRkKGNsZWFudXApO1xuXHR9XG5cblx0Y2xlYW51cChjYWxsYmFjaylcblx0e1xuXHRcdGxldCBtYXhEdXJhdGlvbiA9IDA7XG5cdFx0Ly8gY29uc29sZS53YXJuKCdjbGVhbnVwIHN0YXJ0JywgdGhpcyk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuZm9yRWFjaChkaXNwb3NhbCA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gZGlzcG9zYWwoKTtcblxuXHRcdFx0aWYocmVzdWx0ICYmIHJlc3VsdC5kdXJhdGlvbikge1xuXHRcdFx0XHRpZihyZXN1bHQuZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuXHRcdFx0XHRcdG1heER1cmF0aW9uID0gcmVzdWx0LmR1cmF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuY2xlYXIoKTtcblxuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRsZXQgZHVyYXRpb24gPSBjaGlsZC5jbGVhbnVwKCk7XG5cdFx0XHRpZihkdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdG1heER1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gdGhpcy5jaGlsZHJlbi5jbGVhcigpO1xuXG5cdFx0aWYodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LmNoaWxkcmVuLmRlbGV0ZSh0aGlzKTtcblx0XHR9XG5cblx0XHRkZWxldGUgdGhpcztcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCBtYXhEdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heER1cmF0aW9uO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb09iaihhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0ge307XG5cblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gT2JqZWN0LmFzc2lnbihyZXN1bHQsIGF0dHJBcmdUb09iaihhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0cmVzdWx0ID0gYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9TdHJpbmcoYXJncylcbntcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGF0dHJBcmdUb1N0cmluZyhhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJncykge1xuXHRcdFx0aWYoYXJnc1trZXldKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdC5wdXNoKGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IEFycmF5LmZyb20oXG5cdFx0XHRuZXcgU2V0KGF0dHJBcmdUb1N0cmluZyh2KSlcblx0XHQpO1xuXHRcdGxldCB0b1JlbW92ZSA9IGxhc3RDbGFzc0Fkb3B0ZWQuZmlsdGVyKHggPT4gIXRvU2V0LmluY2x1ZGVzKHgpKTtcblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1NldCkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1JlbW92ZSkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXHRcdH1cblxuXHRcdGxhc3RDbGFzc0Fkb3B0ZWQgPSB0b1NldDtcblx0fSwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IGF0dHJBcmdUb09iaih2KTtcblx0XHRmb3IobGV0IG5hbWUgaW4gc3R5bGVzKSB7XG5cdFx0XHRub2RlLnN0eWxlW25hbWVdID0gc3R5bGVzW25hbWVdO1xuXHRcdH1cblx0fSwgcmVuZGVyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMobm9kZSwgcmVuZGVyLCBhdHRycylcbntcblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYobmFtZSA9PT0gJ2NsYXNzJykge1xuXHRcdFx0bWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0XHRtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG5cdFx0XHR9LCByZW5kZXIpO1xuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4sIGhvb2tzLCBub2RlLCByZW5kZXIpXG57XG5cdGlmKGZuID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGZuKGhvb2tzLCBub2RlLCByZW5kZXIpO1xufVxuIiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEICsgJyc7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUiwgaWQpO1xuXHR9IGVsc2Uge1xuXHRcdGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUik7XG5cdH1cblxuXHRyZXR1cm4gaWQ7XG59XG4iLCJpbXBvcnQgeyBjbGVhbnVwIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZSgkaG9va3MsIGRpcmVjdGl2ZSwgbm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHVubW91bnRlZCA9IGRpcmVjdGl2ZShub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxuXG5cdGNsZWFudXAodW5tb3VudGVkKTtcbn1cbiIsImltcG9ydCB7IHJvb3QsIGdldFJvb3QgfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gJy4vbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cdFxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXG5cdFx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRcdHJvb3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKGMubm9kZSk7XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaChyb290Tm9kZSlcbntcblx0bGV0IHRtcCA9IHJvb3ROb2RlLmlubmVySFRNTDtcblx0cm9vdE5vZGUuaW5uZXJIVE1MID0gdG1wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG51bGwsIHJvb3ROb2RlLmZpcnN0Q2hpbGQpO1xuXG5cdFx0aWYoYy5ob29rcyAmJiBjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHJvb3QuY2xlYW51cCgpO1xuXHR9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufVxuIiwiZXhwb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJ1xuZXhwb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnXG5leHBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90J1xuZXhwb3J0IHsgZ2V0Tm9kZSwgcGFyc2VDb250ZXh0LCBnZXRQcm9wLCBzZXRSZWYsIHNldEtleSB9IGZyb20gJy4vdGVtcGxhdGVzJ1xuZXhwb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnXG5leHBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCdcbmV4cG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuZXhwb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBET01fSE9PS19BVFRSIH0gZnJvbSAnLi9jcmVhdGVDb21wb25lbnQnXG5leHBvcnQgeyBlbWl0IH0gZnJvbSAnLi9lbWl0J1xuZXhwb3J0IHsgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmV4cG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IHJlbmRlciwgaHlkcmF0ZSwgcmVmcmVzaCB9IGZyb20gJy4vZG9tJ1xuXG4vLyBleHBvcnQge1xuLy8gXHRhdHRycyxcbi8vIFx0ZXZlbnRzLFxuLy8gXHRzbG90LFxuLy8gXHRnZXROb2RlLCBzZXRSZWYsIHNldEtleSwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LFxuLy8gXHRzdGF0ZW1lbnQsXG4vLyBcdG1hcCxcbi8vIFx0ZGlyZWN0aXZlLFxuLy8gXHRjYWxsLFxuLy8gXHRlbWl0LFxuLy8gXHRsb2FkQ29tcG9uZW50LFxuLy8gXHRjcmVhdGVDb21wb25lbnQsXG4vLyBcdERPTV9IT09LX0FUVFJcbi8vIH1cbiIsImltcG9ydCB7IGNhc3ROb2RlIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmltcG9ydCB7IG1hbnVhbFBlcnNpc3RlbnQgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzTGF6eShjb21wb25lbnQpXG57XG5cdHJldHVybiBjb21wb25lbnQgaW5zdGFuY2VvZiBQcm9taXNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGF6eShjb21wb25lbnQsIGNhbGxiYWNrKVxue1xuXHRpZihpc0xhenkoY29tcG9uZW50KSkge1xuXHRcdGNvbXBvbmVudC50aGVuKChtb2R1bGUpID0+IHtcblx0XHRcdGNhbGxiYWNrKFxuXHRcdFx0XHRtb2R1bGUuZGVmYXVsdFxuXHRcdFx0KTtcblx0XHR9KTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGNhbGxiYWNrKFxuXHRcdGNvbXBvbmVudFxuXHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgZW5kTWFyayA9IGNhc3ROb2RlKCcnKTtcblx0bGV0IHN0YXJ0TWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHQvLyBjb25zb2xlLmxvZyhub2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XG5cblx0bm9kZS5hZnRlcihlbmRNYXJrKTtcblxuXHRpZihpc0xhenkoY29tcG9uZW50KSkge1xuXHRcdG5vZGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3RhcnRNYXJrLCBub2RlKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcblxuXHQvLyBsZXQgYyA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdGxhenkoY29tcG9uZW50LCAoY29tcG9uZW50KSA9PiB7XG5cdFx0bGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRcdGxldCBjb21wb25lbnROb2RlID0gYy5ub2RlO1xuXG5cdFx0aWYocmVuZGVyKSB7XG5cdFx0XHRub2RlLnJlcGxhY2VXaXRoKGMubm9kZSk7XG5cdFx0fVxuXG5cdFx0aWYoYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0XHR9XG5cblx0XHQvLyBlbmRNYXJrID0gY29tcG9uZW50Tm9kZTtcblx0fSk7XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZSwgZW5kTWFyaylcblxuXHQvLyBjb25zb2xlLmxvZyhlbmRNYXJrLCBlbmRNYXJrLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJpbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0Z2V0KGFbaV0sIGksIC0xLCBwYXJlbnQpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRnZXQoYVtpXSwgaSwgLTEsIHBhcmVudCk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgbWFudWFsUGVyc2lzdGVudCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUsIHJvb3QsIGdldFJvb3QgfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgIGdldFJvb3QgYXMgdHJhbnNSb290IH0gZnJvbSAnaGF3YS90cmFuc2l0aW9uJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGN1clRyYWNrZXIgPSBnZXRSb290KCk7Ly8hZXhwci4kdDtcblxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXG5cdC8vIGh5ZHJhdGlvbiBwcmVwYXJlIFxuXHRpZihyZW5kZXIpIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IF9pdGVtcyA9IHZhbHVlKGl0ZW1zKTtcblx0XHRsZXQgbm9kZSA9IGJpbmROb2RlO1xuXHRcdGxldCBsYXN0Tm9kZSA9IG51bGw7XG5cdFx0Ly8gcmV0dXJuO1xuXHRcdGZvciAobGV0IGtleSBpbiBfaXRlbXMpIHtcblx0XHRcdGxldCBpdGVtID0gX2l0ZW1zW2tleV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblx0XHRcdGxldCBsYXN0SHlkcmF0ZWROb2RlID0gbnVsbDtcblxuXHRcdFx0aWYobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZSkge1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSA9PSBpdGVtS2V5KSB7XG5cblx0XHRcdFx0XHRsYXN0SHlkcmF0ZWROb2RlID0gcm9vdChkaXNwb3NhbCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGl0ZW1LZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRcdHJldHVybiBleHByKG5vZGUsIGZhbHNlLCBpdGVtS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXG5cdFx0XHRcdFx0bGV0IG4gPSBtYW51YWxQZXJzaXN0ZW50KG5vZGUsIGxhc3RIeWRyYXRlZE5vZGUpXG5cblx0XHRcdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblx0XHRcdFx0XHRub2Rlcy5zZXQoaXRlbUtleSwgbik7XG5cblx0XHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ1toeWRyXScsIGl0ZW1LZXksIG4pXG5cblx0XHRcdFx0XHRub2RlID0gbGFzdEh5ZHJhdGVkTm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsYXN0Tm9kZSA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0aWYobGFzdE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHJlbmRlciA9IHRydWU7XG5cdFx0XHRiaW5kTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fVxuXHR9XG5cdFxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShpdGVtcywgYSA9PiB7XG5cblx0XHRsZXQgYiA9IHZhbHVlKGl0ZW1zKTtcblxuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdFx0Ly8gQXJyYXkuZnJvbSB0byBtYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBsaXN0LlxuXHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIGFkZE5vZGUsIGVuZE1hcmspXG5cdFx0KTtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRyZXR1cm4gY29udGVudDtcblx0XHQvLyB9KTtcblx0fSwgIXJlbmRlcik7XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1t1bnN1YnNjcmliZV0nLCB1bnN1YnNjcmliZSk7XG5cdC8vIFx0dW5zdWJzY3JpYmUoKTtcblx0Ly8gfSwgMjAwMClcblxuXHQvLyBpZihyZW5kZXIpIHtcblx0Ly8gXHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHQvLyB9XG5cblx0Ly8gZGlzcG9zZUFsbCgpO1xuXG5cdGZ1bmN0aW9uIGFkZE5vZGUoaXRlbSwga2V5LCBpLCBwYXJlbnQgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zYWwgPT4ge1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdHJldHVybiBleHByKG51bGwsIHRydWUsIG5vZGVLZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdHRvUmVtb3ZlLmFkZChub2RlS2V5KTtcblx0XHRcdFxuXHRcdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChub2RlS2V5KTtcblxuXHRcdFx0aWYoZGlzcG9zZXIpIHtcblx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LFxuXHRcdFx0XHRcdGRpc3Bvc2VyLmJpbmQobnVsbCwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZW5kTWFyay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpZmZhYmxlKG4sIC0xKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpZmZhYmxlKG4sIGkpO1xuXHR9XG5cblx0Ly8gY2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHQvLyBmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHQvLyBcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0Ly8gXHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0Ly8gXHRub2Rlcy5jbGVhcigpO1xuXHQvLyBcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufVxuIiwiaW1wb3J0IHsgc3Vic2NyaWJlLCByb290IH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIGNhc3ROb2RlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdHdoaWxlKHN0YXJ0ICE9PSBudWxsICYmICFzdGFydC5pc1NhbWVOb2RlKGVuZCkpIHtcblx0XHRub2Rlcy5wdXNoKHN0YXJ0KTtcblx0XHRzdGFydCA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuXHR9O1xuXG5cdG5vZGVzLnNoaWZ0KCk7XG5cblx0bGV0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIG5vZGVzWzBdO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcilcbntcblx0aWYocmVuZGVyKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgaW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1xuXHQvLyBsZXQgXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrLCBzdGFydE1hcms7XG5cblx0ZnVuY3Rpb24gY2xlYW51cCgpXG5cdHtcblx0XHRsZXQgY2xlYW5Ob2RlcyA9IGNyZWF0ZUluaXRGcmFnbWVudChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdHBhcmVudC5yZW1vdmVDaGlsZChkaWZmYWJsZShjbGVhbk5vZGVzLCAtMSkpO1xuXHR9XG5cdFxuXHRpZihyZW5kZXIpIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRzdGFydE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cdFx0cGxhY2Vob2xkZXIgPSBhZGQocGFyZW50LCBwbGFjZWhvbGRlcik7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdG5vZGUgPSBwbGFjZWhvbGRlcjtcblx0XHRcblx0XHRwYXJlbnQgPSBlbmRNYXJrLnBhcmVudE5vZGU7XG5cblx0XHRjbGVhbnVwKCk7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdHN0YXJ0TWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoc3RhcnRNYXJrLCBub2RlKTtcblx0fVxuXG5cdGxldCBsYXN0Q29uZGl0aW9uSW5kZXggPSBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKTtcblxuXHRsZXQgaXNGaXJzdENhbGwgPSB0cnVlO1xuXG5cdC8vIG9icyB0cmFja2Vyc1xuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHQvLyAuY2xlYXIoKTtcblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoY2xlYW51cCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0bGV0IG4gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdHRvUmVtb3ZlLmFkZChpKTtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGksIGRpc3Bvc2UpO1xuXHRcdFx0XHRcdHJldHVybiByZW5kZXJGbihzdGFydE1hcmsubmV4dFNpYmxpbmcsIGxhc3RDb25kaXRpb25JbmRleCAhPT0gaSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGlzRmlyc3RDYWxsICYmICFyZW5kZXIpIHtcblx0XHRcdGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRcdGlmKGxhc3RDb25kaXRpb25JbmRleCA9PT0gbnVsbCkge1xuXHRcdFx0XHRuID0gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS5sb2cobGFzdENvbmRpdGlvbkluZGV4LCBuLCBlbmRNYXJrKVxuXHRcdFx0bi5hZnRlcihlbmRNYXJrKTtcblxuXHRcdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBoYXNSZW5kZXJlZCA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAhPT0gbGFzdENvbmRpdGlvbkluZGV4O1xuXG5cdFx0bGFzdENvbmRpdGlvbkluZGV4ID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdGlmKCFoYXNSZW5kZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuZXcgbm9kZXNcblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGRpZmZhYmxlKG4sIDEpLCBlbmRNYXJrKTtcblx0fSk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRjdXN0b21Jbml0ID0gY29udGV4dC4kY3VzdG9tSW5pdCB8fCBudWxsO1xuXHRcblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRjdXN0b21Jbml0LFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZyYWcodmFsdWUpIHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSB2YWx1ZTtcblx0aWYgKCFjaGlsZE5vZGVzIHx8IHZhbHVlLm5vZGVUeXBlICE9PSAxMSkgcmV0dXJuO1xuXHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggPCAyKSB7XG5cdFx0cmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdH1cblxuXHQvLyBGb3IgYSBmcmFnbWVudCBvZiAyIGVsZW1lbnRzIG9yIG1vcmUgYWRkIGEgc3RhcnRNYXJrLiBUaGlzIGlzIHJlcXVpcmVkXG5cdC8vIGZvciBtdWx0aXBsZSBuZXN0ZWQgY29uZGl0aW9uYWwgY29tcHV0ZWRzIHRoYXQgcmV0dXJuIGZyYWdtZW50cy5cblx0Y29uc3QgX3N0YXJ0TWFyayA9IGFkZCh2YWx1ZSwgJycsIGNoaWxkTm9kZXNbMF0pO1xuXG5cdHJldHVybiB7XG5cdFx0X3N0YXJ0TWFya1xuXHR9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGFyZW50LCB2YWx1ZSwgZW5kTWFyayA9IG51bGwpIHtcblx0dmFsdWUgPSBjYXN0Tm9kZSh2YWx1ZSk7XG5cblx0Y29uc3QgZnJhZ09yTm9kZSA9IGZyYWcodmFsdWUpIHx8IHZhbHVlO1xuXG5cdC8vIElmIGVuZE1hcmsgaXMgYG51bGxgLCB2YWx1ZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdHBhcmVudC5pbnNlcnRCZWZvcmUodmFsdWUsIGVuZE1hcmsgJiYgZW5kTWFyay5wYXJlbnROb2RlICYmIGVuZE1hcmspO1xuXG5cdHJldHVybiBmcmFnT3JOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdE5vZGUodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXHR9XG5cdGlmICghKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkpIHtcblx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IGNyZWF0ZXMgYSBEb2N1bWVudEZyYWdtZW50LlxuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KFt2YWx1ZV0pO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCBzdGFydE5vZGUsIGVuZE1hcmspIHtcblx0Ly8gY29uc29sZS53YXJuKHN0YXJ0Tm9kZSwgZW5kTWFyaylcblx0d2hpbGUgKHN0YXJ0Tm9kZSAmJiAhc3RhcnROb2RlLmlzU2FtZU5vZGUoZW5kTWFyaykpIHtcblx0XHQvLyBjb25zb2xlLmxvZyhzdGFydE5vZGUpO1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5cblxuZXhwb3J0IGNvbnN0IG1hbnVhbFBlcnNpc3RlbnQgPSAoc3RhcnQsIGVuZCkgPT4ge1xuXHRpZihzdGFydC5pc1NhbWVOb2RlKGVuZCkpIHtcblx0XHRyZXR1cm4gc3RhcnQ7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlOiAxMTEsXG5cdFx0X2ZpcnN0Q2hpbGQ6IHN0YXJ0LFxuXHRcdF9sYXN0Q2hpbGQ6IGVuZCxcblx0fTtcbn1cblxuZXhwb3J0IGNvbnN0IHBlcnNpc3RlbnQgPSAoZnJhZ21lbnQpID0+IHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSBmcmFnbWVudDtcblx0Y29uc3QgeyBsZW5ndGggfSA9IGNoaWxkTm9kZXM7XG5cdC8vIElmIHRoZSBmcmFnbWVudCBoYXMgbm8gY29udGVudFxuXHQvLyBpdCBzaG91bGQgcmV0dXJuIHVuZGVmaW5lZCBhbmQgYnJlYWtcblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHRjb25zdCBub2RlcyA9IEFycmF5LmZyb20oY2hpbGROb2Rlcyk7XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHRcdF92YWx1ZU9mKCkge1xuXHRcdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoICE9PSBsZW5ndGgpIHtcblx0XHRcdFx0bGV0IGkgPSAwO1xuXHRcdFx0XHR3aGlsZSAoaSA8IGxlbmd0aCkgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZXNbaSsrXSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZnJhZ21lbnQ7XG5cdFx0fSxcblx0fTtcbn07XG4iLCJleHBvcnQge1xuXHRyZW5kZXIsXG5cdGh5ZHJhdGUsXG5cdHJlZnJlc2hcbn0gZnJvbSAnaGF3YS9yZW5kZXInOyIsImNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBnZXREdXJhdGlvbihub2RlLCBhY3RpdmVDbGFzcywgb3V0KVxue1xuXHRsZXQgY2FjaGVkID0gY2FjaGUuZ2V0KGFjdGl2ZUNsYXNzKTtcblxuXHRpZihjYWNoZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cblx0bGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0bXAuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcylcblx0XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRtcClcblxuXHRsZXQgZHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKHRtcCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuXG5cdHRtcC5yZW1vdmUoKTtcblxuXHRkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24ucmVwbGFjZSgvW14wLTlcXC5dL2csICcnKSkgKiAxMDAwO1xuXHRcblx0Y2FjaGUuc2V0KGFjdGl2ZUNsYXNzLCBkdXJhdGlvbik7XG5cblx0cmV0dXJuIGR1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlZChub2RlLCBuYW1lLCBvdXQgPSBmYWxzZSkge1xuXHRsZXQgcHJlZml4ID0gJ2VudGVyJztcblxuXHRpZiAob3V0KSB7XG5cdFx0cHJlZml4ID0gJ2xlYXZlJztcblx0fVxuXG5cdGxldCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblxuXHRsZXQgYWN0aXZlQ2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9LWFjdGl2ZWA7XG5cdGxldCBzdGFydENsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfWA7XG5cdGxldCBmaW5pc2hDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH0tdG9gO1xuXG5cdGxldCBkdXJhdGlvbiA9IGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG5cblx0bm9kZS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcblx0bm9kZS5jbGFzc0xpc3QuYWRkKHN0YXJ0Q2xhc3MpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZChmaW5pc2hDbGFzcyk7XG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXJ0Q2xhc3MpO1xuXHR9LCAyMCk7XG5cblx0Ly8gY2xlYW51cFxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShmaW5pc2hDbGFzcyk7XG5cdH0sIGR1cmF0aW9uKVxuXG5cdHJldHVybiB7XG5cdFx0ZHVyYXRpb25cblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwIH0pXG57XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWZmZWN0LFxuXHRcdGNzczoge1xuXG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBjbGVhbnVwIH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcbmV4cG9ydCB7IGZhZGUgfSBmcm9tICcuL2ZhZGUnO1xuZXhwb3J0IHsgY2xhc3NlZCB9IGZyb20gJy4vY2xhc3NlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5vZGUsIHRfaW4sIHRfaW5fb3B0cywgdF9vdXQsIHRfb3V0X29wdHMpXG57XG5cdGlmKHRfaW4pIHtcblx0XHR0cmFuc2l0aW9uX2luKG5vZGUsIHRfaW4sIHRfaW5fb3B0cylcblx0fVxuXG5cdGlmKHRfb3V0KSB7XG5cdFx0Y2xlYW51cChcblx0XHRcdHRyYW5zaXRpb25fb3V0LmJpbmQobnVsbCwgbm9kZSwgdF9vdXQsIHRfb3V0X29wdHMpXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKG5vZGUsIHRyYW5zaXRpb24sIG9wdGlvbnMpXG57XG5cdHJldHVybiB0cmFuc2l0aW9uKG5vZGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zLCB0cnVlKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==