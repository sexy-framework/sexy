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

/***/ "./packages/compiler/dist/attrs/attrs.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/attrs/attrs.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attrs = attrs;

function attrs(obj) {}

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
Object.defineProperty(exports, "attrs", {
  enumerable: true,
  get: function get() {
    return _attrs.default;
  }
});

var _attrs = _interopRequireDefault(__webpack_require__(/*! ./attrs */ "./packages/compiler/dist/attrs/attrs.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
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

    if (isAttr(name)) {
      staticAttrs[name] = value;
    } else if (name.match(/^@/g)) {
      events[name] = makeValue(value, true);
    } else if (name.match(/^\:/g)) {
      name = name.replace(/^\:/g, '');

      if (isAttr(name)) {
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
    } // console.log(this, onlyChildren)


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
  html = "\n\t<div class=\"2\" :style=\"1\" :prop1=\"123\">\n\t@each(1)\n\t<div>1</div>\n\t<div class=\"button\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9hdHRycy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2F0dHJzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvY29tcGlsZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2F0dHJzLmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcmVwYXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9TbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3Rlc3QvdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9Xcml0YWJsZVN0cmVhbSAoaWdub3JlZCkiXSwibmFtZXMiOlsiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnRleHQiLCJvYnNlcnZhYmxlcyIsInZhcnMiLCJtZXRob2RzIiwiY29udGV4dFN0YWNrIiwibmFtZSIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImVudGVyIiwiaWQiLCJwYXRoIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiaXNTdWJDb250ZXh0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjcmVhdGVDb250ZXh0IiwiZXhpdCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiVmFyaWFibGVDb3VudGVyIiwiVGVtcGxhdGVzIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImluaXQiLCJMYXN0VmFyaWFibGVJZCIsImdldExhc3RWYXJpYWJsZUlkIiwiZ2V0Q3VycmVudENvbnRleHQiLCJBY3Rpb24iLCJkZWxjYXJhdGlvblZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsInNldExhc3RWYXJpYWJsZUlkIiwiZW50aXR5IiwiYmxvY2tzIiwiYm9keSIsIm9wdGlvbnMiLCJyZW1vdmVDb250ZXh0IiwiY3JlYXRlVmFyaWFibGUiLCJjcmVhdGVUZW1wbGF0ZSIsImhhbmRsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlbmRlciIsInRlbXBsYXRlcyIsImdldFRlbXBsYXRlcyIsImNhbGxFeHByZXNzaW9uIiwiYXR0cnMiLCJtZW1iZXJFeHByZXNzaW9uIiwicGFyYW1zIiwibGFzdENoaWxkIiwiZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUiLCJyZXR1cm5Qb2ludGVyIiwicmV0dXJuU3RhdGVtZW50IiwiY29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsImV4cHJlc3Npb24iLCJwcm9wcyIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvblN0YXRlbWVudCIsIm9iamVjdEV4cHJlc3Npb24iLCJibG9jayIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsInBvaW50ZXIiLCJjdXN0b21EZWZpbmVyIiwiY2hpbGRIYW5kbGUiLCJpc0ZpcnN0IiwibmV4dE5vZGUiLCJpc0F0dHIiLCJpc0V4cHJlc3Npb24iLCJldmVudHMiLCJhdHRyaWJ1dGVzIiwic3RhdGljQXR0cnMiLCJvYmoiLCJtYWtlVmFsdWUiLCJyZWdleHAiLCJtYXRjaGVzIiwicGFyc2VCbG9ja3MiLCJzY3JpcHQiLCJzdHlsZSIsImh0bWwiLCJzdGFjayIsIkV4cHJlc3Npb24iLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwicGFyZW50IiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIm5vZGUiLCJUZXh0Iiwib25jbG9zZXRhZyIsInJlbW92ZWQiLCJkZWNvZGVFbnRpdGllcyIsInByZXBhcmVIVE1MIiwiaGFzQXR0cmlidXRlcyIsIk9iamVjdCIsIlR5cGUiLCJ0YWciLCJtYWtlVGVtcGxhdGUiLCJtYXAiLCJhZGRDaGlsZCIsImNoaWxkIiwicnVsZXMiLCJza2lwSW5pdCIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsImxpc3QiLCJzdHIiLCJleHBlY3RzTG93ZXJDYXNlIiwidmFsIiwidGVzdCIsImdldE5vZGUiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwicGFyc2VDb250ZXh0IiwidW5kZWZpbmVkIiwiJHByb3BzIiwiJHNsb3RzIiwiX21ha2VBdHRycyQiLCJfc2xvdCQiLCJjYWxsYmFjayIsImlubmVySFRNTCIsIl9lYWNoJCIsIml0ZW1zIiwiZm4iLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJsZW5ndGgiLCJhcHBlbmRDaGlsZCIsInJlcGxhY2VXaXRoIiwiX3N0YXRlbWVudCQiLCJyZXR1cm5Ob2RlIiwiYXJncyIsImdldHQiLCJjb25zb2xlIiwibG9nIiwiX3RwbCQxIiwiY3JlYXRlRWxlbWVudCIsIl90cGwkMiIsIm1ha2VDb21wb25lbnQiLCJfZWwkMSIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsIl9lbCQzIiwiX2VsJDEzIiwiaXRlbSIsImtleSIsIl9lbCQ0IiwiX2VsJDUiLCJfZWwkNiIsIl9lbCQ3IiwibmV4dFNpYmxpbmciLCJfZWwkOCIsIl9lbCQ5IiwiX2VsJDEwIiwiX2VsJDExIiwiX2VsJDEyIiwibGF5b3V0IiwiZ2V0RWxlbWVudEJ5SWQiLCJkIiwidGltZXMiLCJ0aW1lIiwibm93IiwiRGF0ZSIsImdldFRpbWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QVo7QUFDQTs7QUFFRCtJLFNBQU8sQ0FBQ0MsR0FBUixXQUFvQmhKLElBQXBCLFNBQThCMkssR0FBRyxHQUFHRixLQUFLLENBQUN6SyxJQUFELENBQXpDLEVBQWlELElBQWpEO0FBRUEsU0FBT3lLLEtBQUssQ0FBQ3pLLElBQUQsQ0FBWjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEQsZSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc291cmNlKVxue1xuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJy4vcGFyc2UnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50LCBwYXJzZSB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdFxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIHZhbHVlLmNhbGxlZS5uYW1lID09PSAnJG8nKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhLnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGF0YTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW5jaWVzKGFzdCwgb2JzZXJ2YWJsZXMgPSBbXSlcbntcblx0bGV0IGRlcHMgPSB7fTtcblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGVwcztcbn0iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIENvbXBvbmVudCwgU2xvdCB9IiwiXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMob2JqKVxue1xuXHRcbn0iLCJpbXBvcnQgYXR0cnMgZnJvbSAnLi9hdHRycyc7XG5cbmV4cG9ydCB7IGF0dHJzIH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcblxuaW1wb3J0IHtcblx0dmFyaWFibGVEZWNsYXJhdGlvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHRtZW1iZXJFeHByZXNzaW9uLFxuXG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRMYWJlbGVkU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdFN0cmluZ0xpdGVyYWwsXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cblxuXG5cblxuXG5cblxuLy8gbmV4dFNpYmxpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoYmxvY2tzKVxue1xuXHRsZXQgVmFyaWFibGVDb3VudGVyID0gMDtcblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXG5cdC8qKlxuXHQgKiBUZW1wbGF0ZSBtYW5hZ2VtZW50XG5cdCAqIEB0eXBlIHtTZXR9XG5cdCAqL1xuXHRsZXQgVGVtcGxhdGVzID0gbmV3IFNldCgpO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHByb2dyYW0pXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBwcm9ncmFtLm1ha2VUZW1wbGF0ZSh0cnVlKTtcblxuXHRcdFRlbXBsYXRlcy5hZGQodGVtcGxhdGUpO1xuXG5cdFx0cmV0dXJuIGlkKGBfdHBsJCR7IFRlbXBsYXRlcy5zaXplIH1gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRlbXBsYXRlcygpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdGZvcihsZXQgdHBsIG9mIFRlbXBsYXRlcykge1xuXHRcdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdFx0Y29kZSArPSBgbGV0IF90cGwkJHsgaW5kZXggfSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcXG5gO1xuXHRcdFx0Y29kZSArPSBgX3RwbCQkeyBpbmRleCB9LmlubmVySFRNTCA9ICckeyB0cGwgfSc7XFxuXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250ZXh0IG1hbmFnZW1lbnRcblx0ICogQHBhcmFtICB7W3R5cGVdfSBMYXN0VmFyaWFibGVJZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChpbml0ID0gZmFsc2UpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0TGFzdFZhcmlhYmxlSWQ6IGluaXQgPyBpZCgnbm9kZScpIDogZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ29udGV4dCgpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYXN0VmFyaWFibGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gZ2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldExhc3RWYXJpYWJsZUlkKHZhbHVlKVxuXHR7XG5cdFx0Z2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZCA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVmFyaWFibGUoY29udGV4dCA9IG51bGwsIEFjdGlvbiA9IChuLCBsKSA9PiBsKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRcdGxldCBkZWxjYXJhdGlvblZhbHVlID0gQWN0aW9uKG5hbWUsIGdldExhc3RWYXJpYWJsZUlkKCkpO1xuXG5cdFx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRcdG5ldyB2YXJpYWJsZURlY2xhcmF0b3IoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHRcdClcblx0XHRdKTtcblxuXHRcdHNldExhc3RWYXJpYWJsZUlkKG5hbWUpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBpbGUgdGVtcGxhdGVzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgZW50aXR5ID0gYmxvY2tzLnRlbXBsYXRlO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBvcHRpb25zID0ge1xuXHRcdGNyZWF0ZUNvbnRleHQsXG5cdFx0cmVtb3ZlQ29udGV4dCxcblx0XHRjcmVhdGVWYXJpYWJsZSxcblx0XHRnZXRMYXN0VmFyaWFibGVJZCxcblx0XHRjcmVhdGVUZW1wbGF0ZSxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cdC8qKlxuXHQgKiBHZW5lcmF0ZSBjb2RlXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgY29kZSA9IGdlbmVyYXRlKHByb2dyYW0oXG5cdFx0Ym9keSwgXG5cdFx0W10sXG5cdFx0J21vZHVsZSdcblx0KSwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4ge1xuXHRcdHJlbmRlcjogY29kZS5jb2RlLFxuXHRcdHRlbXBsYXRlczogZ2V0VGVtcGxhdGVzKCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycywgfSBmcm9tICcuL25vZGUnO1xuXG4vLyBUTyBETyBORVhUIE5PREVTXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0YXR0cnMuY2FsbCh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucyk7XG5cblx0bGV0IHBhcmFtcyA9IFtdO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdHBhcmFtcy5wdXNoKG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSlcblx0cGFyYW1zLnB1c2goaWQodGhpcy52YWx1ZSkpO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdudWxsJyksIGlkKCd0cnVlJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Ym9keS5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHRsZXQgbGFzdENoaWxkID0gY2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucywgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUpO1xuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Ym9keS5wdXNoKHJldHVyblBvaW50ZXIpO1xuXG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdGlkKCdpdGVtJyksIC8vIHJlcGxhY2Ugd2l0aCBleHByZXNzaW9uIHBhcnNlXG5cdFx0XHRpZCgna2V5JykgLy8gcmVwbGFjZSB3aXRoIGV4cHJlc3Npb24gcGFyc2Vcblx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX2VhY2gkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQgcHJvZ3JhbSBmcm9tICcuL3Byb2dyYW0nO1xuaW1wb3J0IHN0YXRlbWVudCBmcm9tICcuL3N0YXRlbWVudCc7XG5pbXBvcnQgZWFjaCBmcm9tICcuL2VhY2gnO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9ub2RlJztcbmltcG9ydCB0ZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgc2xvdCBmcm9tICcuL3Nsb3QnO1xuaW1wb3J0IGNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IHByb2dyYW0sIHN0YXRlbWVudCwgZWFjaCwgbm9kZSwgdGV4dCwgc2xvdCwgY29tcG9uZW50IH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodGhpcy5oYXNBdHRyaWJ1dGVzKCkpIHtcblx0XHRsZXQgcHJvcHMgPSBbXTtcblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRcdHByb3BzLnB1c2goXG5cdFx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0XHRwb2ludCxcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZih0aGlzLmhhc0F0dHJpYnV0ZXMoKSkge1xuXHRcdGxldCBwcm9wcyA9IFtdO1xuXG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdFx0cHJvcHMucHVzaChcblx0XHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMuYXR0cnNba2V5XSksXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHR9XG5cblx0XHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0XHRpZCgnbWFrZUF0dHJzJyksIFtcblx0XHRcdFx0XHRwb2ludCxcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdC8vIH1cdFxuXG5cdGF0dHJzLmNhbGwodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2dyYW0oY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBpZCgncmVuZGVyJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKVxuXG5cdFxuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKHJldHVyblBvaW50ZXIpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBhcmFtcyA9IFtcblx0XHRpZCgnJHNsb3RzJyksXG5cdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihpZCgnX3Nsb3QkJyksIHBhcmFtcylcblx0KTtcblxuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sXG5cdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSlcblx0XHQpXG5cdClcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc3RhdGVtZW50JCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHQoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0Ly8gfVxuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0cmV0dXJuIGlkKCdjcmVhdGVUZWFtcGxhdGUnKTtcblx0Ly8gfSk7XG5cblx0Ly8gY29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHQvLyBsZXQgcG9pbnRlciA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0aWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKCdmaXJzdENoaWxkJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGw7XG5cdC8vIH0pO1xuXHRcblx0Ly8gLy8gY29uc29sZS5sb2codGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuXHQvLyBjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFRlbXBsYXRlTm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcG9pbnRlciA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKGwsIGlkKCdmaXJzdENoaWxkJykpLFxuXHRcdFx0bFxuXHRcdClcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgdHlwZSlcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKHR5cGUpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgY3VzdG9tRGVmaW5lciA9IGZhbHNlKVxue1xuXHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkSGFuZGxlKGVudGl0eS5jaGlsZHJlbltpXSwgY29udGV4dCwgb3B0aW9ucywgaSwgY3VzdG9tRGVmaW5lcik7XG5cdH1cblxuXHRsZXQgbGFzdENoaWxkID0gb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpO1xuXG5cdG9wdGlvbnMucmVtb3ZlQ29udGV4dCgpO1xuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsIi8vIGV2ZW50cyAtIEAgLT4gaWQoYXR0cnMgdmFsdWUpXG4vLyBleHByZXNzaW9uIDogaWQoYXR0cnMpXG4vLyBzdHJpbmdsaXR0ZXJhbCBcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL3V0aWxzJztcblxuXG52YXIgaXNBdHRyID0gbWFrZU1hcChcblx0J2FjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsdCxhc3luYyxhdXRvY29tcGxldGUsJyArXG5cdCdhdXRvZm9jdXMsYXV0b3BsYXksYXV0b3NhdmUsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2hhbGxlbmdlLGNoYXJzZXQsJyArXG5cdCdjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxodHRwLWVxdWl2LCcgK1xuXHQnbmFtZSxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGRhdGEsZGF0ZXRpbWUsZGVmYXVsdCwnICtcblx0J2RlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLG1ldGhvZCxmb3IsJyArXG5cdCdmb3JtLGZvcm1hY3Rpb24saGVhZGVycyxoZWlnaHQsaGlkZGVuLGhpZ2gsaHJlZixocmVmbGFuZyxodHRwLWVxdWl2LCcgK1xuXHQnaWNvbixpZCxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsaXN0LGxvb3AsbG93LCcgK1xuXHQnbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtZWRpYSxtZXRob2QsR0VULFBPU1QsbWluLG11bHRpcGxlLGVtYWlsLGZpbGUsJyArXG5cdCdtdXRlZCxuYW1lLG5vdmFsaWRhdGUsb3BlbixvcHRpbXVtLHBhdHRlcm4scGluZyxwbGFjZWhvbGRlcixwb3N0ZXIsJyArXG5cdCdwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LCcgK1xuXHQnc2NvcGUsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNoYXBlLHNpemUsdHlwZSx0ZXh0LHBhc3N3b3JkLHNpemVzLHNwYW4sJyArXG5cdCdzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LCcgK1xuXHQndGFyZ2V0LHRpdGxlLHR5cGUsdXNlbWFwLHZhbHVlLHdpZHRoLHdyYXAnXG4pO1xuXG5cbmZ1bmN0aW9uIG1ha2VWYWx1ZSh2YWx1ZSwgaXNFeHByZXNzaW9uID0gZmFsc2UpXG57XG5cdHJldHVybiB7XG5cdFx0dmFsdWUsXG5cdFx0aXNFeHByZXNzaW9uLFxuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhvYmopXG57XG5cdGxldCBldmVudHMgPSB7fTtcblx0bGV0IHByb3BzID0ge307XG5cdGxldCBhdHRyaWJ1dGVzID0ge307XG5cdGxldCBzdGF0aWNBdHRycyA9IHt9O1xuXG5cdGZvcihsZXQgbmFtZSBpbiBvYmopXG5cdHtcblx0XHRsZXQgdmFsdWUgPSBvYmpbbmFtZV07XG5cblx0XHRpZihpc0F0dHIobmFtZSkpIHtcblx0XHRcdHN0YXRpY0F0dHJzW25hbWVdID0gdmFsdWU7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15AL2cpKSB7XG5cdFx0XHRldmVudHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eXFw6L2cpKSB7XG5cdFx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKC9eXFw6L2csICcnKTtcblx0XHRcdGlmKGlzQXR0cihuYW1lKSkge1xuXHRcdFx0XHRhdHRyaWJ1dGVzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUpO1xuXHRcdFx0Ly8gY29uc29sZS5lcnJvcihgQXR0ciAke25hbWV9IGRvZXNudCByZWdpc3RlcmVkLiBDYW50IHVuZGVyc3RhbmQgdHlwZS5gKVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c3RhdGljQXR0cnM6IHN0YXRpY0F0dHJzLFxuXHRcdGV2ZW50cyxcblx0XHRwcm9wcyxcblx0XHRhdHRyaWJ1dGVzLFxuXHR9O1xufSIsImltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5cbmltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VCbG9ja3MoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGxldCBtYXRjaGVzID0gcmVnZXhwLmV4ZWMoaHRtbCk7XG5cdFx0aWYobWF0Y2hlcykge1xuXHRcdFx0YmxvY2tzW2tleV0gPSBtYXRjaGVzWzFdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBibG9ja3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IG51bGwsXG5cdFx0c3R5bGU6IG51bGwsXG5cdH0sIGh0bWwpO1xuXG5cdC8vIGNsZWFuIHVwIGh0bWwgYW5kIHJlcGxhY2UgZXhwcmVzc2lvbiB3aXRoIHRhZy1leHByZXNzaW9uXG5cdGh0bWwgPSBwcmVwYXJlKGJsb2NrcywgaHRtbCk7XG5cblx0Ly8gQW5hbHlzZSBqYXZhc2NyaXB0LiBHZXQgc3RhdGVmdWwgdmFycyBhbmQgZGVwc1xuXHRpZihibG9ja3Muc2NyaXB0KSB7XG5cdFx0YW5hbHlzZShibG9ja3Muc2NyaXB0KTtcblx0fVxuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnY29tcG9uZW50Jztcblx0fVxuXHRcblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdFxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyBuYW1lID0gJ2RlZmF1bHQnLCB0YWcgPSAnc3BhbicgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XHRcblx0Ly8gbWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdC8vIHtcblx0Ly8gXHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblxuXHQvLyBcdHRlbXBsYXRlICs9ICc+JztcblxuXHQvLyBcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHQvLyBcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0Ly8gXHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0Ly8gXHRcdHJldHVybiAnPCEtLS0tPic7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYoIXRoaXMudGFnKSB7XG5cdC8vIFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gdGVtcGxhdGU7XG5cdC8vIH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHR0aGlzLnR5cGUgPSAndGV4dCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufSIsImltcG9ydCB7IHJ1bGVzIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdG1hcChjYWxsYmFjaylcblx0e1xuXHRcdGlmKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy50eXBlICE9PSAnc3RhdGVtZW50Jykge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0Y2hpbGQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpXG5cdHtcblx0XHRyZXR1cm4gcnVsZXNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9XG5cblx0c2tpcEluaXQoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlOy8vdGhpcy50eXBlID09PSAncHJvZ3JhbScgfHwgdGhpcy50eXBlID09PSAnc2xvdCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMsIG9ubHlDaGlsZHJlbilcblx0XHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblx0XHRcblx0XHRsZXQgYXR0cnMgPSB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uLnN0YXRpY0F0dHJzIDoge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBhdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCJcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudChuYW1lKVxue1xuXHRyZXR1cm4gIUhUTUxUYWdzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpXG57XG5cdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdG1hcFtsaXN0W2ldXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9IDpcblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5cbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuXG5cblxuZnVuY3Rpb24gdGVzdCgpIHtcblxuXHRmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0XHRpZiAocmVuZGVyKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGV4dCA9IHt9O1xuXHRcdH1cblxuXHRcdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0XHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0JHByb3BzLFxuXHRcdFx0JHNsb3RzLFxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX21ha2VBdHRycyQoKSB7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIF9zbG90JCgkc2xvdHMsIG5hbWUsIG5vZGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub2RlLmlubmVySFRNTCA9ICRzbG90c1tuYW1lXTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2VhY2gkKG5vZGUsIGl0ZW1zLCBmbikge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5vZGUgPSBmbihub2RlLCBpdGVtc1tpXSwgaSk7XG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblxuXHRcdG5vZGUucmVwbGFjZVdpdGgoYm9keSk7XG5cblx0XHRyZXR1cm4gYm9keTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9zdGF0ZW1lbnQkKG5vZGUsIC4uLmFyZ3MpIHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGZhbHNlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoYXJnc1tpXSkge1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gYXJnc1tpICsgMV0obm9kZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXR1cm5Ob2RlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblxuXHRcdHJldHVybiByZXR1cm5Ob2RlO1xuXHR9XG5cblx0bGV0IHsgcmVuZGVyLCB0ZW1wbGF0ZXMgfSA9IGdldHQoKTtcblxuXHRjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHRjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHRyZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gXCI8ZGl2PjwhLS0tLT48L2Rpdj5cIjtcblxuXHRsZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDIuaW5uZXJIVE1MID0gXCI8ZGl2PjE8L2Rpdj48ZGl2IGNsYXNzPVxcXCJidXR0b25cXFwiPjxzcGFuPkRlZmF1bHQgPGIgY2xhc3M9XFxcImRcXFwiPmJ1dHRvbjwvYj4gdGV4dDwvc3Bhbj48L2Rpdj5cIjtcblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdGxldCB7ICRwcm9wcywgJHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cblx0XHRsZXQgX2VsJDEzID0gX2VhY2gkKF9lbCQzLCBbMV0sIChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBudWxsLCB0cnVlKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG5cdFx0XHRsZXQgX2VsJDYgPSBfZWwkNS5maXJzdENoaWxkO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlQXR0cnMkKF9lbCQ3LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGFzc1wiOiBcImJ1dHRvblwiXG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRcdF9tYWtlQXR0cnMkKF9lbCQxMCwgcmVuZGVyLCB7XG5cdFx0XHRcdFx0XCJjbGFzc1wiOiBcImRcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGV0IGQgPSBtYWtlQ29tcG9uZW50KCk7XG5cblx0bGF5b3V0LmFwcGVuZENoaWxkKGQpO1xuXG5cdGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xuXHR0aW1lKCdyZW5kZXInKTtcbn1cblxudGVzdCgpO1xuXG5mdW5jdGlvbiBnZXR0KCkge1xuXG5cdGxldCBodG1sID1cblx0XHRgXG5cdDxkaXY+c3RhcnQ8L2Rpdj5cblx0QGlmKDEpXG5cdDxkaXY+PC9kaXY+XG5cdGFzZGFkXG5cdFx0QGlmKDIpXG5cdFx0PGRpdj5pZmYyPC9kaXY+XG5cdFx0QGVuZGlmXG5cdGFzZGFzZFxuXHRAZWxzZWlmKHRlc3QpXG5cdDFcblx0XHQyXG5cdFx0QGVhY2goMSlcblx0XHRhc2Rhc2Rcblx0XHQ8c2xvdD5kZWZhdWx0IHRleHQgZm9yIHNsb3Q8YiBjbGFzcz1cImRcIj4xPC9iPjwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGh0bWwgPSBgXG5cdDxkaXYgY2xhc3M9XCIyXCIgOnN0eWxlPVwiMVwiIDpwcm9wMT1cIjEyM1wiPlxuXHRAZWFjaCgxKVxuXHQ8ZGl2PjE8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImJ1dHRvblwiPlxuXHRcdDxzbG90PkRlZmF1bHQgPGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPiB0ZXh0PC9zbG90PlxuXHQ8L2Rpdj5cblx0QGVuZGVhY2hcblx0XG5cblx0PHNjcmlwdD5cblx0bGV0IHRleHQxID0gJG8oMSk7XG5cdGxldCB0ZXh0MiA9ICRvKDEpO1xuXHRsZXQgdGV4dDMgPSAkbygxKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=