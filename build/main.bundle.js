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
  var isVariableDeclaration = false;

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
        isVariableDeclaration = true;
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
      },
      exit: function exit() {
        isVariableDeclaration = false;
      }
    },
    ArrowFunctionExpression: {
      enter: function enter(path) {
        if (isVariableDeclaration) return;
        createContext(path.container.id.name);
      },
      exit: function exit(path) {
        if (isVariableDeclaration) return;
        closeContext();
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        if (isVariableDeclaration) return;
        data.methods.push(path.node.id.name);
        createContext(path.node.id.name);
      },
      exit: function exit(path) {
        if (isVariableDeclaration) return;
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
  var isVariableDeclaration = false;

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
        isVariableDeclaration = true;
        var id = path.node.id;
        var value = path.node.init;
        var context = getContext();

        if (isSubContext() || value === null) {
          context.vars.push(id.name);
          return;
        }
      },
      exit: function exit() {
        isVariableDeclaration = false;
      }
    },
    ArrowFunctionExpression: {
      enter: function enter(path) {
        if (isVariableDeclaration) return;
        createContext(path.container.id.name);
      },
      exit: function exit(path) {
        if (isVariableDeclaration) return;
        closeContext();
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        if (isVariableDeclaration) return;
        createContext(path.node.id.name);
      },
      exit: function exit(path) {
        if (isVariableDeclaration) return;
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

/***/ "./packages/compiler/dist/dynamic/arrowFunction.js":
/*!*********************************************************!*\
  !*** ./packages/compiler/dist/dynamic/arrowFunction.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrowFunction = arrowFunction;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function arrowFunction(_ref, point, context, options) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      _ref$args = _ref.args,
      args = _ref$args === void 0 ? [] : _ref$args;
  var result = (0, _value.makeValue)(this.context, value, _value.makeString); // console.log(result)

  return new _types.arrowFunctionExpression(args.map(function (item) {
    return (0, _types.identifier)(item);
  }), new _types.blockStatement([new _types.returnStatement(result.content)]));
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
    var value = (0, _value.makeValue)(this.context, entity.option.attributes[name], _value.makeComputed);
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

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function events(entity, point, context, options) {
  if (entity.option === undefined) {
    return;
  }

  var props = [];

  for (var name in entity.option.events) {
    var value = (0, _value.makeValue)(this.context, entity.option.events[name], _value.makeFunction);
    props.push(new _types.objectProperty((0, _types.stringLiteral)(name), value));
  }

  if (props.length === 0) {
    return;
  }

  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_makeEvents$'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
  context.push(expression);
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/expression.js":
/*!******************************************************!*\
  !*** ./packages/compiler/dist/dynamic/expression.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.expression = expression;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function expression(value, point, context, options) {
  if (typeof value !== 'object') {
    value = {
      isExpression: true,
      value: value
    };
  }

  var result = (0, _value.makeValue)(this.context, value, _value.makeComputed); // console.warn(result);

  return result;
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

var _props = __webpack_require__(/*! ./props */ "./packages/compiler/dist/dynamic/props.js");

var _string = __webpack_require__(/*! ./string */ "./packages/compiler/dist/dynamic/string.js");

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/dist/dynamic/expression.js");

var _arrowFunction = __webpack_require__(/*! ./arrowFunction */ "./packages/compiler/dist/dynamic/arrowFunction.js");

var _setAttr = __webpack_require__(/*! ./setAttr */ "./packages/compiler/dist/dynamic/setAttr.js"); // export { attrs, events, props }


function dynamic(context) {
  return {
    attrs: _attrs.attrs.bind(context),
    events: _events.events.bind(context),
    props: _props.props.bind(context),
    string: _string.string.bind(context),
    expression: _expression.expression.bind(context),
    arrowFunction: _arrowFunction.arrowFunction.bind(context),
    setAttr: _setAttr.setAttr.bind(context)
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

/***/ "./packages/compiler/dist/dynamic/setAttr.js":
/*!***************************************************!*\
  !*** ./packages/compiler/dist/dynamic/setAttr.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAttr = setAttr;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function setAttr(_ref, point, context, options) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? 'key' : _ref$name,
      Type = _ref.Type;

  if (Type.option[name] === undefined) {
    return;
  }

  var value = Type.option[name];
  var result = (0, _value.makeValue)(this.context, value, _value.makeSubscribe);
  var expression = new _types.expressionStatement(new _types.callExpression(new _types.memberExpression(point, (0, _types.identifier)('setAttribute')), [(0, _types.stringLiteral)("data-" + name), result.expr]));

  if (result.shouldWrap) {
    expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('subscribe'), [result.deps, new _types.arrowFunctionExpression([], new _types.blockStatement([expression]))]));
  }

  context.push(expression); // console.log(expression);
  // return result
}

/***/ }),

/***/ "./packages/compiler/dist/dynamic/string.js":
/*!**************************************************!*\
  !*** ./packages/compiler/dist/dynamic/string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.string = string;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function string(entity, point, context, options) {
  if (entity.value === undefined) {
    return;
  }

  var isExpression = entity.value.match(/\$\{.*\}/g) !== null;

  if (!isExpression) {
    return;
  }

  var _makeValue = (0, _value.makeValue)(this.context, {
    isExpression: isExpression,
    value: "`" + entity.value + "`"
  }, _value.makeString),
      deps = _makeValue.deps,
      content = _makeValue.content;

  deps = new _types.arrayExpression(deps.map(function (item) {
    return (0, _types.identifier)(item);
  }));
  var body = new _types.arrowFunctionExpression([], new _types.blockStatement([new _types.expressionStatement(new _types.assignmentExpression('=', new _types.memberExpression(point, (0, _types.identifier)('nodeValue')), content))]));
  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('subscribe'), [deps, body]));
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
exports.makeFunction = makeFunction;
exports.makeString = makeString;
exports.makeComputed = makeComputed;
exports.makeSubscribe = makeSubscribe;

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

var TMP_IDENTIFIER = '_tmp$ast';

function makeValue(context, value, fn) {
  if (!value.isExpression) {
    return (0, _types.stringLiteral)(value.value);
  }

  var code = TMP_IDENTIFIER + " = " + value.value;
  var ast = parser.parse(code, {
    sourceType: "unambiguous",
    strictMode: false
  });
  return fn(ast, context);
}
/**
 * Compile expression to DOM expression and make in function
 */


function makeFunction(ast, context) {
  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (context.methods.includes(id.name)) {
          if (path.parent.type !== 'CallExpression') {
            id.name = id.name + "()";
          }
        }
      }
    }
  });
  var result = ast.program.body[0];
  result = result.expression.right;
  return new _types.functionExpression(null, [(0, _types.identifier)('event')], new _types.blockStatement([new _types.returnStatement(result)]));
}
/**
 * Compile string to DOM expression
 */


function makeString(ast, context) {
  var deps = [];
  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

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
  return {
    content: result,
    deps: deps
  };
}
/**
 * Compile expression to DOM expression and make it computed
 */


function makeComputed(ast, context) {
  var deps = [];
  var statefulCounter = 0;
  var identifiersCounter = 0;
  var shouldWrap = true;
  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (['label', 'key'].includes(path.key) || path.node.name === TMP_IDENTIFIER) {
          return;
        }

        identifiersCounter++;

        if (context.observables.includes(id.name)) {
          statefulCounter++;
        }
      }
    }
  });

  if (identifiersCounter <= 1 || statefulCounter == 0) {
    shouldWrap = false;
  } // console.log(identifiersCounter, statefulCounter, shouldWrap)


  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (['label', 'key'].includes(path.key)) {
          return;
        }

        if (context.observables.includes(id.name)) {
          deps.push(id.name);

          if (shouldWrap) {
            id.name = id.name + "()";
          }
        }
      },
      exit: function exit(path) {}
    }
  });
  var result = ast.program.body[0];
  result = result.expression.right;

  if (deps.length === 0 || shouldWrap === false) {
    return result;
  }

  deps = new _types.arrayExpression(deps.map(function (item) {
    return (0, _types.identifier)(item);
  }));
  var body = new _types.arrowFunctionExpression([], new _types.blockStatement([new _types.returnStatement(result)]));
  return new _types.callExpression((0, _types.identifier)('computed'), [deps, body]);
}
/**
 * Compile expression to DOM expression and make it computed
 */


