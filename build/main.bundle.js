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

  if (typeof value !== 'object') {
    value = {
      isExpression: true,
      value: value
    };
  }

  var result = (0, _value.makeValue)(this.context, value, _value.makeString); // console.log(result)

  return {
    value: new _types.arrowFunctionExpression(args.map(function (item) {
      return (0, _types.identifier)(item);
    }), new _types.blockStatement([new _types.returnStatement(result.content)])),
    deps: result.deps
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
        var id = path.node; // if(['label', 'key'].includes(path.key) || path.node.name === TMP_IDENTIFIER) {
        // 	return;
        // }

        identifiersCounter++;

        if (context.observables.includes(id.name)) {
          statefulCounter++;
        }
      }
    }
  });

  if (identifiersCounter <= 1 || statefulCounter == 0) {
    shouldWrap = false;
  } // console.log(context, identifiersCounter, statefulCounter, shouldWrap)


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

var _parser = __webpack_require__(/*! @hawa/parser */ "./packages/parser/dist/index.js");

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

    if (child instanceof _parser.Expression) {
      key = findKey(child);
      break;
    } else if (child.option.key !== undefined) {
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
  }, options.getLastVariableId(), context, options).value;
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
  var itemParams = [];
  var dependencies = [];

  for (var i = 0; i < this.children.length; i++) {
    var block = this.children[i];
    var body = [];
    this.children[i].handle(body, _extends({
      lastContextVariableId: options.getLastVariableId()
    }, options)); // Wrap statement arrow function and get deps of function that will be global for whole function

    var _options$dynamic$arro = options.dynamic.arrowFunction({
      value: block.value
    }, options.getLastVariableId(), context, options),
        value = _options$dynamic$arro.value,
        deps = _options$dynamic$arro.deps;

    dependencies = [].concat(dependencies, deps);
    itemParams.push(value);
    itemParams.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node')], new _types.blockStatement(body)));
  }

  params.push((0, _types.arrayExpression)(dependencies.map(function (item) {
    return (0, _types.identifier)(item);
  })));
  params = params.concat(itemParams);
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
} // Is property observable 


function isObservable(prop) {
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

attrArgToObj;

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
  var result = ''; // args = args.concat([]);

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result += attrArgToString(args[i]);
    }
  } else if (typeof args === 'object') {
    for (var key in args) {
      if (args[key]) {
        result += ' ' + key;
      }
    }
  } else {
    result += ' ' + args;
  }

  return result;
}

