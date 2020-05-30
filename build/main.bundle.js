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

  var parent = bindNode; // if(render) {

  parent = bindNode.parentNode; //document.createDocumentFragment();
  // }?

  var endMarkNode = bindNode; //add(parent, '');

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

      if (node) {
        if (node.getAttribute('data-key') == itemKey) {
          node = expr(node, false, keyExpr, item, itemKey);
          node = node.nextSibling;
        }
      }

      defaultA[itemKey] = item;
      addNode(item, itemKey, 1, node);
    }

    endMarkNode = node;
    console.log(endMarkNode);
  } else {// bindNode.remove();
  }

  var endMark = endMarkNode;
  var unsubscribe = (0, _observable.subscribe)(items, function (a) {
    var b = (0, _observable.value)(items); // return computed(() => {

    toRemove.clear(); // Array.from to make a copy of the current list.

    var content = Array.from((0, _diff.diff)(endMark.parentNode, a || defaultA, b, keyExpr, addNode, endMark)); // for (var i = 0; i < context._children.length; i++) {
    // 	console.log(i, context._children[i].hid, context._children[i]._state.s1(), context._children[i]._props.pt)
    // }
    // console.log(toRemove);
    // toRemove.forEach(dispose);

    return content; // });
  });

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
  var fragOrNode = frag(value) || value;
  console.log(parent, value); // If endMark is `null`, value will be added to the end of the list.

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
    var items = Array.from({
      length: 3
    }, function (_, i) {
      return i;
    });
    var time = 1235;
    var c = (0, _observable.computed)(text1, function () {
      return time + text1;
    });

    function method1() {
      console.log('test');
    }
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

    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  (0, _time.default)('render');
  layout.appendChild(makeComponent());
  (0, _time.default)('render'); // return;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsImRhdGEiLCJkZXBzIiwiY29udGV4dCIsIm9ic2VydmFibGVzIiwidmFycyIsIm1ldGhvZHMiLCJjb250ZXh0U3RhY2siLCJpc1ZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJpZCIsInBhdGgiLCJ2YWx1ZSIsImdldENvbnRleHQiLCJpc1N1YkNvbnRleHQiLCJleGl0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiY2xvc2VDb250ZXh0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIklkZW50aWZpZXIiLCJWYXJpYWJsZUNvdW50ZXIiLCJUZW1wbGF0ZXMiLCJjb2RlQW5hbHlzZSIsImJsb2NrcyIsImR5bmFtaWNFeHByZXNzaW9ucyIsInRlbXBsYXRlIiwicHJvZ3JhbSIsImNvZGUiLCJpIiwidHBsIiwiaW5kZXgiLCJpbml0IiwiTGFzdFZhcmlhYmxlSWQiLCJnZXRMYXN0VmFyaWFibGVJZCIsImdldEN1cnJlbnRDb250ZXh0IiwiQWN0aW9uIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0b3IiLCJzZXRMYXN0VmFyaWFibGVJZCIsImVudGl0eSIsImJvZHkiLCJvcHRpb25zIiwicmVtb3ZlQ29udGV4dCIsImNyZWF0ZVZhcmlhYmxlIiwiY3JlYXRlVGVtcGxhdGUiLCJkeW5hbWljIiwiaGFuZGxlIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwicmVuZGVyIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzIiwiYXJncyIsInJlc3VsdCIsIm1ha2VTdHJpbmciLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50IiwicHJvcHMiLCJtYWtlQ29tcHV0ZWQiLCJvYmplY3RQcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiY2FsbEV4cHJlc3Npb24iLCJvYmplY3RFeHByZXNzaW9uIiwibWFrZUZ1bmN0aW9uIiwiaXNFeHByZXNzaW9uIiwiYXR0cnMiLCJldmVudHMiLCJzdHJpbmciLCJhcnJvd0Z1bmN0aW9uIiwic2V0QXR0ciIsImNvbnNvbGUiLCJUeXBlIiwibWFrZVN1YnNjcmliZSIsIm1lbWJlckV4cHJlc3Npb24iLCJjb250ZW50IiwiYXJyYXlFeHByZXNzaW9uIiwiYXNzaWdubWVudEV4cHJlc3Npb24iLCJUTVBfSURFTlRJRklFUiIsImZuIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwic3RhdGVmdWxDb3VudGVyIiwiaWRlbnRpZmllcnNDb3VudGVyIiwic2hvdWxkV3JhcCIsImV4cHIiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJtYXRjaCIsImtleSIsImZpbmRLZXkiLCJjaGlsZCIsInBhcmFtcyIsImxvb3AiLCJwYXJzZUVhY2hDb25kaXRpb24iLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImJpbmROb2RlIiwiZW5kTWFya05vZGUiLCJkaXNwb3NlcnMiLCJub2RlcyIsInRvUmVtb3ZlIiwiZGVmYXVsdEEiLCJfaXRlbXMiLCJub2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJhZGROb2RlIiwiZW5kTWFyayIsInVuc3Vic2NyaWJlIiwiQXJyYXkiLCJlbCIsIm5vZGVLZXkiLCJuIiwiY2hpbGROb2RlcyIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwiZG9jdW1lbnQiLCJzdGFydE5vZGUiLCJub2RlVHlwZSIsImRpZmZhYmxlIiwib3BlcmF0aW9uIiwicmVtb3ZlTm9kZXMiLCJwZXJzaXN0ZW50IiwiZnJhZ21lbnQiLCJsZW5ndGgiLCJfZmlyc3RDaGlsZCIsIl9sYXN0Q2hpbGQiLCJfdmFsdWVPZiIsImFyZ3VtZW50cyIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwiZGVwIiwiaXNBdHRyIiwiaXNEb21BdHRyIiwiaXNSb290QXR0ciIsImF0dHJpYnV0ZXMiLCJzdGF0aWNBdHRycyIsIm9iaiIsIm1ha2VWYWx1ZSIsInJlZ2V4cCIsIm1hdGNoZXMiLCJwYXJzZUJsb2NrcyIsInNjcmlwdCIsInN0eWxlIiwiaHRtbCIsInN0YWNrIiwiRXhwcmVzc2lvbiIsInR5cGUiLCJwYXJzZSIsIkhUTUxQYXJzZXIiLCJvbm9wZW50YWciLCJjdXJyZW50U3RhY2tOb2RlIiwiU2xvdCIsIkNvbXBvbmVudCIsIk5vZGUiLCJvbnRleHQiLCJ0ZXh0IiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJ0YWciLCJtYWtlVGVtcGxhdGUiLCJtYXAiLCJhZGRDaGlsZCIsInJ1bGVzIiwiaXNUZW1wbGF0ZSIsImhhc0Fsb25lVGVtcGxhdGUiLCJhbG9uZSIsInNraXBJbml0Iiwib25seUNoaWxkcmVuIiwiY2hpbGRUZW1wbGF0ZSIsIkhUTUxUYWdzIiwibGlzdCIsInN0ciIsImV4cGVjdHNMb3dlckNhc2UiLCJ2YWwiLCJ0ZXN0IiwiZ2V0Tm9kZSIsImNsb25lTm9kZSIsInBhcnNlQ29udGV4dCIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIiRzbG90cyIsIl9tYWtlQXR0cnMkIiwiX21ha2VFdmVudHMkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zbG90JCIsImNhbGxiYWNrIiwiaW5uZXJIVE1MIiwiX3N0YXRlbWVudCQiLCJyZXR1cm5Ob2RlIiwicmVwbGFjZVdpdGgiLCJfdHBsJDEiLCJjcmVhdGVFbGVtZW50IiwiX3RwbCQyIiwibWFrZUNvbXBvbmVudCIsInRleHQxIiwidGV4dDIiLCJ0ZXh0MyIsIml0ZW1zIiwiZnJvbSIsIl8iLCJ0aW1lIiwiYyIsIm1ldGhvZDEiLCJsb2ciLCJfZWwkMSIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsInNvbWUiLCJfZWwkMyIsIl9lbCQxMyIsIml0ZW0xIiwia2V5MSIsIl9lbCQ0IiwiX2VsJDUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIl9lbCQ2Iiwibm9kZVZhbHVlIiwiX2VsJDciLCJuZXh0U2libGluZyIsImFsZXJ0IiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJ0bXAiLCJnZXR0IiwidGltZXMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyx5QkFDUDtBQUNDLE1BQU1BLEdBQUcsR0FBRyxNQUFNLENBQU4sY0FBcUI7QUFDaENDLGNBQVUsRUFEc0I7QUFFaENDLGNBQVUsRUFBRTtBQUZvQixHQUFyQixDQUFaO0FBS0EsTUFBSUMsSUFBSSxHQUFHLG9CQUFYLEdBQVcsQ0FBWDtBQUNBLE1BQUlDLElBQUksR0FBRyw4QkFBa0JELElBQUksQ0FBakMsV0FBVyxDQUFYO0FBRUEsU0FBTztBQUNORSxXQUFPLEVBREQ7QUFFTkQsUUFBSSxFQUFFQTtBQUZBLEdBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFTyxzQkFDUDtBQUNDLE1BQUlELElBQUksR0FBRztBQUNWRyxlQUFXLEVBREQ7QUFFVkMsUUFBSSxFQUZNO0FBR1ZDLFdBQU8sRUFBRTtBQUhDLEdBQVg7QUFNQSxNQUFJQyxZQUFZLEdBQWhCO0FBQ0EsTUFBSUMscUJBQXFCLEdBQXpCOztBQUVBLDBCQUF3QjtBQUN2QixXQUFPRCxZQUFZLENBQVpBLFNBQVA7QUFDQTs7QUFFRCwrQkFDQTtBQUNDQSxnQkFBWSxDQUFaQSxLQUFrQjtBQUNqQkUsVUFBSSxFQURhO0FBRWpCSixVQUFJLEVBQUU7QUFGVyxLQUFsQkU7QUFJQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlKLE9BQU8sR0FBR0ksWUFBWSxDQUExQixHQUFjQSxFQUFkO0FBQ0E7O0FBRUQsd0JBQ0E7QUFDQyxXQUFPQSxZQUFZLENBQUNBLFlBQVksQ0FBWkEsU0FBcEIsQ0FBbUIsQ0FBbkI7QUFDQTs7QUFFRCw4QkFBYztBQUViRyxzQkFBa0IsRUFBRTtBQUNuQkMsV0FEbUIsdUJBRW5CO0FBQ0NILDZCQUFxQixHQUFyQkE7QUFFQSxZQUFJSSxFQUFFLEdBQUdDLElBQUksQ0FBSkEsS0FBVDtBQUNBLFlBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFKQSxLQUFaO0FBQ0EsWUFBSVYsT0FBTyxHQUFHWSxVQUFkOztBQUVBLFlBQUdDLFlBQVksTUFBTUYsS0FBSyxLQUExQixNQUFxQztBQUNwQ1gsaUJBQU8sQ0FBUEEsVUFBa0JTLEVBQUUsQ0FBcEJUO0FBQ0E7QUFDQTs7QUFFRCxZQUFHVyxLQUFLLENBQUxBLDZCQUFtQ0EsS0FBSyxDQUFMQSxnQkFBdEMsTUFBa0U7QUFDakViLGNBQUksQ0FBSkEsaUJBQXNCVyxFQUFFLENBQXhCWDtBQURELGVBRU8sSUFBRywyREFBMkRhLEtBQUssQ0FBbkUsSUFBRyxDQUFILEVBQTJFO0FBQ2pGYixjQUFJLENBQUpBLGlCQUFzQlcsRUFBRSxDQUF4Qlg7QUFETSxlQUVBO0FBQ05BLGNBQUksQ0FBSkEsVUFBZVcsRUFBRSxDQUFqQlg7QUFDQTtBQXBCaUI7QUFzQmhCZ0IsVUF0QmdCLGtCQXNCVDtBQUNOVCw2QkFBcUIsR0FBckJBO0FBQ0E7QUF4QmUsS0FGUDtBQTRCYlUsMkJBQXVCLEVBQUU7QUFDeEJQLFdBRHdCLHVCQUV4QjtBQUNDLG1DQUEwQjtBQUMxQlEscUJBQWEsQ0FBQ04sSUFBSSxDQUFKQSxhQUFkTSxJQUFhLENBQWJBO0FBSnVCO0FBTXJCRixVQU5xQixzQkFPckI7QUFDQyxtQ0FBMEI7QUFDMUJHLG9CQUFZO0FBQ1o7QUFWb0IsS0E1Qlo7QUF3Q2JDLHVCQUFtQixFQUFFO0FBQ3BCVixXQURvQix1QkFFcEI7QUFDQyxtQ0FBMEI7QUFDMUJWLFlBQUksQ0FBSkEsYUFBa0JZLElBQUksQ0FBSkEsUUFBbEJaO0FBQ0FrQixxQkFBYSxDQUFDTixJQUFJLENBQUpBLFFBQWRNLElBQWEsQ0FBYkE7QUFMbUI7QUFPakJGLFVBUGlCLHNCQVFqQjtBQUNDLG1DQUEwQjtBQUMxQkcsb0JBQVk7QUFDWjtBQVhnQjtBQXhDUixHQUFkO0FBdURBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGRDs7Ozs7Ozs7QUFFTyx3Q0FDUDtBQUFBLE1BRGtDaEIsV0FDbEM7QUFEa0NBLGVBQ2xDLEdBRGdELEVBQWRBO0FBQ2xDOztBQUNDLE1BQUlGLElBQUksR0FBUjtBQUVBLE1BQUlLLFlBQVksR0FBaEI7QUFDQSxNQUFJQyxxQkFBcUIsR0FBekI7O0FBRUEsMEJBQXdCO0FBQ3ZCLFdBQU9ELFlBQVksQ0FBWkEsU0FBUDtBQUNBOztBQUVELCtCQUNBO0FBQ0NBLGdCQUFZLENBQVpBLEtBQWtCO0FBQ2pCRSxVQUFJLEVBRGE7QUFFakJKLFVBQUksRUFGYTtBQUdqQkgsVUFBSSxFQUFFO0FBSFcsS0FBbEJLO0FBS0E7O0FBRUQsMEJBQ0E7QUFDQyxRQUFJSixPQUFPLEdBQUdJLFlBQVksQ0FBMUIsR0FBY0EsRUFBZDtBQUNBTCxRQUFJLENBQUNDLE9BQU8sQ0FBWkQsSUFBSSxDQUFKQSxHQUFxQkMsT0FBTyxDQUE1QkQ7QUFDQTs7QUFFRCx3QkFDQTtBQUNDLFdBQU9LLFlBQVksQ0FBQ0EsWUFBWSxDQUFaQSxTQUFwQixDQUFtQixDQUFuQjtBQUNBOztBQUVELDhCQUFjO0FBRWJlLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSVIsT0FBTyxHQUFHWSxVQUFkO0FBQ0EsWUFBSU4sSUFBSSxHQUFHSSxJQUFJLENBQUpBLEtBQVg7O0FBRUEsWUFBRyxDQUFDRyxZQUFKLElBQW9CO0FBQ25CO0FBQ0E7O0FBRUQsWUFBRyxDQUFDYixPQUFPLENBQVBBLGNBQUQsSUFBQ0EsQ0FBRCxJQUFnQ0MsV0FBVyxDQUFYQSxTQUFuQyxJQUFtQ0EsQ0FBbkMsRUFBK0Q7QUFDOURELGlCQUFPLENBQVBBO0FBQ0E7QUFDRDtBQWJVLEtBRkM7QUFrQmJPLHNCQUFrQixFQUFFO0FBQ25CQyxXQURtQix1QkFFbkI7QUFDQ0gsNkJBQXFCLEdBQXJCQTtBQUVBLFlBQUlJLEVBQUUsR0FBR0MsSUFBSSxDQUFKQSxLQUFUO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUpBLEtBQVo7QUFDQSxZQUFJVixPQUFPLEdBQUdZLFVBQWQ7O0FBRUEsWUFBR0MsWUFBWSxNQUFNRixLQUFLLEtBQTFCLE1BQXFDO0FBQ3BDWCxpQkFBTyxDQUFQQSxVQUFrQlMsRUFBRSxDQUFwQlQ7QUFDQTtBQUNBO0FBWmlCO0FBY2hCYyxVQWRnQixrQkFjVDtBQUNOVCw2QkFBcUIsR0FBckJBO0FBQ0E7QUFoQmUsS0FsQlA7QUFvQ2JVLDJCQUF1QixFQUFFO0FBQ3hCUCxXQUR3Qix1QkFFeEI7QUFDQyxtQ0FBMEI7QUFDMUJRLHFCQUFhLENBQUNOLElBQUksQ0FBSkEsYUFBZE0sSUFBYSxDQUFiQTtBQUp1QjtBQU1yQkYsVUFOcUIsc0JBT3JCO0FBQ0YsbUNBQTBCO0FBQ3ZCRyxvQkFBWTtBQUNaO0FBVm9CLEtBcENaO0FBZ0RiQyx1QkFBbUIsRUFBRTtBQUNwQlYsV0FEb0IsdUJBRXBCO0FBQ0MsbUNBQTBCO0FBQzFCUSxxQkFBYSxDQUFDTixJQUFJLENBQUpBLFFBQWRNLElBQWEsQ0FBYkE7QUFKbUI7QUFNakJGLFVBTmlCLHNCQU9qQjtBQUNDLG1DQUEwQjtBQUMxQkcsb0JBQVk7QUFDWjtBQVZnQjtBQWhEUixHQUFkO0FBOERBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdEOztBQUNBLGdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFHTyx5QkFDUDtBQUNDLE1BQUlHLGVBQWUsR0FBbkI7QUFDQSxNQUFJaEIsWUFBWSxHQUFoQjtBQUVBOzs7OztBQUlBLE1BQUlpQixTQUFTLEdBQUcsSUFBaEIsR0FBZ0IsRUFBaEI7QUFFQSxNQUFJQyxXQUFXLEdBQUcsdUJBQVFDLE1BQU0sQ0FBaEMsTUFBa0IsQ0FBbEI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxzQkFYMUIsV0FXMEIsQ0FBekIsQ0FYRCxDQVlDOztBQUVBLG1DQUNBO0FBQ0MsUUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQVBBLGFBQWYsSUFBZUEsQ0FBZjtBQUVBTCxhQUFTLENBQVRBO0FBRUEsV0FBTyxpQ0FBWUEsU0FBUyxDQUE1QixJQUFPLENBQVA7QUFDQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlNLElBQUksR0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBTDs7QUFFQSwwR0FBMEI7QUFBQSxVQUFsQkMsR0FBa0I7QUFDekIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUgsVUFBSSwwQkFBSkE7QUFDQUEsVUFBSSwrQ0FBSkE7QUFDQTs7QUFFRDtBQUNBO0FBRUQ7Ozs7Ozs7QUFLQSwrQkFDQTtBQUFBLFFBRHVCSSxJQUN2QjtBQUR1QkEsVUFDdkIsR0FEOEIsS0FBUEE7QUFDdkI7O0FBQ0MsV0FBTyxZQUFZLENBQVosS0FBa0I7QUFDeEJDLG9CQUFjLEVBQUVELElBQUksR0FBRyx1QkFBSCxNQUFHLENBQUgsR0FBZ0JFLGlCQUFpQjtBQUQ3QixLQUFsQixDQUFQO0FBR0E7O0FBRUQsK0JBQ0E7QUFDQyxXQUFPN0IsWUFBWSxDQUFDQSxZQUFZLENBQVpBLFNBQXBCLENBQW1CLENBQW5CO0FBQ0E7O0FBRUQsMkJBQ0E7QUFDQ0EsZ0JBQVksQ0FBWkE7QUFDQTs7QUFFRCwrQkFDQTtBQUNDLFdBQU84QixpQkFBaUIsR0FBeEI7QUFDQTs7QUFFRCxvQ0FDQTtBQUNDQSxxQkFBaUIsR0FBakJBO0FBQ0E7O0FBRUQsMkNBQ0E7QUFBQSxRQUR3QmxDLE9BQ3hCO0FBRHdCQSxhQUN4QixHQURrQyxJQUFWQTtBQUN4Qjs7QUFBQSxRQUR3Q21DLE1BQ3hDO0FBRHdDQSxZQUN4QyxHQURpRDtBQUFBO0FBQ2pELE9BRHdDQTtBQUN4Qzs7QUFDQyxRQUFJN0IsSUFBSSxHQUFHLGdDQUFXLEVBQXRCLGVBQVcsQ0FBWDtBQUVBLFFBQUk4QixnQkFBZ0IsR0FBR0QsTUFBTSxPQUFPRixpQkFBcEMsRUFBNkIsQ0FBN0I7QUFFQSxRQUFJdEIsS0FBSyxHQUFHLElBQUkwQixPQUFKLDJCQUErQixDQUMxQyxJQUFJQyxPQUFKLHlCQURELGdCQUNDLENBRDBDLENBQS9CLENBQVo7QUFPQUMscUJBQWlCLENBQWpCQSxJQUFpQixDQUFqQkE7QUFFQSxXQUFPO0FBQ05qQyxVQUFJLEVBREU7QUFFTkssV0FBSyxFQUFMQTtBQUZNLEtBQVA7QUFJQTtBQUVEOzs7Ozs7QUFJQSxNQUFJNkIsTUFBTSxHQUFHakIsTUFBTSxDQUFuQjtBQUNBLE1BQUlrQixJQUFJLEdBQVI7QUFFQSxNQUFJQyxPQUFPLEdBQUc7QUFDYjFCLGlCQUFhLEVBREE7QUFFYjJCLGlCQUFhLEVBRkE7QUFHYkMsa0JBQWMsRUFIRDtBQUliWCxxQkFBaUIsRUFKSjtBQUtiWSxrQkFBYyxFQUxEO0FBTWJDLFdBQU8sRUFBRXRCO0FBTkksR0FBZDs7QUFTQSwwQkFDQTtBQUNDZ0IsVUFBTSxDQUFOQTtBQUNBOztBQUVEeEIsZUFBYSxDQUFiQSxJQUFhLENBQWJBO0FBQ0EsZUFBYTtBQUFBLFdBQVUrQixNQUFNLENBQWhCLElBQWdCLENBQWhCO0FBQWI7QUFFQTs7Ozs7QUFJQSxNQUFJcEIsSUFBSSxHQUFHLHdCQUFTLDhCQUFULFFBQVMsQ0FBVCxFQUlSO0FBQ0ZxQixlQUFXLEVBRFQ7QUFFRkMsV0FBTyxFQUZMO0FBR0ZDLFlBQVEsRUFITjtBQUlGQyxXQUFPLEVBSkw7QUFLRkMsVUFBTSxFQUFFO0FBTE4sR0FKUSxDQUFYO0FBWUEsU0FBTztBQUNOQyxVQUFNLEVBQUUxQixJQUFJLENBRE47QUFFTjJCLGFBQVMsRUFBRUMsWUFBWTtBQUZqQixHQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLRDs7QUFlQTs7QUFFTyxzREFDUDtBQUFBLHdCQURnQzVDLEtBQ2hDO0FBQUEsTUFEZ0NBLEtBQ2hDLDJCQUR3QyxFQUN4QztBQUFBLHVCQUQ0QzZDLElBQzVDO0FBQUEsTUFENENBLElBQzVDLDBCQURtRCxFQUNuRDtBQUNDLE1BQUlDLE1BQU0sR0FBRyxzQkFBVSxLQUFWLGdCQUErQkMsT0FEN0MsVUFDYyxDQUFiLENBREQsQ0FHQzs7QUFDQSxTQUFPLElBQUlDLE9BQUosd0JBQ04sSUFBSSxDQUFKLElBQVMsZ0JBQUk7QUFBQSxXQUFJLHVCQUFKLElBQUksQ0FBSjtBQURQLEdBQ04sQ0FETSxFQUVOLElBQUlDLE9BQUosZUFBbUIsQ0FDbEIsSUFBSUMsT0FBSixnQkFBb0JKLE1BQU0sQ0FINUIsT0FHRSxDQURrQixDQUFuQixDQUZNLENBQVA7QUFNQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJEOztBQVlBOztBQUVPLGdEQUNQO0FBQ0MsTUFBR2pCLE1BQU0sQ0FBTkEsc0JBQUgsV0FBMkM7QUFDMUM7QUFDQTs7QUFFRCxNQUFJc0IsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQnRCLE1BQU0sQ0FBTkEsT0FBaEIsWUFBMEM7QUFDekMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxrQkFBeEIsSUFBd0JBLENBQXhCLEVBQXdEdUIsT0FBcEUsWUFBWSxDQUFaO0FBRUFELFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsSUFDQyxDQURELEVBRERGLEtBQ0MsQ0FEREE7QUFNQTs7QUFFRCxNQUFHQSxLQUFLLENBQUxBLFdBQUgsR0FBdUI7QUFDdEI7QUFDQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUNDLHVCQURELGFBQ0MsQ0FERCxFQUNvQixRQUVsQix1QkFGa0IsUUFFbEIsQ0FGa0IsRUFHbEIsSUFBSUMsT0FBSixpQkFMSCxLQUtHLENBSGtCLENBRHBCLENBRGdCLENBQWpCO0FBVUFwRSxTQUFPLENBQVBBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDs7QUFZQTs7QUFFTyxpREFDUDtBQUNDLE1BQUd3QyxNQUFNLENBQU5BLFdBQUgsV0FBZ0M7QUFDL0I7QUFDQTs7QUFFRCxNQUFJc0IsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQnRCLE1BQU0sQ0FBTkEsT0FBaEIsUUFBc0M7QUFDckMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxjQUF4QixJQUF3QkEsQ0FBeEIsRUFBb0Q2QixPQUFoRSxZQUFZLENBQVo7QUFFQVAsU0FBSyxDQUFMQSxLQUNDLElBQUlFLE9BQUosZUFDQywwQkFERCxJQUNDLENBREQsRUFEREYsS0FDQyxDQUREQTtBQU1BOztBQUVELE1BQUdBLEtBQUssQ0FBTEEsV0FBSCxHQUF1QjtBQUN0QjtBQUNBOztBQUVELE1BQUlHLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsY0FDQyxDQURELEVBQ3FCLFFBRW5CLHVCQUZtQixRQUVuQixDQUZtQixFQUduQixJQUFJQyxPQUFKLGlCQUxILEtBS0csQ0FIbUIsQ0FEckIsQ0FEZ0IsQ0FBakI7QUFVQXBFLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREOztBQWVBOztBQUVPLG9EQUNQO0FBQ0MsTUFBRyxpQkFBSCxVQUE4QjtBQUM3QlcsU0FBSyxHQUFHO0FBQ1AyRCxrQkFBWSxFQURMO0FBRVAzRCxXQUFLLEVBQUVBO0FBRkEsS0FBUkE7QUFJQTs7QUFFRCxNQUFJOEMsTUFBTSxHQUFHLHNCQUFVLEtBQVYsZ0JBQStCTSxPQVI3QyxZQVFjLENBQWIsQ0FSRCxDQVVDOztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSxtRyxDQUVBOzs7QUFFZSwwQkFDZjtBQUNDLFNBQU87QUFDTlEsU0FBSyxFQUFFQSxrQkFERCxPQUNDQSxDQUREO0FBRU5DLFVBQU0sRUFBRUEsb0JBRkYsT0FFRUEsQ0FGRjtBQUdOVixTQUFLLEVBQUVBLGtCQUhELE9BR0NBLENBSEQ7QUFJTlcsVUFBTSxFQUFFQSxvQkFKRixPQUlFQSxDQUpGO0FBS05SLGNBQVUsRUFBRUEsNEJBTE4sT0FLTUEsQ0FMTjtBQU1OUyxpQkFBYSxFQUFFQSxrQ0FOVCxPQU1TQSxDQU5UO0FBT05DLFdBQU8sRUFBRUE7QUFQSCxHQUFQO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDs7QUFZQTs7QUFFTyxnREFDUDtBQUNDLE1BQUduQyxNQUFNLENBQU5BLHNCQUFILFdBQTJDO0FBQzFDO0FBQ0E7O0FBRUQsT0FBSSxJQUFKLFFBQWdCQSxNQUFNLENBQU5BLE9BQWhCLFlBQTBDO0FBQ3pDLFFBQUk3QixLQUFLLEdBQUcsc0JBQVU2QixNQUFNLENBQU5BLGtCQUF0QixJQUFzQkEsQ0FBVixDQUFaO0FBQ0E7O0FBR0RvQyxTQUFPLENBQVBBLEtBQWFwQyxNQUFNLENBQU5BLE9BQWJvQztBQUVBO0FBRUEsTUFBSWQsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixPQUFlLEtBQWYsT0FBMkI7QUFDMUJBLFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsR0FDQyxDQURELEVBRUMsMEJBQWMsV0FIaEJGLEdBR2dCLENBQWQsQ0FGRCxDQUREQTtBQU1BOztBQUVELE1BQUlHLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsYUFDQyxDQURELEVBQ29CLFFBRWxCLHVCQUZrQixRQUVsQixDQUZrQixFQUdsQixJQUFJQyxPQUFKLGlCQUxILEtBS0csQ0FIa0IsQ0FEcEIsQ0FEZ0IsQ0FBakI7QUFVQXBFLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREOztBQWVBOztBQUVPLGdEQUNQO0FBQUEsdUJBRDBCTSxJQUMxQjtBQUFBLE1BRDBCQSxJQUMxQiwwQkFEaUMsS0FDakM7QUFBQSxNQUR3Q3VFLElBQ3hDLFFBRHdDQSxJQUN4Qzs7QUFDQyxNQUFHQSxJQUFJLENBQUpBLGlCQUFILFdBQW9DO0FBQ25DO0FBQ0E7O0FBRUQsTUFBSWxFLEtBQUssR0FBR2tFLElBQUksQ0FBSkEsT0FBWixJQUFZQSxDQUFaO0FBQ0EsTUFBSXBCLE1BQU0sR0FBRyxzQkFBVSxLQUFWLGdCQUErQnFCLE9BQTVDLGFBQWEsQ0FBYjtBQUVBLE1BQUliLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsSUFBSVksT0FBSix3QkFFQyx1QkFIRixjQUdFLENBRkQsQ0FERCxFQUtDLENBQ0Msb0NBREQsSUFDQyxDQURELEVBRUN0QixNQUFNLENBUlQsSUFNRSxDQUxELENBRGdCLENBQWpCOztBQWFBLE1BQUdBLE1BQU0sQ0FBVCxZQUFzQjtBQUNyQlEsY0FBVSxHQUFHLElBQUlDLE9BQUosb0JBQ1osSUFBSUMsT0FBSixlQUNDLHVCQURELFdBQ0MsQ0FERCxFQUVDLENBQ0NWLE1BQU0sQ0FEUCxNQUVDLElBQUlFLE9BQUosNEJBQ0MsSUFBSUMsT0FBSixlQUFtQixDQU52QkssVUFNdUIsQ0FBbkIsQ0FERCxDQUZELENBRkQsQ0FEWSxDQUFiQTtBQWFBOztBQUVEakUsU0FBTyxDQUFQQSxLQXJDRCxVQXFDQ0EsRUFyQ0QsQ0F1Q0M7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7O0FBZUE7O0FBRU8saURBQ1A7QUFDQyxNQUFHd0MsTUFBTSxDQUFOQSxVQUFILFdBQStCO0FBQzlCO0FBQ0E7O0FBRUQsTUFBSThCLFlBQVksR0FBRzlCLE1BQU0sQ0FBTkEsNkJBQW5COztBQUVBLE1BQUcsQ0FBSCxjQUFrQjtBQUNqQjtBQUNBOztBQVRGLG1CQVd5QixzQkFBVSxLQUFWLFNBQXdCO0FBQy9DOEIsZ0JBQVksRUFEbUM7QUFFL0MzRCxTQUFLLFFBQVE2QixNQUFNLENBQWQ7QUFGMEMsR0FBeEIsRUFHckJrQixPQWRKLFVBV3lCLENBWHpCO0FBQUEsTUFXTzNELElBWFA7QUFBQSxNQVdhaUYsT0FYYjs7QUFnQkNqRixNQUFJLEdBQUcsSUFBSWtGLE9BQUosZ0JBQW9CLElBQUksQ0FBSixJQUFTLGdCQUFVO0FBQzdDLFdBQU8sdUJBQVAsSUFBTyxDQUFQO0FBRERsRixHQUEyQixDQUFwQixDQUFQQTtBQUtBLE1BQUkwQyxJQUFJLEdBQUcsSUFBSWtCLE9BQUosNEJBQ1YsSUFBSUMsT0FBSixlQUFtQixDQUNsQixJQUFJTSxPQUFKLG9CQUNDLElBQUlnQixPQUFKLDBCQUVDLElBQUlILE9BQUosd0JBQTRCLHVCQUY3QixXQUU2QixDQUE1QixDQUZELEVBSEgsT0FHRyxDQURELENBRGtCLENBQW5CLENBRFUsQ0FBWDtBQVlBLE1BQUlkLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsV0FDQyxDQURELEVBRUMsT0FIRixJQUdFLENBRkQsQ0FEZ0IsQ0FBakI7QUFPQW5FLFNBQU8sQ0FBUEE7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVERDs7QUFnQkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1tRixjQUFjLEdBQXBCOztBQUVPLHVDQUNQO0FBQ0MsTUFBRyxDQUFDeEUsS0FBSyxDQUFULGNBQXdCO0FBQ3ZCLFdBQU8sMEJBQWNBLEtBQUssQ0FBMUIsS0FBTyxDQUFQO0FBQ0E7O0FBRUQsTUFBSWdCLElBQUksR0FBTXdELGNBQU4sUUFBTUEsR0FBb0J4RSxLQUFLLENBQXZDO0FBRUEsTUFBTWhCLEdBQUcsR0FBRyxNQUFNLENBQU4sWUFBbUI7QUFDOUJDLGNBQVUsRUFEb0I7QUFFOUJDLGNBQVUsRUFBRTtBQUZrQixHQUFuQixDQUFaO0FBS0EsU0FBT3VGLEVBQUUsTUFBVCxPQUFTLENBQVQ7QUFDQTtBQUVEOzs7OztBQUdPLG9DQUNQO0FBQ0MsOEJBQWM7QUFDYmpFLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSUMsRUFBRSxHQUFHQyxJQUFJLENBQWI7O0FBQ0EsWUFBR1YsT0FBTyxDQUFQQSxpQkFBeUJTLEVBQUUsQ0FBOUIsSUFBR1QsQ0FBSCxFQUFzQztBQUNyQyxjQUFHVSxJQUFJLENBQUpBLGdCQUFILGtCQUEwQztBQUN6Q0QsY0FBRSxDQUFGQSxPQUFhQSxFQUFFLENBQWZBLElBQWFBLEdBQWJBO0FBQ0E7QUFDRDtBQUVEO0FBVlU7QUFEQyxHQUFkO0FBZUEsTUFBSWdELE1BQU0sR0FBRzlELEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUE4RCxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0FBVEE7QUFFQSxTQUFPLElBQUk0QixPQUFKLHlCQUE2QixDQUFDLHVCQUE5QixPQUE4QixDQUFELENBQTdCLEVBQTRDLElBQUl6QixPQUFKLGVBQW1CLENBQ3JFLElBQUlDLE9BQUosZ0JBREQsTUFDQyxDQURxRSxDQUFuQixDQUE1QyxDQUFQO0FBR0E7QUFFRDs7Ozs7QUFHTyxrQ0FDUDtBQUNDLE1BQUk5RCxJQUFJLEdBQVI7QUFFQSw4QkFBYztBQUNib0IsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFFQSxZQUFHVixPQUFPLENBQVBBLHFCQUE2QlMsRUFBRSxDQUFsQyxJQUFHVCxDQUFILEVBQTBDO0FBQ3pDRCxjQUFJLENBQUpBLEtBQVVVLEVBQUUsQ0FBWlY7QUFDQVUsWUFBRSxDQUFGQSxPQUFjQSxFQUFFLENBQWhCQSxJQUFjQSxHQUFkQTtBQUNBO0FBUlM7QUFVWEssVUFWVyxzQkFVQSxDQUVWO0FBWlU7QUFEQyxHQUFkO0FBaUJBLE1BQUkyQyxNQUFNLEdBQUc5RCxHQUFHLENBQUhBLGFBQWIsQ0FBYUEsQ0FBYjtBQUVBOEQsUUFBTSxHQUFHQSxNQUFNLENBQU5BLFdBQVRBO0FBRUEsU0FBTztBQUNOdUIsV0FBTyxFQUREO0FBRU5qRixRQUFJLEVBQUVBO0FBRkEsR0FBUDtBQUlBO0FBRUQ7Ozs7O0FBR08sb0NBQ1A7QUFDQyxNQUFJQSxJQUFJLEdBQVI7QUFDQSxNQUFJdUYsZUFBZSxHQUFuQjtBQUNBLE1BQUlDLGtCQUFrQixHQUF0QjtBQUNBLE1BQUlDLFVBQVUsR0FBZDtBQUVBLDhCQUFjO0FBQ2JyRSxjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUcsMEJBQTBCQSxJQUFJLENBQTlCLFFBQXVDQSxJQUFJLENBQUpBLGNBQTFDLGdCQUE2RTtBQUM1RTtBQUNBOztBQUVENkUsMEJBQWtCOztBQUVsQixZQUFHdkYsT0FBTyxDQUFQQSxxQkFBNkJTLEVBQUUsQ0FBbEMsSUFBR1QsQ0FBSCxFQUEwQztBQUN6Q3NGLHlCQUFlO0FBQ2Y7QUFDRDtBQWRVO0FBREMsR0FBZDs7QUFvQkEsTUFBR0Msa0JBQWtCLElBQWxCQSxLQUEyQkQsZUFBZSxJQUE3QyxHQUFvRDtBQUNuREUsY0FBVSxHQUFWQTtBQTNCRixJQThCQzs7O0FBRUEsOEJBQWM7QUFDYnJFLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSUMsRUFBRSxHQUFHQyxJQUFJLENBQWI7O0FBRUEsWUFBRywwQkFBMEJBLElBQUksQ0FBakMsR0FBRyxDQUFILEVBQXdDO0FBQ3ZDO0FBQ0E7O0FBRUQsWUFBR1YsT0FBTyxDQUFQQSxxQkFBNkJTLEVBQUUsQ0FBbEMsSUFBR1QsQ0FBSCxFQUEwQztBQUN6Q0QsY0FBSSxDQUFKQSxLQUFVVSxFQUFFLENBQVpWOztBQUNBLDBCQUFlO0FBQ2RVLGNBQUUsQ0FBRkEsT0FBY0EsRUFBRSxDQUFoQkEsSUFBY0EsR0FBZEE7QUFDQTtBQUNEO0FBZFM7QUFnQlhLLFVBaEJXLHNCQWdCQSxDQUVWO0FBbEJVO0FBREMsR0FBZDtBQXVCQSxNQUFJMkMsTUFBTSxHQUFHOUQsR0FBRyxDQUFIQSxhQUFiLENBQWFBLENBQWI7QUFFQThELFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxXQUFUQTs7QUFFQSxNQUFHMUQsSUFBSSxDQUFKQSxnQkFBcUJ5RixVQUFVLEtBQWxDLE9BQThDO0FBQzdDO0FBQ0E7O0FBRUR6RixNQUFJLEdBQUcsSUFBSWtGLE9BQUosZ0JBQW9CLElBQUksQ0FBSixJQUFTLGdCQUFVO0FBQzdDLFdBQU8sdUJBQVAsSUFBTyxDQUFQO0FBRERsRixHQUEyQixDQUFwQixDQUFQQTtBQUtBLE1BQUkwQyxJQUFJLEdBQUcsSUFBSWtCLE9BQUosNEJBQ1YsSUFBSUMsT0FBSixlQUFtQixDQUNsQixJQUFJQyxPQUFKLGdCQUZGLE1BRUUsQ0FEa0IsQ0FBbkIsQ0FEVSxDQUFYO0FBTUEsU0FBTyxJQUFJTSxPQUFKLGVBQ04sdUJBRE0sVUFDTixDQURNLEVBRU4sT0FGRCxJQUVDLENBRk0sQ0FBUDtBQUlBO0FBSUQ7Ozs7O0FBR08scUNBQ1A7QUFDQyxNQUFJcEUsSUFBSSxHQUFSO0FBQ0EsTUFBSXVGLGVBQWUsR0FBbkI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBdEI7QUFDQSxNQUFJQyxVQUFVLEdBQWQ7QUFFQSw4QkFBYztBQUNickUsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFFQSxZQUFHLDBCQUEwQkEsSUFBSSxDQUE5QixRQUF1Q0EsSUFBSSxDQUFKQSxjQUExQyxnQkFBNkU7QUFDNUU7QUFDQTs7QUFFRDZFLDBCQUFrQjs7QUFFbEIsWUFBR3ZGLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNzRix5QkFBZTtBQUNmO0FBQ0Q7QUFkVTtBQURDLEdBQWQ7O0FBb0JBLE1BQUdDLGtCQUFrQixJQUFsQkEsS0FBMkJELGVBQWUsSUFBN0MsR0FBb0Q7QUFDbkRFLGNBQVUsR0FBVkE7QUEzQkYsSUE4QkM7OztBQUVBLDhCQUFjO0FBQ2JyRSxjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUcsMEJBQTBCQSxJQUFJLENBQWpDLEdBQUcsQ0FBSCxFQUF3QztBQUN2QztBQUNBOztBQUVELFlBQUdWLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVUsRUFBRSxDQUFaVjs7QUFDQSwwQkFBZTtBQUNkVSxjQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFDRDtBQWRTO0FBZ0JYSyxVQWhCVyxzQkFnQkEsQ0FFVjtBQWxCVTtBQURDLEdBQWQ7QUF1QkEsTUFBSTJDLE1BQU0sR0FBRzlELEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUE4RCxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0F6RFYsS0F5RENBLENBekRELENBMkRDO0FBQ0E7QUFDQTs7QUFFQTFELE1BQUksR0FBRyxJQUFJa0YsT0FBSixnQkFBb0IsSUFBSSxDQUFKLElBQVMsZ0JBQVU7QUFDN0MsV0FBTyx1QkFBUCxJQUFPLENBQVA7QUFERGxGLEdBQTJCLENBQXBCLENBQVBBO0FBSUEsU0FBTztBQUNOeUYsY0FBVSxFQURKO0FBRU56RixRQUFJLEVBRkU7QUFHTjBGLFFBQUksRUFBRWhDO0FBSEEsR0FBUDtBQU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QWJ4UUQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QWNEQTs7QUFZQSxrRyxDQUVBOzs7QUFDZSxxQ0FDZjtBQUFBOztBQUVDLE1BQUkxQixJQUFJLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUNwRCxXQUFPLElBQUlvQyxPQUFKLGVBQ04sdUJBRE0sY0FDTixDQURNLEVBQ2MsQ0FDbkIsMEJBQWMsS0FBSSxDQURDLElBQ25CLENBRG1CLEtBR25CLHVCQUpGLFFBSUUsQ0FIbUIsQ0FEZCxDQUFQO0FBREQsR0FBVyxDQUFYO0FBVUFuRSxTQUFPLENBQVBBLEtBQWErQixJQUFJLENBQWpCL0I7QUFFQTBDLFNBQU8sQ0FBUEE7QUFFQSxNQUFJakIsUUFBUSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDeEQsV0FBTyxJQUFJc0QsT0FBSixvQkFDSCx1QkFESixhQUNJLENBREcsQ0FBUDtBQURELEdBQWUsQ0FBZjtBQU1BL0UsU0FBTyxDQUFQQSxLQUFheUIsUUFBUSxDQUFyQnpCO0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR08sb0NBQ1A7QUFDQyxNQUFJMEYsU0FBUyxHQUFHLE1BQU0sQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCO0FBRUEsTUFBSUMsU0FBUyxHQUFiO0FBQ0EsTUFBSW5DLElBQUksR0FBUjs7QUFFQSx3R0FBNEI7QUFBQSxRQUFwQm9DLEtBQW9COztBQUUzQixRQUFHQSxLQUFLLENBQUxBLE9BQUgsTUFBc0I7QUFDckJwQyxVQUFJLENBQUpBLEtBQVVvQyxLQUFLLENBQUxBLE9BQVZwQztBQURELFdBRU87QUFDTkEsVUFBSSxDQUFKQTtBQUNBOztBQUVELFFBQUdvQyxLQUFLLENBQUxBLE9BQUgsS0FBcUI7QUFDcEJwQyxVQUFJLENBQUpBLEtBQVVvQyxLQUFLLENBQUxBLE9BQVZwQztBQURELFdBRU87QUFDTkEsVUFBSSxDQUFKQTtBQUNBOztBQUVEbUMsYUFBUyxHQUFHQyxLQUFLLENBQUxBLE9BQVpEO0FBQ0E7O0FBRUQsU0FBTztBQUNORSxPQUFHLEVBQUVDLE9BQU8sQ0FETixNQUNNLENBRE47QUFFTkgsYUFBUyxFQUZIO0FBR05uQyxRQUFJLEVBQUpBO0FBSE0sR0FBUDtBQUtBOztBQUVNLHlCQUNQO0FBQ0MsTUFBSXFDLEdBQUcsR0FBUDs7QUFDQSx3REFBaUJyRCxNQUFNLENBQXZCLG1EQUNBO0FBQUEsUUFEUXVELEtBQ1I7O0FBQ0MsUUFBR0EsS0FBSyxDQUFMQSxlQUFILFdBQW1DO0FBQ2xDRixTQUFHLEdBQUdFLEtBQUssQ0FBTEEsT0FBTkY7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsTUFBR0EsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCLFVBQU0sVUFBTiwrQ0FBTSxDQUFOO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFYyxnQ0FDZjtBQUFBOztBQUNDLE1BQUlHLE1BQU0sR0FBVjtBQUNBLE1BQUl2RCxJQUFJLEdBQVI7QUFFQXVELFFBQU0sQ0FBTkEsS0FBWXRELE9BQU8sQ0FBbkJzRCxpQkFBWXRELEVBQVpzRDtBQUVBOzs7Ozs7OztBQU9BLE1BQUlDLElBQUksR0FBR0Msa0JBQWtCLENBQTdCLElBQTZCLENBQTdCO0FBRUEsTUFBSXZGLEtBQUssR0FBRytCLE9BQU8sQ0FBUEEsbUJBQTJCdUQsSUFBSSxDQUEvQnZELFdBQTJDQSxPQUFPLENBQWxEQSxpQkFBMkNBLEVBQTNDQSxXQUFaLE9BQVlBLENBQVo7QUFDQSxNQUFJbUQsR0FBRyxHQUFHLE9BQU8sQ0FBUCxzQkFBOEI7QUFDdkNsRixTQUFLLEVBQUVzRixJQUFJLENBRDRCO0FBRXZDekMsUUFBSSxFQUFFeUMsSUFBSSxDQUFDekM7QUFGNEIsR0FBOUIsRUFHUGQsT0FBTyxDQUhBLGlCQUdQQSxFQUhPLFdBQVYsT0FBVSxDQUFWO0FBS0FzRCxRQUFNLENBQU5BO0FBQ0FBLFFBQU0sQ0FBTkE7QUFFQTs7OztBQUdBLE1BQUl2RSxRQUFRLEdBQUcsT0FBTyxDQUFQLHFCQUE2QixnQkFBVTtBQUNyRCxRQUFJSyxLQUFLLEdBQUdZLE9BQU8sQ0FBUEEsZUFBWixNQUFZQSxDQUFaO0FBQ0EsV0FBTyxJQUFJeUIsT0FBSixlQUNOLHVCQURNLFNBQ04sQ0FETSxFQUNTLFFBQVEsdUJBQVIsTUFBUSxDQUFSLEVBQW9CLHVCQURwQyxRQUNvQyxDQUFwQixDQURULENBQVA7QUFGRCxHQUFlLENBQWY7QUFPQTFCLE1BQUksQ0FBSkEsS0FBVWhCLFFBQVEsQ0FBbEJnQjtBQUVBLE1BQUkwRCxTQUFTLEdBQUcsMENBQThCQyxPQUE5QyxvQkFBZ0IsQ0FBaEI7QUFFQSxNQUFJQyxhQUFhLEdBQUcsSUFBSXhDLE9BQUosZ0JBQ25CLElBQUl5QyxPQUFKLHNCQUNDLHVCQURELFFBQ0MsQ0FERCxFQUNlN0UsUUFBUSxDQUR2QixNQURELFNBQ0MsQ0FEbUIsQ0FBcEI7QUFNQWdCLE1BQUksQ0FBSkE7QUFFQXVELFFBQU0sQ0FBTkEsS0FDQyxJQUFJckMsT0FBSix3QkFDQyxDQUFFLHVCQUFGLE1BQUUsQ0FBRixFQUFjLHVCQUFkLFFBQWMsQ0FBZCxFQUE0Qix1QkFBNUIsV0FBNEIsQ0FBNUIsU0FBcUQsSUFBSSxDQUFKLFNBQWMsZ0JBQUk7QUFBQSxXQUFJLHVCQUFKLElBQUksQ0FBSjtBQUR4RSxHQUNzRCxDQUFyRCxDQURELEVBRUMsSUFBSUMsT0FBSixlQUhGb0MsSUFHRSxDQUZELENBRERBO0FBT0FBLFFBQU0sQ0FBTkEsS0FBWSx1QkFBWkEsUUFBWSxDQUFaQTtBQUVBLE1BQUkvQixVQUFVLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUMxRCxXQUFPLElBQUlFLE9BQUosZUFBbUIsdUJBQW5CLFFBQW1CLENBQW5CLEVBQVAsTUFBTyxDQUFQO0FBREQsR0FBaUIsQ0FBakI7QUFJQW5FLFNBQU8sQ0FBUEEsS0FBYWlFLFVBQVUsQ0FBdkJqRTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNIRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQVlBOztBQUVBOztBQUdlLGdDQUNmO0FBQ0M7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTBDLFNBQU8sQ0FBUEEsZ0JBQXdCO0FBQ3ZCbUMsUUFBSSxFQURtQjtBQUV2QnZFLFFBQUksRUFBRTtBQUZpQixHQUF4Qm9DLEVBR0dBLE9BQU8sQ0FIVkEsaUJBR0dBLEVBSEhBO0FBS0FBLFNBQU8sQ0FBUEEsb0JBQTRCQSxPQUFPLENBQW5DQSxpQkFBNEJBLEVBQTVCQTtBQUNBQSxTQUFPLENBQVBBLHFCQUE2QkEsT0FBTyxDQUFwQ0EsaUJBQTZCQSxFQUE3QkE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7O0FBUUE7O0FBRWUsbUNBQ2Y7QUFBQTs7QUFDQyxNQUFJakIsUUFBUSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDeEQsUUFBSUssS0FBSyxHQUFHWSxPQUFPLENBQVBBLGVBQVosS0FBWUEsQ0FBWjtBQUNBLFdBQU8sSUFBSXlCLE9BQUosZUFDTix1QkFETSxTQUNOLENBRE0sRUFDUyxRQUFRekIsT0FBTyxDQUFmLGlCQUFRQSxFQUFSLEVBQXFDLHVCQURyRCxRQUNxRCxDQUFyQyxDQURULENBQVA7QUFGRCxHQUFlLENBQWY7QUFPQTFDLFNBQU8sQ0FBUEEsS0FBYXlCLFFBQVEsQ0FBckJ6QjtBQUdBLE1BQUltRyxTQUFTLEdBQUcsNkNBQWlDQyxPQUFqRCxvQkFBZ0IsQ0FBaEI7QUFJQSxNQUFJQyxhQUFhLEdBQUcsSUFBSXhDLE9BQUosZ0JBQ25CLElBQUl5QyxPQUFKLHNCQUNDLHVCQURELFFBQ0MsQ0FERCxFQUNlN0UsUUFBUSxDQUR2QixNQURELFNBQ0MsQ0FEbUIsQ0FBcEI7QUFNQXpCLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOztBQVdBOztBQUVlLGdDQUNmO0FBQ0MsTUFBSWdHLE1BQU0sR0FBRyxDQUNaLHVCQURZLFFBQ1osQ0FEWSxFQUVaLDBCQUFjLEtBRkYsSUFFWixDQUZZLEVBR1p0RCxPQUFPLENBSFIsaUJBR0NBLEVBSFksQ0FBYjtBQU1BLE1BQUl1QixVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUFtQix1QkFBbkIsUUFBbUIsQ0FBbkIsRUFERCxNQUNDLENBRGdCLENBQWpCO0FBSUEsTUFBSTFCLElBQUksR0FBUjtBQUVBO0FBRUF1RCxRQUFNLENBQU5BLEtBQ0MsSUFBSXJDLE9BQUosd0JBQTRCLENBQzFCLHVCQURGLE1BQ0UsQ0FEMEIsQ0FBNUIsRUFHQyxJQUFJQyxPQUFKLGVBSkZvQyxJQUlFLENBSEQsQ0FEREE7QUFRQWhHLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFlLHFDQUNmO0FBQ0MsTUFBSWdHLE1BQU0sR0FBVjtBQUVBQSxRQUFNLENBQU5BLEtBQVl0RCxPQUFPLENBQW5Cc0QsaUJBQVl0RCxFQUFac0Q7O0FBRUEsT0FBSyxJQUFJcEUsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcsY0FBcEIsUUFBMENBLENBQTFDLElBQStDO0FBQzlDLFFBQUkyRSxLQUFLLEdBQUcsY0FBWixDQUFZLENBQVo7QUFDQSxRQUFJOUQsSUFBSSxHQUFSO0FBRUE7QUFDQytELDJCQUFxQixFQUFFOUQsT0FBTyxDQUFQQTtBQUR4QjtBQUtBc0QsVUFBTSxDQUFOQSxLQUFZLHVCQUFHTyxLQUFLLENBQXBCUCxLQUFZLENBQVpBO0FBQ0FBLFVBQU0sQ0FBTkEsS0FDQyxJQUFJckMsT0FBSix3QkFBNEIsQ0FDM0IsdUJBREQsTUFDQyxDQUQyQixDQUE1QixFQUVHLElBQUlDLE9BQUosZUFISm9DLElBR0ksQ0FGSCxDQUREQTtBQUtBOztBQUdELE1BQUkvQixVQUFVLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUMxRCxXQUFPLElBQUlFLE9BQUosZUFBbUIsdUJBQW5CLGFBQW1CLENBQW5CLEVBQVAsTUFBTyxDQUFQO0FBREQsR0FBaUIsQ0FBakI7QUFLQW5FLFNBQU8sQ0FBUEEsS0FBYWlFLFVBQVUsQ0FBdkJqRTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0Q7O0FBS2UsZ0NBQ2Y7QUFFQzBDLFNBQU8sQ0FBUEEscUJBQTZCQSxPQUFPLENBQXBDQSxpQkFBNkJBLEVBQTdCQSxXQUZELE9BRUNBLEVBRkQsQ0FJQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEOztBQVNPLGdEQUNQO0FBQ0MsTUFBSStELE9BQU8sR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3ZELFdBQU8sSUFBSUgsT0FBSixzQkFDTix1QkFETSxRQUNOLENBRE0sRUFFTixJQUFJdkIsT0FBSixvQkFBd0IsdUJBRmxCLFlBRWtCLENBQXhCLENBRk0sRUFBUCxDQUFPLENBQVA7QUFERCxHQUFjLENBQWQ7QUFRQS9FLFNBQU8sQ0FBUEEsS0FBYXlHLE9BQU8sQ0FBcEJ6RztBQUNBOztBQUVNLDBDQUNQO0FBQ0MsTUFBSXlCLFFBQVEsR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3hELFdBQU8sSUFBSXNELE9BQUosb0JBQ0gsdUJBREosSUFDSSxDQURHLENBQVA7QUFERCxHQUFlLENBQWY7QUFNQS9FLFNBQU8sQ0FBUEEsS0FBYXlCLFFBQVEsQ0FBckJ6QjtBQUNBOztBQUVNLDJEQUNQO0FBQUEsTUFEbUQwRyxhQUNuRDtBQURtREEsaUJBQ25ELEdBRG1FLEtBQWhCQTtBQUNuRDs7QUFDQyxNQUFHbEUsTUFBTSxDQUFULFVBQUdBLEVBQUgsRUFBd0I7QUFDdkJrRSxpQkFBYSxHQUFHLHlCQUFNLENBQXRCQTtBQUZGLElBSUM7OztBQUNBLE1BQUcsQ0FBQ2xFLE1BQU0sQ0FBUCxnQkFBQ0EsRUFBRCxJQUE4QixDQUFDQSxNQUFNLENBQXhDLFVBQWtDQSxFQUFsQyxFQUF1RDtBQUN0REUsV0FBTyxDQUFQQTtBQUNBOztBQUVELE9BQUssSUFBSWQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdZLE1BQU0sQ0FBTkEsU0FBcEIsUUFBNENaLENBQTVDLElBQWlEO0FBQ2hEK0UsZUFBVyxDQUFDbkUsTUFBTSxDQUFOQSxTQUFELENBQUNBLENBQUQsdUJBQVhtRSxhQUFXLENBQVhBO0FBQ0E7O0FBRUQsTUFBSVIsU0FBUyxHQUFHekQsT0FBTyxDQUF2QixpQkFBZ0JBLEVBQWhCOztBQUVBLE1BQUcsQ0FBQ0YsTUFBTSxDQUFQLGdCQUFDQSxFQUFELElBQThCLENBQUNBLE1BQU0sQ0FBeEMsVUFBa0NBLEVBQWxDLEVBQXVEO0FBQ3RERSxXQUFPLENBQVBBO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFTSxxRUFDUDtBQUNDLE1BQUlrRSxPQUFPLEdBQUc5RSxLQUFLLEtBQW5COztBQUVBLE1BQUc0RSxhQUFhLElBQWhCLFNBQTZCO0FBQzVCQSxpQkFBYSxVQUFiQSxPQUFhLENBQWJBO0FBREQsU0FFTztBQUNOLFFBQUcsQ0FBQ2xFLE1BQU0sQ0FBVixRQUFJQSxFQUFKLEVBQXVCO0FBQ3RCcUUsY0FBUSxtQkFBbUJELE9BQU8sa0JBQWxDQyxhQUFRLENBQVJBO0FBQ0E7QUFDRDs7QUFFRHJFLFFBQU0sQ0FBTkE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckVNLGtEQUNQO0FBQ0MsTUFBTXNFLElBQUksR0FBRyxJQUFiLEdBQWEsRUFBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFiLEdBQWEsRUFBYjtBQUNBO0FBQ0EsTUFKRCxDQUlDLENBSkQsQ0FNQzs7QUFDQSxPQUFLbkYsQ0FBQyxHQUFOLEdBQVlBLENBQUMsR0FBR29GLENBQUMsQ0FBakIsUUFBMEJwRixDQUExQixJQUErQjtBQUM5QixRQUFJaUUsR0FBRyxHQUFHb0IsT0FBTyxDQUFDRCxDQUFDLENBQUYsQ0FBRSxDQUFGLEVBQWpCLENBQWlCLENBQWpCO0FBQ0FGLFFBQUksQ0FBSkE7QUFURixJQVlDOzs7QUFDQSxPQUFLbEYsQ0FBQyxHQUFOLEdBQVlBLENBQUMsR0FBR3NGLENBQUMsQ0FBakIsUUFBMEJ0RixDQUExQixJQUErQjtBQUM5QixRQUFJaUUsSUFBRyxHQUFHb0IsT0FBTyxDQUFDQyxDQUFDLENBQUYsQ0FBRSxDQUFGLEVBQWpCLENBQWlCLENBQWpCOztBQUNBSCxRQUFJLENBQUpBO0FBZkYsSUFrQkM7OztBQUVBLE9BQUtuRixDQUFDLEdBQUd1RixDQUFDLEdBQVYsR0FBZ0J2RixDQUFDLEtBQUtvRixDQUFDLENBQVBwRixVQUFrQnVGLENBQUMsS0FBS0QsQ0FBQyxDQUF6QyxTQUFtRDtBQUNsRCxRQUFJRSxJQUFJLEdBQUdKLENBQUMsQ0FBWixDQUFZLENBQVo7QUFBQSxRQUNDSyxJQUFJLEdBQUdILENBQUMsQ0FEVCxDQUNTLENBRFQ7O0FBRUEsUUFBSUUsSUFBSSxLQUFSLE1BQW1CO0FBQ2xCO0FBQ0F4RixPQUFDO0FBRkYsV0FHTyxJQUFJc0YsQ0FBQyxDQUFEQSxVQUFKLEdBQW1CO0FBQ3pCO0FBQ0FJLFlBQU0sQ0FBTkEsWUFBbUJDLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFGLENBQUUsQ0FBRixLQUFVLENBQWhDTSxDQUFzQixDQUF0QkE7QUFDQTFGLE9BQUM7QUFISyxXQUlBLElBQUlvRixDQUFDLENBQURBLFVBQUosR0FBbUI7QUFDekI7QUFDQU0sWUFBTSxDQUFOQSxhQUFvQkMsR0FBRyxVQUF2QkQsQ0FBdUIsQ0FBdkJBLEVBQXFDQyxHQUFHLENBQUNQLENBQUMsQ0FBRixDQUFFLENBQUYsS0FBSE8sQ0FBRyxDQUFIQSxJQUFyQ0Q7QUFDQUgsT0FBQztBQUhLLFdBSUEsSUFBSUMsSUFBSSxLQUFSLE1BQW1CO0FBQ3pCO0FBQ0F4RixPQUFDO0FBQ0R1RixPQUFDO0FBSEssV0FJQTtBQUNOO0FBQ0E7QUFDQSxVQUFJSyxXQUFXLEdBQUdULElBQUksQ0FBSkEsSUFIWixJQUdZQSxDQUFsQixDQUhNLENBSU47QUFDQTs7QUFDQSxVQUFJVSxjQUFjLEdBQUdYLElBQUksQ0FBSkEsSUFBckIsSUFBcUJBLENBQXJCOztBQUNBLFVBQUlVLFdBQVcsS0FBZixXQUErQjtBQUM5QjtBQUNBRixjQUFNLENBQU5BLFlBQW1CQyxHQUFHLENBQUNQLENBQUMsQ0FBRixDQUFFLENBQUYsS0FBVSxDQUFoQ00sQ0FBc0IsQ0FBdEJBO0FBQ0ExRixTQUFDO0FBSEYsYUFJTyxJQUFJNkYsY0FBYyxLQUFsQixXQUFrQztBQUN4QztBQUNBSCxjQUFNLENBQU5BLGFBQ0NDLEdBQUcsVUFESkQsQ0FDSSxDQURKQSxFQUVDQyxHQUFHLENBQUNQLENBQUMsQ0FBRixDQUFFLENBQUYsS0FBSE8sQ0FBRyxDQUFIQSxJQUZERDtBQUlBSCxTQUFDO0FBTkssYUFPQTtBQUNOO0FBQ0E7QUFDQUcsY0FBTSxDQUFOQSxhQUNDQyxHQUFHLENBQUNQLENBQUMsQ0FBRixjQUFFLENBQUYsa0JBREpNLENBQ0ksQ0FESkEsRUFFQ0MsR0FBRyxDQUFDUCxDQUFDLENBQUYsQ0FBRSxDQUFGLEVBQUhPLENBQUcsQ0FBSEEsSUFGREQ7QUFJQU4sU0FBQyxDQUFEQSxjQUFDLENBQURBO0FBQ0EsWUFBSVMsY0FBYyxHQUFHN0YsQ0FBQyxHQUF0QixHQUE0QkEsQ0FBQztBQUM3QnVGLFNBQUM7QUFDRDtBQUNEO0FBQ0Q7O0FBRUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0F2QnhFRDs7QUFDQTs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBWU8scURBQ1A7QUFDQztBQUVBO0FBQ0EsTUFBSU8sUUFBUSxHQUpiLElBSUMsQ0FKRCxDQUlxQjs7QUFFcEIsTUFBSUosTUFBTSxHQU5YLFFBTUMsQ0FORCxDQVFDOztBQUNDQSxRQUFNLEdBQUdLLFFBQVEsQ0FUbkIsVUFTRUwsQ0FURixDQVMrQjtBQUM5Qjs7QUFFQSxNQUFJTSxXQUFXLEdBWmhCLFFBWUMsQ0FaRCxDQVk0Qjs7QUFFM0IsTUFBTUMsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQWQsR0FBYyxFQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQWpCZixFQWlCQyxDQWpCRCxDQWtCQzs7QUFDQSxNQUFHLENBQUgsUUFBWTtBQUVYLFFBQUlDLE1BQU0sR0FBRyx1QkFBYixLQUFhLENBQWI7O0FBQ0EsUUFBSUMsSUFBSSxHQUFSOztBQUVBLFNBQUssSUFBTCxlQUF3QjtBQUN2QixVQUFJQyxJQUFJLEdBQUdGLE1BQU0sQ0FBakIsR0FBaUIsQ0FBakI7QUFDQSxVQUFJRyxPQUFPLEdBQUduQixPQUFPLE9BQXJCLEdBQXFCLENBQXJCOztBQUVBLGdCQUFTO0FBQ1IsWUFBR2lCLElBQUksQ0FBSkEsNEJBQUgsU0FBNkM7QUFDNUNBLGNBQUksR0FBR3pDLElBQUksNkJBQVh5QyxPQUFXLENBQVhBO0FBQ0FBLGNBQUksR0FBR0EsSUFBSSxDQUFYQTtBQUNBO0FBQ0Q7O0FBRURGLGNBQVEsQ0FBUkEsT0FBUSxDQUFSQTtBQUNBSyxhQUFPLG1CQUFQQSxJQUFPLENBQVBBO0FBQ0E7O0FBRURULGVBQVcsR0FBWEE7QUFDQWhELFdBQU8sQ0FBUEE7QUFyQkQsU0F1Qk8sQ0FDTjtBQUNBOztBQUVELE1BQU0wRCxPQUFPLEdBQWI7QUFFQSxNQUFNQyxXQUFXLEdBQUcsa0NBQWlCLGFBQUs7QUFDekMsUUFBSXJCLENBQUMsR0FBRyx1QkFEaUMsS0FDakMsQ0FBUixDQUR5QyxDQUV6Qzs7QUFDQWEsWUFBUSxDQUhpQyxLQUd6Q0EsR0FIeUMsQ0FLekM7O0FBQ0EsUUFBTS9DLE9BQU8sR0FBR3dELEtBQUssQ0FBTEEsS0FDZixnQkFBS0YsT0FBTyxDQUFaLFlBQXlCdEIsQ0FBQyxJQUExQiwrQkFQd0MsT0FPeEMsQ0FEZXdCLENBQWhCLENBTnlDLENBVXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FmeUMsT0FlekMsQ0FmeUMsQ0FnQnpDO0FBaEJELEdBQW9CLENBQXBCOztBQW1CQSxxQ0FBMEM7QUFBQSxRQUFYQyxFQUFXO0FBQVhBLFFBQVcsR0FBTixJQUFMQTtBQUFXOztBQUN6QyxRQUFJTixJQUFJLElBQVIsTUFBa0I7QUFFbEIsUUFBSU8sT0FBTyxHQUFHekIsT0FBTyxPQUFyQixHQUFxQixDQUFyQjtBQUVBLFFBQUkwQixDQUFDLEdBQUdiLEtBQUssQ0FBTEEsSUFBUixPQUFRQSxDQUFSOztBQUNBLFFBQUlsRyxDQUFDLEtBQUwsR0FBYTtBQUNabUcsY0FBUSxDQUFSQTs7QUFFQSxVQUFJLENBQUosR0FBUTtBQUNQWSxTQUFDLEdBQUlGLEVBQUUsUUFBUWhELElBQUksa0NBQW5Ca0QsR0FBbUIsQ0FBbkJBO0FBQ0EsWUFBSUEsQ0FBQyxDQUFEQSxhQUFKLElBQXVCQSxDQUFDLEdBQUcsNkJBQUpBO0FBQ3ZCYixhQUFLLENBQUxBO0FBQ0E7QUFQRixXQVFPLElBQUlsRyxDQUFDLEtBQUssQ0FBVixHQUFjO0FBQ3BCbUcsY0FBUSxDQUFSQTtBQUNBOztBQUVELFdBQU8sd0JBQVAsQ0FBTyxDQUFQO0FBckZGLElBd0ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXdCekhNLHFCQUFxQjtBQUFBLE1BQ25CYSxVQURtQixHQUNKakksS0FESTtBQUUzQixNQUFJLGVBQWVBLEtBQUssQ0FBTEEsYUFBbkIsSUFBMEM7O0FBQzFDLE1BQUlpSSxVQUFVLENBQVZBLFNBQUosR0FBMkI7QUFDMUIsV0FBT0EsVUFBVSxDQUFqQixDQUFpQixDQUFqQjtBQUowQixJQU8zQjtBQUNBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUdDLEdBQUcsWUFBWUYsVUFBVSxDQUE1QyxDQUE0QyxDQUF0QixDQUF0Qjs7QUFFQSxTQUFPO0FBQ05DLGNBQVUsRUFBVkE7QUFETSxHQUFQO0FBR0E7O0FBR00scUNBQTRDO0FBQUEsTUFBaEJQLE9BQWdCO0FBQWhCQSxXQUFnQixHQUFOLElBQVZBO0FBQWdCOztBQUNsRDNILE9BQUssR0FBR29JLFFBQVEsQ0FBaEJwSSxLQUFnQixDQUFoQkE7QUFFQSxNQUFNcUksVUFBVSxHQUFHQyxJQUFJLENBQUpBLEtBQUksQ0FBSkEsSUFBbkI7QUFFQXJFLFNBQU8sQ0FBUEEsWUFMa0QsS0FLbERBLEVBTGtELENBTWxEOztBQUNBMEMsUUFBTSxDQUFOQSxvQkFBMkJnQixPQUFPLElBQUlBLE9BQU8sQ0FBbEJBLGNBQTNCaEI7QUFFQTtBQUNBOztBQUVNLHlCQUF5QjtBQUMvQixNQUFJLGlCQUFKLFVBQStCO0FBQzlCLFdBQU80QixRQUFRLENBQVJBLGVBQVAsS0FBT0EsQ0FBUDtBQUNBOztBQUNELE1BQUksRUFBRXZJLEtBQUssWUFBWCxJQUFJLENBQUosRUFBOEI7QUFDN0I7QUFDQSxXQUFPdUksUUFBUSxDQUFSQSx1QkFBZ0MsQ0FBdkMsS0FBdUMsQ0FBaENBLENBQVA7QUFDQTs7QUFDRDtBQUNBOztBQUdNLGlEQUFpRDtBQUN2RCxTQUFPQyxTQUFTLElBQUlBLFNBQVMsS0FBN0IsU0FBMkM7QUFDMUMsUUFBTVIsQ0FBQyxHQUFHUSxTQUFTLENBRHVCLFdBQzFDLENBRDBDLENBRTFDOztBQUNBLFFBQUk3QixNQUFNLEtBQUs2QixTQUFTLENBQXhCLFlBQXFDO0FBQ3BDN0IsWUFBTSxDQUFOQTtBQUNBOztBQUNENkIsYUFBUyxHQUFUQTtBQUNBO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFkOztBQUdPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FDdkJuQixJQUFJLENBQUpBLHdCQUNBLG9CQUNBb0IsU0FBUyxHQUNUQyxXQUFXLENBQ1ZyQixJQUFJLENBQUpBLFlBRFUsWUFFVkEsSUFBSSxDQUFKQSxZQUZVLGFBR1ZBLElBQUksQ0FBSkEsV0FIRHFCLFdBQVcsQ0FBWEEsSUFJS3JCLElBQUksQ0FMQSxjQU1UQSxJQUFJLENBUEosYUFRQW9CLFNBQVMsR0FDVHBCLElBQUksQ0FESyxRQUNUQSxFQURTLEdBRVRBLElBQUksQ0FYSkEsY0FEdUI7QUFBakI7Ozs7QUFlQSxJQUFNc0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsV0FBYztBQUFBLE1BQy9CWixVQUQrQixHQUNoQmEsUUFEZ0I7QUFBQSxNQUUvQkMsTUFGK0IsR0FFcEJkLFVBRm9CLFNBR3ZDO0FBQ0E7O0FBQ0EsTUFBSWMsTUFBTSxHQUFWLEdBQWdCLE9BQU9kLFVBQVUsQ0FBakIsQ0FBaUIsQ0FBakI7QUFDaEIsTUFBTWQsS0FBSyxHQUFHVSxLQUFLLENBQUxBLEtBQWQsVUFBY0EsQ0FBZDtBQUNBLE1BQU1tQixXQUFXLEdBQUc3QixLQUFLLENBQXpCLENBQXlCLENBQXpCO0FBQ0EsTUFBTThCLFVBQVUsR0FBRzlCLEtBQUssQ0FBQzRCLE1BQU0sR0FBL0IsQ0FBd0IsQ0FBeEI7QUFDQSxTQUFPO0FBQ05OLFlBQVEsRUFERjtBQUVOTyxlQUFXLEVBRkw7QUFHTkMsY0FBVSxFQUhKO0FBSU5DLFlBSk0sc0JBSUs7QUFDVixVQUFJakIsVUFBVSxDQUFWQSxXQUFKLFFBQWtDO0FBQ2pDLFlBQUloSCxDQUFDLEdBQUw7O0FBQ0EsZUFBT0EsQ0FBQyxHQUFSO0FBQW1CNkgsa0JBQVEsQ0FBUkEsWUFBcUIzQixLQUFLLENBQUNsRyxDQUEzQjZILEVBQTBCLENBQTFCQTtBQUFuQjtBQUNBOztBQUNEO0FBQ0E7QUFWSyxHQUFQO0FBVE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0F4QnRFQSxzQkFDUDtBQUNDLE1BQUc5SSxLQUFLLENBQVIsSUFBYTtBQUNaLFdBQU9BLEtBQVA7QUFERCxTQUVPO0FBQ047QUFDQTtBQUNEOztBQUVNLDJCQUNQO0FBQ0MsMkJBQ0E7QUFDQyxRQUFJbUosU0FBUyxDQUFUQSxXQUFKLEdBQTRCO0FBQzNCO0FBQ0E7O0FBRURuSixTQUFLLEdBQUxBOztBQUVBYixRQUFJLENBQUpBLG1CQUF3QixvQkFBWTtBQUFFaUssY0FBUSxDQUFSQTtBQUF0Q2pLOztBQUNBQSxRQUFJLENBQUpBLG1CQUF3QixvQkFBUTtBQUFBLGFBQUlpSyxRQUFKO0FBQWhDaks7O0FBRUE7QUFDQTs7QUFFREEsTUFBSSxDQUFKQSxhQUFrQixJQUFsQkEsR0FBa0IsRUFBbEJBO0FBQ0FBLE1BQUksQ0FBSkE7QUFFQTtBQUNBOztBQUdNLDhCQUNQO0FBQ0NrSyxLQUFHLEdBQUcsVUFBTkEsR0FBTSxDQUFOQTs7QUFFQSxrR0FBbUI7QUFBQSxRQUFYQyxFQUFXOztBQUNsQkEsTUFBRSxDQUFGQTtBQUNBOztBQUVELGtCQUNBO0FBQ0MsUUFBRyxDQUFDQyxNQUFNLENBQVYsUUFBbUI7QUFDbEJBLFlBQU07QUFDTjs7QUFFRCxXQUFPdkosS0FBUDtBQUNBOztBQUVELG9CQUNBO0FBQ0N1SixVQUFNLENBQU5BOztBQUVBcEssUUFBSSxDQUFKQSxtQkFBd0Isb0JBQVE7QUFBQSxhQUFJaUssUUFBSjtBQUFoQ2pLOztBQUVBO0FBQ0E7O0FBRURBLE1BQUksQ0FBSkEsYUFBa0IsSUFBbEJBLEdBQWtCLEVBQWxCQTtBQUNBQSxNQUFJLENBQUpBO0FBRUFvSyxRQUFNO0FBRU47QUFDQTs7QUFFTSxxQ0FDUDtBQUFBLE1BRHNDQyxJQUN0QztBQURzQ0EsUUFDdEMsR0FENkMsS0FBUEE7QUFDdEM7O0FBQ0NILEtBQUcsR0FBRyxVQUFOQSxHQUFNLENBQU5BOztBQUVBLHNHQUFtQjtBQUFBLFFBQVhDLEVBQVc7O0FBQ2xCLFFBQUdBLEVBQUUsQ0FBTCxZQUFrQjtBQUNqQkEsUUFBRSxDQUFGQTtBQUNBOztBQUVELFFBQUdBLEVBQUUsQ0FBTCxPQUFhO0FBQ1osNERBQWVBLEVBQUUsQ0FBakIsZ0RBQXlCO0FBQUEsWUFBakJHLEdBQWlCO0FBQ3hCQSxXQUFHLENBQUhBO0FBQ0E7QUFDRDtBQUNEOztBQUVELE1BQUcsQ0FBSCxNQUFVO0FBQ1R6SixTQUFLO0FBQ0w7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0F5QmxGRCxtRixDQUhBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBSTBKLE1BQU0sR0FBRyxvQkFDWixzNEJBREQsMkNBQWEsQ0FBYjs7QUFnQkEsSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBVTtBQUN6QixTQUFPRCxNQUFNLENBQU5BLElBQU0sQ0FBTkEsSUFBZ0IvSixJQUFJLENBQUpBLE1BQXZCLFVBQXVCQSxDQUF2QjtBQUREOztBQUlBLElBQUlpSyxVQUFVLEdBQUcsb0JBQWpCLFNBQWlCLENBQWpCOztBQUlBLHdDQUNBO0FBQUEsTUFEMEJqRyxZQUMxQjtBQUQwQkEsZ0JBQzFCLEdBRHlDLEtBQWZBO0FBQzFCOztBQUNDLFNBQU87QUFDTjNELFNBQUssRUFEQztBQUVOMkQsZ0JBQVksRUFBWkE7QUFGTSxHQUFQO0FBSUE7O0FBRU0sb0JBQ1A7QUFDQyxNQUFJYixNQUFNLEdBQUc7QUFDWmUsVUFBTSxFQURNO0FBRVpWLFNBQUssRUFGTztBQUdaMEcsY0FBVSxFQUhFO0FBSVpDLGVBQVcsRUFBRTtBQUpELEdBQWI7O0FBT0EsT0FBSSxJQUFKLGFBQ0E7QUFDQyxRQUFJOUosS0FBSyxHQUFHK0osR0FBRyxDQUFmLElBQWUsQ0FBZjs7QUFFQSxRQUFHSixTQUFTLENBQVosSUFBWSxDQUFaLEVBQW9CO0FBQ25CN0csWUFBTSxDQUFOQTtBQURELFdBRU8sSUFBR25ELElBQUksQ0FBSkEsTUFBSCxLQUFHQSxDQUFILEVBQXNCO0FBQzVCQSxVQUFJLEdBQUdBLElBQUksQ0FBSkEsZUFBUEEsRUFBT0EsQ0FBUEE7QUFDQW1ELFlBQU0sQ0FBTkEsZUFBc0JrSCxTQUFTLFFBQS9CbEgsSUFBK0IsQ0FBL0JBO0FBRk0sV0FHQSxJQUFHbkQsSUFBSSxDQUFKQSxNQUFILE1BQUdBLENBQUgsRUFBdUI7QUFDN0JBLFVBQUksR0FBR0EsSUFBSSxDQUFKQSxnQkFBUEEsRUFBT0EsQ0FBUEE7QUFDQUssV0FBSyxHQUFHZ0ssU0FBUyxRQUFqQmhLLElBQWlCLENBQWpCQTs7QUFFQSxVQUFHNEosVUFBVSxDQUFiLElBQWEsQ0FBYixFQUFxQjtBQUNwQjlHLGNBQU0sQ0FBTkEsSUFBTSxDQUFOQTtBQURELGFBRU8sSUFBRzZHLFNBQVMsQ0FBWixJQUFZLENBQVosRUFBb0I7QUFDMUI3RyxjQUFNLENBQU5BO0FBRE0sYUFFQTtBQUNOQSxjQUFNLENBQU5BO0FBQ0E7QUFWSyxXQVdBO0FBQ05BLFlBQU0sQ0FBTkEsY0FBcUJrSCxTQUFTLENBRHhCLEtBQ3dCLENBQTlCbEgsQ0FETSxDQUVOO0FBQ0E7QUFDRDs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBekIxRUQ7O0FBRUEseUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EwQkZBOztBQUNBOztBQUVBOztBQUVBOztBQUVPLG1DQUNQO0FBQ0MsT0FBSSxJQUFKLGVBQXVCO0FBQ3RCLFFBQUltSCxNQUFNLEdBQUcsd0RBQWIsR0FBYSxDQUFiO0FBQ0EsUUFBSUMsT0FBTyxHQUFHRCxNQUFNLENBQU5BLEtBQWQsSUFBY0EsQ0FBZDs7QUFDQSxpQkFBWTtBQUNYckosWUFBTSxDQUFOQSxHQUFNLENBQU5BLEdBQWNzSixPQUFPLENBQXJCdEosQ0FBcUIsQ0FBckJBO0FBQ0E7QUFDRDs7QUFFRDtBQUNBOztBQUVNLHFCQUNQO0FBQ0M7QUFDQSxNQUFJQSxNQUFNLEdBQUd1SixXQUFXLENBQUM7QUFDeEJDLFVBQU0sRUFEa0I7QUFFeEJDLFNBQUssRUFBRTtBQUZpQixHQUFELEVBRnpCLElBRXlCLENBQXhCLENBRkQsQ0FPQzs7QUFDQUMsTUFBSSxHQUFHLDhCQVJSLElBUVEsQ0FBUEEsQ0FSRCxDQVVDOztBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUNYLElBQUlDLE9BQUosV0FBZTtBQUFFQyxRQUFJLEVBQUU7QUFBUixHQUFmLENBRFcsQ0FBWjs7QUFJQSw4QkFDQTtBQUNDLFdBQU9GLEtBQUssQ0FBQ0EsS0FBSyxDQUFMQSxTQUFiLENBQVksQ0FBWjtBQUNBOztBQUVELDRCQUNBO0FBQ0MsV0FBT0EsS0FBSyxDQUFMQSxnQkFBc0IsNkJBQTdCLElBQTZCLENBQTdCO0FBQ0E7O0FBRUQsTUFBTUcsS0FBSyxHQUFHLElBQUlDLFlBQUosT0FBZTtBQUU1QkMsYUFGNEIsa0NBRzVCO0FBQ0MsVUFBSWpFLE1BQU0sR0FBR2tFLGdCQUFiO0FBQ0E7O0FBRUEsVUFBR2xMLElBQUksS0FBUCxRQUFvQjtBQUNuQmtDLGNBQU0sR0FBRyxJQUFJMkksT0FBSixXQUFUM0ksS0FBUyxDQUFUQTtBQURELGFBRU8sSUFBR2xDLElBQUksS0FBUCxRQUFvQjtBQUMxQmtDLGNBQU0sR0FBRyxJQUFJaUosT0FBSixLQUFUakosS0FBUyxDQUFUQTtBQURNLGFBRUEsSUFBSSx3QkFBSixJQUFJLENBQUosRUFBdUI7QUFDN0JBLGNBQU0sR0FBRyxJQUFJa0osT0FBSixnQkFBVGxKLEtBQVMsQ0FBVEE7QUFETSxhQUVBO0FBQ05BLGNBQU0sR0FBRyxJQUFJbUosT0FBSixXQUFUbkosS0FBUyxDQUFUQTtBQUNBOztBQUVELGtCQUFXO0FBQ1Y4RSxjQUFNLENBQU5BO0FBQ0E7O0FBRUQ0RCxXQUFLLENBQUxBO0FBckIyQjtBQXdCNUJVLFVBeEI0Qix3QkF5QjVCO0FBQ0MsVUFBSXRFLE1BQU0sR0FBR2tFLGdCQUFiO0FBRUFLLFVBQUksR0FBR0EsSUFBSSxDQUFYQSxJQUFPQSxFQUFQQTs7QUFFQSxVQUFHQSxJQUFJLEtBQUpBLE1BQUgsUUFBMEI7QUFDekIsWUFBSTNELElBQUksR0FBRyxJQUFJNEQsT0FBSixLQUFYLElBQVcsQ0FBWDs7QUFDQSxvQkFBVztBQUNWeEUsZ0JBQU0sQ0FBTkE7QUFDQTtBQUNFO0FBbkN1QjtBQXNDNUJ5RSxjQXRDNEIsNEJBdUM1QjtBQUNDLFVBQUlDLE9BQU8sR0FBR2QsS0FBSyxDQUFuQixHQUFjQSxFQUFkO0FBQ0c7QUF6Q3dCLEdBQWYsRUEyQ1g7QUFBRWUsa0JBQWMsRUFBRTtBQUFsQixHQTNDVyxDQUFkO0FBNkNBWixPQUFLLENBQUxBO0FBQ0FBLE9BQUssQ0FBTEE7QUFFQTlKLFFBQU0sQ0FBTkEsV0FBa0IySixLQUFLLENBekV4QixDQXlFd0IsQ0FBdkIzSixDQXpFRCxDQTBFQzs7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0QsMkJBQ0E7QUFDQyxTQUFPMEosSUFBSSxDQUFKQSwyQ0FBUCxJQUFPQSxFQUFQO0FBQ0E7O0FBRU0sK0JBQ1A7QUFDQyxPQUFJLElBQUosZUFBdUI7QUFDdEIsUUFBSUwsTUFBTSxHQUFHLHdEQUFiLEdBQWEsQ0FBYjtBQUNBSyxRQUFJLEdBQUdBLElBQUksQ0FBSkEsZ0JBQVBBLEVBQU9BLENBQVBBO0FBQ0E7O0FBRURBLE1BQUksR0FBRyxJQUFJLENBQ1Y7QUFEVSxHQUFKLDhQQU1OO0FBTk0sbUZBQVBBLFNBQU8sQ0FBUEE7QUFVQSxTQUFPaUIsV0FBVyxDQUFsQixJQUFrQixDQUFsQjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCUixTOzs7QUFFcEIsa0NBQ0E7QUFBQTs7QUFDQztBQUNBO0FBQ0EsbUJBQWMsa0JBQWQsS0FBYyxDQUFkO0FBQ0E7QUFDQTtBQUxEO0FBTUM7Ozs7U0FFRFMsYSxHQUFBQSx5QkFDQTtBQUNDLFdBQU9DLE1BQU0sQ0FBTkEsS0FBWSxZQUFaQSxxQkFBUDs7OztFQWJxQ3ZILGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2Qzs7Ozs7Ozs7Ozs7Ozs7SUFFcUJzRyxVOzs7QUFFcEIsNEJBQ0E7QUFBQTs7QUFBQSx5QkFEY0MsSUFDZDtBQUFBLFFBRGNBLElBQ2QsMEJBRHFCLElBQ3JCO0FBQUEsMEJBRDJCekssS0FDM0I7QUFBQSxRQUQyQkEsS0FDM0IsMkJBRG1DLElBQ25DO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFKRDtBQUtDOzs7RUFSc0NrRSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCOEcsSTs7O0FBRXBCLDRCQUNBO0FBQUE7O0FBQ0M7QUFFQTtBQUNBLG1CQUFjLGtCQUFkLEtBQWMsQ0FBZDtBQUNBO0FBQ0E7QUFORDtBQU9DOzs7O1NBRURRLGEsR0FBQUEseUJBQ0E7QUFDQyxXQUFPQyxNQUFNLENBQU5BLEtBQVksWUFBWkEscUJBQVA7Ozs7RUFkZ0N2SCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEM7Ozs7Ozs7Ozs7Ozs7O0lBRXFCNEcsSTs7O0FBRXBCLHNCQUNBO0FBQUE7O0FBQUEseUJBRGNuTCxJQUNkO0FBQUEsUUFEY0EsSUFDZCwwQkFEcUIsU0FDckI7QUFBQSx3QkFEZ0MrTCxHQUNoQztBQUFBLFFBRGdDQSxHQUNoQyx5QkFEc0MsTUFDdEM7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEQ7SUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7RUFoQ2lDeEgsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxDOzs7Ozs7Ozs7Ozs7OztJQUVxQmlILEk7OztBQUVwQixzQkFDQTtBQUFBOztBQUNDO0FBQ0E7QUFDQTtBQUhEO0FBSUM7Ozs7U0FFRFEsWSxHQUFBQSx3QkFDQTtBQUNDLFdBQU8sS0FBUDs7OztFQVhnQ3pILGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkEsSTtBQUVwQixrQkFDQTtBQUNDO0FBQ0E7Ozs7U0FFRDBILEcsR0FBQUEsdUJBQ0E7QUFDQyxRQUFHLGlCQUFpQixjQUFwQixhQUErQztBQUM5QztBQUNBOzs7U0FHRkMsUSxHQUFBQSx5QkFDQTtBQUNDekcsU0FBSyxDQUFMQTtBQUNBOzs7U0FHRGhELE0sR0FBQUEsa0NBQ0E7QUFDQyxXQUFPMEosZ0JBQU0sS0FBTkEsMEJBQVAsT0FBT0EsQ0FBUDs7O1NBR0RDLFUsR0FBQUEsc0JBQ0E7QUFDQyxXQUFRLHdCQUF3QixhQUFoQzs7O1NBR0RDLGdCLEdBQUFBLDRCQUNBO0FBQ0MsUUFBSUMsS0FBSyxHQUFUOztBQUVBLHlEQUFpQixLQUFqQixnREFBZ0M7QUFBQSxVQUF4QjdHLEtBQXdCOztBQUMvQixVQUFHLENBQUNBLEtBQUssQ0FBVCxVQUFJQSxFQUFKLEVBQXdCO0FBQ3ZCNkcsYUFBSyxHQUFMQTtBQUNBO0FBQ0Q7O0FBRUQ7OztTQUdEQyxRLEdBQUFBLG9CQUNBO0FBQ0MsV0FERCxLQUNDLENBREQsQ0FDYzs7O1NBR2RQLFksR0FBQUEsb0NBQ0E7QUFBQSxRQURhUSxZQUNiO0FBRGFBLGtCQUNiLEdBRDRCLElBQWZBO0FBQ2I7O0FBQ0MsUUFBSXJMLFFBQVEsU0FBTyxLQUFuQjtBQUVBLFFBQUk4QyxLQUFLLEdBQUcsY0FBYyxZQUFkLGNBQVo7O0FBRUEsU0FBSSxJQUFKLGNBQXNCO0FBQ3JCOUMsY0FBUSx3QkFBZ0I4QyxLQUFLLENBQXJCLEdBQXFCLENBQXJCLEdBQVI5QztBQUNBOztBQUVEQSxZQUFRLElBQVJBO0FBRUEsUUFBSXNMLGFBQWEsR0FBRyxrQkFBa0IsaUJBQUs7QUFBQSxhQUFJaEgsS0FBSyxDQUFMQSxhQUFKLEtBQUlBLENBQUo7QUFBdkIsWUFBcEIsRUFBb0IsQ0FBcEI7QUFFQXRFLFlBQVEsSUFBUkE7QUFFQUEsWUFBUSxXQUFTLEtBQVQsTUFBUkE7O0FBRUEsUUFBRyw0Q0FBNEMsS0FBNUMsU0FBMEQsQ0FBN0QsY0FBNEU7QUFDM0U7QUFDQTs7QUFFRCxRQUFHLENBQUMsS0FBRCxPQUFhLEtBQWhCLFVBQWdCLEVBQWhCLEVBQW1DO0FBQ2xDO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBOUI1RUY7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXFCSkEsSUFBTXVMLFFBQVEsR0FBRyw2Z0NBQWpCLFVBQWlCLENBQWpCOztBQWNPLDJCQUNQO0FBQ0MsU0FBTyxDQUFDQSxRQUFRLENBQVJBLFNBQVIsSUFBUUEsQ0FBUjtBQUNBOztBQUVNLHdDQUNQO0FBQ0MsTUFBSVQsR0FBRyxHQUFHSCxNQUFNLENBQU5BLE9BQVYsSUFBVUEsQ0FBVjtBQUNBLE1BQUlhLElBQUksR0FBR0MsR0FBRyxDQUFIQSxNQUFYLEdBQVdBLENBQVg7O0FBRUEsT0FBSyxJQUFJdEwsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdxTCxJQUFJLENBQXhCLFFBQWlDckwsQ0FBakMsSUFBc0M7QUFDckMySyxPQUFHLENBQUNVLElBQUksQ0FBUlYsQ0FBUSxDQUFMLENBQUhBO0FBQ0E7O0FBRUQsU0FBT1ksZ0JBQWdCLEdBQ3RCLGVBQWM7QUFBRSxXQUFPWixHQUFHLENBQUNhLEdBQUcsQ0FBZCxXQUFXQSxFQUFELENBQVY7QUFETSxNQUV0QixlQUFjO0FBQUUsV0FBT2IsR0FBRyxDQUFWLEdBQVUsQ0FBVjtBQUZqQjtBQUdBLEM7Ozs7Ozs7Ozs7Ozs7O0FVL0JEOztBQUNBOztBQUNBOztBQUNBOztBQUlBOzs7O0FBR0EsU0FBU2MsSUFBVCxHQUFnQjtBQUVmLFdBQVNDLE9BQVQsQ0FBaUI3TCxRQUFqQixFQUEyQnlHLElBQTNCLEVBQWlDN0UsTUFBakMsRUFBeUM7QUFDeEMsUUFBSUEsTUFBSixFQUFZO0FBQ1gsYUFBTzVCLFFBQVEsQ0FBQ3VELE9BQVQsQ0FBaUJ1SSxTQUFqQixDQUEyQixJQUEzQixDQUFQO0FBQ0E7O0FBRUQsV0FBT3JGLElBQVA7QUFDQTs7QUFFRCxXQUFTc0YsWUFBVCxDQUFzQnhOLE9BQXRCLEVBQStCO0FBQzlCLFFBQUlBLE9BQU8sS0FBS3lOLFNBQVosSUFBeUJ6TixPQUFPLEtBQUssSUFBekMsRUFBK0M7QUFDOUNBLGFBQU8sR0FBRyxFQUFWO0FBQ0E7O0FBRUQsUUFBSTBOLE1BQU0sR0FBRzFOLE9BQU8sQ0FBQzBOLE1BQVIsSUFBa0IsRUFBL0I7QUFDQSxRQUFJQyxNQUFNLEdBQUczTixPQUFPLENBQUMyTixNQUFSLElBQWtCLEVBQS9CO0FBRUEsV0FBTztBQUNORCxZQUFNLEVBQU5BLE1BRE07QUFFTkMsWUFBTSxFQUFOQTtBQUZNLEtBQVA7QUFJQTs7QUFHRCxXQUFTQyxXQUFULEdBQXVCLENBRXRCOztBQUVELFdBQVNDLFlBQVQsQ0FBc0IzRixJQUF0QixFQUE0QjdFLE1BQTVCLEVBQW9DWCxPQUFwQyxFQUE2QztBQUM1QyxTQUFLLElBQUltRCxHQUFULElBQWdCbkQsT0FBaEIsRUFBeUI7QUFDeEJ3RixVQUFJLENBQUM0RixnQkFBTCxDQUFzQmpJLEdBQXRCLEVBQTJCbkQsT0FBTyxDQUFDbUQsR0FBRCxDQUFsQztBQUNBO0FBQ0Q7O0FBRUQsV0FBU2tJLE1BQVQsQ0FBZ0JKLE1BQWhCLEVBQXdCck4sSUFBeEIsRUFBOEI0SCxJQUE5QixFQUFvQzhGLFFBQXBDLEVBQThDO0FBQzdDLFFBQUlMLE1BQU0sQ0FBQ3JOLElBQUQsQ0FBTixLQUFpQm1OLFNBQXJCLEVBQWdDO0FBQy9CTyxjQUFRLENBQUM5RixJQUFELENBQVI7QUFDQTtBQUNBOztBQUVEQSxRQUFJLENBQUMrRixTQUFMLEdBQWlCTixNQUFNLENBQUNyTixJQUFELENBQXZCO0FBRUEsV0FBTzRILElBQVA7QUFDQSxHQTVDYyxDQThDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFdBQVNnRyxXQUFULENBQXFCaEcsSUFBckIsRUFBb0M7QUFDbkMsUUFBSWlHLFVBQVUsR0FBRyxLQUFqQjs7QUFEbUMsc0NBQU4zSyxJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFHbkMsU0FBSyxJQUFJNUIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzRCLElBQUksQ0FBQ2tHLE1BQXpCLEVBQWlDOUgsQ0FBQyxJQUFJLENBQXRDLEVBQXlDO0FBQ3hDLFVBQUk0QixJQUFJLENBQUM1QixDQUFELENBQVIsRUFBYTtBQUNadU0sa0JBQVUsR0FBRzNLLElBQUksQ0FBQzVCLENBQUMsR0FBRyxDQUFMLENBQUosQ0FBWXNHLElBQVosQ0FBYjtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxRQUFJaUcsVUFBVSxLQUFLLEtBQW5CLEVBQTBCO0FBQ3pCLGFBQU9qRyxJQUFQO0FBQ0E7O0FBRURBLFFBQUksQ0FBQ2tHLFdBQUwsQ0FBaUJELFVBQWpCO0FBRUEsV0FBT0EsVUFBUDtBQUNBLEdBN0VjLENBK0VmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUdBLE1BQUlFLE1BQU0sR0FBR25GLFFBQVEsQ0FBQ29GLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBYjs7QUFDQUQsUUFBTSxDQUFDSixTQUFQLEdBQW1CLDhCQUFuQjs7QUFFQSxNQUFJTSxNQUFNLEdBQUdyRixRQUFRLENBQUNvRixhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0FDLFFBQU0sQ0FBQ04sU0FBUCxHQUFtQixxSEFBbkI7O0FBRUEsV0FBU08sYUFBVCxDQUF1QnhPLE9BQXZCLEVBQWdDa0ksSUFBaEMsRUFBOEM7QUFBQSxRQUFkQSxJQUFjO0FBQWRBLFVBQWMsR0FBUCxLQUFPO0FBQUE7O0FBQzdDLFFBQUk3RSxNQUFNLEdBQUc2RSxJQUFJLEtBQUssS0FBdEI7O0FBRDZDLHdCQUdwQnNGLFlBQVksQ0FBQ3hOLE9BQUQsQ0FIUTtBQUFBLFFBR3ZDME4sTUFIdUMsaUJBR3ZDQSxNQUh1QztBQUFBLFFBRy9CQyxNQUgrQixpQkFHL0JBLE1BSCtCO0FBSTdDOzs7OztBQUdBLFFBQUljLEtBQUssR0FBRyw0QkFBVyxDQUFYLENBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsNEJBQVcsQ0FBWCxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLDRCQUFXLENBQVgsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBR3BHLEtBQUssQ0FBQ3FHLElBQU4sQ0FBVztBQUFFbkYsWUFBTSxFQUFFO0FBQVYsS0FBWCxFQUEwQixVQUFDb0YsQ0FBRCxFQUFJbE4sQ0FBSjtBQUFBLGFBQVVBLENBQVY7QUFBQSxLQUExQixDQUFaO0FBQ0EsUUFBSW1OLElBQUksR0FBRyxJQUFYO0FBRUEsUUFBSUMsQ0FBQyxHQUFHLDBCQUFTUCxLQUFULEVBQWdCLFlBQU07QUFDN0IsYUFBT00sSUFBSSxHQUFHTixLQUFkO0FBQ0EsS0FGTyxDQUFSOztBQUlBLGFBQVNRLE9BQVQsR0FBbUI7QUFDbEJySyxhQUFPLENBQUNzSyxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0Q7Ozs7O0FBR0EsUUFBSUMsS0FBSyxHQUFHN0IsT0FBTyxDQUFDZSxNQUFELEVBQVNuRyxJQUFULEVBQWU3RSxNQUFmLENBQW5COztBQUVBLFFBQUkrTCxLQUFLLEdBQUcvTCxNQUFNLEdBQUc4TCxLQUFLLENBQUNFLFVBQVQsR0FBc0JGLEtBQXhDOztBQUVBdkIsZUFBVyxDQUFDd0IsS0FBRCxFQUFRL0wsTUFBUixFQUFnQjtBQUMxQixlQUFTLENBRGlCO0FBRTFCLGdCQUFVO0FBQ1RnSyxZQUFJLEVBQUVvQjtBQURHLE9BRmdCO0FBSzFCLGdCQUFVQSxLQUxnQjtBQU0xQixlQUFTLDBCQUFTLENBQUNBLEtBQUQsRUFBUUMsS0FBUixDQUFULEVBQXlCLFlBQU07QUFDdkMsZUFBTyxDQUFDRCxLQUFLLEVBQU4sRUFBVTtBQUNoQmEsY0FBSSxFQUFFWixLQUFLLE9BQU87QUFERixTQUFWLEVBRUpLLElBRkksQ0FBUDtBQUdBLE9BSlE7QUFOaUIsS0FBaEIsQ0FBWDs7QUFhQSxRQUFJUSxLQUFLLEdBQUdILEtBQUssQ0FBQ0MsVUFBbEI7O0FBRUEsUUFBSUcsTUFBTSxHQUFHLGNBQU9ELEtBQVAsRUFBY1gsS0FBZCxFQUFxQixVQUFDYSxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDbEQsYUFBTyxVQUFVRCxLQUFWLEdBQWtCaEIsS0FBSyxFQUE5QjtBQUNBLEtBRlksRUFFVixVQUFDdkcsSUFBRCxFQUFPN0UsTUFBUCxFQUFlNEQsT0FBZixFQUF3QndJLEtBQXhCLEVBQStCQyxJQUEvQixFQUF3QztBQUMxQyxVQUFJQyxLQUFLLEdBQUdyQyxPQUFPLENBQUNpQixNQUFELEVBQVNyRyxJQUFULEVBQWU3RSxNQUFmLENBQW5COztBQUVBLFVBQUl1TSxLQUFLLEdBQUd2TSxNQUFNLEdBQUdzTSxLQUFLLENBQUNOLFVBQVQsR0FBc0JNLEtBQXhDOztBQUVBLGlDQUFVLENBQUNsQixLQUFELENBQVYsRUFBbUIsWUFBTTtBQUN4Qm1CLGFBQUssQ0FBQ0MsWUFBTixDQUFtQixVQUFuQixFQUErQixVQUFVSixLQUFWLEdBQWtCaEIsS0FBSyxFQUF0RDtBQUNBLE9BRkQsRUFFRyxDQUFDcEwsTUFGSjs7QUFJQXdLLGtCQUFZLENBQUMrQixLQUFELEVBQVF2TSxNQUFSLEVBQWdCO0FBQzNCLGlCQUFTLGVBQVN5TSxLQUFULEVBQWdCO0FBQ3hCLGlCQUFPYixPQUFPLEVBQWQ7QUFDQSxTQUgwQjtBQUkzQixxQkFBYSxtQkFBU2EsS0FBVCxFQUFnQjtBQUM1QixpQkFBT2IsT0FBTyxDQUFDYSxLQUFELENBQWQ7QUFDQTtBQU4wQixPQUFoQixDQUFaOztBQVNBLFVBQUlDLEtBQUssR0FBR0gsS0FBSyxDQUFDUCxVQUFsQjtBQUNBLGlDQUFVLENBQUNaLEtBQUQsQ0FBVixFQUFtQixZQUFNO0FBQ3hCc0IsYUFBSyxDQUFDQyxTQUFOLHVCQUFvQ3ZCLEtBQUssRUFBekM7QUFDQSxPQUZEO0FBR0EsVUFBSXdCLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxXQUFsQjs7QUFFQXJDLGtCQUFZLENBQUNvQyxLQUFELEVBQVE1TSxNQUFSLEVBQWdCO0FBQzNCLHFCQUFhLG1CQUFTeU0sS0FBVCxFQUFnQjtBQUM1QixpQkFBT0ssS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNBO0FBSDBCLE9BQWhCLENBQVo7O0FBTUEsVUFBSUMsS0FBSyxHQUFHSCxLQUFLLENBQUNaLFVBQWxCOztBQUNBdEIsWUFBTSxDQUFDSixNQUFELEVBQVMsU0FBVCxFQUFvQnlDLEtBQXBCLEVBQTJCLFVBQUFsSSxJQUFJLEVBQUk7QUFDeEMsWUFBSW1JLEtBQUssR0FBR0QsS0FBSyxDQUFDZixVQUFsQjtBQUNBLFlBQUlpQixNQUFNLEdBQUdELEtBQUssQ0FBQ0gsV0FBbkI7QUFDQSxZQUFJSyxNQUFNLEdBQUdELE1BQU0sQ0FBQ2pCLFVBQXBCO0FBQ0EsWUFBSW1CLE1BQU0sR0FBR0YsTUFBTSxDQUFDSixXQUFwQjtBQUNBLE9BTEssQ0FBTjs7QUFPQSxhQUFPN00sTUFBTSxHQUFHc00sS0FBSCxHQUFXTSxLQUF4QjtBQUNBLEtBekNZLEVBeUNWNU0sTUF6Q1UsQ0FBYjs7QUEyQ0EsV0FBT0EsTUFBTSxHQUFHOEwsS0FBSCxHQUFXQyxLQUF4QjtBQUNBOztBQUVELE1BQUlxQixNQUFNLEdBQUd2SCxRQUFRLENBQUN3SCxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQUQsUUFBTSxDQUFDeEMsU0FBUCxHQUFtQixFQUFuQjtBQUVBLHFCQUFLLFFBQUw7QUFDQXdDLFFBQU0sQ0FBQ0UsV0FBUCxDQUFtQm5DLGFBQWEsRUFBaEM7QUFDQSxxQkFBSyxRQUFMLEVBMUxlLENBNExmOztBQUVBLE1BQUlvQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ3hDLFNBQWpCO0FBQ0F3QyxRQUFNLENBQUN4QyxTQUFQLEdBQW1CMkMsR0FBbkI7QUFFQSxxQkFBSyxTQUFMO0FBQ0FwQyxlQUFhLENBQUMsSUFBRCxFQUFPaUMsTUFBTSxDQUFDcEIsVUFBZCxDQUFiO0FBQ0EscUJBQUssU0FBTCxFQW5NZSxDQW9NZjtBQUNBOztBQUVEaEMsSUFBSTs7QUFFSixTQUFTd0QsSUFBVCxHQUFnQjtBQUVmLE1BQUk1RixJQUFJLG9TQUFSO0FBd0JBQSxNQUFJLDJ5QkFBSjtBQWtDQSxNQUFJMUosTUFBTSxHQUFHLG1CQUFNMEosSUFBTixDQUFiO0FBRUEsU0FBTyx1QkFBUTFKLE1BQVIsQ0FBUCxDQTlEZSxDQStEZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25SRCxJQUFJdVAsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBUy9CLElBQVQsQ0FBY3pPLElBQWQsRUFDZjtBQUNDLE1BQUl5USxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9ILEtBQUssQ0FBQ3hRLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0Q3dRLFNBQUssQ0FBQ3hRLElBQUQsQ0FBTCxHQUFjeVEsR0FBZDtBQUNBLFdBQU9ELEtBQUssQ0FBQ3hRLElBQUQsQ0FBWjtBQUNBOztBQUVEc0UsU0FBTyxDQUFDc0ssR0FBUixXQUFvQjVPLElBQXBCLFNBQThCeVEsR0FBRyxHQUFHRCxLQUFLLENBQUN4USxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT3dRLEtBQUssQ0FBQ3hRLElBQUQsQ0FBWjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50LCBwYXJzZSB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodmFsdWUudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiB2YWx1ZS5jYWxsZWUubmFtZSA9PT0gJyRvJykge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YS52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRkYXRhLm1ldGhvZHMucHVzaChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRhdGE7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVuY2llcyhhc3QsIG9ic2VydmFibGVzID0gW10pXG57XG5cdGxldCBkZXBzID0ge307XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRlcHM7XG59IiwiaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFNsb3QgZnJvbSAnLi9TbG90JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBDb21wb25lbnQsIFNsb3QgfSIsImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgYW5hbHlzZSB9IGZyb20gJ0BoYXdhL2FuYWx5c2VyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cdC8vIGNvbnNvbGUud2Fybihjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyb3dGdW5jdGlvbih7IHZhbHVlID0gW10sIGFyZ3MgPSBbXSB9LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3RyaW5nKTtcblxuXHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG5cdHJldHVybiBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oXG5cdFx0YXJncy5tYXAoaXRlbSA9PiBpZChpdGVtKSksXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0LmNvbnRlbnQpXG5cdFx0XSksXG5cdClcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXNbbmFtZV0sIG1ha2VDb21wdXRlZCk7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUF0dHJzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlRnVuY3Rpb24gfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5ldmVudHMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCBlbnRpdHkub3B0aW9uLmV2ZW50c1tuYW1lXSwgbWFrZUZ1bmN0aW9uKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlRXZlbnRzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlQ29tcHV0ZWQgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb24odmFsdWUsIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0dmFsdWUgPSB7XG5cdFx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0fTtcblx0fVxuXG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZUNvbXB1dGVkKTtcblxuXHQvLyBjb25zb2xlLndhcm4ocmVzdWx0KTtcblx0cmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgeyBtYWtlQXR0clZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgcHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJy4vc3RyaW5nJztcbmltcG9ydCB7IGV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuaW1wb3J0IHsgYXJyb3dGdW5jdGlvbiB9IGZyb20gJy4vYXJyb3dGdW5jdGlvbic7XG5pbXBvcnQgeyBzZXRBdHRyIH0gZnJvbSAnLi9zZXRBdHRyJztcblxuLy8gZXhwb3J0IHsgYXR0cnMsIGV2ZW50cywgcHJvcHMgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGNvbnRleHQpXG57XG5cdHJldHVybiB7XG5cdFx0YXR0cnM6IGF0dHJzLmJpbmQoY29udGV4dCksXG5cdFx0ZXZlbnRzOiBldmVudHMuYmluZChjb250ZXh0KSxcblx0XHRwcm9wczogcHJvcHMuYmluZChjb250ZXh0KSxcblx0XHRzdHJpbmc6IHN0cmluZy5iaW5kKGNvbnRleHQpLFxuXHRcdGV4cHJlc3Npb246IGV4cHJlc3Npb24uYmluZChjb250ZXh0KSxcblx0XHRhcnJvd0Z1bmN0aW9uOiBhcnJvd0Z1bmN0aW9uLmJpbmQoY29udGV4dCksXG5cdFx0c2V0QXR0cjogc2V0QXR0ci5iaW5kKGNvbnRleHQpLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3BzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uYXR0cmlidXRlcykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZShlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXNbbmFtZV0pO1xuXHR9XG5cblxuXHRjb25zb2xlLndhcm4oZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKVxuXG5cdHJldHVybjtcblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IGtleSBpbiB0aGlzLmF0dHJzKSB7XG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChrZXkpLFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMuYXR0cnNba2V5XSksXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN1YnNjcmliZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cih7IG5hbWUgPSAna2V5JywgVHlwZSB9LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoVHlwZS5vcHRpb25bbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB2YWx1ZSA9IFR5cGUub3B0aW9uW25hbWVdO1xuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VTdWJzY3JpYmUpO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgnc2V0QXR0cmlidXRlJylcblx0XHRcdCksXG5cdFx0XHRbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoYGRhdGEtJHtuYW1lfWApLFxuXHRcdFx0XHRyZXN1bHQuZXhwclxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRpZihyZXN1bHQuc2hvdWxkV3JhcCkge1xuXHRcdGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdFx0aWQoJ3N1YnNjcmliZScpLFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0cmVzdWx0LmRlcHMsXG5cdFx0XHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLFxuXHRcdFx0XHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdFx0XHRcdFx0ZXhwcmVzc2lvblxuXHRcdFx0XHRcdFx0XSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXHRcblx0Ly8gY29uc29sZS5sb2coZXhwcmVzc2lvbik7XG5cdC8vIHJldHVybiByZXN1bHRcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlzRXhwcmVzc2lvbiA9IGVudGl0eS52YWx1ZS5tYXRjaCgvXFwkXFx7LipcXH0vZykgIT09IG51bGw7XG5cblx0aWYoIWlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB7IGRlcHMsIGNvbnRlbnQgfSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHtcblx0XHRpc0V4cHJlc3Npb24sXG5cdFx0dmFsdWU6IGBcXGAkeyBlbnRpdHkudmFsdWUgfVxcYGAsXG5cdH0sIG1ha2VTdHJpbmcpO1xuXG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRcdG5ldyBhc3NpZ25tZW50RXhwcmVzc2lvbihcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24ocG9pbnQsIGlkKCdub2RlVmFsdWUnKSksXG5cdFx0XHRcdFx0Y29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0XSlcblx0KTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFtkZXBzLCBib2R5XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG5cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGZ1bmN0aW9uRXhwcmVzc2lvbixcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5jb25zdCBUTVBfSURFTlRJRklFUiA9ICdfdG1wJGFzdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVmFsdWUoY29udGV4dCwgdmFsdWUsIGZuKVxue1xuXHRpZighdmFsdWUuaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuIHN0cmluZ0xpdGVyYWwodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0bGV0IGNvZGUgPSBgJHtUTVBfSURFTlRJRklFUn0gPSAke3ZhbHVlLnZhbHVlfWA7XG5cblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKGNvZGUsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdHJldHVybiBmbihhc3QsIGNvbnRleHQpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpbiBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZ1bmN0aW9uKGFzdCwgY29udGV4dClcbntcblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXHRcdFx0XHRpZihjb250ZXh0Lm1ldGhvZHMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRpZihwYXRoLnBhcmVudC50eXBlICE9PSAnQ2FsbEV4cHJlc3Npb24nKSB7XG5cdFx0XHRcdFx0XHRpZC5uYW1lID0gYCR7aWQubmFtZX0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXG5cdHJldHVybiBuZXcgZnVuY3Rpb25FeHByZXNzaW9uKG51bGwsIFtpZCgnZXZlbnQnKV0sIG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdF0pKTtcbn1cblxuLyoqXG4gKiBDb21waWxlIHN0cmluZyB0byBET00gZXhwcmVzc2lvblxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0cmluZyhhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXG5cdHJldHVybiB7XG5cdFx0Y29udGVudDogcmVzdWx0LFxuXHRcdGRlcHM6IGRlcHMsXG5cdH1cbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaXQgY29tcHV0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb21wdXRlZChhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXG5cdGxldCBib2R5ID0gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdClcblx0XHRdKVxuXHQpO1xuXG5cdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0aWQoJ2NvbXB1dGVkJyksXG5cdFx0W2RlcHMsIGJvZHldXG5cdClcbn1cblxuXG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3Vic2NyaWJlKGFzdCwgY29udGV4dClcbntcblx0bGV0IGRlcHMgPSBbXTtcblx0bGV0IHN0YXRlZnVsQ291bnRlciA9IDA7XG5cdGxldCBpZGVudGlmaWVyc0NvdW50ZXIgPSAwO1xuXHRsZXQgc2hvdWxkV3JhcCA9IHRydWU7XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpIHx8IHBhdGgubm9kZS5uYW1lID09PSBUTVBfSURFTlRJRklFUikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlkZW50aWZpZXJzQ291bnRlcisrO1xuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRzdGF0ZWZ1bENvdW50ZXIrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0XG5cdGlmKGlkZW50aWZpZXJzQ291bnRlciA8PSAxIHx8IHN0YXRlZnVsQ291bnRlciA9PSAwKSB7XG5cdFx0c2hvdWxkV3JhcCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coaWRlbnRpZmllcnNDb3VudGVyLCBzdGF0ZWZ1bENvdW50ZXIsIHNob3VsZFdyYXApXG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGRlcHMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRpZihzaG91bGRXcmFwKSB7XG5cdFx0XHRcdFx0XHRpZC5uYW1lID0gYCR7IGlkLm5hbWUgfSgpYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXHRcblx0Ly8gaWYoZGVwcy5sZW5ndGggPT09IDAgfHwgc2hvdWxkV3JhcCA9PT0gZmFsc2UpIHtcblx0Ly8gXHRyZXR1cm4gcmVzdWx0O1xuXHQvLyB9XG5cdFxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cdHJldHVybiB7XG5cdFx0c2hvdWxkV3JhcCxcblx0XHRkZXBzLFxuXHRcdGV4cHI6IHJlc3VsdCxcblx0fVxuXHRcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4uL2R5bmFtaWMnO1xuXG4vLyBUTyBETyBORVhUIE5PREVTXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0b3B0aW9ucy5keW5hbWljLmF0dHJzKHRoaXMsIGluaXQsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCgnbmV4dFNpYmxpbmcnKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiwgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3V0aWxzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFYWNoQ29uZGl0aW9uKGVudGl0eSlcbntcblx0bGV0IHN0YXRlbWVudCA9IGVudGl0eS52YWx1ZS5tYXRjaEFsbCgvXFwoKD88aXRlbT5bQS16MC05XSspXFxzPyhcXCxcXHM/KD88a2V5PltBLXowLTldKylcXHM/KT9cXClcXHM/aW5cXHMoPzxjb25kaXRpb24+LiopL2cpO1xuXG5cdGxldCBjb25kaXRpb24gPSBudWxsO1xuXHRsZXQgYXJncyA9IFtdO1xuXG5cdGZvcihsZXQgbWF0Y2ggb2Ygc3RhdGVtZW50KSB7XG5cblx0XHRpZihtYXRjaC5ncm91cHMuaXRlbSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5pdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaXRlbScpO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRrZXk6IGZpbmRLZXkoZW50aXR5KSxcblx0XHRjb25kaXRpb24sXG5cdFx0YXJncyxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEtleShlbnRpdHkpXG57XG5cdGxldCBrZXkgPSBudWxsO1xuXHRmb3IobGV0IGNoaWxkIG9mIGVudGl0eS5jaGlsZHJlbilcblx0e1xuXHRcdGlmKGNoaWxkLm9wdGlvbi5rZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0a2V5ID0gY2hpbGQub3B0aW9uLmtleTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdGlmKGtleSA9PT0gbnVsbCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignS2V5IGlzIHJlcXVpcmVkIGZvciBFYWNoIGxvb3AgKGZvciBoeWRyYXRpb24pJyk7XG5cdH1cblxuXHRyZXR1cm4ga2V5O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblx0bGV0IGJvZHkgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cblx0LyoqXG5cdCAqIExvb3AgcHJlcGFyYXRpb25cblx0ICogMS4gS2V5IGdlbmVyYXRpb24gZnVuY3Rpb25cblx0ICogMi4gQ29uZGl0aW9uIGV4cHJlc3Npb25cblx0ICogMy4gSXRlbSBhbmQga2V5IGlkaW50aWZpZXJzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgbG9vcCA9IHBhcnNlRWFjaENvbmRpdGlvbih0aGlzKTtcblxuXHRsZXQgdmFsdWUgPSBvcHRpb25zLmR5bmFtaWMuZXhwcmVzc2lvbihsb29wLmNvbmRpdGlvbiwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblx0bGV0IGtleSA9IG9wdGlvbnMuZHluYW1pYy5hcnJvd0Z1bmN0aW9uKHtcblx0XHR2YWx1ZTogbG9vcC5rZXksXG5cdFx0YXJnczogbG9vcC5hcmdzXG5cdH0sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0cGFyYW1zLnB1c2godmFsdWUpO1xuXHRwYXJhbXMucHVzaChrZXkpO1xuXG5cdC8qKlxuXHQgKiBHZXQgbG9vcCB0ZW1wbGF0ZVxuXHQgKi9cblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShib2R5LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgaWQoJ25vZGUnKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGJvZHkucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKTtcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGJvZHkucHVzaChyZXR1cm5Qb2ludGVyKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oXG5cdFx0XHRbIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKSwgaWQoJ19rZXlFeHByJCcpIF0uY29uY2F0KGxvb3AuYXJncy5tYXAoaXRlbSA9PiBpZChpdGVtKSkpLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpLFxuXHRcdClcblx0KTtcblxuXHRwYXJhbXMucHVzaChpZCgncmVuZGVyJykpO1xuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19lYWNoJCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHByb2dyYW0gZnJvbSAnLi9wcm9ncmFtJztcbmltcG9ydCBzdGF0ZW1lbnQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcbmltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9zbG90JztcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgeyBwcm9ncmFtLCBzdGF0ZW1lbnQsIGVhY2gsIG5vZGUsIHRleHQsIHNsb3QsIGNvbXBvbmVudCB9IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4uL2R5bmFtaWMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLm1ha2VWYWx1ZSk7XG5cdC8vIH1cdFxuXHRcblx0b3B0aW9ucy5keW5hbWljLnNldEF0dHIoe1xuXHRcdFR5cGU6IHRoaXMsXG5cdFx0bmFtZTogJ2tleScsXG5cdH0sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0b3B0aW9ucy5keW5hbWljLmF0dHJzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdG9wdGlvbnMuZHluYW1pYy5ldmVudHModGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2dyYW0oY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBpZCgncmVuZGVyJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKVxuXG5cdFxuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKHJldHVyblBvaW50ZXIpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtcblx0XHRpZCgnJHNsb3RzJyksXG5cdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3Nsb3QkJyksIHBhcmFtcylcblx0KTtcblxuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sXG5cdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSlcblx0XHQpXG5cdClcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZW1lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgYmxvY2sgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdGxldCBib2R5ID0gW107XG5cblx0XHR0aGlzLmNoaWxkcmVuW2ldLmhhbmRsZShib2R5LCB7XG5cdFx0XHRsYXN0Q29udGV4dFZhcmlhYmxlSWQ6IG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHRcdC4uLm9wdGlvbnNcblx0XHR9KTtcblxuXHRcdHBhcmFtcy5wdXNoKGlkKGJsb2NrLnZhbHVlKSk7XG5cdFx0cGFyYW1zLnB1c2goXG5cdFx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdFx0KTtcblx0fVxuXG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3N0YXRlbWVudCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXh0KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cblx0b3B0aW9ucy5keW5hbWljLnN0cmluZyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdC8vIH1cblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdHJldHVybiBpZCgnY3JlYXRlVGVhbXBsYXRlJyk7XG5cdC8vIH0pO1xuXG5cdC8vIGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0Ly8gbGV0IHBvaW50ZXIgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdGlmKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZCgnZmlyc3RDaGlsZCcpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBsO1xuXHQvLyB9KTtcblx0XG5cdC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcblx0Ly8gY29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBvaW50ZXIgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihsLCBpZCgnZmlyc3RDaGlsZCcpKSxcblx0XHRcdGxcblx0XHQpXG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIHR5cGUpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCh0eXBlKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGN1c3RvbURlZmluZXIgPSBmYWxzZSlcbntcblx0aWYoZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdGN1c3RvbURlZmluZXIgPSAoKSA9PiB7fTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhlbnRpdHksIGVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkpO1xuXHRpZighZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSAmJiAhZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdG9wdGlvbnMuY3JlYXRlQ29udGV4dCgpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZEhhbmRsZShlbnRpdHkuY2hpbGRyZW5baV0sIGNvbnRleHQsIG9wdGlvbnMsIGksIGN1c3RvbURlZmluZXIpO1xuXHR9XG5cblx0bGV0IGxhc3RDaGlsZCA9IG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKTtcblxuXHRpZighZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSAmJiAhZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdG9wdGlvbnMucmVtb3ZlQ29udGV4dCgpO1xuXHR9XG5cblx0cmV0dXJuIGxhc3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkSGFuZGxlKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgaW5kZXgsIGN1c3RvbURlZmluZXIpXG57XG5cdGxldCBpc0ZpcnN0ID0gaW5kZXggPT09IDA7XG5cblx0aWYoY3VzdG9tRGVmaW5lciAmJiBpc0ZpcnN0KSB7XG5cdFx0Y3VzdG9tRGVmaW5lcihjb250ZXh0LCBvcHRpb25zKTtcblx0fSBlbHNlIHtcblx0XHRpZighZW50aXR5LnNraXBJbml0KCkpIHtcblx0XHRcdG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIGlzRmlyc3QgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdH1cblx0fVxuXG5cdGVudGl0eS5oYW5kbGUoY29udGV4dCwgb3B0aW9ucyk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS53YXJuKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGFFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiY29uc3QgSFRNTFRhZ3MgPSBbXG5cdFwiIWRvY3R5cGVcIiwgXCJhXCIsIFwiYWJiclwiLCBcImFjcm9ueW1cIiwgXCJhZGRyZXNzXCIsIFwiYXBwbGV0XCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsXG5cdFwiYlwiLCBcImJhc2VcIiwgXCJiYXNlZm9udFwiLCBcImJiXCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLFxuXHRcImNhcHRpb25cIiwgXCJjZW50ZXJcIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiY29tbWFuZFwiLCBcImRhdGFncmlkXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLFxuXHRcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXJcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImV2ZW50c291cmNlXCIsIFwiZmllbGRzZXRcIixcblx0XCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9udFwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJmcmFtZVwiLCBcImZyYW1lc2V0XCIsIFwiaDE+IHRvIDxoNlwiLCBcImhlYWRcIiwgXCJoZWFkZXJcIixcblx0XCJoZ3JvdXBcIiwgXCJoclwiLCBcImh0bWxcIiwgXCJpXCIsIFwiaWZyYW1lXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJpbnNcIiwgXCJpc2luZGV4XCIsIFwia2JkXCIsIFwia2V5Z2VuXCIsIFwibGFiZWxcIixcblx0XCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWVudVwiLCBcIm1ldGFcIiwgXCJtZXRlclwiLCBcIm5hdlwiLCBcIm5vZnJhbWVzXCIsIFwibm9zY3JpcHRcIixcblx0XCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicnBcIiwgXCJydFwiLFxuXHRcInJ1YnlcIiwgXCJzXCIsIFwic2FtcFwiLCBcInNjcmlwdFwiLCBcInNlY3Rpb25cIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIixcblx0XCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsXG5cdFwidHJcIiwgXCJ0cmFja1wiLCBcInR0XCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIiwgXCJ0ZW1wbGF0ZVwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQobmFtZSlcbntcblx0cmV0dXJuICFIVE1MVGFncy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKVxue1xuXHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRtYXBbbGlzdFtpXV0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgP1xuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfSA6XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuIiwiLy8gZXZlbnRzIC0gQCAtPiBpZChhdHRycyB2YWx1ZSlcbi8vIGV4cHJlc3Npb24gOiBpZChhdHRycylcbi8vIHN0cmluZ2xpdHRlcmFsIFxuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbnZhciBpc0F0dHIgPSBtYWtlTWFwKFxuXHQnYWNjZXB0LGFjY2VwdC1jaGFyc2V0LGFjY2Vzc2tleSxhY3Rpb24sYWxpZ24sYWx0LGFzeW5jLGF1dG9jb21wbGV0ZSwnICtcblx0J2F1dG9mb2N1cyxhdXRvcGxheSxhdXRvc2F2ZSxiZ2NvbG9yLGJvcmRlcixidWZmZXJlZCxjaGFsbGVuZ2UsY2hhcnNldCwnICtcblx0J2NoZWNrZWQsY2l0ZSxjbGFzcyxjb2RlLGNvZGViYXNlLGNvbG9yLGNvbHMsY29sc3Bhbixjb250ZW50LGh0dHAtZXF1aXYsJyArXG5cdCduYW1lLGNvbnRlbnRlZGl0YWJsZSxjb250ZXh0bWVudSxjb250cm9scyxjb29yZHMsZGF0YSxkYXRldGltZSxkZWZhdWx0LCcgK1xuXHQnZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsbWV0aG9kLGZvciwnICtcblx0J2Zvcm0sZm9ybWFjdGlvbixoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsJyArXG5cdCdpY29uLGlkLGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxpc3QsbG9vcCxsb3csJyArXG5cdCdtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1lZGlhLG1ldGhvZCxHRVQsUE9TVCxtaW4sbXVsdGlwbGUsZW1haWwsZmlsZSwnICtcblx0J211dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlciwnICtcblx0J3ByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsJyArXG5cdCdzY29wZSxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc2hhcGUsc2l6ZSx0eXBlLHRleHQscGFzc3dvcmQsc2l6ZXMsc3BhbiwnICtcblx0J3NwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsJyArXG5cdCd0YXJnZXQsdGl0bGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcCdcbik7XG5cbnZhciBpc0RvbUF0dHIgPSAobmFtZSkgPT4ge1xuXHRyZXR1cm4gaXNBdHRyKG5hbWUpIHx8IG5hbWUubWF0Y2goL15kYXRhXFwtL2cpO1xufVxuXG52YXIgaXNSb290QXR0ciA9IG1ha2VNYXAoXG5cdCdrZXkscmVmJ1xuKTtcblxuZnVuY3Rpb24gbWFrZVZhbHVlKHZhbHVlLCBpc0V4cHJlc3Npb24gPSBmYWxzZSlcbntcblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRpc0V4cHJlc3Npb24sXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG9iailcbntcblx0bGV0IHJlc3VsdCA9IHtcblx0XHRldmVudHM6IHt9LFxuXHRcdHByb3BzOiB7fSxcblx0XHRhdHRyaWJ1dGVzOiB7fSxcblx0XHRzdGF0aWNBdHRyczoge30sXG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gb2JqKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gb2JqW25hbWVdO1xuXG5cdFx0aWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRyZXN1bHQuc3RhdGljQXR0cnNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXkAvZykpIHtcblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL15AL2csICcnKTtcblx0XHRcdHJlc3VsdC5ldmVudHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eXFw6L2cpKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFw6L2csICcnKTtcblx0XHRcdHZhbHVlID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHRcdFxuXHRcdFx0aWYoaXNSb290QXR0cihuYW1lKSkge1xuXHRcdFx0XHRyZXN1bHRbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSBpZihpc0RvbUF0dHIobmFtZSkpIHtcblx0XHRcdFx0cmVzdWx0LmF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJlc3VsdC5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQucHJvcHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUpO1xuXHRcdFx0Ly8gY29uc29sZS5lcnJvcihgQXR0ciAke25hbWV9IGRvZXNudCByZWdpc3RlcmVkLiBDYW50IHVuZGVyc3RhbmQgdHlwZS5gKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgcHJlcGFyZSB9IGZyb20gJy4vcHJlcGFyZSc7XG5pbXBvcnQgeyBpc0NvbXBvbmVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgUGFyc2VyIGFzIEhUTUxQYXJzZXIgfSBmcm9tICdodG1scGFyc2VyMic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrcyhibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0bGV0IG1hdGNoZXMgPSByZWdleHAuZXhlYyhodG1sKTtcblx0XHRpZihtYXRjaGVzKSB7XG5cdFx0XHRibG9ja3Nba2V5XSA9IG1hdGNoZXNbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGJsb2Nrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGh0bWwpXG57XG5cdC8vIGdldCBhZGRpdGlvbmFsIGJsb2NrcyBlLmcuIHNjcmlwdCwgc3R5bGUsIGRvY1xuXHRsZXQgYmxvY2tzID0gcGFyc2VCbG9ja3Moe1xuXHRcdHNjcmlwdDogbnVsbCxcblx0XHRzdHlsZTogbnVsbCxcblx0fSwgaHRtbCk7XG5cblx0Ly8gY2xlYW4gdXAgaHRtbCBhbmQgcmVwbGFjZSBleHByZXNzaW9uIHdpdGggdGFnLWV4cHJlc3Npb25cblx0aHRtbCA9IHByZXBhcmUoYmxvY2tzLCBodG1sKTtcblxuXHQvLyBQYXJzZSBUQUdzXG5cdGxldCBzdGFjayA9IFtcblx0XHRuZXcgRXhwcmVzc2lvbih7IHR5cGU6ICdwcm9ncmFtJyB9KVxuXHRdO1xuXG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNCbG9ja1RhZyhuYW1lKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrLmxlbmd0aCA9PT0gMSAmJiBbJ3NjcmlwdCcsICdzdHlsZSddLmluY2x1ZGVzKG5hbWUpO1xuXHR9XG5cblx0Y29uc3QgcGFyc2UgPSBuZXcgSFRNTFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cdFx0XHRsZXQgZW50aXR5O1xuXG5cdFx0XHRpZihuYW1lID09PSAnZXhwcicpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IEV4cHJlc3Npb24oYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzbG90Jykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgU2xvdChhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzQ29tcG9uZW50KG5hbWUpKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBDb21wb25lbnQobmFtZSwgYXR0cnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IE5vZGUobmFtZSwgYXR0cnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0cGFyZW50LmFkZENoaWxkKGVudGl0eSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2goZW50aXR5KTtcblx0XHR9LFxuXG5cdFx0b250ZXh0KHRleHQpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblxuXHRcdFx0dGV4dCA9IHRleHQudHJpbSgpO1xuXG5cdFx0XHRpZih0ZXh0ICE9PSAnJyAmJiBwYXJlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSBuZXcgVGV4dCh0ZXh0KTtcblx0XHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH0sXG5cblx0XHRvbmNsb3NldGFnKG5hbWUpXG5cdFx0e1xuXHRcdFx0bGV0IHJlbW92ZWQgPSBzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0YmxvY2tzLnRlbXBsYXRlID0gc3RhY2tbMF07XG5cdC8vIGNvbnNvbGUubG9nKGJsb2Nrcy50ZW1wbGF0ZS5jaGlsZHJlblswXSlcblx0cmV0dXJuIGJsb2Nrcztcbn1cbiIsImZ1bmN0aW9uIHByZXBhcmVIVE1MKGh0bWwpXG57XG5cdHJldHVybiBodG1sLnJlcGxhY2UoL1xcdC9nLCAnICcpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuXHR9XG5cblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRlYWNoL2csICc8L2V4cHI+JylcblxuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IobmFtZSwgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnY29tcG9uZW50Jztcblx0fVxuXHRcblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdFxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyBuYW1lID0gJ2RlZmF1bHQnLCB0YWcgPSAnc3BhbicgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XHRcblx0Ly8gbWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdC8vIHtcblx0Ly8gXHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblxuXHQvLyBcdHRlbXBsYXRlICs9ICc+JztcblxuXHQvLyBcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHQvLyBcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0Ly8gXHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0Ly8gXHRcdHJldHVybiAnPCEtLS0tPic7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYoIXRoaXMudGFnKSB7XG5cdC8vIFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gdGVtcGxhdGU7XG5cdC8vIH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHR0aGlzLnR5cGUgPSAndGV4dCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufSIsImltcG9ydCB7IHJ1bGVzIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdG1hcChjYWxsYmFjaylcblx0e1xuXHRcdGlmKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy50eXBlICE9PSAnc3RhdGVtZW50Jykge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0Y2hpbGQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpXG5cdHtcblx0XHRyZXR1cm4gcnVsZXNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9XG5cblx0aXNUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gKHRoaXMudHlwZSA9PT0gJ25vZGUnICYmIHRoaXMudGFnID09PSAndGVtcGxhdGUnKTtcblx0fVxuXG5cdGhhc0Fsb25lVGVtcGxhdGUoKVxuXHR7XG5cdFx0bGV0IGFsb25lID0gdHJ1ZTtcblxuXHRcdGZvcihsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuXHRcdFx0aWYoIWNoaWxkLmlzVGVtcGxhdGUoKSkge1xuXHRcdFx0XHRhbG9uZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhbG9uZTtcblx0fVxuXG5cdHNraXBJbml0KClcblx0e1xuXHRcdHJldHVybiBmYWxzZTsvL3RoaXMudHlwZSA9PT0gJ3Byb2dyYW0nIHx8IHRoaXMudHlwZSA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblx0XHRcblx0XHRsZXQgYXR0cnMgPSB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uLnN0YXRpY0F0dHJzIDoge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBhdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcgfHwgdGhpcy5pc1RlbXBsYXRlKCkpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBtYXAgYXMgX2VhY2gkIH0gZnJvbSAnQGhhd2EvbWFwJztcblxuXG5cbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuZnVuY3Rpb24gdGVzdCgpIHtcblxuXHRmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0XHRpZiAocmVuZGVyKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGV4dCA9IHt9O1xuXHRcdH1cblxuXHRcdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0XHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0JHByb3BzLFxuXHRcdFx0JHNsb3RzLFxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX21ha2VBdHRycyQoKSB7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIF9tYWtlRXZlbnRzJChub2RlLCByZW5kZXIsIG9wdGlvbnMpIHtcblx0XHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGtleSwgb3B0aW9uc1trZXldKVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIF9zbG90JCgkc2xvdHMsIG5hbWUsIG5vZGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub2RlLmlubmVySFRNTCA9ICRzbG90c1tuYW1lXTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0Ly8gZnVuY3Rpb24gdmFsdWVTdWJzY3JpYmUocmVuZGVyLCBwcm9wLCBmbilcblx0Ly8ge1xuXHQvLyBcdGlmKCFpc09ic2VydmFibGUocHJvcCkpIHtcblx0Ly8gXHRcdGlmKGh5ZHJhdGUpIHtcblx0Ly8gXHRcdFx0Zm4ocHJvcCk7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRyZXR1cm47XG5cdC8vIFx0fVxuXG5cdC8vIFx0c3Vic2NyaWJlKHByb3AsICgpID0+IHtcblx0Ly8gXHRcdGZuKHByb3AoKSk7XG5cdC8vIFx0fSwgIXJlbmRlcik7XG5cdC8vIH1cblxuXHRmdW5jdGlvbiBfc3RhdGVtZW50JChub2RlLCAuLi5hcmdzKSB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBmYWxzZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0aWYgKGFyZ3NbaV0pIHtcblx0XHRcdFx0cmV0dXJuTm9kZSA9IGFyZ3NbaSArIDFdKG5vZGUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAocmV0dXJuTm9kZSA9PT0gZmFsc2UpIHtcblx0XHRcdHJldHVybiBub2RlO1xuXHRcdH1cblxuXHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cblx0XHRyZXR1cm4gcmV0dXJuTm9kZTtcblx0fVxuXG5cdC8vIGxldCB7IHJlbmRlciwgdGVtcGxhdGVzIH0gPSBnZXR0KCk7XG5cdC8vIGNvbnNvbGUubG9nKHJlbmRlcik7XG5cdC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlcyk7XG5cdC8vIHJldHVybjtcblxuXHQvKipcblx0ICogR0VORVJBVEVEIENPREVcblx0ICovXG5cdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkMS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIjJcIj48IS0tLS0+PC9kaXY+JztcblxuXHRsZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDIuaW5uZXJIVE1MID0gJzxkaXY+U29tZSB0ZXN0IHRleHQgJHsgdGV4dDEgfSBhZnRlcjwvZGl2PjxkaXYgY2xhc3M9XCJidXR0b25cIj48c3Bhbj5EZWZhdWx0PGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPnRleHQ8L3NwYW4+PC9kaXY+JztcblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdGxldCB7ICRwcm9wcywgJHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0LyoqXG5cdFx0ICogU2NyaXB0IHRhZ1xuXHRcdCAqL1xuXHRcdGxldCB0ZXh0MSA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQyID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgdGV4dDMgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCBpdGVtcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpO1xuXHRcdGxldCB0aW1lID0gMTIzNTtcblxuXHRcdGxldCBjID0gY29tcHV0ZWQodGV4dDEsICgpID0+IHtcblx0XHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdFx0fSk7XG5cblx0XHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ3Rlc3QnKVxuXHRcdH1cblx0XHQvKipcblx0XHQgKiBHRU5FUkFURUQgQ09ERVxuXHRcdCAqL1xuXHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5cdFx0bGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5cdFx0X21ha2VBdHRycyQoX2VsJDIsIHJlbmRlciwge1xuXHRcdFx0XCJzdHlsZVwiOiAxLFxuXHRcdFx0XCJkYXRhLTFcIjoge1xuXHRcdFx0XHR0ZXN0OiB0ZXh0MVxuXHRcdFx0fSxcblx0XHRcdFwiZGF0YS0yXCI6IHRleHQxLFxuXHRcdFx0XCJjbGFzc1wiOiBjb21wdXRlZChbdGV4dDEsIHRleHQyXSwgKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gW3RleHQxKCksIHtcblx0XHRcdFx0XHRzb21lOiB0ZXh0MigpID09PSAyXG5cdFx0XHRcdH0sIHRpbWVdO1xuXHRcdFx0fSlcblx0XHR9KTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cblx0XHRsZXQgX2VsJDEzID0gX2VhY2gkKF9lbCQzLCBpdGVtcywgKGl0ZW0xLCBrZXkxKSA9PiB7XG5cdFx0XHRyZXR1cm4gJ3RleHQtJyArIGl0ZW0xICsgdGV4dDEoKTtcblx0XHR9LCAobm9kZSwgcmVuZGVyLCBrZXlFeHByLCBpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0bGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0X2VsJDUuc2V0QXR0cmlidXRlKFwiZGF0YS1rZXlcIiwgJ3RleHQtJyArIGl0ZW0xICsgdGV4dDEoKSk7XG5cdFx0XHR9LCAhcmVuZGVyKTtcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ1LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGlja1wiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdHN1YnNjcmliZShbdGV4dDFdLCAoKSA9PiB7XG5cdFx0XHRcdF9lbCQ2Lm5vZGVWYWx1ZSA9IGBTb21lIHRlc3QgdGV4dCAke3RleHQxKCl9IGFmdGVyYDtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlRXZlbnRzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblx0XHRcdF9zbG90JCgkc2xvdHMsIFwiZGVmYXVsdFwiLCBfZWwkOCwgbm9kZSA9PiB7XG5cdFx0XHRcdGxldCBfZWwkOSA9IF9lbCQ4LmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTAgPSBfZWwkOS5uZXh0U2libGluZztcblx0XHRcdFx0bGV0IF9lbCQxMSA9IF9lbCQxMC5maXJzdENoaWxkO1xuXHRcdFx0XHRsZXQgX2VsJDEyID0gX2VsJDEwLm5leHRTaWJsaW5nO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQ3O1xuXHRcdH0sIHJlbmRlcik7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGF5b3V0LmFwcGVuZENoaWxkKG1ha2VDb21wb25lbnQoKSk7XG5cdHRpbWUoJ3JlbmRlcicpO1xuXG5cdC8vIHJldHVybjtcblxuXHRsZXQgdG1wID0gbGF5b3V0LmlubmVySFRNTDtcblx0bGF5b3V0LmlubmVySFRNTCA9IHRtcDtcblxuXHR0aW1lKCdoeWRyYXRlJyk7XG5cdG1ha2VDb21wb25lbnQobnVsbCwgbGF5b3V0LmZpcnN0Q2hpbGQpXG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0Ly8gY29uc29sZS5sb2cobGF5b3V0LmlubmVySFRNTCk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0MlxuXHRcdEBlYWNoKDEpXG5cdFx0YXNkYXNkXG5cdFx0PHNsb3Q+ZGVmYXVsdCB0ZXh0IGZvciBzbG90PGIgY2xhc3M9XCJkXCI+MTwvYj48L3Nsb3Q+XG5cdFx0QGVuZGVhY2hcblx0XHQzXG5cdFx0QGVsc2UgXG5cdFx0YXNkXG5cdEBlbmRpZlxuXHRlbmRcblx0YDtcblxuXHRodG1sID0gYFxuXHQ8ZGl2IGNsYXNzPVwiMlwiIDpzdHlsZT1cIjFcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH0sIHRpbWVdXCIgOnByb3AxPVwiMTIzXCI+XG5cdEBlYWNoKChpdGVtMSwga2V5MSkgaW4gaXRlbXMpXG5cdDx0ZW1wbGF0ZSA6a2V5PVwiJ3RleHQtJyArIGl0ZW0xICsgdGV4dDFcIj5cblx0XHQ8ZGl2IEBjbGljaz1cIm1ldGhvZDFcIiBAbW91c2Vkb3duPVwibWV0aG9kMShldmVudClcIj5cblx0XHRcdFNvbWUgdGVzdCB0ZXh0IFxcJHsgdGV4dDEgfSBhZnRlclxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJidXR0b25cIiBAbW91c2Vkb3duPVwiYWxlcnQoMilcIj5cblx0XHRcdDxzbG90PkRlZmF1bHQgPGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPiB0ZXh0PC9zbG90PlxuXHRcdDwvZGl2PlxuXHQ8L3RlbXBsYXRlPlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgaXRlbXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=