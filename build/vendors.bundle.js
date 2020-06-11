(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/hawa/directives/src/custom/bind.js":
/*!*****************************************************!*\
  !*** ./packages/hawa/directives/src/custom/bind.js ***!
  \*****************************************************/
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
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
/*! exports provided: html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html", function() { return html; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function html(node, options, html, render) {
  if (render) {
    node.innerHTML = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["value"])(html);
  }

  return function () {// node.removeEventListener('input', updateValue);
  };
}

/***/ }),

/***/ "./packages/hawa/directives/src/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/directives/src/index.js ***!
  \***********************************************/
/*! exports provided: bind, html, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom/bind */ "./packages/hawa/directives/src/custom/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _custom_bind__WEBPACK_IMPORTED_MODULE_0__["bind"]; });

/* harmony import */ var _custom_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom/html */ "./packages/hawa/directives/src/custom/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _custom_html__WEBPACK_IMPORTED_MODULE_1__["html"]; });

/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./packages/hawa/directives/src/parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _parser__WEBPACK_IMPORTED_MODULE_2__["parser"]; });





/***/ }),

/***/ "./packages/hawa/directives/src/parser.js":
/*!************************************************!*\
  !*** ./packages/hawa/directives/src/parser.js ***!
  \************************************************/
/*! exports provided: parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony import */ var _parser_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser/index */ "./packages/hawa/directives/src/parser/index.js");

var directives = {
  bind: _parser_index__WEBPACK_IMPORTED_MODULE_0__["bind"]
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
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return bind; });
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
/*! exports provided: bind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bind */ "./packages/hawa/directives/src/parser/bind.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return _bind__WEBPACK_IMPORTED_MODULE_0__["bind"]; });




/***/ }),

/***/ "./packages/hawa/observable/src/index.js":
/*!***********************************************!*\
  !*** ./packages/hawa/observable/src/index.js ***!
  \***********************************************/
/*! exports provided: getRoot, root, cleanup, value, observable, computed, subscribe, isObservable, watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanup", function() { return cleanup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ "./packages/hawa/observable/src/tracker.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var tracking = new _tracker__WEBPACK_IMPORTED_MODULE_0__["Tracker"]();
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
  var newTracking = new _tracker__WEBPACK_IMPORTED_MODULE_0__["Tracker"]();

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
/*! exports provided: Tracker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tracker", function() { return Tracker; });
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

/***/ }),

/***/ "./packages/hawa/render/src/attrs.js":
/*!*******************************************!*\
  !*** ./packages/hawa/render/src/attrs.js ***!
  \*******************************************/
/*! exports provided: attrArgToObj, attrArgToString, makeClass, makeStyles, attrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrArgToObj", function() { return attrArgToObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrArgToString", function() { return attrArgToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeClass", function() { return makeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return makeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return attrs; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");


function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function attrArgToObj(args) {
  var result = {};

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(result, attrArgToObj(args[i]));
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
  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
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
  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
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
      Object(hawa_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
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
/*! exports provided: call */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "call", function() { return call; });
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
/*! exports provided: DOM_HOOK_ATTR, HAWA_ID, createComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM_HOOK_ATTR", function() { return DOM_HOOK_ATTR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAWA_ID", function() { return HAWA_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return createComponent; });
var DOM_HOOK_ATTR = 'data-hid';
var HAWA_ID = 0;
function createComponent(node, render) {
  var id;

  if (render) {
    id = ++HAWA_ID + '';
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
/*! exports provided: directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function directive($hooks, directive, node, options, value, render) {
  var unmounted = directive(node, options, value, render);
  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(unmounted);
}

/***/ }),

/***/ "./packages/hawa/render/src/dom.js":
/*!*****************************************!*\
  !*** ./packages/hawa/render/src/dom.js ***!
  \*****************************************/
/*! exports provided: render, refresh, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return refresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./packages/hawa/render/src/load.js");


function render(component, rootNode) {
  var root = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["getRoot"])();
  Object(_load__WEBPACK_IMPORTED_MODULE_1__["lazy"])(component, function (component) {
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
  var root = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["getRoot"])();
  Object(_load__WEBPACK_IMPORTED_MODULE_1__["lazy"])(component, function (component) {
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
/*! exports provided: emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
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
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
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
/*! exports provided: attrs, events, slot, getNode, parseContext, getProp, setRef, setKey, createHooks, statement, map, directive, createComponent, DOM_HOOK_ATTR, emit, call, loadComponent, render, hydrate, refresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attrs */ "./packages/hawa/render/src/attrs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _attrs__WEBPACK_IMPORTED_MODULE_0__["attrs"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./packages/hawa/render/src/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_1__["events"]; });

/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot */ "./packages/hawa/render/src/slot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slot", function() { return _slot__WEBPACK_IMPORTED_MODULE_2__["slot"]; });

/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./packages/hawa/render/src/templates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["getNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseContext", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["parseContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProp", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["getProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["setRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKey", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["setKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHooks", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["createHooks"]; });

/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statement */ "./packages/hawa/render/src/statement/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statement", function() { return _statement__WEBPACK_IMPORTED_MODULE_4__["statement"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ "./packages/hawa/render/src/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_5__["map"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive */ "./packages/hawa/render/src/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_6__["directive"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createComponent */ "./packages/hawa/render/src/createComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_7__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_HOOK_ATTR", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_7__["DOM_HOOK_ATTR"]; });

/* harmony import */ var _emit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emit */ "./packages/hawa/render/src/emit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return _emit__WEBPACK_IMPORTED_MODULE_8__["emit"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call */ "./packages/hawa/render/src/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call__WEBPACK_IMPORTED_MODULE_9__["call"]; });

/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./load */ "./packages/hawa/render/src/load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadComponent", function() { return _load__WEBPACK_IMPORTED_MODULE_10__["loadComponent"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom */ "./packages/hawa/render/src/dom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _dom__WEBPACK_IMPORTED_MODULE_11__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return _dom__WEBPACK_IMPORTED_MODULE_11__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return _dom__WEBPACK_IMPORTED_MODULE_11__["refresh"]; });












 // export {
// 	attrs,
// 	events,
// 	slot,
// 	getNode, setRef, setKey, getProp, parseContext,
// 	statement,
// 	map,
// 	directive,
// 	call,
// 	emit,
// 	loadComponent,
// 	createComponent,
// 	DOM_HOOK_ATTR
// }

/***/ }),

/***/ "./packages/hawa/render/src/load.js":
/*!******************************************!*\
  !*** ./packages/hawa/render/src/load.js ***!
  \******************************************/
/*! exports provided: isLazy, lazy, loadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLazy", function() { return isLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponent", function() { return loadComponent; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./packages/hawa/render/src/utils.js");


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

  var endMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["castNode"])('');
  var startMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["castNode"])(''); // console.log(node.parentNode.childNodes);

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
/*! exports provided: diff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diff", function() { return diff; });
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
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff.js */ "./packages/hawa/render/src/map/diff.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./packages/hawa/render/src/utils.js");
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var hawa_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hawa/transition */ "./packages/hawa/transition/src/index.js");




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
  var curTracker = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["getRoot"])(); //!expr.$t;

  var parent;
  var endMark;
  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = []; // hydration prepare 

  if (render) {
    parent = document.createDocumentFragment();
    endMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["add"])(parent, '');
    bindNode.replaceWith(parent);
  } else {
    (function () {
      var _items = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["value"])(items);

      var node = bindNode;
      var lastNode = null; // return;

      var _loop = function _loop(key) {
        var item = _items[key];
        var itemKey = keyExpr(item, key);
        var lastHydratedNode = null;

        if (node && node.getAttribute) {
          if (node.getAttribute('data-key') == itemKey) {
            lastHydratedNode = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["root"])(function (disposal) {
              disposers.set(itemKey, disposal);
              return expr(node, false, itemKey, item, key);
            }, curTracker);
            var n = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["manualPersistent"])(node, lastHydratedNode);
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

  var unsubscribe = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(items, function (a) {
    var b = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["value"])(items);
    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from(Object(_diff_js__WEBPACK_IMPORTED_MODULE_0__["diff"])(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark));
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
        n = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_2__["root"])(function (disposal) {
          disposers.set(nodeKey, disposal);
          return expr(null, true, nodeKey, item, key);
        }, curTracker);
        if (n.nodeType === 11) n = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["persistent"])(n) || n;
        nodes.set(nodeKey, n);
      }
    } else if (i === -1) {
      toRemove.add(nodeKey);
      var disposer = disposers.get(nodeKey);

      if (disposer) {
        disposers.set(nodeKey, disposer.bind(null, function () {
          endMark.parentNode.removeChild(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["diffable"])(n, -1));
        }));
      }

      return;
    }

    return Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["diffable"])(n, i);
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
/*! exports provided: slot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slot", function() { return slot; });
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
/*! exports provided: createInitFragment, getInitValue, statement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitFragment", function() { return createInitFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitValue", function() { return getInitValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statement", function() { return statement; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./packages/hawa/render/src/utils.js");


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
    parent.removeChild(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["diffable"])(cleanNodes, -1));
  }

  if (render) {
    var placeholder = document.createComment('');
    parent = document.createDocumentFragment();
    startMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["add"])(parent, '');
    placeholder = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["add"])(parent, placeholder);
    endMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["add"])(parent, '');
    node.replaceWith(parent);
    node = placeholder;
    parent = endMark.parentNode;
    cleanup();
  } else {
    parent = node.parentNode;
    startMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["castNode"])('');
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

  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(deps, function () {
    toRemove.forEach(dispose);
    var n = document.createComment('');
    var currentConditionIndex = null;

    var _loop = function _loop() {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        n = Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["root"])(function (dispose) {
          toRemove.add(i);
          disposers.set(i, dispose);
          return renderFn(startMark.nextSibling, lastConditionIndex !== i);
        });
        if (n.nodeType === 11) n = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["persistent"])(n) || n;
        currentConditionIndex = i;
        return "break";
      }
    };

    for (var i = 0; i < args.length; i += 2) {
      var _ret = _loop();

      if (_ret === "break") break;
    }

    if (isFirstCall && !render) {
      endMark = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["castNode"])('');

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


    parent.insertBefore(Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["diffable"])(n, 1), endMark);
  });
  return endMark;
}

/***/ }),

