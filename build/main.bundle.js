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

var _props = __webpack_require__(/*! ./props */ "./packages/compiler/dist/dynamic/props.js");

var _string = __webpack_require__(/*! ./string */ "./packages/compiler/dist/dynamic/string.js"); // import { slots } from './slots';
// export { attrs, events, props }


function dynamic(context) {
  return {
    attrs: _attrs.attrs.bind(context),
    events: _events.events.bind(context),
    props: _props.props.bind(context),
    string: _string.string.bind(context)
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
  var lastChild = (0, _utils.children)(this, body, options);
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
  html = "\n\t<div class=\"2\" :style=\"1\" :data-1=\"{ test: text1 }\" :data-2=\"text1\" :class=\"[text1, { some: text2 === 2 }, time]\" :prop1=\"123\">\n\t@each(Array.from({ length: 1 }, (_, i) => i))\n\t<div @click=\"method1\" @mousedown=\"method1(event)\">\n\t\tSome test text ${ text1 } after\n\t</div>\n\t<div class=\"button\" @mousedown=\"alert(2)\">\n\t\t<slot>Default <b class=\"d\">button</b> text</slot>\n\t</div>\n\t@endeach\n\t\n\n\t<script>\n\tlet text1 = $o(1);\n\tlet text2 = $o(1);\n\tlet text3 = $o(1);\n\tlet time = 1235;\n\n\tlet c = () => {\n\t\treturn time + text1;\n\t}\n\n\tfunction method1() {\n\t\tlet d = text2();\n\n\t\tlet text1 = 'some';\n\n\t\ttext1;\n\t}\n\t</script>\n\t";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hbmFseXNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvZGVwZW5kZW5jaWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbImFzdCIsInNvdXJjZVR5cGUiLCJzdHJpY3RNb2RlIiwiZGF0YSIsImRlcHMiLCJjb250ZXh0Iiwib2JzZXJ2YWJsZXMiLCJ2YXJzIiwibWV0aG9kcyIsImNvbnRleHRTdGFjayIsIm5hbWUiLCJWYXJpYWJsZURlY2xhcmF0b3IiLCJlbnRlciIsImlkIiwicGF0aCIsInZhbHVlIiwiZ2V0Q29udGV4dCIsImlzU3ViQ29udGV4dCIsIkFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiY3JlYXRlQ29udGV4dCIsImV4aXQiLCJjbG9zZUNvbnRleHQiLCJGdW5jdGlvbkRlY2xhcmF0aW9uIiwiSWRlbnRpZmllciIsIlZhcmlhYmxlQ291bnRlciIsIlRlbXBsYXRlcyIsImNvZGVBbmFseXNlIiwiYmxvY2tzIiwiZHluYW1pY0V4cHJlc3Npb25zIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImluaXQiLCJMYXN0VmFyaWFibGVJZCIsImdldExhc3RWYXJpYWJsZUlkIiwiZ2V0Q3VycmVudENvbnRleHQiLCJBY3Rpb24iLCJkZWxjYXJhdGlvblZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsInNldExhc3RWYXJpYWJsZUlkIiwiZW50aXR5IiwiYm9keSIsIm9wdGlvbnMiLCJyZW1vdmVDb250ZXh0IiwiY3JlYXRlVmFyaWFibGUiLCJjcmVhdGVUZW1wbGF0ZSIsImR5bmFtaWMiLCJoYW5kbGUiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJyZW5kZXIiLCJ0ZW1wbGF0ZXMiLCJnZXRUZW1wbGF0ZXMiLCJwcm9wcyIsIm1ha2VDb21wdXRlZCIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvbiIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJjYWxsRXhwcmVzc2lvbiIsIm9iamVjdEV4cHJlc3Npb24iLCJtYWtlRnVuY3Rpb24iLCJhdHRycyIsImV2ZW50cyIsInN0cmluZyIsImNvbnNvbGUiLCJpc0V4cHJlc3Npb24iLCJtYWtlU3RyaW5nIiwiY29udGVudCIsImFycmF5RXhwcmVzc2lvbiIsImFycm93RnVuY3Rpb25FeHByZXNzaW9uIiwiYmxvY2tTdGF0ZW1lbnQiLCJhc3NpZ25tZW50RXhwcmVzc2lvbiIsIm1lbWJlckV4cHJlc3Npb24iLCJmbiIsInJlc3VsdCIsImZ1bmN0aW9uRXhwcmVzc2lvbiIsInJldHVyblN0YXRlbWVudCIsInBhcmFtcyIsImxhc3RDaGlsZCIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsImJsb2NrIiwibGFzdENvbnRleHRWYXJpYWJsZUlkIiwicG9pbnRlciIsImN1c3RvbURlZmluZXIiLCJjaGlsZEhhbmRsZSIsImlzRmlyc3QiLCJuZXh0Tm9kZSIsImFyZ3VtZW50cyIsIm9ic2VydmVyIiwib2JzIiwib2IiLCJ1cGRhdGUiLCJza2lwIiwiZGVwIiwiaXNBdHRyIiwiaXNEb21BdHRyIiwiYXR0cmlidXRlcyIsInN0YXRpY0F0dHJzIiwib2JqIiwibWFrZVZhbHVlIiwicmVnZXhwIiwibWF0Y2hlcyIsInBhcnNlQmxvY2tzIiwic2NyaXB0Iiwic3R5bGUiLCJodG1sIiwic3RhY2siLCJFeHByZXNzaW9uIiwidHlwZSIsInBhcnNlIiwiSFRNTFBhcnNlciIsIm9ub3BlbnRhZyIsInBhcmVudCIsImN1cnJlbnRTdGFja05vZGUiLCJTbG90IiwiQ29tcG9uZW50IiwiTm9kZSIsIm9udGV4dCIsInRleHQiLCJub2RlIiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJPYmplY3QiLCJUeXBlIiwidGFnIiwibWFrZVRlbXBsYXRlIiwibWFwIiwiYWRkQ2hpbGQiLCJjaGlsZCIsInJ1bGVzIiwic2tpcEluaXQiLCJvbmx5Q2hpbGRyZW4iLCJjaGlsZFRlbXBsYXRlIiwiSFRNTFRhZ3MiLCJsaXN0Iiwic3RyIiwiZXhwZWN0c0xvd2VyQ2FzZSIsInZhbCIsInRlc3QiLCJnZXROb2RlIiwiY2xvbmVOb2RlIiwicGFyc2VDb250ZXh0IiwidW5kZWZpbmVkIiwiJHByb3BzIiwiJHNsb3RzIiwiX21ha2VBdHRycyQiLCJfbWFrZUV2ZW50cyQiLCJrZXkiLCJhZGRFdmVudExpc3RlbmVyIiwiX3Nsb3QkIiwiY2FsbGJhY2siLCJpbm5lckhUTUwiLCJfZWFjaCQiLCJpdGVtcyIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImxlbmd0aCIsImFwcGVuZENoaWxkIiwicmVwbGFjZVdpdGgiLCJfc3RhdGVtZW50JCIsInJldHVybk5vZGUiLCJhcmdzIiwiZ2V0dCIsImxvZyIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwidGV4dDEiLCJ0ZXh0MiIsInRleHQzIiwidGltZSIsImMiLCJtZXRob2QxIiwiX2VsJDEiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJzb21lIiwiX2VsJDMiLCJfZWwkMTMiLCJBcnJheSIsImZyb20iLCJfIiwiaXRlbSIsIl9lbCQ0IiwiX2VsJDUiLCJldmVudCIsIl9lbCQ2Iiwibm9kZVZhbHVlIiwiX2VsJDciLCJuZXh0U2libGluZyIsImFsZXJ0IiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMSIsIl9lbCQxMiIsImxheW91dCIsImdldEVsZW1lbnRCeUlkIiwidG1wIiwidGltZXMiLCJub3ciLCJEYXRlIiwiZ2V0VGltZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkpBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyx5QkFDUDtBQUNDLE1BQU1BLEdBQUcsR0FBRyxNQUFNLENBQU4sY0FBcUI7QUFDaENDLGNBQVUsRUFEc0I7QUFFaENDLGNBQVUsRUFBRTtBQUZvQixHQUFyQixDQUFaO0FBS0EsTUFBSUMsSUFBSSxHQUFHLG9CQUFYLEdBQVcsQ0FBWDtBQUNBLE1BQUlDLElBQUksR0FBRyw4QkFBa0JELElBQUksQ0FBakMsV0FBVyxDQUFYO0FBRUEsU0FBTztBQUNORSxXQUFPLEVBREQ7QUFFTkQsUUFBSSxFQUFFQTtBQUZBLEdBQVA7QUFJQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsMkY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUFFTyxzQkFDUDtBQUNDLE1BQUlELElBQUksR0FBRztBQUNWRyxlQUFXLEVBREQ7QUFFVkMsUUFBSSxFQUZNO0FBR1ZDLFdBQU8sRUFBRTtBQUhDLEdBQVg7QUFNQSxNQUFJQyxZQUFZLEdBQWhCOztBQUVBLDBCQUF3QjtBQUN2QixXQUFPQSxZQUFZLENBQVpBLFNBQVA7QUFDQTs7QUFFRCwrQkFDQTtBQUNDQSxnQkFBWSxDQUFaQSxLQUFrQjtBQUNqQkMsVUFBSSxFQURhO0FBRWpCSCxVQUFJLEVBQUU7QUFGVyxLQUFsQkU7QUFJQTs7QUFFRCwwQkFDQTtBQUNDLFFBQUlKLE9BQU8sR0FBR0ksWUFBWSxDQUExQixHQUFjQSxFQUFkO0FBQ0E7O0FBRUQsd0JBQ0E7QUFDQyxXQUFPQSxZQUFZLENBQUNBLFlBQVksQ0FBWkEsU0FBcEIsQ0FBbUIsQ0FBbkI7QUFDQTs7QUFFRCw4QkFBYztBQUViRSxzQkFBa0IsRUFBRTtBQUNuQkMsV0FEbUIsdUJBRW5CO0FBQ0MsWUFBSUMsRUFBRSxHQUFHQyxJQUFJLENBQUpBLEtBQVQ7QUFDQSxZQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBSkEsS0FBWjtBQUNBLFlBQUlULE9BQU8sR0FBR1csVUFBZDs7QUFFQSxZQUFHQyxZQUFZLE1BQU1GLEtBQUssS0FBMUIsTUFBcUM7QUFDcENWLGlCQUFPLENBQVBBLFVBQWtCUSxFQUFFLENBQXBCUjtBQUNBO0FBQ0E7O0FBRUQsWUFBR1UsS0FBSyxDQUFMQSw2QkFBbUNBLEtBQUssQ0FBTEEsZ0JBQXRDLE1BQWtFO0FBQ2pFWixjQUFJLENBQUpBLGlCQUFzQlUsRUFBRSxDQUF4QlY7QUFERCxlQUVPLElBQUcsMkRBQTJEWSxLQUFLLENBQW5FLElBQUcsQ0FBSCxFQUEyRTtBQUNqRlosY0FBSSxDQUFKQSxpQkFBc0JVLEVBQUUsQ0FBeEJWO0FBRE0sZUFFQTtBQUNOQSxjQUFJLENBQUpBLFVBQWVVLEVBQUUsQ0FBakJWO0FBQ0E7QUFDRTtBQW5CZSxLQUZQO0FBdUJiZSwyQkFBdUIsRUFBRTtBQUN4Qk4sV0FEd0IsdUJBRXhCO0FBQ0NPLHFCQUFhLENBQUNMLElBQUksQ0FBSkEsYUFBZEssSUFBYSxDQUFiQTtBQUh1QjtBQUtyQkMsVUFMcUIsc0JBTXJCO0FBQ0NDLG9CQUFZO0FBQ1o7QUFSb0IsS0F2Qlo7QUFpQ2JDLHVCQUFtQixFQUFFO0FBQ3BCVixXQURvQix1QkFFcEI7QUFDQ1QsWUFBSSxDQUFKQSxhQUFrQlcsSUFBSSxDQUFKQSxRQUFsQlg7QUFDQWdCLHFCQUFhLENBQUNMLElBQUksQ0FBSkEsUUFBZEssSUFBYSxDQUFiQTtBQUptQjtBQU1qQkMsVUFOaUIsc0JBT2pCO0FBQ0NDLG9CQUFZO0FBQ1o7QUFUZ0I7QUFqQ1IsR0FBZDtBQThDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRkQ7Ozs7Ozs7O0FBRU8sd0NBQ1A7QUFBQSxNQURrQ2YsV0FDbEM7QUFEa0NBLGVBQ2xDLEdBRGdELEVBQWRBO0FBQ2xDOztBQUNDLE1BQUlGLElBQUksR0FBUjtBQUVBLE1BQUlLLFlBQVksR0FBaEI7O0FBRUEsMEJBQXdCO0FBQ3ZCLFdBQU9BLFlBQVksQ0FBWkEsU0FBUDtBQUNBOztBQUVELCtCQUNBO0FBQ0NBLGdCQUFZLENBQVpBLEtBQWtCO0FBQ2pCQyxVQUFJLEVBRGE7QUFFakJILFVBQUksRUFGYTtBQUdqQkgsVUFBSSxFQUFFO0FBSFcsS0FBbEJLO0FBS0E7O0FBRUQsMEJBQ0E7QUFDQyxRQUFJSixPQUFPLEdBQUdJLFlBQVksQ0FBMUIsR0FBY0EsRUFBZDtBQUNBTCxRQUFJLENBQUNDLE9BQU8sQ0FBWkQsSUFBSSxDQUFKQSxHQUFxQkMsT0FBTyxDQUE1QkQ7QUFDQTs7QUFFRCx3QkFDQTtBQUNDLFdBQU9LLFlBQVksQ0FBQ0EsWUFBWSxDQUFaQSxTQUFwQixDQUFtQixDQUFuQjtBQUNBOztBQUVELDhCQUFjO0FBRWJjLGNBQVUsRUFBRTtBQUNYWCxXQURXLHVCQUVYO0FBQ0MsWUFBSVAsT0FBTyxHQUFHVyxVQUFkO0FBQ0EsWUFBSU4sSUFBSSxHQUFHSSxJQUFJLENBQUpBLEtBQVg7O0FBRUEsWUFBRyxDQUFDRyxZQUFKLElBQW9CO0FBQ25CO0FBQ0E7O0FBRUQsWUFBRyxDQUFDWixPQUFPLENBQVBBLGNBQUQsSUFBQ0EsQ0FBRCxJQUFnQ0MsV0FBVyxDQUFYQSxTQUFuQyxJQUFtQ0EsQ0FBbkMsRUFBK0Q7QUFDOURELGlCQUFPLENBQVBBO0FBQ0E7QUFDRDtBQWJVLEtBRkM7QUFrQmJNLHNCQUFrQixFQUFFO0FBQ25CQyxXQURtQix1QkFFbkI7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBSkEsS0FBVDtBQUNBLFlBQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFKQSxLQUFaO0FBQ0EsWUFBSVQsT0FBTyxHQUFHVyxVQUFkOztBQUVBLFlBQUdDLFlBQVksTUFBTUYsS0FBSyxLQUExQixNQUFxQztBQUNwQ1YsaUJBQU8sQ0FBUEEsVUFBa0JRLEVBQUUsQ0FBcEJSO0FBQ0E7QUFDQTtBQUNFO0FBWGUsS0FsQlA7QUErQmJhLDJCQUF1QixFQUFFO0FBQ3hCTixXQUR3Qix1QkFFeEI7QUFDQ08scUJBQWEsQ0FBQ0wsSUFBSSxDQUFKQSxhQUFkSyxJQUFhLENBQWJBO0FBSHVCO0FBS3JCQyxVQUxxQixzQkFNckI7QUFDQ0Msb0JBQVk7QUFDWjtBQVJvQixLQS9CWjtBQXlDYkMsdUJBQW1CLEVBQUU7QUFDcEJWLFdBRG9CLHVCQUVwQjtBQUNDTyxxQkFBYSxDQUFDTCxJQUFJLENBQUpBLFFBQWRLLElBQWEsQ0FBYkE7QUFIbUI7QUFLakJDLFVBTGlCLHNCQU1qQjtBQUNDQyxvQkFBWTtBQUNaO0FBUmdCO0FBekNSLEdBQWQ7QUFxREE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RkQ7O0FBQ0EsZ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFvQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7OztBQUdPLHlCQUNQO0FBQ0MsTUFBSUcsZUFBZSxHQUFuQjtBQUNBLE1BQUlmLFlBQVksR0FBaEI7QUFFQTs7Ozs7QUFJQSxNQUFJZ0IsU0FBUyxHQUFHLElBQWhCLEdBQWdCLEVBQWhCO0FBRUEsTUFBSUMsV0FBVyxHQUFHLHVCQUFRQyxNQUFNLENBQWhDLE1BQWtCLENBQWxCO0FBQ0EsTUFBSUMsa0JBQWtCLEdBQUcsc0JBWDFCLFdBVzBCLENBQXpCLENBWEQsQ0FZQzs7QUFFQSxtQ0FDQTtBQUNDLFFBQUlDLFFBQVEsR0FBR0MsT0FBTyxDQUFQQSxhQUFmLElBQWVBLENBQWY7QUFFQUwsYUFBUyxDQUFUQTtBQUVBLFdBQU8saUNBQVlBLFNBQVMsQ0FBNUIsSUFBTyxDQUFQO0FBQ0E7O0FBRUQsMEJBQ0E7QUFDQyxRQUFJTSxJQUFJLEdBQVI7QUFDQSxRQUFJQyxDQUFDLEdBQUw7O0FBRUEsMEdBQTBCO0FBQUEsVUFBbEJDLEdBQWtCO0FBQ3pCLFVBQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0FILFVBQUksMEJBQUpBO0FBQ0FBLFVBQUksK0NBQUpBO0FBQ0E7O0FBRUQ7QUFDQTtBQUVEOzs7Ozs7O0FBS0EsK0JBQ0E7QUFBQSxRQUR1QkksSUFDdkI7QUFEdUJBLFVBQ3ZCLEdBRDhCLEtBQVBBO0FBQ3ZCOztBQUNDLFdBQU8sWUFBWSxDQUFaLEtBQWtCO0FBQ3hCQyxvQkFBYyxFQUFFRCxJQUFJLEdBQUcsdUJBQUgsTUFBRyxDQUFILEdBQWdCRSxpQkFBaUI7QUFEN0IsS0FBbEIsQ0FBUDtBQUdBOztBQUVELCtCQUNBO0FBQ0MsV0FBTzVCLFlBQVksQ0FBQ0EsWUFBWSxDQUFaQSxTQUFwQixDQUFtQixDQUFuQjtBQUNBOztBQUVELDJCQUNBO0FBQ0NBLGdCQUFZLENBQVpBO0FBQ0E7O0FBRUQsK0JBQ0E7QUFDQyxXQUFPNkIsaUJBQWlCLEdBQXhCO0FBQ0E7O0FBRUQsb0NBQ0E7QUFDQ0EscUJBQWlCLEdBQWpCQTtBQUNBOztBQUVELDJDQUNBO0FBQUEsUUFEd0JqQyxPQUN4QjtBQUR3QkEsYUFDeEIsR0FEa0MsSUFBVkE7QUFDeEI7O0FBQUEsUUFEd0NrQyxNQUN4QztBQUR3Q0EsWUFDeEMsR0FEaUQ7QUFBQTtBQUNqRCxPQUR3Q0E7QUFDeEM7O0FBQ0MsUUFBSTdCLElBQUksR0FBRyxnQ0FBVyxFQUF0QixlQUFXLENBQVg7QUFFQSxRQUFJOEIsZ0JBQWdCLEdBQUdELE1BQU0sT0FBT0YsaUJBQXBDLEVBQTZCLENBQTdCO0FBRUEsUUFBSXRCLEtBQUssR0FBRyxJQUFJMEIsT0FBSiwyQkFBK0IsQ0FDMUMsSUFBSUMsT0FBSix5QkFERCxnQkFDQyxDQUQwQyxDQUEvQixDQUFaO0FBT0FDLHFCQUFpQixDQUFqQkEsSUFBaUIsQ0FBakJBO0FBRUEsV0FBTztBQUNOakMsVUFBSSxFQURFO0FBRU5LLFdBQUssRUFBTEE7QUFGTSxLQUFQO0FBSUE7QUFFRDs7Ozs7O0FBSUEsTUFBSTZCLE1BQU0sR0FBR2pCLE1BQU0sQ0FBbkI7QUFDQSxNQUFJa0IsSUFBSSxHQUFSO0FBRUEsTUFBSUMsT0FBTyxHQUFHO0FBQ2IzQixpQkFBYSxFQURBO0FBRWI0QixpQkFBYSxFQUZBO0FBR2JDLGtCQUFjLEVBSEQ7QUFJYlgscUJBQWlCLEVBSko7QUFLYlksa0JBQWMsRUFMRDtBQU1iQyxXQUFPLEVBQUV0QjtBQU5JLEdBQWQ7O0FBU0EsMEJBQ0E7QUFDQ2dCLFVBQU0sQ0FBTkE7QUFDQTs7QUFFRHpCLGVBQWEsQ0FBYkEsSUFBYSxDQUFiQTtBQUNBLGVBQWE7QUFBQSxXQUFVZ0MsTUFBTSxDQUFoQixJQUFnQixDQUFoQjtBQUFiO0FBRUE7Ozs7O0FBSUEsTUFBSXBCLElBQUksR0FBRyx3QkFBUyw4QkFBVCxRQUFTLENBQVQsRUFJUjtBQUNGcUIsZUFBVyxFQURUO0FBRUZDLFdBQU8sRUFGTDtBQUdGQyxZQUFRLEVBSE47QUFJRkMsV0FBTyxFQUpMO0FBS0ZDLFVBQU0sRUFBRTtBQUxOLEdBSlEsQ0FBWDtBQVlBLFNBQU87QUFDTkMsVUFBTSxFQUFFMUIsSUFBSSxDQUROO0FBRU4yQixhQUFTLEVBQUVDLFlBQVk7QUFGakIsR0FBUDtBQUlBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwS0Q7O0FBWUE7O0FBRU8sZ0RBQ1A7QUFDQyxNQUFHZixNQUFNLENBQU5BLHNCQUFILFdBQTJDO0FBQzFDO0FBQ0E7O0FBRUQsTUFBSWdCLEtBQUssR0FBVDs7QUFFQSxPQUFJLElBQUosUUFBZ0JoQixNQUFNLENBQU5BLE9BQWhCLFlBQTBDO0FBQ3pDLFFBQUk3QixLQUFLLEdBQUcsc0JBQVUsS0FBVixTQUF3QjZCLE1BQU0sQ0FBTkEsa0JBQXhCLElBQXdCQSxDQUF4QixFQUF3RGlCLE9BQXBFLFlBQVksQ0FBWjtBQUVBRCxTQUFLLENBQUxBLEtBQ0MsSUFBSUUsT0FBSixlQUNDLDBCQURELElBQ0MsQ0FERCxFQURERixLQUNDLENBRERBO0FBTUE7O0FBRUQsTUFBR0EsS0FBSyxDQUFMQSxXQUFILEdBQXVCO0FBQ3RCO0FBQ0E7O0FBRUQsTUFBSUcsVUFBVSxHQUFHLElBQUlDLE9BQUosb0JBQ2hCLElBQUlDLE9BQUosZUFDQyx1QkFERCxhQUNDLENBREQsRUFDb0IsUUFFbEIsdUJBRmtCLFFBRWxCLENBRmtCLEVBR2xCLElBQUlDLE9BQUosaUJBTEgsS0FLRyxDQUhrQixDQURwQixDQURnQixDQUFqQjtBQVVBN0QsU0FBTyxDQUFQQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoREQ7O0FBWUE7O0FBRU8saURBQ1A7QUFDQyxNQUFHdUMsTUFBTSxDQUFOQSxXQUFILFdBQWdDO0FBQy9CO0FBQ0E7O0FBRUQsTUFBSWdCLEtBQUssR0FBVDs7QUFFQSxPQUFJLElBQUosUUFBZ0JoQixNQUFNLENBQU5BLE9BQWhCLFFBQXNDO0FBQ3JDLFFBQUk3QixLQUFLLEdBQUcsc0JBQVUsS0FBVixTQUF3QjZCLE1BQU0sQ0FBTkEsY0FBeEIsSUFBd0JBLENBQXhCLEVBQW9EdUIsT0FBaEUsWUFBWSxDQUFaO0FBRUFQLFNBQUssQ0FBTEEsS0FDQyxJQUFJRSxPQUFKLGVBQ0MsMEJBREQsSUFDQyxDQURELEVBRERGLEtBQ0MsQ0FEREE7QUFNQTs7QUFFRCxNQUFHQSxLQUFLLENBQUxBLFdBQUgsR0FBdUI7QUFDdEI7QUFDQTs7QUFFRCxNQUFJRyxVQUFVLEdBQUcsSUFBSUMsT0FBSixvQkFDaEIsSUFBSUMsT0FBSixlQUNDLHVCQURELGNBQ0MsQ0FERCxFQUNxQixRQUVuQix1QkFGbUIsUUFFbkIsQ0FGbUIsRUFHbkIsSUFBSUMsT0FBSixpQkFMSCxLQUtHLENBSG1CLENBRHJCLENBRGdCLENBQWpCO0FBVUE3RCxTQUFPLENBQVBBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hERDs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSxnRyxDQUNBO0FBRUE7OztBQUVlLDBCQUNmO0FBQ0MsU0FBTztBQUNOK0QsU0FBSyxFQUFFQSxrQkFERCxPQUNDQSxDQUREO0FBRU5DLFVBQU0sRUFBRUEsb0JBRkYsT0FFRUEsQ0FGRjtBQUdOVCxTQUFLLEVBQUVBLGtCQUhELE9BR0NBLENBSEQ7QUFJTlUsVUFBTSxFQUFFQTtBQUpGLEdBQVA7QUFNQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJEOztBQVlBOztBQUVPLGdEQUNQO0FBQ0MsTUFBRzFCLE1BQU0sQ0FBTkEsc0JBQUgsV0FBMkM7QUFDMUM7QUFDQTs7QUFFRCxPQUFJLElBQUosUUFBZ0JBLE1BQU0sQ0FBTkEsT0FBaEIsWUFBMEM7QUFDekMsUUFBSTdCLEtBQUssR0FBRyxzQkFBVTZCLE1BQU0sQ0FBTkEsa0JBQXRCLElBQXNCQSxDQUFWLENBQVo7QUFDQTs7QUFHRDJCLFNBQU8sQ0FBUEEsS0FBYTNCLE1BQU0sQ0FBTkEsT0FBYjJCO0FBRUE7QUFFQSxNQUFJWCxLQUFLLEdBQVQ7O0FBRUEsT0FBSSxJQUFKLE9BQWUsS0FBZixPQUEyQjtBQUMxQkEsU0FBSyxDQUFMQSxLQUNDLElBQUlFLE9BQUosZUFDQywwQkFERCxHQUNDLENBREQsRUFFQywwQkFBYyxXQUhoQkYsR0FHZ0IsQ0FBZCxDQUZELENBRERBO0FBTUE7O0FBRUQsTUFBSUcsVUFBVSxHQUFHLElBQUlDLE9BQUosb0JBQ2hCLElBQUlDLE9BQUosZUFDQyx1QkFERCxhQUNDLENBREQsRUFDb0IsUUFFbEIsdUJBRmtCLFFBRWxCLENBRmtCLEVBR2xCLElBQUlDLE9BQUosaUJBTEgsS0FLRyxDQUhrQixDQURwQixDQURnQixDQUFqQjtBQVVBN0QsU0FBTyxDQUFQQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQ7O0FBZUE7O0FBRU8saURBQ1A7QUFDQyxNQUFHdUMsTUFBTSxDQUFOQSxVQUFILFdBQStCO0FBQzlCO0FBQ0E7O0FBRUQsTUFBSTRCLFlBQVksR0FBRzVCLE1BQU0sQ0FBTkEsNkJBQW5COztBQUVBLE1BQUcsQ0FBSCxjQUFrQjtBQUNqQjtBQUNBOztBQVRGLG1CQVd5QixzQkFBVSxLQUFWLFNBQXdCO0FBQy9DNEIsZ0JBQVksRUFEbUM7QUFFL0N6RCxTQUFLLFFBQVE2QixNQUFNLENBQWQ7QUFGMEMsR0FBeEIsRUFHckI2QixPQWRKLFVBV3lCLENBWHpCO0FBQUEsTUFXT3JFLElBWFA7QUFBQSxNQVdhc0UsT0FYYjs7QUFnQkN0RSxNQUFJLEdBQUcsSUFBSXVFLE9BQUosZ0JBQW9CLElBQUksQ0FBSixJQUFTLGdCQUFVO0FBQzdDLFdBQU8sdUJBQVAsSUFBTyxDQUFQO0FBRER2RSxHQUEyQixDQUFwQixDQUFQQTtBQUtBLE1BQUl5QyxJQUFJLEdBQUcsSUFBSStCLE9BQUosNEJBQ1YsSUFBSUMsT0FBSixlQUFtQixDQUNsQixJQUFJYixPQUFKLG9CQUNDLElBQUljLE9BQUosMEJBRUMsSUFBSUMsT0FBSix3QkFBNEIsdUJBRjdCLFdBRTZCLENBQTVCLENBRkQsRUFISCxPQUdHLENBREQsQ0FEa0IsQ0FBbkIsQ0FEVSxDQUFYO0FBWUEsTUFBSWhCLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQ0MsdUJBREQsV0FDQyxDQURELEVBRUMsT0FIRixJQUdFLENBRkQsQ0FEZ0IsQ0FBakI7QUFPQTVELFNBQU8sQ0FBUEE7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUREOztBQWdCQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sdUNBQ1A7QUFDQyxNQUFHLENBQUNVLEtBQUssQ0FBVCxjQUF3QjtBQUN2QixXQUFPLDBCQUFjQSxLQUFLLENBQTFCLEtBQU8sQ0FBUDtBQUNBOztBQUVELE1BQUlnQixJQUFJLGNBQVloQixLQUFLLENBQXpCO0FBRUEsTUFBTWYsR0FBRyxHQUFHLE1BQU0sQ0FBTixZQUFtQjtBQUM5QkMsY0FBVSxFQURvQjtBQUU5QkMsY0FBVSxFQUFFO0FBRmtCLEdBQW5CLENBQVo7QUFLQSxTQUFPOEUsRUFBRSxNQUFULE9BQVMsQ0FBVDtBQUNBO0FBRUQ7Ozs7O0FBR08sb0NBQ1A7QUFDQyw4QkFBYztBQUNiekQsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFDQSxZQUFHVCxPQUFPLENBQVBBLGlCQUF5QlEsRUFBRSxDQUE5QixJQUFHUixDQUFILEVBQXNDO0FBQ3JDLGNBQUdTLElBQUksQ0FBSkEsZ0JBQUgsa0JBQTBDO0FBQ3pDRCxjQUFFLENBQUZBLE9BQWFBLEVBQUUsQ0FBZkEsSUFBYUEsR0FBYkE7QUFDQTtBQUNEO0FBRUQ7QUFWVTtBQURDLEdBQWQ7QUFlQSxNQUFJb0UsTUFBTSxHQUFHakYsR0FBRyxDQUFIQSxhQUFiLENBQWFBLENBQWI7QUFFQWlGLFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxXQUFUQTtBQUVBLFNBQU8sSUFBSUMsT0FBSix5QkFBNkIsQ0FBQyx1QkFBOUIsT0FBOEIsQ0FBRCxDQUE3QixFQUE0QyxJQUFJTCxPQUFKLGVBQW1CLENBQ3JFLElBQUlNLE9BQUosZ0JBREQsTUFDQyxDQURxRSxDQUFuQixDQUE1QyxDQUFQO0FBR0E7QUFFRDs7Ozs7QUFHTyxrQ0FDUDtBQUNDLE1BQUkvRSxJQUFJLEdBQVI7QUFFQSw4QkFBYztBQUNibUIsY0FBVSxFQUFFO0FBQ1hYLFdBRFcsdUJBRVg7QUFDQyxZQUFJQyxFQUFFLEdBQUdDLElBQUksQ0FBYjs7QUFFQSxZQUFHVCxPQUFPLENBQVBBLHFCQUE2QlEsRUFBRSxDQUFsQyxJQUFHUixDQUFILEVBQTBDO0FBQ3pDRCxjQUFJLENBQUpBLEtBQVVTLEVBQUUsQ0FBWlQ7QUFDQVMsWUFBRSxDQUFGQSxPQUFjQSxFQUFFLENBQWhCQSxJQUFjQSxHQUFkQTtBQUNBO0FBUlM7QUFVWE8sVUFWVyxzQkFVQSxDQUVWO0FBWlU7QUFEQyxHQUFkO0FBaUJBLE1BQUk2RCxNQUFNLEdBQUdqRixHQUFHLENBQUhBLGFBQWIsQ0FBYUEsQ0FBYjtBQUVBaUYsUUFBTSxHQUFHQSxNQUFNLENBQU5BLFdBQVRBO0FBRUEsU0FBTztBQUNOUCxXQUFPLEVBREQ7QUFFTnRFLFFBQUksRUFBRUE7QUFGQSxHQUFQO0FBSUE7QUFFRDs7Ozs7QUFHTyxvQ0FDUDtBQUNDLE1BQUlBLElBQUksR0FBUjtBQUVBLDhCQUFjO0FBQ2JtQixjQUFVLEVBQUU7QUFDWFgsV0FEVyx1QkFFWDtBQUNDLFlBQUlDLEVBQUUsR0FBR0MsSUFBSSxDQUFiOztBQUVBLFlBQUcsMEJBQTBCQSxJQUFJLENBQWpDLEdBQUcsQ0FBSCxFQUF3QztBQUN2QztBQUNBOztBQUVELFlBQUdULE9BQU8sQ0FBUEEscUJBQTZCUSxFQUFFLENBQWxDLElBQUdSLENBQUgsRUFBMEM7QUFDekNELGNBQUksQ0FBSkEsS0FBVVMsRUFBRSxDQUFaVDtBQUNBUyxZQUFFLENBQUZBLE9BQWNBLEVBQUUsQ0FBaEJBLElBQWNBLEdBQWRBO0FBQ0E7QUFaUztBQWNYTyxVQWRXLHNCQWNBLENBRVY7QUFoQlU7QUFEQyxHQUFkO0FBcUJBLE1BQUk2RCxNQUFNLEdBQUdqRixHQUFHLENBQUhBLGFBQWIsQ0FBYUEsQ0FBYjtBQUVBaUYsUUFBTSxHQUFHQSxNQUFNLENBQU5BLFdBQVRBOztBQUVBLE1BQUc3RSxJQUFJLENBQUpBLFdBQUgsR0FBc0I7QUFDckI7QUFDQTs7QUFFREEsTUFBSSxHQUFHLElBQUl1RSxPQUFKLGdCQUFvQixJQUFJLENBQUosSUFBUyxnQkFBVTtBQUM3QyxXQUFPLHVCQUFQLElBQU8sQ0FBUDtBQUREdkUsR0FBMkIsQ0FBcEIsQ0FBUEE7QUFLQSxNQUFJeUMsSUFBSSxHQUFHLElBQUkrQixPQUFKLDRCQUNWLElBQUlDLE9BQUosZUFBbUIsQ0FDbEIsSUFBSU0sT0FBSixnQkFGRixNQUVFLENBRGtCLENBQW5CLENBRFUsQ0FBWDtBQU1BLFNBQU8sSUFBSWxCLE9BQUosZUFDTix1QkFETSxVQUNOLENBRE0sRUFFTixPQUZELElBRUMsQ0FGTSxDQUFQO0FBSUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBVnRKRDs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBV0RBOztBQVlBLGtHLENBRUE7OztBQUNlLHFDQUNmO0FBQUE7O0FBRUMsTUFBSTlCLElBQUksR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3BELFdBQU8sSUFBSThCLE9BQUosZUFDTix1QkFETSxjQUNOLENBRE0sRUFDYyxDQUNuQiwwQkFBYyxLQUFJLENBREMsSUFDbkIsQ0FEbUIsS0FHbkIsdUJBSkYsUUFJRSxDQUhtQixDQURkLENBQVA7QUFERCxHQUFXLENBQVg7QUFVQTVELFNBQU8sQ0FBUEEsS0FBYThCLElBQUksQ0FBakI5QjtBQUVBeUMsU0FBTyxDQUFQQTtBQUVBLE1BQUlqQixRQUFRLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUN4RCxXQUFPLElBQUlrRCxPQUFKLG9CQUNILHVCQURKLGFBQ0ksQ0FERyxDQUFQO0FBREQsR0FBZSxDQUFmO0FBTUExRSxTQUFPLENBQVBBLEtBQWF3QixRQUFRLENBQXJCeEI7QUFFQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQVVBOztBQUVlLGdDQUNmO0FBQUE7O0FBQ0MsTUFBSStFLE1BQU0sR0FBVjtBQUNBLE1BQUl2QyxJQUFJLEdBQVI7QUFFQXVDLFFBQU0sQ0FBTkEsS0FBWXRDLE9BQU8sQ0FBbkJzQyxpQkFBWXRDLEVBQVpzQztBQUNBQSxRQUFNLENBQU5BLEtBQVksdUJBQUcsS0FBZkEsS0FBWSxDQUFaQTtBQUVBLE1BQUl2RCxRQUFRLEdBQUcsT0FBTyxDQUFQLHFCQUE2QixnQkFBVTtBQUNyRCxRQUFJSyxLQUFLLEdBQUdZLE9BQU8sQ0FBUEEsZUFBWixLQUFZQSxDQUFaO0FBQ0EsV0FBTyxJQUFJbUIsT0FBSixlQUNOLHVCQURNLFNBQ04sQ0FETSxFQUNTLFFBQVEsdUJBQVIsTUFBUSxDQUFSLEVBQW9CLHVCQURwQyxNQUNvQyxDQUFwQixDQURULENBQVA7QUFGRCxHQUFlLENBQWY7QUFPQXBCLE1BQUksQ0FBSkEsS0FBVWhCLFFBQVEsQ0FBbEJnQjtBQUVBLE1BQUl3QyxTQUFTLEdBQUcsaUNBQWhCLE9BQWdCLENBQWhCO0FBRUEsTUFBSUMsYUFBYSxHQUFHLElBQUlILE9BQUosZ0JBQ25CLElBQUlJLE9BQUosc0JBQ0MsdUJBREQsUUFDQyxDQURELEVBQ2UxRCxRQUFRLENBRHZCLE1BREQsU0FDQyxDQURtQixDQUFwQjtBQU1BZ0IsTUFBSSxDQUFKQTtBQUVBdUMsUUFBTSxDQUFOQSxLQUNDLElBQUlSLE9BQUosd0JBQTRCLENBQzNCLHVCQUQyQixNQUMzQixDQUQyQixFQUNmO0FBQ1oseUJBRjJCLEtBRTNCLENBRjJCLENBRWpCO0FBRmlCLEdBQTVCLEVBR0csSUFBSUMsT0FBSixlQUpKTyxJQUlJLENBSEgsQ0FEREE7QUFPQSxNQUFJckIsVUFBVSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDMUQsV0FBTyxJQUFJRSxPQUFKLGVBQW1CLHVCQUFuQixRQUFtQixDQUFuQixFQUFQLE1BQU8sQ0FBUDtBQURELEdBQWlCLENBQWpCO0FBSUE1RCxTQUFPLENBQVBBLEtBQWEwRCxVQUFVLENBQXZCMUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuREQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFZQTs7QUFFQTs7QUFHZSxnQ0FDZjtBQUNDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUF5QyxTQUFPLENBQVBBLG9CQUE0QkEsT0FBTyxDQUFuQ0EsaUJBQTRCQSxFQUE1QkE7QUFDQUEsU0FBTyxDQUFQQSxxQkFBNkJBLE9BQU8sQ0FBcENBLGlCQUE2QkEsRUFBN0JBO0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQVFBOztBQUVlLG1DQUNmO0FBQUE7O0FBQ0MsTUFBSWpCLFFBQVEsR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3hELFFBQUlLLEtBQUssR0FBR1ksT0FBTyxDQUFQQSxlQUFaLEtBQVlBLENBQVo7QUFDQSxXQUFPLElBQUltQixPQUFKLGVBQ04sdUJBRE0sU0FDTixDQURNLEVBQ1MsUUFBUW5CLE9BQU8sQ0FBZixpQkFBUUEsRUFBUixFQUFxQyx1QkFEckQsUUFDcUQsQ0FBckMsQ0FEVCxDQUFQO0FBRkQsR0FBZSxDQUFmO0FBT0F6QyxTQUFPLENBQVBBLEtBQWF3QixRQUFRLENBQXJCeEI7QUFHQSxNQUFJZ0YsU0FBUyxHQUFHLDZDQUFpQ0csT0FBakQsb0JBQWdCLENBQWhCO0FBSUEsTUFBSUYsYUFBYSxHQUFHLElBQUlILE9BQUosZ0JBQ25CLElBQUlJLE9BQUosc0JBQ0MsdUJBREQsUUFDQyxDQURELEVBQ2UxRCxRQUFRLENBRHZCLE1BREQsU0FDQyxDQURtQixDQUFwQjtBQU1BeEIsU0FBTyxDQUFQQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7O0FBV0E7O0FBRWUsZ0NBQ2Y7QUFDQyxNQUFJK0UsTUFBTSxHQUFHLENBQ1osdUJBRFksUUFDWixDQURZLEVBRVosMEJBQWMsS0FGRixJQUVaLENBRlksRUFHWnRDLE9BQU8sQ0FIUixpQkFHQ0EsRUFIWSxDQUFiO0FBTUEsTUFBSWlCLFVBQVUsR0FBRyxJQUFJQyxPQUFKLG9CQUNoQixJQUFJQyxPQUFKLGVBQW1CLHVCQUFuQixRQUFtQixDQUFuQixFQURELE1BQ0MsQ0FEZ0IsQ0FBakI7QUFJQSxNQUFJcEIsSUFBSSxHQUFSO0FBRUE7QUFFQXVDLFFBQU0sQ0FBTkEsS0FDQyxJQUFJUixPQUFKLHdCQUE0QixDQUMxQix1QkFERixNQUNFLENBRDBCLENBQTVCLEVBR0MsSUFBSUMsT0FBSixlQUpGTyxJQUlFLENBSEQsQ0FEREE7QUFRQS9FLFNBQU8sQ0FBUEE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFlLHFDQUNmO0FBQ0MsTUFBSStFLE1BQU0sR0FBVjtBQUVBQSxRQUFNLENBQU5BLEtBQVl0QyxPQUFPLENBQW5Cc0MsaUJBQVl0QyxFQUFac0M7O0FBRUEsT0FBSyxJQUFJcEQsQ0FBQyxHQUFWLEdBQWdCQSxDQUFDLEdBQUcsY0FBcEIsUUFBMENBLENBQTFDLElBQStDO0FBQzlDLFFBQUl5RCxLQUFLLEdBQUcsY0FBWixDQUFZLENBQVo7QUFDQSxRQUFJNUMsSUFBSSxHQUFSO0FBRUE7QUFDQzZDLDJCQUFxQixFQUFFNUMsT0FBTyxDQUFQQTtBQUR4QjtBQUtBc0MsVUFBTSxDQUFOQSxLQUFZLHVCQUFHSyxLQUFLLENBQXBCTCxLQUFZLENBQVpBO0FBQ0FBLFVBQU0sQ0FBTkEsS0FDQyxJQUFJUixPQUFKLHdCQUE0QixDQUMzQix1QkFERCxNQUNDLENBRDJCLENBQTVCLEVBRUcsSUFBSUMsT0FBSixlQUhKTyxJQUdJLENBRkgsQ0FEREE7QUFLQTs7QUFHRCxNQUFJckIsVUFBVSxHQUFHLE9BQU8sQ0FBUCx3QkFBZ0MsZ0JBQVU7QUFDMUQsV0FBTyxJQUFJRSxPQUFKLGVBQW1CLHVCQUFuQixhQUFtQixDQUFuQixFQUFQLE1BQU8sQ0FBUDtBQURELEdBQWlCLENBQWpCO0FBS0E1RCxTQUFPLENBQVBBLEtBQWEwRCxVQUFVLENBQXZCMUQ7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENEOztBQUtlLGdDQUNmO0FBRUN5QyxTQUFPLENBQVBBLHFCQUE2QkEsT0FBTyxDQUFwQ0EsaUJBQTZCQSxFQUE3QkEsV0FGRCxPQUVDQSxFQUZELENBSUM7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDRDs7QUFTTyxnREFDUDtBQUNDLE1BQUk2QyxPQUFPLEdBQUcsT0FBTyxDQUFQLHdCQUFnQyxnQkFBVTtBQUN2RCxXQUFPLElBQUlKLE9BQUosc0JBQ04sdUJBRE0sUUFDTixDQURNLEVBRU4sSUFBSVIsT0FBSixvQkFBd0IsdUJBRmxCLFlBRWtCLENBQXhCLENBRk0sRUFBUCxDQUFPLENBQVA7QUFERCxHQUFjLENBQWQ7QUFRQTFFLFNBQU8sQ0FBUEEsS0FBYXNGLE9BQU8sQ0FBcEJ0RjtBQUNBOztBQUVNLDBDQUNQO0FBQ0MsTUFBSXdCLFFBQVEsR0FBRyxPQUFPLENBQVAsd0JBQWdDLGdCQUFVO0FBQ3hELFdBQU8sSUFBSWtELE9BQUosb0JBQ0gsdUJBREosSUFDSSxDQURHLENBQVA7QUFERCxHQUFlLENBQWY7QUFNQTFFLFNBQU8sQ0FBUEEsS0FBYXdCLFFBQVEsQ0FBckJ4QjtBQUNBOztBQUVNLDJEQUNQO0FBQUEsTUFEbUR1RixhQUNuRDtBQURtREEsaUJBQ25ELEdBRG1FLEtBQWhCQTtBQUNuRDs7QUFDQzlDLFNBQU8sQ0FBUEE7O0FBRUEsT0FBSyxJQUFJZCxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBR1ksTUFBTSxDQUFOQSxTQUFwQixRQUE0Q1osQ0FBNUMsSUFBaUQ7QUFDaEQ2RCxlQUFXLENBQUNqRCxNQUFNLENBQU5BLFNBQUQsQ0FBQ0EsQ0FBRCx1QkFBWGlELGFBQVcsQ0FBWEE7QUFDQTs7QUFFRCxNQUFJUixTQUFTLEdBQUd2QyxPQUFPLENBQXZCLGlCQUFnQkEsRUFBaEI7QUFFQUEsU0FBTyxDQUFQQTtBQUVBO0FBQ0E7O0FBRU0scUVBQ1A7QUFDQyxNQUFJZ0QsT0FBTyxHQUFHNUQsS0FBSyxLQUFuQjs7QUFFQSxNQUFHMEQsYUFBYSxJQUFoQixTQUE2QjtBQUM1QkEsaUJBQWEsVUFBYkEsT0FBYSxDQUFiQTtBQURELFNBRU87QUFDTixRQUFHLENBQUNoRCxNQUFNLENBQVYsUUFBSUEsRUFBSixFQUF1QjtBQUN0Qm1ELGNBQVEsbUJBQW1CRCxPQUFPLGtCQUFsQ0MsYUFBUSxDQUFSQTtBQUNBO0FBQ0Q7O0FBRURuRCxRQUFNLENBQU5BO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QW5CN0RNLDJCQUNQO0FBQ0MsMkJBQ0E7QUFDQyxRQUFJb0QsU0FBUyxDQUFUQSxXQUFKLEdBQTRCO0FBQzNCO0FBQ0E7O0FBRURqRixTQUFLLEdBQUxBOztBQUVBWixRQUFJLENBQUpBLG1CQUF3QixvQkFBWTtBQUFFOEYsY0FBUSxDQUFSQTtBQUF0QzlGOztBQUNBQSxRQUFJLENBQUpBLG1CQUF3QixvQkFBUTtBQUFBLGFBQUk4RixRQUFKO0FBQWhDOUY7O0FBRUE7QUFDQTs7QUFFREEsTUFBSSxDQUFKQSxhQUFrQixJQUFsQkEsR0FBa0IsRUFBbEJBO0FBQ0FBLE1BQUksQ0FBSkE7QUFFQTtBQUNBOztBQUdNLDhCQUNQO0FBQ0MrRixLQUFHLEdBQUcsVUFBTkEsR0FBTSxDQUFOQTs7QUFFQSxrR0FBbUI7QUFBQSxRQUFYQyxFQUFXOztBQUNsQkEsTUFBRSxDQUFGQTtBQUNBOztBQUVELGtCQUNBO0FBQ0MsUUFBRyxDQUFDQyxNQUFNLENBQVYsUUFBbUI7QUFDbEJBLFlBQU07QUFDTjs7QUFFRCxXQUFPckYsS0FBUDtBQUNBOztBQUVELG9CQUNBO0FBQ0NxRixVQUFNLENBQU5BOztBQUVBakcsUUFBSSxDQUFKQSxtQkFBd0Isb0JBQVE7QUFBQSxhQUFJOEYsUUFBSjtBQUFoQzlGOztBQUVBO0FBQ0E7O0FBRURBLE1BQUksQ0FBSkEsYUFBa0IsSUFBbEJBLEdBQWtCLEVBQWxCQTtBQUNBQSxNQUFJLENBQUpBO0FBRUFpRyxRQUFNO0FBRU47QUFDQTs7QUFFTSxxQ0FDUDtBQUFBLE1BRHNDQyxJQUN0QztBQURzQ0EsUUFDdEMsR0FENkMsS0FBUEE7QUFDdEM7O0FBQ0NILEtBQUcsR0FBRyxVQUFOQSxHQUFNLENBQU5BOztBQUVBLHNHQUFtQjtBQUFBLFFBQVhDLEVBQVc7O0FBQ2xCLFFBQUdBLEVBQUUsQ0FBTCxZQUFrQjtBQUNqQkEsUUFBRSxDQUFGQTtBQUNBOztBQUVELFFBQUdBLEVBQUUsQ0FBTCxPQUFhO0FBQ1osNERBQWVBLEVBQUUsQ0FBakIsZ0RBQXlCO0FBQUEsWUFBakJHLEdBQWlCO0FBQ3hCQSxXQUFHLENBQUhBO0FBQ0E7QUFDRDtBQUNEOztBQUVELE1BQUcsQ0FBSCxNQUFVO0FBQ1R2RixTQUFLO0FBQ0w7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FvQnpFRCxtRixDQUhBO0FBQ0E7QUFDQTs7O0FBSUEsSUFBSXdGLE1BQU0sR0FBRyxvQkFDWixzNEJBREQsMkNBQWEsQ0FBYjs7QUFnQkEsSUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBVTtBQUN6QixTQUFPRCxNQUFNLENBQU5BLElBQU0sQ0FBTkEsSUFBZ0I3RixJQUFJLENBQUpBLE1BQXZCLFVBQXVCQSxDQUF2QjtBQUREOztBQUlBLHdDQUNBO0FBQUEsTUFEMEI4RCxZQUMxQjtBQUQwQkEsZ0JBQzFCLEdBRHlDLEtBQWZBO0FBQzFCOztBQUNDLFNBQU87QUFDTnpELFNBQUssRUFEQztBQUVOeUQsZ0JBQVksRUFBWkE7QUFGTSxHQUFQO0FBSUE7O0FBRU0sb0JBQ1A7QUFDQyxNQUFJSCxNQUFNLEdBQVY7QUFDQSxNQUFJVCxLQUFLLEdBQVQ7QUFDQSxNQUFJNkMsVUFBVSxHQUFkO0FBQ0EsTUFBSUMsV0FBVyxHQUFmOztBQUVBLE9BQUksSUFBSixhQUNBO0FBQ0MsUUFBSTNGLEtBQUssR0FBRzRGLEdBQUcsQ0FBZixJQUFlLENBQWY7O0FBRUEsUUFBR0gsU0FBUyxDQUFaLElBQVksQ0FBWixFQUFvQjtBQUNuQkUsaUJBQVcsQ0FBWEEsSUFBVyxDQUFYQTtBQURELFdBRU8sSUFBR2hHLElBQUksQ0FBSkEsTUFBSCxLQUFHQSxDQUFILEVBQXNCO0FBQzVCQSxVQUFJLEdBQUdBLElBQUksQ0FBSkEsZUFBUEEsRUFBT0EsQ0FBUEE7QUFDQTJELFlBQU0sQ0FBTkEsSUFBTSxDQUFOQSxHQUFldUMsU0FBUyxRQUF4QnZDLElBQXdCLENBQXhCQTtBQUZNLFdBR0EsSUFBRzNELElBQUksQ0FBSkEsTUFBSCxNQUFHQSxDQUFILEVBQXVCO0FBQzdCQSxVQUFJLEdBQUdBLElBQUksQ0FBSkEsZ0JBQVBBLEVBQU9BLENBQVBBOztBQUNBLFVBQUc4RixTQUFTLENBQVosSUFBWSxDQUFaLEVBQW9CO0FBQ25CQyxrQkFBVSxDQUFWQSxJQUFVLENBQVZBLEdBQW1CRyxTQUFTLFFBQTVCSCxJQUE0QixDQUE1QkE7QUFERCxhQUVPO0FBQ043QyxhQUFLLENBQUxBLElBQUssQ0FBTEEsR0FBY2dELFNBQVMsUUFBdkJoRCxJQUF1QixDQUF2QkE7QUFDQTtBQU5LLFdBT0E7QUFDTkEsV0FBSyxDQUFMQSxJQUFLLENBQUxBLEdBQWNnRCxTQUFTLENBRGpCLEtBQ2lCLENBQXZCaEQsQ0FETSxDQUVOO0FBQ0E7QUFDRDs7QUFFRCxTQUFPO0FBQ044QyxlQUFXLEVBREw7QUFFTnJDLFVBQU0sRUFGQTtBQUdOVCxTQUFLLEVBSEM7QUFJTjZDLGNBQVUsRUFBVkE7QUFKTSxHQUFQO0FBTUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FwQnJFRDs7QUFFQSx5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXFCRkE7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRU8sbUNBQ1A7QUFDQyxPQUFJLElBQUosZUFBdUI7QUFDdEIsUUFBSUksTUFBTSxHQUFHLHdEQUFiLEdBQWEsQ0FBYjtBQUNBLFFBQUlDLE9BQU8sR0FBR0QsTUFBTSxDQUFOQSxLQUFkLElBQWNBLENBQWQ7O0FBQ0EsaUJBQVk7QUFDWGxGLFlBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjbUYsT0FBTyxDQUFyQm5GLENBQXFCLENBQXJCQTtBQUNBO0FBQ0Q7O0FBRUQ7QUFDQTs7QUFFTSxxQkFDUDtBQUNDO0FBQ0EsTUFBSUEsTUFBTSxHQUFHb0YsV0FBVyxDQUFDO0FBQ3hCQyxVQUFNLEVBRGtCO0FBRXhCQyxTQUFLLEVBQUU7QUFGaUIsR0FBRCxFQUZ6QixJQUV5QixDQUF4QixDQUZELENBT0M7O0FBQ0FDLE1BQUksR0FBRyw4QkFSUixJQVFRLENBQVBBLENBUkQsQ0FVQzs7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FDWCxJQUFJQyxPQUFKLFdBQWU7QUFBRUMsUUFBSSxFQUFFO0FBQVIsR0FBZixDQURXLENBQVo7O0FBSUEsOEJBQ0E7QUFDQyxXQUFPRixLQUFLLENBQUNBLEtBQUssQ0FBTEEsU0FBYixDQUFZLENBQVo7QUFDQTs7QUFFRCw0QkFDQTtBQUNDLFdBQU9BLEtBQUssQ0FBTEEsZ0JBQXNCLDZCQUE3QixJQUE2QixDQUE3QjtBQUNBOztBQUVELE1BQU1HLEtBQUssR0FBRyxJQUFJQyxZQUFKLE9BQWU7QUFFNUJDLGFBRjRCLGtDQUc1QjtBQUNDLFVBQUlDLE1BQU0sR0FBR0MsZ0JBQWI7QUFDQTs7QUFFQSxVQUFHaEgsSUFBSSxLQUFQLFFBQW9CO0FBQ25Ca0MsY0FBTSxHQUFHLElBQUl3RSxPQUFKLFdBQVR4RSxLQUFTLENBQVRBO0FBREQsYUFFTyxJQUFHbEMsSUFBSSxLQUFQLFFBQW9CO0FBQzFCa0MsY0FBTSxHQUFHLElBQUkrRSxPQUFKLEtBQVQvRSxLQUFTLENBQVRBO0FBRE0sYUFFQSxJQUFJLHdCQUFKLElBQUksQ0FBSixFQUF1QjtBQUM3QkEsY0FBTSxHQUFHLElBQUlnRixPQUFKLGdCQUFUaEYsS0FBUyxDQUFUQTtBQURNLGFBRUE7QUFDTkEsY0FBTSxHQUFHLElBQUlpRixPQUFKLFdBQVRqRixLQUFTLENBQVRBO0FBQ0E7O0FBRUQsa0JBQVc7QUFDVjZFLGNBQU0sQ0FBTkE7QUFDQTs7QUFFRE4sV0FBSyxDQUFMQTtBQXJCMkI7QUF3QjVCVyxVQXhCNEIsd0JBeUI1QjtBQUNDLFVBQUlMLE1BQU0sR0FBR0MsZ0JBQWI7QUFFQUssVUFBSSxHQUFHQSxJQUFJLENBQVhBLElBQU9BLEVBQVBBOztBQUVBLFVBQUdBLElBQUksS0FBSkEsTUFBSCxRQUEwQjtBQUN6QixZQUFJQyxJQUFJLEdBQUcsSUFBSUMsT0FBSixLQUFYLElBQVcsQ0FBWDs7QUFDQSxvQkFBVztBQUNWUixnQkFBTSxDQUFOQTtBQUNBO0FBQ0U7QUFuQ3VCO0FBc0M1QlMsY0F0QzRCLDRCQXVDNUI7QUFDQyxVQUFJQyxPQUFPLEdBQUdoQixLQUFLLENBQW5CLEdBQWNBLEVBQWQ7QUFDRztBQXpDd0IsR0FBZixFQTJDWDtBQUFFaUIsa0JBQWMsRUFBRTtBQUFsQixHQTNDVyxDQUFkO0FBNkNBZCxPQUFLLENBQUxBO0FBQ0FBLE9BQUssQ0FBTEE7QUFFQTNGLFFBQU0sQ0FBTkEsV0FBa0J3RixLQUFLLENBekV4QixDQXlFd0IsQ0FBdkJ4RixDQXpFRCxDQTBFQzs7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0QsMkJBQ0E7QUFDQyxTQUFPdUYsSUFBSSxDQUFKQSwyQ0FBUCxJQUFPQSxFQUFQO0FBQ0E7O0FBRU0sK0JBQ1A7QUFDQyxPQUFJLElBQUosZUFBdUI7QUFDdEIsUUFBSUwsTUFBTSxHQUFHLHdEQUFiLEdBQWEsQ0FBYjtBQUNBSyxRQUFJLEdBQUdBLElBQUksQ0FBSkEsZ0JBQVBBLEVBQU9BLENBQVBBO0FBQ0E7O0FBRURBLE1BQUksR0FBRyxJQUFJLENBQ1Y7QUFEVSxHQUFKLDhQQU1OO0FBTk0sbUZBQVBBLFNBQU8sQ0FBUEE7QUFVQSxTQUFPbUIsV0FBVyxDQUFsQixJQUFrQixDQUFsQjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QkQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCVCxTOzs7QUFFcEIsa0NBQ0E7QUFBQTs7QUFDQztBQUNBO0FBQ0Esb0JBQWUsa0JBQWYsS0FBZSxDQUFmO0FBQ0E7QUFDQTtBQUxEO0FBTUM7Ozs7U0FFRFUsYSxHQUFBQSx5QkFDQTtBQUNDLFdBQU9DLE1BQU0sQ0FBTkEsS0FBWSxZQUFaQSxxQkFBUDs7OztFQWJxQ0MsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSHZDOzs7Ozs7Ozs7Ozs7OztJQUVxQnBCLFU7OztBQUVwQiw0QkFDQTtBQUFBOztBQUFBLHlCQURjQyxJQUNkO0FBQUEsUUFEY0EsSUFDZCwwQkFEcUIsSUFDckI7QUFBQSwwQkFEMkJ0RyxLQUMzQjtBQUFBLFFBRDJCQSxLQUMzQiwyQkFEbUMsSUFDbkM7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUpEO0FBS0M7OztFQVJzQ3lILGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z4Qzs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJYLEk7OztBQUVwQiw0QkFDQTtBQUFBOztBQUNDO0FBRUE7QUFDQSxtQkFBYyxrQkFBZCxLQUFjLENBQWQ7QUFDQTtBQUNBO0FBTkQ7QUFPQzs7OztTQUVEUyxhLEdBQUFBLHlCQUNBO0FBQ0MsV0FBT0MsTUFBTSxDQUFOQSxLQUFZLFlBQVpBLHFCQUFQOzs7O0VBZGdDQyxjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbEM7Ozs7Ozs7Ozs7Ozs7O0lBRXFCYixJOzs7QUFFcEIsc0JBQ0E7QUFBQTs7QUFBQSx5QkFEY2pILElBQ2Q7QUFBQSxRQURjQSxJQUNkLDBCQURxQixTQUNyQjtBQUFBLHdCQURnQytILEdBQ2hDO0FBQUEsUUFEZ0NBLEdBQ2hDLHlCQURzQyxNQUN0QztBQUNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMRDtJQVFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7OztFQWhDaUNELGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQzs7Ozs7Ozs7Ozs7Ozs7SUFFcUJQLEk7OztBQUVwQixzQkFDQTtBQUFBOztBQUNDO0FBQ0E7QUFDQTtBQUhEO0FBSUM7Ozs7U0FFRFMsWSxHQUFBQSx3QkFDQTtBQUNDLFdBQU8sS0FBUDs7OztFQVhnQ0YsYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxDOztJQUVxQkEsSTtBQUVwQixrQkFDQTtBQUNDO0FBQ0E7Ozs7U0FFREcsRyxHQUFBQSx1QkFDQTtBQUNDLFFBQUcsaUJBQWlCLGNBQXBCLGFBQStDO0FBQzlDO0FBQ0E7OztTQUdGQyxRLEdBQUFBLHlCQUNBO0FBQ0NDLFNBQUssQ0FBTEE7QUFDQTs7O1NBR0QxRixNLEdBQUFBLGtDQUNBO0FBQ0MsV0FBTzJGLGdCQUFNLEtBQU5BLDBCQUFQLE9BQU9BLENBQVA7OztTQUdEQyxRLEdBQUFBLG9CQUNBO0FBQ0MsV0FERCxLQUNDLENBREQsQ0FDYzs7O1NBR2RMLFksR0FBQUEsb0NBQ0E7QUFBQSxRQURhTSxZQUNiO0FBRGFBLGtCQUNiLEdBRDRCLElBQWZBO0FBQ2I7O0FBQ0MsUUFBSW5ILFFBQVEsU0FBTyxLQUFuQjtBQUVBLFFBQUl1QyxLQUFLLEdBQUcsY0FBYyxZQUFkLGNBQVo7O0FBRUEsU0FBSSxJQUFKLGNBQXNCO0FBQ3JCdkMsY0FBUSx3QkFBZ0J1QyxLQUFLLENBQXJCLEdBQXFCLENBQXJCLEdBQVJ2QztBQUNBOztBQUVEQSxZQUFRLElBQVJBO0FBRUEsUUFBSW9ILGFBQWEsR0FBRyxrQkFBa0IsaUJBQUs7QUFBQSxhQUFJSixLQUFLLENBQUxBLGFBQUosS0FBSUEsQ0FBSjtBQUF2QixZQUFwQixFQUFvQixDQUFwQjtBQUVBaEgsWUFBUSxJQUFSQTtBQUVBQSxZQUFRLFdBQVMsS0FBVCxNQUFSQTs7QUFFQSxRQUFHLDRDQUE0QyxLQUE1QyxTQUEwRCxDQUE3RCxjQUE0RTtBQUMzRTtBQUNBOztBQUVELFFBQUcsQ0FBQyxLQUFKLEtBQWM7QUFDYjtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QXpCMURGOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EwQkpBLElBQU1xSCxRQUFRLEdBQUcsc2dDQUFqQixLQUFpQixDQUFqQjs7QUFjTywyQkFDUDtBQUNDLFNBQU8sQ0FBQ0EsUUFBUSxDQUFSQSxTQUFSLElBQVFBLENBQVI7QUFDQTs7QUFFTSx3Q0FDUDtBQUNDLE1BQUlQLEdBQUcsR0FBR0osTUFBTSxDQUFOQSxPQUFWLElBQVVBLENBQVY7QUFDQSxNQUFJWSxJQUFJLEdBQUdDLEdBQUcsQ0FBSEEsTUFBWCxHQUFXQSxDQUFYOztBQUVBLE9BQUssSUFBSXBILENBQUMsR0FBVixHQUFnQkEsQ0FBQyxHQUFHbUgsSUFBSSxDQUF4QixRQUFpQ25ILENBQWpDLElBQXNDO0FBQ3JDMkcsT0FBRyxDQUFDUSxJQUFJLENBQVJSLENBQVEsQ0FBTCxDQUFIQTtBQUNBOztBQUVELFNBQU9VLGdCQUFnQixHQUN0QixlQUFjO0FBQUUsV0FBT1YsR0FBRyxDQUFDVyxHQUFHLENBQWQsV0FBV0EsRUFBRCxDQUFWO0FBRE0sTUFFdEIsZUFBYztBQUFFLFdBQU9YLEdBQUcsQ0FBVixHQUFVLENBQVY7QUFGakI7QUFHQSxDOzs7Ozs7Ozs7Ozs7OztBQy9CRDs7QUFDQTs7QUFDQTs7QUFHQTs7OztBQUdBLFNBQVNZLElBQVQsR0FBZ0I7QUFFZixXQUFTQyxPQUFULENBQWlCM0gsUUFBakIsRUFBMkJtRyxJQUEzQixFQUFpQ3ZFLE1BQWpDLEVBQXlDO0FBQ3hDLFFBQUlBLE1BQUosRUFBWTtBQUNYLGFBQU81QixRQUFRLENBQUM2QyxPQUFULENBQWlCK0UsU0FBakIsQ0FBMkIsSUFBM0IsQ0FBUDtBQUNBOztBQUVELFdBQU96QixJQUFQO0FBQ0E7O0FBRUQsV0FBUzBCLFlBQVQsQ0FBc0JySixPQUF0QixFQUErQjtBQUM5QixRQUFJQSxPQUFPLEtBQUtzSixTQUFaLElBQXlCdEosT0FBTyxLQUFLLElBQXpDLEVBQStDO0FBQzlDQSxhQUFPLEdBQUcsRUFBVjtBQUNBOztBQUVELFFBQUl1SixNQUFNLEdBQUd2SixPQUFPLENBQUN1SixNQUFSLElBQWtCLEVBQS9CO0FBQ0EsUUFBSUMsTUFBTSxHQUFHeEosT0FBTyxDQUFDd0osTUFBUixJQUFrQixFQUEvQjtBQUVBLFdBQU87QUFDTkQsWUFBTSxFQUFOQSxNQURNO0FBRU5DLFlBQU0sRUFBTkE7QUFGTSxLQUFQO0FBSUE7O0FBR0QsV0FBU0MsV0FBVCxHQUF1QixDQUV0Qjs7QUFFRCxXQUFTQyxZQUFULENBQXNCL0IsSUFBdEIsRUFBNEJ2RSxNQUE1QixFQUFvQ1gsT0FBcEMsRUFBNkM7QUFDNUMsU0FBSyxJQUFJa0gsR0FBVCxJQUFnQmxILE9BQWhCLEVBQXlCO0FBQ3hCa0YsVUFBSSxDQUFDaUMsZ0JBQUwsQ0FBc0JELEdBQXRCLEVBQTJCbEgsT0FBTyxDQUFDa0gsR0FBRCxDQUFsQztBQUNBO0FBQ0Q7O0FBRUQsV0FBU0UsTUFBVCxDQUFnQkwsTUFBaEIsRUFBd0JuSixJQUF4QixFQUE4QnNILElBQTlCLEVBQW9DbUMsUUFBcEMsRUFBOEM7QUFDN0MsUUFBSU4sTUFBTSxDQUFDbkosSUFBRCxDQUFOLEtBQWlCaUosU0FBckIsRUFBZ0M7QUFDL0JRLGNBQVEsQ0FBQ25DLElBQUQsQ0FBUjtBQUNBO0FBQ0E7O0FBRURBLFFBQUksQ0FBQ29DLFNBQUwsR0FBaUJQLE1BQU0sQ0FBQ25KLElBQUQsQ0FBdkI7QUFFQSxXQUFPc0gsSUFBUDtBQUNBOztBQUVELFdBQVNxQyxNQUFULENBQWdCckMsSUFBaEIsRUFBc0JzQyxLQUF0QixFQUE2QnRGLEVBQTdCLEVBQWlDO0FBQ2hDLFFBQUluQyxJQUFJLEdBQUcwSCxRQUFRLENBQUNDLHNCQUFULEVBQVg7O0FBRUEsU0FBSyxJQUFJeEksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3NJLEtBQUssQ0FBQ0csTUFBMUIsRUFBa0N6SSxDQUFDLEVBQW5DLEVBQXVDO0FBQ3RDLFVBQUlnRyxLQUFJLEdBQUdoRCxFQUFFLENBQUNnRCxLQUFELEVBQU9zQyxLQUFLLENBQUN0SSxDQUFELENBQVosRUFBaUJBLENBQWpCLENBQWI7O0FBQ0FhLFVBQUksQ0FBQzZILFdBQUwsQ0FBaUIxQyxLQUFqQjtBQUNBOztBQUVEQSxRQUFJLENBQUMyQyxXQUFMLENBQWlCOUgsSUFBakI7QUFFQSxXQUFPQSxJQUFQO0FBQ0E7O0FBRUQsV0FBUytILFdBQVQsQ0FBcUI1QyxJQUFyQixFQUFvQztBQUNuQyxRQUFJNkMsVUFBVSxHQUFHLEtBQWpCOztBQURtQyxzQ0FBTkMsSUFBTTtBQUFOQSxVQUFNO0FBQUE7O0FBR25DLFNBQUssSUFBSTlJLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4SSxJQUFJLENBQUNMLE1BQXpCLEVBQWlDekksQ0FBQyxJQUFJLENBQXRDLEVBQXlDO0FBQ3hDLFVBQUk4SSxJQUFJLENBQUM5SSxDQUFELENBQVIsRUFBYTtBQUNaNkksa0JBQVUsR0FBR0MsSUFBSSxDQUFDOUksQ0FBQyxHQUFHLENBQUwsQ0FBSixDQUFZZ0csSUFBWixDQUFiO0FBQ0E7QUFDQTtBQUNEOztBQUVELFFBQUk2QyxVQUFVLEtBQUssS0FBbkIsRUFBMEI7QUFDekIsYUFBTzdDLElBQVA7QUFDQTs7QUFFREEsUUFBSSxDQUFDMkMsV0FBTCxDQUFpQkUsVUFBakI7QUFFQSxXQUFPQSxVQUFQO0FBQ0E7O0FBNUVjLGNBOEVhRSxJQUFJLEVBOUVqQjtBQUFBLE1BOEVUdEgsTUE5RVMsU0E4RVRBLE1BOUVTO0FBQUEsTUE4RURDLFNBOUVDLFNBOEVEQSxTQTlFQzs7QUErRWZhLFNBQU8sQ0FBQ3lHLEdBQVIsQ0FBWXZILE1BQVo7QUFDQWMsU0FBTyxDQUFDeUcsR0FBUixDQUFZdEgsU0FBWjtBQUNBO0FBRUE7Ozs7QUFHQSxNQUFJdUgsTUFBTSxHQUFHVixRQUFRLENBQUNXLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBYjs7QUFDQUQsUUFBTSxDQUFDYixTQUFQLEdBQW1CLDhCQUFuQjs7QUFFQSxNQUFJZSxNQUFNLEdBQUdaLFFBQVEsQ0FBQ1csYUFBVCxDQUF1QixVQUF2QixDQUFiOztBQUNBQyxRQUFNLENBQUNmLFNBQVAsR0FBbUIscUhBQW5COztBQUVBLFdBQVNnQixhQUFULENBQXVCL0ssT0FBdkIsRUFBZ0MySCxJQUFoQyxFQUE4QztBQUFBLFFBQWRBLElBQWM7QUFBZEEsVUFBYyxHQUFQLEtBQU87QUFBQTs7QUFDN0MsUUFBSXZFLE1BQU0sR0FBR3VFLElBQUksS0FBSyxLQUF0Qjs7QUFENkMsd0JBR3BCMEIsWUFBWSxDQUFDckosT0FBRCxDQUhRO0FBQUEsUUFHdkN1SixNQUh1QyxpQkFHdkNBLE1BSHVDO0FBQUEsUUFHL0JDLE1BSCtCLGlCQUcvQkEsTUFIK0I7QUFJN0M7Ozs7O0FBR0EsUUFBSXdCLEtBQUssR0FBRyw0QkFBVyxDQUFYLENBQVo7QUFDQSxRQUFJQyxLQUFLLEdBQUcsNEJBQVcsQ0FBWCxDQUFaO0FBQ0EsUUFBSUMsS0FBSyxHQUFHLDRCQUFXLENBQVgsQ0FBWjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBRUEsUUFBSUMsQ0FBQyxHQUFHLDBCQUFTSixLQUFULEVBQWdCLFlBQU07QUFDN0IsYUFBT0csSUFBSSxHQUFHSCxLQUFkO0FBQ0EsS0FGTyxDQUFSOztBQUlBLGFBQVNLLE9BQVQsR0FBbUI7QUFDbEJuSCxhQUFPLENBQUN5RyxHQUFSLENBQVksTUFBWjtBQUNBO0FBQ0Q7Ozs7O0FBR0EsUUFBSVcsS0FBSyxHQUFHbkMsT0FBTyxDQUFDeUIsTUFBRCxFQUFTakQsSUFBVCxFQUFldkUsTUFBZixDQUFuQjs7QUFFQSxRQUFJbUksS0FBSyxHQUFHbkksTUFBTSxHQUFHa0ksS0FBSyxDQUFDRSxVQUFULEdBQXNCRixLQUF4Qzs7QUFFQTdCLGVBQVcsQ0FBQzhCLEtBQUQsRUFBUW5JLE1BQVIsRUFBZ0I7QUFDMUIsZUFBUyxDQURpQjtBQUUxQixnQkFBVSwwQkFBUyxDQUFDNEgsS0FBRCxDQUFULEVBQWtCLFlBQU07QUFDakMsZUFBTztBQUNOOUIsY0FBSSxFQUFFOEIsS0FBSztBQURMLFNBQVA7QUFHQSxPQUpTLENBRmdCO0FBTzFCLGdCQUFVLDBCQUFTLENBQUNBLEtBQUQsQ0FBVCxFQUFrQixZQUFNO0FBQ2pDLGVBQU9BLEtBQUssRUFBWjtBQUNBLE9BRlMsQ0FQZ0I7QUFVMUIsZUFBUywwQkFBUyxDQUFDQSxLQUFELEVBQVFDLEtBQVIsQ0FBVCxFQUF5QixZQUFNO0FBQ3ZDLGVBQU8sQ0FBQ0QsS0FBSyxFQUFOLEVBQVU7QUFDaEJTLGNBQUksRUFBRVIsS0FBSyxPQUFPO0FBREYsU0FBVixFQUVKRSxJQUZJLENBQVA7QUFHQSxPQUpRO0FBVmlCLEtBQWhCLENBQVg7O0FBaUJBLFFBQUlPLEtBQUssR0FBR0gsS0FBSyxDQUFDQyxVQUFsQjs7QUFFQSxRQUFJRyxNQUFNLEdBQUczQixNQUFNLENBQUMwQixLQUFELEVBQVFFLEtBQUssQ0FBQ0MsSUFBTixDQUFXO0FBQUV6QixZQUFNLEVBQUU7QUFBVixLQUFYLEVBQTBCLFVBQUMwQixDQUFELEVBQUluSyxDQUFKO0FBQUEsYUFBVUEsQ0FBVjtBQUFBLEtBQTFCLENBQVIsRUFBZ0QsVUFBQ29LLElBQUQsRUFBT3BDLEdBQVAsRUFBZTtBQUNqRixVQUFJcUMsS0FBSyxHQUFHN0MsT0FBTyxDQUFDMkIsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLENBQW5COztBQUVBLFVBQUltQixLQUFLLEdBQUdELEtBQUssQ0FBQ1IsVUFBbEI7O0FBRUE5QixrQkFBWSxDQUFDdUMsS0FBRCxFQUFRN0ksTUFBUixFQUFnQjtBQUMzQixpQkFBUyxlQUFTOEksS0FBVCxFQUFnQjtBQUN4QixpQkFBT2IsT0FBTyxFQUFkO0FBQ0EsU0FIMEI7QUFJM0IscUJBQWEsbUJBQVNhLEtBQVQsRUFBZ0I7QUFDNUIsaUJBQU9iLE9BQU8sQ0FBQ2EsS0FBRCxDQUFkO0FBQ0E7QUFOMEIsT0FBaEIsQ0FBWjs7QUFTQSxVQUFJQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ1QsVUFBbEI7QUFDQSxpQ0FBVSxDQUFDUixLQUFELENBQVYsRUFBbUIsWUFBTTtBQUN4Qm1CLGFBQUssQ0FBQ0MsU0FBTix1QkFBb0NwQixLQUFLLEVBQXpDO0FBQ0EsT0FGRDtBQUdBLFVBQUlxQixLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssV0FBbEI7O0FBRUE1QyxrQkFBWSxDQUFDMkMsS0FBRCxFQUFRakosTUFBUixFQUFnQjtBQUMzQixxQkFBYSxtQkFBUzhJLEtBQVQsRUFBZ0I7QUFDNUIsaUJBQU9LLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDQTtBQUgwQixPQUFoQixDQUFaOztBQU1BLFVBQUlDLEtBQUssR0FBR0gsS0FBSyxDQUFDYixVQUFsQjs7QUFFQTNCLFlBQU0sQ0FBQ0wsTUFBRCxFQUFTLFNBQVQsRUFBb0JnRCxLQUFwQixFQUEyQixVQUFBN0UsSUFBSSxFQUFJO0FBQ3hDLFlBQUk4RSxLQUFLLEdBQUdELEtBQUssQ0FBQ2hCLFVBQWxCO0FBQ0EsWUFBSWtCLE1BQU0sR0FBR0QsS0FBSyxDQUFDSCxXQUFuQjtBQUNBLFlBQUlLLE1BQU0sR0FBR0QsTUFBTSxDQUFDbEIsVUFBcEI7QUFDQSxZQUFJb0IsTUFBTSxHQUFHRixNQUFNLENBQUNKLFdBQXBCO0FBQ0EsT0FMSyxDQUFOOztBQU9BLGFBQU9sSixNQUFNLEdBQUc0SSxLQUFILEdBQVdLLEtBQXhCO0FBQ0EsS0FwQ2tCLENBQW5COztBQXNDQSxXQUFPakosTUFBTSxHQUFHa0ksS0FBSCxHQUFXQyxLQUF4QjtBQUNBOztBQUVELE1BQUlzQixNQUFNLEdBQUczQyxRQUFRLENBQUM0QyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQUQsUUFBTSxDQUFDOUMsU0FBUCxHQUFtQixFQUFuQjtBQUVBLHFCQUFLLFFBQUw7QUFDQThDLFFBQU0sQ0FBQ3hDLFdBQVAsQ0FBbUJVLGFBQWEsRUFBaEM7QUFDQSxxQkFBSyxRQUFMO0FBRUEsTUFBSWdDLEdBQUcsR0FBR0YsTUFBTSxDQUFDOUMsU0FBakI7QUFDQThDLFFBQU0sQ0FBQzlDLFNBQVAsR0FBbUJnRCxHQUFuQjtBQUVBLHFCQUFLLFNBQUw7QUFDQWhDLGVBQWEsQ0FBQyxJQUFELEVBQU84QixNQUFNLENBQUNyQixVQUFkLENBQWI7QUFDQSxxQkFBSyxTQUFMLEVBOUxlLENBK0xmO0FBQ0E7O0FBRUR0QyxJQUFJOztBQUVKLFNBQVN3QixJQUFULEdBQWdCO0FBRWYsTUFBSTdELElBQUksb1NBQVI7QUF3QkFBLE1BQUksMHJCQUFKO0FBK0JBLE1BQUl2RixNQUFNLEdBQUcsbUJBQU11RixJQUFOLENBQWI7QUFFQSxTQUFPLHVCQUFRdkYsTUFBUixDQUFQLENBM0RlLENBNERmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDelFELElBQUkwTCxLQUFLLEdBQUcsRUFBWjs7QUFFZSxTQUFTN0IsSUFBVCxDQUFjOUssSUFBZCxFQUNmO0FBQ0MsTUFBSTRNLEdBQUcsR0FBSSxJQUFJQyxJQUFKLEVBQUQsQ0FBV0MsT0FBWCxFQUFWOztBQUVBLE1BQUcsT0FBT0gsS0FBSyxDQUFDM00sSUFBRCxDQUFaLEtBQXVCLFdBQTFCLEVBQXVDO0FBQ3RDMk0sU0FBSyxDQUFDM00sSUFBRCxDQUFMLEdBQWM0TSxHQUFkO0FBQ0EsV0FBT0QsS0FBSyxDQUFDM00sSUFBRCxDQUFaO0FBQ0E7O0FBRUQ2RCxTQUFPLENBQUN5RyxHQUFSLFdBQW9CdEssSUFBcEIsU0FBOEI0TSxHQUFHLEdBQUdELEtBQUssQ0FBQzNNLElBQUQsQ0FBekMsRUFBaUQsSUFBakQ7QUFFQSxTQUFPMk0sS0FBSyxDQUFDM00sSUFBRCxDQUFaO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkRCxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB7IGNvbnRleHQsIGRlcGVuZGVuY2llcyB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gYW5hbHlzZShzb3VyY2UpXG57XG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShzb3VyY2UsIHtcblx0XHRzb3VyY2VUeXBlOiBcInVuYW1iaWd1b3VzXCIsXG5cdFx0c3RyaWN0TW9kZTogZmFsc2UsXG5cdH0pO1xuXG5cdGxldCBkYXRhID0gY29udGV4dChhc3QpO1xuXHRsZXQgZGVwcyA9IGRlcGVuZGVuY2llcyhhc3QsIGRhdGEub2JzZXJ2YWJsZXMpO1xuXG5cdHJldHVybiB7XG5cdFx0Y29udGV4dDogZGF0YSxcblx0XHRkZXBzOiBkZXBzLFxuXHR9O1xufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQsIHBhcnNlIH0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChhc3QpXG57XG5cdGxldCBkYXRhID0ge1xuXHRcdG9ic2VydmFibGVzOiBbXSxcblx0XHR2YXJzOiBbXSxcblx0XHRtZXRob2RzOiBbXSxcblx0fVxuXG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cdFxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZS5pZDtcblx0XHRcdFx0bGV0IHZhbHVlID0gcGF0aC5ub2RlLmluaXQ7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXG5cdFx0XHRcdGlmKGlzU3ViQ29udGV4dCgpIHx8IHZhbHVlID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Y29udGV4dC52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYodmFsdWUudHlwZSA9PT0gJ0NhbGxFeHByZXNzaW9uJyAmJiB2YWx1ZS5jYWxsZWUubmFtZSA9PT0gJyRvJykge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIGlmKFsnQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24nLCAnRnVuY3Rpb25FeHByZXNzaW9uJ10uaW5jbHVkZXModmFsdWUudHlwZSkpIHtcblx0XHRcdFx0XHRkYXRhLm9ic2VydmFibGVzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YS52YXJzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHR9LFxuXHRcdEFycm93RnVuY3Rpb25FeHByZXNzaW9uOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGguY29udGFpbmVyLmlkLm5hbWUpO1xuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGRhdGEubWV0aG9kcy5wdXNoKHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGF0YTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW5jaWVzKGFzdCwgb2JzZXJ2YWJsZXMgPSBbXSlcbntcblx0bGV0IGRlcHMgPSB7fTtcblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cblx0ZnVuY3Rpb24gaXNTdWJDb250ZXh0KCkge1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2subGVuZ3RoID4gMDtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQobmFtZSlcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdG5hbWUsXG5cdFx0XHR2YXJzOiBbXSxcblx0XHRcdGRlcHM6IFtdLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2xvc2VDb250ZXh0KClcblx0e1xuXHRcdGxldCBjb250ZXh0ID0gY29udGV4dFN0YWNrLnBvcCgpO1xuXHRcdGRlcHNbY29udGV4dC5uYW1lXSA9IGNvbnRleHQuZGVwcztcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUubmFtZTtcblxuXHRcdFx0XHRpZighaXNTdWJDb250ZXh0KCkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZighY29udGV4dC52YXJzLmluY2x1ZGVzKG5hbWUpICYmIG9ic2VydmFibGVzLmluY2x1ZGVzKG5hbWUpKSB7XG5cdFx0XHRcdFx0Y29udGV4dC5kZXBzLnB1c2gobmFtZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0VmFyaWFibGVEZWNsYXJhdG9yOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXHRcdFx0XHRsZXQgY29udGV4dCA9IGdldENvbnRleHQoKTtcblxuXHRcdFx0XHRpZihpc1N1YkNvbnRleHQoKSB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdGNvbnRleHQudmFycy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5jb250YWluZXIuaWQubmFtZSk7XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHQgICAgXHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLm5vZGUuaWQubmFtZSk7XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGVwcztcbn0iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIENvbXBvbmVudCwgU2xvdCB9IiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5pbXBvcnQgeyBhbmFseXNlIH0gZnJvbSAnQGhhd2EvYW5hbHlzZXInO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnLi9keW5hbWljJztcblxuaW1wb3J0IHtcblx0dmFyaWFibGVEZWNsYXJhdGlvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHRtZW1iZXJFeHByZXNzaW9uLFxuXG5cdEV4cG9ydERlZmF1bHREZWNsYXJhdGlvbixcblx0T2JqZWN0RXhwcmVzc2lvbixcblx0T2JqZWN0UHJvcGVydHksXG5cdE9iamVjdE1ldGhvZCxcblx0Q2FsbEV4cHJlc3Npb24sXG5cdEZ1bmN0aW9uRXhwcmVzc2lvbixcblx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEJsb2NrU3RhdGVtZW50LFxuXHRMYWJlbGVkU3RhdGVtZW50LFxuXHRSZXR1cm5TdGF0ZW1lbnQsXG5cdFN0cmluZ0xpdGVyYWwsXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHByb2dyYW0sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IGdlbmVyYXRlIGZyb20gXCJAYmFiZWwvZ2VuZXJhdG9yXCI7XG5cbi8qKlxuICogQ29tcGlsZSB0ZW1wbGF0ZSB0byBET00gZXhwcmVzc2lvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBpbGUoYmxvY2tzKVxue1xuXHRsZXQgVmFyaWFibGVDb3VudGVyID0gMDtcblx0bGV0IGNvbnRleHRTdGFjayA9IFtdO1xuXG5cdC8qKlxuXHQgKiBUZW1wbGF0ZSBtYW5hZ2VtZW50XG5cdCAqIEB0eXBlIHtTZXR9XG5cdCAqL1xuXHRsZXQgVGVtcGxhdGVzID0gbmV3IFNldCgpO1xuXG5cdGxldCBjb2RlQW5hbHlzZSA9IGFuYWx5c2UoYmxvY2tzLnNjcmlwdCk7XG5cdGxldCBkeW5hbWljRXhwcmVzc2lvbnMgPSBkeW5hbWljKGNvZGVBbmFseXNlKTtcblx0Ly8gY29uc29sZS53YXJuKGNvZGVBbmFseXNlKTtcblxuXHRmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZShwcm9ncmFtKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gcHJvZ3JhbS5tYWtlVGVtcGxhdGUodHJ1ZSk7XG5cblx0XHRUZW1wbGF0ZXMuYWRkKHRlbXBsYXRlKTtcblxuXHRcdHJldHVybiBpZChgX3RwbCQkeyBUZW1wbGF0ZXMuc2l6ZSB9YCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKVxuXHR7XG5cdFx0bGV0IGNvZGUgPSAnJztcblx0XHRsZXQgaSA9IDA7XG5cblx0XHRmb3IobGV0IHRwbCBvZiBUZW1wbGF0ZXMpIHtcblx0XHRcdGxldCBpbmRleCA9ICsraTtcblx0XHRcdGNvZGUgKz0gYGxldCBfdHBsJCR7IGluZGV4IH0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XFxuYDtcblx0XHRcdGNvZGUgKz0gYF90cGwkJHsgaW5kZXggfS5pbm5lckhUTUwgPSAnJHsgdHBsIH0nO1xcblxcbmA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNvZGU7XG5cdH1cblxuXHQvKipcblx0ICogQ29udGV4dCBtYW5hZ2VtZW50XG5cdCAqIEBwYXJhbSAge1t0eXBlXX0gTGFzdFZhcmlhYmxlSWQgW2Rlc2NyaXB0aW9uXVxuXHQgKiBAcmV0dXJuIHtbdHlwZV19ICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbl1cblx0ICovXG5cdGZ1bmN0aW9uIGNyZWF0ZUNvbnRleHQoaW5pdCA9IGZhbHNlKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5wdXNoKHtcblx0XHRcdExhc3RWYXJpYWJsZUlkOiBpbml0ID8gaWQoJ25vZGUnKSA6IGdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDdXJyZW50Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUNvbnRleHQoKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnBvcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFzdFZhcmlhYmxlSWQoKVxuXHR7XG5cdFx0cmV0dXJuIGdldEN1cnJlbnRDb250ZXh0KCkuTGFzdFZhcmlhYmxlSWQ7XG5cdH1cblxuXHRmdW5jdGlvbiBzZXRMYXN0VmFyaWFibGVJZCh2YWx1ZSlcblx0e1xuXHRcdGdldEN1cnJlbnRDb250ZXh0KCkuTGFzdFZhcmlhYmxlSWQgPSB2YWx1ZTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQgPSBudWxsLCBBY3Rpb24gPSAobiwgbCkgPT4gbClcblx0e1xuXHRcdGxldCBuYW1lID0gaWQoYF9lbCQkeyArK1ZhcmlhYmxlQ291bnRlciB9YCk7XG5cblx0XHRsZXQgZGVsY2FyYXRpb25WYWx1ZSA9IEFjdGlvbihuYW1lLCBnZXRMYXN0VmFyaWFibGVJZCgpKTtcblxuXHRcdGxldCB2YWx1ZSA9IG5ldyB2YXJpYWJsZURlY2xhcmF0aW9uKCdsZXQnLCBbXG5cdFx0XHRuZXcgdmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRkZWxjYXJhdGlvblZhbHVlXG5cdFx0XHQpXG5cdFx0XSk7XG5cblx0XHRzZXRMYXN0VmFyaWFibGVJZChuYW1lKTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFsdWUsXG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb21waWxlIHRlbXBsYXRlc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGVudGl0eSA9IGJsb2Nrcy50ZW1wbGF0ZTtcblx0bGV0IGJvZHkgPSBbXTtcblxuXHRsZXQgb3B0aW9ucyA9IHtcblx0XHRjcmVhdGVDb250ZXh0LFxuXHRcdHJlbW92ZUNvbnRleHQsXG5cdFx0Y3JlYXRlVmFyaWFibGUsXG5cdFx0Z2V0TGFzdFZhcmlhYmxlSWQsXG5cdFx0Y3JlYXRlVGVtcGxhdGUsXG5cdFx0ZHluYW1pYzogZHluYW1pY0V4cHJlc3Npb25zLFxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlKGVudGl0eSlcblx0e1xuXHRcdGVudGl0eS5oYW5kbGUoYm9keSwgb3B0aW9ucyk7XG5cdH1cblxuXHRjcmVhdGVDb250ZXh0KHRydWUpO1xuXHRbZW50aXR5XS5tYXAoKGl0ZW0pID0+IGhhbmRsZShpdGVtKSk7XG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGNvZGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBjb2RlID0gZ2VuZXJhdGUocHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiBjb2RlLmNvZGUsXG5cdFx0dGVtcGxhdGVzOiBnZXRUZW1wbGF0ZXMoKSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlQ29tcHV0ZWQgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcyA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIGluIGVudGl0eS5vcHRpb24uYXR0cmlidXRlcykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIGVudGl0eS5vcHRpb24uYXR0cmlidXRlc1tuYW1lXSwgbWFrZUNvbXB1dGVkKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VGdW5jdGlvbiB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmV2ZW50cykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIGVudGl0eS5vcHRpb24uZXZlbnRzW25hbWVdLCBtYWtlRnVuY3Rpb24pO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VFdmVudHMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHsgbWFrZUF0dHJWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuL2F0dHJzJztcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7IHByb3BzIH0gZnJvbSAnLi9wcm9wcyc7XG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tICcuL3N0cmluZyc7XG4vLyBpbXBvcnQgeyBzbG90cyB9IGZyb20gJy4vc2xvdHMnO1xuXG4vLyBleHBvcnQgeyBhdHRycywgZXZlbnRzLCBwcm9wcyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoY29udGV4dClcbntcblx0cmV0dXJuIHtcblx0XHRhdHRyczogYXR0cnMuYmluZChjb250ZXh0KSxcblx0XHRldmVudHM6IGV2ZW50cy5iaW5kKGNvbnRleHQpLFxuXHRcdHByb3BzOiBwcm9wcy5iaW5kKGNvbnRleHQpLFxuXHRcdHN0cmluZzogc3RyaW5nLmJpbmQoY29udGV4dCksXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvcHMoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRmb3IobGV0IG5hbWUgaW4gZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKGVudGl0eS5vcHRpb24uYXR0cmlidXRlc1tuYW1lXSk7XG5cdH1cblxuXG5cdGNvbnNvbGUud2FybihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpXG5cblx0cmV0dXJuO1xuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0bmV3IG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5hdHRyc1trZXldKSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdfbWFrZUF0dHJzJCcpLCBbXG5cdFx0XHRcdHBvaW50LFxuXHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdF1cblx0XHQpXG5cdCk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlU3RyaW5nIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmcoZW50aXR5LCBwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYoZW50aXR5LnZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRsZXQgaXNFeHByZXNzaW9uID0gZW50aXR5LnZhbHVlLm1hdGNoKC9cXCRcXHsuKlxcfS9nKSAhPT0gbnVsbDtcblxuXHRpZighaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHsgZGVwcywgY29udGVudCB9ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwge1xuXHRcdGlzRXhwcmVzc2lvbixcblx0XHR2YWx1ZTogYFxcYCR7IGVudGl0eS52YWx1ZSB9XFxgYCxcblx0fSwgbWFrZVN0cmluZyk7XG5cblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXG5cdGxldCBib2R5ID0gbmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLFxuXHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdFx0bmV3IGFzc2lnbm1lbnRFeHByZXNzaW9uKFxuXHRcdFx0XHRcdCc9Jyxcblx0XHRcdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihwb2ludCwgaWQoJ25vZGVWYWx1ZScpKSxcblx0XHRcdFx0XHRjb250ZW50XG5cdFx0XHRcdClcblx0XHRcdClcblx0XHRdKVxuXHQpO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3N1YnNjcmliZScpLFxuXHRcdFx0W2RlcHMsIGJvZHldXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0ZnVuY3Rpb25FeHByZXNzaW9uLFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlVmFsdWUoY29udGV4dCwgdmFsdWUsIGZuKVxue1xuXHRpZighdmFsdWUuaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuIHN0cmluZ0xpdGVyYWwodmFsdWUudmFsdWUpO1xuXHR9XG5cblx0bGV0IGNvZGUgPSBgdG1wID0gJHt2YWx1ZS52YWx1ZX1gO1xuXG5cdGNvbnN0IGFzdCA9IHBhcnNlci5wYXJzZShjb2RlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRyZXR1cm4gZm4oYXN0LCBjb250ZXh0KTtcbn1cblxuLyoqXG4gKiBDb21waWxlIGV4cHJlc3Npb24gdG8gRE9NIGV4cHJlc3Npb24gYW5kIG1ha2UgaW4gZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGdW5jdGlvbihhc3QsIGNvbnRleHQpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblx0XHRcdFx0aWYoY29udGV4dC5tZXRob2RzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0aWYocGF0aC5wYXJlbnQudHlwZSAhPT0gJ0NhbGxFeHByZXNzaW9uJykge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAke2lkLm5hbWV9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4gbmV3IGZ1bmN0aW9uRXhwcmVzc2lvbihudWxsLCBbaWQoJ2V2ZW50JyldLCBuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRdKSk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBzdHJpbmcgdG8gRE9NIGV4cHJlc3Npb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHJpbmcoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGVwcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblxuXHRyZXR1cm4ge1xuXHRcdGNvbnRlbnQ6IHJlc3VsdCxcblx0XHRkZXBzOiBkZXBzLFxuXHR9XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGl0IGNvbXB1dGVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29tcHV0ZWQoYXN0LCBjb250ZXh0KVxue1xuXHRsZXQgZGVwcyA9IFtdO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRleGl0KHBhdGgpIHtcblxuXHRcdFx0fSxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCByZXN1bHQgPSBhc3QucHJvZ3JhbS5ib2R5WzBdO1xuXG5cdHJlc3VsdCA9IHJlc3VsdC5leHByZXNzaW9uLnJpZ2h0O1xuXHRcblx0aWYoZGVwcy5sZW5ndGggPT09IDApIHtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdFxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyByZXR1cm5TdGF0ZW1lbnQocmVzdWx0KVxuXHRcdF0pXG5cdCk7XG5cblx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRpZCgnY29tcHV0ZWQnKSxcblx0XHRbZGVwcywgYm9keV1cblx0KVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cbi8vIFRPIERPIE5FWFQgTk9ERVNcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvbmVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRcblx0bGV0IGluaXQgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXRDb21wb25lbnQnKSwgW1xuXHRcdFx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0XHRcdGwsXG5cdFx0XHRcdGlkKCdyZW5kZXInKVxuXHRcdFx0XVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChpbml0LnZhbHVlKTtcblxuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcywgaW5pdCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdGwsIGlkKCduZXh0U2libGluZycpXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblx0bGV0IGJvZHkgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cdHBhcmFtcy5wdXNoKGlkKHRoaXMudmFsdWUpKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGJvZHksIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBpZCgnbnVsbCcpLCBpZCgndHJ1ZScpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGJvZHkucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0bGV0IGxhc3RDaGlsZCA9IGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMpO1xuXG5cdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLCB0ZW1wbGF0ZS5uYW1lLCBsYXN0Q2hpbGRcblx0XHQpXG5cdCk7XG5cblx0Ym9keS5wdXNoKHJldHVyblBvaW50ZXIpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRpZCgnaXRlbScpLCAvLyByZXBsYWNlIHdpdGggZXhwcmVzc2lvbiBwYXJzZVxuXHRcdFx0aWQoJ2tleScpIC8vIHJlcGxhY2Ugd2l0aCBleHByZXNzaW9uIHBhcnNlXG5cdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHQpO1xuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19lYWNoJCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHByb2dyYW0gZnJvbSAnLi9wcm9ncmFtJztcbmltcG9ydCBzdGF0ZW1lbnQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcbmltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9zbG90JztcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgeyBwcm9ncmFtLCBzdGF0ZW1lbnQsIGVhY2gsIG5vZGUsIHRleHQsIHNsb3QsIGNvbXBvbmVudCB9IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBhdHRycyB9IGZyb20gJy4uL2R5bmFtaWMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vZGUoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gbGV0IHRlbXBsYXRlID0gZmFsc2U7XG5cblx0Ly8gaWYob3B0aW9ucy5jdXN0b21EZWZpbmUgIT09IG51bGwpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3VzdG9tRGVmaW5lKGNvbnRleHQsIG9wdGlvbnMuZmlyc3RDaGlsZCk7XG5cdC8vIFx0ZGVsZXRlIG9wdGlvbnMuY3VzdG9tRGVmaW5lO1xuXHQvLyB9XG5cblx0Ly8gaWYodGVtcGxhdGUgPT09IGZhbHNlKSB7XG5cdC8vIFx0dGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdC8vIFx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdC8vIFx0XHRcdGwsIGlkKG9wdGlvbnMuZmlyc3RDaGlsZCA/ICdmaXJzdENoaWxkJyA6ICduZXh0U2libGluZycpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH0pO1xuXG5cdC8vIFx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLm1ha2VWYWx1ZSk7XG5cdC8vIH1cdFxuXG5cdG9wdGlvbnMuZHluYW1pYy5hdHRycyh0aGlzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuZXZlbnRzKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9ncmFtKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgbGFzdENoaWxkXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdF07XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zbG90JCcpLCBwYXJhbXMpXG5cdCk7XG5cblx0bGV0IGJvZHkgPSBbXTtcblxuXHRjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zKTtcblxuXHRwYXJhbXMucHVzaChcblx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpXG5cdFx0XHRdLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpXG5cdFx0KVxuXHQpXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGJsb2NrID0gdGhpcy5jaGlsZHJlbltpXTtcblx0XHRsZXQgYm9keSA9IFtdO1xuXG5cdFx0dGhpcy5jaGlsZHJlbltpXS5oYW5kbGUoYm9keSwge1xuXHRcdFx0bGFzdENvbnRleHRWYXJpYWJsZUlkOiBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0XHQuLi5vcHRpb25zXG5cdFx0fSk7XG5cblx0XHRwYXJhbXMucHVzaChpZChibG9jay52YWx1ZSkpO1xuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSwgbmV3IGJsb2NrU3RhdGVtZW50KGJvZHkpKVxuXHRcdCk7XG5cdH1cblxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ19zdGF0ZW1lbnQkJyksIHBhcmFtcyk7XG5cdH0pO1xuXG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGV4dChjb250ZXh0LCBvcHRpb25zKVxue1xuXG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwb2ludGVyID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY29uZGl0aW9uYWxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0bmV3IG1lbWJlckV4cHJlc3Npb24obCwgaWQoJ2ZpcnN0Q2hpbGQnKSksXG5cdFx0XHRsXG5cdFx0KVxuXHR9KTtcblxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCB0eXBlKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQodHlwZSlcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBjdXN0b21EZWZpbmVyID0gZmFsc2UpXG57XG5cdG9wdGlvbnMuY3JlYXRlQ29udGV4dCgpO1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZW50aXR5LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2hpbGRIYW5kbGUoZW50aXR5LmNoaWxkcmVuW2ldLCBjb250ZXh0LCBvcHRpb25zLCBpLCBjdXN0b21EZWZpbmVyKTtcblx0fVxuXG5cdGxldCBsYXN0Q2hpbGQgPSBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCk7XG5cblx0b3B0aW9ucy5yZW1vdmVDb250ZXh0KCk7XG5cblx0cmV0dXJuIGxhc3RDaGlsZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoaWxkSGFuZGxlKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucywgaW5kZXgsIGN1c3RvbURlZmluZXIpXG57XG5cdGxldCBpc0ZpcnN0ID0gaW5kZXggPT09IDA7XG5cblx0aWYoY3VzdG9tRGVmaW5lciAmJiBpc0ZpcnN0KSB7XG5cdFx0Y3VzdG9tRGVmaW5lcihjb250ZXh0LCBvcHRpb25zKTtcblx0fSBlbHNlIHtcblx0XHRpZighZW50aXR5LnNraXBJbml0KCkpIHtcblx0XHRcdG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIGlzRmlyc3QgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdH1cblx0fVxuXG5cdGVudGl0eS5oYW5kbGUoY29udGV4dCwgb3B0aW9ucyk7XG59IiwiLy8gZXZlbnRzIC0gQCAtPiBpZChhdHRycyB2YWx1ZSlcbi8vIGV4cHJlc3Npb24gOiBpZChhdHRycylcbi8vIHN0cmluZ2xpdHRlcmFsIFxuaW1wb3J0IHsgbWFrZU1hcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5cbnZhciBpc0F0dHIgPSBtYWtlTWFwKFxuXHQnYWNjZXB0LGFjY2VwdC1jaGFyc2V0LGFjY2Vzc2tleSxhY3Rpb24sYWxpZ24sYWx0LGFzeW5jLGF1dG9jb21wbGV0ZSwnICtcblx0J2F1dG9mb2N1cyxhdXRvcGxheSxhdXRvc2F2ZSxiZ2NvbG9yLGJvcmRlcixidWZmZXJlZCxjaGFsbGVuZ2UsY2hhcnNldCwnICtcblx0J2NoZWNrZWQsY2l0ZSxjbGFzcyxjb2RlLGNvZGViYXNlLGNvbG9yLGNvbHMsY29sc3Bhbixjb250ZW50LGh0dHAtZXF1aXYsJyArXG5cdCduYW1lLGNvbnRlbnRlZGl0YWJsZSxjb250ZXh0bWVudSxjb250cm9scyxjb29yZHMsZGF0YSxkYXRldGltZSxkZWZhdWx0LCcgK1xuXHQnZGVmZXIsZGlyLGRpcm5hbWUsZGlzYWJsZWQsZG93bmxvYWQsZHJhZ2dhYmxlLGRyb3B6b25lLGVuY3R5cGUsbWV0aG9kLGZvciwnICtcblx0J2Zvcm0sZm9ybWFjdGlvbixoZWFkZXJzLGhlaWdodCxoaWRkZW4saGlnaCxocmVmLGhyZWZsYW5nLGh0dHAtZXF1aXYsJyArXG5cdCdpY29uLGlkLGlzbWFwLGl0ZW1wcm9wLGtleXR5cGUsa2luZCxsYWJlbCxsYW5nLGxhbmd1YWdlLGxpc3QsbG9vcCxsb3csJyArXG5cdCdtYW5pZmVzdCxtYXgsbWF4bGVuZ3RoLG1lZGlhLG1ldGhvZCxHRVQsUE9TVCxtaW4sbXVsdGlwbGUsZW1haWwsZmlsZSwnICtcblx0J211dGVkLG5hbWUsbm92YWxpZGF0ZSxvcGVuLG9wdGltdW0scGF0dGVybixwaW5nLHBsYWNlaG9sZGVyLHBvc3RlciwnICtcblx0J3ByZWxvYWQscmFkaW9ncm91cCxyZWFkb25seSxyZWwscmVxdWlyZWQscmV2ZXJzZWQscm93cyxyb3dzcGFuLHNhbmRib3gsJyArXG5cdCdzY29wZSxzY29wZWQsc2VhbWxlc3Msc2VsZWN0ZWQsc2hhcGUsc2l6ZSx0eXBlLHRleHQscGFzc3dvcmQsc2l6ZXMsc3BhbiwnICtcblx0J3NwZWxsY2hlY2ssc3JjLHNyY2RvYyxzcmNsYW5nLHNyY3NldCxzdGFydCxzdGVwLHN0eWxlLHN1bW1hcnksdGFiaW5kZXgsJyArXG5cdCd0YXJnZXQsdGl0bGUsdHlwZSx1c2VtYXAsdmFsdWUsd2lkdGgsd3JhcCdcbik7XG5cbnZhciBpc0RvbUF0dHIgPSAobmFtZSkgPT4ge1xuXHRyZXR1cm4gaXNBdHRyKG5hbWUpIHx8IG5hbWUubWF0Y2goL15kYXRhXFwtL2cpO1xufVxuXG5mdW5jdGlvbiBtYWtlVmFsdWUodmFsdWUsIGlzRXhwcmVzc2lvbiA9IGZhbHNlKVxue1xuXHRyZXR1cm4ge1xuXHRcdHZhbHVlLFxuXHRcdGlzRXhwcmVzc2lvbixcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMob2JqKVxue1xuXHRsZXQgZXZlbnRzID0ge307XG5cdGxldCBwcm9wcyA9IHt9O1xuXHRsZXQgYXR0cmlidXRlcyA9IHt9O1xuXHRsZXQgc3RhdGljQXR0cnMgPSB7fTtcblxuXHRmb3IobGV0IG5hbWUgaW4gb2JqKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gb2JqW25hbWVdO1xuXG5cdFx0aWYoaXNEb21BdHRyKG5hbWUpKSB7XG5cdFx0XHRzdGF0aWNBdHRyc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH0gZWxzZSBpZihuYW1lLm1hdGNoKC9eQC9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXkAvZywgJycpO1xuXHRcdFx0ZXZlbnRzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlLCB0cnVlKTtcblx0XHR9IGVsc2UgaWYobmFtZS5tYXRjaCgvXlxcOi9nKSkge1xuXHRcdFx0bmFtZSA9IG5hbWUucmVwbGFjZSgvXlxcOi9nLCAnJyk7XG5cdFx0XHRpZihpc0RvbUF0dHIobmFtZSkpIHtcblx0XHRcdFx0YXR0cmlidXRlc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwcm9wc1tuYW1lXSA9IG1ha2VWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzW25hbWVdID0gbWFrZVZhbHVlKHZhbHVlKTtcblx0XHRcdC8vIGNvbnNvbGUuZXJyb3IoYEF0dHIgJHtuYW1lfSBkb2VzbnQgcmVnaXN0ZXJlZC4gQ2FudCB1bmRlcnN0YW5kIHR5cGUuYClcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN0YXRpY0F0dHJzOiBzdGF0aWNBdHRycyxcblx0XHRldmVudHMsXG5cdFx0cHJvcHMsXG5cdFx0YXR0cmlidXRlcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBwcmVwYXJlIH0gZnJvbSAnLi9wcmVwYXJlJztcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJzZXIgYXMgSFRNTFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQmxvY2tzKGJsb2NrcywgaHRtbClcbntcblx0Zm9yKGxldCBrZXkgaW4gYmxvY2tzKSB7XG5cdFx0bGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAoYDwke2tleX0uKj4oKC58XFxcXHMpKik8XFxcXC8ke2tleX0+YCwgJ2cnKTtcblx0XHRsZXQgbWF0Y2hlcyA9IHJlZ2V4cC5leGVjKGh0bWwpO1xuXHRcdGlmKG1hdGNoZXMpIHtcblx0XHRcdGJsb2Nrc1trZXldID0gbWF0Y2hlc1sxXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYmxvY2tzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoaHRtbClcbntcblx0Ly8gZ2V0IGFkZGl0aW9uYWwgYmxvY2tzIGUuZy4gc2NyaXB0LCBzdHlsZSwgZG9jXG5cdGxldCBibG9ja3MgPSBwYXJzZUJsb2Nrcyh7XG5cdFx0c2NyaXB0OiBudWxsLFxuXHRcdHN0eWxlOiBudWxsLFxuXHR9LCBodG1sKTtcblxuXHQvLyBjbGVhbiB1cCBodG1sIGFuZCByZXBsYWNlIGV4cHJlc3Npb24gd2l0aCB0YWctZXhwcmVzc2lvblxuXHRodG1sID0gcHJlcGFyZShibG9ja3MsIGh0bWwpO1xuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiBpc0Jsb2NrVGFnKG5hbWUpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2subGVuZ3RoID09PSAxICYmIFsnc2NyaXB0JywgJ3N0eWxlJ10uaW5jbHVkZXMobmFtZSk7XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLm9wdGlvbnMgPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnY29tcG9uZW50Jztcblx0fVxuXHRcblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyB0eXBlID0gbnVsbCwgdmFsdWUgPSBudWxsIH0pXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudHlwZSA9IHR5cGU7XG5cdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcblx0fVxuXG5cdFxuXG5cdFxuXG5cdFxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5pbXBvcnQgeyBhdHRycyBhcyBwYXJzZUF0dHJzIH0gZnJvbSAnLi4vYXR0cnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycyk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xvdCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoeyBuYW1lID0gJ2RlZmF1bHQnLCB0YWcgPSAnc3BhbicgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XHRcblx0Ly8gbWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdC8vIHtcblx0Ly8gXHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblxuXHQvLyBcdHRlbXBsYXRlICs9ICc+JztcblxuXHQvLyBcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0Ly8gXHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHQvLyBcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0Ly8gXHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0Ly8gXHRcdHJldHVybiAnPCEtLS0tPic7XG5cdC8vIFx0fVxuXG5cdC8vIFx0aWYoIXRoaXMudGFnKSB7XG5cdC8vIFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gdGVtcGxhdGU7XG5cdC8vIH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0ZXh0KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnZhbHVlID0gdGV4dDtcblx0XHR0aGlzLnR5cGUgPSAndGV4dCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMudmFsdWU7XG5cdH1cblxufSIsImltcG9ydCB7IHJ1bGVzIH0gZnJvbSAnQGhhd2EvY29tcGlsZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKClcblx0e1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdG1hcChjYWxsYmFjaylcblx0e1xuXHRcdGlmKHRoaXMuY2hpbGRyZW4gJiYgdGhpcy50eXBlICE9PSAnc3RhdGVtZW50Jykge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0Y2hpbGQucGFyZW50ID0gdGhpcztcblx0XHR0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXHR9XG5cblx0aGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpXG5cdHtcblx0XHRyZXR1cm4gcnVsZXNbdGhpcy50eXBlXS5jYWxsKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHR9XG5cblx0c2tpcEluaXQoKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlOy8vdGhpcy50eXBlID09PSAncHJvZ3JhbScgfHwgdGhpcy50eXBlID09PSAnc2xvdCc7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGxldCBhdHRycyA9IHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb24uc3RhdGljQXR0cnMgOiB7fTtcblxuXHRcdGZvcihsZXQga2V5IGluIGF0dHJzKSB7XG5cdFx0XHR0ZW1wbGF0ZSArPSBgICR7a2V5fT1cIiR7YXR0cnNba2V5XX1cImA7XG5cdFx0fVxuXG5cdFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHRcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHRcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSAmJiAhb25seUNoaWxkcmVuKSB7XG5cdFx0XHRyZXR1cm4gJzwhLS0tLT4nO1xuXHRcdH1cblxuXHRcdGlmKCF0aGlzLnRhZykge1xuXHRcdFx0cmV0dXJuIGNoaWxkVGVtcGxhdGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRlbXBsYXRlO1xuXHR9XG59IiwiY29uc3QgSFRNTFRhZ3MgPSBbXG5cdFwiIWRvY3R5cGVcIiwgXCJhXCIsIFwiYWJiclwiLCBcImFjcm9ueW1cIiwgXCJhZGRyZXNzXCIsIFwiYXBwbGV0XCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsXG5cdFwiYlwiLCBcImJhc2VcIiwgXCJiYXNlZm9udFwiLCBcImJiXCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLFxuXHRcImNhcHRpb25cIiwgXCJjZW50ZXJcIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiY29tbWFuZFwiLCBcImRhdGFncmlkXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLFxuXHRcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXJcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImV2ZW50c291cmNlXCIsIFwiZmllbGRzZXRcIixcblx0XCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9udFwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJmcmFtZVwiLCBcImZyYW1lc2V0XCIsIFwiaDE+IHRvIDxoNlwiLCBcImhlYWRcIiwgXCJoZWFkZXJcIixcblx0XCJoZ3JvdXBcIiwgXCJoclwiLCBcImh0bWxcIiwgXCJpXCIsIFwiaWZyYW1lXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJpbnNcIiwgXCJpc2luZGV4XCIsIFwia2JkXCIsIFwia2V5Z2VuXCIsIFwibGFiZWxcIixcblx0XCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWVudVwiLCBcIm1ldGFcIiwgXCJtZXRlclwiLCBcIm5hdlwiLCBcIm5vZnJhbWVzXCIsIFwibm9zY3JpcHRcIixcblx0XCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicnBcIiwgXCJydFwiLFxuXHRcInJ1YnlcIiwgXCJzXCIsIFwic2FtcFwiLCBcInNjcmlwdFwiLCBcInNlY3Rpb25cIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIixcblx0XCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsXG5cdFwidHJcIiwgXCJ0cmFja1wiLCBcInR0XCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpXG57XG5cdHJldHVybiAhSFRNTFRhZ3MuaW5jbHVkZXMobmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSlcbntcblx0dmFyIG1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdHZhciBsaXN0ID0gc3RyLnNwbGl0KCcsJyk7XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0bWFwW2xpc3RbaV1dID0gdHJ1ZTtcblx0fVxuXG5cdHJldHVybiBleHBlY3RzTG93ZXJDYXNlID9cblx0XHRmdW5jdGlvbih2YWwpIHsgcmV0dXJuIG1hcFt2YWwudG9Mb3dlckNhc2UoKV07IH0gOlxuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbF07IH1cbn1cbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlLCBjb21wdXRlZCwgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cblxuaW1wb3J0IHRpbWUgZnJvbSAnLi90aW1lJztcblxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cdGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRcdGlmIChyZW5kZXIpIHtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdFx0aWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCB8fCBjb250ZXh0ID09PSBudWxsKSB7XG5cdFx0XHRjb250ZXh0ID0ge307XG5cdFx0fVxuXG5cdFx0bGV0ICRwcm9wcyA9IGNvbnRleHQuJHByb3BzIHx8IHt9O1xuXHRcdGxldCAkc2xvdHMgPSBjb250ZXh0LiRzbG90cyB8fCB7fTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkcHJvcHMsXG5cdFx0XHQkc2xvdHMsXG5cdFx0fVxuXHR9XG5cblxuXHRmdW5jdGlvbiBfbWFrZUF0dHJzJCgpIHtcblxuXHR9XG5cblx0ZnVuY3Rpb24gX21ha2VFdmVudHMkKG5vZGUsIHJlbmRlciwgb3B0aW9ucykge1xuXHRcdGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XG5cdFx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gX3Nsb3QkKCRzbG90cywgbmFtZSwgbm9kZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoJHNsb3RzW25hbWVdID09PSB1bmRlZmluZWQpIHtcblx0XHRcdGNhbGxiYWNrKG5vZGUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG5vZGUuaW5uZXJIVE1MID0gJHNsb3RzW25hbWVdO1xuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBfZWFjaCQobm9kZSwgaXRlbXMsIGZuKSB7XG5cdFx0bGV0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgbm9kZSA9IGZuKG5vZGUsIGl0ZW1zW2ldLCBpKTtcblx0XHRcdGJvZHkuYXBwZW5kQ2hpbGQobm9kZSk7XG5cdFx0fVxuXG5cdFx0bm9kZS5yZXBsYWNlV2l0aChib2R5KTtcblxuXHRcdHJldHVybiBib2R5O1xuXHR9XG5cblx0ZnVuY3Rpb24gX3N0YXRlbWVudCQobm9kZSwgLi4uYXJncykge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChhcmdzW2ldKSB7XG5cdFx0XHRcdHJldHVybk5vZGUgPSBhcmdzW2kgKyAxXShub2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHRsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXHRjb25zb2xlLmxvZyhyZW5kZXIpO1xuXHRjb25zb2xlLmxvZyh0ZW1wbGF0ZXMpO1xuXHRyZXR1cm47XG5cblx0LyoqXG5cdCAqIEdFTkVSQVRFRCBDT0RFXG5cdCAqL1xuXHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDEuaW5uZXJIVE1MID0gJzxkaXYgY2xhc3M9XCIyXCI+PCEtLS0tPjwvZGl2Pic7XG5cblx0bGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQyLmlubmVySFRNTCA9ICc8ZGl2PlNvbWUgdGVzdCB0ZXh0ICR7IHRleHQxIH0gYWZ0ZXI8L2Rpdj48ZGl2IGNsYXNzPVwiYnV0dG9uXCI+PHNwYW4+RGVmYXVsdDxiIGNsYXNzPVwiZFwiPmJ1dHRvbjwvYj50ZXh0PC9zcGFuPjwvZGl2Pic7XG5cblx0ZnVuY3Rpb24gbWFrZUNvbXBvbmVudChjb250ZXh0LCBub2RlID0gZmFsc2UpIHtcblx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRsZXQgeyAkcHJvcHMsICRzbG90cyB9ID0gcGFyc2VDb250ZXh0KGNvbnRleHQpO1xuXHRcdC8qKlxuXHRcdCAqIFNjcmlwdCB0YWdcblx0XHQgKi9cblx0XHRsZXQgdGV4dDEgPSBvYnNlcnZhYmxlKDEpO1xuXHRcdGxldCB0ZXh0MiA9IG9ic2VydmFibGUoMSk7XG5cdFx0bGV0IHRleHQzID0gb2JzZXJ2YWJsZSgxKTtcblx0XHRsZXQgdGltZSA9IDEyMzU7XG5cblx0XHRsZXQgYyA9IGNvbXB1dGVkKHRleHQxLCAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGltZSArIHRleHQxO1xuXHRcdH0pO1xuXG5cdFx0ZnVuY3Rpb24gbWV0aG9kMSgpIHtcblx0XHRcdGNvbnNvbGUubG9nKCd0ZXN0Jylcblx0XHR9XG5cdFx0LyoqXG5cdFx0ICogR0VORVJBVEVEIENPREVcblx0XHQgKi9cblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdF9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcblx0XHRcdFwic3R5bGVcIjogMSxcblx0XHRcdFwiZGF0YS0xXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHR0ZXN0OiB0ZXh0MSgpXG5cdFx0XHRcdH07XG5cdFx0XHR9KSxcblx0XHRcdFwiZGF0YS0yXCI6IGNvbXB1dGVkKFt0ZXh0MV0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIHRleHQxKCk7XG5cdFx0XHR9KSxcblx0XHRcdFwiY2xhc3NcIjogY29tcHV0ZWQoW3RleHQxLCB0ZXh0Ml0sICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIFt0ZXh0MSgpLCB7XG5cdFx0XHRcdFx0c29tZTogdGV4dDIoKSA9PT0gMlxuXHRcdFx0XHR9LCB0aW1lXTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0bGV0IF9lbCQxMyA9IF9lYWNoJChfZWwkMywgQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSksIChpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBudWxsLCB0cnVlKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gX2VsJDQuZmlyc3RDaGlsZDtcblxuXHRcdFx0X21ha2VFdmVudHMkKF9lbCQ1LCByZW5kZXIsIHtcblx0XHRcdFx0XCJjbGlja1wiOiBmdW5jdGlvbihldmVudCkge1xuXHRcdFx0XHRcdHJldHVybiBtZXRob2QxKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1ldGhvZDEoZXZlbnQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ2ID0gX2VsJDUuZmlyc3RDaGlsZDtcblx0XHRcdHN1YnNjcmliZShbdGV4dDFdLCAoKSA9PiB7XG5cdFx0XHRcdF9lbCQ2Lm5vZGVWYWx1ZSA9IGBTb21lIHRlc3QgdGV4dCAke3RleHQxKCl9IGFmdGVyYDtcblx0XHRcdH0pO1xuXHRcdFx0bGV0IF9lbCQ3ID0gX2VsJDUubmV4dFNpYmxpbmc7XG5cblx0XHRcdF9tYWtlRXZlbnRzJChfZWwkNywgcmVuZGVyLCB7XG5cdFx0XHRcdFwibW91c2Vkb3duXCI6IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0XHRcdFx0cmV0dXJuIGFsZXJ0KDIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0bGV0IF9lbCQ4ID0gX2VsJDcuZmlyc3RDaGlsZDtcblxuXHRcdFx0X3Nsb3QkKCRzbG90cywgXCJkZWZhdWx0XCIsIF9lbCQ4LCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ5ID0gX2VsJDguZmlyc3RDaGlsZDtcblx0XHRcdFx0bGV0IF9lbCQxMCA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXHRcdFx0XHRsZXQgX2VsJDExID0gX2VsJDEwLmZpcnN0Q2hpbGQ7XG5cdFx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTAubmV4dFNpYmxpbmc7XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ0IDogX2VsJDc7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDEgOiBfZWwkMjtcblx0fVxuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHR0aW1lKCdyZW5kZXInKTtcblx0bGF5b3V0LmFwcGVuZENoaWxkKG1ha2VDb21wb25lbnQoKSk7XG5cdHRpbWUoJ3JlbmRlcicpO1xuXG5cdGxldCB0bXAgPSBsYXlvdXQuaW5uZXJIVE1MO1xuXHRsYXlvdXQuaW5uZXJIVE1MID0gdG1wO1xuXG5cdHRpbWUoJ2h5ZHJhdGUnKTtcblx0bWFrZUNvbXBvbmVudChudWxsLCBsYXlvdXQuZmlyc3RDaGlsZClcblx0dGltZSgnaHlkcmF0ZScpO1xuXHQvLyBjb25zb2xlLmxvZyhsYXlvdXQuaW5uZXJIVE1MKTtcbn1cblxudGVzdCgpO1xuXG5mdW5jdGlvbiBnZXR0KCkge1xuXG5cdGxldCBodG1sID1cblx0XHRgXG5cdDxkaXY+c3RhcnQ8L2Rpdj5cblx0QGlmKDEpXG5cdDxkaXY+PC9kaXY+XG5cdGFzZGFkXG5cdFx0QGlmKDIpXG5cdFx0PGRpdj5pZmYyPC9kaXY+XG5cdFx0QGVuZGlmXG5cdGFzZGFzZFxuXHRAZWxzZWlmKHRlc3QpXG5cdDFcblx0XHQyXG5cdFx0QGVhY2goMSlcblx0XHRhc2Rhc2Rcblx0XHQ8c2xvdD5kZWZhdWx0IHRleHQgZm9yIHNsb3Q8YiBjbGFzcz1cImRcIj4xPC9iPjwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGh0bWwgPSBgXG5cdDxkaXYgY2xhc3M9XCIyXCIgOnN0eWxlPVwiMVwiIDpkYXRhLTE9XCJ7IHRlc3Q6IHRleHQxIH1cIiA6ZGF0YS0yPVwidGV4dDFcIiA6Y2xhc3M9XCJbdGV4dDEsIHsgc29tZTogdGV4dDIgPT09IDIgfSwgdGltZV1cIiA6cHJvcDE9XCIxMjNcIj5cblx0QGVhY2goQXJyYXkuZnJvbSh7IGxlbmd0aDogMSB9LCAoXywgaSkgPT4gaSkpXG5cdDxkaXYgQGNsaWNrPVwibWV0aG9kMVwiIEBtb3VzZWRvd249XCJtZXRob2QxKGV2ZW50KVwiPlxuXHRcdFNvbWUgdGVzdCB0ZXh0IFxcJHsgdGV4dDEgfSBhZnRlclxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImJ1dHRvblwiIEBtb3VzZWRvd249XCJhbGVydCgyKVwiPlxuXHRcdDxzbG90PkRlZmF1bHQgPGIgY2xhc3M9XCJkXCI+YnV0dG9uPC9iPiB0ZXh0PC9zbG90PlxuXHQ8L2Rpdj5cblx0QGVuZGVhY2hcblx0XG5cblx0PHNjcmlwdD5cblx0bGV0IHRleHQxID0gJG8oMSk7XG5cdGxldCB0ZXh0MiA9ICRvKDEpO1xuXHRsZXQgdGV4dDMgPSAkbygxKTtcblx0bGV0IHRpbWUgPSAxMjM1O1xuXG5cdGxldCBjID0gKCkgPT4ge1xuXHRcdHJldHVybiB0aW1lICsgdGV4dDE7XG5cdH1cblxuXHRmdW5jdGlvbiBtZXRob2QxKCkge1xuXHRcdGxldCBkID0gdGV4dDIoKTtcblxuXHRcdGxldCB0ZXh0MSA9ICdzb21lJztcblxuXHRcdHRleHQxO1xuXHR9XG5cdDwvc2NyaXB0PlxuXHRgXG5cdGxldCBibG9ja3MgPSBwYXJzZShodG1sKTtcblxuXHRyZXR1cm4gY29tcGlsZShibG9ja3MpO1xuXHQvLyBjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsImxldCB0aW1lcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aW1lKG5hbWUpXG57XG5cdGxldCBub3cgPSAobmV3IERhdGUpLmdldFRpbWUoKTtcblxuXHRpZih0eXBlb2YgdGltZXNbbmFtZV0gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0dGltZXNbbmFtZV0gPSBub3c7XG5cdFx0cmV0dXJuIHRpbWVzW25hbWVdO1xuXHR9XG5cblx0Y29uc29sZS5sb2coYFsgdGIgJHtuYW1lfSBdYCwgbm93IC0gdGltZXNbbmFtZV0sICdtcycpO1xuXG5cdGRlbGV0ZSB0aW1lc1tuYW1lXTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=