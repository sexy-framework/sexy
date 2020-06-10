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

/***/ "./packages/render/src/attrs.js":
/*!**************************************!*\
  !*** ./packages/render/src/attrs.js ***!
  \**************************************/
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

/***/ "./packages/render/src/call.js":
/*!*************************************!*\
  !*** ./packages/render/src/call.js ***!
  \*************************************/
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

/***/ "./packages/render/src/createComponent.js":
/*!************************************************!*\
  !*** ./packages/render/src/createComponent.js ***!
  \************************************************/
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

/***/ "./packages/render/src/directive.js":
/*!******************************************!*\
  !*** ./packages/render/src/directive.js ***!
  \******************************************/
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

/***/ "./packages/render/src/dom.js":
/*!************************************!*\
  !*** ./packages/render/src/dom.js ***!
  \************************************/
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

var _load = __webpack_require__(/*! ./load */ "./packages/render/src/load.js");

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

/***/ "./packages/render/src/emit.js":
/*!*************************************!*\
  !*** ./packages/render/src/emit.js ***!
  \*************************************/
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

/***/ "./packages/render/src/events.js":
/*!***************************************!*\
  !*** ./packages/render/src/events.js ***!
  \***************************************/
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

/***/ "./packages/render/src/index.js":
/*!**************************************!*\
  !*** ./packages/render/src/index.js ***!
  \**************************************/
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

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/render/src/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/render/src/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/src/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/render/src/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/src/statement/index.js");

var _map = __webpack_require__(/*! ./map */ "./packages/render/src/map/index.js");

var _directive = __webpack_require__(/*! ./directive */ "./packages/render/src/directive.js");

var _createComponent = __webpack_require__(/*! ./createComponent */ "./packages/render/src/createComponent.js");

var _emit = __webpack_require__(/*! ./emit */ "./packages/render/src/emit.js");

var _call = __webpack_require__(/*! ./call */ "./packages/render/src/call.js");

var _load = __webpack_require__(/*! ./load */ "./packages/render/src/load.js");

var _dom = __webpack_require__(/*! ./dom */ "./packages/render/src/dom.js");

/***/ }),

/***/ "./packages/render/src/load.js":
/*!*************************************!*\
  !*** ./packages/render/src/load.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLazy = isLazy;
exports.lazy = lazy;
exports.loadComponent = loadComponent;

var _utils = __webpack_require__(/*! ./utils.js */ "./packages/render/src/utils.js");

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

/***/ "./packages/render/src/map/diff.js":
/*!*****************************************!*\
  !*** ./packages/render/src/map/diff.js ***!
  \*****************************************/
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

/***/ "./packages/render/src/map/index.js":
/*!******************************************!*\
  !*** ./packages/render/src/map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/render/src/map/diff.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/src/utils.js");

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

/***/ "./packages/render/src/slot.js":
/*!*************************************!*\
  !*** ./packages/render/src/slot.js ***!
  \*************************************/
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

/***/ "./packages/render/src/statement/index.js":
/*!************************************************!*\
  !*** ./packages/render/src/statement/index.js ***!
  \************************************************/
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

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/src/utils.js");

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

/***/ "./packages/render/src/templates.js":
/*!******************************************!*\
  !*** ./packages/render/src/templates.js ***!
  \******************************************/
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