function makeSubscribe(ast, context) {
  var deps = [];
  var statefulCounter = 0;
  var identifiersCounter = 0;
  var shouldWrap = true;
  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (['label', 'key'].includes(path.key) || path.node.name === TMP_IDENTIFIER) {
          return;
        }

        identifiersCounter++;

        if (context.observables.includes(id.name)) {
          statefulCounter++;
        }
      }
    }
  });

  if (identifiersCounter <= 1 || statefulCounter == 0) {
    shouldWrap = false;
  } // console.log(identifiersCounter, statefulCounter, shouldWrap)


  (0, _traverse.default)(ast, {
    Identifier: {
      enter: function enter(path) {
        var id = path.node;

        if (['label', 'key'].includes(path.key)) {
          return;
        }

        if (context.observables.includes(id.name)) {
          deps.push(id.name);

          if (shouldWrap) {
            id.name = id.name + "()";
          }
        }
      },
      exit: function exit(path) {}
    }
  });
  var result = ast.program.body[0];
  result = result.expression.right; // if(deps.length === 0 || shouldWrap === false) {
  // 	return result;
  // }

  deps = new _types.arrayExpression(deps.map(function (item) {
    return (0, _types.identifier)(item);
  }));
  return {
    shouldWrap: shouldWrap,
    deps: deps,
    expr: result
  };
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
exports.rules = void 0;

var _compile = __webpack_require__(/*! ./compile */ "./packages/compiler/dist/compile.js");

var rules = _interopRequireWildcard(__webpack_require__(/*! ./rules */ "./packages/compiler/dist/rules/index.js"));

exports.rules = rules;

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
exports.parseEachCondition = parseEachCondition;
exports.findKey = findKey;
exports.default = each;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

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

function _wrapRegExp(re, groups) {
  _wrapRegExp = function _wrapRegExp(re, groups) {
    return new BabelRegExp(re, undefined, groups);
  };

  var _RegExp = _wrapNativeSuper(RegExp);

  var _super = RegExp.prototype;

  var _groups = new WeakMap();

  function BabelRegExp(re, flags, groups) {
    var _this = _RegExp.call(this, re, flags);

    _groups.set(_this, groups || _groups.get(re));

    return _this;
  }

  _inherits(BabelRegExp, _RegExp);

  BabelRegExp.prototype.exec = function (str) {
    var result = _super.exec.call(this, str);

    if (result) result.groups = buildGroups(result, this);
    return result;
  };

  BabelRegExp.prototype[Symbol.replace] = function (str, substitution) {
    if (typeof substitution === "string") {
      var groups = _groups.get(this);

      return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) {
        return "$" + groups[name];
      }));
    } else if (typeof substitution === "function") {
      var _this = this;

      return _super[Symbol.replace].call(this, str, function () {
        var args = [];
        args.push.apply(args, arguments);

        if (typeof args[args.length - 1] !== "object") {
          args.push(buildGroups(args, _this));
        }

        return substitution.apply(this, args);
      });
    } else {
      return _super[Symbol.replace].call(this, str, substitution);
    }
  };

  function buildGroups(result, re) {
    var g = _groups.get(re);

    return Object.keys(g).reduce(function (groups, name) {
      groups[name] = result[g[name]];
      return groups;
    }, Object.create(null));
  }

  return _wrapRegExp.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function parseEachCondition(entity) {
  var statement = entity.value.matchAll( /*#__PURE__*/_wrapRegExp(/\(([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?)?\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?in[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.*)/g, {
    item: 1,
    key: 3,
    condition: 4
  }));
  var condition = null;
  var args = [];

  for (var _iterator = _createForOfIteratorHelperLoose(statement), _step; !(_step = _iterator()).done;) {
    var match = _step.value;

    if (match.groups.item) {
      args.push(match.groups.item);
    } else {
      args.push('_item');
    }

    if (match.groups.key) {
      args.push(match.groups.key);
    } else {
      args.push('_index');
    }

    condition = match.groups.condition;
  }

  return {
    key: findKey(entity),
    condition: condition,
    args: args
  };
}

function findKey(entity) {
  var key = null;

  for (var _iterator2 = _createForOfIteratorHelperLoose(entity.children), _step2; !(_step2 = _iterator2()).done;) {
    var child = _step2.value;

    if (child.option.key !== undefined) {
      key = child.option.key;
      break;
    }
  }

  if (key === null) {
    throw new Error('Key is required for Each loop (for hydration)');
  }

  return key;
}

function each(context, options) {
  var _this2 = this;

  var params = [];
  var body = [];
  params.push(options.getLastVariableId());
  /**
   * Loop preparation
   * 1. Key generation function
   * 2. Condition expression
   * 3. Item and key idintifiers
   * @type {[type]}
   */

  var loop = parseEachCondition(this);
  var value = options.dynamic.expression(loop.condition, options.getLastVariableId(), context, options);
  var key = options.dynamic.arrowFunction({
    value: loop.key,
    args: loop.args
  }, options.getLastVariableId(), context, options);
  params.push(value);
  params.push(key);
  /**
   * Get loop template
   */

  var template = options.createVariable(body, function (n, l) {
    var index = options.createTemplate(_this2);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, (0, _types.identifier)('node'), (0, _types.identifier)('render')]);
  });
  body.push(template.value);
  var lastChild = (0, _utils.children)(this, body, options, _utils.getFirstTemplateNode);
  var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild));
  body.push(returnPointer);
  params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node'), (0, _types.identifier)('render'), (0, _types.identifier)('_keyExpr$')].concat(loop.args.map(function (item) {
    return (0, _types.identifier)(item);
  })), new _types.blockStatement(body)));
  params.push((0, _types.identifier)('render'));
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
  options.dynamic.setAttr({
    Type: this,
    name: 'key'
  }, options.getLastVariableId(), context, options);
  options.dynamic.attrs(this, options.getLastVariableId(), context, options);
  options.dynamic.events(this, options.getLastVariableId(), context, options);
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

function text(context, options) {
  options.dynamic.string(this, options.getLastVariableId(), context, options); // let template = false;
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
}

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

  if (entity.isTemplate()) {
    customDefiner = function customDefiner() {};
  } // console.log(entity, entity.hasAloneTemplate());


  if (!entity.hasAloneTemplate() && !entity.isTemplate()) {
    options.createContext();
  }

  for (var i = 0; i < entity.children.length; i++) {
    childHandle(entity.children[i], context, options, i, customDefiner);
  }

  var lastChild = options.getLastVariableId();

  if (!entity.hasAloneTemplate() && !entity.isTemplate()) {
    options.removeContext();
  }

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

/***/ "./packages/map/dist/diff.js":
/*!***********************************!*\
  !*** ./packages/map/dist/diff.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.diff = diff;

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
  } // console.warn(aIdx, bIdx);


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
      // Look for the current element at this location in the new list
      // This gives us the idx of where this element should be
      var curElmInNew = bIdx.get(aElm); // Look for the the wanted elment at this location in the old list
      // This gives us the idx of where the wanted element is now

      var wantedElmInOld = aIdx.get(bElm);

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

/***/ "./packages/map/dist/index.js":
/*!************************************!*\
  !*** ./packages/map/dist/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _diff = __webpack_require__(/*! ./diff.js */ "./packages/map/dist/diff.js");

