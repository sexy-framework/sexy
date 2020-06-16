(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

/***/ "./packages/sexy/observable/src/index.js":
/*!***********************************************!*\
  !*** ./packages/sexy/observable/src/index.js ***!
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
/* harmony import */ var _tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracker */ "./packages/sexy/observable/src/tracker.js");
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

/***/ "./packages/sexy/observable/src/tracker.js":
/*!*************************************************!*\
  !*** ./packages/sexy/observable/src/tracker.js ***!
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

/***/ "./packages/sexy/render/src/attrs.js":
/*!*******************************************!*\
  !*** ./packages/sexy/render/src/attrs.js ***!
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
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");


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
  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
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
  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
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
      Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_1__["watch"])(value, function (v) {
        node.setAttribute(name, v);
      }, render);
    }
  };

  for (var name in attrs) {
    _loop(name);
  }
}

/***/ }),

/***/ "./packages/sexy/render/src/call.js":
/*!******************************************!*\
  !*** ./packages/sexy/render/src/call.js ***!
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

/***/ "./packages/sexy/render/src/createComponent.js":
/*!*****************************************************!*\
  !*** ./packages/sexy/render/src/createComponent.js ***!
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

/***/ "./packages/sexy/render/src/directive.js":
/*!***********************************************!*\
  !*** ./packages/sexy/render/src/directive.js ***!
  \***********************************************/
/*! exports provided: directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");

function directive($hooks, directive, node, options, value, render) {
  var unmounted = directive(node, options, value, render);
  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(unmounted);
}

/***/ }),

/***/ "./packages/sexy/render/src/dom.js":
/*!*****************************************!*\
  !*** ./packages/sexy/render/src/dom.js ***!
  \*****************************************/
/*! exports provided: render, refresh, hydrate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return refresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");
/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load */ "./packages/sexy/render/src/load.js");


function render(component, rootNode) {
  var root = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["getRoot"])();
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
  var root = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["getRoot"])();
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

/***/ "./packages/sexy/render/src/emit.js":
/*!******************************************!*\
  !*** ./packages/sexy/render/src/emit.js ***!
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

/***/ "./packages/sexy/render/src/events.js":
/*!********************************************!*\
  !*** ./packages/sexy/render/src/events.js ***!
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

/***/ "./packages/sexy/render/src/index.js":
/*!*******************************************!*\
  !*** ./packages/sexy/render/src/index.js ***!
  \*******************************************/
/*! exports provided: attrs, events, slot, getNode, parseContext, getProp, setRef, setKey, createHooks, statement, map, directive, createComponent, DOM_HOOK_ATTR, emit, call, loadComponent, render, hydrate, refresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attrs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attrs */ "./packages/sexy/render/src/attrs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attrs", function() { return _attrs__WEBPACK_IMPORTED_MODULE_0__["attrs"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events */ "./packages/sexy/render/src/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_1__["events"]; });

/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slot */ "./packages/sexy/render/src/slot.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "slot", function() { return _slot__WEBPACK_IMPORTED_MODULE_2__["slot"]; });

/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates */ "./packages/sexy/render/src/templates.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getNode", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["getNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseContext", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["parseContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProp", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["getProp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["setRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setKey", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["setKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHooks", function() { return _templates__WEBPACK_IMPORTED_MODULE_3__["createHooks"]; });

/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./statement */ "./packages/sexy/render/src/statement/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "statement", function() { return _statement__WEBPACK_IMPORTED_MODULE_4__["statement"]; });

/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ "./packages/sexy/render/src/map/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _map__WEBPACK_IMPORTED_MODULE_5__["map"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directive */ "./packages/sexy/render/src/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_6__["directive"]; });

/* harmony import */ var _createComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createComponent */ "./packages/sexy/render/src/createComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createComponent", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_7__["createComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOM_HOOK_ATTR", function() { return _createComponent__WEBPACK_IMPORTED_MODULE_7__["DOM_HOOK_ATTR"]; });

/* harmony import */ var _emit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./emit */ "./packages/sexy/render/src/emit.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return _emit__WEBPACK_IMPORTED_MODULE_8__["emit"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./call */ "./packages/sexy/render/src/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "call", function() { return _call__WEBPACK_IMPORTED_MODULE_9__["call"]; });

/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./load */ "./packages/sexy/render/src/load.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadComponent", function() { return _load__WEBPACK_IMPORTED_MODULE_10__["loadComponent"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom */ "./packages/sexy/render/src/dom.js");
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

/***/ "./packages/sexy/render/src/load.js":
/*!******************************************!*\
  !*** ./packages/sexy/render/src/load.js ***!
  \******************************************/
/*! exports provided: isLazy, lazy, loadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLazy", function() { return isLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadComponent", function() { return loadComponent; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./packages/sexy/render/src/utils.js");


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

/***/ "./packages/sexy/render/src/map/diff.js":
/*!**********************************************!*\
  !*** ./packages/sexy/render/src/map/diff.js ***!
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

/***/ "./packages/sexy/render/src/map/index.js":
/*!***********************************************!*\
  !*** ./packages/sexy/render/src/map/index.js ***!
  \***********************************************/
/*! exports provided: map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _diff_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./diff.js */ "./packages/sexy/render/src/map/diff.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./packages/sexy/render/src/utils.js");
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");
/* harmony import */ var sexy_framework_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sexy-framework/transition */ "./packages/sexy/transition/src/index.js");




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
  var curTracker = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["getRoot"])(); //!expr.$t;

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
      var _items = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["value"])(items);

      var node = bindNode;
      var lastNode = null; // return;

      var _loop = function _loop(key) {
        var item = _items[key];
        var itemKey = keyExpr(item, key);
        var lastHydratedNode = null;

        if (node && node.getAttribute) {
          if (node.getAttribute('data-key') == itemKey) {
            lastHydratedNode = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["root"])(function (disposal) {
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

  var unsubscribe = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["subscribe"])(items, function (a) {
    var b = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["value"])(items);
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
        n = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_2__["root"])(function (disposal) {
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

/***/ "./packages/sexy/render/src/slot.js":
/*!******************************************!*\
  !*** ./packages/sexy/render/src/slot.js ***!
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

  var slotNodes = $slots[name](node, render); // console.log(node,slotNodes, render)
  // if(render) {
  // 	node.innerHTML = '';
  // 	node.appendChild(slotNodes);
  // }

  return node;
}

/***/ }),

/***/ "./packages/sexy/render/src/statement/index.js":
/*!*****************************************************!*\
  !*** ./packages/sexy/render/src/statement/index.js ***!
  \*****************************************************/
/*! exports provided: createInitFragment, getInitValue, statement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitFragment", function() { return createInitFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitValue", function() { return getInitValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statement", function() { return statement; });
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./packages/sexy/render/src/utils.js");


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

  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])(deps, function () {
    toRemove.forEach(dispose);
    var n = document.createComment('');
    var currentConditionIndex = null;

    var _loop = function _loop() {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        n = Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["root"])(function (dispose) {
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

/***/ "./packages/sexy/render/src/templates.js":
/*!***********************************************!*\
  !*** ./packages/sexy/render/src/templates.js ***!
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
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");

function createHooks(hooks) {
  if (!hooks.unmounted) {
    return;
  }

  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(hooks.unmounted);
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

  Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["watch"])($key, function () {
    node.setAttribute('data-key', $key);
  }, render);
}
function getProp($props, name, seed) {
  if ($props[name] === undefined) {
    return function () {
      return seed;
    };
  }

  if (Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["isObservable"])($props[name])) {
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

/***/ "./packages/sexy/render/src/utils.js":
/*!*******************************************!*\
  !*** ./packages/sexy/render/src/utils.js ***!
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

  if (!(value instanceof window.Node)) {
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

/***/ "./packages/sexy/src/index.js":
/*!************************************!*\
  !*** ./packages/sexy/src/index.js ***!
  \************************************/
/*! exports provided: render, hydrate, refresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sexy_framework_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/render */ "./packages/sexy/render/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return sexy_framework_render__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return sexy_framework_render__WEBPACK_IMPORTED_MODULE_0__["hydrate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "refresh", function() { return sexy_framework_render__WEBPACK_IMPORTED_MODULE_0__["refresh"]; });



/***/ }),

/***/ "./packages/sexy/transition/src/classed.js":
/*!*************************************************!*\
  !*** ./packages/sexy/transition/src/classed.js ***!
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
  var duration = window.getComputedStyle(tmp).transitionDuration;
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

/***/ "./packages/sexy/transition/src/fade.js":
/*!**********************************************!*\
  !*** ./packages/sexy/transition/src/fade.js ***!
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

/***/ "./packages/sexy/transition/src/index.js":
/*!***********************************************!*\
  !*** ./packages/sexy/transition/src/index.js ***!
  \***********************************************/