/***/ "./packages/hawa/render/src/templates.js":
/*!***********************************************!*\
  !*** ./packages/hawa/render/src/templates.js ***!
  \***********************************************/
/*! exports provided: createHooks, getNode, setRef, setKey, getProp, parseContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHooks", function() { return createHooks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return getNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return setRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setKey", function() { return setKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProp", function() { return getProp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseContext", function() { return parseContext; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");

function createHooks(hooks) {
  if (!hooks.unmounted) {
    return;
  }

  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(hooks.unmounted);
}
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

  Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["watch"])($key, function () {
    node.setAttribute('data-key', $key);
  }, render);
}
function getProp($props, name, seed) {
  if ($props[name] === undefined) {
    return function () {
      return seed;
    };
  }

  if (Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["isObservable"])($props[name])) {
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
/*! exports provided: frag, add, castNode, removeNodes, diffable, manualPersistent, persistent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frag", function() { return frag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castNode", function() { return castNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodes", function() { return removeNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "diffable", function() { return diffable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manualPersistent", function() { return manualPersistent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistent", function() { return persistent; });
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

/***/ }),

/***/ "./packages/hawa/src/index.js":
/*!************************************!*\
  !*** ./packages/hawa/src/index.js ***!
  \************************************/
/*! exports provided: render, hydrate, refresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hawa_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/render */ "./packages/hawa/render/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return hawa_render__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hawa_render__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return hawa_render__WEBPACK_IMPORTED_MODULE_0__["refresh"]; });



/***/ }),

/***/ "./packages/hawa/transition/src/classed.js":
/*!*************************************************!*\
  !*** ./packages/hawa/transition/src/classed.js ***!
  \*************************************************/
/*! exports provided: classed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classed", function() { return classed; });
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
/*! exports provided: fade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return fade; });
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
/*! exports provided: fade, classed, transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony import */ var hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hawa/observable */ "./packages/hawa/observable/src/index.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade */ "./packages/hawa/transition/src/fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _fade__WEBPACK_IMPORTED_MODULE_1__["fade"]; });

/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classed */ "./packages/hawa/transition/src/classed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classed", function() { return _classed__WEBPACK_IMPORTED_MODULE_2__["classed"]; });




