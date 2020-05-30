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
  }

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

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);
      var lastHydratedNode = null;

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          lastHydratedNode = expr(node, false, keyExpr, item, itemKey);
          node = lastHydratedNode.nextSibling;
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

    if (!render) {
      time = setTimeout(function () {
        console.log('----');
        items(Array.from({
          length: 10
        }, function (_, i) {
          return i;
        }));
      }, 2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsImRhdGEiLCJkZXBzIiwiY29udGV4dCIsIm9ic2VydmFibGVzIiwidmFycyIsIm1ldGhvZHMiLCJjb250ZXh0U3RhY2siLCJpc1ZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJpZCIsInBhdGgiLCJ2YWx1ZSIsImdldENvbnRleHQiLCJpc1N1YkNvbnRleHQiLCJleGl0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiY2xvc2VDb250ZXh0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIklkZW50aWZpZXIiLCJWYXJpYWJsZUNvdW50ZXIiLCJUZW1wbGF0ZXMiLCJjb2RlQW5hbHlzZSIsImJsb2NrcyIsImR5bmFtaWNFeHByZXNzaW9ucyIsInRlbXBsYXRlIiwicHJvZ3JhbSIsImNvZGUiLCJpIiwidHBsIiwiaW5kZXgiLCJpbml0IiwiTGFzdFZhcmlhYmxlSWQiLCJnZXRMYXN0VmFyaWFibGVJZCIsImdldEN1cnJlbnRDb250ZXh0IiwiQWN0aW9uIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0b3IiLCJzZXRMYXN0VmFyaWFibGVJZCIsImVudGl0eSIsImJvZHkiLCJvcHRpb25zIiwicmVtb3ZlQ29udGV4dCIsImNyZWF0ZVZhcmlhYmxlIiwiY3JlYXRlVGVtcGxhdGUiLCJkeW5hbWljIiwiaGFuZGxlIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwicmVuZGVyIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzIiwiYXJncyIsInJlc3VsdCIsIm1ha2VTdHJpbmciLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50IiwicHJvcHMiLCJtYWtlQ29tcHV0ZWQiLCJvYmplY3RQcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiY2FsbEV4cHJlc3Npb24iLCJvYmplY3RFeHByZXNzaW9uIiwibWFrZUZ1bmN0aW9uIiwiaXNFeHByZXNzaW9uIiwiYXR0cnMiLCJldmVudHMiLCJzdHJpbmciLCJhcnJvd0Z1bmN0aW9uIiwic2V0QXR0ciIsImNvbnNvbGUiLCJUeXBlIiwibWFrZVN1YnNjcmliZSIsIm1lbWJlckV4cHJlc3Npb24iLCJjb250ZW50IiwiYXJyYXlFeHByZXNzaW9uIiwiYXNzaWdubWVudEV4cHJlc3Npb24iLCJUTVBfSURFTlRJRklFUiIsImZuIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwic3RhdGVmdWxDb3VudGVyIiwiaWRlbnRpZmllcnNDb3VudGVyIiwic2hvdWxkV3JhcCIsImV4cHIiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJtYXRjaCIsImtleSIsImZpbmRLZXkiLCJjaGlsZCIsInBhcmFtcyIsImxvb3AiLCJwYXJzZUVhY2hDb25kaXRpb24iLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsIm5vZGUiLCJpdGVtIiwiaXRlbUtleSIsImxhc3RIeWRyYXRlZE5vZGUiLCJoeWRyYXRlZE5vZGVzIiwic3RhcnROb2RlU2VhcmNoIiwibiIsImNoaWxkTm9kZXMiLCJ1bnN1YnNjcmliZSIsIkFycmF5IiwiYmluZE5vZGUiLCJlbCIsIm5vZGVLZXkiLCJkIiwiZGlzcG9zZXIiLCJfc3RhcnRNYXJrIiwiYWRkIiwiY2FzdE5vZGUiLCJmcmFnT3JOb2RlIiwiZnJhZyIsInN0YXJ0Tm9kZSIsIm5vZGVUeXBlIiwiZGlmZmFibGUiLCJvcGVyYXRpb24iLCJyZW1vdmVOb2RlcyIsInBlcnNpc3RlbnQiLCJmcmFnbWVudCIsImxlbmd0aCIsIl9maXJzdENoaWxkIiwiX2xhc3RDaGlsZCIsIl92YWx1ZU9mIiwiYXJndW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnMiLCJvYiIsInVwZGF0ZSIsInNraXAiLCJsYXN0VmFsdWUiLCJkZXAiLCJpc0F0dHIiLCJpc0RvbUF0dHIiLCJpc1Jvb3RBdHRyIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJFeHByZXNzaW9uIiwidHlwZSIsInBhcnNlIiwiSFRNTFBhcnNlciIsIm9ub3BlbnRhZyIsImN1cnJlbnRTdGFja05vZGUiLCJTbG90IiwiQ29tcG9uZW50IiwiTm9kZSIsIm9udGV4dCIsInRleHQiLCJUZXh0Iiwib25jbG9zZXRhZyIsInJlbW92ZWQiLCJkZWNvZGVFbnRpdGllcyIsInByZXBhcmVIVE1MIiwiaGFzQXR0cmlidXRlcyIsIk9iamVjdCIsInRhZyIsIm1ha2VUZW1wbGF0ZSIsIm1hcCIsImFkZENoaWxkIiwicnVsZXMiLCJpc1RlbXBsYXRlIiwiaGFzQWxvbmVUZW1wbGF0ZSIsImFsb25lIiwic2tpcEluaXQiLCJvbmx5Q2hpbGRyZW4iLCJjaGlsZFRlbXBsYXRlIiwiSFRNTFRhZ3MiLCJsaXN0Iiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsInZhbCIsInRlc3QiLCJnZXROb2RlIiwiY2xvbmVOb2RlIiwicGFyc2VDb250ZXh0IiwidW5kZWZpbmVkIiwiJHByb3BzIiwiJHNsb3RzIiwiX21ha2VBdHRycyQiLCJfbWFrZUV2ZW50cyQiLCJhZGRFdmVudExpc3RlbmVyIiwiX3Nsb3QkIiwiY2FsbGJhY2siLCJpbm5lckhUTUwiLCJfc3RhdGVtZW50JCIsInJldHVybk5vZGUiLCJyZXBsYWNlV2l0aCIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwidGV4dDEiLCJ0ZXh0MiIsInRleHQzIiwiaXRlbXMiLCJmcm9tIiwiXyIsInRpbWUiLCJjIiwibWV0aG9kMSIsImxvZyIsInNldFRpbWVvdXQiLCJfZWwkMSIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsInNvbWUiLCJfZWwkMyIsIl9lbCQxMyIsIml0ZW0xIiwia2V5MSIsIl9lbCQ0IiwiX2VsJDUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudCIsIl9lbCQ2Iiwibm9kZVZhbHVlIiwiX2VsJDciLCJuZXh0U2libGluZyIsImFsZXJ0IiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJ0bXAiLCJnZXR0IiwidGltZXMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVB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QUNBLHFCQUFLLFFBQUwsRUFuTWUsQ0FxTWY7O0FBRUEsTUFBSXFDLEdBQUcsR0FBR0gsTUFBTSxDQUFDekMsU0FBakI7QUFDQXlDLFFBQU0sQ0FBQ3pDLFNBQVAsR0FBbUI0QyxHQUFuQjtBQUVBLHFCQUFLLFNBQUw7QUFDQXJDLGVBQWEsQ0FBQyxJQUFELEVBQU9rQyxNQUFNLENBQUNwQixVQUFkLENBQWI7QUFDQSxxQkFBSyxTQUFMLEVBNU1lLENBNk1mO0FBQ0E7O0FBRURqQyxJQUFJOztBQUVKLFNBQVN5RCxJQUFULEdBQWdCO0FBRWYsTUFBSTdGLElBQUksb1NBQVI7QUF3QkFBLE1BQUksMnlCQUFKO0FBa0NBLE1BQUk5SixNQUFNLEdBQUcsbUJBQU04SixJQUFOLENBQWI7QUFFQSxTQUFPLHVCQUFROUosTUFBUixDQUFQLENBOURlLENBK0RmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVJELElBQUk0UCxLQUFLLEdBQUcsRUFBWjs7QUFFZSxTQUFTaEMsSUFBVCxDQUFjN08sSUFBZCxFQUNmO0FBQ0MsTUFBSThRLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0gsS0FBSyxDQUFDN1EsSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDNlEsU0FBSyxDQUFDN1EsSUFBRCxDQUFMLEdBQWM4USxHQUFkO0FBQ0EsV0FBT0QsS0FBSyxDQUFDN1EsSUFBRCxDQUFaO0FBQ0E7O0FBRURzRSxTQUFPLENBQUMwSyxHQUFSLFdBQW9CaFAsSUFBcEIsU0FBOEI4USxHQUFHLEdBQUdELEtBQUssQ0FBQzdRLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPNlEsS0FBSyxDQUFDN1EsSUFBRCxDQUFaO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB7IGNvbnRleHQsIGRlcGVuZGVuY2llcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHlzZShzb3VyY2UpXG57XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdGxldCBkYXRhID0gY29udGV4dChhc3QpO1xuXHRsZXQgZGVwcyA9IGRlcGVuZGVuY2llcyhhc3QsIGRhdGEub2JzZXJ2YWJsZXMpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29udGV4dDogZGF0YSxcblx0XHRkZXBzOiBkZXBzLFxuXHR9O1xufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQsIHBhcnNlIH0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChhc3QpXG57XG5cdGxldCBkYXRhID0ge1xuXHRcdG9ic2VydmFibGVzOiBbXSxcblx0XHR2YXJzOiBbXSxcblx0XHRtZXRob2RzOiBbXSxcblx0fVxuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblx0bGV0IGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlQ29udGV4dCgpXG5cdHtcblx0XHRsZXQgY29udGV4dCA9IGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IHRydWU7XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIHZhbHVlLmNhbGxlZS5uYW1lID09PSAnJG8nKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhLnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KCkge1xuXHRcdCAgICBcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IGZhbHNlO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGRhdGEubWV0aG9kcy5wdXNoKHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGF0YTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW5jaWVzKGFzdCwgb2JzZXJ2YWJsZXMgPSBbXSlcbntcblx0bGV0IGRlcHMgPSB7fTtcblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdFx0ZGVwczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdFx0ZGVwc1tjb250ZXh0Lm5hbWVdID0gY29udGV4dC5kZXBzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXHRcdFx0XHRsZXQgbmFtZSA9IHBhdGgubm9kZS5uYW1lO1xuXG5cdFx0XHRcdGlmKCFpc1N1YkNvbnRleHQoKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjb250ZXh0LnZhcnMuaW5jbHVkZXMobmFtZSkgJiYgb2JzZXJ2YWJsZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRjb250ZXh0LmRlcHMucHVzaChuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IHRydWU7XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGVwcztcbn0iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIENvbXBvbmVudCwgU2xvdCB9IiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBhbmFseXNlIH0gZnJvbSAnQGhhd2EvYW5hbHlzZXInO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnLi9keW5hbWljJztcblxuaW1wb3J0IHtcblx0dmFyaWFibGVEZWNsYXJhdGlvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHRtZW1iZXJFeHByZXNzaW9uLFxuXG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRMYWJlbGVkU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdFN0cmluZ0xpdGVyYWwsXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbi8qKlxuICogQ29tcGlsZSB0ZW1wbGF0ZSB0byBET00gZXhwcmVzc2lvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoYmxvY2tzKVxue1xuXHRsZXQgVmFyaWFibGVDb3VudGVyID0gMDtcblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXG5cdC8qKlxuXHQgKiBUZW1wbGF0ZSBtYW5hZ2VtZW50XG5cdCAqIEB0eXBlIHtTZXR9XG5cdCAqL1xuXHRsZXQgVGVtcGxhdGVzID0gbmV3IFNldCgpO1xuXG5cdGxldCBjb2RlQW5hbHlzZSA9IGFuYWx5c2UoYmxvY2tzLnNjcmlwdCk7XG5cdGxldCBkeW5hbWljRXhwcmVzc2lvbnMgPSBkeW5hbWljKGNvZGVBbmFseXNlKTtcblx0Ly8gY29uc29sZS53YXJuKGNvZGVBbmFseXNlKTtcblxuXHRmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShwcm9ncmFtKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gcHJvZ3JhbS5tYWtlVGVtcGxhdGUodHJ1ZSk7XG5cblx0XHRUZW1wbGF0ZXMuYWRkKHRlbXBsYXRlKTtcblxuXHRcdHJldHVybiBpZChgX3RwbCQkeyBUZW1wbGF0ZXMuc2l6ZSB9YCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgaSA9IDA7XG5cblx0XHRmb3IobGV0IHRwbCBvZiBUZW1wbGF0ZXMpIHtcblx0XHRcdGxldCBpbmRleCA9ICsraTtcblx0XHRcdGNvZGUgKz0gYGxldCBfdHBsJCR7IGluZGV4IH0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XFxuYDtcblx0XHRcdGNvZGUgKz0gYF90cGwkJHsgaW5kZXggfS5pbm5lckhUTUwgPSAnJHsgdHBsIH0nO1xcblxcbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvZGU7XG5cdH1cblxuXHQvKipcblx0ICogQ29udGV4dCBtYW5hZ2VtZW50XG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gTGFzdFZhcmlhYmxlSWQgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoaW5pdCA9IGZhbHNlKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdExhc3RWYXJpYWJsZUlkOiBpbml0ID8gaWQoJ25vZGUnKSA6IGdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDdXJyZW50Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUNvbnRleHQoKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFzdFZhcmlhYmxlSWQoKVxuXHR7XG5cdFx0cmV0dXJuIGdldEN1cnJlbnRDb250ZXh0KCkuTGFzdFZhcmlhYmxlSWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRMYXN0VmFyaWFibGVJZCh2YWx1ZSlcblx0e1xuXHRcdGdldEN1cnJlbnRDb250ZXh0KCkuTGFzdFZhcmlhYmxlSWQgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQgPSBudWxsLCBBY3Rpb24gPSAobiwgbCkgPT4gbClcblx0e1xuXHRcdGxldCBuYW1lID0gaWQoYF9lbCQkeyArK1ZhcmlhYmxlQ291bnRlciB9YCk7XG5cblx0XHRsZXQgZGVsY2FyYXRpb25WYWx1ZSA9IEFjdGlvbihuYW1lLCBnZXRMYXN0VmFyaWFibGVJZCgpKTtcblxuXHRcdGxldCB2YWx1ZSA9IG5ldyB2YXJpYWJsZURlY2xhcmF0aW9uKCdsZXQnLCBbXG5cdFx0XHRuZXcgdmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRkZWxjYXJhdGlvblZhbHVlXG5cdFx0XHQpXG5cdFx0XSk7XG5cblx0XHRzZXRMYXN0VmFyaWFibGVJZChuYW1lKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFsdWUsXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21waWxlIHRlbXBsYXRlc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGVudGl0eSA9IGJsb2Nrcy50ZW1wbGF0ZTtcblx0bGV0IGJvZHkgPSBbXTtcblxuXHRsZXQgb3B0aW9ucyA9IHtcblx0XHRjcmVhdGVDb250ZXh0LFxuXHRcdHJlbW92ZUNvbnRleHQsXG5cdFx0Y3JlYXRlVmFyaWFibGUsXG5cdFx0Z2V0TGFzdFZhcmlhYmxlSWQsXG5cdFx0Y3JlYXRlVGVtcGxhdGUsXG5cdFx0ZHluYW1pYzogZHluYW1pY0V4cHJlc3Npb25zLFxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlKGVudGl0eSlcblx0e1xuXHRcdGVudGl0eS5oYW5kbGUoYm9keSwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVDb250ZXh0KHRydWUpO1xuXHRbZW50aXR5XS5tYXAoKGl0ZW0pID0+IGhhbmRsZShpdGVtKSk7XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGNvZGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBjb2RlID0gZ2VuZXJhdGUocHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiBjb2RlLmNvZGUsXG5cdFx0dGVtcGxhdGVzOiBnZXRUZW1wbGF0ZXMoKSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlU3RyaW5nIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJvd0Z1bmN0aW9uKHsgdmFsdWUgPSBbXSwgYXJncyA9IFtdIH0sIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VTdHJpbmcpO1xuXG5cdC8vIGNvbnNvbGUubG9nKHJlc3VsdClcblx0cmV0dXJuIG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihcblx0XHRhcmdzLm1hcChpdGVtID0+IGlkKGl0ZW0pKSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQuY29udGVudClcblx0XHRdKSxcblx0KVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlQ29tcHV0ZWQgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uYXR0cmlidXRlcykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIGVudGl0eS5vcHRpb24uYXR0cmlidXRlc1tuYW1lXSwgbWFrZUNvbXB1dGVkKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VGdW5jdGlvbiB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmV2ZW50cykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIGVudGl0eS5vcHRpb24uZXZlbnRzW25hbWVdLCBtYWtlRnVuY3Rpb24pO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VFdmVudHMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbih2YWx1ZSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR2YWx1ZSA9IHtcblx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdC8vIGNvbnNvbGUud2FybihyZXN1bHQpO1xuXHRyZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IG1ha2VBdHRyVmFsdWUgfSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBwcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5pbXBvcnQgeyBhcnJvd0Z1bmN0aW9uIH0gZnJvbSAnLi9hcnJvd0Z1bmN0aW9uJztcbmltcG9ydCB7IHNldEF0dHIgfSBmcm9tICcuL3NldEF0dHInO1xuXG4vLyBleHBvcnQgeyBhdHRycywgZXZlbnRzLCBwcm9wcyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoY29udGV4dClcbntcblx0cmV0dXJuIHtcblx0XHRhdHRyczogYXR0cnMuYmluZChjb250ZXh0KSxcblx0XHRldmVudHM6IGV2ZW50cy5iaW5kKGNvbnRleHQpLFxuXHRcdHByb3BzOiBwcm9wcy5iaW5kKGNvbnRleHQpLFxuXHRcdHN0cmluZzogc3RyaW5nLmJpbmQoY29udGV4dCksXG5cdFx0ZXhwcmVzc2lvbjogZXhwcmVzc2lvbi5iaW5kKGNvbnRleHQpLFxuXHRcdGFycm93RnVuY3Rpb246IGFycm93RnVuY3Rpb24uYmluZChjb250ZXh0KSxcblx0XHRzZXRBdHRyOiBzZXRBdHRyLmJpbmQoY29udGV4dCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvcHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKGVudGl0eS5vcHRpb24uYXR0cmlidXRlc1tuYW1lXSk7XG5cdH1cblxuXG5cdGNvbnNvbGUud2FybihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpXG5cblx0cmV0dXJuO1xuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5hdHRyc1trZXldKSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUF0dHJzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlU3Vic2NyaWJlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRBdHRyKHsgbmFtZSA9ICdrZXknLCBUeXBlIH0sIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihUeXBlLm9wdGlvbltuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gVHlwZS5vcHRpb25bbmFtZV07XG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN1YnNjcmliZSk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdzZXRBdHRyaWJ1dGUnKVxuXHRcdFx0KSxcblx0XHRcdFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChgZGF0YS0ke25hbWV9YCksXG5cdFx0XHRcdHJlc3VsdC5leHByXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGlmKHJlc3VsdC5zaG91bGRXcmFwKSB7XG5cdFx0ZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRyZXN1bHQuZGVwcyxcblx0XHRcdFx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0XHRcdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0XHRcdFx0XHRleHByZXNzaW9uXG5cdFx0XHRcdFx0XHRdKVxuXHRcdFx0XHRcdClcblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdCk7XG5cdH1cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG5cdFxuXHQvLyBjb25zb2xlLmxvZyhleHByZXNzaW9uKTtcblx0Ly8gcmV0dXJuIHJlc3VsdFxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlU3RyaW5nIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5LnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgaXNFeHByZXNzaW9uID0gZW50aXR5LnZhbHVlLm1hdGNoKC9cXCRcXHsuKlxcfS9nKSAhPT0gbnVsbDtcblxuXHRpZighaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHsgZGVwcywgY29udGVudCB9ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwge1xuXHRcdGlzRXhwcmVzc2lvbixcblx0XHR2YWx1ZTogYFxcYCR7IGVudGl0eS52YWx1ZSB9XFxgYCxcblx0fSwgbWFrZVN0cmluZyk7XG5cblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXG5cdGxldCBib2R5ID0gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdFx0bmV3IGFzc2lnbm1lbnRFeHByZXNzaW9uKFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihwb2ludCwgaWQoJ25vZGVWYWx1ZScpKSxcblx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdClcblx0XHRcdClcblx0XHRdKVxuXHQpO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3N1YnNjcmliZScpLFxuXHRcdFx0W2RlcHMsIGJvZHldXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0ZnVuY3Rpb25FeHByZXNzaW9uLFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmNvbnN0IFRNUF9JREVOVElGSUVSID0gJ190bXAkYXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VWYWx1ZShjb250ZXh0LCB2YWx1ZSwgZm4pXG57XG5cdGlmKCF2YWx1ZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gc3RyaW5nTGl0ZXJhbCh2YWx1ZS52YWx1ZSk7XG5cdH1cblxuXHRsZXQgY29kZSA9IGAke1RNUF9JREVOVElGSUVSfSA9ICR7dmFsdWUudmFsdWV9YDtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0cmV0dXJuIGZuKGFzdCwgY29udGV4dCk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGluIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnVuY3Rpb24oYXN0LCBjb250ZXh0KVxue1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0XHRcdGlmKGNvbnRleHQubWV0aG9kcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGlmKHBhdGgucGFyZW50LnR5cGUgIT09ICdDYWxsRXhwcmVzc2lvbicpIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHtpZC5uYW1lfSgpYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cblx0cmV0dXJuIG5ldyBmdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgW2lkKCdldmVudCcpXSwgbmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdClcblx0XSkpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgc3RyaW5nIHRvIERPTSBleHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RyaW5nKGFzdCwgY29udGV4dClcbntcblx0bGV0IGRlcHMgPSBbXTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGRlcHMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRpZC5uYW1lID0gYCR7IGlkLm5hbWUgfSgpYDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cblx0cmV0dXJuIHtcblx0XHRjb250ZW50OiByZXN1bHQsXG5cdFx0ZGVwczogZGVwcyxcblx0fVxufVxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbXB1dGVkKGFzdCwgY29udGV4dClcbntcblx0bGV0IGRlcHMgPSBbXTtcblx0bGV0IHN0YXRlZnVsQ291bnRlciA9IDA7XG5cdGxldCBpZGVudGlmaWVyc0NvdW50ZXIgPSAwO1xuXHRsZXQgc2hvdWxkV3JhcCA9IHRydWU7XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpIHx8IHBhdGgubm9kZS5uYW1lID09PSBUTVBfSURFTlRJRklFUikge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlkZW50aWZpZXJzQ291bnRlcisrO1xuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRzdGF0ZWZ1bENvdW50ZXIrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0XG5cdGlmKGlkZW50aWZpZXJzQ291bnRlciA8PSAxIHx8IHN0YXRlZnVsQ291bnRlciA9PSAwKSB7XG5cdFx0c2hvdWxkV3JhcCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coaWRlbnRpZmllcnNDb3VudGVyLCBzdGF0ZWZ1bENvdW50ZXIsIHNob3VsZFdyYXApXG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGRlcHMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRpZihzaG91bGRXcmFwKSB7XG5cdFx0XHRcdFx0XHRpZC5uYW1lID0gYCR7IGlkLm5hbWUgfSgpYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXHRcblx0aWYoZGVwcy5sZW5ndGggPT09IDAgfHwgc2hvdWxkV3JhcCA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRcdF0pXG5cdCk7XG5cblx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRpZCgnY29tcHV0ZWQnKSxcblx0XHRbZGVwcywgYm9keV1cblx0KVxufVxuXG5cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaXQgY29tcHV0ZWRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdWJzY3JpYmUoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHQvLyBpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHQvLyBcdHJldHVybiByZXN1bHQ7XG5cdC8vIH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblx0cmV0dXJuIHtcblx0XHRzaG91bGRXcmFwLFxuXHRcdGRlcHMsXG5cdFx0ZXhwcjogcmVzdWx0LFxuXHR9XG5cdFxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cbi8vIFRPIERPIE5FWFQgTk9ERVNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRcblx0bGV0IGluaXQgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXRDb21wb25lbnQnKSwgW1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0XHRcdGwsXG5cdFx0XHRcdGlkKCdyZW5kZXInKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChpbml0LnZhbHVlKTtcblxuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcywgaW5pdCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKCduZXh0U2libGluZycpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUVhY2hDb25kaXRpb24oZW50aXR5KVxue1xuXHRsZXQgc3RhdGVtZW50ID0gZW50aXR5LnZhbHVlLm1hdGNoQWxsKC9cXCgoPzxpdGVtPltBLXowLTldKylcXHM/KFxcLFxccz8oPzxrZXk+W0EtejAtOV0rKVxccz8pP1xcKVxccz9pblxccyg/PGNvbmRpdGlvbj4uKikvZyk7XG5cblx0bGV0IGNvbmRpdGlvbiA9IG51bGw7XG5cdGxldCBhcmdzID0gW107XG5cblx0Zm9yKGxldCBtYXRjaCBvZiBzdGF0ZW1lbnQpIHtcblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5pdGVtKSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLml0ZW0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmdzLnB1c2goJ19pdGVtJyk7XG5cdFx0fVxuXG5cdFx0aWYobWF0Y2guZ3JvdXBzLmtleSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5rZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmdzLnB1c2goJ19pbmRleCcpO1xuXHRcdH1cblxuXHRcdGNvbmRpdGlvbiA9IG1hdGNoLmdyb3Vwcy5jb25kaXRpb247XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGtleTogZmluZEtleShlbnRpdHkpLFxuXHRcdGNvbmRpdGlvbixcblx0XHRhcmdzLFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kS2V5KGVudGl0eSlcbntcblx0bGV0IGtleSA9IG51bGw7XG5cdGZvcihsZXQgY2hpbGQgb2YgZW50aXR5LmNoaWxkcmVuKVxuXHR7XG5cdFx0aWYoY2hpbGQub3B0aW9uLmtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRrZXkgPSBjaGlsZC5vcHRpb24ua2V5O1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0aWYoa2V5ID09PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdLZXkgaXMgcmVxdWlyZWQgZm9yIEVhY2ggbG9vcCAoZm9yIGh5ZHJhdGlvbiknKTtcblx0fVxuXG5cdHJldHVybiBrZXk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblxuXHQvKipcblx0ICogTG9vcCBwcmVwYXJhdGlvblxuXHQgKiAxLiBLZXkgZ2VuZXJhdGlvbiBmdW5jdGlvblxuXHQgKiAyLiBDb25kaXRpb24gZXhwcmVzc2lvblxuXHQgKiAzLiBJdGVtIGFuZCBrZXkgaWRpbnRpZmllcnNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBsb29wID0gcGFyc2VFYWNoQ29uZGl0aW9uKHRoaXMpO1xuXG5cdGxldCB2YWx1ZSA9IG9wdGlvbnMuZHluYW1pYy5leHByZXNzaW9uKGxvb3AuY29uZGl0aW9uLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRsZXQga2V5ID0gb3B0aW9ucy5keW5hbWljLmFycm93RnVuY3Rpb24oe1xuXHRcdHZhbHVlOiBsb29wLmtleSxcblx0XHRhcmdzOiBsb29wLmFyZ3Ncblx0fSwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaCh2YWx1ZSk7XG5cdHBhcmFtcy5wdXNoKGtleSk7XG5cblx0LyoqXG5cdCAqIEdldCBsb29wIHRlbXBsYXRlXG5cdCAqL1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGJvZHksIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Ym9keS5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHRsZXQgbGFzdENoaWxkID0gY2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucywgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUpO1xuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Ym9keS5wdXNoKHJldHVyblBvaW50ZXIpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihcblx0XHRcdFsgaWQoJ25vZGUnKSwgaWQoJ3JlbmRlcicpLCBpZCgnX2tleUV4cHIkJykgXS5jb25jYXQobG9vcC5hcmdzLm1hcChpdGVtID0+IGlkKGl0ZW0pKSksXG5cdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSksXG5cdFx0KVxuXHQpO1xuXG5cdHBhcmFtcy5wdXNoKGlkKCdyZW5kZXInKSk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX2VhY2gkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQgcHJvZ3JhbSBmcm9tICcuL3Byb2dyYW0nO1xuaW1wb3J0IHN0YXRlbWVudCBmcm9tICcuL3N0YXRlbWVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2gnO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL3Nsb3QnO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IHByb2dyYW0sIHN0YXRlbWVudCwgZWFjaCwgbm9kZSwgdGV4dCwgc2xvdCwgY29tcG9uZW50IH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUubWFrZVZhbHVlKTtcblx0Ly8gfVx0XG5cdFxuXHRvcHRpb25zLmR5bmFtaWMuc2V0QXR0cih7XG5cdFx0VHlwZTogdGhpcyxcblx0XHRuYW1lOiAna2V5Jyxcblx0fSwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblx0b3B0aW9ucy5keW5hbWljLmV2ZW50cyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xufVxuXG5cblxuXG5cbiIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiwgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZ3JhbShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHRcblxuXHRsZXQgbGFzdENoaWxkID0gY2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucywgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUpXG5cblx0XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2gocmV0dXJuUG9pbnRlcik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xvdChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW1xuXHRcdGlkKCckc2xvdHMnKSxcblx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0b3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRdO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc2xvdCQnKSwgcGFyYW1zKVxuXHQpO1xuXG5cdGxldCBib2R5ID0gW107XG5cblx0Y2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucyk7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KVxuXHRcdClcblx0KVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc3RhdGVtZW50JCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHQoY29udGV4dCwgb3B0aW9ucylcbntcblxuXHRvcHRpb25zLmR5bmFtaWMuc3RyaW5nKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0Ly8gfVxuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0cmV0dXJuIGlkKCdjcmVhdGVUZWFtcGxhdGUnKTtcblx0Ly8gfSk7XG5cblx0Ly8gY29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHQvLyBsZXQgcG9pbnRlciA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0aWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKCdmaXJzdENoaWxkJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGw7XG5cdC8vIH0pO1xuXHRcblx0Ly8gLy8gY29uc29sZS5sb2codGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuXHQvLyBjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFRlbXBsYXRlTm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcG9pbnRlciA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKGwsIGlkKCdmaXJzdENoaWxkJykpLFxuXHRcdFx0bFxuXHRcdClcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgdHlwZSlcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKHR5cGUpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgY3VzdG9tRGVmaW5lciA9IGZhbHNlKVxue1xuXHRpZihlbnRpdHkuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0Y3VzdG9tRGVmaW5lciA9ICgpID0+IHt9O1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKGVudGl0eSwgZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSk7XG5cdGlmKCFlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpICYmICFlbnRpdHkuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0b3B0aW9ucy5jcmVhdGVDb250ZXh0KCk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkSGFuZGxlKGVudGl0eS5jaGlsZHJlbltpXSwgY29udGV4dCwgb3B0aW9ucywgaSwgY3VzdG9tRGVmaW5lcik7XG5cdH1cblxuXHRsZXQgbGFzdENoaWxkID0gb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpO1xuXG5cdGlmKCFlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpICYmICFlbnRpdHkuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0b3B0aW9ucy5yZW1vdmVDb250ZXh0KCk7XG5cdH1cblxuXHRyZXR1cm4gbGFzdENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRIYW5kbGUoZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBpbmRleCwgY3VzdG9tRGVmaW5lcilcbntcblx0bGV0IGlzRmlyc3QgPSBpbmRleCA9PT0gMDtcblxuXHRpZihjdXN0b21EZWZpbmVyICYmIGlzRmlyc3QpIHtcblx0XHRjdXN0b21EZWZpbmVyKGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9IGVsc2Uge1xuXHRcdGlmKCFlbnRpdHkuc2tpcEluaXQoKSkge1xuXHRcdFx0bmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgaXNGaXJzdCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdFx0fVxuXHR9XG5cblx0ZW50aXR5LmhhbmRsZShjb250ZXh0LCBvcHRpb25zKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCIsIFwidGVtcGxhdGVcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpXG57XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSlcbntcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2xpc3RbaV1dID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBleHBlY3RzTG93ZXJDYXNlID9cblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH0gOlxuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cbiIsIi8vIGV2ZW50cyAtIEAgLT4gaWQoYXR0cnMgdmFsdWUpXG4vLyBleHByZXNzaW9uIDogaWQoYXR0cnMpXG4vLyBzdHJpbmdsaXR0ZXJhbCBcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL3V0aWxzJztcblxuXG52YXIgaXNBdHRyID0gbWFrZU1hcChcblx0J2FjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsdCxhc3luYyxhdXRvY29tcGxldGUsJyArXG5cdCdhdXRvZm9jdXMsYXV0b3BsYXksYXV0b3NhdmUsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2hhbGxlbmdlLGNoYXJzZXQsJyArXG5cdCdjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxodHRwLWVxdWl2LCcgK1xuXHQnbmFtZSxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGRhdGEsZGF0ZXRpbWUsZGVmYXVsdCwnICtcblx0J2RlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLG1ldGhvZCxmb3IsJyArXG5cdCdmb3JtLGZvcm1hY3Rpb24saGVhZGVycyxoZWlnaHQsaGlkZGVuLGhpZ2gsaHJlZixocmVmbGFuZyxodHRwLWVxdWl2LCcgK1xuXHQnaWNvbixpZCxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsaXN0LGxvb3AsbG93LCcgK1xuXHQnbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtZWRpYSxtZXRob2QsR0VULFBPU1QsbWluLG11bHRpcGxlLGVtYWlsLGZpbGUsJyArXG5cdCdtdXRlZCxuYW1lLG5vdmFsaWRhdGUsb3BlbixvcHRpbXVtLHBhdHRlcm4scGluZyxwbGFjZWhvbGRlcixwb3N0ZXIsJyArXG5cdCdwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LCcgK1xuXHQnc2NvcGUsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNoYXBlLHNpemUsdHlwZSx0ZXh0LHBhc3N3b3JkLHNpemVzLHNwYW4sJyArXG5cdCdzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LCcgK1xuXHQndGFyZ2V0LHRpdGxlLHR5cGUsdXNlbWFwLHZhbHVlLHdpZHRoLHdyYXAnXG4pO1xuXG52YXIgaXNEb21BdHRyID0gKG5hbWUpID0+IHtcblx0cmV0dXJuIGlzQXR0cihuYW1lKSB8fCBuYW1lLm1hdGNoKC9eZGF0YVxcLS9nKTtcbn1cblxudmFyIGlzUm9vdEF0dHIgPSBtYWtlTWFwKFxuXHQna2V5LHJlZidcbik7XG5cbmZ1bmN0aW9uIG1ha2VWYWx1ZSh2YWx1ZSwgaXNFeHByZXNzaW9uID0gZmFsc2UpXG57XG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0aXNFeHByZXNzaW9uLFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhvYmopXG57XG5cdGxldCByZXN1bHQgPSB7XG5cdFx0ZXZlbnRzOiB7fSxcblx0XHRwcm9wczoge30sXG5cdFx0YXR0cmlidXRlczoge30sXG5cdFx0c3RhdGljQXR0cnM6IHt9LFxuXHR9XG5cblx0Zm9yKGxldCBuYW1lIGluIG9iailcblx0e1xuXHRcdGxldCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuXHRcdGlmKGlzRG9tQXR0cihuYW1lKSkge1xuXHRcdFx0cmVzdWx0LnN0YXRpY0F0dHJzW25hbWVdID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15AL2cpKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9eQC9nLCAnJyk7XG5cdFx0XHRyZXN1bHQuZXZlbnRzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXlxcOi9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXlxcOi9nLCAnJyk7XG5cdFx0XHR2YWx1ZSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHRcblx0XHRcdGlmKGlzUm9vdEF0dHIobmFtZSkpIHtcblx0XHRcdFx0cmVzdWx0W25hbWVdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2UgaWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRcdHJlc3VsdC5hdHRyaWJ1dGVzW25hbWVdID0gdmFsdWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXN1bHQucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0LnByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlKTtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoYEF0dHIgJHtuYW1lfSBkb2VzbnQgcmVnaXN0ZXJlZC4gQ2FudCB1bmRlcnN0YW5kIHR5cGUuYClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja3MoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnZXhwLmV4ZWMoaHRtbCk7XG5cdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0YmxvY2tzW2tleV0gPSBtYXRjaGVzWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IG51bGwsXG5cdFx0c3R5bGU6IG51bGwsXG5cdH0sIGh0bWwpO1xuXG5cdC8vIGNsZWFuIHVwIGh0bWwgYW5kIHJlcGxhY2UgZXhwcmVzc2lvbiB3aXRoIHRhZy1leHByZXNzaW9uXG5cdGh0bWwgPSBwcmVwYXJlKGJsb2NrcywgaHRtbCk7XG5cblx0Ly8gUGFyc2UgVEFHc1xuXHRsZXQgc3RhY2sgPSBbXG5cdFx0bmV3IEV4cHJlc3Npb24oeyB0eXBlOiAncHJvZ3JhbScgfSlcblx0XTtcblxuXHRmdW5jdGlvbiBjdXJyZW50U3RhY2tOb2RlKClcblx0e1xuXHRcdHJldHVybiBzdGFja1tzdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGZ1bmN0aW9uIGlzQmxvY2tUYWcobmFtZSlcblx0e1xuXHRcdHJldHVybiBzdGFjay5sZW5ndGggPT09IDEgJiYgWydzY3JpcHQnLCAnc3R5bGUnXS5pbmNsdWRlcyhuYW1lKTtcblx0fVxuXG5cdGNvbnN0IHBhcnNlID0gbmV3IEhUTUxQYXJzZXIoe1xuXHRcdFxuXHRcdG9ub3BlbnRhZyhuYW1lLCBhdHRycylcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXHRcdFx0bGV0IGVudGl0eTtcblxuXHRcdFx0aWYobmFtZSA9PT0gJ2V4cHInKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBFeHByZXNzaW9uKGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZihuYW1lID09PSAnc2xvdCcpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IFNsb3QoYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmIChpc0NvbXBvbmVudChuYW1lKSkge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgQ29tcG9uZW50KG5hbWUsIGF0dHJzKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBOb2RlKG5hbWUsIGF0dHJzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdHBhcmVudC5hZGRDaGlsZChlbnRpdHkpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdGFjay5wdXNoKGVudGl0eSk7XG5cdFx0fSxcblxuXHRcdG9udGV4dCh0ZXh0KVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cblx0XHRcdHRleHQgPSB0ZXh0LnRyaW0oKTtcblxuXHRcdFx0aWYodGV4dCAhPT0gJycgJiYgcGFyZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gbmV3IFRleHQodGV4dCk7XG5cdFx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRcdHBhcmVudC5hZGRDaGlsZChub2RlKTtcblx0XHRcdFx0fVxuXHQgICAgXHR9XG5cdCAgICB9LFxuXG5cdFx0b25jbG9zZXRhZyhuYW1lKVxuXHRcdHtcblx0XHRcdGxldCByZW1vdmVkID0gc3RhY2sucG9wKCk7XG5cdCAgICB9XG5cblx0fSwgeyBkZWNvZGVFbnRpdGllczogdHJ1ZSB9KVxuXHRcblx0cGFyc2Uud3JpdGUoaHRtbCk7XG5cdHBhcnNlLmVuZCgpO1xuXG5cdGJsb2Nrcy50ZW1wbGF0ZSA9IHN0YWNrWzBdO1xuXHQvLyBjb25zb2xlLmxvZyhibG9ja3MudGVtcGxhdGUuY2hpbGRyZW5bMF0pXG5cdHJldHVybiBibG9ja3M7XG59XG4iLCJmdW5jdGlvbiBwcmVwYXJlSFRNTChodG1sKVxue1xuXHRyZXR1cm4gaHRtbC5yZXBsYWNlKC9cXHQvZywgJyAnKS5yZXBsYWNlKC9cXHNcXHMrL2csICcgJykudHJpbSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZShibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0aHRtbCA9IGh0bWwucmVwbGFjZShyZWdleHAsICcnKTtcblx0fVxuXG5cdGh0bWwgPSBodG1sXG5cdFx0Ly8gaWZcblx0XHQucmVwbGFjZSgvQGlmXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cInN0YXRlbWVudFwiPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlaWZcXCgoLiopXFwpL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2UvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwidHJ1ZVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRpZi9nLCAnPC9leHByPjwvZXhwcj4nKVxuXHRcdC8vIGVhY2hcblx0XHQucmVwbGFjZSgvQGVhY2hcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwiZWFjaFwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kZWFjaC9nLCAnPC9leHByPicpXG5cblx0cmV0dXJuIHByZXBhcmVIVE1MKGh0bWwpO1xufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGFnLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLm9wdGlvbiA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdub2RlJztcblx0fVxuXG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgbmFtZSA9ICdkZWZhdWx0JywgdGFnID0gJ3NwYW4nIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ3Nsb3QnO1xuXHR9XG5cdFx0XG5cdC8vIG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHQvLyB7XG5cdC8vIFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0Ly8gXHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0Ly8gXHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdC8vIFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpKSB7XG5cdC8vIFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHQvLyBcdH1cblxuXHQvLyBcdGlmKCF0aGlzLnRhZykge1xuXHQvLyBcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIHRlbXBsYXRlO1xuXHQvLyB9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGV4dClcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy52YWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy50eXBlID0gJ3RleHQnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBydWxlcyB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRtYXAoY2FsbGJhY2spXG5cdHtcblx0XHRpZih0aGlzLmNoaWxkcmVuICYmIHRoaXMudHlwZSAhPT0gJ3N0YXRlbWVudCcpIHtcblx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHRhZGRDaGlsZChjaGlsZClcblx0e1xuXHRcdGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cdGhhbmRsZShjb250ZXh0LCBvcHRpb25zKVxuXHR7XG5cdFx0cmV0dXJuIHJ1bGVzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcblx0fVxuXG5cdGlzVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuICh0aGlzLnR5cGUgPT09ICdub2RlJyAmJiB0aGlzLnRhZyA9PT0gJ3RlbXBsYXRlJyk7XG5cdH1cblxuXHRoYXNBbG9uZVRlbXBsYXRlKClcblx0e1xuXHRcdGxldCBhbG9uZSA9IHRydWU7XG5cblx0XHRmb3IobGV0IGNoaWxkIG9mIHRoaXMuY2hpbGRyZW4pIHtcblx0XHRcdGlmKCFjaGlsZC5pc1RlbXBsYXRlKCkpIHtcblx0XHRcdFx0YWxvbmUgPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gYWxvbmU7XG5cdH1cblxuXHRza2lwSW5pdCgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7Ly90aGlzLnR5cGUgPT09ICdwcm9ncmFtJyB8fCB0aGlzLnR5cGUgPT09ICdzbG90Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cdFx0XG5cdFx0bGV0IGF0dHJzID0gdGhpcy5vcHRpb24gPyB0aGlzLm9wdGlvbi5zdGF0aWNBdHRycyA6IHt9O1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gYXR0cnMpIHtcblx0XHRcdHRlbXBsYXRlICs9IGAgJHtrZXl9PVwiJHthdHRyc1trZXldfVwiYDtcblx0XHR9XG5cblx0XHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0XHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0XHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpICYmICFvbmx5Q2hpbGRyZW4pIHtcblx0XHRcdHJldHVybiAnPCEtLS0tPic7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMudGFnIHx8IHRoaXMuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgbWFwIGFzIF9lYWNoJCB9IGZyb20gJ0BoYXdhL21hcCc7XG5cblxuXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKSB7XG5cdFx0aWYgKHJlbmRlcikge1xuXHRcdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0XHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRcdGNvbnRleHQgPSB7fTtcblx0XHR9XG5cblx0XHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdFx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdCRwcm9wcyxcblx0XHRcdCRzbG90cyxcblx0XHR9XG5cdH1cblxuXG5cdGZ1bmN0aW9uIF9tYWtlQXR0cnMkKCkge1xuXG5cdH1cblxuXHRmdW5jdGlvbiBfbWFrZUV2ZW50cyQobm9kZSwgcmVuZGVyLCBvcHRpb25zKSB7XG5cdFx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBfc2xvdCQoJHNsb3RzLCBuYW1lLCBub2RlLCBjYWxsYmFjaykge1xuXHRcdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSAkc2xvdHNbbmFtZV07XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdC8vIGZ1bmN0aW9uIHZhbHVlU3Vic2NyaWJlKHJlbmRlciwgcHJvcCwgZm4pXG5cdC8vIHtcblx0Ly8gXHRpZighaXNPYnNlcnZhYmxlKHByb3ApKSB7XG5cdC8vIFx0XHRpZihoeWRyYXRlKSB7XG5cdC8vIFx0XHRcdGZuKHByb3ApO1xuXHQvLyBcdFx0fVxuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblxuXHQvLyBcdHN1YnNjcmliZShwcm9wLCAoKSA9PiB7XG5cdC8vIFx0XHRmbihwcm9wKCkpO1xuXHQvLyBcdH0sICFyZW5kZXIpO1xuXHQvLyB9XG5cblx0ZnVuY3Rpb24gX3N0YXRlbWVudCQobm9kZSwgLi4uYXJncykge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChhcmdzW2ldKSB7XG5cdFx0XHRcdHJldHVybk5vZGUgPSBhcmdzW2kgKyAxXShub2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHQvLyBsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHQvLyBjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHQvLyByZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8ZGl2PlNvbWUgdGVzdCB0ZXh0ICR7IHRleHQxIH0gYWZ0ZXI8L2Rpdj48ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj50ZXh0PC9zcGFuPjwvZGl2Pic7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIFNjcmlwdCB0YWdcblx0XHQgKi9cblx0XHRsZXQgdGV4dDEgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCB0ZXh0MiA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQzID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgaXRlbXMgPSBvYnNlcnZhYmxlKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcblx0XHRsZXQgdGltZSA9IDEyMzU7XG5cblx0XHRsZXQgYyA9IGNvbXB1dGVkKHRleHQxLCAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHR9XG5cblx0XHRpZighcmVuZGVyKSB7XG5cdFx0XHR0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCctLS0tJylcblx0XHRcdFx0aXRlbXMoQXJyYXkuZnJvbSh7IGxlbmd0aDogMTAgfSwgKF8sIGkpID0+IGkpKTtcblx0XHRcdH0sIDIwMDApXG5cdFx0fVxuXHRcdC8qKlxuXHRcdCAqIEdFTkVSQVRFRCBDT0RFXG5cdFx0ICovXG5cdFx0bGV0IF9lbCQxID0gZ2V0Tm9kZShfdHBsJDEsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRsZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cblx0XHRfbWFrZUF0dHJzJChfZWwkMiwgcmVuZGVyLCB7XG5cdFx0XHRcInN0eWxlXCI6IDEsXG5cdFx0XHRcImRhdGEtMVwiOiB7XG5cdFx0XHRcdHRlc3Q6IHRleHQxXG5cdFx0XHR9LFxuXHRcdFx0XCJkYXRhLTJcIjogdGV4dDEsXG5cdFx0XHRcImNsYXNzXCI6IGNvbXB1dGVkKFt0ZXh0MSwgdGV4dDJdLCAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBbdGV4dDEoKSwge1xuXHRcdFx0XHRcdHNvbWU6IHRleHQyKCkgPT09IDJcblx0XHRcdFx0fSwgdGltZV07XG5cdFx0XHR9KVxuXHRcdH0pO1xuXG5cdFx0bGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxuXHRcdGxldCBfZWwkMTMgPSBfZWFjaCQoX2VsJDMsIGl0ZW1zLCAoaXRlbTEsIGtleTEpID0+IHtcblx0XHRcdHJldHVybiAndGV4dC0nICsgaXRlbTEgKyB0ZXh0MSgpO1xuXHRcdH0sIChub2RlLCByZW5kZXIsIGtleUV4cHIsIGl0ZW0xLCBrZXkxKSA9PiB7XG5cdFx0XHRsZXQgX2VsJDQgPSBnZXROb2RlKF90cGwkMiwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG5cdFx0XHRzdWJzY3JpYmUoW3RleHQxXSwgKCkgPT4ge1xuXHRcdFx0XHRfZWwkNS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWtleVwiLCAndGV4dC0nICsgaXRlbTEgKyB0ZXh0MSgpKTtcblx0XHRcdH0sICFyZW5kZXIpO1xuXG5cdFx0XHRfbWFrZUV2ZW50cyQoX2VsJDUsIHJlbmRlciwge1xuXHRcdFx0XHRcImNsaWNrXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJtb3VzZWRvd25cIjogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gbWV0aG9kMShldmVudCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRsZXQgX2VsJDYgPSBfZWwkNS5maXJzdENoaWxkO1xuXHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0X2VsJDYubm9kZVZhbHVlID0gYFNvbWUgdGVzdCB0ZXh0ICR7dGV4dDEoKX0gYWZ0ZXJgO1xuXHRcdFx0fSk7XG5cdFx0XHRsZXQgX2VsJDcgPSBfZWwkNS5uZXh0U2libGluZztcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ3LCByZW5kZXIsIHtcblx0XHRcdFx0XCJtb3VzZWRvd25cIjogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoMik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRsZXQgX2VsJDggPSBfZWwkNy5maXJzdENoaWxkO1xuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSwgcmVuZGVyKTtcblxuXHRcdHJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyO1xuXHR9XG5cblxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGF5b3V0LmFwcGVuZENoaWxkKG1ha2VDb21wb25lbnQoKSk7XG5cdHRpbWUoJ3JlbmRlcicpO1xuXG5cdC8vIHJldHVybjtcblxuXHRsZXQgdG1wID0gbGF5b3V0LmlubmVySFRNTDtcblx0bGF5b3V0LmlubmVySFRNTCA9IHRtcDtcblxuXHR0aW1lKCdoeWRyYXRlJyk7XG5cdG1ha2VDb21wb25lbnQobnVsbCwgbGF5b3V0LmZpcnN0Q2hpbGQpXG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0Ly8gY29uc29sZS5sb2cobGF5b3V0LmlubmVySFRNTCk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0MlxuXHRcdEBlYWNoKDEpXG5cdFx0YXNkYXNkXG5cdFx0PHNsb3Q+ZGVmYXVsdCB0ZXh0IGZvciBzbG90PGIgY2xhc3M9XCJkXCI+MTwvYj48L3Nsb3Q+XG5cdFx0QGVuZGVhY2hcblx0XHQzXG5cdFx0QGVsc2UgXG5cdFx0YXNkXG5cdEBlbmRpZlxuXHRlbmRcblx0YDtcblxuXHRodG1sID0gYFxuXHQ8ZGl2IGNsYXNzPVwiMlwiIDpzdHlsZT1cIjFcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH0sIHRpbWVdXCIgOnByb3AxPVwiMTIzXCI+XG5cdEBlYWNoKChpdGVtMSwga2V5MSkgaW4gaXRlbXMpXG5cdDx0ZW1wbGF0ZSA6a2V5PVwiJ3RleHQtJyArIGl0ZW0xICsgdGV4dDFcIj5cblx0XHQ8ZGl2IEBjbGljaz1cIm1ldGhvZDFcIiBAbW91c2Vkb3duPVwibWV0aG9kMShldmVudClcIj5cblx0XHRcdFNvbWUgdGVzdCB0ZXh0IFxcJHsgdGV4dDEgfSBhZnRlclxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJidXR0b25cIiBAbW91c2Vkb3duPVwiYWxlcnQoMilcIj5cblx0XHRcdDxzbG90PkRlZmF1bHQgPGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPiB0ZXh0PC9zbG90PlxuXHRcdDwvZGl2PlxuXHQ8L3RlbXBsYXRlPlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgaXRlbXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=