/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./packages/analyser/dist/analyse.js":
/*!*******************************************!*\
  !*** ./packages/analyser/dist/analyse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyse = analyse;

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _types = __webpack_require__(/*! ./types */ "./packages/analyser/dist/types/index.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function analyse(source) {
  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  var data = (0, _types.context)(ast);
  var deps = (0, _types.dependencies)(ast, data.observables);
  return {
    context: data,
    deps: deps
  };
}

/***/ }),

/***/ "./packages/analyser/dist/index.js":
/*!*****************************************!*\
  !*** ./packages/analyser/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "analyse", {
  enumerable: true,
  get: function get() {
    return _analyse.analyse;
  }
});

var _analyse = __webpack_require__(/*! ./analyse */ "./packages/analyser/dist/analyse.js");

/***/ }),

/***/ "./packages/analyser/dist/types/context.js":
/*!*************************************************!*\
  !*** ./packages/analyser/dist/types/context.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.context = context;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function context(ast) {
  var data = {
    observables: [],
    vars: [],
    methods: []
  };
  var contextStack = [];

  function isSubContext() {
    return contextStack.length > 0;
  }

  function createContext(name) {
    contextStack.push({
      name: name,
      vars: []
    });
  }

  function closeContext() {
    var context = contextStack.pop();
  }

  function getContext() {
    return contextStack[contextStack.length - 1];
  }

  (0, _traverse.default)(ast, {
    VariableDeclarator: {
      enter: function enter(path) {
        var id = path.node.id;
        var value = path.node.init;
        var context = getContext();

        if (isSubContext() || value === null) {
          context.vars.push(id.name);
          return;
        }

        if (value.type === 'CallExpression' && value.callee.name === '$o') {
          data.observables.push(id.name);
        } else if (['ArrowFunctionExpression', 'FunctionExpression'].includes(value.type)) {
          data.observables.push(id.name);
        } else {
          data.vars.push(id.name);
        }
      }
    },
    ArrowFunctionExpression: {
      enter: function enter(path) {
        createContext(path.container.id.name);
      },
      exit: function exit(path) {
        closeContext();
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        createContext(path.node.id.name);
      },
      exit: function exit(path) {
        closeContext();
      }
    }
  });
  return data;
}

/***/ }),

/***/ "./packages/analyser/dist/types/dependencies.js":
/*!******************************************************!*\
  !*** ./packages/analyser/dist/types/dependencies.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = dependencies;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function dependencies(ast, observables) {
  if (observables === void 0) {
    observables = [];
  }

  var deps = {};
  var contextStack = [];

  function isSubContext() {
    return contextStack.length > 0;
  }

  function createContext(name) {
    contextStack.push({
      name: name,
      vars: [],
      deps: []
    });
  }

  function closeContext() {
    var context = contextStack.pop();
    deps[context.name] = context.deps;
  }

  function getContext() {
    return contextStack[contextStack.length - 1];
  }

  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var context = getContext();
        var name = path.node.name;

        if (!isSubContext()) {
          return;
        }

        if (!context.vars.includes(name) && observables.includes(name)) {
          context.deps.push(name);
        }
      }
    },
    VariableDeclarator: {
      enter: function enter(path) {
        var id = path.node.id;
        var value = path.node.init;
        var context = getContext();

        if (isSubContext() || value === null) {
          context.vars.push(id.name);
          return;
        }
      }
    },
    ArrowFunctionExpression: {
      enter: function enter(path) {
        createContext(path.container.id.name);
      },
      exit: function exit(path) {
        closeContext();
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        createContext(path.node.id.name);
      },
      exit: function exit(path) {
        closeContext();
      }
    }
  });
  return deps;
}

/***/ }),

/***/ "./packages/analyser/dist/types/index.js":
/*!***********************************************!*\
  !*** ./packages/analyser/dist/types/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "context", {
  enumerable: true,
  get: function get() {
    return _context.context;
  }
});
Object.defineProperty(exports, "dependencies", {
  enumerable: true,
  get: function get() {
    return _dependencies.dependencies;
  }
});

var _context = __webpack_require__(/*! ./context */ "./packages/analyser/dist/types/context.js");

var _dependencies = __webpack_require__(/*! ./dependencies */ "./packages/analyser/dist/types/dependencies.js");

/***/ }),

/***/ "./packages/compiler/dist/attrs/index.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/attrs/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "makeAttrValue", {
  enumerable: true,
  get: function get() {
    return _value.makeAttrValue;
  }
});

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/attrs/value.js");

/***/ }),

/***/ "./packages/compiler/dist/attrs/value.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/attrs/value.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeAttrValue = makeAttrValue;

function makeAttrValue(value) {
  console.log(value);
}

/***/ }),

/***/ "./packages/compiler/dist/compile.js":
/*!*******************************************!*\
  !*** ./packages/compiler/dist/compile.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compile = compile;

var _parser = __webpack_require__(/*! @hawa/parser */ "./packages/parser/dist/index.js");

var _analyser = __webpack_require__(/*! @hawa/analyser */ "./packages/analyser/dist/index.js");

var _dynamic = _interopRequireDefault(__webpack_require__(/*! ./dynamic */ "./packages/compiler/dist/dynamic/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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
/**
 * Compile template to DOM expressions
 */


function compile(blocks) {
  var VariableCounter = 0;
  var contextStack = [];
  /**
   * Template management
   * @type {Set}
   */

  var Templates = new Set();
  var codeAnalyse = (0, _analyser.analyse)(blocks.script);
  var dynamicExpressions = (0, _dynamic.default)(codeAnalyse); // console.warn(codeAnalyse);

  function createTemplate(program) {
    var template = program.makeTemplate(true);
    Templates.add(template);
    return (0, _types.identifier)("_tpl$" + Templates.size);
  }

  function getTemplates() {
    var code = '';
    var i = 0;

    for (var _iterator = _createForOfIteratorHelperLoose(Templates), _step; !(_step = _iterator()).done;) {
      var tpl = _step.value;
      var index = ++i;
      code += "let _tpl$" + index + " = document.createElement(\"template\");\n";
      code += "_tpl$" + index + ".innerHTML = '" + tpl + "';\n\n";
    }

    return code;
  }
  /**
   * Context management
   * @param  {[type]} LastVariableId [description]
   * @return {[type]}                [description]
   */


  function createContext(init) {
    if (init === void 0) {
      init = false;
    }

    return contextStack.push({
      LastVariableId: init ? (0, _types.identifier)('node') : getLastVariableId()
    });
  }

  function getCurrentContext() {
    return contextStack[contextStack.length - 1];
  }

  function removeContext() {
    contextStack.pop();
  }

  function getLastVariableId() {
    return getCurrentContext().LastVariableId;
  }

  function setLastVariableId(value) {
    getCurrentContext().LastVariableId = value;
  }

  function createVariable(context, Action) {
    if (context === void 0) {
      context = null;
    }

    if (Action === void 0) {
      Action = function Action(n, l) {
        return l;
      };
    }

    var name = (0, _types.identifier)("_el$" + ++VariableCounter);
    var delcarationValue = Action(name, getLastVariableId());
    var value = new _types.variableDeclaration('let', [new _types.variableDeclarator(name, delcarationValue)]);
    setLastVariableId(name);
    return {
      name: name,
      value: value
    };
  }
  /**
   * Compile templates
   * @type {[type]}
   */


  var entity = blocks.template;
  var body = [];
  var options = {
    createContext: createContext,
    removeContext: removeContext,
    createVariable: createVariable,
    getLastVariableId: getLastVariableId,
    createTemplate: createTemplate,
    dynamic: dynamicExpressions
  };

  function handle(entity) {
    entity.handle(body, options);
  }

  createContext(true);
  [entity].map(function (item) {
    return handle(item);
  });
  /**
   * Generate code
   * @type {[type]}
   */

  var code = (0, _generator.default)((0, _types.program)(body, [], 'module'), {
    retainLines: false,
    compact: false,
    minified: false,
    concise: false,
    quotes: "double"
  });
  return {
    render: code.code,
    templates: getTemplates()
  };
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/attrs.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/dynamic/attrs.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrs = attrs;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function attrs(entity, point, context, options) {
  if (entity.option.attributes === undefined) {
    return;
  }

  var props = [];

  for (var name in entity.option.attributes) {
    var value = (0, _value.makeValue)(this.context, entity.option.attributes[name]);
    props.push(new _types.objectProperty((0, _types.stringLiteral)(name), value));
  }

  if (props.length === 0) {
    return;
  }

  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_makeAttrs$'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
  context.push(expression);
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/events.js":
/*!**************************************************!*\
  !*** ./packages/compiler/dist/dynamic/events.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.events = events;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function events(point, context, options) {
  if (this.option.events === undefined) {
    return;
  }

  console.warn(this.option.events);
  return;
  var props = [];

  for (var key in this.attrs) {
    props.push(new _types.objectProperty((0, _types.stringLiteral)(key), (0, _types.stringLiteral)(this.attrs[key])));
  }

  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_makeAttrs$'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
  context.push(expression);
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/index.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/dynamic/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dynamic;

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/compiler/dist/dynamic/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/compiler/dist/dynamic/events.js");

var _props = __webpack_require__(/*! ./props */ "./packages/compiler/dist/dynamic/props.js"); // import { slots } from './slots';
// export { attrs, events, props }


function dynamic(context) {
  return {
    attrs: _attrs.attrs.bind(context),
    events: _events.events.bind(context),
    props: _props.props.bind(context)
  };
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/props.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/dynamic/props.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.props = props;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function props(entity, point, context, options) {
  if (entity.option.attributes === undefined) {
    return;
  }

  for (var name in entity.option.attributes) {
    var value = (0, _value.makeValue)(entity.option.attributes[name]);
  }

  console.warn(entity.option.attributes);
  return;
  var props = [];

  for (var key in this.attrs) {
    props.push(new _types.objectProperty((0, _types.stringLiteral)(key), (0, _types.stringLiteral)(this.attrs[key])));
  }

  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_makeAttrs$'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
  context.push(expression);
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/value.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/dynamic/value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeValue = makeValue;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function makeValue(context, value) {
  if (!value.isExpression) {
    return (0, _types.stringLiteral)(value.value);
  }

  var code = "tmp = " + value.value;
  var ast = parser.parse(code, {
    sourceType: "unambiguous",
    strictMode: false
  });
  var deps = [];
  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (['label', 'key'].includes(path.key)) {
          return;
        }

        if (context.observables.includes(id.name)) {
          deps.push(id.name);
          id.name = id.name + "()";
        }
      },
      exit: function exit(path) {}
    }
  });
  var result = ast.program.body[0];
  result = result.expression.right;

  if (deps.length === 0) {
    return result;
  }

  deps = new _types.arrayExpression(deps.map(function (item) {
    return (0, _types.identifier)(item);
  }));
  var body = new _types.arrowFunctionExpression([], new _types.blockStatement([new _types.returnStatement(result)]));
  return new _types.callExpression((0, _types.identifier)('computed'), [deps, body]);
}

/***/ }),