function makeClass(node, value, render) {
  var lastClassAdopted = [];
  (0, _observable.watch)(value, function (v) {
    var tmp = node.classList;
    var toSet = attrArgToString(v).substring(1).split(' ');
    var toRemove = lastClassAdopted.filter(function (x) {
      return !toSet.includes(x);
    });

    for (var _iterator = _createForOfIteratorHelperLoose(toSet), _step; !(_step = _iterator()).done;) {
      var name = _step.value;
      node.classList.add(name);
    }

    for (var _iterator2 = _createForOfIteratorHelperLoose(toRemove), _step2; !(_step2 = _iterator2()).done;) {
      var _name = _step2.value;
      node.classList.remove(_name);
    } // console.log(node);


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

function events(node, render, options) {
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
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.statement;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/render/dist/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/render/dist/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/render/dist/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

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

function slot($slots, name, node, callback) {
  if ($slots[name] === undefined) {
    callback(node);
    return;
  }

  node.innerHTML = $slots[name];
  return node;
}

/***/ }),

/***/ "./packages/render/dist/statement.js":
/*!*******************************************!*\
  !*** ./packages/render/dist/statement.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFirstCondition = getFirstCondition;
exports.statement = statement;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function getFirstCondition() {}

function statement(node, deps) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var endMark = document.createTextNode('');
  node.after(endMark);
  var lastCondition = null;
  (0, _observable.subscribe)(deps, function () {
    var returnNode = document.createComment('');
    var hasConditionRendered = false;
    var currentConditionIndex = null;

    for (var i = 0; i < args.length; i += 2) {
      var condition = args[i];
      var renderFn = args[i + 1];

      if (condition()) {
        var shouldRender = lastCondition !== i;
        returnNode = renderFn(node, shouldRender);
        currentConditionIndex = i;

        if (shouldRender) {
          hasConditionRendered = true;
        }

        break;
      }
    }

    var isSameCondition = currentConditionIndex === lastCondition;
    lastCondition = currentConditionIndex; // If same condition that it was hydrated and we dont need to replace nodes

    if (isSameCondition) {
      return;
    }

    if (node.nodeType === 11) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];

        if (i === 0) {
          child.replaceWith(returnNode);
        } else {
          child.remove();
        }
      }
    } else {
      node.replaceWith(returnNode);
    } // console.log('replace', node, 'with', returnNode);


    node = returnNode;
  }, false);
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
exports.parseContext = parseContext;

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

var _render = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");

var _time = _interopRequireDefault(__webpack_require__(/*! ./time */ "./test/time.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Frameworks methods
 */

/**
 * Execute
 * @return {[type]} [description]
 */
function test() {
  // let { render, templates } = gett();
  // console.log(render);
  // console.log(templates);
  // return;

  /**
   * GENERATED CODE
   */
  var _tpl$1 = document.createElement("template");

  _tpl$1.innerHTML = '<div class="2"><!----><div class="Test">${ text2 }</div></div>';

  var _tpl$2 = document.createElement("template");

  _tpl$2.innerHTML = '<!---->';

  var _tpl$3 = document.createElement("template");

  _tpl$3.innerHTML = '<div>Some test text ${ text1 } after</div><div class="button"><span>Default<b class="d">button</b>text</span></div>';
  var timer = null;

  function makeComponent(context, node) {
    if (node === void 0) {
      node = false;
    }

    var render = node === false;

    var _parseContext = (0, _render.parseContext)(context),
        $props = _parseContext.$props,
        $slots = _parseContext.$slots;
    /**
     * Script tag
     */


    var text1 = (0, _observable.observable)(12);
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
    }, 1000); // if(!render) {
    // 	time = setTimeout(() => {
    // 		items(Array.from({ length: 100 }, (_, i) => i));
    // 	}, 1000)
    // }

    /**
     * GENERATED CODE
     */

    var _el$1 = (0, _render.getNode)(_tpl$1, node, render);

    var _el$2 = render ? _el$1.firstChild : _el$1;

    (0, _render.attrs)(_el$2, render, {
      "data-1": (0, _observable.computed)([text1], function () {
        return {
          test: text1()
        };
      }),
      "data-2": (0, _observable.computed)([text1], function () {
        return text1();
      }),
      "class": (0, _observable.computed)([text1, text2], function () {
        return [text1(), {
          some: text2() === 2
        }];
      })
    });
    var _el$3 = _el$2.firstChild;

    var _el$16 = (0, _map.map)(_el$3, items, function (item1, key1) {
      return 'text-' + item1 + text1();
    }, function (node, render, _keyExpr$, item1, key1) {
      var _el$4 = (0, _render.getNode)(_tpl$2, node, render);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      var _el$15 = (0, _render.statement)(_el$5, [text2], function () {
        return item1 % 2 === 0 && text2() % 2 === 0;
      }, function (node, render) {
        var _el$6 = (0, _render.getNode)(_tpl$3, node, render);

        var _el$7 = render ? _el$6.firstChild : _el$6; // console.warn(_el$6, _el$7, node, render);


        (0, _observable.subscribe)([text1], function () {
          _el$7.setAttribute("data-key", 'text-' + item1 + text1());
        });
        (0, _render.events)(_el$7, render, {
          "click": function click(event) {
            return method1();
          },
          "mousedown": function mousedown(event) {
            return method1(event);
          }
        });
        var _el$8 = _el$7.firstChild;
        (0, _observable.subscribe)([text1], function () {
          _el$8.nodeValue = "Some test text " + text1() + " after";
        });
        var _el$9 = _el$7.nextSibling;
        (0, _render.events)(_el$9, render, {
          "mousedown": function mousedown(event) {
            return alert(2);
          }
        });
        var _el$10 = _el$9.firstChild;
        (0, _render.slot)($slots, "default", _el$10, function (node) {
          var _el$11 = _el$10.firstChild;
          var _el$12 = _el$11.nextSibling;
          var _el$13 = _el$12.firstChild;
          var _el$14 = _el$12.nextSibling;
        });
        return render ? _el$6 : _el$9;
      }); // console.warn(_el$15);


      return render ? _el$4 : _el$15;
    }, render);

    var _el$17 = _el$16.nextSibling;
    var _el$18 = _el$17.firstChild;
    (0, _observable.subscribe)([text2], function () {
      _el$18.nodeValue = "" + text2();
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
  html = "\n\t<div class=\"2\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }]\" :prop1=\"123\">\n\t\t@each((item1, key1) in items)\n\t\t\t@if(item1 % 2 === 0 && text2 % 2 === 0)\n\t\t\t<template :key=\"'text-' + item1 + text1\">\n\t\t\t\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\t\t\t\tSome test text ${ text1 } after\n\t\t\t\t</div>\n\t\t\t\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t\t\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t\t\t\t</div>\n\t\t\t</template>\n\t\t\t@endif\n\t\t@endeach\n\t\t<div class=\"Test\">${ text2 }</div>\n\t</div>\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet items = Array.from({ length: 1 }, (_, i) => i);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9Xcml0YWJsZVN0cmVhbSAoaWdub3JlZCkiXSwibmFtZXMiOlsiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnRleHQiLCJvYnNlcnZhYmxlcyIsInZhcnMiLCJtZXRob2RzIiwiY29udGV4dFN0YWNrIiwiaXNWYXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwiaWQiLCJwYXRoIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiaXNTdWJDb250ZXh0IiwiZXhpdCIsIkFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiY3JlYXRlQ29udGV4dCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiVmFyaWFibGVDb3VudGVyIiwiVGVtcGxhdGVzIiwiY29kZUFuYWx5c2UiLCJibG9ja3MiLCJkeW5hbWljRXhwcmVzc2lvbnMiLCJ0ZW1wbGF0ZSIsInByb2dyYW0iLCJjb2RlIiwiaSIsInRwbCIsImluZGV4IiwiaW5pdCIsIkxhc3RWYXJpYWJsZUlkIiwiZ2V0TGFzdFZhcmlhYmxlSWQiLCJnZXRDdXJyZW50Q29udGV4dCIsIkFjdGlvbiIsImRlbGNhcmF0aW9uVmFsdWUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdG9yIiwic2V0TGFzdFZhcmlhYmxlSWQiLCJlbnRpdHkiLCJib2R5Iiwib3B0aW9ucyIsInJlbW92ZUNvbnRleHQiLCJjcmVhdGVWYXJpYWJsZSIsImNyZWF0ZVRlbXBsYXRlIiwiZHluYW1pYyIsImhhbmRsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlbmRlciIsInRlbXBsYXRlcyIsImdldFRlbXBsYXRlcyIsImFyZ3MiLCJpc0V4cHJlc3Npb24iLCJyZXN1bHQiLCJtYWtlU3RyaW5nIiwiYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsInJldHVyblN0YXRlbWVudCIsInByb3BzIiwibWFrZUNvbXB1dGVkIiwib2JqZWN0UHJvcGVydHkiLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImNhbGxFeHByZXNzaW9uIiwib2JqZWN0RXhwcmVzc2lvbiIsIm1ha2VGdW5jdGlvbiIsImF0dHJzIiwiZXZlbnRzIiwic3RyaW5nIiwiYXJyb3dGdW5jdGlvbiIsInNldEF0dHIiLCJjb25zb2xlIiwiVHlwZSIsIm1ha2VTdWJzY3JpYmUiLCJtZW1iZXJFeHByZXNzaW9uIiwiY29udGVudCIsImFycmF5RXhwcmVzc2lvbiIsImFzc2lnbm1lbnRFeHByZXNzaW9uIiwiVE1QX0lERU5USUZJRVIiLCJmbiIsImZ1bmN0aW9uRXhwcmVzc2lvbiIsInN0YXRlZnVsQ291bnRlciIsImlkZW50aWZpZXJzQ291bnRlciIsInNob3VsZFdyYXAiLCJleHByIiwic3RhdGVtZW50IiwiY29uZGl0aW9uIiwibWF0Y2giLCJrZXkiLCJmaW5kS2V5IiwiY2hpbGQiLCJFeHByZXNzaW9uIiwicGFyYW1zIiwibG9vcCIsInBhcnNlRWFjaENvbmRpdGlvbiIsImxhc3RDaGlsZCIsImdldEZpcnN0VGVtcGxhdGVOb2RlIiwicmV0dXJuUG9pbnRlciIsImNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIml0ZW1QYXJhbXMiLCJkZXBlbmRlbmNpZXMiLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsIm5vZGUiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJuIiwiY2hpbGROb2RlcyIsInVuc3Vic2NyaWJlIiwiQXJyYXkiLCJiaW5kTm9kZSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJpc0F0dHIiLCJpc0RvbUF0dHIiLCJpc1Jvb3RBdHRyIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIlRleHQiLCJvbmNsb3NldGFnIiwicmVtb3ZlZCIsImRlY29kZUVudGl0aWVzIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJydWxlcyIsImlzVGVtcGxhdGUiLCJoYXNBbG9uZVRlbXBsYXRlIiwiYWxvbmUiLCJza2lwSW5pdCIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsImxpc3QiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwidmFsIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0Iiwic3R5bGVzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIiRzbG90cyIsImNhbGxiYWNrIiwibGFzdENvbmRpdGlvbiIsInJldHVybk5vZGUiLCJoYXNDb25kaXRpb25SZW5kZXJlZCIsImN1cnJlbnRDb25kaXRpb25JbmRleCIsInJlbmRlckZuIiwic2hvdWxkUmVuZGVyIiwiaXNTYW1lQ29uZGl0aW9uIiwiJHByb3BzIiwidGVzdCIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJfdHBsJDIiLCJfdHBsJDMiLCJ0aW1lciIsIm1ha2VDb21wb25lbnQiLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiLCJpdGVtcyIsImZyb20iLCJfIiwiYyIsInRpbWUiLCJtZXRob2QxIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJzb21lIiwiX2VsJDMiLCJfZWwkMTYiLCJpdGVtMSIsImtleTEiLCJfa2V5RXhwciQiLCJfZWwkNCIsIl9lbCQ1IiwiX2VsJDE1IiwiX2VsJDYiLCJfZWwkNyIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwiX2VsJDgiLCJub2RlVmFsdWUiLCJfZWwkOSIsIm5leHRTaWJsaW5nIiwiYWxlcnQiLCJfZWwkMTAiLCJfZWwkMTEiLCJfZWwkMTIiLCJfZWwkMTMiLCJfZWwkMTQiLCJfZWwkMTciLCJfZWwkMTgiLCJsYXlvdXQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImdldHQiLCJ0aW1lcyIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SkE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLHlCQUNQO0FBQ0MsTUFBTUEsR0FBRyxHQUFHLE1BQU0sQ0FBTixjQUFxQjtBQUNoQ0MsY0FBVSxFQURzQjtBQUVoQ0MsY0FBVSxFQUFFO0FBRm9CLEdBQXJCLENBQVo7QUFLQSxNQUFJQyxJQUFJLEdBQUcsb0JBQVgsR0FBVyxDQUFYO0FBQ0EsTUFBSUMsSUFBSSxHQUFHLDhCQUFrQkQsSUFBSSxDQUFqQyxXQUFXLENBQVg7QUFFQSxTQUFPO0FBQ05FLFdBQU8sRUFERDtBQUVORCxRQUFJLEVBQUVBO0FBRkEsR0FBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCwyRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7OztBQUVPLHNCQUNQO0FBQ0MsTUFBSUQsSUFBSSxHQUFHO0FBQ1ZHLGVBQVcsRUFERDtBQUVWQyxRQUFJLEVBRk07QUFHVkMsV0FBTyxFQUFFO0FBSEMsR0FBWDtBQU1BLE1BQUlDLFlBQVksR0FBaEI7QUFDQSxNQUFJQyxxQkFBcUIsR0FBekI7O0FBRUEsMEJBQXdCO0FBQ3ZCLFdBQU9ELFlBQVksQ0FBWkEsU0FBUDtBQUNBOztBQUVELCtCQUNBO0FBQ0NBLGdCQUFZLENBQVpBLEtBQWtCO0FBQ2pCRSxVQUFJLEVBRGE7QUFFakJKLFVBQUksRUFBRTtBQUZXLEtBQWxCRTtBQUlBOztBQUVELDBCQUNBO0FBQ0MsUUFBSUosT0FBTyxHQUFHSSxZQUFZLENBQTFCLEdBQWNBLEVBQWQ7QUFDQTs7QUFFRCx3QkFDQTtBQUNDLFdBQU9BLFlBQVksQ0FBQ0EsWUFBWSxDQUFaQSxTQUFwQixDQUFtQixDQUFuQjtBQUNBOztBQUVELDhCQUFjO0FBRWJHLHNCQUFrQixFQUFFO0FBQ25CQyxXQURtQix1QkFFbkI7QUFDQ0gsNkJBQXFCLEdBQXJCQTtBQUVBLFlBQUlJLEVBQUUsR0FBR0MsSUFBSSxDQUFKQSxLQUFUO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUpBLEtBQVo7QUFDQSxZQUFJVixPQUFPLEdBQUdZLFVBQWQ7O0FBRUEsWUFBR0MsWUFBWSxNQUFNRixLQUFLLEtBQTFCLE1BQXFDO0FBQ3BDWCxpQkFBTyxDQUFQQSxVQUFrQlMsRUFBRSxDQUFwQlQ7QUFDQTtBQUNBOztBQUVELFlBQUdXLEtBQUssQ0FBTEEsNkJBQW1DQSxLQUFLLENBQUxBLGdCQUF0QyxNQUFrRTtBQUNqRWIsY0FBSSxDQUFKQSxpQkFBc0JXLEVBQUUsQ0FBeEJYO0FBREQsZUFFTyxJQUFHLDJEQUEyRGEsS0FBSyxDQUFuRSxJQUFHLENBQUgsRUFBMkU7QUFDakZiLGNBQUksQ0FBSkEsaUJBQXNCVyxFQUFFLENBQXhCWDtBQURNLGVBRUE7QUFDTkEsY0FBSSxDQUFKQSxVQUFlVyxFQUFFLENBQWpCWDtBQUNBO0FBcEJpQjtBQXNCaEJnQixVQXRCZ0Isa0JBc0JUO0FBQ05ULDZCQUFxQixHQUFyQkE7QUFDQTtBQXhCZSxLQUZQO0FBNEJiVSwyQkFBdUIsRUFBRTtBQUN4QlAsV0FEd0IsdUJBRXhCO0FBQ0MsbUNBQTBCO0FBQzFCUSxxQkFBYSxDQUFDTixJQUFJLENBQUpBLGFBQWRNLElBQWEsQ0FBYkE7QUFKdUI7QUFNckJGLFVBTnFCLHNCQU9yQjtBQUNDLG1DQUEwQjtBQUMxQkcsb0JBQVk7QUFDWjtBQVZvQixLQTVCWjtBQXdDYkMsdUJBQW1CLEVBQUU7QUFDcEJWLFdBRG9CLHVCQUVwQjtBQUNDLG1DQUEwQjtBQUMxQlYsWUFBSSxDQUFKQSxhQUFrQlksSUFBSSxDQUFKQSxRQUFsQlo7QUFDQWtCLHFCQUFhLENBQUNOLElBQUksQ0FBSkEsUUFBZE0sSUFBYSxDQUFiQTtBQUxtQjtBQU9qQkYsVUFQaUIsc0JBUWpCO0FBQ0MsbUNBQTBCO0FBQzFCRyxvQkFBWTtBQUNaO0FBWGdCO0FBeENSLEdBQWQ7QUF1REE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZEOzs7Ozs7OztBQUVPLHdDQUNQO0FBQUEsTUFEa0NoQixXQUNsQztBQURrQ0EsZUFDbEMsR0FEZ0QsRUFBZEE7QUFDbEM7O0FBQ0MsTUFBSUYsSUFBSSxHQUFSO0FBRUEsTUFBSUssWUFBWSxHQUFoQjtBQUNBLE1BQUlDLHFCQUFxQixHQUF6Qjs7QUFFQSwwQkFBd0I7QUFDdkIsV0FBT0QsWUFBWSxDQUFaQSxTQUFQO0FBQ0E7O0FBRUQsK0JBQ0E7QUFDQ0EsZ0JBQVksQ0FBWkEsS0FBa0I7QUFDakJFLFVBQUksRUFEYTtBQUVqQkosVUFBSSxFQUZhO0FBR2pCSCxVQUFJLEVBQUU7QUFIVyxLQUFsQks7QUFLQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlKLE9BQU8sR0FBR0ksWUFBWSxDQUExQixHQUFjQSxFQUFkO0FBQ0FMLFFBQUksQ0FBQ0MsT0FBTyxDQUFaRCxJQUFJLENBQUpBLEdBQXFCQyxPQUFPLENBQTVCRDtBQUNBOztBQUVELHdCQUNBO0FBQ0MsV0FBT0ssWUFBWSxDQUFDQSxZQUFZLENBQVpBLFNBQXBCLENBQW1CLENBQW5CO0FBQ0E7O0FBRUQsOEJBQWM7QUFFYmUsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJUixPQUFPLEdBQUdZLFVBQWQ7QUFDQSxZQUFJTixJQUFJLEdBQUdJLElBQUksQ0FBSkEsS0FBWDs7QUFFQSxZQUFHLENBQUNHLFlBQUosSUFBb0I7QUFDbkI7QUFDQTs7QUFFRCxZQUFHLENBQUNiLE9BQU8sQ0FBUEEsY0FBRCxJQUFDQSxDQUFELElBQWdDQyxXQUFXLENBQVhBLFNBQW5DLElBQW1DQSxDQUFuQyxFQUErRDtBQUM5REQsaUJBQU8sQ0FBUEE7QUFDQTtBQUNEO0FBYlUsS0FGQztBQWtCYk8sc0JBQWtCLEVBQUU7QUFDbkJDLFdBRG1CLHVCQUVuQjtBQUNDSCw2QkFBcUIsR0FBckJBO0FBRUEsWUFBSUksRUFBRSxHQUFHQyxJQUFJLENBQUpBLEtBQVQ7QUFDQSxZQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBSkEsS0FBWjtBQUNBLFlBQUlWLE9BQU8sR0FBR1ksVUFBZDs7QUFFQSxZQUFHQyxZQUFZLE1BQU1GLEtBQUssS0FBMUIsTUFBcUM7QUFDcENYLGlCQUFPLENBQVBBLFVBQWtCUyxFQUFFLENBQXBCVDtBQUNBO0FBQ0E7QUFaaUI7QUFjaEJjLFVBZGdCLGtCQWNUO0FBQ05ULDZCQUFxQixHQUFyQkE7QUFDQTtBQWhCZSxLQWxCUDtBQW9DYlUsMkJBQXVCLEVBQUU7QUFDeEJQLFdBRHdCLHVCQUV4QjtBQUNDLG1DQUEwQjtBQUMxQlEscUJBQWEsQ0FBQ04sSUFBSSxDQUFKQSxhQUFkTSxJQUFhLENBQWJBO0FBSnVCO0FBTXJCRixVQU5xQixzQkFPckI7QUFDRixtQ0FBMEI7QUFDdkJHLG9CQUFZO0FBQ1o7QUFWb0IsS0FwQ1o7QUFnRGJDLHVCQUFtQixFQUFFO0FBQ3BCVixXQURvQix1QkFFcEI7QUFDQyxtQ0FBMEI7QUFDMUJRLHFCQUFhLENBQUNOLElBQUksQ0FBSkEsUUFBZE0sSUFBYSxDQUFiQTtBQUptQjtBQU1qQkYsVUFOaUIsc0JBT2pCO0FBQ0MsbUNBQTBCO0FBQzFCRyxvQkFBWTtBQUNaO0FBVmdCO0FBaERSLEdBQWQ7QUE4REE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0Q7O0FBQ0EsZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUdPLHlCQUNQO0FBQ0MsTUFBSUcsZUFBZSxHQUFuQjtBQUNBLE1BQUloQixZQUFZLEdBQWhCO0FBRUE7Ozs7O0FBSUEsTUFBSWlCLFNBQVMsR0FBRyxJQUFoQixHQUFnQixFQUFoQjtBQUVBLE1BQUlDLFdBQVcsR0FBRyx1QkFBUUMsTUFBTSxDQUFoQyxNQUFrQixDQUFsQjtBQUNBLE1BQUlDLGtCQUFrQixHQUFHLHNCQVgxQixXQVcwQixDQUF6QixDQVhELENBWUM7O0FBRUEsbUNBQ0E7QUFDQyxRQUFJQyxRQUFRLEdBQUdDLE9BQU8sQ0FBUEEsYUFBZixJQUFlQSxDQUFmO0FBRUFMLGFBQVMsQ0FBVEE7QUFFQSxXQUFPLGlDQUFZQSxTQUFTLENBQTVCLElBQU8sQ0FBUDtBQUNBOztBQUVELDBCQUNBO0FBQ0MsUUFBSU0sSUFBSSxHQUFSO0FBQ0EsUUFBSUMsQ0FBQyxHQUFMOztBQUVBLDBHQUEwQjtBQUFBLFVBQWxCQyxHQUFrQjtBQUN6QixVQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBSCxVQUFJLDBCQUFKQTtBQUNBQSxVQUFJLCtDQUFKQTtBQUNBOztBQUVEO0FBQ0E7QUFFRDs7Ozs7OztBQUtBLCtCQUNBO0FBQUEsUUFEdUJJLElBQ3ZCO0FBRHVCQSxVQUN2QixHQUQ4QixLQUFQQTtBQUN2Qjs7QUFDQyxXQUFPLFlBQVksQ0FBWixLQUFrQjtBQUN4QkMsb0JBQWMsRUFBRUQsSUFBSSxHQUFHLHVCQUFILE1BQUcsQ0FBSCxHQUFnQkUsaUJBQWlCO0FBRDdCLEtBQWxCLENBQVA7QUFHQTs7QUFFRCwrQkFDQTtBQUNDLFdBQU83QixZQUFZLENBQUNBLFlBQVksQ0FBWkEsU0FBcEIsQ0FBbUIsQ0FBbkI7QUFDQTs7QUFFRCwyQkFDQTtBQUNDQSxnQkFBWSxDQUFaQTtBQUNBOztBQUVELCtCQUNBO0FBQ0MsV0FBTzhCLGlCQUFpQixHQUF4QjtBQUNBOztBQUVELG9DQUNBO0FBQ0NBLHFCQUFpQixHQUFqQkE7QUFDQTs7QUFFRCwyQ0FDQTtBQUFBLFFBRHdCbEMsT0FDeEI7QUFEd0JBLGFBQ3hCLEdBRGtDLElBQVZBO0FBQ3hCOztBQUFBLFFBRHdDbUMsTUFDeEM7QUFEd0NBLFlBQ3hDLEdBRGlEO0FBQUE7QUFDakQsT0FEd0NBO0FBQ3hDOztBQUNDLFFBQUk3QixJQUFJLEdBQUcsZ0NBQVcsRUFBdEIsZUFBVyxDQUFYO0FBRUEsUUFBSThCLGdCQUFnQixHQUFHRCxNQUFNLE9BQU9GLGlCQUFwQyxFQUE2QixDQUE3QjtBQUVBLFFBQUl0QixLQUFLLEdBQUcsSUFBSTBCLE9BQUosMkJBQStCLENBQzFDLElBQUlDLE9BQUoseUJBREQsZ0JBQ0MsQ0FEMEMsQ0FBL0IsQ0FBWjtBQU9BQyxxQkFBaUIsQ0FBakJBLElBQWlCLENBQWpCQTtBQUVBLFdBQU87QUFDTmpDLFVBQUksRUFERTtBQUVOSyxXQUFLLEVBQUxBO0FBRk0sS0FBUDtBQUlBO0FBRUQ7Ozs7OztBQUlBLE1BQUk2QixNQUFNLEdBQUdqQixNQUFNLENBQW5CO0FBQ0EsTUFBSWtCLElBQUksR0FBUjtBQUVBLE1BQUlDLE9BQU8sR0FBRztBQUNiMUIsaUJBQWEsRUFEQTtBQUViMkIsaUJBQWEsRUFGQTtBQUdiQyxrQkFBYyxFQUhEO0FBSWJYLHFCQUFpQixFQUpKO0FBS2JZLGtCQUFjLEVBTEQ7QUFNYkMsV0FBTyxFQUFFdEI7QUFOSSxHQUFkOztBQVNBLDBCQUNBO0FBQ0NnQixVQUFNLENBQU5BO0FBQ0E7O0FBRUR4QixlQUFhLENBQWJBLElBQWEsQ0FBYkE7QUFDQSxlQUFhO0FBQUEsV0FBVStCLE1BQU0sQ0FBaEIsSUFBZ0IsQ0FBaEI7QUFBYjtBQUVBOzs7OztBQUlBLE1BQUlwQixJQUFJLEdBQUcsd0JBQVMsOEJBQVQsUUFBUyxDQUFULEVBSVI7QUFDRnFCLGVBQVcsRUFEVDtBQUVGQyxXQUFPLEVBRkw7QUFHRkMsWUFBUSxFQUhOO0FBSUZDLFdBQU8sRUFKTDtBQUtGQyxVQUFNLEVBQUU7QUFMTixHQUpRLENBQVg7QUFZQSxTQUFPO0FBQ05DLFVBQU0sRUFBRTFCLElBQUksQ0FETjtBQUVOMkIsYUFBUyxFQUFFQyxZQUFZO0FBRmpCLEdBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEtEOztBQWVBOztBQUVPLHNEQUNQO0FBQUEsd0JBRGdDNUMsS0FDaEM7QUFBQSxNQURnQ0EsS0FDaEMsMkJBRHdDLEVBQ3hDO0FBQUEsdUJBRDRDNkMsSUFDNUM7QUFBQSxNQUQ0Q0EsSUFDNUMsMEJBRG1ELEVBQ25EOztBQUNDLE1BQUcsaUJBQUgsVUFBOEI7QUFDN0I3QyxTQUFLLEdBQUc7QUFDUDhDLGtCQUFZLEVBREw7QUFFUDlDLFdBQUssRUFBRUE7QUFGQSxLQUFSQTtBQUlBOztBQUVELE1BQUkrQyxNQUFNLEdBQUcsc0JBQVUsS0FBVixnQkFBK0JDLE9BUjdDLFVBUWMsQ0FBYixDQVJELENBVUM7O0FBQ0EsU0FBTztBQUNOaEQsU0FBSyxFQUFFLElBQUlpRCxPQUFKLHdCQUNOLElBQUksQ0FBSixJQUFTLGdCQUFJO0FBQUEsYUFBSSx1QkFBSixJQUFJLENBQUo7QUFEUCxLQUNOLENBRE0sRUFFTixJQUFJQyxPQUFKLGVBQW1CLENBQ2xCLElBQUlDLE9BQUosZ0JBQW9CSixNQUFNLENBSnRCLE9BSUosQ0FEa0IsQ0FBbkIsQ0FGTSxDQUREO0FBT04zRCxRQUFJLEVBQUUyRCxNQUFNLENBQUMzRDtBQVBQLEdBQVA7QUFTQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOztBQVlBOztBQUVPLGdEQUNQO0FBQ0MsTUFBR3lDLE1BQU0sQ0FBTkEsc0JBQUgsV0FBMkM7QUFDMUM7QUFDQTs7QUFFRCxNQUFJdUIsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQnZCLE1BQU0sQ0FBTkEsT0FBaEIsWUFBMEM7QUFDekMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxrQkFBeEIsSUFBd0JBLENBQXhCLEVBQXdEd0IsT0FBcEUsWUFBWSxDQUFaO0FBRUFELFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsSUFDQyxDQURELEVBRERGLEtBQ0MsQ0FEREE7QUFNQTs7QUFFRCxNQUFHQSxLQUFLLENBQUxBLFdBQUgsR0FBdUI7QUFDdEI7QUFDQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUNDLHVCQURELGFBQ0MsQ0FERCxFQUNvQixRQUVsQix1QkFGa0IsUUFFbEIsQ0FGa0IsRUFHbEIsSUFBSUMsT0FBSixpQkFMSCxLQUtHLENBSGtCLENBRHBCLENBRGdCLENBQWpCO0FBVUFyRSxTQUFPLENBQVBBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDs7QUFZQTs7QUFFTyxpREFDUDtBQUNDLE1BQUd3QyxNQUFNLENBQU5BLFdBQUgsV0FBZ0M7QUFDL0I7QUFDQTs7QUFFRCxNQUFJdUIsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQnZCLE1BQU0sQ0FBTkEsT0FBaEIsUUFBc0M7QUFDckMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxjQUF4QixJQUF3QkEsQ0FBeEIsRUFBb0Q4QixPQUFoRSxZQUFZLENBQVo7QUFFQVAsU0FBSyxDQUFMQSxLQUNDLElBQUlFLE9BQUosZUFDQywwQkFERCxJQUNDLENBREQsRUFEREYsS0FDQyxDQUREQTtBQU1BOztBQUVELE1BQUdBLEtBQUssQ0FBTEEsV0FBSCxHQUF1QjtBQUN0QjtBQUNBOztBQUVELE1BQUlHLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsY0FDQyxDQURELEVBQ3FCLFFBRW5CLHVCQUZtQixRQUVuQixDQUZtQixFQUduQixJQUFJQyxPQUFKLGlCQUxILEtBS0csQ0FIbUIsQ0FEckIsQ0FEZ0IsQ0FBakI7QUFVQXJFLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREOztBQWVBOztBQUVPLG9EQUNQO0FBQ0MsTUFBRyxpQkFBSCxVQUE4QjtBQUM3QlcsU0FBSyxHQUFHO0FBQ1A4QyxrQkFBWSxFQURMO0FBRVA5QyxXQUFLLEVBQUVBO0FBRkEsS0FBUkE7QUFJQTs7QUFFRCxNQUFJK0MsTUFBTSxHQUFHLHNCQUFVLEtBQVYsZ0JBQStCTSxPQVI3QyxZQVFjLENBQWIsQ0FSRCxDQVVDOztBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSxtRyxDQUVBOzs7QUFFZSwwQkFDZjtBQUNDLFNBQU87QUFDTk8sU0FBSyxFQUFFQSxrQkFERCxPQUNDQSxDQUREO0FBRU5DLFVBQU0sRUFBRUEsb0JBRkYsT0FFRUEsQ0FGRjtBQUdOVCxTQUFLLEVBQUVBLGtCQUhELE9BR0NBLENBSEQ7QUFJTlUsVUFBTSxFQUFFQSxvQkFKRixPQUlFQSxDQUpGO0FBS05QLGNBQVUsRUFBRUEsNEJBTE4sT0FLTUEsQ0FMTjtBQU1OUSxpQkFBYSxFQUFFQSxrQ0FOVCxPQU1TQSxDQU5UO0FBT05DLFdBQU8sRUFBRUE7QUFQSCxHQUFQO0FBU0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCRDs7QUFZQTs7QUFFTyxnREFDUDtBQUNDLE1BQUduQyxNQUFNLENBQU5BLHNCQUFILFdBQTJDO0FBQzFDO0FBQ0E7O0FBRUQsT0FBSSxJQUFKLFFBQWdCQSxNQUFNLENBQU5BLE9BQWhCLFlBQTBDO0FBQ3pDLFFBQUk3QixLQUFLLEdBQUcsc0JBQVU2QixNQUFNLENBQU5BLGtCQUF0QixJQUFzQkEsQ0FBVixDQUFaO0FBQ0E7O0FBR0RvQyxTQUFPLENBQVBBLEtBQWFwQyxNQUFNLENBQU5BLE9BQWJvQztBQUVBO0FBRUEsTUFBSWIsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixPQUFlLEtBQWYsT0FBMkI7QUFDMUJBLFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsR0FDQyxDQURELEVBRUMsMEJBQWMsV0FIaEJGLEdBR2dCLENBQWQsQ0FGRCxDQUREQTtBQU1BOztBQUVELE1BQUlHLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsYUFDQyxDQURELEVBQ29CLFFBRWxCLHVCQUZrQixRQUVsQixDQUZrQixFQUdsQixJQUFJQyxPQUFKLGlCQUxILEtBS0csQ0FIa0IsQ0FEcEIsQ0FEZ0IsQ0FBakI7QUFVQXJFLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkREOztBQWVBOztBQUVPLGdEQUNQO0FBQUEsdUJBRDBCTSxJQUMxQjtBQUFBLE1BRDBCQSxJQUMxQiwwQkFEaUMsS0FDakM7QUFBQSxNQUR3Q3VFLElBQ3hDLFFBRHdDQSxJQUN4Qzs7QUFDQyxNQUFHQSxJQUFJLENBQUpBLGlCQUFILFdBQW9DO0FBQ25DO0FBQ0E7O0FBRUQsTUFBSWxFLEtBQUssR0FBR2tFLElBQUksQ0FBSkEsT0FBWixJQUFZQSxDQUFaO0FBQ0EsTUFBSW5CLE1BQU0sR0FBRyxzQkFBVSxLQUFWLGdCQUErQm9CLE9BQTVDLGFBQWEsQ0FBYjtBQUVBLE1BQUlaLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsSUFBSVcsT0FBSix3QkFFQyx1QkFIRixjQUdFLENBRkQsQ0FERCxFQUtDLENBQ0Msb0NBREQsSUFDQyxDQURELEVBRUNyQixNQUFNLENBUlQsSUFNRSxDQUxELENBRGdCLENBQWpCOztBQWFBLE1BQUdBLE1BQU0sQ0FBVCxZQUFzQjtBQUNyQlEsY0FBVSxHQUFHLElBQUlDLE9BQUosb0JBQ1osSUFBSUMsT0FBSixlQUNDLHVCQURELFdBQ0MsQ0FERCxFQUVDLENBQ0NWLE1BQU0sQ0FEUCxNQUVDLElBQUlFLE9BQUosNEJBQ0MsSUFBSUMsT0FBSixlQUFtQixDQU52QkssVUFNdUIsQ0FBbkIsQ0FERCxDQUZELENBRkQsQ0FEWSxDQUFiQTtBQWFBOztBQUVEbEUsU0FBTyxDQUFQQSxLQXJDRCxVQXFDQ0EsRUFyQ0QsQ0F1Q0M7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7O0FBZUE7O0FBRU8saURBQ1A7QUFDQyxNQUFHd0MsTUFBTSxDQUFOQSxVQUFILFdBQStCO0FBQzlCO0FBQ0E7O0FBRUQsTUFBSWlCLFlBQVksR0FBR2pCLE1BQU0sQ0FBTkEsNkJBQW5COztBQUVBLE1BQUcsQ0FBSCxjQUFrQjtBQUNqQjtBQUNBOztBQVRGLG1CQVd5QixzQkFBVSxLQUFWLFNBQXdCO0FBQy9DaUIsZ0JBQVksRUFEbUM7QUFFL0M5QyxTQUFLLFFBQVE2QixNQUFNLENBQWQ7QUFGMEMsR0FBeEIsRUFHckJtQixPQWRKLFVBV3lCLENBWHpCO0FBQUEsTUFXTzVELElBWFA7QUFBQSxNQVdhaUYsT0FYYjs7QUFnQkNqRixNQUFJLEdBQUcsSUFBSWtGLE9BQUosZ0JBQW9CLElBQUksQ0FBSixJQUFTLGdCQUFVO0FBQzdDLFdBQU8sdUJBQVAsSUFBTyxDQUFQO0FBRERsRixHQUEyQixDQUFwQixDQUFQQTtBQUtBLE1BQUkwQyxJQUFJLEdBQUcsSUFBSW1CLE9BQUosNEJBQ1YsSUFBSUMsT0FBSixlQUFtQixDQUNsQixJQUFJTSxPQUFKLG9CQUNDLElBQUllLE9BQUosMEJBRUMsSUFBSUgsT0FBSix3QkFBNEIsdUJBRjdCLFdBRTZCLENBQTVCLENBRkQsRUFISCxPQUdHLENBREQsQ0FEa0IsQ0FBbkIsQ0FEVSxDQUFYO0FBWUEsTUFBSWIsVUFBVSxHQUFHLElBQUlDLE9BQUosb0JBQ2hCLElBQUlDLE9BQUosZUFDQyx1QkFERCxXQUNDLENBREQsRUFFQyxPQUhGLElBR0UsQ0FGRCxDQURnQixDQUFqQjtBQU9BcEUsU0FBTyxDQUFQQTtBQUVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUREOztBQWdCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTW1GLGNBQWMsR0FBcEI7O0FBRU8sdUNBQ1A7QUFDQyxNQUFHLENBQUN4RSxLQUFLLENBQVQsY0FBd0I7QUFDdkIsV0FBTywwQkFBY0EsS0FBSyxDQUExQixLQUFPLENBQVA7QUFDQTs7QUFFRCxNQUFJZ0IsSUFBSSxHQUFNd0QsY0FBTixRQUFNQSxHQUFvQnhFLEtBQUssQ0FBdkM7QUFFQSxNQUFNaEIsR0FBRyxHQUFHLE1BQU0sQ0FBTixZQUFtQjtBQUM5QkMsY0FBVSxFQURvQjtBQUU5QkMsY0FBVSxFQUFFO0FBRmtCLEdBQW5CLENBQVo7QUFLQSxTQUFPdUYsRUFBRSxNQUFULE9BQVMsQ0FBVDtBQUNBO0FBRUQ7Ozs7O0FBR08sb0NBQ1A7QUFDQyw4QkFBYztBQUNiakUsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFDQSxZQUFHVixPQUFPLENBQVBBLGlCQUF5QlMsRUFBRSxDQUE5QixJQUFHVCxDQUFILEVBQXNDO0FBQ3JDLGNBQUdVLElBQUksQ0FBSkEsZ0JBQUgsa0JBQTBDO0FBQ3pDRCxjQUFFLENBQUZBLE9BQWFBLEVBQUUsQ0FBZkEsSUFBYUEsR0FBYkE7QUFDQTtBQUNEO0FBRUQ7QUFWVTtBQURDLEdBQWQ7QUFlQSxNQUFJaUQsTUFBTSxHQUFHL0QsR0FBRyxDQUFIQSxhQUFiLENBQWFBLENBQWI7QUFFQStELFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxXQUFUQTtBQUVBLFNBQU8sSUFBSTJCLE9BQUoseUJBQTZCLENBQUMsdUJBQTlCLE9BQThCLENBQUQsQ0FBN0IsRUFBNEMsSUFBSXhCLE9BQUosZUFBbUIsQ0FDckUsSUFBSUMsT0FBSixnQkFERCxNQUNDLENBRHFFLENBQW5CLENBQTVDLENBQVA7QUFHQTtBQUVEOzs7OztBQUdPLGtDQUNQO0FBQ0MsTUFBSS9ELElBQUksR0FBUjtBQUVBLDhCQUFjO0FBQ2JvQixjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUdWLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVUsRUFBRSxDQUFaVjtBQUNBVSxZQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFSUztBQVVYSyxVQVZXLHNCQVVBLENBRVY7QUFaVTtBQURDLEdBQWQ7QUFpQkEsTUFBSTRDLE1BQU0sR0FBRy9ELEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUErRCxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0FBVEE7QUFFQSxTQUFPO0FBQ05zQixXQUFPLEVBREQ7QUFFTmpGLFFBQUksRUFBRUE7QUFGQSxHQUFQO0FBSUE7QUFFRDs7Ozs7QUFHTyxvQ0FDUDtBQUNDLE1BQUlBLElBQUksR0FBUjtBQUNBLE1BQUl1RixlQUFlLEdBQW5CO0FBQ0EsTUFBSUMsa0JBQWtCLEdBQXRCO0FBQ0EsTUFBSUMsVUFBVSxHQUFkO0FBRUEsOEJBQWM7QUFDYnJFLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSUMsRUFBRSxHQUFHQyxJQUFJLENBRGQsSUFDQyxDQURELENBR0M7QUFDQTtBQUNBOztBQUVBNkUsMEJBQWtCOztBQUVsQixZQUFHdkYsT0FBTyxDQUFQQSxxQkFBNkJTLEVBQUUsQ0FBbEMsSUFBR1QsQ0FBSCxFQUEwQztBQUN6Q3NGLHlCQUFlO0FBQ2Y7QUFDRDtBQWRVO0FBREMsR0FBZDs7QUFvQkEsTUFBR0Msa0JBQWtCLElBQWxCQSxLQUEyQkQsZUFBZSxJQUE3QyxHQUFvRDtBQUNuREUsY0FBVSxHQUFWQTtBQTNCRixJQThCQzs7O0FBRUEsOEJBQWM7QUFDYnJFLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSUMsRUFBRSxHQUFHQyxJQUFJLENBQWI7O0FBRUEsWUFBRywwQkFBMEJBLElBQUksQ0FBakMsR0FBRyxDQUFILEVBQXdDO0FBQ3ZDO0FBQ0E7O0FBRUQsWUFBR1YsT0FBTyxDQUFQQSxxQkFBNkJTLEVBQUUsQ0FBbEMsSUFBR1QsQ0FBSCxFQUEwQztBQUN6Q0QsY0FBSSxDQUFKQSxLQUFVVSxFQUFFLENBQVpWOztBQUNBLDBCQUFlO0FBQ2RVLGNBQUUsQ0FBRkEsT0FBY0EsRUFBRSxDQUFoQkEsSUFBY0EsR0FBZEE7QUFDQTtBQUNEO0FBZFM7QUFnQlhLLFVBaEJXLHNCQWdCQSxDQUVWO0FBbEJVO0FBREMsR0FBZDtBQXVCQSxNQUFJNEMsTUFBTSxHQUFHL0QsR0FBRyxDQUFIQSxhQUFiLENBQWFBLENBQWI7QUFFQStELFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxXQUFUQTs7QUFFQSxNQUFHM0QsSUFBSSxDQUFKQSxnQkFBcUJ5RixVQUFVLEtBQWxDLE9BQThDO0FBQzdDO0FBQ0E7O0FBRUR6RixNQUFJLEdBQUcsSUFBSWtGLE9BQUosZ0JBQW9CLElBQUksQ0FBSixJQUFTLGdCQUFVO0FBQzdDLFdBQU8sdUJBQVAsSUFBTyxDQUFQO0FBRERsRixHQUEyQixDQUFwQixDQUFQQTtBQUtBLE1BQUkwQyxJQUFJLEdBQUcsSUFBSW1CLE9BQUosNEJBQ1YsSUFBSUMsT0FBSixlQUFtQixDQUNsQixJQUFJQyxPQUFKLGdCQUZGLE1BRUUsQ0FEa0IsQ0FBbkIsQ0FEVSxDQUFYO0FBTUEsU0FBTyxJQUFJTSxPQUFKLGVBQ04sdUJBRE0sVUFDTixDQURNLEVBRU4sT0FGRCxJQUVDLENBRk0sQ0FBUDtBQUlBO0FBSUQ7Ozs7O0FBR08scUNBQ1A7QUFDQyxNQUFJckUsSUFBSSxHQUFSO0FBQ0EsTUFBSXVGLGVBQWUsR0FBbkI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBdEI7QUFDQSxNQUFJQyxVQUFVLEdBQWQ7QUFFQSw4QkFBYztBQUNickUsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFFQSxZQUFHLDBCQUEwQkEsSUFBSSxDQUE5QixRQUF1Q0EsSUFBSSxDQUFKQSxjQUExQyxnQkFBNkU7QUFDNUU7QUFDQTs7QUFFRDZFLDBCQUFrQjs7QUFFbEIsWUFBR3ZGLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNzRix5QkFBZTtBQUNmO0FBQ0Q7QUFkVTtBQURDLEdBQWQ7O0FBb0JBLE1BQUdDLGtCQUFrQixJQUFsQkEsS0FBMkJELGVBQWUsSUFBN0MsR0FBb0Q7QUFDbkRFLGNBQVUsR0FBVkE7QUEzQkYsSUE4QkM7OztBQUVBLDhCQUFjO0FBQ2JyRSxjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUcsMEJBQTBCQSxJQUFJLENBQWpDLEdBQUcsQ0FBSCxFQUF3QztBQUN2QztBQUNBOztBQUVELFlBQUdWLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVUsRUFBRSxDQUFaVjs7QUFDQSwwQkFBZTtBQUNkVSxjQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFDRDtBQWRTO0FBZ0JYSyxVQWhCVyxzQkFnQkEsQ0FFVjtBQWxCVTtBQURDLEdBQWQ7QUF1QkEsTUFBSTRDLE1BQU0sR0FBRy9ELEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUErRCxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0F6RFYsS0F5RENBLENBekRELENBMkRDO0FBQ0E7QUFDQTs7QUFFQTNELE1BQUksR0FBRyxJQUFJa0YsT0FBSixnQkFBb0IsSUFBSSxDQUFKLElBQVMsZ0JBQVU7QUFDN0MsV0FBTyx1QkFBUCxJQUFPLENBQVA7QUFERGxGLEdBQTJCLENBQXBCLENBQVBBO0FBSUEsU0FBTztBQUNOeUYsY0FBVSxFQURKO0FBRU56RixRQUFJLEVBRkU7QUFHTjBGLFFBQUksRUFBRS9CO0FBSEEsR0FBUDtBQU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QWJ4UUQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QWNEQTs7QUFZQSxrRyxDQUVBOzs7QUFDZSxxQ0FDZjtBQUFBOztBQUVDLE1BQUkzQixJQUFJLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUNwRCxXQUFPLElBQUlxQyxPQUFKLGVBQ04sdUJBRE0sY0FDTixDQURNLEVBQ2MsQ0FDbkIsMEJBQWMsS0FBSSxDQURDLElBQ25CLENBRG1CLEtBR25CLHVCQUpGLFFBSUUsQ0FIbUIsQ0FEZCxDQUFQO0FBREQsR0FBVyxDQUFYO0FBVUFwRSxTQUFPLENBQVBBLEtBQWErQixJQUFJLENBQWpCL0I7QUFFQTBDLFNBQU8sQ0FBUEE7QUFFQSxNQUFJakIsUUFBUSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDeEQsV0FBTyxJQUFJc0QsT0FBSixvQkFDSCx1QkFESixhQUNJLENBREcsQ0FBUDtBQURELEdBQWUsQ0FBZjtBQU1BL0UsU0FBTyxDQUFQQSxLQUFheUIsUUFBUSxDQUFyQnpCO0FBRUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQVVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sb0NBQ1A7QUFDQyxNQUFJMEYsU0FBUyxHQUFHLE1BQU0sQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCO0FBRUEsTUFBSUMsU0FBUyxHQUFiO0FBQ0EsTUFBSW5DLElBQUksR0FBUjs7QUFFQSx3R0FBNEI7QUFBQSxRQUFwQm9DLEtBQW9COztBQUUzQixRQUFHQSxLQUFLLENBQUxBLE9BQUgsTUFBc0I7QUFDckJwQyxVQUFJLENBQUpBLEtBQVVvQyxLQUFLLENBQUxBLE9BQVZwQztBQURELFdBRU87QUFDTkEsVUFBSSxDQUFKQTtBQUNBOztBQUVELFFBQUdvQyxLQUFLLENBQUxBLE9BQUgsS0FBcUI7QUFDcEJwQyxVQUFJLENBQUpBLEtBQVVvQyxLQUFLLENBQUxBLE9BQVZwQztBQURELFdBRU87QUFDTkEsVUFBSSxDQUFKQTtBQUNBOztBQUVEbUMsYUFBUyxHQUFHQyxLQUFLLENBQUxBLE9BQVpEO0FBQ0E7O0FBRUQsU0FBTztBQUNORSxPQUFHLEVBQUVDLE9BQU8sQ0FETixNQUNNLENBRE47QUFFTkgsYUFBUyxFQUZIO0FBR05uQyxRQUFJLEVBQUpBO0FBSE0sR0FBUDtBQUtBOztBQUVNLHlCQUNQO0FBQ0MsTUFBSXFDLEdBQUcsR0FBUDs7QUFFQSx3REFBaUJyRCxNQUFNLENBQXZCLG1EQUNBO0FBQUEsUUFEUXVELEtBQ1I7O0FBQ0MsUUFBR0EsS0FBSyxZQUFZQyxRQUFwQixZQUFnQztBQUMvQkgsU0FBRyxHQUFHQyxPQUFPLENBQWJELEtBQWEsQ0FBYkE7QUFDQTtBQUZELFdBR08sSUFBR0UsS0FBSyxDQUFMQSxlQUFILFdBQW1DO0FBQ3pDRixTQUFHLEdBQUdFLEtBQUssQ0FBTEEsT0FBTkY7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsTUFBR0EsR0FBRyxLQUFOLE1BQWlCO0FBQ2hCLFVBQU0sVUFBTiwrQ0FBTSxDQUFOO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFYyxnQ0FDZjtBQUFBOztBQUNDLE1BQUlJLE1BQU0sR0FBVjtBQUNBLE1BQUl4RCxJQUFJLEdBQVI7QUFFQXdELFFBQU0sQ0FBTkEsS0FBWXZELE9BQU8sQ0FBbkJ1RCxpQkFBWXZELEVBQVp1RDtBQUVBOzs7Ozs7OztBQU9BLE1BQUlDLElBQUksR0FBR0Msa0JBQWtCLENBQTdCLElBQTZCLENBQTdCO0FBRUEsTUFBSXhGLEtBQUssR0FBRytCLE9BQU8sQ0FBUEEsbUJBQTJCd0QsSUFBSSxDQUEvQnhELFdBQTJDQSxPQUFPLENBQWxEQSxpQkFBMkNBLEVBQTNDQSxXQUFaLE9BQVlBLENBQVo7QUFDQSxNQUFJbUQsR0FBRyxHQUFHLE9BQU8sQ0FBUCxzQkFBOEI7QUFDdkNsRixTQUFLLEVBQUV1RixJQUFJLENBRDRCO0FBRXZDMUMsUUFBSSxFQUFFMEMsSUFBSSxDQUFDMUM7QUFGNEIsR0FBOUIsRUFHUGQsT0FBTyxDQUhBLGlCQUdQQSxFQUhPLG9CQUFWO0FBS0F1RCxRQUFNLENBQU5BO0FBQ0FBLFFBQU0sQ0FBTkE7QUFFQTs7OztBQUdBLE1BQUl4RSxRQUFRLEdBQUcsT0FBTyxDQUFQLHFCQUE2QixnQkFBVTtBQUNyRCxRQUFJSyxLQUFLLEdBQUdZLE9BQU8sQ0FBUEEsZUFBWixNQUFZQSxDQUFaO0FBQ0EsV0FBTyxJQUFJMEIsT0FBSixlQUNOLHVCQURNLFNBQ04sQ0FETSxFQUNTLFFBQVEsdUJBQVIsTUFBUSxDQUFSLEVBQW9CLHVCQURwQyxRQUNvQyxDQUFwQixDQURULENBQVA7QUFGRCxHQUFlLENBQWY7QUFPQTNCLE1BQUksQ0FBSkEsS0FBVWhCLFFBQVEsQ0FBbEJnQjtBQUVBLE1BQUkyRCxTQUFTLEdBQUcsMENBQThCQyxPQUE5QyxvQkFBZ0IsQ0FBaEI7QUFFQSxNQUFJQyxhQUFhLEdBQUcsSUFBSXhDLE9BQUosZ0JBQ25CLElBQUl5QyxPQUFKLHNCQUNDLHVCQURELFFBQ0MsQ0FERCxFQUNlOUUsUUFBUSxDQUR2QixNQURELFNBQ0MsQ0FEbUIsQ0FBcEI7QUFNQWdCLE1BQUksQ0FBSkE7QUFFQXdELFFBQU0sQ0FBTkEsS0FDQyxJQUFJckMsT0FBSix3QkFDQyxDQUFFLHVCQUFGLE1BQUUsQ0FBRixFQUFjLHVCQUFkLFFBQWMsQ0FBZCxFQUE0Qix1QkFBNUIsV0FBNEIsQ0FBNUIsU0FBcUQsSUFBSSxDQUFKLFNBQWMsZ0JBQUk7QUFBQSxXQUFJLHVCQUFKLElBQUksQ0FBSjtBQUR4RSxHQUNzRCxDQUFyRCxDQURELEVBRUMsSUFBSUMsT0FBSixlQUhGb0MsSUFHRSxDQUZELENBRERBO0FBT0FBLFFBQU0sQ0FBTkEsS0FBWSx1QkFBWkEsUUFBWSxDQUFaQTtBQUVBLE1BQUkvQixVQUFVLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUMxRCxXQUFPLElBQUlFLE9BQUosZUFBbUIsdUJBQW5CLFFBQW1CLENBQW5CLEVBQVAsTUFBTyxDQUFQO0FBREQsR0FBaUIsQ0FBakI7QUFJQXBFLFNBQU8sQ0FBUEEsS0FBYWtFLFVBQVUsQ0FBdkJsRTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hJRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQVlBOztBQUVBOztBQUdlLGdDQUNmO0FBQ0M7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTBDLFNBQU8sQ0FBUEEsZ0JBQXdCO0FBQ3ZCbUMsUUFBSSxFQURtQjtBQUV2QnZFLFFBQUksRUFBRTtBQUZpQixHQUF4Qm9DLEVBR0dBLE9BQU8sQ0FIVkEsaUJBR0dBLEVBSEhBO0FBS0FBLFNBQU8sQ0FBUEEsb0JBQTRCQSxPQUFPLENBQW5DQSxpQkFBNEJBLEVBQTVCQTtBQUNBQSxTQUFPLENBQVBBLHFCQUE2QkEsT0FBTyxDQUFwQ0EsaUJBQTZCQSxFQUE3QkE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7O0FBUUE7O0FBRWUsbUNBQ2Y7QUFBQTs7QUFDQyxNQUFJakIsUUFBUSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDeEQsUUFBSUssS0FBSyxHQUFHWSxPQUFPLENBQVBBLGVBQVosS0FBWUEsQ0FBWjtBQUNBLFdBQU8sSUFBSTBCLE9BQUosZUFDTix1QkFETSxTQUNOLENBRE0sRUFDUyxRQUFRMUIsT0FBTyxDQUFmLGlCQUFRQSxFQUFSLEVBQXFDLHVCQURyRCxRQUNxRCxDQUFyQyxDQURULENBQVA7QUFGRCxHQUFlLENBQWY7QUFPQTFDLFNBQU8sQ0FBUEEsS0FBYXlCLFFBQVEsQ0FBckJ6QjtBQUdBLE1BQUlvRyxTQUFTLEdBQUcsNkNBQWlDQyxPQUFqRCxvQkFBZ0IsQ0FBaEI7QUFJQSxNQUFJQyxhQUFhLEdBQUcsSUFBSXhDLE9BQUosZ0JBQ25CLElBQUl5QyxPQUFKLHNCQUNDLHVCQURELFFBQ0MsQ0FERCxFQUNlOUUsUUFBUSxDQUR2QixNQURELFNBQ0MsQ0FEbUIsQ0FBcEI7QUFNQXpCLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNEOztBQVdBOztBQUVlLGdDQUNmO0FBQ0MsTUFBSWlHLE1BQU0sR0FBRyxDQUNaLHVCQURZLFFBQ1osQ0FEWSxFQUVaLDBCQUFjLEtBRkYsSUFFWixDQUZZLEVBR1p2RCxPQUFPLENBSFIsaUJBR0NBLEVBSFksQ0FBYjtBQU1BLE1BQUl3QixVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUFtQix1QkFBbkIsUUFBbUIsQ0FBbkIsRUFERCxNQUNDLENBRGdCLENBQWpCO0FBSUEsTUFBSTNCLElBQUksR0FBUjtBQUVBO0FBRUF3RCxRQUFNLENBQU5BLEtBQ0MsSUFBSXJDLE9BQUosd0JBQTRCLENBQzFCLHVCQURGLE1BQ0UsQ0FEMEIsQ0FBNUIsRUFHQyxJQUFJQyxPQUFKLGVBSkZvQyxJQUlFLENBSEQsQ0FEREE7QUFRQWpHLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNlLHFDQUNmO0FBQ0MsTUFBSWlHLE1BQU0sR0FBVjtBQUVBQSxRQUFNLENBQU5BLEtBQVl2RCxPQUFPLENBQW5CdUQsaUJBQVl2RCxFQUFadUQ7QUFFQSxNQUFJTyxVQUFVLEdBQWQ7QUFDQSxNQUFJQyxZQUFZLEdBQWhCOztBQUNBLE9BQUssSUFBSTdFLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHLGNBQXBCLFFBQTBDQSxDQUExQyxJQUErQztBQUM5QyxRQUFJOEUsS0FBSyxHQUFHLGNBQVosQ0FBWSxDQUFaO0FBQ0EsUUFBSWpFLElBQUksR0FBUjtBQUVBO0FBQ0NrRSwyQkFBcUIsRUFBRWpFLE9BQU8sQ0FBUEE7QUFEeEIsT0FKOEMsT0FJOUMsR0FKOEMsQ0FTOUM7O0FBVDhDLGdDQVV4QixPQUFPLENBQVAsc0JBQThCO0FBQ25EL0IsV0FBSyxFQUFFK0YsS0FBSyxDQUFDL0Y7QUFEc0MsS0FBOUIsRUFFbkIrQixPQUFPLENBRlksaUJBRW5CQSxFQUZtQixXQVZ3QixPQVV4QixDQVZ3QjtBQUFBLFFBVXhDL0IsS0FWd0M7QUFBQSxRQVVqQ1osSUFWaUM7O0FBYzlDMEcsZ0JBQVksMkJBQVpBLElBQVksQ0FBWkE7QUFLQUQsY0FBVSxDQUFWQTtBQUNBQSxjQUFVLENBQVZBLEtBQ0MsSUFBSTVDLE9BQUosd0JBQTRCLENBQzNCLHVCQURELE1BQ0MsQ0FEMkIsQ0FBNUIsRUFFRyxJQUFJQyxPQUFKLGVBSEoyQyxJQUdJLENBRkgsQ0FEREE7QUFLQTs7QUFFRFAsUUFBTSxDQUFOQSxLQUNDLDRCQUFnQixZQUFZLENBQVosSUFBaUIsZ0JBQUk7QUFBQSxXQUFJLHVCQUFKLElBQUksQ0FBSjtBQUR0Q0EsR0FDaUIsQ0FBaEIsQ0FEREE7QUFJQUEsUUFBTSxHQUFHQSxNQUFNLENBQU5BLE9BQVRBLFVBQVNBLENBQVRBO0FBRUEsTUFBSS9CLFVBQVUsR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQzFELFdBQU8sSUFBSUUsT0FBSixlQUFtQix1QkFBbkIsYUFBbUIsQ0FBbkIsRUFBUCxNQUFPLENBQVA7QUFERCxHQUFpQixDQUFqQjtBQUtBcEUsU0FBTyxDQUFQQSxLQUFha0UsVUFBVSxDQUF2QmxFO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hERDs7QUFLZSxnQ0FDZjtBQUVDMEMsU0FBTyxDQUFQQSxxQkFBNkJBLE9BQU8sQ0FBcENBLGlCQUE2QkEsRUFBN0JBLFdBRkQsT0FFQ0EsRUFGRCxDQUlDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0Q7O0FBU08sZ0RBQ1A7QUFDQyxNQUFJa0UsT0FBTyxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDdkQsV0FBTyxJQUFJTCxPQUFKLHNCQUNOLHVCQURNLFFBQ04sQ0FETSxFQUVOLElBQUl4QixPQUFKLG9CQUF3Qix1QkFGbEIsWUFFa0IsQ0FBeEIsQ0FGTSxFQUFQLENBQU8sQ0FBUDtBQURELEdBQWMsQ0FBZDtBQVFBL0UsU0FBTyxDQUFQQSxLQUFhNEcsT0FBTyxDQUFwQjVHO0FBQ0E7O0FBRU0sMENBQ1A7QUFDQyxNQUFJeUIsUUFBUSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDeEQsV0FBTyxJQUFJc0QsT0FBSixvQkFDSCx1QkFESixJQUNJLENBREcsQ0FBUDtBQURELEdBQWUsQ0FBZjtBQU1BL0UsU0FBTyxDQUFQQSxLQUFheUIsUUFBUSxDQUFyQnpCO0FBQ0E7O0FBRU0sMkRBQ1A7QUFBQSxNQURtRDZHLGFBQ25EO0FBRG1EQSxpQkFDbkQsR0FEbUUsS0FBaEJBO0FBQ25EOztBQUNDLE1BQUdyRSxNQUFNLENBQVQsVUFBR0EsRUFBSCxFQUF3QjtBQUN2QnFFLGlCQUFhLEdBQUcseUJBQU0sQ0FBdEJBO0FBRkYsSUFJQzs7O0FBQ0EsTUFBRyxDQUFDckUsTUFBTSxDQUFQLGdCQUFDQSxFQUFELElBQThCLENBQUNBLE1BQU0sQ0FBeEMsVUFBa0NBLEVBQWxDLEVBQXVEO0FBQ3RERSxXQUFPLENBQVBBO0FBQ0E7O0FBRUQsT0FBSyxJQUFJZCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR1ksTUFBTSxDQUFOQSxTQUFwQixRQUE0Q1osQ0FBNUMsSUFBaUQ7QUFDaERrRixlQUFXLENBQUN0RSxNQUFNLENBQU5BLFNBQUQsQ0FBQ0EsQ0FBRCx1QkFBWHNFLGFBQVcsQ0FBWEE7QUFDQTs7QUFFRCxNQUFJVixTQUFTLEdBQUcxRCxPQUFPLENBQXZCLGlCQUFnQkEsRUFBaEI7O0FBRUEsTUFBRyxDQUFDRixNQUFNLENBQVAsZ0JBQUNBLEVBQUQsSUFBOEIsQ0FBQ0EsTUFBTSxDQUF4QyxVQUFrQ0EsRUFBbEMsRUFBdUQ7QUFDdERFLFdBQU8sQ0FBUEE7QUFDQTs7QUFFRDtBQUNBOztBQUVNLHFFQUNQO0FBQ0MsTUFBSXFFLE9BQU8sR0FBR2pGLEtBQUssS0FBbkI7O0FBRUEsTUFBRytFLGFBQWEsSUFBaEIsU0FBNkI7QUFDNUJBLGlCQUFhLFVBQWJBLE9BQWEsQ0FBYkE7QUFERCxTQUVPO0FBQ04sUUFBRyxDQUFDckUsTUFBTSxDQUFWLFFBQUlBLEVBQUosRUFBdUI7QUFDdEJ3RSxjQUFRLG1CQUFtQkQsT0FBTyxrQkFBbENDLGFBQVEsQ0FBUkE7QUFDQTtBQUNEOztBQUVEeEUsUUFBTSxDQUFOQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRU0sa0RBQ1A7QUFDQyxNQUFNeUUsSUFBSSxHQUFHLElBQWIsR0FBYSxFQUFiO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQWIsR0FBYSxFQUFiO0FBQ0E7QUFDQSxNQUpELENBSUMsQ0FKRCxDQU1DOztBQUNBLE9BQUt0RixDQUFDLEdBQU4sR0FBWUEsQ0FBQyxHQUFHdUYsQ0FBQyxDQUFqQixRQUEwQnZGLENBQTFCLElBQStCO0FBQzlCLFFBQUlpRSxHQUFHLEdBQUd1QixPQUFPLENBQUNELENBQUMsQ0FBRixDQUFFLENBQUYsRUFBakIsQ0FBaUIsQ0FBakI7QUFDQUYsUUFBSSxDQUFKQTtBQVRGLElBWUM7OztBQUNBLE9BQUtyRixDQUFDLEdBQU4sR0FBWUEsQ0FBQyxHQUFHeUYsQ0FBQyxDQUFqQixRQUEwQnpGLENBQTFCLElBQStCO0FBQzlCLFFBQUlpRSxJQUFHLEdBQUd1QixPQUFPLENBQUNDLENBQUMsQ0FBRixDQUFFLENBQUYsRUFBakIsQ0FBaUIsQ0FBakI7O0FBQ0FILFFBQUksQ0FBSkE7QUFmRixJQWtCQzs7O0FBRUEsT0FBS3RGLENBQUMsR0FBRzBGLENBQUMsR0FBVixHQUFnQjFGLENBQUMsS0FBS3VGLENBQUMsQ0FBUHZGLFVBQWtCMEYsQ0FBQyxLQUFLRCxDQUFDLENBQXpDLFNBQW1EO0FBQ2xELFFBQUlFLElBQUksR0FBR0osQ0FBQyxDQUFaLENBQVksQ0FBWjtBQUFBLFFBQ0NLLElBQUksR0FBR0gsQ0FBQyxDQURULENBQ1MsQ0FEVDs7QUFHQSxRQUFJRSxJQUFJLEtBQVIsTUFBbUI7QUFDbEI7QUFDQTNGLE9BQUM7QUFGRixXQUdPLElBQUl5RixDQUFDLENBQURBLFVBQUosR0FBbUI7QUFDekI7QUFDQUksWUFBTSxDQUFOQSxZQUFtQkMsR0FBRyxDQUFDUCxDQUFDLENBQUYsQ0FBRSxDQUFGLEtBQVUsQ0FBaENNLENBQXNCLENBQXRCQTtBQUNBN0YsT0FBQztBQUhLLFdBSUEsSUFBSXVGLENBQUMsQ0FBREEsVUFBSixHQUFtQjtBQUN6QjtBQUNBTSxZQUFNLENBQU5BLGFBQW9CQyxHQUFHLFVBQXZCRCxDQUF1QixDQUF2QkEsRUFBcUNDLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFGLENBQUUsQ0FBRixLQUFITyxDQUFHLENBQUhBLElBQXJDRDtBQUNBSCxPQUFDO0FBSEssV0FJQSxJQUFJQyxJQUFJLEtBQVIsTUFBbUI7QUFDekI7QUFDQTNGLE9BQUM7QUFDRDBGLE9BQUM7QUFISyxXQUlBO0FBQ047QUFDQTtBQUNBLFVBQUlLLFdBQVcsR0FBR1QsSUFBSSxDQUFKQSxJQUhaLElBR1lBLENBQWxCLENBSE0sQ0FJTjtBQUNBOztBQUNBLFVBQUlVLGNBQWMsR0FBR1gsSUFBSSxDQUFKQSxJQUFyQixJQUFxQkEsQ0FBckI7O0FBQ0EsVUFBSVUsV0FBVyxLQUFmLFdBQStCO0FBQzlCO0FBQ0FGLGNBQU0sQ0FBTkEsWUFBbUJDLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFGLENBQUUsQ0FBRixLQUFVLENBQWhDTSxDQUFzQixDQUF0QkE7QUFDQTdGLFNBQUM7QUFIRixhQUlPLElBQUlnRyxjQUFjLEtBQWxCLFdBQWtDO0FBQ3hDO0FBQ0FILGNBQU0sQ0FBTkEsYUFDQ0MsR0FBRyxVQURKRCxDQUNJLENBREpBLEVBRUNDLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFGLENBQUUsQ0FBRixLQUFITyxDQUFHLENBQUhBLElBRkREO0FBSUFILFNBQUM7QUFOSyxhQU9BO0FBQ047QUFDQTtBQUNBRyxjQUFNLENBQU5BLGFBQ0NDLEdBQUcsQ0FBQ1AsQ0FBQyxDQUFGLGNBQUUsQ0FBRixrQkFESk0sQ0FDSSxDQURKQSxFQUVDQyxHQUFHLENBQUNQLENBQUMsQ0FBRixDQUFFLENBQUYsRUFBSE8sQ0FBRyxDQUFIQSxJQUZERDtBQUlBTixTQUFDLENBQURBLGNBQUMsQ0FBREE7QUFDQSxZQUFJUyxjQUFjLEdBQUdoRyxDQUFDLEdBQXRCLEdBQTRCQSxDQUFDO0FBQzdCMEYsU0FBQztBQUNEO0FBQ0Q7QUFDRDs7QUFFRDtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXZCekVEOztBQUNBOztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFZTyxxREFDUDtBQUNDO0FBRUE7QUFDQSxNQUFJTyxRQUFRLEdBSmIsSUFJQyxDQUpELENBSXFCOztBQUVwQixNQUFJSixNQUFNLEdBQUdLLFFBQVEsQ0FBckIsc0JBQWFBLEVBQWI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsd0JBQWQsRUFBYyxDQUFkO0FBRUEsTUFBTUMsU0FBUyxHQUFHLElBQWxCLEdBQWtCLEVBQWxCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQWQsR0FBYyxFQUFkO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQWpCLEdBQWlCLEVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQVpmLEVBWUMsQ0FaRCxDQWNDOztBQUNBLE1BQUcsQ0FBSCxRQUFZO0FBQ1gsUUFBSUMsTUFBTSxHQUFHLHVCQUFiLEtBQWEsQ0FBYjs7QUFDQSxRQUFJQyxJQUFJLEdBQVI7QUFDQSxRQUFJQyxRQUFRLEdBQVo7O0FBRUEsU0FBSyxJQUFMLGVBQXdCO0FBQ3ZCLFVBQUlDLElBQUksR0FBR0gsTUFBTSxDQUFqQixHQUFpQixDQUFqQjtBQUNBLFVBQUlJLE9BQU8sR0FBR3BCLE9BQU8sT0FBckIsR0FBcUIsQ0FBckI7QUFDQSxVQUFJcUIsZ0JBQWdCLEdBQXBCOztBQUVBLFVBQUdKLElBQUksSUFBSUEsSUFBSSxDQUFmLGNBQThCO0FBQzdCLFlBQUdBLElBQUksQ0FBSkEsNEJBQUgsU0FBNkM7QUFDNUNJLDBCQUFnQixHQUFHaEQsSUFBSSw2QkFBdkJnRCxHQUF1QixDQUF2QkE7QUFDQUosY0FBSSxHQUFHSSxnQkFBZ0IsQ0FBdkJKO0FBQ0FDLGtCQUFRLEdBQVJBO0FBQ0E7QUFDRDs7QUFFRCw0QkFBcUI7QUFDcEIsWUFBRyxDQUFDRyxnQkFBZ0IsQ0FBaEJBLGFBQUosVUFBSUEsQ0FBSixFQUErQztBQUM5QyxjQUFJQyxhQUFhLEdBQWpCO0FBQ0EsY0FBSUMsZUFBZSxHQUFuQjs7QUFDQSxrQ0FBdUI7QUFDdEJELHlCQUFhLENBQWJBOztBQUNBLGdCQUFHQyxlQUFlLENBQWZBLGFBQUgsVUFBR0EsQ0FBSCxFQUE2QztBQUM1QztBQUNBOztBQUVEQSwyQkFBZSxHQUFHQSxlQUFlLENBQWpDQTtBQUNBOztBQUVEUixrQkFBUSxDQUFSQSxHQUFRLENBQVJBO0FBRUEsY0FBSVMsQ0FBQyxHQUFMOztBQUVBLGNBQUdGLGFBQWEsQ0FBYkEsU0FBSCxHQUE2QjtBQUM1QkUsYUFBQyxHQUFHLHVCQUFXO0FBQ2RDLHdCQUFVLEVBQUVIO0FBREUsYUFBWCxDQUFKRTtBQUdBOztBQUVEWCxlQUFLLENBQUxBO0FBQ0E7QUFDQTtBQUNEO0FBQ0Q7O0FBRURGLFdBQU8sR0FBR0QsUUFBUSxDQUFSQSxlQUFWQyxFQUFVRCxDQUFWQztBQUNBTyxZQUFRLENBQVJBLE1BaERXLE9BZ0RYQSxFQWhEVyxDQWlEWDtBQUNBO0FBQ0E7O0FBRUQsTUFBTVEsV0FBVyxHQUFHLGtDQUFpQixhQUFLO0FBRXpDLFFBQUl6QixDQUFDLEdBQUcsdUJBQVIsS0FBUSxDQUFSO0FBRUFhLFlBQVEsQ0FKaUMsS0FJekNBLEdBSnlDLENBS3pDOztBQUNBLFFBQU1sRCxPQUFPLEdBQUcrRCxLQUFLLENBQUxBLEtBQ2YsZ0JBQUtoQixPQUFPLENBQVosWUFBeUJaLENBQUMsSUFBMUIsK0JBREQsT0FDQyxDQURlNEIsQ0FBaEI7QUFJQWIsWUFBUSxDQUFSQTtBQUVBLFdBWnlDLE9BWXpDLENBWnlDLENBYXpDO0FBYm1CLEtBY2pCLENBZEgsTUFBb0IsQ0FBcEI7O0FBZ0JBLGNBQVc7QUFDVmMsWUFBUSxDQUFSQTtBQXJGRixJQXdGQzs7O0FBRUEscUNBQTBDO0FBQUEsUUFBWEMsRUFBVztBQUFYQSxRQUFXLEdBQU4sSUFBTEE7QUFBVzs7QUFDekMsUUFBSVYsSUFBSSxJQUFSLE1BQWtCO0FBRWxCLFFBQUlXLE9BQU8sR0FBRzlCLE9BQU8sT0FBckIsR0FBcUIsQ0FBckI7QUFFQSxRQUFJd0IsQ0FBQyxHQUFHWCxLQUFLLENBQUxBLElBQVIsT0FBUUEsQ0FBUjs7QUFDQSxRQUFJckcsQ0FBQyxLQUFMLEdBQWE7QUFDWnNHLGNBQVEsQ0FBUkE7O0FBRUEsVUFBSSxDQUFKLEdBQVE7QUFDUFUsU0FBQyxHQUFJSyxFQUFFLFFBQVF4RCxJQUFJLDRCQUFuQm1ELEdBQW1CLENBQW5CQTtBQUVBLFlBQUlBLENBQUMsQ0FBREEsYUFBSixJQUF1QkEsQ0FBQyxHQUFHLDZCQUFKQTtBQUV2QlgsYUFBSyxDQUFMQTtBQUNBO0FBVEYsV0FVTyxJQUFJckcsQ0FBQyxLQUFLLENBQVYsR0FBYztBQUNwQnNHLGNBQVEsQ0FBUkE7QUFDQTs7QUFFRCxXQUFPLHdCQUFQLENBQU8sQ0FBUDtBQTlHRixJQWlIQzs7O0FBRUEsd0JBQXNCO0FBQ3JCRixhQUFTLENBQVRBLFFBQWtCLGFBQUM7QUFBQSxhQUFJbUIsQ0FBSjtBQUFuQm5CO0FBQ0FBLGFBQVMsQ0FBVEE7QUFDQUMsU0FBSyxDQUFMQTtBQUNBQyxZQUFRLENBQVJBO0FBQ0E7O0FBRUQseUJBQXVCO0FBQ3RCLFFBQUlrQixRQUFRLEdBQUdwQixTQUFTLENBQVRBLElBQWYsSUFBZUEsQ0FBZjs7QUFDQSxrQkFBYztBQUNib0IsY0FBUTtBQUNScEIsZUFBUyxDQUFUQTtBQUNBOztBQUNEQyxTQUFLLENBQUxBO0FBQ0E7O0FBRUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBd0JwSk0scUJBQXFCO0FBQUEsTUFDbkJZLFVBRG1CLEdBQ0psSSxLQURJO0FBRTNCLE1BQUksZUFBZUEsS0FBSyxDQUFMQSxhQUFuQixJQUEwQzs7QUFDMUMsTUFBSWtJLFVBQVUsQ0FBVkEsU0FBSixHQUEyQjtBQUMxQixXQUFPQSxVQUFVLENBQWpCLENBQWlCLENBQWpCO0FBSjBCLElBTzNCO0FBQ0E7OztBQUNBLE1BQU1RLFVBQVUsR0FBR0MsR0FBRyxZQUFZVCxVQUFVLENBQTVDLENBQTRDLENBQXRCLENBQXRCOztBQUVBLFNBQU87QUFDTlEsY0FBVSxFQUFWQTtBQURNLEdBQVA7QUFHQTs7QUFHTSxxQ0FBNEM7QUFBQSxNQUFoQnRCLE9BQWdCO0FBQWhCQSxXQUFnQixHQUFOLElBQVZBO0FBQWdCOztBQUNsRHBILE9BQUssR0FBRzRJLFFBQVEsQ0FBaEI1SSxLQUFnQixDQUFoQkE7QUFFQSxNQUFNNkksVUFBVSxHQUFHQyxJQUFJLENBQUpBLEtBQUksQ0FBSkEsSUFIK0IsS0FHbEQsQ0FIa0QsQ0FLbEQ7O0FBQ0FoQyxRQUFNLENBQU5BLG9CQUEyQk0sT0FBTyxJQUFJQSxPQUFPLENBQWxCQSxjQUEzQk47QUFFQTtBQUNBOztBQUVNLHlCQUF5QjtBQUMvQixNQUFJLGlCQUFKLFVBQStCO0FBQzlCLFdBQU9LLFFBQVEsQ0FBUkEsZUFBUCxLQUFPQSxDQUFQO0FBQ0E7O0FBQ0QsTUFBSSxFQUFFbkgsS0FBSyxZQUFYLElBQUksQ0FBSixFQUE4QjtBQUM3QjtBQUNBLFdBQU9tSCxRQUFRLENBQVJBLHVCQUFnQyxDQUF2QyxLQUF1QyxDQUFoQ0EsQ0FBUDtBQUNBOztBQUNEO0FBQ0E7O0FBR00saURBQWlEO0FBQ3ZELFNBQU80QixTQUFTLElBQUlBLFNBQVMsS0FBN0IsU0FBMkM7QUFDMUMsUUFBTWQsQ0FBQyxHQUFHYyxTQUFTLENBRHVCLFdBQzFDLENBRDBDLENBRTFDOztBQUNBLFFBQUlqQyxNQUFNLEtBQUtpQyxTQUFTLENBQXhCLFlBQXFDO0FBQ3BDakMsWUFBTSxDQUFOQTtBQUNBOztBQUNEaUMsYUFBUyxHQUFUQTtBQUNBO0FBQ0Q7O0FBRUQsSUFBTUMsUUFBUSxHQUFkOztBQUdPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsU0FDdkJ2QixJQUFJLENBQUpBLHdCQUNBLG9CQUNBd0IsU0FBUyxHQUNUQyxXQUFXLENBQ1Z6QixJQUFJLENBQUpBLFlBRFUsWUFFVkEsSUFBSSxDQUFKQSxZQUZVLGFBR1ZBLElBQUksQ0FBSkEsV0FIRHlCLFdBQVcsQ0FBWEEsSUFJS3pCLElBQUksQ0FMQSxjQU1UQSxJQUFJLENBUEosYUFRQXdCLFNBQVMsR0FDVHhCLElBQUksQ0FESyxRQUNUQSxFQURTLEdBRVRBLElBQUksQ0FYSkEsY0FEdUI7QUFBakI7Ozs7QUFlQSxJQUFNMEIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsV0FBYztBQUFBLE1BQy9CbEIsVUFEK0IsR0FDaEJtQixRQURnQjtBQUFBLE1BRS9CQyxNQUYrQixHQUVwQnBCLFVBRm9CLFNBR3ZDO0FBQ0E7O0FBQ0EsTUFBSW9CLE1BQU0sR0FBVixHQUFnQixPQUFPcEIsVUFBVSxDQUFqQixDQUFpQixDQUFqQjtBQUNoQixNQUFNWixLQUFLLEdBQUdjLEtBQUssQ0FBTEEsS0FBZCxVQUFjQSxDQUFkO0FBQ0EsTUFBTW1CLFdBQVcsR0FBR2pDLEtBQUssQ0FBekIsQ0FBeUIsQ0FBekI7QUFDQSxNQUFNa0MsVUFBVSxHQUFHbEMsS0FBSyxDQUFDZ0MsTUFBTSxHQUEvQixDQUF3QixDQUF4QjtBQUNBLFNBQU87QUFDTk4sWUFBUSxFQURGO0FBRU5PLGVBQVcsRUFGTDtBQUdOQyxjQUFVLEVBSEo7QUFJTkMsWUFKTSxzQkFJSztBQUNWLFVBQUl2QixVQUFVLENBQVZBLFdBQUosUUFBa0M7QUFDakMsWUFBSWpILENBQUMsR0FBTDs7QUFDQSxlQUFPQSxDQUFDLEdBQVI7QUFBbUJvSSxrQkFBUSxDQUFSQSxZQUFxQi9CLEtBQUssQ0FBQ3JHLENBQTNCb0ksRUFBMEIsQ0FBMUJBO0FBQW5CO0FBQ0E7O0FBQ0Q7QUFDQTtBQVZLLEdBQVA7QUFUTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXhCckVBLHNCQUNQO0FBQ0MsTUFBR3JKLEtBQUssQ0FBUixJQUFhO0FBQ1osV0FBT0EsS0FBUDtBQURELFNBRU87QUFDTjtBQUNBO0FBQ0Q7O0FBRU0sMkJBQ1A7QUFDQywyQkFDQTtBQUNDLFFBQUkwSixTQUFTLENBQVRBLFdBQUosR0FBNEI7QUFDM0I7QUFDQTs7QUFFRDFKLFNBQUssR0FBTEE7O0FBRUFiLFFBQUksQ0FBSkEsbUJBQXdCLG9CQUFZO0FBQUV3SyxjQUFRLENBQVJBO0FBQXRDeEs7O0FBQ0FBLFFBQUksQ0FBSkEsbUJBQXdCLG9CQUFRO0FBQUEsYUFBSXdLLFFBQUo7QUFBaEN4Szs7QUFFQTtBQUNBOztBQUVEQSxNQUFJLENBQUpBLGFBQWtCLElBQWxCQSxHQUFrQixFQUFsQkE7QUFDQUEsTUFBSSxDQUFKQTtBQUVBO0FBQ0E7O0FBR00sOEJBQ1A7QUFDQ3lLLEtBQUcsR0FBRyxVQUFOQSxHQUFNLENBQU5BOztBQUVBLGtHQUFtQjtBQUFBLFFBQVhDLEVBQVc7O0FBQ2xCQSxNQUFFLENBQUZBO0FBQ0E7O0FBRUQsa0JBQ0E7QUFDQyxRQUFHLENBQUNDLE1BQU0sQ0FBVixRQUFtQjtBQUNsQkEsWUFBTTtBQUNOOztBQUVELFdBQU85SixLQUFQO0FBQ0E7O0FBRUQsb0JBQ0E7QUFDQzhKLFVBQU0sQ0FBTkE7O0FBRUEzSyxRQUFJLENBQUpBLG1CQUF3QixvQkFBUTtBQUFBLGFBQUl3SyxRQUFKO0FBQWhDeEs7O0FBRUE7QUFDQTs7QUFFREEsTUFBSSxDQUFKQSxhQUFrQixJQUFsQkEsR0FBa0IsRUFBbEJBO0FBQ0FBLE1BQUksQ0FBSkE7QUFFQTJLLFFBQU07QUFFTjtBQUNBOztBQUVNLHFDQUNQO0FBQUEsTUFEc0NDLElBQ3RDO0FBRHNDQSxRQUN0QyxHQUQ2QyxLQUFQQTtBQUN0Qzs7QUFDQyxNQUFJQyxTQUFTLEdBQWI7QUFFQUosS0FBRyxHQUFHLFVBQU5BLEdBQU0sQ0FBTkE7O0FBRUEsTUFBSW5GLEVBQUUsR0FBRyxTQUFMQSxFQUFLLEdBQU07QUFDZHVGLGFBQVMsR0FBR2hLLEtBQUssQ0FBakJnSyxTQUFpQixDQUFqQkE7QUFERDs7QUFJQSxzR0FBbUI7QUFBQSxRQUFYSCxFQUFXOztBQUNsQixRQUFHQSxFQUFFLENBQUwsWUFBa0I7QUFDakJBLFFBQUUsQ0FBRkE7QUFDQTs7QUFFRCxRQUFHQSxFQUFFLENBQUwsT0FBYTtBQUNaLDREQUFlQSxFQUFFLENBQWpCLGdEQUF5QjtBQUFBLFlBQWpCSSxHQUFpQjtBQUN4QkEsV0FBRyxDQUFIQTtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxNQUFHLENBQUgsTUFBVTtBQUNUeEYsTUFBRTtBQUNGO0VBR0Y7OztBQUNPLDRCQUNQO0FBQ0MsU0FBT3lGLElBQUksQ0FBSkEsb0JBQXlCLGdCQUFoQztBQUNBO0FBRUQ7Ozs7O0FBR08saUNBQ1A7QUFBQSxNQURnQ3hILE1BQ2hDO0FBRGdDQSxVQUNoQyxHQUR5QyxJQUFUQTtBQUNoQzs7QUFDQyxNQUFHLENBQUN5SCxZQUFZLENBQWhCLElBQWdCLENBQWhCLEVBQXdCO0FBQ3ZCLGdCQUFXO0FBQ1YxRixRQUFFLENBQUZBLElBQUUsQ0FBRkE7QUFDQTs7QUFDRDtBQUNBOztBQUdEMkYsV0FBUyxPQUFPLFlBQU07QUFDckIzRixNQUFFLENBQUN5RixJQUFIekYsRUFBRSxDQUFGQTtBQURRLEtBRU4sQ0FGSDJGLE1BQVMsQ0FBVEE7QUFHQTs7QUFHTSxxQkFDUCxDQUVDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXlCdEhELG1GLENBSEE7QUFDQTtBQUNBOzs7QUFJQSxJQUFJQyxNQUFNLEdBQUcsb0JBQ1osczRCQURELDJDQUFhLENBQWI7O0FBZ0JBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQVU7QUFDekIsU0FBT0QsTUFBTSxDQUFOQSxJQUFNLENBQU5BLElBQWdCMUssSUFBSSxDQUFKQSxNQUF2QixVQUF1QkEsQ0FBdkI7QUFERDs7QUFJQSxJQUFJNEssVUFBVSxHQUFHLG9CQUFqQixTQUFpQixDQUFqQjs7QUFJQSx3Q0FDQTtBQUFBLE1BRDBCekgsWUFDMUI7QUFEMEJBLGdCQUMxQixHQUR5QyxLQUFmQTtBQUMxQjs7QUFDQyxTQUFPO0FBQ045QyxTQUFLLEVBREM7QUFFTjhDLGdCQUFZLEVBQVpBO0FBRk0sR0FBUDtBQUlBOztBQUVNLG9CQUNQO0FBQ0MsTUFBSUMsTUFBTSxHQUFHO0FBQ1pjLFVBQU0sRUFETTtBQUVaVCxTQUFLLEVBRk87QUFHWm9ILGNBQVUsRUFIRTtBQUlaQyxlQUFXLEVBQUU7QUFKRCxHQUFiOztBQU9BLE9BQUksSUFBSixhQUNBO0FBQ0MsUUFBSXpLLEtBQUssR0FBRzBLLEdBQUcsQ0FBZixJQUFlLENBQWY7O0FBRUEsUUFBR0osU0FBUyxDQUFaLElBQVksQ0FBWixFQUFvQjtBQUNuQnZILFlBQU0sQ0FBTkE7QUFERCxXQUVPLElBQUdwRCxJQUFJLENBQUpBLE1BQUgsS0FBR0EsQ0FBSCxFQUFzQjtBQUM1QkEsVUFBSSxHQUFHQSxJQUFJLENBQUpBLGVBQVBBLEVBQU9BLENBQVBBO0FBQ0FvRCxZQUFNLENBQU5BLGVBQXNCNEgsU0FBUyxRQUEvQjVILElBQStCLENBQS9CQTtBQUZNLFdBR0EsSUFBR3BELElBQUksQ0FBSkEsTUFBSCxNQUFHQSxDQUFILEVBQXVCO0FBQzdCQSxVQUFJLEdBQUdBLElBQUksQ0FBSkEsZ0JBQVBBLEVBQU9BLENBQVBBO0FBQ0FLLFdBQUssR0FBRzJLLFNBQVMsUUFBakIzSyxJQUFpQixDQUFqQkE7O0FBRUEsVUFBR3VLLFVBQVUsQ0FBYixJQUFhLENBQWIsRUFBcUI7QUFDcEJ4SCxjQUFNLENBQU5BLElBQU0sQ0FBTkE7QUFERCxhQUVPLElBQUd1SCxTQUFTLENBQVosSUFBWSxDQUFaLEVBQW9CO0FBQzFCdkgsY0FBTSxDQUFOQTtBQURNLGFBRUE7QUFDTkEsY0FBTSxDQUFOQTtBQUNBO0FBVkssV0FXQTtBQUNOQSxZQUFNLENBQU5BLGNBQXFCNEgsU0FBUyxDQUR4QixLQUN3QixDQUE5QjVILENBRE0sQ0FFTjtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXpCMUVEOztBQUVBLHlGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBMEJGQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFTyxtQ0FDUDtBQUNDLE9BQUksSUFBSixlQUF1QjtBQUN0QixRQUFJNkgsTUFBTSxHQUFHLHdEQUFiLEdBQWEsQ0FBYjtBQUNBLFFBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFOQSxLQUFkLElBQWNBLENBQWQ7O0FBQ0EsaUJBQVk7QUFDWGhLLFlBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjaUssT0FBTyxDQUFyQmpLLENBQXFCLENBQXJCQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFTSxxQkFDUDtBQUNDO0FBQ0EsTUFBSUEsTUFBTSxHQUFHa0ssV0FBVyxDQUFDO0FBQ3hCQyxVQUFNLEVBRGtCO0FBRXhCQyxTQUFLLEVBQUU7QUFGaUIsR0FBRCxFQUZ6QixJQUV5QixDQUF4QixDQUZELENBT0M7O0FBQ0FDLE1BQUksR0FBRyw4QkFSUixJQVFRLENBQVBBLENBUkQsQ0FVQzs7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FDWCxJQUFJN0YsT0FBSixXQUFlO0FBQUU4RixRQUFJLEVBQUU7QUFBUixHQUFmLENBRFcsQ0FBWjs7QUFJQSw4QkFDQTtBQUNDLFdBQU9ELEtBQUssQ0FBQ0EsS0FBSyxDQUFMQSxTQUFiLENBQVksQ0FBWjtBQUNBOztBQUVELDRCQUNBO0FBQ0MsV0FBT0EsS0FBSyxDQUFMQSxnQkFBc0IsNkJBQTdCLElBQTZCLENBQTdCO0FBQ0E7O0FBRUQsTUFBTUUsS0FBSyxHQUFHLElBQUlDLFlBQUosT0FBZTtBQUU1QkMsYUFGNEIsa0NBRzVCO0FBQ0MsVUFBSXhFLE1BQU0sR0FBR3lFLGdCQUFiO0FBQ0E7O0FBRUEsVUFBRzVMLElBQUksS0FBUCxRQUFvQjtBQUNuQmtDLGNBQU0sR0FBRyxJQUFJd0QsT0FBSixXQUFUeEQsS0FBUyxDQUFUQTtBQURELGFBRU8sSUFBR2xDLElBQUksS0FBUCxRQUFvQjtBQUMxQmtDLGNBQU0sR0FBRyxJQUFJMkosT0FBSixLQUFUM0osS0FBUyxDQUFUQTtBQURNLGFBRUEsSUFBSSx3QkFBSixJQUFJLENBQUosRUFBdUI7QUFDN0JBLGNBQU0sR0FBRyxJQUFJNEosT0FBSixnQkFBVDVKLEtBQVMsQ0FBVEE7QUFETSxhQUVBO0FBQ05BLGNBQU0sR0FBRyxJQUFJNkosT0FBSixXQUFUN0osS0FBUyxDQUFUQTtBQUNBOztBQUVELGtCQUFXO0FBQ1ZpRixjQUFNLENBQU5BO0FBQ0E7O0FBRURvRSxXQUFLLENBQUxBO0FBckIyQjtBQXdCNUJTLFVBeEI0Qix3QkF5QjVCO0FBQ0MsVUFBSTdFLE1BQU0sR0FBR3lFLGdCQUFiO0FBRUFLLFVBQUksR0FBR0EsSUFBSSxDQUFYQSxJQUFPQSxFQUFQQTs7QUFFQSxVQUFHQSxJQUFJLEtBQUpBLE1BQUgsUUFBMEI7QUFDekIsWUFBSWxFLElBQUksR0FBRyxJQUFJbUUsT0FBSixLQUFYLElBQVcsQ0FBWDs7QUFDQSxvQkFBVztBQUNWL0UsZ0JBQU0sQ0FBTkE7QUFDQTtBQUNFO0FBbkN1QjtBQXNDNUJnRixjQXRDNEIsNEJBdUM1QjtBQUNDLFVBQUlDLE9BQU8sR0FBR2IsS0FBSyxDQUFuQixHQUFjQSxFQUFkO0FBQ0c7QUF6Q3dCLEdBQWYsRUEyQ1g7QUFBRWMsa0JBQWMsRUFBRTtBQUFsQixHQTNDVyxDQUFkO0FBNkNBWixPQUFLLENBQUxBO0FBQ0FBLE9BQUssQ0FBTEE7QUFFQXhLLFFBQU0sQ0FBTkEsV0FBa0JzSyxLQUFLLENBekV4QixDQXlFd0IsQ0FBdkJ0SyxDQXpFRCxDQTBFQzs7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0QsMkJBQ0E7QUFDQyxTQUFPcUssSUFBSSxDQUFKQSwyQ0FBUCxJQUFPQSxFQUFQO0FBQ0E7O0FBRU0sK0JBQ1A7QUFDQyxPQUFJLElBQUosZUFBdUI7QUFDdEIsUUFBSUwsTUFBTSxHQUFHLHdEQUFiLEdBQWEsQ0FBYjtBQUNBSyxRQUFJLEdBQUdBLElBQUksQ0FBSkEsZ0JBQVBBLEVBQU9BLENBQVBBO0FBQ0E7O0FBRURBLE1BQUksR0FBRyxJQUFJLENBQ1Y7QUFEVSxHQUFKLDhQQU1OO0FBTk0sbUZBQVBBLFNBQU8sQ0FBUEE7QUFVQSxTQUFPZ0IsV0FBVyxDQUFsQixJQUFrQixDQUFsQjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCUixTOzs7QUFFcEIsa0NBQ0E7QUFBQTs7QUFDQztBQUNBO0FBQ0EsbUJBQWMsa0JBQWQsS0FBYyxDQUFkO0FBQ0E7QUFDQTtBQUxEO0FBTUM7Ozs7U0FFRFMsYSxHQUFBQSx5QkFDQTtBQUNDLFdBQU9DLE1BQU0sQ0FBTkEsS0FBWSxZQUFaQSxxQkFBUDs7OztFQWJxQ2pJLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2Qzs7Ozs7Ozs7Ozs7Ozs7SUFFcUJtQixVOzs7QUFFcEIsNEJBQ0E7QUFBQTs7QUFBQSx5QkFEYzhGLElBQ2Q7QUFBQSxRQURjQSxJQUNkLDBCQURxQixJQUNyQjtBQUFBLDBCQUQyQm5MLEtBQzNCO0FBQUEsUUFEMkJBLEtBQzNCLDJCQURtQyxJQUNuQztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBSkQ7QUFLQzs7O0VBUnNDa0UsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnhDOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQndILEk7OztBQUVwQiw0QkFDQTtBQUFBOztBQUNDO0FBRUE7QUFDQSxtQkFBYyxrQkFBZCxLQUFjLENBQWQ7QUFDQTtBQUNBO0FBTkQ7QUFPQzs7OztTQUVEUSxhLEdBQUFBLHlCQUNBO0FBQ0MsV0FBT0MsTUFBTSxDQUFOQSxLQUFZLFlBQVpBLHFCQUFQOzs7O0VBZGdDakksYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxDOzs7Ozs7Ozs7Ozs7OztJQUVxQnNILEk7OztBQUVwQixzQkFDQTtBQUFBOztBQUFBLHlCQURjN0wsSUFDZDtBQUFBLFFBRGNBLElBQ2QsMEJBRHFCLFNBQ3JCO0FBQUEsd0JBRGdDeU0sR0FDaEM7QUFBQSxRQURnQ0EsR0FDaEMseUJBRHNDLE1BQ3RDO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxEO0lBUUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7O0VBaENpQ2xJLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQzs7Ozs7Ozs7Ozs7Ozs7SUFFcUIySCxJOzs7QUFFcEIsc0JBQ0E7QUFBQTs7QUFDQztBQUNBO0FBQ0E7QUFIRDtBQUlDOzs7O1NBRURRLFksR0FBQUEsd0JBQ0E7QUFDQyxXQUFPLEtBQVA7Ozs7RUFYZ0NuSSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7QUFFcEIsa0JBQ0E7QUFDQztBQUNBOzs7O1NBRURvSSxHLEdBQUFBLHVCQUNBO0FBQ0MsUUFBRyxpQkFBaUIsY0FBcEIsYUFBK0M7QUFDOUM7QUFDQTs7O1NBR0ZDLFEsR0FBQUEseUJBQ0E7QUFDQ25ILFNBQUssQ0FBTEE7QUFDQTs7O1NBR0RoRCxNLEdBQUFBLGtDQUNBO0FBQ0MsV0FBT29LLGdCQUFNLEtBQU5BLDBCQUFQLE9BQU9BLENBQVA7OztTQUdEQyxVLEdBQUFBLHNCQUNBO0FBQ0MsV0FBUSx3QkFBd0IsYUFBaEM7OztTQUdEQyxnQixHQUFBQSw0QkFDQTtBQUNDLFFBQUlDLEtBQUssR0FBVDs7QUFFQSx5REFBaUIsS0FBakIsZ0RBQWdDO0FBQUEsVUFBeEJ2SCxLQUF3Qjs7QUFDL0IsVUFBRyxDQUFDQSxLQUFLLENBQVQsVUFBSUEsRUFBSixFQUF3QjtBQUN2QnVILGFBQUssR0FBTEE7QUFDQTtBQUNEOztBQUVEOzs7U0FHREMsUSxHQUFBQSxvQkFDQTtBQUNDLFdBREQsS0FDQyxDQURELENBQ2M7OztTQUdkUCxZLEdBQUFBLG9DQUNBO0FBQUEsUUFEYVEsWUFDYjtBQURhQSxrQkFDYixHQUQ0QixJQUFmQTtBQUNiOztBQUNDLFFBQUkvTCxRQUFRLFNBQU8sS0FBbkI7QUFFQSxRQUFJOEMsS0FBSyxHQUFHLGNBQWMsWUFBZCxjQUFaOztBQUVBLFNBQUksSUFBSixjQUFzQjtBQUNyQjlDLGNBQVEsd0JBQWdCOEMsS0FBSyxDQUFyQixHQUFxQixDQUFyQixHQUFSOUM7QUFDQTs7QUFFREEsWUFBUSxJQUFSQTtBQUVBLFFBQUlnTSxhQUFhLEdBQUcsa0JBQWtCLGlCQUFLO0FBQUEsYUFBSTFILEtBQUssQ0FBTEEsYUFBSixLQUFJQSxDQUFKO0FBQXZCLFlBQXBCLEVBQW9CLENBQXBCO0FBRUF0RSxZQUFRLElBQVJBO0FBRUFBLFlBQVEsV0FBUyxLQUFULE1BQVJBOztBQUVBLFFBQUcsNENBQTRDLEtBQTVDLFNBQTBELENBQTdELGNBQTRFO0FBQzNFO0FBQ0E7O0FBRUQsUUFBRyxDQUFDLEtBQUQsT0FBYSxLQUFoQixVQUFnQixFQUFoQixFQUFtQztBQUNsQztBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QTlCNUVGOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FxQkpBLElBQU1pTSxRQUFRLEdBQUcsNmdDQUFqQixVQUFpQixDQUFqQjs7QUFjTywyQkFDUDtBQUNDLFNBQU8sQ0FBQ0EsUUFBUSxDQUFSQSxTQUFSLElBQVFBLENBQVI7QUFDQTs7QUFFTSx3Q0FDUDtBQUNDLE1BQUlULEdBQUcsR0FBR0gsTUFBTSxDQUFOQSxPQUFWLElBQVVBLENBQVY7QUFDQSxNQUFJYSxJQUFJLEdBQUdDLEdBQUcsQ0FBSEEsTUFBWCxHQUFXQSxDQUFYOztBQUVBLE9BQUssSUFBSWhNLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHK0wsSUFBSSxDQUF4QixRQUFpQy9MLENBQWpDLElBQXNDO0FBQ3JDcUwsT0FBRyxDQUFDVSxJQUFJLENBQVJWLENBQVEsQ0FBTCxDQUFIQTtBQUNBOztBQUVELFNBQU9ZLGdCQUFnQixHQUN0QixlQUFjO0FBQUUsV0FBT1osR0FBRyxDQUFDYSxHQUFHLENBQWQsV0FBV0EsRUFBRCxDQUFWO0FBRE0sTUFFdEIsZUFBYztBQUFFLFdBQU9iLEdBQUcsQ0FBVixHQUFVLENBQVY7QUFGakI7QUFHQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBYyxZQUFZOztBQUVMLDRCQUNQO0FBQ0MsTUFBSXJLLE1BQU0sR0FBVjs7QUFFQSxNQUFHcUYsS0FBSyxDQUFMQSxRQUFILElBQUdBLENBQUgsRUFBd0I7QUFDdkIsU0FBSyxJQUFJbkgsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUc0QixJQUFJLENBQXhCLFFBQWlDNUIsQ0FBakMsSUFBc0M7QUFDckM4QixZQUFNLEdBQUcsaUJBQXNCcUssWUFBWSxDQUFDdkssSUFBSSxDQUFoREUsQ0FBZ0QsQ0FBTCxDQUFsQyxDQUFUQTtBQUNBO0FBSEYsU0FJTyxJQUFHLGdCQUFILFVBQTZCO0FBQ25DQSxVQUFNLEdBQU5BO0FBQ0E7O0FBRUQ7QUFDQTs7QUFFTSwrQkFDUDtBQUNDLE1BQUlBLE1BQU0sR0FEWCxFQUNDLENBREQsQ0FFQzs7QUFDQSxNQUFHcUYsS0FBSyxDQUFMQSxRQUFILElBQUdBLENBQUgsRUFBd0I7QUFDdkIsU0FBSyxJQUFJbkgsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUc0QixJQUFJLENBQXhCLFFBQWlDNUIsQ0FBakMsSUFBc0M7QUFDckM4QixZQUFNLElBQUlzSyxlQUFlLENBQUN4SyxJQUFJLENBQTlCRSxDQUE4QixDQUFMLENBQXpCQTtBQUNBO0FBSEYsU0FJTyxJQUFHLGdCQUFILFVBQTZCO0FBQ25DLFNBQUksSUFBSixhQUFxQjtBQUNwQixVQUFHRixJQUFJLENBQVAsR0FBTyxDQUFQLEVBQWM7QUFDYkUsY0FBTSxJQUFJLE1BQVZBO0FBQ0E7QUFDRDtBQUxLLFNBTUE7QUFDTkEsVUFBTSxJQUFJLE1BQVZBO0FBQ0E7O0FBRUQ7QUFDQTs7QUFHTSx3Q0FDUDtBQUNDLE1BQUl1SyxnQkFBZ0IsR0FBcEI7QUFDQSxnQ0FBYSxhQUFPO0FBQ25CLFFBQUlDLEdBQUcsR0FBRzdGLElBQUksQ0FBZDtBQUVBLFFBQUk4RixLQUFLLEdBQUdILGVBQWUsQ0FBZkEsQ0FBZSxDQUFmQSxvQkFBWixHQUFZQSxDQUFaO0FBQ0EsUUFBSTlGLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBaEIsT0FBd0IsYUFBQztBQUFBLGFBQUksQ0FBQ2lHLEtBQUssQ0FBTEEsU0FBTCxDQUFLQSxDQUFMO0FBQXhDLEtBQWUsQ0FBZjs7QUFFQSxzR0FBdUI7QUFBQSxVQUFmN04sSUFBZTtBQUN0QitILFVBQUksQ0FBSkE7QUFDQTs7QUFFRCw2R0FBMEI7QUFBQSxVQUFsQi9ILEtBQWtCO0FBQ3pCK0gsVUFBSSxDQUFKQTtBQVhrQixNQWFuQjs7O0FBRUE0RixvQkFBZ0IsR0FBaEJBO0FBZkQ7QUFpQkE7O0FBRU0seUNBQ1A7QUFDQyxnQ0FBYSxhQUFPO0FBQ25CLFFBQUlHLE1BQU0sR0FBR0wsWUFBWSxDQUF6QixDQUF5QixDQUF6Qjs7QUFDQSxTQUFJLElBQUosZ0JBQXdCO0FBQ3ZCMUYsVUFBSSxDQUFKQSxjQUFtQitGLE1BQU0sQ0FBekIvRixJQUF5QixDQUF6QkE7QUFDQTtBQUpGO0FBTUE7O0FBR00sb0NBQ1A7QUFBQTtBQUdFLFFBQUkxSCxLQUFLLEdBQUc0RCxLQUFLLENBQWpCLElBQWlCLENBQWpCOztBQUNBLFFBQUdqRSxJQUFJLEtBQVAsU0FBcUI7QUFDcEIrTixlQUFTLGNBQVRBLE1BQVMsQ0FBVEE7QUFERCxXQUVPLElBQUcvTixJQUFJLEtBQVAsU0FBcUI7QUFDM0JnTyxnQkFBVSxjQUFWQSxNQUFVLENBQVZBO0FBRE0sV0FFQTtBQUNOLG9DQUFhLGFBQU87QUFDbkJqRyxZQUFJLENBQUpBO0FBREQ7QUFHQTtBQVpIOztBQUNDLE9BQUksSUFBSixlQUNBO0FBQUEsVUFEUS9ILElBQ1I7QUFXQztBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QVN4Rk0sdUNBQXVDO0FBQzdDLE9BQUssSUFBTCxnQkFBeUI7QUFDeEIrSCxRQUFJLENBQUpBLHNCQUEyQjNGLE9BQU8sQ0FBbEMyRixHQUFrQyxDQUFsQ0E7QUFDQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBbENMRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSwrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBbUNKTyw0Q0FBNEM7QUFDbEQsTUFBSWtHLE1BQU0sQ0FBTkEsSUFBTSxDQUFOQSxLQUFKLFdBQWdDO0FBQy9CQyxZQUFRLENBQVJBLElBQVEsQ0FBUkE7QUFDQTtBQUNBOztBQUVEbkcsTUFBSSxDQUFKQSxZQUFpQmtHLE1BQU0sQ0FBdkJsRyxJQUF1QixDQUF2QkE7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVEQ7O0FBRU8sNkJBQ1AsQ0FDQzs7QUFFTSwrQkFDUDtBQUFBLG9DQUR5QzdFLElBQ3pDO0FBRHlDQSxRQUN6QyxVQUR5Q0EsR0FDekMsZUFEeUNBO0FBQ3pDOztBQUNDLE1BQUl1RSxPQUFPLEdBQUdELFFBQVEsQ0FBUkEsZUFBZCxFQUFjQSxDQUFkO0FBRUFPLE1BQUksQ0FBSkE7QUFFQSxNQUFJb0csYUFBYSxHQUFqQjtBQUVBLG1DQUFnQixZQUFNO0FBQ3JCLFFBQUlDLFVBQVUsR0FBRzVHLFFBQVEsQ0FBUkEsY0FBakIsRUFBaUJBLENBQWpCO0FBRUEsUUFBSTZHLG9CQUFvQixHQUF4QjtBQUNBLFFBQUlDLHFCQUFxQixHQUF6Qjs7QUFFQSxTQUFLLElBQUloTixDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBRzRCLElBQUksQ0FBeEIsUUFBaUM1QixDQUFDLElBQWxDLEdBQXlDO0FBQ3hDLFVBQUkrRCxTQUFTLEdBQUduQyxJQUFJLENBQXBCLENBQW9CLENBQXBCO0FBQ0EsVUFBSXFMLFFBQVEsR0FBR3JMLElBQUksQ0FBQzVCLENBQUMsR0FBckIsQ0FBbUIsQ0FBbkI7O0FBQ0EsVUFBSStELFNBQUosSUFBaUI7QUFDaEIsWUFBSW1KLFlBQVksR0FBR0wsYUFBYSxLQUFoQztBQUVBQyxrQkFBVSxHQUFHRyxRQUFRLE9BQXJCSCxZQUFxQixDQUFyQkE7QUFFQUUsNkJBQXFCLEdBQXJCQTs7QUFFQSwwQkFBaUI7QUFDaEJELDhCQUFvQixHQUFwQkE7QUFDQTs7QUFFRDtBQUNBO0FBQ0Q7O0FBRUQsUUFBSUksZUFBZSxHQUFHSCxxQkFBcUIsS0FBM0M7QUFFQUgsaUJBQWEsR0ExQlEscUJBMEJyQkEsQ0ExQnFCLENBNEJyQjs7QUFDQSx5QkFBb0I7QUFDbkI7QUFDQTs7QUFFRCxRQUFHcEcsSUFBSSxDQUFKQSxhQUFILElBQXlCO0FBQ3hCLFdBQUssSUFBSXpHLENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHeUcsSUFBSSxDQUFKQSxXQUFwQixRQUE0Q3pHLENBQTVDLElBQWlEO0FBQ2hELFlBQUltRSxLQUFLLEdBQUdzQyxJQUFJLENBQUpBLFdBQVosQ0FBWUEsQ0FBWjs7QUFDQSxZQUFHekcsQ0FBQyxLQUFKLEdBQVk7QUFDWG1FLGVBQUssQ0FBTEE7QUFERCxlQUVPO0FBQ05BLGVBQUssQ0FBTEE7QUFDQTtBQUNEO0FBUkYsV0FTTztBQUNOc0MsVUFBSSxDQUFKQTtBQTNDb0IsTUE4Q3JCOzs7QUFFQUEsUUFBSSxHQUFKQTtBQWhERDtBQW1EQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVNLHlDQUF5QztBQUMvQyxjQUFZO0FBQ1gsV0FBTzVHLFFBQVEsQ0FBUkEsa0JBQVAsSUFBT0EsQ0FBUDtBQUNBOztBQUVEO0FBQ0E7O0FBRU0sK0JBQStCO0FBQ3JDLE1BQUl6QixPQUFPLEtBQVBBLGFBQXlCQSxPQUFPLEtBQXBDLE1BQStDO0FBQzlDQSxXQUFPLEdBQVBBO0FBQ0E7O0FBRUQsTUFBSWdQLE1BQU0sR0FBR2hQLE9BQU8sQ0FBUEEsVUFBYjtBQUNBLE1BQUl1TyxNQUFNLEdBQUd2TyxPQUFPLENBQVBBLFVBQWI7QUFFQSxTQUFPO0FBQ05nUCxVQUFNLEVBREE7QUFFTlQsVUFBTSxFQUFOQTtBQUZNLEdBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7OztBQ3JCRDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFTQTs7OztBQUdBOzs7O0FBS0E7Ozs7QUFJQSxTQUFTVSxJQUFULEdBQWdCO0FBSWY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLE1BQUlDLE1BQU0sR0FBR3BILFFBQVEsQ0FBQ3FILGFBQVQsQ0FBdUIsVUFBdkIsQ0FBYjs7QUFDQUQsUUFBTSxDQUFDRSxTQUFQLEdBQW1CLGdFQUFuQjs7QUFFQSxNQUFJQyxNQUFNLEdBQUd2SCxRQUFRLENBQUNxSCxhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0FFLFFBQU0sQ0FBQ0QsU0FBUCxHQUFtQixTQUFuQjs7QUFFQSxNQUFJRSxNQUFNLEdBQUd4SCxRQUFRLENBQUNxSCxhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0FHLFFBQU0sQ0FBQ0YsU0FBUCxHQUFtQixxSEFBbkI7QUFFQSxNQUFJRyxLQUFLLEdBQUcsSUFBWjs7QUFFQSxXQUFTQyxhQUFULENBQXVCeFAsT0FBdkIsRUFBZ0NxSSxJQUFoQyxFQUE4QztBQUFBLFFBQWRBLElBQWM7QUFBZEEsVUFBYyxHQUFQLEtBQU87QUFBQTs7QUFDN0MsUUFBSWhGLE1BQU0sR0FBR2dGLElBQUksS0FBSyxLQUF0Qjs7QUFENkMsd0JBR3BCLDBCQUFhckksT0FBYixDQUhvQjtBQUFBLFFBR3ZDZ1AsTUFIdUMsaUJBR3ZDQSxNQUh1QztBQUFBLFFBRy9CVCxNQUgrQixpQkFHL0JBLE1BSCtCO0FBSTdDOzs7OztBQUdBLFFBQUlrQixLQUFLLEdBQUcsNEJBQVcsRUFBWCxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLDRCQUFXLENBQVgsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyw0QkFBVyxDQUFYLENBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsNEJBQVc3RyxLQUFLLENBQUM4RyxJQUFOLENBQVc7QUFBRTVGLFlBQU0sRUFBRTtBQUFWLEtBQVgsRUFBMEIsVUFBQzZGLENBQUQsRUFBSWxPLENBQUo7QUFBQSxhQUFVQSxDQUFWO0FBQUEsS0FBMUIsQ0FBWCxDQUFaO0FBRUEsUUFBSW1PLENBQUMsR0FBRywwQkFBU04sS0FBVCxFQUFnQixZQUFNO0FBQzdCLGFBQU9PLGdCQUFPUCxLQUFkO0FBQ0EsS0FGTyxDQUFSOztBQUlBLGFBQVNRLE9BQVQsR0FBbUI7QUFDbEJSLFdBQUssQ0FBQ0EsS0FBSyxLQUFLLENBQVgsQ0FBTDtBQUNBOztBQUVEUyxpQkFBYSxDQUFDWCxLQUFELENBQWI7QUFDQUEsU0FBSyxHQUFHWSxXQUFXLENBQUMsWUFBTTtBQUN6QlQsV0FBSyxDQUFDQSxLQUFLLEtBQUssQ0FBWCxDQUFMO0FBQ0EsS0FGa0IsRUFFaEIsSUFGZ0IsQ0FBbkIsQ0FyQjZDLENBeUI3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7O0FBR0EsUUFBSVUsS0FBSyxHQUFHLHFCQUFRbEIsTUFBUixFQUFnQjdHLElBQWhCLEVBQXNCaEYsTUFBdEIsQ0FBWjs7QUFFQSxRQUFJZ04sS0FBSyxHQUFHaE4sTUFBTSxHQUFHK00sS0FBSyxDQUFDRSxVQUFULEdBQXNCRixLQUF4Qzs7QUFFQSx1QkFBWUMsS0FBWixFQUFtQmhOLE1BQW5CLEVBQTJCO0FBQzFCLGdCQUFVLDBCQUFTLENBQUNvTSxLQUFELENBQVQsRUFBa0IsWUFBTTtBQUNqQyxlQUFPO0FBQ05SLGNBQUksRUFBRVEsS0FBSztBQURMLFNBQVA7QUFHQSxPQUpTLENBRGdCO0FBTTFCLGdCQUFVLDBCQUFTLENBQUNBLEtBQUQsQ0FBVCxFQUFrQixZQUFNO0FBQ2pDLGVBQU9BLEtBQUssRUFBWjtBQUNBLE9BRlMsQ0FOZ0I7QUFTMUIsZUFBUywwQkFBUyxDQUFDQSxLQUFELEVBQVFDLEtBQVIsQ0FBVCxFQUF5QixZQUFNO0FBQ3ZDLGVBQU8sQ0FBQ0QsS0FBSyxFQUFOLEVBQVU7QUFDaEJjLGNBQUksRUFBRWIsS0FBSyxPQUFPO0FBREYsU0FBVixDQUFQO0FBR0EsT0FKUTtBQVRpQixLQUEzQjtBQWdCQSxRQUFJYyxLQUFLLEdBQUdILEtBQUssQ0FBQ0MsVUFBbEI7O0FBRUEsUUFBSUcsTUFBTSxHQUFHLGNBQU9ELEtBQVAsRUFBY1osS0FBZCxFQUFxQixVQUFDYyxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDbEQsYUFBTyxVQUFVRCxLQUFWLEdBQWtCakIsS0FBSyxFQUE5QjtBQUNBLEtBRlksRUFFVixVQUFDcEgsSUFBRCxFQUFPaEYsTUFBUCxFQUFldU4sU0FBZixFQUEwQkYsS0FBMUIsRUFBaUNDLElBQWpDLEVBQTBDO0FBQzVDLFVBQUlFLEtBQUssR0FBRyxxQkFBUXhCLE1BQVIsRUFBZ0JoSCxJQUFoQixFQUFzQmhGLE1BQXRCLENBQVo7O0FBRUEsVUFBSXlOLEtBQUssR0FBR3pOLE1BQU0sR0FBR3dOLEtBQUssQ0FBQ1AsVUFBVCxHQUFzQk8sS0FBeEM7O0FBRUEsVUFBSUUsTUFBTSxHQUFHLHVCQUFZRCxLQUFaLEVBQW1CLENBQUNwQixLQUFELENBQW5CLEVBQTRCLFlBQU07QUFDOUMsZUFBT2dCLEtBQUssR0FBRyxDQUFSLEtBQWMsQ0FBZCxJQUFtQmhCLEtBQUssS0FBSyxDQUFWLEtBQWdCLENBQTFDO0FBQ0EsT0FGWSxFQUVWLFVBQUNySCxJQUFELEVBQU9oRixNQUFQLEVBQWtCO0FBQ3BCLFlBQUkyTixLQUFLLEdBQUcscUJBQVExQixNQUFSLEVBQWdCakgsSUFBaEIsRUFBc0JoRixNQUF0QixDQUFaOztBQUVBLFlBQUk0TixLQUFLLEdBQUc1TixNQUFNLEdBQUcyTixLQUFLLENBQUNWLFVBQVQsR0FBc0JVLEtBQXhDLENBSG9CLENBSXBCOzs7QUFDQSxtQ0FBVSxDQUFDdkIsS0FBRCxDQUFWLEVBQW1CLFlBQU07QUFDeEJ3QixlQUFLLENBQUNDLFlBQU4sQ0FBbUIsVUFBbkIsRUFBK0IsVUFBVVIsS0FBVixHQUFrQmpCLEtBQUssRUFBdEQ7QUFDQSxTQUZEO0FBSUEsNEJBQWF3QixLQUFiLEVBQW9CNU4sTUFBcEIsRUFBNEI7QUFDM0IsbUJBQVMsZUFBUzhOLEtBQVQsRUFBZ0I7QUFDeEIsbUJBQU9sQixPQUFPLEVBQWQ7QUFDQSxXQUgwQjtBQUkzQix1QkFBYSxtQkFBU2tCLEtBQVQsRUFBZ0I7QUFDNUIsbUJBQU9sQixPQUFPLENBQUNrQixLQUFELENBQWQ7QUFDQTtBQU4wQixTQUE1QjtBQVNBLFlBQUlDLEtBQUssR0FBR0gsS0FBSyxDQUFDWCxVQUFsQjtBQUNBLG1DQUFVLENBQUNiLEtBQUQsQ0FBVixFQUFtQixZQUFNO0FBQ3hCMkIsZUFBSyxDQUFDQyxTQUFOLHVCQUFvQzVCLEtBQUssRUFBekM7QUFDQSxTQUZEO0FBR0EsWUFBSTZCLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxXQUFsQjtBQUVBLDRCQUFhRCxLQUFiLEVBQW9Cak8sTUFBcEIsRUFBNEI7QUFDM0IsdUJBQWEsbUJBQVM4TixLQUFULEVBQWdCO0FBQzVCLG1CQUFPSyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQ0E7QUFIMEIsU0FBNUI7QUFNQSxZQUFJQyxNQUFNLEdBQUdILEtBQUssQ0FBQ2hCLFVBQW5CO0FBRUEsMEJBQU8vQixNQUFQLEVBQWUsU0FBZixFQUEwQmtELE1BQTFCLEVBQWtDLFVBQUFwSixJQUFJLEVBQUk7QUFDekMsY0FBSXFKLE1BQU0sR0FBR0QsTUFBTSxDQUFDbkIsVUFBcEI7QUFDQSxjQUFJcUIsTUFBTSxHQUFHRCxNQUFNLENBQUNILFdBQXBCO0FBQ0EsY0FBSUssTUFBTSxHQUFHRCxNQUFNLENBQUNyQixVQUFwQjtBQUNBLGNBQUl1QixNQUFNLEdBQUdGLE1BQU0sQ0FBQ0osV0FBcEI7QUFDQSxTQUxEO0FBT0EsZUFBT2xPLE1BQU0sR0FBRzJOLEtBQUgsR0FBV00sS0FBeEI7QUFDQSxPQTFDWSxDQUFiLENBTDRDLENBZ0Q1Qzs7O0FBQ0EsYUFBT2pPLE1BQU0sR0FBR3dOLEtBQUgsR0FBV0UsTUFBeEI7QUFDQSxLQXBEWSxFQW9EVjFOLE1BcERVLENBQWI7O0FBc0RBLFFBQUl5TyxNQUFNLEdBQUdyQixNQUFNLENBQUNjLFdBQXBCO0FBQ0EsUUFBSVEsTUFBTSxHQUFHRCxNQUFNLENBQUN4QixVQUFwQjtBQUNBLCtCQUFVLENBQUNaLEtBQUQsQ0FBVixFQUFtQixZQUFNO0FBQ3hCcUMsWUFBTSxDQUFDVixTQUFQLFFBQXNCM0IsS0FBSyxFQUEzQjtBQUNBLEtBRkQ7QUFHQSxXQUFPck0sTUFBTSxHQUFHK00sS0FBSCxHQUFXQyxLQUF4QjtBQUNBOztBQUlELE1BQUkyQixNQUFNLEdBQUdsSyxRQUFRLENBQUNtSyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQUQsUUFBTSxDQUFDNUMsU0FBUCxHQUFtQixFQUFuQjtBQUVBLHFCQUFLLFFBQUw7QUFDQTRDLFFBQU0sQ0FBQ0UsV0FBUCxDQUFtQjFDLGFBQWEsRUFBaEM7QUFDQSxxQkFBSyxRQUFMO0FBRUE7QUFJQTJDLFlBQVUsQ0FBQyxZQUFNO0FBQ2hCLFFBQUlqRSxHQUFHLEdBQUc4RCxNQUFNLENBQUM1QyxTQUFqQjtBQUNBNEMsVUFBTSxDQUFDNUMsU0FBUCxHQUFtQmxCLEdBQW5CO0FBRUEsdUJBQUssU0FBTDtBQUNBc0IsaUJBQWEsQ0FBQyxJQUFELEVBQU93QyxNQUFNLENBQUMxQixVQUFkLENBQWI7QUFDQSx1QkFBSyxTQUFMO0FBQ0EsR0FQUyxFQU9QLElBUE8sQ0FBVixDQXpKZSxDQWlLZjtBQUNBOztBQUVEckIsSUFBSTs7QUFFSixTQUFTbUQsSUFBVCxHQUFnQjtBQUVmLE1BQUl4RyxJQUFJLG9TQUFSO0FBd0JBQSxNQUFJLHk2QkFBSjtBQXFDQSxNQUFJckssTUFBTSxHQUFHLG1CQUFNcUssSUFBTixDQUFiO0FBRUEsU0FBTyx1QkFBUXJLLE1BQVIsQ0FBUCxDQWpFZSxDQWtFZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25RRCxJQUFJOFEsS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBU3JDLElBQVQsQ0FBYzFQLElBQWQsRUFDZjtBQUNDLE1BQUlnUyxHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9ILEtBQUssQ0FBQy9SLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0QytSLFNBQUssQ0FBQy9SLElBQUQsQ0FBTCxHQUFjZ1MsR0FBZDtBQUNBLFdBQU9ELEtBQUssQ0FBQy9SLElBQUQsQ0FBWjtBQUNBOztBQUVEc0UsU0FBTyxDQUFDNk4sR0FBUixXQUFvQm5TLElBQXBCLFNBQThCZ1MsR0FBRyxHQUFHRCxLQUFLLENBQUMvUixJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBTytSLEtBQUssQ0FBQy9SLElBQUQsQ0FBWjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQgfSBmcm9tICcuL3RlbXBsYXRlcydcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuXG5leHBvcnQgeyBhdHRycywgZXZlbnRzLCBzbG90LCBnZXROb2RlLCBwYXJzZUNvbnRleHQsIHN0YXRlbWVudCB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodmFsdWUudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiB2YWx1ZS5jYWxsZWUubmFtZSA9PT0gJyRvJykge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YS52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRkYXRhLm1ldGhvZHMucHVzaChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRhdGE7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVuY2llcyhhc3QsIG9ic2VydmFibGVzID0gW10pXG57XG5cdGxldCBkZXBzID0ge307XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRlcHM7XG59IiwiaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFNsb3QgZnJvbSAnLi9TbG90JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBDb21wb25lbnQsIFNsb3QgfSIsImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgYW5hbHlzZSB9IGZyb20gJ0BoYXdhL2FuYWx5c2VyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cdC8vIGNvbnNvbGUud2Fybihjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyb3dGdW5jdGlvbih7IHZhbHVlID0gW10sIGFyZ3MgPSBbXSB9LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblx0XG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN0cmluZyk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVzdWx0KVxuXHRyZXR1cm4ge1xuXHRcdHZhbHVlOiBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oXG5cdFx0XHRhcmdzLm1hcChpdGVtID0+IGlkKGl0ZW0pKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0LmNvbnRlbnQpXG5cdFx0XHRdKSxcblx0XHQpLFxuXHRcdGRlcHM6IHJlc3VsdC5kZXBzLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUZ1bmN0aW9uIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uZXZlbnRzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5ldmVudHNbbmFtZV0sIG1ha2VGdW5jdGlvbik7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUV2ZW50cyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKHZhbHVlLCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VDb21wdXRlZCk7XG5cblx0Ly8gY29uc29sZS53YXJuKHJlc3VsdCk7XG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcbmltcG9ydCB7IGFycm93RnVuY3Rpb24gfSBmcm9tICcuL2Fycm93RnVuY3Rpb24nO1xuaW1wb3J0IHsgc2V0QXR0ciB9IGZyb20gJy4vc2V0QXR0cic7XG5cbi8vIGV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHByb3BzIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhjb250ZXh0KVxue1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJzOiBhdHRycy5iaW5kKGNvbnRleHQpLFxuXHRcdGV2ZW50czogZXZlbnRzLmJpbmQoY29udGV4dCksXG5cdFx0cHJvcHM6IHByb3BzLmJpbmQoY29udGV4dCksXG5cdFx0c3RyaW5nOiBzdHJpbmcuYmluZChjb250ZXh0KSxcblx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uLmJpbmQoY29udGV4dCksXG5cdFx0YXJyb3dGdW5jdGlvbjogYXJyb3dGdW5jdGlvbi5iaW5kKGNvbnRleHQpLFxuXHRcdHNldEF0dHI6IHNldEF0dHIuYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdWJzY3JpYmUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoeyBuYW1lID0gJ2tleScsIFR5cGUgfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKFR5cGUub3B0aW9uW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBUeXBlLm9wdGlvbltuYW1lXTtcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3Vic2NyaWJlKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3NldEF0dHJpYnV0ZScpXG5cdFx0XHQpLFxuXHRcdFx0W1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGBkYXRhLSR7bmFtZX1gKSxcblx0XHRcdFx0cmVzdWx0LmV4cHJcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0aWYocmVzdWx0LnNob3VsZFdyYXApIHtcblx0XHRleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHJlc3VsdC5kZXBzLFxuXHRcdFx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb25cblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblx0fVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKGV4cHJlc3Npb24pO1xuXHQvLyByZXR1cm4gcmVzdWx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpc0V4cHJlc3Npb24gPSBlbnRpdHkudmFsdWUubWF0Y2goL1xcJFxcey4qXFx9L2cpICE9PSBudWxsO1xuXG5cdGlmKCFpc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgeyBkZXBzLCBjb250ZW50IH0gPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB7XG5cdFx0aXNFeHByZXNzaW9uLFxuXHRcdHZhbHVlOiBgXFxgJHsgZW50aXR5LnZhbHVlIH1cXGBgLFxuXHR9LCBtYWtlU3RyaW5nKTtcblxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0XHRuZXcgYXNzaWdubWVudEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKHBvaW50LCBpZCgnbm9kZVZhbHVlJykpLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdF0pXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRbZGVwcywgYm9keV1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRibG9ja1N0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuY29uc3QgVE1QX0lERU5USUZJRVIgPSAnX3RtcCRhc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZhbHVlKGNvbnRleHQsIHZhbHVlLCBmbilcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYCR7VE1QX0lERU5USUZJRVJ9ID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0Ly8gaWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCBpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59XG5cblxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdC8vIGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdC8vIFx0cmV0dXJuIHJlc3VsdDtcblx0Ly8gfVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3VsZFdyYXAsXG5cdFx0ZGVwcyxcblx0XHRleHByOiByZXN1bHQsXG5cdH1cblx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldENvbXBvbmVudCcpLCBbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRcdFx0bCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFYWNoQ29uZGl0aW9uKGVudGl0eSlcbntcblx0bGV0IHN0YXRlbWVudCA9IGVudGl0eS52YWx1ZS5tYXRjaEFsbCgvXFwoKD88aXRlbT5bQS16MC05XSspXFxzPyhcXCxcXHM/KD88a2V5PltBLXowLTldKylcXHM/KT9cXClcXHM/aW5cXHMoPzxjb25kaXRpb24+LiopL2cpO1xuXG5cdGxldCBjb25kaXRpb24gPSBudWxsO1xuXHRsZXQgYXJncyA9IFtdO1xuXG5cdGZvcihsZXQgbWF0Y2ggb2Ygc3RhdGVtZW50KSB7XG5cblx0XHRpZihtYXRjaC5ncm91cHMuaXRlbSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5pdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaXRlbScpO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRrZXk6IGZpbmRLZXkoZW50aXR5KSxcblx0XHRjb25kaXRpb24sXG5cdFx0YXJncyxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEtleShlbnRpdHkpXG57XG5cdGxldCBrZXkgPSBudWxsO1xuXG5cdGZvcihsZXQgY2hpbGQgb2YgZW50aXR5LmNoaWxkcmVuKVxuXHR7XG5cdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBFeHByZXNzaW9uKSB7XG5cdFx0XHRrZXkgPSBmaW5kS2V5KGNoaWxkKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZihjaGlsZC5vcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGtleSA9IGNoaWxkLm9wdGlvbi5rZXk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihrZXkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBpcyByZXF1aXJlZCBmb3IgRWFjaCBsb29wIChmb3IgaHlkcmF0aW9uKScpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdC8qKlxuXHQgKiBMb29wIHByZXBhcmF0aW9uXG5cdCAqIDEuIEtleSBnZW5lcmF0aW9uIGZ1bmN0aW9uXG5cdCAqIDIuIENvbmRpdGlvbiBleHByZXNzaW9uXG5cdCAqIDMuIEl0ZW0gYW5kIGtleSBpZGludGlmaWVyc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGxvb3AgPSBwYXJzZUVhY2hDb25kaXRpb24odGhpcyk7XG5cblx0bGV0IHZhbHVlID0gb3B0aW9ucy5keW5hbWljLmV4cHJlc3Npb24obG9vcC5jb25kaXRpb24sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdGxldCBrZXkgPSBvcHRpb25zLmR5bmFtaWMuYXJyb3dGdW5jdGlvbih7XG5cdFx0dmFsdWU6IGxvb3Aua2V5LFxuXHRcdGFyZ3M6IGxvb3AuYXJnc1xuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpLnZhbHVlO1xuXG5cdHBhcmFtcy5wdXNoKHZhbHVlKTtcblx0cGFyYW1zLnB1c2goa2V5KTtcblxuXHQvKipcblx0ICogR2V0IGxvb3AgdGVtcGxhdGVcblx0ICovXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdFx0WyBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyksIGlkKCdfa2V5RXhwciQnKSBdLmNvbmNhdChsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KSxcblx0XHQpXG5cdCk7XG5cblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS5tYWtlVmFsdWUpO1xuXHQvLyB9XHRcblx0XG5cdG9wdGlvbnMuZHluYW1pYy5zZXRBdHRyKHtcblx0XHRUeXBlOiB0aGlzLFxuXHRcdG5hbWU6ICdrZXknLFxuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGFycmF5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZW1lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblxuXHRsZXQgaXRlbVBhcmFtcyA9IFtdO1xuXHRsZXQgZGVwZW5kZW5jaWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0Ly8gV3JhcCBzdGF0ZW1lbnQgYXJyb3cgZnVuY3Rpb24gYW5kIGdldCBkZXBzIG9mIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBnbG9iYWwgZm9yIHdob2xlIGZ1bmN0aW9uXG5cdFx0bGV0IHsgdmFsdWUsIGRlcHMgfSA9IG9wdGlvbnMuZHluYW1pYy5hcnJvd0Z1bmN0aW9uKHtcblx0XHRcdHZhbHVlOiBibG9jay52YWx1ZSxcblx0XHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdFx0ZGVwZW5kZW5jaWVzID0gW1xuXHRcdFx0Li4uZGVwZW5kZW5jaWVzLFxuXHRcdFx0Li4uZGVwc1xuXHRcdF07XG5cdFx0XG5cdFx0aXRlbVBhcmFtcy5wdXNoKHZhbHVlKTtcblx0XHRpdGVtUGFyYW1zLnB1c2goXG5cdFx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdFx0KTtcblx0fVxuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdGFycmF5RXhwcmVzc2lvbihkZXBlbmRlbmNpZXMubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKVxuXHQpO1xuXG5cdHBhcmFtcyA9IHBhcmFtcy5jb25jYXQoaXRlbVBhcmFtcyk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3N0YXRlbWVudCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXh0KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cblx0b3B0aW9ucy5keW5hbWljLnN0cmluZyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdC8vIH1cblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdHJldHVybiBpZCgnY3JlYXRlVGVhbXBsYXRlJyk7XG5cdC8vIH0pO1xuXG5cdC8vIGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0Ly8gbGV0IHBvaW50ZXIgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdGlmKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZCgnZmlyc3RDaGlsZCcpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBsO1xuXHQvLyB9KTtcblx0XG5cdC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcblx0Ly8gY29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBvaW50ZXIgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihsLCBpZCgnZmlyc3RDaGlsZCcpKSxcblx0XHRcdGxcblx0XHQpXG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIHR5cGUpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCh0eXBlKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGN1c3RvbURlZmluZXIgPSBmYWxzZSlcbntcblx0aWYoZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdGN1c3RvbURlZmluZXIgPSAoKSA9PiB7fTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhlbnRpdHksIGVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkpO1xuXHRpZighZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSAmJiAhZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdG9wdGlvbnMuY3JlYXRlQ29udGV4dCgpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlbnRpdHkuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRjaGlsZEhhbmRsZShlbnRpdHkuY2hpbGRyZW5baV0sIGNvbnRleHQsIG9wdGlvbnMsIGksIGN1c3RvbURlZmluZXIpO1xuXHR9XG5cblx0bGV0IGxhc3RDaGlsZCA9IG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKTtcblxuXHRpZighZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSAmJiAhZW50aXR5LmlzVGVtcGxhdGUoKSkge1xuXHRcdG9wdGlvbnMucmVtb3ZlQ29udGV4dCgpO1xuXHR9XG5cblx0cmV0dXJuIGxhc3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkSGFuZGxlKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgaW5kZXgsIGN1c3RvbURlZmluZXIpXG57XG5cdGxldCBpc0ZpcnN0ID0gaW5kZXggPT09IDA7XG5cblx0aWYoY3VzdG9tRGVmaW5lciAmJiBpc0ZpcnN0KSB7XG5cdFx0Y3VzdG9tRGVmaW5lcihjb250ZXh0LCBvcHRpb25zKTtcblx0fSBlbHNlIHtcblx0XHRpZighZW50aXR5LnNraXBJbml0KCkpIHtcblx0XHRcdG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIGlzRmlyc3QgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdH1cblx0fVxuXG5cdGVudGl0eS5oYW5kbGUoY29udGV4dCwgb3B0aW9ucyk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGRpZmYocGFyZW50LCBhLCBiLCBrZXlFeHByLCBnZXQsIGJlZm9yZSlcbntcblx0Y29uc3QgYUlkeCA9IG5ldyBNYXAoKTtcblx0Y29uc3QgYklkeCA9IG5ldyBNYXAoKTtcblx0bGV0IGk7XG5cdGxldCBqO1xuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGFbaV0sIGkpO1xuXHRcdGFJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihiW2ldLCBpKTtcblx0XHRiSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coYUlkeCwgYklkeCk7XG5cblx0Zm9yIChpID0gaiA9IDA7IGkgIT09IGEubGVuZ3RoIHx8IGogIT09IGIubGVuZ3RoOykge1xuXHRcdHZhciBhRWxtID0gYVtpXSxcblx0XHRcdGJFbG0gPSBiW2pdO1xuXG5cdFx0aWYgKGFFbG0gPT09IG51bGwpIHtcblx0XHRcdC8vIFRoaXMgaXMgYSBlbGVtZW50IHRoYXQgaGFzIGJlZW4gbW92ZWQgdG8gZWFybGllciBpbiB0aGUgbGlzdFxuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYi5sZW5ndGggPD0gaikge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBuZXcsIHRoaXMgaXMgYSBkZWxldGVcblx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGEubGVuZ3RoIDw9IGkpIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gb2xkLCB0aGlzIGlzIGFuIGFkZGl0aW9uXG5cdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKGdldChiRWxtLCBqLCAxKSwgZ2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZSk7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIGlmIChhRWxtID09PSBiRWxtKSB7XG5cdFx0XHQvLyBObyBkaWZmZXJlbmNlLCB3ZSBtb3ZlIG9uXG5cdFx0XHRpKys7XG5cdFx0XHRqKys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSBjdXJyZW50IGVsZW1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgbmV3IGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGlzIGVsZW1lbnQgc2hvdWxkIGJlXG5cdFx0XHR2YXIgY3VyRWxtSW5OZXcgPSBiSWR4LmdldChhRWxtKTtcblx0XHRcdC8vIExvb2sgZm9yIHRoZSB0aGUgd2FudGVkIGVsbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBvbGQgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoZSB3YW50ZWQgZWxlbWVudCBpcyBub3dcblx0XHRcdHZhciB3YW50ZWRFbG1Jbk9sZCA9IGFJZHguZ2V0KGJFbG0pO1xuXHRcdFx0aWYgKGN1ckVsbUluTmV3ID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gQ3VycmVudCBlbGVtZW50IGlzIG5vdCBpbiBuZXcgbGlzdCwgaXQgaGFzIGJlZW4gcmVtb3ZlZFxuXHRcdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZSBpZiAod2FudGVkRWxtSW5PbGQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBOZXcgZWxlbWVudCBpcyBub3QgaW4gb2xkIGxpc3QsIGl0IGhhcyBiZWVuIGFkZGVkXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGJFbG0sIGosIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0aisrO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gRWxlbWVudCBpcyBpbiBib3RoIGxpc3RzLCBpdCBoYXMgYmVlbiBtb3ZlZFxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZygnbW92ZScsIGFbaV0sICdmcm9tJywgd2FudGVkRWxtSW5PbGQsICd0bycsIGkpXG5cdFx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoXG5cdFx0XHRcdFx0Z2V0KGFbd2FudGVkRWxtSW5PbGRdLCB3YW50ZWRFbG1Jbk9sZCwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRhW3dhbnRlZEVsbUluT2xkXSA9IG51bGw7XG5cdFx0XHRcdGlmICh3YW50ZWRFbG1Jbk9sZCA+IGkgKyAxKSBpKys7XG5cdFx0XHRcdGorKztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYjtcbn1cbiIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCIsIFwidGVtcGxhdGVcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpXG57XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSlcbntcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2xpc3RbaV1dID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBleHBlY3RzTG93ZXJDYXNlID9cblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH0gOlxuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cbiIsImltcG9ydCB7IHdhdGNoIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmF0dHJBcmdUb09ialxuXG5leHBvcnQgZnVuY3Rpb24gYXR0ckFyZ1RvT2JqKGFyZ3MpXG57XG5cdGxldCByZXN1bHQgPSB7fTtcblxuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgYXR0ckFyZ1RvT2JqKGFyZ3NbaV0pKTtcblx0XHR9XG5cdH0gZWxzZSBpZih0eXBlb2YgYXJncyA9PT0gJ29iamVjdCcpIHtcblx0XHRyZXN1bHQgPSBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb1N0cmluZyhhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0gJyc7XG5cdC8vIGFyZ3MgPSBhcmdzLmNvbmNhdChbXSk7XG5cdGlmKEFycmF5LmlzQXJyYXkoYXJncykpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdHJlc3VsdCArPSBhdHRyQXJnVG9TdHJpbmcoYXJnc1tpXSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJncykge1xuXHRcdFx0aWYoYXJnc1trZXldKSB7XG5cdFx0XHRcdHJlc3VsdCArPSAnICcgKyBrZXk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCArPSAnICcgKyBhcmdzO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IGF0dHJBcmdUb1N0cmluZyh2KS5zdWJzdHJpbmcoMSkuc3BsaXQoJyAnKTtcblx0XHRsZXQgdG9SZW1vdmUgPSBsYXN0Q2xhc3NBZG9wdGVkLmZpbHRlcih4ID0+ICF0b1NldC5pbmNsdWRlcyh4KSk7XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9TZXQpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LmFkZChuYW1lKTtcblx0XHR9XG5cblx0XHRmb3IobGV0IG5hbWUgb2YgdG9SZW1vdmUpIHtcblx0XHRcdG5vZGUuY2xhc3NMaXN0LnJlbW92ZShuYW1lKTtcblx0XHR9XG5cdFx0Ly8gY29uc29sZS5sb2cobm9kZSk7XG5cblx0XHRsYXN0Q2xhc3NBZG9wdGVkID0gdG9TZXQ7XG5cdH0sIHJlbmRlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCBzdHlsZXMgPSBhdHRyQXJnVG9PYmoodik7XG5cdFx0Zm9yKGxldCBuYW1lIGluIHN0eWxlcykge1xuXHRcdFx0bm9kZS5zdHlsZVtuYW1lXSA9IHN0eWxlc1tuYW1lXTtcblx0XHR9XG5cdH0sIHJlbmRlcik7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG5vZGUsIHJlbmRlciwgYXR0cnMpXG57XG5cdGZvcihsZXQgbmFtZSBpbiBhdHRycylcblx0e1xuXHRcdGxldCB2YWx1ZSA9IGF0dHJzW25hbWVdO1xuXHRcdGlmKG5hbWUgPT09ICdjbGFzcycpIHtcblx0XHRcdG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3N0eWxlJykge1xuXHRcdFx0bWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0XHRcdG5vZGUuc2V0QXR0cmlidXRlKG5hbWUsIHYpO1xuXHRcdFx0fSwgcmVuZGVyKTtcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyBwcmVwYXJlIH0gZnJvbSAnLi9wcmVwYXJlJztcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJzZXIgYXMgSFRNTFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2tzKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRsZXQgbWF0Y2hlcyA9IHJlZ2V4cC5leGVjKGh0bWwpO1xuXHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdGJsb2Nrc1trZXldID0gbWF0Y2hlc1sxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoaHRtbClcbntcblx0Ly8gZ2V0IGFkZGl0aW9uYWwgYmxvY2tzIGUuZy4gc2NyaXB0LCBzdHlsZSwgZG9jXG5cdGxldCBibG9ja3MgPSBwYXJzZUJsb2Nrcyh7XG5cdFx0c2NyaXB0OiBudWxsLFxuXHRcdHN0eWxlOiBudWxsLFxuXHR9LCBodG1sKTtcblxuXHQvLyBjbGVhbiB1cCBodG1sIGFuZCByZXBsYWNlIGV4cHJlc3Npb24gd2l0aCB0YWctZXhwcmVzc2lvblxuXHRodG1sID0gcHJlcGFyZShibG9ja3MsIGh0bWwpO1xuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm9wdGlvbiA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdjb21wb25lbnQnO1xuXHR9XG5cdFxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHByZXNzaW9uIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IHR5cGUgPSBudWxsLCB2YWx1ZSA9IG51bGwgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50eXBlID0gdHlwZTtcblx0XHR0aGlzLnZhbHVlID0gdmFsdWU7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xuXHR9XG5cblx0XG5cblx0XG5cblx0XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRhZywgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnbm9kZSc7XG5cdH1cblxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRpc1RlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiAodGhpcy50eXBlID09PSAnbm9kZScgJiYgdGhpcy50YWcgPT09ICd0ZW1wbGF0ZScpO1xuXHR9XG5cblx0aGFzQWxvbmVUZW1wbGF0ZSgpXG5cdHtcblx0XHRsZXQgYWxvbmUgPSB0cnVlO1xuXG5cdFx0Zm9yKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRpZighY2hpbGQuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0XHRcdGFsb25lID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFsb25lO1xuXHR9XG5cblx0c2tpcEluaXQoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlOy8vdGhpcy50eXBlID09PSAncHJvZ3JhbScgfHwgdGhpcy50eXBlID09PSAnc2xvdCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGxldCBhdHRycyA9IHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb24uc3RhdGljQXR0cnMgOiB7fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGF0dHJzKSB7XG5cdFx0XHR0ZW1wbGF0ZSArPSBgICR7a2V5fT1cIiR7YXR0cnNba2V5XX1cImA7XG5cdFx0fVxuXG5cdFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHRcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHRcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSAmJiAhb25seUNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnRhZyB8fCB0aGlzLmlzVGVtcGxhdGUoKSkge1xuXHRcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHR9XG59IiwiXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIG9wdGlvbnNba2V5XSlcblx0fVxufSIsImV4cG9ydCBmdW5jdGlvbiBzbG90KCRzbG90cywgbmFtZSwgbm9kZSwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bm9kZS5pbm5lckhUTUwgPSAkc2xvdHNbbmFtZV07XG5cblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbigpXG57XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgZGVwcywgLi4uYXJncylcbntcdFxuXHRsZXQgZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0XG5cdG5vZGUuYWZ0ZXIoZW5kTWFyayk7XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSBudWxsO1xuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRcblx0XHRsZXQgaGFzQ29uZGl0aW9uUmVuZGVyZWQgPSBmYWxzZTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0XHRsZXQgc2hvdWxkUmVuZGVyID0gbGFzdENvbmRpdGlvbiAhPT0gaTtcblxuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBpc1NhbWVDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggID09PSBsYXN0Q29uZGl0aW9uO1xuXG5cdFx0bGFzdENvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdC8vIElmIHNhbWUgY29uZGl0aW9uIHRoYXQgaXQgd2FzIGh5ZHJhdGVkIGFuZCB3ZSBkb250IG5lZWQgdG8gcmVwbGFjZSBub2Rlc1xuXHRcdGlmKGlzU2FtZUNvbmRpdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgY2hpbGQgPSBub2RlLmNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdGlmKGkgPT09IDApIHtcblx0XHRcdFx0XHRjaGlsZC5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUubG9nKCdyZXBsYWNlJywgbm9kZSwgJ3dpdGgnLCByZXR1cm5Ob2RlKTtcblx0XG5cdFx0bm9kZSA9IHJldHVybk5vZGU7XG5cdH0sIGZhbHNlKTtcblxuXHRyZXR1cm4gZW5kTWFyaztcbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0aWYgKHJlbmRlcikge1xuXHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb250ZXh0KGNvbnRleHQpIHtcblx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0Y29udGV4dCA9IHt9O1xuXHR9XG5cblx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0cmV0dXJuIHtcblx0XHQkcHJvcHMsXG5cdFx0JHNsb3RzLFxuXHR9XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcbmltcG9ydCB7IG9ic2VydmFibGUsIGNvbXB1dGVkLCBzdWJzY3JpYmUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXG5pbXBvcnQge1xuXHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0c2xvdCBhcyBfc2xvdCQsXG5cdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0Z2V0Tm9kZSxcblx0cGFyc2VDb250ZXh0LFxufSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cbi8qKlxuICogRnJhbWV3b3JrcyBtZXRob2RzXG4gKi9cblxuXG4vKipcbiAqIEV4ZWN1dGVcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cblxuXHQvLyBsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHQvLyBjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHQvLyByZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjxkaXYgY2xhc3M9XCJUZXN0XCI+JHsgdGV4dDIgfTwvZGl2PjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8IS0tLS0+JztcblxuXHRsZXQgX3RwbCQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDMuaW5uZXJIVE1MID0gJzxkaXY+U29tZSB0ZXN0IHRleHQgJHsgdGV4dDEgfSBhZnRlcjwvZGl2PjxkaXYgY2xhc3M9XCJidXR0b25cIj48c3Bhbj5EZWZhdWx0PGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPnRleHQ8L3NwYW4+PC9kaXY+JztcblxuXHRsZXQgdGltZXIgPSBudWxsO1xuXG5cdGZ1bmN0aW9uIG1ha2VDb21wb25lbnQoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHQvKipcblx0XHQgKiBTY3JpcHQgdGFnXG5cdFx0ICovXG5cdFx0bGV0IHRleHQxID0gb2JzZXJ2YWJsZSgxMik7XG5cdFx0bGV0IHRleHQyID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgdGV4dDMgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCBpdGVtcyA9IG9ic2VydmFibGUoQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSkpO1xuXG5cdFx0bGV0IGMgPSBjb21wdXRlZCh0ZXh0MSwgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRpbWUgKyB0ZXh0MTtcblx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIG1ldGhvZDEoKSB7XG5cdFx0XHR0ZXh0MSh0ZXh0MSgpICsgMSk7XG5cdFx0fVxuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0dGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHR0ZXh0Mih0ZXh0MigpICsgMSk7XG5cdFx0fSwgMTAwMCk7XG5cblx0XHQvLyBpZighcmVuZGVyKSB7XG5cdFx0Ly8gXHR0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRcdGl0ZW1zKEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSkpO1xuXHRcdC8vIFx0fSwgMTAwMClcblx0XHQvLyB9XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdF9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcblx0XHRcdFwiZGF0YS0xXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXN0OiB0ZXh0MSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KSxcblx0XHRcdFwiZGF0YS0yXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRleHQxKCk7XG5cdFx0XHR9KSxcblx0XHRcdFwiY2xhc3NcIjogY29tcHV0ZWQoW3RleHQxLCB0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIFt0ZXh0MSgpLCB7XG5cdFx0XHRcdFx0c29tZTogdGV4dDIoKSA9PT0gMlxuXHRcdFx0XHR9XTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxNiA9IF9lYWNoJChfZWwkMywgaXRlbXMsIChpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0cmV0dXJuICd0ZXh0LScgKyBpdGVtMSArIHRleHQxKCk7XG5cdFx0fSwgKG5vZGUsIHJlbmRlciwgX2tleUV4cHIkLCBpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0bGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0bGV0IF9lbCQxNSA9IF9zdGF0ZW1lbnQkKF9lbCQ1LCBbdGV4dDJdLCAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiBpdGVtMSAlIDIgPT09IDAgJiYgdGV4dDIoKSAlIDIgPT09IDA7XG5cdFx0XHR9LCAobm9kZSwgcmVuZGVyKSA9PiB7XG5cdFx0XHRcdGxldCBfZWwkNiA9IGdldE5vZGUoX3RwbCQzLCBub2RlLCByZW5kZXIpO1xuXHRcdFx0XHRcblx0XHRcdFx0bGV0IF9lbCQ3ID0gcmVuZGVyID8gX2VsJDYuZmlyc3RDaGlsZCA6IF9lbCQ2O1xuXHRcdFx0XHQvLyBjb25zb2xlLndhcm4oX2VsJDYsIF9lbCQ3LCBub2RlLCByZW5kZXIpO1xuXHRcdFx0XHRzdWJzY3JpYmUoW3RleHQxXSwgKCkgPT4ge1xuXHRcdFx0XHRcdF9lbCQ3LnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsICd0ZXh0LScgKyBpdGVtMSArIHRleHQxKCkpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRfbWFrZUV2ZW50cyQoX2VsJDcsIHJlbmRlciwge1xuXHRcdFx0XHRcdFwiY2xpY2tcIjogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcIm1vdXNlZG93blwiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblx0XHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0XHRfZWwkOC5ub2RlVmFsdWUgPSBgU29tZSB0ZXN0IHRleHQgJHt0ZXh0MSgpfSBhZnRlcmA7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRsZXQgX2VsJDkgPSBfZWwkNy5uZXh0U2libGluZztcblxuXHRcdFx0XHRfbWFrZUV2ZW50cyQoX2VsJDksIHJlbmRlciwge1xuXHRcdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgX2VsJDEwID0gX2VsJDkuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRfc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDEwLCBub2RlID0+IHtcblx0XHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdFx0bGV0IF9lbCQxMiA9IF9lbCQxMS5uZXh0U2libGluZztcblx0XHRcdFx0XHRsZXQgX2VsJDEzID0gX2VsJDEyLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdFx0bGV0IF9lbCQxNCA9IF9lbCQxMi5uZXh0U2libGluZztcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ2IDogX2VsJDk7XG5cdFx0XHR9KTtcblx0XHRcdC8vIGNvbnNvbGUud2FybihfZWwkMTUpO1xuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDE1O1xuXHRcdH0sIHJlbmRlcik7XG5cblx0XHRsZXQgX2VsJDE3ID0gX2VsJDE2Lm5leHRTaWJsaW5nO1xuXHRcdGxldCBfZWwkMTggPSBfZWwkMTcuZmlyc3RDaGlsZDtcblx0XHRzdWJzY3JpYmUoW3RleHQyXSwgKCkgPT4ge1xuXHRcdFx0X2VsJDE4Lm5vZGVWYWx1ZSA9IGAke3RleHQyKCl9YDtcblx0XHR9KTtcblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cblxuXHRsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gJyc7XG5cblx0dGltZSgncmVuZGVyJyk7XG5cdGxheW91dC5hcHBlbmRDaGlsZChtYWtlQ29tcG9uZW50KCkpO1xuXHR0aW1lKCdyZW5kZXInKTtcblxuXHRyZXR1cm47XG5cblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRcdGxheW91dC5pbm5lckhUTUwgPSB0bXA7XG5cblx0XHR0aW1lKCdoeWRyYXRlJyk7XG5cdFx0bWFrZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZClcblx0XHR0aW1lKCdoeWRyYXRlJyk7XG5cdH0sIDIwMDApXG5cdC8vIGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xufVxuXG50ZXN0KCk7XG5cbmZ1bmN0aW9uIGdldHQoKSB7XG5cblx0bGV0IGh0bWwgPVxuXHRcdGBcblx0PGRpdj5zdGFydDwvZGl2PlxuXHRAaWYoMSlcblx0PGRpdj48L2Rpdj5cblx0YXNkYWRcblx0XHRAaWYoMilcblx0XHQ8ZGl2PmlmZjI8L2Rpdj5cblx0XHRAZW5kaWZcblx0YXNkYXNkXG5cdEBlbHNlaWYodGVzdClcblx0MVxuXHRcdDJcblx0XHRAZWFjaCgxKVxuXHRcdGFzZGFzZFxuXHRcdDxzbG90PmRlZmF1bHQgdGV4dCBmb3Igc2xvdDxiIGNsYXNzPVwiZFwiPjE8L2I+PC9zbG90PlxuXHRcdEBlbmRlYWNoXG5cdFx0M1xuXHRcdEBlbHNlIFxuXHRcdGFzZFxuXHRAZW5kaWZcblx0ZW5kXG5cdGA7XG5cblx0aHRtbCA9IGBcblx0PGRpdiBjbGFzcz1cIjJcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH1dXCIgOnByb3AxPVwiMTIzXCI+XG5cdFx0QGVhY2goKGl0ZW0xLCBrZXkxKSBpbiBpdGVtcylcblx0XHRcdEBpZihpdGVtMSAlIDIgPT09IDAgJiYgdGV4dDIgJSAyID09PSAwKVxuXHRcdFx0PHRlbXBsYXRlIDprZXk9XCIndGV4dC0nICsgaXRlbTEgKyB0ZXh0MVwiPlxuXHRcdFx0XHQ8ZGl2IEBjbGljaz1cIm1ldGhvZDFcIiBAbW91c2Vkb3duPVwibWV0aG9kMShldmVudClcIj5cblx0XHRcdFx0XHRTb21lIHRlc3QgdGV4dCBcXCR7IHRleHQxIH0gYWZ0ZXJcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25cIiBAbW91c2Vkb3duPVwiYWxlcnQoMilcIj5cblx0XHRcdFx0XHQ8c2xvdD5EZWZhdWx0IDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj4gdGV4dDwvc2xvdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0QGVuZGlmXG5cdFx0QGVuZGVhY2hcblx0XHQ8ZGl2IGNsYXNzPVwiVGVzdFwiPlxcJHsgdGV4dDIgfTwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgaXRlbXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=