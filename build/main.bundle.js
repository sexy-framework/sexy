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
  console.log(code.code);
  console.log(getTemplates());
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
    params.push(new _types.arrowFunctionExpression([], new _types.blockStatement(body)));
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
exports.attrs = attrs;
exports.default = node;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

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
    return new _types.memberExpression(l, (0, _types.identifier)('nextSibling'));
  });
  context.push(template.value);
  attrs.call(this, template, context, options); // let pointer = createVariable(context, (n, l) => {
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

function slot(context, options) {} // console.warn(this.tag);

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
    return new _types.memberExpression(l, (0, _types.identifier)('nextSibling'));
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
        tag = _ref$tag === void 0 ? null : _ref$tag;
    _this = _Type.call(this) || this;
    _this.name = name;
    _this.tag = tag;
    _this.children = [];
    _this.type = 'slot';
    return _this;
  }

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
  var _tpl$1 = document.createElement("template");

  _tpl$1.innerHTML = "<div>start</div><!---->end";

  var _tpl$2 = document.createElement("template");

  _tpl$2.innerHTML = "<div></div>asdad<!---->asdasd";

  var _tpl$3 = document.createElement("template");

  _tpl$3.innerHTML = "<div>iff2</div>";

  var _tpl$4 = document.createElement("template");

  _tpl$4.innerHTML = "1<!---->2<!---->3";

  var _tpl$5 = document.createElement("template");

  _tpl$5.innerHTML = "asd";

  function getNode(template, node, render) {
    if (render) {
      return template.content.cloneNode(true);
    }

    return node;
  }

  function each(node) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    console.log(node, args);
    return node;
  }

  function statement(node) {
    var returnNode = false;

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
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

  function makeComponent(context, node) {
    if (node === void 0) {
      node = false;
    }

    var render = node === false;

    var _el$1 = getNode(_tpl$1, node, render);

    var _el$2 = render ? _el$1.firstChild : _el$1;

    var _el$3 = _el$2.nextSibling;

    var _el$25 = statement(_el$3, 1, function (node) {
      var _el$4 = getNode(_tpl$2, node, render);

      var _el$5 = render ? _el$4.firstChild : _el$4;

      var _el$6 = _el$5.nextSibling;
      var _el$7 = _el$6.nextSibling;

      var _el$11 = statement(_el$7, 2, function (node) {
        var _el$8 = getNode(_tpl$3, node, render);

        var _el$9 = render ? _el$8.firstChild : _el$8;

        var _el$10 = _el$9.nextSibling;
        return render ? _el$8 : _el$10;
      });

      var _el$12 = _el$11.nextSibling;
      return render ? _el$4 : _el$12;
    }, test, function (node) {
      var _el$13 = getNode(_tpl$4, node, render);

      var _el$14 = render ? _el$13.firstChild : _el$13;

      var _el$15 = _el$14.nextSibling;

      var _el$16 = getComponent("nativ", _el$15, render);

      makeAttrs(_el$16, render, {
        "data-p": "1"
      });
      var _el$17 = _el$16.nextSibling;
      var _el$18 = _el$17.nextSibling;

      var _el$20 = each(_el$18, 1, function () {
        var _el$19 = _el$18.nextSibling;
      }, function () {});

      var _el$21 = _el$20.nextSibling;
      return render ? _el$13 : _el$21;
    }, true, function (node) {
      var _el$22 = getNode(_tpl$5, node, render);

      var _el$23 = render ? _el$22.firstChild : _el$22;

      var _el$24 = _el$23.nextSibling;
      return render ? _el$22 : _el$24;
    });

    var _el$26 = _el$25.nextSibling;
    return render ? _el$1 : _el$26;
  }

  var d = makeComponent();
  var layout = document.getElementById('layout');
  layout.innerHTML = '';
  layout.appendChild(d);
}

test();