/***/ "./packages/compiler/dist/index.js":
/*!*****************************************!*\
  !*** ./packages/compiler/dist/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "compile", {
  enumerable: true,
  get: function get() {
    return _compile.compile;
  }
});
exports.attrs = exports.rules = void 0;

var _compile = __webpack_require__(/*! ./compile */ "./packages/compiler/dist/compile.js");

var rules = _interopRequireWildcard(__webpack_require__(/*! ./rules */ "./packages/compiler/dist/rules/index.js"));

exports.rules = rules;

var attrs = _interopRequireWildcard(__webpack_require__(/*! ./attrs */ "./packages/compiler/dist/attrs/index.js"));

exports.attrs = attrs;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

/***/ }),

/***/ "./packages/compiler/dist/rules/component.js":
/*!***************************************************!*\
  !*** ./packages/compiler/dist/rules/component.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = component;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _dynamic = __webpack_require__(/*! ../dynamic */ "./packages/compiler/dist/dynamic/index.js"); // TO DO NEXT NODES


function component(context, options) {
  var _this = this;

  var init = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('getComponent'), [(0, _types.stringLiteral)(_this.name), l, (0, _types.identifier)('render')]);
  });
  context.push(init.value);
  options.dynamic.attrs(this, init, context, options);
  var template = options.createVariable(context, function (n, l) {
    return new _types.memberExpression(l, (0, _types.identifier)('nextSibling'));
  });
  context.push(template.value);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/each.js":
/*!**********************************************!*\
  !*** ./packages/compiler/dist/rules/each.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = each;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

function each(context, options) {
  var _this = this;

  var params = [];
  var body = [];
  params.push(options.getLastVariableId());
  params.push((0, _types.identifier)(this.value));
  var template = options.createVariable(body, function (n, l) {
    var index = options.createTemplate(_this);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, (0, _types.identifier)('null'), (0, _types.identifier)('true')]);
  });
  body.push(template.value);
  var lastChild = (0, _utils.children)(this, body, options, _utils.getFirstTemplateNode);
  var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild));
  body.push(returnPointer);
  params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('item'), // replace with expression parse
  (0, _types.identifier)('key') // replace with expression parse
  ], new _types.blockStatement(body)));
  var expression = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('_each$'), params);
  });
  context.push(expression.value);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/index.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/rules/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "program", {
  enumerable: true,
  get: function get() {
    return _program.default;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.default;
  }
});
Object.defineProperty(exports, "each", {
  enumerable: true,
  get: function get() {
    return _each.default;
  }
});
Object.defineProperty(exports, "node", {
  enumerable: true,
  get: function get() {
    return _node.default;
  }
});
Object.defineProperty(exports, "text", {
  enumerable: true,
  get: function get() {
    return _text.default;
  }
});
Object.defineProperty(exports, "slot", {
  enumerable: true,
  get: function get() {
    return _slot.default;
  }
});
Object.defineProperty(exports, "component", {
  enumerable: true,
  get: function get() {
    return _component.default;
  }
});

var _program = _interopRequireDefault(__webpack_require__(/*! ./program */ "./packages/compiler/dist/rules/program.js"));

var _statement = _interopRequireDefault(__webpack_require__(/*! ./statement */ "./packages/compiler/dist/rules/statement.js"));

var _each = _interopRequireDefault(__webpack_require__(/*! ./each */ "./packages/compiler/dist/rules/each.js"));

var _node = _interopRequireDefault(__webpack_require__(/*! ./node */ "./packages/compiler/dist/rules/node.js"));

var _text = _interopRequireDefault(__webpack_require__(/*! ./text */ "./packages/compiler/dist/rules/text.js"));

var _slot = _interopRequireDefault(__webpack_require__(/*! ./slot */ "./packages/compiler/dist/rules/slot.js"));

var _component = _interopRequireDefault(__webpack_require__(/*! ./component */ "./packages/compiler/dist/rules/component.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ "./packages/compiler/dist/rules/node.js":
/*!**********************************************!*\
  !*** ./packages/compiler/dist/rules/node.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = node;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

var _dynamic = __webpack_require__(/*! ../dynamic */ "./packages/compiler/dist/dynamic/index.js");

function node(context, options) {
  // let template = false;
  // if(options.customDefine !== null) {
  // 	template = options.customDefine(context, options.firstChild);
  // 	delete options.customDefine;
  // }
  // if(template === false) {
  // 	template = options.createVariable(context, (n, l) => {
  // 		return new memberExpression(
  // 			l, id(options.firstChild ? 'firstChild' : 'nextSibling')
  // 		);
  // 	});
  // 	context.push(template.makeValue);
  // }	
  options.dynamic.attrs(this, options.getLastVariableId(), context, options);
  (0, _utils.children)(this, context, options);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/program.js":
/*!*************************************************!*\
  !*** ./packages/compiler/dist/rules/program.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = program;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

function program(context, options) {
  var _this = this;

  var template = options.createVariable(context, function (n, l) {
    var index = options.createTemplate(_this);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, options.getLastVariableId(), (0, _types.identifier)('render')]);
  });
  context.push(template.value);
  var lastChild = (0, _utils.children)(this, context, options, _utils.getFirstTemplateNode);
  var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild));
  context.push(returnPointer);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/slot.js":
/*!**********************************************!*\
  !*** ./packages/compiler/dist/rules/slot.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = slot;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

function slot(context, options) {
  var params = [(0, _types.identifier)('$slots'), (0, _types.stringLiteral)(this.name), options.getLastVariableId()];
  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_slot$'), params));
  var body = [];
  (0, _utils.children)(this, body, options);
  params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node')], new _types.blockStatement(body)));
  context.push(expression);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/statement.js":
/*!***************************************************!*\
  !*** ./packages/compiler/dist/rules/statement.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = statement;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

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

function statement(context, options) {
  var params = [];
  params.push(options.getLastVariableId());

  for (var i = 0; i < this.children.length; i++) {
    var block = this.children[i];
    var body = [];
    this.children[i].handle(body, _extends({
      lastContextVariableId: options.getLastVariableId()
    }, options));
    params.push((0, _types.identifier)(block.value));
    params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node')], new _types.blockStatement(body)));
  }

  var expression = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('_statement$'), params);
  });
  context.push(expression.value);
}

/***/ }),