/*! exports provided: fade, classed, transition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony import */ var sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sexy-framework/observable */ "./packages/sexy/observable/src/index.js");
/* harmony import */ var _fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fade */ "./packages/sexy/transition/src/fade.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _fade__WEBPACK_IMPORTED_MODULE_1__["fade"]; });

/* harmony import */ var _classed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classed */ "./packages/sexy/transition/src/classed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classed", function() { return _classed__WEBPACK_IMPORTED_MODULE_2__["classed"]; });




function transition(node, t_in, t_in_opts, t_out, t_out_opts) {
  if (t_in) {
    transition_in(node, t_in, t_in_opts);
  }

  if (t_out) {
    Object(sexy_framework_observable__WEBPACK_IMPORTED_MODULE_0__["cleanup"])(transition_out.bind(null, node, t_out, t_out_opts));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L29ic2VydmFibGUvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NleHkvb2JzZXJ2YWJsZS9zcmMvdHJhY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3JlbmRlci9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL2NhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL2NyZWF0ZUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3JlbmRlci9zcmMvZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NleHkvcmVuZGVyL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL2VtaXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3JlbmRlci9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL21hcC9kaWZmLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NleHkvcmVuZGVyL3NyYy9tYXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS9yZW5kZXIvc3JjL3N0YXRlbWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3JlbmRlci9zcmMvdGVtcGxhdGVzLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NleHkvcmVuZGVyL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9zZXh5L3RyYW5zaXRpb24vc3JjL2NsYXNzZWQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvc2V4eS90cmFuc2l0aW9uL3NyYy9mYWRlLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL3NleHkvdHJhbnNpdGlvbi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidHJhY2tpbmciLCJUcmFja2VyIiwiZ2V0Um9vdCIsInJvb3QiLCJmbiIsImN1c3RvbVBhcmVudCIsInRyYW5zUGFyZW50IiwicHJldlRyYWNraW5nIiwibmV3VHJhY2tpbmciLCJhZGRDaGlsZCIsInJlc3VsdCIsImNhbGxiYWNrIiwiY2xlYW51cCIsImRpc3Bvc2FsIiwidmFsdWUiLCIkbyIsIm9ic2VydmFibGUiLCJkYXRhIiwibmV4dFZhbHVlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiX29ic2VydmVycyIsImZvckVhY2giLCJvYnNlcnZlciIsIl9mcmVzaCIsIlNldCIsImNvbXB1dGVkIiwib2JzIiwiY29uY2F0Iiwib2IiLCJ1bmRlZmluZWQiLCJhZGQiLCJ1cGRhdGUiLCJzdWJzY3JpYmUiLCJza2lwIiwibGFzdFZhbHVlIiwidW5zdWJzY3JpYmUiLCJkZWxldGUiLCJpc09ic2VydmFibGUiLCJwcm9wIiwid2F0Y2giLCJyZW5kZXIiLCJjaGlsZHJlbiIsInBhcmVudCIsImRpc3Bvc2FscyIsInNldFBhcmVudCIsInRyYWNrZXIiLCJtYXhEdXJhdGlvbiIsImR1cmF0aW9uIiwiY2xlYXIiLCJjaGlsZCIsInNldFRpbWVvdXQiLCJhdHRyQXJnVG9PYmoiLCJhcmdzIiwiQXJyYXkiLCJpc0FycmF5IiwiaSIsImF0dHJBcmdUb1N0cmluZyIsImtleSIsInB1c2giLCJtYWtlQ2xhc3MiLCJub2RlIiwibGFzdENsYXNzQWRvcHRlZCIsInYiLCJ0bXAiLCJjbGFzc0xpc3QiLCJ0b1NldCIsImZyb20iLCJ0b1JlbW92ZSIsImZpbHRlciIsIngiLCJpbmNsdWRlcyIsIm5hbWUiLCJyZW1vdmUiLCJtYWtlU3R5bGVzIiwic3R5bGVzIiwic3R5bGUiLCJhdHRycyIsInNldEF0dHJpYnV0ZSIsImNhbGwiLCJob29rcyIsIkRPTV9IT09LX0FUVFIiLCJIQVdBX0lEIiwiY3JlYXRlQ29tcG9uZW50IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJkaXJlY3RpdmUiLCIkaG9va3MiLCJvcHRpb25zIiwidW5tb3VudGVkIiwiY29tcG9uZW50Iiwicm9vdE5vZGUiLCJsYXp5IiwiYyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwibW91bnRlZCIsInJlZnJlc2giLCJoeWRyYXRlIiwiZmlyc3RDaGlsZCIsImVtaXQiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwiZGlzcGF0Y2hFdmVudCIsImV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpc0xhenkiLCJQcm9taXNlIiwidGhlbiIsIm1vZHVsZSIsImRlZmF1bHQiLCJsb2FkQ29tcG9uZW50IiwiZW5kTWFyayIsImNhc3ROb2RlIiwic3RhcnRNYXJrIiwiYWZ0ZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiY29tcG9uZW50Tm9kZSIsInJlcGxhY2VXaXRoIiwiZGlmZiIsImEiLCJiIiwia2V5RXhwciIsImdldCIsImJlZm9yZSIsImFJZHgiLCJNYXAiLCJiSWR4IiwiaiIsInNldCIsImFFbG0iLCJiRWxtIiwia2V5X2FFbG0iLCJrZXlfYkVsbSIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJtYXAiLCJiaW5kTm9kZSIsIml0ZW1zIiwiZXhwciIsImN1clRyYWNrZXIiLCJkaXNwb3NlcnMiLCJub2RlcyIsImRlZmF1bHRBIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiX2l0ZW1zIiwibGFzdE5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJuIiwibWFudWFsUGVyc2lzdGVudCIsIm5leHRTaWJsaW5nIiwiY3JlYXRlVGV4dE5vZGUiLCJjb250ZW50IiwiYWRkTm9kZSIsImRpc3Bvc2UiLCJub2RlS2V5Iiwibm9kZVR5cGUiLCJwZXJzaXN0ZW50IiwiZGlzcG9zZXIiLCJiaW5kIiwicmVtb3ZlQ2hpbGQiLCJkaWZmYWJsZSIsInNsb3QiLCIkc2xvdHMiLCJzbG90Tm9kZXMiLCJjcmVhdGVJbml0RnJhZ21lbnQiLCJzdGFydCIsImVuZCIsImlzU2FtZU5vZGUiLCJzaGlmdCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsImdldEluaXRWYWx1ZSIsImluZGV4IiwiY29uZGl0aW9uIiwicmVuZGVyRm4iLCJzdGF0ZW1lbnQiLCJkZXBzIiwiY2xlYW5Ob2RlcyIsInBsYWNlaG9sZGVyIiwiY3JlYXRlQ29tbWVudCIsImxhc3RDb25kaXRpb25JbmRleCIsImlzRmlyc3RDYWxsIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwiaGFzUmVuZGVyZWQiLCJjcmVhdGVIb29rcyIsImdldE5vZGUiLCJ0ZW1wbGF0ZSIsImNsb25lTm9kZSIsInNldFJlZiIsIiRyZWZzIiwic2V0S2V5IiwiJGtleSIsImdldFByb3AiLCIkcHJvcHMiLCJzZWVkIiwicGFyc2VDb250ZXh0IiwiY29udGV4dCIsIiRjdXN0b21Jbml0IiwiZnJhZyIsImNoaWxkTm9kZXMiLCJfc3RhcnRNYXJrIiwiZnJhZ09yTm9kZSIsIndpbmRvdyIsIk5vZGUiLCJyZW1vdmVOb2RlcyIsInN0YXJ0Tm9kZSIsIm9wZXJhdGlvbiIsIl92YWx1ZU9mIiwiZnJhZ21lbnQiLCJjYWNoZSIsImdldER1cmF0aW9uIiwiYWN0aXZlQ2xhc3MiLCJvdXQiLCJjYWNoZWQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJwYXJzZUZsb2F0IiwicmVwbGFjZSIsImNsYXNzZWQiLCJwcmVmaXgiLCJzdGFydENsYXNzIiwiZmluaXNoQ2xhc3MiLCJmYWRlIiwiZGVsYXkiLCJlZmZlY3QiLCJjc3MiLCJ0cmFuc2l0aW9uIiwidF9pbiIsInRfaW5fb3B0cyIsInRfb3V0IiwidF9vdXRfb3B0cyIsInRyYW5zaXRpb25faW4iLCJ0cmFuc2l0aW9uX291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFJQSxRQUFRLEdBQUcsSUFBSUMsZ0RBQUosRUFBZjtBQUVPLFNBQVNDLE9BQVQsR0FDUDtBQUNDLFNBQU9GLFFBQVA7QUFDQTtBQUVNLFNBQVNHLElBQVQsQ0FBY0MsRUFBZCxFQUFrQkMsWUFBbEIsRUFBdUNDLFdBQXZDLEVBQ1A7QUFBQSxNQUR5QkQsWUFDekI7QUFEeUJBLGdCQUN6QixHQUR3QyxJQUN4QztBQUFBOztBQUFBLE1BRDhDQyxXQUM5QztBQUQ4Q0EsZUFDOUMsR0FENEQsSUFDNUQ7QUFBQTs7QUFDQyxNQUFJQyxZQUFZLEdBQUdQLFFBQW5CO0FBQ0EsTUFBSVEsV0FBVyxHQUFHLElBQUlQLGdEQUFKLEVBQWxCOztBQUVBLE1BQUdJLFlBQUgsRUFBaUI7QUFDaEJBLGdCQUFZLENBQUNJLFFBQWIsQ0FBc0JELFdBQXRCO0FBQ0EsR0FGRCxNQUVPO0FBQ05SLFlBQVEsQ0FBQ1MsUUFBVCxDQUFrQkQsV0FBbEI7QUFDQTs7QUFFRFIsVUFBUSxHQUFHUSxXQUFYO0FBRUEsTUFBSUUsTUFBTSxHQUFHTixFQUFFLENBQUMsVUFBQ08sUUFBRCxFQUFjO0FBQzdCSCxlQUFXLENBQUNJLE9BQVosQ0FBb0JELFFBQXBCO0FBQ0EsR0FGYyxDQUFmO0FBSUFYLFVBQVEsR0FBR08sWUFBWDtBQUVBLFNBQU9HLE1BQVA7QUFDQTtBQUVNLFNBQVNFLE9BQVQsQ0FBaUJSLEVBQWpCLEVBQ1A7QUFDQ0osVUFBUSxDQUFDYSxRQUFULENBQWtCVCxFQUFsQjtBQUNBO0FBRU0sU0FBU1UsS0FBVCxDQUFlQSxLQUFmLEVBQ1A7QUFDQyxNQUFHQSxLQUFLLENBQUNDLEVBQVQsRUFBYTtBQUNaLFdBQU9ELEtBQUssRUFBWjtBQUNBLEdBRkQsTUFFTztBQUNOLFdB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QUNUbE8sNkVBQU8sQ0FDTnFPLGNBQWMsQ0FBQzdFLElBQWYsQ0FBb0IsSUFBcEIsRUFBMEJ2RyxJQUExQixFQUFnQ2lMLEtBQWhDLEVBQXVDQyxVQUF2QyxDQURNLENBQVA7QUFHQTtBQUNEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJuTCxJQUF2QixFQUE2QjhLLFVBQTdCLEVBQXlDbkosT0FBekMsRUFDQTtBQUNDLFNBQU9tSixVQUFVLENBQUM5SyxJQUFELEVBQU8yQixPQUFQLENBQWpCO0FBQ0E7O0FBRUQsU0FBU3lKLGNBQVQsQ0FBd0JwTCxJQUF4QixFQUE4QjhLLFVBQTlCLEVBQTBDbkosT0FBMUMsRUFDQTtBQUNDLFNBQU9tSixVQUFVLENBQUM5SyxJQUFELEVBQU8yQixPQUFQLEVBQWdCLElBQWhCLENBQWpCO0FBQ0EsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWNrZXIgfSBmcm9tICcuL3RyYWNrZXInO1xuXG5sZXQgdHJhY2tpbmcgPSBuZXcgVHJhY2tlcigpO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdCgpXG57XG5cdHJldHVybiB0cmFja2luZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvb3QoZm4sIGN1c3RvbVBhcmVudCA9IG51bGwsIHRyYW5zUGFyZW50ID0gbnVsbClcbntcblx0bGV0IHByZXZUcmFja2luZyA9IHRyYWNraW5nO1xuXHRsZXQgbmV3VHJhY2tpbmcgPSBuZXcgVHJhY2tlcigpO1xuXG5cdGlmKGN1c3RvbVBhcmVudCkge1xuXHRcdGN1c3RvbVBhcmVudC5hZGRDaGlsZChuZXdUcmFja2luZyk7XG5cdH0gZWxzZSB7XG5cdFx0dHJhY2tpbmcuYWRkQ2hpbGQobmV3VHJhY2tpbmcpO1xuXHR9XG5cdFxuXHR0cmFja2luZyA9IG5ld1RyYWNraW5nO1xuXG5cdGxldCByZXN1bHQgPSBmbigoY2FsbGJhY2spID0+IHtcblx0XHRuZXdUcmFja2luZy5jbGVhbnVwKGNhbGxiYWNrKTtcblx0fSk7XG5cblx0dHJhY2tpbmcgPSBwcmV2VHJhY2tpbmc7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXAoZm4pXG57XG5cdHRyYWNraW5nLmRpc3Bvc2FsKGZuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbHVlKHZhbHVlKVxue1xuXHRpZih2YWx1ZS4kbykge1xuXHRcdHJldHVybiB2YWx1ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2YWJsZSh2YWx1ZSlcbntcblx0ZnVuY3Rpb24gZGF0YShuZXh0VmFsdWUpXG5cdHtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHZhbHVlID0gbmV4dFZhbHVlO1xuXG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4geyBvYnNlcnZlci5fZnJlc2ggPSBmYWxzZTsgfSk7XG5cdFx0ZGF0YS5fb2JzZXJ2ZXJzLmZvckVhY2gob2JzZXJ2ZXIgPT4gb2JzZXJ2ZXIoKSk7XG5cblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cblxuXHRkYXRhLl9vYnNlcnZlcnMgPSBuZXcgU2V0KCk7XG5cdGRhdGEuJG8gPSB0cnVlO1xuXG5cdHJldHVybiBkYXRhO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZChvYnMsIHZhbHVlKVxue1xuXHRvYnMgPSBbXS5jb25jYXQob2JzKTtcblxuXHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdGlmKG9iLiRvICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdG9iLl9vYnNlcnZlcnMuYWRkKHVwZGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZGF0YSgpXG5cdHtcblx0XHRpZighdXBkYXRlLl9mcmVzaCkge1xuXHRcdFx0dXBkYXRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlKCk7XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGUoKVxuXHR7XG5cdFx0dXBkYXRlLl9mcmVzaCA9IHRydWU7XG5cblx0XHRkYXRhLl9vYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiBvYnNlcnZlcigpKTtcblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXG5cdGRhdGEuX29ic2VydmVycyA9IG5ldyBTZXQoKTtcblx0ZGF0YS4kbyA9IHRydWU7XG5cblx0dXBkYXRlKCk7XG5cblx0cmV0dXJuIGRhdGE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmUob2JzLCB2YWx1ZSwgc2tpcCA9IGZhbHNlKVxue1xuXHRvYnMgPSBbXS5jb25jYXQob2JzKTtcblxuXHQvLyBjaGFuZ2Ugc3Vic2NyaWJlIGZ1bmN0aW9uIHRvIGxhc3QgdmFsdWUgbWVtb3JpemVcblx0bGV0IGxhc3RWYWx1ZSA9IG51bGw7XG5cblx0bGV0IGZuID0gKCkgPT4ge1xuXHRcdGxhc3RWYWx1ZSA9IHZhbHVlKGxhc3RWYWx1ZSk7XG5cdH1cblxuXHQvLyBBZGQgc3Vic2NyaWJlIHRvIG9ic2VydmVycyBvZiBvYnNlcnZhYmxlc1xuXHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdGlmKG9iLl9vYnNlcnZlcnMpIHtcblx0XHRcdG9iLl9vYnNlcnZlcnMuYWRkKGZuKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsIHN1YnNjcmliZSBpZiBub3Qgc2tpcHBpbmcgXG5cdGlmKCFza2lwKSB7XG5cdFx0Zm4oKTtcblx0fVxuXG5cdGxldCB1bnN1YnNjcmliZSA9ICgpID0+IHtcblx0XHRmb3IobGV0IG9iIG9mIG9icykge1xuXHRcdFx0aWYob2IuX29ic2VydmVycykge1xuXHRcdFx0XHRvYi5fb2JzZXJ2ZXJzLmRlbGV0ZShmbik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNsZWFudXAodW5zdWJzY3JpYmUpO1xuXG5cdHJldHVybiB1bnN1YnNjcmliZTtcbn1cblxuLy8gSXMgcHJvcGVydHkgb2JzZXJ2YWJsZSBcbmV4cG9ydCBmdW5jdGlvbiBpc09ic2VydmFibGUocHJvcClcbntcblx0aWYocHJvcCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuIHByb3AuJG8gIT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBXYXRjaCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gd2F0Y2gocHJvcCwgZm4sIHJlbmRlciA9IHRydWUpXG57XG5cdGlmKCFpc09ic2VydmFibGUocHJvcCkpIHtcblx0XHRpZihyZW5kZXIpIHtcblx0XHRcdGZuKHByb3ApO1xuXHRcdH1cblx0XHRyZXR1cm47XG5cdH1cblxuXG5cdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdFx0Zm4ocHJvcCgpKTtcblx0fSwgIXJlbmRlcik7XG59XG4iLCJleHBvcnQgY2xhc3MgVHJhY2tlciB7XG5cblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IG5ldyBTZXQoKTtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwb3NhbHMgPSBuZXcgU2V0KCk7XG5cdH1cblxuXHRzZXRQYXJlbnQocGFyZW50KVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRhZGRDaGlsZCh0cmFja2VyKVxuXHR7XG5cdFx0dHJhY2tlci5zZXRQYXJlbnQodGhpcyk7XG5cdFx0dGhpcy5jaGlsZHJlbi5hZGQodHJhY2tlcik7XG5cdH1cblxuXHRkaXNwb3NhbChjbGVhbnVwKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2FkZCcsIGNsZWFudXAucHJvdG90eXBlLmNvbnN0cnVjdG9yLm5hbWUpXG5cdFx0dGhpcy5kaXNwb3NhbHMuYWRkKGNsZWFudXApO1xuXHR9XG5cblx0Y2xlYW51cChjYWxsYmFjaylcblx0e1xuXHRcdGxldCBtYXhEdXJhdGlvbiA9IDA7XG5cdFx0Ly8gY29uc29sZS53YXJuKCdjbGVhbnVwIHN0YXJ0JywgdGhpcyk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuZm9yRWFjaChkaXNwb3NhbCA9PiB7XG5cdFx0XHRsZXQgcmVzdWx0ID0gZGlzcG9zYWwoKTtcblxuXHRcdFx0aWYocmVzdWx0ICYmIHJlc3VsdC5kdXJhdGlvbikge1xuXHRcdFx0XHRpZihyZXN1bHQuZHVyYXRpb24gPiBtYXhEdXJhdGlvbikge1xuXHRcdFx0XHRcdG1heER1cmF0aW9uID0gcmVzdWx0LmR1cmF0aW9uO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dGhpcy5kaXNwb3NhbHMuY2xlYXIoKTtcblxuXHRcdHRoaXMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0XHRsZXQgZHVyYXRpb24gPSBjaGlsZC5jbGVhbnVwKCk7XG5cdFx0XHRpZihkdXJhdGlvbiA+IG1heER1cmF0aW9uKSB7XG5cdFx0XHRcdG1heER1cmF0aW9uID0gZHVyYXRpb247XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0Ly8gdGhpcy5jaGlsZHJlbi5jbGVhcigpO1xuXG5cdFx0aWYodGhpcy5wYXJlbnQpIHtcblx0XHRcdHRoaXMucGFyZW50LmNoaWxkcmVuLmRlbGV0ZSh0aGlzKTtcblx0XHR9XG5cblx0XHRkZWxldGUgdGhpcztcblxuXHRcdGlmKGNhbGxiYWNrKSB7XG5cdFx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCBtYXhEdXJhdGlvbik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1heER1cmF0aW9uO1xuXHR9XG5cbn1cbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnc2V4eS1mcmFtZXdvcmsvb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9PYmooYXJncylcbntcblx0bGV0IHJlc3VsdCA9IHt9O1xuXG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCA9IE9iamVjdC5hc3NpZ24ocmVzdWx0LCBhdHRyQXJnVG9PYmooYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdHJlc3VsdCA9IGFyZ3M7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvU3RyaW5nKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSBbXTtcblx0Ly8gYXJncyA9IGFyZ3MuY29uY2F0KFtdKTtcblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gcmVzdWx0LmNvbmNhdChhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSkpO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQucHVzaChrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQucHVzaChhcmdzKTtcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBBcnJheS5mcm9tKFxuXHRcdFx0bmV3IFNldChhdHRyQXJnVG9TdHJpbmcodikpXG5cdFx0KTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjYWxsKGZuLCBob29rcywgbm9kZSwgcmVuZGVyKVxue1xuXHRpZihmbiA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHJldHVybiBmbihob29rcywgbm9kZSwgcmVuZGVyKTtcbn1cbiIsImV4cG9ydCBjb25zdCBET01fSE9PS19BVFRSID0gJ2RhdGEtaGlkJztcblxuZXhwb3J0IHZhciBIQVdBX0lEID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChub2RlLCByZW5kZXIpXG57XG5cdGxldCBpZDtcblxuXHRpZihyZW5kZXIpIHtcblx0XHRpZCA9ICsrSEFXQV9JRCArICcnO1xuXHRcdG5vZGUuc2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIsIGlkKTtcblx0fSBlbHNlIHtcblx0XHRpZCA9IG5vZGUuZ2V0QXR0cmlidXRlKERPTV9IT09LX0FUVFIpO1xuXHR9XG5cblx0cmV0dXJuIGlkO1xufVxuIiwiaW1wb3J0IHsgY2xlYW51cCB9IGZyb20gJ3NleHktZnJhbWV3b3JrL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKCRob29rcywgZGlyZWN0aXZlLCBub2RlLCBvcHRpb25zLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgdW5tb3VudGVkID0gZGlyZWN0aXZlKG5vZGUsIG9wdGlvbnMsIHZhbHVlLCByZW5kZXIpXG5cblx0Y2xlYW51cCh1bm1vdW50ZWQpO1xufVxuIiwiaW1wb3J0IHsgcm9vdCwgZ2V0Um9vdCB9IGZyb20gJ3NleHktZnJhbWV3b3JrL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbGF6eSB9IGZyb20gJy4vbG9hZCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCByb290Tm9kZSlcbntcblx0bGV0IHJvb3QgPSBnZXRSb290KCk7XG5cdFxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXG5cdFx0bGV0IGMgPSBjb21wb25lbnQoKTtcblxuXHRcdHJvb3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdHJvb3ROb2RlLmFwcGVuZENoaWxkKGMubm9kZSk7XG5cblx0XHRpZihjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290LmNsZWFudXAoKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaChyb290Tm9kZSlcbntcblx0bGV0IHRtcCA9IHJvb3ROb2RlLmlubmVySFRNTDtcblx0cm9vdE5vZGUuaW5uZXJIVE1MID0gdG1wO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaHlkcmF0ZShjb21wb25lbnQsIHJvb3ROb2RlKVxue1xuXHRsZXQgcm9vdCA9IGdldFJvb3QoKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG51bGwsIHJvb3ROb2RlLmZpcnN0Q2hpbGQpO1xuXG5cdFx0aWYoYy5ob29rcyAmJiBjLmhvb2tzLm1vdW50ZWQpIHtcblx0XHRcdGMuaG9va3MubW91bnRlZCgpO1xuXHRcdH1cblx0fSk7XG5cdFxuXHRyZXR1cm4gKCkgPT4ge1xuXHRcdHJvb3QuY2xlYW51cCgpO1xuXHR9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZW1pdChub2RlKVxue1xuXHRyZXR1cm4gKG5hbWUsIC4uLmFyZ3MpID0+IHtcblx0XHR2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQobmFtZSwge1xuXHRcdFx0ZGV0YWlsOiBhcmdzXG5cdFx0fSk7XG5cblx0XHRub2RlLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXHR9XG59XG4iLCJcbmV4cG9ydCBmdW5jdGlvbiBldmVudHMobm9kZSwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufVxuIiwiZXhwb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJ1xuZXhwb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnXG5leHBvcnQgeyBzbG90IH0gZnJvbSAnLi9zbG90J1xuZXhwb3J0IHsgZ2V0Tm9kZSwgcGFyc2VDb250ZXh0LCBnZXRQcm9wLCBzZXRSZWYsIHNldEtleSwgY3JlYXRlSG9va3MgfSBmcm9tICcuL3RlbXBsYXRlcydcbmV4cG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuZXhwb3J0IHsgbWFwIH0gZnJvbSAnLi9tYXAnXG5leHBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSdcbmV4cG9ydCB7IGNyZWF0ZUNvbXBvbmVudCwgRE9NX0hPT0tfQVRUUiB9IGZyb20gJy4vY3JlYXRlQ29tcG9uZW50J1xuZXhwb3J0IHsgZW1pdCB9IGZyb20gJy4vZW1pdCdcbmV4cG9ydCB7IGNhbGwgfSBmcm9tICcuL2NhbGwnXG5leHBvcnQgeyBsb2FkQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkJ1xuXG5leHBvcnQgeyByZW5kZXIsIGh5ZHJhdGUsIHJlZnJlc2ggfSBmcm9tICcuL2RvbSdcblxuLy8gZXhwb3J0IHtcbi8vIFx0YXR0cnMsXG4vLyBcdGV2ZW50cyxcbi8vIFx0c2xvdCxcbi8vIFx0Z2V0Tm9kZSwgc2V0UmVmLCBzZXRLZXksIGdldFByb3AsIHBhcnNlQ29udGV4dCxcbi8vIFx0c3RhdGVtZW50LFxuLy8gXHRtYXAsXG4vLyBcdGRpcmVjdGl2ZSxcbi8vIFx0Y2FsbCxcbi8vIFx0ZW1pdCxcbi8vIFx0bG9hZENvbXBvbmVudCxcbi8vIFx0Y3JlYXRlQ29tcG9uZW50LFxuLy8gXHRET01fSE9PS19BVFRSXG4vLyB9XG4iLCJpbXBvcnQgeyBjYXN0Tm9kZSB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5pbXBvcnQgeyBtYW51YWxQZXJzaXN0ZW50IH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xhenkoY29tcG9uZW50KVxue1xuXHRyZXR1cm4gY29tcG9uZW50IGluc3RhbmNlb2YgUHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhenkoY29tcG9uZW50LCBjYWxsYmFjaylcbntcblx0aWYoaXNMYXp5KGNvbXBvbmVudCkpIHtcblx0XHRjb21wb25lbnQudGhlbigobW9kdWxlKSA9PiB7XG5cdFx0XHRjYWxsYmFjayhcblx0XHRcdFx0bW9kdWxlLmRlZmF1bHRcblx0XHRcdCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRjYWxsYmFjayhcblx0XHRjb21wb25lbnRcblx0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb21wb25lbnQoY29tcG9uZW50LCBub2RlLCByZW5kZXIsIG9wdGlvbnMgPSB7fSlcbntcblx0bGV0IGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cdGxldCBzdGFydE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0Ly8gY29uc29sZS5sb2cobm9kZS5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cblx0aWYoaXNMYXp5KGNvbXBvbmVudCkpIHtcblx0XHRub2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHN0YXJ0TWFyaywgbm9kZSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhub2RlLnBhcmVudE5vZGUuY2hpbGROb2Rlcyk7XG5cblx0Ly8gbGV0IGMgPSBjb21wb25lbnQob3B0aW9ucywgcmVuZGVyID8gZmFsc2UgOiBub2RlKTtcblxuXHRsYXp5KGNvbXBvbmVudCwgKGNvbXBvbmVudCkgPT4ge1xuXHRcdGxldCBjID0gY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0XHRsZXQgY29tcG9uZW50Tm9kZSA9IGMubm9kZTtcblxuXHRcdGlmKHJlbmRlcikge1xuXHRcdFx0bm9kZS5yZXBsYWNlV2l0aChjLm5vZGUpO1xuXHRcdH1cblxuXHRcdGlmKGMuaG9va3MubW91bnRlZCkge1xuXHRcdFx0Yy5ob29rcy5tb3VudGVkKCk7XG5cdFx0fVxuXG5cdFx0Ly8gZW5kTWFyayA9IGNvbXBvbmVudE5vZGU7XG5cdH0pO1xuXG5cdC8vIGNvbnNvbGUubG9nKG5vZGUsIGVuZE1hcmspXG5cblx0Ly8gY29uc29sZS5sb2coZW5kTWFyaywgZW5kTWFyay5wYXJlbnROb2RlLmNoaWxkTm9kZXMpO1xuXG5cdHJldHVybiBlbmRNYXJrO1xufVxuIiwiXG5leHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0Z2V0KGFbaV0sIGksIC0xLCBwYXJlbnQpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGtleV9hRWxtID0ga2V5RXhwcihhRWxtLCBpKTtcblx0XHRcdGxldCBrZXlfYkVsbSA9IGtleUV4cHIoYkVsbSwgaik7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoa2V5X2FFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoa2V5X2JFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRnZXQoYVtpXSwgaSwgLTEsIHBhcmVudCk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYuanMnO1xuaW1wb3J0IHsgYWRkLCBwZXJzaXN0ZW50LCBkaWZmYWJsZSwgbWFudWFsUGVyc2lzdGVudCB9IGZyb20gJy4uL3V0aWxzLmpzJztcbmltcG9ydCB7IHN1YnNjcmliZSwgdmFsdWUsIHJvb3QsIGdldFJvb3QgfSBmcm9tICdzZXh5LWZyYW1ld29yay9vYnNlcnZhYmxlJztcbmltcG9ydCB7ICBnZXRSb290IGFzIHRyYW5zUm9vdCB9IGZyb20gJ3NleHktZnJhbWV3b3JrL3RyYW5zaXRpb24nO1xuLyoqXG4gKiBNYXAgb3ZlciBhIGxpc3Qgb2YgdW5pcXVlIGl0ZW1zIHRoYXQgY3JlYXRlIERPTSBub2Rlcy5cbiAqXG4gKiBObyBkdXBsaWNhdGVzIGluIHRoZSBsaXN0IG9mIGl0ZW1zIGlzIGEgaGFyZCByZXF1aXJlbWVudCwgdGhlIGRpZmZpbmdcbiAqIGFsZ29yaXRobSB3aWxsIG5vdCB3b3JrIHdpdGggZHVwbGljYXRlIHZhbHVlcy4gU2VlIGAuL3VuaXF1ZS5qc2AuXG4gKlxuICogQHBhcmFtICB7RnVuY3Rpb259IGl0ZW1zIC0gRnVuY3Rpb24gb3Igb2JzZXJ2YWJsZSB0aGF0IGNyZWF0ZXMgYSBsaXN0LlxuICogQHBhcmFtICB7RnVuY3Rpb259IGV4cHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2NsZWFuaW5nXVxuICogQHJldHVybiB7RG9jdW1lbnRGcmFnbWVudH1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gbWFwKGJpbmROb2RlLCBpdGVtcywga2V5RXhwciwgZXhwciwgcmVuZGVyKSBcbntcblx0Ly8gY29uc3QgeyByb290LCBzdWJzY3JpYmUsIHNhbXBsZSwgY2xlYW51cCB9ID0gYXBpO1xuXG5cdC8vIERpc2FibGUgY2xlYW5pbmcgZm9yIHRlbXBsYXRlcyBieSBkZWZhdWx0LlxuXHRsZXQgY3VyVHJhY2tlciA9IGdldFJvb3QoKTsvLyFleHByLiR0O1xuXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrO1xuXG5cdGNvbnN0IGRpc3Bvc2VycyA9IG5ldyBNYXAoKTtcblx0Y29uc3Qgbm9kZXMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHRjb25zdCBkZWZhdWx0QSA9IFtdO1xuXG5cblx0Ly8gaHlkcmF0aW9uIHByZXBhcmUgXG5cdGlmKHJlbmRlcikge1xuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRlbmRNYXJrID0gYWRkKHBhcmVudCwgJycpO1xuXG5cdFx0YmluZE5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgX2l0ZW1zID0gdmFsdWUoaXRlbXMpO1xuXHRcdGxldCBub2RlID0gYmluZE5vZGU7XG5cdFx0bGV0IGxhc3ROb2RlID0gbnVsbDtcblx0XHQvLyByZXR1cm47XG5cdFx0Zm9yIChsZXQga2V5IGluIF9pdGVtcykge1xuXHRcdFx0bGV0IGl0ZW0gPSBfaXRlbXNba2V5XTtcblx0XHRcdGxldCBpdGVtS2V5ID0ga2V5RXhwcihpdGVtLCBrZXkpO1xuXHRcdFx0bGV0IGxhc3RIeWRyYXRlZE5vZGUgPSBudWxsO1xuXG5cdFx0XHRpZihub2RlICYmIG5vZGUuZ2V0QXR0cmlidXRlKSB7XG5cdFx0XHRcdGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdkYXRhLWtleScpID09IGl0ZW1LZXkpIHtcblxuXHRcdFx0XHRcdGxhc3RIeWRyYXRlZE5vZGUgPSByb290KGRpc3Bvc2FsID0+IHtcblx0XHRcdFx0XHRcdGRpc3Bvc2Vycy5zZXQoaXRlbUtleSwgZGlzcG9zYWwpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cHIobm9kZSwgZmFsc2UsIGl0ZW1LZXksIGl0ZW0sIGtleSk7XG5cdFx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0XHRsZXQgbiA9IG1hbnVhbFBlcnNpc3RlbnQobm9kZSwgbGFzdEh5ZHJhdGVkTm9kZSlcblxuXHRcdFx0XHRcdGRlZmF1bHRBW2tleV0gPSBpdGVtO1xuXHRcdFx0XHRcdG5vZGVzLnNldChpdGVtS2V5LCBuKTtcblxuXHRcdFx0XHRcdC8vIGNvbnNvbGUud2FybignW2h5ZHJdJywgaXRlbUtleSwgbilcblxuXHRcdFx0XHRcdG5vZGUgPSBsYXN0SHlkcmF0ZWROb2RlLm5leHRTaWJsaW5nO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGxhc3ROb2RlID0gbGFzdEh5ZHJhdGVkTm9kZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGVuZE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cblx0XHRpZihsYXN0Tm9kZSA9PT0gbnVsbCkge1xuXHRcdFx0cmVuZGVyID0gdHJ1ZTtcblx0XHRcdGJpbmROb2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsYXN0Tm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHR9XG5cdH1cblx0XG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gc3Vic2NyaWJlKGl0ZW1zLCBhID0+IHtcblxuXHRcdGxldCBiID0gdmFsdWUoaXRlbXMpO1xuXG5cdFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0XHQvLyBBcnJheS5mcm9tIHRvIG1ha2UgYSBjb3B5IG9mIHRoZSBjdXJyZW50IGxpc3QuXG5cdFx0Y29uc3QgY29udGVudCA9IEFycmF5LmZyb20oXG5cdFx0XHRkaWZmKGVuZE1hcmsucGFyZW50Tm9kZSwgYSB8fCBkZWZhdWx0QSwgYiwga2V5RXhwciwgYWRkTm9kZSwgZW5kTWFyaylcblx0XHQpO1xuXG5cdFx0dG9SZW1vdmUuZm9yRWFjaChkaXNwb3NlKTtcblxuXHRcdHJldHVybiBjb250ZW50O1xuXHRcdC8vIH0pO1xuXHR9LCAhcmVuZGVyKTtcblxuXHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0Ly8gXHRjb25zb2xlLmxvZygnW3Vuc3Vic2NyaWJlXScsIHVuc3Vic2NyaWJlKTtcblx0Ly8gXHR1bnN1YnNjcmliZSgpO1xuXHQvLyB9LCAyMDAwKVxuXG5cdC8vIGlmKHJlbmRlcikge1xuXHQvLyBcdGJpbmROb2RlLnJlcGxhY2VXaXRoKHBhcmVudCk7XG5cdC8vIH1cblxuXHQvLyBkaXNwb3NlQWxsKCk7XG5cblx0ZnVuY3Rpb24gYWRkTm9kZShpdGVtLCBrZXksIGksIHBhcmVudCA9IG51bGwpIHtcblx0XHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XG5cblx0XHRsZXQgbm9kZUtleSA9IGtleUV4cHIoaXRlbSwga2V5KTtcblxuXHRcdGxldCBuID0gbm9kZXMuZ2V0KG5vZGVLZXkpO1xuXHRcdGlmIChpID09PSAxKSB7XG5cdFx0XHR0b1JlbW92ZS5kZWxldGUoaXRlbSk7XG5cblx0XHRcdGlmICghbikge1xuXHRcdFx0XHRuID0gcm9vdChkaXNwb3NhbCA9PiB7XG5cdFx0XHRcdFx0ZGlzcG9zZXJzLnNldChub2RlS2V5LCBkaXNwb3NhbCk7XG5cdFx0XHRcdFx0cmV0dXJuIGV4cHIobnVsbCwgdHJ1ZSwgbm9kZUtleSwgaXRlbSwga2V5KTtcblx0XHRcdFx0fSwgY3VyVHJhY2tlcik7XG5cblx0XHRcdFx0aWYgKG4ubm9kZVR5cGUgPT09IDExKSBuID0gcGVyc2lzdGVudChuKSB8fCBuO1xuXG5cdFx0XHRcdG5vZGVzLnNldChub2RlS2V5LCBuKTtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChpID09PSAtMSkge1xuXHRcdFx0dG9SZW1vdmUuYWRkKG5vZGVLZXkpO1xuXHRcdFx0XG5cdFx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KG5vZGVLZXkpO1xuXG5cdFx0XHRpZihkaXNwb3Nlcikge1xuXHRcdFx0XHRkaXNwb3NlcnMuc2V0KG5vZGVLZXksXG5cdFx0XHRcdFx0ZGlzcG9zZXIuYmluZChudWxsLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRlbmRNYXJrLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZGlmZmFibGUobiwgLTEpKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHQpXG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGlmZmFibGUobiwgaSk7XG5cdH1cblxuXHQvLyBjbGVhbnVwKGRpc3Bvc2VBbGwpO1xuXG5cdC8vIGZ1bmN0aW9uIGRpc3Bvc2VBbGwoKSB7XG5cdC8vIFx0ZGlzcG9zZXJzLmZvckVhY2goZCA9PiBkKCkpO1xuXHQvLyBcdGRpc3Bvc2Vycy5jbGVhcigpO1xuXHQvLyBcdG5vZGVzLmNsZWFyKCk7XG5cdC8vIFx0dG9SZW1vdmUuY2xlYXIoKTtcblx0Ly8gfVxuXG5cdGZ1bmN0aW9uIGRpc3Bvc2UoaXRlbSkge1xuXHRcdGxldCBkaXNwb3NlciA9IGRpc3Bvc2Vycy5nZXQoaXRlbSk7XG5cdFx0aWYgKGRpc3Bvc2VyKSB7XG5cdFx0XHRkaXNwb3NlcigpO1xuXHRcdFx0ZGlzcG9zZXJzLmRlbGV0ZShpdGVtKTtcblx0XHR9XG5cdFx0bm9kZXMuZGVsZXRlKGl0ZW0pO1xuXHR9XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXShub2RlLCByZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHQvLyBpZihyZW5kZXIpIHtcblx0Ly8gXHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHQvLyBcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0Ly8gfVxuXHRcblx0cmV0dXJuIG5vZGU7XG59XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUsIHJvb3QgfSBmcm9tICdzZXh5LWZyYW1ld29yay9vYnNlcnZhYmxlJztcbmltcG9ydCB7IGFkZCwgcGVyc2lzdGVudCwgZGlmZmFibGUsIGNhc3ROb2RlIH0gZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW5pdEZyYWdtZW50KHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdHdoaWxlKHN0YXJ0ICE9PSBudWxsICYmICFzdGFydC5pc1NhbWVOb2RlKGVuZCkpIHtcblx0XHRub2Rlcy5wdXNoKHN0YXJ0KTtcblx0XHRzdGFydCA9IHN0YXJ0Lm5leHRTaWJsaW5nO1xuXHR9O1xuXG5cdG5vZGVzLnNoaWZ0KCk7XG5cblx0bGV0IGxlbmd0aCA9IG5vZGVzLmxlbmd0aDtcblxuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIG5vZGVzWzBdO1xuXHRjb25zdCBfZmlyc3RDaGlsZCA9IG5vZGVzWzBdO1xuXHRjb25zdCBfbGFzdENoaWxkID0gbm9kZXNbbGVuZ3RoIC0gMV07XG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZCxcblx0XHRfbGFzdENoaWxkLFxuXHR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdFZhbHVlKGFyZ3MsIHJlbmRlcilcbntcblx0aWYocmVuZGVyKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRsZXQgaW5kZXggPSBudWxsO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdGxldCBjb25kaXRpb24gPSBhcmdzW2ldO1xuXHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRpbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gaW5kZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1xuXHQvLyBsZXQgXG5cdGxldCBwYXJlbnQ7XG5cdGxldCBlbmRNYXJrLCBzdGFydE1hcms7XG5cblx0ZnVuY3Rpb24gY2xlYW51cCgpXG5cdHtcblx0XHRsZXQgY2xlYW5Ob2RlcyA9IGNyZWF0ZUluaXRGcmFnbWVudChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdHBhcmVudC5yZW1vdmVDaGlsZChkaWZmYWJsZShjbGVhbk5vZGVzLCAtMSkpO1xuXHR9XG5cdFxuXHRpZihyZW5kZXIpIHtcblx0XHRsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblxuXHRcdHBhcmVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRzdGFydE1hcmsgPSBhZGQocGFyZW50LCAnJyk7XG5cdFx0cGxhY2Vob2xkZXIgPSBhZGQocGFyZW50LCBwbGFjZWhvbGRlcik7XG5cdFx0ZW5kTWFyayA9IGFkZChwYXJlbnQsICcnKTtcblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocGFyZW50KTtcblxuXHRcdG5vZGUgPSBwbGFjZWhvbGRlcjtcblx0XHRcblx0XHRwYXJlbnQgPSBlbmRNYXJrLnBhcmVudE5vZGU7XG5cblx0XHRjbGVhbnVwKCk7XG5cdH0gZWxzZSB7XG5cdFx0cGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXHRcdHN0YXJ0TWFyayA9IGNhc3ROb2RlKCcnKTtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoc3RhcnRNYXJrLCBub2RlKTtcblx0fVxuXG5cdGxldCBsYXN0Q29uZGl0aW9uSW5kZXggPSBnZXRJbml0VmFsdWUoYXJncywgcmVuZGVyKTtcblxuXHRsZXQgaXNGaXJzdENhbGwgPSB0cnVlO1xuXG5cdC8vIG9icyB0cmFja2Vyc1xuXHRjb25zdCBkaXNwb3NlcnMgPSBuZXcgTWFwKCk7XG5cdGNvbnN0IHRvUmVtb3ZlID0gbmV3IFNldCgpO1xuXHQvLyAuY2xlYXIoKTtcblxuXHRmdW5jdGlvbiBkaXNwb3NlKGl0ZW0pIHtcblx0XHRsZXQgZGlzcG9zZXIgPSBkaXNwb3NlcnMuZ2V0KGl0ZW0pO1xuXHRcdGlmIChkaXNwb3Nlcikge1xuXHRcdFx0ZGlzcG9zZXIoY2xlYW51cCk7XG5cdFx0XHRkaXNwb3NlcnMuZGVsZXRlKGl0ZW0pO1xuXHRcdH1cblx0fVxuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cblx0XHR0b1JlbW92ZS5mb3JFYWNoKGRpc3Bvc2UpO1xuXG5cdFx0bGV0IG4gPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblxuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdG4gPSByb290KGRpc3Bvc2UgPT4ge1xuXHRcdFx0XHRcdHRvUmVtb3ZlLmFkZChpKTtcblx0XHRcdFx0XHRkaXNwb3NlcnMuc2V0KGksIGRpc3Bvc2UpO1xuXHRcdFx0XHRcdHJldHVybiByZW5kZXJGbihzdGFydE1hcmsubmV4dFNpYmxpbmcsIGxhc3RDb25kaXRpb25JbmRleCAhPT0gaSk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGlmIChuLm5vZGVUeXBlID09PSAxMSkgbiA9IHBlcnNpc3RlbnQobikgfHwgbjtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKGlzRmlyc3RDYWxsICYmICFyZW5kZXIpIHtcblx0XHRcdGVuZE1hcmsgPSBjYXN0Tm9kZSgnJyk7XG5cblx0XHRcdGlmKGxhc3RDb25kaXRpb25JbmRleCA9PT0gbnVsbCkge1xuXHRcdFx0XHRuID0gbm9kZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gY29uc29sZS5sb2cobGFzdENvbmRpdGlvbkluZGV4LCBuLCBlbmRNYXJrKVxuXHRcdFx0bi5hZnRlcihlbmRNYXJrKTtcblxuXHRcdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBoYXNSZW5kZXJlZCA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAhPT0gbGFzdENvbmRpdGlvbkluZGV4O1xuXG5cdFx0bGFzdENvbmRpdGlvbkluZGV4ID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0aXNGaXJzdENhbGwgPSBmYWxzZTtcblxuXHRcdGlmKCFoYXNSZW5kZXJlZCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGFkZCBuZXcgbm9kZXNcblx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGRpZmZhYmxlKG4sIDEpLCBlbmRNYXJrKTtcblx0fSk7XG5cblx0cmV0dXJuIGVuZE1hcms7XG59XG4iLCJpbXBvcnQgeyB3YXRjaCwgY29tcHV0ZWQsIGlzT2JzZXJ2YWJsZSwgY2xlYW51cCB9IGZyb20gJ3NleHktZnJhbWV3b3JrL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSG9va3MoaG9va3MpXG57XG5cdGlmKCFob29rcy51bm1vdW50ZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblx0XG5cdGNsZWFudXAoaG9va3MudW5tb3VudGVkKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdGlmIChyZW5kZXIpIHtcblx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSlcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0UmVmKCRyZWZzLCBub2RlLCBuYW1lKVxue1xuXHRpZigkcmVmc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0JHJlZnNbbmFtZV0gPSBub2RlO1xuXHR9IGVsc2Uge1xuXHRcdGlmKEFycmF5LmlzQXJyYXkoJHJlZnNbbmFtZV0pKSB7XG5cdFx0XHQkcmVmc1tuYW1lXS5wdXNoKG5vZGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkcmVmc1tuYW1lXSA9IFskcmVmc1tuYW1lXV0uY29uY2F0KG5vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0S2V5KCRrZXksIG5vZGUsIHJlbmRlcilcbntcblx0aWYoJGtleSA9PT0gbnVsbCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHdhdGNoKCRrZXksICgpID0+IHtcblx0XHRub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1rZXknLCAka2V5KTtcblx0fSwgcmVuZGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcCgkcHJvcHMsIG5hbWUsIHNlZWQpXG57XG5cdGlmKCRwcm9wc1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiBzZWVkO1xuXHRcdH1cblx0fVxuXG5cdGlmKGlzT2JzZXJ2YWJsZSgkcHJvcHNbbmFtZV0pKSB7XG5cdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0cmV0dXJuICRwcm9wc1tuYW1lXTtcblx0XHR9XG5cdH1cblx0Ly8gcmV0dXJuIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cdGxldCAkY3VzdG9tSW5pdCA9IGNvbnRleHQuJGN1c3RvbUluaXQgfHwgbnVsbDtcblx0XG5cdHJldHVybiB7XG5cdFx0JHByb3BzLFxuXHRcdCRzbG90cyxcblx0XHQkY3VzdG9tSW5pdCxcblx0XHQkcmVmczoge30sXG5cdH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBmcmFnKHZhbHVlKSB7XG5cdGNvbnN0IHsgY2hpbGROb2RlcyB9ID0gdmFsdWU7XG5cdGlmICghY2hpbGROb2RlcyB8fCB2YWx1ZS5ub2RlVHlwZSAhPT0gMTEpIHJldHVybjtcblx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoIDwgMikge1xuXHRcdHJldHVybiBjaGlsZE5vZGVzWzBdO1xuXHR9XG5cblx0Ly8gRm9yIGEgZnJhZ21lbnQgb2YgMiBlbGVtZW50cyBvciBtb3JlIGFkZCBhIHN0YXJ0TWFyay4gVGhpcyBpcyByZXF1aXJlZFxuXHQvLyBmb3IgbXVsdGlwbGUgbmVzdGVkIGNvbmRpdGlvbmFsIGNvbXB1dGVkcyB0aGF0IHJldHVybiBmcmFnbWVudHMuXG5cdGNvbnN0IF9zdGFydE1hcmsgPSBhZGQodmFsdWUsICcnLCBjaGlsZE5vZGVzWzBdKTtcblxuXHRyZXR1cm4ge1xuXHRcdF9zdGFydE1hcmtcblx0fTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKHBhcmVudCwgdmFsdWUsIGVuZE1hcmsgPSBudWxsKSB7XG5cdHZhbHVlID0gY2FzdE5vZGUodmFsdWUpO1xuXG5cdGNvbnN0IGZyYWdPck5vZGUgPSBmcmFnKHZhbHVlKSB8fCB2YWx1ZTtcblxuXHQvLyBJZiBlbmRNYXJrIGlzIGBudWxsYCwgdmFsdWUgd2lsbCBiZSBhZGRlZCB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuXHRwYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbHVlLCBlbmRNYXJrICYmIGVuZE1hcmsucGFyZW50Tm9kZSAmJiBlbmRNYXJrKTtcblxuXHRyZXR1cm4gZnJhZ09yTm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhc3ROb2RlKHZhbHVlKSB7XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblx0fVxuXHRpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlKSkge1xuXHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgYXJyYXkgY3JlYXRlcyBhIERvY3VtZW50RnJhZ21lbnQuXG5cdFx0cmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoW3ZhbHVlXSk7XG5cdH1cblx0cmV0dXJuIHZhbHVlO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhwYXJlbnQsIHN0YXJ0Tm9kZSwgZW5kTWFyaykge1xuXHQvLyBjb25zb2xlLndhcm4oc3RhcnROb2RlLCBlbmRNYXJrKVxuXHR3aGlsZSAoc3RhcnROb2RlICYmICFzdGFydE5vZGUuaXNTYW1lTm9kZShlbmRNYXJrKSkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHN0YXJ0Tm9kZSk7XG5cdFx0Y29uc3QgbiA9IHN0YXJ0Tm9kZS5uZXh0U2libGluZztcblx0XHQvLyBJcyBuZWVkZWQgaW4gY2FzZSB0aGUgY2hpbGQgd2FzIHB1bGxlZCBvdXQgdGhlIHBhcmVudCBiZWZvcmUgY2xlYXJpbmcuXG5cdFx0aWYgKHBhcmVudCA9PT0gc3RhcnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChzdGFydE5vZGUpO1xuXHRcdH1cblx0XHRzdGFydE5vZGUgPSBuO1xuXHR9XG59XG5cbmNvbnN0IG5vZGVUeXBlID0gMTExO1xuXG5cbmV4cG9ydCBjb25zdCBkaWZmYWJsZSA9IChub2RlLCBvcGVyYXRpb24pID0+XG5cdG5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlID9cblx0MSAvIG9wZXJhdGlvbiA8IDAgP1xuXHRvcGVyYXRpb24gP1xuXHRyZW1vdmVOb2Rlcyhcblx0XHRub2RlLl9maXJzdENoaWxkLnBhcmVudE5vZGUsXG5cdFx0bm9kZS5fZmlyc3RDaGlsZC5uZXh0U2libGluZyxcblx0XHRub2RlLl9sYXN0Q2hpbGQubmV4dFNpYmxpbmdcblx0KSB8fCBub2RlLl9maXJzdENoaWxkIDpcblx0bm9kZS5fbGFzdENoaWxkIDpcblx0b3BlcmF0aW9uID9cblx0bm9kZS5fdmFsdWVPZigpIDpcblx0bm9kZS5fZmlyc3RDaGlsZCA6XG5cdG5vZGU7XG5cblxuXG5leHBvcnQgY29uc3QgbWFudWFsUGVyc2lzdGVudCA9IChzdGFydCwgZW5kKSA9PiB7XG5cdGlmKHN0YXJ0LmlzU2FtZU5vZGUoZW5kKSkge1xuXHRcdHJldHVybiBzdGFydDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bm9kZVR5cGU6IDExMSxcblx0XHRfZmlyc3RDaGlsZDogc3RhcnQsXG5cdFx0X2xhc3RDaGlsZDogZW5kLFxuXHR9O1xufVxuXG5leHBvcnQgY29uc3QgcGVyc2lzdGVudCA9IChmcmFnbWVudCkgPT4ge1xuXHRjb25zdCB7IGNoaWxkTm9kZXMgfSA9IGZyYWdtZW50O1xuXHRjb25zdCB7IGxlbmd0aCB9ID0gY2hpbGROb2Rlcztcblx0Ly8gSWYgdGhlIGZyYWdtZW50IGhhcyBubyBjb250ZW50XG5cdC8vIGl0IHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGFuZCBicmVha1xuXHRpZiAobGVuZ3RoIDwgMikgcmV0dXJuIGNoaWxkTm9kZXNbMF07XG5cdGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbShjaGlsZE5vZGVzKTtcblx0Y29uc3QgX2ZpcnN0Q2hpbGQgPSBub2Rlc1swXTtcblx0Y29uc3QgX2xhc3RDaGlsZCA9IG5vZGVzW2xlbmd0aCAtIDFdO1xuXHRyZXR1cm4ge1xuXHRcdG5vZGVUeXBlLFxuXHRcdF9maXJzdENoaWxkLFxuXHRcdF9sYXN0Q2hpbGQsXG5cdFx0X3ZhbHVlT2YoKSB7XG5cdFx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGggIT09IGxlbmd0aCkge1xuXHRcdFx0XHRsZXQgaSA9IDA7XG5cdFx0XHRcdHdoaWxlIChpIDwgbGVuZ3RoKSBmcmFnbWVudC5hcHBlbmRDaGlsZChub2Rlc1tpKytdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBmcmFnbWVudDtcblx0XHR9LFxuXHR9O1xufTtcbiIsImV4cG9ydCB7XG5cdHJlbmRlcixcblx0aHlkcmF0ZSxcblx0cmVmcmVzaFxufSBmcm9tICdzZXh5LWZyYW1ld29yay9yZW5kZXInO1xuIiwiY29uc3QgY2FjaGUgPSBuZXcgTWFwKCk7XG5cbmZ1bmN0aW9uIGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG57XG5cdGxldCBjYWNoZWQgPSBjYWNoZS5nZXQoYWN0aXZlQ2xhc3MpO1xuXG5cdGlmKGNhY2hlZCkge1xuXHRcdHJldHVybiBjYWNoZWQ7XG5cdH1cblxuXHRsZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdHRtcC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKVxuXHRcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmQodG1wKVxuXG5cdGxldCBkdXJhdGlvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRtcCkudHJhbnNpdGlvbkR1cmF0aW9uO1xuXG5cdHRtcC5yZW1vdmUoKTtcblxuXHRkdXJhdGlvbiA9IHBhcnNlRmxvYXQoZHVyYXRpb24ucmVwbGFjZSgvW14wLTlcXC5dL2csICcnKSkgKiAxMDAwO1xuXHRcblx0Y2FjaGUuc2V0KGFjdGl2ZUNsYXNzLCBkdXJhdGlvbik7XG5cblx0cmV0dXJuIGR1cmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NlZChub2RlLCBuYW1lLCBvdXQgPSBmYWxzZSkge1xuXHRsZXQgcHJlZml4ID0gJ2VudGVyJztcblxuXHRpZiAob3V0KSB7XG5cdFx0cHJlZml4ID0gJ2xlYXZlJztcblx0fVxuXG5cdGxldCB0b1JlbW92ZSA9IG5ldyBTZXQoKTtcblxuXHRsZXQgYWN0aXZlQ2xhc3MgPSBgJHsgbmFtZSB9LSR7IHByZWZpeCB9LWFjdGl2ZWA7XG5cdGxldCBzdGFydENsYXNzID0gYCR7IG5hbWUgfS0keyBwcmVmaXggfWA7XG5cdGxldCBmaW5pc2hDbGFzcyA9IGAkeyBuYW1lIH0tJHsgcHJlZml4IH0tdG9gO1xuXG5cdGxldCBkdXJhdGlvbiA9IGdldER1cmF0aW9uKG5vZGUsIGFjdGl2ZUNsYXNzLCBvdXQpXG5cblx0bm9kZS5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzKTtcblx0bm9kZS5jbGFzc0xpc3QuYWRkKHN0YXJ0Q2xhc3MpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdG5vZGUuY2xhc3NMaXN0LmFkZChmaW5pc2hDbGFzcyk7XG5cdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKHN0YXJ0Q2xhc3MpO1xuXHR9LCAyMCk7XG5cblx0Ly8gY2xlYW51cFxuXHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3MpO1xuXHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShmaW5pc2hDbGFzcyk7XG5cdH0sIGR1cmF0aW9uKVxuXG5cdHJldHVybiB7XG5cdFx0ZHVyYXRpb25cblx0fVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwIH0pXG57XG5cdHJldHVybiB7XG5cdFx0ZGVsYXksXG5cdFx0ZHVyYXRpb24sXG5cdFx0ZWZmZWN0LFxuXHRcdGNzczoge1xuXG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBjbGVhbnVwIH0gZnJvbSAnc2V4eS1mcmFtZXdvcmsvb2JzZXJ2YWJsZSc7XG5leHBvcnQgeyBmYWRlIH0gZnJvbSAnLi9mYWRlJztcbmV4cG9ydCB7IGNsYXNzZWQgfSBmcm9tICcuL2NsYXNzZWQnO1xuXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNpdGlvbihub2RlLCB0X2luLCB0X2luX29wdHMsIHRfb3V0LCB0X291dF9vcHRzKVxue1xuXHRpZih0X2luKSB7XG5cdFx0dHJhbnNpdGlvbl9pbihub2RlLCB0X2luLCB0X2luX29wdHMpXG5cdH1cblxuXHRpZih0X291dCkge1xuXHRcdGNsZWFudXAoXG5cdFx0XHR0cmFuc2l0aW9uX291dC5iaW5kKG51bGwsIG5vZGUsIHRfb3V0LCB0X291dF9vcHRzKVxuXHRcdCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9pbihub2RlLCB0cmFuc2l0aW9uLCBvcHRpb25zKVxue1xuXHRyZXR1cm4gdHJhbnNpdGlvbihub2RlLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQobm9kZSwgdHJhbnNpdGlvbiwgb3B0aW9ucylcbntcblx0cmV0dXJuIHRyYW5zaXRpb24obm9kZSwgb3B0aW9ucywgdHJ1ZSk7XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=