function gett() {
  var html = "\n\t<div>start</div>\n\t@if(1)\n\t<div></div>\n\tasdad\n\t\t@if(2)\n\t\t<div>iff2</div>\n\t\t@endif\n\tasdasd\n\t@elseif(test)\n\t1\n\t\t<Nativ data-p=\"1\">asd</Nativ>\n\t\t2\n\t\t@each(1)\n\t\tasdasd\n\t\t<slot>default text for slot</slot>\n\t\t@endeach\n\t\t3\n\t\t@else \n\t\tasd\n\t@endif\n\tend\n\t";
  var template = (0, _parser.parse)(html);
  (0, _compiler.compile)(template);
  console.log(html);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9jb21waWxlLmpzIiwid2VicGFjazovLy8uLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9lYWNoLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9ub2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy90ZXh0LmpzIiwid2VicGFjazovLy8uLi9zcmMvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9wcmVwYXJlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvRXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9TbG90LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3Rlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vV3JpdGFibGVTdHJlYW0gKGlnbm9yZWQpIl0sIm5hbWVzIjpbIlZhcmlhYmxlQ291bnRlciIsIkxhc3RWYXJpYWJsZUlkIiwiVGVtcGxhdGVzIiwidGVtcGxhdGUiLCJwcm9ncmFtIiwiY29kZSIsImkiLCJ0cGwiLCJpbmRleCIsImNvbnRleHQiLCJBY3Rpb24iLCJuYW1lIiwiZGVsY2FyYXRpb25WYWx1ZSIsInZhbHVlIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsInZhcmlhYmxlRGVjbGFyYXRvciIsImNsZWFudXAiLCJlbnRpdHkiLCJib2R5IiwicHJvZ3JhbUNvbnRleHQiLCJjcmVhdGVWYXJpYWJsZSIsImdldExhc3RWYXJpYWJsZUlkIiwiY3JlYXRlVGVtcGxhdGUiLCJoYW5kbGUiLCJyZXRhaW5MaW5lcyIsImNvbXBhY3QiLCJtaW5pZmllZCIsImNvbmNpc2UiLCJxdW90ZXMiLCJjb25zb2xlIiwiZ2V0VGVtcGxhdGVzIiwiaW5pdCIsImNhbGxFeHByZXNzaW9uIiwiYXR0cnMiLCJtZW1iZXJFeHByZXNzaW9uIiwicGFyYW1zIiwib3B0aW9ucyIsImJsb2NrIiwiYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJibG9ja1N0YXRlbWVudCIsImV4cHJlc3Npb24iLCJwcm9wcyIsIm9iamVjdFByb3BlcnR5IiwiZXhwcmVzc2lvblN0YXRlbWVudCIsInBvaW50Iiwib2JqZWN0RXhwcmVzc2lvbiIsInBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJpdGVtIiwicmV0dXJuUG9pbnRlciIsInJldHVyblN0YXRlbWVudCIsImxhc3RDb250ZXh0VmFyaWFibGVJZCIsImh0bWwiLCJzdGFjayIsIkV4cHJlc3Npb24iLCJ0eXBlIiwicGFyc2UiLCJIVE1MUGFyc2VyIiwib25vcGVudGFnIiwicGFyZW50IiwiY3VycmVudFN0YWNrTm9kZSIsIlNsb3QiLCJDb21wb25lbnQiLCJOb2RlIiwib250ZXh0IiwidGV4dCIsIm5vZGUiLCJUZXh0Iiwib25jbG9zZXRhZyIsImRlY29kZUVudGl0aWVzIiwicHJlcGFyZUhUTUwiLCJoYXNBdHRyaWJ1dGVzIiwiT2JqZWN0IiwiVHlwZSIsInRhZyIsIm1ha2VUZW1wbGF0ZSIsIm1hcCIsImFkZENoaWxkIiwiY2hpbGQiLCJydWxlcyIsIm9ubHlDaGlsZHJlbiIsImNoaWxkVGVtcGxhdGUiLCJIVE1MVGFncyIsInRlc3QiLCJfdHBsJDEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJfdHBsJDIiLCJfdHBsJDMiLCJfdHBsJDQiLCJfdHBsJDUiLCJnZXROb2RlIiwicmVuZGVyIiwiY29udGVudCIsImNsb25lTm9kZSIsImVhY2giLCJhcmdzIiwibG9nIiwic3RhdGVtZW50IiwicmV0dXJuTm9kZSIsImxlbmd0aCIsInJlcGxhY2VXaXRoIiwibWFrZUNvbXBvbmVudCIsIl9lbCQxIiwiX2VsJDIiLCJmaXJzdENoaWxkIiwiX2VsJDMiLCJuZXh0U2libGluZyIsIl9lbCQyNSIsIl9lbCQ0IiwiX2VsJDUiLCJfZWwkNiIsIl9lbCQ3IiwiX2VsJDExIiwiX2VsJDgiLCJfZWwkOSIsIl9lbCQxMCIsIl9lbCQxMiIsIl9lbCQxMyIsIl9lbCQxNCIsIl9lbCQxNSIsIl9lbCQxNiIsImdldENvbXBvbmVudCIsIm1ha2VBdHRycyIsIl9lbCQxNyIsIl9lbCQxOCIsIl9lbCQyMCIsIl9lbCQxOSIsIl9lbCQyMSIsIl9lbCQyMiIsIl9lbCQyMyIsIl9lbCQyNCIsIl9lbCQyNiIsImQiLCJsYXlvdXQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiZ2V0dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUFNLEdBQUd0QyxNQUFNLEdBQUdxQyxNQUFNLENBQUN4QixVQUFWLEdBQXVCd0IsTUFBMUM7O0FBRUEsVUFBSUUsTUFBTSxHQUFHRCxNQUFNLENBQUN2QixXQUFwQjtBQUNBLGFBQU9mLE1BQU0sR0FBR3FDLE1BQUgsR0FBWUUsTUFBekI7QUFDQSxLQS9DcUIsQ0FBdEI7O0FBaURBLFFBQUlDLE1BQU0sR0FBR3hCLE1BQU0sQ0FBQ0QsV0FBcEI7QUFDQSxXQUFPZixNQUFNLEdBQUdXLEtBQUgsR0FBVzZCLE1BQXhCO0FBQ0E7O0FBRUQsTUFBSUMsQ0FBQyxHQUFHL0IsYUFBYSxFQUFyQjtBQUVBLE1BQUlnQyxNQUFNLEdBQUdsRCxRQUFRLENBQUNtRCxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQUQsUUFBTSxDQUFDaEQsU0FBUCxHQUFtQixFQUFuQjtBQUVBZ0QsUUFBTSxDQUFDRSxXQUFQLENBQW1CSCxDQUFuQjtBQUNBOztBQUVEbkQsSUFBSTs7QUFFSixTQUFTdUQsSUFBVCxHQUFnQjtBQUVmLE1BQUl0RixJQUFJLHFUQUFSO0FBeUJBLE1BQUlqRCxRQUFRLEdBQUcsbUJBQU1pRCxJQUFOLENBQWY7QUFFQSx5QkFBUWpELFFBQVI7QUFDQTBCLFNBQU8sQ0FBQ3FFLEdBQVIsQ0FBWTlDLElBQVo7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLRCxlIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JzXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJ0BoYXdhL3BhcnNlcic7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuXG5cbmxldCBWYXJpYWJsZUNvdW50ZXIgPSAwO1xubGV0IExhc3RWYXJpYWJsZUlkID0gbnVsbDtcbmxldCBUZW1wbGF0ZXMgPSBuZXcgU2V0KCk7XG5cbmZ1bmN0aW9uIGNsZWFudXAoKVxue1xuXHRWYXJpYWJsZUNvdW50ZXIgPSAwO1xuXHRMYXN0VmFyaWFibGVJZCA9IGlkKCdoeWRyYXRlJyk7XG5cdFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcbntcblx0bGV0IHRlbXBsYXRlID0gcHJvZ3JhbS5tYWtlVGVtcGxhdGUoKTtcblxuXHRUZW1wbGF0ZXMuYWRkKHRlbXBsYXRlKTtcblxuXHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xufVxuXG5mdW5jdGlvbiBnZXRUZW1wbGF0ZXMoKVxue1xuXHRsZXQgY29kZSA9ICcnO1xuXHRsZXQgaSA9IDA7XG5cblx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0bGV0IGluZGV4ID0gKytpO1xuXHRcdGNvZGUgKz0gYGxldCBfdHBsJCR7IGluZGV4IH0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XFxuYDtcblx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gXCIkeyB0cGwgfVwiO1xcblxcbmA7XG5cdH1cblxuXHRyZXR1cm4gY29kZTtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFZhcmlhYmxlSWQoKVxue1xuXHRyZXR1cm4gTGFzdFZhcmlhYmxlSWQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVZhcmlhYmxlKGNvbnRleHQgPSBudWxsLCBBY3Rpb24gPSAobiwgbCkgPT4gbClcbntcblx0bGV0IG5hbWUgPSBpZChgX2VsJCR7ICsrVmFyaWFibGVDb3VudGVyIH1gKTtcblxuXHRsZXQgZGVsY2FyYXRpb25WYWx1ZSA9IEFjdGlvbihuYW1lLCBMYXN0VmFyaWFibGVJZCk7XG5cblx0bGV0IHZhbHVlID0gbmV3IHZhcmlhYmxlRGVjbGFyYXRpb24oJ2xldCcsIFtcblx0XHRuZXcgdmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0bmFtZSxcblx0XHRcdGRlbGNhcmF0aW9uVmFsdWVcblx0XHQpXG5cdF0pO1xuXG5cdExhc3RWYXJpYWJsZUlkID0gbmFtZTtcblxuXHRyZXR1cm4ge1xuXHRcdG5hbWUsXG5cdFx0dmFsdWUsXG5cdH07XG59XG5cbi8vIG5leHRTaWJsaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGVudGl0eSlcbntcblx0Y2xlYW51cCgpO1xuXG5cdGxldCB0cGwgPSBlbnRpdHkubWFrZVRlbXBsYXRlKHRydWUpO1xuXHRsZXQgYm9keSA9IFtdO1xuXG5cdGxldCBwcm9ncmFtQ29udGV4dCA9IGJvZHk7XG5cblx0ZnVuY3Rpb24gaGFuZGxlKGVudGl0eSlcblx0e1xuXHRcdGVudGl0eS5oYW5kbGUocHJvZ3JhbUNvbnRleHQsIHsgY3JlYXRlVmFyaWFibGUsIGdldExhc3RWYXJpYWJsZUlkLCBjcmVhdGVUZW1wbGF0ZSB9KTtcblx0fVxuXG5cdFtlbnRpdHldLm1hcCgoaXRlbSkgPT4gaGFuZGxlKGl0ZW0pKTtcblxuXHQvLyBjb25zb2xlLmxvZyh0cGwpO1xuXHQvLyBjb25zb2xlLmxvZyhUZW1wbGF0ZXMpO1xuXG5cdGxldCBjb2RlID0gZ2VuZXJhdGUocHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0pO1xuXG5cdGNvbnNvbGUubG9nKGNvZGUuY29kZSk7XG5cdGNvbnNvbGUubG9nKGdldFRlbXBsYXRlcygpKVxufSIsImltcG9ydCB7IHBhcnNlIH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7IEV4cHJlc3Npb24sIFRleHQsIE5vZGUsIFNsb3QsIENvbXBvbmVudCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgeyBFeHByZXNzaW9uLCBUZXh0LCBOb2RlLCBTbG90LCBDb21wb25lbnQsIHBhcnNlIH0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBhdHRycywgfSBmcm9tICcuL25vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdGxldCBpbml0ID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Q29tcG9uZW50JyksIFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLm5hbWUpLFxuXHRcdFx0XHRsLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2goaW5pdC52YWx1ZSk7XG5cblx0YXR0cnMuY2FsbCh0aGlzLCBpbml0LCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlYWNoKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cdHBhcmFtcy5wdXNoKGlkKHRoaXMudmFsdWUpKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgYmxvY2sgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXHRcdGxldCBib2R5ID0gW107XG5cblx0XHR0aGlzLmNoaWxkcmVuW2ldLmhhbmRsZShib2R5LCBvcHRpb25zKTtcblxuXHRcdFxuXHRcdHBhcmFtcy5wdXNoKFxuXHRcdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtdLCBuZXcgYmxvY2tTdGF0ZW1lbnQoYm9keSkpXG5cdFx0KTtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oaWQoJ2VhY2gnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHByb2dyYW0gZnJvbSAnLi9wcm9ncmFtJztcbmltcG9ydCBzdGF0ZW1lbnQgZnJvbSAnLi9zdGF0ZW1lbnQnO1xuaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcbmltcG9ydCBub2RlIGZyb20gJy4vbm9kZSc7XG5pbXBvcnQgdGV4dCBmcm9tICcuL3RleHQnO1xuaW1wb3J0IHNsb3QgZnJvbSAnLi9zbG90JztcbmltcG9ydCBjb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnO1xuXG5leHBvcnQgeyBwcm9ncmFtLCBzdGF0ZW1lbnQsIGVhY2gsIG5vZGUsIHRleHQsIHNsb3QsIGNvbXBvbmVudCB9IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMocG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKHRoaXMuaGFzQXR0cmlidXRlcygpKSB7XG5cdFx0bGV0IHByb3BzID0gW107XG5cblx0XHRmb3IobGV0IGtleSBpbiB0aGlzLmF0dHJzKSB7XG5cdFx0XHRwcm9wcy5wdXNoKFxuXHRcdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdFx0c3RyaW5nTGl0ZXJhbChrZXkpLFxuXHRcdFx0XHRcdHN0cmluZ0xpdGVyYWwodGhpcy5hdHRyc1trZXldKSxcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdtYWtlQXR0cnMnKSwgW1xuXHRcdFx0XHRcdHBvaW50Lm5hbWUsXG5cdFx0XHRcdFx0aWQoJ3JlbmRlcicpLFxuXHRcdFx0XHRcdG5ldyBvYmplY3RFeHByZXNzaW9uKHByb3BzKSxcblx0XHRcdFx0XVxuXHRcdFx0KVxuXHRcdCk7XG5cblx0XHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9kZShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHRcdFx0bCwgaWQoJ25leHRTaWJsaW5nJylcblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGF0dHJzLmNhbGwodGhpcywgdGVtcGxhdGUsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvZ3JhbShjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyldXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxuXHRsZXQgcG9pbnRlciA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKGwsIGlkKCdmaXJzdENoaWxkJykpLFxuXHRcdFx0bFxuXHRcdClcblx0fSk7XG5cdFxuXHRjb250ZXh0LnB1c2gocG9pbnRlci52YWx1ZSk7XG5cblx0dGhpcy5tYXAoKGl0ZW0pID0+IGl0ZW0uaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpKTtcblxuXHRsZXQgcmV0dXJuUG9pbnRlciA9IG5ldyByZXR1cm5TdGF0ZW1lbnQoXG5cdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdGlkKCdyZW5kZXInKSwgdGVtcGxhdGUubmFtZSwgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChyZXR1cm5Qb2ludGVyKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNsb3QoY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gY29uc29sZS53YXJuKHRoaXMudGFnKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXRlbWVudChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0cGFyYW1zLnB1c2goaWQoYmxvY2sudmFsdWUpKTtcblx0XHRwYXJhbXMucHVzaChcblx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXG5cdFx0XHRcdGlkKCdub2RlJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdzdGF0ZW1lbnQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbi52YWx1ZSk7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCgnbmV4dFNpYmxpbmcnKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cdFxuXHQvLyBsZXQgdGVtcGxhdGUgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdHJldHVybiBpZCgnY3JlYXRlVGVhbXBsYXRlJyk7XG5cdC8vIH0pO1xuXG5cdC8vIGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0Ly8gbGV0IHBvaW50ZXIgPSBjcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdGlmKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMSkge1xuXHQvLyBcdFx0cmV0dXJuIG5ldyBtZW1iZXJFeHByZXNzaW9uKFxuXHQvLyBcdFx0XHRsLCBpZCgnZmlyc3RDaGlsZCcpXG5cdC8vIFx0XHQpO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiBsO1xuXHQvLyB9KTtcblx0XG5cdC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuY2hpbGRyZW4ubGVuZ3RoKTtcblx0Ly8gY29udGV4dC5wdXNoKHBvaW50ZXIudmFsdWUpO1xufSIsImltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoaHRtbClcbntcblx0aHRtbCA9IHByZXBhcmUoaHRtbCk7XG5cblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRzdGFjay5wb3AoKTtcblx0ICAgIH1cblxuXHR9LCB7IGRlY29kZUVudGl0aWVzOiB0cnVlIH0pXG5cdFxuXHRwYXJzZS53cml0ZShodG1sKTtcblx0cGFyc2UuZW5kKCk7XG5cblx0cmV0dXJuIHN0YWNrWzBdO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoaHRtbClcbntcblx0aHRtbCA9IGh0bWxcblx0XHQvLyBpZlxuXHRcdC5yZXBsYWNlKC9AaWZcXCgoLiopXFwpL2csICc8ZXhwciB0eXBlPVwic3RhdGVtZW50XCI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVsc2VpZlxcKCguKilcXCkvZywgJzwvZXhwcj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCJ0cnVlXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGlmL2csICc8L2V4cHI+PC9leHByPicpXG5cdFx0Ly8gZWFjaFxuXHRcdC5yZXBsYWNlKC9AZWFjaFxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJlYWNoXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbmRlYWNoL2csICc8L2V4cHI+JylcblxuXHRyZXR1cm4gcHJlcGFyZUhUTUwoaHRtbCk7XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ2NvbXBvbmVudCc7XG5cdH1cblx0XG5cdGhhc0F0dHJpYnV0ZXMoKVxuXHR7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYXR0cnMpLmxlbmd0aCA+IDBcblx0fVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlIGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih0YWcsIGF0dHJzKVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1x0XG5cdFx0dGhpcy50eXBlID0gJ25vZGUnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpXG5cdHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5hdHRycykubGVuZ3RoID4gMFxuXHR9XHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9IG51bGwgfSlcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnc2xvdCc7XG5cdH1cblx0XG59IiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGV4dCBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGV4dClcblx0e1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy52YWx1ZSA9IHRleHQ7XG5cdFx0dGhpcy50eXBlID0gJ3RleHQnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKClcblx0e1xuXHRcdHJldHVybiB0aGlzLnZhbHVlO1xuXHR9XG5cbn0iLCJpbXBvcnQgeyBydWxlcyB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZVxue1xuXHRjb25zdHJ1Y3RvcigpXG5cdHtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRtYXAoY2FsbGJhY2spXG5cdHtcblx0XHRpZih0aGlzLmNoaWxkcmVuICYmIHRoaXMudHlwZSAhPT0gJ3N0YXRlbWVudCcpIHtcblx0XHRcdHRoaXMuY2hpbGRyZW4ubWFwKGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHRhZGRDaGlsZChjaGlsZClcblx0e1xuXHRcdGNoaWxkLnBhcmVudCA9IHRoaXM7XG5cdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblx0fVxuXG5cdGhhbmRsZShjb250ZXh0LCBvcHRpb25zKVxuXHR7XG5cdFx0cmV0dXJuIHJ1bGVzW3RoaXMudHlwZV0uY2FsbCh0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZShvbmx5Q2hpbGRyZW4gPSB0cnVlKVxuXHR7XG5cdFx0bGV0IHRlbXBsYXRlID0gYDwke3RoaXMudGFnfWA7XG5cdFx0XG5cdFx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke3RoaXMuYXR0cnNba2V5XX1cImA7XG5cdFx0fVxuXG5cdFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHRcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHRcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJjb25zdCBIVE1MVGFncyA9IFtcblx0XCIhZG9jdHlwZVwiLCBcImFcIiwgXCJhYmJyXCIsIFwiYWNyb255bVwiLCBcImFkZHJlc3NcIiwgXCJhcHBsZXRcIiwgXCJhcmVhXCIsIFwiYXJ0aWNsZVwiLCBcImFzaWRlXCIsIFwiYXVkaW9cIixcblx0XCJiXCIsIFwiYmFzZVwiLCBcImJhc2Vmb250XCIsIFwiYmJcIiwgXCJiZG9cIiwgXCJiaWdcIiwgXCJibG9ja3F1b3RlXCIsIFwiYm9keVwiLCBcImJyXCIsIFwiYnV0dG9uXCIsIFwiY2FudmFzXCIsXG5cdFwiY2FwdGlvblwiLCBcImNlbnRlclwiLCBcImNpdGVcIiwgXCJjb2RlXCIsIFwiY29sXCIsIFwiY29sZ3JvdXBcIiwgXCJjb21tYW5kXCIsIFwiZGF0YWdyaWRcIiwgXCJkYXRhbGlzdFwiLCBcImRkXCIsXG5cdFwiZGVsXCIsIFwiZGV0YWlsc1wiLCBcImRmblwiLCBcImRpYWxvZ1wiLCBcImRpclwiLCBcImRpdlwiLCBcImRsXCIsIFwiZHRcIiwgXCJlbVwiLCBcImVtYmVkXCIsIFwiZXZlbnRzb3VyY2VcIiwgXCJmaWVsZHNldFwiLFxuXHRcImZpZ2NhcHRpb25cIiwgXCJmaWd1cmVcIiwgXCJmb250XCIsIFwiZm9vdGVyXCIsIFwiZm9ybVwiLCBcImZyYW1lXCIsIFwiZnJhbWVzZXRcIiwgXCJoMT4gdG8gPGg2XCIsIFwiaGVhZFwiLCBcImhlYWRlclwiLFxuXHRcImhncm91cFwiLCBcImhyXCIsIFwiaHRtbFwiLCBcImlcIiwgXCJpZnJhbWVcIiwgXCJpbWdcIiwgXCJpbnB1dFwiLCBcImluc1wiLCBcImlzaW5kZXhcIiwgXCJrYmRcIiwgXCJrZXlnZW5cIiwgXCJsYWJlbFwiLFxuXHRcImxlZ2VuZFwiLCBcImxpXCIsIFwibGlua1wiLCBcIm1hcFwiLCBcIm1hcmtcIiwgXCJtZW51XCIsIFwibWV0YVwiLCBcIm1ldGVyXCIsIFwibmF2XCIsIFwibm9mcmFtZXNcIiwgXCJub3NjcmlwdFwiLFxuXHRcIm9iamVjdFwiLCBcIm9sXCIsIFwib3B0Z3JvdXBcIiwgXCJvcHRpb25cIiwgXCJvdXRwdXRcIiwgXCJwXCIsIFwicGFyYW1cIiwgXCJwcmVcIiwgXCJwcm9ncmVzc1wiLCBcInFcIiwgXCJycFwiLCBcInJ0XCIsXG5cdFwicnVieVwiLCBcInNcIiwgXCJzYW1wXCIsIFwic2NyaXB0XCIsIFwic2VjdGlvblwiLCBcInNlbGVjdFwiLCBcInNtYWxsXCIsIFwic291cmNlXCIsIFwic3BhblwiLCBcInN0cmlrZVwiLCBcInN0cm9uZ1wiLFxuXHRcInN0eWxlXCIsIFwic3ViXCIsIFwic3VwXCIsIFwidGFibGVcIiwgXCJ0Ym9keVwiLCBcInRkXCIsIFwidGV4dGFyZWFcIiwgXCJ0Zm9vdFwiLCBcInRoXCIsIFwidGhlYWRcIiwgXCJ0aW1lXCIsIFwidGl0bGVcIixcblx0XCJ0clwiLCBcInRyYWNrXCIsIFwidHRcIiwgXCJ1XCIsIFwidWxcIiwgXCJ2YXJcIiwgXCJ2aWRlb1wiLCBcIndiclwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQobmFtZSkge1xuXHRyZXR1cm4gIUhUTUxUYWdzLmluY2x1ZGVzKG5hbWUpO1xufVxuIiwiaW1wb3J0IHsgcGFyc2UgfSBmcm9tICdAaGF3YS9wYXJzZXInO1xuaW1wb3J0IHsgY29tcGlsZSB9IGZyb20gJ0BoYXdhL2NvbXBpbGVyJztcblxuXG5cblxuXG5cbmZ1bmN0aW9uIHRlc3QoKSB7XG5cblx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQxLmlubmVySFRNTCA9IFwiPGRpdj5zdGFydDwvZGl2PjwhLS0tLT5lbmRcIjtcblxuXHRsZXQgX3RwbCQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuXHRfdHBsJDIuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PmFzZGFkPCEtLS0tPmFzZGFzZFwiO1xuXG5cdGxldCBfdHBsJDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkMy5pbm5lckhUTUwgPSBcIjxkaXY+aWZmMjwvZGl2PlwiO1xuXG5cdGxldCBfdHBsJDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7XG5cdF90cGwkNC5pbm5lckhUTUwgPSBcIjE8IS0tLS0+MjwhLS0tLT4zXCI7XG5cblx0bGV0IF90cGwkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcblx0X3RwbCQ1LmlubmVySFRNTCA9IFwiYXNkXCI7XG5cblx0ZnVuY3Rpb24gZ2V0Tm9kZSh0ZW1wbGF0ZSwgbm9kZSwgcmVuZGVyKVxuXHR7XG5cdFx0aWYocmVuZGVyKSB7XG5cdFx0XHRyZXR1cm4gdGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBlYWNoKG5vZGUsIC4uLmFyZ3MpXG5cdHtcblx0XHRjb25zb2xlLmxvZyhub2RlLCBhcmdzKTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGZ1bmN0aW9uIHN0YXRlbWVudChub2RlLCAuLi5hcmdzKVxuXHR7XG5cdFx0bGV0IHJldHVybk5vZGUgPSBmYWxzZTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkgKz0gMikge1xuXHRcdFx0aWYoYXJnc1tpXSkge1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gYXJnc1tpICsgMV0obm9kZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKHJldHVybk5vZGUgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm4gbm9kZTtcblx0XHR9XG5cblx0XHRub2RlLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXG5cdFx0cmV0dXJuIHJldHVybk5vZGU7XG5cdH1cblxuXHRmdW5jdGlvbiBtYWtlQ29tcG9uZW50KGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdGxldCByZW5kZXIgPSBub2RlID09PSBmYWxzZTtcblx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdGxldCBfZWwkMiA9IHJlbmRlciA/IF9lbCQxLmZpcnN0Q2hpbGQgOiBfZWwkMTtcblxuXHRcdGxldCBfZWwkMyA9IF9lbCQyLm5leHRTaWJsaW5nO1xuXG5cdFx0bGV0IF9lbCQyNSA9IHN0YXRlbWVudChfZWwkMywgMSwgbm9kZSA9PiB7XG5cdFx0XHRsZXQgX2VsJDQgPSBnZXROb2RlKF90cGwkMiwgbm9kZSwgcmVuZGVyKTtcblxuXHRcdFx0bGV0IF9lbCQ1ID0gcmVuZGVyID8gX2VsJDQuZmlyc3RDaGlsZCA6IF9lbCQ0O1xuXG5cdFx0XHRsZXQgX2VsJDYgPSBfZWwkNS5uZXh0U2libGluZztcblx0XHRcdGxldCBfZWwkNyA9IF9lbCQ2Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRsZXQgX2VsJDExID0gc3RhdGVtZW50KF9lbCQ3LCAyLCBub2RlID0+IHtcblx0XHRcdFx0bGV0IF9lbCQ4ID0gZ2V0Tm9kZShfdHBsJDMsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdFx0bGV0IF9lbCQ5ID0gcmVuZGVyID8gX2VsJDguZmlyc3RDaGlsZCA6IF9lbCQ4O1xuXG5cdFx0XHRcdGxldCBfZWwkMTAgPSBfZWwkOS5uZXh0U2libGluZztcblx0XHRcdFx0cmV0dXJuIHJlbmRlciA/IF9lbCQ4IDogX2VsJDEwO1xuXHRcdFx0fSk7XG5cblx0XHRcdGxldCBfZWwkMTIgPSBfZWwkMTEubmV4dFNpYmxpbmc7XG5cdFx0XHRyZXR1cm4gcmVuZGVyID8gX2VsJDQgOiBfZWwkMTI7XG5cdFx0fSwgdGVzdCwgbm9kZSA9PiB7XG5cdFx0XHRsZXQgX2VsJDEzID0gZ2V0Tm9kZShfdHBsJDQsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkMTQgPSByZW5kZXIgPyBfZWwkMTMuZmlyc3RDaGlsZCA6IF9lbCQxMztcblxuXHRcdFx0bGV0IF9lbCQxNSA9IF9lbCQxNC5uZXh0U2libGluZztcblxuXHRcdFx0bGV0IF9lbCQxNiA9IGdldENvbXBvbmVudChcIm5hdGl2XCIsIF9lbCQxNSwgcmVuZGVyKTtcblxuXHRcdFx0bWFrZUF0dHJzKF9lbCQxNiwgcmVuZGVyLCB7XG5cdFx0XHRcdFwiZGF0YS1wXCI6IFwiMVwiXG5cdFx0XHR9KTtcblx0XHRcdGxldCBfZWwkMTcgPSBfZWwkMTYubmV4dFNpYmxpbmc7XG5cdFx0XHRsZXQgX2VsJDE4ID0gX2VsJDE3Lm5leHRTaWJsaW5nO1xuXG5cdFx0XHRsZXQgX2VsJDIwID0gZWFjaChfZWwkMTgsIDEsICgpID0+IHtcblx0XHRcdFx0bGV0IF9lbCQxOSA9IF9lbCQxOC5uZXh0U2libGluZztcblx0XHRcdH0sICgpID0+IHt9KTtcblxuXHRcdFx0bGV0IF9lbCQyMSA9IF9lbCQyMC5uZXh0U2libGluZztcblx0XHRcdHJldHVybiByZW5kZXIgPyBfZWwkMTMgOiBfZWwkMjE7XG5cdFx0fSwgdHJ1ZSwgbm9kZSA9PiB7XG5cdFx0XHRsZXQgX2VsJDIyID0gZ2V0Tm9kZShfdHBsJDUsIG5vZGUsIHJlbmRlcik7XG5cblx0XHRcdGxldCBfZWwkMjMgPSByZW5kZXIgPyBfZWwkMjIuZmlyc3RDaGlsZCA6IF9lbCQyMjtcblxuXHRcdFx0bGV0IF9lbCQyNCA9IF9lbCQyMy5uZXh0U2libGluZztcblx0XHRcdHJldHVybiByZW5kZXIgPyBfZWwkMjIgOiBfZWwkMjQ7XG5cdFx0fSk7XG5cblx0XHRsZXQgX2VsJDI2ID0gX2VsJDI1Lm5leHRTaWJsaW5nO1xuXHRcdHJldHVybiByZW5kZXIgPyBfZWwkMSA6IF9lbCQyNjtcblx0fVxuXG5cdGxldCBkID0gbWFrZUNvbXBvbmVudCgpO1xuXG5cdGxldCBsYXlvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGF5b3V0Jyk7XG5cdGxheW91dC5pbm5lckhUTUwgPSAnJztcblxuXHRsYXlvdXQuYXBwZW5kQ2hpbGQoZCk7XG59XG5cbnRlc3QoKTtcblxuZnVuY3Rpb24gZ2V0dCgpIHtcblxuXHRsZXQgaHRtbCA9XG5cdFx0YFxuXHQ8ZGl2PnN0YXJ0PC9kaXY+XG5cdEBpZigxKVxuXHQ8ZGl2PjwvZGl2PlxuXHRhc2RhZFxuXHRcdEBpZigyKVxuXHRcdDxkaXY+aWZmMjwvZGl2PlxuXHRcdEBlbmRpZlxuXHRhc2Rhc2Rcblx0QGVsc2VpZih0ZXN0KVxuXHQxXG5cdFx0PE5hdGl2IGRhdGEtcD1cIjFcIj5hc2Q8L05hdGl2PlxuXHRcdDJcblx0XHRAZWFjaCgxKVxuXHRcdGFzZGFzZFxuXHRcdDxzbG90PmRlZmF1bHQgdGV4dCBmb3Igc2xvdDwvc2xvdD5cblx0XHRAZW5kZWFjaFxuXHRcdDNcblx0XHRAZWxzZSBcblx0XHRhc2Rcblx0QGVuZGlmXG5cdGVuZFxuXHRgO1xuXG5cdGxldCB0ZW1wbGF0ZSA9IHBhcnNlKGh0bWwpO1xuXG5cdGNvbXBpbGUodGVtcGxhdGUpO1xuXHRjb25zb2xlLmxvZyhodG1sKTtcbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=