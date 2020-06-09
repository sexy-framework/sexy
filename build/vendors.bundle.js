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

function createHooks(hooks) {
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
exports.refresh = refresh;
exports.hydrate = hydrate;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _load = __webpack_require__(/*! ./load */ "./packages/render/dist/load.js");

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
Object.defineProperty(exports, "refresh", {
  enumerable: true,
  get: function get() {
    return _dom.refresh;
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
exports.isLazy = isLazy;
exports.lazy = lazy;
exports.loadComponent = loadComponent;

var _utils = __webpack_require__(/*! ./utils.js */ "./packages/render/dist/utils.js");

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

/***/ "./packages/render/dist/map/index.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/map/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/render/dist/map/diff.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/dist/utils.js");

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _transition = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");

var _time = _interopRequireDefault(__webpack_require__(/*! ../../../../test/time */ "./test/time.js"));
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

/***/ "./packages/transition/dist/classed.js":
/*!*********************************************!*\
  !*** ./packages/transition/dist/classed.js ***!
  \*********************************************/
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
Object.defineProperty(exports, "classed", {
  enumerable: true,
  get: function get() {
    return _classed.classed;
  }
});

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _fade = __webpack_require__(/*! ./fade */ "./packages/transition/dist/fade.js");

var _classed = __webpack_require__(/*! ./classed */ "./packages/transition/dist/classed.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZhZGUuanMiXSwibmFtZXMiOlsidmFsdWVQcm9wIiwibm9kZSIsImV2ZW50IiwidmFsdWUiLCJkaXJlY3RpdmVzIiwiYmluZCIsImVudGl0eURpcmVjdGl2ZXMiLCJlbnRpdHkiLCJjb25zb2xlIiwiZGlyZWN0aXZlIiwiaXNFeHByZXNzaW9uIiwiaG9va3MiLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJjdXN0b21QYXJlbnQiLCJ0cmFuc1BhcmVudCIsInByZXZUcmFja2luZyIsIm5ld1RyYWNraW5nIiwicmVzdWx0IiwiZm4iLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsImNsZWFudXAiLCJwcm9wIiwicmVuZGVyIiwiaXNPYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwic2V0UGFyZW50IiwiYWRkQ2hpbGQiLCJ0cmFja2VyIiwiZGlzcG9zYWwiLCJtYXhEdXJhdGlvbiIsImR1cmF0aW9uIiwiY2hpbGQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJpIiwiYXJncyIsImF0dHJBcmdUb09iaiIsImF0dHJBcmdUb1N0cmluZyIsImxhc3RDbGFzc0Fkb3B0ZWQiLCJ0bXAiLCJ0b1NldCIsInRvUmVtb3ZlIiwibmFtZSIsInN0eWxlcyIsImF0dHJzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIkRPTV9IT09LX0FUVFIiLCJIQVdBX0lEIiwiaWQiLCJ1bm1vdW50ZWQiLCJyb290IiwiYyIsImNvbXBvbmVudCIsInJvb3ROb2RlIiwiZGV0YWlsIiwib3B0aW9ucyIsImlzTGF6eSIsImNhbGxiYWNrIiwibW9kdWxlIiwiZW5kTWFyayIsInN0YXJ0TWFyayIsImxhenkiLCJjb21wb25lbnROb2RlIiwiYUlkeCIsImJJZHgiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImN1clRyYWNrZXIiLCJkaXNwb3NlcnMiLCJub2RlcyIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJiaW5kTm9kZSIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiZXhwciIsIm4iLCJjb250ZW50Iiwibm9kZUtleSIsImRpc3Bvc2VyIiwiJHNsb3RzIiwic2xvdE5vZGVzIiwic3RhcnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJub2RlVHlwZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJjbGVhbk5vZGVzIiwiY3JlYXRlSW5pdEZyYWdtZW50IiwicGxhY2Vob2xkZXIiLCJsYXN0Q29uZGl0aW9uSW5kZXgiLCJnZXRJbml0VmFsdWUiLCJpc0ZpcnN0Q2FsbCIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsImhhc1JlbmRlcmVkIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiLCJjaGlsZE5vZGVzIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwibWFudWFsUGVyc2lzdGVudCIsImVuZCIsInBlcnNpc3RlbnQiLCJmcmFnbWVudCIsIl92YWx1ZU9mIiwiY2FjaGUiLCJjYWNoZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsIm91dCIsInByZWZpeCIsImFjdGl2ZUNsYXNzIiwic3RhcnRDbGFzcyIsImZpbmlzaENsYXNzIiwiZ2V0RHVyYXRpb24iLCJkZWxheSIsImVmZmVjdCIsImNzcyIsInRyYW5zaXRpb25faW4iLCJ0cmFuc2l0aW9uX291dCIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsTUFBSUEsU0FBUyxHQUFiOztBQUVBLE1BQUdDLElBQUksQ0FBSkEsU0FBSCxZQUE2QjtBQUM1QkQsYUFBUyxHQUFUQTtBQUNBOztBQUVELDhCQUNBO0FBQ0MsUUFBR0UsS0FBSyxZQUFSLGFBQWlDO0FB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QSxZQUFVLENBQUMsWUFBTTtBQUNoQnhDLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQTtBQUZTLEtBQVZ3QyxRQUFVLENBQVZBO0FBS0EsU0FBTztBQUNORixZQUFRLEVBQVJBO0FBRE0sR0FBUDtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRE0sMEJBQ1A7QUFBQSx3QkFENkJrSCxLQUM3QjtBQUFBLE1BRDZCQSxLQUM3QiwyQkFEcUMsQ0FDckM7QUFBQSwyQkFEd0NsSCxRQUN4QztBQUFBLE1BRHdDQSxRQUN4Qyw4QkFEbUQsR0FDbkQ7QUFDQyxTQUFPO0FBQ05rSCxTQUFLLEVBREM7QUFFTmxILFlBQVEsRUFGRjtBQUdObUgsVUFBTSxFQUhBO0FBSU5DLE9BQUcsRUFBRTtBQUpDLEdBQVA7QUFRQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FwQlZEOztBQUNBOztBQUNBOztBQUVPLDhEQUNQO0FBQ0MsWUFBUztBQUNSQyxpQkFBYSxhQUFiQSxTQUFhLENBQWJBO0FBQ0E7O0FBRUQsYUFBVTtBQUNULDZCQUNDQyxjQUFjLENBQWRBLHdCQURELFVBQ0NBLENBREQ7QUFHQTtBQUNEOztBQUVELGtEQUNBO0FBQ0MsU0FBT0MsVUFBVSxPQUFqQixPQUFpQixDQUFqQjtBQUNBOztBQUVELG1EQUNBO0FBQ0MsU0FBT0EsVUFBVSxnQkFBakIsSUFBaUIsQ0FBakI7QUFDQSxDIiwiZmlsZSI6InZlbmRvcnMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlJztcblxuLy8gc3RhdGljIHBhcnNlcihlbnRpdHkpXG4vLyBcdHtcbi8vIFx0XHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRsZXQgbW9kZWxEaXJlY3RpdmUgPSBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXNbTW9kZWwuZ2V0TmFtZSgpXTtcblxuLy8gXHRcdGlmKG1vZGVsRGlyZWN0aXZlID09PSB1bmRlZmluZWQpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuLy8gXHRcdFx0dmFsdWU6IGAoJHsgbW9kZWxEaXJlY3RpdmUudmFsdWUudmFsdWUgfSkoKWAsXG4vLyBcdFx0XHRpc0V4cHJlc3Npb246IHRydWUsXG4vLyBcdFx0fTtcblx0XHRcbi8vIFx0XHQvLyBnZXRcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbnRpdHkub3B0aW9uKTtcbi8vIFx0fVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZChub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdmFsdWVQcm9wID0gJ3ZhbHVlJztcblxuXHRpZihub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHR2YWx1ZVByb3AgPSAnY2hlY2tlZCc7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShldmVudClcblx0e1xuXHRcdGlmKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdHZhbHVlLmFwcGx5KG51bGwsIGV2ZW50LmRldGFpbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlKG5vZGVbdmFsdWVQcm9wXSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZVt2YWx1ZVByb3BdID0gdmFsdWUoKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblx0fVxufSIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmV4cG9ydCB7IGZhZGUgfSBmcm9tICcuL2ZhZGUnO1xuZXhwb3J0IHsgY2xhc3NlZCB9IGZyb20gJy4vY2xhc3NlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5vZGUsIHRfaW4sIHRfaW5fb3B0cywgdF9vdXQsIHRfb3V0X29wdHMpXG57XG5cdGlmKHRfaW4pIHtcblx0XHR0cmFuc2l0aW9uX2luKG5vZGUsIHRfaW4sIHRfaW5fb3B0cylcblx0fVxuXG5cdGlmKHRfb3V0KSB7XG5cdFx0Y2xlYW51cChcblx0XHRcdHRyYW5zaXRpb25fb3V0LmJpbmQobnVsbCwgbm9kZSwgdF9vdXQsIHRfb3V0X29wdHMpXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKG5vZGUsIHRyYW5zaXRpb24sIG9wdGlvbnMpXG57XG5cdHJldHVybiB0cmFuc2l0aW9uKG5vZGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zLCB0cnVlKTtcbn1cblxuIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImV4cG9ydCBjbGFzcyBUcmFja2VyIHtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0XHR0aGlzLmRpc3Bvc2FscyA9IG5ldyBTZXQoKTtcblx0fVxuXG5cdHNldFBhcmVudChwYXJlbnQpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGFkZENoaWxkKHRyYWNrZXIpXG5cdHtcblx0XHR0cmFja2VyLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmNoaWxkcmVuLmFkZCh0cmFja2VyKTtcblx0fVxuXG5cdGRpc3Bvc2FsKGNsZWFudXApXG5cdHtcblx0XHQvLyBjb25zb2xlLmxvZygnYWRkJywgY2xlYW51cC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSlcblx0XHR0aGlzLmRpc3Bvc2Fscy5hZGQoY2xlYW51cCk7XG5cdH1cblxuXHRjbGVhbnVwKGNhbGxiYWNrKVxuXHR7XG5cdFx0bGV0IG1heER1cmF0aW9uID0gMDtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2NsZWFudXAgc3RhcnQnLCB0aGlzKTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5mb3JFYWNoKGRpc3Bvc2FsID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBkaXNwb3NhbCgpO1xuXG5cdFx0XHRpZihyZXN1bHQgJiYgcmVzdWx0LmR1cmF0aW9uKSB7XG5cdFx0XHRcdGlmKHJlc3VsdC5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdFx0bWF4RHVyYXRpb24gPSByZXN1bHQuZHVyYXRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5jbGVhcigpO1xuXG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGxldCBkdXJhdGlvbiA9IGNoaWxkLmNsZWFudXAoKTtcblx0XHRcdGlmKGR1cmF0aW9uID4gbWF4RHVyYXRpb24pIHtcblx0XHRcdFx0bWF4RHVyYXRpb24gPSBkdXJhdGlvbjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyB0aGlzLmNoaWxkcmVuLmNsZWFyKCk7XG5cblx0XHRpZih0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4uZGVsZXRlKHRoaXMpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIG1heER1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4RHVyYXRpb247XG5cdH1cblxufSIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEICsgJyc7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUiwgaWQpO1xuXHR9IGVsc2Uge1xuXHRcdGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUik7XG5cdH1cblxuXHRyZXR1cm4gaWQ7XG59IiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0Y2xlYW51cCh1bm1vdW50ZWQpO1xufVxuIiwiaW1wb3J0IHsgcm9vdCwgZ2V0Um9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gJy4vbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cdFxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXG5cdFx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRcdHJvb3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKGMubm9kZSk7XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaChyb290Tm9kZSlcbntcblx0bGV0IHRtcCA9IHJvb3ROb2RlLmlubmVySFRNTDtcblx0cm9vdE5vZGUuaW5uZXJIVE1MID0gdG1wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG51bGwsIHJvb3ROb2RlLmZpcnN0Q2hpbGQpO1xuXG5cdFx0aWYoYy5ob29rcyAmJiBjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHJvb3QuY2xlYW51cCgpO1xuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiaW1wb3J0IHsgY2FzdE5vZGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuaW1wb3J0IHsgbWFudWFsUGVyc2lzdGVudCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMYXp5KGNvbXBvbmVudClcbntcblx0cmV0dXJuIGNvbXBvbmVudCBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5KGNvbXBvbmVudCwgY2FsbGJhY2spXG57XG5cdGlmKGlzTGF6eShjb21wb25lbnQpKSB7XG5cdFx0Y29tcG9uZW50LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soXG5cdFx0XHRcdG1vZHVsZS5kZWZhdWx0XG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2FsbGJhY2soXG5cdFx0Y29tcG9uZW50XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBlbmRNYXJrID0gY2FzdE5vZGUoJycpO1xuXHRsZXQgc3RhcnRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcblxuXHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXG5cdGlmKGlzTGF6eShjb21wb25lbnQpKSB7XG5cdFx0bm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdC8vIGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0bGF6eShjb21wb25lbnQsIChjb21wb25lbnQpID0+IHtcblx0XHRsZXQgYyA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdFx0bGV0IGNvbXBvbmVudE5vZGUgPSBjLm5vZGU7XG5cblx0XHRpZihyZW5kZXIpIHtcblx0XHRcdG5vZGUucmVwbGFjZVdpdGgoYy5ub2RlKTtcblx0XHR9XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblxuXHRcdC8vIGVuZE1hcmsgPSBjb21wb25lbnROb2RlO1xuXHR9KTtcblxuXHQvLyBjb25zb2xlLmxvZyhub2RlLCBlbmRNYXJrKVxuXG5cdC8vIGNvbnNvbGUubG9nKGVuZE1hcmssIGVuZE1hcmsucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdGdldChhW2ldLCBpLCAtMSwgcGFyZW50KTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0Z2V0KGFbaV0sIGksIC0xLCBwYXJlbnQpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIG1hbnVhbFBlcnNpc3RlbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHZhbHVlLCByb290LCBnZXRSb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyAgZ2V0Um9vdCBhcyB0cmFuc1Jvb3QgfSBmcm9tICdAaGF3YS90cmFuc2l0aW9uJztcblxuaW1wb3J0IHRpbWUgZnJvbSAnLi4vLi4vLi4vLi4vdGVzdC90aW1lJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGN1clRyYWNrZXIgPSBnZXRSb290KCk7Ly8hZXhwci4kdDtcblxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXG5cdC8vIGh5ZHJhdGlvbiBwcmVwYXJlIFxuXHRpZihyZW5kZXIpIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IF9pdGVtcyA9IHZhbHVlKGl0ZW1zKTtcblx0XHRsZXQgbm9kZSA9IGJpbmROb2RlO1xuXHRcdGxldCBsYXN0Tm9kZSA9IG51bGw7XG5cdFx0Ly8gcmV0dXJuO1xuXHRcdGZvciAobGV0IGtleSBpbiBfaXRlbXMpIHtcblx0XHRcdGxldCBpdGVtID0gX2l0ZW1zW2tleV07XG5cdFx0XHRsZXQgaXRlbUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblx0XHRcdGxldCBsYXN0SHlkcmF0ZWROb2RlID0gbnVsbDtcblxuXHRcdFx0aWYobm9kZSAmJiBub2RlLmdldEF0dHJpYnV0ZSkge1xuXHRcdFx0XHRpZihub2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1rZXknKSA9PSBpdGVtS2V5KSB7XG5cblx0XHRcdFx0XHRsYXN0SHlkcmF0ZWROb2RlID0gcm9vdChkaXNwb3NhbCA9PiB7XG5cdFx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGl0ZW1LZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRcdHJldHVybiBleHByKG5vZGUsIGZhbHNlLCBpdGVtS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXG5cdFx0XHRcdFx0bGV0IG4gPSBtYW51YWxQZXJzaXN0ZW50KG5vZGUsIGxhc3RIeWRyYXRlZE5vZGUpXG5cblx0XHRcdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblx0XHRcdFx0XHRub2Rlcy5zZXQoaXRlbUtleSwgbik7XG5cblx0XHRcdFx0XHQvLyBjb25zb2xlLndhcm4oJ1toeWRyXScsIGl0ZW1LZXksIG4pXG5cblx0XHRcdFx0XHRub2RlID0gbGFzdEh5ZHJhdGVkTm9kZS5uZXh0U2libGluZztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRsYXN0Tm9kZSA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0aWYobGFzdE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHJlbmRlciA9IHRydWU7XG5cdFx0XHRiaW5kTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fVxuXHR9XG5cdFxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShpdGVtcywgYSA9PiB7XG5cblx0XHRsZXQgYiA9IHZhbHVlKGl0ZW1zKTtcblxuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdFx0Ly8gQXJyYXkuZnJvbSB0byBtYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBsaXN0LlxuXHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIGFkZE5vZGUsIGVuZE1hcmspXG5cdFx0KTtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRyZXR1cm4gY29udGVudDtcblx0XHQvLyB9KTtcblx0fSwgIXJlbmRlcik7XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1t1bnN1YnNjcmliZV0nLCB1bnN1YnNjcmliZSk7XG5cdC8vIFx0dW5zdWJzY3JpYmUoKTtcblx0Ly8gfSwgMjAwMClcblxuXHQvLyBpZihyZW5kZXIpIHtcblx0Ly8gXHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHQvLyB9XG5cblx0Ly8gZGlzcG9zZUFsbCgpO1xuXG5cdGZ1bmN0aW9uIGFkZE5vZGUoaXRlbSwga2V5LCBpLCBwYXJlbnQgPSBudWxsKSB7XG5cdFx0aWYgKGl0ZW0gPT0gbnVsbCkgcmV0dXJuO1xuXG5cdFx0bGV0IG5vZGVLZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cblx0XHRsZXQgbiA9IG5vZGVzLmdldChub2RlS2V5KTtcblx0XHRpZiAoaSA9PT0gMSkge1xuXHRcdFx0dG9SZW1vdmUuZGVsZXRlKGl0ZW0pO1xuXG5cdFx0XHRpZiAoIW4pIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zYWwgPT4ge1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdHJldHVybiBleHByKG51bGwsIHRydWUsIG5vZGVLZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdH0sIGN1clRyYWNrZXIpO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRub2Rlcy5zZXQobm9kZUtleSwgbik7XG5cdFx0XHRcdFxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdHRvUmVtb3ZlLmFkZChub2RlS2V5KTtcblx0XHRcdFxuXHRcdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChub2RlS2V5KTtcblxuXHRcdFx0aWYoZGlzcG9zZXIpIHtcblx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LFxuXHRcdFx0XHRcdGRpc3Bvc2VyLmJpbmQobnVsbCwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0ZW5kTWFyay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpZmZhYmxlKG4sIC0xKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRpZmZhYmxlKG4sIGkpO1xuXHR9XG5cblx0Ly8gY2xlYW51cChkaXNwb3NlQWxsKTtcblxuXHQvLyBmdW5jdGlvbiBkaXNwb3NlQWxsKCkge1xuXHQvLyBcdGRpc3Bvc2Vycy5mb3JFYWNoKGQgPT4gZCgpKTtcblx0Ly8gXHRkaXNwb3NlcnMuY2xlYXIoKTtcblx0Ly8gXHRub2Rlcy5jbGVhcigpO1xuXHQvLyBcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHRcdG5vZGVzLmRlbGV0ZShpdGVtKTtcblx0fVxuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNsb3QoJHNsb3RzLCBuYW1lLCBub2RlLCByZW5kZXIsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBzbG90Tm9kZXMgPSAkc2xvdHNbbmFtZV0oKTtcblx0Ly8gY29uc29sZS5sb2cobm9kZSxzbG90Tm9kZXMsIHJlbmRlcilcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRub2RlLmFwcGVuZENoaWxkKHNsb3ROb2Rlcyk7XG5cdH1cblx0XG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSwgcm9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgY2FzdE5vZGUgfSBmcm9tICcuLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0d2hpbGUoc3RhcnQgIT09IG51bGwgJiYgIXN0YXJ0LmlzU2FtZU5vZGUoZW5kKSkge1xuXHRcdG5vZGVzLnB1c2goc3RhcnQpO1xuXHRcdHN0YXJ0ID0gc3RhcnQubmV4dFNpYmxpbmc7XG5cdH07XG5cblx0bm9kZXMuc2hpZnQoKTtcblxuXHRsZXQgbGVuZ3RoID0gbm9kZXMubGVuZ3RoO1xuXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gbm9kZXNbMF07XG5cdGNvbnN0IF9maXJzdENoaWxkID0gbm9kZXNbMF07XG5cdGNvbnN0IF9sYXN0Q2hpbGQgPSBub2Rlc1tsZW5ndGggLSAxXTtcblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKVxue1xuXHRpZihyZW5kZXIpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGxldCBpbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGluZGV4ID0gaTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBpbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCByZW5kZXIsIGRlcHMsIC4uLmFyZ3MpXG57XG5cdC8vIGxldCBcblx0bGV0IHBhcmVudDtcblx0bGV0IGVuZE1hcmssIHN0YXJ0TWFyaztcblxuXHRmdW5jdGlvbiBjbGVhbnVwKClcblx0e1xuXHRcdGxldCBjbGVhbk5vZGVzID0gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0TWFyaywgZW5kTWFyayk7XG5cdFx0cGFyZW50LnJlbW92ZUNoaWxkKGRpZmZhYmxlKGNsZWFuTm9kZXMsIC0xKSk7XG5cdH1cblx0XG5cdGlmKHJlbmRlcikge1xuXHRcdGxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG5cdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdHN0YXJ0TWFyayA9IGFkZChwYXJlbnQsICcnKTtcblx0XHRwbGFjZWhvbGRlciA9IGFkZChwYXJlbnQsIHBsYWNlaG9sZGVyKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXG5cdFx0bm9kZSA9IHBsYWNlaG9sZGVyO1xuXHRcdFxuXHRcdHBhcmVudCA9IGVuZE1hcmsucGFyZW50Tm9kZTtcblxuXHRcdGNsZWFudXAoKTtcblx0fSBlbHNlIHtcblx0XHRwYXJlbnQgPSBub2RlLnBhcmVudE5vZGU7XG5cdFx0c3RhcnRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0bGV0IGxhc3RDb25kaXRpb25JbmRleCA9IGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpO1xuXG5cdGxldCBpc0ZpcnN0Q2FsbCA9IHRydWU7XG5cblx0Ly8gb2JzIHRyYWNrZXJzXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cdC8vIC5jbGVhcigpO1xuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcihjbGVhbnVwKTtcblx0XHRcdGRpc3Bvc2Vycy5kZWxldGUoaXRlbSk7XG5cdFx0fVxuXHR9XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRsZXQgbiA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0biA9IHJvb3QoZGlzcG9zZSA9PiB7XG5cdFx0XHRcdFx0dG9SZW1vdmUuYWRkKGkpO1xuXHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaSwgZGlzcG9zZSk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlbmRlckZuKHN0YXJ0TWFyay5uZXh0U2libGluZywgbGFzdENvbmRpdGlvbkluZGV4ICE9PSBpKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYoaXNGaXJzdENhbGwgJiYgIXJlbmRlcikge1xuXHRcdFx0ZW5kTWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdFx0aWYobGFzdENvbmRpdGlvbkluZGV4ID09PSBudWxsKSB7XG5cdFx0XHRcdG4gPSBub2RlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhsYXN0Q29uZGl0aW9uSW5kZXgsIG4sIGVuZE1hcmspXG5cdFx0XHRuLmFmdGVyKGVuZE1hcmspO1xuXG5cdFx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bGV0IGhhc1JlbmRlcmVkID0gY3VycmVudENvbmRpdGlvbkluZGV4ICE9PSBsYXN0Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRsYXN0Q29uZGl0aW9uSW5kZXggPSBjdXJyZW50Q29uZGl0aW9uSW5kZXg7XG5cblx0XHRpc0ZpcnN0Q2FsbCA9IGZhbHNlO1xuXG5cdFx0aWYoIWhhc1JlbmRlcmVkKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gYWRkIG5ldyBub2Rlc1xuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZGlmZmFibGUobiwgMSksIGVuZE1hcmspO1xuXHR9KTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHQvLyBjb25zb2xlLndhcm4oc3RhcnROb2RlLCBlbmRNYXJrKVxuXHR3aGlsZSAoc3RhcnROb2RlICYmICFzdGFydE5vZGUuaXNTYW1lTm9kZShlbmRNYXJrKSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHN0YXJ0Tm9kZSk7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cblxuXG5leHBvcnQgY29uc3QgbWFudWFsUGVyc2lzdGVudCA9IChzdGFydCwgZW5kKSA9PiB7XG5cdGlmKHN0YXJ0LmlzU2FtZU5vZGUoZW5kKSkge1xuXHRcdHJldHVybiBzdGFydDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZDogc3RhcnQsXG5cdFx0X2xhc3RDaGlsZDogZW5kLFxuXHR9O1xufVxuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5mdW5jdGlvbiBnZXREdXJhdGlvbihub2RlLCBhY3RpdmVDbGFzcywgb3V0KVxue1xuXHRsZXQgY2FjaGVkID0gY2FjaGUuZ2V0KGFjdGl2ZUNsYXNzKTtcblxuXHRpZihjYWNoZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkO1xuXHR9XG5cblx0bGV0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHR0bXAuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcylcblx0XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kKHRtcClcblxuXHRsZXQgZHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKHRtcCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuXG5cdHRtcC5yZW1vdmUoKTtcblxuXHRkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24ucmVwbGFjZSgvW14wLTlcXC5dL2csICcnKSkgKiAxMDAwO1xuXHRcblx0Y2FjaGUuc2V0KGFjdGl2ZUNsYXNzLCBkdXJhdGlvbik7XG5cblx0cmV0dXJuIGR1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlZChub2RlLCBuYW1lLCBvdXQgPSBmYWxzZSkge1xuXHRsZXQgcHJlZml4ID0gJ2VudGVyJztcblxuXHRpZiAob3V0KSB7XG5cdFx0cHJlZml4ID0gJ2xlYXZlJztcblx0fVxuXG5cdGxldCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblxuXHRsZXQgYWN0aXZlQ2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9LWFjdGl2ZWA7XG5cdGxldCBzdGFydENsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfWA7XG5cdGxldCBmaW5pc2hDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH0tdG9gO1xuXG5cdGxldCBkdXJhdGlvbiA9IGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG5cblx0bm9kZS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcblx0bm9kZS5jbGFzc0xpc3QuYWRkKHN0YXJ0Q2xhc3MpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZChmaW5pc2hDbGFzcyk7XG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXJ0Q2xhc3MpO1xuXHR9LCAyMCk7XG5cblx0Ly8gY2xlYW51cFxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShmaW5pc2hDbGFzcyk7XG5cdH0sIGR1cmF0aW9uKVxuXG5cdHJldHVybiB7XG5cdFx0ZHVyYXRpb25cblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwIH0pXG57XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWZmZWN0LFxuXHRcdGNzczoge1xuXG5cdFx0fVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==