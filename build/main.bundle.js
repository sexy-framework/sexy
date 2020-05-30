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
} // nextSibling


function compile(blocks) {
  var VariableCounter = 0;
  var contextStack = [];
  /**
   * Template management
   * @type {Set}
   */

  var Templates = new Set();

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
      code += "_tpl$" + index + ".innerHTML = \"" + tpl + "\";\n\n";
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
    createTemplate: createTemplate
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

var _node = __webpack_require__(/*! ./node */ "./packages/compiler/dist/rules/node.js"); // TO DO NEXT NODES


function component(context, options) {
  var _this = this;

  var init = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('getComponent'), [(0, _types.stringLiteral)(_this.name), l, (0, _types.identifier)('render')]);
  });
  context.push(init.value);

  _node.attrs.call(this, init, context, options);

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
  var _this = this; // nextNode(context, options);


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
exports.attrs = attrs;
exports.events = events;
exports.default = node;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

function attrs(point, context, options) {
  if (this.hasAttributes()) {
    var props = [];

    for (var key in this.attrs) {
      props.push(new _types.objectProperty((0, _types.stringLiteral)(key), (0, _types.stringLiteral)(this.attrs[key])));
    }

    var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_makeAttrs$'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
    context.push(expression);
  }
}

function events(point, context, options) {
  if (this.hasAttributes()) {
    var props = [];

    for (var key in this.attrs) {
      props.push(new _types.objectProperty((0, _types.stringLiteral)(key), (0, _types.stringLiteral)(this.attrs[key])));
    }

    var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('makeAttrs'), [point, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
    context.push(expression);
  }
}

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
  // 	context.push(template.value);
  // }	
  attrs.call(this, options.getLastVariableId(), context, options);
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

var _analyser = __webpack_require__(/*! @hawa/analyser */ "./packages/analyser/dist/index.js");

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

  html = (0, _prepare.prepare)(blocks, html); // Analyse javascript. Get stateful vars and deps

  if (blocks.script) {
    (0, _analyser.analyse)(blocks.script);
  } // Parse TAGs


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
  blocks.template = stack[0]; // console.log(stack, blocks)

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
  console.log(html);
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
    _this.attrs = attrs;
    _this.children = [];
    _this.type = 'component';
    return _this;
  }

  var _proto = Component.prototype;

  _proto.hasAttributes = function hasAttributes() {
    return Object.keys(this.attrs).length > 0;
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
    _this.attrs = attrs;
    _this.children = [];
    _this.type = 'node';
    return _this;
  }

  var _proto = Node.prototype;

  _proto.hasAttributes = function hasAttributes() {
    return Object.keys(this.attrs).length > 0;
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
    } // console.log(this, onlyChildren)


    var template = "<" + this.tag;

    for (var key in this.attrs) {
      template += " " + key + "=\"" + this.attrs[key] + "\"";
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
var HTMLTags = ["!doctype", "a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bb", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "datagrid", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "eventsource", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1> to <h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"];

function isComponent(name) {
  return !HTMLTags.includes(name);
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
      templates = _gett.templates; // console.log(render);
  // console.log(templates);
  // return;

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
  html = "\n\t<div>\n\t@each(1)\n\t<div>1</div>\n\t<div class=\"button\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcmVwYXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9TbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9Xcml0YWJsZVN0cmVhbSAoaWdub3JlZCkiXSwibmFtZXMiOlsiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnRleHQiLCJvYnNlcnZhYmxlcyIsInZhcnMiLCJtZXRob2RzIiwiY29udGV4dFN0YWNrIiwibmFtZSIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwiaWQiLCJwYXRoIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiaXNTdWJDb250ZXh0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiZXhpdCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiVmFyaWFibGVDb3VudGVyIiwiVGVtcGxhdGVzIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImluaXQiLCJMYXN0VmFyaWFibGVJZCIsImdldExhc3RWYXJpYWJsZUlkIiwiZ2V0Q3VycmVudENvbnRleHQiLCJBY3Rpb24iLCJkZWxjYXJhdGlvblZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsInNldExhc3RWYXJpYWJsZUlkIiwiZW50aXR5IiwiYmxvY2tzIiwiYm9keSIsIm9wdGlvbnMiLCJyZW1vdmVDb250ZXh0IiwiY3JlYXRlVmFyaWFibGUiLCJjcmVhdGVUZW1wbGF0ZSIsImhhbmRsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlbmRlciIsInRlbXBsYXRlcyIsImdldFRlbXBsYXRlcyIsImNhbGxFeHByZXNzaW9uIiwiYXR0cnMiLCJtZW1iZXJFeHByZXNzaW9uIiwicGFyYW1zIiwibGFzdENoaWxkIiwiZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUiLCJyZXR1cm5Qb2ludGVyIiwicmV0dXJuU3RhdGVtZW50IiwiY29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsImV4cHJlc3Npb24iLCJwcm9wcyIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvblN0YXRlbWVudCIsIm9iamVjdEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJyZWdleHAiLCJtYXRjaGVzIiwicGFyc2VCbG9ja3MiLCJzY3JpcHQiLCJzdHlsZSIsImh0bWwiLCJzdGFjayIsIkV4cHJlc3Npb24iLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwicGFyZW50IiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIm5vZGUiLCJUZXh0Iiwib25jbG9zZXRhZyIsInJlbW92ZWQiLCJkZWNvZGVFbnRpdGllcyIsImNvbnNvbGUiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJUeXBlIiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJjaGlsZCIsInJ1bGVzIiwic2tpcEluaXQiLCJvbmx5Q2hpbGRyZW4iLCJjaGlsZFRlbXBsYXRlIiwiSFRNTFRhZ3MiLCJ0ZXN0IiwiZ2V0Tm9kZSIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJwYXJzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCIkcHJvcHMiLCIkc2xvdHMiLCJfbWFrZUF0dHJzJCIsIl9zbG90JCIsImNhbGxiYWNrIiwiaW5uZXJIVE1MIiwiX2VhY2gkIiwiaXRlbXMiLCJmbiIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImxlbmd0aCIsImFwcGVuZENoaWxkIiwicmVwbGFjZVdpdGgiLCJfc3RhdGVtZW50JCIsInJldHVybk5vZGUiLCJhcmdzIiwiZ2V0dCIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJfZWwkMyIsIl9lbCQxMyIsIml0ZW0iLCJrZXkiLCJfZWwkNCIsIl9lbCQ1IiwiX2VsJDYiLCJfZWwkNyIsIm5leHRTaWJsaW5nIiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwiZCIsImxvZyIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0Es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QUMrRCxHQUFSLFdBQW9CN0osSUFBcEIsU0FBOEJnSyxHQUFHLEdBQUdGLEtBQUssQ0FBQzlKLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPOEosS0FBSyxDQUFDOUosSUFBRCxDQUFaO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB7IGNvbnRleHQsIGRlcGVuZGVuY2llcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHlzZShzb3VyY2UpXG57XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdGxldCBkYXRhID0gY29udGV4dChhc3QpO1xuXHRsZXQgZGVwcyA9IGRlcGVuZGVuY2llcyhhc3QsIGRhdGEub2JzZXJ2YWJsZXMpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29udGV4dDogZGF0YSxcblx0XHRkZXBzOiBkZXBzLFxuXHR9O1xufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQsIHBhcnNlIH0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChhc3QpXG57XG5cdGxldCBkYXRhID0ge1xuXHRcdG9ic2VydmFibGVzOiBbXSxcblx0XHR2YXJzOiBbXSxcblx0XHRtZXRob2RzOiBbXSxcblx0fVxuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0XG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHZhbHVlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgdmFsdWUuY2FsbGVlLm5hbWUgPT09ICckbycpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSBpZihbJ0Fycm93RnVuY3Rpb25FeHByZXNzaW9uJywgJ0Z1bmN0aW9uRXhwcmVzc2lvbiddLmluY2x1ZGVzKHZhbHVlLnR5cGUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGEudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkYXRhO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbmNpZXMoYXN0LCBvYnNlcnZhYmxlcyA9IFtdKVxue1xuXHRsZXQgZGVwcyA9IHt9O1xuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdFx0ZGVwczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdFx0ZGVwc1tjb250ZXh0Lm5hbWVdID0gY29udGV4dC5kZXBzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXHRcdFx0XHRsZXQgbmFtZSA9IHBhdGgubm9kZS5uYW1lO1xuXG5cdFx0XHRcdGlmKCFpc1N1YkNvbnRleHQoKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjb250ZXh0LnZhcnMuaW5jbHVkZXMobmFtZSkgJiYgb2JzZXJ2YWJsZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRjb250ZXh0LmRlcHMucHVzaChuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkZXBzO1xufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcblxuaW1wb3J0IHtcblx0dmFyaWFibGVEZWNsYXJhdGlvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHRtZW1iZXJFeHByZXNzaW9uLFxuXG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRMYWJlbGVkU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdFN0cmluZ0xpdGVyYWwsXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG5cblxuXG5cblxuXG5cbi8vIG5leHRTaWJsaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShwcm9ncmFtKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gcHJvZ3JhbS5tYWtlVGVtcGxhdGUodHJ1ZSk7XG5cblx0XHRUZW1wbGF0ZXMuYWRkKHRlbXBsYXRlKTtcblxuXHRcdHJldHVybiBpZChgX3RwbCQkeyBUZW1wbGF0ZXMuc2l6ZSB9YCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgaSA9IDA7XG5cblx0XHRmb3IobGV0IHRwbCBvZiBUZW1wbGF0ZXMpIHtcblx0XHRcdGxldCBpbmRleCA9ICsraTtcblx0XHRcdGNvZGUgKz0gYGxldCBfdHBsJCR7IGluZGV4IH0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XFxuYDtcblx0XHRcdGNvZGUgKz0gYF90cGwkJHsgaW5kZXggfS5pbm5lckhUTUwgPSBcIiR7IHRwbCB9XCI7XFxuXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250ZXh0IG1hbmFnZW1lbnRcblx0ICogQHBhcmFtICB7W3R5cGVdfSBMYXN0VmFyaWFibGVJZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChpbml0ID0gZmFsc2UpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0TGFzdFZhcmlhYmxlSWQ6IGluaXQgPyBpZCgnbm9kZScpIDogZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ29udGV4dCgpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYXN0VmFyaWFibGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gZ2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldExhc3RWYXJpYWJsZUlkKHZhbHVlKVxuXHR7XG5cdFx0Z2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZCA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVmFyaWFibGUoY29udGV4dCA9IG51bGwsIEFjdGlvbiA9IChuLCBsKSA9PiBsKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRcdGxldCBkZWxjYXJhdGlvblZhbHVlID0gQWN0aW9uKG5hbWUsIGdldExhc3RWYXJpYWJsZUlkKCkpO1xuXG5cdFx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRcdG5ldyB2YXJpYWJsZURlY2xhcmF0b3IoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHRcdClcblx0XHRdKTtcblxuXHRcdHNldExhc3RWYXJpYWJsZUlkKG5hbWUpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBpbGUgdGVtcGxhdGVzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgZW50aXR5ID0gYmxvY2tzLnRlbXBsYXRlO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBvcHRpb25zID0ge1xuXHRcdGNyZWF0ZUNvbnRleHQsXG5cdFx0cmVtb3ZlQ29udGV4dCxcblx0XHRjcmVhdGVWYXJpYWJsZSxcblx0XHRnZXRMYXN0VmFyaWFibGVJZCxcblx0XHRjcmVhdGVUZW1wbGF0ZSxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycywgfSBmcm9tICcuL25vZGUnO1xuXG4vLyBUTyBETyBORVhUIE5PREVTXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0YXR0cnMuY2FsbCh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucyk7XG5cblx0bGV0IHBhcmFtcyA9IFtdO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblx0cGFyYW1zLnB1c2goaWQodGhpcy52YWx1ZSkpO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdudWxsJyksIGlkKCd0cnVlJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Ym9keS5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHRsZXQgbGFzdENoaWxkID0gY2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucywgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUpO1xuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Ym9keS5wdXNoKHJldHVyblBvaW50ZXIpO1xuXG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdGlkKCdpdGVtJyksIC8vIHJlcGxhY2Ugd2l0aCBleHByZXNzaW9uIHBhcnNlXG5cdFx0XHRpZCgna2V5JykgLy8gcmVwbGFjZSB3aXRoIGV4cHJlc3Npb24gcGFyc2Vcblx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX2VhY2gkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQgcHJvZ3JhbSBmcm9tICcuL3Byb2dyYW0nO1xuaW1wb3J0IHN0YXRlbWVudCBmcm9tICcuL3N0YXRlbWVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2gnO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL3Nsb3QnO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IHByb2dyYW0sIHN0YXRlbWVudCwgZWFjaCwgbm9kZSwgdGV4dCwgc2xvdCwgY29tcG9uZW50IH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodGhpcy5oYXNBdHRyaWJ1dGVzKCkpIHtcblx0XHRsZXQgcHJvcHMgPSBbXTtcblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRcdHByb3BzLnB1c2goXG5cdFx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0XHRwb2ludCxcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZih0aGlzLmhhc0F0dHJpYnV0ZXMoKSkge1xuXHRcdGxldCBwcm9wcyA9IFtdO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdFx0cHJvcHMucHVzaChcblx0XHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMuYXR0cnNba2V5XSksXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHR9XG5cblx0XHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0XHRpZCgnbWFrZUF0dHJzJyksIFtcblx0XHRcdFx0XHRwb2ludCxcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdC8vIH1cdFxuXG5cdGF0dHJzLmNhbGwodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2dyYW0oY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBpZCgncmVuZGVyJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKVxuXG5cdFxuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKHJldHVyblBvaW50ZXIpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtcblx0XHRpZCgnJHNsb3RzJyksXG5cdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3Nsb3QkJyksIHBhcmFtcylcblx0KTtcblxuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sXG5cdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSlcblx0XHQpXG5cdClcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc3RhdGVtZW50JCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHQoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0Ly8gfVxuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0cmV0dXJuIGlkKCdjcmVhdGVUZWFtcGxhdGUnKTtcblx0Ly8gfSk7XG5cblx0Ly8gY29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHQvLyBsZXQgcG9pbnRlciA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0aWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKCdmaXJzdENoaWxkJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGw7XG5cdC8vIH0pO1xuXHRcblx0Ly8gLy8gY29uc29sZS5sb2codGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuXHQvLyBjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFRlbXBsYXRlTm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcG9pbnRlciA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKGwsIGlkKCdmaXJzdENoaWxkJykpLFxuXHRcdFx0bFxuXHRcdClcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgdHlwZSlcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKHR5cGUpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgY3VzdG9tRGVmaW5lciA9IGZhbHNlKVxue1xuXHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkSGFuZGxlKGVudGl0eS5jaGlsZHJlbltpXSwgY29udGV4dCwgb3B0aW9ucywgaSwgY3VzdG9tRGVmaW5lcik7XG5cdH1cblxuXHRsZXQgbGFzdENoaWxkID0gb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpO1xuXG5cdG9wdGlvbnMucmVtb3ZlQ29udGV4dCgpO1xuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsImltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5cbmltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja3MoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnZXhwLmV4ZWMoaHRtbCk7XG5cdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0YmxvY2tzW2tleV0gPSBtYXRjaGVzWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IG51bGwsXG5cdFx0c3R5bGU6IG51bGwsXG5cdH0sIGh0bWwpO1xuXG5cdC8vIGNsZWFuIHVwIGh0bWwgYW5kIHJlcGxhY2UgZXhwcmVzc2lvbiB3aXRoIHRhZy1leHByZXNzaW9uXG5cdGh0bWwgPSBwcmVwYXJlKGJsb2NrcywgaHRtbCk7XG5cblx0Ly8gQW5hbHlzZSBqYXZhc2NyaXB0LiBHZXQgc3RhdGVmdWwgdmFycyBhbmQgZGVwc1xuXHRpZihibG9ja3Muc2NyaXB0KSB7XG5cdFx0YW5hbHlzZShibG9ja3Muc2NyaXB0KTtcblx0fVxuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coc3RhY2ssIGJsb2Nrcylcblx0cmV0dXJuIGJsb2Nrcztcbn1cbiIsImZ1bmN0aW9uIHByZXBhcmVIVE1MKGh0bWwpXG57XG5cdHJldHVybiBodG1sLnJlcGxhY2UoL1xcdC9nLCAnICcpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuXHR9XG5cblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRlYWNoL2csICc8L2V4cHI+JylcblxuXHRcdGNvbnNvbGUubG9nKGh0bWwpO1xuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cnMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRycykubGVuZ3RoID4gMFxuXHR9XHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRza2lwSW5pdCgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7Ly90aGlzLnR5cGUgPT09ICdwcm9ncmFtJyB8fCB0aGlzLnR5cGUgPT09ICdzbG90Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHR7XG5cdFx0Ly8gY29uc29sZS5sb2codGhpcywgb25seUNoaWxkcmVuKVxuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRcdHRlbXBsYXRlICs9IGAgJHtrZXl9PVwiJHt0aGlzLmF0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCJcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudChuYW1lKSB7XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5cbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuXG5cblxuZnVuY3Rpb24gdGVzdCgpIHtcblxuXHRmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0XHRpZiAocmVuZGVyKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGV4dCA9IHt9O1xuXHRcdH1cblxuXHRcdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0XHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0JHByb3BzLFxuXHRcdFx0JHNsb3RzLFxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX21ha2VBdHRycyQoKSB7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIF9zbG90JCgkc2xvdHMsIG5hbWUsIG5vZGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub2RlLmlubmVySFRNTCA9ICRzbG90c1tuYW1lXTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2VhY2gkKG5vZGUsIGl0ZW1zLCBmbikge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5vZGUgPSBmbihub2RlLCBpdGVtc1tpXSwgaSk7XG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblxuXHRcdG5vZGUucmVwbGFjZVdpdGgoYm9keSk7XG5cblx0XHRyZXR1cm4gYm9keTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9zdGF0ZW1lbnQkKG5vZGUsIC4uLmFyZ3MpIHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGZhbHNlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoYXJnc1tpXSkge1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gYXJnc1tpICsgMV0obm9kZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXR1cm5Ob2RlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblxuXHRcdHJldHVybiByZXR1cm5Ob2RlO1xuXHR9XG5cblx0bGV0IHsgcmVuZGVyLCB0ZW1wbGF0ZXMgfSA9IGdldHQoKTtcblxuXHQvLyBjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHQvLyBjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHQvLyByZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gXCI8ZGl2PjwhLS0tLT48L2Rpdj5cIjtcblxuXHRsZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDIuaW5uZXJIVE1MID0gXCI8ZGl2PjE8L2Rpdj48ZGl2IGNsYXNzPVxcXCJidXR0b25cXFwiPjxzcGFuPkRlZmF1bHQgPGIgY2xhc3M9XFxcImRcXFwiPmJ1dHRvbjwvYj4gdGV4dDwvc3Bhbj48L2Rpdj5cIjtcblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdGxldCB7ICRwcm9wcywgJHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cblx0XHRsZXQgX2VsJDEzID0gX2VhY2gkKF9lbCQzLCBbMV0sIChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBudWxsLCB0cnVlKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG5cdFx0XHRsZXQgX2VsJDYgPSBfZWwkNS5maXJzdENoaWxkO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlQXR0cnMkKF9lbCQ3LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGFzc1wiOiBcImJ1dHRvblwiXG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRcdF9tYWtlQXR0cnMkKF9lbCQxMCwgcmVuZGVyLCB7XG5cdFx0XHRcdFx0XCJjbGFzc1wiOiBcImRcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGV0IGQgPSBtYWtlQ29tcG9uZW50KCk7XG5cblx0bGF5b3V0LmFwcGVuZENoaWxkKGQpO1xuXG5cdGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xuXHR0aW1lKCdyZW5kZXInKTtcbn1cblxudGVzdCgpO1xuXG5mdW5jdGlvbiBnZXR0KCkge1xuXG5cdGxldCBodG1sID1cblx0XHRgXG5cdDxkaXY+c3RhcnQ8L2Rpdj5cblx0QGlmKDEpXG5cdDxkaXY+PC9kaXY+XG5cdGFzZGFkXG5cdFx0QGlmKDIpXG5cdFx0PGRpdj5pZmYyPC9kaXY+XG5cdFx0QGVuZGlmXG5cdGFzZGFzZFxuXHRAZWxzZWlmKHRlc3QpXG5cdDFcblx0XHQyXG5cdFx0QGVhY2goMSlcblx0XHRhc2Rhc2Rcblx0XHQ8c2xvdD5kZWZhdWx0IHRleHQgZm9yIHNsb3Q8YiBjbGFzcz1cImRcIj4xPC9iPjwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGh0bWwgPSBgXG5cdDxkaXY+XG5cdEBlYWNoKDEpXG5cdDxkaXY+MTwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+XG5cdFx0PHNsb3Q+RGVmYXVsdCA8YiBjbGFzcz1cImRcIj5idXR0b248L2I+IHRleHQ8L3Nsb3Q+XG5cdDwvZGl2PlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgdGltZSA9IDEyMzU7XG5cblx0bGV0IGMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIHRpbWUgKyB0ZXh0MTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1ldGhvZDEoKSB7XG5cdFx0bGV0IGQgPSB0ZXh0MigpO1xuXG5cdFx0bGV0IHRleHQxID0gJ3NvbWUnO1xuXG5cdFx0dGV4dDE7XG5cdH1cblx0PC9zY3JpcHQ+XG5cdGBcblx0bGV0IGJsb2NrcyA9IHBhcnNlKGh0bWwpO1xuXG5cdHJldHVybiBjb21waWxlKGJsb2Nrcyk7XG5cdC8vIGNvbnNvbGUubG9nKGh0bWwpO1xufVxuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==