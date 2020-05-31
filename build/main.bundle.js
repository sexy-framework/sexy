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
  } // console.log(aIdx, bIdx);


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
  var defaultA = []; // hydration prepare 

  if (!render) {
    var _items = (0, _observable.value)(items);

    var node = bindNode;
    var lastNode = null;

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);
      var lastHydratedNode = null;

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          lastHydratedNode = expr(node, false, keyExpr, item, key);
          node = lastHydratedNode.nextSibling;
          lastNode = lastHydratedNode;
        }
      }

      if (lastHydratedNode) {
        if (!lastHydratedNode.hasAttribute('data-key')) {
          var hydratedNodes = [];
          var startNodeSearch = lastHydratedNode;

          while (startNodeSearch) {
            hydratedNodes.unshift(startNodeSearch);

            if (startNodeSearch.hasAttribute('data-key')) {
              break;
            }

            startNodeSearch = startNodeSearch.previousSibling;
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
      }
    }

    endMark = document.createTextNode('');
    lastNode.after(endMark); // console.log(lastNode);
    // endMark = add(lastNode, '');
  }

  var unsubscribe = (0, _observable.subscribe)(items, function (a) {
    var b = (0, _observable.value)(items);
    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark));
    toRemove.forEach(dispose);
    return content; // });
  }, !render);

  if (render) {
    bindNode.replaceWith(parent);
  } // disposeAll();


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
        n = el ? el : expr(null, true, keyExpr, item, key);
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

  var lastValue = null;
  obs = [].concat(obs);

  var fn = function fn() {
    lastValue = value(lastValue);
  };

  for (var _iterator2 = _createForOfIteratorHelperLoose(obs), _step2; !(_step2 = _iterator2()).done;) {
    var ob = _step2.value;

    if (ob._observers) {
      ob._observers.add(fn);
    }

    if (ob._deps) {
      for (var _iterator3 = _createForOfIteratorHelperLoose(ob._deps), _step3; !(_step3 = _iterator3()).done;) {
        var dep = _step3.value;
        dep.add(fn);
      }
    }
  }

  if (!skip) {
    fn();
  }
}