/***/ "./packages/compiler/dist/rules/text.js":
/*!**********************************************!*\
  !*** ./packages/compiler/dist/rules/text.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = text;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function text(context, options) {} // let template = false;
// if(options.customDefine !== null) {
// 	template = options.customDefine(context, options.firstChild);
// 	delete options.customDefine;
// }
// if(template === false) {
// 	template = options.createVariable(context, (n, l) => {
// 		return new memberExpression(
// 			l, id(options.firstChild ? 'firstChild' : 'nextSibling')
// 		);
// 	});
// 	context.push(template.value);
// }
// let template = createVariable(context, (n, l) => {
// 	return id('createTeamplate');
// });
// context.push(template.value);
// let pointer = createVariable(context, (n, l) => {
// 	if(this.children.length > 1) {
// 		return new memberExpression(
// 			l, id('firstChild')
// 		);
// 	}
// 	return l;
// });
// // console.log(this.children.length);
// context.push(pointer.value);

/***/ }),

/***/ "./packages/compiler/dist/rules/utils.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/rules/utils.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstTemplateNode = getFirstTemplateNode;
exports.nextNode = nextNode;
exports.children = children;
exports.childHandle = childHandle;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function getFirstTemplateNode(context, options) {
  var pointer = options.createVariable(context, function (n, l) {
    return new _types.conditionalExpression((0, _types.identifier)('render'), new _types.memberExpression(l, (0, _types.identifier)('firstChild')), l);
  });
  context.push(pointer.value);
}

function nextNode(context, options, type) {
  var template = options.createVariable(context, function (n, l) {
    return new _types.memberExpression(l, (0, _types.identifier)(type));
  });
  context.push(template.value);
}

function children(entity, context, options, customDefiner) {
  if (customDefiner === void 0) {
    customDefiner = false;
  }

  options.createContext();

  for (var i = 0; i < entity.children.length; i++) {
    childHandle(entity.children[i], context, options, i, customDefiner);
  }

  var lastChild = options.getLastVariableId();
  options.removeContext();
  return lastChild;
}

function childHandle(entity, context, options, index, customDefiner) {
  var isFirst = index === 0;

  if (customDefiner && isFirst) {
    customDefiner(context, options);
  } else {
    if (!entity.skipInit()) {
      nextNode(context, options, isFirst ? 'firstChild' : 'nextSibling');
    }
  }

  entity.handle(context, options);
}

/***/ }),

/***/ "./packages/parser/dist/attrs.js":
/*!***************************************!*\
  !*** ./packages/parser/dist/attrs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrs = attrs;

var _utils = __webpack_require__(/*! ./utils */ "./packages/parser/dist/utils.js"); // events - @ -> id(attrs value)
// expression : id(attrs)
// stringlitteral 


var isAttr = (0, _utils.makeMap)('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' + 'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' + 'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' + 'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' + 'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' + 'form,formaction,headers,height,hidden,high,href,hreflang,http-equiv,' + 'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' + 'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' + 'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' + 'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' + 'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' + 'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' + 'target,title,type,usemap,value,width,wrap');

var isDomAttr = function isDomAttr(name) {
  return isAttr(name) || name.match(/^data\-/g);
};

function makeValue(value, isExpression) {
  if (isExpression === void 0) {
    isExpression = false;
  }

  return {
    value: value,
    isExpression: isExpression
  };
}

function attrs(obj) {
  var events = {};
  var props = {};
  var attributes = {};
  var staticAttrs = {};

  for (var name in obj) {
    var value = obj[name];

    if (isDomAttr(name)) {
      staticAttrs[name] = value;
    } else if (name.match(/^@/g)) {
      events[name] = makeValue(value, true);
    } else if (name.match(/^\:/g)) {
      name = name.replace(/^\:/g, '');

      if (isDomAttr(name)) {
        attributes[name] = makeValue(value, true);
      } else {
        props[name] = makeValue(value, true);
      }
    } else {
      props[name] = makeValue(value); // console.error(`Attr ${name} doesnt registered. Cant understand type.`)
    }
  }

  return {
    staticAttrs: staticAttrs,
    events: events,
    props: props,
    attributes: attributes
  };
}

/***/ }),

/***/ "./packages/parser/dist/index.js":
/*!***************************************!*\
  !*** ./packages/parser/dist/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parse", {
  enumerable: true,
  get: function get() {
    return _parse.parse;
  }
});
Object.defineProperty(exports, "Expression", {
  enumerable: true,
  get: function get() {
    return _types.Expression;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _types.Text;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function get() {
    return _types.Node;
  }
});
Object.defineProperty(exports, "Slot", {
  enumerable: true,
  get: function get() {
    return _types.Slot;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _types.Component;
  }
});

var _parse = __webpack_require__(/*! ./parse */ "./packages/parser/dist/parse.js");

var _types = __webpack_require__(/*! ./types */ "./packages/parser/dist/types/index.js");

/***/ }),

/***/ "./packages/parser/dist/parse.js":
/*!***************************************!*\
  !*** ./packages/parser/dist/parse.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBlocks = parseBlocks;
exports.parse = parse;

var _prepare = __webpack_require__(/*! ./prepare */ "./packages/parser/dist/prepare.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/parser/dist/utils.js");

var _types = __webpack_require__(/*! ./types */ "./packages/parser/dist/types/index.js");

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

function parseBlocks(blocks, html) {
  for (var key in blocks) {
    var regexp = new RegExp("<" + key + ".*>((.|\\s)*)<\\/" + key + ">", 'g');
    var matches = regexp.exec(html);

    if (matches) {
      blocks[key] = matches[1];
    }
  }

  return blocks;
}

function parse(html) {
  // get additional blocks e.g. script, style, doc
  var blocks = parseBlocks({
    script: null,
    style: null
  }, html); // clean up html and replace expression with tag-expression

  html = (0, _prepare.prepare)(blocks, html); // Parse TAGs

  var stack = [new _types.Expression({
    type: 'program'
  })];

  function currentStackNode() {
    return stack[stack.length - 1];
  }

  function isBlockTag(name) {
    return stack.length === 1 && ['script', 'style'].includes(name);
  }

  var parse = new _htmlparser.Parser({
    onopentag: function onopentag(name, attrs) {
      var parent = currentStackNode();
      var entity;

      if (name === 'expr') {
        entity = new _types.Expression(attrs);
      } else if (name === 'slot') {
        entity = new _types.Slot(attrs);
      } else if ((0, _utils.isComponent)(name)) {
        entity = new _types.Component(name, attrs);
      } else {
        entity = new _types.Node(name, attrs);
      }

      if (parent) {
        parent.addChild(entity);
      }

      stack.push(entity);
    },
    ontext: function ontext(text) {
      var parent = currentStackNode();
      text = text.trim();

      if (text !== '' && parent) {
        var node = new _types.Text(text);

        if (parent) {
          parent.addChild(node);
        }
      }
    },
    onclosetag: function onclosetag(name) {
      var removed = stack.pop();
    }
  }, {
    decodeEntities: true
  });
  parse.write(html);
  parse.end();
  blocks.template = stack[0]; // console.log(blocks.template.children[0])

  return blocks;
}

/***/ }),

/***/ "./packages/parser/dist/prepare.js":
/*!*****************************************!*\
  !*** ./packages/parser/dist/prepare.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepare = prepare;

function prepareHTML(html) {
  return html.replace(/\t/g, ' ').replace(/\s\s+/g, ' ').trim();
}

function prepare(blocks, html) {
  for (var key in blocks) {
    var regexp = new RegExp("<" + key + ".*>((.|\\s)*)<\\/" + key + ">", 'g');
    html = html.replace(regexp, '');
  }

  html = html // if
  .replace(/@if\((.*)\)/g, '<expr type="statement"><expr type="program" value="$1">').replace(/@elseif\((.*)\)/g, '</expr><expr type="program" value="$1">').replace(/@else/g, '</expr><expr type="program" value="true">').replace(/@endif/g, '</expr></expr>') // each
  .replace(/@each\((.*)\)/g, '<expr type="each" value="$1">').replace(/@endeach/g, '</expr>');
  return prepareHTML(html);
}

/***/ }),

/***/ "./packages/parser/dist/types/Component.js":
/*!*************************************************!*\
  !*** ./packages/parser/dist/types/Component.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type2 = _interopRequireDefault(__webpack_require__(/*! ./Type */ "./packages/parser/dist/types/Type.js"));