/***/ "./packages/render/src/utils.js":
/*!**************************************!*\
  !*** ./packages/render/src/utils.js ***!
  \**************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9yZW5kZXIvc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvbWFwL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvcmVuZGVyL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvc3RhdGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3JlbmRlci9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jbGFzc2VkLmpzIiwid2VicGFjazovLy8uLi9zcmMvZmFkZS5qcyJdLCJuYW1lcyI6WyJ2YWx1ZVByb3AiLCJub2RlIiwiZXZlbnQiLCJ2YWx1ZSIsImRpcmVjdGl2ZXMiLCJiaW5kIiwiZW50aXR5RGlyZWN0aXZlcyIsImVudGl0eSIsImNvbnNvbGUiLCJkaXJlY3RpdmUiLCJpc0V4cHJlc3Npb24iLCJob29rcyIsInRyYWNraW5nIiwiVHJhY2tlciIsImN1c3RvbVBhcmVudCIsInRyYW5zUGFyZW50IiwicHJldlRyYWNraW5nIiwibmV3VHJhY2tpbmciLCJyZXN1bHQiLCJmbiIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsInVuc3Vic2NyaWJlIiwiY2xlYW51cCIsInByb3AiLCJyZW5kZXIiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJzZXRQYXJlbnQiLCJhZGRDaGlsZCIsInRyYWNrZXIiLCJkaXNwb3NhbCIsIm1heER1cmF0aW9uIiwiZHVyYXRpb24iLCJjaGlsZCIsInNldFRpbWVvdXQiLCJhdHRyQXJnVG9PYmoiLCJhcmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImxlbmd0aCIsImF0dHJBcmdUb1N0cmluZyIsImNvbmNhdCIsImtleSIsInB1c2giLCJtYWtlQ2xhc3MiLCJsYXN0Q2xhc3NBZG9wdGVkIiwidiIsInRtcCIsImNsYXNzTGlzdCIsInRvU2V0IiwiZnJvbSIsIlNldCIsInRvUmVtb3ZlIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwibmFtZSIsImFkZCIsInJlbW92ZSIsIm1ha2VTdHlsZXMiLCJzdHlsZXMiLCJzdHlsZSIsImF0dHJzIiwic2V0QXR0cmlidXRlIiwiY2FsbCIsIkRPTV9IT09LX0FUVFIiLCJIQVdBX0lEIiwiY3JlYXRlQ29tcG9uZW50IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCIkaG9va3MiLCJvcHRpb25zIiwidW5tb3VudGVkIiwiY29tcG9uZW50Iiwicm9vdE5vZGUiLCJyb290IiwiYyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibW91bnRlZCIsInJlZnJlc2giLCJoeWRyYXRlIiwiZmlyc3RDaGlsZCIsImVtaXQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJldmVudHMiLCJhZGRFdmVudExpc3RlbmVyIiwiaXNMYXp5IiwiUHJvbWlzZSIsImxhenkiLCJjYWxsYmFjayIsInRoZW4iLCJtb2R1bGUiLCJkZWZhdWx0IiwibG9hZENvbXBvbmVudCIsImVuZE1hcmsiLCJzdGFydE1hcmsiLCJhZnRlciIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJjb21wb25lbnROb2RlIiwicmVwbGFjZVdpdGgiLCJkaWZmIiwicGFyZW50IiwiYSIsImIiLCJrZXlFeHByIiwiZ2V0IiwiYmVmb3JlIiwiYUlkeCIsIk1hcCIsImJJZHgiLCJqIiwic2V0IiwiYUVsbSIsImJFbG0iLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsInVuZGVmaW5lZCIsIm1hcCIsImJpbmROb2RlIiwiaXRlbXMiLCJleHByIiwiY3VyVHJhY2tlciIsImRpc3Bvc2VycyIsIm5vZGVzIiwiZGVmYXVsdEEiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsIm4iLCJuZXh0U2libGluZyIsImNyZWF0ZVRleHROb2RlIiwiY2xlYXIiLCJjb250ZW50IiwiYWRkTm9kZSIsImZvckVhY2giLCJkaXNwb3NlIiwibm9kZUtleSIsImRlbGV0ZSIsIm5vZGVUeXBlIiwiZGlzcG9zZXIiLCJyZW1vdmVDaGlsZCIsInNsb3QiLCIkc2xvdHMiLCJzbG90Tm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJzdGFydCIsImVuZCIsImlzU2FtZU5vZGUiLCJzaGlmdCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsImdldEluaXRWYWx1ZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJzdGF0ZW1lbnQiLCJkZXBzIiwiY2xlYW5Ob2RlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29tbWVudCIsImxhc3RDb25kaXRpb25JbmRleCIsImlzRmlyc3RDYWxsIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiaGFzUmVuZGVyZWQiLCJnZXROb2RlIiwidGVtcGxhdGUiLCJjbG9uZU5vZGUiLCJzZXRSZWYiLCIkcmVmcyIsInNldEtleSIsIiRrZXkiLCJnZXRQcm9wIiwiJHByb3BzIiwic2VlZCIsInBhcnNlQ29udGV4dCIsImNvbnRleHQiLCIkY3VzdG9tSW5pdCIsImZyYWciLCJjaGlsZE5vZGVzIiwiX3N0YXJ0TWFyayIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsIk5vZGUiLCJyZW1vdmVOb2RlcyIsInN0YXJ0Tm9kZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwiX3ZhbHVlT2YiLCJtYW51YWxQZXJzaXN0ZW50IiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwiY2FjaGUiLCJjYWNoZWQiLCJnZXRDb21wdXRlZFN0eWxlIiwicGFyc2VGbG9hdCIsIm91dCIsInByZWZpeCIsImFjdGl2ZUNsYXNzIiwic3RhcnRDbGFzcyIsImZpbmlzaENsYXNzIiwiZ2V0RHVyYXRpb24iLCJkZWxheSIsImVmZmVjdCIsImNzcyIsInRyYW5zaXRpb25faW4iLCJ0cmFuc2l0aW9uX291dCIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsTUFBSUEsU0FBUyxHQUFiOztBQUVBLE1BQUdDLElBQUksQ0FBSkEsU0FBSCxZQUE2QjtBQUM1QkQsYUFBUyxHQUFUQTtB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T0EsR0FBdEI7QUFFQSxNQUFJekIsUUFBUSxHQUFHbUwsV0FBVyxvQkFBMUIsR0FBMEIsQ0FBMUI7QUFFQXpOLE1BQUksQ0FBSkE7QUFDQUEsTUFBSSxDQUFKQTtBQUVBd0MsWUFBVSxDQUFDLFlBQU07QUFDaEJ4QyxRQUFJLENBQUpBO0FBQ0FBLFFBQUksQ0FBSkE7QUFGUyxLQWxCc0MsRUFrQnRDLENBQVZ3QyxDQWxCZ0QsQ0F1QmhEOztBQUNBQSxZQUFVLENBQUMsWUFBTTtBQUNoQnhDLFFBQUksQ0FBSkE7QUFDQUEsUUFBSSxDQUFKQTtBQUZTLEtBQVZ3QyxRQUFVLENBQVZBO0FBS0EsU0FBTztBQUNORixZQUFRLEVBQVJBO0FBRE0sR0FBUDtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRE0sMEJBQ1A7QUFBQSx3QkFENkJvTCxLQUM3QjtBQUFBLE1BRDZCQSxLQUM3QiwyQkFEcUMsQ0FDckM7QUFBQSwyQkFEd0NwTCxRQUN4QztBQUFBLE1BRHdDQSxRQUN4Qyw4QkFEbUQsR0FDbkQ7QUFDQyxTQUFPO0FBQ05vTCxTQUFLLEVBREM7QUFFTnBMLFlBQVEsRUFGRjtBQUdOcUwsVUFBTSxFQUhBO0FBSU5DLE9BQUcsRUFBRTtBQUpDLEdBQVA7QUFRQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FyQlZEOztBQUNBOztBQUNBOztBQUVPLDhEQUNQO0FBQ0MsWUFBUztBQUNSQyxpQkFBYSxhQUFiQSxTQUFhLENBQWJBO0FBQ0E7O0FBRUQsYUFBVTtBQUNULDZCQUNDQyxjQUFjLENBQWRBLHdCQURELFVBQ0NBLENBREQ7QUFHQTtBQUNEOztBQUVELGtEQUNBO0FBQ0MsU0FBT0MsVUFBVSxPQUFqQixPQUFpQixDQUFqQjtBQUNBOztBQUVELG1EQUNBO0FBQ0MsU0FBT0EsVUFBVSxnQkFBakIsSUFBaUIsQ0FBakI7QUFDQSxDIiwiZmlsZSI6InZlbmRvcnMuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlJztcblxuLy8gc3RhdGljIHBhcnNlcihlbnRpdHkpXG4vLyBcdHtcbi8vIFx0XHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRsZXQgbW9kZWxEaXJlY3RpdmUgPSBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXNbTW9kZWwuZ2V0TmFtZSgpXTtcblxuLy8gXHRcdGlmKG1vZGVsRGlyZWN0aXZlID09PSB1bmRlZmluZWQpIHtcbi8vIFx0XHRcdHJldHVybjtcbi8vIFx0XHR9XG5cbi8vIFx0XHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuLy8gXHRcdFx0dmFsdWU6IGAoJHsgbW9kZWxEaXJlY3RpdmUudmFsdWUudmFsdWUgfSkoKWAsXG4vLyBcdFx0XHRpc0V4cHJlc3Npb246IHRydWUsXG4vLyBcdFx0fTtcblx0XHRcbi8vIFx0XHQvLyBnZXRcbi8vIFx0XHQvLyBjb25zb2xlLmxvZyhlbnRpdHkub3B0aW9uKTtcbi8vIFx0fVxuXG5leHBvcnQgZnVuY3Rpb24gYmluZChub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdmFsdWVQcm9wID0gJ3ZhbHVlJztcblxuXHRpZihub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHR2YWx1ZVByb3AgPSAnY2hlY2tlZCc7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShldmVudClcblx0e1xuXHRcdGlmKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdHZhbHVlLmFwcGx5KG51bGwsIGV2ZW50LmRldGFpbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlKG5vZGVbdmFsdWVQcm9wXSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZVt2YWx1ZVByb3BdID0gdmFsdWUoKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblx0fVxufSIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmV4cG9ydCB7IGZhZGUgfSBmcm9tICcuL2ZhZGUnO1xuZXhwb3J0IHsgY2xhc3NlZCB9IGZyb20gJy4vY2xhc3NlZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2l0aW9uKG5vZGUsIHRfaW4sIHRfaW5fb3B0cywgdF9vdXQsIHRfb3V0X29wdHMpXG57XG5cdGlmKHRfaW4pIHtcblx0XHR0cmFuc2l0aW9uX2luKG5vZGUsIHRfaW4sIHRfaW5fb3B0cylcblx0fVxuXG5cdGlmKHRfb3V0KSB7XG5cdFx0Y2xlYW51cChcblx0XHRcdHRyYW5zaXRpb25fb3V0LmJpbmQobnVsbCwgbm9kZSwgdF9vdXQsIHRfb3V0X29wdHMpXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX2luKG5vZGUsIHRyYW5zaXRpb24sIG9wdGlvbnMpXG57XG5cdHJldHVybiB0cmFuc2l0aW9uKG5vZGUsIG9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2l0aW9uX291dChub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zLCB0cnVlKTtcbn1cblxuIiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vcGFyc2VyL2luZGV4JztcblxuY29uc3QgZGlyZWN0aXZlcyA9IHtcblx0YmluZCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlcihlbnRpdHkpXG57XG5cdGxldCBlbnRpdHlEaXJlY3RpdmVzID0ge307XG5cblx0aWYoZW50aXR5Lm9wdGlvbiAmJiBlbnRpdHkub3B0aW9uLmRpcmVjdGl2ZXMpIHtcblx0XHRlbnRpdHlEaXJlY3RpdmVzID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eURpcmVjdGl2ZXMpIHtcblx0XHRpZihkaXJlY3RpdmVzW25hbWVdKSB7XG5cdFx0XHRkaXJlY3RpdmVzW25hbWVdKGVudGl0eSwgZW50aXR5RGlyZWN0aXZlc1tuYW1lXSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29uc29sZS53YXJuKGBUaGVyZSBpcyBubyBwYXJzZXIgbW9kaWZpZXIgZm9yIGRpcmVjdGl2ZSAnJHsgbmFtZSB9JyBgKVxuXHRcdH1cblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59IiwiaW1wb3J0IHsgYmluZCB9IGZyb20gJy4vYmluZCc7XG5cbmV4cG9ydCB7IGJpbmQgfSIsImV4cG9ydCBjbGFzcyBUcmFja2VyIHtcblxuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLmNoaWxkcmVuID0gbmV3IFNldCgpO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0XHR0aGlzLmRpc3Bvc2FscyA9IG5ldyBTZXQoKTtcblx0fVxuXG5cdHNldFBhcmVudChwYXJlbnQpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGFkZENoaWxkKHRyYWNrZXIpXG5cdHtcblx0XHR0cmFja2VyLnNldFBhcmVudCh0aGlzKTtcblx0XHR0aGlzLmNoaWxkcmVuLmFkZCh0cmFja2VyKTtcblx0fVxuXG5cdGRpc3Bvc2FsKGNsZWFudXApXG5cdHtcblx0XHQvLyBjb25zb2xlLmxvZygnYWRkJywgY2xlYW51cC5wcm90b3R5cGUuY29uc3RydWN0b3IubmFtZSlcblx0XHR0aGlzLmRpc3Bvc2Fscy5hZGQoY2xlYW51cCk7XG5cdH1cblxuXHRjbGVhbnVwKGNhbGxiYWNrKVxuXHR7XG5cdFx0bGV0IG1heER1cmF0aW9uID0gMDtcblx0XHQvLyBjb25zb2xlLndhcm4oJ2NsZWFudXAgc3RhcnQnLCB0aGlzKTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5mb3JFYWNoKGRpc3Bvc2FsID0+IHtcblx0XHRcdGxldCByZXN1bHQgPSBkaXNwb3NhbCgpO1xuXG5cdFx0XHRpZihyZXN1bHQgJiYgcmVzdWx0LmR1cmF0aW9uKSB7XG5cdFx0XHRcdGlmKHJlc3VsdC5kdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdFx0bWF4RHVyYXRpb24gPSByZXN1bHQuZHVyYXRpb247XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0XHR0aGlzLmRpc3Bvc2Fscy5jbGVhcigpO1xuXG5cdFx0dGhpcy5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRcdGxldCBkdXJhdGlvbiA9IGNoaWxkLmNsZWFudXAoKTtcblx0XHRcdGlmKGR1cmF0aW9uID4gbWF4RHVyYXRpb24pIHtcblx0XHRcdFx0bWF4RHVyYXRpb24gPSBkdXJhdGlvbjtcblx0XHRcdH1cblx0XHR9KTtcblx0XHQvLyB0aGlzLmNoaWxkcmVuLmNsZWFyKCk7XG5cblx0XHRpZih0aGlzLnBhcmVudCkge1xuXHRcdFx0dGhpcy5wYXJlbnQuY2hpbGRyZW4uZGVsZXRlKHRoaXMpO1xuXHRcdH1cblxuXHRcdGRlbGV0ZSB0aGlzO1xuXG5cdFx0aWYoY2FsbGJhY2spIHtcblx0XHRcdHNldFRpbWVvdXQoY2FsbGJhY2ssIG1heER1cmF0aW9uKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWF4RHVyYXRpb247XG5cdH1cblxufSIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gY2FsbChmbiwgaG9va3MsIG5vZGUsIHJlbmRlcilcbntcblx0aWYoZm4gPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRyZXR1cm4gZm4oaG9va3MsIG5vZGUsIHJlbmRlcik7XG59IiwiZXhwb3J0IGNvbnN0IERPTV9IT09LX0FUVFIgPSAnZGF0YS1oaWQnO1xuXG5leHBvcnQgdmFyIEhBV0FfSUQgPSAwO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50KG5vZGUsIHJlbmRlcilcbntcblx0bGV0IGlkO1xuXG5cdGlmKHJlbmRlcikge1xuXHRcdGlkID0gKytIQVdBX0lEICsgJyc7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUiwgaWQpO1xuXHR9IGVsc2Uge1xuXHRcdGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoRE9NX0hPT0tfQVRUUik7XG5cdH1cblxuXHRyZXR1cm4gaWQ7XG59IiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0Y2xlYW51cCh1bm1vdW50ZWQpO1xufVxuIiwiaW1wb3J0IHsgcm9vdCwgZ2V0Um9vdCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gJy4vbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cdFxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXG5cdFx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRcdHJvb3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKGMubm9kZSk7XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaChyb290Tm9kZSlcbntcblx0bGV0IHRtcCA9IHJvb3ROb2RlLmlubmVySFRNTDtcblx0cm9vdE5vZGUuaW5uZXJIVE1MID0gdG1wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG51bGwsIHJvb3ROb2RlLmZpcnN0Q2hpbGQpO1xuXG5cdFx0aWYoYy5ob29rcyAmJiBjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHJvb3QuY2xlYW51cCgpO1xuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCBvcHRpb25zKSB7XG5cdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHR9XG59IiwiZXhwb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJ1xuZXhwb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnXG5leHBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90J1xuZXhwb3J0IHsgZ2V0Tm9kZSwgcGFyc2VDb250ZXh0LCBnZXRQcm9wLCBzZXRSZWYsIHNldEtleSB9IGZyb20gJy4vdGVtcGxhdGVzJ1xuZXhwb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnXG5leHBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCdcbmV4cG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuZXhwb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBET01fSE9PS19BVFRSIH0gZnJvbSAnLi9jcmVhdGVDb21wb25lbnQnXG5leHBvcnQgeyBlbWl0IH0gZnJvbSAnLi9lbWl0J1xuZXhwb3J0IHsgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmV4cG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IHJlbmRlciwgaHlkcmF0ZSwgcmVmcmVzaCB9IGZyb20gJy4vZG9tJ1xuXG4vLyBleHBvcnQge1xuLy8gXHRhdHRycyxcbi8vIFx0ZXZlbnRzLFxuLy8gXHRzbG90LFxuLy8gXHRnZXROb2RlLCBzZXRSZWYsIHNldEtleSwgZ2V0UHJvcCwgcGFyc2VDb250ZXh0LFxuLy8gXHRzdGF0ZW1lbnQsXG4vLyBcdG1hcCxcbi8vIFx0ZGlyZWN0aXZlLFxuLy8gXHRjYWxsLFxuLy8gXHRlbWl0LFxuLy8gXHRsb2FkQ29tcG9uZW50LFxuLy8gXHRjcmVhdGVDb21wb25lbnQsXG4vLyBcdERPTV9IT09LX0FUVFJcbi8vIH0iLCJpbXBvcnQgeyBjYXN0Tm9kZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5pbXBvcnQgeyBtYW51YWxQZXJzaXN0ZW50IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhenkoY29tcG9uZW50KVxue1xuXHRyZXR1cm4gY29tcG9uZW50IGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenkoY29tcG9uZW50LCBjYWxsYmFjaylcbntcblx0aWYoaXNMYXp5KGNvbXBvbmVudCkpIHtcblx0XHRjb21wb25lbnQudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRjYWxsYmFjayhcblx0XHRcdFx0bW9kdWxlLmRlZmF1bHRcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjYWxsYmFjayhcblx0XHRjb21wb25lbnRcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cdGxldCBzdGFydE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cblx0aWYoaXNMYXp5KGNvbXBvbmVudCkpIHtcblx0XHRub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0YXJ0TWFyaywgbm9kZSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhub2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XG5cblx0Ly8gbGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0XHRsZXQgY29tcG9uZW50Tm9kZSA9IGMubm9kZTtcblxuXHRcdGlmKHJlbmRlcikge1xuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChjLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmKGMuaG9va3MubW91bnRlZCkge1xuXHRcdFx0Yy5ob29rcy5tb3VudGVkKCk7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kTWFyayA9IGNvbXBvbmVudE5vZGU7XG5cdH0pO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsIGVuZE1hcmspXG5cblx0Ly8gY29uc29sZS5sb2coZW5kTWFyaywgZW5kTWFyay5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IGZpbmRBbmREaXNwYXRjaEhvb2sgfSBmcm9tICdAaGF3YS9saWZlY3ljbGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0Z2V0KGFbaV0sIGksIC0xLCBwYXJlbnQpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRnZXQoYVtpXSwgaSwgLTEsIHBhcmVudCk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgbWFudWFsUGVyc2lzdGVudCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUsIHJvb3QsIGdldFJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7ICBnZXRSb290IGFzIHRyYW5zUm9vdCB9IGZyb20gJ0BoYXdhL3RyYW5zaXRpb24nO1xuXG5pbXBvcnQgdGltZSBmcm9tICcuLi8uLi8uLi8uLi90ZXN0L3RpbWUnO1xuLyoqXG4gKiBNYXAgb3ZlciBhIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zIHRoYXQgY3JlYXRlIERPTSBub2Rlcy5cbiAqXG4gKiBObyBkdXBsaWNhdGVzIGluIHRoZSBsaXN0IG9mIGl0ZW1zIGlzIGEgaGFyZCByZXF1aXJlbWVudCwgdGhlIGRpZmZpbmdcbiAqIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggZHVwbGljYXRlIHZhbHVlcy4gU2VlIGAuL3VuaXF1ZS5qc2AuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZW1zIC0gRnVuY3Rpb24gb3Igb2JzZXJ2YWJsZSB0aGF0IGNyZWF0ZXMgYSBsaXN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IGV4cHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NsZWFuaW5nXVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwKGJpbmROb2RlLCBpdGVtcywga2V5RXhwciwgZXhwciwgcmVuZGVyKSBcbntcblx0Ly8gY29uc3QgeyByb290LCBzdWJzY3JpYmUsIHNhbXBsZSwgY2xlYW51cCB9ID0gYXBpO1xuXG5cdC8vIERpc2FibGUgY2xlYW5pbmcgZm9yIHRlbXBsYXRlcyBieSBkZWZhdWx0LlxuXHRsZXQgY3VyVHJhY2tlciA9IGdldFJvb3QoKTsvLyFleHByLiR0O1xuXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cblx0Ly8gaHlkcmF0aW9uIHByZXBhcmUgXG5cdGlmKHJlbmRlcikge1xuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgX2l0ZW1zID0gdmFsdWUoaXRlbXMpO1xuXHRcdGxldCBub2RlID0gYmluZE5vZGU7XG5cdFx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblx0XHQvLyByZXR1cm47XG5cdFx0Zm9yIChsZXQga2V5IGluIF9pdGVtcykge1xuXHRcdFx0bGV0IGl0ZW0gPSBfaXRlbXNba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGxhc3RIeWRyYXRlZE5vZGUgPSBudWxsO1xuXG5cdFx0XHRpZihub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblxuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaXRlbUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cHIobm9kZSwgZmFsc2UsIGl0ZW1LZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0XHRsZXQgbiA9IG1hbnVhbFBlcnNpc3RlbnQobm9kZSwgbGFzdEh5ZHJhdGVkTm9kZSlcblxuXHRcdFx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXHRcdFx0XHRcdG5vZGVzLnNldChpdGVtS2V5LCBuKTtcblxuXHRcdFx0XHRcdC8vIGNvbnNvbGUud2FybignW2h5ZHJdJywgaXRlbUtleSwgbilcblxuXHRcdFx0XHRcdG5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxhc3ROb2RlID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cblx0XHRpZihsYXN0Tm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0cmVuZGVyID0gdHJ1ZTtcblx0XHRcdGJpbmROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0Tm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGl0ZW1zLCBhID0+IHtcblxuXHRcdGxldCBiID0gdmFsdWUoaXRlbXMpO1xuXG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oXG5cdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgYWRkTm9kZSwgZW5kTWFyaylcblx0XHQpO1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdHJldHVybiBjb250ZW50O1xuXHRcdC8vIH0pO1xuXHR9LCAhcmVuZGVyKTtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3Vuc3Vic2NyaWJlXScsIHVuc3Vic2NyaWJlKTtcblx0Ly8gXHR1bnN1YnNjcmliZSgpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdC8vIGlmKHJlbmRlcikge1xuXHQvLyBcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdC8vIH1cblxuXHQvLyBkaXNwb3NlQWxsKCk7XG5cblx0ZnVuY3Rpb24gYWRkTm9kZShpdGVtLCBrZXksIGksIHBhcmVudCA9IG51bGwpIHtcblx0XHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgbm9kZUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblxuXHRcdGxldCBuID0gbm9kZXMuZ2V0KG5vZGVLZXkpO1xuXHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHR0b1JlbW92ZS5kZWxldGUoaXRlbSk7XG5cblx0XHRcdGlmICghbikge1xuXHRcdFx0XHRuID0gcm9vdChkaXNwb3NhbCA9PiB7XG5cdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LCBkaXNwb3NhbCk7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cHIobnVsbCwgdHJ1ZSwgbm9kZUtleSwgaXRlbSwga2V5KTtcblx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0XG5cdFx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KG5vZGVLZXkpO1xuXG5cdFx0XHRpZihkaXNwb3Nlcikge1xuXHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksXG5cdFx0XHRcdFx0ZGlzcG9zZXIuYmluZChudWxsLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRlbmRNYXJrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlmZmFibGUobiwgLTEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlmZmFibGUobiwgaSk7XG5cdH1cblxuXHQvLyBjbGVhbnVwKGRpc3Bvc2VBbGwpO1xuXG5cdC8vIGZ1bmN0aW9uIGRpc3Bvc2VBbGwoKSB7XG5cdC8vIFx0ZGlzcG9zZXJzLmZvckVhY2goZCA9PiBkKCkpO1xuXHQvLyBcdGRpc3Bvc2Vycy5jbGVhcigpO1xuXHQvLyBcdG5vZGVzLmNsZWFyKCk7XG5cdC8vIFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0Ly8gfVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcigpO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdFx0bm9kZXMuZGVsZXRlKGl0ZW0pO1xuXHR9XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlLCByb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBhZGQsIHBlcnNpc3RlbnQsIGRpZmZhYmxlLCBjYXN0Tm9kZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRGcmFnbWVudChzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHR3aGlsZShzdGFydCAhPT0gbnVsbCAmJiAhc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0bm9kZXMucHVzaChzdGFydCk7XG5cdFx0c3RhcnQgPSBzdGFydC5uZXh0U2libGluZztcblx0fTtcblxuXHRub2Rlcy5zaGlmdCgpO1xuXG5cdGxldCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBub2Rlc1swXTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlOiAxMTEsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpXG57XG5cdGlmKHJlbmRlcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IGluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcblx0Ly8gbGV0IFxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaywgc3RhcnRNYXJrO1xuXG5cdGZ1bmN0aW9uIGNsZWFudXAoKVxuXHR7XG5cdFx0bGV0IGNsZWFuTm9kZXMgPSBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnRNYXJrLCBlbmRNYXJrKTtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZGlmZmFibGUoY2xlYW5Ob2RlcywgLTEpKTtcblx0fVxuXHRcblx0aWYocmVuZGVyKSB7XG5cdFx0bGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cdFx0c3RhcnRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXHRcdHBsYWNlaG9sZGVyID0gYWRkKHBhcmVudCwgcGxhY2Vob2xkZXIpO1xuXHRcdGVuZE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cblx0XHRub2RlID0gcGxhY2Vob2xkZXI7XG5cdFx0XG5cdFx0cGFyZW50ID0gZW5kTWFyay5wYXJlbnROb2RlO1xuXG5cdFx0Y2xlYW51cCgpO1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRzdGFydE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0TWFyaywgbm9kZSk7XG5cdH1cblxuXHRsZXQgbGFzdENvbmRpdGlvbkluZGV4ID0gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcik7XG5cblx0bGV0IGlzRmlyc3RDYWxsID0gdHJ1ZTtcblxuXHQvLyBvYnMgdHJhY2tlcnNcblx0Y29uc3QgZGlzcG9zZXJzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Ly8gLmNsZWFyKCk7XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKGNsZWFudXApO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdH1cblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdGxldCBuID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cblx0XHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0XHRuID0gcm9vdChkaXNwb3NlID0+IHtcblx0XHRcdFx0XHR0b1JlbW92ZS5hZGQoaSk7XG5cdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChpLCBkaXNwb3NlKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVuZGVyRm4oc3RhcnRNYXJrLm5leHRTaWJsaW5nLCBsYXN0Q29uZGl0aW9uSW5kZXggIT09IGkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBwZXJzaXN0ZW50KG4pIHx8IG47XG5cblx0XHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihpc0ZpcnN0Q2FsbCAmJiAhcmVuZGVyKSB7XG5cdFx0XHRlbmRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdFx0XHRpZihsYXN0Q29uZGl0aW9uSW5kZXggPT09IG51bGwpIHtcblx0XHRcdFx0biA9IG5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGxhc3RDb25kaXRpb25JbmRleCwgbiwgZW5kTWFyaylcblx0XHRcdG4uYWZ0ZXIoZW5kTWFyayk7XG5cblx0XHRcdGlzRmlyc3RDYWxsID0gZmFsc2U7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgaGFzUmVuZGVyZWQgPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggIT09IGxhc3RDb25kaXRpb25JbmRleDtcblxuXHRcdGxhc3RDb25kaXRpb25JbmRleCA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdGlzRmlyc3RDYWxsID0gZmFsc2U7XG5cblx0XHRpZighaGFzUmVuZGVyZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBhZGQgbmV3IG5vZGVzXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShkaWZmYWJsZShuLCAxKSwgZW5kTWFyayk7XG5cdH0pO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsImltcG9ydCB7IHdhdGNoLCBjb21wdXRlZCwgaXNPYnNlcnZhYmxlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKVxuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRSZWYoJHJlZnMsIG5vZGUsIG5hbWUpXG57XG5cdGlmKCRyZWZzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHQkcmVmc1tuYW1lXSA9IG5vZGU7XG5cdH0gZWxzZSB7XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgkcmVmc1tuYW1lXSkpIHtcblx0XHRcdCRyZWZzW25hbWVdLnB1c2gobm9kZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdCRyZWZzW25hbWVdID0gWyRyZWZzW25hbWVdXS5jb25jYXQobm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRLZXkoJGtleSwgbm9kZSwgcmVuZGVyKVxue1xuXHRpZigka2V5ID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0d2F0Y2goJGtleSwgKCkgPT4ge1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLWtleScsICRrZXkpO1xuXHR9LCByZW5kZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wKCRwcm9wcywgbmFtZSwgc2VlZClcbntcblx0aWYoJHByb3BzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHNlZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYoaXNPYnNlcnZhYmxlKCRwcm9wc1tuYW1lXSkpIHtcblx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gJHByb3BzW25hbWVdO1xuXHRcdH1cblx0fVxuXHQvLyByZXR1cm4gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblx0bGV0ICRjdXN0b21Jbml0ID0gY29udGV4dC4kY3VzdG9tSW5pdCB8fCBudWxsO1xuXHRcblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHRcdCRjdXN0b21Jbml0LFxuXHRcdCRyZWZzOiB7fSxcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdC8vIGNvbnNvbGUud2FybihzdGFydE5vZGUsIGVuZE1hcmspXG5cdHdoaWxlIChzdGFydE5vZGUgJiYgIXN0YXJ0Tm9kZS5pc1NhbWVOb2RlKGVuZE1hcmspKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coc3RhcnROb2RlKTtcblx0XHRjb25zdCBuID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuXHRcdC8vIElzIG5lZWRlZCBpbiBjYXNlIHRoZSBjaGlsZCB3YXMgcHVsbGVkIG91dCB0aGUgcGFyZW50IGJlZm9yZSBjbGVhcmluZy5cblx0XHRpZiAocGFyZW50ID09PSBzdGFydE5vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHN0YXJ0Tm9kZSk7XG5cdFx0fVxuXHRcdHN0YXJ0Tm9kZSA9IG47XG5cdH1cbn1cblxuY29uc3Qgbm9kZVR5cGUgPSAxMTE7XG5cblxuZXhwb3J0IGNvbnN0IGRpZmZhYmxlID0gKG5vZGUsIG9wZXJhdGlvbikgPT5cblx0bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUgP1xuXHQxIC8gb3BlcmF0aW9uIDwgMCA/XG5cdG9wZXJhdGlvbiA/XG5cdHJlbW92ZU5vZGVzKFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQucGFyZW50Tm9kZSxcblx0XHRub2RlLl9maXJzdENoaWxkLm5leHRTaWJsaW5nLFxuXHRcdG5vZGUuX2xhc3RDaGlsZC5uZXh0U2libGluZ1xuXHQpIHx8IG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlLl9sYXN0Q2hpbGQgOlxuXHRvcGVyYXRpb24gP1xuXHRub2RlLl92YWx1ZU9mKCkgOlxuXHRub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZTtcblxuXG5cbmV4cG9ydCBjb25zdCBtYW51YWxQZXJzaXN0ZW50ID0gKHN0YXJ0LCBlbmQpID0+IHtcblx0aWYoc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0cmV0dXJuIHN0YXJ0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkOiBzdGFydCxcblx0XHRfbGFzdENoaWxkOiBlbmQsXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIiwiY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG57XG5cdGxldCBjYWNoZWQgPSBjYWNoZS5nZXQoYWN0aXZlQ2xhc3MpO1xuXG5cdGlmKGNhY2hlZCkge1xuXHRcdHJldHVybiBjYWNoZWQ7XG5cdH1cblxuXHRsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRtcC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKVxuXHRcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodG1wKVxuXG5cdGxldCBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodG1wKS50cmFuc2l0aW9uRHVyYXRpb247XG5cblx0dG1wLnJlbW92ZSgpO1xuXG5cdGR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbi5yZXBsYWNlKC9bXjAtOVxcLl0vZywgJycpKSAqIDEwMDA7XG5cdFxuXHRjYWNoZS5zZXQoYWN0aXZlQ2xhc3MsIGR1cmF0aW9uKTtcblxuXHRyZXR1cm4gZHVyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VkKG5vZGUsIG5hbWUsIG91dCA9IGZhbHNlKSB7XG5cdGxldCBwcmVmaXggPSAnZW50ZXInO1xuXG5cdGlmIChvdXQpIHtcblx0XHRwcmVmaXggPSAnbGVhdmUnO1xuXHR9XG5cblx0bGV0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXG5cdGxldCBhY3RpdmVDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH0tYWN0aXZlYDtcblx0bGV0IHN0YXJ0Q2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9YDtcblx0bGV0IGZpbmlzaENsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfS10b2A7XG5cblx0bGV0IGR1cmF0aW9uID0gZ2V0RHVyYXRpb24obm9kZSwgYWN0aXZlQ2xhc3MsIG91dClcblxuXHRub2RlLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpO1xuXHRub2RlLmNsYXNzTGlzdC5hZGQoc3RhcnRDbGFzcyk7XG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bm9kZS5jbGFzc0xpc3QuYWRkKGZpbmlzaENsYXNzKTtcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoc3RhcnRDbGFzcyk7XG5cdH0sIDIwKTtcblxuXHQvLyBjbGVhbnVwXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzcyk7XG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGZpbmlzaENsYXNzKTtcblx0fSwgZHVyYXRpb24pXG5cblx0cmV0dXJuIHtcblx0XHRkdXJhdGlvblxuXHR9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZmFkZShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAgfSlcbntcblx0cmV0dXJuIHtcblx0XHRkZWxheSxcblx0XHRkdXJhdGlvbixcblx0XHRlZmZlY3QsXG5cdFx0Y3NzOiB7XG5cblx0XHR9XG5cdH1cbn0iXSwic291cmNlUm9vdCI6IiJ9