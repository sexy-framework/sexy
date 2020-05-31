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
    expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('subscribe'), [result.deps, new _types.arrowFunctionExpression([], new _types.blockStatement([expression])), (0, _types.identifier)('!render')]));
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
  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('subscribe'), [deps, body, (0, _types.identifier)('!render')]));
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
  params.push((0, _types.identifier)('render'));
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
    itemParams.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node'), (0, _types.identifier)('render')], new _types.blockStatement(body)));
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
          node = lastHydratedNode.nextSibling; // console.warn('lastHydratedNode', lastHydratedNode, node)

          lastNode = lastHydratedNode;
        }
      }

      if (lastHydratedNode && lastHydratedNode.hasAttribute) {
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

    if (lastNode === null) {
      render = true;
      bindNode.after(endMark);
    } else {
      lastNode.after(endMark);
    } // console.log(lastNode);
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
exports.getInitiatedNodes = getInitiatedNodes;
exports.append = append;
exports.clone = clone;
exports.statement = statement;

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

function getFirstCondition(args) {
  var currentConditionIndex = null;

  for (var i = 0; i < args.length; i += 2) {
    var condition = args[i];
    var renderFn = args[i + 1];

    if (condition()) {
      currentConditionIndex = i;
      break;
    }
  }

  return currentConditionIndex;
}

function getInitiatedNodes(start, end) {
  var nodes = [];
  var current = start;

  do {
    var tmp = current.nextSibling;
    nodes.push(current);
    current = tmp;
  } while (current !== end && current !== null);

  nodes.push(end);

  if (nodes.length === 0) {
    return nodes[0];
  }

  return nodes;
}

function append(start, node) {
  start.after(node); // console.log('append', start, node)
}

function clone(node) {
  if (node.nodeType === 11) {
    var arr = []; //document.createDocumentFragment();

    for (var _iterator = _createForOfIteratorHelperLoose(node.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      arr.push(child);
    }

    return arr;
  }

  return node;
}

function statement(node, render, deps) {
  for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    args[_key - 3] = arguments[_key];
  } // let startMark = document.createTextNode('');


  var endMark = document.createTextNode(''); // node.before(startMark);

  var lastCondition = render ? null : getFirstCondition(args);

  if (render && lastCondition === null) {
    node.after(endMark);
  }

  var firstLoad = true;
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

    if (!render && firstLoad) {
      returnNode.after(endMark);
      node = getInitiatedNodes(node, returnNode);
    }

    firstLoad = false;
    var isSameCondition = currentConditionIndex === lastCondition;
    lastCondition = currentConditionIndex; // If same condition that it was hydrated and we dont need to replace nodes

    if (isSameCondition) {
      return;
    } // console.warn('[statement]', node, returnNode);
    // cleanup(startMark, endMark);
    // append(startMark, returnNode);


    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i]; // console.log(child);

        if (i === 0) {
          child.replaceWith(returnNode);
        } else {
          child.remove();
        }
      }

      node = returnNode;
    } else {
      var tmp = clone(returnNode);
      node.replaceWith(returnNode);
      node = tmp; // console.log(returnNode, returnNode.firstChild)
    }
  }, false); // console.error(endMark, endMark.previousSibling)

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
    var text2 = (0, _observable.observable)(2);
    var text3 = (0, _observable.observable)(1);
    var items = (0, _observable.observable)(Array.from({
      length: 5
    }, function (_, i) {
      return i;
    }));
    var c = (0, _observable.computed)(text1, function () {
      return _time.default + text1;
    });

    function method1() {
      text1(text1() + 1);
    } // clearInterval(timer);
    // timer = setInterval(() => {
    // 	text2(text2() + 1);
    // }, 1000);
    // if(!render) {
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

      var _el$15 = (0, _render.statement)(_el$5, render, [text2], function () {
        return item1 % 2 === 0 && text2() % 2 === 0;
      }, function (node, render) {
        var _el$6 = (0, _render.getNode)(_tpl$3, _el$5, render);

        var _el$7 = render ? _el$6.firstChild : _el$6;

        (0, _observable.subscribe)([text1], function () {
          _el$7.setAttribute("data-key", 'text-' + item1 + text1());
        }, !render);
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
        }, !render);
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
      });

      return render ? _el$4 : _el$15;
    }, render);

    var _el$17 = _el$16.nextSibling;
    var _el$18 = _el$17.firstChild;
    (0, _observable.subscribe)([text2], function () {
      _el$18.nodeValue = "" + text2();
    }, !render);
    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout'); // time('hydrate');
  // makeComponent(null, layout.firstChild)
  // time('hydrate');
  // return;

  console.log('start render');
  layout.innerHTML = '';
  (0, _time.default)('render');
  layout.appendChild(makeComponent());
  (0, _time.default)('render');
  return;
  setTimeout(function () {
    var tmp = layout.innerHTML;
    layout.innerHTML = tmp;
    console.log('start hydration');
    (0, _time.default)('hydrate');
    makeComponent(null, layout.firstChild);
    (0, _time.default)('hydrate');
  }, 300); // console.log(layout.innerHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3NldEF0dHIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3RlbXBsYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9Xcml0YWJsZVN0cmVhbSAoaWdub3JlZCkiXSwibmFtZXMiOlsiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnRleHQiLCJvYnNlcnZhYmxlcyIsInZhcnMiLCJtZXRob2RzIiwiY29udGV4dFN0YWNrIiwiaXNWYXJpYWJsZURlY2xhcmF0aW9uIiwibmFtZSIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwiaWQiLCJwYXRoIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiaXNTdWJDb250ZXh0IiwiZXhpdCIsIkFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiY3JlYXRlQ29udGV4dCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiVmFyaWFibGVDb3VudGVyIiwiVGVtcGxhdGVzIiwiY29kZUFuYWx5c2UiLCJibG9ja3MiLCJkeW5hbWljRXhwcmVzc2lvbnMiLCJ0ZW1wbGF0ZSIsInByb2dyYW0iLCJjb2RlIiwiaSIsInRwbCIsImluZGV4IiwiaW5pdCIsIkxhc3RWYXJpYWJsZUlkIiwiZ2V0TGFzdFZhcmlhYmxlSWQiLCJnZXRDdXJyZW50Q29udGV4dCIsIkFjdGlvbiIsImRlbGNhcmF0aW9uVmFsdWUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdG9yIiwic2V0TGFzdFZhcmlhYmxlSWQiLCJlbnRpdHkiLCJib2R5Iiwib3B0aW9ucyIsInJlbW92ZUNvbnRleHQiLCJjcmVhdGVWYXJpYWJsZSIsImNyZWF0ZVRlbXBsYXRlIiwiZHluYW1pYyIsImhhbmRsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlbmRlciIsInRlbXBsYXRlcyIsImdldFRlbXBsYXRlcyIsImFyZ3MiLCJpc0V4cHJlc3Npb24iLCJyZXN1bHQiLCJtYWtlU3RyaW5nIiwiYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsInJldHVyblN0YXRlbWVudCIsInByb3BzIiwibWFrZUNvbXB1dGVkIiwib2JqZWN0UHJvcGVydHkiLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImNhbGxFeHByZXNzaW9uIiwib2JqZWN0RXhwcmVzc2lvbiIsIm1ha2VGdW5jdGlvbiIsImF0dHJzIiwiZXZlbnRzIiwic3RyaW5nIiwiYXJyb3dGdW5jdGlvbiIsInNldEF0dHIiLCJjb25zb2xlIiwiVHlwZSIsIm1ha2VTdWJzY3JpYmUiLCJtZW1iZXJFeHByZXNzaW9uIiwiY29udGVudCIsImFycmF5RXhwcmVzc2lvbiIsImFzc2lnbm1lbnRFeHByZXNzaW9uIiwiVE1QX0lERU5USUZJRVIiLCJmbiIsImZ1bmN0aW9uRXhwcmVzc2lvbiIsInN0YXRlZnVsQ291bnRlciIsImlkZW50aWZpZXJzQ291bnRlciIsInNob3VsZFdyYXAiLCJleHByIiwic3RhdGVtZW50IiwiY29uZGl0aW9uIiwibWF0Y2giLCJrZXkiLCJmaW5kS2V5IiwiY2hpbGQiLCJFeHByZXNzaW9uIiwicGFyYW1zIiwibG9vcCIsInBhcnNlRWFjaENvbmRpdGlvbiIsImxhc3RDaGlsZCIsImdldEZpcnN0VGVtcGxhdGVOb2RlIiwicmV0dXJuUG9pbnRlciIsImNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIml0ZW1QYXJhbXMiLCJkZXBlbmRlbmNpZXMiLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsIm5vZGUiLCJsYXN0Tm9kZSIsIml0ZW0iLCJpdGVtS2V5IiwibGFzdEh5ZHJhdGVkTm9kZSIsImh5ZHJhdGVkTm9kZXMiLCJzdGFydE5vZGVTZWFyY2giLCJuIiwiY2hpbGROb2RlcyIsImJpbmROb2RlIiwidW5zdWJzY3JpYmUiLCJBcnJheSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJpc0F0dHIiLCJpc0RvbUF0dHIiLCJpc1Jvb3RBdHRyIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIlRleHQiLCJvbmNsb3NldGFnIiwicmVtb3ZlZCIsImRlY29kZUVudGl0aWVzIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJydWxlcyIsImlzVGVtcGxhdGUiLCJoYXNBbG9uZVRlbXBsYXRlIiwiYWxvbmUiLCJza2lwSW5pdCIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsImxpc3QiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwidmFsIiwiYXR0ckFyZ1RvT2JqIiwiYXR0ckFyZ1RvU3RyaW5nIiwibGFzdENsYXNzQWRvcHRlZCIsInRtcCIsInRvU2V0Iiwic3R5bGVzIiwibWFrZUNsYXNzIiwibWFrZVN0eWxlcyIsIiRzbG90cyIsImNhbGxiYWNrIiwiY3VycmVudENvbmRpdGlvbkluZGV4IiwicmVuZGVyRm4iLCJjdXJyZW50Iiwic3RhcnQiLCJhcnIiLCJsYXN0Q29uZGl0aW9uIiwiZ2V0Rmlyc3RDb25kaXRpb24iLCJmaXJzdExvYWQiLCJyZXR1cm5Ob2RlIiwiaGFzQ29uZGl0aW9uUmVuZGVyZWQiLCJzaG91bGRSZW5kZXIiLCJnZXRJbml0aWF0ZWROb2RlcyIsImlzU2FtZUNvbmRpdGlvbiIsImNsb25lIiwiJHByb3BzIiwidGVzdCIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJfdHBsJDIiLCJfdHBsJDMiLCJ0aW1lciIsIm1ha2VDb21wb25lbnQiLCJ0ZXh0MSIsInRleHQyIiwidGV4dDMiLCJpdGVtcyIsImZyb20iLCJfIiwiYyIsInRpbWUiLCJtZXRob2QxIiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJzb21lIiwiX2VsJDMiLCJfZWwkMTYiLCJpdGVtMSIsImtleTEiLCJfa2V5RXhwciQiLCJfZWwkNCIsIl9lbCQ1IiwiX2VsJDE1IiwiX2VsJDYiLCJfZWwkNyIsInNldEF0dHJpYnV0ZSIsImV2ZW50IiwiX2VsJDgiLCJub2RlVmFsdWUiLCJfZWwkOSIsIm5leHRTaWJsaW5nIiwiYWxlcnQiLCJfZWwkMTAiLCJfZWwkMTEiLCJfZWwkMTIiLCJfZWwkMTMiLCJfZWwkMTQiLCJfZWwkMTciLCJfZWwkMTgiLCJsYXlvdXQiLCJnZXRFbGVtZW50QnlJZCIsImxvZyIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsImdldHQiLCJ0aW1lcyIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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c1MsR0FBRyxHQUFHRCxLQUFLLENBQUNyUyxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT3FTLEtBQUssQ0FBQ3JTLElBQUQsQ0FBWjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQgfSBmcm9tICcuL3RlbXBsYXRlcydcbmltcG9ydCB7IHN0YXRlbWVudCB9IGZyb20gJy4vc3RhdGVtZW50J1xuXG5leHBvcnQgeyBhdHRycywgZXZlbnRzLCBzbG90LCBnZXROb2RlLCBwYXJzZUNvbnRleHQsIHN0YXRlbWVudCB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodmFsdWUudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiB2YWx1ZS5jYWxsZWUubmFtZSA9PT0gJyRvJykge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YS52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRkYXRhLm1ldGhvZHMucHVzaChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRhdGE7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVuY2llcyhhc3QsIG9ic2VydmFibGVzID0gW10pXG57XG5cdGxldCBkZXBzID0ge307XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRlcHM7XG59IiwiaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFNsb3QgZnJvbSAnLi9TbG90JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBDb21wb25lbnQsIFNsb3QgfSIsImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgYW5hbHlzZSB9IGZyb20gJ0BoYXdhL2FuYWx5c2VyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cdC8vIGNvbnNvbGUud2Fybihjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJyb3dGdW5jdGlvbih7IHZhbHVlID0gW10sIGFyZ3MgPSBbXSB9LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblx0XG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN0cmluZyk7XG5cblx0Ly8gY29uc29sZS5sb2cocmVzdWx0KVxuXHRyZXR1cm4ge1xuXHRcdHZhbHVlOiBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oXG5cdFx0XHRhcmdzLm1hcChpdGVtID0+IGlkKGl0ZW0pKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0LmNvbnRlbnQpXG5cdFx0XHRdKSxcblx0XHQpLFxuXHRcdGRlcHM6IHJlc3VsdC5kZXBzLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUZ1bmN0aW9uIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uZXZlbnRzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5ldmVudHNbbmFtZV0sIG1ha2VGdW5jdGlvbik7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUV2ZW50cyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBleHByZXNzaW9uKHZhbHVlLCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0Jykge1xuXHRcdHZhbHVlID0ge1xuXHRcdFx0aXNFeHByZXNzaW9uOiB0cnVlLFxuXHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgdmFsdWUsIG1ha2VDb21wdXRlZCk7XG5cblx0Ly8gY29uc29sZS53YXJuKHJlc3VsdCk7XG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcbmltcG9ydCB7IGFycm93RnVuY3Rpb24gfSBmcm9tICcuL2Fycm93RnVuY3Rpb24nO1xuaW1wb3J0IHsgc2V0QXR0ciB9IGZyb20gJy4vc2V0QXR0cic7XG5cbi8vIGV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHByb3BzIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhjb250ZXh0KVxue1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJzOiBhdHRycy5iaW5kKGNvbnRleHQpLFxuXHRcdGV2ZW50czogZXZlbnRzLmJpbmQoY29udGV4dCksXG5cdFx0cHJvcHM6IHByb3BzLmJpbmQoY29udGV4dCksXG5cdFx0c3RyaW5nOiBzdHJpbmcuYmluZChjb250ZXh0KSxcblx0XHRleHByZXNzaW9uOiBleHByZXNzaW9uLmJpbmQoY29udGV4dCksXG5cdFx0YXJyb3dGdW5jdGlvbjogYXJyb3dGdW5jdGlvbi5iaW5kKGNvbnRleHQpLFxuXHRcdHNldEF0dHI6IHNldEF0dHIuYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdWJzY3JpYmUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldEF0dHIoeyBuYW1lID0gJ2tleScsIFR5cGUgfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKFR5cGUub3B0aW9uW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgdmFsdWUgPSBUeXBlLm9wdGlvbltuYW1lXTtcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3Vic2NyaWJlKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3NldEF0dHJpYnV0ZScpXG5cdFx0XHQpLFxuXHRcdFx0W1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGBkYXRhLSR7bmFtZX1gKSxcblx0XHRcdFx0cmVzdWx0LmV4cHJcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0aWYocmVzdWx0LnNob3VsZFdyYXApIHtcblx0XHRleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHJlc3VsdC5kZXBzLFxuXHRcdFx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb25cblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRpZCgnIXJlbmRlcicpXG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXHRcblx0Ly8gY29uc29sZS5sb2coZXhwcmVzc2lvbik7XG5cdC8vIHJldHVybiByZXN1bHRcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGlzRXhwcmVzc2lvbiA9IGVudGl0eS52YWx1ZS5tYXRjaCgvXFwkXFx7LipcXH0vZykgIT09IG51bGw7XG5cblx0aWYoIWlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCB7IGRlcHMsIGNvbnRlbnQgfSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHtcblx0XHRpc0V4cHJlc3Npb24sXG5cdFx0dmFsdWU6IGBcXGAkeyBlbnRpdHkudmFsdWUgfVxcYGAsXG5cdH0sIG1ha2VTdHJpbmcpO1xuXG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRcdG5ldyBhc3NpZ25tZW50RXhwcmVzc2lvbihcblx0XHRcdFx0XHQnPScsXG5cdFx0XHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24ocG9pbnQsIGlkKCdub2RlVmFsdWUnKSksXG5cdFx0XHRcdFx0Y29udGVudFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0XSlcblx0KTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFtkZXBzLCBib2R5LCBpZCgnIXJlbmRlcicpXSxcblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRibG9ja1N0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuY29uc3QgVE1QX0lERU5USUZJRVIgPSAnX3RtcCRhc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZhbHVlKGNvbnRleHQsIHZhbHVlLCBmbilcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYCR7VE1QX0lERU5USUZJRVJ9ID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0Ly8gaWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdC8vIFx0cmV0dXJuO1xuXHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhjb250ZXh0LCBpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59XG5cblxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdC8vIGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdC8vIFx0cmV0dXJuIHJlc3VsdDtcblx0Ly8gfVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3VsZFdyYXAsXG5cdFx0ZGVwcyxcblx0XHRleHByOiByZXN1bHQsXG5cdH1cblx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldENvbXBvbmVudCcpLCBbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRcdFx0bCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFYWNoQ29uZGl0aW9uKGVudGl0eSlcbntcblx0bGV0IHN0YXRlbWVudCA9IGVudGl0eS52YWx1ZS5tYXRjaEFsbCgvXFwoKD88aXRlbT5bQS16MC05XSspXFxzPyhcXCxcXHM/KD88a2V5PltBLXowLTldKylcXHM/KT9cXClcXHM/aW5cXHMoPzxjb25kaXRpb24+LiopL2cpO1xuXG5cdGxldCBjb25kaXRpb24gPSBudWxsO1xuXHRsZXQgYXJncyA9IFtdO1xuXG5cdGZvcihsZXQgbWF0Y2ggb2Ygc3RhdGVtZW50KSB7XG5cblx0XHRpZihtYXRjaC5ncm91cHMuaXRlbSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5pdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaXRlbScpO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRrZXk6IGZpbmRLZXkoZW50aXR5KSxcblx0XHRjb25kaXRpb24sXG5cdFx0YXJncyxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEtleShlbnRpdHkpXG57XG5cdGxldCBrZXkgPSBudWxsO1xuXG5cdGZvcihsZXQgY2hpbGQgb2YgZW50aXR5LmNoaWxkcmVuKVxuXHR7XG5cdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBFeHByZXNzaW9uKSB7XG5cdFx0XHRrZXkgPSBmaW5kS2V5KGNoaWxkKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZihjaGlsZC5vcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGtleSA9IGNoaWxkLm9wdGlvbi5rZXk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihrZXkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBpcyByZXF1aXJlZCBmb3IgRWFjaCBsb29wIChmb3IgaHlkcmF0aW9uKScpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdC8qKlxuXHQgKiBMb29wIHByZXBhcmF0aW9uXG5cdCAqIDEuIEtleSBnZW5lcmF0aW9uIGZ1bmN0aW9uXG5cdCAqIDIuIENvbmRpdGlvbiBleHByZXNzaW9uXG5cdCAqIDMuIEl0ZW0gYW5kIGtleSBpZGludGlmaWVyc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGxvb3AgPSBwYXJzZUVhY2hDb25kaXRpb24odGhpcyk7XG5cblx0bGV0IHZhbHVlID0gb3B0aW9ucy5keW5hbWljLmV4cHJlc3Npb24obG9vcC5jb25kaXRpb24sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdGxldCBrZXkgPSBvcHRpb25zLmR5bmFtaWMuYXJyb3dGdW5jdGlvbih7XG5cdFx0dmFsdWU6IGxvb3Aua2V5LFxuXHRcdGFyZ3M6IGxvb3AuYXJnc1xuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpLnZhbHVlO1xuXG5cdHBhcmFtcy5wdXNoKHZhbHVlKTtcblx0cGFyYW1zLnB1c2goa2V5KTtcblxuXHQvKipcblx0ICogR2V0IGxvb3AgdGVtcGxhdGVcblx0ICovXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdFx0WyBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyksIGlkKCdfa2V5RXhwciQnKSBdLmNvbmNhdChsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KSxcblx0XHQpXG5cdCk7XG5cblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS5tYWtlVmFsdWUpO1xuXHQvLyB9XHRcblx0XG5cdG9wdGlvbnMuZHluYW1pYy5zZXRBdHRyKHtcblx0XHRUeXBlOiB0aGlzLFxuXHRcdG5hbWU6ICdrZXknLFxuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGFycmF5RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGF0ZW1lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKVxuXG5cdGxldCBpdGVtUGFyYW1zID0gW107XG5cdGxldCBkZXBlbmRlbmNpZXMgPSBbXTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJsb2NrID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRsZXQgYm9keSA9IFtdO1xuXG5cdFx0dGhpcy5jaGlsZHJlbltpXS5oYW5kbGUoYm9keSwge1xuXHRcdFx0bGFzdENvbnRleHRWYXJpYWJsZUlkOiBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHQvLyBXcmFwIHN0YXRlbWVudCBhcnJvdyBmdW5jdGlvbiBhbmQgZ2V0IGRlcHMgb2YgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGdsb2JhbCBmb3Igd2hvbGUgZnVuY3Rpb25cblx0XHRsZXQgeyB2YWx1ZSwgZGVwcyB9ID0gb3B0aW9ucy5keW5hbWljLmFycm93RnVuY3Rpb24oe1xuXHRcdFx0dmFsdWU6IGJsb2NrLnZhbHVlLFxuXHRcdH0sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0XHRkZXBlbmRlbmNpZXMgPSBbXG5cdFx0XHQuLi5kZXBlbmRlbmNpZXMsXG5cdFx0XHQuLi5kZXBzXG5cdFx0XTtcblx0XHRcblx0XHRpdGVtUGFyYW1zLnB1c2godmFsdWUpO1xuXHRcdGl0ZW1QYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJyksXG5cdFx0XHRcdGlkKCdyZW5kZXInKVxuXHRcdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHRcdCk7XG5cdH1cblxuXHRwYXJhbXMucHVzaChcblx0XHRhcnJheUV4cHJlc3Npb24oZGVwZW5kZW5jaWVzLm1hcChpdGVtID0+IGlkKGl0ZW0pKSlcblx0KTtcblxuXHRwYXJhbXMgPSBwYXJhbXMuY29uY2F0KGl0ZW1QYXJhbXMpO1xuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zdGF0ZW1lbnQkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dChjb250ZXh0LCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwb2ludGVyID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24obCwgaWQoJ2ZpcnN0Q2hpbGQnKSksXG5cdFx0XHRsXG5cdFx0KVxuXHR9KTtcblxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCB0eXBlKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQodHlwZSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBjdXN0b21EZWZpbmVyID0gZmFsc2UpXG57XG5cdGlmKGVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRjdXN0b21EZWZpbmVyID0gKCkgPT4ge307XG5cdH1cblx0Ly8gY29uc29sZS5sb2coZW50aXR5LCBlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpKTtcblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblx0fVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXR5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRIYW5kbGUoZW50aXR5LmNoaWxkcmVuW2ldLCBjb250ZXh0LCBvcHRpb25zLCBpLCBjdXN0b21EZWZpbmVyKTtcblx0fVxuXG5cdGxldCBsYXN0Q2hpbGQgPSBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCk7XG5cblx0aWYoIWVudGl0eS5oYXNBbG9uZVRlbXBsYXRlKCkgJiYgIWVudGl0eS5pc1RlbXBsYXRlKCkpIHtcblx0XHRvcHRpb25zLnJlbW92ZUNvbnRleHQoKTtcblx0fVxuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBkaWZmKHBhcmVudCwgYSwgYiwga2V5RXhwciwgZ2V0LCBiZWZvcmUpXG57XG5cdGNvbnN0IGFJZHggPSBuZXcgTWFwKCk7XG5cdGNvbnN0IGJJZHggPSBuZXcgTWFwKCk7XG5cdGxldCBpO1xuXHRsZXQgajtcblxuXHQvLyBDcmVhdGUgYSBtYXBwaW5nIGZyb20ga2V5cyB0byB0aGVpciBwb3NpdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0Zm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQga2V5ID0ga2V5RXhwcihhW2ldLCBpKTtcblx0XHRhSWR4LnNldChrZXksIGkpO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBiLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYltpXSwgaSk7XG5cdFx0YklkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGFJZHgsIGJJZHgpO1xuXG5cdGZvciAoaSA9IGogPSAwOyBpICE9PSBhLmxlbmd0aCB8fCBqICE9PSBiLmxlbmd0aDspIHtcblx0XHR2YXIgYUVsbSA9IGFbaV0sXG5cdFx0XHRiRWxtID0gYltqXTtcblxuXHRcdGlmIChhRWxtID09PSBudWxsKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgZWxlbWVudCB0aGF0IGhhcyBiZWVuIG1vdmVkIHRvIGVhcmxpZXIgaW4gdGhlIGxpc3Rcblx0XHRcdGkrKztcblx0XHR9IGVsc2UgaWYgKGIubGVuZ3RoIDw9IGopIHtcblx0XHRcdC8vIE5vIG1vcmUgZWxlbWVudHMgaW4gbmV3LCB0aGlzIGlzIGEgZGVsZXRlXG5cdFx0XHRwYXJlbnQucmVtb3ZlQ2hpbGQoZ2V0KGFbaV0sIGksIC0xKSk7XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChhLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG9sZCwgdGhpcyBpcyBhbiBhZGRpdGlvblxuXHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShnZXQoYkVsbSwgaiwgMSksIGdldChhW2ldLCBpLCAwKSB8fCBiZWZvcmUpO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSBpZiAoYUVsbSA9PT0gYkVsbSkge1xuXHRcdFx0Ly8gTm8gZGlmZmVyZW5jZSwgd2UgbW92ZSBvblxuXHRcdFx0aSsrO1xuXHRcdFx0aisrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgY3VycmVudCBlbGVtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG5ldyBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhpcyBlbGVtZW50IHNob3VsZCBiZVxuXHRcdFx0dmFyIGN1ckVsbUluTmV3ID0gYklkeC5nZXQoYUVsbSk7XG5cdFx0XHQvLyBMb29rIGZvciB0aGUgdGhlIHdhbnRlZCBlbG1lbnQgYXQgdGhpcyBsb2NhdGlvbiBpbiB0aGUgb2xkIGxpc3Rcblx0XHRcdC8vIFRoaXMgZ2l2ZXMgdXMgdGhlIGlkeCBvZiB3aGVyZSB0aGUgd2FudGVkIGVsZW1lbnQgaXMgbm93XG5cdFx0XHR2YXIgd2FudGVkRWxtSW5PbGQgPSBhSWR4LmdldChiRWxtKTtcblx0XHRcdGlmIChjdXJFbG1Jbk5ldyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIEN1cnJlbnQgZWxlbWVudCBpcyBub3QgaW4gbmV3IGxpc3QsIGl0IGhhcyBiZWVuIHJlbW92ZWRcblx0XHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2UgaWYgKHdhbnRlZEVsbUluT2xkID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0Ly8gTmV3IGVsZW1lbnQgaXMgbm90IGluIG9sZCBsaXN0LCBpdCBoYXMgYmVlbiBhZGRlZFxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChiRWxtLCBqLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGorKztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEVsZW1lbnQgaXMgaW4gYm90aCBsaXN0cywgaXQgaGFzIGJlZW4gbW92ZWRcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ21vdmUnLCBhW2ldLCAnZnJvbScsIHdhbnRlZEVsbUluT2xkLCAndG8nLCBpKVxuXHRcdFx0XHRwYXJlbnQuaW5zZXJ0QmVmb3JlKFxuXHRcdFx0XHRcdGdldChhW3dhbnRlZEVsbUluT2xkXSwgd2FudGVkRWxtSW5PbGQsIDEpLFxuXHRcdFx0XHRcdGdldChhW2ldLCAwKSB8fCBiZWZvcmVcblx0XHRcdFx0KTtcblx0XHRcdFx0YVt3YW50ZWRFbG1Jbk9sZF0gPSBudWxsO1xuXHRcdFx0XHRpZiAod2FudGVkRWxtSW5PbGQgPiBpICsgMSkgaSsrO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGI7XG59XG4iLCJjb25zdCBIVE1MVGFncyA9IFtcblx0XCIhZG9jdHlwZVwiLCBcImFcIiwgXCJhYmJyXCIsIFwiYWNyb255bVwiLCBcImFkZHJlc3NcIiwgXCJhcHBsZXRcIiwgXCJhcmVhXCIsIFwiYXJ0aWNsZVwiLCBcImFzaWRlXCIsIFwiYXVkaW9cIixcblx0XCJiXCIsIFwiYmFzZVwiLCBcImJhc2Vmb250XCIsIFwiYmJcIiwgXCJiZG9cIiwgXCJiaWdcIiwgXCJibG9ja3F1b3RlXCIsIFwiYm9keVwiLCBcImJyXCIsIFwiYnV0dG9uXCIsIFwiY2FudmFzXCIsXG5cdFwiY2FwdGlvblwiLCBcImNlbnRlclwiLCBcImNpdGVcIiwgXCJjb2RlXCIsIFwiY29sXCIsIFwiY29sZ3JvdXBcIiwgXCJjb21tYW5kXCIsIFwiZGF0YWdyaWRcIiwgXCJkYXRhbGlzdFwiLCBcImRkXCIsXG5cdFwiZGVsXCIsIFwiZGV0YWlsc1wiLCBcImRmblwiLCBcImRpYWxvZ1wiLCBcImRpclwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJlbVwiLCBcImVtYmVkXCIsIFwiZXZlbnRzb3VyY2VcIiwgXCJmaWVsZHNldFwiLFxuXHRcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb250XCIsIFwiZm9vdGVyXCIsIFwiZm9ybVwiLCBcImZyYW1lXCIsIFwiZnJhbWVzZXRcIiwgXCJoMT4gdG8gPGg2XCIsIFwiaGVhZFwiLCBcImhlYWRlclwiLFxuXHRcImhncm91cFwiLCBcImhyXCIsIFwiaHRtbFwiLCBcImlcIiwgXCJpZnJhbWVcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImlzaW5kZXhcIiwgXCJrYmRcIiwgXCJrZXlnZW5cIiwgXCJsYWJlbFwiLFxuXHRcImxlZ2VuZFwiLCBcImxpXCIsIFwibGlua1wiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtZW51XCIsIFwibWV0YVwiLCBcIm1ldGVyXCIsIFwibmF2XCIsIFwibm9mcmFtZXNcIiwgXCJub3NjcmlwdFwiLFxuXHRcIm9iamVjdFwiLCBcIm9sXCIsIFwib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJvdXRwdXRcIiwgXCJwXCIsIFwicGFyYW1cIiwgXCJwcmVcIiwgXCJwcm9ncmVzc1wiLCBcInFcIiwgXCJycFwiLCBcInJ0XCIsXG5cdFwicnVieVwiLCBcInNcIiwgXCJzYW1wXCIsIFwic2NyaXB0XCIsIFwic2VjdGlvblwiLCBcInNlbGVjdFwiLCBcInNtYWxsXCIsIFwic291cmNlXCIsIFwic3BhblwiLCBcInN0cmlrZVwiLCBcInN0cm9uZ1wiLFxuXHRcInN0eWxlXCIsIFwic3ViXCIsIFwic3VwXCIsIFwidGFibGVcIiwgXCJ0Ym9keVwiLCBcInRkXCIsIFwidGV4dGFyZWFcIiwgXCJ0Zm9vdFwiLCBcInRoXCIsIFwidGhlYWRcIiwgXCJ0aW1lXCIsIFwidGl0bGVcIixcblx0XCJ0clwiLCBcInRyYWNrXCIsIFwidHRcIiwgXCJ1XCIsIFwidWxcIiwgXCJ2YXJcIiwgXCJ2aWRlb1wiLCBcIndiclwiLCBcInRlbXBsYXRlXCJcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudChuYW1lKVxue1xuXHRyZXR1cm4gIUhUTUxUYWdzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpXG57XG5cdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdG1hcFtsaXN0W2ldXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9IDpcblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG4iLCJpbXBvcnQgeyB3YXRjaCB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5hdHRyQXJnVG9PYmpcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb09iaihhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0ge307XG5cblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gT2JqZWN0LmFzc2lnbihyZXN1bHQsIGF0dHJBcmdUb09iaihhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0cmVzdWx0ID0gYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9TdHJpbmcoYXJncylcbntcblx0bGV0IHJlc3VsdCA9ICcnO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgKz0gYXR0ckFyZ1RvU3RyaW5nKGFyZ3NbaV0pO1xuXHRcdH1cblx0fSBlbHNlIGlmKHR5cGVvZiBhcmdzID09PSAnb2JqZWN0Jykge1xuXHRcdGZvcihsZXQga2V5IGluIGFyZ3MpIHtcblx0XHRcdGlmKGFyZ3Nba2V5XSkge1xuXHRcdFx0XHRyZXN1bHQgKz0gJyAnICsga2V5O1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgKz0gJyAnICsgYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDbGFzcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHRsZXQgbGFzdENsYXNzQWRvcHRlZCA9IFtdO1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgdG1wID0gbm9kZS5jbGFzc0xpc3Q7XG5cblx0XHRsZXQgdG9TZXQgPSBhdHRyQXJnVG9TdHJpbmcodikuc3Vic3RyaW5nKDEpLnNwbGl0KCcgJyk7XG5cdFx0bGV0IHRvUmVtb3ZlID0gbGFzdENsYXNzQWRvcHRlZC5maWx0ZXIoeCA9PiAhdG9TZXQuaW5jbHVkZXMoeCkpO1xuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvU2V0KSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5hZGQobmFtZSk7XG5cdFx0fVxuXG5cdFx0Zm9yKGxldCBuYW1lIG9mIHRvUmVtb3ZlKSB7XG5cdFx0XHRub2RlLmNsYXNzTGlzdC5yZW1vdmUobmFtZSk7XG5cdFx0fVxuXHRcdC8vIGNvbnNvbGUubG9nKG5vZGUpO1xuXG5cdFx0bGFzdENsYXNzQWRvcHRlZCA9IHRvU2V0O1xuXHR9LCByZW5kZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0eWxlcyhub2RlLCB2YWx1ZSwgcmVuZGVyKVxue1xuXHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRsZXQgc3R5bGVzID0gYXR0ckFyZ1RvT2JqKHYpO1xuXHRcdGZvcihsZXQgbmFtZSBpbiBzdHlsZXMpIHtcblx0XHRcdG5vZGUuc3R5bGVbbmFtZV0gPSBzdHlsZXNbbmFtZV07XG5cdFx0fVxuXHR9LCByZW5kZXIpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhub2RlLCByZW5kZXIsIGF0dHJzKVxue1xuXHRmb3IobGV0IG5hbWUgaW4gYXR0cnMpXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBhdHRyc1tuYW1lXTtcblx0XHRpZihuYW1lID09PSAnY2xhc3MnKSB7XG5cdFx0XHRtYWtlQ2xhc3Mobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzdHlsZScpIHtcblx0XHRcdG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdFx0XHRub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2KTtcblx0XHRcdH0sIHJlbmRlcik7XG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IHsgcHJlcGFyZSB9IGZyb20gJy4vcHJlcGFyZSc7XG5pbXBvcnQgeyBpc0NvbXBvbmVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgUGFyc2VyIGFzIEhUTUxQYXJzZXIgfSBmcm9tICdodG1scGFyc2VyMic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrcyhibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0bGV0IG1hdGNoZXMgPSByZWdleHAuZXhlYyhodG1sKTtcblx0XHRpZihtYXRjaGVzKSB7XG5cdFx0XHRibG9ja3Nba2V5XSA9IG1hdGNoZXNbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGJsb2Nrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGh0bWwpXG57XG5cdC8vIGdldCBhZGRpdGlvbmFsIGJsb2NrcyBlLmcuIHNjcmlwdCwgc3R5bGUsIGRvY1xuXHRsZXQgYmxvY2tzID0gcGFyc2VCbG9ja3Moe1xuXHRcdHNjcmlwdDogbnVsbCxcblx0XHRzdHlsZTogbnVsbCxcblx0fSwgaHRtbCk7XG5cblx0Ly8gY2xlYW4gdXAgaHRtbCBhbmQgcmVwbGFjZSBleHByZXNzaW9uIHdpdGggdGFnLWV4cHJlc3Npb25cblx0aHRtbCA9IHByZXBhcmUoYmxvY2tzLCBodG1sKTtcblxuXHQvLyBQYXJzZSBUQUdzXG5cdGxldCBzdGFjayA9IFtcblx0XHRuZXcgRXhwcmVzc2lvbih7IHR5cGU6ICdwcm9ncmFtJyB9KVxuXHRdO1xuXG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNCbG9ja1RhZyhuYW1lKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrLmxlbmd0aCA9PT0gMSAmJiBbJ3NjcmlwdCcsICdzdHlsZSddLmluY2x1ZGVzKG5hbWUpO1xuXHR9XG5cblx0Y29uc3QgcGFyc2UgPSBuZXcgSFRNTFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cdFx0XHRsZXQgZW50aXR5O1xuXG5cdFx0XHRpZihuYW1lID09PSAnZXhwcicpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IEV4cHJlc3Npb24oYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzbG90Jykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgU2xvdChhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzQ29tcG9uZW50KG5hbWUpKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBDb21wb25lbnQobmFtZSwgYXR0cnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IE5vZGUobmFtZSwgYXR0cnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0cGFyZW50LmFkZENoaWxkKGVudGl0eSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2goZW50aXR5KTtcblx0XHR9LFxuXG5cdFx0b250ZXh0KHRleHQpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblxuXHRcdFx0dGV4dCA9IHRleHQudHJpbSgpO1xuXG5cdFx0XHRpZih0ZXh0ICE9PSAnJyAmJiBwYXJlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSBuZXcgVGV4dCh0ZXh0KTtcblx0XHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH0sXG5cblx0XHRvbmNsb3NldGFnKG5hbWUpXG5cdFx0e1xuXHRcdFx0bGV0IHJlbW92ZWQgPSBzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0YmxvY2tzLnRlbXBsYXRlID0gc3RhY2tbMF07XG5cdC8vIGNvbnNvbGUubG9nKGJsb2Nrcy50ZW1wbGF0ZS5jaGlsZHJlblswXSlcblx0cmV0dXJuIGJsb2Nrcztcbn1cbiIsImZ1bmN0aW9uIHByZXBhcmVIVE1MKGh0bWwpXG57XG5cdHJldHVybiBodG1sLnJlcGxhY2UoL1xcdC9nLCAnICcpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuXHR9XG5cblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRlYWNoL2csICc8L2V4cHI+JylcblxuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IobmFtZSwgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnY29tcG9uZW50Jztcblx0fVxuXHRcblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdFxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyBuYW1lID0gJ2RlZmF1bHQnLCB0YWcgPSAnc3BhbicgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XHRcblx0Ly8gbWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdC8vIHtcblx0Ly8gXHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblxuXHQvLyBcdHRlbXBsYXRlICs9ICc+JztcblxuXHQvLyBcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHQvLyBcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0Ly8gXHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0Ly8gXHRcdHJldHVybiAnPCEtLS0tPic7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYoIXRoaXMudGFnKSB7XG5cdC8vIFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gdGVtcGxhdGU7XG5cdC8vIH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHR0aGlzLnR5cGUgPSAndGV4dCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufSIsImltcG9ydCB7IHJ1bGVzIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdG1hcChjYWxsYmFjaylcblx0e1xuXHRcdGlmKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy50eXBlICE9PSAnc3RhdGVtZW50Jykge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0Y2hpbGQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpXG5cdHtcblx0XHRyZXR1cm4gcnVsZXNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9XG5cblx0aXNUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gKHRoaXMudHlwZSA9PT0gJ25vZGUnICYmIHRoaXMudGFnID09PSAndGVtcGxhdGUnKTtcblx0fVxuXG5cdGhhc0Fsb25lVGVtcGxhdGUoKVxuXHR7XG5cdFx0bGV0IGFsb25lID0gdHJ1ZTtcblxuXHRcdGZvcihsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuXHRcdFx0aWYoIWNoaWxkLmlzVGVtcGxhdGUoKSkge1xuXHRcdFx0XHRhbG9uZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhbG9uZTtcblx0fVxuXG5cdHNraXBJbml0KClcblx0e1xuXHRcdHJldHVybiBmYWxzZTsvL3RoaXMudHlwZSA9PT0gJ3Byb2dyYW0nIHx8IHRoaXMudHlwZSA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblx0XHRcblx0XHRsZXQgYXR0cnMgPSB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uLnN0YXRpY0F0dHJzIDoge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBhdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcgfHwgdGhpcy5pc1RlbXBsYXRlKCkpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCByZW5kZXIsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIGNhbGxiYWNrKSB7XG5cdGlmICgkc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdG5vZGUuaW5uZXJIVE1MID0gJHNsb3RzW25hbWVdO1xuXG5cdHJldHVybiBub2RlO1xufSIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3RDb25kaXRpb24oYXJncylcbntcblx0bGV0IGN1cnJlbnRDb25kaXRpb25JbmRleCA9IG51bGw7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0bGV0IHJlbmRlckZuID0gYXJnc1tpICsgMV07XG5cdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGN1cnJlbnRDb25kaXRpb25JbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEluaXRpYXRlZE5vZGVzKHN0YXJ0LCBlbmQpXG57XG5cdGxldCBub2RlcyA9IFtdO1xuXG5cdGxldCBjdXJyZW50ID0gc3RhcnQ7XG5cdGRvIHtcblx0XHRsZXQgdG1wID0gY3VycmVudC5uZXh0U2libGluZztcblx0XHRub2Rlcy5wdXNoKGN1cnJlbnQpO1xuXHRcdGN1cnJlbnQgPSB0bXA7XG5cdH0gd2hpbGUoY3VycmVudCAhPT0gZW5kICYmIGN1cnJlbnQgIT09IG51bGwpO1xuXG5cdG5vZGVzLnB1c2goZW5kKTtcblxuXHRpZihub2Rlcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gbm9kZXNbMF07XG5cdH1cblxuXHRyZXR1cm4gbm9kZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmQoc3RhcnQsIG5vZGUpXG57XG5cdHN0YXJ0LmFmdGVyKG5vZGUpO1xuXHQvLyBjb25zb2xlLmxvZygnYXBwZW5kJywgc3RhcnQsIG5vZGUpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9uZShub2RlKVxue1xuXHRpZihub2RlLm5vZGVUeXBlID09PSAxMSkge1xuXHRcdGxldCBhcnIgPSBbXTsvL2RvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblx0XHRcblx0XHRmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XG5cdFx0XHRhcnIucHVzaChjaGlsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFycjtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50KG5vZGUsIHJlbmRlciwgZGVwcywgLi4uYXJncylcbntcdFxuXHQvLyBsZXQgc3RhcnRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRsZXQgZW5kTWFyayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0XG5cdC8vIG5vZGUuYmVmb3JlKHN0YXJ0TWFyayk7XG5cdFxuXG5cdGxldCBsYXN0Q29uZGl0aW9uID0gcmVuZGVyID8gbnVsbCA6IGdldEZpcnN0Q29uZGl0aW9uKGFyZ3MpO1xuXG5cdGlmKHJlbmRlciAmJiBsYXN0Q29uZGl0aW9uID09PSBudWxsKSB7XG5cdFx0bm9kZS5hZnRlcihlbmRNYXJrKTtcblx0fVxuXG5cdGxldCBmaXJzdExvYWQgPSB0cnVlO1xuXG5cdHN1YnNjcmliZShkZXBzLCAoKSA9PiB7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCcnKTtcblx0XHRcblx0XHRsZXQgaGFzQ29uZGl0aW9uUmVuZGVyZWQgPSBmYWxzZTtcblx0XHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0bGV0IGNvbmRpdGlvbiA9IGFyZ3NbaV07XG5cdFx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRcdGlmIChjb25kaXRpb24oKSkge1xuXHRcdFx0XHRsZXQgc2hvdWxkUmVuZGVyID0gbGFzdENvbmRpdGlvbiAhPT0gaTtcblx0XHRcdFx0cmV0dXJuTm9kZSA9IHJlbmRlckZuKG5vZGUsIHNob3VsZFJlbmRlcik7XG5cblx0XHRcdFx0Y3VycmVudENvbmRpdGlvbkluZGV4ID0gaTtcblxuXHRcdFx0XHRpZihzaG91bGRSZW5kZXIpIHtcblx0XHRcdFx0XHRoYXNDb25kaXRpb25SZW5kZXJlZCA9IHRydWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZighcmVuZGVyICYmIGZpcnN0TG9hZCkge1xuXHRcdFx0cmV0dXJuTm9kZS5hZnRlcihlbmRNYXJrKTtcblx0XHRcdG5vZGUgPSBnZXRJbml0aWF0ZWROb2Rlcyhub2RlLCByZXR1cm5Ob2RlKTtcblx0XHR9XG5cblx0XHRmaXJzdExvYWQgPSBmYWxzZTtcblxuXHRcdGxldCBpc1NhbWVDb25kaXRpb24gPSBjdXJyZW50Q29uZGl0aW9uSW5kZXggID09PSBsYXN0Q29uZGl0aW9uO1xuXG5cdFx0bGFzdENvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleDtcblxuXHRcdC8vIElmIHNhbWUgY29uZGl0aW9uIHRoYXQgaXQgd2FzIGh5ZHJhdGVkIGFuZCB3ZSBkb250IG5lZWQgdG8gcmVwbGFjZSBub2Rlc1xuXHRcdGlmKGlzU2FtZUNvbmRpdGlvbikge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGNvbnNvbGUud2FybignW3N0YXRlbWVudF0nLCBub2RlLCByZXR1cm5Ob2RlKTtcblxuXHRcdC8vIGNsZWFudXAoc3RhcnRNYXJrLCBlbmRNYXJrKTtcblx0XHQvLyBhcHBlbmQoc3RhcnRNYXJrLCByZXR1cm5Ob2RlKTtcblxuXHRcdFxuXHRcdGlmKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRsZXQgY2hpbGQgPSBub2RlW2ldO1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhjaGlsZCk7XG5cdFx0XHRcdGlmKGkgPT09IDApIHtcblx0XHRcdFx0XHRjaGlsZC5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjaGlsZC5yZW1vdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRub2RlID0gcmV0dXJuTm9kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHRtcCA9IGNsb25lKHJldHVybk5vZGUpXG5cdFx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0bm9kZSA9IHRtcDtcblx0XHRcdC8vIGNvbnNvbGUubG9nKHJldHVybk5vZGUsIHJldHVybk5vZGUuZmlyc3RDaGlsZClcblx0XHR9XG5cdH0sIGZhbHNlKTtcblxuXHQvLyBjb25zb2xlLmVycm9yKGVuZE1hcmssIGVuZE1hcmsucHJldmlvdXNTaWJsaW5nKVxuXG5cdHJldHVybiBlbmRNYXJrO1xufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRpZiAocmVuZGVyKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkIHx8IGNvbnRleHQgPT09IG51bGwpIHtcblx0XHRjb250ZXh0ID0ge307XG5cdH1cblxuXHRsZXQgJHByb3BzID0gY29udGV4dC4kcHJvcHMgfHwge307XG5cdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdH1cbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IG1hcCBhcyBfZWFjaCQgfSBmcm9tICdAaGF3YS9tYXAnO1xuXG5pbXBvcnQge1xuXHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0ZXZlbnRzIGFzIF9tYWtlRXZlbnRzJCxcblx0c2xvdCBhcyBfc2xvdCQsXG5cdHN0YXRlbWVudCBhcyBfc3RhdGVtZW50JCxcblx0Z2V0Tm9kZSxcblx0cGFyc2VDb250ZXh0LFxufSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5pbXBvcnQgdGltZSBmcm9tICcuL3RpbWUnO1xuXG5cbi8qKlxuICogRnJhbWV3b3JrcyBtZXRob2RzXG4gKi9cblxuXG4vKipcbiAqIEV4ZWN1dGVcbiAqIEByZXR1cm4ge1t0eXBlXX0gW2Rlc2NyaXB0aW9uXVxuICovXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cblxuXHQvLyBsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHQvLyBjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHQvLyByZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjxkaXYgY2xhc3M9XCJUZXN0XCI+JHsgdGV4dDIgfTwvZGl2PjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8IS0tLS0+JztcblxuXHRsZXQgX3RwbCQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDMuaW5uZXJIVE1MID0gJzxkaXY+U29tZSB0ZXN0IHRleHQgJHsgdGV4dDEgfSBhZnRlcjwvZGl2PjxkaXYgY2xhc3M9XCJidXR0b25cIj48c3Bhbj5EZWZhdWx0PGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPnRleHQ8L3NwYW4+PC9kaXY+JztcblxuXHRsZXQgdGltZXIgPSBudWxsO1xuXG5cdGZ1bmN0aW9uIG1ha2VDb21wb25lbnQoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0bGV0IHsgJHByb3BzLCAkc2xvdHMgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHQvKipcblx0XHQgKiBTY3JpcHQgdGFnXG5cdFx0ICovXG5cdFx0bGV0IHRleHQxID0gb2JzZXJ2YWJsZSgxMik7XG5cdFx0bGV0IHRleHQyID0gb2JzZXJ2YWJsZSgyKTtcblx0XHRsZXQgdGV4dDMgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCBpdGVtcyA9IG9ic2VydmFibGUoQXJyYXkuZnJvbSh7IGxlbmd0aDogNSB9LCAoXywgaSkgPT4gaSkpO1xuXG5cdFx0bGV0IGMgPSBjb21wdXRlZCh0ZXh0MSwgKCkgPT4ge1xuXHRcdFx0cmV0dXJuIHRpbWUgKyB0ZXh0MTtcblx0XHR9KTtcblxuXHRcdGZ1bmN0aW9uIG1ldGhvZDEoKSB7XG5cdFx0XHR0ZXh0MSh0ZXh0MSgpICsgMSk7XG5cdFx0fVxuXG5cdFx0Ly8gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG5cdFx0Ly8gdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0Ly8gXHR0ZXh0Mih0ZXh0MigpICsgMSk7XG5cdFx0Ly8gfSwgMTAwMCk7XG5cblx0XHQvLyBpZighcmVuZGVyKSB7XG5cdFx0Ly8gXHR0aW1lID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRcdGl0ZW1zKEFycmF5LmZyb20oeyBsZW5ndGg6IDEwMCB9LCAoXywgaSkgPT4gaSkpO1xuXHRcdC8vIFx0fSwgMTAwMClcblx0XHQvLyB9XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdF9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcblx0XHRcdFwiZGF0YS0xXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXN0OiB0ZXh0MSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KSxcblx0XHRcdFwiZGF0YS0yXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRleHQxKCk7XG5cdFx0XHR9KSxcblx0XHRcdFwiY2xhc3NcIjogY29tcHV0ZWQoW3RleHQxLCB0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIFt0ZXh0MSgpLCB7XG5cdFx0XHRcdFx0c29tZTogdGV4dDIoKSA9PT0gMlxuXHRcdFx0XHR9XTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxNiA9IF9lYWNoJChfZWwkMywgaXRlbXMsIChpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0cmV0dXJuICd0ZXh0LScgKyBpdGVtMSArIHRleHQxKCk7XG5cdFx0fSwgKG5vZGUsIHJlbmRlciwgX2tleUV4cHIkLCBpdGVtMSwga2V5MSkgPT4ge1xuXHRcdFx0bGV0IF9lbCQ0ID0gZ2V0Tm9kZShfdHBsJDIsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuXHRcdFx0bGV0IF9lbCQxNSA9IF9zdGF0ZW1lbnQkKF9lbCQ1LCByZW5kZXIsIFt0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGl0ZW0xICUgMiA9PT0gMCAmJiB0ZXh0MigpICUgMiA9PT0gMDtcblx0XHRcdH0sIChub2RlLCByZW5kZXIpID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ2ID0gZ2V0Tm9kZShfdHBsJDMsIF9lbCQ1LCByZW5kZXIpO1xuXG5cdFx0XHRcdGxldCBfZWwkNyA9IHJlbmRlciA/IF9lbCQ2LmZpcnN0Q2hpbGQgOiBfZWwkNjtcblxuXHRcdFx0XHRzdWJzY3JpYmUoW3RleHQxXSwgKCkgPT4ge1xuXHRcdFx0XHRcdF9lbCQ3LnNldEF0dHJpYnV0ZShcImRhdGEta2V5XCIsICd0ZXh0LScgKyBpdGVtMSArIHRleHQxKCkpO1xuXHRcdFx0XHR9LCAhcmVuZGVyKTtcblxuXHRcdFx0XHRfbWFrZUV2ZW50cyQoX2VsJDcsIHJlbmRlciwge1xuXHRcdFx0XHRcdFwiY2xpY2tcIjogZnVuY3Rpb24oZXZlbnQpIHtcblx0XHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcIm1vdXNlZG93blwiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblx0XHRcdFx0c3Vic2NyaWJlKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0XHRfZWwkOC5ub2RlVmFsdWUgPSBgU29tZSB0ZXN0IHRleHQgJHt0ZXh0MSgpfSBhZnRlcmA7XG5cdFx0XHRcdH0sICFyZW5kZXIpO1xuXHRcdFx0XHRsZXQgX2VsJDkgPSBfZWwkNy5uZXh0U2libGluZztcblxuXHRcdFx0XHRfbWFrZUV2ZW50cyQoX2VsJDksIHJlbmRlciwge1xuXHRcdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gYWxlcnQoMik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgX2VsJDEwID0gX2VsJDkuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRfc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDEwLCBub2RlID0+IHtcblx0XHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdFx0bGV0IF9lbCQxMiA9IF9lbCQxMS5uZXh0U2libGluZztcblx0XHRcdFx0XHRsZXQgX2VsJDEzID0gX2VsJDEyLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdFx0bGV0IF9lbCQxNCA9IF9lbCQxMi5uZXh0U2libGluZztcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ2IDogX2VsJDk7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDE1O1xuXHRcdH0sIHJlbmRlcik7XG5cblx0XHRsZXQgX2VsJDE3ID0gX2VsJDE2Lm5leHRTaWJsaW5nO1xuXHRcdGxldCBfZWwkMTggPSBfZWwkMTcuZmlyc3RDaGlsZDtcblx0XHRzdWJzY3JpYmUoW3RleHQyXSwgKCkgPT4ge1xuXHRcdFx0X2VsJDE4Lm5vZGVWYWx1ZSA9IGAke3RleHQyKCl9YDtcblx0XHR9LCAhcmVuZGVyKTtcblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cblxuXHRsZXQgbGF5b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xheW91dCcpO1xuXG5cblx0Ly8gdGltZSgnaHlkcmF0ZScpO1xuXHQvLyBtYWtlQ29tcG9uZW50KG51bGwsIGxheW91dC5maXJzdENoaWxkKVxuXHQvLyB0aW1lKCdoeWRyYXRlJyk7XG5cdC8vIHJldHVybjtcblxuXHRjb25zb2xlLmxvZygnc3RhcnQgcmVuZGVyJyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblx0dGltZSgncmVuZGVyJyk7XG5cdGxheW91dC5hcHBlbmRDaGlsZChtYWtlQ29tcG9uZW50KCkpO1xuXHR0aW1lKCdyZW5kZXInKTtcblxuXHRyZXR1cm47XG5cblxuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRcdGxheW91dC5pbm5lckhUTUwgPSB0bXA7XG5cblx0XHRjb25zb2xlLmxvZygnc3RhcnQgaHlkcmF0aW9uJyk7XG5cdFx0dGltZSgnaHlkcmF0ZScpO1xuXHRcdG1ha2VDb21wb25lbnQobnVsbCwgbGF5b3V0LmZpcnN0Q2hpbGQpXG5cdFx0dGltZSgnaHlkcmF0ZScpO1xuXHR9LCAzMDApXG5cdC8vIGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xufVxuXG50ZXN0KCk7XG5cbmZ1bmN0aW9uIGdldHQoKSB7XG5cblx0bGV0IGh0bWwgPVxuXHRcdGBcblx0PGRpdj5zdGFydDwvZGl2PlxuXHRAaWYoMSlcblx0PGRpdj48L2Rpdj5cblx0YXNkYWRcblx0XHRAaWYoMilcblx0XHQ8ZGl2PmlmZjI8L2Rpdj5cblx0XHRAZW5kaWZcblx0YXNkYXNkXG5cdEBlbHNlaWYodGVzdClcblx0MVxuXHRcdDJcblx0XHRAZWFjaCgxKVxuXHRcdGFzZGFzZFxuXHRcdDxzbG90PmRlZmF1bHQgdGV4dCBmb3Igc2xvdDxiIGNsYXNzPVwiZFwiPjE8L2I+PC9zbG90PlxuXHRcdEBlbmRlYWNoXG5cdFx0M1xuXHRcdEBlbHNlIFxuXHRcdGFzZFxuXHRAZW5kaWZcblx0ZW5kXG5cdGA7XG5cblx0aHRtbCA9IGBcblx0PGRpdiBjbGFzcz1cIjJcIiA6ZGF0YS0xPVwieyB0ZXN0OiB0ZXh0MSB9XCIgOmRhdGEtMj1cInRleHQxXCIgOmNsYXNzPVwiW3RleHQxLCB7IHNvbWU6IHRleHQyID09PSAyIH1dXCIgOnByb3AxPVwiMTIzXCI+XG5cdFx0QGVhY2goKGl0ZW0xLCBrZXkxKSBpbiBpdGVtcylcblx0XHRcdEBpZihpdGVtMSAlIDIgPT09IDAgJiYgdGV4dDIgJSAyID09PSAwKVxuXHRcdFx0PHRlbXBsYXRlIDprZXk9XCIndGV4dC0nICsgaXRlbTEgKyB0ZXh0MVwiPlxuXHRcdFx0XHQ8ZGl2IEBjbGljaz1cIm1ldGhvZDFcIiBAbW91c2Vkb3duPVwibWV0aG9kMShldmVudClcIj5cblx0XHRcdFx0XHRTb21lIHRlc3QgdGV4dCBcXCR7IHRleHQxIH0gYWZ0ZXJcblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25cIiBAbW91c2Vkb3duPVwiYWxlcnQoMilcIj5cblx0XHRcdFx0XHQ8c2xvdD5EZWZhdWx0IDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj4gdGV4dDwvc2xvdD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0QGVuZGlmXG5cdFx0QGVuZGVhY2hcblx0XHQ8ZGl2IGNsYXNzPVwiVGVzdFwiPlxcJHsgdGV4dDIgfTwvZGl2PlxuXHQ8L2Rpdj5cblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgaXRlbXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=