var _attrs = __webpack_require__(/*! ../attrs */ "./packages/parser/dist/attrs.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Component = /*#__PURE__*/function (_Type) {
  _inheritsLoose(Component, _Type);

  function Component(name, attrs) {
    var _this;

    _this = _Type.call(this) || this;
    _this.name = name;
    _this.options = (0, _attrs.attrs)(attrs);
    _this.children = [];
    _this.type = 'component';
    return _this;
  }

  var _proto = Component.prototype;

  _proto.hasAttributes = function hasAttributes() {
    return Object.keys(this.option.attributes).length > 0;
  };

  return Component;
}(_Type2.default);

exports.default = Component;

/***/ }),

/***/ "./packages/parser/dist/types/Expression.js":
/*!**************************************************!*\
  !*** ./packages/parser/dist/types/Expression.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type2 = _interopRequireDefault(__webpack_require__(/*! ./Type */ "./packages/parser/dist/types/Type.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Expression = /*#__PURE__*/function (_Type) {
  _inheritsLoose(Expression, _Type);

  function Expression(_ref) {
    var _this;

    var _ref$type = _ref.type,
        type = _ref$type === void 0 ? null : _ref$type,
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? null : _ref$value;
    _this = _Type.call(this) || this;
    _this.type = type;
    _this.value = value;
    _this.children = [];
    return _this;
  }

  return Expression;
}(_Type2.default);

exports.default = Expression;

/***/ }),

/***/ "./packages/parser/dist/types/Node.js":
/*!********************************************!*\
  !*** ./packages/parser/dist/types/Node.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type2 = _interopRequireDefault(__webpack_require__(/*! ./Type */ "./packages/parser/dist/types/Type.js"));

var _attrs = __webpack_require__(/*! ../attrs */ "./packages/parser/dist/attrs.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Node = /*#__PURE__*/function (_Type) {
  _inheritsLoose(Node, _Type);

  function Node(tag, attrs) {
    var _this;

    _this = _Type.call(this) || this;
    _this.tag = tag;
    _this.option = (0, _attrs.attrs)(attrs);
    _this.children = [];
    _this.type = 'node';
    return _this;
  }

  var _proto = Node.prototype;

  _proto.hasAttributes = function hasAttributes() {
    return Object.keys(this.option.attributes).length > 0;
  };

  return Node;
}(_Type2.default);

exports.default = Node;

/***/ }),

/***/ "./packages/parser/dist/types/Slot.js":
/*!********************************************!*\
  !*** ./packages/parser/dist/types/Slot.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type2 = _interopRequireDefault(__webpack_require__(/*! ./Type */ "./packages/parser/dist/types/Type.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Slot = /*#__PURE__*/function (_Type) {
  _inheritsLoose(Slot, _Type);

  function Slot(_ref) {
    var _this;

    var _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'default' : _ref$name,
        _ref$tag = _ref.tag,
        tag = _ref$tag === void 0 ? 'span' : _ref$tag;
    _this = _Type.call(this) || this;
    _this.name = name;
    _this.tag = tag;
    _this.children = [];
    _this.type = 'slot';
    return _this;
  } // makeTemplate(onlyChildren = true)
  // {
  // 	let template = `<${this.tag}`;
  // 	template += '>';
  // 	let childTemplate = this.children.map(child => child.makeTemplate(false)).join('');
  // 	template += childTemplate;
  // 	template += `</${this.tag}>`;
  // 	if(['statement', 'each', 'component'].includes(this.type)) {
  // 		return '<!---->';
  // 	}
  // 	if(!this.tag) {
  // 		return childTemplate;
  // 	}
  // 	return template;
  // }


  return Slot;
}(_Type2.default);

exports.default = Slot;

/***/ }),

/***/ "./packages/parser/dist/types/Text.js":
/*!********************************************!*\
  !*** ./packages/parser/dist/types/Text.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Type2 = _interopRequireDefault(__webpack_require__(/*! ./Type */ "./packages/parser/dist/types/Type.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Text = /*#__PURE__*/function (_Type) {
  _inheritsLoose(Text, _Type);

  function Text(text) {
    var _this;

    _this = _Type.call(this) || this;
    _this.value = text;
    _this.type = 'text';
    return _this;
  }

  var _proto = Text.prototype;

  _proto.makeTemplate = function makeTemplate() {
    return this.value;
  };

  return Text;
}(_Type2.default);

exports.default = Text;

/***/ }),

/***/ "./packages/parser/dist/types/Type.js":
/*!********************************************!*\
  !*** ./packages/parser/dist/types/Type.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _compiler = __webpack_require__(/*! @hawa/compiler */ "./packages/compiler/dist/index.js");

var Type = /*#__PURE__*/function () {
  function Type() {
    this.parent = null;
  }

  var _proto = Type.prototype;

  _proto.map = function map(callback) {
    if (this.children && this.type !== 'statement') {
      this.children.map(callback);
    }
  };

  _proto.addChild = function addChild(child) {
    child.parent = this;
    this.children.push(child);
  };

  _proto.handle = function handle(context, options) {
    return _compiler.rules[this.type].call(this, context, options);
  };

  _proto.skipInit = function skipInit() {
    return false; //this.type === 'program' || this.type === 'slot';
  };

  _proto.makeTemplate = function makeTemplate(onlyChildren) {
    if (onlyChildren === void 0) {
      onlyChildren = true;
    }

    var template = "<" + this.tag;
    var attrs = this.option ? this.option.staticAttrs : {};

    for (var key in attrs) {
      template += " " + key + "=\"" + attrs[key] + "\"";
    }

    template += '>';
    var childTemplate = this.children.map(function (child) {
      return child.makeTemplate(false);
    }).join('');
    template += childTemplate;
    template += "</" + this.tag + ">";

    if (['statement', 'each', 'component'].includes(this.type) && !onlyChildren) {
      return '<!---->';
    }

    if (!this.tag) {
      return childTemplate;
    }

    return template;
  };

  return Type;
}();

exports.default = Type;

/***/ }),

/***/ "./packages/parser/dist/types/index.js":
/*!*********************************************!*\
  !*** ./packages/parser/dist/types/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Expression", {
  enumerable: true,
  get: function get() {
    return _Expression.default;
  }
});
Object.defineProperty(exports, "Text", {
  enumerable: true,
  get: function get() {
    return _Text.default;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function get() {
    return _Node.default;
  }
});
Object.defineProperty(exports, "Slot", {
  enumerable: true,
  get: function get() {
    return _Slot.default;
  }
});
Object.defineProperty(exports, "Component", {
  enumerable: true,
  get: function get() {
    return _Component.default;
  }
});

var _Expression = _interopRequireDefault(__webpack_require__(/*! ./Expression */ "./packages/parser/dist/types/Expression.js"));

var _Text = _interopRequireDefault(__webpack_require__(/*! ./Text */ "./packages/parser/dist/types/Text.js"));

var _Node = _interopRequireDefault(__webpack_require__(/*! ./Node */ "./packages/parser/dist/types/Node.js"));

var _Slot = _interopRequireDefault(__webpack_require__(/*! ./Slot */ "./packages/parser/dist/types/Slot.js"));

var _Component = _interopRequireDefault(__webpack_require__(/*! ./Component */ "./packages/parser/dist/types/Component.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

/***/ }),

/***/ "./packages/parser/dist/utils.js":
/*!***************************************!*\
  !*** ./packages/parser/dist/utils.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isComponent = isComponent;
exports.makeMap = makeMap;
var HTMLTags = ["!doctype", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bb", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "datagrid", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "eventsource", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1> to <h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];

function isComponent(name) {
  return !HTMLTags.includes(name);
}

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}

/***/ }),

/***/ "./test/index.js":
/*!***********************!*\
  !*** ./test/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _parser = __webpack_require__(/*! @hawa/parser */ "./packages/parser/dist/index.js");

