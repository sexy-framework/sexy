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
}

var VariableCounter = 0;
var LastVariableId = null;
var Templates = new Set();

function cleanup() {
  VariableCounter = 0;
  LastVariableId = (0, _types.identifier)('hydrate');
  Templates = new Set();
}

function createTemplate(program) {
  var template = program.makeTemplate();
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

function getLastVariableId() {
  return LastVariableId;
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
  var delcarationValue = Action(name, LastVariableId);
  var value = new _types.variableDeclaration('let', [new _types.variableDeclarator(name, delcarationValue)]);
  LastVariableId = name;
  return {
    name: name,
    value: value
  };
} // nextSibling


function compile(entity) {
  cleanup();
  var tpl = entity.makeTemplate(true);
  var body = [];
  var programContext = body;

  function handle(entity) {
    entity.handle(programContext, {
      createVariable: createVariable,
      getLastVariableId: getLastVariableId,
      createTemplate: createTemplate
    });
  }

  [entity].map(function (item) {
    return handle(item);
  }); // console.log(tpl);
  // console.log(Templates);

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

var _node = __webpack_require__(/*! ./node */ "./packages/compiler/dist/rules/node.js");

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

function each(context, options) {
  var params = [];
  params.push(options.getLastVariableId());
  params.push((0, _types.identifier)(this.value));

  for (var i = 0; i < this.children.length; i++) {
    var block = this.children[i];
    var body = [];
    this.children[i].handle(body, options);
    params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node'), (0, _types.identifier)('item'), // replace with expression parse
    (0, _types.identifier)('key') // replace with expression parse
    ], new _types.blockStatement(body)));
  }

  var expression = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('each'), params);
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
exports.children = children;
exports.attrs = attrs;
exports.default = node;

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

function children(entity, context, options) {
  for (var i = 0; i < entity.children.length; i++) {
    entity.children[i].handle(context, _extends({
      firstChild: i === 0
    }, options));
  }
}

function attrs(point, context, options) {
  if (this.hasAttributes()) {
    var props = [];

    for (var key in this.attrs) {
      props.push(new _types.objectProperty((0, _types.stringLiteral)(key), (0, _types.stringLiteral)(this.attrs[key])));
    }

    var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('makeAttrs'), [point.name, (0, _types.identifier)('render'), new _types.objectExpression(props)]));
    context.push(expression);
  }
}

function node(context, options) {
  var template = options.createVariable(context, function (n, l) {
    return new _types.memberExpression(l, (0, _types.identifier)(options.firstChild ? 'firstChild' : 'nextSibling'));
  });
  context.push(template.value);
  attrs.call(this, template, context, options);
  children(this, context, options);
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

function program(context, options) {
  var _this = this;

  var template = options.createVariable(context, function (n, l) {
    var index = options.createTemplate(_this);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, (0, _types.identifier)('node'), (0, _types.identifier)('render')]);
  });
  context.push(template.value);
  var pointer = options.createVariable(context, function (n, l) {
    return new _types.conditionalExpression((0, _types.identifier)('render'), new _types.memberExpression(l, (0, _types.identifier)('firstChild')), l);
  });
  context.push(pointer.value);
  this.map(function (item) {
    return item.handle(context, options);
  });
  var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, options.getLastVariableId()));
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

var _node = __webpack_require__(/*! ./node */ "./packages/compiler/dist/rules/node.js");

function slot(context, options) {
  var params = [(0, _types.identifier)('context'), (0, _types.stringLiteral)(this.name), options.getLastVariableId()];
  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('slot'), params));
  var body = [];
  (0, _node.children)(this, body, options);
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
    return new _types.callExpression((0, _types.identifier)('statement'), params);
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
exports.default = node;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function node(context, options) {
  var template = options.createVariable(context, function (n, l) {
    return new _types.memberExpression(l, (0, _types.identifier)(options.firstChild ? 'firstChild' : 'nextSibling'));
  });
  context.push(template.value); // let template = createVariable(context, (n, l) => {
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
exports.parse = parse;

var _prepare = __webpack_require__(/*! ./prepare */ "./packages/parser/dist/prepare.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/parser/dist/utils.js");

var _types = __webpack_require__(/*! ./types */ "./packages/parser/dist/types/index.js");

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

function parse(html) {
  html = (0, _prepare.prepare)(html);
  var stack = [new _types.Expression({
    type: 'program'
  })];

  function currentStackNode() {
    return stack[stack.length - 1];
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
      stack.pop();
    }
  }, {
    decodeEntities: true
  });
  parse.write(html);
  parse.end();
  console.log(stack);
  return stack[0];
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