var _utils = __webpack_require__(/*! ./utils.js */ "./packages/map/dist/utils.js");

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

  var parent = document.createDocumentFragment();
  var endMark = (0, _utils.add)(parent, '');
  var disposers = new Map();
  var nodes = new Map();
  var toRemove = new Set();
  var defaultA = []; // console.log(render);

  if (!render) {
    var _items = (0, _observable.value)(items);

    var node = bindNode;

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          node = expr(node, false, keyExpr, item, itemKey);
          node = node.nextSibling;
        }
      }

      defaultA[itemKey] = item;
      addNode(item, itemKey, 1, node);
    }
  }

  var rendered = false;
  var unsubscribe = (0, _observable.subscribe)(items, function (a) {
    var b = (0, _observable.value)(items);
    console.warn(b); // return computed(() => {

    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark)); // console.log(bindNode, parent.childNodes)

    if (!rendered) {
      rendered = true;
      bindNode.replaceWith(parent);
    } // console.log(parent.childNodes.length, content)
    // for (var i = 0; i < context._children.length; i++) {
    // 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
    // }
    // console.log(toRemove);
    // toRemove.forEach(dispose);


    return content; // });
  }, !render);

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
        n = el ? el : expr(bindNode, render, keyExpr, item, key);
        if (n.nodeType === 11) n = (0, _utils.persistent)(n) || n;
        nodes.set(nodeKey, n);
      }
    } else if (i === -1) {
      toRemove.add(nodeKey);
    }

    return (0, _utils.diffable)(n, i);
  } // function disposeAll() {
  // 	disposers.forEach(d => d());
  // 	disposers.clear();
  // 	nodes.clear();
  // 	toRemove.clear();
  // }
  // function dispose(item) {
  // 	let disposer = disposers.get(item);
  // 	if (disposer) {
  // 		disposer();
  // 		disposers.delete(item);
  // 	}
  // 	nodes.delete(item);
  // }


  return parent;
}

/***/ }),

/***/ "./packages/map/dist/utils.js":
/*!************************************!*\
  !*** ./packages/map/dist/utils.js ***!
  \************************************/
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

    ob._observers.add(update);
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

  obs = [].concat(obs);

  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(value);
    }

    if (ob._deps) {
      for (var _iterator3 = _createForOfIteratorHelperLoose(ob._deps), _step3; !(_step3 = _iterator3()).done;) {
        var dep = _step3.value;
        dep.add(value);
      }
    }
  }

  if (!skip) {
    value();
  }
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