var _compiler = __webpack_require__(/*! @hawa/compiler */ "./packages/compiler/dist/index.js");

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./test/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function test() {
  function getNode(template, node, render) {
    if (render) {
      return template.content.cloneNode(true);
    }

    return node;
  }

  function parseContext(context) {
    if (context === undefined || context === null) {
      context = {};
    }

    var $props = context.$props || {};
    var $slots = context.$slots || {};
    return {
      $props: $props,
      $slots: $slots
    };
  }

  function _makeAttrs$() {}

  function _slot$($slots, name, node, callback) {
    if ($slots[name] === undefined) {
      callback(node);
      return;
    }

    node.innerHTML = $slots[name];
    return node;
  }

  function _each$(node, items, fn) {
    var body = document.createDocumentFragment();

    for (var i = 0; i < items.length; i++) {
      var _node = fn(_node, items[i], i);

      body.appendChild(_node);
    }

    node.replaceWith(body);
    return body;
  }

  function _statement$(node) {
    var returnNode = false;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < args.length; i += 2) {
      if (args[i]) {
        returnNode = args[i + 1](node);
        break;
      }
    }

    if (returnNode === false) {
      return node;
    }

    node.replaceWith(returnNode);
    return returnNode;
  }

  var _gett = gett(),
      render = _gett.render,
      templates = _gett.templates;

  console.log(render);
  console.log(templates);
  return;
  /**
   * GENERATED CODE
   */

  var _tpl$1 = document.createElement("template");

  _tpl$1.innerHTML = "<div><!----></div>";

  var _tpl$2 = document.createElement("template");

  _tpl$2.innerHTML = "<div>1</div><div class=\"button\"><span>Default <b class=\"d\">button</b> text</span></div>";

  function makeComponent(context, node) {
    if (node === void 0) {
      node = false;
    }

    var render = node === false;

    var _parseContext = parseContext(context),
        $props = _parseContext.$props,
        $slots = _parseContext.$slots;
    /**
     * GENERATED CODE
     */


    var _el$1 = getNode(_tpl$1, node, render);

    var _el$2 = render ? _el$1.firstChild : _el$1;

    var _el$3 = _el$2.firstChild;

    var _el$13 = _each$(_el$3, [1], function (item, key) {
      var _el$4 = getNode(_tpl$2, null, true);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      var _el$6 = _el$5.firstChild;
      var _el$7 = _el$5.nextSibling;

      _makeAttrs$(_el$7, render, {
        "class": "button"
      });

      var _el$8 = _el$7.firstChild;

      _slot$($slots, "default", _el$8, function (node) {
        var _el$9 = _el$8.firstChild;
        var _el$10 = _el$9.nextSibling;

        _makeAttrs$(_el$10, render, {
          "class": "d"
        });

        var _el$11 = _el$10.firstChild;
        var _el$12 = _el$10.nextSibling;
      });

      return render ? _el$4 : _el$7;
    });

    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  (0, _time.default)('render');
  var d = makeComponent();
  layout.appendChild(d);
  console.log(layout.innerHTML);
  (0, _time.default)('render');
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot<b class=\"d\">1</b></slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t@each(1)\n\t<div>1</div>\n\t<div class=\"button\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
  var blocks = (0, _parser.parse)(html);
  return (0, _compiler.compile)(blocks); // console.log(html);
}

/***/ }),

/***/ "./test/time.js":
/*!**********************!*\
  !*** ./test/time.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = time;
var times = {};

function time(name) {
  var now = new Date().getTime();

  if (typeof times[name] === 'undefined') {
    times[name] = now;
    return times[name];
  }

  console.log("[ tb " + name + " ]", now - times[name], 'ms');
  delete times[name];
}

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./test/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./test/index.js */"./test/index.js");


