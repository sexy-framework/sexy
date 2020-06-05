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
  LifecycleBindings.set(id, hooks);
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
    } // if(ob._deps) {
    // 	for(let dep of ob._deps) {
    // 		dep.add(fn);
    // 	}
    // }

  }

  if (!skip) {
    fn();
  }

  return function () {
    for (var _iterator3 = _createForOfIteratorHelperLoose(obs), _step3; !(_step3 = _iterator3()).done;) {
      var ob = _step3.value;

      if (ob._observers) {
        ob._observers.delete(fn);
      } // if(ob._deps) {
      // 	for(let dep of ob._deps) {
      // 		dep.delete(fn);
      // 	}
      // }

    }
  };
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

  (0, _lifecycle.dispatchHook)(c.id, 'mounted');
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
    bindNode.replaceWith(parent);
    console.log('start each', parent, endMark);
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
exports.statement = statement;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _utils = __webpack_require__(/*! ../utils.js */ "./packages/render/dist/utils.js");

function statement(node, render, deps) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  }

  var parent;
  var endMark;

  if (render) {
    parent = document.createDocumentFragment();
    endMark = (0, _utils.add)(parent, '');
    node.replaceWith(parent);
  }

  var lastConditionIndex = null; // node = diffable(node, -1);

  var lastNode = null;
  (0, _observable.subscribe)(deps, function () {
    var parent = endMark.parentNode;
    var n = document.createComment('');
    var currentConditionIndex = null;

    for (var i = 0; i < args.length; i += 2) {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        n = renderFn(node, lastConditionIndex !== i);
        if (n.nodeType === 11) n = (0, _utils.persistent)(n) || n;
        currentConditionIndex = i;
        break;
      }
    }

    var hasRendered = currentConditionIndex !== lastConditionIndex;
    lastConditionIndex = currentConditionIndex;

    if (!hasRendered) {
      return;
    } // node


    if (lastNode) {
      parent.removeChild((0, _utils.diffable)(lastNode, -1));
    }

    lastNode = n;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9wYXJzZXIvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3BhcnNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NyZWF0ZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9sb2FkLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvbWFwL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvc3RhdGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsidmFsdWVQcm9wIiwibm9kZSIsImV2ZW50IiwidmFsdWUiLCJkaXJlY3RpdmVzIiwiYmluZCIsImVudGl0eURpcmVjdGl2ZXMiLCJlbnRpdHkiLCJjb25zb2xlIiwiZGlyZWN0aXZlIiwiaXNFeHByZXNzaW9uIiwiTGlmZWN5Y2xlQmluZGluZ3MiLCJIT09LX05BTUVfQ0xFQU5fVFJJR0dFUiIsImlkIiwiaG9va3MiLCJpIiwibmFtZSIsIkRPTV9IT09LX0FUVFIiLCJpc0xpZmVjeWNsZU5vZGUiLCJub2RlcyIsImRpc3BhdGNoSG9vayIsImdldEhJRCIsImFyZ3VtZW50cyIsImRhdGEiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImZuIiwicHJvcCIsInJlbmRlciIsImlzT2JzZXJ2YWJsZSIsInN1YnNjcmliZSIsInJlc3VsdCIsIkFycmF5IiwiYXJncyIsImF0dHJBcmdUb09iaiIsImF0dHJBcmdUb1N0cmluZyIsImxhc3RDbGFzc0Fkb3B0ZWQiLCJ0bXAiLCJ0b1NldCIsInRvUmVtb3ZlIiwic3R5bGVzIiwiYXR0cnMiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwiSEFXQV9JRCIsInVubW91bnRlZCIsIiRob29rcyIsImRldGFpbCIsIm9wdGlvbnMiLCJjIiwiY29tcG9uZW50IiwiY29tcG9uZW50Tm9kZSIsIm1hcmsiLCJhSWR4IiwiYklkeCIsImEiLCJrZXkiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsIm4iLCJnZXQiLCJwYXJlbnQiLCJrZXlfYUVsbSIsImtleV9iRWxtIiwiY3VyRWxtSW5OZXciLCJ3YW50ZWRFbG1Jbk9sZCIsImNsZWFuaW5nIiwiZGlzcG9zZXJzIiwiZGVmYXVsdEEiLCJkb2N1bWVudCIsImVuZE1hcmsiLCJiaW5kTm9kZSIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiZXhwciIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJjaGlsZE5vZGVzIiwidW5zdWJzY3JpYmUiLCJjb250ZW50IiwiZWwiLCJub2RlS2V5IiwiZCIsImRpc3Bvc2VyIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJsYXN0Q29uZGl0aW9uSW5kZXgiLCJjdXJyZW50Q29uZGl0aW9uSW5kZXgiLCJjb25kaXRpb24iLCJyZW5kZXJGbiIsImhhc1JlbmRlcmVkIiwidGVtcGxhdGUiLCIkcmVmcyIsIiRrZXkiLCIkcHJvcHMiLCJjb250ZXh0IiwiJGN1c3RvbUluaXQiLCJfc3RhcnRNYXJrIiwiYWRkIiwiY2FzdE5vZGUiLCJmcmFnT3JOb2RlIiwiZnJhZyIsInN0YXJ0Tm9kZSIsIm5vZGVUeXBlIiwiZGlmZmFibGUiLCJvcGVyYXRpb24iLCJyZW1vdmVOb2RlcyIsInBlcnNpc3RlbnQiLCJmcmFnbWVudCIsImxlbmd0aCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsIl92YWx1ZU9mIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7cUJBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFTyw0Q0FDUDtBQUNDLE1BQUlBLFNBQVMsR0FBYjs7QUFFQSxNQUFHQyxJQUFJLENBQUpBLFNBQUgsWUFBNkI7QUFDNUJELGFBQVMsR0FBVEE7QUFDQTs7QUFFRCw4QkFDQTtBQUNDLFFBQUdFLEtBQUssWUFBUixhQUFpQztBQUNoQ0MsV0FBSyxDQUFMQSxZQUFrQkQsS0FBSyxDQUF2QkM7QUFERCxXQUVPO0FBQ05BLFdBQUssQ0FBQ0YsSUFBSSxDQUFWRSxTQUFVLENBQUwsQ0FBTEE7QUFDQTtBQUNEOztBQUVERixNQUFJLENBQUpBLFNBQUksQ0FBSkEsR0FBa0JFLEtBQWxCRjtBQUVBQSxNQUFJLENBQUpBO0FBRUEsU0FBTyxZQUFNO0FBQ1pBLFFBQUksQ0FBSkE7QUFERDtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDRDs7QUFDQSwwRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBOztBQUVBLElBQU1HLFVBQVUsR0FBRztBQUNsQkMsTUFBSSxFQUFKQTtBQURrQixDQUFuQjs7QUFJTyx3QkFDUDtBQUNDLE1BQUlDLGdCQUFnQixHQUFwQjs7QUFFQSxNQUFHQyxNQUFNLENBQU5BLFVBQWlCQSxNQUFNLENBQU5BLE9BQXBCLFlBQThDO0FBQzdDRCxvQkFBZ0IsR0FBR0MsTUFBTSxDQUFOQSxPQUFuQkQ7QUFDQTs7QUFFRCxPQUFJLElBQUosMEJBQWtDO0FBQ2pDLFFBQUdGLFVBQVUsQ0FBYixJQUFhLENBQWIsRUFB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QUFrQztBQUNqQyxZQUFJeEUsQ0FBQyxHQUFMOztBQUNBLGVBQU9BLENBQUMsR0FBUjtBQUFtQndHLGtCQUFRLENBQVJBLFlBQXFCcEcsS0FBSyxDQUFDSixDQUEzQndHLEVBQTBCLENBQTFCQTtBQUFuQjtBQUNBOztBQUNEO0FBQ0E7QUFWSyxHQUFQO0FBVE0iLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmUnO1xuXG4vLyBzdGF0aWMgcGFyc2VyKGVudGl0eSlcbi8vIFx0e1xuLy8gXHRcdGlmKGVudGl0eS50eXBlICE9PSAnY29tcG9uZW50Jykge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGxldCBtb2RlbERpcmVjdGl2ZSA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlc1tNb2RlbC5nZXROYW1lKCldO1xuXG4vLyBcdFx0aWYobW9kZWxEaXJlY3RpdmUgPT09IHVuZGVmaW5lZCkge1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGVudGl0eS5vcHRpb24ucHJvcHNbJ3ZhbHVlJ10gPSB7XG4vLyBcdFx0XHR2YWx1ZTogYCgkeyBtb2RlbERpcmVjdGl2ZS52YWx1ZS52YWx1ZSB9KSgpYCxcbi8vIFx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcbi8vIFx0XHR9O1xuXHRcdFxuLy8gXHRcdC8vIGdldFxuLy8gXHRcdC8vIGNvbnNvbGUubG9nKGVudGl0eS5vcHRpb24pO1xuLy8gXHR9XG5cbmV4cG9ydCBmdW5jdGlvbiBiaW5kKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB2YWx1ZVByb3AgPSAndmFsdWUnO1xuXG5cdGlmKG5vZGUudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuXHRcdHZhbHVlUHJvcCA9ICdjaGVja2VkJztcblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKGV2ZW50KVxuXHR7XG5cdFx0aWYoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCkge1xuXHRcdFx0dmFsdWUuYXBwbHkobnVsbCwgZXZlbnQuZGV0YWlsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFsdWUobm9kZVt2YWx1ZVByb3BdKTtcblx0XHR9XG5cdH1cblxuXHRub2RlW3ZhbHVlUHJvcF0gPSB2YWx1ZSgpO1xuXG5cdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGVWYWx1ZSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXHR9XG59IiwiaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJ1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90J1xuaW1wb3J0IHsgZ2V0Tm9kZSwgcGFyc2VDb250ZXh0LCBnZXRQcm9wLCBzZXRSZWYsIHNldEtleSB9IGZyb20gJy4vdGVtcGxhdGVzJ1xuaW1wb3J0IHsgc3RhdGVtZW50IH0gZnJvbSAnLi9zdGF0ZW1lbnQnXG5pbXBvcnQgeyBtYXAgfSBmcm9tICcuL21hcCdcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJ1xuaW1wb3J0IHsgY3JlYXRlQ29tcG9uZW50LCBET01fSE9PS19BVFRSIH0gZnJvbSAnLi9jcmVhdGVDb21wb25lbnQnXG5pbXBvcnQgeyBlbWl0IH0gZnJvbSAnLi9lbWl0J1xuaW1wb3J0IHsgY2FsbCB9IGZyb20gJy4vY2FsbCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7XG5cdGF0dHJzLFxuXHRldmVudHMsXG5cdHNsb3QsXG5cdGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsXG5cdHN0YXRlbWVudCxcblx0bWFwLFxuXHRkaXJlY3RpdmUsXG5cdGNhbGwsXG5cdGVtaXQsXG5cdGxvYWRDb21wb25lbnQsXG5cdGNyZWF0ZUNvbXBvbmVudCxcblx0RE9NX0hPT0tfQVRUUlxufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL3BhcnNlci9pbmRleCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG5cdGJpbmQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZW50aXR5KVxue1xuXHRsZXQgZW50aXR5RGlyZWN0aXZlcyA9IHt9O1xuXG5cdGlmKGVudGl0eS5vcHRpb24gJiYgZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzKSB7XG5cdFx0ZW50aXR5RGlyZWN0aXZlcyA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlcztcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHlEaXJlY3RpdmVzKSB7XG5cdFx0aWYoZGlyZWN0aXZlc1tuYW1lXSkge1xuXHRcdFx0ZGlyZWN0aXZlc1tuYW1lXShlbnRpdHksIGVudGl0eURpcmVjdGl2ZXNbbmFtZV0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgVGhlcmUgaXMgbm8gcGFyc2VyIG1vZGlmaWVyIGZvciBkaXJlY3RpdmUgJyR7IG5hbWUgfScgYClcblx0XHR9XG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYmluZChlbnRpdHksIGRpcmVjdGl2ZSlcbntcblx0aWYoZW50aXR5LnR5cGUgIT09ICdjb21wb25lbnQnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZW50aXR5Lm9wdGlvbi5wcm9wc1sndmFsdWUnXSA9IHtcblx0XHR2YWx1ZTogYCgkeyBkaXJlY3RpdmUudmFsdWUgfSkoKWAsXG5cdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHR9O1xufSIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL2JpbmQnO1xuXG5leHBvcnQgeyBiaW5kIH0iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gW107XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRmb3IobGV0IGtleSBpbiBhcmdzKSB7XG5cdFx0XHRpZihhcmdzW2tleV0pIHtcblx0XHRcdFx0cmVzdWx0LnB1c2goa2V5KTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0LnB1c2goYXJncyk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IGxhc3RDbGFzc0Fkb3B0ZWQgPSBbXTtcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHRtcCA9IG5vZGUuY2xhc3NMaXN0O1xuXG5cdFx0bGV0IHRvU2V0ID0gQXJyYXkuZnJvbShcblx0XHRcdG5ldyBTZXQoYXR0ckFyZ1RvU3RyaW5nKHYpKVxuXHRcdCk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGwoZm4sIGhvb2tzLCBub2RlLCByZW5kZXIpXG57XG5cdGlmKGZuID09PSBudWxsKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0cmV0dXJuIGZuKGhvb2tzLCBub2RlLCByZW5kZXIpO1xufSIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufSIsIi8vIGltcG9ydCB7IFJlZ2lzdGVyZWREaXJlY3RpdmVzIH0gZnJvbSAnQGhhd2EvZGlyZWN0aXZlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZSgkaG9va3MsIGRpcmVjdGl2ZSwgbm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcbntcblx0bGV0IHVubW91bnRlZCA9IGRpcmVjdGl2ZShub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxuXG5cdCRob29rcy51bm1vdW50ZWQucHVzaChcblx0XHR1bm1vdW50ZWRcblx0KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBlbWl0KG5vZGUpXG57XG5cdHJldHVybiAobmFtZSwgLi4uYXJncykgPT4ge1xuXHRcdHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG5cdFx0XHRkZXRhaWw6IGFyZ3Ncblx0XHR9KTtcblxuXHRcdG5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImltcG9ydCB7XG5cdGRpc3BhdGNoSG9vayxcbn0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJ1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgYyA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdGxldCBjb21wb25lbnROb2RlID0gYy5ub2RlO1xuXG5cdGlmKHJlbmRlcikge1xuXG5cdFx0bGV0IG1hcmsgPSBjb21wb25lbnROb2RlLmxhc3RDaGlsZDtcblx0XHRcblx0XHRub2RlLnJlcGxhY2VXaXRoKGNvbXBvbmVudE5vZGUpO1xuXG5cdFx0Y29tcG9uZW50Tm9kZSA9IG1hcms7XG5cdH1cblxuXHRkaXNwYXRjaEhvb2soYy5pZCwgJ21vdW50ZWQnKTtcblxuXHRyZXR1cm4gY29tcG9uZW50Tm9kZTtcbn0iLCJpbXBvcnQgeyBmaW5kQW5kRGlzcGF0Y2hIb29rIH0gZnJvbSAnQGhhd2EvbGlmZWN5Y2xlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0bGV0IG4gPSBnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0ZmluZEFuZERpc3BhdGNoSG9vayhuLCAndW5tb3VudGVkJyk7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKG4pO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IG4gPSBnZXQoYVtpXSwgaSwgLTEpO1xuXHRcdFx0XHRmaW5kQW5kRGlzcGF0Y2hIb29rKG4sICd1bm1vdW50ZWQnKTtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQobik7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbi8qKlxuICogTWFwIG92ZXIgYSBsaXN0IG9mIHVuaXF1ZSBpdGVtcyB0aGF0IGNyZWF0ZSBET00gbm9kZXMuXG4gKlxuICogTm8gZHVwbGljYXRlcyBpbiB0aGUgbGlzdCBvZiBpdGVtcyBpcyBhIGhhcmQgcmVxdWlyZW1lbnQsIHRoZSBkaWZmaW5nXG4gKiBhbGdvcml0aG0gd2lsbCBub3Qgd29yayB3aXRoIGR1cGxpY2F0ZSB2YWx1ZXMuIFNlZSBgLi91bmlxdWUuanNgLlxuICpcbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBpdGVtcyAtIEZ1bmN0aW9uIG9yIG9ic2VydmFibGUgdGhhdCBjcmVhdGVzIGEgbGlzdC5cbiAqIEBwYXJhbSAge0Z1bmN0aW9ufSBleHByXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtjbGVhbmluZ11cbiAqIEByZXR1cm4ge0RvY3VtZW50RnJhZ21lbnR9XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcChiaW5kTm9kZSwgaXRlbXMsIGtleUV4cHIsIGV4cHIsIHJlbmRlcikgXG57XG5cdC8vIGNvbnN0IHsgcm9vdCwgc3Vic2NyaWJlLCBzYW1wbGUsIGNsZWFudXAgfSA9IGFwaTtcblxuXHQvLyBEaXNhYmxlIGNsZWFuaW5nIGZvciB0ZW1wbGF0ZXMgYnkgZGVmYXVsdC5cblx0bGV0IGNsZWFuaW5nID0gdHJ1ZTsvLyFleHByLiR0O1xuXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cblx0Ly8gaHlkcmF0aW9uIHByZXBhcmUgXG5cdGlmKHJlbmRlcikge1xuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdGNvbnNvbGUubG9nKCdzdGFydCBlYWNoJywgcGFyZW50LCBlbmRNYXJrKVxuXHR9IGVsc2Uge1xuXHRcdGxldCBfaXRlbXMgPSB2YWx1ZShpdGVtcyk7XG5cdFx0bGV0IG5vZGUgPSBiaW5kTm9kZTtcblx0XHRsZXQgbGFzdE5vZGUgPSBudWxsO1xuXHRcdC8vIHJldHVybjtcblx0XHRmb3IgKGxldCBrZXkgaW4gX2l0ZW1zKSB7XG5cdFx0XHRsZXQgaXRlbSA9IF9pdGVtc1trZXldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cdFx0XHRsZXQgbGFzdEh5ZHJhdGVkTm9kZSA9IG51bGw7XG5cblx0XHRcdGlmKG5vZGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSBleHByKG5vZGUsIGZhbHNlLCBpdGVtS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHRcdG5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUud2FybignbGFzdEh5ZHJhdGVkTm9kZScsIGxhc3RIeWRyYXRlZE5vZGUsIG5vZGUpXG5cdFx0XHRcdFx0bGFzdE5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmKGxhc3RIeWRyYXRlZE5vZGUgJiYgbGFzdEh5ZHJhdGVkTm9kZS5oYXNBdHRyaWJ1dGUpIHtcblx0XHRcdFx0bGV0IGh5ZHJhdGVkTm9kZXMgPSBbXTtcblxuXHRcdFx0XHRpZighbGFzdEh5ZHJhdGVkTm9kZS5oYXNBdHRyaWJ1dGUoJ2RhdGEta2V5JykpIHtcblx0XHRcdFx0XHRsZXQgc3RhcnROb2RlU2VhcmNoID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0XHR3aGlsZShzdGFydE5vZGVTZWFyY2gpIHtcblx0XHRcdFx0XHRcdGh5ZHJhdGVkTm9kZXMudW5zaGlmdChzdGFydE5vZGVTZWFyY2gpO1xuXHRcdFx0XHRcdFx0aWYoc3RhcnROb2RlU2VhcmNoLmhhc0F0dHJpYnV0ZSgnZGF0YS1rZXknKSkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0c3RhcnROb2RlU2VhcmNoID0gc3RhcnROb2RlU2VhcmNoLnByZXZpb3VzU2libGluZztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRkZWZhdWx0QVtrZXldID0gaXRlbTtcblxuXHRcdFx0XHRsZXQgbiA9IGxhc3RIeWRyYXRlZE5vZGU7XG5cblx0XHRcdFx0aWYoaHlkcmF0ZWROb2Rlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0biA9IHBlcnNpc3RlbnQoe1xuXHRcdFx0XHRcdFx0Y2hpbGROb2RlczogaHlkcmF0ZWROb2Rlc1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRub2Rlcy5zZXQoaXRlbUtleSwgbik7XG5cdFx0XHRcdGRpZmZhYmxlKG4sIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKGRlZmF1bHRBKTtcblxuXHRcdGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cblx0XHRpZihsYXN0Tm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0cmVuZGVyID0gdHJ1ZTtcblx0XHRcdGJpbmROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0Tm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5lcnJvcihiaW5kTm9kZSwgbGFzdE5vZGUsIGVuZE1hcmssIGVuZE1hcmsucGFyZW50Tm9kZSk7XG5cdFx0Ly8gZW5kTWFyayA9IGFkZChsYXN0Tm9kZSwgJycpO1xuXHR9XG5cdFxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShpdGVtcywgYSA9PiB7XG5cblx0XHRsZXQgYiA9IHZhbHVlKGl0ZW1zKTtcblxuXHRcdHRvUmVtb3ZlLmNsZWFyKCk7XG5cdFx0Ly8gQXJyYXkuZnJvbSB0byBtYWtlIGEgY29weSBvZiB0aGUgY3VycmVudCBsaXN0LlxuXHRcdGNvbnN0IGNvbnRlbnQgPSBBcnJheS5mcm9tKFxuXHRcdFx0ZGlmZihlbmRNYXJrLnBhcmVudE5vZGUsIGEgfHwgZGVmYXVsdEEsIGIsIGtleUV4cHIsIGFkZE5vZGUsIGVuZE1hcmspXG5cdFx0KTtcblxuXHRcdHRvUmVtb3ZlLmZvckVhY2goZGlzcG9zZSk7XG5cblx0XHRyZXR1cm4gY29udGVudDtcblx0XHQvLyB9KTtcblx0fSwgIXJlbmRlcik7XG5cblx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ1t1bnN1YnNjcmliZV0nLCB1bnN1YnNjcmliZSk7XG5cdC8vIFx0dW5zdWJzY3JpYmUoKTtcblx0Ly8gfSwgMjAwMClcblxuXHQvLyBpZihyZW5kZXIpIHtcblx0Ly8gXHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHQvLyB9XG5cblx0Ly8gZGlzcG9zZUFsbCgpO1xuXG5cdGZ1bmN0aW9uIGFkZE5vZGUoaXRlbSwga2V5LCBpLCBlbCA9IG51bGwpIHtcblx0XHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgbm9kZUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblxuXHRcdGxldCBuID0gbm9kZXMuZ2V0KG5vZGVLZXkpO1xuXHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHR0b1JlbW92ZS5kZWxldGUoaXRlbSk7XG5cblx0XHRcdGlmICghbikge1xuXHRcdFx0XHRuID0gKGVsID8gZWwgOiBleHByKG51bGwsIHRydWUsIG5vZGVLZXksIGl0ZW0sIGtleSkpO1xuXHRcdFx0XHRcblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXHRcdFx0XHRcblx0XHRcdFx0bm9kZXMuc2V0KG5vZGVLZXksIG4pO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoaSA9PT0gLTEpIHtcblx0XHRcdHRvUmVtb3ZlLmFkZChub2RlS2V5KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlmZmFibGUobiwgaSk7XG5cdH1cblxuXHQvLyBjbGVhbnVwKGRpc3Bvc2VBbGwpO1xuXG5cdGZ1bmN0aW9uIGRpc3Bvc2VBbGwoKSB7XG5cdFx0ZGlzcG9zZXJzLmZvckVhY2goZCA9PiBkKCkpO1xuXHRcdGRpc3Bvc2Vycy5jbGVhcigpO1xuXHRcdG5vZGVzLmNsZWFyKCk7XG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcigpO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdFx0bm9kZXMuZGVsZXRlKGl0ZW0pO1xuXHR9XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBhZGQsIHBlcnNpc3RlbnQsIGRpZmZhYmxlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcdFxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaztcblx0XG5cdGlmKHJlbmRlcikge1xuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHR9XG5cblx0bGV0IGxhc3RDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0Ly8gbm9kZSA9IGRpZmZhYmxlKG5vZGUsIC0xKTtcblx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXHRcdGxldCBwYXJlbnQgPSBlbmRNYXJrLnBhcmVudE5vZGU7XG5cblx0XHRsZXQgbiA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdFx0biA9IHJlbmRlckZuKG5vZGUsIGxhc3RDb25kaXRpb25JbmRleCAhPT0gaSk7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBwZXJzaXN0ZW50KG4pIHx8IG47XG5cblx0XHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgaGFzUmVuZGVyZWQgPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggIT09IGxhc3RDb25kaXRpb25JbmRleDtcblxuXHRcdGxhc3RDb25kaXRpb25JbmRleCA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdGlmKCFoYXNSZW5kZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIG5vZGVcblx0XHRpZihsYXN0Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGRpZmZhYmxlKGxhc3ROb2RlLCAtMSkpO1xuXHRcdH1cblxuXHRcdGxhc3ROb2RlID0gbjtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZGlmZmFibGUobiwgMSksIGVuZE1hcmspO1xuXHR9KTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZnJhZyh2YWx1ZSkge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IHZhbHVlO1xuXHRpZiAoIWNoaWxkTm9kZXMgfHwgdmFsdWUubm9kZVR5cGUgIT09IDExKSByZXR1cm47XG5cdGlmIChjaGlsZE5vZGVzLmxlbmd0aCA8IDIpIHtcblx0XHRyZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0fVxuXG5cdC8vIEZvciBhIGZyYWdtZW50IG9mIDIgZWxlbWVudHMgb3IgbW9yZSBhZGQgYSBzdGFydE1hcmsuIFRoaXMgaXMgcmVxdWlyZWRcblx0Ly8gZm9yIG11bHRpcGxlIG5lc3RlZCBjb25kaXRpb25hbCBjb21wdXRlZHMgdGhhdCByZXR1cm4gZnJhZ21lbnRzLlxuXHRjb25zdCBfc3RhcnRNYXJrID0gYWRkKHZhbHVlLCAnJywgY2hpbGROb2Rlc1swXSk7XG5cblx0cmV0dXJuIHtcblx0XHRfc3RhcnRNYXJrXG5cdH07XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZChwYXJlbnQsIHZhbHVlLCBlbmRNYXJrID0gbnVsbCkge1xuXHR2YWx1ZSA9IGNhc3ROb2RlKHZhbHVlKTtcblxuXHRjb25zdCBmcmFnT3JOb2RlID0gZnJhZyh2YWx1ZSkgfHwgdmFsdWU7XG5cblx0Ly8gSWYgZW5kTWFyayBpcyBgbnVsbGAsIHZhbHVlIHdpbGwgYmUgYWRkZWQgdG8gdGhlIGVuZCBvZiB0aGUgbGlzdC5cblx0cGFyZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgZW5kTWFyayAmJiBlbmRNYXJrLnBhcmVudE5vZGUgJiYgZW5kTWFyayk7XG5cblx0cmV0dXJuIGZyYWdPck5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXN0Tm9kZSh2YWx1ZSkge1xuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuXHRcdHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cdH1cblx0aWYgKCEodmFsdWUgaW5zdGFuY2VvZiBOb2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHR3aGlsZSAoc3RhcnROb2RlICYmIHN0YXJ0Tm9kZSAhPT0gZW5kTWFyaykge1xuXHRcdGNvbnN0IG4gPSBzdGFydE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0Ly8gSXMgbmVlZGVkIGluIGNhc2UgdGhlIGNoaWxkIHdhcyBwdWxsZWQgb3V0IHRoZSBwYXJlbnQgYmVmb3JlIGNsZWFyaW5nLlxuXHRcdGlmIChwYXJlbnQgPT09IHN0YXJ0Tm9kZS5wYXJlbnROb2RlKSB7XG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoc3RhcnROb2RlKTtcblx0XHR9XG5cdFx0c3RhcnROb2RlID0gbjtcblx0fVxufVxuXG5jb25zdCBub2RlVHlwZSA9IDExMTtcblxuXG5leHBvcnQgY29uc3QgZGlmZmFibGUgPSAobm9kZSwgb3BlcmF0aW9uKSA9PlxuXHRub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZSA/XG5cdDEgLyBvcGVyYXRpb24gPCAwID9cblx0b3BlcmF0aW9uID9cblx0cmVtb3ZlTm9kZXMoXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5wYXJlbnROb2RlLFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQubmV4dFNpYmxpbmcsXG5cdFx0bm9kZS5fbGFzdENoaWxkLm5leHRTaWJsaW5nXG5cdCkgfHwgbm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGUuX2xhc3RDaGlsZCA6XG5cdG9wZXJhdGlvbiA/XG5cdG5vZGUuX3ZhbHVlT2YoKSA6XG5cdG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlO1xuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=