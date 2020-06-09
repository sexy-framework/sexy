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
exports.createHooks = createHooks;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function createHooks(hooks, id) {
  if (!hooks.unmounted) {
    return;
  }

  (0, _observable.cleanup)(hooks.unmounted);
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
      console.log(maxDuration, callback);
    }

    return maxDuration;
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
      get(a[i], i, -1);
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
        get(a[i], i, -1);
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

var _transition = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");
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
      var disposer = disposers.get(nodeKey);

      if (disposer) {
        disposers.set(nodeKey, disposer.bind(null, function () {
          endMark.parentNode.removeChild((0, _utils.diffable)(n, i));
        }));
      }
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

/***/ }),

/***/ "./packages/transition/dist/fade.js":
/*!******************************************!*\
  !*** ./packages/transition/dist/fade.js ***!
  \******************************************/
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

/***/ "./packages/transition/dist/index.js":
/*!*******************************************!*\
  !*** ./packages/transition/dist/index.js ***!
  \*******************************************/
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

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _fade = __webpack_require__(/*! ./fade */ "./packages/transition/dist/fade.js");

function transition(node, t_in, t_in_opts, t_out, t_out_opts) {
  if (t_in) {
    transition_in(t_in, node);
  }

  if (t_out) {
    (0, _observable.cleanup)(transition_out.bind(null, t_out, node));
  }
}

function transition_in(transition, node) {
  // console.log('animate_in', node);
  node.style.opacity = 0;
  node.style.transitionProperty = 'opacity';
  node.style.transitionTimingFunction = 'ease-in';
  node.style.transitionDuration = '400ms';
  setTimeout(function () {
    node.style.opacity = 1;
  }, 50); // tracker.children.add(transition);
}