/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9hdHRycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2F0dHJzL3ZhbHVlLmpzIiwid2VicGFjazovLy8uLi9zcmMvY29tcGlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3Byb3BzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcmVwYXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9TbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9Xcml0YWJsZVN0cmVhbSAoaWdub3JlZCkiXSwibmFtZXMiOlsiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnRleHQiLCJvYnNlcnZhYmxlcyIsInZhcnMiLCJtZXRob2RzIiwiY29udGV4dFN0YWNrIiwibmFtZSIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwiaWQiLCJwYXRoIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiaXNTdWJDb250ZXh0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiZXhpdCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiY29uc29sZSIsIlZhcmlhYmxlQ291bnRlciIsIlRlbXBsYXRlcyIsImNvZGVBbmFseXNlIiwiYmxvY2tzIiwiZHluYW1pY0V4cHJlc3Npb25zIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImluaXQiLCJMYXN0VmFyaWFibGVJZCIsImdldExhc3RWYXJpYWJsZUlkIiwiZ2V0Q3VycmVudENvbnRleHQiLCJBY3Rpb24iLCJkZWxjYXJhdGlvblZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsInNldExhc3RWYXJpYWJsZUlkIiwiZW50aXR5IiwiYm9keSIsIm9wdGlvbnMiLCJyZW1vdmVDb250ZXh0IiwiY3JlYXRlVmFyaWFibGUiLCJjcmVhdGVUZW1wbGF0ZSIsImR5bmFtaWMiLCJoYW5kbGUiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJyZW5kZXIiLCJ0ZW1wbGF0ZXMiLCJnZXRUZW1wbGF0ZXMiLCJwcm9wcyIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJjYWxsRXhwcmVzc2lvbiIsIm9iamVjdEV4cHJlc3Npb24iLCJhdHRycyIsImV2ZW50cyIsInJlc3VsdCIsImFycmF5RXhwcmVzc2lvbiIsImFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiYmxvY2tTdGF0ZW1lbnQiLCJyZXR1cm5TdGF0ZW1lbnQiLCJtZW1iZXJFeHByZXNzaW9uIiwicGFyYW1zIiwibGFzdENoaWxkIiwiZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUiLCJyZXR1cm5Qb2ludGVyIiwiY29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYmxvY2siLCJsYXN0Q29udGV4dFZhcmlhYmxlSWQiLCJwb2ludGVyIiwiY3VzdG9tRGVmaW5lciIsImNoaWxkSGFuZGxlIiwiaXNGaXJzdCIsIm5leHROb2RlIiwiaXNBdHRyIiwiaXNEb21BdHRyIiwiaXNFeHByZXNzaW9uIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJFeHByZXNzaW9uIiwidHlwZSIsInBhcnNlIiwiSFRNTFBhcnNlciIsIm9ub3BlbnRhZyIsInBhcmVudCIsImN1cnJlbnRTdGFja05vZGUiLCJTbG90IiwiQ29tcG9uZW50IiwiTm9kZSIsIm9udGV4dCIsInRleHQiLCJub2RlIiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJUeXBlIiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJjaGlsZCIsInJ1bGVzIiwic2tpcEluaXQiLCJvbmx5Q2hpbGRyZW4iLCJjaGlsZFRlbXBsYXRlIiwiSFRNTFRhZ3MiLCJsaXN0Iiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsInZhbCIsInRlc3QiLCJnZXROb2RlIiwiY29udGVudCIsImNsb25lTm9kZSIsInBhcnNlQ29udGV4dCIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIiRzbG90cyIsIl9tYWtlQXR0cnMkIiwiX3Nsb3QkIiwiY2FsbGJhY2siLCJpbm5lckhUTUwiLCJfZWFjaCQiLCJpdGVtcyIsImZuIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJyZXBsYWNlV2l0aCIsIl9zdGF0ZW1lbnQkIiwicmV0dXJuTm9kZSIsImFyZ3MiLCJnZXR0IiwibG9nIiwiX3RwbCQxIiwiY3JlYXRlRWxlbWVudCIsIl90cGwkMiIsIm1ha2VDb21wb25lbnQiLCJfZWwkMSIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsIl9lbCQzIiwiX2VsJDEzIiwiaXRlbSIsImtleSIsIl9lbCQ0IiwiX2VsJDUiLCJfZWwkNiIsIl9lbCQ3IiwibmV4dFNpYmxpbmciLCJfZWwkOCIsIl9lbCQ5IiwiX2VsJDEwIiwiX2VsJDExIiwiX2VsJDEyIiwibGF5b3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJkIiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50LCBwYXJzZSB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdFxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIHZhbHVlLmNhbGxlZS5uYW1lID09PSAnJG8nKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhLnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGF0YTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW5jaWVzKGFzdCwgb2JzZXJ2YWJsZXMgPSBbXSlcbntcblx0bGV0IGRlcHMgPSB7fTtcblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGVwcztcbn0iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIENvbXBvbmVudCwgU2xvdCB9IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgeyBtYWtlQXR0clZhbHVlIH0iLCJleHBvcnQgZnVuY3Rpb24gbWFrZUF0dHJWYWx1ZSh2YWx1ZSlcbntcblx0Y29uc29sZS5sb2codmFsdWUpO1xufSIsImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgYW5hbHlzZSB9IGZyb20gJ0BoYXdhL2FuYWx5c2VyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cdC8vIGNvbnNvbGUud2Fybihjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZih0aGlzLm9wdGlvbi5ldmVudHMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnNvbGUud2Fybih0aGlzLm9wdGlvbi5ldmVudHMpXG5cblx0cmV0dXJuO1xuXHRcblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG4vLyBpbXBvcnQgeyBzbG90cyB9IGZyb20gJy4vc2xvdHMnO1xuXG4vLyBleHBvcnQgeyBhdHRycywgZXZlbnRzLCBwcm9wcyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoY29udGV4dClcbntcblx0cmV0dXJuIHtcblx0XHRhdHRyczogYXR0cnMuYmluZChjb250ZXh0KSxcblx0XHRldmVudHM6IGV2ZW50cy5iaW5kKGNvbnRleHQpLFxuXHRcdHByb3BzOiBwcm9wcy5iaW5kKGNvbnRleHQpLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uYXR0cmlidXRlcykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZShlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXNbbmFtZV0pO1xuXHR9XG5cblxuXHRjb25zb2xlLndhcm4oZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKVxuXG5cdHJldHVybjtcblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IGtleSBpbiB0aGlzLmF0dHJzKSB7XG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChrZXkpLFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMuYXR0cnNba2V5XSksXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VWYWx1ZShjb250ZXh0LCB2YWx1ZSlcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYHRtcCA9ICR7dmFsdWUudmFsdWV9YDtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0bGV0IGRlcHMgPSBbXTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdGlmKGRlcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXG5cdGxldCBib2R5ID0gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdClcblx0XHRdKVxuXHQpO1xuXG5cdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0aWQoJ2NvbXB1dGVkJyksXG5cdFx0W2RlcHMsIGJvZHldXG5cdClcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4uL2R5bmFtaWMnO1xuXG4vLyBUTyBETyBORVhUIE5PREVTXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0b3B0aW9ucy5keW5hbWljLmF0dHJzKHRoaXMsIGluaXQsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCgnbmV4dFNpYmxpbmcnKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiwgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXHRwYXJhbXMucHVzaChpZCh0aGlzLnZhbHVlKSk7XG5cblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShib2R5LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgaWQoJ251bGwnKSwgaWQoJ3RydWUnKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdGlkKCdpdGVtJyksIC8vIHJlcGxhY2Ugd2l0aCBleHByZXNzaW9uIHBhcnNlXG5cdFx0XHRpZCgna2V5JykgLy8gcmVwbGFjZSB3aXRoIGV4cHJlc3Npb24gcGFyc2Vcblx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX2VhY2gkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQgcHJvZ3JhbSBmcm9tICcuL3Byb2dyYW0nO1xuaW1wb3J0IHN0YXRlbWVudCBmcm9tICcuL3N0YXRlbWVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2gnO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL3Nsb3QnO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IHByb2dyYW0sIHN0YXRlbWVudCwgZWFjaCwgbm9kZSwgdGV4dCwgc2xvdCwgY29tcG9uZW50IH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUubWFrZVZhbHVlKTtcblx0Ly8gfVx0XG5cblx0b3B0aW9ucy5keW5hbWljLmF0dHJzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZW1lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgYmxvY2sgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdGxldCBib2R5ID0gW107XG5cblx0XHR0aGlzLmNoaWxkcmVuW2ldLmhhbmRsZShib2R5LCB7XG5cdFx0XHRsYXN0Q29udGV4dFZhcmlhYmxlSWQ6IG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdHBhcmFtcy5wdXNoKGlkKGJsb2NrLnZhbHVlKSk7XG5cdFx0cGFyYW1zLnB1c2goXG5cdFx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdFx0KTtcblx0fVxuXG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3N0YXRlbWVudCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXh0KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdC8vIH1cblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdHJldHVybiBpZCgnY3JlYXRlVGVhbXBsYXRlJyk7XG5cdC8vIH0pO1xuXG5cdC8vIGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0Ly8gbGV0IHBvaW50ZXIgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdGlmKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZCgnZmlyc3RDaGlsZCcpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBsO1xuXHQvLyB9KTtcblx0XG5cdC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcblx0Ly8gY29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBvaW50ZXIgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihsLCBpZCgnZmlyc3RDaGlsZCcpKSxcblx0XHRcdGxcblx0XHQpXG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIHR5cGUpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCh0eXBlKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGN1c3RvbURlZmluZXIgPSBmYWxzZSlcbntcblx0b3B0aW9ucy5jcmVhdGVDb250ZXh0KCk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZEhhbmRsZShlbnRpdHkuY2hpbGRyZW5baV0sIGNvbnRleHQsIG9wdGlvbnMsIGksIGN1c3RvbURlZmluZXIpO1xuXHR9XG5cblx0bGV0IGxhc3RDaGlsZCA9IG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKTtcblxuXHRvcHRpb25zLnJlbW92ZUNvbnRleHQoKTtcblxuXHRyZXR1cm4gbGFzdENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRIYW5kbGUoZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBpbmRleCwgY3VzdG9tRGVmaW5lcilcbntcblx0bGV0IGlzRmlyc3QgPSBpbmRleCA9PT0gMDtcblxuXHRpZihjdXN0b21EZWZpbmVyICYmIGlzRmlyc3QpIHtcblx0XHRjdXN0b21EZWZpbmVyKGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9IGVsc2Uge1xuXHRcdGlmKCFlbnRpdHkuc2tpcEluaXQoKSkge1xuXHRcdFx0bmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgaXNGaXJzdCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdFx0fVxuXHR9XG5cblx0ZW50aXR5LmhhbmRsZShjb250ZXh0LCBvcHRpb25zKTtcbn0iLCIvLyBldmVudHMgLSBAIC0+IGlkKGF0dHJzIHZhbHVlKVxuLy8gZXhwcmVzc2lvbiA6IGlkKGF0dHJzKVxuLy8gc3RyaW5nbGl0dGVyYWwgXG5pbXBvcnQgeyBtYWtlTWFwIH0gZnJvbSAnLi91dGlscyc7XG5cblxudmFyIGlzQXR0ciA9IG1ha2VNYXAoXG5cdCdhY2NlcHQsYWNjZXB0LWNoYXJzZXQsYWNjZXNza2V5LGFjdGlvbixhbGlnbixhbHQsYXN5bmMsYXV0b2NvbXBsZXRlLCcgK1xuXHQnYXV0b2ZvY3VzLGF1dG9wbGF5LGF1dG9zYXZlLGJnY29sb3IsYm9yZGVyLGJ1ZmZlcmVkLGNoYWxsZW5nZSxjaGFyc2V0LCcgK1xuXHQnY2hlY2tlZCxjaXRlLGNsYXNzLGNvZGUsY29kZWJhc2UsY29sb3IsY29scyxjb2xzcGFuLGNvbnRlbnQsaHR0cC1lcXVpdiwnICtcblx0J25hbWUsY29udGVudGVkaXRhYmxlLGNvbnRleHRtZW51LGNvbnRyb2xzLGNvb3JkcyxkYXRhLGRhdGV0aW1lLGRlZmF1bHQsJyArXG5cdCdkZWZlcixkaXIsZGlybmFtZSxkaXNhYmxlZCxkb3dubG9hZCxkcmFnZ2FibGUsZHJvcHpvbmUsZW5jdHlwZSxtZXRob2QsZm9yLCcgK1xuXHQnZm9ybSxmb3JtYWN0aW9uLGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixoaWdoLGhyZWYsaHJlZmxhbmcsaHR0cC1lcXVpdiwnICtcblx0J2ljb24saWQsaXNtYXAsaXRlbXByb3Asa2V5dHlwZSxraW5kLGxhYmVsLGxhbmcsbGFuZ3VhZ2UsbGlzdCxsb29wLGxvdywnICtcblx0J21hbmlmZXN0LG1heCxtYXhsZW5ndGgsbWVkaWEsbWV0aG9kLEdFVCxQT1NULG1pbixtdWx0aXBsZSxlbWFpbCxmaWxlLCcgK1xuXHQnbXV0ZWQsbmFtZSxub3ZhbGlkYXRlLG9wZW4sb3B0aW11bSxwYXR0ZXJuLHBpbmcscGxhY2Vob2xkZXIscG9zdGVyLCcgK1xuXHQncHJlbG9hZCxyYWRpb2dyb3VwLHJlYWRvbmx5LHJlbCxyZXF1aXJlZCxyZXZlcnNlZCxyb3dzLHJvd3NwYW4sc2FuZGJveCwnICtcblx0J3Njb3BlLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzaGFwZSxzaXplLHR5cGUsdGV4dCxwYXNzd29yZCxzaXplcyxzcGFuLCcgK1xuXHQnc3BlbGxjaGVjayxzcmMsc3JjZG9jLHNyY2xhbmcsc3Jjc2V0LHN0YXJ0LHN0ZXAsc3R5bGUsc3VtbWFyeSx0YWJpbmRleCwnICtcblx0J3RhcmdldCx0aXRsZSx0eXBlLHVzZW1hcCx2YWx1ZSx3aWR0aCx3cmFwJ1xuKTtcblxudmFyIGlzRG9tQXR0ciA9IChuYW1lKSA9PiB7XG5cdHJldHVybiBpc0F0dHIobmFtZSkgfHwgbmFtZS5tYXRjaCgvXmRhdGFcXC0vZyk7XG59XG5cbmZ1bmN0aW9uIG1ha2VWYWx1ZSh2YWx1ZSwgaXNFeHByZXNzaW9uID0gZmFsc2UpXG57XG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0aXNFeHByZXNzaW9uLFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhvYmopXG57XG5cdGxldCBldmVudHMgPSB7fTtcblx0bGV0IHByb3BzID0ge307XG5cdGxldCBhdHRyaWJ1dGVzID0ge307XG5cdGxldCBzdGF0aWNBdHRycyA9IHt9O1xuXG5cdGZvcihsZXQgbmFtZSBpbiBvYmopXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBvYmpbbmFtZV07XG5cblx0XHRpZihpc0RvbUF0dHIobmFtZSkpIHtcblx0XHRcdHN0YXRpY0F0dHJzW25hbWVdID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15AL2cpKSB7XG5cdFx0XHRldmVudHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eXFw6L2cpKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFw6L2csICcnKTtcblx0XHRcdGlmKGlzRG9tQXR0cihuYW1lKSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUpO1xuXHRcdFx0Ly8gY29uc29sZS5lcnJvcihgQXR0ciAke25hbWV9IGRvZXNudCByZWdpc3RlcmVkLiBDYW50IHVuZGVyc3RhbmQgdHlwZS5gKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c3RhdGljQXR0cnM6IHN0YXRpY0F0dHJzLFxuXHRcdGV2ZW50cyxcblx0XHRwcm9wcyxcblx0XHRhdHRyaWJ1dGVzLFxuXHR9O1xufSIsImltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja3MoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnZXhwLmV4ZWMoaHRtbCk7XG5cdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0YmxvY2tzW2tleV0gPSBtYXRjaGVzWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IG51bGwsXG5cdFx0c3R5bGU6IG51bGwsXG5cdH0sIGh0bWwpO1xuXG5cdC8vIGNsZWFuIHVwIGh0bWwgYW5kIHJlcGxhY2UgZXhwcmVzc2lvbiB3aXRoIHRhZy1leHByZXNzaW9uXG5cdGh0bWwgPSBwcmVwYXJlKGJsb2NrcywgaHRtbCk7XG5cblx0Ly8gUGFyc2UgVEFHc1xuXHRsZXQgc3RhY2sgPSBbXG5cdFx0bmV3IEV4cHJlc3Npb24oeyB0eXBlOiAncHJvZ3JhbScgfSlcblx0XTtcblxuXHRmdW5jdGlvbiBjdXJyZW50U3RhY2tOb2RlKClcblx0e1xuXHRcdHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQmxvY2tUYWcobmFtZSlcblx0e1xuXHRcdHJldHVybiBzdGFjay5sZW5ndGggPT09IDEgJiYgWydzY3JpcHQnLCAnc3R5bGUnXS5pbmNsdWRlcyhuYW1lKTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlID0gbmV3IEhUTUxQYXJzZXIoe1xuXHRcdFxuXHRcdG9ub3BlbnRhZyhuYW1lLCBhdHRycylcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXHRcdFx0bGV0IGVudGl0eTtcblxuXHRcdFx0aWYobmFtZSA9PT0gJ2V4cHInKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBFeHByZXNzaW9uKGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZihuYW1lID09PSAnc2xvdCcpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IFNsb3QoYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmIChpc0NvbXBvbmVudChuYW1lKSkge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgQ29tcG9uZW50KG5hbWUsIGF0dHJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBOb2RlKG5hbWUsIGF0dHJzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdHBhcmVudC5hZGRDaGlsZChlbnRpdHkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGFjay5wdXNoKGVudGl0eSk7XG5cdFx0fSxcblxuXHRcdG9udGV4dCh0ZXh0KVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdFx0aWYodGV4dCAhPT0gJycgJiYgcGFyZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gbmV3IFRleHQodGV4dCk7XG5cdFx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHQgICAgXHR9XG5cdCAgICB9LFxuXG5cdFx0b25jbG9zZXRhZyhuYW1lKVxuXHRcdHtcblx0XHRcdGxldCByZW1vdmVkID0gc3RhY2sucG9wKCk7XG5cdCAgICB9XG5cblx0fSwgeyBkZWNvZGVFbnRpdGllczogdHJ1ZSB9KVxuXHRcblx0cGFyc2Uud3JpdGUoaHRtbCk7XG5cdHBhcnNlLmVuZCgpO1xuXG5cdGJsb2Nrcy50ZW1wbGF0ZSA9IHN0YWNrWzBdO1xuXHQvLyBjb25zb2xlLmxvZyhibG9ja3MudGVtcGxhdGUuY2hpbGRyZW5bMF0pXG5cdHJldHVybiBibG9ja3M7XG59XG4iLCJmdW5jdGlvbiBwcmVwYXJlSFRNTChodG1sKVxue1xuXHRyZXR1cm4gaHRtbC5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZShibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleHAsICcnKTtcblx0fVxuXG5cdGh0bWwgPSBodG1sXG5cdFx0Ly8gaWZcblx0XHQucmVwbGFjZSgvQGlmXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cInN0YXRlbWVudFwiPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlaWZcXCgoLiopXFwpL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2UvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwidHJ1ZVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRpZi9nLCAnPC9leHByPjwvZXhwcj4nKVxuXHRcdC8vIGVhY2hcblx0XHQucmVwbGFjZSgvQGVhY2hcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwiZWFjaFwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kZWFjaC9nLCAnPC9leHByPicpXG5cblx0cmV0dXJuIHByZXBhcmVIVE1MKGh0bWwpO1xufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMub3B0aW9ucyA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdjb21wb25lbnQnO1xuXHR9XG5cdFxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHR5cGUgPSBudWxsLCB2YWx1ZSA9IG51bGwgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xuXHR9XG5cblx0XG5cblx0XG5cblx0XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRhZywgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnbm9kZSc7XG5cdH1cblxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRza2lwSW5pdCgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7Ly90aGlzLnR5cGUgPT09ICdwcm9ncmFtJyB8fCB0aGlzLnR5cGUgPT09ICdzbG90Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cdFx0XG5cdFx0bGV0IGF0dHJzID0gdGhpcy5vcHRpb24gPyB0aGlzLm9wdGlvbi5zdGF0aWNBdHRycyA6IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdHRlbXBsYXRlICs9IGAgJHtrZXl9PVwiJHthdHRyc1trZXldfVwiYDtcblx0XHR9XG5cblx0XHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0XHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0XHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpICYmICFvbmx5Q2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiAnPCEtLS0tPic7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMudGFnKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH1cbn0iLCJjb25zdCBIVE1MVGFncyA9IFtcblx0XCIhZG9jdHlwZVwiLCBcImFcIiwgXCJhYmJyXCIsIFwiYWNyb255bVwiLCBcImFkZHJlc3NcIiwgXCJhcHBsZXRcIiwgXCJhcmVhXCIsIFwiYXJ0aWNsZVwiLCBcImFzaWRlXCIsIFwiYXVkaW9cIixcblx0XCJiXCIsIFwiYmFzZVwiLCBcImJhc2Vmb250XCIsIFwiYmJcIiwgXCJiZG9cIiwgXCJiaWdcIiwgXCJibG9ja3F1b3RlXCIsIFwiYm9keVwiLCBcImJyXCIsIFwiYnV0dG9uXCIsIFwiY2FudmFzXCIsXG5cdFwiY2FwdGlvblwiLCBcImNlbnRlclwiLCBcImNpdGVcIiwgXCJjb2RlXCIsIFwiY29sXCIsIFwiY29sZ3JvdXBcIiwgXCJjb21tYW5kXCIsIFwiZGF0YWdyaWRcIiwgXCJkYXRhbGlzdFwiLCBcImRkXCIsXG5cdFwiZGVsXCIsIFwiZGV0YWlsc1wiLCBcImRmblwiLCBcImRpYWxvZ1wiLCBcImRpclwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJlbVwiLCBcImVtYmVkXCIsIFwiZXZlbnRzb3VyY2VcIiwgXCJmaWVsZHNldFwiLFxuXHRcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb250XCIsIFwiZm9vdGVyXCIsIFwiZm9ybVwiLCBcImZyYW1lXCIsIFwiZnJhbWVzZXRcIiwgXCJoMT4gdG8gPGg2XCIsIFwiaGVhZFwiLCBcImhlYWRlclwiLFxuXHRcImhncm91cFwiLCBcImhyXCIsIFwiaHRtbFwiLCBcImlcIiwgXCJpZnJhbWVcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImlzaW5kZXhcIiwgXCJrYmRcIiwgXCJrZXlnZW5cIiwgXCJsYWJlbFwiLFxuXHRcImxlZ2VuZFwiLCBcImxpXCIsIFwibGlua1wiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtZW51XCIsIFwibWV0YVwiLCBcIm1ldGVyXCIsIFwibmF2XCIsIFwibm9mcmFtZXNcIiwgXCJub3NjcmlwdFwiLFxuXHRcIm9iamVjdFwiLCBcIm9sXCIsIFwib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJvdXRwdXRcIiwgXCJwXCIsIFwicGFyYW1cIiwgXCJwcmVcIiwgXCJwcm9ncmVzc1wiLCBcInFcIiwgXCJycFwiLCBcInJ0XCIsXG5cdFwicnVieVwiLCBcInNcIiwgXCJzYW1wXCIsIFwic2NyaXB0XCIsIFwic2VjdGlvblwiLCBcInNlbGVjdFwiLCBcInNtYWxsXCIsIFwic291cmNlXCIsIFwic3BhblwiLCBcInN0cmlrZVwiLCBcInN0cm9uZ1wiLFxuXHRcInN0eWxlXCIsIFwic3ViXCIsIFwic3VwXCIsIFwidGFibGVcIiwgXCJ0Ym9keVwiLCBcInRkXCIsIFwidGV4dGFyZWFcIiwgXCJ0Zm9vdFwiLCBcInRoXCIsIFwidGhlYWRcIiwgXCJ0aW1lXCIsIFwidGl0bGVcIixcblx0XCJ0clwiLCBcInRyYWNrXCIsIFwidHRcIiwgXCJ1XCIsIFwidWxcIiwgXCJ2YXJcIiwgXCJ2aWRlb1wiLCBcIndiclwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQobmFtZSlcbntcblx0cmV0dXJuICFIVE1MVGFncy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKVxue1xuXHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRtYXBbbGlzdFtpXV0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgP1xuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfSA6XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cblxuXG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdFx0aWYgKHJlbmRlcikge1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0XHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnRleHQgPSB7fTtcblx0XHR9XG5cblx0XHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdFx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCRwcm9wcyxcblx0XHRcdCRzbG90cyxcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIF9tYWtlQXR0cnMkKCkge1xuXG5cdH1cblxuXHRmdW5jdGlvbiBfc2xvdCQoJHNsb3RzLCBuYW1lLCBub2RlLCBjYWxsYmFjaykge1xuXHRcdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSAkc2xvdHNbbmFtZV07XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9lYWNoJChub2RlLCBpdGVtcywgZm4pIHtcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gZm4obm9kZSwgaXRlbXNbaV0sIGkpO1xuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKGJvZHkpO1xuXG5cdFx0cmV0dXJuIGJvZHk7XG5cdH1cblxuXHRmdW5jdGlvbiBfc3RhdGVtZW50JChub2RlLCAuLi5hcmdzKSB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBmYWxzZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0aWYgKGFyZ3NbaV0pIHtcblx0XHRcdFx0cmV0dXJuTm9kZSA9IGFyZ3NbaSArIDFdKG5vZGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocmV0dXJuTm9kZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cblx0XHRyZXR1cm4gcmV0dXJuTm9kZTtcblx0fVxuXG5cdGxldCB7IHJlbmRlciwgdGVtcGxhdGVzIH0gPSBnZXR0KCk7XG5cblx0Y29uc29sZS5sb2cocmVuZGVyKTtcblx0Y29uc29sZS5sb2codGVtcGxhdGVzKTtcblx0cmV0dXJuO1xuXG5cdC8qKlxuXHQgKiBHRU5FUkFURUQgQ09ERVxuXHQgKi9cblx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQxLmlubmVySFRNTCA9IFwiPGRpdj48IS0tLS0+PC9kaXY+XCI7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9IFwiPGRpdj4xPC9kaXY+PGRpdiBjbGFzcz1cXFwiYnV0dG9uXFxcIj48c3Bhbj5EZWZhdWx0IDxiIGNsYXNzPVxcXCJkXFxcIj5idXR0b248L2I+IHRleHQ8L3NwYW4+PC9kaXY+XCI7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIEdFTkVSQVRFRCBDT0RFXG5cdFx0ICovXG5cdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRsZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxMyA9IF9lYWNoJChfZWwkMywgWzFdLCAoaXRlbSwga2V5KSA9PiB7XG5cdFx0XHRsZXQgX2VsJDQgPSBnZXROb2RlKF90cGwkMiwgbnVsbCwgdHJ1ZSk7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdGxldCBfZWwkNyA9IF9lbCQ1Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRfbWFrZUF0dHJzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwiY2xhc3NcIjogXCJidXR0b25cIlxuXHRcdFx0fSk7XG5cblx0XHRcdGxldCBfZWwkOCA9IF9lbCQ3LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdF9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkOCwgbm9kZSA9PiB7XG5cdFx0XHRcdGxldCBfZWwkOSA9IF9lbCQ4LmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTAgPSBfZWwkOS5uZXh0U2libGluZztcblxuXHRcdFx0XHRfbWFrZUF0dHJzJChfZWwkMTAsIHJlbmRlciwge1xuXHRcdFx0XHRcdFwiY2xhc3NcIjogXCJkXCJcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IF9lbCQxMSA9IF9lbCQxMC5maXJzdENoaWxkO1xuXHRcdFx0XHRsZXQgX2VsJDEyID0gX2VsJDEwLm5leHRTaWJsaW5nO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ3O1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQxIDogX2VsJDI7XG5cdH1cblxuXHRsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cblx0dGltZSgncmVuZGVyJyk7XG5cdGxldCBkID0gbWFrZUNvbXBvbmVudCgpO1xuXG5cdGxheW91dC5hcHBlbmRDaGlsZChkKTtcblxuXHRjb25zb2xlLmxvZyhsYXlvdXQuaW5uZXJIVE1MKTtcblx0dGltZSgncmVuZGVyJyk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0MlxuXHRcdEBlYWNoKDEpXG5cdFx0YXNkYXNkXG5cdFx0PHNsb3Q+ZGVmYXVsdCB0ZXh0IGZvciBzbG90PGIgY2xhc3M9XCJkXCI+MTwvYj48L3Nsb3Q+XG5cdFx0QGVuZGVhY2hcblx0XHQzXG5cdFx0QGVsc2UgXG5cdFx0YXNkXG5cdEBlbmRpZlxuXHRlbmRcblx0YDtcblxuXHRodG1sID0gYFxuXHQ8ZGl2IGNsYXNzPVwiMlwiIDpzdHlsZT1cIjFcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH0sIHRpbWVdXCIgOnByb3AxPVwiMTIzXCI+XG5cdEBlYWNoKDEpXG5cdDxkaXY+MTwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+XG5cdFx0PHNsb3Q+RGVmYXVsdCA8YiBjbGFzcz1cImRcIj5idXR0b248L2I+IHRleHQ8L3Nsb3Q+XG5cdDwvZGl2PlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgdGltZSA9IDEyMzU7XG5cblx0bGV0IGMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIHRpbWUgKyB0ZXh0MTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1ldGhvZDEoKSB7XG5cdFx0bGV0IGQgPSB0ZXh0MigpO1xuXG5cdFx0bGV0IHRleHQxID0gJ3NvbWUnO1xuXG5cdFx0dGV4dDE7XG5cdH1cblx0PC9zY3JpcHQ+XG5cdGBcblx0bGV0IGJsb2NrcyA9IHBhcnNlKGh0bWwpO1xuXG5cdHJldHVybiBjb21waWxlKGJsb2Nrcyk7XG5cdC8vIGNvbnNvbGUubG9nKGh0bWwpO1xufVxuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==