function prepare(html) {
  html = html // if
  .replace(/@if\((.*)\)/g, '<expr type="statement"><expr type="program" value="$1">').replace(/@elseif\((.*)\)/g, '</expr><expr type="program" value="$1">').replace(/@else/g, '</expr><expr type="program" value="true">').replace(/@endif/g, '</expr></expr>') // each
  .replace(/@each\((.*)\)/g, '<expr type="each" value="$1"><expr type="program">').replace(/@endeach/g, '</expr></expr>');
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

  _proto.makeTemplate = function makeTemplate(onlyChildren) {
    if (onlyChildren === void 0) {
      onlyChildren = true;
    }

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

    if (['statement', 'each', 'component'].includes(this.type)) {
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

function test() {
  function getNode(template, node, render) {
    if (render) {
      return template.content.cloneNode(true);
    }

    return node;
  }

  function slot(context, name, node, callback) {
    if (context.$slots[name] === undefined) {
      callback(node);
      return;
    }

    node.innerHTML = context.$slots[name];
    return node;
  }

  function each(node, items, fn) {
    var body = document.createDocumentFragment();

    for (var i = 0; i < items.length; i++) {
      var _node = fn(_node, items[i], i);

      body.appendChild(_node);
    }

    node.replaceWith(body);
    return body;
  }

  function statement(node) {
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

  _tpl$2.innerHTML = "<div class=\"button\"><span>Default button text</span></div>";

  function makeComponent(context, node) {
    if (node === void 0) {
      node = false;
    }

    var render = node === false;
    /**
     * GENERATED CODE
     */

    var _el$1 = getNode(_tpl$1, node, render);

    var _el$2 = render ? _el$1.firstChild : _el$1;

    var _el$3 = _el$2.firstChild;
    console.log(_el$3, _el$2);

    var _el$8 = each(_el$3, [1], function (node, item, key) {
      var _el$4 = getNode(_tpl$2, node, render);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      var _el$6 = _el$5.firstChild;
      makeAttrs(_el$6, render, {
        "class": "button"
      });
      slot(context, "default", _el$6, function (node) {
        var _el$7 = _el$6.firstChild;
      });
      return render ? _el$4 : _el$7;
    });

    return render ? _el$1 : _el$8;
  }

  var d = makeComponent({
    $slots: {
      default: '1'
    }
  });
  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  layout.appendChild(d);
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot<b class=\"d\">1</b></slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  html = "\n\t<div>\n\t@each(1)\n\t<div class=\"button\">\n\t\t<slot>Default button text</slot>\n\t</div>\n\t@endeach\n\t</div>\n\t";
  var template = (0, _parser.parse)(html);
  return (0, _compiler.compile)(template); // console.log(html);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcmVwYXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9TbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbIlZhcmlhYmxlQ291bnRlciIsIkxhc3RWYXJpYWJsZUlkIiwiVGVtcGxhdGVzIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImNvbnRleHQiLCJBY3Rpb24iLCJuYW1lIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsImNsZWFudXAiLCJlbnRpdHkiLCJib2R5IiwicHJvZ3JhbUNvbnRleHQiLCJjcmVhdGVWYXJpYWJsZSIsImdldExhc3RWYXJpYWJsZUlkIiwiY3JlYXRlVGVtcGxhdGUiLCJoYW5kbGUiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJyZW5kZXIiLCJ0ZW1wbGF0ZXMiLCJnZXRUZW1wbGF0ZXMiLCJpbml0IiwiY2FsbEV4cHJlc3Npb24iLCJhdHRycyIsIm1lbWJlckV4cHJlc3Npb24iLCJwYXJhbXMiLCJvcHRpb25zIiwiYmxvY2siLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwiZXhwcmVzc2lvbiIsImZpcnN0Q2hpbGQiLCJwcm9wcyIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvblN0YXRlbWVudCIsInBvaW50Iiwib2JqZWN0RXhwcmVzc2lvbiIsImNoaWxkcmVuIiwicG9pbnRlciIsImNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsIml0ZW0iLCJyZXR1cm5Qb2ludGVyIiwicmV0dXJuU3RhdGVtZW50IiwibGFzdENvbnRleHRWYXJpYWJsZUlkIiwiaHRtbCIsInN0YWNrIiwiRXhwcmVzc2lvbiIsInR5cGUiLCJwYXJzZSIsIkhUTUxQYXJzZXIiLCJvbm9wZW50YWciLCJwYXJlbnQiLCJjdXJyZW50U3RhY2tOb2RlIiwiU2xvdCIsIkNvbXBvbmVudCIsIk5vZGUiLCJvbnRleHQiLCJ0ZXh0Iiwibm9kZSIsIlRleHQiLCJvbmNsb3NldGFnIiwiZGVjb2RlRW50aXRpZXMiLCJjb25zb2xlIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwiVHlwZSIsInRhZyIsIm1ha2VUZW1wbGF0ZSIsIm1hcCIsImFkZENoaWxkIiwiY2hpbGQiLCJydWxlcyIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsInRlc3QiLCJnZXROb2RlIiwiY29udGVudCIsImNsb25lTm9kZSIsInNsb3QiLCJjYWxsYmFjayIsIiRzbG90cyIsInVuZGVmaW5lZCIsImlubmVySFRNTCIsImVhY2giLCJpdGVtcyIsImZuIiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibGVuZ3RoIiwiYXBwZW5kQ2hpbGQiLCJyZXBsYWNlV2l0aCIsInN0YXRlbWVudCIsInJldHVybk5vZGUiLCJhcmdzIiwiZ2V0dCIsIl90cGwkMSIsImNyZWF0ZUVsZW1lbnQiLCJfdHBsJDIiLCJtYWtlQ29tcG9uZW50IiwiX2VsJDEiLCJfZWwkMiIsIl9lbCQzIiwibG9nIiwiX2VsJDgiLCJrZXkiLCJfZWwkNCIsIl9lbCQ1IiwiX2VsJDYiLCJtYWtlQXR0cnMiLCJfZWwkNyIsImQiLCJkZWZhdWx0IiwibGF5b3V0IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUlxRCxLQUFLLEdBQUdGLEtBQUssQ0FBQzlFLFVBQWxCO0FBQ0EsT0FGRyxDQUFKO0FBR0EsYUFBT2IsTUFBTSxHQUFHeUYsS0FBSCxHQUFXSSxLQUF4QjtBQUNBLEtBYmUsQ0FBaEI7O0FBZUEsV0FBTzdGLE1BQU0sR0FBR21GLEtBQUgsR0FBV0ksS0FBeEI7QUFDQTs7QUFFRCxNQUFJTyxDQUFDLEdBQUdaLGFBQWEsQ0FBQztBQUNyQmxCLFVBQU0sRUFBRTtBQUNQK0IsYUFBTyxFQUFFO0FBREY7QUFEYSxHQUFELENBQXJCO0FBTUEsTUFBSUMsTUFBTSxHQUFHMUIsUUFBUSxDQUFDMkIsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0FELFFBQU0sQ0FBQzlCLFNBQVAsR0FBbUIsRUFBbkI7QUFFQThCLFFBQU0sQ0FBQ3ZCLFdBQVAsQ0FBbUJxQixDQUFuQjtBQUNBOztBQUVEcEMsSUFBSTs7QUFFSixTQUFTb0IsSUFBVCxHQUFnQjtBQUVmLE1BQUlwRCxJQUFJLG9TQUFSO0FBd0JBQSxNQUFJLDhIQUFKO0FBU0EsTUFBSXBELFFBQVEsR0FBRyxtQkFBTW9ELElBQU4sQ0FBZjtBQUVBLFNBQU8sdUJBQVFwRCxRQUFSLENBQVAsQ0FyQ2UsQ0FzQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hLRCxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuXG5cbmxldCBWYXJpYWJsZUNvdW50ZXIgPSAwO1xubGV0IExhc3RWYXJpYWJsZUlkID0gbnVsbDtcbmxldCBUZW1wbGF0ZXMgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGNsZWFudXAoKVxue1xuXHRWYXJpYWJsZUNvdW50ZXIgPSAwO1xuXHRMYXN0VmFyaWFibGVJZCA9IGlkKCdoeWRyYXRlJyk7XG5cdFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcbntcblx0bGV0IHRlbXBsYXRlID0gcHJvZ3JhbS5tYWtlVGVtcGxhdGUoKTtcblxuXHRUZW1wbGF0ZXMuYWRkKHRlbXBsYXRlKTtcblxuXHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xufVxuXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKVxue1xuXHRsZXQgY29kZSA9ICcnO1xuXHRsZXQgaSA9IDA7XG5cblx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdGNvZGUgKz0gYGxldCBfdHBsJCR7IGluZGV4IH0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XFxuYDtcblx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gXCIkeyB0cGwgfVwiO1xcblxcbmA7XG5cdH1cblxuXHRyZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFZhcmlhYmxlSWQoKVxue1xuXHRyZXR1cm4gTGFzdFZhcmlhYmxlSWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQgPSBudWxsLCBBY3Rpb24gPSAobiwgbCkgPT4gbClcbntcblx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRsZXQgZGVsY2FyYXRpb25WYWx1ZSA9IEFjdGlvbihuYW1lLCBMYXN0VmFyaWFibGVJZCk7XG5cblx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRuZXcgdmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0bmFtZSxcblx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHQpXG5cdF0pO1xuXG5cdExhc3RWYXJpYWJsZUlkID0gbmFtZTtcblxuXHRyZXR1cm4ge1xuXHRcdG5hbWUsXG5cdFx0dmFsdWUsXG5cdH07XG59XG5cbi8vIG5leHRTaWJsaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGVudGl0eSlcbntcblx0Y2xlYW51cCgpO1xuXG5cdGxldCB0cGwgPSBlbnRpdHkubWFrZVRlbXBsYXRlKHRydWUpO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBwcm9ncmFtQ29udGV4dCA9IGJvZHk7XG5cblx0ZnVuY3Rpb24gaGFuZGxlKGVudGl0eSlcblx0e1xuXHRcdGVudGl0eS5oYW5kbGUocHJvZ3JhbUNvbnRleHQsIHsgY3JlYXRlVmFyaWFibGUsIGdldExhc3RWYXJpYWJsZUlkLCBjcmVhdGVUZW1wbGF0ZSB9KTtcblx0fVxuXG5cdFtlbnRpdHldLm1hcCgoaXRlbSkgPT4gaGFuZGxlKGl0ZW0pKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0cGwpO1xuXHQvLyBjb25zb2xlLmxvZyhUZW1wbGF0ZXMpO1xuXG5cdGxldCBjb2RlID0gZ2VuZXJhdGUocHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiBjb2RlLmNvZGUsXG5cdFx0dGVtcGxhdGVzOiBnZXRUZW1wbGF0ZXMoKSxcblx0fVxufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQsIHBhcnNlIH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycywgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0YXR0cnMuY2FsbCh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cdHBhcmFtcy5wdXNoKGlkKHRoaXMudmFsdWUpKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgYmxvY2sgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdGxldCBib2R5ID0gW107XG5cblx0XHR0aGlzLmNoaWxkcmVuW2ldLmhhbmRsZShib2R5LCBvcHRpb25zKTtcblxuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKSxcblx0XHRcdFx0aWQoJ2l0ZW0nKSwgLy8gcmVwbGFjZSB3aXRoIGV4cHJlc3Npb24gcGFyc2Vcblx0XHRcdFx0aWQoJ2tleScpIC8vIHJlcGxhY2Ugd2l0aCBleHByZXNzaW9uIHBhcnNlXG5cdFx0XHRdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdFx0KTtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ2VhY2gnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHByb2dyYW0gZnJvbSAnLi9wcm9ncmFtJztcbmltcG9ydCBzdGF0ZW1lbnQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcbmltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9zbG90JztcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgeyBwcm9ncmFtLCBzdGF0ZW1lbnQsIGVhY2gsIG5vZGUsIHRleHQsIHNsb3QsIGNvbXBvbmVudCB9IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRyZW4oZW50aXR5LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGVudGl0eS5jaGlsZHJlbltpXS5oYW5kbGUoY29udGV4dCwgeyBmaXJzdENoaWxkOiBpID09PSAwLCAuLi5vcHRpb25zIH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhwb2ludCwgY29udGV4dCwgb3B0aW9ucylcbntcblx0aWYodGhpcy5oYXNBdHRyaWJ1dGVzKCkpIHtcblx0XHRsZXQgcHJvcHMgPSBbXTtcblxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRcdHByb3BzLnB1c2goXG5cdFx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0XHRzdHJpbmdMaXRlcmFsKGtleSksXG5cdFx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdFx0aWQoJ21ha2VBdHRycycpLCBbXG5cdFx0XHRcdFx0cG9pbnQubmFtZSxcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XHRdXG5cdFx0XHQpXG5cdFx0KTtcblxuXHRcdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0YXR0cnMuY2FsbCh0aGlzLCB0ZW1wbGF0ZSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Y2hpbGRyZW4odGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2dyYW0oY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdGxldCBpbmRleCA9IG9wdGlvbnMuY3JlYXRlVGVtcGxhdGUodGhpcyk7XG5cdFx0cmV0dXJuIG5ldyBjYWxsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgaWQoJ25vZGUnKSwgaWQoJ3JlbmRlcicpXVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0bGV0IHBvaW50ZXIgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihsLCBpZCgnZmlyc3RDaGlsZCcpKSxcblx0XHRcdGxcblx0XHQpXG5cdH0pO1xuXHRcblx0Y29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xuXG5cdHRoaXMubWFwKChpdGVtKSA9PiBpdGVtLmhhbmRsZShjb250ZXh0LCBvcHRpb25zKSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2gocmV0dXJuUG9pbnRlcik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJ2NvbnRleHQnKSxcblx0XHRzdHJpbmdMaXRlcmFsKHRoaXMubmFtZSksXG5cdFx0b3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRdO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKGlkKCdzbG90JyksIHBhcmFtcylcblx0KTtcblxuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGNoaWxkcmVuKHRoaXMsIGJvZHksIG9wdGlvbnMpO1xuXG5cdHBhcmFtcy5wdXNoKFxuXHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sXG5cdFx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSlcblx0XHQpXG5cdClcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdzdGF0ZW1lbnQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZChvcHRpb25zLmZpcnN0Q2hpbGQgPyAnZmlyc3RDaGlsZCcgOiAnbmV4dFNpYmxpbmcnKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQgeyBwcmVwYXJlIH0gZnJvbSAnLi9wcmVwYXJlJztcbmltcG9ydCB7IGlzQ29tcG9uZW50IH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQgeyBQYXJzZXIgYXMgSFRNTFBhcnNlciB9IGZyb20gJ2h0bWxwYXJzZXIyJztcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGh0bWwpXG57XG5cdGh0bWwgPSBwcmVwYXJlKGh0bWwpO1xuXG5cdGxldCBzdGFjayA9IFtcblx0XHRuZXcgRXhwcmVzc2lvbih7IHR5cGU6ICdwcm9ncmFtJyB9KVxuXHRdO1xuXG5cdGZ1bmN0aW9uIGN1cnJlbnRTdGFja05vZGUoKVxuXHR7XG5cdFx0cmV0dXJuIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0Y29uc3QgcGFyc2UgPSBuZXcgSFRNTFBhcnNlcih7XG5cdFx0XG5cdFx0b25vcGVudGFnKG5hbWUsIGF0dHJzKVxuXHRcdHtcblx0XHRcdGxldCBwYXJlbnQgPSBjdXJyZW50U3RhY2tOb2RlKCk7XG5cdFx0XHRsZXQgZW50aXR5O1xuXG5cdFx0XHRpZihuYW1lID09PSAnZXhwcicpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IEV4cHJlc3Npb24oYXR0cnMpO1xuXHRcdFx0fSBlbHNlIGlmKG5hbWUgPT09ICdzbG90Jykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgU2xvdChhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYgKGlzQ29tcG9uZW50KG5hbWUpKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBDb21wb25lbnQobmFtZSwgYXR0cnMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IE5vZGUobmFtZSwgYXR0cnMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0cGFyZW50LmFkZENoaWxkKGVudGl0eSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0YWNrLnB1c2goZW50aXR5KTtcblx0XHR9LFxuXG5cdFx0b250ZXh0KHRleHQpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblxuXHRcdFx0dGV4dCA9IHRleHQudHJpbSgpO1xuXG5cdFx0XHRpZih0ZXh0ICE9PSAnJyAmJiBwYXJlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSBuZXcgVGV4dCh0ZXh0KTtcblx0XHRcdFx0aWYocGFyZW50KSB7XG5cdFx0XHRcdFx0cGFyZW50LmFkZENoaWxkKG5vZGUpO1xuXHRcdFx0XHR9XG5cdCAgICBcdH1cblx0ICAgIH0sXG5cblx0XHRvbmNsb3NldGFnKG5hbWUpXG5cdFx0e1xuXHRcdFx0c3RhY2sucG9wKCk7XG5cdCAgICB9XG5cblx0fSwgeyBkZWNvZGVFbnRpdGllczogdHJ1ZSB9KVxuXHRcblx0cGFyc2Uud3JpdGUoaHRtbCk7XG5cdHBhcnNlLmVuZCgpO1xuXHRjb25zb2xlLmxvZyhzdGFjaylcblx0cmV0dXJuIHN0YWNrWzBdO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoaHRtbClcbntcblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPjxleHByIHR5cGU9XCJwcm9ncmFtXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj48L2V4cHI+JylcblxuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cnMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRycykubGVuZ3RoID4gMFxuXHR9XHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXHRcdFxuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuYXR0cnMpIHtcblx0XHRcdHRlbXBsYXRlICs9IGAgJHtrZXl9PVwiJHt0aGlzLmF0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkpIHtcblx0XHRcdHJldHVybiAnPCEtLS0tPic7XG5cdFx0fVxuXG5cdFx0aWYoIXRoaXMudGFnKSB7XG5cdFx0XHRyZXR1cm4gY2hpbGRUZW1wbGF0ZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGVtcGxhdGU7XG5cdH1cbn0iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tICcuL0V4cHJlc3Npb24nO1xuaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0JztcbmltcG9ydCBOb2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgU2xvdCBmcm9tICcuL1Nsb3QnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuL0NvbXBvbmVudCc7XG5cbmV4cG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIENvbXBvbmVudCwgU2xvdCB9IiwiY29uc3QgSFRNTFRhZ3MgPSBbXG5cdFwiIWRvY3R5cGVcIiwgXCJhXCIsIFwiYWJiclwiLCBcImFjcm9ueW1cIiwgXCJhZGRyZXNzXCIsIFwiYXBwbGV0XCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsXG5cdFwiYlwiLCBcImJhc2VcIiwgXCJiYXNlZm9udFwiLCBcImJiXCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLFxuXHRcImNhcHRpb25cIiwgXCJjZW50ZXJcIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiY29tbWFuZFwiLCBcImRhdGFncmlkXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLFxuXHRcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXJcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImV2ZW50c291cmNlXCIsIFwiZmllbGRzZXRcIixcblx0XCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9udFwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJmcmFtZVwiLCBcImZyYW1lc2V0XCIsIFwiaDE+IHRvIDxoNlwiLCBcImhlYWRcIiwgXCJoZWFkZXJcIixcblx0XCJoZ3JvdXBcIiwgXCJoclwiLCBcImh0bWxcIiwgXCJpXCIsIFwiaWZyYW1lXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJpbnNcIiwgXCJpc2luZGV4XCIsIFwia2JkXCIsIFwia2V5Z2VuXCIsIFwibGFiZWxcIixcblx0XCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWVudVwiLCBcIm1ldGFcIiwgXCJtZXRlclwiLCBcIm5hdlwiLCBcIm5vZnJhbWVzXCIsIFwibm9zY3JpcHRcIixcblx0XCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicnBcIiwgXCJydFwiLFxuXHRcInJ1YnlcIiwgXCJzXCIsIFwic2FtcFwiLCBcInNjcmlwdFwiLCBcInNlY3Rpb25cIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIixcblx0XCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsXG5cdFwidHJcIiwgXCJ0cmFja1wiLCBcInR0XCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIlxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ29tcG9uZW50KG5hbWUpIHtcblx0cmV0dXJuICFIVE1MVGFncy5pbmNsdWRlcyhuYW1lKTtcbn1cbiIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGNvbXBpbGUgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cblxuXG5cblxuXG5mdW5jdGlvbiB0ZXN0KCkge1xuXG5cdGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRcdGlmIChyZW5kZXIpIHtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgbmFtZSwgbm9kZSwgY2FsbGJhY2spIHtcblx0XHRpZiAoY29udGV4dC4kc2xvdHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm9kZS5pbm5lckhUTUwgPSBjb250ZXh0LiRzbG90c1tuYW1lXTtcblxuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0ZnVuY3Rpb24gZWFjaChub2RlLCBpdGVtcywgZm4pIHtcblx0XHRsZXQgYm9keSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBub2RlID0gZm4obm9kZSwgaXRlbXNbaV0sIGkpO1xuXHRcdFx0Ym9keS5hcHBlbmRDaGlsZChub2RlKTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKGJvZHkpO1xuXG5cdFx0cmV0dXJuIGJvZHk7XG5cdH1cblxuXHRmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgLi4uYXJncykge1xuXHRcdGxldCByZXR1cm5Ob2RlID0gZmFsc2U7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRcdGlmIChhcmdzW2ldKSB7XG5cdFx0XHRcdHJldHVybk5vZGUgPSBhcmdzW2kgKyAxXShub2RlKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHRsZXQgeyByZW5kZXIsIHRlbXBsYXRlcyB9ID0gZ2V0dCgpO1xuXG5cdC8vIGNvbnNvbGUubG9nKHJlbmRlcik7XG5cdC8vIGNvbnNvbGUubG9nKHRlbXBsYXRlcyk7XG5cdC8vIHJldHVybjtcblxuXHQvKipcblx0ICogR0VORVJBVEVEIENPREVcblx0ICovXG5cdGxldCBfdHBsJDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkMS5pbm5lckhUTUwgPSBcIjxkaXY+PCEtLS0tPjwvZGl2PlwiO1xuXG5cdGxldCBfdHBsJDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkMi5pbm5lckhUTUwgPSBcIjxkaXYgY2xhc3M9XFxcImJ1dHRvblxcXCI+PHNwYW4+RGVmYXVsdCBidXR0b24gdGV4dDwvc3Bhbj48L2Rpdj5cIjtcblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblx0XHQvKipcblx0XHQgKiBHRU5FUkFURUQgQ09ERVxuXHRcdCAqL1xuXHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5cdFx0bGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG5cblx0XHRsZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5cdFx0Y29uc29sZS5sb2coX2VsJDMsIF9lbCQyKTtcblx0XHRsZXQgX2VsJDggPSBlYWNoKF9lbCQzLCBbMV0sIChub2RlLCBpdGVtLCBrZXkpID0+IHtcblx0XHRcdGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG5cdFx0XHRsZXQgX2VsJDUgPSByZW5kZXIgPyBfZWwkNC5maXJzdENoaWxkIDogX2VsJDQ7XG5cblx0XHRcdGxldCBfZWwkNiA9IF9lbCQ1LmZpcnN0Q2hpbGQ7XG5cdFx0XHRtYWtlQXR0cnMoX2VsJDYsIHJlbmRlciwge1xuXHRcdFx0XHRcImNsYXNzXCI6IFwiYnV0dG9uXCJcblx0XHRcdH0pO1xuXHRcdFx0c2xvdChjb250ZXh0LCBcImRlZmF1bHRcIiwgX2VsJDYsIG5vZGUgPT4ge1xuXHRcdFx0XHRsZXQgX2VsJDcgPSBfZWwkNi5maXJzdENoaWxkO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDQgOiBfZWwkNztcblx0XHR9KTtcblxuXHRcdHJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQ4O1xuXHR9XG5cblx0bGV0IGQgPSBtYWtlQ29tcG9uZW50KHtcblx0XHQkc2xvdHM6IHtcblx0XHRcdGRlZmF1bHQ6ICcxJyxcblx0XHR9XG5cdH0pO1xuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHRsYXlvdXQuYXBwZW5kQ2hpbGQoZCk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0MlxuXHRcdEBlYWNoKDEpXG5cdFx0YXNkYXNkXG5cdFx0PHNsb3Q+ZGVmYXVsdCB0ZXh0IGZvciBzbG90PGIgY2xhc3M9XCJkXCI+MTwvYj48L3Nsb3Q+XG5cdFx0QGVuZGVhY2hcblx0XHQzXG5cdFx0QGVsc2UgXG5cdFx0YXNkXG5cdEBlbmRpZlxuXHRlbmRcblx0YDtcblxuXHRodG1sID0gYFxuXHQ8ZGl2PlxuXHRAZWFjaCgxKVxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uXCI+XG5cdFx0PHNsb3Q+RGVmYXVsdCBidXR0b24gdGV4dDwvc2xvdD5cblx0PC9kaXY+XG5cdEBlbmRlYWNoXG5cdDwvZGl2PlxuXHRgXG5cdGxldCB0ZW1wbGF0ZSA9IHBhcnNlKGh0bWwpO1xuXG5cdHJldHVybiBjb21waWxlKHRlbXBsYXRlKTtcblx0Ly8gY29uc29sZS5sb2coaHRtbCk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9