var isRootAttr = (0, _utils.makeMap)('key,ref');

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
  var result = {
    events: {},
    props: {},
    attributes: {},
    staticAttrs: {}
  };

  for (var name in obj) {
    var value = obj[name];

    if (isDomAttr(name)) {
      result.staticAttrs[name] = value;
    } else if (name.match(/^@/g)) {
      name = name.replace(/^@/g, '');
      result.events[name] = makeValue(value, true);
    } else if (name.match(/^\:/g)) {
      name = name.replace(/^\:/g, '');
      value = makeValue(value, true);

      if (isRootAttr(name)) {
        result[name] = value;
      } else if (isDomAttr(name)) {
        result.attributes[name] = value;
      } else {
        result.props[name] = value;
      }
    } else {
      result.props[name] = makeValue(value); // console.error(`Attr ${name} doesnt registered. Cant understand type.`)
    }
  }

  return result;
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
    _this.option = (0, _attrs.attrs)(attrs);
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

  _proto.isTemplate = function isTemplate() {
    return this.type === 'node' && this.tag === 'template';
  };

  _proto.hasAloneTemplate = function hasAloneTemplate() {
    var alone = true;

    for (var _iterator = _createForOfIteratorHelperLoose(this.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;

      if (!child.isTemplate()) {
        alone = false;
      }
    }

    return alone;
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

    if (!this.tag || this.isTemplate()) {
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
var HTMLTags = ["!doctype", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bb", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "datagrid", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "eventsource", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1> to <h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "template"];

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

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

var _map = __webpack_require__(/*! @hawa/map */ "./packages/map/dist/index.js");

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

  function _makeEvents$(node, render, options) {
    for (var key in options) {
      node.addEventListener(key, options[key]);
    }
  }

  function _slot$($slots, name, node, callback) {
    if ($slots[name] === undefined) {
      callback(node);
      return;
    }

    node.innerHTML = $slots[name];
    return node;
  } // function valueSubscribe(render, prop, fn)
  // {
  // 	if(!isObservable(prop)) {
  // 		if(hydrate) {
  // 			fn(prop);
  // 		}
  // 		return;
  // 	}
  // 	subscribe(prop, () => {
  // 		fn(prop());
  // 	}, !render);
  // }


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
  } // let { render, templates } = gett();
  // console.log(render);
  // console.log(templates);
  // return;

  /**
   * GENERATED CODE
   */


  var _tpl$1 = document.createElement("template");

  _tpl$1.innerHTML = '<div class="2"><!----></div>';

  var _tpl$2 = document.createElement("template");

  _tpl$2.innerHTML = '<div>Some test text ${ text1 } after</div><div class="button"><span>Default<b class="d">button</b>text</span></div>';

  function makeComponent(context, node) {
    if (node === void 0) {
      node = false;
    }

    var render = node === false;

    var _parseContext = parseContext(context),
        $props = _parseContext.$props,
        $slots = _parseContext.$slots;
    /**
     * Script tag
     */


    var text1 = (0, _observable.observable)(1);
    var text2 = (0, _observable.observable)(1);
    var text3 = (0, _observable.observable)(1);
    var items = (0, _observable.observable)(Array.from({
      length: 3
    }, function (_, i) {
      return i;
    }));
    var time = 1235;
    var c = (0, _observable.computed)(text1, function () {
      return time + text1;
    });

    function method1() {
      console.log('test');
    }

    time = setTimeout(function () {
      items(Array.from({
        length: 1
      }, function (_, i) {
        return i;
      }));
    }, 1000);
    /**
     * GENERATED CODE
     */

    var _el$1 = getNode(_tpl$1, node, render);

    var _el$2 = render ? _el$1.firstChild : _el$1;

    _makeAttrs$(_el$2, render, {
      "style": 1,
      "data-1": {
        test: text1
      },
      "data-2": text1,
      "class": (0, _observable.computed)([text1, text2], function () {
        return [text1(), {
          some: text2() === 2
        }, time];
      })
    });

    var _el$3 = _el$2.firstChild;

    var _el$13 = (0, _map.map)(_el$3, items, function (item1, key1) {
      return 'text-' + item1 + text1();
    }, function (node, render, keyExpr, item1, key1) {
      var _el$4 = getNode(_tpl$2, node, render);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      (0, _observable.subscribe)([text1], function () {
        _el$5.setAttribute("data-key", 'text-' + item1 + text1());
      }, !render);

      _makeEvents$(_el$5, render, {
        "click": function click(event) {
          return method1();
        },
        "mousedown": function mousedown(event) {
          return method1(event);
        }
      });

      var _el$6 = _el$5.firstChild;
      (0, _observable.subscribe)([text1], function () {
        _el$6.nodeValue = "Some test text " + text1() + " after";
      });
      var _el$7 = _el$5.nextSibling;

      _makeEvents$(_el$7, render, {
        "mousedown": function mousedown(event) {
          return alert(2);
        }
      });

      var _el$8 = _el$7.firstChild;

      _slot$($slots, "default", _el$8, function (node) {
        var _el$9 = _el$8.firstChild;
        var _el$10 = _el$9.nextSibling;
        var _el$11 = _el$10.firstChild;
        var _el$12 = _el$10.nextSibling;
      });

      return render ? _el$4 : _el$7;
    }, render);

    console.log(_el$13.childNodes);
    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  (0, _time.default)('render');
  layout.appendChild(makeComponent());
  (0, _time.default)('render');
  return;
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  (0, _time.default)('hydrate');
  makeComponent(null, layout.firstChild);
  (0, _time.default)('hydrate'); // console.log(layout.innerHTML);
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot<b class=\"d\">1</b></slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t@each((item1, key1) in items)\n\t<template :key=\"'text-' + item1 + text1\">\n\t\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\t\tSome test text ${ text1 } after\n\t\t</div>\n\t\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t\t</div>\n\t</template>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet items = Array.from({ length: 1 }, (_, i) => i);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsImRhdGEiLCJkZXBzIiwiY29udGV4dCIsIm9ic2VydmFibGVzIiwidmFycyIsIm1ldGhvZHMiLCJjb250ZXh0U3RhY2siLCJpc1ZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJpZCIsInBhdGgiLCJ2YWx1ZSIsImdldENvbnRleHQiLCJpc1N1YkNvbnRleHQiLCJleGl0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiY2xvc2VDb250ZXh0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIklkZW50aWZpZXIiLCJWYXJpYWJsZUNvdW50ZXIiLCJUZW1wbGF0ZXMiLCJjb2RlQW5hbHlzZSIsImJsb2NrcyIsImR5bmFtaWNFeHByZXNzaW9ucyIsInRlbXBsYXRlIiwicHJvZ3JhbSIsImNvZGUiLCJpIiwidHBsIiwiaW5kZXgiLCJpbml0IiwiTGFzdFZhcmlhYmxlSWQiLCJnZXRMYXN0VmFyaWFibGVJZCIsImdldEN1cnJlbnRDb250ZXh0IiwiQWN0aW9uIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0b3IiLCJzZXRMYXN0VmFyaWFibGVJZCIsImVudGl0eSIsImJvZHkiLCJvcHRpb25zIiwicmVtb3ZlQ29udGV4dCIsImNyZWF0ZVZhcmlhYmxlIiwiY3JlYXRlVGVtcGxhdGUiLCJkeW5hbWljIiwiaGFuZGxlIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwicmVuZGVyIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzIiwiYXJncyIsInJlc3VsdCIsIm1ha2VTdHJpbmciLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50IiwicHJvcHMiLCJtYWtlQ29tcHV0ZWQiLCJvYmplY3RQcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiY2FsbEV4cHJlc3Npb24iLCJvYmplY3RFeHByZXNzaW9uIiwibWFrZUZ1bmN0aW9uIiwiaXNFeHByZXNzaW9uIiwiYXR0cnMiLCJldmVudHMiLCJzdHJpbmciLCJhcnJvd0Z1bmN0aW9uIiwic2V0QXR0ciIsImNvbnNvbGUiLCJUeXBlIiwibWFrZVN1YnNjcmliZSIsIm1lbWJlckV4cHJlc3Npb24iLCJjb250ZW50IiwiYXJyYXlFeHByZXNzaW9uIiwiYXNzaWdubWVudEV4cHJlc3Npb24iLCJUTVBfSURFTlRJRklFUiIsImZuIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwic3RhdGVmdWxDb3VudGVyIiwiaWRlbnRpZmllcnNDb3VudGVyIiwic2hvdWxkV3JhcCIsImV4cHIiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJtYXRjaCIsImtleSIsImZpbmRLZXkiLCJjaGlsZCIsInBhcmFtcyIsImxvb3AiLCJwYXJzZUVhY2hDb25kaXRpb24iLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsIm5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImFkZE5vZGUiLCJyZW5kZXJlZCIsInVuc3Vic2NyaWJlIiwiQXJyYXkiLCJiaW5kTm9kZSIsImVsIiwibm9kZUtleSIsIm4iLCJjaGlsZE5vZGVzIiwiX3N0YXJ0TWFyayIsImFkZCIsImNhc3ROb2RlIiwiZnJhZ09yTm9kZSIsImZyYWciLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwiZGVwIiwiaXNBdHRyIiwiaXNEb21BdHRyIiwiaXNSb290QXR0ciIsImF0dHJpYnV0ZXMiLCJzdGF0aWNBdHRycyIsIm9iaiIsIm1ha2VWYWx1ZSIsInJlZ2V4cCIsIm1hdGNoZXMiLCJwYXJzZUJsb2NrcyIsInNjcmlwdCIsInN0eWxlIiwiaHRtbCIsInN0YWNrIiwiRXhwcmVzc2lvbiIsInR5cGUiLCJwYXJzZSIsIkhUTUxQYXJzZXIiLCJvbm9wZW50YWciLCJjdXJyZW50U3RhY2tOb2RlIiwiU2xvdCIsIkNvbXBvbmVudCIsIk5vZGUiLCJvbnRleHQiLCJ0ZXh0IiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJ0YWciLCJtYWtlVGVtcGxhdGUiLCJtYXAiLCJhZGRDaGlsZCIsInJ1bGVzIiwiaXNUZW1wbGF0ZSIsImhhc0Fsb25lVGVtcGxhdGUiLCJhbG9uZSIsInNraXBJbml0Iiwib25seUNoaWxkcmVuIiwiY2hpbGRUZW1wbGF0ZSIsIkhUTUxUYWdzIiwibGlzdCIsInN0ciIsImV4cGVjdHNMb3dlckNhc2UiLCJ2YWwiLCJ0ZXN0IiwiZ2V0Tm9kZSIsImNsb25lTm9kZSIsInBhcnNlQ29udGV4dCIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIiRzbG90cyIsIl9tYWtlQXR0cnMkIiwiX21ha2VFdmVudHMkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zbG90JCIsImNhbGxiYWNrIiwiaW5uZXJIVE1MIiwiX3N0YXRlbWVudCQiLCJyZXR1cm5Ob2RlIiwicmVwbGFjZVdpdGgiLCJfdHBsJDEiLCJjcmVhdGVFbGVtZW50IiwiX3RwbCQyIiwibWFrZUNvbXBvbmVudCIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsIml0ZW1zIiwiZnJvbSIsIl8iLCJ0aW1lIiwiYyIsIm1ldGhvZDEiLCJsb2ciLCJzZXRUaW1lb3V0IiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJzb21lIiwiX2VsJDMiLCJfZWwkMTMiLCJpdGVtMSIsImtleTEiLCJfZWwkNCIsIl9lbCQ1Iiwic2V0QXR0cmlidXRlIiwiZXZlbnQiLCJfZWwkNiIsIm5vZGVWYWx1ZSIsIl9lbCQ3IiwibmV4dFNpYmxpbmciLCJhbGVydCIsIl9lbCQ4IiwiX2VsJDkiLCJfZWwkMTAiLCJfZWwkMTEiLCJfZWwkMTIiLCJsYXlvdXQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwidG1wIiwiZ2V0dCIsInRpbWVzIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7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b0I1TyxJQUFwQixTQUE4QjBRLEdBQUcsR0FBR0QsS0FBSyxDQUFDelEsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU95USxLQUFLLENBQUN6USxJQUFELENBQVo7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgY29udGV4dCwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXNlKHNvdXJjZSlcbntcblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKHNvdXJjZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0bGV0IGRhdGEgPSBjb250ZXh0KGFzdCk7XG5cdGxldCBkZXBzID0gZGVwZW5kZW5jaWVzKGFzdCwgZGF0YS5vYnNlcnZhYmxlcyk7XG5cblx0cmV0dXJuIHtcblx0XHRjb250ZXh0OiBkYXRhLFxuXHRcdGRlcHM6IGRlcHMsXG5cdH07XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCwgcGFyc2UgfSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KGFzdClcbntcblx0bGV0IGRhdGEgPSB7XG5cdFx0b2JzZXJ2YWJsZXM6IFtdLFxuXHRcdHZhcnM6IFtdLFxuXHRcdG1ldGhvZHM6IFtdLFxuXHR9XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHZhbHVlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgdmFsdWUuY2FsbGVlLm5hbWUgPT09ICckbycpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSBpZihbJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uJywgJ0Z1bmN0aW9uRXhwcmVzc2lvbiddLmluY2x1ZGVzKHZhbHVlLnR5cGUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0ZGF0YS5tZXRob2RzLnB1c2gocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkYXRhO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbmNpZXMoYXN0LCBvYnNlcnZhYmxlcyA9IFtdKVxue1xuXHRsZXQgZGVwcyA9IHt9O1xuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblx0bGV0IGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0XHRkZXBzOiBbXSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlQ29udGV4dCgpXG5cdHtcblx0XHRsZXQgY29udGV4dCA9IGNvbnRleHRTdGFjay5wb3AoKTtcblx0XHRkZXBzW2NvbnRleHQubmFtZV0gPSBjb250ZXh0LmRlcHM7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cdFx0XHRcdGxldCBuYW1lID0gcGF0aC5ub2RlLm5hbWU7XG5cblx0XHRcdFx0aWYoIWlzU3ViQ29udGV4dCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIWNvbnRleHQudmFycy5pbmNsdWRlcyhuYW1lKSAmJiBvYnNlcnZhYmxlcy5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0XHRcdGNvbnRleHQuZGVwcy5wdXNoKG5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KCkge1xuXHRcdCAgICBcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkZXBzO1xufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICcuL2R5bmFtaWMnO1xuXG5pbXBvcnQge1xuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxuXHR2YXJpYWJsZURlY2xhcmF0b3IsXG5cdG1lbWJlckV4cHJlc3Npb24sXG5cblx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uLFxuXHRPYmplY3RFeHByZXNzaW9uLFxuXHRPYmplY3RQcm9wZXJ0eSxcblx0T2JqZWN0TWV0aG9kLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0QmxvY2tTdGF0ZW1lbnQsXG5cdExhYmVsZWRTdGF0ZW1lbnQsXG5cdFJldHVyblN0YXRlbWVudCxcblx0U3RyaW5nTGl0ZXJhbCxcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cHJvZ3JhbSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuLyoqXG4gKiBDb21waWxlIHRlbXBsYXRlIHRvIERPTSBleHByZXNzaW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShibG9ja3MpXG57XG5cdGxldCBWYXJpYWJsZUNvdW50ZXIgPSAwO1xuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIG1hbmFnZW1lbnRcblx0ICogQHR5cGUge1NldH1cblx0ICovXG5cdGxldCBUZW1wbGF0ZXMgPSBuZXcgU2V0KCk7XG5cblx0bGV0IGNvZGVBbmFseXNlID0gYW5hbHlzZShibG9ja3Muc2NyaXB0KTtcblx0bGV0IGR5bmFtaWNFeHByZXNzaW9ucyA9IGR5bmFtaWMoY29kZUFuYWx5c2UpO1xuXHQvLyBjb25zb2xlLndhcm4oY29kZUFuYWx5c2UpO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHByb2dyYW0pXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBwcm9ncmFtLm1ha2VUZW1wbGF0ZSh0cnVlKTtcblxuXHRcdFRlbXBsYXRlcy5hZGQodGVtcGxhdGUpO1xuXG5cdFx0cmV0dXJuIGlkKGBfdHBsJCR7IFRlbXBsYXRlcy5zaXplIH1gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRlbXBsYXRlcygpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdGZvcihsZXQgdHBsIG9mIFRlbXBsYXRlcykge1xuXHRcdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdFx0Y29kZSArPSBgbGV0IF90cGwkJHsgaW5kZXggfSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcXG5gO1xuXHRcdFx0Y29kZSArPSBgX3RwbCQkeyBpbmRleCB9LmlubmVySFRNTCA9ICckeyB0cGwgfSc7XFxuXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250ZXh0IG1hbmFnZW1lbnRcblx0ICogQHBhcmFtICB7W3R5cGVdfSBMYXN0VmFyaWFibGVJZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChpbml0ID0gZmFsc2UpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0TGFzdFZhcmlhYmxlSWQ6IGluaXQgPyBpZCgnbm9kZScpIDogZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ29udGV4dCgpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYXN0VmFyaWFibGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gZ2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldExhc3RWYXJpYWJsZUlkKHZhbHVlKVxuXHR7XG5cdFx0Z2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZCA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVmFyaWFibGUoY29udGV4dCA9IG51bGwsIEFjdGlvbiA9IChuLCBsKSA9PiBsKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRcdGxldCBkZWxjYXJhdGlvblZhbHVlID0gQWN0aW9uKG5hbWUsIGdldExhc3RWYXJpYWJsZUlkKCkpO1xuXG5cdFx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRcdG5ldyB2YXJpYWJsZURlY2xhcmF0b3IoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHRcdClcblx0XHRdKTtcblxuXHRcdHNldExhc3RWYXJpYWJsZUlkKG5hbWUpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBpbGUgdGVtcGxhdGVzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgZW50aXR5ID0gYmxvY2tzLnRlbXBsYXRlO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBvcHRpb25zID0ge1xuXHRcdGNyZWF0ZUNvbnRleHQsXG5cdFx0cmVtb3ZlQ29udGV4dCxcblx0XHRjcmVhdGVWYXJpYWJsZSxcblx0XHRnZXRMYXN0VmFyaWFibGVJZCxcblx0XHRjcmVhdGVUZW1wbGF0ZSxcblx0XHRkeW5hbWljOiBkeW5hbWljRXhwcmVzc2lvbnMsXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGUoZW50aXR5KVxuXHR7XG5cdFx0ZW50aXR5LmhhbmRsZShib2R5LCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUNvbnRleHQodHJ1ZSk7XG5cdFtlbnRpdHldLm1hcCgoaXRlbSkgPT4gaGFuZGxlKGl0ZW0pKTtcblxuXHQvKipcblx0ICogR2VuZXJhdGUgY29kZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGNvZGUgPSBnZW5lcmF0ZShwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCksIHtcblx0XHRyZXRhaW5MaW5lczogZmFsc2UsXG5cdFx0Y29tcGFjdDogZmFsc2UsXG5cdFx0bWluaWZpZWQ6IGZhbHNlLFxuXHRcdGNvbmNpc2U6IGZhbHNlLFxuXHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXI6IGNvZGUuY29kZSxcblx0XHR0ZW1wbGF0ZXM6IGdldFRlbXBsYXRlcygpLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93RnVuY3Rpb24oeyB2YWx1ZSA9IFtdLCBhcmdzID0gW10gfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN0cmluZyk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVzdWx0KVxuXHRyZXR1cm4gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdGFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdC5jb250ZW50KVxuXHRcdF0pLFxuXHQpXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUZ1bmN0aW9uIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uZXZlbnRzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5ldmVudHNbbmFtZV0sIG1ha2VGdW5jdGlvbik7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUV2ZW50cyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKHZhbHVlLCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VDb21wdXRlZCk7XG5cblx0Ly8gY29uc29sZS53YXJuKHJlc3VsdCk7XG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcbmltcG9ydCB7IGFycm93RnVuY3Rpb24gfSBmcm9tICcuL2Fycm93RnVuY3Rpb24nO1xuaW1wb3J0IHsgc2V0QXR0ciB9IGZyb20gJy4vc2V0QXR0cic7XG5cbi8vIGV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHByb3BzIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhjb250ZXh0KVxue1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJzOiBhdHRycy5iaW5kKGNvbnRleHQpLFxuXHRcdGV2ZW50czogZXZlbnRzLmJpbmQoY29udGV4dCksXG5cdFx0cHJvcHM6IHByb3BzLmJpbmQoY29udGV4dCksXG5cdFx0c3RyaW5nOiBzdHJpbmcuYmluZChjb250ZXh0KSxcblx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uLmJpbmQoY29udGV4dCksXG5cdFx0YXJyb3dGdW5jdGlvbjogYXJyb3dGdW5jdGlvbi5iaW5kKGNvbnRleHQpLFxuXHRcdHNldEF0dHI6IHNldEF0dHIuYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdWJzY3JpYmUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoeyBuYW1lID0gJ2tleScsIFR5cGUgfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKFR5cGUub3B0aW9uW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBUeXBlLm9wdGlvbltuYW1lXTtcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3Vic2NyaWJlKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3NldEF0dHJpYnV0ZScpXG5cdFx0XHQpLFxuXHRcdFx0W1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGBkYXRhLSR7bmFtZX1gKSxcblx0XHRcdFx0cmVzdWx0LmV4cHJcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0aWYocmVzdWx0LnNob3VsZFdyYXApIHtcblx0XHRleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHJlc3VsdC5kZXBzLFxuXHRcdFx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb25cblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKGV4cHJlc3Npb24pO1xuXHQvLyByZXR1cm4gcmVzdWx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpc0V4cHJlc3Npb24gPSBlbnRpdHkudmFsdWUubWF0Y2goL1xcJFxcey4qXFx9L2cpICE9PSBudWxsO1xuXG5cdGlmKCFpc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgeyBkZXBzLCBjb250ZW50IH0gPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB7XG5cdFx0aXNFeHByZXNzaW9uLFxuXHRcdHZhbHVlOiBgXFxgJHsgZW50aXR5LnZhbHVlIH1cXGBgLFxuXHR9LCBtYWtlU3RyaW5nKTtcblxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0XHRuZXcgYXNzaWdubWVudEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKHBvaW50LCBpZCgnbm9kZVZhbHVlJykpLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdF0pXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRbZGVwcywgYm9keV1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRibG9ja1N0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuY29uc3QgVE1QX0lERU5USUZJRVIgPSAnX3RtcCRhc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZhbHVlKGNvbnRleHQsIHZhbHVlLCBmbilcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYCR7VE1QX0lERU5USUZJRVJ9ID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59XG5cblxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdC8vIGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdC8vIFx0cmV0dXJuIHJlc3VsdDtcblx0Ly8gfVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3VsZFdyYXAsXG5cdFx0ZGVwcyxcblx0XHRleHByOiByZXN1bHQsXG5cdH1cblx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldENvbXBvbmVudCcpLCBbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRcdFx0bCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWFjaENvbmRpdGlvbihlbnRpdHkpXG57XG5cdGxldCBzdGF0ZW1lbnQgPSBlbnRpdHkudmFsdWUubWF0Y2hBbGwoL1xcKCg/PGl0ZW0+W0EtejAtOV0rKVxccz8oXFwsXFxzPyg/PGtleT5bQS16MC05XSspXFxzPyk/XFwpXFxzP2luXFxzKD88Y29uZGl0aW9uPi4qKS9nKTtcblxuXHRsZXQgY29uZGl0aW9uID0gbnVsbDtcblx0bGV0IGFyZ3MgPSBbXTtcblxuXHRmb3IobGV0IG1hdGNoIG9mIHN0YXRlbWVudCkge1xuXG5cdFx0aWYobWF0Y2guZ3JvdXBzLml0ZW0pIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMuaXRlbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2l0ZW0nKTtcblx0XHR9XG5cblx0XHRpZihtYXRjaC5ncm91cHMua2V5KSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLmtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2luZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uZGl0aW9uID0gbWF0Y2guZ3JvdXBzLmNvbmRpdGlvbjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0a2V5OiBmaW5kS2V5KGVudGl0eSksXG5cdFx0Y29uZGl0aW9uLFxuXHRcdGFyZ3MsXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRLZXkoZW50aXR5KVxue1xuXHRsZXQga2V5ID0gbnVsbDtcblx0Zm9yKGxldCBjaGlsZCBvZiBlbnRpdHkuY2hpbGRyZW4pXG5cdHtcblx0XHRpZihjaGlsZC5vcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGtleSA9IGNoaWxkLm9wdGlvbi5rZXk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihrZXkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBpcyByZXF1aXJlZCBmb3IgRWFjaCBsb29wIChmb3IgaHlkcmF0aW9uKScpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdC8qKlxuXHQgKiBMb29wIHByZXBhcmF0aW9uXG5cdCAqIDEuIEtleSBnZW5lcmF0aW9uIGZ1bmN0aW9uXG5cdCAqIDIuIENvbmRpdGlvbiBleHByZXNzaW9uXG5cdCAqIDMuIEl0ZW0gYW5kIGtleSBpZGludGlmaWVyc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGxvb3AgPSBwYXJzZUVhY2hDb25kaXRpb24odGhpcyk7XG5cblx0bGV0IHZhbHVlID0gb3B0aW9ucy5keW5hbWljLmV4cHJlc3Npb24obG9vcC5jb25kaXRpb24sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdGxldCBrZXkgPSBvcHRpb25zLmR5bmFtaWMuYXJyb3dGdW5jdGlvbih7XG5cdFx0dmFsdWU6IGxvb3Aua2V5LFxuXHRcdGFyZ3M6IGxvb3AuYXJnc1xuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKHZhbHVlKTtcblx0cGFyYW1zLnB1c2goa2V5KTtcblxuXHQvKipcblx0ICogR2V0IGxvb3AgdGVtcGxhdGVcblx0ICovXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdFx0WyBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyksIGlkKCdfa2V5RXhwciQnKSBdLmNvbmNhdChsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KSxcblx0XHQpXG5cdCk7XG5cblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS5tYWtlVmFsdWUpO1xuXHQvLyB9XHRcblx0XG5cdG9wdGlvbnMuZHluYW1pYy5zZXRBdHRyKHtcblx0XHRUeXBlOiB0aGlzLFxuXHRcdG5hbWU6ICdrZXknLFxuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJsb2NrID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRsZXQgYm9keSA9IFtdO1xuXG5cdFx0dGhpcy5jaGlsZHJlbltpXS5oYW5kbGUoYm9keSwge1xuXHRcdFx0bGFzdENvbnRleHRWYXJpYWJsZUlkOiBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRwYXJhbXMucHVzaChpZChibG9jay52YWx1ZSkpO1xuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHRcdCk7XG5cdH1cblxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zdGF0ZW1lbnQkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dChjb250ZXh0LCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwb2ludGVyID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24obCwgaWQoJ2ZpcnN0Q2hpbGQnKSksXG5cdFx0XHRsXG5cdFx0KVxuXHR9KTtcblxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCB0eXBlKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQodHlwZSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBjdXN0b21EZWZpbmVyID0gZmFsc2UpXG57XG5cdGlmKGVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRjdXN0b21EZWZpbmVyID0gKCkgPT4ge307XG5cdH1cblx0Ly8gY29uc29sZS5sb2coZW50aXR5LCBlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpKTtcblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXR5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRIYW5kbGUoZW50aXR5LmNoaWxkcmVuW2ldLCBjb250ZXh0LCBvcHRpb25zLCBpLCBjdXN0b21EZWZpbmVyKTtcblx0fVxuXG5cdGxldCBsYXN0Q2hpbGQgPSBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCk7XG5cblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLnJlbW92ZUNvbnRleHQoKTtcblx0fVxuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUud2FybihhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCIsIFwidGVtcGxhdGVcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpXG57XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSlcbntcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2xpc3RbaV1dID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBleHBlY3RzTG93ZXJDYXNlID9cblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH0gOlxuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cbiIsIi8vIGV2ZW50cyAtIEAgLT4gaWQoYXR0cnMgdmFsdWUpXG4vLyBleHByZXNzaW9uIDogaWQoYXR0cnMpXG4vLyBzdHJpbmdsaXR0ZXJhbCBcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL3V0aWxzJztcblxuXG52YXIgaXNBdHRyID0gbWFrZU1hcChcblx0J2FjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsdCxhc3luYyxhdXRvY29tcGxldGUsJyArXG5cdCdhdXRvZm9jdXMsYXV0b3BsYXksYXV0b3NhdmUsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2hhbGxlbmdlLGNoYXJzZXQsJyArXG5cdCdjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxodHRwLWVxdWl2LCcgK1xuXHQnbmFtZSxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGRhdGEsZGF0ZXRpbWUsZGVmYXVsdCwnICtcblx0J2RlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLG1ldGhvZCxmb3IsJyArXG5cdCdmb3JtLGZvcm1hY3Rpb24saGVhZGVycyxoZWlnaHQsaGlkZGVuLGhpZ2gsaHJlZixocmVmbGFuZyxodHRwLWVxdWl2LCcgK1xuXHQnaWNvbixpZCxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsaXN0LGxvb3AsbG93LCcgK1xuXHQnbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtZWRpYSxtZXRob2QsR0VULFBPU1QsbWluLG11bHRpcGxlLGVtYWlsLGZpbGUsJyArXG5cdCdtdXRlZCxuYW1lLG5vdmFsaWRhdGUsb3BlbixvcHRpbXVtLHBhdHRlcm4scGluZyxwbGFjZWhvbGRlcixwb3N0ZXIsJyArXG5cdCdwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LCcgK1xuXHQnc2NvcGUsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNoYXBlLHNpemUsdHlwZSx0ZXh0LHBhc3N3b3JkLHNpemVzLHNwYW4sJyArXG5cdCdzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LCcgK1xuXHQndGFyZ2V0LHRpdGxlLHR5cGUsdXNlbWFwLHZhbHVlLHdpZHRoLHdyYXAnXG4pO1xuXG52YXIgaXNEb21BdHRyID0gKG5hbWUpID0+IHtcblx0cmV0dXJuIGlzQXR0cihuYW1lKSB8fCBuYW1lLm1hdGNoKC9eZGF0YVxcLS9nKTtcbn1cblxudmFyIGlzUm9vdEF0dHIgPSBtYWtlTWFwKFxuXHQna2V5LHJlZidcbik7XG5cbmZ1bmN0aW9uIG1ha2VWYWx1ZSh2YWx1ZSwgaXNFeHByZXNzaW9uID0gZmFsc2UpXG57XG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0aXNFeHByZXNzaW9uLFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhvYmopXG57XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0ZXZlbnRzOiB7fSxcblx0XHRwcm9wczoge30sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0c3RhdGljQXR0cnM6IHt9LFxuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIG9iailcblx0e1xuXHRcdGxldCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuXHRcdGlmKGlzRG9tQXR0cihuYW1lKSkge1xuXHRcdFx0cmVzdWx0LnN0YXRpY0F0dHJzW25hbWVdID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15AL2cpKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9eQC9nLCAnJyk7XG5cdFx0XHRyZXN1bHQuZXZlbnRzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXlxcOi9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXlxcOi9nLCAnJyk7XG5cdFx0XHR2YWx1ZSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHRcblx0XHRcdGlmKGlzUm9vdEF0dHIobmFtZSkpIHtcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRcdHJlc3VsdC5hdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlKTtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoYEF0dHIgJHtuYW1lfSBkb2VzbnQgcmVnaXN0ZXJlZC4gQ2FudCB1bmRlcnN0YW5kIHR5cGUuYClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja3MoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnZXhwLmV4ZWMoaHRtbCk7XG5cdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0YmxvY2tzW2tleV0gPSBtYXRjaGVzWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IG51bGwsXG5cdFx0c3R5bGU6IG51bGwsXG5cdH0sIGh0bWwpO1xuXG5cdC8vIGNsZWFuIHVwIGh0bWwgYW5kIHJlcGxhY2UgZXhwcmVzc2lvbiB3aXRoIHRhZy1leHByZXNzaW9uXG5cdGh0bWwgPSBwcmVwYXJlKGJsb2NrcywgaHRtbCk7XG5cblx0Ly8gUGFyc2UgVEFHc1xuXHRsZXQgc3RhY2sgPSBbXG5cdFx0bmV3IEV4cHJlc3Npb24oeyB0eXBlOiAncHJvZ3JhbScgfSlcblx0XTtcblxuXHRmdW5jdGlvbiBjdXJyZW50U3RhY2tOb2RlKClcblx0e1xuXHRcdHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQmxvY2tUYWcobmFtZSlcblx0e1xuXHRcdHJldHVybiBzdGFjay5sZW5ndGggPT09IDEgJiYgWydzY3JpcHQnLCAnc3R5bGUnXS5pbmNsdWRlcyhuYW1lKTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlID0gbmV3IEhUTUxQYXJzZXIoe1xuXHRcdFxuXHRcdG9ub3BlbnRhZyhuYW1lLCBhdHRycylcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXHRcdFx0bGV0IGVudGl0eTtcblxuXHRcdFx0aWYobmFtZSA9PT0gJ2V4cHInKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBFeHByZXNzaW9uKGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZihuYW1lID09PSAnc2xvdCcpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IFNsb3QoYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmIChpc0NvbXBvbmVudChuYW1lKSkge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgQ29tcG9uZW50KG5hbWUsIGF0dHJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBOb2RlKG5hbWUsIGF0dHJzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdHBhcmVudC5hZGRDaGlsZChlbnRpdHkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGFjay5wdXNoKGVudGl0eSk7XG5cdFx0fSxcblxuXHRcdG9udGV4dCh0ZXh0KVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdFx0aWYodGV4dCAhPT0gJycgJiYgcGFyZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gbmV3IFRleHQodGV4dCk7XG5cdFx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHQgICAgXHR9XG5cdCAgICB9LFxuXG5cdFx0b25jbG9zZXRhZyhuYW1lKVxuXHRcdHtcblx0XHRcdGxldCByZW1vdmVkID0gc3RhY2sucG9wKCk7XG5cdCAgICB9XG5cblx0fSwgeyBkZWNvZGVFbnRpdGllczogdHJ1ZSB9KVxuXHRcblx0cGFyc2Uud3JpdGUoaHRtbCk7XG5cdHBhcnNlLmVuZCgpO1xuXG5cdGJsb2Nrcy50ZW1wbGF0ZSA9IHN0YWNrWzBdO1xuXHQvLyBjb25zb2xlLmxvZyhibG9ja3MudGVtcGxhdGUuY2hpbGRyZW5bMF0pXG5cdHJldHVybiBibG9ja3M7XG59XG4iLCJmdW5jdGlvbiBwcmVwYXJlSFRNTChodG1sKVxue1xuXHRyZXR1cm4gaHRtbC5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZShibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleHAsICcnKTtcblx0fVxuXG5cdGh0bWwgPSBodG1sXG5cdFx0Ly8gaWZcblx0XHQucmVwbGFjZSgvQGlmXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cInN0YXRlbWVudFwiPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlaWZcXCgoLiopXFwpL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2UvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwidHJ1ZVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRpZi9nLCAnPC9leHByPjwvZXhwcj4nKVxuXHRcdC8vIGVhY2hcblx0XHQucmVwbGFjZSgvQGVhY2hcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwiZWFjaFwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kZWFjaC9nLCAnPC9leHByPicpXG5cblx0cmV0dXJuIHByZXBhcmVIVE1MKGh0bWwpO1xufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGFnLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLm9wdGlvbiA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdub2RlJztcblx0fVxuXG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgbmFtZSA9ICdkZWZhdWx0JywgdGFnID0gJ3NwYW4nIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ3Nsb3QnO1xuXHR9XG5cdFx0XG5cdC8vIG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHQvLyB7XG5cdC8vIFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0Ly8gXHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0Ly8gXHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdC8vIFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpKSB7XG5cdC8vIFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHQvLyBcdH1cblxuXHQvLyBcdGlmKCF0aGlzLnRhZykge1xuXHQvLyBcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIHRlbXBsYXRlO1xuXHQvLyB9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGV4dClcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy52YWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy50eXBlID0gJ3RleHQnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBydWxlcyB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRtYXAoY2FsbGJhY2spXG5cdHtcblx0XHRpZih0aGlzLmNoaWxkcmVuICYmIHRoaXMudHlwZSAhPT0gJ3N0YXRlbWVudCcpIHtcblx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHRhZGRDaGlsZChjaGlsZClcblx0e1xuXHRcdGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cdGhhbmRsZShjb250ZXh0LCBvcHRpb25zKVxuXHR7XG5cdFx0cmV0dXJuIHJ1bGVzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcblx0fVxuXG5cdGlzVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuICh0aGlzLnR5cGUgPT09ICdub2RlJyAmJiB0aGlzLnRhZyA9PT0gJ3RlbXBsYXRlJyk7XG5cdH1cblxuXHRoYXNBbG9uZVRlbXBsYXRlKClcblx0e1xuXHRcdGxldCBhbG9uZSA9IHRydWU7XG5cblx0XHRmb3IobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcblx0XHRcdGlmKCFjaGlsZC5pc1RlbXBsYXRlKCkpIHtcblx0XHRcdFx0YWxvbmUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYWxvbmU7XG5cdH1cblxuXHRza2lwSW5pdCgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7Ly90aGlzLnR5cGUgPT09ICdwcm9ncmFtJyB8fCB0aGlzLnR5cGUgPT09ICdzbG90Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cdFx0XG5cdFx0bGV0IGF0dHJzID0gdGhpcy5vcHRpb24gPyB0aGlzLm9wdGlvbi5zdGF0aWNBdHRycyA6IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdHRlbXBsYXRlICs9IGAgJHtrZXl9PVwiJHthdHRyc1trZXldfVwiYDtcblx0XHR9XG5cblx0XHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0XHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0XHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpICYmICFvbmx5Q2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiAnPCEtLS0tPic7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMudGFnIHx8IHRoaXMuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbWFwIGFzIF9lYWNoJCB9IGZyb20gJ0BoYXdhL21hcCc7XG5cblxuXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdFx0aWYgKHJlbmRlcikge1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0XHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnRleHQgPSB7fTtcblx0XHR9XG5cblx0XHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdFx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCRwcm9wcyxcblx0XHRcdCRzbG90cyxcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIF9tYWtlQXR0cnMkKCkge1xuXG5cdH1cblxuXHRmdW5jdGlvbiBfbWFrZUV2ZW50cyQobm9kZSwgcmVuZGVyLCBvcHRpb25zKSB7XG5cdFx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBfc2xvdCQoJHNsb3RzLCBuYW1lLCBub2RlLCBjYWxsYmFjaykge1xuXHRcdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSAkc2xvdHNbbmFtZV07XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdC8vIGZ1bmN0aW9uIHZhbHVlU3Vic2NyaWJlKHJlbmRlciwgcHJvcCwgZm4pXG5cdC8vIHtcblx0Ly8gXHRpZighaXNPYnNlcnZhYmxlKHByb3ApKSB7XG5cdC8vIFx0XHRpZihoeWRyYXRlKSB7XG5cdC8vIFx0XHRcdGZuKHByb3ApO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblxuXHQvLyBcdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdC8vIFx0XHRmbihwcm9wKCkpO1xuXHQvLyBcdH0sICFyZW5kZXIpO1xuXHQvLyB9XG5cblx0ZnVuY3Rpb24gX3N0YXRlbWVudCQobm9kZSwgLi4uYXJncykge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChhcmdzW2ldKSB7XG5cdFx0XHRcdHJldHVybk5vZGUgPSBhcmdzW2kgKyAxXShub2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHQvLyBsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHQvLyBjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHQvLyByZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8ZGl2PlNvbWUgdGVzdCB0ZXh0ICR7IHRleHQxIH0gYWZ0ZXI8L2Rpdj48ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj50ZXh0PC9zcGFuPjwvZGl2Pic7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIFNjcmlwdCB0YWdcblx0XHQgKi9cblx0XHRsZXQgdGV4dDEgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCB0ZXh0MiA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQzID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgaXRlbXMgPSBvYnNlcnZhYmxlKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcblx0XHRsZXQgdGltZSA9IDEyMzU7XG5cblx0XHRsZXQgYyA9IGNvbXB1dGVkKHRleHQxLCAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHR9XG5cblx0XHR0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpdGVtcyhBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKSk7XG5cdFx0fSwgMTAwMClcblx0XHQvKipcblx0XHQgKiBHRU5FUkFURUQgQ09ERVxuXHRcdCAqL1xuXHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5cdFx0bGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5cdFx0X21ha2VBdHRycyQoX2VsJDIsIHJlbmRlciwge1xuXHRcdFx0XCJzdHlsZVwiOiAxLFxuXHRcdFx0XCJkYXRhLTFcIjoge1xuXHRcdFx0XHR0ZXN0OiB0ZXh0MVxuXHRcdFx0fSxcblx0XHRcdFwiZGF0YS0yXCI6IHRleHQxLFxuXHRcdFx0XCJjbGFzc1wiOiBjb21wdXRlZChbdGV4dDEsIHRleHQyXSwgKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gW3RleHQxKCksIHtcblx0XHRcdFx0XHRzb21lOiB0ZXh0MigpID09PSAyXG5cdFx0XHRcdH0sIHRpbWVdO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cblx0XHRsZXQgX2VsJDEzID0gX2VhY2gkKF9lbCQzLCBpdGVtcywgKGl0ZW0xLCBrZXkxKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ3RleHQtJyArIGl0ZW0xICsgdGV4dDEoKTtcblx0XHR9LCAobm9kZSwgcmVuZGVyLCBrZXlFeHByLCBpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0bGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0X2VsJDUuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgJ3RleHQtJyArIGl0ZW0xICsgdGV4dDEoKSk7XG5cdFx0XHR9LCAhcmVuZGVyKTtcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ1LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGlja1wiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdHN1YnNjcmliZShbdGV4dDFdLCAoKSA9PiB7XG5cdFx0XHRcdF9lbCQ2Lm5vZGVWYWx1ZSA9IGBTb21lIHRlc3QgdGV4dCAke3RleHQxKCl9IGFmdGVyYDtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlRXZlbnRzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblx0XHRcdF9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkOCwgbm9kZSA9PiB7XG5cdFx0XHRcdGxldCBfZWwkOSA9IF9lbCQ4LmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTAgPSBfZWwkOS5uZXh0U2libGluZztcblx0XHRcdFx0bGV0IF9lbCQxMSA9IF9lbCQxMC5maXJzdENoaWxkO1xuXHRcdFx0XHRsZXQgX2VsJDEyID0gX2VsJDEwLm5leHRTaWJsaW5nO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ3O1xuXHRcdH0sIHJlbmRlcik7XG5cblx0XHRjb25zb2xlLmxvZyhfZWwkMTMuY2hpbGROb2Rlcyk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cblxuXHRsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cblx0dGltZSgncmVuZGVyJyk7XG5cdGxheW91dC5hcHBlbmRDaGlsZChtYWtlQ29tcG9uZW50KCkpO1xuXHR0aW1lKCdyZW5kZXInKTtcblxuXHRyZXR1cm47XG5cblx0bGV0IHRtcCA9IGxheW91dC5pbm5lckhUTUw7XG5cdGxheW91dC5pbm5lckhUTUwgPSB0bXA7XG5cblx0dGltZSgnaHlkcmF0ZScpO1xuXHRtYWtlQ29tcG9uZW50KG51bGwsIGxheW91dC5maXJzdENoaWxkKVxuXHR0aW1lKCdoeWRyYXRlJyk7XG5cdC8vIGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xufVxuXG50ZXN0KCk7XG5cbmZ1bmN0aW9uIGdldHQoKSB7XG5cblx0bGV0IGh0bWwgPVxuXHRcdGBcblx0PGRpdj5zdGFydDwvZGl2PlxuXHRAaWYoMSlcblx0PGRpdj48L2Rpdj5cblx0YXNkYWRcblx0XHRAaWYoMilcblx0XHQ8ZGl2PmlmZjI8L2Rpdj5cblx0XHRAZW5kaWZcblx0YXNkYXNkXG5cdEBlbHNlaWYodGVzdClcblx0MVxuXHRcdDJcblx0XHRAZWFjaCgxKVxuXHRcdGFzZGFzZFxuXHRcdDxzbG90PmRlZmF1bHQgdGV4dCBmb3Igc2xvdDxiIGNsYXNzPVwiZFwiPjE8L2I+PC9zbG90PlxuXHRcdEBlbmRlYWNoXG5cdFx0M1xuXHRcdEBlbHNlIFxuXHRcdGFzZFxuXHRAZW5kaWZcblx0ZW5kXG5cdGA7XG5cblx0aHRtbCA9IGBcblx0PGRpdiBjbGFzcz1cIjJcIiA6c3R5bGU9XCIxXCIgOmRhdGEtMT1cInsgdGVzdDogdGV4dDEgfVwiIDpkYXRhLTI9XCJ0ZXh0MVwiIDpjbGFzcz1cIlt0ZXh0MSwgeyBzb21lOiB0ZXh0MiA9PT0gMiB9LCB0aW1lXVwiIDpwcm9wMT1cIjEyM1wiPlxuXHRAZWFjaCgoaXRlbTEsIGtleTEpIGluIGl0ZW1zKVxuXHQ8dGVtcGxhdGUgOmtleT1cIid0ZXh0LScgKyBpdGVtMSArIHRleHQxXCI+XG5cdFx0PGRpdiBAY2xpY2s9XCJtZXRob2QxXCIgQG1vdXNlZG93bj1cIm1ldGhvZDEoZXZlbnQpXCI+XG5cdFx0XHRTb21lIHRlc3QgdGV4dCBcXCR7IHRleHQxIH0gYWZ0ZXJcblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgQG1vdXNlZG93bj1cImFsZXJ0KDIpXCI+XG5cdFx0XHQ8c2xvdD5EZWZhdWx0IDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj4gdGV4dDwvc2xvdD5cblx0XHQ8L2Rpdj5cblx0PC90ZW1wbGF0ZT5cblx0QGVuZGVhY2hcblx0XG5cblx0PHNjcmlwdD5cblx0bGV0IHRleHQxID0gJG8oMSk7XG5cdGxldCB0ZXh0MiA9ICRvKDEpO1xuXHRsZXQgdGV4dDMgPSAkbygxKTtcblx0bGV0IGl0ZW1zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSk7XG5cdGxldCB0aW1lID0gMTIzNTtcblxuXHRsZXQgYyA9ICgpID0+IHtcblx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRsZXQgZCA9IHRleHQyKCk7XG5cblx0XHRsZXQgdGV4dDEgPSAnc29tZSc7XG5cblx0XHR0ZXh0MTtcblx0fVxuXHQ8L3NjcmlwdD5cblx0YFxuXHRsZXQgYmxvY2tzID0gcGFyc2UoaHRtbCk7XG5cblx0cmV0dXJuIGNvbXBpbGUoYmxvY2tzKTtcblx0Ly8gY29uc29sZS5sb2coaHRtbCk7XG59XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9