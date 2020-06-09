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
exports.refresh = refresh;
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

function refresh(rootNode) {
  var tmp = rootNode.innerHTML;
  rootNode.innerHTML = tmp;
}

function hydrate(component, rootNode) {
  var root = (0, _observable.getRoot)();
  var c = component(null, rootNode.firstChild);

  if (c.hooks && c.hooks.mounted) {
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

var _time = _interopRequireDefault(__webpack_require__(/*! ../../../../test/time */ "./test/time.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
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
  document.body.append(tmp);
  var style = getComputedStyle(tmp);
  tmp.classList.add(activeClass);
  var duration = style.transitionDuration;
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
  var defaultClassName = node.className;
  var defaultActiveClassName = node.className + ' ' + activeClass;
  node.className = defaultActiveClassName + ' ' + startClass;
  setTimeout(function () {
    node.className = defaultActiveClassName + ' ' + finishClass;
  }, 20); // cleanup

  setTimeout(function () {
    node.className = defaultClassName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jcmVhdGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9lbWl0LmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2ZhZGUuanMiXSwibmFtZXMiOlsidmFsdWVQcm9wIiwibm9kZSIsImV2ZW50IiwidmFsdWUiLCJkaXJlY3RpdmVzIiwiYmluZCIsImVudGl0eURpcmVjdGl2ZXMiLCJlbnRpdHkiLCJjb25zb2xlIiwiZGlyZWN0aXZlIiwiaXNFeHByZXNzaW9uIiwiaG9va3MiLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJjdXN0b21QYXJlbnQiLCJ0cmFuc1BhcmVudCIsInByZXZUcmFja2luZyIsIm5ld1RyYWNraW5nIiwicmVzdWx0IiwiZm4iLCJhcmd1bWVudHMiLCJkYXRhIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJ1bnN1YnNjcmliZSIsImNsZWFudXAiLCJwcm9wIiwicmVuZGVyIiwiaXNPYnNlcnZhYmxlIiwic3Vic2NyaWJlIiwic2V0UGFyZW50IiwiYWRkQ2hpbGQiLCJ0cmFja2VyIiwiZGlzcG9zYWwiLCJtYXhEdXJhdGlvbiIsImR1cmF0aW9uIiwiY2hpbGQiLCJzZXRUaW1lb3V0IiwiQXJyYXkiLCJpIiwiYXJncyIsImF0dHJBcmdUb09iaiIsImF0dHJBcmdUb1N0cmluZyIsImxhc3RDbGFzc0Fkb3B0ZWQiLCJ0bXAiLCJ0b1NldCIsInRvUmVtb3ZlIiwibmFtZSIsInN0eWxlcyIsImF0dHJzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIkRPTV9IT09LX0FUVFIiLCJIQVdBX0lEIiwiaWQiLCJ1bm1vdW50ZWQiLCJyb290IiwiYyIsImNvbXBvbmVudCIsInJvb3ROb2RlIiwiZGV0YWlsIiwib3B0aW9ucyIsImNvbXBvbmVudE5vZGUiLCJtYXJrIiwiYUlkeCIsImJJZHgiLCJhIiwia2V5Iiwia2V5RXhwciIsImIiLCJqIiwiYUVsbSIsImJFbG0iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImN1clRyYWNrZXIiLCJkaXNwb3NlcnMiLCJub2RlcyIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJlbmRNYXJrIiwiYmluZE5vZGUiLCJfaXRlbXMiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImV4cHIiLCJuIiwiY29udGVudCIsImVsIiwibm9kZUtleSIsImRpc3Bvc2VyIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJzdGFydCIsImxlbmd0aCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsIm5vZGVUeXBlIiwiaW5kZXgiLCJjb25kaXRpb24iLCJyZW5kZXJGbiIsImNsZWFuTm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJwbGFjZWhvbGRlciIsInN0YXJ0TWFyayIsImxhc3RDb25kaXRpb25JbmRleCIsImdldEluaXRWYWx1ZSIsImlzRmlyc3RDYWxsIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiaGFzUmVuZGVyZWQiLCJ0ZW1wbGF0ZSIsIiRyZWZzIiwiJGtleSIsIiRwcm9wcyIsImNvbnRleHQiLCIkY3VzdG9tSW5pdCIsImNoaWxkTm9kZXMiLCJfc3RhcnRNYXJrIiwiYWRkIiwiY2FzdE5vZGUiLCJmcmFnT3JOb2RlIiwiZnJhZyIsInN0YXJ0Tm9kZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJtYW51YWxQZXJzaXN0ZW50IiwiZW5kIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwiX3ZhbHVlT2YiLCJjYWNoZSIsImNhY2hlZCIsInN0eWxlIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInBhcnNlRmxvYXQiLCJvdXQiLCJwcmVmaXgiLCJhY3RpdmVDbGFzcyIsInN0YXJ0Q2xhc3MiLCJmaW5pc2hDbGFzcyIsImdldER1cmF0aW9uIiwiZGVmYXVsdENsYXNzTmFtZSIsImRlZmF1bHRBY3RpdmVDbGFzc05hbWUiLCJkZWxheSIsImVmZmVjdCIsImNzcyIsInRyYW5zaXRpb25faW4iLCJ0cmFuc2l0aW9uX291dCIsInRyYW5zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVPLDRDQUNQO0FBQ0MsTUFBSUEsU0FBUyxHQUFiOztBQUVBLE1BQUdDLElBQUksQ0FBSkEsU0FBSCxZQUE2QjtBQUM1QkQsYUFBUyxHQUFUQTtBQUNBOztB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QyxPQUFHLEVBQUU7QUFKQyxHQUFQO0FBUUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBcEJWRDs7QUFDQTs7QUFDQTs7QUFFTyw4REFDUDtBQUNDLFlBQVM7QUFDUkMsaUJBQWEsYUFBYkEsU0FBYSxDQUFiQTtBQUNBOztBQUVELGFBQVU7QUFDVCw2QkFDQ0MsY0FBYyxDQUFkQSx3QkFERCxVQUNDQSxDQUREO0FBR0E7QUFDRDs7QUFFRCxrREFDQTtBQUNDLFNBQU9DLFVBQVUsT0FBakIsT0FBaUIsQ0FBakI7QUFDQTs7QUFFRCxtREFDQTtBQUNDLFNBQU9BLFVBQVUsZ0JBQWpCLElBQWlCLENBQWpCO0FBQ0EsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZSc7XG5cbi8vIHN0YXRpYyBwYXJzZXIoZW50aXR5KVxuLy8gXHR7XG4vLyBcdFx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0bGV0IG1vZGVsRGlyZWN0aXZlID0gZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzW01vZGVsLmdldE5hbWUoKV07XG5cbi8vIFx0XHRpZihtb2RlbERpcmVjdGl2ZSA9PT0gdW5kZWZpbmVkKSB7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcbi8vIFx0XHRcdHZhbHVlOiBgKCR7IG1vZGVsRGlyZWN0aXZlLnZhbHVlLnZhbHVlIH0pKClgLFxuLy8gXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuLy8gXHRcdH07XG5cdFx0XG4vLyBcdFx0Ly8gZ2V0XG4vLyBcdFx0Ly8gY29uc29sZS5sb2coZW50aXR5Lm9wdGlvbik7XG4vLyBcdH1cblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmQobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHZhbHVlUHJvcCA9ICd2YWx1ZSc7XG5cblx0aWYobm9kZS50eXBlID09PSAnY2hlY2tib3gnKSB7XG5cdFx0dmFsdWVQcm9wID0gJ2NoZWNrZWQnO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlVmFsdWUoZXZlbnQpXG5cdHtcblx0XHRpZihldmVudCBpbnN0YW5jZW9mIEN1c3RvbUV2ZW50KSB7XG5cdFx0XHR2YWx1ZS5hcHBseShudWxsLCBldmVudC5kZXRhaWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YWx1ZShub2RlW3ZhbHVlUHJvcF0pO1xuXHRcdH1cblx0fVxuXG5cdG5vZGVbdmFsdWVQcm9wXSA9IHZhbHVlKCk7XG5cblx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cdH1cbn0iLCJpbXBvcnQgeyBjbGVhbnVwIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBmYWRlIH0gZnJvbSAnLi9mYWRlJztcbmV4cG9ydCB7IGNsYXNzZWQgfSBmcm9tICcuL2NsYXNzZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbihub2RlLCB0X2luLCB0X2luX29wdHMsIHRfb3V0LCB0X291dF9vcHRzKVxue1xuXHRpZih0X2luKSB7XG5cdFx0dHJhbnNpdGlvbl9pbihub2RlLCB0X2luLCB0X2luX29wdHMpXG5cdH1cblxuXHRpZih0X291dCkge1xuXHRcdGNsZWFudXAoXG5cdFx0XHR0cmFuc2l0aW9uX291dC5iaW5kKG51bGwsIG5vZGUsIHRfb3V0LCB0X291dF9vcHRzKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQobm9kZSwgdHJhbnNpdGlvbiwgb3B0aW9ucylcbntcblx0cmV0dXJuIHRyYW5zaXRpb24obm9kZSwgb3B0aW9ucywgdHJ1ZSk7XG59XG5cbiIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL3BhcnNlci9pbmRleCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG5cdGJpbmQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZW50aXR5KVxue1xuXHRsZXQgZW50aXR5RGlyZWN0aXZlcyA9IHt9O1xuXG5cdGlmKGVudGl0eS5vcHRpb24gJiYgZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzKSB7XG5cdFx0ZW50aXR5RGlyZWN0aXZlcyA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlcztcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHlEaXJlY3RpdmVzKSB7XG5cdFx0aWYoZGlyZWN0aXZlc1tuYW1lXSkge1xuXHRcdFx0ZGlyZWN0aXZlc1tuYW1lXShlbnRpdHksIGVudGl0eURpcmVjdGl2ZXNbbmFtZV0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgVGhlcmUgaXMgbm8gcGFyc2VyIG1vZGlmaWVyIGZvciBkaXJlY3RpdmUgJyR7IG5hbWUgfScgYClcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYmluZChlbnRpdHksIGRpcmVjdGl2ZSlcbntcblx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcblx0XHR2YWx1ZTogYCgkeyBkaXJlY3RpdmUudmFsdWUgfSkoKWAsXG5cdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHR9O1xufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL2JpbmQnO1xuXG5leHBvcnQgeyBiaW5kIH0iLCJleHBvcnQgY2xhc3MgVHJhY2tlciB7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwb3NhbHMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHRzZXRQYXJlbnQocGFyZW50KVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRhZGRDaGlsZCh0cmFja2VyKVxuXHR7XG5cdFx0dHJhY2tlci5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jaGlsZHJlbi5hZGQodHJhY2tlcik7XG5cdH1cblxuXHRkaXNwb3NhbChjbGVhbnVwKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2FkZCcsIGNsZWFudXAucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpXG5cdFx0dGhpcy5kaXNwb3NhbHMuYWRkKGNsZWFudXApO1xuXHR9XG5cblx0Y2xlYW51cChjYWxsYmFjaylcblx0e1xuXHRcdGxldCBtYXhEdXJhdGlvbiA9IDA7XG5cdFx0Ly8gY29uc29sZS53YXJuKCdjbGVhbnVwIHN0YXJ0JywgdGhpcyk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuZm9yRWFjaChkaXNwb3NhbCA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gZGlzcG9zYWwoKTtcblxuXHRcdFx0aWYocmVzdWx0ICYmIHJlc3VsdC5kdXJhdGlvbikge1xuXHRcdFx0XHRpZihyZXN1bHQuZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuXHRcdFx0XHRcdG1heER1cmF0aW9uID0gcmVzdWx0LmR1cmF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuY2xlYXIoKTtcblxuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRsZXQgZHVyYXRpb24gPSBjaGlsZC5jbGVhbnVwKCk7XG5cdFx0XHRpZihkdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdG1heER1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gdGhpcy5jaGlsZHJlbi5jbGVhcigpO1xuXG5cdFx0aWYodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LmNoaWxkcmVuLmRlbGV0ZSh0aGlzKTtcblx0XHR9XG5cblx0XHRkZWxldGUgdGhpcztcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCBtYXhEdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heER1cmF0aW9uO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4sIGhvb2tzLCBub2RlLCByZW5kZXIpXG57XG5cdGlmKGZuID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGZuKGhvb2tzLCBub2RlLCByZW5kZXIpO1xufSIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufSIsImltcG9ydCB7IGNsZWFudXAgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZSgkaG9va3MsIGRpcmVjdGl2ZSwgbm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHVubW91bnRlZCA9IGRpcmVjdGl2ZShub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxuXG5cdGNsZWFudXAodW5tb3VudGVkKTtcbn1cbiIsImltcG9ydCB7IHJvb3QsIGdldFJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRyb290Tm9kZS5pbm5lckhUTUwgPSAnJztcblx0cm9vdE5vZGUuYXBwZW5kQ2hpbGQoYy5ub2RlKTtcblxuXHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cm9vdC5jbGVhbnVwKCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2gocm9vdE5vZGUpXG57XG5cdGxldCB0bXAgPSByb290Tm9kZS5pbm5lckhUTUw7XG5cdHJvb3ROb2RlLmlubmVySFRNTCA9IHRtcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cblx0bGV0IGMgPSBjb21wb25lbnQobnVsbCwgcm9vdE5vZGUuZmlyc3RDaGlsZCk7XG5cblx0aWYoYy5ob29rcyAmJiBjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cm9vdC5jbGVhbnVwKCk7XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRkaXNwYXRjaEhvb2ssXG59IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsZXQgY29tcG9uZW50Tm9kZSA9IGMubm9kZTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdGNvbXBvbmVudE5vZGUgPSBtYXJrO1xuXHR9XG5cblx0aWYoYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0Yy5ob29rcy5tb3VudGVkKCk7XG5cdH1cblx0Ly8gZGlzcGF0Y2hIb29rKGMuaWQsICdtb3VudGVkJyk7XG5cblx0cmV0dXJuIGNvbXBvbmVudE5vZGU7XG59IiwiaW1wb3J0IHsgZmluZEFuZERpc3BhdGNoSG9vayB9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIG1hbnVhbFBlcnNpc3RlbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHZhbHVlLCByb290LCBnZXRSb290IH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyAgZ2V0Um9vdCBhcyB0cmFuc1Jvb3QgfSBmcm9tICdAaGF3YS90cmFuc2l0aW9uJztcblxuaW1wb3J0IHRpbWUgZnJvbSAnLi4vLi4vLi4vLi4vdGVzdC90aW1lJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGN1clRyYWNrZXIgPSBnZXRSb290KCk7Ly8hZXhwci4kdDtcblxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblxuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IG5vZGVzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Y29uc3QgZGVmYXVsdEEgPSBbXTtcblxuXG5cdC8vIGh5ZHJhdGlvbiBwcmVwYXJlIFxuXHRpZihyZW5kZXIpIHtcblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cblx0XHQvLyBjb25zb2xlLmxvZygnc3RhcnQgZWFjaCcsIHBhcmVudCwgZW5kTWFyaylcblx0fSBlbHNlIHtcblx0XHRsZXQgX2l0ZW1zID0gdmFsdWUoaXRlbXMpO1xuXHRcdGxldCBub2RlID0gYmluZE5vZGU7XG5cdFx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblx0XHQvLyByZXR1cm47XG5cdFx0Zm9yIChsZXQga2V5IGluIF9pdGVtcykge1xuXHRcdFx0bGV0IGl0ZW0gPSBfaXRlbXNba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGxhc3RIeWRyYXRlZE5vZGUgPSBudWxsO1xuXG5cdFx0XHRpZihub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblxuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaXRlbUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cHIobm9kZSwgZmFsc2UsIGl0ZW1LZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0XHRsZXQgbiA9IG1hbnVhbFBlcnNpc3RlbnQobm9kZSwgbGFzdEh5ZHJhdGVkTm9kZSlcblxuXHRcdFx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXHRcdFx0XHRcdG5vZGVzLnNldChpdGVtS2V5LCBuKTtcblxuXHRcdFx0XHRcdC8vIGNvbnNvbGUud2FybignW2h5ZHJdJywgaXRlbUtleSwgbilcblxuXHRcdFx0XHRcdG5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxhc3ROb2RlID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHQvLyBjb25zb2xlLmxvZyhkZWZhdWx0QSk7XG5cblx0XHRlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXG5cdFx0aWYobGFzdE5vZGUgPT09IG51bGwpIHtcblx0XHRcdHJlbmRlciA9IHRydWU7XG5cdFx0XHRiaW5kTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGFzdE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fVxuXG5cblx0XHQvLyBjb25zb2xlLmVycm9yKGJpbmROb2RlLCBsYXN0Tm9kZSwgZW5kTWFyaywgZW5kTWFyay5wYXJlbnROb2RlKTtcblx0XHQvLyBlbmRNYXJrID0gYWRkKGxhc3ROb2RlLCAnJyk7XG5cdH1cblx0XG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGl0ZW1zLCBhID0+IHtcblxuXHRcdGxldCBiID0gdmFsdWUoaXRlbXMpO1xuXG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oXG5cdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgYWRkTm9kZSwgZW5kTWFyaylcblx0XHQpO1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdHJldHVybiBjb250ZW50O1xuXHRcdC8vIH0pO1xuXHR9LCAhcmVuZGVyKTtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3Vuc3Vic2NyaWJlXScsIHVuc3Vic2NyaWJlKTtcblx0Ly8gXHR1bnN1YnNjcmliZSgpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdC8vIGlmKHJlbmRlcikge1xuXHQvLyBcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdC8vIH1cblxuXHQvLyBkaXNwb3NlQWxsKCk7XG5cblx0ZnVuY3Rpb24gYWRkTm9kZShpdGVtLCBrZXksIGksIGVsID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRyZXR1cm4gZXhwcihudWxsLCB0cnVlLCBub2RlS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHR9LCBjdXJUcmFja2VyKTtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblx0XHRcdFx0XG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChub2RlS2V5KTtcblx0XHRcdGlmKGRpc3Bvc2VyKSB7XG5cdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSxcblx0XHRcdFx0XHRkaXNwb3Nlci5iaW5kKG51bGwsICgpID0+IHtcblx0XHRcdFx0XHRcdGVuZE1hcmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWZmYWJsZShuLCBpKSk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBkaWZmYWJsZShuLCBpKTtcblx0fVxuXG5cdC8vIGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0Ly8gZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0Ly8gXHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdC8vIFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdC8vIFx0bm9kZXMuY2xlYXIoKTtcblx0Ly8gXHR0b1JlbW92ZS5jbGVhcigpO1xuXHQvLyB9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gZW5kTWFyaztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn0iLCJpbXBvcnQgeyBzdWJzY3JpYmUsIHJvb3QgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIGNhc3ROb2RlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdHdoaWxlKHN0YXJ0ICE9PSBudWxsICYmICFzdGFydC5pc1NhbWVOb2RlKGVuZCkpIHtcblx0XHRub2Rlcy5wdXNoKHN0YXJ0KTtcblx0XHRzdGFydCA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuXHR9O1xuXG5cdG5vZGVzLnNoaWZ0KCk7XG5cblx0bGV0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIG5vZGVzWzBdO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcilcbntcblx0aWYocmVuZGVyKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgaW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1xuXHQvLyBsZXQgXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrLCBzdGFydE1hcms7XG5cblx0ZnVuY3Rpb24gY2xlYW51cCgpXG5cdHtcblx0XHRsZXQgY2xlYW5Ob2RlcyA9IGNyZWF0ZUluaXRGcmFnbWVudChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdHBhcmVudC5yZW1vdmVDaGlsZChkaWZmYWJsZShjbGVhbk5vZGVzLCAtMSkpO1xuXHR9XG5cdFxuXHRpZihyZW5kZXIpIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRzdGFydE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cdFx0cGxhY2Vob2xkZXIgPSBhZGQocGFyZW50LCBwbGFjZWhvbGRlcik7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdG5vZGUgPSBwbGFjZWhvbGRlcjtcblx0XHRcblx0XHRwYXJlbnQgPSBlbmRNYXJrLnBhcmVudE5vZGU7XG5cblx0XHRjbGVhbnVwKCk7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdHN0YXJ0TWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoc3RhcnRNYXJrLCBub2RlKTtcblx0fVxuXG5cdGxldCBsYXN0Q29uZGl0aW9uSW5kZXggPSBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKTtcblxuXHRsZXQgaXNGaXJzdENhbGwgPSB0cnVlO1xuXG5cdC8vIG9icyB0cmFja2Vyc1xuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHQvLyAuY2xlYXIoKTtcblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoY2xlYW51cCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0bGV0IG4gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdHRvUmVtb3ZlLmFkZChpKTtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGksIGRpc3Bvc2UpO1xuXHRcdFx0XHRcdHJldHVybiByZW5kZXJGbihzdGFydE1hcmsubmV4dFNpYmxpbmcsIGxhc3RDb25kaXRpb25JbmRleCAhPT0gaSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGlzRmlyc3RDYWxsICYmICFyZW5kZXIpIHtcblx0XHRcdGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRcdGlmKGxhc3RDb25kaXRpb25JbmRleCA9PT0gbnVsbCkge1xuXHRcdFx0XHRuID0gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS5sb2cobGFzdENvbmRpdGlvbkluZGV4LCBuLCBlbmRNYXJrKVxuXHRcdFx0bi5hZnRlcihlbmRNYXJrKTtcblxuXHRcdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBoYXNSZW5kZXJlZCA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAhPT0gbGFzdENvbmRpdGlvbkluZGV4O1xuXG5cdFx0bGFzdENvbmRpdGlvbkluZGV4ID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdGlmKCFoYXNSZW5kZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuZXcgbm9kZXNcblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGRpZmZhYmxlKG4sIDEpLCBlbmRNYXJrKTtcblx0fSk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59IiwiaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBpc09ic2VydmFibGUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRpZiAocmVuZGVyKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZigkcmVmcywgbm9kZSwgbmFtZSlcbntcblx0aWYoJHJlZnNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdCRyZWZzW25hbWVdID0gbm9kZTtcblx0fSBlbHNlIHtcblx0XHRpZihBcnJheS5pc0FycmF5KCRyZWZzW25hbWVdKSkge1xuXHRcdFx0JHJlZnNbbmFtZV0ucHVzaChub2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHJlZnNbbmFtZV0gPSBbJHJlZnNbbmFtZV1dLmNvbmNhdChub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEtleSgka2V5LCBub2RlLCByZW5kZXIpXG57XG5cdGlmKCRrZXkgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3YXRjaCgka2V5LCAoKSA9PiB7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgJGtleSk7XG5cdH0sIHJlbmRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3AoJHByb3BzLCBuYW1lLCBzZWVkKVxue1xuXHRpZigkcHJvcHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VlZDtcblx0XHR9XG5cdH1cblxuXHRpZihpc09ic2VydmFibGUoJHByb3BzW25hbWVdKSkge1xuXHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cdC8vIHJldHVybiBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGNvbnRleHQgPSB7fTtcblx0fVxuXG5cdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXHRsZXQgJGN1c3RvbUluaXQgPSBjb250ZXh0LiRjdXN0b21Jbml0IHx8IG51bGw7XG5cdFxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdFx0JGN1c3RvbUluaXQsXG5cdFx0JHJlZnM6IHt9LFxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZyYWcodmFsdWUpIHtcblx0Y29uc3QgeyBjaGlsZE5vZGVzIH0gPSB2YWx1ZTtcblx0aWYgKCFjaGlsZE5vZGVzIHx8IHZhbHVlLm5vZGVUeXBlICE9PSAxMSkgcmV0dXJuO1xuXHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggPCAyKSB7XG5cdFx0cmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdH1cblxuXHQvLyBGb3IgYSBmcmFnbWVudCBvZiAyIGVsZW1lbnRzIG9yIG1vcmUgYWRkIGEgc3RhcnRNYXJrLiBUaGlzIGlzIHJlcXVpcmVkXG5cdC8vIGZvciBtdWx0aXBsZSBuZXN0ZWQgY29uZGl0aW9uYWwgY29tcHV0ZWRzIHRoYXQgcmV0dXJuIGZyYWdtZW50cy5cblx0Y29uc3QgX3N0YXJ0TWFyayA9IGFkZCh2YWx1ZSwgJycsIGNoaWxkTm9kZXNbMF0pO1xuXG5cdHJldHVybiB7XG5cdFx0X3N0YXJ0TWFya1xuXHR9O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGQocGFyZW50LCB2YWx1ZSwgZW5kTWFyayA9IG51bGwpIHtcblx0dmFsdWUgPSBjYXN0Tm9kZSh2YWx1ZSk7XG5cblx0Y29uc3QgZnJhZ09yTm9kZSA9IGZyYWcodmFsdWUpIHx8IHZhbHVlO1xuXG5cdC8vIElmIGVuZE1hcmsgaXMgYG51bGxgLCB2YWx1ZSB3aWxsIGJlIGFkZGVkIHRvIHRoZSBlbmQgb2YgdGhlIGxpc3QuXG5cdHBhcmVudC5pbnNlcnRCZWZvcmUodmFsdWUsIGVuZE1hcmsgJiYgZW5kTWFyay5wYXJlbnROb2RlICYmIGVuZE1hcmspO1xuXG5cdHJldHVybiBmcmFnT3JOb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FzdE5vZGUodmFsdWUpIHtcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXHR9XG5cdGlmICghKHZhbHVlIGluc3RhbmNlb2YgTm9kZSkpIHtcblx0XHQvLyBQYXNzaW5nIGFuIGVtcHR5IGFycmF5IGNyZWF0ZXMgYSBEb2N1bWVudEZyYWdtZW50LlxuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KFt2YWx1ZV0pO1xuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTm9kZXMocGFyZW50LCBzdGFydE5vZGUsIGVuZE1hcmspIHtcblx0d2hpbGUgKHN0YXJ0Tm9kZSAmJiBzdGFydE5vZGUgIT09IGVuZE1hcmspIHtcblx0XHRjb25zdCBuID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuXHRcdC8vIElzIG5lZWRlZCBpbiBjYXNlIHRoZSBjaGlsZCB3YXMgcHVsbGVkIG91dCB0aGUgcGFyZW50IGJlZm9yZSBjbGVhcmluZy5cblx0XHRpZiAocGFyZW50ID09PSBzdGFydE5vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHN0YXJ0Tm9kZSk7XG5cdFx0fVxuXHRcdHN0YXJ0Tm9kZSA9IG47XG5cdH1cbn1cblxuY29uc3Qgbm9kZVR5cGUgPSAxMTE7XG5cblxuZXhwb3J0IGNvbnN0IGRpZmZhYmxlID0gKG5vZGUsIG9wZXJhdGlvbikgPT5cblx0bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUgP1xuXHQxIC8gb3BlcmF0aW9uIDwgMCA/XG5cdG9wZXJhdGlvbiA/XG5cdHJlbW92ZU5vZGVzKFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQucGFyZW50Tm9kZSxcblx0XHRub2RlLl9maXJzdENoaWxkLm5leHRTaWJsaW5nLFxuXHRcdG5vZGUuX2xhc3RDaGlsZC5uZXh0U2libGluZ1xuXHQpIHx8IG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlLl9sYXN0Q2hpbGQgOlxuXHRvcGVyYXRpb24gP1xuXHRub2RlLl92YWx1ZU9mKCkgOlxuXHRub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZTtcblxuXG5cbmV4cG9ydCBjb25zdCBtYW51YWxQZXJzaXN0ZW50ID0gKHN0YXJ0LCBlbmQpID0+IHtcblx0aWYoc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0cmV0dXJuIHN0YXJ0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkOiBzdGFydCxcblx0XHRfbGFzdENoaWxkOiBlbmQsXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIiwiY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG57XG5cdGxldCBjYWNoZWQgPSBjYWNoZS5nZXQoYWN0aXZlQ2xhc3MpO1xuXG5cdGlmKGNhY2hlZCkge1xuXHRcdHJldHVybiBjYWNoZWQ7XG5cdH1cblxuXHRsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodG1wKVxuXG5cdGxldCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodG1wKTtcblxuXHR0bXAuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcylcblxuXHRsZXQgZHVyYXRpb24gPSBzdHlsZS50cmFuc2l0aW9uRHVyYXRpb247XG5cblx0dG1wLnJlbW92ZSgpO1xuXG5cdGR1cmF0aW9uID0gcGFyc2VGbG9hdChkdXJhdGlvbi5yZXBsYWNlKC9bXjAtOVxcLl0vZywgJycpKSAqIDEwMDA7XG5cdFxuXHRjYWNoZS5zZXQoYWN0aXZlQ2xhc3MsIGR1cmF0aW9uKTtcblxuXHRyZXR1cm4gZHVyYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc2VkKG5vZGUsIG5hbWUsIG91dCA9IGZhbHNlKSB7XG5cdGxldCBwcmVmaXggPSAnZW50ZXInO1xuXG5cdGlmIChvdXQpIHtcblx0XHRwcmVmaXggPSAnbGVhdmUnO1xuXHR9XG5cblx0bGV0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXG5cdGxldCBhY3RpdmVDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH0tYWN0aXZlYDtcblx0bGV0IHN0YXJ0Q2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9YDtcblx0bGV0IGZpbmlzaENsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfS10b2A7XG5cblx0bGV0IGR1cmF0aW9uID0gZ2V0RHVyYXRpb24obm9kZSwgYWN0aXZlQ2xhc3MsIG91dClcblxuXHRsZXQgZGVmYXVsdENsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lO1xuXHRsZXQgZGVmYXVsdEFjdGl2ZUNsYXNzTmFtZSA9IG5vZGUuY2xhc3NOYW1lICsgJyAnICsgYWN0aXZlQ2xhc3M7XG5cblx0bm9kZS5jbGFzc05hbWUgPSBkZWZhdWx0QWN0aXZlQ2xhc3NOYW1lICsgJyAnICsgc3RhcnRDbGFzcztcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLmNsYXNzTmFtZSA9IGRlZmF1bHRBY3RpdmVDbGFzc05hbWUgKyAnICcgKyBmaW5pc2hDbGFzcztcblx0fSwgMjApO1xuXG5cdC8vIGNsZWFudXBcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bm9kZS5jbGFzc05hbWUgPSBkZWZhdWx0Q2xhc3NOYW1lO1xuXHR9LCBkdXJhdGlvbilcblxuXHRyZXR1cm4ge1xuXHRcdGR1cmF0aW9uXG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdGRlbGF5LFxuXHRcdGR1cmF0aW9uLFxuXHRcdGVmZmVjdCxcblx0XHRjc3M6IHtcblxuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiIn0=