function cleanup(fn) {}

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

  _tpl$1.innerHTML = '<div class="2"><!----><div class="Test">${ text2 }</div></div>';

  var _tpl$2 = document.createElement("template");

  _tpl$2.innerHTML = '<div>Some test text ${ text1 } after</div><div class="button"><span>Default<b class="d">button</b>text</span></div>';
  var timer = null;

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
      length: 1
    }, function (_, i) {
      return i;
    }));
    var c = (0, _observable.computed)(text1, function () {
      return _time.default + text1;
    });

    function method1() {
      text1(text1() + 1);
    }

    clearInterval(timer);
    timer = setInterval(function () {
      text2(text2() + 1);
    }, 500); // if(!render) {
    // 	time = setTimeout(() => {
    // 		items(Array.from({ length: 100 }, (_, i) => i));
    // 	}, 1000)
    // }

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
        }, _time.default];
      })
    });

    var _el$3 = _el$2.firstChild;

    var _el$13 = (0, _map.map)(_el$3, items, function (item1, key1) {
      return 'text-' + item1 + text1();
    }, function (node, render, _keyExpr$, item1, key1) {
      var _el$4 = getNode(_tpl$2, node, render);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      (0, _observable.subscribe)([text1], function () {
        _el$5.setAttribute("data-key", 'text-' + item1 + text1());
      });

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

    var _el$14 = _el$13.nextSibling;
    var _el$15 = _el$14.firstChild;
    (0, _observable.subscribe)([text2], function () {
      _el$15.nodeValue = "" + text2();
    });
    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  (0, _time.default)('render');
  layout.appendChild(makeComponent());
  (0, _time.default)('render');
  return;
  setTimeout(function () {
    var tmp = layout.innerHTML;
    layout.innerHTML = tmp;
    (0, _time.default)('hydrate');
    makeComponent(null, layout.firstChild);
    (0, _time.default)('hydrate');
  }, 2000); // console.log(layout.innerHTML);
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot<b class=\"d\">1</b></slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t\t@each((item1, key1) in items)\n\t\t<template :key=\"'text-' + item1 + text1\">\n\t\t\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\t\t\tSome test text ${ text1 } after\n\t\t\t</div>\n\t\t\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t\t\t</div>\n\t\t</template>\n\t\t@endeach\n\t\t<div class=\"Test\">${ text2 }</div>\n\t</div>\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet items = Array.from({ length: 1 }, (_, i) => i);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsImRhdGEiLCJkZXBzIiwiY29udGV4dCIsIm9ic2VydmFibGVzIiwidmFycyIsIm1ldGhvZHMiLCJjb250ZXh0U3RhY2siLCJpc1ZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJpZCIsInBhdGgiLCJ2YWx1ZSIsImdldENvbnRleHQiLCJpc1N1YkNvbnRleHQiLCJleGl0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiY2xvc2VDb250ZXh0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIklkZW50aWZpZXIiLCJWYXJpYWJsZUNvdW50ZXIiLCJUZW1wbGF0ZXMiLCJjb2RlQW5hbHlzZSIsImJsb2NrcyIsImR5bmFtaWNFeHByZXNzaW9ucyIsInRlbXBsYXRlIiwicHJvZ3JhbSIsImNvZGUiLCJpIiwidHBsIiwiaW5kZXgiLCJpbml0IiwiTGFzdFZhcmlhYmxlSWQiLCJnZXRMYXN0VmFyaWFibGVJZCIsImdldEN1cnJlbnRDb250ZXh0IiwiQWN0aW9uIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0b3IiLCJzZXRMYXN0VmFyaWFibGVJZCIsImVudGl0eSIsImJvZHkiLCJvcHRpb25zIiwicmVtb3ZlQ29udGV4dCIsImNyZWF0ZVZhcmlhYmxlIiwiY3JlYXRlVGVtcGxhdGUiLCJkeW5hbWljIiwiaGFuZGxlIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwicmVuZGVyIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzIiwiYXJncyIsInJlc3VsdCIsIm1ha2VTdHJpbmciLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50IiwicHJvcHMiLCJtYWtlQ29tcHV0ZWQiLCJvYmplY3RQcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiY2FsbEV4cHJlc3Npb24iLCJvYmplY3RFeHByZXNzaW9uIiwibWFrZUZ1bmN0aW9uIiwiaXNFeHByZXNzaW9uIiwiYXR0cnMiLCJldmVudHMiLCJzdHJpbmciLCJhcnJvd0Z1bmN0aW9uIiwic2V0QXR0ciIsImNvbnNvbGUiLCJUeXBlIiwibWFrZVN1YnNjcmliZSIsIm1lbWJlckV4cHJlc3Npb24iLCJjb250ZW50IiwiYXJyYXlFeHByZXNzaW9uIiwiYXNzaWdubWVudEV4cHJlc3Npb24iLCJUTVBfSURFTlRJRklFUiIsImZuIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwic3RhdGVmdWxDb3VudGVyIiwiaWRlbnRpZmllcnNDb3VudGVyIiwic2hvdWxkV3JhcCIsImV4cHIiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJtYXRjaCIsImtleSIsImZpbmRLZXkiLCJjaGlsZCIsInBhcmFtcyIsImxvb3AiLCJwYXJzZUVhY2hDb25kaXRpb24iLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsIm5vZGUiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJuIiwiY2hpbGROb2RlcyIsInVuc3Vic2NyaWJlIiwiQXJyYXkiLCJiaW5kTm9kZSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImRlcCIsImlzQXR0ciIsImlzRG9tQXR0ciIsImlzUm9vdEF0dHIiLCJhdHRyaWJ1dGVzIiwic3RhdGljQXR0cnMiLCJvYmoiLCJtYWtlVmFsdWUiLCJyZWdleHAiLCJtYXRjaGVzIiwicGFyc2VCbG9ja3MiLCJzY3JpcHQiLCJzdHlsZSIsImh0bWwiLCJzdGFjayIsIkV4cHJlc3Npb24iLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIlRleHQiLCJvbmNsb3NldGFnIiwicmVtb3ZlZCIsImRlY29kZUVudGl0aWVzIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJydWxlcyIsImlzVGVtcGxhdGUiLCJoYXNBbG9uZVRlbXBsYXRlIiwiYWxvbmUiLCJza2lwSW5pdCIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsImxpc3QiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwidmFsIiwidGVzdCIsImdldE5vZGUiLCJjbG9uZU5vZGUiLCJwYXJzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCIkcHJvcHMiLCIkc2xvdHMiLCJfbWFrZUF0dHJzJCIsIl9tYWtlRXZlbnRzJCIsImFkZEV2ZW50TGlzdGVuZXIiLCJfc2xvdCQiLCJjYWxsYmFjayIsImlubmVySFRNTCIsIl9zdGF0ZW1lbnQkIiwicmV0dXJuTm9kZSIsInJlcGxhY2VXaXRoIiwiX3RwbCQxIiwiY3JlYXRlRWxlbWVudCIsIl90cGwkMiIsInRpbWVyIiwibWFrZUNvbXBvbmVudCIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsIml0ZW1zIiwiZnJvbSIsIl8iLCJjIiwidGltZSIsIm1ldGhvZDEiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJfZWwkMSIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsInNvbWUiLCJfZWwkMyIsIl9lbCQxMyIsIml0ZW0xIiwia2V5MSIsIl9rZXlFeHByJCIsIl9lbCQ0IiwiX2VsJDUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIl9lbCQ2Iiwibm9kZVZhbHVlIiwiX2VsJDciLCJuZXh0U2libGluZyIsImFsZXJ0IiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsIl9lbCQxNCIsIl9lbCQxNSIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwidG1wIiwiZ2V0dCIsInRpbWVzIiwibm93IiwiRGF0ZSIsImdldFRpbWUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUwsR0FBY29SLEdBQWQ7QUFDQSxXQUFPRCxLQUFLLENBQUNuUixJQUFELENBQVo7QUFDQTs7QUFFRHNFLFNBQU8sQ0FBQ2lOLEdBQVIsV0FBb0J2UixJQUFwQixTQUE4Qm9SLEdBQUcsR0FBR0QsS0FBSyxDQUFDblIsSUFBRCxDQUF6QyxFQUFpRCxJQUFqRDtBQUVBLFNBQU9tUixLQUFLLENBQUNuUixJQUFELENBQVo7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgY29udGV4dCwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXNlKHNvdXJjZSlcbntcblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKHNvdXJjZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0bGV0IGRhdGEgPSBjb250ZXh0KGFzdCk7XG5cdGxldCBkZXBzID0gZGVwZW5kZW5jaWVzKGFzdCwgZGF0YS5vYnNlcnZhYmxlcyk7XG5cblx0cmV0dXJuIHtcblx0XHRjb250ZXh0OiBkYXRhLFxuXHRcdGRlcHM6IGRlcHMsXG5cdH07XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCwgcGFyc2UgfSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KGFzdClcbntcblx0bGV0IGRhdGEgPSB7XG5cdFx0b2JzZXJ2YWJsZXM6IFtdLFxuXHRcdHZhcnM6IFtdLFxuXHRcdG1ldGhvZHM6IFtdLFxuXHR9XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHZhbHVlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgdmFsdWUuY2FsbGVlLm5hbWUgPT09ICckbycpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSBpZihbJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uJywgJ0Z1bmN0aW9uRXhwcmVzc2lvbiddLmluY2x1ZGVzKHZhbHVlLnR5cGUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0ZGF0YS5tZXRob2RzLnB1c2gocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkYXRhO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbmNpZXMoYXN0LCBvYnNlcnZhYmxlcyA9IFtdKVxue1xuXHRsZXQgZGVwcyA9IHt9O1xuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblx0bGV0IGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0XHRkZXBzOiBbXSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlQ29udGV4dCgpXG5cdHtcblx0XHRsZXQgY29udGV4dCA9IGNvbnRleHRTdGFjay5wb3AoKTtcblx0XHRkZXBzW2NvbnRleHQubmFtZV0gPSBjb250ZXh0LmRlcHM7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cdFx0XHRcdGxldCBuYW1lID0gcGF0aC5ub2RlLm5hbWU7XG5cblx0XHRcdFx0aWYoIWlzU3ViQ29udGV4dCgpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoIWNvbnRleHQudmFycy5pbmNsdWRlcyhuYW1lKSAmJiBvYnNlcnZhYmxlcy5pbmNsdWRlcyhuYW1lKSkge1xuXHRcdFx0XHRcdGNvbnRleHQuZGVwcy5wdXNoKG5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gdHJ1ZTtcblxuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KCkge1xuXHRcdCAgICBcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkZXBzO1xufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICcuL2R5bmFtaWMnO1xuXG5pbXBvcnQge1xuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxuXHR2YXJpYWJsZURlY2xhcmF0b3IsXG5cdG1lbWJlckV4cHJlc3Npb24sXG5cblx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uLFxuXHRPYmplY3RFeHByZXNzaW9uLFxuXHRPYmplY3RQcm9wZXJ0eSxcblx0T2JqZWN0TWV0aG9kLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0QmxvY2tTdGF0ZW1lbnQsXG5cdExhYmVsZWRTdGF0ZW1lbnQsXG5cdFJldHVyblN0YXRlbWVudCxcblx0U3RyaW5nTGl0ZXJhbCxcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cHJvZ3JhbSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuLyoqXG4gKiBDb21waWxlIHRlbXBsYXRlIHRvIERPTSBleHByZXNzaW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShibG9ja3MpXG57XG5cdGxldCBWYXJpYWJsZUNvdW50ZXIgPSAwO1xuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIG1hbmFnZW1lbnRcblx0ICogQHR5cGUge1NldH1cblx0ICovXG5cdGxldCBUZW1wbGF0ZXMgPSBuZXcgU2V0KCk7XG5cblx0bGV0IGNvZGVBbmFseXNlID0gYW5hbHlzZShibG9ja3Muc2NyaXB0KTtcblx0bGV0IGR5bmFtaWNFeHByZXNzaW9ucyA9IGR5bmFtaWMoY29kZUFuYWx5c2UpO1xuXHQvLyBjb25zb2xlLndhcm4oY29kZUFuYWx5c2UpO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHByb2dyYW0pXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBwcm9ncmFtLm1ha2VUZW1wbGF0ZSh0cnVlKTtcblxuXHRcdFRlbXBsYXRlcy5hZGQodGVtcGxhdGUpO1xuXG5cdFx0cmV0dXJuIGlkKGBfdHBsJCR7IFRlbXBsYXRlcy5zaXplIH1gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRlbXBsYXRlcygpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdGZvcihsZXQgdHBsIG9mIFRlbXBsYXRlcykge1xuXHRcdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdFx0Y29kZSArPSBgbGV0IF90cGwkJHsgaW5kZXggfSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcXG5gO1xuXHRcdFx0Y29kZSArPSBgX3RwbCQkeyBpbmRleCB9LmlubmVySFRNTCA9ICckeyB0cGwgfSc7XFxuXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250ZXh0IG1hbmFnZW1lbnRcblx0ICogQHBhcmFtICB7W3R5cGVdfSBMYXN0VmFyaWFibGVJZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChpbml0ID0gZmFsc2UpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0TGFzdFZhcmlhYmxlSWQ6IGluaXQgPyBpZCgnbm9kZScpIDogZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ29udGV4dCgpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYXN0VmFyaWFibGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gZ2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldExhc3RWYXJpYWJsZUlkKHZhbHVlKVxuXHR7XG5cdFx0Z2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZCA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVmFyaWFibGUoY29udGV4dCA9IG51bGwsIEFjdGlvbiA9IChuLCBsKSA9PiBsKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRcdGxldCBkZWxjYXJhdGlvblZhbHVlID0gQWN0aW9uKG5hbWUsIGdldExhc3RWYXJpYWJsZUlkKCkpO1xuXG5cdFx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRcdG5ldyB2YXJpYWJsZURlY2xhcmF0b3IoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHRcdClcblx0XHRdKTtcblxuXHRcdHNldExhc3RWYXJpYWJsZUlkKG5hbWUpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBpbGUgdGVtcGxhdGVzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgZW50aXR5ID0gYmxvY2tzLnRlbXBsYXRlO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBvcHRpb25zID0ge1xuXHRcdGNyZWF0ZUNvbnRleHQsXG5cdFx0cmVtb3ZlQ29udGV4dCxcblx0XHRjcmVhdGVWYXJpYWJsZSxcblx0XHRnZXRMYXN0VmFyaWFibGVJZCxcblx0XHRjcmVhdGVUZW1wbGF0ZSxcblx0XHRkeW5hbWljOiBkeW5hbWljRXhwcmVzc2lvbnMsXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGUoZW50aXR5KVxuXHR7XG5cdFx0ZW50aXR5LmhhbmRsZShib2R5LCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUNvbnRleHQodHJ1ZSk7XG5cdFtlbnRpdHldLm1hcCgoaXRlbSkgPT4gaGFuZGxlKGl0ZW0pKTtcblxuXHQvKipcblx0ICogR2VuZXJhdGUgY29kZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGNvZGUgPSBnZW5lcmF0ZShwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCksIHtcblx0XHRyZXRhaW5MaW5lczogZmFsc2UsXG5cdFx0Y29tcGFjdDogZmFsc2UsXG5cdFx0bWluaWZpZWQ6IGZhbHNlLFxuXHRcdGNvbmNpc2U6IGZhbHNlLFxuXHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXI6IGNvZGUuY29kZSxcblx0XHR0ZW1wbGF0ZXM6IGdldFRlbXBsYXRlcygpLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFycm93RnVuY3Rpb24oeyB2YWx1ZSA9IFtdLCBhcmdzID0gW10gfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN0cmluZyk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVzdWx0KVxuXHRyZXR1cm4gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdGFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdC5jb250ZW50KVxuXHRcdF0pLFxuXHQpXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUZ1bmN0aW9uIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uZXZlbnRzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5ldmVudHNbbmFtZV0sIG1ha2VGdW5jdGlvbik7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUV2ZW50cyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKHZhbHVlLCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VDb21wdXRlZCk7XG5cblx0Ly8gY29uc29sZS53YXJuKHJlc3VsdCk7XG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcbmltcG9ydCB7IGFycm93RnVuY3Rpb24gfSBmcm9tICcuL2Fycm93RnVuY3Rpb24nO1xuaW1wb3J0IHsgc2V0QXR0ciB9IGZyb20gJy4vc2V0QXR0cic7XG5cbi8vIGV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHByb3BzIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhjb250ZXh0KVxue1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJzOiBhdHRycy5iaW5kKGNvbnRleHQpLFxuXHRcdGV2ZW50czogZXZlbnRzLmJpbmQoY29udGV4dCksXG5cdFx0cHJvcHM6IHByb3BzLmJpbmQoY29udGV4dCksXG5cdFx0c3RyaW5nOiBzdHJpbmcuYmluZChjb250ZXh0KSxcblx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uLmJpbmQoY29udGV4dCksXG5cdFx0YXJyb3dGdW5jdGlvbjogYXJyb3dGdW5jdGlvbi5iaW5kKGNvbnRleHQpLFxuXHRcdHNldEF0dHI6IHNldEF0dHIuYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdWJzY3JpYmUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoeyBuYW1lID0gJ2tleScsIFR5cGUgfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKFR5cGUub3B0aW9uW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBUeXBlLm9wdGlvbltuYW1lXTtcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3Vic2NyaWJlKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3NldEF0dHJpYnV0ZScpXG5cdFx0XHQpLFxuXHRcdFx0W1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGBkYXRhLSR7bmFtZX1gKSxcblx0XHRcdFx0cmVzdWx0LmV4cHJcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0aWYocmVzdWx0LnNob3VsZFdyYXApIHtcblx0XHRleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHJlc3VsdC5kZXBzLFxuXHRcdFx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb25cblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKGV4cHJlc3Npb24pO1xuXHQvLyByZXR1cm4gcmVzdWx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpc0V4cHJlc3Npb24gPSBlbnRpdHkudmFsdWUubWF0Y2goL1xcJFxcey4qXFx9L2cpICE9PSBudWxsO1xuXG5cdGlmKCFpc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgeyBkZXBzLCBjb250ZW50IH0gPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB7XG5cdFx0aXNFeHByZXNzaW9uLFxuXHRcdHZhbHVlOiBgXFxgJHsgZW50aXR5LnZhbHVlIH1cXGBgLFxuXHR9LCBtYWtlU3RyaW5nKTtcblxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0XHRuZXcgYXNzaWdubWVudEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKHBvaW50LCBpZCgnbm9kZVZhbHVlJykpLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdF0pXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRbZGVwcywgYm9keV1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRibG9ja1N0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuY29uc3QgVE1QX0lERU5USUZJRVIgPSAnX3RtcCRhc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZhbHVlKGNvbnRleHQsIHZhbHVlLCBmbilcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYCR7VE1QX0lERU5USUZJRVJ9ID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59XG5cblxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdC8vIGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdC8vIFx0cmV0dXJuIHJlc3VsdDtcblx0Ly8gfVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3VsZFdyYXAsXG5cdFx0ZGVwcyxcblx0XHRleHByOiByZXN1bHQsXG5cdH1cblx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldENvbXBvbmVudCcpLCBbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRcdFx0bCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWFjaENvbmRpdGlvbihlbnRpdHkpXG57XG5cdGxldCBzdGF0ZW1lbnQgPSBlbnRpdHkudmFsdWUubWF0Y2hBbGwoL1xcKCg/PGl0ZW0+W0EtejAtOV0rKVxccz8oXFwsXFxzPyg/PGtleT5bQS16MC05XSspXFxzPyk/XFwpXFxzP2luXFxzKD88Y29uZGl0aW9uPi4qKS9nKTtcblxuXHRsZXQgY29uZGl0aW9uID0gbnVsbDtcblx0bGV0IGFyZ3MgPSBbXTtcblxuXHRmb3IobGV0IG1hdGNoIG9mIHN0YXRlbWVudCkge1xuXG5cdFx0aWYobWF0Y2guZ3JvdXBzLml0ZW0pIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMuaXRlbSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2l0ZW0nKTtcblx0XHR9XG5cblx0XHRpZihtYXRjaC5ncm91cHMua2V5KSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLmtleSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGFyZ3MucHVzaCgnX2luZGV4Jyk7XG5cdFx0fVxuXG5cdFx0Y29uZGl0aW9uID0gbWF0Y2guZ3JvdXBzLmNvbmRpdGlvbjtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0a2V5OiBmaW5kS2V5KGVudGl0eSksXG5cdFx0Y29uZGl0aW9uLFxuXHRcdGFyZ3MsXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRLZXkoZW50aXR5KVxue1xuXHRsZXQga2V5ID0gbnVsbDtcblx0Zm9yKGxldCBjaGlsZCBvZiBlbnRpdHkuY2hpbGRyZW4pXG5cdHtcblx0XHRpZihjaGlsZC5vcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGtleSA9IGNoaWxkLm9wdGlvbi5rZXk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihrZXkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBpcyByZXF1aXJlZCBmb3IgRWFjaCBsb29wIChmb3IgaHlkcmF0aW9uKScpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdC8qKlxuXHQgKiBMb29wIHByZXBhcmF0aW9uXG5cdCAqIDEuIEtleSBnZW5lcmF0aW9uIGZ1bmN0aW9uXG5cdCAqIDIuIENvbmRpdGlvbiBleHByZXNzaW9uXG5cdCAqIDMuIEl0ZW0gYW5kIGtleSBpZGludGlmaWVyc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGxvb3AgPSBwYXJzZUVhY2hDb25kaXRpb24odGhpcyk7XG5cblx0bGV0IHZhbHVlID0gb3B0aW9ucy5keW5hbWljLmV4cHJlc3Npb24obG9vcC5jb25kaXRpb24sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdGxldCBrZXkgPSBvcHRpb25zLmR5bmFtaWMuYXJyb3dGdW5jdGlvbih7XG5cdFx0dmFsdWU6IGxvb3Aua2V5LFxuXHRcdGFyZ3M6IGxvb3AuYXJnc1xuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKHZhbHVlKTtcblx0cGFyYW1zLnB1c2goa2V5KTtcblxuXHQvKipcblx0ICogR2V0IGxvb3AgdGVtcGxhdGVcblx0ICovXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdFx0WyBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyksIGlkKCdfa2V5RXhwciQnKSBdLmNvbmNhdChsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KSxcblx0XHQpXG5cdCk7XG5cblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS5tYWtlVmFsdWUpO1xuXHQvLyB9XHRcblx0XG5cdG9wdGlvbnMuZHluYW1pYy5zZXRBdHRyKHtcblx0XHRUeXBlOiB0aGlzLFxuXHRcdG5hbWU6ICdrZXknLFxuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJsb2NrID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRsZXQgYm9keSA9IFtdO1xuXG5cdFx0dGhpcy5jaGlsZHJlbltpXS5oYW5kbGUoYm9keSwge1xuXHRcdFx0bGFzdENvbnRleHRWYXJpYWJsZUlkOiBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRwYXJhbXMucHVzaChpZChibG9jay52YWx1ZSkpO1xuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHRcdCk7XG5cdH1cblxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zdGF0ZW1lbnQkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dChjb250ZXh0LCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwb2ludGVyID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24obCwgaWQoJ2ZpcnN0Q2hpbGQnKSksXG5cdFx0XHRsXG5cdFx0KVxuXHR9KTtcblxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCB0eXBlKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQodHlwZSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBjdXN0b21EZWZpbmVyID0gZmFsc2UpXG57XG5cdGlmKGVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRjdXN0b21EZWZpbmVyID0gKCkgPT4ge307XG5cdH1cblx0Ly8gY29uc29sZS5sb2coZW50aXR5LCBlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpKTtcblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXR5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRIYW5kbGUoZW50aXR5LmNoaWxkcmVuW2ldLCBjb250ZXh0LCBvcHRpb25zLCBpLCBjdXN0b21EZWZpbmVyKTtcblx0fVxuXG5cdGxldCBsYXN0Q2hpbGQgPSBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCk7XG5cblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLnJlbW92ZUNvbnRleHQoKTtcblx0fVxuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChhLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG9sZCwgdGhpcyBpcyBhbiBhZGRpdGlvblxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShnZXQoYkVsbSwgaiwgMSksIGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmUpO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSBpZiAoYUVsbSA9PT0gYkVsbSkge1xuXHRcdFx0Ly8gTm8gZGlmZmVyZW5jZSwgd2UgbW92ZSBvblxuXHRcdFx0aSsrO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoYUVsbSk7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgdGhlIHdhbnRlZCBlbG1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGUgd2FudGVkIGVsZW1lbnQgaXMgbm93XG5cdFx0XHR2YXIgd2FudGVkRWxtSW5PbGQgPSBhSWR4LmdldChiRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJjb25zdCBIVE1MVGFncyA9IFtcblx0XCIhZG9jdHlwZVwiLCBcImFcIiwgXCJhYmJyXCIsIFwiYWNyb255bVwiLCBcImFkZHJlc3NcIiwgXCJhcHBsZXRcIiwgXCJhcmVhXCIsIFwiYXJ0aWNsZVwiLCBcImFzaWRlXCIsIFwiYXVkaW9cIixcblx0XCJiXCIsIFwiYmFzZVwiLCBcImJhc2Vmb250XCIsIFwiYmJcIiwgXCJiZG9cIiwgXCJiaWdcIiwgXCJibG9ja3F1b3RlXCIsIFwiYm9keVwiLCBcImJyXCIsIFwiYnV0dG9uXCIsIFwiY2FudmFzXCIsXG5cdFwiY2FwdGlvblwiLCBcImNlbnRlclwiLCBcImNpdGVcIiwgXCJjb2RlXCIsIFwiY29sXCIsIFwiY29sZ3JvdXBcIiwgXCJjb21tYW5kXCIsIFwiZGF0YWdyaWRcIiwgXCJkYXRhbGlzdFwiLCBcImRkXCIsXG5cdFwiZGVsXCIsIFwiZGV0YWlsc1wiLCBcImRmblwiLCBcImRpYWxvZ1wiLCBcImRpclwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJlbVwiLCBcImVtYmVkXCIsIFwiZXZlbnRzb3VyY2VcIiwgXCJmaWVsZHNldFwiLFxuXHRcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb250XCIsIFwiZm9vdGVyXCIsIFwiZm9ybVwiLCBcImZyYW1lXCIsIFwiZnJhbWVzZXRcIiwgXCJoMT4gdG8gPGg2XCIsIFwiaGVhZFwiLCBcImhlYWRlclwiLFxuXHRcImhncm91cFwiLCBcImhyXCIsIFwiaHRtbFwiLCBcImlcIiwgXCJpZnJhbWVcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImlzaW5kZXhcIiwgXCJrYmRcIiwgXCJrZXlnZW5cIiwgXCJsYWJlbFwiLFxuXHRcImxlZ2VuZFwiLCBcImxpXCIsIFwibGlua1wiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtZW51XCIsIFwibWV0YVwiLCBcIm1ldGVyXCIsIFwibmF2XCIsIFwibm9mcmFtZXNcIiwgXCJub3NjcmlwdFwiLFxuXHRcIm9iamVjdFwiLCBcIm9sXCIsIFwib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJvdXRwdXRcIiwgXCJwXCIsIFwicGFyYW1cIiwgXCJwcmVcIiwgXCJwcm9ncmVzc1wiLCBcInFcIiwgXCJycFwiLCBcInJ0XCIsXG5cdFwicnVieVwiLCBcInNcIiwgXCJzYW1wXCIsIFwic2NyaXB0XCIsIFwic2VjdGlvblwiLCBcInNlbGVjdFwiLCBcInNtYWxsXCIsIFwic291cmNlXCIsIFwic3BhblwiLCBcInN0cmlrZVwiLCBcInN0cm9uZ1wiLFxuXHRcInN0eWxlXCIsIFwic3ViXCIsIFwic3VwXCIsIFwidGFibGVcIiwgXCJ0Ym9keVwiLCBcInRkXCIsIFwidGV4dGFyZWFcIiwgXCJ0Zm9vdFwiLCBcInRoXCIsIFwidGhlYWRcIiwgXCJ0aW1lXCIsIFwidGl0bGVcIixcblx0XCJ0clwiLCBcInRyYWNrXCIsIFwidHRcIiwgXCJ1XCIsIFwidWxcIiwgXCJ2YXJcIiwgXCJ2aWRlb1wiLCBcIndiclwiLCBcInRlbXBsYXRlXCJcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudChuYW1lKVxue1xuXHRyZXR1cm4gIUhUTUxUYWdzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpXG57XG5cdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdG1hcFtsaXN0W2ldXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9IDpcblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG4iLCIvLyBldmVudHMgLSBAIC0+IGlkKGF0dHJzIHZhbHVlKVxuLy8gZXhwcmVzc2lvbiA6IGlkKGF0dHJzKVxuLy8gc3RyaW5nbGl0dGVyYWwgXG5pbXBvcnQgeyBtYWtlTWFwIH0gZnJvbSAnLi91dGlscyc7XG5cblxudmFyIGlzQXR0ciA9IG1ha2VNYXAoXG5cdCdhY2NlcHQsYWNjZXB0LWNoYXJzZXQsYWNjZXNza2V5LGFjdGlvbixhbGlnbixhbHQsYXN5bmMsYXV0b2NvbXBsZXRlLCcgK1xuXHQnYXV0b2ZvY3VzLGF1dG9wbGF5LGF1dG9zYXZlLGJnY29sb3IsYm9yZGVyLGJ1ZmZlcmVkLGNoYWxsZW5nZSxjaGFyc2V0LCcgK1xuXHQnY2hlY2tlZCxjaXRlLGNsYXNzLGNvZGUsY29kZWJhc2UsY29sb3IsY29scyxjb2xzcGFuLGNvbnRlbnQsaHR0cC1lcXVpdiwnICtcblx0J25hbWUsY29udGVudGVkaXRhYmxlLGNvbnRleHRtZW51LGNvbnRyb2xzLGNvb3JkcyxkYXRhLGRhdGV0aW1lLGRlZmF1bHQsJyArXG5cdCdkZWZlcixkaXIsZGlybmFtZSxkaXNhYmxlZCxkb3dubG9hZCxkcmFnZ2FibGUsZHJvcHpvbmUsZW5jdHlwZSxtZXRob2QsZm9yLCcgK1xuXHQnZm9ybSxmb3JtYWN0aW9uLGhlYWRlcnMsaGVpZ2h0LGhpZGRlbixoaWdoLGhyZWYsaHJlZmxhbmcsaHR0cC1lcXVpdiwnICtcblx0J2ljb24saWQsaXNtYXAsaXRlbXByb3Asa2V5dHlwZSxraW5kLGxhYmVsLGxhbmcsbGFuZ3VhZ2UsbGlzdCxsb29wLGxvdywnICtcblx0J21hbmlmZXN0LG1heCxtYXhsZW5ndGgsbWVkaWEsbWV0aG9kLEdFVCxQT1NULG1pbixtdWx0aXBsZSxlbWFpbCxmaWxlLCcgK1xuXHQnbXV0ZWQsbmFtZSxub3ZhbGlkYXRlLG9wZW4sb3B0aW11bSxwYXR0ZXJuLHBpbmcscGxhY2Vob2xkZXIscG9zdGVyLCcgK1xuXHQncHJlbG9hZCxyYWRpb2dyb3VwLHJlYWRvbmx5LHJlbCxyZXF1aXJlZCxyZXZlcnNlZCxyb3dzLHJvd3NwYW4sc2FuZGJveCwnICtcblx0J3Njb3BlLHNjb3BlZCxzZWFtbGVzcyxzZWxlY3RlZCxzaGFwZSxzaXplLHR5cGUsdGV4dCxwYXNzd29yZCxzaXplcyxzcGFuLCcgK1xuXHQnc3BlbGxjaGVjayxzcmMsc3JjZG9jLHNyY2xhbmcsc3Jjc2V0LHN0YXJ0LHN0ZXAsc3R5bGUsc3VtbWFyeSx0YWJpbmRleCwnICtcblx0J3RhcmdldCx0aXRsZSx0eXBlLHVzZW1hcCx2YWx1ZSx3aWR0aCx3cmFwJ1xuKTtcblxudmFyIGlzRG9tQXR0ciA9IChuYW1lKSA9PiB7XG5cdHJldHVybiBpc0F0dHIobmFtZSkgfHwgbmFtZS5tYXRjaCgvXmRhdGFcXC0vZyk7XG59XG5cbnZhciBpc1Jvb3RBdHRyID0gbWFrZU1hcChcblx0J2tleSxyZWYnXG4pO1xuXG5mdW5jdGlvbiBtYWtlVmFsdWUodmFsdWUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlKVxue1xuXHRyZXR1cm4ge1xuXHRcdHZhbHVlLFxuXHRcdGlzRXhwcmVzc2lvbixcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMob2JqKVxue1xuXHRsZXQgcmVzdWx0ID0ge1xuXHRcdGV2ZW50czoge30sXG5cdFx0cHJvcHM6IHt9LFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdHN0YXRpY0F0dHJzOiB7fSxcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBvYmopXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBvYmpbbmFtZV07XG5cblx0XHRpZihpc0RvbUF0dHIobmFtZSkpIHtcblx0XHRcdHJlc3VsdC5zdGF0aWNBdHRyc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eQC9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXkAvZywgJycpO1xuXHRcdFx0cmVzdWx0LmV2ZW50c1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15cXDovZykpIHtcblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL15cXDovZywgJycpO1xuXHRcdFx0dmFsdWUgPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdFx0XG5cdFx0XHRpZihpc1Jvb3RBdHRyKG5hbWUpKSB7XG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIGlmKGlzRG9tQXR0cihuYW1lKSkge1xuXHRcdFx0XHRyZXN1bHQuYXR0cmlidXRlc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmVzdWx0LnByb3BzW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdC5wcm9wc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKGBBdHRyICR7bmFtZX0gZG9lc250IHJlZ2lzdGVyZWQuIENhbnQgdW5kZXJzdGFuZCB0eXBlLmApXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBwcmVwYXJlIH0gZnJvbSAnLi9wcmVwYXJlJztcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJzZXIgYXMgSFRNTFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2tzKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRsZXQgbWF0Y2hlcyA9IHJlZ2V4cC5leGVjKGh0bWwpO1xuXHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdGJsb2Nrc1trZXldID0gbWF0Y2hlc1sxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoaHRtbClcbntcblx0Ly8gZ2V0IGFkZGl0aW9uYWwgYmxvY2tzIGUuZy4gc2NyaXB0LCBzdHlsZSwgZG9jXG5cdGxldCBibG9ja3MgPSBwYXJzZUJsb2Nrcyh7XG5cdFx0c2NyaXB0OiBudWxsLFxuXHRcdHN0eWxlOiBudWxsLFxuXHR9LCBodG1sKTtcblxuXHQvLyBjbGVhbiB1cCBodG1sIGFuZCByZXBsYWNlIGV4cHJlc3Npb24gd2l0aCB0YWctZXhwcmVzc2lvblxuXHRodG1sID0gcHJlcGFyZShibG9ja3MsIGh0bWwpO1xuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm9wdGlvbiA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdjb21wb25lbnQnO1xuXHR9XG5cdFxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHR5cGUgPSBudWxsLCB2YWx1ZSA9IG51bGwgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xuXHR9XG5cblx0XG5cblx0XG5cblx0XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRhZywgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnbm9kZSc7XG5cdH1cblxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRpc1RlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiAodGhpcy50eXBlID09PSAnbm9kZScgJiYgdGhpcy50YWcgPT09ICd0ZW1wbGF0ZScpO1xuXHR9XG5cblx0aGFzQWxvbmVUZW1wbGF0ZSgpXG5cdHtcblx0XHRsZXQgYWxvbmUgPSB0cnVlO1xuXG5cdFx0Zm9yKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRpZighY2hpbGQuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0XHRcdGFsb25lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsb25lO1xuXHR9XG5cblx0c2tpcEluaXQoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlOy8vdGhpcy50eXBlID09PSAncHJvZ3JhbScgfHwgdGhpcy50eXBlID09PSAnc2xvdCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGxldCBhdHRycyA9IHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb24uc3RhdGljQXR0cnMgOiB7fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGF0dHJzKSB7XG5cdFx0XHR0ZW1wbGF0ZSArPSBgICR7a2V5fT1cIiR7YXR0cnNba2V5XX1cImA7XG5cdFx0fVxuXG5cdFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHRcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHRcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSAmJiAhb25seUNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnRhZyB8fCB0aGlzLmlzVGVtcGxhdGUoKSkge1xuXHRcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXG5cblxuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJztcblxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cdGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRcdGlmIChyZW5kZXIpIHtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb250ZXh0ID0ge307XG5cdFx0fVxuXG5cdFx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRcdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkcHJvcHMsXG5cdFx0XHQkc2xvdHMsXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBfbWFrZUF0dHJzJCgpIHtcblxuXHR9XG5cblx0ZnVuY3Rpb24gX21ha2VFdmVudHMkKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRcdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX3Nsb3QkKCRzbG90cywgbmFtZSwgbm9kZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUuaW5uZXJIVE1MID0gJHNsb3RzW25hbWVdO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHQvLyBmdW5jdGlvbiB2YWx1ZVN1YnNjcmliZShyZW5kZXIsIHByb3AsIGZuKVxuXHQvLyB7XG5cdC8vIFx0aWYoIWlzT2JzZXJ2YWJsZShwcm9wKSkge1xuXHQvLyBcdFx0aWYoaHlkcmF0ZSkge1xuXHQvLyBcdFx0XHRmbihwcm9wKTtcblx0Ly8gXHRcdH1cblx0Ly8gXHRcdHJldHVybjtcblx0Ly8gXHR9XG5cblx0Ly8gXHRzdWJzY3JpYmUocHJvcCwgKCkgPT4ge1xuXHQvLyBcdFx0Zm4ocHJvcCgpKTtcblx0Ly8gXHR9LCAhcmVuZGVyKTtcblx0Ly8gfVxuXG5cdGZ1bmN0aW9uIF9zdGF0ZW1lbnQkKG5vZGUsIC4uLmFyZ3MpIHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGZhbHNlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoYXJnc1tpXSkge1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gYXJnc1tpICsgMV0obm9kZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXR1cm5Ob2RlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblxuXHRcdHJldHVybiByZXR1cm5Ob2RlO1xuXHR9XG5cblx0Ly8gbGV0IHsgcmVuZGVyLCB0ZW1wbGF0ZXMgfSA9IGdldHQoKTtcblx0Ly8gY29uc29sZS5sb2cocmVuZGVyKTtcblx0Ly8gY29uc29sZS5sb2codGVtcGxhdGVzKTtcblx0Ly8gcmV0dXJuO1xuXG5cdC8qKlxuXHQgKiBHRU5FUkFURUQgQ09ERVxuXHQgKi9cblx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2IGNsYXNzPVwiMlwiPjwhLS0tLT48ZGl2IGNsYXNzPVwiVGVzdFwiPiR7IHRleHQyIH08L2Rpdj48L2Rpdj4nO1xuXG5cdGxldCBfdHBsJDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkMi5pbm5lckhUTUwgPSAnPGRpdj5Tb21lIHRlc3QgdGV4dCAkeyB0ZXh0MSB9IGFmdGVyPC9kaXY+PGRpdiBjbGFzcz1cImJ1dHRvblwiPjxzcGFuPkRlZmF1bHQ8YiBjbGFzcz1cImRcIj5idXR0b248L2I+dGV4dDwvc3Bhbj48L2Rpdj4nO1xuXG5cdGxldCB0aW1lciA9IG51bGw7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIFNjcmlwdCB0YWdcblx0XHQgKi9cblx0XHRsZXQgdGV4dDEgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCB0ZXh0MiA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQzID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgaXRlbXMgPSBvYnNlcnZhYmxlKEFycmF5LmZyb20oeyBsZW5ndGg6IDEgfSwgKF8sIGkpID0+IGkpKTtcblxuXHRcdGxldCBjID0gY29tcHV0ZWQodGV4dDEsICgpID0+IHtcblx0XHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdFx0dGV4dDEodGV4dDEoKSArIDEpO1xuXHRcdH1cblxuXHRcdGNsZWFySW50ZXJ2YWwodGltZXIpO1xuXHRcdHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0dGV4dDIodGV4dDIoKSArIDEpO1xuXHRcdH0sIDUwMCk7XG5cblx0XHQvLyBpZighcmVuZGVyKSB7XG5cdFx0Ly8gXHR0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRcdGl0ZW1zKEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSkpO1xuXHRcdC8vIFx0fSwgMTAwMClcblx0XHQvLyB9XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdF9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcblx0XHRcdFwic3R5bGVcIjogMSxcblx0XHRcdFwiZGF0YS0xXCI6IHtcblx0XHRcdFx0dGVzdDogdGV4dDFcblx0XHRcdH0sXG5cdFx0XHRcImRhdGEtMlwiOiB0ZXh0MSxcblx0XHRcdFwiY2xhc3NcIjogY29tcHV0ZWQoW3RleHQxLCB0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIFt0ZXh0MSgpLCB7XG5cdFx0XHRcdFx0c29tZTogdGV4dDIoKSA9PT0gMlxuXHRcdFx0XHR9LCB0aW1lXTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxMyA9IF9lYWNoJChfZWwkMywgaXRlbXMsIChpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0cmV0dXJuICd0ZXh0LScgKyBpdGVtMSArIHRleHQxKCk7XG5cdFx0fSwgKG5vZGUsIHJlbmRlciwgX2tleUV4cHIkLCBpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0bGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0X2VsJDUuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgJ3RleHQtJyArIGl0ZW0xICsgdGV4dDEoKSk7XG5cdFx0XHR9KTtcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ1LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGlja1wiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdHN1YnNjcmliZShbdGV4dDFdLCAoKSA9PiB7XG5cdFx0XHRcdF9lbCQ2Lm5vZGVWYWx1ZSA9IGBTb21lIHRlc3QgdGV4dCAke3RleHQxKCl9IGFmdGVyYDtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlRXZlbnRzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMTQgPSBfZWwkMTMubmV4dFNpYmxpbmc7XG5cdFx0bGV0IF9lbCQxNSA9IF9lbCQxNC5maXJzdENoaWxkO1xuXHRcdHN1YnNjcmliZShbdGV4dDJdLCAoKSA9PiB7XG5cdFx0XHRfZWwkMTUubm9kZVZhbHVlID0gYCR7dGV4dDIoKX1gO1xuXHRcdH0pO1xuXHRcdHJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyO1xuXHR9XG5cblxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGF5b3V0LmFwcGVuZENoaWxkKG1ha2VDb21wb25lbnQoKSk7XG5cdHRpbWUoJ3JlbmRlcicpO1xuXG5cdHJldHVybjtcblxuXG5cblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0bGV0IHRtcCA9IGxheW91dC5pbm5lckhUTUw7XG5cdFx0bGF5b3V0LmlubmVySFRNTCA9IHRtcDtcblxuXHRcdHRpbWUoJ2h5ZHJhdGUnKTtcblx0XHRtYWtlQ29tcG9uZW50KG51bGwsIGxheW91dC5maXJzdENoaWxkKVxuXHRcdHRpbWUoJ2h5ZHJhdGUnKTtcblx0fSwgMjAwMClcblx0Ly8gY29uc29sZS5sb2cobGF5b3V0LmlubmVySFRNTCk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0MlxuXHRcdEBlYWNoKDEpXG5cdFx0YXNkYXNkXG5cdFx0PHNsb3Q+ZGVmYXVsdCB0ZXh0IGZvciBzbG90PGIgY2xhc3M9XCJkXCI+MTwvYj48L3Nsb3Q+XG5cdFx0QGVuZGVhY2hcblx0XHQzXG5cdFx0QGVsc2UgXG5cdFx0YXNkXG5cdEBlbmRpZlxuXHRlbmRcblx0YDtcblxuXHRodG1sID0gYFxuXHQ8ZGl2IGNsYXNzPVwiMlwiIDpzdHlsZT1cIjFcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH0sIHRpbWVdXCIgOnByb3AxPVwiMTIzXCI+XG5cdFx0QGVhY2goKGl0ZW0xLCBrZXkxKSBpbiBpdGVtcylcblx0XHQ8dGVtcGxhdGUgOmtleT1cIid0ZXh0LScgKyBpdGVtMSArIHRleHQxXCI+XG5cdFx0XHQ8ZGl2IEBjbGljaz1cIm1ldGhvZDFcIiBAbW91c2Vkb3duPVwibWV0aG9kMShldmVudClcIj5cblx0XHRcdFx0U29tZSB0ZXN0IHRleHQgXFwkeyB0ZXh0MSB9IGFmdGVyXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25cIiBAbW91c2Vkb3duPVwiYWxlcnQoMilcIj5cblx0XHRcdFx0PHNsb3Q+RGVmYXVsdCA8YiBjbGFzcz1cImRcIj5idXR0b248L2I+IHRleHQ8L3Nsb3Q+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3RlbXBsYXRlPlxuXHRcdEBlbmRlYWNoXG5cdFx0PGRpdiBjbGFzcz1cIlRlc3RcIj5cXCR7IHRleHQyIH08L2Rpdj5cblx0PC9kaXY+XG5cblx0PHNjcmlwdD5cblx0bGV0IHRleHQxID0gJG8oMSk7XG5cdGxldCB0ZXh0MiA9ICRvKDEpO1xuXHRsZXQgdGV4dDMgPSAkbygxKTtcblx0bGV0IGl0ZW1zID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSk7XG5cdGxldCB0aW1lID0gMTIzNTtcblxuXHRsZXQgYyA9ICgpID0+IHtcblx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHR9XG5cblx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRsZXQgZCA9IHRleHQyKCk7XG5cblx0XHRsZXQgdGV4dDEgPSAnc29tZSc7XG5cblx0XHR0ZXh0MTtcblx0fVxuXHQ8L3NjcmlwdD5cblx0YFxuXHRsZXQgYmxvY2tzID0gcGFyc2UoaHRtbCk7XG5cblx0cmV0dXJuIGNvbXBpbGUoYmxvY2tzKTtcblx0Ly8gY29uc29sZS5sb2coaHRtbCk7XG59XG4iLCJsZXQgdGltZXMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGltZShuYW1lKVxue1xuXHRsZXQgbm93ID0gKG5ldyBEYXRlKS5nZXRUaW1lKCk7XG5cblx0aWYodHlwZW9mIHRpbWVzW25hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdHRpbWVzW25hbWVdID0gbm93O1xuXHRcdHJldHVybiB0aW1lc1tuYW1lXTtcblx0fVxuXG5cdGNvbnNvbGUubG9nKGBbIHRiICR7bmFtZX0gXWAsIG5vdyAtIHRpbWVzW25hbWVdLCAnbXMnKTtcblxuXHRkZWxldGUgdGltZXNbbmFtZV07XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9