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
  var result = (0, _value.makeValue)(this.context, {
    isExpression: true,
    value: value
  }, _value.makeComputed); // console.warn(result);

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

var _expression = __webpack_require__(/*! ./expression */ "./packages/compiler/dist/dynamic/expression.js"); // export { attrs, events, props }


function dynamic(context) {
  return {
    attrs: _attrs.attrs.bind(context),
    events: _events.events.bind(context),
    props: _props.props.bind(context),
    string: _string.string.bind(context),
    expression: _expression.expression.bind(context)
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

function parseEachCondition(value) {
  var statement = value.matchAll( /*#__PURE__*/_wrapRegExp(/\(([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?)?\)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?in[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.*)/g, {
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
    condition: condition,
    args: args
  };
}

function each(context, options) {
  var _this2 = this;

  var params = [];
  var body = [];
  params.push(options.getLastVariableId());
  var loop = parseEachCondition(this.value);
  var value = options.dynamic.expression(loop.condition, options.getLastVariableId(), context, options);
  params.push(value);
  var template = options.createVariable(body, function (n, l) {
    var index = options.createTemplate(_this2);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, options.getLastVariableId(), (0, _types.identifier)('render')]);
  });
  body.push(template.value);
  var lastChild = (0, _utils.children)(this, body, options, _utils.getFirstTemplateNode);
  var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild));
  body.push(returnPointer);
  params.push(new _types.arrowFunctionExpression(loop.args.map(function (item) {
    return (0, _types.identifier)(item);
  }), new _types.blockStatement(body)));
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
      name = name.replace(/^@/g, '');
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

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

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
        }, time];
      })
    });

    var _el$3 = _el$2.firstChild;

    var _el$13 = _each$(_el$3, Array.from({
      length: 1
    }, function (_, i) {
      return i;
    }), function (item, key) {
      var _el$4 = getNode(_tpl$2, null, true);

      var _el$5 = _el$4.firstChild;

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
    });

    return render ? _el$1 : _el$2;
  }

  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  (0, _time.default)('render');
  layout.appendChild(makeComponent());
  (0, _time.default)('render');
  var tmp = layout.innerHTML;
  layout.innerHTML = tmp;
  (0, _time.default)('hydrate');
  makeComponent(null, layout.firstChild);
  (0, _time.default)('hydrate'); // console.log(layout.innerHTML);
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot<b class=\"d\">1</b></slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t@each((item1, key1) in items)\n\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\tSome test text ${ text1 } after\n\t</div>\n\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet items = Array.from({ length: 1 }, (_, i) => i);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbImFzdCIsInNvdXJjZVR5cGUiLCJzdHJpY3RNb2RlIiwiZGF0YSIsImRlcHMiLCJjb250ZXh0Iiwib2JzZXJ2YWJsZXMiLCJ2YXJzIiwibWV0aG9kcyIsImNvbnRleHRTdGFjayIsImlzVmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJlbnRlciIsImlkIiwicGF0aCIsInZhbHVlIiwiZ2V0Q29udGV4dCIsImlzU3ViQ29udGV4dCIsImV4aXQiLCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImNyZWF0ZUNvbnRleHQiLCJjbG9zZUNvbnRleHQiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiSWRlbnRpZmllciIsIlZhcmlhYmxlQ291bnRlciIsIlRlbXBsYXRlcyIsImNvZGVBbmFseXNlIiwiYmxvY2tzIiwiZHluYW1pY0V4cHJlc3Npb25zIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImluaXQiLCJMYXN0VmFyaWFibGVJZCIsImdldExhc3RWYXJpYWJsZUlkIiwiZ2V0Q3VycmVudENvbnRleHQiLCJBY3Rpb24iLCJkZWxjYXJhdGlvblZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsInNldExhc3RWYXJpYWJsZUlkIiwiZW50aXR5IiwiYm9keSIsIm9wdGlvbnMiLCJyZW1vdmVDb250ZXh0IiwiY3JlYXRlVmFyaWFibGUiLCJjcmVhdGVUZW1wbGF0ZSIsImR5bmFtaWMiLCJoYW5kbGUiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJyZW5kZXIiLCJ0ZW1wbGF0ZXMiLCJnZXRUZW1wbGF0ZXMiLCJwcm9wcyIsIm1ha2VDb21wdXRlZCIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJjYWxsRXhwcmVzc2lvbiIsIm9iamVjdEV4cHJlc3Npb24iLCJtYWtlRnVuY3Rpb24iLCJyZXN1bHQiLCJpc0V4cHJlc3Npb24iLCJhdHRycyIsImV2ZW50cyIsInN0cmluZyIsImNvbnNvbGUiLCJtYWtlU3RyaW5nIiwiY29udGVudCIsImFycmF5RXhwcmVzc2lvbiIsImFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiYmxvY2tTdGF0ZW1lbnQiLCJhc3NpZ25tZW50RXhwcmVzc2lvbiIsIm1lbWJlckV4cHJlc3Npb24iLCJUTVBfSURFTlRJRklFUiIsImZuIiwiZnVuY3Rpb25FeHByZXNzaW9uIiwicmV0dXJuU3RhdGVtZW50Iiwic3RhdGVmdWxDb3VudGVyIiwiaWRlbnRpZmllcnNDb3VudGVyIiwic2hvdWxkV3JhcCIsInN0YXRlbWVudCIsImNvbmRpdGlvbiIsImFyZ3MiLCJtYXRjaCIsInBhcmFtcyIsImxvb3AiLCJwYXJzZUVhY2hDb25kaXRpb24iLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJhcmd1bWVudHMiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImRlcCIsImlzQXR0ciIsImlzRG9tQXR0ciIsImF0dHJpYnV0ZXMiLCJzdGF0aWNBdHRycyIsIm9iaiIsIm1ha2VWYWx1ZSIsInJlZ2V4cCIsIm1hdGNoZXMiLCJwYXJzZUJsb2NrcyIsInNjcmlwdCIsInN0eWxlIiwiaHRtbCIsInN0YWNrIiwiRXhwcmVzc2lvbiIsInR5cGUiLCJwYXJzZSIsIkhUTUxQYXJzZXIiLCJvbm9wZW50YWciLCJwYXJlbnQiLCJjdXJyZW50U3RhY2tOb2RlIiwiU2xvdCIsIkNvbXBvbmVudCIsIk5vZGUiLCJvbnRleHQiLCJ0ZXh0Iiwibm9kZSIsIlRleHQiLCJvbmNsb3NldGFnIiwicmVtb3ZlZCIsImRlY29kZUVudGl0aWVzIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwiVHlwZSIsInRhZyIsIm1ha2VUZW1wbGF0ZSIsIm1hcCIsImFkZENoaWxkIiwiY2hpbGQiLCJydWxlcyIsInNraXBJbml0Iiwib25seUNoaWxkcmVuIiwiY2hpbGRUZW1wbGF0ZSIsIkhUTUxUYWdzIiwibGlzdCIsInN0ciIsImV4cGVjdHNMb3dlckNhc2UiLCJ2YWwiLCJ0ZXN0IiwiZ2V0Tm9kZSIsImNsb25lTm9kZSIsInBhcnNlQ29udGV4dCIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIiRzbG90cyIsIl9tYWtlQXR0cnMkIiwiX21ha2VFdmVudHMkIiwia2V5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIl9zbG90JCIsImNhbGxiYWNrIiwiaW5uZXJIVE1MIiwiX2VhY2gkIiwiaXRlbXMiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsZW5ndGgiLCJhcHBlbmRDaGlsZCIsInJlcGxhY2VXaXRoIiwiX3N0YXRlbWVudCQiLCJyZXR1cm5Ob2RlIiwiZ2V0dCIsImxvZyIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwidGV4dDEiLCJ0ZXh0MiIsInRleHQzIiwidGltZSIsImMiLCJtZXRob2QxIiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJzb21lIiwiX2VsJDMiLCJfZWwkMTMiLCJBcnJheSIsImZyb20iLCJfIiwiaXRlbSIsIl9lbCQ0IiwiX2VsJDUiLCJldmVudCIsIl9lbCQ2Iiwibm9kZVZhbHVlIiwiX2VsJDciLCJuZXh0U2libGluZyIsImFsZXJ0IiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwidG1wIiwidGltZXMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyx5QkFDUDtBQUNDLE1BQU1BLEdBQUcsR0FBRyxNQUFNLENBQU4sY0FBcUI7QUFDaENDLGNBQVUsRUFEc0I7QUFFaENDLGNBQVUsRUFBRTtBQUZvQixHQUFyQixDQUFaO0FBS0EsTUFBSUMsSUFBSSxHQUFHLG9CQUFYLEdBQVcsQ0FBWDtBQUNBLE1BQUlDLElBQUksR0FBRyw4QkFBa0JELElBQUksQ0FBakMsV0FBVyxDQUFYO0FBRUEsU0FBTztBQUNORSxXQUFPLEVBREQ7QUFFTkQsUUFBSSxFQUFFQTtBQUZBLEdBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFTyxzQkFDUDtBQUNDLE1BQUlELElBQUksR0FBRztBQUNWRyxlQUFXLEVBREQ7QUFFVkMsUUFBSSxFQUZNO0FBR1ZDLFdBQU8sRUFBRTtBQUhDLEdBQVg7QUFNQSxNQUFJQyxZQUFZLEdBQWhCO0FBQ0EsTUFBSUMscUJBQXFCLEdBQXpCOztBQUVBLDBCQUF3QjtBQUN2QixXQUFPRCxZQUFZLENBQVpBLFNBQVA7QUFDQTs7QUFFRCwrQkFDQTtBQUNDQSxnQkFBWSxDQUFaQSxLQUFrQjtBQUNqQkUsVUFBSSxFQURhO0FBRWpCSixVQUFJLEVBQUU7QUFGVyxLQUFsQkU7QUFJQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlKLE9BQU8sR0FBR0ksWUFBWSxDQUExQixHQUFjQSxFQUFkO0FBQ0E7O0FBRUQsd0JBQ0E7QUFDQyxXQUFPQSxZQUFZLENBQUNBLFlBQVksQ0FBWkEsU0FBcEIsQ0FBbUIsQ0FBbkI7QUFDQTs7QUFFRCw4QkFBYztBQUViRyxzQkFBa0IsRUFBRTtBQUNuQkMsV0FEbUIsdUJBRW5CO0FBQ0NILDZCQUFxQixHQUFyQkE7QUFFQSxZQUFJSSxFQUFFLEdBQUdDLElBQUksQ0FBSkEsS0FBVDtBQUNBLFlBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFKQSxLQUFaO0FBQ0EsWUFBSVYsT0FBTyxHQUFHWSxVQUFkOztBQUVBLFlBQUdDLFlBQVksTUFBTUYsS0FBSyxLQUExQixNQUFxQztBQUNwQ1gsaUJBQU8sQ0FBUEEsVUFBa0JTLEVBQUUsQ0FBcEJUO0FBQ0E7QUFDQTs7QUFFRCxZQUFHVyxLQUFLLENBQUxBLDZCQUFtQ0EsS0FBSyxDQUFMQSxnQkFBdEMsTUFBa0U7QUFDakViLGNBQUksQ0FBSkEsaUJBQXNCVyxFQUFFLENBQXhCWDtBQURELGVBRU8sSUFBRywyREFBMkRhLEtBQUssQ0FBbkUsSUFBRyxDQUFILEVBQTJFO0FBQ2pGYixjQUFJLENBQUpBLGlCQUFzQlcsRUFBRSxDQUF4Qlg7QUFETSxlQUVBO0FBQ05BLGNBQUksQ0FBSkEsVUFBZVcsRUFBRSxDQUFqQlg7QUFDQTtBQXBCaUI7QUFzQmhCZ0IsVUF0QmdCLGtCQXNCVDtBQUNOVCw2QkFBcUIsR0FBckJBO0FBQ0E7QUF4QmUsS0FGUDtBQTRCYlUsMkJBQXVCLEVBQUU7QUFDeEJQLFdBRHdCLHVCQUV4QjtBQUNDLG1DQUEwQjtBQUMxQlEscUJBQWEsQ0FBQ04sSUFBSSxDQUFKQSxhQUFkTSxJQUFhLENBQWJBO0FBSnVCO0FBTXJCRixVQU5xQixzQkFPckI7QUFDQyxtQ0FBMEI7QUFDMUJHLG9CQUFZO0FBQ1o7QUFWb0IsS0E1Qlo7QUF3Q2JDLHVCQUFtQixFQUFFO0FBQ3BCVixXQURvQix1QkFFcEI7QUFDQyxtQ0FBMEI7QUFDMUJWLFlBQUksQ0FBSkEsYUFBa0JZLElBQUksQ0FBSkEsUUFBbEJaO0FBQ0FrQixxQkFBYSxDQUFDTixJQUFJLENBQUpBLFFBQWRNLElBQWEsQ0FBYkE7QUFMbUI7QUFPakJGLFVBUGlCLHNCQVFqQjtBQUNDLG1DQUEwQjtBQUMxQkcsb0JBQVk7QUFDWjtBQVhnQjtBQXhDUixHQUFkO0FBdURBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNGRDs7Ozs7Ozs7QUFFTyx3Q0FDUDtBQUFBLE1BRGtDaEIsV0FDbEM7QUFEa0NBLGVBQ2xDLEdBRGdELEVBQWRBO0FBQ2xDOztBQUNDLE1BQUlGLElBQUksR0FBUjtBQUVBLE1BQUlLLFlBQVksR0FBaEI7QUFDQSxNQUFJQyxxQkFBcUIsR0FBekI7O0FBRUEsMEJBQXdCO0FBQ3ZCLFdBQU9ELFlBQVksQ0FBWkEsU0FBUDtBQUNBOztBQUVELCtCQUNBO0FBQ0NBLGdCQUFZLENBQVpBLEtBQWtCO0FBQ2pCRSxVQUFJLEVBRGE7QUFFakJKLFVBQUksRUFGYTtBQUdqQkgsVUFBSSxFQUFFO0FBSFcsS0FBbEJLO0FBS0E7O0FBRUQsMEJBQ0E7QUFDQyxRQUFJSixPQUFPLEdBQUdJLFlBQVksQ0FBMUIsR0FBY0EsRUFBZDtBQUNBTCxRQUFJLENBQUNDLE9BQU8sQ0FBWkQsSUFBSSxDQUFKQSxHQUFxQkMsT0FBTyxDQUE1QkQ7QUFDQTs7QUFFRCx3QkFDQTtBQUNDLFdBQU9LLFlBQVksQ0FBQ0EsWUFBWSxDQUFaQSxTQUFwQixDQUFtQixDQUFuQjtBQUNBOztBQUVELDhCQUFjO0FBRWJlLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSVIsT0FBTyxHQUFHWSxVQUFkO0FBQ0EsWUFBSU4sSUFBSSxHQUFHSSxJQUFJLENBQUpBLEtBQVg7O0FBRUEsWUFBRyxDQUFDRyxZQUFKLElBQW9CO0FBQ25CO0FBQ0E7O0FBRUQsWUFBRyxDQUFDYixPQUFPLENBQVBBLGNBQUQsSUFBQ0EsQ0FBRCxJQUFnQ0MsV0FBVyxDQUFYQSxTQUFuQyxJQUFtQ0EsQ0FBbkMsRUFBK0Q7QUFDOURELGlCQUFPLENBQVBBO0FBQ0E7QUFDRDtBQWJVLEtBRkM7QUFrQmJPLHNCQUFrQixFQUFFO0FBQ25CQyxXQURtQix1QkFFbkI7QUFDQ0gsNkJBQXFCLEdBQXJCQTtBQUVBLFlBQUlJLEVBQUUsR0FBR0MsSUFBSSxDQUFKQSxLQUFUO0FBQ0EsWUFBSUMsS0FBSyxHQUFHRCxJQUFJLENBQUpBLEtBQVo7QUFDQSxZQUFJVixPQUFPLEdBQUdZLFVBQWQ7O0FBRUEsWUFBR0MsWUFBWSxNQUFNRixLQUFLLEtBQTFCLE1BQXFDO0FBQ3BDWCxpQkFBTyxDQUFQQSxVQUFrQlMsRUFBRSxDQUFwQlQ7QUFDQTtBQUNBO0FBWmlCO0FBY2hCYyxVQWRnQixrQkFjVDtBQUNOVCw2QkFBcUIsR0FBckJBO0FBQ0E7QUFoQmUsS0FsQlA7QUFvQ2JVLDJCQUF1QixFQUFFO0FBQ3hCUCxXQUR3Qix1QkFFeEI7QUFDQyxtQ0FBMEI7QUFDMUJRLHFCQUFhLENBQUNOLElBQUksQ0FBSkEsYUFBZE0sSUFBYSxDQUFiQTtBQUp1QjtBQU1yQkYsVUFOcUIsc0JBT3JCO0FBQ0YsbUNBQTBCO0FBQ3ZCRyxvQkFBWTtBQUNaO0FBVm9CLEtBcENaO0FBZ0RiQyx1QkFBbUIsRUFBRTtBQUNwQlYsV0FEb0IsdUJBRXBCO0FBQ0MsbUNBQTBCO0FBQzFCUSxxQkFBYSxDQUFDTixJQUFJLENBQUpBLFFBQWRNLElBQWEsQ0FBYkE7QUFKbUI7QUFNakJGLFVBTmlCLHNCQU9qQjtBQUNDLG1DQUEwQjtBQUMxQkcsb0JBQVk7QUFDWjtBQVZnQjtBQWhEUixHQUFkO0FBOERBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdEOztBQUNBLGdIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7QUFHTyx5QkFDUDtBQUNDLE1BQUlHLGVBQWUsR0FBbkI7QUFDQSxNQUFJaEIsWUFBWSxHQUFoQjtBQUVBOzs7OztBQUlBLE1BQUlpQixTQUFTLEdBQUcsSUFBaEIsR0FBZ0IsRUFBaEI7QUFFQSxNQUFJQyxXQUFXLEdBQUcsdUJBQVFDLE1BQU0sQ0FBaEMsTUFBa0IsQ0FBbEI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxzQkFYMUIsV0FXMEIsQ0FBekIsQ0FYRCxDQVlDOztBQUVBLG1DQUNBO0FBQ0MsUUFBSUMsUUFBUSxHQUFHQyxPQUFPLENBQVBBLGFBQWYsSUFBZUEsQ0FBZjtBQUVBTCxhQUFTLENBQVRBO0FBRUEsV0FBTyxpQ0FBWUEsU0FBUyxDQUE1QixJQUFPLENBQVA7QUFDQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlNLElBQUksR0FBUjtBQUNBLFFBQUlDLENBQUMsR0FBTDs7QUFFQSwwR0FBMEI7QUFBQSxVQUFsQkMsR0FBa0I7QUFDekIsVUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUgsVUFBSSwwQkFBSkE7QUFDQUEsVUFBSSwrQ0FBSkE7QUFDQTs7QUFFRDtBQUNBO0FBRUQ7Ozs7Ozs7QUFLQSwrQkFDQTtBQUFBLFFBRHVCSSxJQUN2QjtBQUR1QkEsVUFDdkIsR0FEOEIsS0FBUEE7QUFDdkI7O0FBQ0MsV0FBTyxZQUFZLENBQVosS0FBa0I7QUFDeEJDLG9CQUFjLEVBQUVELElBQUksR0FBRyx1QkFBSCxNQUFHLENBQUgsR0FBZ0JFLGlCQUFpQjtBQUQ3QixLQUFsQixDQUFQO0FBR0E7O0FBRUQsK0JBQ0E7QUFDQyxXQUFPN0IsWUFBWSxDQUFDQSxZQUFZLENBQVpBLFNBQXBCLENBQW1CLENBQW5CO0FBQ0E7O0FBRUQsMkJBQ0E7QUFDQ0EsZ0JBQVksQ0FBWkE7QUFDQTs7QUFFRCwrQkFDQTtBQUNDLFdBQU84QixpQkFBaUIsR0FBeEI7QUFDQTs7QUFFRCxvQ0FDQTtBQUNDQSxxQkFBaUIsR0FBakJBO0FBQ0E7O0FBRUQsMkNBQ0E7QUFBQSxRQUR3QmxDLE9BQ3hCO0FBRHdCQSxhQUN4QixHQURrQyxJQUFWQTtBQUN4Qjs7QUFBQSxRQUR3Q21DLE1BQ3hDO0FBRHdDQSxZQUN4QyxHQURpRDtBQUFBO0FBQ2pELE9BRHdDQTtBQUN4Qzs7QUFDQyxRQUFJN0IsSUFBSSxHQUFHLGdDQUFXLEVBQXRCLGVBQVcsQ0FBWDtBQUVBLFFBQUk4QixnQkFBZ0IsR0FBR0QsTUFBTSxPQUFPRixpQkFBcEMsRUFBNkIsQ0FBN0I7QUFFQSxRQUFJdEIsS0FBSyxHQUFHLElBQUkwQixPQUFKLDJCQUErQixDQUMxQyxJQUFJQyxPQUFKLHlCQURELGdCQUNDLENBRDBDLENBQS9CLENBQVo7QUFPQUMscUJBQWlCLENBQWpCQSxJQUFpQixDQUFqQkE7QUFFQSxXQUFPO0FBQ05qQyxVQUFJLEVBREU7QUFFTkssV0FBSyxFQUFMQTtBQUZNLEtBQVA7QUFJQTtBQUVEOzs7Ozs7QUFJQSxNQUFJNkIsTUFBTSxHQUFHakIsTUFBTSxDQUFuQjtBQUNBLE1BQUlrQixJQUFJLEdBQVI7QUFFQSxNQUFJQyxPQUFPLEdBQUc7QUFDYjFCLGlCQUFhLEVBREE7QUFFYjJCLGlCQUFhLEVBRkE7QUFHYkMsa0JBQWMsRUFIRDtBQUliWCxxQkFBaUIsRUFKSjtBQUtiWSxrQkFBYyxFQUxEO0FBTWJDLFdBQU8sRUFBRXRCO0FBTkksR0FBZDs7QUFTQSwwQkFDQTtBQUNDZ0IsVUFBTSxDQUFOQTtBQUNBOztBQUVEeEIsZUFBYSxDQUFiQSxJQUFhLENBQWJBO0FBQ0EsZUFBYTtBQUFBLFdBQVUrQixNQUFNLENBQWhCLElBQWdCLENBQWhCO0FBQWI7QUFFQTs7Ozs7QUFJQSxNQUFJcEIsSUFBSSxHQUFHLHdCQUFTLDhCQUFULFFBQVMsQ0FBVCxFQUlSO0FBQ0ZxQixlQUFXLEVBRFQ7QUFFRkMsV0FBTyxFQUZMO0FBR0ZDLFlBQVEsRUFITjtBQUlGQyxXQUFPLEVBSkw7QUFLRkMsVUFBTSxFQUFFO0FBTE4sR0FKUSxDQUFYO0FBWUEsU0FBTztBQUNOQyxVQUFNLEVBQUUxQixJQUFJLENBRE47QUFFTjJCLGFBQVMsRUFBRUMsWUFBWTtBQUZqQixHQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLRDs7QUFZQTs7QUFFTyxnREFDUDtBQUNDLE1BQUdmLE1BQU0sQ0FBTkEsc0JBQUgsV0FBMkM7QUFDMUM7QUFDQTs7QUFFRCxNQUFJZ0IsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQmhCLE1BQU0sQ0FBTkEsT0FBaEIsWUFBMEM7QUFDekMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxrQkFBeEIsSUFBd0JBLENBQXhCLEVBQXdEaUIsT0FBcEUsWUFBWSxDQUFaO0FBRUFELFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsSUFDQyxDQURELEVBRERGLEtBQ0MsQ0FEREE7QUFNQTs7QUFFRCxNQUFHQSxLQUFLLENBQUxBLFdBQUgsR0FBdUI7QUFDdEI7QUFDQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUNDLHVCQURELGFBQ0MsQ0FERCxFQUNvQixRQUVsQix1QkFGa0IsUUFFbEIsQ0FGa0IsRUFHbEIsSUFBSUMsT0FBSixpQkFMSCxLQUtHLENBSGtCLENBRHBCLENBRGdCLENBQWpCO0FBVUE5RCxTQUFPLENBQVBBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDs7QUFZQTs7QUFFTyxpREFDUDtBQUNDLE1BQUd3QyxNQUFNLENBQU5BLFdBQUgsV0FBZ0M7QUFDL0I7QUFDQTs7QUFFRCxNQUFJZ0IsS0FBSyxHQUFUOztBQUVBLE9BQUksSUFBSixRQUFnQmhCLE1BQU0sQ0FBTkEsT0FBaEIsUUFBc0M7QUFDckMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVSxLQUFWLFNBQXdCNkIsTUFBTSxDQUFOQSxjQUF4QixJQUF3QkEsQ0FBeEIsRUFBb0R1QixPQUFoRSxZQUFZLENBQVo7QUFFQVAsU0FBSyxDQUFMQSxLQUNDLElBQUlFLE9BQUosZUFDQywwQkFERCxJQUNDLENBREQsRUFEREYsS0FDQyxDQUREQTtBQU1BOztBQUVELE1BQUdBLEtBQUssQ0FBTEEsV0FBSCxHQUF1QjtBQUN0QjtBQUNBOztBQUVELE1BQUlHLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsY0FDQyxDQURELEVBQ3FCLFFBRW5CLHVCQUZtQixRQUVuQixDQUZtQixFQUduQixJQUFJQyxPQUFKLGlCQUxILEtBS0csQ0FIbUIsQ0FEckIsQ0FEZ0IsQ0FBakI7QUFVQTlELFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREOztBQWVBOztBQUVPLG9EQUNQO0FBQ0MsTUFBSWdFLE1BQU0sR0FBRyxzQkFBVSxLQUFWLFNBQXdCO0FBQ3BDQyxnQkFBWSxFQUR3QjtBQUVwQ3RELFNBQUssRUFBRUE7QUFGNkIsR0FBeEIsRUFHVjhDLE9BSkosWUFDYyxDQUFiLENBREQsQ0FNQzs7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0EsNEcsQ0FFQTs7O0FBRWUsMEJBQ2Y7QUFDQyxTQUFPO0FBQ05TLFNBQUssRUFBRUEsa0JBREQsT0FDQ0EsQ0FERDtBQUVOQyxVQUFNLEVBQUVBLG9CQUZGLE9BRUVBLENBRkY7QUFHTlgsU0FBSyxFQUFFQSxrQkFIRCxPQUdDQSxDQUhEO0FBSU5ZLFVBQU0sRUFBRUEsb0JBSkYsT0FJRUEsQ0FKRjtBQUtOVCxjQUFVLEVBQUVBO0FBTE4sR0FBUDtBQU9BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQ7O0FBWUE7O0FBRU8sZ0RBQ1A7QUFDQyxNQUFHbkIsTUFBTSxDQUFOQSxzQkFBSCxXQUEyQztBQUMxQztBQUNBOztBQUVELE9BQUksSUFBSixRQUFnQkEsTUFBTSxDQUFOQSxPQUFoQixZQUEwQztBQUN6QyxRQUFJN0IsS0FBSyxHQUFHLHNCQUFVNkIsTUFBTSxDQUFOQSxrQkFBdEIsSUFBc0JBLENBQVYsQ0FBWjtBQUNBOztBQUdENkIsU0FBTyxDQUFQQSxLQUFhN0IsTUFBTSxDQUFOQSxPQUFiNkI7QUFFQTtBQUVBLE1BQUliLEtBQUssR0FBVDs7QUFFQSxPQUFJLElBQUosT0FBZSxLQUFmLE9BQTJCO0FBQzFCQSxTQUFLLENBQUxBLEtBQ0MsSUFBSUUsT0FBSixlQUNDLDBCQURELEdBQ0MsQ0FERCxFQUVDLDBCQUFjLFdBSGhCRixHQUdnQixDQUFkLENBRkQsQ0FEREE7QUFNQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUNDLHVCQURELGFBQ0MsQ0FERCxFQUNvQixRQUVsQix1QkFGa0IsUUFFbEIsQ0FGa0IsRUFHbEIsSUFBSUMsT0FBSixpQkFMSCxLQUtHLENBSGtCLENBRHBCLENBRGdCLENBQWpCO0FBVUE5RCxTQUFPLENBQVBBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ERDs7QUFlQTs7QUFFTyxpREFDUDtBQUNDLE1BQUd3QyxNQUFNLENBQU5BLFVBQUgsV0FBK0I7QUFDOUI7QUFDQTs7QUFFRCxNQUFJeUIsWUFBWSxHQUFHekIsTUFBTSxDQUFOQSw2QkFBbkI7O0FBRUEsTUFBRyxDQUFILGNBQWtCO0FBQ2pCO0FBQ0E7O0FBVEYsbUJBV3lCLHNCQUFVLEtBQVYsU0FBd0I7QUFDL0N5QixnQkFBWSxFQURtQztBQUUvQ3RELFNBQUssUUFBUTZCLE1BQU0sQ0FBZDtBQUYwQyxHQUF4QixFQUdyQjhCLE9BZEosVUFXeUIsQ0FYekI7QUFBQSxNQVdPdkUsSUFYUDtBQUFBLE1BV2F3RSxPQVhiOztBQWdCQ3hFLE1BQUksR0FBRyxJQUFJeUUsT0FBSixnQkFBb0IsSUFBSSxDQUFKLElBQVMsZ0JBQVU7QUFDN0MsV0FBTyx1QkFBUCxJQUFPLENBQVA7QUFERHpFLEdBQTJCLENBQXBCLENBQVBBO0FBS0EsTUFBSTBDLElBQUksR0FBRyxJQUFJZ0MsT0FBSiw0QkFDVixJQUFJQyxPQUFKLGVBQW1CLENBQ2xCLElBQUlkLE9BQUosb0JBQ0MsSUFBSWUsT0FBSiwwQkFFQyxJQUFJQyxPQUFKLHdCQUE0Qix1QkFGN0IsV0FFNkIsQ0FBNUIsQ0FGRCxFQUhILE9BR0csQ0FERCxDQURrQixDQUFuQixDQURVLENBQVg7QUFZQSxNQUFJakIsVUFBVSxHQUFHLElBQUlDLE9BQUosb0JBQ2hCLElBQUlDLE9BQUosZUFDQyx1QkFERCxXQUNDLENBREQsRUFFQyxPQUhGLElBR0UsQ0FGRCxDQURnQixDQUFqQjtBQU9BN0QsU0FBTyxDQUFQQTtBQUVBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REQ7O0FBZ0JBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNNkUsY0FBYyxHQUFwQjs7QUFFTyx1Q0FDUDtBQUNDLE1BQUcsQ0FBQ2xFLEtBQUssQ0FBVCxjQUF3QjtBQUN2QixXQUFPLDBCQUFjQSxLQUFLLENBQTFCLEtBQU8sQ0FBUDtBQUNBOztBQUVELE1BQUlnQixJQUFJLEdBQU1rRCxjQUFOLFFBQU1BLEdBQW9CbEUsS0FBSyxDQUF2QztBQUVBLE1BQU1oQixHQUFHLEdBQUcsTUFBTSxDQUFOLFlBQW1CO0FBQzlCQyxjQUFVLEVBRG9CO0FBRTlCQyxjQUFVLEVBQUU7QUFGa0IsR0FBbkIsQ0FBWjtBQUtBLFNBQU9pRixFQUFFLE1BQVQsT0FBUyxDQUFUO0FBQ0E7QUFFRDs7Ozs7QUFHTyxvQ0FDUDtBQUNDLDhCQUFjO0FBQ2IzRCxjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUNBLFlBQUdWLE9BQU8sQ0FBUEEsaUJBQXlCUyxFQUFFLENBQTlCLElBQUdULENBQUgsRUFBc0M7QUFDckMsY0FBR1UsSUFBSSxDQUFKQSxnQkFBSCxrQkFBMEM7QUFDekNELGNBQUUsQ0FBRkEsT0FBYUEsRUFBRSxDQUFmQSxJQUFhQSxHQUFiQTtBQUNBO0FBQ0Q7QUFFRDtBQVZVO0FBREMsR0FBZDtBQWVBLE1BQUl1RCxNQUFNLEdBQUdyRSxHQUFHLENBQUhBLGFBQWIsQ0FBYUEsQ0FBYjtBQUVBcUUsUUFBTSxHQUFHQSxNQUFNLENBQU5BLFdBQVRBO0FBRUEsU0FBTyxJQUFJZSxPQUFKLHlCQUE2QixDQUFDLHVCQUE5QixPQUE4QixDQUFELENBQTdCLEVBQTRDLElBQUlMLE9BQUosZUFBbUIsQ0FDckUsSUFBSU0sT0FBSixnQkFERCxNQUNDLENBRHFFLENBQW5CLENBQTVDLENBQVA7QUFHQTtBQUVEOzs7OztBQUdPLGtDQUNQO0FBQ0MsTUFBSWpGLElBQUksR0FBUjtBQUVBLDhCQUFjO0FBQ2JvQixjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUdWLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVUsRUFBRSxDQUFaVjtBQUNBVSxZQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFSUztBQVVYSyxVQVZXLHNCQVVBLENBRVY7QUFaVTtBQURDLEdBQWQ7QUFpQkEsTUFBSWtELE1BQU0sR0FBR3JFLEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUFxRSxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0FBVEE7QUFFQSxTQUFPO0FBQ05PLFdBQU8sRUFERDtBQUVOeEUsUUFBSSxFQUFFQTtBQUZBLEdBQVA7QUFJQTtBQUVEOzs7OztBQUdPLG9DQUNQO0FBQ0MsTUFBSUEsSUFBSSxHQUFSO0FBQ0EsTUFBSWtGLGVBQWUsR0FBbkI7QUFDQSxNQUFJQyxrQkFBa0IsR0FBdEI7QUFDQSxNQUFJQyxVQUFVLEdBQWQ7QUFFQSw4QkFBYztBQUNiaEUsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFFQSxZQUFHLDBCQUEwQkEsSUFBSSxDQUE5QixRQUF1Q0EsSUFBSSxDQUFKQSxjQUExQyxnQkFBNkU7QUFDNUU7QUFDQTs7QUFFRHdFLDBCQUFrQjs7QUFFbEIsWUFBR2xGLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNpRix5QkFBZTtBQUNmO0FBQ0Q7QUFkVTtBQURDLEdBQWQ7O0FBb0JBLE1BQUdDLGtCQUFrQixJQUFsQkEsS0FBMkJELGVBQWUsSUFBN0MsR0FBb0Q7QUFDbkRFLGNBQVUsR0FBVkE7QUEzQkYsSUE4QkM7OztBQUVBLDhCQUFjO0FBQ2JoRSxjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUcsMEJBQTBCQSxJQUFJLENBQWpDLEdBQUcsQ0FBSCxFQUF3QztBQUN2QztBQUNBOztBQUVELFlBQUdWLE9BQU8sQ0FBUEEscUJBQTZCUyxFQUFFLENBQWxDLElBQUdULENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVUsRUFBRSxDQUFaVjs7QUFDQSwwQkFBZTtBQUNkVSxjQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFDRDtBQWRTO0FBZ0JYSyxVQWhCVyxzQkFnQkEsQ0FFVjtBQWxCVTtBQURDLEdBQWQ7QUF1QkEsTUFBSWtELE1BQU0sR0FBR3JFLEdBQUcsQ0FBSEEsYUFBYixDQUFhQSxDQUFiO0FBRUFxRSxRQUFNLEdBQUdBLE1BQU0sQ0FBTkEsV0FBVEE7O0FBRUEsTUFBR2pFLElBQUksQ0FBSkEsZ0JBQXFCb0YsVUFBVSxLQUFsQyxPQUE4QztBQUM3QztBQUNBOztBQUVEcEYsTUFBSSxHQUFHLElBQUl5RSxPQUFKLGdCQUFvQixJQUFJLENBQUosSUFBUyxnQkFBVTtBQUM3QyxXQUFPLHVCQUFQLElBQU8sQ0FBUDtBQUREekUsR0FBMkIsQ0FBcEIsQ0FBUEE7QUFLQSxNQUFJMEMsSUFBSSxHQUFHLElBQUlnQyxPQUFKLDRCQUNWLElBQUlDLE9BQUosZUFBbUIsQ0FDbEIsSUFBSU0sT0FBSixnQkFGRixNQUVFLENBRGtCLENBQW5CLENBRFUsQ0FBWDtBQU1BLFNBQU8sSUFBSW5CLE9BQUosZUFDTix1QkFETSxVQUNOLENBRE0sRUFFTixPQUZELElBRUMsQ0FGTSxDQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBWHZMRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBWURBOztBQVlBLGtHLENBRUE7OztBQUNlLHFDQUNmO0FBQUE7O0FBRUMsTUFBSTlCLElBQUksR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3BELFdBQU8sSUFBSThCLE9BQUosZUFDTix1QkFETSxjQUNOLENBRE0sRUFDYyxDQUNuQiwwQkFBYyxLQUFJLENBREMsSUFDbkIsQ0FEbUIsS0FHbkIsdUJBSkYsUUFJRSxDQUhtQixDQURkLENBQVA7QUFERCxHQUFXLENBQVg7QUFVQTdELFNBQU8sQ0FBUEEsS0FBYStCLElBQUksQ0FBakIvQjtBQUVBMEMsU0FBTyxDQUFQQTtBQUVBLE1BQUlqQixRQUFRLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUN4RCxXQUFPLElBQUltRCxPQUFKLG9CQUNILHVCQURKLGFBQ0ksQ0FERyxDQUFQO0FBREQsR0FBZSxDQUFmO0FBTUE1RSxTQUFPLENBQVBBLEtBQWF5QixRQUFRLENBQXJCekI7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDRDs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdPLG1DQUNQO0FBQ0MsTUFBSW9GLFNBQVMsR0FBRyxLQUFLLENBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFoQjtBQUVBLE1BQUlDLFNBQVMsR0FBYjtBQUNBLE1BQUlDLElBQUksR0FBUjs7QUFFQSx3R0FBNEI7QUFBQSxRQUFwQkMsS0FBb0I7O0FBRTNCLFFBQUdBLEtBQUssQ0FBTEEsT0FBSCxNQUFzQjtBQUNyQkQsVUFBSSxDQUFKQSxLQUFVQyxLQUFLLENBQUxBLE9BQVZEO0FBREQsV0FFTztBQUNOQSxVQUFJLENBQUpBO0FBQ0E7O0FBRUQsUUFBR0MsS0FBSyxDQUFMQSxPQUFILEtBQXFCO0FBQ3BCRCxVQUFJLENBQUpBLEtBQVVDLEtBQUssQ0FBTEEsT0FBVkQ7QUFERCxXQUVPO0FBQ05BLFVBQUksQ0FBSkE7QUFDQTs7QUFFREQsYUFBUyxHQUFHRSxLQUFLLENBQUxBLE9BQVpGO0FBQ0E7O0FBRUQsU0FBTztBQUNOQSxhQUFTLEVBREg7QUFFTkMsUUFBSSxFQUFKQTtBQUZNLEdBQVA7QUFJQTs7QUFFYyxnQ0FDZjtBQUFBOztBQUNDLE1BQUlFLE1BQU0sR0FBVjtBQUNBLE1BQUkvQyxJQUFJLEdBQVI7QUFFQStDLFFBQU0sQ0FBTkEsS0FBWTlDLE9BQU8sQ0FBbkI4QyxpQkFBWTlDLEVBQVo4QztBQUVBLE1BQUlDLElBQUksR0FBR0Msa0JBQWtCLENBQUMsS0FBOUIsS0FBNkIsQ0FBN0I7QUFFQSxNQUFJL0UsS0FBSyxHQUFHK0IsT0FBTyxDQUFQQSxtQkFBMkIrQyxJQUFJLENBQS9CL0MsV0FBMkNBLE9BQU8sQ0FBbERBLGlCQUEyQ0EsRUFBM0NBLFdBQVosT0FBWUEsQ0FBWjtBQUNBOEMsUUFBTSxDQUFOQTtBQUVBLE1BQUkvRCxRQUFRLEdBQUcsT0FBTyxDQUFQLHFCQUE2QixnQkFBVTtBQUNyRCxRQUFJSyxLQUFLLEdBQUdZLE9BQU8sQ0FBUEEsZUFBWixNQUFZQSxDQUFaO0FBQ0EsV0FBTyxJQUFJbUIsT0FBSixlQUNOLHVCQURNLFNBQ04sQ0FETSxFQUNTLFFBQVFuQixPQUFPLENBQWYsaUJBQVFBLEVBQVIsRUFBcUMsdUJBRHJELFFBQ3FELENBQXJDLENBRFQsQ0FBUDtBQUZELEdBQWUsQ0FBZjtBQU9BRCxNQUFJLENBQUpBLEtBQVVoQixRQUFRLENBQWxCZ0I7QUFFQSxNQUFJa0QsU0FBUyxHQUFHLDBDQUE4QkMsT0FBOUMsb0JBQWdCLENBQWhCO0FBRUEsTUFBSUMsYUFBYSxHQUFHLElBQUliLE9BQUosZ0JBQ25CLElBQUljLE9BQUosc0JBQ0MsdUJBREQsUUFDQyxDQURELEVBQ2VyRSxRQUFRLENBRHZCLE1BREQsU0FDQyxDQURtQixDQUFwQjtBQU1BZ0IsTUFBSSxDQUFKQTtBQUVBK0MsUUFBTSxDQUFOQSxLQUNDLElBQUlmLE9BQUosd0JBQ0MsSUFBSSxDQUFKLFNBQWMsZ0JBQUk7QUFBQSxXQUFJLHVCQUFKLElBQUksQ0FBSjtBQURuQixHQUNDLENBREQsRUFDa0MsSUFBSUMsT0FBSixlQUZuQ2MsSUFFbUMsQ0FEbEMsQ0FEREE7QUFRQSxNQUFJN0IsVUFBVSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDMUQsV0FBTyxJQUFJRSxPQUFKLGVBQW1CLHVCQUFuQixRQUFtQixDQUFuQixFQUFQLE1BQU8sQ0FBUDtBQURELEdBQWlCLENBQWpCO0FBSUE3RCxTQUFPLENBQVBBLEtBQWEyRCxVQUFVLENBQXZCM0Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RkQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFZQTs7QUFFQTs7QUFHZSxnQ0FDZjtBQUNDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEwQyxTQUFPLENBQVBBLG9CQUE0QkEsT0FBTyxDQUFuQ0EsaUJBQTRCQSxFQUE1QkE7QUFDQUEsU0FBTyxDQUFQQSxxQkFBNkJBLE9BQU8sQ0FBcENBLGlCQUE2QkEsRUFBN0JBO0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQVFBOztBQUVlLG1DQUNmO0FBQUE7O0FBQ0MsTUFBSWpCLFFBQVEsR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3hELFFBQUlLLEtBQUssR0FBR1ksT0FBTyxDQUFQQSxlQUFaLEtBQVlBLENBQVo7QUFDQSxXQUFPLElBQUltQixPQUFKLGVBQ04sdUJBRE0sU0FDTixDQURNLEVBQ1MsUUFBUW5CLE9BQU8sQ0FBZixpQkFBUUEsRUFBUixFQUFxQyx1QkFEckQsUUFDcUQsQ0FBckMsQ0FEVCxDQUFQO0FBRkQsR0FBZSxDQUFmO0FBT0ExQyxTQUFPLENBQVBBLEtBQWF5QixRQUFRLENBQXJCekI7QUFHQSxNQUFJMkYsU0FBUyxHQUFHLDZDQUFpQ0MsT0FBakQsb0JBQWdCLENBQWhCO0FBSUEsTUFBSUMsYUFBYSxHQUFHLElBQUliLE9BQUosZ0JBQ25CLElBQUljLE9BQUosc0JBQ0MsdUJBREQsUUFDQyxDQURELEVBQ2VyRSxRQUFRLENBRHZCLE1BREQsU0FDQyxDQURtQixDQUFwQjtBQU1BekIsU0FBTyxDQUFQQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7O0FBV0E7O0FBRWUsZ0NBQ2Y7QUFDQyxNQUFJd0YsTUFBTSxHQUFHLENBQ1osdUJBRFksUUFDWixDQURZLEVBRVosMEJBQWMsS0FGRixJQUVaLENBRlksRUFHWjlDLE9BQU8sQ0FIUixpQkFHQ0EsRUFIWSxDQUFiO0FBTUEsTUFBSWlCLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQW1CLHVCQUFuQixRQUFtQixDQUFuQixFQURELE1BQ0MsQ0FEZ0IsQ0FBakI7QUFJQSxNQUFJcEIsSUFBSSxHQUFSO0FBRUE7QUFFQStDLFFBQU0sQ0FBTkEsS0FDQyxJQUFJZixPQUFKLHdCQUE0QixDQUMxQix1QkFERixNQUNFLENBRDBCLENBQTVCLEVBR0MsSUFBSUMsT0FBSixlQUpGYyxJQUlFLENBSEQsQ0FEREE7QUFRQXhGLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFlLHFDQUNmO0FBQ0MsTUFBSXdGLE1BQU0sR0FBVjtBQUVBQSxRQUFNLENBQU5BLEtBQVk5QyxPQUFPLENBQW5COEMsaUJBQVk5QyxFQUFaOEM7O0FBRUEsT0FBSyxJQUFJNUQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcsY0FBcEIsUUFBMENBLENBQTFDLElBQStDO0FBQzlDLFFBQUltRSxLQUFLLEdBQUcsY0FBWixDQUFZLENBQVo7QUFDQSxRQUFJdEQsSUFBSSxHQUFSO0FBRUE7QUFDQ3VELDJCQUFxQixFQUFFdEQsT0FBTyxDQUFQQTtBQUR4QjtBQUtBOEMsVUFBTSxDQUFOQSxLQUFZLHVCQUFHTyxLQUFLLENBQXBCUCxLQUFZLENBQVpBO0FBQ0FBLFVBQU0sQ0FBTkEsS0FDQyxJQUFJZixPQUFKLHdCQUE0QixDQUMzQix1QkFERCxNQUNDLENBRDJCLENBQTVCLEVBRUcsSUFBSUMsT0FBSixlQUhKYyxJQUdJLENBRkgsQ0FEREE7QUFLQTs7QUFHRCxNQUFJN0IsVUFBVSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDMUQsV0FBTyxJQUFJRSxPQUFKLGVBQW1CLHVCQUFuQixhQUFtQixDQUFuQixFQUFQLE1BQU8sQ0FBUDtBQURELEdBQWlCLENBQWpCO0FBS0E3RCxTQUFPLENBQVBBLEtBQWEyRCxVQUFVLENBQXZCM0Q7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOztBQUtlLGdDQUNmO0FBRUMwQyxTQUFPLENBQVBBLHFCQUE2QkEsT0FBTyxDQUFwQ0EsaUJBQTZCQSxFQUE3QkEsV0FGRCxPQUVDQSxFQUZELENBSUM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRDs7QUFTTyxnREFDUDtBQUNDLE1BQUl1RCxPQUFPLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUN2RCxXQUFPLElBQUlILE9BQUosc0JBQ04sdUJBRE0sUUFDTixDQURNLEVBRU4sSUFBSWxCLE9BQUosb0JBQXdCLHVCQUZsQixZQUVrQixDQUF4QixDQUZNLEVBQVAsQ0FBTyxDQUFQO0FBREQsR0FBYyxDQUFkO0FBUUE1RSxTQUFPLENBQVBBLEtBQWFpRyxPQUFPLENBQXBCakc7QUFDQTs7QUFFTSwwQ0FDUDtBQUNDLE1BQUl5QixRQUFRLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUN4RCxXQUFPLElBQUltRCxPQUFKLG9CQUNILHVCQURKLElBQ0ksQ0FERyxDQUFQO0FBREQsR0FBZSxDQUFmO0FBTUE1RSxTQUFPLENBQVBBLEtBQWF5QixRQUFRLENBQXJCekI7QUFDQTs7QUFFTSwyREFDUDtBQUFBLE1BRG1Ea0csYUFDbkQ7QUFEbURBLGlCQUNuRCxHQURtRSxLQUFoQkE7QUFDbkQ7O0FBQ0N4RCxTQUFPLENBQVBBOztBQUVBLE9BQUssSUFBSWQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUdZLE1BQU0sQ0FBTkEsU0FBcEIsUUFBNENaLENBQTVDLElBQWlEO0FBQ2hEdUUsZUFBVyxDQUFDM0QsTUFBTSxDQUFOQSxTQUFELENBQUNBLENBQUQsdUJBQVgyRCxhQUFXLENBQVhBO0FBQ0E7O0FBRUQsTUFBSVIsU0FBUyxHQUFHakQsT0FBTyxDQUF2QixpQkFBZ0JBLEVBQWhCO0FBRUFBLFNBQU8sQ0FBUEE7QUFFQTtBQUNBOztBQUVNLHFFQUNQO0FBQ0MsTUFBSTBELE9BQU8sR0FBR3RFLEtBQUssS0FBbkI7O0FBRUEsTUFBR29FLGFBQWEsSUFBaEIsU0FBNkI7QUFDNUJBLGlCQUFhLFVBQWJBLE9BQWEsQ0FBYkE7QUFERCxTQUVPO0FBQ04sUUFBRyxDQUFDMUQsTUFBTSxDQUFWLFFBQUlBLEVBQUosRUFBdUI7QUFDdEI2RCxjQUFRLG1CQUFtQkQsT0FBTyxrQkFBbENDLGFBQVEsQ0FBUkE7QUFDQTtBQUNEOztBQUVEN0QsUUFBTSxDQUFOQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FwQjdETSwyQkFDUDtBQUNDLDJCQUNBO0FBQ0MsUUFBSThELFNBQVMsQ0FBVEEsV0FBSixHQUE0QjtBQUMzQjtBQUNBOztBQUVEM0YsU0FBSyxHQUFMQTs7QUFFQWIsUUFBSSxDQUFKQSxtQkFBd0Isb0JBQVk7QUFBRXlHLGNBQVEsQ0FBUkE7QUFBdEN6Rzs7QUFDQUEsUUFBSSxDQUFKQSxtQkFBd0Isb0JBQVE7QUFBQSxhQUFJeUcsUUFBSjtBQUFoQ3pHOztBQUVBO0FBQ0E7O0FBRURBLE1BQUksQ0FBSkEsYUFBa0IsSUFBbEJBLEdBQWtCLEVBQWxCQTtBQUNBQSxNQUFJLENBQUpBO0FBRUE7QUFDQTs7QUFHTSw4QkFDUDtBQUNDMEcsS0FBRyxHQUFHLFVBQU5BLEdBQU0sQ0FBTkE7O0FBRUEsa0dBQW1CO0FBQUEsUUFBWEMsRUFBVzs7QUFDbEJBLE1BQUUsQ0FBRkE7QUFDQTs7QUFFRCxrQkFDQTtBQUNDLFFBQUcsQ0FBQ0MsTUFBTSxDQUFWLFFBQW1CO0FBQ2xCQSxZQUFNO0FBQ047O0FBRUQsV0FBTy9GLEtBQVA7QUFDQTs7QUFFRCxvQkFDQTtBQUNDK0YsVUFBTSxDQUFOQTs7QUFFQTVHLFFBQUksQ0FBSkEsbUJBQXdCLG9CQUFRO0FBQUEsYUFBSXlHLFFBQUo7QUFBaEN6Rzs7QUFFQTtBQUNBOztBQUVEQSxNQUFJLENBQUpBLGFBQWtCLElBQWxCQSxHQUFrQixFQUFsQkE7QUFDQUEsTUFBSSxDQUFKQTtBQUVBNEcsUUFBTTtBQUVOO0FBQ0E7O0FBRU0scUNBQ1A7QUFBQSxNQURzQ0MsSUFDdEM7QUFEc0NBLFFBQ3RDLEdBRDZDLEtBQVBBO0FBQ3RDOztBQUNDSCxLQUFHLEdBQUcsVUFBTkEsR0FBTSxDQUFOQTs7QUFFQSxzR0FBbUI7QUFBQSxRQUFYQyxFQUFXOztBQUNsQixRQUFHQSxFQUFFLENBQUwsWUFBa0I7QUFDakJBLFFBQUUsQ0FBRkE7QUFDQTs7QUFFRCxRQUFHQSxFQUFFLENBQUwsT0FBYTtBQUNaLDREQUFlQSxFQUFFLENBQWpCLGdEQUF5QjtBQUFBLFlBQWpCRyxHQUFpQjtBQUN4QkEsV0FBRyxDQUFIQTtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxNQUFHLENBQUgsTUFBVTtBQUNUakcsU0FBSztBQUNMO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBcUJ6RUQsbUYsQ0FIQTtBQUNBO0FBQ0E7OztBQUlBLElBQUlrRyxNQUFNLEdBQUcsb0JBQ1osczRCQURELDJDQUFhLENBQWI7O0FBZ0JBLElBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQVU7QUFDekIsU0FBT0QsTUFBTSxDQUFOQSxJQUFNLENBQU5BLElBQWdCdkcsSUFBSSxDQUFKQSxNQUF2QixVQUF1QkEsQ0FBdkI7QUFERDs7QUFJQSx3Q0FDQTtBQUFBLE1BRDBCMkQsWUFDMUI7QUFEMEJBLGdCQUMxQixHQUR5QyxLQUFmQTtBQUMxQjs7QUFDQyxTQUFPO0FBQ050RCxTQUFLLEVBREM7QUFFTnNELGdCQUFZLEVBQVpBO0FBRk0sR0FBUDtBQUlBOztBQUVNLG9CQUNQO0FBQ0MsTUFBSUUsTUFBTSxHQUFWO0FBQ0EsTUFBSVgsS0FBSyxHQUFUO0FBQ0EsTUFBSXVELFVBQVUsR0FBZDtBQUNBLE1BQUlDLFdBQVcsR0FBZjs7QUFFQSxPQUFJLElBQUosYUFDQTtBQUNDLFFBQUlyRyxLQUFLLEdBQUdzRyxHQUFHLENBQWYsSUFBZSxDQUFmOztBQUVBLFFBQUdILFNBQVMsQ0FBWixJQUFZLENBQVosRUFBb0I7QUFDbkJFLGlCQUFXLENBQVhBLElBQVcsQ0FBWEE7QUFERCxXQUVPLElBQUcxRyxJQUFJLENBQUpBLE1BQUgsS0FBR0EsQ0FBSCxFQUFzQjtBQUM1QkEsVUFBSSxHQUFHQSxJQUFJLENBQUpBLGVBQVBBLEVBQU9BLENBQVBBO0FBQ0E2RCxZQUFNLENBQU5BLElBQU0sQ0FBTkEsR0FBZStDLFNBQVMsUUFBeEIvQyxJQUF3QixDQUF4QkE7QUFGTSxXQUdBLElBQUc3RCxJQUFJLENBQUpBLE1BQUgsTUFBR0EsQ0FBSCxFQUF1QjtBQUM3QkEsVUFBSSxHQUFHQSxJQUFJLENBQUpBLGdCQUFQQSxFQUFPQSxDQUFQQTs7QUFDQSxVQUFHd0csU0FBUyxDQUFaLElBQVksQ0FBWixFQUFvQjtBQUNuQkMsa0JBQVUsQ0FBVkEsSUFBVSxDQUFWQSxHQUFtQkcsU0FBUyxRQUE1QkgsSUFBNEIsQ0FBNUJBO0FBREQsYUFFTztBQUNOdkQsYUFBSyxDQUFMQSxJQUFLLENBQUxBLEdBQWMwRCxTQUFTLFFBQXZCMUQsSUFBdUIsQ0FBdkJBO0FBQ0E7QUFOSyxXQU9BO0FBQ05BLFdBQUssQ0FBTEEsSUFBSyxDQUFMQSxHQUFjMEQsU0FBUyxDQURqQixLQUNpQixDQUF2QjFELENBRE0sQ0FFTjtBQUNBO0FBQ0Q7O0FBRUQsU0FBTztBQUNOd0QsZUFBVyxFQURMO0FBRU43QyxVQUFNLEVBRkE7QUFHTlgsU0FBSyxFQUhDO0FBSU51RCxjQUFVLEVBQVZBO0FBSk0sR0FBUDtBQU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBckJyRUQ7O0FBRUEseUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FzQkZBOztBQUNBOztBQUVBOztBQUVBOztBQUVPLG1DQUNQO0FBQ0MsT0FBSSxJQUFKLGVBQXVCO0FBQ3RCLFFBQUlJLE1BQU0sR0FBRyx3REFBYixHQUFhLENBQWI7QUFDQSxRQUFJQyxPQUFPLEdBQUdELE1BQU0sQ0FBTkEsS0FBZCxJQUFjQSxDQUFkOztBQUNBLGlCQUFZO0FBQ1g1RixZQUFNLENBQU5BLEdBQU0sQ0FBTkEsR0FBYzZGLE9BQU8sQ0FBckI3RixDQUFxQixDQUFyQkE7QUFDQTtBQUNEOztBQUVEO0FBQ0E7O0FBRU0scUJBQ1A7QUFDQztBQUNBLE1BQUlBLE1BQU0sR0FBRzhGLFdBQVcsQ0FBQztBQUN4QkMsVUFBTSxFQURrQjtBQUV4QkMsU0FBSyxFQUFFO0FBRmlCLEdBQUQsRUFGekIsSUFFeUIsQ0FBeEIsQ0FGRCxDQU9DOztBQUNBQyxNQUFJLEdBQUcsOEJBUlIsSUFRUSxDQUFQQSxDQVJELENBVUM7O0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQ1gsSUFBSUMsT0FBSixXQUFlO0FBQUVDLFFBQUksRUFBRTtBQUFSLEdBQWYsQ0FEVyxDQUFaOztBQUlBLDhCQUNBO0FBQ0MsV0FBT0YsS0FBSyxDQUFDQSxLQUFLLENBQUxBLFNBQWIsQ0FBWSxDQUFaO0FBQ0E7O0FBRUQsNEJBQ0E7QUFDQyxXQUFPQSxLQUFLLENBQUxBLGdCQUFzQiw2QkFBN0IsSUFBNkIsQ0FBN0I7QUFDQTs7QUFFRCxNQUFNRyxLQUFLLEdBQUcsSUFBSUMsWUFBSixPQUFlO0FBRTVCQyxhQUY0QixrQ0FHNUI7QUFDQyxVQUFJQyxNQUFNLEdBQUdDLGdCQUFiO0FBQ0E7O0FBRUEsVUFBRzFILElBQUksS0FBUCxRQUFvQjtBQUNuQmtDLGNBQU0sR0FBRyxJQUFJa0YsT0FBSixXQUFUbEYsS0FBUyxDQUFUQTtBQURELGFBRU8sSUFBR2xDLElBQUksS0FBUCxRQUFvQjtBQUMxQmtDLGNBQU0sR0FBRyxJQUFJeUYsT0FBSixLQUFUekYsS0FBUyxDQUFUQTtBQURNLGFBRUEsSUFBSSx3QkFBSixJQUFJLENBQUosRUFBdUI7QUFDN0JBLGNBQU0sR0FBRyxJQUFJMEYsT0FBSixnQkFBVDFGLEtBQVMsQ0FBVEE7QUFETSxhQUVBO0FBQ05BLGNBQU0sR0FBRyxJQUFJMkYsT0FBSixXQUFUM0YsS0FBUyxDQUFUQTtBQUNBOztBQUVELGtCQUFXO0FBQ1Z1RixjQUFNLENBQU5BO0FBQ0E7O0FBRUROLFdBQUssQ0FBTEE7QUFyQjJCO0FBd0I1QlcsVUF4QjRCLHdCQXlCNUI7QUFDQyxVQUFJTCxNQUFNLEdBQUdDLGdCQUFiO0FBRUFLLFVBQUksR0FBR0EsSUFBSSxDQUFYQSxJQUFPQSxFQUFQQTs7QUFFQSxVQUFHQSxJQUFJLEtBQUpBLE1BQUgsUUFBMEI7QUFDekIsWUFBSUMsSUFBSSxHQUFHLElBQUlDLE9BQUosS0FBWCxJQUFXLENBQVg7O0FBQ0Esb0JBQVc7QUFDVlIsZ0JBQU0sQ0FBTkE7QUFDQTtBQUNFO0FBbkN1QjtBQXNDNUJTLGNBdEM0Qiw0QkF1QzVCO0FBQ0MsVUFBSUMsT0FBTyxHQUFHaEIsS0FBSyxDQUFuQixHQUFjQSxFQUFkO0FBQ0c7QUF6Q3dCLEdBQWYsRUEyQ1g7QUFBRWlCLGtCQUFjLEVBQUU7QUFBbEIsR0EzQ1csQ0FBZDtBQTZDQWQsT0FBSyxDQUFMQTtBQUNBQSxPQUFLLENBQUxBO0FBRUFyRyxRQUFNLENBQU5BLFdBQWtCa0csS0FBSyxDQXpFeEIsQ0F5RXdCLENBQXZCbEcsQ0F6RUQsQ0EwRUM7O0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdELDJCQUNBO0FBQ0MsU0FBT2lHLElBQUksQ0FBSkEsMkNBQVAsSUFBT0EsRUFBUDtBQUNBOztBQUVNLCtCQUNQO0FBQ0MsT0FBSSxJQUFKLGVBQXVCO0FBQ3RCLFFBQUlMLE1BQU0sR0FBRyx3REFBYixHQUFhLENBQWI7QUFDQUssUUFBSSxHQUFHQSxJQUFJLENBQUpBLGdCQUFQQSxFQUFPQSxDQUFQQTtBQUNBOztBQUVEQSxNQUFJLEdBQUcsSUFBSSxDQUNWO0FBRFUsR0FBSiw4UEFNTjtBQU5NLG1GQUFQQSxTQUFPLENBQVBBO0FBVUEsU0FBT21CLFdBQVcsQ0FBbEIsSUFBa0IsQ0FBbEI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEOztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQlQsUzs7O0FBRXBCLGtDQUNBO0FBQUE7O0FBQ0M7QUFDQTtBQUNBLG9CQUFlLGtCQUFmLEtBQWUsQ0FBZjtBQUNBO0FBQ0E7QUFMRDtBQU1DOzs7O1NBRURVLGEsR0FBQUEseUJBQ0E7QUFDQyxXQUFPQyxNQUFNLENBQU5BLEtBQVksWUFBWkEscUJBQVA7Ozs7RUFicUNDLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h2Qzs7Ozs7Ozs7Ozs7Ozs7SUFFcUJwQixVOzs7QUFFcEIsNEJBQ0E7QUFBQTs7QUFBQSx5QkFEY0MsSUFDZDtBQUFBLFFBRGNBLElBQ2QsMEJBRHFCLElBQ3JCO0FBQUEsMEJBRDJCaEgsS0FDM0I7QUFBQSxRQUQyQkEsS0FDM0IsMkJBRG1DLElBQ25DO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFKRDtBQUtDOzs7RUFSc0NtSSxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGeEM7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCWCxJOzs7QUFFcEIsNEJBQ0E7QUFBQTs7QUFDQztBQUVBO0FBQ0EsbUJBQWMsa0JBQWQsS0FBYyxDQUFkO0FBQ0E7QUFDQTtBQU5EO0FBT0M7Ozs7U0FFRFMsYSxHQUFBQSx5QkFDQTtBQUNDLFdBQU9DLE1BQU0sQ0FBTkEsS0FBWSxZQUFaQSxxQkFBUDs7OztFQWRnQ0MsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSGxDOzs7Ozs7Ozs7Ozs7OztJQUVxQmIsSTs7O0FBRXBCLHNCQUNBO0FBQUE7O0FBQUEseUJBRGMzSCxJQUNkO0FBQUEsUUFEY0EsSUFDZCwwQkFEcUIsU0FDckI7QUFBQSx3QkFEZ0N5SSxHQUNoQztBQUFBLFFBRGdDQSxHQUNoQyx5QkFEc0MsTUFDdEM7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEQ7SUFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7RUFoQ2lDRCxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGbEM7Ozs7Ozs7Ozs7Ozs7O0lBRXFCUCxJOzs7QUFFcEIsc0JBQ0E7QUFBQTs7QUFDQztBQUNBO0FBQ0E7QUFIRDtBQUlDOzs7O1NBRURTLFksR0FBQUEsd0JBQ0E7QUFDQyxXQUFPLEtBQVA7Ozs7RUFYZ0NGLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQzs7SUFFcUJBLEk7QUFFcEIsa0JBQ0E7QUFDQztBQUNBOzs7O1NBRURHLEcsR0FBQUEsdUJBQ0E7QUFDQyxRQUFHLGlCQUFpQixjQUFwQixhQUErQztBQUM5QztBQUNBOzs7U0FHRkMsUSxHQUFBQSx5QkFDQTtBQUNDQyxTQUFLLENBQUxBO0FBQ0E7OztTQUdEcEcsTSxHQUFBQSxrQ0FDQTtBQUNDLFdBQU9xRyxnQkFBTSxLQUFOQSwwQkFBUCxPQUFPQSxDQUFQOzs7U0FHREMsUSxHQUFBQSxvQkFDQTtBQUNDLFdBREQsS0FDQyxDQURELENBQ2M7OztTQUdkTCxZLEdBQUFBLG9DQUNBO0FBQUEsUUFEYU0sWUFDYjtBQURhQSxrQkFDYixHQUQ0QixJQUFmQTtBQUNiOztBQUNDLFFBQUk3SCxRQUFRLFNBQU8sS0FBbkI7QUFFQSxRQUFJeUMsS0FBSyxHQUFHLGNBQWMsWUFBZCxjQUFaOztBQUVBLFNBQUksSUFBSixjQUFzQjtBQUNyQnpDLGNBQVEsd0JBQWdCeUMsS0FBSyxDQUFyQixHQUFxQixDQUFyQixHQUFSekM7QUFDQTs7QUFFREEsWUFBUSxJQUFSQTtBQUVBLFFBQUk4SCxhQUFhLEdBQUcsa0JBQWtCLGlCQUFLO0FBQUEsYUFBSUosS0FBSyxDQUFMQSxhQUFKLEtBQUlBLENBQUo7QUFBdkIsWUFBcEIsRUFBb0IsQ0FBcEI7QUFFQTFILFlBQVEsSUFBUkE7QUFFQUEsWUFBUSxXQUFTLEtBQVQsTUFBUkE7O0FBRUEsUUFBRyw0Q0FBNEMsS0FBNUMsU0FBMEQsQ0FBN0QsY0FBNEU7QUFDM0U7QUFDQTs7QUFFRCxRQUFHLENBQUMsS0FBSixLQUFjO0FBQ2I7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0ExQjFERjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBMkJKQSxJQUFNK0gsUUFBUSxHQUFHLHNnQ0FBakIsS0FBaUIsQ0FBakI7O0FBY08sMkJBQ1A7QUFDQyxTQUFPLENBQUNBLFFBQVEsQ0FBUkEsU0FBUixJQUFRQSxDQUFSO0FBQ0E7O0FBRU0sd0NBQ1A7QUFDQyxNQUFJUCxHQUFHLEdBQUdKLE1BQU0sQ0FBTkEsT0FBVixJQUFVQSxDQUFWO0FBQ0EsTUFBSVksSUFBSSxHQUFHQyxHQUFHLENBQUhBLE1BQVgsR0FBV0EsQ0FBWDs7QUFFQSxPQUFLLElBQUk5SCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBRzZILElBQUksQ0FBeEIsUUFBaUM3SCxDQUFqQyxJQUFzQztBQUNyQ3FILE9BQUcsQ0FBQ1EsSUFBSSxDQUFSUixDQUFRLENBQUwsQ0FBSEE7QUFDQTs7QUFFRCxTQUFPVSxnQkFBZ0IsR0FDdEIsZUFBYztBQUFFLFdBQU9WLEdBQUcsQ0FBQ1csR0FBRyxDQUFkLFdBQVdBLEVBQUQsQ0FBVjtBQURNLE1BRXRCLGVBQWM7QUFBRSxXQUFPWCxHQUFHLENBQVYsR0FBVSxDQUFWO0FBRmpCO0FBR0EsQzs7Ozs7Ozs7Ozs7Ozs7QUMvQkQ7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFHQSxTQUFTWSxJQUFULEdBQWdCO0FBRWYsV0FBU0MsT0FBVCxDQUFpQnJJLFFBQWpCLEVBQTJCNkcsSUFBM0IsRUFBaUNqRixNQUFqQyxFQUF5QztBQUN4QyxRQUFJQSxNQUFKLEVBQVk7QUFDWCxhQUFPNUIsUUFBUSxDQUFDOEMsT0FBVCxDQUFpQndGLFNBQWpCLENBQTJCLElBQTNCLENBQVA7QUFDQTs7QUFFRCxXQUFPekIsSUFBUDtBQUNBOztBQUVELFdBQVMwQixZQUFULENBQXNCaEssT0FBdEIsRUFBK0I7QUFDOUIsUUFBSUEsT0FBTyxLQUFLaUssU0FBWixJQUF5QmpLLE9BQU8sS0FBSyxJQUF6QyxFQUErQztBQUM5Q0EsYUFBTyxHQUFHLEVBQVY7QUFDQTs7QUFFRCxRQUFJa0ssTUFBTSxHQUFHbEssT0FBTyxDQUFDa0ssTUFBUixJQUFrQixFQUEvQjtBQUNBLFFBQUlDLE1BQU0sR0FBR25LLE9BQU8sQ0FBQ21LLE1BQVIsSUFBa0IsRUFBL0I7QUFFQSxXQUFPO0FBQ05ELFlBQU0sRUFBTkEsTUFETTtBQUVOQyxZQUFNLEVBQU5BO0FBRk0sS0FBUDtBQUlBOztBQUdELFdBQVNDLFdBQVQsR0FBdUIsQ0FFdEI7O0FBRUQsV0FBU0MsWUFBVCxDQUFzQi9CLElBQXRCLEVBQTRCakYsTUFBNUIsRUFBb0NYLE9BQXBDLEVBQTZDO0FBQzVDLFNBQUssSUFBSTRILEdBQVQsSUFBZ0I1SCxPQUFoQixFQUF5QjtBQUN4QjRGLFVBQUksQ0FBQ2lDLGdCQUFMLENBQXNCRCxHQUF0QixFQUEyQjVILE9BQU8sQ0FBQzRILEdBQUQsQ0FBbEM7QUFDQTtBQUNEOztBQUVELFdBQVNFLE1BQVQsQ0FBZ0JMLE1BQWhCLEVBQXdCN0osSUFBeEIsRUFBOEJnSSxJQUE5QixFQUFvQ21DLFFBQXBDLEVBQThDO0FBQzdDLFFBQUlOLE1BQU0sQ0FBQzdKLElBQUQsQ0FBTixLQUFpQjJKLFNBQXJCLEVBQWdDO0FBQy9CUSxjQUFRLENBQUNuQyxJQUFELENBQVI7QUFDQTtBQUNBOztBQUVEQSxRQUFJLENBQUNvQyxTQUFMLEdBQWlCUCxNQUFNLENBQUM3SixJQUFELENBQXZCO0FBRUEsV0FBT2dJLElBQVA7QUFDQTs7QUFFRCxXQUFTcUMsTUFBVCxDQUFnQnJDLElBQWhCLEVBQXNCc0MsS0FBdEIsRUFBNkI5RixFQUE3QixFQUFpQztBQUNoQyxRQUFJckMsSUFBSSxHQUFHb0ksUUFBUSxDQUFDQyxzQkFBVCxFQUFYOztBQUVBLFNBQUssSUFBSWxKLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdnSixLQUFLLENBQUNHLE1BQTFCLEVBQWtDbkosQ0FBQyxFQUFuQyxFQUF1QztBQUN0QyxVQUFJMEcsS0FBSSxHQUFHeEQsRUFBRSxDQUFDd0QsS0FBRCxFQUFPc0MsS0FBSyxDQUFDaEosQ0FBRCxDQUFaLEVBQWlCQSxDQUFqQixDQUFiOztBQUNBYSxVQUFJLENBQUN1SSxXQUFMLENBQWlCMUMsS0FBakI7QUFDQTs7QUFFREEsUUFBSSxDQUFDMkMsV0FBTCxDQUFpQnhJLElBQWpCO0FBRUEsV0FBT0EsSUFBUDtBQUNBOztBQUVELFdBQVN5SSxXQUFULENBQXFCNUMsSUFBckIsRUFBb0M7QUFDbkMsUUFBSTZDLFVBQVUsR0FBRyxLQUFqQjs7QUFEbUMsc0NBQU43RixJQUFNO0FBQU5BLFVBQU07QUFBQTs7QUFHbkMsU0FBSyxJQUFJMUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzBELElBQUksQ0FBQ3lGLE1BQXpCLEVBQWlDbkosQ0FBQyxJQUFJLENBQXRDLEVBQXlDO0FBQ3hDLFVBQUkwRCxJQUFJLENBQUMxRCxDQUFELENBQVIsRUFBYTtBQUNadUosa0JBQVUsR0FBRzdGLElBQUksQ0FBQzFELENBQUMsR0FBRyxDQUFMLENBQUosQ0FBWTBHLElBQVosQ0FBYjtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxRQUFJNkMsVUFBVSxLQUFLLEtBQW5CLEVBQTBCO0FBQ3pCLGFBQU83QyxJQUFQO0FBQ0E7O0FBRURBLFFBQUksQ0FBQzJDLFdBQUwsQ0FBaUJFLFVBQWpCO0FBRUEsV0FBT0EsVUFBUDtBQUNBOztBQTVFYyxjQThFYUMsSUFBSSxFQTlFakI7QUFBQSxNQThFVC9ILE1BOUVTLFNBOEVUQSxNQTlFUztBQUFBLE1BOEVEQyxTQTlFQyxTQThFREEsU0E5RUM7O0FBK0VmZSxTQUFPLENBQUNnSCxHQUFSLENBQVloSSxNQUFaO0FBQ0FnQixTQUFPLENBQUNnSCxHQUFSLENBQVkvSCxTQUFaO0FBQ0E7QUFFQTs7OztBQUdBLE1BQUlnSSxNQUFNLEdBQUdULFFBQVEsQ0FBQ1UsYUFBVCxDQUF1QixVQUF2QixDQUFiOztBQUNBRCxRQUFNLENBQUNaLFNBQVAsR0FBbUIsOEJBQW5COztBQUVBLE1BQUljLE1BQU0sR0FBR1gsUUFBUSxDQUFDVSxhQUFULENBQXVCLFVBQXZCLENBQWI7O0FBQ0FDLFFBQU0sQ0FBQ2QsU0FBUCxHQUFtQixxSEFBbkI7O0FBRUEsV0FBU2UsYUFBVCxDQUF1QnpMLE9BQXZCLEVBQWdDc0ksSUFBaEMsRUFBOEM7QUFBQSxRQUFkQSxJQUFjO0FBQWRBLFVBQWMsR0FBUCxLQUFPO0FBQUE7O0FBQzdDLFFBQUlqRixNQUFNLEdBQUdpRixJQUFJLEtBQUssS0FBdEI7O0FBRDZDLHdCQUdwQjBCLFlBQVksQ0FBQ2hLLE9BQUQsQ0FIUTtBQUFBLFFBR3ZDa0ssTUFIdUMsaUJBR3ZDQSxNQUh1QztBQUFBLFFBRy9CQyxNQUgrQixpQkFHL0JBLE1BSCtCO0FBSTdDOzs7OztBQUdBLFFBQUl1QixLQUFLLEdBQUcsNEJBQVcsQ0FBWCxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLDRCQUFXLENBQVgsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyw0QkFBVyxDQUFYLENBQVo7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBLFFBQUlDLENBQUMsR0FBRywwQkFBU0osS0FBVCxFQUFnQixZQUFNO0FBQzdCLGFBQU9HLElBQUksR0FBR0gsS0FBZDtBQUNBLEtBRk8sQ0FBUjs7QUFJQSxhQUFTSyxPQUFULEdBQW1CO0FBQ2xCMUgsYUFBTyxDQUFDZ0gsR0FBUixDQUFZLE1BQVo7QUFDQTtBQUNEOzs7OztBQUdBLFFBQUlXLEtBQUssR0FBR2xDLE9BQU8sQ0FBQ3dCLE1BQUQsRUFBU2hELElBQVQsRUFBZWpGLE1BQWYsQ0FBbkI7O0FBRUEsUUFBSTRJLEtBQUssR0FBRzVJLE1BQU0sR0FBRzJJLEtBQUssQ0FBQ0UsVUFBVCxHQUFzQkYsS0FBeEM7O0FBRUE1QixlQUFXLENBQUM2QixLQUFELEVBQVE1SSxNQUFSLEVBQWdCO0FBQzFCLGVBQVMsQ0FEaUI7QUFFMUIsZ0JBQVUsMEJBQVMsQ0FBQ3FJLEtBQUQsQ0FBVCxFQUFrQixZQUFNO0FBQ2pDLGVBQU87QUFDTjdCLGNBQUksRUFBRTZCLEtBQUs7QUFETCxTQUFQO0FBR0EsT0FKUyxDQUZnQjtBQU8xQixnQkFBVSwwQkFBUyxDQUFDQSxLQUFELENBQVQsRUFBa0IsWUFBTTtBQUNqQyxlQUFPQSxLQUFLLEVBQVo7QUFDQSxPQUZTLENBUGdCO0FBVTFCLGVBQVMsMEJBQVMsQ0FBQ0EsS0FBRCxFQUFRQyxLQUFSLENBQVQsRUFBeUIsWUFBTTtBQUN2QyxlQUFPLENBQUNELEtBQUssRUFBTixFQUFVO0FBQ2hCUyxjQUFJLEVBQUVSLEtBQUssT0FBTztBQURGLFNBQVYsRUFFSkUsSUFGSSxDQUFQO0FBR0EsT0FKUTtBQVZpQixLQUFoQixDQUFYOztBQWlCQSxRQUFJTyxLQUFLLEdBQUdILEtBQUssQ0FBQ0MsVUFBbEI7O0FBRUEsUUFBSUcsTUFBTSxHQUFHMUIsTUFBTSxDQUFDeUIsS0FBRCxFQUFRRSxLQUFLLENBQUNDLElBQU4sQ0FBVztBQUFFeEIsWUFBTSxFQUFFO0FBQVYsS0FBWCxFQUEwQixVQUFDeUIsQ0FBRCxFQUFJNUssQ0FBSjtBQUFBLGFBQVVBLENBQVY7QUFBQSxLQUExQixDQUFSLEVBQWdELFVBQUM2SyxJQUFELEVBQU9uQyxHQUFQLEVBQWU7QUFDakYsVUFBSW9DLEtBQUssR0FBRzVDLE9BQU8sQ0FBQzBCLE1BQUQsRUFBUyxJQUFULEVBQWUsSUFBZixDQUFuQjs7QUFFQSxVQUFJbUIsS0FBSyxHQUFHRCxLQUFLLENBQUNSLFVBQWxCOztBQUVBN0Isa0JBQVksQ0FBQ3NDLEtBQUQsRUFBUXRKLE1BQVIsRUFBZ0I7QUFDM0IsaUJBQVMsZUFBU3VKLEtBQVQsRUFBZ0I7QUFDeEIsaUJBQU9iLE9BQU8sRUFBZDtBQUNBLFNBSDBCO0FBSTNCLHFCQUFhLG1CQUFTYSxLQUFULEVBQWdCO0FBQzVCLGlCQUFPYixPQUFPLENBQUNhLEtBQUQsQ0FBZDtBQUNBO0FBTjBCLE9BQWhCLENBQVo7O0FBU0EsVUFBSUMsS0FBSyxHQUFHRixLQUFLLENBQUNULFVBQWxCO0FBQ0EsaUNBQVUsQ0FBQ1IsS0FBRCxDQUFWLEVBQW1CLFlBQU07QUFDeEJtQixhQUFLLENBQUNDLFNBQU4sdUJBQW9DcEIsS0FBSyxFQUF6QztBQUNBLE9BRkQ7QUFHQSxVQUFJcUIsS0FBSyxHQUFHSixLQUFLLENBQUNLLFdBQWxCOztBQUVBM0Msa0JBQVksQ0FBQzBDLEtBQUQsRUFBUTFKLE1BQVIsRUFBZ0I7QUFDM0IscUJBQWEsbUJBQVN1SixLQUFULEVBQWdCO0FBQzVCLGlCQUFPSyxLQUFLLENBQUMsQ0FBRCxDQUFaO0FBQ0E7QUFIMEIsT0FBaEIsQ0FBWjs7QUFNQSxVQUFJQyxLQUFLLEdBQUdILEtBQUssQ0FBQ2IsVUFBbEI7O0FBRUExQixZQUFNLENBQUNMLE1BQUQsRUFBUyxTQUFULEVBQW9CK0MsS0FBcEIsRUFBMkIsVUFBQTVFLElBQUksRUFBSTtBQUN4QyxZQUFJNkUsS0FBSyxHQUFHRCxLQUFLLENBQUNoQixVQUFsQjtBQUNBLFlBQUlrQixNQUFNLEdBQUdELEtBQUssQ0FBQ0gsV0FBbkI7QUFDQSxZQUFJSyxNQUFNLEdBQUdELE1BQU0sQ0FBQ2xCLFVBQXBCO0FBQ0EsWUFBSW9CLE1BQU0sR0FBR0YsTUFBTSxDQUFDSixXQUFwQjtBQUNBLE9BTEssQ0FBTjs7QUFPQSxhQUFPM0osTUFBTSxHQUFHcUosS0FBSCxHQUFXSyxLQUF4QjtBQUNBLEtBcENrQixDQUFuQjs7QUFzQ0EsV0FBTzFKLE1BQU0sR0FBRzJJLEtBQUgsR0FBV0MsS0FBeEI7QUFDQTs7QUFFRCxNQUFJc0IsTUFBTSxHQUFHMUMsUUFBUSxDQUFDMkMsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0FELFFBQU0sQ0FBQzdDLFNBQVAsR0FBbUIsRUFBbkI7QUFFQSxxQkFBSyxRQUFMO0FBQ0E2QyxRQUFNLENBQUN2QyxXQUFQLENBQW1CUyxhQUFhLEVBQWhDO0FBQ0EscUJBQUssUUFBTDtBQUVBLE1BQUlnQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQzdDLFNBQWpCO0FBQ0E2QyxRQUFNLENBQUM3QyxTQUFQLEdBQW1CK0MsR0FBbkI7QUFFQSxxQkFBSyxTQUFMO0FBQ0FoQyxlQUFhLENBQUMsSUFBRCxFQUFPOEIsTUFBTSxDQUFDckIsVUFBZCxDQUFiO0FBQ0EscUJBQUssU0FBTCxFQTlMZSxDQStMZjtBQUNBOztBQUVEckMsSUFBSTs7QUFFSixTQUFTdUIsSUFBVCxHQUFnQjtBQUVmLE1BQUk1RCxJQUFJLG9TQUFSO0FBd0JBQSxNQUFJLGl1QkFBSjtBQWdDQSxNQUFJakcsTUFBTSxHQUFHLG1CQUFNaUcsSUFBTixDQUFiO0FBRUEsU0FBTyx1QkFBUWpHLE1BQVIsQ0FBUCxDQTVEZSxDQTZEZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFRRCxJQUFJbU0sS0FBSyxHQUFHLEVBQVo7O0FBRWUsU0FBUzdCLElBQVQsQ0FBY3ZMLElBQWQsRUFDZjtBQUNDLE1BQUlxTixHQUFHLEdBQUksSUFBSUMsSUFBSixFQUFELENBQVdDLE9BQVgsRUFBVjs7QUFFQSxNQUFHLE9BQU9ILEtBQUssQ0FBQ3BOLElBQUQsQ0FBWixLQUF1QixXQUExQixFQUF1QztBQUN0Q29OLFNBQUssQ0FBQ3BOLElBQUQsQ0FBTCxHQUFjcU4sR0FBZDtBQUNBLFdBQU9ELEtBQUssQ0FBQ3BOLElBQUQsQ0FBWjtBQUNBOztBQUVEK0QsU0FBTyxDQUFDZ0gsR0FBUixXQUFvQi9LLElBQXBCLFNBQThCcU4sR0FBRyxHQUFHRCxLQUFLLENBQUNwTixJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT29OLEtBQUssQ0FBQ3BOLElBQUQsQ0FBWjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50LCBwYXJzZSB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodmFsdWUudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiB2YWx1ZS5jYWxsZWUubmFtZSA9PT0gJyRvJykge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YS52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRkYXRhLm1ldGhvZHMucHVzaChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRhdGE7XG59IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGRlcGVuZGVuY2llcyhhc3QsIG9ic2VydmFibGVzID0gW10pXG57XG5cdGxldCBkZXBzID0ge307XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRsZXQgaXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSB0cnVlO1xuXG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQoKSB7XG5cdFx0ICAgIFx0aXNWYXJpYWJsZURlY2xhcmF0aW9uID0gZmFsc2U7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdFx0XHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdCAgICB9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRpZihpc1ZhcmlhYmxlRGVjbGFyYXRpb24pIHJldHVybjtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH1cblx0fSk7XG5cblx0cmV0dXJuIGRlcHM7XG59IiwiaW1wb3J0IEV4cHJlc3Npb24gZnJvbSAnLi9FeHByZXNzaW9uJztcbmltcG9ydCBUZXh0IGZyb20gJy4vVGV4dCc7XG5pbXBvcnQgTm9kZSBmcm9tICcuL05vZGUnO1xuaW1wb3J0IFNsb3QgZnJvbSAnLi9TbG90JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi9Db21wb25lbnQnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBDb21wb25lbnQsIFNsb3QgfSIsImltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgYW5hbHlzZSB9IGZyb20gJ0BoYXdhL2FuYWx5c2VyJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cdC8vIGNvbnNvbGUud2Fybihjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXNbbmFtZV0sIG1ha2VDb21wdXRlZCk7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUF0dHJzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlRnVuY3Rpb24gfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5ldmVudHMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCBlbnRpdHkub3B0aW9uLmV2ZW50c1tuYW1lXSwgbWFrZUZ1bmN0aW9uKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlRXZlbnRzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlQ29tcHV0ZWQgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb24odmFsdWUsIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcmVzdWx0ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwge1xuXHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcblx0XHR2YWx1ZTogdmFsdWUsXG5cdH0sIG1ha2VDb21wdXRlZCk7XG5cblx0Ly8gY29uc29sZS53YXJuKHJlc3VsdCk7XG5cdHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG5pbXBvcnQgeyBleHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuLy8gZXhwb3J0IHsgYXR0cnMsIGV2ZW50cywgcHJvcHMgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljKGNvbnRleHQpXG57XG5cdHJldHVybiB7XG5cdFx0YXR0cnM6IGF0dHJzLmJpbmQoY29udGV4dCksXG5cdFx0ZXZlbnRzOiBldmVudHMuYmluZChjb250ZXh0KSxcblx0XHRwcm9wczogcHJvcHMuYmluZChjb250ZXh0KSxcblx0XHRzdHJpbmc6IHN0cmluZy5iaW5kKGNvbnRleHQpLFxuXHRcdGV4cHJlc3Npb246IGV4cHJlc3Npb24uYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdHJpbmcgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBpc0V4cHJlc3Npb24gPSBlbnRpdHkudmFsdWUubWF0Y2goL1xcJFxcey4qXFx9L2cpICE9PSBudWxsO1xuXG5cdGlmKCFpc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgeyBkZXBzLCBjb250ZW50IH0gPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB7XG5cdFx0aXNFeHByZXNzaW9uLFxuXHRcdHZhbHVlOiBgXFxgJHsgZW50aXR5LnZhbHVlIH1cXGBgLFxuXHR9LCBtYWtlU3RyaW5nKTtcblxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0XHRuZXcgYXNzaWdubWVudEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKHBvaW50LCBpZCgnbm9kZVZhbHVlJykpLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdF0pXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRbZGVwcywgYm9keV1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRibG9ja1N0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuY29uc3QgVE1QX0lERU5USUZJRVIgPSAnX3RtcCRhc3QnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVZhbHVlKGNvbnRleHQsIHZhbHVlLCBmbilcbntcblx0aWYoIXZhbHVlLmlzRXhwcmVzc2lvbikge1xuXHRcdHJldHVybiBzdHJpbmdMaXRlcmFsKHZhbHVlLnZhbHVlKTtcblx0fVxuXG5cdGxldCBjb2RlID0gYCR7VE1QX0lERU5USUZJRVJ9ID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXHRsZXQgc3RhdGVmdWxDb3VudGVyID0gMDtcblx0bGV0IGlkZW50aWZpZXJzQ291bnRlciA9IDA7XG5cdGxldCBzaG91bGRXcmFwID0gdHJ1ZTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkgfHwgcGF0aC5ub2RlLm5hbWUgPT09IFRNUF9JREVOVElGSUVSKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWRlbnRpZmllcnNDb3VudGVyKys7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdHN0YXRlZnVsQ291bnRlcisrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHRcblx0aWYoaWRlbnRpZmllcnNDb3VudGVyIDw9IDEgfHwgc3RhdGVmdWxDb3VudGVyID09IDApIHtcblx0XHRzaG91bGRXcmFwID0gZmFsc2U7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhpZGVudGlmaWVyc0NvdW50ZXIsIHN0YXRlZnVsQ291bnRlciwgc2hvdWxkV3JhcClcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoWydsYWJlbCcsICdrZXknXS5pbmNsdWRlcyhwYXRoLmtleSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlmKHNob3VsZFdyYXApIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldENvbXBvbmVudCcpLCBbXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRcdFx0bCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWFjaENvbmRpdGlvbih2YWx1ZSlcbntcblx0bGV0IHN0YXRlbWVudCA9IHZhbHVlLm1hdGNoQWxsKC9cXCgoPzxpdGVtPltBLXowLTldKylcXHM/KFxcLFxccz8oPzxrZXk+W0EtejAtOV0rKVxccz8pP1xcKVxccz9pblxccyg/PGNvbmRpdGlvbj4uKikvZyk7XG5cblx0bGV0IGNvbmRpdGlvbiA9IG51bGw7XG5cdGxldCBhcmdzID0gW107XG5cblx0Zm9yKGxldCBtYXRjaCBvZiBzdGF0ZW1lbnQpIHtcblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5pdGVtKSB7XG5cdFx0XHRhcmdzLnB1c2gobWF0Y2guZ3JvdXBzLml0ZW0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmdzLnB1c2goJ19pdGVtJyk7XG5cdFx0fVxuXG5cdFx0aWYobWF0Y2guZ3JvdXBzLmtleSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5rZXkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhcmdzLnB1c2goJ19pbmRleCcpO1xuXHRcdH1cblxuXHRcdGNvbmRpdGlvbiA9IG1hdGNoLmdyb3Vwcy5jb25kaXRpb247XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdGNvbmRpdGlvbixcblx0XHRhcmdzLFxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtdO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblxuXHRsZXQgbG9vcCA9IHBhcnNlRWFjaENvbmRpdGlvbih0aGlzLnZhbHVlKTtcblxuXHRsZXQgdmFsdWUgPSBvcHRpb25zLmR5bmFtaWMuZXhwcmVzc2lvbihsb29wLmNvbmRpdGlvbiwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblx0cGFyYW1zLnB1c2godmFsdWUpO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGJvZHkucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKTtcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGJvZHkucHVzaChyZXR1cm5Qb2ludGVyKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oXG5cdFx0XHRsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSlcblx0XHQpXG5cdCk7XG5cblxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19lYWNoJCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHByb2dyYW0gZnJvbSAnLi9wcm9ncmFtJztcbmltcG9ydCBzdGF0ZW1lbnQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcbmltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9zbG90JztcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgeyBwcm9ncmFtLCBzdGF0ZW1lbnQsIGVhY2gsIG5vZGUsIHRleHQsIHNsb3QsIGNvbXBvbmVudCB9IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4uL2R5bmFtaWMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLm1ha2VWYWx1ZSk7XG5cdC8vIH1cdFxuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJsb2NrID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRsZXQgYm9keSA9IFtdO1xuXG5cdFx0dGhpcy5jaGlsZHJlbltpXS5oYW5kbGUoYm9keSwge1xuXHRcdFx0bGFzdENvbnRleHRWYXJpYWJsZUlkOiBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRwYXJhbXMucHVzaChpZChibG9jay52YWx1ZSkpO1xuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHRcdCk7XG5cdH1cblxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zdGF0ZW1lbnQkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dChjb250ZXh0LCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwb2ludGVyID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24obCwgaWQoJ2ZpcnN0Q2hpbGQnKSksXG5cdFx0XHRsXG5cdFx0KVxuXHR9KTtcblxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCB0eXBlKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQodHlwZSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBjdXN0b21EZWZpbmVyID0gZmFsc2UpXG57XG5cdG9wdGlvbnMuY3JlYXRlQ29udGV4dCgpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXR5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRIYW5kbGUoZW50aXR5LmNoaWxkcmVuW2ldLCBjb250ZXh0LCBvcHRpb25zLCBpLCBjdXN0b21EZWZpbmVyKTtcblx0fVxuXG5cdGxldCBsYXN0Q2hpbGQgPSBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCk7XG5cblx0b3B0aW9ucy5yZW1vdmVDb250ZXh0KCk7XG5cblx0cmV0dXJuIGxhc3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkSGFuZGxlKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgaW5kZXgsIGN1c3RvbURlZmluZXIpXG57XG5cdGxldCBpc0ZpcnN0ID0gaW5kZXggPT09IDA7XG5cblx0aWYoY3VzdG9tRGVmaW5lciAmJiBpc0ZpcnN0KSB7XG5cdFx0Y3VzdG9tRGVmaW5lcihjb250ZXh0LCBvcHRpb25zKTtcblx0fSBlbHNlIHtcblx0XHRpZighZW50aXR5LnNraXBJbml0KCkpIHtcblx0XHRcdG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIGlzRmlyc3QgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdH1cblx0fVxuXG5cdGVudGl0eS5oYW5kbGUoY29udGV4dCwgb3B0aW9ucyk7XG59IiwiLy8gZXZlbnRzIC0gQCAtPiBpZChhdHRycyB2YWx1ZSlcbi8vIGV4cHJlc3Npb24gOiBpZChhdHRycylcbi8vIHN0cmluZ2xpdHRlcmFsIFxuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbnZhciBpc0F0dHIgPSBtYWtlTWFwKFxuXHQnYWNjZXB0LGFjY2VwdC1jaGFyc2V0LGFjY2Vzc2tleSxhY3Rpb24sYWxpZ24sYWx0LGFzeW5jLGF1dG9jb21wbGV0ZSwnICtcblx0J2F1dG9mb2N1cyxhdXRvcGxheSxhdXRvc2F2ZSxiZ2NvbG9yLGJvcmRlcixidWZmZXJlZCxjaGFsbGVuZ2UsY2hhcnNldCwnICtcblx0J2NoZWNrZWQsY2l0ZSxjbGFzcyxjb2RlLGNvZGViYXNlLGNvbG9yLGNvbHMsY29sc3Bhbixjb250ZW50LGh0dHAtZXF1aXYsJyArXG5cdCduYW1lLGNvbnRlbnRlZGl0YWJsZSxjb250ZXh0bWVudSxjb250cm9scyxjb29yZHMsZGF0YSxkYXRldGltZSxkZWZhdWx0LCcgK1xuXHQnZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsbWV0aG9kLGZvciwnICtcblx0J2Zvcm0sZm9ybWFjdGlvbixoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsJyArXG5cdCdpY29uLGlkLGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxpc3QsbG9vcCxsb3csJyArXG5cdCdtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1lZGlhLG1ldGhvZCxHRVQsUE9TVCxtaW4sbXVsdGlwbGUsZW1haWwsZmlsZSwnICtcblx0J211dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlciwnICtcblx0J3ByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsJyArXG5cdCdzY29wZSxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc2hhcGUsc2l6ZSx0eXBlLHRleHQscGFzc3dvcmQsc2l6ZXMsc3BhbiwnICtcblx0J3NwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsJyArXG5cdCd0YXJnZXQsdGl0bGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcCdcbik7XG5cbnZhciBpc0RvbUF0dHIgPSAobmFtZSkgPT4ge1xuXHRyZXR1cm4gaXNBdHRyKG5hbWUpIHx8IG5hbWUubWF0Y2goL15kYXRhXFwtL2cpO1xufVxuXG5mdW5jdGlvbiBtYWtlVmFsdWUodmFsdWUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlKVxue1xuXHRyZXR1cm4ge1xuXHRcdHZhbHVlLFxuXHRcdGlzRXhwcmVzc2lvbixcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMob2JqKVxue1xuXHRsZXQgZXZlbnRzID0ge307XG5cdGxldCBwcm9wcyA9IHt9O1xuXHRsZXQgYXR0cmlidXRlcyA9IHt9O1xuXHRsZXQgc3RhdGljQXR0cnMgPSB7fTtcblxuXHRmb3IobGV0IG5hbWUgaW4gb2JqKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gb2JqW25hbWVdO1xuXG5cdFx0aWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRzdGF0aWNBdHRyc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eQC9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXkAvZywgJycpO1xuXHRcdFx0ZXZlbnRzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXlxcOi9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXlxcOi9nLCAnJyk7XG5cdFx0XHRpZihpc0RvbUF0dHIobmFtZSkpIHtcblx0XHRcdFx0YXR0cmlidXRlc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcm9wc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlKTtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoYEF0dHIgJHtuYW1lfSBkb2VzbnQgcmVnaXN0ZXJlZC4gQ2FudCB1bmRlcnN0YW5kIHR5cGUuYClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRpY0F0dHJzOiBzdGF0aWNBdHRycyxcblx0XHRldmVudHMsXG5cdFx0cHJvcHMsXG5cdFx0YXR0cmlidXRlcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwcmVwYXJlIH0gZnJvbSAnLi9wcmVwYXJlJztcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJzZXIgYXMgSFRNTFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2tzKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRsZXQgbWF0Y2hlcyA9IHJlZ2V4cC5leGVjKGh0bWwpO1xuXHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdGJsb2Nrc1trZXldID0gbWF0Y2hlc1sxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoaHRtbClcbntcblx0Ly8gZ2V0IGFkZGl0aW9uYWwgYmxvY2tzIGUuZy4gc2NyaXB0LCBzdHlsZSwgZG9jXG5cdGxldCBibG9ja3MgPSBwYXJzZUJsb2Nrcyh7XG5cdFx0c2NyaXB0OiBudWxsLFxuXHRcdHN0eWxlOiBudWxsLFxuXHR9LCBodG1sKTtcblxuXHQvLyBjbGVhbiB1cCBodG1sIGFuZCByZXBsYWNlIGV4cHJlc3Npb24gd2l0aCB0YWctZXhwcmVzc2lvblxuXHRodG1sID0gcHJlcGFyZShibG9ja3MsIGh0bWwpO1xuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnY29tcG9uZW50Jztcblx0fVxuXHRcblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdFxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyBuYW1lID0gJ2RlZmF1bHQnLCB0YWcgPSAnc3BhbicgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XHRcblx0Ly8gbWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdC8vIHtcblx0Ly8gXHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblxuXHQvLyBcdHRlbXBsYXRlICs9ICc+JztcblxuXHQvLyBcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHQvLyBcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0Ly8gXHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0Ly8gXHRcdHJldHVybiAnPCEtLS0tPic7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYoIXRoaXMudGFnKSB7XG5cdC8vIFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gdGVtcGxhdGU7XG5cdC8vIH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHR0aGlzLnR5cGUgPSAndGV4dCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufSIsImltcG9ydCB7IHJ1bGVzIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdG1hcChjYWxsYmFjaylcblx0e1xuXHRcdGlmKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy50eXBlICE9PSAnc3RhdGVtZW50Jykge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0Y2hpbGQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpXG5cdHtcblx0XHRyZXR1cm4gcnVsZXNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9XG5cblx0c2tpcEluaXQoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlOy8vdGhpcy50eXBlID09PSAncHJvZ3JhbScgfHwgdGhpcy50eXBlID09PSAnc2xvdCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGxldCBhdHRycyA9IHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb24uc3RhdGljQXR0cnMgOiB7fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGF0dHJzKSB7XG5cdFx0XHR0ZW1wbGF0ZSArPSBgICR7a2V5fT1cIiR7YXR0cnNba2V5XX1cImA7XG5cdFx0fVxuXG5cdFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHRcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHRcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSAmJiAhb25seUNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnRhZykge1xuXHRcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHR9XG59IiwiY29uc3QgSFRNTFRhZ3MgPSBbXG5cdFwiIWRvY3R5cGVcIiwgXCJhXCIsIFwiYWJiclwiLCBcImFjcm9ueW1cIiwgXCJhZGRyZXNzXCIsIFwiYXBwbGV0XCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsXG5cdFwiYlwiLCBcImJhc2VcIiwgXCJiYXNlZm9udFwiLCBcImJiXCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLFxuXHRcImNhcHRpb25cIiwgXCJjZW50ZXJcIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiY29tbWFuZFwiLCBcImRhdGFncmlkXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLFxuXHRcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXJcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImV2ZW50c291cmNlXCIsIFwiZmllbGRzZXRcIixcblx0XCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9udFwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJmcmFtZVwiLCBcImZyYW1lc2V0XCIsIFwiaDE+IHRvIDxoNlwiLCBcImhlYWRcIiwgXCJoZWFkZXJcIixcblx0XCJoZ3JvdXBcIiwgXCJoclwiLCBcImh0bWxcIiwgXCJpXCIsIFwiaWZyYW1lXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJpbnNcIiwgXCJpc2luZGV4XCIsIFwia2JkXCIsIFwia2V5Z2VuXCIsIFwibGFiZWxcIixcblx0XCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWVudVwiLCBcIm1ldGFcIiwgXCJtZXRlclwiLCBcIm5hdlwiLCBcIm5vZnJhbWVzXCIsIFwibm9zY3JpcHRcIixcblx0XCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicnBcIiwgXCJydFwiLFxuXHRcInJ1YnlcIiwgXCJzXCIsIFwic2FtcFwiLCBcInNjcmlwdFwiLCBcInNlY3Rpb25cIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIixcblx0XCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsXG5cdFwidHJcIiwgXCJ0cmFja1wiLCBcInR0XCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpXG57XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSlcbntcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2xpc3RbaV1dID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBleHBlY3RzTG93ZXJDYXNlID9cblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH0gOlxuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cblxuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJztcblxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cdGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRcdGlmIChyZW5kZXIpIHtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb250ZXh0ID0ge307XG5cdFx0fVxuXG5cdFx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRcdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkcHJvcHMsXG5cdFx0XHQkc2xvdHMsXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBfbWFrZUF0dHJzJCgpIHtcblxuXHR9XG5cblx0ZnVuY3Rpb24gX21ha2VFdmVudHMkKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRcdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX3Nsb3QkKCRzbG90cywgbmFtZSwgbm9kZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUuaW5uZXJIVE1MID0gJHNsb3RzW25hbWVdO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBfZWFjaCQobm9kZSwgaXRlbXMsIGZuKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGZuKG5vZGUsIGl0ZW1zW2ldLCBpKTtcblx0XHRcdGJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChib2R5KTtcblxuXHRcdHJldHVybiBib2R5O1xuXHR9XG5cblx0ZnVuY3Rpb24gX3N0YXRlbWVudCQobm9kZSwgLi4uYXJncykge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChhcmdzW2ldKSB7XG5cdFx0XHRcdHJldHVybk5vZGUgPSBhcmdzW2kgKyAxXShub2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHRsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHRjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHRjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHRyZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8ZGl2PlNvbWUgdGVzdCB0ZXh0ICR7IHRleHQxIH0gYWZ0ZXI8L2Rpdj48ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj50ZXh0PC9zcGFuPjwvZGl2Pic7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIFNjcmlwdCB0YWdcblx0XHQgKi9cblx0XHRsZXQgdGV4dDEgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCB0ZXh0MiA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQzID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgdGltZSA9IDEyMzU7XG5cblx0XHRsZXQgYyA9IGNvbXB1dGVkKHRleHQxLCAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdF9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcblx0XHRcdFwic3R5bGVcIjogMSxcblx0XHRcdFwiZGF0YS0xXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXN0OiB0ZXh0MSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KSxcblx0XHRcdFwiZGF0YS0yXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRleHQxKCk7XG5cdFx0XHR9KSxcblx0XHRcdFwiY2xhc3NcIjogY29tcHV0ZWQoW3RleHQxLCB0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIFt0ZXh0MSgpLCB7XG5cdFx0XHRcdFx0c29tZTogdGV4dDIoKSA9PT0gMlxuXHRcdFx0XHR9LCB0aW1lXTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxMyA9IF9lYWNoJChfZWwkMywgQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSksIChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBudWxsLCB0cnVlKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gX2VsJDQuZmlyc3RDaGlsZDtcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ1LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGlja1wiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdHN1YnNjcmliZShbdGV4dDFdLCAoKSA9PiB7XG5cdFx0XHRcdF9lbCQ2Lm5vZGVWYWx1ZSA9IGBTb21lIHRlc3QgdGV4dCAke3RleHQxKCl9IGFmdGVyYDtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlRXZlbnRzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGF5b3V0LmFwcGVuZENoaWxkKG1ha2VDb21wb25lbnQoKSk7XG5cdHRpbWUoJ3JlbmRlcicpO1xuXG5cdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gdG1wO1xuXG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0bWFrZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZClcblx0dGltZSgnaHlkcmF0ZScpO1xuXHQvLyBjb25zb2xlLmxvZyhsYXlvdXQuaW5uZXJIVE1MKTtcbn1cblxudGVzdCgpO1xuXG5mdW5jdGlvbiBnZXR0KCkge1xuXG5cdGxldCBodG1sID1cblx0XHRgXG5cdDxkaXY+c3RhcnQ8L2Rpdj5cblx0QGlmKDEpXG5cdDxkaXY+PC9kaXY+XG5cdGFzZGFkXG5cdFx0QGlmKDIpXG5cdFx0PGRpdj5pZmYyPC9kaXY+XG5cdFx0QGVuZGlmXG5cdGFzZGFzZFxuXHRAZWxzZWlmKHRlc3QpXG5cdDFcblx0XHQyXG5cdFx0QGVhY2goMSlcblx0XHRhc2Rhc2Rcblx0XHQ8c2xvdD5kZWZhdWx0IHRleHQgZm9yIHNsb3Q8YiBjbGFzcz1cImRcIj4xPC9iPjwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGh0bWwgPSBgXG5cdDxkaXYgY2xhc3M9XCIyXCIgOnN0eWxlPVwiMVwiIDpkYXRhLTE9XCJ7IHRlc3Q6IHRleHQxIH1cIiA6ZGF0YS0yPVwidGV4dDFcIiA6Y2xhc3M9XCJbdGV4dDEsIHsgc29tZTogdGV4dDIgPT09IDIgfSwgdGltZV1cIiA6cHJvcDE9XCIxMjNcIj5cblx0QGVhY2goKGl0ZW0xLCBrZXkxKSBpbiBpdGVtcylcblx0PGRpdiBAY2xpY2s9XCJtZXRob2QxXCIgQG1vdXNlZG93bj1cIm1ldGhvZDEoZXZlbnQpXCI+XG5cdFx0U29tZSB0ZXN0IHRleHQgXFwkeyB0ZXh0MSB9IGFmdGVyXG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgQG1vdXNlZG93bj1cImFsZXJ0KDIpXCI+XG5cdFx0PHNsb3Q+RGVmYXVsdCA8YiBjbGFzcz1cImRcIj5idXR0b248L2I+IHRleHQ8L3Nsb3Q+XG5cdDwvZGl2PlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgaXRlbXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxIH0sIChfLCBpKSA9PiBpKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=