function transition(node, t_in, t_in_opts, t_out, t_out_opts) {
  if (t_in) {
    transition_in(node, t_in, t_in_opts);
  }

  if (t_out) {
    Object(hawa_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(transition_out.bind(null, node, t_out, t_out_opts));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL2N1c3RvbS9iaW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvZGlyZWN0aXZlcy9zcmMvY3VzdG9tL2h0bWwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9kaXJlY3RpdmVzL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL2RpcmVjdGl2ZXMvc3JjL3BhcnNlci9iaW5kLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvZGlyZWN0aXZlcy9zcmMvcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2Evb2JzZXJ2YWJsZS9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9vYnNlcnZhYmxlL3NyYy90cmFja2VyLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvY2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvY3JlYXRlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvZW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvbWFwL2RpZmYuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL21hcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3JlbmRlci9zcmMvc3RhdGVtZW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvcmVuZGVyL3NyYy90ZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS9yZW5kZXIvc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2Evc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL2hhd2EvdHJhbnNpdGlvbi9zcmMvY2xhc3NlZC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9oYXdhL3RyYW5zaXRpb24vc3JjL2ZhZGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvaGF3YS90cmFuc2l0aW9uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJiaW5kIiwibm9kZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsInJlbmRlciIsInZhbHVlUHJvcCIsInR5cGUiLCJ1cGRhdGVWYWx1ZSIsImV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJhcHBseSIsImRldGFpbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaHRtbCIsImlubmVySFRNTCIsImRpcmVjdGl2ZXMiLCJwYXJzZXIiLCJlbnRpdHkiLCJlbnRpdHlEaXJlY3RpdmVzIiwib3B0aW9uIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwiZGlyZWN0aXZlIiwicHJvcHMiLCJpc0V4cHJlc3Npb24iLCJ0cmFja2luZyIsIlRyYWNrZXIiLCJnZXRSb290Iiwicm9vdCIsImZuIiwiY3VzdG9tUGFyZW50IiwidHJhbnNQYXJlbnQiLCJwcmV2VHJhY2tpbmciLCJuZXdUcmFja2luZyIsImFkZENoaWxkIiwicmVzdWx0IiwiY2FsbGJhY2siLCJjbGVhbnVwIiwiZGlzcG9zYWwiLCIkbyIsIm9ic2VydmFibGUiLCJkYXRhIiwibmV4dFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX29ic2VydmVycyIsImZvckVhY2giLCJvYnNlcnZlciIsIl9mcmVzaCIsIlNldCIsImNvbXB1dGVkIiwib2JzIiwiY29uY2F0Iiwib2IiLCJ1bmRlZmluZWQiLCJhZGQiLCJ1cGRhdGUiLCJzdWJzY3JpYmUiLCJza2lwIiwibGFzdFZhbHVlIiwidW5zdWJzY3JpYmUiLCJkZWxldGUiLCJpc09ic2VydmFibGUiLCJwcm9wIiwid2F0Y2giLCJjaGlsZHJlbiIsInBhcmVudCIsImRpc3Bvc2FscyIsInNldFBhcmVudCIsInRyYWNrZXIiLCJtYXhEdXJhdGlvbiIsImR1cmF0aW9uIiwiY2xlYXIiLCJjaGlsZCIsInNldFRpbWVvdXQiLCJhdHRyQXJnVG9PYmoiLCJhcmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImF0dHJBcmdUb1N0cmluZyIsImtleSIsInB1c2giLCJtYWtlQ2xhc3MiLCJsYXN0Q2xhc3NBZG9wdGVkIiwidiIsInRtcCIsImNsYXNzTGlzdCIsInRvU2V0IiwiZnJvbSIsInRvUmVtb3ZlIiwiZmlsdGVyIiwieCIsImluY2x1ZGVzIiwicmVtb3ZlIiwibWFrZVN0eWxlcyIsInN0eWxlcyIsInN0eWxlIiwiYXR0cnMiLCJzZXRBdHRyaWJ1dGUiLCJjYWxsIiwiaG9va3MiLCJET01fSE9PS19BVFRSIiwiSEFXQV9JRCIsImNyZWF0ZUNvbXBvbmVudCIsImlkIiwiZ2V0QXR0cmlidXRlIiwiJGhvb2tzIiwidW5tb3VudGVkIiwiY29tcG9uZW50Iiwicm9vdE5vZGUiLCJsYXp5IiwiYyIsImFwcGVuZENoaWxkIiwibW91bnRlZCIsInJlZnJlc2giLCJoeWRyYXRlIiwiZmlyc3RDaGlsZCIsImVtaXQiLCJkaXNwYXRjaEV2ZW50IiwiZXZlbnRzIiwiaXNMYXp5IiwiUHJvbWlzZSIsInRoZW4iLCJtb2R1bGUiLCJkZWZhdWx0IiwibG9hZENvbXBvbmVudCIsImVuZE1hcmsiLCJjYXN0Tm9kZSIsInN0YXJ0TWFyayIsImFmdGVyIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImNvbXBvbmVudE5vZGUiLCJyZXBsYWNlV2l0aCIsImRpZmYiLCJhIiwiYiIsImtleUV4cHIiLCJnZXQiLCJiZWZvcmUiLCJhSWR4IiwiTWFwIiwiYklkeCIsImoiLCJzZXQiLCJhRWxtIiwiYkVsbSIsImtleV9hRWxtIiwia2V5X2JFbG0iLCJjdXJFbG1Jbk5ldyIsIndhbnRlZEVsbUluT2xkIiwibWFwIiwiYmluZE5vZGUiLCJpdGVtcyIsImV4cHIiLCJjdXJUcmFja2VyIiwiZGlzcG9zZXJzIiwibm9kZXMiLCJkZWZhdWx0QSIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwibiIsIm1hbnVhbFBlcnNpc3RlbnQiLCJuZXh0U2libGluZyIsImNyZWF0ZVRleHROb2RlIiwiY29udGVudCIsImFkZE5vZGUiLCJkaXNwb3NlIiwibm9kZUtleSIsIm5vZGVUeXBlIiwicGVyc2lzdGVudCIsImRpc3Bvc2VyIiwicmVtb3ZlQ2hpbGQiLCJkaWZmYWJsZSIsInNsb3QiLCIkc2xvdHMiLCJzbG90Tm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJzdGFydCIsImVuZCIsImlzU2FtZU5vZGUiLCJzaGlmdCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsImdldEluaXRWYWx1ZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJzdGF0ZW1lbnQiLCJkZXBzIiwiY2xlYW5Ob2RlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29tbWVudCIsImxhc3RDb25kaXRpb25JbmRleCIsImlzRmlyc3RDYWxsIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiaGFzUmVuZGVyZWQiLCJjcmVhdGVIb29rcyIsImdldE5vZGUiLCJ0ZW1wbGF0ZSIsImNsb25lTm9kZSIsInNldFJlZiIsIiRyZWZzIiwic2V0S2V5IiwiJGtleSIsImdldFByb3AiLCIkcHJvcHMiLCJzZWVkIiwicGFyc2VDb250ZXh0IiwiY29udGV4dCIsIiRjdXN0b21Jbml0IiwiZnJhZyIsImNoaWxkTm9kZXMiLCJfc3RhcnRNYXJrIiwiZnJhZ09yTm9kZSIsIk5vZGUiLCJyZW1vdmVOb2RlcyIsInN0YXJ0Tm9kZSIsIm9wZXJhdGlvbiIsIl92YWx1ZU9mIiwiZnJhZ21lbnQiLCJjYWNoZSIsImdldER1cmF0aW9uIiwiYWN0aXZlQ2xhc3MiLCJvdXQiLCJjYWNoZWQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsImNsYXNzZWQiLCJwcmVmaXgiLCJzdGFydENsYXNzIiwiZmluaXNoQ2xhc3MiLCJmYWRlIiwiZGVsYXkiLCJlZmZlY3QiLCJjc3MiLCJ0cmFuc2l0aW9uIiwidF9pbiIsInRfaW5fb3B0cyIsInRfb3V0IiwidF9vdXRfb3B0cyIsInRyYW5zaXRpb25faW4iLCJ0cmFuc2l0aW9uX291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBTyxTQUFTQSxJQUFULENBQWNDLElBQWQsRUFBb0JDLE9BQXBCLEVBQTZCQyxLQUE3QixFQUFvQ0MsTUFBcEMsRUFDUDtBQUNDLE1BQUlDLFNBQVMsR0FBRyxPQUFoQjs7QUFFQSxNQUFHSixJQUFJLENBQUNLLElBQUwsS0FBYyxVQUFqQixFQUE2QjtBQUM1QkQsYUFBUyxHQUFHLFNBQVo7QUFDQTs7QUFFRCxXQUFTRSxXQUFULENBQXFCQyxLQUFyQixFQUNBO0FBQ0MsUUFBR0EsS0FBSyxZQUFZQyxXQUFwQixFQUFpQztBQUNoQ04sV0FBSyxDQUFDTyxLQUFOLENBQVksSUFBWixF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QUEsMkJBRHdDN0ssUUFDeEM7QUFBQSxNQUR3Q0EsUUFDeEMsOEJBRG1ELEdBQ25EO0FBQ0MsU0FBTztBQUNONkssU0FBSyxFQUFMQSxLQURNO0FBRU43SyxZQUFRLEVBQVJBLFFBRk07QUFHTjhLLFVBQU0sRUFBTkEsTUFITTtBQUlOQyxPQUFHLEVBQUU7QUFKQyxHQUFQO0FBUUEsQzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sU0FBU0MsVUFBVCxDQUFvQnhQLElBQXBCLEVBQTBCeVAsSUFBMUIsRUFBZ0NDLFNBQWhDLEVBQTJDQyxLQUEzQyxFQUFrREMsVUFBbEQsRUFDUDtBQUNDLE1BQUdILElBQUgsRUFBUztBQUNSSSxpQkFBYSxDQUFDN1AsSUFBRCxFQUFPeVAsSUFBUCxFQUFhQyxTQUFiLENBQWI7QUFDQTs7QUFFRCxNQUFHQyxLQUFILEVBQVU7QUFDVHJOLG1FQUFPLENBQ053TixjQUFjLENBQUMvUCxJQUFmLENBQW9CLElBQXBCLEVBQTBCQyxJQUExQixFQUFnQzJQLEtBQWhDLEVBQXVDQyxVQUF2QyxDQURNLENBQVA7QUFHQTtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUI3UCxJQUF2QixFQUE2QndQLFVBQTdCLEVBQXlDdlAsT0FBekMsRUFDQTtBQUNDLFNBQU91UCxVQUFVLENBQUN4UCxJQUFELEVBQU9DLE9BQVAsQ0FBakI7QUFDQTs7QUFFRCxTQUFTNlAsY0FBVCxDQUF3QjlQLElBQXhCLEVBQThCd1AsVUFBOUIsRUFBMEN2UCxPQUExQyxFQUNBO0FBQ0MsU0FBT3VQLFVBQVUsQ0FBQ3hQLElBQUQsRUFBT0MsT0FBUCxFQUFnQixJQUFoQixDQUFqQjtBQUNBLEMiLCJmaWxlIjoidmVuZG9ycy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYmluZChub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdmFsdWVQcm9wID0gJ3ZhbHVlJztcblxuXHRpZihub2RlLnR5cGUgPT09ICdjaGVja2JveCcpIHtcblx0XHR2YWx1ZVByb3AgPSAnY2hlY2tlZCc7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVWYWx1ZShldmVudClcblx0e1xuXHRcdGlmKGV2ZW50IGluc3RhbmNlb2YgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdHZhbHVlLmFwcGx5KG51bGwsIGV2ZW50LmRldGFpbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhbHVlKG5vZGVbdmFsdWVQcm9wXSk7XG5cdFx0fVxuXHR9XG5cblx0bm9kZVt2YWx1ZVByb3BdID0gdmFsdWUoKTtcblxuXHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdXBkYXRlVmFsdWUpO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0bm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblx0fVxufVxuIiwiaW1wb3J0IHsgdmFsdWUgfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBodG1sKG5vZGUsIG9wdGlvbnMsIGh0bWwsIHJlbmRlcilcbntcblx0aWYocmVuZGVyKSB7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSB2YWx1ZShodG1sKTtcblx0fVxuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0Ly8gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZVZhbHVlKTtcblx0fVxufVxuIiwiXG5leHBvcnQgeyBiaW5kIH0gZnJvbSAnLi9jdXN0b20vYmluZCc7XG5leHBvcnQgeyBodG1sIH0gZnJvbSAnLi9jdXN0b20vaHRtbCc7XG5leHBvcnQgeyBwYXJzZXIgfSBmcm9tICcuL3BhcnNlcic7XG5cbiIsImltcG9ydCB7IGJpbmQgfSBmcm9tICcuL3BhcnNlci9pbmRleCc7XG5cbmNvbnN0IGRpcmVjdGl2ZXMgPSB7XG5cdGJpbmQsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXIoZW50aXR5KVxue1xuXHRsZXQgZW50aXR5RGlyZWN0aXZlcyA9IHt9O1xuXG5cdGlmKGVudGl0eS5vcHRpb24gJiYgZW50aXR5Lm9wdGlvbi5kaXJlY3RpdmVzKSB7XG5cdFx0ZW50aXR5RGlyZWN0aXZlcyA9IGVudGl0eS5vcHRpb24uZGlyZWN0aXZlcztcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHlEaXJlY3RpdmVzKSB7XG5cdFx0aWYoZGlyZWN0aXZlc1tuYW1lXSkge1xuXHRcdFx0ZGlyZWN0aXZlc1tuYW1lXShlbnRpdHksIGVudGl0eURpcmVjdGl2ZXNbbmFtZV0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2FybihgVGhlcmUgaXMgbm8gcGFyc2VyIG1vZGlmaWVyIGZvciBkaXJlY3RpdmUgJyR7IG5hbWUgfScgYClcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBiaW5kKGVudGl0eSwgZGlyZWN0aXZlKVxue1xuXHRpZihlbnRpdHkudHlwZSAhPT0gJ2NvbXBvbmVudCcpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRlbnRpdHkub3B0aW9uLnByb3BzWyd2YWx1ZSddID0ge1xuXHRcdHZhbHVlOiBgKCR7IGRpcmVjdGl2ZS52YWx1ZSB9KSgpYCxcblx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdH07XG59XG4iLCJpbXBvcnQgeyBiaW5kIH0gZnJvbSAnLi9iaW5kJztcblxuZXhwb3J0IHsgYmluZCB9XG4iLCJpbXBvcnQgeyBUcmFja2VyIH0gZnJvbSAnLi90cmFja2VyJztcblxubGV0IHRyYWNraW5nID0gbmV3IFRyYWNrZXIoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3QoKVxue1xuXHRyZXR1cm4gdHJhY2tpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb290KGZuLCBjdXN0b21QYXJlbnQgPSBudWxsLCB0cmFuc1BhcmVudCA9IG51bGwpXG57XG5cdGxldCBwcmV2VHJhY2tpbmcgPSB0cmFja2luZztcblx0bGV0IG5ld1RyYWNraW5nID0gbmV3IFRyYWNrZXIoKTtcblxuXHRpZihjdXN0b21QYXJlbnQpIHtcblx0XHRjdXN0b21QYXJlbnQuYWRkQ2hpbGQobmV3VHJhY2tpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRyYWNraW5nLmFkZENoaWxkKG5ld1RyYWNraW5nKTtcblx0fVxuXHRcblx0dHJhY2tpbmcgPSBuZXdUcmFja2luZztcblxuXHRsZXQgcmVzdWx0ID0gZm4oKGNhbGxiYWNrKSA9PiB7XG5cdFx0bmV3VHJhY2tpbmcuY2xlYW51cChjYWxsYmFjayk7XG5cdH0pO1xuXG5cdHRyYWNraW5nID0gcHJldlRyYWNraW5nO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbnVwKGZuKVxue1xuXHR0cmFja2luZy5kaXNwb3NhbChmbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2YWx1ZSh2YWx1ZSlcbntcblx0aWYodmFsdWUuJG8pIHtcblx0XHRyZXR1cm4gdmFsdWUoKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmFibGUodmFsdWUpXG57XG5cdGZ1bmN0aW9uIGRhdGEobmV4dFZhbHVlKVxuXHR7XG5cdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHR2YWx1ZSA9IG5leHRWYWx1ZTtcblxuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IHsgb2JzZXJ2ZXIuX2ZyZXNoID0gZmFsc2U7IH0pO1xuXHRcdGRhdGEuX29ic2VydmVycy5mb3JFYWNoKG9ic2VydmVyID0+IG9ic2VydmVyKCkpO1xuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0ZGF0YS5fb2JzZXJ2ZXJzID0gbmV3IFNldCgpO1xuXHRkYXRhLiRvID0gdHJ1ZTtcblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZWQob2JzLCB2YWx1ZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRpZihvYi4kbyAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRvYi5fb2JzZXJ2ZXJzLmFkZCh1cGRhdGUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGRhdGEoKVxuXHR7XG5cdFx0aWYoIXVwZGF0ZS5fZnJlc2gpIHtcblx0XHRcdHVwZGF0ZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlKClcblx0e1xuXHRcdHVwZGF0ZS5fZnJlc2ggPSB0cnVlO1xuXG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIoKSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRkYXRhLl9vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cdGRhdGEuJG8gPSB0cnVlO1xuXG5cdHVwZGF0ZSgpO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlKG9icywgdmFsdWUsIHNraXAgPSBmYWxzZSlcbntcblx0b2JzID0gW10uY29uY2F0KG9icyk7XG5cblx0Ly8gY2hhbmdlIHN1YnNjcmliZSBmdW5jdGlvbiB0byBsYXN0IHZhbHVlIG1lbW9yaXplXG5cdGxldCBsYXN0VmFsdWUgPSBudWxsO1xuXG5cdGxldCBmbiA9ICgpID0+IHtcblx0XHRsYXN0VmFsdWUgPSB2YWx1ZShsYXN0VmFsdWUpO1xuXHR9XG5cblx0Ly8gQWRkIHN1YnNjcmliZSB0byBvYnNlcnZlcnMgb2Ygb2JzZXJ2YWJsZXNcblx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRpZihvYi5fb2JzZXJ2ZXJzKSB7XG5cdFx0XHRvYi5fb2JzZXJ2ZXJzLmFkZChmbik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FsbCBzdWJzY3JpYmUgaWYgbm90IHNraXBwaW5nIFxuXHRpZighc2tpcCkge1xuXHRcdGZuKCk7XG5cdH1cblxuXHRsZXQgdW5zdWJzY3JpYmUgPSAoKSA9PiB7XG5cdFx0Zm9yKGxldCBvYiBvZiBvYnMpIHtcblx0XHRcdGlmKG9iLl9vYnNlcnZlcnMpIHtcblx0XHRcdFx0b2IuX29ic2VydmVycy5kZWxldGUoZm4pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjbGVhbnVwKHVuc3Vic2NyaWJlKTtcblxuXHRyZXR1cm4gdW5zdWJzY3JpYmU7XG59XG5cbi8vIElzIHByb3BlcnR5IG9ic2VydmFibGUgXG5leHBvcnQgZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHByb3ApXG57XG5cdGlmKHByb3AgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiBwcm9wLiRvICE9PSB1bmRlZmluZWQgfHwgdHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbic7XG59XG5cbi8qKlxuICogV2F0Y2ggcHJvcGVydHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdhdGNoKHByb3AsIGZuLCByZW5kZXIgPSB0cnVlKVxue1xuXHRpZighaXNPYnNlcnZhYmxlKHByb3ApKSB7XG5cdFx0aWYocmVuZGVyKSB7XG5cdFx0XHRmbihwcm9wKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblxuXHRzdWJzY3JpYmUocHJvcCwgKCkgPT4ge1xuXHRcdGZuKHByb3AoKSk7XG5cdH0sICFyZW5kZXIpO1xufVxuIiwiZXhwb3J0IGNsYXNzIFRyYWNrZXIge1xuXG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBuZXcgU2V0KCk7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHRcdHRoaXMuZGlzcG9zYWxzID0gbmV3IFNldCgpO1xuXHR9XG5cblx0c2V0UGFyZW50KHBhcmVudClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0YWRkQ2hpbGQodHJhY2tlcilcblx0e1xuXHRcdHRyYWNrZXIuc2V0UGFyZW50KHRoaXMpO1xuXHRcdHRoaXMuY2hpbGRyZW4uYWRkKHRyYWNrZXIpO1xuXHR9XG5cblx0ZGlzcG9zYWwoY2xlYW51cClcblx0e1xuXHRcdC8vIGNvbnNvbGUubG9nKCdhZGQnLCBjbGVhbnVwLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5uYW1lKVxuXHRcdHRoaXMuZGlzcG9zYWxzLmFkZChjbGVhbnVwKTtcblx0fVxuXG5cdGNsZWFudXAoY2FsbGJhY2spXG5cdHtcblx0XHRsZXQgbWF4RHVyYXRpb24gPSAwO1xuXHRcdC8vIGNvbnNvbGUud2FybignY2xlYW51cCBzdGFydCcsIHRoaXMpO1xuXHRcdHRoaXMuZGlzcG9zYWxzLmZvckVhY2goZGlzcG9zYWwgPT4ge1xuXHRcdFx0bGV0IHJlc3VsdCA9IGRpc3Bvc2FsKCk7XG5cblx0XHRcdGlmKHJlc3VsdCAmJiByZXN1bHQuZHVyYXRpb24pIHtcblx0XHRcdFx0aWYocmVzdWx0LmR1cmF0aW9uID4gbWF4RHVyYXRpb24pIHtcblx0XHRcdFx0XHRtYXhEdXJhdGlvbiA9IHJlc3VsdC5kdXJhdGlvbjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdHRoaXMuZGlzcG9zYWxzLmNsZWFyKCk7XG5cblx0XHR0aGlzLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuXHRcdFx0bGV0IGR1cmF0aW9uID0gY2hpbGQuY2xlYW51cCgpO1xuXHRcdFx0aWYoZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuXHRcdFx0XHRtYXhEdXJhdGlvbiA9IGR1cmF0aW9uO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdC8vIHRoaXMuY2hpbGRyZW4uY2xlYXIoKTtcblxuXHRcdGlmKHRoaXMucGFyZW50KSB7XG5cdFx0XHR0aGlzLnBhcmVudC5jaGlsZHJlbi5kZWxldGUodGhpcyk7XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIHRoaXM7XG5cblx0XHRpZihjYWxsYmFjaykge1xuXHRcdFx0c2V0VGltZW91dChjYWxsYmFjaywgbWF4RHVyYXRpb24pO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXhEdXJhdGlvbjtcblx0fVxuXG59XG4iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjYWxsKGZuLCBob29rcywgbm9kZSwgcmVuZGVyKVxue1xuXHRpZihmbiA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJldHVybiBmbihob29rcywgbm9kZSwgcmVuZGVyKTtcbn1cbiIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufVxuIiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUoJGhvb2tzLCBkaXJlY3RpdmUsIG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCB1bm1vdW50ZWQgPSBkaXJlY3RpdmUobm9kZSwgb3B0aW9ucywgdmFsdWUsIHJlbmRlcilcblxuXHRjbGVhbnVwKHVubW91bnRlZCk7XG59XG4iLCJpbXBvcnQgeyByb290LCBnZXRSb290IH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGxhenkgfSBmcm9tICcuL2xvYWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGNvbXBvbmVudCwgcm9vdE5vZGUpXG57XG5cdGxldCByb290ID0gZ2V0Um9vdCgpO1xuXHRcblx0bGF6eShjb21wb25lbnQsIChjb21wb25lbnQpID0+IHtcblxuXHRcdGxldCBjID0gY29tcG9uZW50KCk7XG5cblx0XHRyb290Tm9kZS5pbm5lckhUTUwgPSAnJztcblx0XHRyb290Tm9kZS5hcHBlbmRDaGlsZChjLm5vZGUpO1xuXG5cdFx0aWYoYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiAoKSA9PiB7XG5cdFx0cm9vdC5jbGVhbnVwKCk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2gocm9vdE5vZGUpXG57XG5cdGxldCB0bXAgPSByb290Tm9kZS5pbm5lckhUTUw7XG5cdHJvb3ROb2RlLmlubmVySFRNTCA9IHRtcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGh5ZHJhdGUoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cblx0bGF6eShjb21wb25lbnQsIChjb21wb25lbnQpID0+IHtcblx0XHRsZXQgYyA9IGNvbXBvbmVudChudWxsLCByb290Tm9kZS5maXJzdENoaWxkKTtcblxuXHRcdGlmKGMuaG9va3MgJiYgYy5ob29rcy5tb3VudGVkKSB7XG5cdFx0XHRjLmhvb2tzLm1vdW50ZWQoKTtcblx0XHR9XG5cdH0pO1xuXHRcblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGVtaXQobm9kZSlcbntcblx0cmV0dXJuIChuYW1lLCAuLi5hcmdzKSA9PiB7XG5cdFx0dmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KG5hbWUsIHtcblx0XHRcdGRldGFpbDogYXJnc1xuXHRcdH0pO1xuXG5cdFx0bm9kZS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn1cbiIsImV4cG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycydcbmV4cG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJ1xuZXhwb3J0IHsgc2xvdCB9IGZyb20gJy4vc2xvdCdcbmV4cG9ydCB7IGdldE5vZGUsIHBhcnNlQ29udGV4dCwgZ2V0UHJvcCwgc2V0UmVmLCBzZXRLZXksIGNyZWF0ZUhvb2tzIH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5leHBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmV4cG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJ1xuZXhwb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnXG5leHBvcnQgeyBjcmVhdGVDb21wb25lbnQsIERPTV9IT09LX0FUVFIgfSBmcm9tICcuL2NyZWF0ZUNvbXBvbmVudCdcbmV4cG9ydCB7IGVtaXQgfSBmcm9tICcuL2VtaXQnXG5leHBvcnQgeyBjYWxsIH0gZnJvbSAnLi9jYWxsJ1xuZXhwb3J0IHsgbG9hZENvbXBvbmVudCB9IGZyb20gJy4vbG9hZCdcblxuZXhwb3J0IHsgcmVuZGVyLCBoeWRyYXRlLCByZWZyZXNoIH0gZnJvbSAnLi9kb20nXG5cbi8vIGV4cG9ydCB7XG4vLyBcdGF0dHJzLFxuLy8gXHRldmVudHMsXG4vLyBcdHNsb3QsXG4vLyBcdGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsXG4vLyBcdHN0YXRlbWVudCxcbi8vIFx0bWFwLFxuLy8gXHRkaXJlY3RpdmUsXG4vLyBcdGNhbGwsXG4vLyBcdGVtaXQsXG4vLyBcdGxvYWRDb21wb25lbnQsXG4vLyBcdGNyZWF0ZUNvbXBvbmVudCxcbi8vIFx0RE9NX0hPT0tfQVRUUlxuLy8gfVxuIiwiaW1wb3J0IHsgY2FzdE5vZGUgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuaW1wb3J0IHsgbWFudWFsUGVyc2lzdGVudCB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNMYXp5KGNvbXBvbmVudClcbntcblx0cmV0dXJuIGNvbXBvbmVudCBpbnN0YW5jZW9mIFByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYXp5KGNvbXBvbmVudCwgY2FsbGJhY2spXG57XG5cdGlmKGlzTGF6eShjb21wb25lbnQpKSB7XG5cdFx0Y29tcG9uZW50LnRoZW4oKG1vZHVsZSkgPT4ge1xuXHRcdFx0Y2FsbGJhY2soXG5cdFx0XHRcdG1vZHVsZS5kZWZhdWx0XG5cdFx0XHQpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y2FsbGJhY2soXG5cdFx0Y29tcG9uZW50XG5cdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQ29tcG9uZW50KGNvbXBvbmVudCwgbm9kZSwgcmVuZGVyLCBvcHRpb25zID0ge30pXG57XG5cdGxldCBlbmRNYXJrID0gY2FzdE5vZGUoJycpO1xuXHRsZXQgc3RhcnRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5vZGUucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcblxuXHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXG5cdGlmKGlzTGF6eShjb21wb25lbnQpKSB7XG5cdFx0bm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzdGFydE1hcmssIG5vZGUpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdC8vIGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0bGF6eShjb21wb25lbnQsIChjb21wb25lbnQpID0+IHtcblx0XHRsZXQgYyA9IGNvbXBvbmVudChvcHRpb25zLCByZW5kZXIgPyBmYWxzZSA6IG5vZGUpO1xuXG5cdFx0bGV0IGNvbXBvbmVudE5vZGUgPSBjLm5vZGU7XG5cblx0XHRpZihyZW5kZXIpIHtcblx0XHRcdG5vZGUucmVwbGFjZVdpdGgoYy5ub2RlKTtcblx0XHR9XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblxuXHRcdC8vIGVuZE1hcmsgPSBjb21wb25lbnROb2RlO1xuXHR9KTtcblxuXHQvLyBjb25zb2xlLmxvZyhub2RlLCBlbmRNYXJrKVxuXG5cdC8vIGNvbnNvbGUubG9nKGVuZE1hcmssIGVuZE1hcmsucGFyZW50Tm9kZS5jaGlsZE5vZGVzKTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn1cbiIsIlxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdGdldChhW2ldLCBpLCAtMSwgcGFyZW50KTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBrZXlfYUVsbSA9IGtleUV4cHIoYUVsbSwgaSk7XG5cdFx0XHRsZXQga2V5X2JFbG0gPSBrZXlFeHByKGJFbG0sIGopO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGtleV9hRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGtleV9iRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0Z2V0KGFbaV0sIGksIC0xLCBwYXJlbnQpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmLmpzJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIG1hbnVhbFBlcnNpc3RlbnQgfSBmcm9tICcuLi91dGlscy5qcyc7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHZhbHVlLCByb290LCBnZXRSb290IH0gZnJvbSAnaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7ICBnZXRSb290IGFzIHRyYW5zUm9vdCB9IGZyb20gJ2hhd2EvdHJhbnNpdGlvbic7XG4vKipcbiAqIE1hcCBvdmVyIGEgbGlzdCBvZiB1bmlxdWUgaXRlbXMgdGhhdCBjcmVhdGUgRE9NIG5vZGVzLlxuICpcbiAqIE5vIGR1cGxpY2F0ZXMgaW4gdGhlIGxpc3Qgb2YgaXRlbXMgaXMgYSBoYXJkIHJlcXVpcmVtZW50LCB0aGUgZGlmZmluZ1xuICogYWxnb3JpdGhtIHdpbGwgbm90IHdvcmsgd2l0aCBkdXBsaWNhdGUgdmFsdWVzLiBTZWUgYC4vdW5pcXVlLmpzYC5cbiAqXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gaXRlbXMgLSBGdW5jdGlvbiBvciBvYnNlcnZhYmxlIHRoYXQgY3JlYXRlcyBhIGxpc3QuXG4gKiBAcGFyYW0gIHtGdW5jdGlvbn0gZXhwclxuICogQHBhcmFtIHtib29sZWFufSBbY2xlYW5pbmddXG4gKiBAcmV0dXJuIHtEb2N1bWVudEZyYWdtZW50fVxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBtYXAoYmluZE5vZGUsIGl0ZW1zLCBrZXlFeHByLCBleHByLCByZW5kZXIpIFxue1xuXHQvLyBjb25zdCB7IHJvb3QsIHN1YnNjcmliZSwgc2FtcGxlLCBjbGVhbnVwIH0gPSBhcGk7XG5cblx0Ly8gRGlzYWJsZSBjbGVhbmluZyBmb3IgdGVtcGxhdGVzIGJ5IGRlZmF1bHQuXG5cdGxldCBjdXJUcmFja2VyID0gZ2V0Um9vdCgpOy8vIWV4cHIuJHQ7XG5cblx0bGV0IHBhcmVudDtcblx0bGV0IGVuZE1hcms7XG5cblx0Y29uc3QgZGlzcG9zZXJzID0gbmV3IE1hcCgpO1xuXHRjb25zdCBub2RlcyA9IG5ldyBNYXAoKTtcblx0Y29uc3QgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IGRlZmF1bHRBID0gW107XG5cblxuXHQvLyBoeWRyYXRpb24gcHJlcGFyZSBcblx0aWYocmVuZGVyKSB7XG5cdFx0cGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdGVuZE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cblx0XHRiaW5kTm9kZS5yZXBsYWNlV2l0aChwYXJlbnQpO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBfaXRlbXMgPSB2YWx1ZShpdGVtcyk7XG5cdFx0bGV0IG5vZGUgPSBiaW5kTm9kZTtcblx0XHRsZXQgbGFzdE5vZGUgPSBudWxsO1xuXHRcdC8vIHJldHVybjtcblx0XHRmb3IgKGxldCBrZXkgaW4gX2l0ZW1zKSB7XG5cdFx0XHRsZXQgaXRlbSA9IF9pdGVtc1trZXldO1xuXHRcdFx0bGV0IGl0ZW1LZXkgPSBrZXlFeHByKGl0ZW0sIGtleSk7XG5cdFx0XHRsZXQgbGFzdEh5ZHJhdGVkTm9kZSA9IG51bGw7XG5cblx0XHRcdGlmKG5vZGUgJiYgbm9kZS5nZXRBdHRyaWJ1dGUpIHtcblx0XHRcdFx0aWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JykgPT0gaXRlbUtleSkge1xuXG5cdFx0XHRcdFx0bGFzdEh5ZHJhdGVkTm9kZSA9IHJvb3QoZGlzcG9zYWwgPT4ge1xuXHRcdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChpdGVtS2V5LCBkaXNwb3NhbCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwcihub2RlLCBmYWxzZSwgaXRlbUtleSwgaXRlbSwga2V5KTtcblx0XHRcdFx0XHR9LCBjdXJUcmFja2VyKTtcblxuXHRcdFx0XHRcdGxldCBuID0gbWFudWFsUGVyc2lzdGVudChub2RlLCBsYXN0SHlkcmF0ZWROb2RlKVxuXG5cdFx0XHRcdFx0ZGVmYXVsdEFba2V5XSA9IGl0ZW07XG5cdFx0XHRcdFx0bm9kZXMuc2V0KGl0ZW1LZXksIG4pO1xuXG5cdFx0XHRcdFx0Ly8gY29uc29sZS53YXJuKCdbaHlkcl0nLCBpdGVtS2V5LCBuKVxuXG5cdFx0XHRcdFx0bm9kZSA9IGxhc3RIeWRyYXRlZE5vZGUubmV4dFNpYmxpbmc7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0bGFzdE5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuXHRcdGlmKGxhc3ROb2RlID09PSBudWxsKSB7XG5cdFx0XHRyZW5kZXIgPSB0cnVlO1xuXHRcdFx0YmluZE5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxhc3ROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH1cblx0fVxuXHRcblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoaXRlbXMsIGEgPT4ge1xuXG5cdFx0bGV0IGIgPSB2YWx1ZShpdGVtcyk7XG5cblx0XHR0b1JlbW92ZS5jbGVhcigpO1xuXHRcdC8vIEFycmF5LmZyb20gdG8gbWFrZSBhIGNvcHkgb2YgdGhlIGN1cnJlbnQgbGlzdC5cblx0XHRjb25zdCBjb250ZW50ID0gQXJyYXkuZnJvbShcblx0XHRcdGRpZmYoZW5kTWFyay5wYXJlbnROb2RlLCBhIHx8IGRlZmF1bHRBLCBiLCBrZXlFeHByLCBhZGROb2RlLCBlbmRNYXJrKVxuXHRcdCk7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0Ly8gfSk7XG5cdH0sICFyZW5kZXIpO1xuXG5cdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHQvLyBcdGNvbnNvbGUubG9nKCdbdW5zdWJzY3JpYmVdJywgdW5zdWJzY3JpYmUpO1xuXHQvLyBcdHVuc3Vic2NyaWJlKCk7XG5cdC8vIH0sIDIwMDApXG5cblx0Ly8gaWYocmVuZGVyKSB7XG5cdC8vIFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblx0Ly8gfVxuXG5cdC8vIGRpc3Bvc2VBbGwoKTtcblxuXHRmdW5jdGlvbiBhZGROb2RlKGl0ZW0sIGtleSwgaSwgcGFyZW50ID0gbnVsbCkge1xuXHRcdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcblxuXHRcdGxldCBub2RlS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXG5cdFx0bGV0IG4gPSBub2Rlcy5nZXQobm9kZUtleSk7XG5cdFx0aWYgKGkgPT09IDEpIHtcblx0XHRcdHRvUmVtb3ZlLmRlbGV0ZShpdGVtKTtcblxuXHRcdFx0aWYgKCFuKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksIGRpc3Bvc2FsKTtcblx0XHRcdFx0XHRyZXR1cm4gZXhwcihudWxsLCB0cnVlLCBub2RlS2V5LCBpdGVtLCBrZXkpO1xuXHRcdFx0XHR9LCBjdXJUcmFja2VyKTtcblxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBwZXJzaXN0ZW50KG4pIHx8IG47XG5cblx0XHRcdFx0bm9kZXMuc2V0KG5vZGVLZXksIG4pO1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGkgPT09IC0xKSB7XG5cdFx0XHR0b1JlbW92ZS5hZGQobm9kZUtleSk7XG5cdFx0XHRcblx0XHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQobm9kZUtleSk7XG5cblx0XHRcdGlmKGRpc3Bvc2VyKSB7XG5cdFx0XHRcdGRpc3Bvc2Vycy5zZXQobm9kZUtleSxcblx0XHRcdFx0XHRkaXNwb3Nlci5iaW5kKG51bGwsICgpID0+IHtcblx0XHRcdFx0XHRcdGVuZE1hcmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaWZmYWJsZShuLCAtMSkpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHJldHVybiBkaWZmYWJsZShuLCBpKTtcblx0fVxuXG5cdC8vIGNsZWFudXAoZGlzcG9zZUFsbCk7XG5cblx0Ly8gZnVuY3Rpb24gZGlzcG9zZUFsbCgpIHtcblx0Ly8gXHRkaXNwb3NlcnMuZm9yRWFjaChkID0+IGQoKSk7XG5cdC8vIFx0ZGlzcG9zZXJzLmNsZWFyKCk7XG5cdC8vIFx0bm9kZXMuY2xlYXIoKTtcblx0Ly8gXHR0b1JlbW92ZS5jbGVhcigpO1xuXHQvLyB9XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0XHRub2Rlcy5kZWxldGUoaXRlbSk7XG5cdH1cblxuXHRyZXR1cm4gZW5kTWFyaztcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgcmVuZGVyLCBjYWxsYmFjaykge1xuXHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgc2xvdE5vZGVzID0gJHNsb3RzW25hbWVdKCk7XG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsc2xvdE5vZGVzLCByZW5kZXIpXG5cdGlmKHJlbmRlcikge1xuXHRcdG5vZGUuaW5uZXJIVE1MID0gJyc7XG5cdFx0bm9kZS5hcHBlbmRDaGlsZChzbG90Tm9kZXMpO1xuXHR9XG5cdFxuXHRyZXR1cm4gbm9kZTtcbn1cbiIsImltcG9ydCB7IHN1YnNjcmliZSwgcm9vdCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBhZGQsIHBlcnNpc3RlbnQsIGRpZmZhYmxlLCBjYXN0Tm9kZSB9IGZyb20gJy4uL3V0aWxzLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUluaXRGcmFnbWVudChzdGFydCwgZW5kKVxue1xuXHRsZXQgbm9kZXMgPSBbXTtcblxuXHR3aGlsZShzdGFydCAhPT0gbnVsbCAmJiAhc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0bm9kZXMucHVzaChzdGFydCk7XG5cdFx0c3RhcnQgPSBzdGFydC5uZXh0U2libGluZztcblx0fTtcblxuXHRub2Rlcy5zaGlmdCgpO1xuXG5cdGxldCBsZW5ndGggPSBub2Rlcy5sZW5ndGg7XG5cblx0aWYgKGxlbmd0aCA8IDIpIHJldHVybiBub2Rlc1swXTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlOiAxMTEsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRWYWx1ZShhcmdzLCByZW5kZXIpXG57XG5cdGlmKHJlbmRlcikge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0bGV0IGluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcblx0Ly8gbGV0IFxuXHRsZXQgcGFyZW50O1xuXHRsZXQgZW5kTWFyaywgc3RhcnRNYXJrO1xuXG5cdGZ1bmN0aW9uIGNsZWFudXAoKVxuXHR7XG5cdFx0bGV0IGNsZWFuTm9kZXMgPSBjcmVhdGVJbml0RnJhZ21lbnQoc3RhcnRNYXJrLCBlbmRNYXJrKTtcblx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZGlmZmFibGUoY2xlYW5Ob2RlcywgLTEpKTtcblx0fVxuXHRcblx0aWYocmVuZGVyKSB7XG5cdFx0bGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cblx0XHRwYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cdFx0XG5cdFx0c3RhcnRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXHRcdHBsYWNlaG9sZGVyID0gYWRkKHBhcmVudCwgcGxhY2Vob2xkZXIpO1xuXHRcdGVuZE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cblx0XHRub2RlID0gcGxhY2Vob2xkZXI7XG5cdFx0XG5cdFx0cGFyZW50ID0gZW5kTWFyay5wYXJlbnROb2RlO1xuXG5cdFx0Y2xlYW51cCgpO1xuXHR9IGVsc2Uge1xuXHRcdHBhcmVudCA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHRzdGFydE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHN0YXJ0TWFyaywgbm9kZSk7XG5cdH1cblxuXHRsZXQgbGFzdENvbmRpdGlvbkluZGV4ID0gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcik7XG5cblx0bGV0IGlzRmlyc3RDYWxsID0gdHJ1ZTtcblxuXHQvLyBvYnMgdHJhY2tlcnNcblx0Y29uc3QgZGlzcG9zZXJzID0gbmV3IE1hcCgpO1xuXHRjb25zdCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblx0Ly8gLmNsZWFyKCk7XG5cblx0ZnVuY3Rpb24gZGlzcG9zZShpdGVtKSB7XG5cdFx0bGV0IGRpc3Bvc2VyID0gZGlzcG9zZXJzLmdldChpdGVtKTtcblx0XHRpZiAoZGlzcG9zZXIpIHtcblx0XHRcdGRpc3Bvc2VyKGNsZWFudXApO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdH1cblxuXHRzdWJzY3JpYmUoZGVwcywgKCkgPT4ge1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdGxldCBuID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG5cdFx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cblx0XHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0XHRuID0gcm9vdChkaXNwb3NlID0+IHtcblx0XHRcdFx0XHR0b1JlbW92ZS5hZGQoaSk7XG5cdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChpLCBkaXNwb3NlKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVuZGVyRm4oc3RhcnRNYXJrLm5leHRTaWJsaW5nLCBsYXN0Q29uZGl0aW9uSW5kZXggIT09IGkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRpZiAobi5ub2RlVHlwZSA9PT0gMTEpIG4gPSBwZXJzaXN0ZW50KG4pIHx8IG47XG5cblx0XHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZihpc0ZpcnN0Q2FsbCAmJiAhcmVuZGVyKSB7XG5cdFx0XHRlbmRNYXJrID0gY2FzdE5vZGUoJycpO1xuXG5cdFx0XHRpZihsYXN0Q29uZGl0aW9uSW5kZXggPT09IG51bGwpIHtcblx0XHRcdFx0biA9IG5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNvbnNvbGUubG9nKGxhc3RDb25kaXRpb25JbmRleCwgbiwgZW5kTWFyaylcblx0XHRcdG4uYWZ0ZXIoZW5kTWFyayk7XG5cblx0XHRcdGlzRmlyc3RDYWxsID0gZmFsc2U7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRsZXQgaGFzUmVuZGVyZWQgPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggIT09IGxhc3RDb25kaXRpb25JbmRleDtcblxuXHRcdGxhc3RDb25kaXRpb25JbmRleCA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdGlzRmlyc3RDYWxsID0gZmFsc2U7XG5cblx0XHRpZighaGFzUmVuZGVyZWQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBhZGQgbmV3IG5vZGVzXG5cdFx0cGFyZW50Lmluc2VydEJlZm9yZShkaWZmYWJsZShuLCAxKSwgZW5kTWFyayk7XG5cdH0pO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBpc09ic2VydmFibGUsIGNsZWFudXAgfSBmcm9tICdoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9va3MoaG9va3MpXG57XG5cdGlmKCFob29rcy51bm1vdW50ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGNsZWFudXAoaG9va3MudW5tb3VudGVkKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIE5vZGUpKSB7XG5cdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBhcnJheSBjcmVhdGVzIGEgRG9jdW1lbnRGcmFnbWVudC5cblx0XHRyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudChbdmFsdWVdKTtcblx0fVxuXHRyZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHBhcmVudCwgc3RhcnROb2RlLCBlbmRNYXJrKSB7XG5cdC8vIGNvbnNvbGUud2FybihzdGFydE5vZGUsIGVuZE1hcmspXG5cdHdoaWxlIChzdGFydE5vZGUgJiYgIXN0YXJ0Tm9kZS5pc1NhbWVOb2RlKGVuZE1hcmspKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coc3RhcnROb2RlKTtcblx0XHRjb25zdCBuID0gc3RhcnROb2RlLm5leHRTaWJsaW5nO1xuXHRcdC8vIElzIG5lZWRlZCBpbiBjYXNlIHRoZSBjaGlsZCB3YXMgcHVsbGVkIG91dCB0aGUgcGFyZW50IGJlZm9yZSBjbGVhcmluZy5cblx0XHRpZiAocGFyZW50ID09PSBzdGFydE5vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKHN0YXJ0Tm9kZSk7XG5cdFx0fVxuXHRcdHN0YXJ0Tm9kZSA9IG47XG5cdH1cbn1cblxuY29uc3Qgbm9kZVR5cGUgPSAxMTE7XG5cblxuZXhwb3J0IGNvbnN0IGRpZmZhYmxlID0gKG5vZGUsIG9wZXJhdGlvbikgPT5cblx0bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUgP1xuXHQxIC8gb3BlcmF0aW9uIDwgMCA/XG5cdG9wZXJhdGlvbiA/XG5cdHJlbW92ZU5vZGVzKFxuXHRcdG5vZGUuX2ZpcnN0Q2hpbGQucGFyZW50Tm9kZSxcblx0XHRub2RlLl9maXJzdENoaWxkLm5leHRTaWJsaW5nLFxuXHRcdG5vZGUuX2xhc3RDaGlsZC5uZXh0U2libGluZ1xuXHQpIHx8IG5vZGUuX2ZpcnN0Q2hpbGQgOlxuXHRub2RlLl9sYXN0Q2hpbGQgOlxuXHRvcGVyYXRpb24gP1xuXHRub2RlLl92YWx1ZU9mKCkgOlxuXHRub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZTtcblxuXG5cbmV4cG9ydCBjb25zdCBtYW51YWxQZXJzaXN0ZW50ID0gKHN0YXJ0LCBlbmQpID0+IHtcblx0aWYoc3RhcnQuaXNTYW1lTm9kZShlbmQpKSB7XG5cdFx0cmV0dXJuIHN0YXJ0O1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRub2RlVHlwZTogMTExLFxuXHRcdF9maXJzdENoaWxkOiBzdGFydCxcblx0XHRfbGFzdENoaWxkOiBlbmQsXG5cdH07XG59XG5cbmV4cG9ydCBjb25zdCBwZXJzaXN0ZW50ID0gKGZyYWdtZW50KSA9PiB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gZnJhZ21lbnQ7XG5cdGNvbnN0IHsgbGVuZ3RoIH0gPSBjaGlsZE5vZGVzO1xuXHQvLyBJZiB0aGUgZnJhZ21lbnQgaGFzIG5vIGNvbnRlbnRcblx0Ly8gaXQgc2hvdWxkIHJldHVybiB1bmRlZmluZWQgYW5kIGJyZWFrXG5cdGlmIChsZW5ndGggPCAyKSByZXR1cm4gY2hpbGROb2Rlc1swXTtcblx0Y29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKGNoaWxkTm9kZXMpO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGUsXG5cdFx0X2ZpcnN0Q2hpbGQsXG5cdFx0X2xhc3RDaGlsZCxcblx0XHRfdmFsdWVPZigpIHtcblx0XHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB7XG5cdFx0XHRcdGxldCBpID0gMDtcblx0XHRcdFx0d2hpbGUgKGkgPCBsZW5ndGgpIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGVzW2krK10pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZyYWdtZW50O1xuXHRcdH0sXG5cdH07XG59O1xuIiwiZXhwb3J0IHtcblx0cmVuZGVyLFxuXHRoeWRyYXRlLFxuXHRyZWZyZXNoXG59IGZyb20gJ2hhd2EvcmVuZGVyJzsiLCJjb25zdCBjYWNoZSA9IG5ldyBNYXAoKTtcblxuZnVuY3Rpb24gZ2V0RHVyYXRpb24obm9kZSwgYWN0aXZlQ2xhc3MsIG91dClcbntcblx0bGV0IGNhY2hlZCA9IGNhY2hlLmdldChhY3RpdmVDbGFzcyk7XG5cblx0aWYoY2FjaGVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZDtcblx0fVxuXG5cdGxldCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0dG1wLmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3MpXG5cdFxuXHRkb2N1bWVudC5ib2R5LmFwcGVuZCh0bXApXG5cblx0bGV0IGR1cmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0bXApLnRyYW5zaXRpb25EdXJhdGlvbjtcblxuXHR0bXAucmVtb3ZlKCk7XG5cblx0ZHVyYXRpb24gPSBwYXJzZUZsb2F0KGR1cmF0aW9uLnJlcGxhY2UoL1teMC05XFwuXS9nLCAnJykpICogMTAwMDtcblx0XG5cdGNhY2hlLnNldChhY3RpdmVDbGFzcywgZHVyYXRpb24pO1xuXG5cdHJldHVybiBkdXJhdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzZWQobm9kZSwgbmFtZSwgb3V0ID0gZmFsc2UpIHtcblx0bGV0IHByZWZpeCA9ICdlbnRlcic7XG5cblx0aWYgKG91dCkge1xuXHRcdHByZWZpeCA9ICdsZWF2ZSc7XG5cdH1cblxuXHRsZXQgdG9SZW1vdmUgPSBuZXcgU2V0KCk7XG5cblx0bGV0IGFjdGl2ZUNsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfS1hY3RpdmVgO1xuXHRsZXQgc3RhcnRDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH1gO1xuXHRsZXQgZmluaXNoQ2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9LXRvYDtcblxuXHRsZXQgZHVyYXRpb24gPSBnZXREdXJhdGlvbihub2RlLCBhY3RpdmVDbGFzcywgb3V0KVxuXG5cdG5vZGUuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzcyk7XG5cdG5vZGUuY2xhc3NMaXN0LmFkZChzdGFydENsYXNzKTtcblxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLmNsYXNzTGlzdC5hZGQoZmluaXNoQ2xhc3MpO1xuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShzdGFydENsYXNzKTtcblx0fSwgMjApO1xuXG5cdC8vIGNsZWFudXBcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzKTtcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoZmluaXNoQ2xhc3MpO1xuXHR9LCBkdXJhdGlvbilcblxuXHRyZXR1cm4ge1xuXHRcdGR1cmF0aW9uXG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmYWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCB9KVxue1xuXHRyZXR1cm4ge1xuXHRcdGRlbGF5LFxuXHRcdGR1cmF0aW9uLFxuXHRcdGVmZmVjdCxcblx0XHRjc3M6IHtcblxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ2hhd2Evb2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBmYWRlIH0gZnJvbSAnLi9mYWRlJztcbmV4cG9ydCB7IGNsYXNzZWQgfSBmcm9tICcuL2NsYXNzZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbihub2RlLCB0X2luLCB0X2luX29wdHMsIHRfb3V0LCB0X291dF9vcHRzKVxue1xuXHRpZih0X2luKSB7XG5cdFx0dHJhbnNpdGlvbl9pbihub2RlLCB0X2luLCB0X2luX29wdHMpXG5cdH1cblxuXHRpZih0X291dCkge1xuXHRcdGNsZWFudXAoXG5cdFx0XHR0cmFuc2l0aW9uX291dC5iaW5kKG51bGwsIG5vZGUsIHRfb3V0LCB0X291dF9vcHRzKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQobm9kZSwgdHJhbnNpdGlvbiwgb3B0aW9ucylcbntcblx0cmV0dXJuIHRyYW5zaXRpb24obm9kZSwgb3B0aW9ucywgdHJ1ZSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=