function transition_out(transition, node) {
  // console.log('animate_out', node);
  node.style.opacity = 1;
  node.style.transitionProperty = 'opacity';
  node.style.transitionTimingFunction = 'ease-in';
  node.style.transitionDuration = '400ms';
  setTimeout(function () {
    node.style.opacity = 0;
  }, 0);
  return {
    duration: 400
  }; // tracker.children.add(transition);
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvZmFkZS5qcyJdLCJuYW1lcyI6WyJ2YWx1ZVByb3AiLCJub2RlIiwiZXZlbnQiLCJ2YWx1ZSIsImRpcmVjdGl2ZXMiLCJiaW5kIiwiZW50aXR5RGlyZWN0aXZlcyIsImVudGl0eSIsImNvbnNvbGUiLCJkaXJlY3RpdmUiLCJpc0V4cHJlc3Npb24iLCJob29rcyIsInRyYWNraW5nIiwiVHJhY2tlciIsImN1c3RvbVBhcmVudCIsInRyYW5zUGFyZW50IiwicHJldlRyYWNraW5nIiwibmV3VHJhY2tpbmciLCJyZXN1bHQiLCJmbiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsInVuc3Vic2NyaWJlIiwiY2xlYW51cCIsInByb3AiLCJyZW5kZXIiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzZXRQYXJlbnQiLCJhZGRDaGlsZCIsInRyYWNrZXIiLCJkaXNwb3NhbCIsIm1heER1cmF0aW9uIiwiZHVyYXRpb24iLCJjaGlsZCIsInNldFRpbWVvdXQiLCJBcnJheSIsImkiLCJhcmdzIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0IiwidG9SZW1vdmUiLCJuYW1lIiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwiRE9NX0hPT0tfQVRUUiIsIkhBV0FfSUQiLCJpZCIsInVubW91bnRlZCIsInJvb3QiLCJjIiwiY29tcG9uZW50Iiwicm9vdE5vZGUiLCJkZXRhaWwiLCJvcHRpb25zIiwiY29tcG9uZW50Tm9kZSIsIm1hcmsiLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsImdldCIsInBhcmVudCIsImtleV9hRWxtIiwia2V5X2JFbG0iLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwiY3VyVHJhY2tlciIsImRpc3Bvc2VycyIsIm5vZGVzIiwiZGVmYXVsdEEiLCJkb2N1bWVudCIsImVuZE1hcmsiLCJiaW5kTm9kZSIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiZXhwciIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJuIiwiY2hpbGROb2RlcyIsImNvbnRlbnQiLCJlbCIsIm5vZGVLZXkiLCJkaXNwb3NlciIsIiRzbG90cyIsImNhbGxiYWNrIiwic2xvdE5vZGVzIiwic3RhcnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJub2RlVHlwZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJjbGVhbk5vZGVzIiwiY3JlYXRlSW5pdEZyYWdtZW50IiwicGxhY2Vob2xkZXIiLCJzdGFydE1hcmsiLCJsYXN0Q29uZGl0aW9uSW5kZXgiLCJnZXRJbml0VmFsdWUiLCJpc0ZpcnN0Q2FsbCIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImhhc1JlbmRlcmVkIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiLCJfc3RhcnRNYXJrIiwiYWRkIiwiY2FzdE5vZGUiLCJmcmFnT3JOb2RlIiwiZnJhZyIsInN0YXJ0Tm9kZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJfdmFsdWVPZiIsImRlbGF5IiwiZWZmZWN0IiwiY3NzIiwidHJhbnNpdGlvbl9pbiIsInRyYW5zaXRpb25fb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyw0Q0FDUDtBQUNDLE1BQUlBLFNBQVMsR0FBYjs7QUFFQSxNQUFHQyxJQUFJLENBQUpBLFNBQUgsWUFBNkI7QUFDNUJELGFBQVMsR0FBVEE7QUFDQTs7QUFFRCw4QkFDQTtBQUNDLFFBQUdFLEtBQUssWUFBUixhQUFpQztBQUNoQ0MsV0FBSyxDQUFMQSxZQUFrQkQsS0FBSyxDQUF2QkM7QUFERCxXQUVPO0FBQ05BLFdBQUssQ0FBQ0YsSUFBSSxDQUFWRSxTQUFVLENBQUwsQ0FBTEE7QUFDQTtBQUNEOztBQUVERixNQUFJLENBQUpBLFNBQUksQ0FBSkEsR0FBa0JFLEtBQWxCRjtBQUVBQSxNQUFJLENBQUpBO0FBRUEsU0FB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LENBQUMsWUFBTTtBQUNoQnhDLFFBQUksQ0FBSkE7QUFEUyxLQVBYLEVBT1csQ0FBVndDLENBUEQsQ0FVQztBQUVBOztBQUVELDBDQUNBO0FBQ0M7QUFFQXhDLE1BQUksQ0FBSkE7QUFDQUEsTUFBSSxDQUFKQTtBQUNBQSxNQUFJLENBQUpBO0FBQ0FBLE1BQUksQ0FBSkE7QUFFQXdDLFlBQVUsQ0FBQyxZQUFNO0FBQ2hCeEMsUUFBSSxDQUFKQTtBQURTLEtBQVZ3QyxDQUFVLENBQVZBO0FBSUEsU0FBTztBQUNORixZQUFRLEVBQUU7QUFESixHQUFQLENBWkQsQ0FlQztBQUNBLEMiLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUnO1xuXG4vLyBzdGF0aWMgcGFyc2VyKGVudGl0eSlcbi8vIFx0e1xuLy8gXHRcdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGxldCBtb2RlbERpcmVjdGl2ZSA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1tNb2RlbC5nZXROYW1lKCldO1xuXG4vLyBcdFx0aWYobW9kZWxEaXJlY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG4vLyBcdFx0XHR2YWx1ZTogYCgkeyBtb2RlbERpcmVjdGl2ZS52YWx1ZS52YWx1ZSB9KSgpYCxcbi8vIFx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcbi8vIFx0XHR9O1xuXHRcdFxuLy8gXHRcdC8vIGdldFxuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVudGl0eS5vcHRpb24pO1xuLy8gXHR9XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB2YWx1ZVByb3AgPSAndmFsdWUnO1xuXG5cdGlmKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdHZhbHVlUHJvcCA9ICdjaGVja2VkJztcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dmFsdWUuYXBwbHkobnVsbCwgZXZlbnQuZGV0YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUobm9kZVt2YWx1ZVByb3BdKTtcblx0XHR9XG5cdH1cblxuXHRub2RlW3ZhbHVlUHJvcF0gPSB2YWx1ZSgpO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXHR9XG59IiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuZXhwb3J0IHsgZmFkZSB9IGZyb20gJy4vZmFkZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5vZGUsIHRfaW4sIHRfaW5fb3B0cywgdF9vdXQsIHRfb3V0X29wdHMpXG57XG5cdGlmKHRfaW4pIHtcblx0XHR0cmFuc2l0aW9uX2luKHRfaW4sIG5vZGUpXG5cdH1cblxuXHRpZih0X291dCkge1xuXHRcdGNsZWFudXAoXG5cdFx0XHR0cmFuc2l0aW9uX291dC5iaW5kKG51bGwsIHRfb3V0LCBub2RlKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbih0cmFuc2l0aW9uLCBub2RlKVxue1xuXHQvLyBjb25zb2xlLmxvZygnYW5pbWF0ZV9pbicsIG5vZGUpO1xuXHRub2RlLnN0eWxlLm9wYWNpdHkgPSAwO1xuXHRub2RlLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9ICdvcGFjaXR5Jztcblx0bm9kZS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1pbic7XG5cdG5vZGUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzQwMG1zJztcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLnN0eWxlLm9wYWNpdHkgPSAxO1xuXHR9LCA1MClcblx0Ly8gdHJhY2tlci5jaGlsZHJlbi5hZGQodHJhbnNpdGlvbik7XG5cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQodHJhbnNpdGlvbiwgbm9kZSlcbntcblx0Ly8gY29uc29sZS5sb2coJ2FuaW1hdGVfb3V0Jywgbm9kZSk7XG5cblx0bm9kZS5zdHlsZS5vcGFjaXR5ID0gMTtcblx0bm9kZS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnb3BhY2l0eSc7XG5cdG5vZGUuc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gJ2Vhc2UtaW4nO1xuXHRub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc0MDBtcyc7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bm9kZS5zdHlsZS5vcGFjaXR5ID0gMDtcblx0fSwgMClcblxuXHRyZXR1cm4ge1xuXHRcdGR1cmF0aW9uOiA0MDBcblx0fVxuXHQvLyB0cmFja2VyLmNoaWxkcmVuLmFkZCh0cmFuc2l0aW9uKTtcbn1cblxuIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImV4cG9ydCBjbGFzcyBUcmFja2VyIHtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0XHR0aGlzLmRpc3Bvc2FscyA9IG5ldyBTZXQoKTtcblx0fVxuXG5cdHNldFBhcmVudChwYXJlbnQpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGFkZENoaWxkKHRyYWNrZXIpXG5cdHtcblx0XHR0cmFja2VyLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmNoaWxkcmVuLmFkZCh0cmFja2VyKTtcblx0fVxuXG5cdGRpc3Bvc2FsKGNsZWFudXApXG5cdHtcblx0XHQvLyBjb25zb2xlLmxvZygnYWRkJywgY2xlYW51cC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSlcblx0XHR0aGlzLmRpc3Bvc2Fscy5hZGQoY2xlYW51cCk7XG5cdH1cblxuXHRjbGVhbnVwKGNhbGxiYWNrKVxuXHR7XG5cdFx0bGV0IG1heER1cmF0aW9uID0gMDtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2NsZWFudXAgc3RhcnQnLCB0aGlzKTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5mb3JFYWNoKGRpc3Bvc2FsID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBkaXNwb3NhbCgpO1xuXG5cdFx0XHRpZihyZXN1bHQgJiYgcmVzdWx0LmR1cmF0aW9uKSB7XG5cdFx0XHRcdGlmKHJlc3VsdC5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdFx0bWF4RHVyYXRpb24gPSByZXN1bHQuZHVyYXRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5jbGVhcigpO1xuXG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGxldCBkdXJhdGlvbiA9IGNoaWxkLmNsZWFudXAoKTtcblx0XHRcdGlmKGR1cmF0aW9uID4gbWF4RHVyYXRpb24pIHtcblx0XHRcdFx0bWF4RHVyYXRpb24gPSBkdXJhdGlvbjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyB0aGlzLmNoaWxkcmVuLmNsZWFyKCk7XG5cblx0XHRpZih0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4uZGVsZXRlKHRoaXMpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIG1heER1cmF0aW9uKTtcblx0XHRcdGNvbnNvbGUubG9nKG1heER1cmF0aW9uLCBjYWxsYmFjaylcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4RHVyYXRpb247XG5cdH1cblxufSIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEICsgJyc7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUiwgaWQpO1xuXHR9IGVsc2Uge1xuXHRcdGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUik7XG5cdH1cblxuXHRyZXR1cm4gaWQ7XG59IiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0Y2xlYW51cCh1bm1vdW50ZWQpO1xufVxuIiwiaW1wb3J0IHsgcm9vdCwgZ2V0Um9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgcm9vdE5vZGUpXG57XG5cdGxldCByb290ID0gZ2V0Um9vdCgpO1xuXHRsZXQgYyA9IGNvbXBvbmVudCgpO1xuXG5cdHJvb3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXHRyb290Tm9kZS5hcHBlbmRDaGlsZChjLm5vZGUpO1xuXG5cdGlmKGMuaG9va3MubW91bnRlZCkge1xuXHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHR9XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoeWRyYXRlKGNvbXBvbmVudCwgcm9vdE5vZGUpXG57XG5cdGxldCB0bXAgPSByb290Tm9kZS5pbm5lckhUTUw7XG5cdHJvb3ROb2RlLmlubmVySFRNTCA9IHRtcDtcblxuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblxuXHRsZXQgYyA9IGNvbXBvbmVudChudWxsLCByb290Tm9kZS5maXJzdENoaWxkKTtcblxuXHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cm9vdC5jbGVhbnVwKCk7XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRkaXNwYXRjaEhvb2ssXG59IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGMubm9kZTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdGNvbXBvbmVudE5vZGUgPSBtYXJrO1xuXHR9XG5cblx0aWYoYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0Yy5ob29rcy5tb3VudGVkKCk7XG5cdH1cblx0Ly8gZGlzcGF0Y2hIb29rKGMuaWQsICdtb3VudGVkJyk7XG5cblx0cmV0dXJuIGNvbXBvbmVudE5vZGU7XG59IiwiaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHZhbHVlLCByb290LCBnZXRSb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyAgZ2V0Um9vdCBhcyB0cmFuc1Jvb3QgfSBmcm9tICdAaGF3YS90cmFuc2l0aW9uJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGN1clRyYWNrZXIgPSBnZXRSb290KCk7Ly8hZXhwci4kdDtcblxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXG5cdC8vIGh5ZHJhdGlvbiBwcmVwYXJlIFxuXHRpZihyZW5kZXIpIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cblx0XHQvLyBjb25zb2xlLmxvZygnc3RhcnQgZWFjaCcsIHBhcmVudCwgZW5kTWFyaylcblx0fSBlbHNlIHtcblx0XHRsZXQgX2l0ZW1zID0gdmFsdWUoaXRlbXMpO1xuXHRcdGxldCBub2RlID0gYmluZE5vZGU7XG5cdFx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblx0XHQvLyByZXR1cm47XG5cdFx0Zm9yIChsZXQga2V5IGluIF9pdGVtcykge1xuXHRcdFx0bGV0IGl0ZW0gPSBfaXRlbXNba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGxhc3RIeWRyYXRlZE5vZGUgPSBudWxsO1xuXG5cdFx0XHRpZihub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblxuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaXRlbUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cHIobm9kZSwgZmFsc2UsIGl0ZW1LZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0XHRub2RlID0gbGFzdEh5ZHJhdGVkTm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ2xhc3RIeWRyYXRlZE5vZGUnLCBsYXN0SHlkcmF0ZWROb2RlLCBub2RlKVxuXHRcdFx0XHRcdGxhc3ROb2RlID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZihsYXN0SHlkcmF0ZWROb2RlICYmIGxhc3RIeWRyYXRlZE5vZGUuaGFzQXR0cmlidXRlKSB7XG5cdFx0XHRcdGxldCBoeWRyYXRlZE5vZGVzID0gW107XG5cblx0XHRcdFx0aWYoIWxhc3RIeWRyYXRlZE5vZGUuaGFzQXR0cmlidXRlKCdkYXRhLWtleScpKSB7XG5cdFx0XHRcdFx0bGV0IHN0YXJ0Tm9kZVNlYXJjaCA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cdFx0XHRcdFx0d2hpbGUoc3RhcnROb2RlU2VhcmNoKSB7XG5cdFx0XHRcdFx0XHRoeWRyYXRlZE5vZGVzLnVuc2hpZnQoc3RhcnROb2RlU2VhcmNoKTtcblx0XHRcdFx0XHRcdGlmKHN0YXJ0Tm9kZVNlYXJjaC5oYXNBdHRyaWJ1dGUoJ2RhdGEta2V5JykpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHN0YXJ0Tm9kZVNlYXJjaCA9IHN0YXJ0Tm9kZVNlYXJjaC5wcmV2aW91c1NpYmxpbmc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVmYXVsdEFba2V5XSA9IGl0ZW07XG5cblx0XHRcdFx0bGV0IG4gPSBsYXN0SHlkcmF0ZWROb2RlO1xuXG5cdFx0XHRcdGlmKGh5ZHJhdGVkTm9kZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdG4gPSBwZXJzaXN0ZW50KHtcblx0XHRcdFx0XHRcdGNoaWxkTm9kZXM6IGh5ZHJhdGVkTm9kZXNcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0bm9kZXMuc2V0KGl0ZW1LZXksIG4pO1xuXHRcdFx0XHRkaWZmYWJsZShuLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBjb25zb2xlLmxvZyhkZWZhdWx0QSk7XG5cblx0XHRlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0aWYobGFzdE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHJlbmRlciA9IHRydWU7XG5cdFx0XHRiaW5kTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUuZXJyb3IoYmluZE5vZGUsIGxhc3ROb2RlLCBlbmRNYXJrLCBlbmRNYXJrLnBhcmVudE5vZGUpO1xuXHRcdC8vIGVuZE1hcmsgPSBhZGQobGFzdE5vZGUsICcnKTtcblx0fVxuXHRcblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoaXRlbXMsIGEgPT4ge1xuXG5cdFx0bGV0IGIgPSB2YWx1ZShpdGVtcyk7XG5cblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHRcdC8vIEFycmF5LmZyb20gdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgbGlzdC5cblx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdGRpZmYoZW5kTWFyay5wYXJlbnROb2RlLCBhIHx8IGRlZmF1bHRBLCBiLCBrZXlFeHByLCBhZGROb2RlLCBlbmRNYXJrKVxuXHRcdCk7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0Ly8gfSk7XG5cdH0sICFyZW5kZXIpO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbdW5zdWJzY3JpYmVdJywgdW5zdWJzY3JpYmUpO1xuXHQvLyBcdHVuc3Vic2NyaWJlKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0Ly8gaWYocmVuZGVyKSB7XG5cdC8vIFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblx0Ly8gfVxuXG5cdC8vIGRpc3Bvc2VBbGwoKTtcblxuXHRmdW5jdGlvbiBhZGROb2RlKGl0ZW0sIGtleSwgaSwgZWwgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zYWwgPT4ge1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdHJldHVybiBleHByKG51bGwsIHRydWUsIG5vZGVLZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXHRcdFx0XHRcblx0XHRcdFx0bm9kZXMuc2V0KG5vZGVLZXksIG4pO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGkgPT09IC0xKSB7XG5cdFx0XHR0b1JlbW92ZS5hZGQobm9kZUtleSk7XG5cdFx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KG5vZGVLZXkpO1xuXHRcdFx0aWYoZGlzcG9zZXIpIHtcblx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LFxuXHRcdFx0XHRcdGRpc3Bvc2VyLmJpbmQobnVsbCwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZW5kTWFyay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpZmZhYmxlKG4sIGkpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpZmZhYmxlKG4sIGkpO1xuXHR9XG5cblx0Ly8gY2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHQvLyBmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHQvLyBcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0Ly8gXHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0Ly8gXHRub2Rlcy5jbGVhcigpO1xuXHQvLyBcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSwgcm9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgY2FzdE5vZGUgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0d2hpbGUoc3RhcnQgIT09IG51bGwgJiYgIXN0YXJ0LmlzU2FtZU5vZGUoZW5kKSkge1xuXHRcdG5vZGVzLnB1c2goc3RhcnQpO1xuXHRcdHN0YXJ0ID0gc3RhcnQubmV4dFNpYmxpbmc7XG5cdH07XG5cblx0bm9kZXMuc2hpZnQoKTtcblxuXHRsZXQgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gbm9kZXNbMF07XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKVxue1xuXHRpZihyZW5kZXIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBpbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XG5cdC8vIGxldCBcblx0bGV0IHBhcmVudDtcblx0bGV0IGVuZE1hcmssIHN0YXJ0TWFyaztcblxuXHRmdW5jdGlvbiBjbGVhbnVwKClcblx0e1xuXHRcdGxldCBjbGVhbk5vZGVzID0gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0cGFyZW50LnJlbW92ZUNoaWxkKGRpZmZhYmxlKGNsZWFuTm9kZXMsIC0xKSk7XG5cdH1cblx0XG5cdGlmKHJlbmRlcikge1xuXHRcdGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG5cdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdHN0YXJ0TWFyayA9IGFkZChwYXJlbnQsICcnKTtcblx0XHRwbGFjZWhvbGRlciA9IGFkZChwYXJlbnQsIHBsYWNlaG9sZGVyKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXG5cdFx0bm9kZSA9IHBsYWNlaG9sZGVyO1xuXHRcdFxuXHRcdHBhcmVudCA9IGVuZE1hcmsucGFyZW50Tm9kZTtcblxuXHRcdGNsZWFudXAoKTtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0c3RhcnRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0bGV0IGxhc3RDb25kaXRpb25JbmRleCA9IGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpO1xuXG5cdGxldCBpc0ZpcnN0Q2FsbCA9IHRydWU7XG5cblx0Ly8gb2JzIHRyYWNrZXJzXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cdC8vIC5jbGVhcigpO1xuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcihjbGVhbnVwKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRsZXQgbiA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zZSA9PiB7XG5cdFx0XHRcdFx0dG9SZW1vdmUuYWRkKGkpO1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlbmRlckZuKHN0YXJ0TWFyay5uZXh0U2libGluZywgbGFzdENvbmRpdGlvbkluZGV4ICE9PSBpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoaXNGaXJzdENhbGwgJiYgIXJlbmRlcikge1xuXHRcdFx0ZW5kTWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdFx0aWYobGFzdENvbmRpdGlvbkluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdG4gPSBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhsYXN0Q29uZGl0aW9uSW5kZXgsIG4sIGVuZE1hcmspXG5cdFx0XHRuLmFmdGVyKGVuZE1hcmspO1xuXG5cdFx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGhhc1JlbmRlcmVkID0gY3VycmVudENvbmRpdGlvbkluZGV4ICE9PSBsYXN0Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRsYXN0Q29uZGl0aW9uSW5kZXggPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0aWYoIWhhc1JlbmRlcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIG5ldyBub2Rlc1xuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZGlmZmFibGUobiwgMSksIGVuZE1hcmspO1xuXHR9KTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdGRlbGF5LFxuXHRcdGR1cmF0aW9uLFxuXHRcdGVmZmVjdCxcblx0XHRjc3M6IHtcblxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=