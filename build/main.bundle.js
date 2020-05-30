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
        data.methods.push(path.node.id.name);
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
exports.makeFunction = makeFunction;
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

function makeValue(context, value, fn) {
  if (!value.isExpression) {
    return (0, _types.stringLiteral)(value.value);
  }

  var code = "tmp = " + value.value;
  var ast = parser.parse(code, {
    sourceType: "unambiguous",
    strictMode: false
  });
  return fn(ast, context);
}

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

function makeComputed(ast, context) {
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
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t@each(1)\n\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\tSome test text ${ text1 } after\n\t</div>\n\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3ZhbHVlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvY29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvbm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvc3RhdGVtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3V0aWxzLmpzIiwid2VicGFjazovLy8uLi9zcmMvYXR0cnMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3ByZXBhcmUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Db21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9FeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC90aW1lLmpzIiwid2VicGFjazovLy8uL1dyaXRhYmxlU3RyZWFtIChpZ25vcmVkKSJdLCJuYW1lcyI6WyJhc3QiLCJzb3VyY2VUeXBlIiwic3RyaWN0TW9kZSIsImRhdGEiLCJkZXBzIiwiY29udGV4dCIsIm9ic2VydmFibGVzIiwidmFycyIsIm1ldGhvZHMiLCJjb250ZXh0U3RhY2siLCJuYW1lIiwiVmFyaWFibGVEZWNsYXJhdG9yIiwiZW50ZXIiLCJpZCIsInBhdGgiLCJ2YWx1ZSIsImdldENvbnRleHQiLCJpc1N1YkNvbnRleHQiLCJBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImNyZWF0ZUNvbnRleHQiLCJleGl0IiwiY2xvc2VDb250ZXh0IiwiRnVuY3Rpb25EZWNsYXJhdGlvbiIsIklkZW50aWZpZXIiLCJWYXJpYWJsZUNvdW50ZXIiLCJUZW1wbGF0ZXMiLCJjb2RlQW5hbHlzZSIsImJsb2NrcyIsImR5bmFtaWNFeHByZXNzaW9ucyIsInRlbXBsYXRlIiwicHJvZ3JhbSIsImNvZGUiLCJpIiwidHBsIiwiaW5kZXgiLCJpbml0IiwiTGFzdFZhcmlhYmxlSWQiLCJnZXRMYXN0VmFyaWFibGVJZCIsImdldEN1cnJlbnRDb250ZXh0IiwiQWN0aW9uIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJ2YXJpYWJsZURlY2xhcmF0b3IiLCJzZXRMYXN0VmFyaWFibGVJZCIsImVudGl0eSIsImJvZHkiLCJvcHRpb25zIiwicmVtb3ZlQ29udGV4dCIsImNyZWF0ZVZhcmlhYmxlIiwiY3JlYXRlVGVtcGxhdGUiLCJkeW5hbWljIiwiaGFuZGxlIiwicmV0YWluTGluZXMiLCJjb21wYWN0IiwibWluaWZpZWQiLCJjb25jaXNlIiwicXVvdGVzIiwicmVuZGVyIiwidGVtcGxhdGVzIiwiZ2V0VGVtcGxhdGVzIiwicHJvcHMiLCJtYWtlQ29tcHV0ZWQiLCJvYmplY3RQcm9wZXJ0eSIsImV4cHJlc3Npb24iLCJleHByZXNzaW9uU3RhdGVtZW50IiwiY2FsbEV4cHJlc3Npb24iLCJvYmplY3RFeHByZXNzaW9uIiwibWFrZUZ1bmN0aW9uIiwiYXR0cnMiLCJldmVudHMiLCJjb25zb2xlIiwiZm4iLCJyZXN1bHQiLCJmdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsInJldHVyblN0YXRlbWVudCIsImFycmF5RXhwcmVzc2lvbiIsImFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwibWVtYmVyRXhwcmVzc2lvbiIsInBhcmFtcyIsImxhc3RDaGlsZCIsImdldEZpcnN0VGVtcGxhdGVOb2RlIiwicmV0dXJuUG9pbnRlciIsImNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImJsb2NrIiwibGFzdENvbnRleHRWYXJpYWJsZUlkIiwicG9pbnRlciIsImN1c3RvbURlZmluZXIiLCJjaGlsZEhhbmRsZSIsImlzRmlyc3QiLCJuZXh0Tm9kZSIsImFyZ3VtZW50cyIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwiZGVwIiwiaXNBdHRyIiwiaXNEb21BdHRyIiwiaXNFeHByZXNzaW9uIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJFeHByZXNzaW9uIiwidHlwZSIsInBhcnNlIiwiSFRNTFBhcnNlciIsIm9ub3BlbnRhZyIsInBhcmVudCIsImN1cnJlbnRTdGFja05vZGUiLCJTbG90IiwiQ29tcG9uZW50IiwiTm9kZSIsIm9udGV4dCIsInRleHQiLCJub2RlIiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJUeXBlIiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJjaGlsZCIsInJ1bGVzIiwic2tpcEluaXQiLCJvbmx5Q2hpbGRyZW4iLCJjaGlsZFRlbXBsYXRlIiwiSFRNTFRhZ3MiLCJsaXN0Iiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsInZhbCIsInRlc3QiLCJnZXROb2RlIiwiY29udGVudCIsImNsb25lTm9kZSIsInBhcnNlQ29udGV4dCIsInVuZGVmaW5lZCIsIiRwcm9wcyIsIiRzbG90cyIsIl9tYWtlQXR0cnMkIiwiX3Nsb3QkIiwiY2FsbGJhY2siLCJpbm5lckhUTUwiLCJfZWFjaCQiLCJpdGVtcyIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImxlbmd0aCIsImFwcGVuZENoaWxkIiwicmVwbGFjZVdpdGgiLCJfc3RhdGVtZW50JCIsInJldHVybk5vZGUiLCJhcmdzIiwiZ2V0dCIsImxvZyIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJfZWwkMyIsIl9lbCQxMyIsIml0ZW0iLCJrZXkiLCJfZWwkNCIsIl9lbCQ1IiwiX2VsJDYiLCJfZWwkNyIsIm5leHRTaWJsaW5nIiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwiZCIsInRpbWVzIiwidGltZSIsIm5vdyIsIkRhdGUiLCJnZXRUaW1lIl0sIm1hcHBpbmdzIjoi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Ozs7Ozs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgKiBhcyBwYXJzZXIgZnJvbSBcIkBiYWJlbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgY29udGV4dCwgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbmFseXNlKHNvdXJjZSlcbntcblx0Y29uc3QgYXN0ID0gcGFyc2VyLnBhcnNlKHNvdXJjZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0bGV0IGRhdGEgPSBjb250ZXh0KGFzdCk7XG5cdGxldCBkZXBzID0gZGVwZW5kZW5jaWVzKGFzdCwgZGF0YS5vYnNlcnZhYmxlcyk7XG5cblx0cmV0dXJuIHtcblx0XHRjb250ZXh0OiBkYXRhLFxuXHRcdGRlcHM6IGRlcHMsXG5cdH07XG59IiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICcuL3BhcnNlJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCwgcGFyc2UgfSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KGFzdClcbntcblx0bGV0IGRhdGEgPSB7XG5cdFx0b2JzZXJ2YWJsZXM6IFtdLFxuXHRcdHZhcnM6IFtdLFxuXHRcdG1ldGhvZHM6IFtdLFxuXHR9XG5cblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXHRcblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNsb3NlQ29udGV4dCgpXG5cdHtcblx0XHRsZXQgY29udGV4dCA9IGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblx0XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIHZhbHVlLmNhbGxlZS5uYW1lID09PSAnJG8nKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhLnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0ZGF0YS5tZXRob2RzLnB1c2gocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkYXRhO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXBlbmRlbmNpZXMoYXN0LCBvYnNlcnZhYmxlcyA9IFtdKVxue1xuXHRsZXQgZGVwcyA9IHt9O1xuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdFx0ZGVwczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdFx0ZGVwc1tjb250ZXh0Lm5hbWVdID0gY29udGV4dC5kZXBzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXHRcdFx0XHRsZXQgbmFtZSA9IHBhdGgubm9kZS5uYW1lO1xuXG5cdFx0XHRcdGlmKCFpc1N1YkNvbnRleHQoKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjb250ZXh0LnZhcnMuaW5jbHVkZXMobmFtZSkgJiYgb2JzZXJ2YWJsZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRjb250ZXh0LmRlcHMucHVzaChuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0XHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fSxcblx0XHRGdW5jdGlvbkRlY2xhcmF0aW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkZXBzO1xufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICcuL2R5bmFtaWMnO1xuXG5pbXBvcnQge1xuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxuXHR2YXJpYWJsZURlY2xhcmF0b3IsXG5cdG1lbWJlckV4cHJlc3Npb24sXG5cblx0RXhwb3J0RGVmYXVsdERlY2xhcmF0aW9uLFxuXHRPYmplY3RFeHByZXNzaW9uLFxuXHRPYmplY3RQcm9wZXJ0eSxcblx0T2JqZWN0TWV0aG9kLFxuXHRDYWxsRXhwcmVzc2lvbixcblx0RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0QmxvY2tTdGF0ZW1lbnQsXG5cdExhYmVsZWRTdGF0ZW1lbnQsXG5cdFJldHVyblN0YXRlbWVudCxcblx0U3RyaW5nTGl0ZXJhbCxcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cHJvZ3JhbSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuLyoqXG4gKiBDb21waWxlIHRlbXBsYXRlIHRvIERPTSBleHByZXNzaW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZShibG9ja3MpXG57XG5cdGxldCBWYXJpYWJsZUNvdW50ZXIgPSAwO1xuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0LyoqXG5cdCAqIFRlbXBsYXRlIG1hbmFnZW1lbnRcblx0ICogQHR5cGUge1NldH1cblx0ICovXG5cdGxldCBUZW1wbGF0ZXMgPSBuZXcgU2V0KCk7XG5cblx0bGV0IGNvZGVBbmFseXNlID0gYW5hbHlzZShibG9ja3Muc2NyaXB0KTtcblx0bGV0IGR5bmFtaWNFeHByZXNzaW9ucyA9IGR5bmFtaWMoY29kZUFuYWx5c2UpO1xuXHQvLyBjb25zb2xlLndhcm4oY29kZUFuYWx5c2UpO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZVRlbXBsYXRlKHByb2dyYW0pXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBwcm9ncmFtLm1ha2VUZW1wbGF0ZSh0cnVlKTtcblxuXHRcdFRlbXBsYXRlcy5hZGQodGVtcGxhdGUpO1xuXG5cdFx0cmV0dXJuIGlkKGBfdHBsJCR7IFRlbXBsYXRlcy5zaXplIH1gKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldFRlbXBsYXRlcygpXG5cdHtcblx0XHRsZXQgY29kZSA9ICcnO1xuXHRcdGxldCBpID0gMDtcblxuXHRcdGZvcihsZXQgdHBsIG9mIFRlbXBsYXRlcykge1xuXHRcdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdFx0Y29kZSArPSBgbGV0IF90cGwkJHsgaW5kZXggfSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcXG5gO1xuXHRcdFx0Y29kZSArPSBgX3RwbCQkeyBpbmRleCB9LmlubmVySFRNTCA9ICckeyB0cGwgfSc7XFxuXFxuYDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb250ZXh0IG1hbmFnZW1lbnRcblx0ICogQHBhcmFtICB7W3R5cGVdfSBMYXN0VmFyaWFibGVJZCBbZGVzY3JpcHRpb25dXG5cdCAqIEByZXR1cm4ge1t0eXBlXX0gICAgICAgICAgICAgICAgW2Rlc2NyaXB0aW9uXVxuXHQgKi9cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChpbml0ID0gZmFsc2UpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0TGFzdFZhcmlhYmxlSWQ6IGluaXQgPyBpZCgnbm9kZScpIDogZ2V0TGFzdFZhcmlhYmxlSWQoKSxcblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldEN1cnJlbnRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ29udGV4dCgpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYXN0VmFyaWFibGVJZCgpXG5cdHtcblx0XHRyZXR1cm4gZ2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHNldExhc3RWYXJpYWJsZUlkKHZhbHVlKVxuXHR7XG5cdFx0Z2V0Q3VycmVudENvbnRleHQoKS5MYXN0VmFyaWFibGVJZCA9IHZhbHVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlVmFyaWFibGUoY29udGV4dCA9IG51bGwsIEFjdGlvbiA9IChuLCBsKSA9PiBsKVxuXHR7XG5cdFx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRcdGxldCBkZWxjYXJhdGlvblZhbHVlID0gQWN0aW9uKG5hbWUsIGdldExhc3RWYXJpYWJsZUlkKCkpO1xuXG5cdFx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRcdG5ldyB2YXJpYWJsZURlY2xhcmF0b3IoXG5cdFx0XHRcdG5hbWUsXG5cdFx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHRcdClcblx0XHRdKTtcblxuXHRcdHNldExhc3RWYXJpYWJsZUlkKG5hbWUpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbXBpbGUgdGVtcGxhdGVzXG5cdCAqIEB0eXBlIHtbdHlwZV19XG5cdCAqL1xuXHRsZXQgZW50aXR5ID0gYmxvY2tzLnRlbXBsYXRlO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBvcHRpb25zID0ge1xuXHRcdGNyZWF0ZUNvbnRleHQsXG5cdFx0cmVtb3ZlQ29udGV4dCxcblx0XHRjcmVhdGVWYXJpYWJsZSxcblx0XHRnZXRMYXN0VmFyaWFibGVJZCxcblx0XHRjcmVhdGVUZW1wbGF0ZSxcblx0XHRkeW5hbWljOiBkeW5hbWljRXhwcmVzc2lvbnMsXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGUoZW50aXR5KVxuXHR7XG5cdFx0ZW50aXR5LmhhbmRsZShib2R5LCBvcHRpb25zKTtcblx0fVxuXG5cdGNyZWF0ZUNvbnRleHQodHJ1ZSk7XG5cdFtlbnRpdHldLm1hcCgoaXRlbSkgPT4gaGFuZGxlKGl0ZW0pKTtcblxuXHQvKipcblx0ICogR2VuZXJhdGUgY29kZVxuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGNvZGUgPSBnZW5lcmF0ZShwcm9ncmFtKFxuXHRcdGJvZHksIFxuXHRcdFtdLFxuXHRcdCdtb2R1bGUnXG5cdCksIHtcblx0XHRyZXRhaW5MaW5lczogZmFsc2UsXG5cdFx0Y29tcGFjdDogZmFsc2UsXG5cdFx0bWluaWZpZWQ6IGZhbHNlLFxuXHRcdGNvbmNpc2U6IGZhbHNlLFxuXHRcdHF1b3RlczogXCJkb3VibGVcIixcblx0fSk7XG5cblx0cmV0dXJuIHtcblx0XHRyZW5kZXI6IGNvZGUuY29kZSxcblx0XHR0ZW1wbGF0ZXM6IGdldFRlbXBsYXRlcygpLFxuXHR9XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgcHJvcHMgPSBbXTtcblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VBdHRycyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUZ1bmN0aW9uIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBldmVudHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uZXZlbnRzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgZW50aXR5Lm9wdGlvbi5ldmVudHNbbmFtZV0sIG1ha2VGdW5jdGlvbik7XG5cblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKG5hbWUpLFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRpZihwcm9wcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUV2ZW50cyQnKSwgW1xuXHRcdFx0XHRwb2ludCxcblx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRuZXcgb2JqZWN0RXhwcmVzc2lvbihwcm9wcyksXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQgeyBtYWtlQXR0clZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnO1xuaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xuaW1wb3J0IHsgcHJvcHMgfSBmcm9tICcuL3Byb3BzJztcbi8vIGltcG9ydCB7IHNsb3RzIH0gZnJvbSAnLi9zbG90cyc7XG5cbi8vIGV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHByb3BzIH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHluYW1pYyhjb250ZXh0KVxue1xuXHRyZXR1cm4ge1xuXHRcdGF0dHJzOiBhdHRycy5iaW5kKGNvbnRleHQpLFxuXHRcdGV2ZW50czogZXZlbnRzLmJpbmQoY29udGV4dCksXG5cdFx0cHJvcHM6IHByb3BzLmJpbmQoY29udGV4dCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvcHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKGVudGl0eS5vcHRpb24uYXR0cmlidXRlc1tuYW1lXSk7XG5cdH1cblxuXG5cdGNvbnNvbGUud2FybihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpXG5cblx0cmV0dXJuO1xuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5hdHRyc1trZXldKSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUF0dHJzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0ZnVuY3Rpb25FeHByZXNzaW9uLFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVmFsdWUoY29udGV4dCwgdmFsdWUsIGZuKVxue1xuXHRpZighdmFsdWUuaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuIHN0cmluZ0xpdGVyYWwodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0bGV0IGNvZGUgPSBgdG1wID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXHRcblx0aWYoZGVwcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRcdF0pXG5cdCk7XG5cblx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRpZCgnY29tcHV0ZWQnKSxcblx0XHRbZGVwcywgYm9keV1cblx0KVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cbi8vIFRPIERPIE5FWFQgTk9ERVNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRcblx0bGV0IGluaXQgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXRDb21wb25lbnQnKSwgW1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0XHRcdGwsXG5cdFx0XHRcdGlkKCdyZW5kZXInKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChpbml0LnZhbHVlKTtcblxuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcywgaW5pdCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKCduZXh0U2libGluZycpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblx0bGV0IGJvZHkgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cdHBhcmFtcy5wdXNoKGlkKHRoaXMudmFsdWUpKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGJvZHksIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBpZCgnbnVsbCcpLCBpZCgndHJ1ZScpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGJvZHkucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMsIGdldEZpcnN0VGVtcGxhdGVOb2RlKTtcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGJvZHkucHVzaChyZXR1cm5Qb2ludGVyKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0aWQoJ2l0ZW0nKSwgLy8gcmVwbGFjZSB3aXRoIGV4cHJlc3Npb24gcGFyc2Vcblx0XHRcdGlkKCdrZXknKSAvLyByZXBsYWNlIHdpdGggZXhwcmVzc2lvbiBwYXJzZVxuXHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0KTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGZhbHNlO1xuXG5cdC8vIGlmKG9wdGlvbnMuY3VzdG9tRGVmaW5lICE9PSBudWxsKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmN1c3RvbURlZmluZShjb250ZXh0LCBvcHRpb25zLmZpcnN0Q2hpbGQpO1xuXHQvLyBcdGRlbGV0ZSBvcHRpb25zLmN1c3RvbURlZmluZTtcblx0Ly8gfVxuXG5cdC8vIGlmKHRlbXBsYXRlID09PSBmYWxzZSkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9KTtcblxuXHQvLyBcdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS5tYWtlVmFsdWUpO1xuXHQvLyB9XHRcblxuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblx0b3B0aW9ucy5keW5hbWljLmV2ZW50cyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xufVxuXG5cblxuXG5cbiIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiwgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZ3JhbShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHRcblxuXHRsZXQgbGFzdENoaWxkID0gY2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucywgZ2V0Rmlyc3RUZW1wbGF0ZU5vZGUpXG5cblx0XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2gocmV0dXJuUG9pbnRlcik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2xvdChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW1xuXHRcdGlkKCckc2xvdHMnKSxcblx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0b3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRdO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc2xvdCQnKSwgcGFyYW1zKVxuXHQpO1xuXG5cdGxldCBib2R5ID0gW107XG5cblx0Y2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucyk7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KVxuXHRcdClcblx0KVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc3RhdGVtZW50JCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHQoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblx0Ly8gfVxuXG5cdC8vIGxldCB0ZW1wbGF0ZSA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0cmV0dXJuIGlkKCdjcmVhdGVUZWFtcGxhdGUnKTtcblx0Ly8gfSk7XG5cblx0Ly8gY29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHQvLyBsZXQgcG9pbnRlciA9IGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0aWYodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAxKSB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKCdmaXJzdENoaWxkJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIGw7XG5cdC8vIH0pO1xuXHRcblx0Ly8gLy8gY29uc29sZS5sb2codGhpcy5jaGlsZHJlbi5sZW5ndGgpO1xuXHQvLyBjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdFRlbXBsYXRlTm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcG9pbnRlciA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKGwsIGlkKCdmaXJzdENoaWxkJykpLFxuXHRcdFx0bFxuXHRcdClcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV4dE5vZGUoY29udGV4dCwgb3B0aW9ucywgdHlwZSlcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKHR5cGUpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkcmVuKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgY3VzdG9tRGVmaW5lciA9IGZhbHNlKVxue1xuXHRvcHRpb25zLmNyZWF0ZUNvbnRleHQoKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkSGFuZGxlKGVudGl0eS5jaGlsZHJlbltpXSwgY29udGV4dCwgb3B0aW9ucywgaSwgY3VzdG9tRGVmaW5lcik7XG5cdH1cblxuXHRsZXQgbGFzdENoaWxkID0gb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpO1xuXG5cdG9wdGlvbnMucmVtb3ZlQ29udGV4dCgpO1xuXG5cdHJldHVybiBsYXN0Q2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZEhhbmRsZShlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGluZGV4LCBjdXN0b21EZWZpbmVyKVxue1xuXHRsZXQgaXNGaXJzdCA9IGluZGV4ID09PSAwO1xuXG5cdGlmKGN1c3RvbURlZmluZXIgJiYgaXNGaXJzdCkge1xuXHRcdGN1c3RvbURlZmluZXIoY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsIi8vIGV2ZW50cyAtIEAgLT4gaWQoYXR0cnMgdmFsdWUpXG4vLyBleHByZXNzaW9uIDogaWQoYXR0cnMpXG4vLyBzdHJpbmdsaXR0ZXJhbCBcbmltcG9ydCB7IG1ha2VNYXAgfSBmcm9tICcuL3V0aWxzJztcblxuXG52YXIgaXNBdHRyID0gbWFrZU1hcChcblx0J2FjY2VwdCxhY2NlcHQtY2hhcnNldCxhY2Nlc3NrZXksYWN0aW9uLGFsaWduLGFsdCxhc3luYyxhdXRvY29tcGxldGUsJyArXG5cdCdhdXRvZm9jdXMsYXV0b3BsYXksYXV0b3NhdmUsYmdjb2xvcixib3JkZXIsYnVmZmVyZWQsY2hhbGxlbmdlLGNoYXJzZXQsJyArXG5cdCdjaGVja2VkLGNpdGUsY2xhc3MsY29kZSxjb2RlYmFzZSxjb2xvcixjb2xzLGNvbHNwYW4sY29udGVudCxodHRwLWVxdWl2LCcgK1xuXHQnbmFtZSxjb250ZW50ZWRpdGFibGUsY29udGV4dG1lbnUsY29udHJvbHMsY29vcmRzLGRhdGEsZGF0ZXRpbWUsZGVmYXVsdCwnICtcblx0J2RlZmVyLGRpcixkaXJuYW1lLGRpc2FibGVkLGRvd25sb2FkLGRyYWdnYWJsZSxkcm9wem9uZSxlbmN0eXBlLG1ldGhvZCxmb3IsJyArXG5cdCdmb3JtLGZvcm1hY3Rpb24saGVhZGVycyxoZWlnaHQsaGlkZGVuLGhpZ2gsaHJlZixocmVmbGFuZyxodHRwLWVxdWl2LCcgK1xuXHQnaWNvbixpZCxpc21hcCxpdGVtcHJvcCxrZXl0eXBlLGtpbmQsbGFiZWwsbGFuZyxsYW5ndWFnZSxsaXN0LGxvb3AsbG93LCcgK1xuXHQnbWFuaWZlc3QsbWF4LG1heGxlbmd0aCxtZWRpYSxtZXRob2QsR0VULFBPU1QsbWluLG11bHRpcGxlLGVtYWlsLGZpbGUsJyArXG5cdCdtdXRlZCxuYW1lLG5vdmFsaWRhdGUsb3BlbixvcHRpbXVtLHBhdHRlcm4scGluZyxwbGFjZWhvbGRlcixwb3N0ZXIsJyArXG5cdCdwcmVsb2FkLHJhZGlvZ3JvdXAscmVhZG9ubHkscmVsLHJlcXVpcmVkLHJldmVyc2VkLHJvd3Mscm93c3BhbixzYW5kYm94LCcgK1xuXHQnc2NvcGUsc2NvcGVkLHNlYW1sZXNzLHNlbGVjdGVkLHNoYXBlLHNpemUsdHlwZSx0ZXh0LHBhc3N3b3JkLHNpemVzLHNwYW4sJyArXG5cdCdzcGVsbGNoZWNrLHNyYyxzcmNkb2Msc3JjbGFuZyxzcmNzZXQsc3RhcnQsc3RlcCxzdHlsZSxzdW1tYXJ5LHRhYmluZGV4LCcgK1xuXHQndGFyZ2V0LHRpdGxlLHR5cGUsdXNlbWFwLHZhbHVlLHdpZHRoLHdyYXAnXG4pO1xuXG52YXIgaXNEb21BdHRyID0gKG5hbWUpID0+IHtcblx0cmV0dXJuIGlzQXR0cihuYW1lKSB8fCBuYW1lLm1hdGNoKC9eZGF0YVxcLS9nKTtcbn1cblxuZnVuY3Rpb24gbWFrZVZhbHVlKHZhbHVlLCBpc0V4cHJlc3Npb24gPSBmYWxzZSlcbntcblx0cmV0dXJuIHtcblx0XHR2YWx1ZSxcblx0XHRpc0V4cHJlc3Npb24sXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKG9iailcbntcblx0bGV0IGV2ZW50cyA9IHt9O1xuXHRsZXQgcHJvcHMgPSB7fTtcblx0bGV0IGF0dHJpYnV0ZXMgPSB7fTtcblx0bGV0IHN0YXRpY0F0dHJzID0ge307XG5cblx0Zm9yKGxldCBuYW1lIGluIG9iailcblx0e1xuXHRcdGxldCB2YWx1ZSA9IG9ialtuYW1lXTtcblxuXHRcdGlmKGlzRG9tQXR0cihuYW1lKSkge1xuXHRcdFx0c3RhdGljQXR0cnNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXkAvZykpIHtcblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL15AL2csICcnKTtcblx0XHRcdGV2ZW50c1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0fSBlbHNlIGlmKG5hbWUubWF0Y2goL15cXDovZykpIHtcblx0XHRcdG5hbWUgPSBuYW1lLnJlcGxhY2UoL15cXDovZywgJycpO1xuXHRcdFx0aWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRcdGF0dHJpYnV0ZXNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHJvcHNbbmFtZV0gPSBtYWtlVmFsdWUodmFsdWUsIHRydWUpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9wc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSk7XG5cdFx0XHQvLyBjb25zb2xlLmVycm9yKGBBdHRyICR7bmFtZX0gZG9lc250IHJlZ2lzdGVyZWQuIENhbnQgdW5kZXJzdGFuZCB0eXBlLmApXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRzdGF0aWNBdHRyczogc3RhdGljQXR0cnMsXG5cdFx0ZXZlbnRzLFxuXHRcdHByb3BzLFxuXHRcdGF0dHJpYnV0ZXMsXG5cdH07XG59IiwiaW1wb3J0IHsgcHJlcGFyZSB9IGZyb20gJy4vcHJlcGFyZSc7XG5pbXBvcnQgeyBpc0NvbXBvbmVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQgfSBmcm9tICcuL3R5cGVzJztcblxuaW1wb3J0IHsgUGFyc2VyIGFzIEhUTUxQYXJzZXIgfSBmcm9tICdodG1scGFyc2VyMic7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrcyhibG9ja3MsIGh0bWwpXG57XG5cdGZvcihsZXQga2V5IGluIGJsb2Nrcykge1xuXHRcdGxldCByZWdleHAgPSBuZXcgUmVnRXhwKGA8JHtrZXl9Lio+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0bGV0IG1hdGNoZXMgPSByZWdleHAuZXhlYyhodG1sKTtcblx0XHRpZihtYXRjaGVzKSB7XG5cdFx0XHRibG9ja3Nba2V5XSA9IG1hdGNoZXNbMV07XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGJsb2Nrcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGh0bWwpXG57XG5cdC8vIGdldCBhZGRpdGlvbmFsIGJsb2NrcyBlLmcuIHNjcmlwdCwgc3R5bGUsIGRvY1xuXHRsZXQgYmxvY2tzID0gcGFyc2VCbG9ja3Moe1xuXHRcdHNjcmlwdDogbnVsbCxcblx0XHRzdHlsZTogbnVsbCxcblx0fSwgaHRtbCk7XG5cblx0Ly8gY2xlYW4gdXAgaHRtbCBhbmQgcmVwbGFjZSBleHByZXNzaW9uIHdpdGggdGFnLWV4cHJlc3Npb25cblx0aHRtbCA9IHByZXBhcmUoYmxvY2tzLCBodG1sKTtcblxuXHQvLyBQYXJzZSBUQUdzXG5cdGxldCBzdGFjayA9IFtcblx0XHRuZXcgRXhwcmVzc2lvbih7IHR5cGU6ICdwcm9ncmFtJyB9KVxuXHRdO1xuXG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNCbG9ja1RhZyhuYW1lKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrLmxlbmd0aCA9PT0gMSAmJiBbJ3NjcmlwdCcsICdzdHlsZSddLmluY2x1ZGVzKG5hbWUpO1xuXHR9XG5cblx0Y29uc3QgcGFyc2UgPSBuZXcgSFRNTFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cdFx0XHRsZXQgZW50aXR5O1xuXG5cdFx0XHRpZihuYW1lID09PSAnZXhwcicpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IEV4cHJlc3Npb24oYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzbG90Jykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgU2xvdChhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzQ29tcG9uZW50KG5hbWUpKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBDb21wb25lbnQobmFtZSwgYXR0cnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IE5vZGUobmFtZSwgYXR0cnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0cGFyZW50LmFkZENoaWxkKGVudGl0eSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2goZW50aXR5KTtcblx0XHR9LFxuXG5cdFx0b250ZXh0KHRleHQpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblxuXHRcdFx0dGV4dCA9IHRleHQudHJpbSgpO1xuXG5cdFx0XHRpZih0ZXh0ICE9PSAnJyAmJiBwYXJlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSBuZXcgVGV4dCh0ZXh0KTtcblx0XHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH0sXG5cblx0XHRvbmNsb3NldGFnKG5hbWUpXG5cdFx0e1xuXHRcdFx0bGV0IHJlbW92ZWQgPSBzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0YmxvY2tzLnRlbXBsYXRlID0gc3RhY2tbMF07XG5cdC8vIGNvbnNvbGUubG9nKGJsb2Nrcy50ZW1wbGF0ZS5jaGlsZHJlblswXSlcblx0cmV0dXJuIGJsb2Nrcztcbn1cbiIsImZ1bmN0aW9uIHByZXBhcmVIVE1MKGh0bWwpXG57XG5cdHJldHVybiBodG1sLnJlcGxhY2UoL1xcdC9nLCAnICcpLnJlcGxhY2UoL1xcc1xccysvZywgJyAnKS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRodG1sID0gaHRtbC5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuXHR9XG5cblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRlYWNoL2csICc8L2V4cHI+JylcblxuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcbmltcG9ydCB7IGF0dHJzIGFzIHBhcnNlQXR0cnMgfSBmcm9tICcuLi9hdHRycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IobmFtZSwgYXR0cnMpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5vcHRpb25zID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGFnLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLm9wdGlvbiA9IHBhcnNlQXR0cnMoYXR0cnMpO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdub2RlJztcblx0fVxuXG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsb3QgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgbmFtZSA9ICdkZWZhdWx0JywgdGFnID0gJ3NwYW4nIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy50YWcgPSB0YWc7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ3Nsb3QnO1xuXHR9XG5cdFx0XG5cdC8vIG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHQvLyB7XG5cdC8vIFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSAnPic7XG5cblx0Ly8gXHRsZXQgY2hpbGRUZW1wbGF0ZSA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLm1ha2VUZW1wbGF0ZShmYWxzZSkpLmpvaW4oJycpO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gY2hpbGRUZW1wbGF0ZTtcblx0XHRcblx0Ly8gXHR0ZW1wbGF0ZSArPSBgPC8ke3RoaXMudGFnfT5gO1xuXG5cdC8vIFx0aWYoWydzdGF0ZW1lbnQnLCAnZWFjaCcsICdjb21wb25lbnQnXS5pbmNsdWRlcyh0aGlzLnR5cGUpKSB7XG5cdC8vIFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHQvLyBcdH1cblxuXHQvLyBcdGlmKCF0aGlzLnRhZykge1xuXHQvLyBcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdC8vIFx0fVxuXG5cdC8vIFx0cmV0dXJuIHRlbXBsYXRlO1xuXHQvLyB9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGV4dClcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy52YWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy50eXBlID0gJ3RleHQnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBydWxlcyB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRtYXAoY2FsbGJhY2spXG5cdHtcblx0XHRpZih0aGlzLmNoaWxkcmVuICYmIHRoaXMudHlwZSAhPT0gJ3N0YXRlbWVudCcpIHtcblx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHRhZGRDaGlsZChjaGlsZClcblx0e1xuXHRcdGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cdGhhbmRsZShjb250ZXh0LCBvcHRpb25zKVxuXHR7XG5cdFx0cmV0dXJuIHJ1bGVzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcblx0fVxuXG5cdHNraXBJbml0KClcblx0e1xuXHRcdHJldHVybiBmYWxzZTsvL3RoaXMudHlwZSA9PT0gJ3Byb2dyYW0nIHx8IHRoaXMudHlwZSA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblx0XHRcblx0XHRsZXQgYXR0cnMgPSB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uLnN0YXRpY0F0dHJzIDoge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBhdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsImNvbnN0IEhUTUxUYWdzID0gW1xuXHRcIiFkb2N0eXBlXCIsIFwiYVwiLCBcImFiYnJcIiwgXCJhY3JvbnltXCIsIFwiYWRkcmVzc1wiLCBcImFwcGxldFwiLCBcImFyZWFcIiwgXCJhcnRpY2xlXCIsIFwiYXNpZGVcIiwgXCJhdWRpb1wiLFxuXHRcImJcIiwgXCJiYXNlXCIsIFwiYmFzZWZvbnRcIiwgXCJiYlwiLCBcImJkb1wiLCBcImJpZ1wiLCBcImJsb2NrcXVvdGVcIiwgXCJib2R5XCIsIFwiYnJcIiwgXCJidXR0b25cIiwgXCJjYW52YXNcIixcblx0XCJjYXB0aW9uXCIsIFwiY2VudGVyXCIsIFwiY2l0ZVwiLCBcImNvZGVcIiwgXCJjb2xcIiwgXCJjb2xncm91cFwiLCBcImNvbW1hbmRcIiwgXCJkYXRhZ3JpZFwiLCBcImRhdGFsaXN0XCIsIFwiZGRcIixcblx0XCJkZWxcIiwgXCJkZXRhaWxzXCIsIFwiZGZuXCIsIFwiZGlhbG9nXCIsIFwiZGlyXCIsIFwiZGl2XCIsIFwiZGxcIiwgXCJkdFwiLCBcImVtXCIsIFwiZW1iZWRcIiwgXCJldmVudHNvdXJjZVwiLCBcImZpZWxkc2V0XCIsXG5cdFwiZmlnY2FwdGlvblwiLCBcImZpZ3VyZVwiLCBcImZvbnRcIiwgXCJmb290ZXJcIiwgXCJmb3JtXCIsIFwiZnJhbWVcIiwgXCJmcmFtZXNldFwiLCBcImgxPiB0byA8aDZcIiwgXCJoZWFkXCIsIFwiaGVhZGVyXCIsXG5cdFwiaGdyb3VwXCIsIFwiaHJcIiwgXCJodG1sXCIsIFwiaVwiLCBcImlmcmFtZVwiLCBcImltZ1wiLCBcImlucHV0XCIsIFwiaW5zXCIsIFwiaXNpbmRleFwiLCBcImtiZFwiLCBcImtleWdlblwiLCBcImxhYmVsXCIsXG5cdFwibGVnZW5kXCIsIFwibGlcIiwgXCJsaW5rXCIsIFwibWFwXCIsIFwibWFya1wiLCBcIm1lbnVcIiwgXCJtZXRhXCIsIFwibWV0ZXJcIiwgXCJuYXZcIiwgXCJub2ZyYW1lc1wiLCBcIm5vc2NyaXB0XCIsXG5cdFwib2JqZWN0XCIsIFwib2xcIiwgXCJvcHRncm91cFwiLCBcIm9wdGlvblwiLCBcIm91dHB1dFwiLCBcInBcIiwgXCJwYXJhbVwiLCBcInByZVwiLCBcInByb2dyZXNzXCIsIFwicVwiLCBcInJwXCIsIFwicnRcIixcblx0XCJydWJ5XCIsIFwic1wiLCBcInNhbXBcIiwgXCJzY3JpcHRcIiwgXCJzZWN0aW9uXCIsIFwic2VsZWN0XCIsIFwic21hbGxcIiwgXCJzb3VyY2VcIiwgXCJzcGFuXCIsIFwic3RyaWtlXCIsIFwic3Ryb25nXCIsXG5cdFwic3R5bGVcIiwgXCJzdWJcIiwgXCJzdXBcIiwgXCJ0YWJsZVwiLCBcInRib2R5XCIsIFwidGRcIiwgXCJ0ZXh0YXJlYVwiLCBcInRmb290XCIsIFwidGhcIiwgXCJ0aGVhZFwiLCBcInRpbWVcIiwgXCJ0aXRsZVwiLFxuXHRcInRyXCIsIFwidHJhY2tcIiwgXCJ0dFwiLCBcInVcIiwgXCJ1bFwiLCBcInZhclwiLCBcInZpZGVvXCIsIFwid2JyXCJcbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0NvbXBvbmVudChuYW1lKVxue1xuXHRyZXR1cm4gIUhUTUxUYWdzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1hcChzdHIsIGV4cGVjdHNMb3dlckNhc2UpXG57XG5cdHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHR2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdG1hcFtsaXN0W2ldXSA9IHRydWU7XG5cdH1cblxuXHRyZXR1cm4gZXhwZWN0c0xvd2VyQ2FzZSA/XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9IDpcblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWxdOyB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBjb21waWxlIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSB9IGZyb20gJ0BoYXdhL29ic2VydmFibGUnO1xuXG5cbmltcG9ydCB0aW1lIGZyb20gJy4vdGltZSc7XG5cblxuZnVuY3Rpb24gdGVzdCgpIHtcblxuXHRmdW5jdGlvbiBnZXROb2RlKHRlbXBsYXRlLCBub2RlLCByZW5kZXIpIHtcblx0XHRpZiAocmVuZGVyKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvbnRleHQoY29udGV4dCkge1xuXHRcdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdFx0Y29udGV4dCA9IHt9O1xuXHRcdH1cblxuXHRcdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0XHRsZXQgJHNsb3RzID0gY29udGV4dC4kc2xvdHMgfHwge307XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0JHByb3BzLFxuXHRcdFx0JHNsb3RzLFxuXHRcdH1cblx0fVxuXG5cblx0ZnVuY3Rpb24gX21ha2VBdHRycyQoKSB7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIF9zbG90JCgkc2xvdHMsIG5hbWUsIG5vZGUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRjYWxsYmFjayhub2RlKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub2RlLmlubmVySFRNTCA9ICRzbG90c1tuYW1lXTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2VhY2gkKG5vZGUsIGl0ZW1zLCBmbikge1xuXHRcdGxldCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IG5vZGUgPSBmbihub2RlLCBpdGVtc1tpXSwgaSk7XG5cdFx0XHRib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXHRcdH1cblxuXHRcdG5vZGUucmVwbGFjZVdpdGgoYm9keSk7XG5cblx0XHRyZXR1cm4gYm9keTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9zdGF0ZW1lbnQkKG5vZGUsIC4uLmFyZ3MpIHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGZhbHNlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRpZiAoYXJnc1tpXSkge1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gYXJnc1tpICsgMV0obm9kZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChyZXR1cm5Ob2RlID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuIG5vZGU7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChyZXR1cm5Ob2RlKTtcblxuXHRcdHJldHVybiByZXR1cm5Ob2RlO1xuXHR9XG5cblx0bGV0IHsgcmVuZGVyLCB0ZW1wbGF0ZXMgfSA9IGdldHQoKTtcblxuXHRjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHRjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHRyZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gXCI8ZGl2PjwhLS0tLT48L2Rpdj5cIjtcblxuXHRsZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDIuaW5uZXJIVE1MID0gXCI8ZGl2PjE8L2Rpdj48ZGl2IGNsYXNzPVxcXCJidXR0b25cXFwiPjxzcGFuPkRlZmF1bHQgPGIgY2xhc3M9XFxcImRcXFwiPmJ1dHRvbjwvYj4gdGV4dDwvc3Bhbj48L2Rpdj5cIjtcblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblxuXHRcdGxldCB7ICRwcm9wcywgJHNsb3RzIH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLmZpcnN0Q2hpbGQ7XG5cblx0XHRsZXQgX2VsJDEzID0gX2VhY2gkKF9lbCQzLCBbMV0sIChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBudWxsLCB0cnVlKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG5cdFx0XHRsZXQgX2VsJDYgPSBfZWwkNS5maXJzdENoaWxkO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlQXR0cnMkKF9lbCQ3LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGFzc1wiOiBcImJ1dHRvblwiXG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRcdF9tYWtlQXR0cnMkKF9lbCQxMCwgcmVuZGVyLCB7XG5cdFx0XHRcdFx0XCJjbGFzc1wiOiBcImRcIlxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGV0IGQgPSBtYWtlQ29tcG9uZW50KCk7XG5cblx0bGF5b3V0LmFwcGVuZENoaWxkKGQpO1xuXG5cdGNvbnNvbGUubG9nKGxheW91dC5pbm5lckhUTUwpO1xuXHR0aW1lKCdyZW5kZXInKTtcbn1cblxudGVzdCgpO1xuXG5mdW5jdGlvbiBnZXR0KCkge1xuXG5cdGxldCBodG1sID1cblx0XHRgXG5cdDxkaXY+c3RhcnQ8L2Rpdj5cblx0QGlmKDEpXG5cdDxkaXY+PC9kaXY+XG5cdGFzZGFkXG5cdFx0QGlmKDIpXG5cdFx0PGRpdj5pZmYyPC9kaXY+XG5cdFx0QGVuZGlmXG5cdGFzZGFzZFxuXHRAZWxzZWlmKHRlc3QpXG5cdDFcblx0XHQyXG5cdFx0QGVhY2goMSlcblx0XHRhc2Rhc2Rcblx0XHQ8c2xvdD5kZWZhdWx0IHRleHQgZm9yIHNsb3Q8YiBjbGFzcz1cImRcIj4xPC9iPjwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGh0bWwgPSBgXG5cdDxkaXYgY2xhc3M9XCIyXCIgOnN0eWxlPVwiMVwiIDpkYXRhLTE9XCJ7IHRlc3Q6IHRleHQxIH1cIiA6ZGF0YS0yPVwidGV4dDFcIiA6Y2xhc3M9XCJbdGV4dDEsIHsgc29tZTogdGV4dDIgPT09IDIgfSwgdGltZV1cIiA6cHJvcDE9XCIxMjNcIj5cblx0QGVhY2goMSlcblx0PGRpdiBAY2xpY2s9XCJtZXRob2QxXCIgQG1vdXNlZG93bj1cIm1ldGhvZDEoZXZlbnQpXCI+XG5cdFx0U29tZSB0ZXN0IHRleHQgXFwkeyB0ZXh0MSB9IGFmdGVyXG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCIgQG1vdXNlZG93bj1cImFsZXJ0KDIpXCI+XG5cdFx0PHNsb3Q+RGVmYXVsdCA8YiBjbGFzcz1cImRcIj5idXR0b248L2I+IHRleHQ8L3Nsb3Q+XG5cdDwvZGl2PlxuXHRAZW5kZWFjaFxuXHRcblxuXHQ8c2NyaXB0PlxuXHRsZXQgdGV4dDEgPSAkbygxKTtcblx0bGV0IHRleHQyID0gJG8oMSk7XG5cdGxldCB0ZXh0MyA9ICRvKDEpO1xuXHRsZXQgdGltZSA9IDEyMzU7XG5cblx0bGV0IGMgPSAoKSA9PiB7XG5cdFx0cmV0dXJuIHRpbWUgKyB0ZXh0MTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1ldGhvZDEoKSB7XG5cdFx0bGV0IGQgPSB0ZXh0MigpO1xuXG5cdFx0bGV0IHRleHQxID0gJ3NvbWUnO1xuXG5cdFx0dGV4dDE7XG5cdH1cblx0PC9zY3JpcHQ+XG5cdGBcblx0bGV0IGJsb2NrcyA9IHBhcnNlKGh0bWwpO1xuXG5cdHJldHVybiBjb21waWxlKGJsb2Nrcyk7XG5cdC8vIGNvbnNvbGUubG9nKGh0bWwpO1xufVxuIiwibGV0IHRpbWVzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRpbWUobmFtZSlcbntcblx0bGV0IG5vdyA9IChuZXcgRGF0ZSkuZ2V0VGltZSgpO1xuXG5cdGlmKHR5cGVvZiB0aW1lc1tuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHR0aW1lc1tuYW1lXSA9IG5vdztcblx0XHRyZXR1cm4gdGltZXNbbmFtZV07XG5cdH1cblxuXHRjb25zb2xlLmxvZyhgWyB0YiAke25hbWV9IF1gLCBub3cgLSB0aW1lc1tuYW1lXSwgJ21zJyk7XG5cblx0ZGVsZXRlIHRpbWVzW25hbWVdO1xufVxuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==