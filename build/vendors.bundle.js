(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors"],{

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

function analyse(script) {
  var source = '';

  if (script) {
    source = script.source;
  }

  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  var data = (0, _types.context)(ast);
  var deps = (0, _types.dependencies)(ast, data.observables);
  console.log(deps);
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

  function canCreateContext(path, parentType) {
    if (isSubContext() || isVariableDeclaration) {
      return false;
    }

    return path.parent.type === parentType;
  }

  (0, _traverse.default)(ast, {
    VariableDeclaration: {
      enter: function enter(path) {
        isVariableDeclaration = true;
      },
      exit: function exit(path) {
        isVariableDeclaration = false;
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

        if (value.type === 'CallExpression' && ['o', 'p'].includes(value.callee.name)) {
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
        if (canCreateContext(path, 'VariableDeclarator')) {
          createContext(path.container.id.name);
        }
      },
      exit: function exit(path) {
        if (canCreateContext(path, 'VariableDeclarator')) {
          closeContext();
        }
      }
    },
    FunctionDeclaration: {
      enter: function enter(path) {
        if (canCreateContext(path, 'Program')) {
          data.methods.push(path.node.id.name);
          createContext(path.node.id.name);
        }
      },
      exit: function exit(path) {
        if (canCreateContext(path, 'Program')) {
          closeContext();
        }
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

        if (path.container.type === 'MemberExpression' && path.key === 'object') {
          if (path.node.name === '$props') {
            context.deps.push(path.container.object.name + "." + path.container.property.name);
          }
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
        if (path.parent.type === 'VariableDeclarator') {
          createContext(path.container.id.name);
        }
      },
      exit: function exit(path) {
        if (path.parent.type === 'VariableDeclarator') {
          closeContext();
        }
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

var _script = __webpack_require__(/*! ./script */ "./packages/compiler/dist/script/index.js");

var _components = __webpack_require__(/*! ./components */ "./packages/compiler/dist/components/index.js");

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


function compile(loaderOptions, blocks) {
  var VariableCounter = 0;
  var contextStack = [];
  /**
   * Template management
   * @type {Set}
   */

  var Templates = new Set();
  var codeAnalyse = (0, _analyser.analyse)(blocks.script);
  var dynamicExpressions = (0, _dynamic.default)(codeAnalyse);

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
    templates: getTemplates(),
    script: (0, _script.script)(codeAnalyse, blocks.script),
    styles: blocks.style,
    components: (0, _components.components)(entity)(loaderOptions.path, loaderOptions.delimeter)
  };
}

/***/ }),

/***/ "./packages/compiler/dist/components/index.js":
/*!****************************************************!*\
  !*** ./packages/compiler/dist/components/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = components;

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

function handle(components, entity) {
  if (entity.type === 'component') {
    components.push(entity);
  }

  if (entity.children) {
    entity.children.map(function (item) {
      return handle(components, item);
    });
  }
}

function components(entity) {
  var components = [];
  handle(components, {
    type: null,
    children: [entity]
  });
  return function (path, delimeter) {
    var imports = new Set();

    for (var _iterator = _createForOfIteratorHelperLoose(components), _step; !(_step = _iterator()).done;) {
      var component = _step.value;
      imports.add(component.getImport(path, delimeter));
    }

    return Array.from(imports).join('\n');
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

function attrs(attributes, point, context, options, returnObject) {
  if (returnObject === void 0) {
    returnObject = false;
  }

  if (attributes === undefined) {
    return;
  }

  var props = [];

  for (var name in attributes) {
    var value = (0, _value.makeValue)(this.context, attributes[name], _value.makeComputed);
    props.push(new _types.objectProperty((0, _types.stringLiteral)(name), value));
  }

  if (props.length === 0) {
    return;
  }

  if (returnObject) {
    return (0, _types.objectExpression)(props);
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

var _setAttr = __webpack_require__(/*! ./setAttr */ "./packages/compiler/dist/dynamic/setAttr.js");

var _ref = __webpack_require__(/*! ./ref */ "./packages/compiler/dist/dynamic/ref.js"); // export { attrs, events, props }


function dynamic(context) {
  return {
    attrs: _attrs.attrs.bind(context),
    events: _events.events.bind(context),
    props: _props.props.bind(context),
    string: _string.string.bind(context),
    expression: _expression.expression.bind(context),
    arrowFunction: _arrowFunction.arrowFunction.bind(context),
    setAttr: _setAttr.setAttr.bind(context),
    ref: _ref.ref.bind(context)
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

/***/ "./packages/compiler/dist/dynamic/ref.js":
/*!***********************************************!*\
  !*** ./packages/compiler/dist/dynamic/ref.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ref = ref;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _value = __webpack_require__(/*! ./value */ "./packages/compiler/dist/dynamic/value.js");

function ref(entity, point, context, options) {
  if (entity.option.ref === undefined) {
    return;
  }

  var expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('_setRef$'), [(0, _types.identifier)('$refs'), point.name, (0, _types.stringLiteral)(entity.option.ref)]));
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
      value = _ref.value,
      Type = _ref.Type;

  if ((Type.option === undefined || Type.option[name] === undefined) && value === undefined) {
    return;
  }

  if (value === undefined) {
    value = Type.option[name];
  }

  var result = (0, _value.makeValue)(this.context, value, _value.makeSubscribe);
  var expression = new _types.expressionStatement(new _types.callExpression(new _types.memberExpression(point, (0, _types.identifier)('setAttribute')), [(0, _types.stringLiteral)("data-" + name), result.expr])); // if(result.shouldWrap) {

  expression = new _types.expressionStatement(new _types.callExpression((0, _types.identifier)('subscribe'), [result.deps, new _types.arrowFunctionExpression([], new _types.blockStatement([expression])), (0, _types.identifier)('!render')])); // }

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

  var value = entity.value.replace(/{{(.*)}}/g, '${ $1 }');
  var isExpression = value.match(/\$\{.*\}/g) !== null;

  if (!isExpression) {
    return;
  }

  var _makeValue = (0, _value.makeValue)(this.context, {
    isExpression: isExpression,
    value: "`" + value + "`"
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
          var isAlreadyCallExpression = path.container.type === 'CallExpression';

          if (isAlreadyCallExpression) {
            shouldWrap = true;
          }

          if (shouldWrap && !isAlreadyCallExpression) {
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
exports.getConfig = getConfig;
exports.default = component;

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

var _dynamic = __webpack_require__(/*! ../dynamic */ "./packages/compiler/dist/dynamic/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/compiler/dist/rules/utils.js");

var _each = __webpack_require__(/*! ./each */ "./packages/compiler/dist/rules/each.js");

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

function getConfig(entity, context, options) {
  var obj = []; // create props

  if (Object.keys(entity.option.props).length > 0) {
    var $props = options.dynamic.attrs(entity.option.props, options.getLastVariableId(), context, options, true);
    obj.push((0, _types.objectProperty)((0, _types.identifier)('$props'), $props));
  } // create key


  if (entity.option.key) {
    obj.push((0, _types.objectProperty)((0, _types.identifier)('$key'), (0, _types.identifier)(_each.CUR_EACH_LOOP_KEY)));
  } // create slots


  if (entity.children.length > 0) {
    var slots = [];

    var _loop = function _loop() {
      var slot = _step.value;
      var body = [];
      var template = options.createVariable(body, function (n, l) {
        var index = options.createTemplate(slot);
        return new _types.callExpression((0, _types.identifier)('getNode'), [index, (0, _types.identifier)('node'), (0, _types.identifier)('render')]);
      });
      body.push(template.value);
      var lastChild = (0, _utils.children)(slot, body, options, _utils.getFirstTemplateNode);
      var returnPointer = new _types.returnStatement(new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild));
      body.push(returnPointer);
      slots.push((0, _types.objectProperty)((0, _types.stringLiteral)(slot.attrs.slot), (0, _types.arrowFunctionExpression)([], (0, _types.blockStatement)(body))));
    };

    for (var _iterator = _createForOfIteratorHelperLoose(entity.children), _step; !(_step = _iterator()).done;) {
      _loop();
    }

    obj.push((0, _types.objectProperty)((0, _types.identifier)('$slots'), (0, _types.objectExpression)(slots))); // body.push(template.value);
  }

  return (0, _types.objectExpression)(obj);
} // TO DO NEXT NODES


function component(context, options) {
  var _this = this;

  var init = options.createVariable(context, function (n, l) {
    return new _types.callExpression((0, _types.identifier)('loadComponent'), [(0, _types.identifier)(_this.getName()), l, (0, _types.identifier)('render'), getConfig(_this, context, options)]);
  });
  context.push(init.value);
  var hooks = options.createVariable(context, function (n, l) {
    return (0, _types.memberExpression)(init.name, (0, _types.identifier)('$hooks'));
  });
  context.push(hooks.value);
  var node = options.createVariable(context, function (n, l) {
    return (0, _types.memberExpression)(init.name, (0, _types.identifier)('$node'));
  });
  context.push(node.value); // options.dynamic.setAttr({
  // 	Type: this,
  // 	name: 'key',
  // }, init, context, options);
  // console.log(init, context)
  // options.dynamic.attrs(this.option.attrs, init, context, options);

  options.dynamic.ref(this, node, context, options);
  options.dynamic.attrs(this.option.attributes, node, context, options);
  options.dynamic.events(this, node, context, options); // let template = options.createVariable(context, (n, l) => {
  // 	return new memberExpression(
  // 		l, id('nextSibling')
  // 	);
  // });
  // context.push(template.value);
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
exports.CUR_EACH_LOOP_KEY = void 0;

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

var CUR_EACH_LOOP_KEY = '_eachNodeKey$';
exports.CUR_EACH_LOOP_KEY = CUR_EACH_LOOP_KEY;

function parseEachCondition(entity) {
  var statement = entity.value.matchAll( /*#__PURE__*/_wrapRegExp(/([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?(,[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9A-z]+)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?)?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?in[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF](.*)/g, {
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
  params.push(new _types.arrowFunctionExpression([(0, _types.identifier)('node'), (0, _types.identifier)('render'), (0, _types.identifier)(CUR_EACH_LOOP_KEY)].concat(loop.args.map(function (item) {
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
  // register node reference 
  options.dynamic.ref(this, options.getLastVariableId(), context, options); // set data-key for node

  options.dynamic.setAttr({
    Type: this,
    name: 'key'
  }, options.getLastVariableId(), context, options); // add attrs for nodes

  options.dynamic.attrs(this.option.attributes, options.getLastVariableId(), context, options); // add events for node

  options.dynamic.events(this, options.getLastVariableId(), context, options); // handle children of node

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
  var _this = this; // init template


  var template = options.createVariable(context, function (n, l) {
    var index = options.createTemplate(_this);
    return new _types.callExpression((0, _types.identifier)('getNode'), [index, options.getLastVariableId(), (0, _types.identifier)('render')]);
  });
  context.push(template.value);
  var lastChild = (0, _utils.children)(this, context, options, _utils.getFirstTemplateNode);
  var returnedNode = new _types.conditionalExpression((0, _types.identifier)('render'), template.name, lastChild);

  if (this.isRoot()) {
    context.push((0, _types.returnStatement)((0, _types.objectExpression)([(0, _types.objectProperty)((0, _types.identifier)('$node'), returnedNode), (0, _types.objectProperty)((0, _types.identifier)('$hooks'), (0, _types.identifier)('_hooks$'))])));
  } else {
    context.push((0, _types.returnStatement)(returnedNode));
  }
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
  var params = [(0, _types.identifier)('$slots'), (0, _types.stringLiteral)(this.name), options.getLastVariableId(), (0, _types.identifier)('render')];
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

function getFirstTemplateNode(entity, context, options) {
  var pointer = options.createVariable(context, function (n, l) {
    return new _types.conditionalExpression((0, _types.identifier)('render'), new _types.memberExpression(l, (0, _types.identifier)('firstChild')), l);
  });
  context.push(pointer.value); // console.log(entity, entity.parent.isRoot())

  if (entity.parent.isRoot()) {
    // key for loops
    context.push((0, _types.expressionStatement)((0, _types.callExpression)((0, _types.identifier)('_setKey$'), [(0, _types.identifier)('$key'), pointer.name, (0, _types.identifier)('render')])));
  }
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

  if (entity.skipFirstChildInit()) {
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
    customDefiner(entity, context, options);
  } else {
    if (!entity.skipInit()) {
      nextNode(context, options, isFirst ? 'firstChild' : 'nextSibling');
    }
  }

  entity.handle(context, options);
}

/***/ }),

/***/ "./packages/compiler/dist/script/computeds.js":
/*!****************************************************!*\
  !*** ./packages/compiler/dist/script/computeds.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computeds = computeds;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function computeds(ast, analyse) {
  var replaceVariableWith = null;
  (0, _traverse.default)(ast, {
    ArrowFunctionExpression: {
      enter: function enter(path) {
        if (path.container.type === 'VariableDeclarator') {
          var name = path.container.id.name;
          path.replaceWith(new _types.callExpression((0, _types.identifier)('computed'), [(0, _types.arrayExpression)(analyse.deps[name].map(function (item) {
            return (0, _types.identifier)(item);
          })), path.node]));
        }
      },
      exit: function exit(path) {}
    }
  });
  return ast;
}

/***/ }),

/***/ "./packages/compiler/dist/script/hooks.js":
/*!************************************************!*\
  !*** ./packages/compiler/dist/script/hooks.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hooks = hooks;
exports.HOOK_NAMES = void 0;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

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

var HOOK_NAMES = ['mounted', 'unmounted'];
exports.HOOK_NAMES = HOOK_NAMES;

function hooks(ast, _ref) {
  var context = _ref.context; // _hooks$

  var hooks = context.methods.filter(function (name) {
    return HOOK_NAMES.includes(name);
  });
  var hooksLinks = [];

  for (var _iterator = _createForOfIteratorHelperLoose(hooks), _step; !(_step = _iterator()).done;) {
    var name = _step.value;
    hooksLinks.push((0, _types.objectProperty)((0, _types.identifier)(name), (0, _types.identifier)(name)));
  }

  var hooksDeclaration = (0, _types.variableDeclaration)('let', [(0, _types.variableDeclarator)((0, _types.identifier)('_hooks$'), (0, _types.objectExpression)(hooksLinks))]);
  ast.program.body.push(hooksDeclaration);
  return ast;
}

/***/ }),

/***/ "./packages/compiler/dist/script/index.js":
/*!************************************************!*\
  !*** ./packages/compiler/dist/script/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.script = script;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var parser = _interopRequireWildcard(__webpack_require__(/*! @babel/parser */ "./node_modules/@babel/parser/lib/index.js"));

var _generator = _interopRequireDefault(__webpack_require__(/*! @babel/generator */ "./node_modules/@babel/generator/lib/index.js"));

var _props = __webpack_require__(/*! ./props */ "./packages/compiler/dist/script/props.js");

var _observables = __webpack_require__(/*! ./observables */ "./packages/compiler/dist/script/observables.js");

var _computeds = __webpack_require__(/*! ./computeds */ "./packages/compiler/dist/script/computeds.js");

var _hooks = __webpack_require__(/*! ./hooks */ "./packages/compiler/dist/script/hooks.js");

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function script(analyse, script) {
  var source = '';

  if (script) {
    source = script.source;
  }

  var ast = parser.parse(source, {
    sourceType: "unambiguous",
    strictMode: false
  });
  (0, _props.props)(ast);
  (0, _observables.observables)(ast);
  (0, _computeds.computeds)(ast, analyse);
  (0, _hooks.hooks)(ast, analyse);
  var code = (0, _generator.default)(ast, {
    retainLines: false,
    compact: false,
    minified: false,
    concise: false,
    quotes: "double"
  });
  return code.code;
}

/***/ }),

/***/ "./packages/compiler/dist/script/observables.js":
/*!******************************************************!*\
  !*** ./packages/compiler/dist/script/observables.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.observables = observables;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function observables(ast) {
  (0, _traverse.default)(ast, {
    VariableDeclarator: {
      enter: function enter(path) {
        var name = path.node.id;
        var value = path.node.init;

        if (value.type === 'CallExpression' && value.callee.name === 'o') {
          value.callee.name = 'observable';
        }
      }
    }
  });
  return ast;
}

/***/ }),

/***/ "./packages/compiler/dist/script/props.js":
/*!************************************************!*\
  !*** ./packages/compiler/dist/script/props.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.props = props;

var _traverse = _interopRequireDefault(__webpack_require__(/*! @babel/traverse */ "./node_modules/@babel/traverse/lib/index.js"));

var _types = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function props(ast) {
  var replaceVariableWith = null;
  (0, _traverse.default)(ast, {
    VariableDeclaration: {
      exit: function exit(path) {
        if (replaceVariableWith !== null) {
          path.replaceWith(replaceVariableWith);
        }
      }
    },
    VariableDeclarator: {
      enter: function enter(path) {
        replaceVariableWith = null;
        var name = path.node.id;
        var value = path.node.init;

        if (value.type === 'CallExpression' && value.callee.name === 'p') {
          var propVariable = (0, _types.memberExpression)((0, _types.identifier)('$props'), name);
          replaceVariableWith = (0, _types.variableDeclaration)('let', [(0, _types.variableDeclarator)(name, new _types.callExpression((0, _types.identifier)('_getProp$'), [(0, _types.identifier)('$props'), (0, _types.stringLiteral)(name.name), value.arguments[0]]))]);
        }
      }
    }
  });
  return ast;
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
    var lastNode = null; // return;

    for (var key in _items) {
      var item = _items[key];
      var itemKey = keyExpr(item, key);
      var lastHydratedNode = null;

      if (node && node.getAttribute) {
        if (node.getAttribute('data-key') == itemKey) {
          lastHydratedNode = expr(node, false, itemKey, item, key);
          node = lastHydratedNode.nextSibling; // console.warn('lastHydratedNode', lastHydratedNode, node)

          lastNode = lastHydratedNode;
        }
      }

      if (lastHydratedNode && lastHydratedNode.hasAttribute) {
        var hydratedNodes = [];

        if (!lastHydratedNode.hasAttribute('data-key')) {
          var startNodeSearch = lastHydratedNode;

          while (startNodeSearch) {
            hydratedNodes.unshift(startNodeSearch);

            if (startNodeSearch.hasAttribute('data-key')) {
              break;
            }

            startNodeSearch = startNodeSearch.previousSibling;
          }
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
    } // console.log(defaultA);


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
        n = el ? el : expr(null, true, nodeKey, item, key);
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

    if (ob.$o !== undefined) {
      ob._observers.add(update);
    }
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
  if (prop === undefined) {
    return false;
  }

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

var isDomAttr = function isDomAttr(name, isComponent) {
  return !isComponent && isAttr(name) && !isRootAttr(name) || name.match(/^data\-/g);
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

function attrs(obj, isComponent) {
  if (isComponent === void 0) {
    isComponent = false;
  }

  var result = {
    events: {},
    props: {},
    attributes: {},
    staticAttrs: {}
  };

  for (var name in obj) {
    var value = obj[name];

    if (isDomAttr(name, isComponent)) {
      result.staticAttrs[name] = value;
    } else if (name.match(/^@/g)) {
      name = name.replace(/^@/g, '');
      result.events[name] = makeValue(value, true);
    } else if (name.match(/^\:/g)) {
      name = name.replace(/^\:/g, '');
      value = makeValue(value, true);

      if (isRootAttr(name)) {
        result[name] = value;
      } else if (isDomAttr(name, isComponent)) {
        result.attributes[name] = value;
      } else {
        result.props[name] = value;
      }
    } else {
      if (isRootAttr(name)) {
        result[name] = value;
      } else {
        result.props[name] = makeValue(value);
      } // console.error(`Attr ${name} doesnt registered. Cant understand type.`)

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
exports.parseAttrs = parseAttrs;
exports.parseBlocks = parseBlocks;
exports.parse = parse;

var _prepare = __webpack_require__(/*! ./prepare */ "./packages/parser/dist/prepare.js");

var _utils = __webpack_require__(/*! ./utils */ "./packages/parser/dist/utils.js");

var _types = __webpack_require__(/*! ./types */ "./packages/parser/dist/types/index.js");

var _htmlparser = __webpack_require__(/*! htmlparser2 */ "./node_modules/htmlparser2/lib/index.js");

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

function parseAttrs(str) {
  var attrs = {};
  str.trim().replace(/([^\s]*)=["'](.*?)["']|([\w\-]+)/g, function (src2, name, value) {
    if (!src2) return;
    name = name || src2;
    value = value;
    attrs[name] = value;
  });
  return attrs;
}

function parseBlocks(blocks, html) {
  var res = {};

  for (var key in blocks) {
    res[key] = null;
    var regexp = new RegExp("<" + key + "(.*)>((.|\\s)*)<\\/" + key + ">", 'g');
    var matches = regexp.exec(html);

    if (matches) {
      res[key] = {
        options: _extends(blocks[key], parseAttrs(matches[1])),
        source: matches[2]
      };
    }
  }

  return res;
}

function parse(html) {
  // get additional blocks e.g. script, style, doc
  var blocks = parseBlocks({
    script: {},
    style: {
      lang: 'css'
    }
  }, html); // clean up html and replace expression with tag-expression

  html = (0, _prepare.prepare)(blocks, html); // Parse TAGs

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

var _types = __webpack_require__(/*! ../types */ "./packages/parser/dist/types/index.js");

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
    _this.option = (0, _attrs.attrs)(attrs, true);
    _this.children = [];
    _this.type = 'component';
    return _this;
  }

  var _proto = Component.prototype;

  _proto.hasAttributes = function hasAttributes() {
    return Object.keys(this.option.attributes).length > 0;
  };

  _proto.getName = function getName(name) {
    if (name === void 0) {
      name = null;
    }

    if (name === null) {
      name = this.name;
    }

    return "_component_" + name.replace(/[^0-9a-z]/gi, '') + "$";
  };

  _proto.getImport = function getImport(path, delimeter) {
    var name = this.name.replace(/[^0-9a-z]/gi, '/'); // console.log(this.name, name)

    return "import " + this.getName() + " from \"" + path + "/" + name + ".hawa\";";
  };

  _proto.addChild = function addChild(child) {
    var bind = this;

    if (!this.isSlot(child)) {
      bind = this.getDefaultSlot();
    }

    child.parent = bind;
    bind.children.push(child);
  };

  _proto.isSlot = function isSlot(entity, name) {
    if (name === void 0) {
      name = null;
    }

    return entity.type === 'node' && entity.tag === 'template' && entity.attrs.slot;
  };

  _proto.getDefaultSlot = function getDefaultSlot() {
    var defaultSlot = false;

    for (var _iterator = _createForOfIteratorHelperLoose(this.children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;

      if (this.isSlot(child)) {
        if (child.attrs.slot === 'default') {
          defaultSlot = child;
          break;
        }
      }
    }

    if (!defaultSlot) {
      defaultSlot = new _types.Node('template', {
        slot: 'default'
      });
      defaultSlot.parent = this;
      this.children.push(defaultSlot);
    }

    return defaultSlot;
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
    _this.attrs = attrs;
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

  _proto.isRoot = function isRoot() {
    return this.parent === null;
  };

  _proto.skipFirstChildInit = function skipFirstChildInit() {
    if (this.isTemplate()) {
      if (this.attrs) {
        return this.attrs.slot === undefined;
      }

      return true;
    }

    return false;
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
  var result = []; // args = args.concat([]);

  if (Array.isArray(args)) {
    for (var i = 0; i < args.length; i++) {
      result = result.concat(attrArgToString(args[i]));
    }
  } else if (typeof args === 'object') {
    for (var key in args) {
      if (args[key]) {
        result.push(key);
      }
    }
  } else {
    result.push(args);
  }

  return result;
}

function makeClass(node, value, render) {
  var lastClassAdopted = [];
  (0, _observable.watch)(value, function (v) {
    var tmp = node.classList;
    var toSet = Array.from(new Set(attrArgToString(v)));
    var toRemove = lastClassAdopted.filter(function (x) {
      return !toSet.includes(x);
    });

    for (var _i = 0, _toSet = toSet; _i < _toSet.length; _i++) {
      var name = _toSet[_i];
      node.classList.add(name);
    }

    for (var _iterator = _createForOfIteratorHelperLoose(toRemove), _step; !(_step = _iterator()).done;) {
      var _name = _step.value;
      node.classList.remove(_name);
    }

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
Object.defineProperty(exports, "getProp", {
  enumerable: true,
  get: function get() {
    return _templates.getProp;
  }
});
Object.defineProperty(exports, "setRef", {
  enumerable: true,
  get: function get() {
    return _templates.setRef;
  }
});
Object.defineProperty(exports, "setKey", {
  enumerable: true,
  get: function get() {
    return _templates.setKey;
  }
});
Object.defineProperty(exports, "statement", {
  enumerable: true,
  get: function get() {
    return _statement.statement;
  }
});
Object.defineProperty(exports, "loadComponent", {
  enumerable: true,
  get: function get() {
    return _load.loadComponent;
  }
});

var _attrs = __webpack_require__(/*! ./attrs */ "./packages/render/dist/attrs.js");

var _events = __webpack_require__(/*! ./events */ "./packages/render/dist/events.js");

var _slot = __webpack_require__(/*! ./slot */ "./packages/render/dist/slot.js");

var _templates = __webpack_require__(/*! ./templates */ "./packages/render/dist/templates.js");

var _statement = __webpack_require__(/*! ./statement */ "./packages/render/dist/statement.js");

var _load = __webpack_require__(/*! ./load */ "./packages/render/dist/load.js");

/***/ }),

/***/ "./packages/render/dist/load.js":
/*!**************************************!*\
  !*** ./packages/render/dist/load.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadComponent = loadComponent;

function loadComponent(component, node, render, options) {
  if (options === void 0) {
    options = {};
  }

  var instance = new component(options, render ? false : node);
  var componentNode = instance.$node;

  if (render) {
    var mark = componentNode.lastChild;
    node.replaceWith(componentNode);
    componentNode = mark;
  }

  return {
    $node: componentNode,
    $hooks: instance.$hooks
  };
}

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

function slot($slots, name, node, render, callback) {
  if ($slots[name] === undefined) {
    callback(node);
    return;
  }

  var slotNodes = $slots[name](); // console.log(node,slotNodes, render)

  if (render) {
    node.innerHTML = '';
    node.appendChild(slotNodes);
  }

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
exports.setRef = setRef;
exports.setKey = setKey;
exports.getProp = getProp;
exports.parseContext = parseContext;

var _observable = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");

function getNode(template, node, render) {
  if (render) {
    return template.content.cloneNode(true);
  }

  return node;
}

function setRef($refs, node, name) {
  if ($refs[name] === undefined) {
    $refs[name] = node;
  } else {
    if (Array.isArray($refs[name])) {
      $refs[name].push(node);
    } else {
      $refs[name] = [$refs[name]].concat(node);
    }
  }
}

function setKey($key, node, render) {
  if ($key === null) {
    return;
  }

  (0, _observable.watch)($key, function () {
    node.setAttribute('data-key', $key);
  }, render);
}

function getProp($props, name, seed) {
  if ($props[name] === undefined) {
    return function () {
      return seed;
    };
  }

  if ((0, _observable.isObservable)($props[name])) {
    return $props[name];
  } else {
    return function () {
      return $props[name];
    };
  } // return 

}

function parseContext(context) {
  if (context === undefined || context === null) {
    context = {};
  }

  var $props = context.$props || {};
  var $slots = context.$slots || {};
  var $key = context.$key === undefined ? null : context.$key;
  return {
    $props: $props,
    $slots: $slots,
    $key: $key,
    $refs: {}
  };
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vc3JjL2FuYWx5c2UuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9kZXBlbmRlbmNpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2NvbXBpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hcnJvd0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9leHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9keW5hbWljL3JlZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvc2V0QXR0ci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL2R5bmFtaWMvc3RyaW5nLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvZHluYW1pYy92YWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL2VhY2guanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy9wcm9ncmFtLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvcnVsZXMvc2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3J1bGVzL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9ydWxlcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3NjcmlwdC9jb21wdXRlZHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaG9va3MuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvb2JzZXJ2YWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy9zY3JpcHQvcHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9kaWZmLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9hdHRycy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3BhcnNlLmpzIiwid2VicGFjazovLy8uLi9zcmMvcHJlcGFyZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL0V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9Ob2RlLmpzIiwid2VicGFjazovLy8uLi8uLi9zcmMvdHlwZXMvU2xvdC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vc3JjL3R5cGVzL1RleHQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3NyYy90eXBlcy9UeXBlLmpzIiwid2VicGFjazovLy8uLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9zdGF0ZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy90ZW1wbGF0ZXMuanMiXSwibmFtZXMiOlsic291cmNlIiwic2NyaXB0IiwiYXN0Iiwic291cmNlVHlwZSIsInN0cmljdE1vZGUiLCJkYXRhIiwiZGVwcyIsImNvbnNvbGUiLCJjb250ZXh0Iiwib2JzZXJ2YWJsZXMiLCJ2YXJzIiwibWV0aG9kcyIsImNvbnRleHRTdGFjayIsImlzVmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiLCJpc1N1YkNvbnRleHQiLCJwYXRoIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImVudGVyIiwiZXhpdCIsIlZhcmlhYmxlRGVjbGFyYXRvciIsImlkIiwidmFsdWUiLCJnZXRDb250ZXh0IiwiQXJyb3dGdW5jdGlvbkV4cHJlc3Npb24iLCJjYW5DcmVhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNsb3NlQ29udGV4dCIsIkZ1bmN0aW9uRGVjbGFyYXRpb24iLCJJZGVudGlmaWVyIiwiVmFyaWFibGVDb3VudGVyIiwiVGVtcGxhdGVzIiwiY29kZUFuYWx5c2UiLCJibG9ja3MiLCJkeW5hbWljRXhwcmVzc2lvbnMiLCJ0ZW1wbGF0ZSIsInByb2dyYW0iLCJjb2RlIiwiaSIsInRwbCIsImluZGV4IiwiaW5pdCIsIkxhc3RWYXJpYWJsZUlkIiwiZ2V0TGFzdFZhcmlhYmxlSWQiLCJnZXRDdXJyZW50Q29udGV4dCIsIkFjdGlvbiIsImRlbGNhcmF0aW9uVmFsdWUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uIiwidmFyaWFibGVEZWNsYXJhdG9yIiwic2V0TGFzdFZhcmlhYmxlSWQiLCJlbnRpdHkiLCJib2R5Iiwib3B0aW9ucyIsInJlbW92ZUNvbnRleHQiLCJjcmVhdGVWYXJpYWJsZSIsImNyZWF0ZVRlbXBsYXRlIiwiZHluYW1pYyIsImhhbmRsZSIsInJldGFpbkxpbmVzIiwiY29tcGFjdCIsIm1pbmlmaWVkIiwiY29uY2lzZSIsInF1b3RlcyIsInJlbmRlciIsInRlbXBsYXRlcyIsImdldFRlbXBsYXRlcyIsInN0eWxlcyIsImNvbXBvbmVudHMiLCJsb2FkZXJPcHRpb25zIiwidHlwZSIsImNoaWxkcmVuIiwiaW1wb3J0cyIsImNvbXBvbmVudCIsIkFycmF5IiwiYXJncyIsImlzRXhwcmVzc2lvbiIsInJlc3VsdCIsIm1ha2VTdHJpbmciLCJhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbiIsImJsb2NrU3RhdGVtZW50IiwicmV0dXJuU3RhdGVtZW50IiwicmV0dXJuT2JqZWN0IiwiYXR0cmlidXRlcyIsInByb3BzIiwibWFrZUNvbXB1dGVkIiwib2JqZWN0UHJvcGVydHkiLCJleHByZXNzaW9uIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImNhbGxFeHByZXNzaW9uIiwib2JqZWN0RXhwcmVzc2lvbiIsIm1ha2VGdW5jdGlvbiIsImF0dHJzIiwiZXZlbnRzIiwic3RyaW5nIiwiYXJyb3dGdW5jdGlvbiIsInNldEF0dHIiLCJyZWYiLCJwb2ludCIsIlR5cGUiLCJtYWtlU3Vic2NyaWJlIiwibWVtYmVyRXhwcmVzc2lvbiIsImNvbnRlbnQiLCJhcnJheUV4cHJlc3Npb24iLCJhc3NpZ25tZW50RXhwcmVzc2lvbiIsIlRNUF9JREVOVElGSUVSIiwiZm4iLCJmdW5jdGlvbkV4cHJlc3Npb24iLCJzdGF0ZWZ1bENvdW50ZXIiLCJpZGVudGlmaWVyc0NvdW50ZXIiLCJzaG91bGRXcmFwIiwiaXNBbHJlYWR5Q2FsbEV4cHJlc3Npb24iLCJleHByIiwib2JqIiwiT2JqZWN0IiwiJHByb3BzIiwiQ1VSX0VBQ0hfTE9PUF9LRVkiLCJzbG90cyIsInNsb3QiLCJsYXN0Q2hpbGQiLCJnZXRGaXJzdFRlbXBsYXRlTm9kZSIsInJldHVyblBvaW50ZXIiLCJjb25kaXRpb25hbEV4cHJlc3Npb24iLCJnZXRDb25maWciLCJob29rcyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJjb25kaXRpb24iLCJtYXRjaCIsImtleSIsImZpbmRLZXkiLCJjaGlsZCIsIkV4cHJlc3Npb24iLCJwYXJhbXMiLCJsb29wIiwicGFyc2VFYWNoQ29uZGl0aW9uIiwicmV0dXJuZWROb2RlIiwiaXRlbVBhcmFtcyIsImRlcGVuZGVuY2llcyIsImJsb2NrIiwibGFzdENvbnRleHRWYXJpYWJsZUlkIiwicG9pbnRlciIsImN1c3RvbURlZmluZXIiLCJjaGlsZEhhbmRsZSIsImlzRmlyc3QiLCJuZXh0Tm9kZSIsInJlcGxhY2VWYXJpYWJsZVdpdGgiLCJIT09LX05BTUVTIiwiaG9va3NMaW5rcyIsImhvb2tzRGVjbGFyYXRpb24iLCJwcm9wVmFyaWFibGUiLCJhSWR4IiwiYklkeCIsImEiLCJrZXlFeHByIiwiYiIsImoiLCJhRWxtIiwiYkVsbSIsInBhcmVudCIsImdldCIsImN1ckVsbUluTmV3Iiwid2FudGVkRWxtSW5PbGQiLCJjbGVhbmluZyIsImRvY3VtZW50IiwiZW5kTWFyayIsImRpc3Bvc2VycyIsIm5vZGVzIiwidG9SZW1vdmUiLCJkZWZhdWx0QSIsIl9pdGVtcyIsImxhc3ROb2RlIiwiaXRlbSIsIml0ZW1LZXkiLCJsYXN0SHlkcmF0ZWROb2RlIiwiaHlkcmF0ZWROb2RlcyIsInN0YXJ0Tm9kZVNlYXJjaCIsIm4iLCJjaGlsZE5vZGVzIiwiYmluZE5vZGUiLCJ1bnN1YnNjcmliZSIsImVsIiwibm9kZUtleSIsImQiLCJkaXNwb3NlciIsIl9zdGFydE1hcmsiLCJhZGQiLCJjYXN0Tm9kZSIsImZyYWdPck5vZGUiLCJmcmFnIiwic3RhcnROb2RlIiwibm9kZVR5cGUiLCJkaWZmYWJsZSIsIm9wZXJhdGlvbiIsInJlbW92ZU5vZGVzIiwicGVyc2lzdGVudCIsImZyYWdtZW50IiwibGVuZ3RoIiwiX2ZpcnN0Q2hpbGQiLCJfbGFzdENoaWxkIiwiX3ZhbHVlT2YiLCJhcmd1bWVudHMiLCJvYnNlcnZlciIsIm9icyIsIm9iIiwidXBkYXRlIiwic2tpcCIsImxhc3RWYWx1ZSIsImRlcCIsInByb3AiLCJpc09ic2VydmFibGUiLCJzdWJzY3JpYmUiLCJpc0F0dHIiLCJpc0RvbUF0dHIiLCJpc1Jvb3RBdHRyIiwiaXNDb21wb25lbnQiLCJzdGF0aWNBdHRycyIsIm1ha2VWYWx1ZSIsInN0ciIsInJlcyIsInJlZ2V4cCIsIm1hdGNoZXMiLCJwYXJzZUF0dHJzIiwicGFyc2VCbG9ja3MiLCJzdHlsZSIsImxhbmciLCJodG1sIiwic3RhY2siLCJwYXJzZSIsIkhUTUxQYXJzZXIiLCJvbm9wZW50YWciLCJjdXJyZW50U3RhY2tOb2RlIiwiU2xvdCIsIkNvbXBvbmVudCIsIk5vZGUiLCJvbnRleHQiLCJ0ZXh0IiwiVGV4dCIsIm9uY2xvc2V0YWciLCJyZW1vdmVkIiwiZGVjb2RlRW50aXRpZXMiLCJwcmVwYXJlSFRNTCIsImhhc0F0dHJpYnV0ZXMiLCJnZXROYW1lIiwiZ2V0SW1wb3J0IiwiYWRkQ2hpbGQiLCJiaW5kIiwiaXNTbG90IiwiZ2V0RGVmYXVsdFNsb3QiLCJkZWZhdWx0U2xvdCIsInRhZyIsIm1ha2VUZW1wbGF0ZSIsIm1hcCIsInJ1bGVzIiwiaXNSb290Iiwic2tpcEZpcnN0Q2hpbGRJbml0IiwiaXNUZW1wbGF0ZSIsImhhc0Fsb25lVGVtcGxhdGUiLCJhbG9uZSIsInNraXBJbml0Iiwib25seUNoaWxkcmVuIiwiY2hpbGRUZW1wbGF0ZSIsIkhUTUxUYWdzIiwibGlzdCIsImV4cGVjdHNMb3dlckNhc2UiLCJ2YWwiLCJhdHRyQXJnVG9PYmoiLCJhdHRyQXJnVG9TdHJpbmciLCJsYXN0Q2xhc3NBZG9wdGVkIiwidG1wIiwidG9TZXQiLCJtYWtlQ2xhc3MiLCJtYWtlU3R5bGVzIiwiaW5zdGFuY2UiLCJjb21wb25lbnROb2RlIiwibWFyayIsIiRub2RlIiwiJGhvb2tzIiwiJHNsb3RzIiwiY2FsbGJhY2siLCJzbG90Tm9kZXMiLCJjdXJyZW50Q29uZGl0aW9uSW5kZXgiLCJyZW5kZXJGbiIsImN1cnJlbnQiLCJzdGFydCIsImFyciIsImxhc3RDb25kaXRpb24iLCJnZXRGaXJzdENvbmRpdGlvbiIsImZpcnN0TG9hZCIsInJldHVybk5vZGUiLCJoYXNDb25kaXRpb25SZW5kZXJlZCIsInNob3VsZFJlbmRlciIsImdldEluaXRpYXRlZE5vZGVzIiwiaXNTYW1lQ29uZGl0aW9uIiwiY2xvbmUiLCIkcmVmcyIsIiRrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7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QU07QUFDakIzSyxRQUFJLENBQUpBO0FBREQ7QUFHQTs7QUFFTSxxQ0FDUDtBQUNDLE1BQUdWLE1BQU0sQ0FBTkEsSUFBTSxDQUFOQSxLQUFILFdBQStCO0FBQzlCLFdBQU8sWUFBTTtBQUNaO0FBREQ7QUFHQTs7QUFFRCxNQUFHLDhCQUFhQSxNQUFNLENBQXRCLElBQXNCLENBQW5CLENBQUgsRUFBK0I7QUFDOUIsV0FBT0EsTUFBTSxDQUFiLElBQWEsQ0FBYjtBQURELFNBRU87QUFDTixXQUFPLFlBQU07QUFDWixhQUFPQSxNQUFNLENBQWIsSUFBYSxDQUFiO0FBREQ7QUFWRixJQWNDOztBQUNBOztBQUVNLCtCQUErQjtBQUNyQyxNQUFJMUcsT0FBTyxLQUFQQSxhQUF5QkEsT0FBTyxLQUFwQyxNQUErQztBQUM5Q0EsV0FBTyxHQUFQQTtBQUNBOztBQUVELE1BQUkwRyxNQUFNLEdBQUcxRyxPQUFPLENBQVBBLFVBQWI7QUFDQSxNQUFJNlEsTUFBTSxHQUFHN1EsT0FBTyxDQUFQQSxVQUFiO0FBQ0EsTUFBSStSLElBQUksR0FBRy9SLE9BQU8sQ0FBUEEsNEJBQW9DQSxPQUFPLENBQXREO0FBRUEsU0FBTztBQUNOMEcsVUFBTSxFQURBO0FBRU5tSyxVQUFNLEVBRkE7QUFHTmtCLFFBQUksRUFIRTtBQUlORCxTQUFLLEVBQUU7QUFKRCxHQUFQO0FBTUEsQyIsImZpbGUiOiJ2ZW5kb3JzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHBhcnNlciBmcm9tIFwiQGJhYmVsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyBjb250ZXh0LCBkZXBlbmRlbmNpZXMgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFuYWx5c2Uoc2NyaXB0KVxue1xuXHRsZXQgc291cmNlID0gJyc7XG5cblx0aWYoc2NyaXB0KSB7XG5cdFx0c291cmNlID0gc2NyaXB0LnNvdXJjZVxuXHR9XG5cdFxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRsZXQgZGF0YSA9IGNvbnRleHQoYXN0KTtcblx0bGV0IGRlcHMgPSBkZXBlbmRlbmNpZXMoYXN0LCBkYXRhLm9ic2VydmFibGVzKTtcblxuXHRjb25zb2xlLmxvZyhkZXBzKVxuXHRyZXR1cm4ge1xuXHRcdGNvbnRleHQ6IGRhdGEsXG5cdFx0ZGVwczogZGVwcyxcblx0fTtcbn0iLCJpbXBvcnQgeyBhdHRycyB9IGZyb20gJy4vYXR0cnMnXG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cydcbmltcG9ydCB7IHNsb3QgfSBmcm9tICcuL3Nsb3QnXG5pbXBvcnQgeyBnZXROb2RlLCBwYXJzZUNvbnRleHQsIGdldFByb3AsIHNldFJlZiwgc2V0S2V5IH0gZnJvbSAnLi90ZW1wbGF0ZXMnXG5pbXBvcnQgeyBzdGF0ZW1lbnQgfSBmcm9tICcuL3N0YXRlbWVudCdcbmltcG9ydCB7IGxvYWRDb21wb25lbnQgfSBmcm9tICcuL2xvYWQnXG5cbmV4cG9ydCB7IGF0dHJzLCBldmVudHMsIHNsb3QsIGdldE5vZGUsIHNldFJlZiwgc2V0S2V5LCBnZXRQcm9wLCBwYXJzZUNvbnRleHQsIHN0YXRlbWVudCwgbG9hZENvbXBvbmVudCB9IiwiaW1wb3J0IHRyYXZlcnNlIGZyb20gXCJAYmFiZWwvdHJhdmVyc2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoYXN0KVxue1xuXHRsZXQgZGF0YSA9IHtcblx0XHRvYnNlcnZhYmxlczogW10sXG5cdFx0dmFyczogW10sXG5cdFx0bWV0aG9kczogW10sXG5cdH1cblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XG5cdGZ1bmN0aW9uIGlzU3ViQ29udGV4dCgpIHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrLmxlbmd0aCA+IDA7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KG5hbWUpXG5cdHtcblx0XHRjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRuYW1lLFxuXHRcdFx0dmFyczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDb250ZXh0KClcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2tbY29udGV4dFN0YWNrLmxlbmd0aCAtIDFdO1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FuQ3JlYXRlQ29udGV4dChwYXRoLCBwYXJlbnRUeXBlKVxuXHR7XG5cdFx0XG5cdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgaXNWYXJpYWJsZURlY2xhcmF0aW9uKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChwYXRoLnBhcmVudC50eXBlID09PSBwYXJlbnRUeXBlKTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IHRydWU7XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZih2YWx1ZS50eXBlID09PSAnQ2FsbEV4cHJlc3Npb24nICYmIFsnbycsICdwJ10uaW5jbHVkZXModmFsdWUuY2FsbGVlLm5hbWUpKSB7XG5cdFx0XHRcdFx0ZGF0YS5vYnNlcnZhYmxlcy5wdXNoKGlkLm5hbWUpO1xuXHRcdFx0XHR9IGVsc2UgaWYoWydBcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbicsICdGdW5jdGlvbkV4cHJlc3Npb24nXS5pbmNsdWRlcyh2YWx1ZS50eXBlKSkge1xuXHRcdFx0XHRcdGRhdGEub2JzZXJ2YWJsZXMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhLnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9LFxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGNhbkNyZWF0ZUNvbnRleHQocGF0aCwgJ1ZhcmlhYmxlRGVjbGFyYXRvcicpKSB7XG5cdFx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoY2FuQ3JlYXRlQ29udGV4dChwYXRoLCAnVmFyaWFibGVEZWNsYXJhdG9yJykpIHtcblx0XHQgICAgXHRcdGNsb3NlQ29udGV4dCgpO1xuXHRcdCAgICBcdH1cblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0RnVuY3Rpb25EZWNsYXJhdGlvbjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0aWYoY2FuQ3JlYXRlQ29udGV4dChwYXRoLCAnUHJvZ3JhbScpKSB7XG5cdFx0XHRcdFx0ZGF0YS5tZXRob2RzLnB1c2gocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdFx0XHRcdGNyZWF0ZUNvbnRleHQocGF0aC5ub2RlLmlkLm5hbWUpO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0ICAgIGV4aXQocGF0aClcblx0XHQgICAge1xuXHRcdCAgICBcdGlmKGNhbkNyZWF0ZUNvbnRleHQocGF0aCwgJ1Byb2dyYW0nKSkge1xuXHRcdCAgICBcdFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIFx0fVxuXHRcdCAgICB9XG5cdFx0fVxuXHR9KTtcblxuXHRyZXR1cm4gZGF0YTtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZGVwZW5kZW5jaWVzKGFzdCwgb2JzZXJ2YWJsZXMgPSBbXSlcbntcblx0bGV0IGRlcHMgPSB7fTtcblxuXHRsZXQgY29udGV4dFN0YWNrID0gW107XG5cdGxldCBpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblxuXHRmdW5jdGlvbiBpc1N1YkNvbnRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFjay5sZW5ndGggPiAwO1xuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlQ29udGV4dChuYW1lKVxuXHR7XG5cdFx0Y29udGV4dFN0YWNrLnB1c2goe1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhcnM6IFtdLFxuXHRcdFx0ZGVwczogW10sXG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZUNvbnRleHQoKVxuXHR7XG5cdFx0bGV0IGNvbnRleHQgPSBjb250ZXh0U3RhY2sucG9wKCk7XG5cdFx0ZGVwc1tjb250ZXh0Lm5hbWVdID0gY29udGV4dC5kZXBzO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q29udGV4dCgpXG5cdHtcblx0XHRyZXR1cm4gY29udGV4dFN0YWNrW2NvbnRleHRTdGFjay5sZW5ndGggLSAxXTtcblx0fVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFxuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgpO1xuXHRcdFx0XHRsZXQgbmFtZSA9IHBhdGgubm9kZS5uYW1lO1xuXG5cdFx0XHRcdGlmKCFpc1N1YkNvbnRleHQoKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKHBhdGguY29udGFpbmVyLnR5cGUgPT09ICdNZW1iZXJFeHByZXNzaW9uJyAmJiBwYXRoLmtleSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRpZihwYXRoLm5vZGUubmFtZSA9PT0gJyRwcm9wcycpIHtcblx0XHRcdFx0XHRcdGNvbnRleHQuZGVwcy5wdXNoKGAkeyBwYXRoLmNvbnRhaW5lci5vYmplY3QubmFtZSB9LiR7IHBhdGguY29udGFpbmVyLnByb3BlcnR5Lm5hbWUgfWApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKCFjb250ZXh0LnZhcnMuaW5jbHVkZXMobmFtZSkgJiYgb2JzZXJ2YWJsZXMuaW5jbHVkZXMobmFtZSkpIHtcblx0XHRcdFx0XHRjb250ZXh0LmRlcHMucHVzaChuYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRWYXJpYWJsZURlY2xhcmF0b3I6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzVmFyaWFibGVEZWNsYXJhdGlvbiA9IHRydWU7XG5cblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlLmlkO1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwYXRoLm5vZGUuaW5pdDtcblx0XHRcdFx0bGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCk7XG5cblx0XHRcdFx0aWYoaXNTdWJDb250ZXh0KCkgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdFx0XHRjb250ZXh0LnZhcnMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHQgICAgfSxcblx0XHQgICAgZXhpdCgpIHtcblx0XHQgICAgXHRpc1ZhcmlhYmxlRGVjbGFyYXRpb24gPSBmYWxzZTtcblx0XHQgICAgfVxuXHRcdH0sXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKHBhdGgucGFyZW50LnR5cGUgPT09ICdWYXJpYWJsZURlY2xhcmF0b3InKSB7XG5cdFx0XHRcdFx0Y3JlYXRlQ29udGV4dChwYXRoLmNvbnRhaW5lci5pZC5uYW1lKTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0XHRcdGlmKHBhdGgucGFyZW50LnR5cGUgPT09ICdWYXJpYWJsZURlY2xhcmF0b3InKSB7XG5cdFx0ICAgIFx0XHRjbG9zZUNvbnRleHQoKTtcblx0XHQgICAgXHR9XG5cdFx0ICAgIH1cblx0XHR9LFxuXHRcdEZ1bmN0aW9uRGVjbGFyYXRpb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKGlzVmFyaWFibGVEZWNsYXJhdGlvbikgcmV0dXJuO1xuXHRcdFx0XHRjcmVhdGVDb250ZXh0KHBhdGgubm9kZS5pZC5uYW1lKTtcblx0XHQgICAgfSxcblx0XHQgICAgZXhpdChwYXRoKVxuXHRcdCAgICB7XG5cdFx0ICAgIFx0aWYoaXNWYXJpYWJsZURlY2xhcmF0aW9uKSByZXR1cm47XG5cdFx0ICAgIFx0Y2xvc2VDb250ZXh0KCk7XG5cdFx0ICAgIH1cblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiBkZXBzO1xufSIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gJy4vRXhwcmVzc2lvbic7XG5pbXBvcnQgVGV4dCBmcm9tICcuL1RleHQnO1xuaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJztcbmltcG9ydCBTbG90IGZyb20gJy4vU2xvdCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vQ29tcG9uZW50JztcblxuZXhwb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgQ29tcG9uZW50LCBTbG90IH0iLCJpbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcbmltcG9ydCB7IGFuYWx5c2UgfSBmcm9tICdAaGF3YS9hbmFseXNlcic7XG5pbXBvcnQgeyBzY3JpcHQgfSBmcm9tICcuL3NjcmlwdCc7XG5pbXBvcnQgeyBjb21wb25lbnRzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCBkeW5hbWljIGZyb20gJy4vZHluYW1pYyc7XG5cbmltcG9ydCB7XG5cdHZhcmlhYmxlRGVjbGFyYXRpb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0bWVtYmVyRXhwcmVzc2lvbixcblxuXHRFeHBvcnREZWZhdWx0RGVjbGFyYXRpb24sXG5cdE9iamVjdEV4cHJlc3Npb24sXG5cdE9iamVjdFByb3BlcnR5LFxuXHRPYmplY3RNZXRob2QsXG5cdENhbGxFeHByZXNzaW9uLFxuXHRGdW5jdGlvbkV4cHJlc3Npb24sXG5cdEFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRCbG9ja1N0YXRlbWVudCxcblx0TGFiZWxlZFN0YXRlbWVudCxcblx0UmV0dXJuU3RhdGVtZW50LFxuXHRTdHJpbmdMaXRlcmFsLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRwcm9ncmFtLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCBnZW5lcmF0ZSBmcm9tIFwiQGJhYmVsL2dlbmVyYXRvclwiO1xuXG4vKipcbiAqIENvbXBpbGUgdGVtcGxhdGUgdG8gRE9NIGV4cHJlc3Npb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlKGxvYWRlck9wdGlvbnMsIGJsb2Nrcylcbntcblx0bGV0IFZhcmlhYmxlQ291bnRlciA9IDA7XG5cdGxldCBjb250ZXh0U3RhY2sgPSBbXTtcblxuXHQvKipcblx0ICogVGVtcGxhdGUgbWFuYWdlbWVudFxuXHQgKiBAdHlwZSB7U2V0fVxuXHQgKi9cblx0bGV0IFRlbXBsYXRlcyA9IG5ldyBTZXQoKTtcblxuXHRsZXQgY29kZUFuYWx5c2UgPSBhbmFseXNlKGJsb2Nrcy5zY3JpcHQpO1xuXHRsZXQgZHluYW1pY0V4cHJlc3Npb25zID0gZHluYW1pYyhjb2RlQW5hbHlzZSk7XG5cblx0ZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGUocHJvZ3JhbSlcblx0e1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHByb2dyYW0ubWFrZVRlbXBsYXRlKHRydWUpO1xuXG5cdFx0VGVtcGxhdGVzLmFkZCh0ZW1wbGF0ZSk7XG5cblx0XHRyZXR1cm4gaWQoYF90cGwkJHsgVGVtcGxhdGVzLnNpemUgfWApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0VGVtcGxhdGVzKClcblx0e1xuXHRcdGxldCBjb2RlID0gJyc7XG5cdFx0bGV0IGkgPSAwO1xuXG5cdFx0Zm9yKGxldCB0cGwgb2YgVGVtcGxhdGVzKSB7XG5cdFx0XHRsZXQgaW5kZXggPSArK2k7XG5cdFx0XHRjb2RlICs9IGBsZXQgX3RwbCQkeyBpbmRleCB9ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xcbmA7XG5cdFx0XHRjb2RlICs9IGBfdHBsJCR7IGluZGV4IH0uaW5uZXJIVE1MID0gJyR7IHRwbCB9JztcXG5cXG5gO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnRleHQgbWFuYWdlbWVudFxuXHQgKiBAcGFyYW0gIHtbdHlwZV19IExhc3RWYXJpYWJsZUlkIFtkZXNjcmlwdGlvbl1cblx0ICogQHJldHVybiB7W3R5cGVdfSAgICAgICAgICAgICAgICBbZGVzY3JpcHRpb25dXG5cdCAqL1xuXHRmdW5jdGlvbiBjcmVhdGVDb250ZXh0KGluaXQgPSBmYWxzZSlcblx0e1xuXHRcdHJldHVybiBjb250ZXh0U3RhY2sucHVzaCh7XG5cdFx0XHRMYXN0VmFyaWFibGVJZDogaW5pdCA/IGlkKCdub2RlJykgOiBnZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q3VycmVudENvbnRleHQoKVxuXHR7XG5cdFx0cmV0dXJuIGNvbnRleHRTdGFja1tjb250ZXh0U3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVDb250ZXh0KClcblx0e1xuXHRcdGNvbnRleHRTdGFjay5wb3AoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhc3RWYXJpYWJsZUlkKClcblx0e1xuXHRcdHJldHVybiBnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkO1xuXHR9XG5cblx0ZnVuY3Rpb24gc2V0TGFzdFZhcmlhYmxlSWQodmFsdWUpXG5cdHtcblx0XHRnZXRDdXJyZW50Q29udGV4dCgpLkxhc3RWYXJpYWJsZUlkID0gdmFsdWU7XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVWYXJpYWJsZShjb250ZXh0ID0gbnVsbCwgQWN0aW9uID0gKG4sIGwpID0+IGwpXG5cdHtcblx0XHRsZXQgbmFtZSA9IGlkKGBfZWwkJHsgKytWYXJpYWJsZUNvdW50ZXIgfWApO1xuXG5cdFx0bGV0IGRlbGNhcmF0aW9uVmFsdWUgPSBBY3Rpb24obmFtZSwgZ2V0TGFzdFZhcmlhYmxlSWQoKSk7XG5cblx0XHRsZXQgdmFsdWUgPSBuZXcgdmFyaWFibGVEZWNsYXJhdGlvbignbGV0JywgW1xuXHRcdFx0bmV3IHZhcmlhYmxlRGVjbGFyYXRvcihcblx0XHRcdFx0bmFtZSxcblx0XHRcdFx0ZGVsY2FyYXRpb25WYWx1ZVxuXHRcdFx0KVxuXHRcdF0pO1xuXG5cdFx0c2V0TGFzdFZhcmlhYmxlSWQobmFtZSk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSxcblx0XHRcdHZhbHVlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGlsZSB0ZW1wbGF0ZXNcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBlbnRpdHkgPSBibG9ja3MudGVtcGxhdGU7XG5cdGxldCBib2R5ID0gW107XG5cblx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0Y3JlYXRlQ29udGV4dCxcblx0XHRyZW1vdmVDb250ZXh0LFxuXHRcdGNyZWF0ZVZhcmlhYmxlLFxuXHRcdGdldExhc3RWYXJpYWJsZUlkLFxuXHRcdGNyZWF0ZVRlbXBsYXRlLFxuXHRcdGR5bmFtaWM6IGR5bmFtaWNFeHByZXNzaW9ucyxcblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZShlbnRpdHkpXG5cdHtcblx0XHRlbnRpdHkuaGFuZGxlKGJvZHksIG9wdGlvbnMpO1xuXHR9XG5cblx0Y3JlYXRlQ29udGV4dCh0cnVlKTtcblx0W2VudGl0eV0ubWFwKChpdGVtKSA9PiBoYW5kbGUoaXRlbSkpO1xuXG5cblx0LyoqXG5cdCAqIEdlbmVyYXRlIGNvZGVcblx0ICogQHR5cGUge1t0eXBlXX1cblx0ICovXG5cdGxldCBjb2RlID0gZ2VuZXJhdGUocHJvZ3JhbShcblx0XHRib2R5LCBcblx0XHRbXSxcblx0XHQnbW9kdWxlJ1xuXHQpLCB7XG5cdFx0cmV0YWluTGluZXM6IGZhbHNlLFxuXHRcdGNvbXBhY3Q6IGZhbHNlLFxuXHRcdG1pbmlmaWVkOiBmYWxzZSxcblx0XHRjb25jaXNlOiBmYWxzZSxcblx0XHRxdW90ZXM6IFwiZG91YmxlXCIsXG5cdH0pO1xuXG5cdHJldHVybiB7XG5cdFx0cmVuZGVyOiBjb2RlLmNvZGUsXG5cdFx0dGVtcGxhdGVzOiBnZXRUZW1wbGF0ZXMoKSxcblx0XHRzY3JpcHQ6IHNjcmlwdChjb2RlQW5hbHlzZSwgYmxvY2tzLnNjcmlwdCksXG5cdFx0c3R5bGVzOiBibG9ja3Muc3R5bGUsXG5cdFx0Y29tcG9uZW50czogY29tcG9uZW50cyhlbnRpdHkpKGxvYWRlck9wdGlvbnMucGF0aCwgbG9hZGVyT3B0aW9ucy5kZWxpbWV0ZXIpLFxuXHR9XG59IiwiZnVuY3Rpb24gaGFuZGxlKGNvbXBvbmVudHMsIGVudGl0eSlcbntcblx0aWYoZW50aXR5LnR5cGUgPT09ICdjb21wb25lbnQnKSB7XG5cdFx0Y29tcG9uZW50cy5wdXNoKGVudGl0eSk7XG5cdH1cblxuXHRpZihlbnRpdHkuY2hpbGRyZW4pIHtcblx0XHRlbnRpdHkuY2hpbGRyZW4ubWFwKChpdGVtKSA9PiBoYW5kbGUoY29tcG9uZW50cywgaXRlbSkpO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRzKGVudGl0eSlcbntcblx0bGV0IGNvbXBvbmVudHMgPSBbXTtcblxuXHRoYW5kbGUoY29tcG9uZW50cywge1xuXHRcdHR5cGU6IG51bGwsXG5cdFx0Y2hpbGRyZW46IFtlbnRpdHldLFxuXHR9KTtcblxuXHRyZXR1cm4gKHBhdGgsIGRlbGltZXRlcikgPT4ge1xuXHRcdGxldCBpbXBvcnRzID0gbmV3IFNldCgpO1xuXG5cdFx0Zm9yKGxldCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuXHRcdFx0aW1wb3J0cy5hZGQoY29tcG9uZW50LmdldEltcG9ydChwYXRoLCBkZWxpbWV0ZXIpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gQXJyYXkuZnJvbShpbXBvcnRzKS5qb2luKCdcXG4nKTtcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0YXNzaWdubWVudEV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlLCBtYWtlU3RyaW5nIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJvd0Z1bmN0aW9uKHsgdmFsdWUgPSBbXSwgYXJncyA9IFtdIH0sIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZih0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnKSB7XG5cdFx0dmFsdWUgPSB7XG5cdFx0XHRpc0V4cHJlc3Npb246IHRydWUsXG5cdFx0XHR2YWx1ZTogdmFsdWUsXG5cdFx0fTtcblx0fVxuXHRcblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlU3RyaW5nKTtcblxuXHQvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG5cdHJldHVybiB7XG5cdFx0dmFsdWU6IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihcblx0XHRcdGFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpLFxuXHRcdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQuY29udGVudClcblx0XHRcdF0pLFxuXHRcdCksXG5cdFx0ZGVwczogcmVzdWx0LmRlcHMsXG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZUNvbXB1dGVkIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRycyhhdHRyaWJ1dGVzLCBwb2ludCwgY29udGV4dCwgb3B0aW9ucywgcmV0dXJuT2JqZWN0ID0gZmFsc2UpXG57XG5cdGlmKGF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG5cdFx0bGV0IHZhbHVlID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwgYXR0cmlidXRlc1tuYW1lXSwgbWFrZUNvbXB1dGVkKTtcblxuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZSksXG5cdFx0XHRcdHZhbHVlLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGlmKHByb3BzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmKHJldHVybk9iamVjdCkge1xuXHRcdHJldHVybiBvYmplY3RFeHByZXNzaW9uKHByb3BzKTtcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VGdW5jdGlvbiB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRzKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS5vcHRpb24gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGxldCBwcm9wcyA9IFtdO1xuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmV2ZW50cykge1xuXHRcdGxldCB2YWx1ZSA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIGVudGl0eS5vcHRpb24uZXZlbnRzW25hbWVdLCBtYWtlRnVuY3Rpb24pO1xuXG5cdFx0cHJvcHMucHVzaChcblx0XHRcdG5ldyBvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChuYW1lKSxcblx0XHRcdFx0dmFsdWUsXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0aWYocHJvcHMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX21ha2VFdmVudHMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VDb21wdXRlZCB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gZXhwcmVzc2lvbih2YWx1ZSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcpIHtcblx0XHR2YWx1ZSA9IHtcblx0XHRcdGlzRXhwcmVzc2lvbjogdHJ1ZSxcblx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHR9O1xuXHR9XG5cblx0bGV0IHJlc3VsdCA9IG1ha2VWYWx1ZSh0aGlzLmNvbnRleHQsIHZhbHVlLCBtYWtlQ29tcHV0ZWQpO1xuXG5cdC8vIGNvbnNvbGUud2FybihyZXN1bHQpO1xuXHRyZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCB7IG1ha2VBdHRyVmFsdWUgfSBmcm9tICcuL3ZhbHVlJztcbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi9hdHRycyc7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBwcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgZXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5pbXBvcnQgeyBhcnJvd0Z1bmN0aW9uIH0gZnJvbSAnLi9hcnJvd0Z1bmN0aW9uJztcbmltcG9ydCB7IHNldEF0dHIgfSBmcm9tICcuL3NldEF0dHInO1xuaW1wb3J0IHsgcmVmIH0gZnJvbSAnLi9yZWYnO1xuXG4vLyBleHBvcnQgeyBhdHRycywgZXZlbnRzLCBwcm9wcyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR5bmFtaWMoY29udGV4dClcbntcblx0cmV0dXJuIHtcblx0XHRhdHRyczogYXR0cnMuYmluZChjb250ZXh0KSxcblx0XHRldmVudHM6IGV2ZW50cy5iaW5kKGNvbnRleHQpLFxuXHRcdHByb3BzOiBwcm9wcy5iaW5kKGNvbnRleHQpLFxuXHRcdHN0cmluZzogc3RyaW5nLmJpbmQoY29udGV4dCksXG5cdFx0ZXhwcmVzc2lvbjogZXhwcmVzc2lvbi5iaW5kKGNvbnRleHQpLFxuXHRcdGFycm93RnVuY3Rpb246IGFycm93RnVuY3Rpb24uYmluZChjb250ZXh0KSxcblx0XHRzZXRBdHRyOiBzZXRBdHRyLmJpbmQoY29udGV4dCksXG5cdFx0cmVmOiByZWYuYmluZChjb250ZXh0KSxcblx0fVxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgbWFrZVZhbHVlIH0gZnJvbSAnLi92YWx1ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9wcyhlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMgPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZvcihsZXQgbmFtZSBpbiBlbnRpdHkub3B0aW9uLmF0dHJpYnV0ZXMpIHtcblx0XHRsZXQgdmFsdWUgPSBtYWtlVmFsdWUoZW50aXR5Lm9wdGlvbi5hdHRyaWJ1dGVzW25hbWVdKTtcblx0fVxuXG5cblx0Y29uc29sZS53YXJuKGVudGl0eS5vcHRpb24uYXR0cmlidXRlcylcblxuXHRyZXR1cm47XG5cblx0bGV0IHByb3BzID0gW107XG5cblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5hdHRycykge1xuXHRcdHByb3BzLnB1c2goXG5cdFx0XHRuZXcgb2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoa2V5KSxcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbCh0aGlzLmF0dHJzW2tleV0pLFxuXHRcdFx0KVxuXHRcdClcblx0fVxuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ19tYWtlQXR0cnMkJyksIFtcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0bmV3IG9iamVjdEV4cHJlc3Npb24ocHJvcHMpLFxuXHRcdFx0XVxuXHRcdClcblx0KTtcblxuXHRjb250ZXh0LnB1c2goZXhwcmVzc2lvbik7XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXHRhcnJheUV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBtYWtlVmFsdWUsIG1ha2VTdWJzY3JpYmUgfSBmcm9tICcuL3ZhbHVlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZihlbnRpdHksIHBvaW50LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRpZihlbnRpdHkub3B0aW9uLnJlZiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnX3NldFJlZiQnKSxcblx0XHRcdFtcblx0XHRcdFx0aWQoJyRyZWZzJyksXG5cdFx0XHRcdHBvaW50Lm5hbWUsXG5cdFx0XHRcdHN0cmluZ0xpdGVyYWwoZW50aXR5Lm9wdGlvbi5yZWYpXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN1YnNjcmliZSB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0QXR0cih7IG5hbWUgPSAna2V5JywgdmFsdWUsIFR5cGUgfSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKChUeXBlLm9wdGlvbiA9PT0gdW5kZWZpbmVkIHx8IFR5cGUub3B0aW9uW25hbWVdID09PSB1bmRlZmluZWQpICYmIHZhbHVlID09PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZih2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFsdWUgPSBUeXBlLm9wdGlvbltuYW1lXTtcblx0fVxuXG5cdGxldCByZXN1bHQgPSBtYWtlVmFsdWUodGhpcy5jb250ZXh0LCB2YWx1ZSwgbWFrZVN1YnNjcmliZSk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0XHRcdFx0cG9pbnQsXG5cdFx0XHRcdGlkKCdzZXRBdHRyaWJ1dGUnKVxuXHRcdFx0KSxcblx0XHRcdFtcblx0XHRcdFx0c3RyaW5nTGl0ZXJhbChgZGF0YS0ke25hbWV9YCksXG5cdFx0XHRcdHJlc3VsdC5leHByXG5cdFx0XHRdXG5cdFx0KVxuXHQpO1xuXG5cblx0Ly8gaWYocmVzdWx0LnNob3VsZFdyYXApIHtcblx0XHRleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdGlkKCdzdWJzY3JpYmUnKSxcblx0XHRcdFx0W1xuXHRcdFx0XHRcdHJlc3VsdC5kZXBzLFxuXHRcdFx0XHRcdG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRcdFx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChbXG5cdFx0XHRcdFx0XHRcdGV4cHJlc3Npb25cblx0XHRcdFx0XHRcdF0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRpZCgnIXJlbmRlcicpXG5cdFx0XHRcdF1cblx0XHRcdClcblx0XHQpO1xuXHQvLyB9XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24pO1xuXHRcblx0Ly8gY29uc29sZS5sb2coZXhwcmVzc2lvbik7XG5cdC8vIHJldHVybiByZXN1bHRcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGFzc2lnbm1lbnRFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1ha2VWYWx1ZSwgbWFrZVN0cmluZyB9IGZyb20gJy4vdmFsdWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nKGVudGl0eSwgcG9pbnQsIGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGlmKGVudGl0eS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHZhbHVlID0gZW50aXR5LnZhbHVlLnJlcGxhY2UoL3t7KC4qKX19L2csICckeyAkMSB9Jyk7XG5cblx0bGV0IGlzRXhwcmVzc2lvbiA9IHZhbHVlLm1hdGNoKC9cXCRcXHsuKlxcfS9nKSAhPT0gbnVsbDtcblxuXHRpZighaXNFeHByZXNzaW9uKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHsgZGVwcywgY29udGVudCB9ID0gbWFrZVZhbHVlKHRoaXMuY29udGV4dCwge1xuXHRcdGlzRXhwcmVzc2lvbixcblx0XHR2YWx1ZTogYFxcYCR7IHZhbHVlIH1cXGBgLFxuXHR9LCBtYWtlU3RyaW5nKTtcblxuXHRkZXBzID0gbmV3IGFycmF5RXhwcmVzc2lvbihkZXBzLm1hcCgoaXRlbSkgPT4ge1xuXHRcdHJldHVybiBpZChpdGVtKTtcblx0fSkpO1xuXG5cblx0bGV0IGJvZHkgPSBuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW10sXG5cdFx0bmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRcdG5ldyBleHByZXNzaW9uU3RhdGVtZW50KFxuXHRcdFx0XHRuZXcgYXNzaWdubWVudEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0Jz0nLFxuXHRcdFx0XHRcdG5ldyBtZW1iZXJFeHByZXNzaW9uKHBvaW50LCBpZCgnbm9kZVZhbHVlJykpLFxuXHRcdFx0XHRcdGNvbnRlbnRcblx0XHRcdFx0KVxuXHRcdFx0KVxuXHRcdF0pXG5cdCk7XG5cblx0bGV0IGV4cHJlc3Npb24gPSBuZXcgZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnc3Vic2NyaWJlJyksXG5cdFx0XHRbZGVwcywgYm9keSwgaWQoJyFyZW5kZXInKV0sXG5cdFx0KVxuXHQpO1xuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0ZnVuY3Rpb25FeHByZXNzaW9uLFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5cbmltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmNvbnN0IFRNUF9JREVOVElGSUVSID0gJ190bXAkYXN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VWYWx1ZShjb250ZXh0LCB2YWx1ZSwgZm4pXG57XG5cdGlmKCF2YWx1ZS5pc0V4cHJlc3Npb24pIHtcblx0XHRyZXR1cm4gc3RyaW5nTGl0ZXJhbCh2YWx1ZS52YWx1ZSk7XG5cdH1cblxuXHRsZXQgY29kZSA9IGAke1RNUF9JREVOVElGSUVSfSA9ICR7dmFsdWUudmFsdWV9YDtcblxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2UoY29kZSwge1xuXHRcdHNvdXJjZVR5cGU6IFwidW5hbWJpZ3VvdXNcIixcblx0XHRzdHJpY3RNb2RlOiBmYWxzZSxcblx0fSk7XG5cblx0cmV0dXJuIGZuKGFzdCwgY29udGV4dCk7XG59XG5cbi8qKlxuICogQ29tcGlsZSBleHByZXNzaW9uIHRvIERPTSBleHByZXNzaW9uIGFuZCBtYWtlIGluIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRnVuY3Rpb24oYXN0LCBjb250ZXh0KVxue1xuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cdFx0XHRcdGlmKGNvbnRleHQubWV0aG9kcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGlmKHBhdGgucGFyZW50LnR5cGUgIT09ICdDYWxsRXhwcmVzc2lvbicpIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHtpZC5uYW1lfSgpYDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cblx0cmV0dXJuIG5ldyBmdW5jdGlvbkV4cHJlc3Npb24obnVsbCwgW2lkKCdldmVudCcpXSwgbmV3IGJsb2NrU3RhdGVtZW50KFtcblx0XHRuZXcgcmV0dXJuU3RhdGVtZW50KHJlc3VsdClcblx0XSkpO1xufVxuXG4vKipcbiAqIENvbXBpbGUgc3RyaW5nIHRvIERPTSBleHByZXNzaW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3RyaW5nKGFzdCwgY29udGV4dClcbntcblx0bGV0IGRlcHMgPSBbXTtcblxuXHR0cmF2ZXJzZShhc3QsIHtcblx0XHRJZGVudGlmaWVyOiB7XG5cdFx0XHRlbnRlcihwYXRoKVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgaWQgPSBwYXRoLm5vZGU7XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGRlcHMucHVzaChpZC5uYW1lKTtcblx0XHRcdFx0XHRpZC5uYW1lID0gYCR7IGlkLm5hbWUgfSgpYDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cblx0cmV0dXJuIHtcblx0XHRjb250ZW50OiByZXN1bHQsXG5cdFx0ZGVwczogZGVwcyxcblx0fVxufVxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbXB1dGVkKGFzdCwgY29udGV4dClcbntcblx0bGV0IGRlcHMgPSBbXTtcblx0bGV0IHN0YXRlZnVsQ291bnRlciA9IDA7XG5cdGxldCBpZGVudGlmaWVyc0NvdW50ZXIgPSAwO1xuXHRsZXQgc2hvdWxkV3JhcCA9IHRydWU7XG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdC8vIGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpIHx8IHBhdGgubm9kZS5uYW1lID09PSBUTVBfSURFTlRJRklFUikge1xuXHRcdFx0XHQvLyBcdHJldHVybjtcblx0XHRcdFx0Ly8gfVxuXG5cdFx0XHRcdGlkZW50aWZpZXJzQ291bnRlcisrO1xuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRzdGF0ZWZ1bENvdW50ZXIrKztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0XG5cdGlmKGlkZW50aWZpZXJzQ291bnRlciA8PSAxIHx8IHN0YXRlZnVsQ291bnRlciA9PSAwKSB7XG5cdFx0c2hvdWxkV3JhcCA9IGZhbHNlO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coY29udGV4dCwgaWRlbnRpZmllcnNDb3VudGVyLCBzdGF0ZWZ1bENvdW50ZXIsIHNob3VsZFdyYXApXG5cblx0dHJhdmVyc2UoYXN0LCB7XG5cdFx0SWRlbnRpZmllcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlkID0gcGF0aC5ub2RlO1xuXG5cdFx0XHRcdGlmKFsnbGFiZWwnLCAna2V5J10uaW5jbHVkZXMocGF0aC5rZXkpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYoY29udGV4dC5vYnNlcnZhYmxlcy5pbmNsdWRlcyhpZC5uYW1lKSkge1xuXHRcdFx0XHRcdGRlcHMucHVzaChpZC5uYW1lKTtcblxuXHRcdFx0XHRcdGxldCBpc0FscmVhZHlDYWxsRXhwcmVzc2lvbiA9IHBhdGguY29udGFpbmVyLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbic7XG5cblx0XHRcdFx0XHRpZihpc0FscmVhZHlDYWxsRXhwcmVzc2lvbikge1xuXHRcdFx0XHRcdFx0c2hvdWxkV3JhcCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCAmJiAhaXNBbHJlYWR5Q2FsbEV4cHJlc3Npb24pIHtcblx0XHRcdFx0XHRcdGlkLm5hbWUgPSBgJHsgaWQubmFtZSB9KClgO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGV4aXQocGF0aCkge1xuXG5cdFx0XHR9LFxuXHRcdH1cblx0fSk7XG5cblx0bGV0IHJlc3VsdCA9IGFzdC5wcm9ncmFtLmJvZHlbMF07XG5cblx0cmVzdWx0ID0gcmVzdWx0LmV4cHJlc3Npb24ucmlnaHQ7XG5cdFxuXHRpZihkZXBzLmxlbmd0aCA9PT0gMCB8fCBzaG91bGRXcmFwID09PSBmYWxzZSkge1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0XG5cdGRlcHMgPSBuZXcgYXJyYXlFeHByZXNzaW9uKGRlcHMubWFwKChpdGVtKSA9PiB7XG5cdFx0cmV0dXJuIGlkKGl0ZW0pO1xuXHR9KSk7XG5cblxuXHRsZXQgYm9keSA9IG5ldyBhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSxcblx0XHRuZXcgYmxvY2tTdGF0ZW1lbnQoW1xuXHRcdFx0bmV3IHJldHVyblN0YXRlbWVudChyZXN1bHQpXG5cdFx0XSlcblx0KTtcblxuXHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFtkZXBzLCBib2R5XVxuXHQpXG59XG5cblxuXG4vKipcbiAqIENvbXBpbGUgZXhwcmVzc2lvbiB0byBET00gZXhwcmVzc2lvbiBhbmQgbWFrZSBpdCBjb21wdXRlZFxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN1YnNjcmliZShhc3QsIGNvbnRleHQpXG57XG5cdGxldCBkZXBzID0gW107XG5cdGxldCBzdGF0ZWZ1bENvdW50ZXIgPSAwO1xuXHRsZXQgaWRlbnRpZmllcnNDb3VudGVyID0gMDtcblx0bGV0IHNob3VsZFdyYXAgPSB0cnVlO1xuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSB8fCBwYXRoLm5vZGUubmFtZSA9PT0gVE1QX0lERU5USUZJRVIpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZGVudGlmaWVyc0NvdW50ZXIrKztcblxuXHRcdFx0XHRpZihjb250ZXh0Lm9ic2VydmFibGVzLmluY2x1ZGVzKGlkLm5hbWUpKSB7XG5cdFx0XHRcdFx0c3RhdGVmdWxDb3VudGVyKys7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXG5cdFxuXHRpZihpZGVudGlmaWVyc0NvdW50ZXIgPD0gMSB8fCBzdGF0ZWZ1bENvdW50ZXIgPT0gMCkge1xuXHRcdHNob3VsZFdyYXAgPSBmYWxzZTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGlkZW50aWZpZXJzQ291bnRlciwgc3RhdGVmdWxDb3VudGVyLCBzaG91bGRXcmFwKVxuXG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdElkZW50aWZpZXI6IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGxldCBpZCA9IHBhdGgubm9kZTtcblxuXHRcdFx0XHRpZihbJ2xhYmVsJywgJ2tleSddLmluY2x1ZGVzKHBhdGgua2V5KSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmKGNvbnRleHQub2JzZXJ2YWJsZXMuaW5jbHVkZXMoaWQubmFtZSkpIHtcblx0XHRcdFx0XHRkZXBzLnB1c2goaWQubmFtZSk7XG5cdFx0XHRcdFx0aWYoc2hvdWxkV3JhcCkge1xuXHRcdFx0XHRcdFx0aWQubmFtZSA9IGAkeyBpZC5uYW1lIH0oKWA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZXhpdChwYXRoKSB7XG5cblx0XHRcdH0sXG5cdFx0fVxuXHR9KTtcblxuXHRsZXQgcmVzdWx0ID0gYXN0LnByb2dyYW0uYm9keVswXTtcblxuXHRyZXN1bHQgPSByZXN1bHQuZXhwcmVzc2lvbi5yaWdodDtcblx0XG5cdC8vIGlmKGRlcHMubGVuZ3RoID09PSAwIHx8IHNob3VsZFdyYXAgPT09IGZhbHNlKSB7XG5cdC8vIFx0cmV0dXJuIHJlc3VsdDtcblx0Ly8gfVxuXHRcblx0ZGVwcyA9IG5ldyBhcnJheUV4cHJlc3Npb24oZGVwcy5tYXAoKGl0ZW0pID0+IHtcblx0XHRyZXR1cm4gaWQoaXRlbSk7XG5cdH0pKTtcblxuXHRyZXR1cm4ge1xuXHRcdHNob3VsZFdyYXAsXG5cdFx0ZGVwcyxcblx0XHRleHByOiByZXN1bHQsXG5cdH1cblx0XG59IiwiaW1wb3J0IHtcblx0bWVtYmVyRXhwcmVzc2lvbixcblx0aWRlbnRpZmllciBhcyBpZCxcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0c3RyaW5nTGl0ZXJhbCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdHJldHVyblN0YXRlbWVudCxcblx0Y29uZGl0aW9uYWxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGF0dHJzIH0gZnJvbSAnLi4vZHluYW1pYyc7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBDVVJfRUFDSF9MT09QX0tFWSB9IGZyb20gJy4vZWFjaCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb25maWcoZW50aXR5LCBjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgb2JqID0gW107XG5cdC8vIGNyZWF0ZSBwcm9wc1xuXHRpZihPYmplY3Qua2V5cyhlbnRpdHkub3B0aW9uLnByb3BzKS5sZW5ndGggPiAwKSB7XG5cdFx0bGV0ICRwcm9wcyA9IG9wdGlvbnMuZHluYW1pYy5hdHRycyhlbnRpdHkub3B0aW9uLnByb3BzLCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMsIHRydWUpO1xuXHRcdG9iai5wdXNoKFxuXHRcdFx0b2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdGlkKCckcHJvcHMnKSxcblx0XHRcdFx0JHByb3BzXG5cdFx0XHQpXG5cdFx0KVxuXHR9XG5cblx0Ly8gY3JlYXRlIGtleVxuXHRpZihlbnRpdHkub3B0aW9uLmtleSkge1xuXHRcdG9iai5wdXNoKFxuXHRcdFx0b2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdGlkKCcka2V5JyksXG5cdFx0XHRcdGlkKENVUl9FQUNIX0xPT1BfS0VZKSxcblx0XHRcdClcblx0XHQpXG5cdH1cblxuXHQvLyBjcmVhdGUgc2xvdHNcblx0aWYoZW50aXR5LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcblx0XHRcblx0XHRsZXQgc2xvdHMgPSBbXTtcblxuXHRcdGZvcihsZXQgc2xvdCBvZiBlbnRpdHkuY2hpbGRyZW4pIHtcblxuXHRcdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdFx0bGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShib2R5LCAobiwgbCkgPT4ge1xuXHRcdFx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHNsb3QpO1xuXHRcdFx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0XHRcdGlkKCdnZXROb2RlJyksIFtpbmRleCwgaWQoJ25vZGUnKSwgaWQoJ3JlbmRlcicpXVxuXHRcdFx0XHQpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGJvZHkucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG5cblx0XHRcdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbihzbG90LCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0XHRcdGxldCByZXR1cm5Qb2ludGVyID0gbmV3IHJldHVyblN0YXRlbWVudChcblx0XHRcdFx0bmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRcdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdFx0XHQpXG5cdFx0XHQpO1xuXG5cdFx0XHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0XHRcdHNsb3RzLnB1c2goXG5cdFx0XHRcdG9iamVjdFByb3BlcnR5KFxuXHRcdFx0XHRcdHN0cmluZ0xpdGVyYWwoc2xvdC5hdHRycy5zbG90KSxcblx0XHRcdFx0XHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbihbXSwgYmxvY2tTdGF0ZW1lbnQoYm9keSkpLFxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0b2JqLnB1c2goXG5cdFx0XHRvYmplY3RQcm9wZXJ0eShcblx0XHRcdFx0aWQoJyRzbG90cycpLFxuXHRcdFx0XHRvYmplY3RFeHByZXNzaW9uKHNsb3RzKVxuXHRcdFx0KVxuXHRcdClcblx0XHQvLyBib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHR9XG5cdFxuXG5cdHJldHVybiBvYmplY3RFeHByZXNzaW9uKG9iailcbn1cblxuLy8gVE8gRE8gTkVYVCBOT0RFU1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdFxuXHRsZXQgaW5pdCA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2xvYWRDb21wb25lbnQnKSwgW1xuXHRcdFx0XHRpZCh0aGlzLmdldE5hbWUoKSksXG5cdFx0XHRcdGwsXG5cdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0Z2V0Q29uZmlnKHRoaXMsIGNvbnRleHQsIG9wdGlvbnMpXG5cdFx0XHRdXG5cdFx0KTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGluaXQudmFsdWUpO1xuXG5cdGxldCBob29rcyA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbWVtYmVyRXhwcmVzc2lvbihpbml0Lm5hbWUsIGlkKCckaG9va3MnKSk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChob29rcy52YWx1ZSk7XG5cblx0bGV0IG5vZGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG1lbWJlckV4cHJlc3Npb24oaW5pdC5uYW1lLCBpZCgnJG5vZGUnKSk7XG5cdH0pO1xuXHRcblx0Y29udGV4dC5wdXNoKG5vZGUudmFsdWUpO1xuXHRcblxuXHQvLyBvcHRpb25zLmR5bmFtaWMuc2V0QXR0cih7XG5cdC8vIFx0VHlwZTogdGhpcyxcblx0Ly8gXHRuYW1lOiAna2V5Jyxcblx0Ly8gfSwgaW5pdCwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gY29uc29sZS5sb2coaW5pdCwgY29udGV4dClcblxuXHQvLyBvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcy5vcHRpb24uYXR0cnMsIGluaXQsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMucmVmKHRoaXMsIG5vZGUsIGNvbnRleHQsIG9wdGlvbnMpO1xuXHRvcHRpb25zLmR5bmFtaWMuYXR0cnModGhpcy5vcHRpb24uYXR0cmlidXRlcywgbm9kZSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdG9wdGlvbnMuZHluYW1pYy5ldmVudHModGhpcywgbm9kZSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gb3B0aW9ucy5jcmVhdGVWYXJpYWJsZShjb250ZXh0LCAobiwgbCkgPT4ge1xuXHQvLyBcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdGwsIGlkKCduZXh0U2libGluZycpXG5cdC8vIFx0KTtcblx0Ly8gfSk7XG5cblx0Ly8gY29udGV4dC5wdXNoKHRlbXBsYXRlLnZhbHVlKTtcblxufSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0cmV0dXJuU3RhdGVtZW50LFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGNhbGxFeHByZXNzaW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmltcG9ydCB7IGNoaWxkcmVuLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSB9IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnQGhhd2EvcGFyc2VyJztcblxuZXhwb3J0IGNvbnN0IENVUl9FQUNIX0xPT1BfS0VZID0gJ19lYWNoTm9kZUtleSQnO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFYWNoQ29uZGl0aW9uKGVudGl0eSlcbntcblx0bGV0IHN0YXRlbWVudCA9IGVudGl0eS52YWx1ZS5tYXRjaEFsbCgvKD88aXRlbT5bQS16MC05XSspXFxzPyhcXCxcXHM/KD88a2V5PltBLXowLTldKylcXHM/KT9cXHM/aW5cXHMoPzxjb25kaXRpb24+LiopL2cpO1xuXG5cdGxldCBjb25kaXRpb24gPSBudWxsO1xuXHRsZXQgYXJncyA9IFtdO1xuXG5cdGZvcihsZXQgbWF0Y2ggb2Ygc3RhdGVtZW50KSB7XG5cblx0XHRpZihtYXRjaC5ncm91cHMuaXRlbSkge1xuXHRcdFx0YXJncy5wdXNoKG1hdGNoLmdyb3Vwcy5pdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaXRlbScpO1xuXHRcdH1cblxuXHRcdGlmKG1hdGNoLmdyb3Vwcy5rZXkpIHtcblx0XHRcdGFyZ3MucHVzaChtYXRjaC5ncm91cHMua2V5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YXJncy5wdXNoKCdfaW5kZXgnKTtcblx0XHR9XG5cblx0XHRjb25kaXRpb24gPSBtYXRjaC5ncm91cHMuY29uZGl0aW9uO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRrZXk6IGZpbmRLZXkoZW50aXR5KSxcblx0XHRjb25kaXRpb24sXG5cdFx0YXJncyxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEtleShlbnRpdHkpXG57XG5cdGxldCBrZXkgPSBudWxsO1xuXG5cdGZvcihsZXQgY2hpbGQgb2YgZW50aXR5LmNoaWxkcmVuKVxuXHR7XG5cdFx0aWYoY2hpbGQgaW5zdGFuY2VvZiBFeHByZXNzaW9uKSB7XG5cdFx0XHRrZXkgPSBmaW5kS2V5KGNoaWxkKTtcblx0XHRcdGJyZWFrO1xuXHRcdH0gZWxzZSBpZihjaGlsZC5vcHRpb24ua2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdGtleSA9IGNoaWxkLm9wdGlvbi5rZXk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRpZihrZXkgPT09IG51bGwpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0tleSBpcyByZXF1aXJlZCBmb3IgRWFjaCBsb29wIChmb3IgaHlkcmF0aW9uKScpO1xuXHR9XG5cblx0cmV0dXJuIGtleTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZWFjaChjb250ZXh0LCBvcHRpb25zKVxue1xuXHRsZXQgcGFyYW1zID0gW107XG5cdGxldCBib2R5ID0gW107XG5cblx0cGFyYW1zLnB1c2gob3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpKVxuXG5cdC8qKlxuXHQgKiBMb29wIHByZXBhcmF0aW9uXG5cdCAqIDEuIEtleSBnZW5lcmF0aW9uIGZ1bmN0aW9uXG5cdCAqIDIuIENvbmRpdGlvbiBleHByZXNzaW9uXG5cdCAqIDMuIEl0ZW0gYW5kIGtleSBpZGludGlmaWVyc1xuXHQgKiBAdHlwZSB7W3R5cGVdfVxuXHQgKi9cblx0bGV0IGxvb3AgPSBwYXJzZUVhY2hDb25kaXRpb24odGhpcyk7XG5cblx0bGV0IHZhbHVlID0gb3B0aW9ucy5keW5hbWljLmV4cHJlc3Npb24obG9vcC5jb25kaXRpb24sIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdGxldCBrZXkgPSBvcHRpb25zLmR5bmFtaWMuYXJyb3dGdW5jdGlvbih7XG5cdFx0dmFsdWU6IGxvb3Aua2V5LFxuXHRcdGFyZ3M6IGxvb3AuYXJnc1xuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpLnZhbHVlO1xuXG5cdHBhcmFtcy5wdXNoKHZhbHVlKTtcblx0cGFyYW1zLnB1c2goa2V5KTtcblxuXHQvKipcblx0ICogR2V0IGxvb3AgdGVtcGxhdGVcblx0ICovXG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoYm9keSwgKG4sIGwpID0+IHtcblx0XHRsZXQgaW5kZXggPSBvcHRpb25zLmNyZWF0ZVRlbXBsYXRlKHRoaXMpO1xuXHRcdHJldHVybiBuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgnZ2V0Tm9kZScpLCBbaW5kZXgsIGlkKCdub2RlJyksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRib2R5LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBib2R5LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSk7XG5cblx0bGV0IHJldHVyblBvaW50ZXIgPSBuZXcgcmV0dXJuU3RhdGVtZW50KFxuXHRcdG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHRcdClcblx0KTtcblxuXHRib2R5LnB1c2gocmV0dXJuUG9pbnRlcik7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFxuXHRcdFx0WyBpZCgnbm9kZScpLCBpZCgncmVuZGVyJyksIGlkKENVUl9FQUNIX0xPT1BfS0VZKSBdLmNvbmNhdChsb29wLmFyZ3MubWFwKGl0ZW0gPT4gaWQoaXRlbSkpKSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KSxcblx0XHQpXG5cdCk7XG5cblx0cGFyYW1zLnB1c2goaWQoJ3JlbmRlcicpKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfZWFjaCQnKSwgcGFyYW1zKTtcblx0fSk7XG5cblx0Y29udGV4dC5wdXNoKGV4cHJlc3Npb24udmFsdWUpO1xufSIsImltcG9ydCBwcm9ncmFtIGZyb20gJy4vcHJvZ3JhbSc7XG5pbXBvcnQgc3RhdGVtZW50IGZyb20gJy4vc3RhdGVtZW50JztcbmltcG9ydCBlYWNoIGZyb20gJy4vZWFjaCc7XG5pbXBvcnQgbm9kZSBmcm9tICcuL25vZGUnO1xuaW1wb3J0IHRleHQgZnJvbSAnLi90ZXh0JztcbmltcG9ydCBzbG90IGZyb20gJy4vc2xvdCc7XG5pbXBvcnQgY29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50JztcblxuZXhwb3J0IHsgcHJvZ3JhbSwgc3RhdGVtZW50LCBlYWNoLCBub2RlLCB0ZXh0LCBzbG90LCBjb21wb25lbnQgfSIsImltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cblx0c3RyaW5nTGl0ZXJhbCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0Y2FsbEV4cHJlc3Npb24sXG5cdG9iamVjdEV4cHJlc3Npb24sXG5cdG9iamVjdFByb3BlcnR5LFxuXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4gfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgYXR0cnMgfSBmcm9tICcuLi9keW5hbWljJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub2RlKGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdC8vIHJlZ2lzdGVyIG5vZGUgcmVmZXJlbmNlIFxuXHRvcHRpb25zLmR5bmFtaWMucmVmKHRoaXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cblx0Ly8gc2V0IGRhdGEta2V5IGZvciBub2RlXG5cdG9wdGlvbnMuZHluYW1pYy5zZXRBdHRyKHtcblx0XHRUeXBlOiB0aGlzLFxuXHRcdG5hbWU6ICdrZXknLFxuXHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdC8vIGFkZCBhdHRycyBmb3Igbm9kZXNcblx0b3B0aW9ucy5keW5hbWljLmF0dHJzKHRoaXMub3B0aW9uLmF0dHJpYnV0ZXMsIG9wdGlvbnMuZ2V0TGFzdFZhcmlhYmxlSWQoKSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdFxuXHQvLyBhZGQgZXZlbnRzIGZvciBub2RlXG5cdG9wdGlvbnMuZHluYW1pYy5ldmVudHModGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBoYW5kbGUgY2hpbGRyZW4gb2Ygbm9kZVxuXHRjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zKTtcbn1cblxuXG5cblxuXG4iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGNvbmRpdGlvbmFsRXhwcmVzc2lvbixcblx0Y2FsbEV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRibG9ja1N0YXRlbWVudCxcblx0ZXhwcmVzc2lvblN0YXRlbWVudCxcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuaW1wb3J0IHsgY2hpbGRyZW4sIGdldEZpcnN0VGVtcGxhdGVOb2RlIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2dyYW0oY29udGV4dCwgb3B0aW9ucylcbntcblx0Ly8gaW5pdCB0ZW1wbGF0ZVxuXHRsZXQgdGVtcGxhdGUgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0bGV0IGluZGV4ID0gb3B0aW9ucy5jcmVhdGVUZW1wbGF0ZSh0aGlzKTtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKFxuXHRcdFx0aWQoJ2dldE5vZGUnKSwgW2luZGV4LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGlkKCdyZW5kZXInKV1cblx0XHQpO1xuXHR9KTtcblxuXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdGxldCBsYXN0Q2hpbGQgPSBjaGlsZHJlbih0aGlzLCBjb250ZXh0LCBvcHRpb25zLCBnZXRGaXJzdFRlbXBsYXRlTm9kZSlcblxuXHRsZXQgcmV0dXJuZWROb2RlID0gbmV3IGNvbmRpdGlvbmFsRXhwcmVzc2lvbihcblx0XHRpZCgncmVuZGVyJyksIHRlbXBsYXRlLm5hbWUsIGxhc3RDaGlsZFxuXHQpO1xuXG5cdGlmKHRoaXMuaXNSb290KCkpIHtcblx0XHRjb250ZXh0LnB1c2gocmV0dXJuU3RhdGVtZW50KG9iamVjdEV4cHJlc3Npb24oXG5cdFx0XHRbXG5cdFx0XHRcdG9iamVjdFByb3BlcnR5KGlkKCckbm9kZScpLCByZXR1cm5lZE5vZGUpLFxuXHRcdFx0XHRvYmplY3RQcm9wZXJ0eShpZCgnJGhvb2tzJyksIGlkKCdfaG9va3MkJykpLFxuXHRcdFx0XVxuXHRcdCkpKTtcblx0fSBlbHNlIHtcblx0XHRjb250ZXh0LnB1c2gocmV0dXJuU3RhdGVtZW50KFxuXHRcdFx0cmV0dXJuZWROb2RlXG5cdFx0KSk7XG5cdH1cbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRhc3NpZ25tZW50RXhwcmVzc2lvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5pbXBvcnQgeyBjaGlsZHJlbiB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzbG90KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXG5cdFx0aWQoJyRzbG90cycpLFxuXHRcdHN0cmluZ0xpdGVyYWwodGhpcy5uYW1lKSxcblx0XHRvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksXG5cdFx0aWQoJ3JlbmRlcicpLFxuXHRdO1xuXG5cdGxldCBleHByZXNzaW9uID0gbmV3IGV4cHJlc3Npb25TdGF0ZW1lbnQoXG5cdFx0bmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc2xvdCQnKSwgcGFyYW1zKVxuXHQpO1xuXG5cdGxldCBib2R5ID0gW107XG5cblx0Y2hpbGRyZW4odGhpcywgYm9keSwgb3B0aW9ucyk7XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0bmV3IGFycm93RnVuY3Rpb25FeHByZXNzaW9uKFtcblx0XHRcdFx0aWQoJ25vZGUnKVxuXHRcdFx0XSxcblx0XHRcdG5ldyBibG9ja1N0YXRlbWVudChib2R5KVxuXHRcdClcblx0KVxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRhcnJheUV4cHJlc3Npb24sXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhdGVtZW50KGNvbnRleHQsIG9wdGlvbnMpXG57XG5cdGxldCBwYXJhbXMgPSBbXTtcblxuXHRwYXJhbXMucHVzaChvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCkpXG5cdHBhcmFtcy5wdXNoKGlkKCdyZW5kZXInKSlcblxuXHRsZXQgaXRlbVBhcmFtcyA9IFtdO1xuXHRsZXQgZGVwZW5kZW5jaWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBibG9jayA9IHRoaXMuY2hpbGRyZW5baV07XG5cdFx0bGV0IGJvZHkgPSBbXTtcblxuXHRcdHRoaXMuY2hpbGRyZW5baV0uaGFuZGxlKGJvZHksIHtcblx0XHRcdGxhc3RDb250ZXh0VmFyaWFibGVJZDogb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLFxuXHRcdFx0Li4ub3B0aW9uc1xuXHRcdH0pO1xuXG5cdFx0Ly8gV3JhcCBzdGF0ZW1lbnQgYXJyb3cgZnVuY3Rpb24gYW5kIGdldCBkZXBzIG9mIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBnbG9iYWwgZm9yIHdob2xlIGZ1bmN0aW9uXG5cdFx0bGV0IHsgdmFsdWUsIGRlcHMgfSA9IG9wdGlvbnMuZHluYW1pYy5hcnJvd0Z1bmN0aW9uKHtcblx0XHRcdHZhbHVlOiBibG9jay52YWx1ZSxcblx0XHR9LCBvcHRpb25zLmdldExhc3RWYXJpYWJsZUlkKCksIGNvbnRleHQsIG9wdGlvbnMpO1xuXG5cdFx0ZGVwZW5kZW5jaWVzID0gW1xuXHRcdFx0Li4uZGVwZW5kZW5jaWVzLFxuXHRcdFx0Li4uZGVwc1xuXHRcdF07XG5cdFx0XG5cdFx0aXRlbVBhcmFtcy5wdXNoKHZhbHVlKTtcblx0XHRpdGVtUGFyYW1zLnB1c2goXG5cdFx0XHRuZXcgYXJyb3dGdW5jdGlvbkV4cHJlc3Npb24oW1xuXHRcdFx0XHRpZCgnbm9kZScpLFxuXHRcdFx0XHRpZCgncmVuZGVyJylcblx0XHRcdF0sIG5ldyBibG9ja1N0YXRlbWVudChib2R5KSlcblx0XHQpO1xuXHR9XG5cblx0cGFyYW1zLnB1c2goXG5cdFx0YXJyYXlFeHByZXNzaW9uKGRlcGVuZGVuY2llcy5tYXAoaXRlbSA9PiBpZChpdGVtKSkpXG5cdCk7XG5cblx0cGFyYW1zID0gcGFyYW1zLmNvbmNhdChpdGVtUGFyYW1zKTtcblxuXHRsZXQgZXhwcmVzc2lvbiA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IGNhbGxFeHByZXNzaW9uKGlkKCdfc3RhdGVtZW50JCcpLCBwYXJhbXMpO1xuXHR9KTtcblxuXG5cdGNvbnRleHQucHVzaChleHByZXNzaW9uLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRleHQoY29udGV4dCwgb3B0aW9ucylcbntcblx0XG5cdG9wdGlvbnMuZHluYW1pYy5zdHJpbmcodGhpcywgb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpLCBjb250ZXh0LCBvcHRpb25zKTtcblxuXHQvLyBsZXQgdGVtcGxhdGUgPSBmYWxzZTtcblxuXHQvLyBpZihvcHRpb25zLmN1c3RvbURlZmluZSAhPT0gbnVsbCkge1xuXHQvLyBcdHRlbXBsYXRlID0gb3B0aW9ucy5jdXN0b21EZWZpbmUoY29udGV4dCwgb3B0aW9ucy5maXJzdENoaWxkKTtcblx0Ly8gXHRkZWxldGUgb3B0aW9ucy5jdXN0b21EZWZpbmU7XG5cdC8vIH1cblxuXHQvLyBpZih0ZW1wbGF0ZSA9PT0gZmFsc2UpIHtcblx0Ly8gXHR0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQob3B0aW9ucy5maXJzdENoaWxkID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0Ly8gXHRcdCk7XG5cdC8vIFx0fSk7XG5cblx0Ly8gXHRjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXHQvLyB9XG5cblx0Ly8gbGV0IHRlbXBsYXRlID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRyZXR1cm4gaWQoJ2NyZWF0ZVRlYW1wbGF0ZScpO1xuXHQvLyB9KTtcblxuXHQvLyBjb250ZXh0LnB1c2godGVtcGxhdGUudmFsdWUpO1xuXG5cdC8vIGxldCBwb2ludGVyID0gY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0Ly8gXHRpZih0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDEpIHtcblx0Ly8gXHRcdHJldHVybiBuZXcgbWVtYmVyRXhwcmVzc2lvbihcblx0Ly8gXHRcdFx0bCwgaWQoJ2ZpcnN0Q2hpbGQnKVxuXHQvLyBcdFx0KTtcblx0Ly8gXHR9XG5cblx0Ly8gXHRyZXR1cm4gbDtcblx0Ly8gfSk7XG5cdFxuXHQvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmNoaWxkcmVuLmxlbmd0aCk7XG5cdC8vIGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcbn0iLCJpbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRhcnJvd0Z1bmN0aW9uRXhwcmVzc2lvbixcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRjb25kaXRpb25hbEV4cHJlc3Npb24sXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG59IGZyb20gXCJAYmFiZWwvdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0VGVtcGxhdGVOb2RlKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucylcbntcblx0bGV0IHBvaW50ZXIgPSBvcHRpb25zLmNyZWF0ZVZhcmlhYmxlKGNvbnRleHQsIChuLCBsKSA9PiB7XG5cdFx0cmV0dXJuIG5ldyBjb25kaXRpb25hbEV4cHJlc3Npb24oXG5cdFx0XHRpZCgncmVuZGVyJyksXG5cdFx0XHRuZXcgbWVtYmVyRXhwcmVzc2lvbihsLCBpZCgnZmlyc3RDaGlsZCcpKSxcblx0XHRcdGxcblx0XHQpXG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaChwb2ludGVyLnZhbHVlKTtcblxuXHQvLyBjb25zb2xlLmxvZyhlbnRpdHksIGVudGl0eS5wYXJlbnQuaXNSb290KCkpXG5cdGlmKGVudGl0eS5wYXJlbnQuaXNSb290KCkpIHtcblx0XHQvLyBrZXkgZm9yIGxvb3BzXG5cdFx0Y29udGV4dC5wdXNoKFxuXHRcdFx0ZXhwcmVzc2lvblN0YXRlbWVudChcblx0XHRcdFx0Y2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0aWQoJ19zZXRLZXkkJyksXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0aWQoJyRrZXknKSxcblx0XHRcdFx0XHRcdHBvaW50ZXIubmFtZSxcblx0XHRcdFx0XHRcdGlkKCdyZW5kZXInKSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdClcblx0XHRcdClcblx0XHQpO1xuXG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb2RlKGNvbnRleHQsIG9wdGlvbnMsIHR5cGUpXG57XG5cdGxldCB0ZW1wbGF0ZSA9IG9wdGlvbnMuY3JlYXRlVmFyaWFibGUoY29udGV4dCwgKG4sIGwpID0+IHtcblx0XHRyZXR1cm4gbmV3IG1lbWJlckV4cHJlc3Npb24oXG5cdFx0XHRsLCBpZCh0eXBlKVxuXHRcdCk7XG5cdH0pO1xuXG5cdGNvbnRleHQucHVzaCh0ZW1wbGF0ZS52YWx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGlsZHJlbihlbnRpdHksIGNvbnRleHQsIG9wdGlvbnMsIGN1c3RvbURlZmluZXIgPSBmYWxzZSlcbntcblx0aWYoZW50aXR5LnNraXBGaXJzdENoaWxkSW5pdCgpKSB7XG5cdFx0Y3VzdG9tRGVmaW5lciA9ICgpID0+IHt9O1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKGVudGl0eSwgZW50aXR5Lmhhc0Fsb25lVGVtcGxhdGUoKSk7XG5cdGlmKCFlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpICYmICFlbnRpdHkuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0b3B0aW9ucy5jcmVhdGVDb250ZXh0KCk7XG5cdH1cblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVudGl0eS5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdGNoaWxkSGFuZGxlKGVudGl0eS5jaGlsZHJlbltpXSwgY29udGV4dCwgb3B0aW9ucywgaSwgY3VzdG9tRGVmaW5lcik7XG5cdH1cblxuXHRsZXQgbGFzdENoaWxkID0gb3B0aW9ucy5nZXRMYXN0VmFyaWFibGVJZCgpO1xuXG5cdGlmKCFlbnRpdHkuaGFzQWxvbmVUZW1wbGF0ZSgpICYmICFlbnRpdHkuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0b3B0aW9ucy5yZW1vdmVDb250ZXh0KCk7XG5cdH1cblxuXHRyZXR1cm4gbGFzdENoaWxkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hpbGRIYW5kbGUoZW50aXR5LCBjb250ZXh0LCBvcHRpb25zLCBpbmRleCwgY3VzdG9tRGVmaW5lcilcbntcblx0bGV0IGlzRmlyc3QgPSBpbmRleCA9PT0gMDtcblxuXHRpZihjdXN0b21EZWZpbmVyICYmIGlzRmlyc3QpIHtcblx0XHRjdXN0b21EZWZpbmVyKGVudGl0eSwgY29udGV4dCwgb3B0aW9ucyk7XG5cdH0gZWxzZSB7XG5cdFx0aWYoIWVudGl0eS5za2lwSW5pdCgpKSB7XG5cdFx0XHRuZXh0Tm9kZShjb250ZXh0LCBvcHRpb25zLCBpc0ZpcnN0ID8gJ2ZpcnN0Q2hpbGQnIDogJ25leHRTaWJsaW5nJylcblx0XHR9XG5cdH1cblxuXHRlbnRpdHkuaGFuZGxlKGNvbnRleHQsIG9wdGlvbnMpO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRsb2dpY2FsRXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGZ1bmN0aW9uRXhwcmVzc2lvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlZHMoYXN0LCBhbmFseXNlKVxue1xuXHRsZXQgcmVwbGFjZVZhcmlhYmxlV2l0aCA9IG51bGw7XG5cdHRyYXZlcnNlKGFzdCwge1xuXG5cdFx0QXJyb3dGdW5jdGlvbkV4cHJlc3Npb246IHtcblx0XHRcdGVudGVyKHBhdGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlmKHBhdGguY29udGFpbmVyLnR5cGUgPT09ICdWYXJpYWJsZURlY2xhcmF0b3InKSB7XG5cdFx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLmNvbnRhaW5lci5pZC5uYW1lO1xuXHRcdFx0XHRcdHBhdGgucmVwbGFjZVdpdGgoXG5cdFx0XHRcdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0XHRcdGlkKCdjb21wdXRlZCcpLFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0YXJyYXlFeHByZXNzaW9uKFxuXHRcdFx0XHRcdFx0XHRcdFx0YW5hbHlzZS5kZXBzW25hbWVdLm1hcChpdGVtID0+IGlkKGl0ZW0pKVxuXHRcdFx0XHRcdFx0XHRcdCksIHBhdGgubm9kZV1cblx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdCAgICBleGl0KHBhdGgpXG5cdFx0ICAgIHtcblx0XHRcdFx0XG5cdFx0ICAgIH1cblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gYXN0O1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRsb2dpY2FsRXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGZ1bmN0aW9uRXhwcmVzc2lvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBIT09LX05BTUVTID0gWydtb3VudGVkJywgJ3VubW91bnRlZCddO1xuXG5leHBvcnQgZnVuY3Rpb24gaG9va3MoYXN0LCB7IGNvbnRleHQgfSlcbntcblx0Ly8gX2hvb2tzJFxuXHRsZXQgaG9va3MgPSBjb250ZXh0Lm1ldGhvZHMuZmlsdGVyKG5hbWUgPT4ge1xuXHRcdHJldHVybiBIT09LX05BTUVTLmluY2x1ZGVzKG5hbWUpXG5cdH0pO1xuXG5cdGxldCBob29rc0xpbmtzID0gW107XG5cblx0Zm9yKGxldCBuYW1lIG9mIGhvb2tzKSB7XG5cdFx0aG9va3NMaW5rcy5wdXNoKFxuXHRcdFx0b2JqZWN0UHJvcGVydHkoXG5cdFx0XHRcdGlkKG5hbWUpLFxuXHRcdFx0XHRpZChuYW1lKSxcblx0XHRcdClcblx0XHQpO1xuXHR9XG5cblx0bGV0IGhvb2tzRGVjbGFyYXRpb24gPSB2YXJpYWJsZURlY2xhcmF0aW9uKCdsZXQnLCBbXG5cdFx0dmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0aWQoJ19ob29rcyQnKSxcblx0XHRcdG9iamVjdEV4cHJlc3Npb24oaG9va3NMaW5rcylcblx0XHQpXVxuXHQpXG5cblx0YXN0LnByb2dyYW0uYm9keS5wdXNoKGhvb2tzRGVjbGFyYXRpb24pXG5cblx0cmV0dXJuIGFzdDtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuaW1wb3J0ICogYXMgcGFyc2VyIGZyb20gXCJAYmFiZWwvcGFyc2VyXCI7XG5pbXBvcnQgZ2VuZXJhdGUgZnJvbSBcIkBiYWJlbC9nZW5lcmF0b3JcIjtcblxuaW1wb3J0IHsgcHJvcHMgfSBmcm9tIFwiLi9wcm9wc1wiO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZXMgfSBmcm9tIFwiLi9vYnNlcnZhYmxlc1wiO1xuaW1wb3J0IHsgY29tcHV0ZWRzIH0gZnJvbSBcIi4vY29tcHV0ZWRzXCI7XG5pbXBvcnQgeyBob29rcyB9IGZyb20gXCIuL2hvb2tzXCI7XG5cbmltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRsb2dpY2FsRXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGZ1bmN0aW9uRXhwcmVzc2lvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzY3JpcHQoYW5hbHlzZSwgc2NyaXB0KVxue1xuXHRsZXQgc291cmNlID0gJyc7XG5cblx0aWYoc2NyaXB0KSB7XG5cdFx0c291cmNlID0gc2NyaXB0LnNvdXJjZVxuXHR9XG5cdFxuXHRjb25zdCBhc3QgPSBwYXJzZXIucGFyc2Uoc291cmNlLCB7XG5cdFx0c291cmNlVHlwZTogXCJ1bmFtYmlndW91c1wiLFxuXHRcdHN0cmljdE1vZGU6IGZhbHNlLFxuXHR9KTtcblxuXHRwcm9wcyhhc3QpO1xuXHRvYnNlcnZhYmxlcyhhc3QpO1xuXHRjb21wdXRlZHMoYXN0LCBhbmFseXNlKTtcblx0aG9va3MoYXN0LCBhbmFseXNlKTtcblxuXHRsZXQgY29kZSA9IGdlbmVyYXRlKGFzdCwge1xuXHRcdHJldGFpbkxpbmVzOiBmYWxzZSxcblx0XHRjb21wYWN0OiBmYWxzZSxcblx0XHRtaW5pZmllZDogZmFsc2UsXG5cdFx0Y29uY2lzZTogZmFsc2UsXG5cdFx0cXVvdGVzOiBcImRvdWJsZVwiLFxuXHR9KTtcblxuXHRyZXR1cm4gY29kZS5jb2RlO1xufSIsImltcG9ydCB0cmF2ZXJzZSBmcm9tIFwiQGJhYmVsL3RyYXZlcnNlXCI7XG5cbmltcG9ydCB7XG5cdG1lbWJlckV4cHJlc3Npb24sXG5cdGlkZW50aWZpZXIgYXMgaWQsXG5cdHJldHVyblN0YXRlbWVudCxcblx0YmxvY2tTdGF0ZW1lbnQsXG5cdHN0cmluZ0xpdGVyYWwsXG5cdGV4cHJlc3Npb25TdGF0ZW1lbnQsXG5cdGNhbGxFeHByZXNzaW9uLFxuXHRvYmplY3RFeHByZXNzaW9uLFxuXHRvYmplY3RQcm9wZXJ0eSxcblx0YXJyYXlFeHByZXNzaW9uLFxuXHRsb2dpY2FsRXhwcmVzc2lvbixcblx0YXJyb3dGdW5jdGlvbkV4cHJlc3Npb24sXG5cdGZ1bmN0aW9uRXhwcmVzc2lvbixcblx0dmFyaWFibGVEZWNsYXJhdG9yLFxuXHR2YXJpYWJsZURlY2xhcmF0aW9uLFxufSBmcm9tIFwiQGJhYmVsL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvYnNlcnZhYmxlcyhhc3QpXG57XG5cdHRyYXZlcnNlKGFzdCwge1xuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXG5cdFx0XHRcdGlmKHZhbHVlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgdmFsdWUuY2FsbGVlLm5hbWUgPT09ICdvJykge1xuXHRcdFx0XHRcdHZhbHVlLmNhbGxlZS5uYW1lID0gJ29ic2VydmFibGUnO1xuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGFzdDtcbn0iLCJpbXBvcnQgdHJhdmVyc2UgZnJvbSBcIkBiYWJlbC90cmF2ZXJzZVwiO1xuXG5pbXBvcnQge1xuXHRtZW1iZXJFeHByZXNzaW9uLFxuXHRpZGVudGlmaWVyIGFzIGlkLFxuXHRyZXR1cm5TdGF0ZW1lbnQsXG5cdGJsb2NrU3RhdGVtZW50LFxuXHRzdHJpbmdMaXRlcmFsLFxuXHRleHByZXNzaW9uU3RhdGVtZW50LFxuXHRjYWxsRXhwcmVzc2lvbixcblx0b2JqZWN0RXhwcmVzc2lvbixcblx0b2JqZWN0UHJvcGVydHksXG5cdGFycmF5RXhwcmVzc2lvbixcblx0bG9naWNhbEV4cHJlc3Npb24sXG5cdGFycm93RnVuY3Rpb25FeHByZXNzaW9uLFxuXHRmdW5jdGlvbkV4cHJlc3Npb24sXG5cdHZhcmlhYmxlRGVjbGFyYXRvcixcblx0dmFyaWFibGVEZWNsYXJhdGlvbixcbn0gZnJvbSBcIkBiYWJlbC90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvcHMoYXN0KVxue1xuXHRsZXQgcmVwbGFjZVZhcmlhYmxlV2l0aCA9IG51bGw7XG5cdHRyYXZlcnNlKGFzdCwge1xuXG5cdFx0VmFyaWFibGVEZWNsYXJhdGlvbjoge1xuXHRcdFx0ZXhpdChwYXRoKSB7XG5cdFx0XHRcdGlmKHJlcGxhY2VWYXJpYWJsZVdpdGggIT09IG51bGwpIHtcblx0XHRcdFx0XHRwYXRoLnJlcGxhY2VXaXRoKHJlcGxhY2VWYXJpYWJsZVdpdGgpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFZhcmlhYmxlRGVjbGFyYXRvcjoge1xuXHRcdFx0ZW50ZXIocGF0aClcblx0XHRcdHtcblx0XHRcdFx0cmVwbGFjZVZhcmlhYmxlV2l0aCA9IG51bGw7XG5cblx0XHRcdFx0bGV0IG5hbWUgPSBwYXRoLm5vZGUuaWQ7XG5cdFx0XHRcdGxldCB2YWx1ZSA9IHBhdGgubm9kZS5pbml0O1xuXG5cdFx0XHRcdGlmKHZhbHVlLnR5cGUgPT09ICdDYWxsRXhwcmVzc2lvbicgJiYgdmFsdWUuY2FsbGVlLm5hbWUgPT09ICdwJykge1xuXG5cdFx0XHRcdFx0bGV0IHByb3BWYXJpYWJsZSA9IG1lbWJlckV4cHJlc3Npb24oaWQoJyRwcm9wcycpLCBuYW1lKTtcblxuXHRcdFx0XHRcdHJlcGxhY2VWYXJpYWJsZVdpdGggPSB2YXJpYWJsZURlY2xhcmF0aW9uKFxuXHRcdFx0XHRcdFx0J2xldCcsXG5cdFx0XHRcdFx0XHRbdmFyaWFibGVEZWNsYXJhdG9yKFxuXHRcdFx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdFx0XHRuZXcgY2FsbEV4cHJlc3Npb24oXG5cdFx0XHRcdFx0XHRcdFx0aWQoJ19nZXRQcm9wJCcpLFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdGlkKCckcHJvcHMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0cmluZ0xpdGVyYWwobmFtZS5uYW1lKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlLmFyZ3VtZW50c1swXSxcblx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCldXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9XG5cdFx0ICAgIH0sXG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIGFzdDtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZGlmZihwYXJlbnQsIGEsIGIsIGtleUV4cHIsIGdldCwgYmVmb3JlKVxue1xuXHRjb25zdCBhSWR4ID0gbmV3IE1hcCgpO1xuXHRjb25zdCBiSWR4ID0gbmV3IE1hcCgpO1xuXHRsZXQgaTtcblx0bGV0IGo7XG5cblx0Ly8gQ3JlYXRlIGEgbWFwcGluZyBmcm9tIGtleXMgdG8gdGhlaXIgcG9zaXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG5cdFx0bGV0IGtleSA9IGtleUV4cHIoYVtpXSwgaSk7XG5cdFx0YUlkeC5zZXQoa2V5LCBpKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIG1hcHBpbmcgZnJvbSBrZXlzIHRvIHRoZWlyIHBvc2l0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRmb3IgKGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdGxldCBrZXkgPSBrZXlFeHByKGJbaV0sIGkpO1xuXHRcdGJJZHguc2V0KGtleSwgaSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhhSWR4LCBiSWR4KTtcblxuXHRmb3IgKGkgPSBqID0gMDsgaSAhPT0gYS5sZW5ndGggfHwgaiAhPT0gYi5sZW5ndGg7KSB7XG5cdFx0dmFyIGFFbG0gPSBhW2ldLFxuXHRcdFx0YkVsbSA9IGJbal07XG5cblx0XHRpZiAoYUVsbSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gVGhpcyBpcyBhIGVsZW1lbnQgdGhhdCBoYXMgYmVlbiBtb3ZlZCB0byBlYXJsaWVyIGluIHRoZSBsaXN0XG5cdFx0XHRpKys7XG5cdFx0fSBlbHNlIGlmIChiLmxlbmd0aCA8PSBqKSB7XG5cdFx0XHQvLyBObyBtb3JlIGVsZW1lbnRzIGluIG5ldywgdGhpcyBpcyBhIGRlbGV0ZVxuXHRcdFx0cGFyZW50LnJlbW92ZUNoaWxkKGdldChhW2ldLCBpLCAtMSkpO1xuXHRcdFx0aSsrO1xuXHRcdH0gZWxzZSBpZiAoYS5sZW5ndGggPD0gaSkge1xuXHRcdFx0Ly8gTm8gbW9yZSBlbGVtZW50cyBpbiBvbGQsIHRoaXMgaXMgYW4gYWRkaXRpb25cblx0XHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoZ2V0KGJFbG0sIGosIDEpLCBnZXQoYVtpXSwgaSwgMCkgfHwgYmVmb3JlKTtcblx0XHRcdGorKztcblx0XHR9IGVsc2UgaWYgKGFFbG0gPT09IGJFbG0pIHtcblx0XHRcdC8vIE5vIGRpZmZlcmVuY2UsIHdlIG1vdmUgb25cblx0XHRcdGkrKztcblx0XHRcdGorKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIGN1cnJlbnQgZWxlbWVudCBhdCB0aGlzIGxvY2F0aW9uIGluIHRoZSBuZXcgbGlzdFxuXHRcdFx0Ly8gVGhpcyBnaXZlcyB1cyB0aGUgaWR4IG9mIHdoZXJlIHRoaXMgZWxlbWVudCBzaG91bGQgYmVcblx0XHRcdHZhciBjdXJFbG1Jbk5ldyA9IGJJZHguZ2V0KGFFbG0pO1xuXHRcdFx0Ly8gTG9vayBmb3IgdGhlIHRoZSB3YW50ZWQgZWxtZW50IGF0IHRoaXMgbG9jYXRpb24gaW4gdGhlIG9sZCBsaXN0XG5cdFx0XHQvLyBUaGlzIGdpdmVzIHVzIHRoZSBpZHggb2Ygd2hlcmUgdGhlIHdhbnRlZCBlbGVtZW50IGlzIG5vd1xuXHRcdFx0dmFyIHdhbnRlZEVsbUluT2xkID0gYUlkeC5nZXQoYkVsbSk7XG5cdFx0XHRpZiAoY3VyRWxtSW5OZXcgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHQvLyBDdXJyZW50IGVsZW1lbnQgaXMgbm90IGluIG5ldyBsaXN0LCBpdCBoYXMgYmVlbiByZW1vdmVkXG5cdFx0XHRcdHBhcmVudC5yZW1vdmVDaGlsZChnZXQoYVtpXSwgaSwgLTEpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlIGlmICh3YW50ZWRFbG1Jbk9sZCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdC8vIE5ldyBlbGVtZW50IGlzIG5vdCBpbiBvbGQgbGlzdCwgaXQgaGFzIGJlZW4gYWRkZWRcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYkVsbSwgaiwgMSksXG5cdFx0XHRcdFx0Z2V0KGFbaV0sIGksIDApIHx8IGJlZm9yZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRqKys7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFbGVtZW50IGlzIGluIGJvdGggbGlzdHMsIGl0IGhhcyBiZWVuIG1vdmVkXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKCdtb3ZlJywgYVtpXSwgJ2Zyb20nLCB3YW50ZWRFbG1Jbk9sZCwgJ3RvJywgaSlcblx0XHRcdFx0cGFyZW50Lmluc2VydEJlZm9yZShcblx0XHRcdFx0XHRnZXQoYVt3YW50ZWRFbG1Jbk9sZF0sIHdhbnRlZEVsbUluT2xkLCAxKSxcblx0XHRcdFx0XHRnZXQoYVtpXSwgMCkgfHwgYmVmb3JlXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGFbd2FudGVkRWxtSW5PbGRdID0gbnVsbDtcblx0XHRcdFx0aWYgKHdhbnRlZEVsbUluT2xkID4gaSArIDEpIGkrKztcblx0XHRcdFx0aisrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBiO1xufVxuIiwiY29uc3QgSFRNTFRhZ3MgPSBbXG5cdFwiIWRvY3R5cGVcIiwgXCJhXCIsIFwiYWJiclwiLCBcImFjcm9ueW1cIiwgXCJhZGRyZXNzXCIsIFwiYXBwbGV0XCIsIFwiYXJlYVwiLCBcImFydGljbGVcIiwgXCJhc2lkZVwiLCBcImF1ZGlvXCIsXG5cdFwiYlwiLCBcImJhc2VcIiwgXCJiYXNlZm9udFwiLCBcImJiXCIsIFwiYmRvXCIsIFwiYmlnXCIsIFwiYmxvY2txdW90ZVwiLCBcImJvZHlcIiwgXCJiclwiLCBcImJ1dHRvblwiLCBcImNhbnZhc1wiLFxuXHRcImNhcHRpb25cIiwgXCJjZW50ZXJcIiwgXCJjaXRlXCIsIFwiY29kZVwiLCBcImNvbFwiLCBcImNvbGdyb3VwXCIsIFwiY29tbWFuZFwiLCBcImRhdGFncmlkXCIsIFwiZGF0YWxpc3RcIiwgXCJkZFwiLFxuXHRcImRlbFwiLCBcImRldGFpbHNcIiwgXCJkZm5cIiwgXCJkaWFsb2dcIiwgXCJkaXJcIiwgXCJkaXZcIiwgXCJkbFwiLCBcImR0XCIsIFwiZW1cIiwgXCJlbWJlZFwiLCBcImV2ZW50c291cmNlXCIsIFwiZmllbGRzZXRcIixcblx0XCJmaWdjYXB0aW9uXCIsIFwiZmlndXJlXCIsIFwiZm9udFwiLCBcImZvb3RlclwiLCBcImZvcm1cIiwgXCJmcmFtZVwiLCBcImZyYW1lc2V0XCIsIFwiaDE+IHRvIDxoNlwiLCBcImhlYWRcIiwgXCJoZWFkZXJcIixcblx0XCJoZ3JvdXBcIiwgXCJoclwiLCBcImh0bWxcIiwgXCJpXCIsIFwiaWZyYW1lXCIsIFwiaW1nXCIsIFwiaW5wdXRcIiwgXCJpbnNcIiwgXCJpc2luZGV4XCIsIFwia2JkXCIsIFwia2V5Z2VuXCIsIFwibGFiZWxcIixcblx0XCJsZWdlbmRcIiwgXCJsaVwiLCBcImxpbmtcIiwgXCJtYXBcIiwgXCJtYXJrXCIsIFwibWVudVwiLCBcIm1ldGFcIiwgXCJtZXRlclwiLCBcIm5hdlwiLCBcIm5vZnJhbWVzXCIsIFwibm9zY3JpcHRcIixcblx0XCJvYmplY3RcIiwgXCJvbFwiLCBcIm9wdGdyb3VwXCIsIFwib3B0aW9uXCIsIFwib3V0cHV0XCIsIFwicFwiLCBcInBhcmFtXCIsIFwicHJlXCIsIFwicHJvZ3Jlc3NcIiwgXCJxXCIsIFwicnBcIiwgXCJydFwiLFxuXHRcInJ1YnlcIiwgXCJzXCIsIFwic2FtcFwiLCBcInNjcmlwdFwiLCBcInNlY3Rpb25cIiwgXCJzZWxlY3RcIiwgXCJzbWFsbFwiLCBcInNvdXJjZVwiLCBcInNwYW5cIiwgXCJzdHJpa2VcIiwgXCJzdHJvbmdcIixcblx0XCJzdHlsZVwiLCBcInN1YlwiLCBcInN1cFwiLCBcInRhYmxlXCIsIFwidGJvZHlcIiwgXCJ0ZFwiLCBcInRleHRhcmVhXCIsIFwidGZvb3RcIiwgXCJ0aFwiLCBcInRoZWFkXCIsIFwidGltZVwiLCBcInRpdGxlXCIsXG5cdFwidHJcIiwgXCJ0cmFja1wiLCBcInR0XCIsIFwidVwiLCBcInVsXCIsIFwidmFyXCIsIFwidmlkZW9cIiwgXCJ3YnJcIiwgXCJ0ZW1wbGF0ZVwiXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQobmFtZSlcbntcblx0cmV0dXJuICFIVE1MVGFncy5pbmNsdWRlcyhuYW1lKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VNYXAoc3RyLCBleHBlY3RzTG93ZXJDYXNlKVxue1xuXHR2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblx0dmFyIGxpc3QgPSBzdHIuc3BsaXQoJywnKTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRtYXBbbGlzdFtpXV0gPSB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgP1xuXHRcdGZ1bmN0aW9uKHZhbCkgeyByZXR1cm4gbWFwW3ZhbC50b0xvd2VyQ2FzZSgpXTsgfSA6XG5cdFx0ZnVuY3Rpb24odmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuIiwiaW1wb3J0IHsgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGF0dHJBcmdUb09iaihhcmdzKVxue1xuXHRsZXQgcmVzdWx0ID0ge307XG5cblx0aWYoQXJyYXkuaXNBcnJheShhcmdzKSkge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cmVzdWx0ID0gT2JqZWN0LmFzc2lnbihyZXN1bHQsIGF0dHJBcmdUb09iaihhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0cmVzdWx0ID0gYXJncztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyQXJnVG9TdHJpbmcoYXJncylcbntcblx0bGV0IHJlc3VsdCA9IFtdO1xuXHQvLyBhcmdzID0gYXJncy5jb25jYXQoW10pO1xuXHRpZihBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KGF0dHJBcmdUb1N0cmluZyhhcmdzW2ldKSk7XG5cdFx0fVxuXHR9IGVsc2UgaWYodHlwZW9mIGFyZ3MgPT09ICdvYmplY3QnKSB7XG5cdFx0Zm9yKGxldCBrZXkgaW4gYXJncykge1xuXHRcdFx0aWYoYXJnc1trZXldKSB7XG5cdFx0XHRcdHJlc3VsdC5wdXNoKGtleSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdC5wdXNoKGFyZ3MpO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpXG57XG5cdGxldCBsYXN0Q2xhc3NBZG9wdGVkID0gW107XG5cdHdhdGNoKHZhbHVlLCAodikgPT4ge1xuXHRcdGxldCB0bXAgPSBub2RlLmNsYXNzTGlzdDtcblxuXHRcdGxldCB0b1NldCA9IEFycmF5LmZyb20oXG5cdFx0XHRuZXcgU2V0KGF0dHJBcmdUb1N0cmluZyh2KSlcblx0XHQpO1xuXHRcdGxldCB0b1JlbW92ZSA9IGxhc3RDbGFzc0Fkb3B0ZWQuZmlsdGVyKHggPT4gIXRvU2V0LmluY2x1ZGVzKHgpKTtcblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1NldCkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuXHRcdH1cblxuXHRcdGZvcihsZXQgbmFtZSBvZiB0b1JlbW92ZSkge1xuXHRcdFx0bm9kZS5jbGFzc0xpc3QucmVtb3ZlKG5hbWUpO1xuXHRcdH1cblxuXHRcdGxhc3RDbGFzc0Fkb3B0ZWQgPSB0b1NldDtcblx0fSwgcmVuZGVyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdHlsZXMobm9kZSwgdmFsdWUsIHJlbmRlcilcbntcblx0d2F0Y2godmFsdWUsICh2KSA9PiB7XG5cdFx0bGV0IHN0eWxlcyA9IGF0dHJBcmdUb09iaih2KTtcblx0XHRmb3IobGV0IG5hbWUgaW4gc3R5bGVzKSB7XG5cdFx0XHRub2RlLnN0eWxlW25hbWVdID0gc3R5bGVzW25hbWVdO1xuXHRcdH1cblx0fSwgcmVuZGVyKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gYXR0cnMobm9kZSwgcmVuZGVyLCBhdHRycylcbntcblx0Zm9yKGxldCBuYW1lIGluIGF0dHJzKVxuXHR7XG5cdFx0bGV0IHZhbHVlID0gYXR0cnNbbmFtZV07XG5cdFx0aWYobmFtZSA9PT0gJ2NsYXNzJykge1xuXHRcdFx0bWFrZUNsYXNzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSBpZihuYW1lID09PSAnc3R5bGUnKSB7XG5cdFx0XHRtYWtlU3R5bGVzKG5vZGUsIHZhbHVlLCByZW5kZXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3YXRjaCh2YWx1ZSwgKHYpID0+IHtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgdik7XG5cdFx0XHR9LCByZW5kZXIpO1xuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IHByZXBhcmUgfSBmcm9tICcuL3ByZXBhcmUnO1xuaW1wb3J0IHsgaXNDb21wb25lbnQgfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IHsgRXhwcmVzc2lvbiwgVGV4dCwgTm9kZSwgU2xvdCwgQ29tcG9uZW50IH0gZnJvbSAnLi90eXBlcyc7XG5cbmltcG9ydCB7IFBhcnNlciBhcyBIVE1MUGFyc2VyIH0gZnJvbSAnaHRtbHBhcnNlcjInO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VBdHRycyhzdHIpXG57XG5cdGxldCBhdHRycyA9IHt9O1xuXG5cdHN0ci50cmltKCkucmVwbGFjZSgvKFteXFxzXSopPVtcIiddKC4qPylbXCInXXwoW1xcd1xcLV0rKS9nLCBmdW5jdGlvbihzcmMyLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIXNyYzIpIHJldHVybjtcbiAgICAgICAgbmFtZSA9IG5hbWUgfHwgc3JjMjtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgYXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9KTtcblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUJsb2NrcyhibG9ja3MsIGh0bWwpXG57XG5cdGxldCByZXMgPSB7fTtcblxuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRyZXNba2V5XSA9IG51bGw7XG5cblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fSguKik+KCgufFxcXFxzKSopPFxcXFwvJHtrZXl9PmAsICdnJyk7XG5cdFx0bGV0IG1hdGNoZXMgPSByZWdleHAuZXhlYyhodG1sKTtcblx0XHRpZihtYXRjaGVzKSB7XG5cblx0XHRcdHJlc1trZXldID0ge1xuXHRcdFx0XHRvcHRpb25zOiBPYmplY3QuYXNzaWduKGJsb2Nrc1trZXldLCBwYXJzZUF0dHJzKG1hdGNoZXNbMV0pKSxcblx0XHRcdFx0c291cmNlOiBtYXRjaGVzWzJdLFxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShodG1sKVxue1xuXHQvLyBnZXQgYWRkaXRpb25hbCBibG9ja3MgZS5nLiBzY3JpcHQsIHN0eWxlLCBkb2Ncblx0bGV0IGJsb2NrcyA9IHBhcnNlQmxvY2tzKHtcblx0XHRzY3JpcHQ6IHt9LFxuXHRcdHN0eWxlOiB7XG5cdFx0XHRsYW5nOiAnY3NzJyxcblx0XHR9LFxuXHR9LCBodG1sKTtcblxuXHQvLyBjbGVhbiB1cCBodG1sIGFuZCByZXBsYWNlIGV4cHJlc3Npb24gd2l0aCB0YWctZXhwcmVzc2lvblxuXHRodG1sID0gcHJlcGFyZShibG9ja3MsIGh0bWwpO1xuXG5cdC8vIFBhcnNlIFRBR3Ncblx0bGV0IHN0YWNrID0gW1xuXHRcdG5ldyBFeHByZXNzaW9uKHsgdHlwZTogJ3Byb2dyYW0nIH0pXG5cdF07XG5cblx0ZnVuY3Rpb24gY3VycmVudFN0YWNrTm9kZSgpXG5cdHtcblx0XHRyZXR1cm4gc3RhY2tbc3RhY2subGVuZ3RoIC0gMV07XG5cdH1cblxuXHRjb25zdCBwYXJzZSA9IG5ldyBIVE1MUGFyc2VyKHtcblx0XHRcblx0XHRvbm9wZW50YWcobmFtZSwgYXR0cnMpXG5cdFx0e1xuXHRcdFx0bGV0IHBhcmVudCA9IGN1cnJlbnRTdGFja05vZGUoKTtcblx0XHRcdGxldCBlbnRpdHk7XG5cblx0XHRcdGlmKG5hbWUgPT09ICdleHByJykge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgRXhwcmVzc2lvbihhdHRycyk7XG5cdFx0XHR9IGVsc2UgaWYobmFtZSA9PT0gJ3Nsb3QnKSB7XG5cdFx0XHRcdGVudGl0eSA9IG5ldyBTbG90KGF0dHJzKTtcblx0XHRcdH0gZWxzZSBpZiAoaXNDb21wb25lbnQobmFtZSkpIHtcblx0XHRcdFx0ZW50aXR5ID0gbmV3IENvbXBvbmVudChuYW1lLCBhdHRycyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbnRpdHkgPSBuZXcgTm9kZShuYW1lLCBhdHRycyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHBhcmVudCkge1xuXHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQoZW50aXR5KTtcblx0XHRcdH1cblxuXHRcdFx0c3RhY2sucHVzaChlbnRpdHkpO1xuXHRcdH0sXG5cblx0XHRvbnRleHQodGV4dClcblx0XHR7XG5cdFx0XHRsZXQgcGFyZW50ID0gY3VycmVudFN0YWNrTm9kZSgpO1xuXG5cdFx0XHR0ZXh0ID0gdGV4dC50cmltKCk7XG5cblx0XHRcdGlmKHRleHQgIT09ICcnICYmIHBhcmVudCkge1xuXHRcdFx0XHRsZXQgbm9kZSA9IG5ldyBUZXh0KHRleHQpO1xuXHRcdFx0XHRpZihwYXJlbnQpIHtcblx0XHRcdFx0XHRwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XG5cdFx0XHRcdH1cblx0ICAgIFx0fVxuXHQgICAgfSxcblxuXHRcdG9uY2xvc2V0YWcobmFtZSlcblx0XHR7XG5cdFx0XHRsZXQgcmVtb3ZlZCA9IHN0YWNrLnBvcCgpO1xuXHQgICAgfVxuXG5cdH0sIHsgZGVjb2RlRW50aXRpZXM6IHRydWUgfSlcblx0XG5cdHBhcnNlLndyaXRlKGh0bWwpO1xuXHRwYXJzZS5lbmQoKTtcblxuXHRibG9ja3MudGVtcGxhdGUgPSBzdGFja1swXTtcblx0Ly8gY29uc29sZS5sb2coYmxvY2tzLnRlbXBsYXRlLmNoaWxkcmVuWzBdKVxuXHRyZXR1cm4gYmxvY2tzO1xufVxuIiwiZnVuY3Rpb24gcHJlcGFyZUhUTUwoaHRtbClcbntcblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvXFx0L2csICcgJykucmVwbGFjZSgvXFxzXFxzKy9nLCAnICcpLnRyaW0oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmUoYmxvY2tzLCBodG1sKVxue1xuXHRmb3IobGV0IGtleSBpbiBibG9ja3MpIHtcblx0XHRsZXQgcmVnZXhwID0gbmV3IFJlZ0V4cChgPCR7a2V5fS4qPigoLnxcXFxccykqKTxcXFxcLyR7a2V5fT5gLCAnZycpO1xuXHRcdGh0bWwgPSBodG1sLnJlcGxhY2UocmVnZXhwLCAnJyk7XG5cdH1cblxuXHRodG1sID0gaHRtbFxuXHRcdC8vIGlmXG5cdFx0LnJlcGxhY2UoL0BpZlxcKCguKilcXCkvZywgJzxleHByIHR5cGU9XCJzdGF0ZW1lbnRcIj48ZXhwciB0eXBlPVwicHJvZ3JhbVwiIHZhbHVlPVwiJDFcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZWxzZWlmXFwoKC4qKVxcKS9nLCAnPC9leHByPjxleHByIHR5cGU9XCJwcm9ncmFtXCIgdmFsdWU9XCIkMVwiPicpXG5cdFx0LnJlcGxhY2UoL0BlbHNlL2csICc8L2V4cHI+PGV4cHIgdHlwZT1cInByb2dyYW1cIiB2YWx1ZT1cInRydWVcIj4nKVxuXHRcdC5yZXBsYWNlKC9AZW5kaWYvZywgJzwvZXhwcj48L2V4cHI+Jylcblx0XHQvLyBlYWNoXG5cdFx0LnJlcGxhY2UoL0BlYWNoXFwoKC4qKVxcKS9nLCAnPGV4cHIgdHlwZT1cImVhY2hcIiB2YWx1ZT1cIiQxXCI+Jylcblx0XHQucmVwbGFjZSgvQGVuZGVhY2gvZywgJzwvZXhwcj4nKVxuXG5cdHJldHVybiBwcmVwYXJlSFRNTChodG1sKTtcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuaW1wb3J0IHsgTm9kZSB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IGV4dGVuZHMgVHlwZSB7XG5cdGNvbnN0cnVjdG9yKG5hbWUsIGF0dHJzKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMub3B0aW9uID0gcGFyc2VBdHRycyhhdHRycywgdHJ1ZSk7XG5cdFx0dGhpcy5jaGlsZHJlbiA9IFtdO1xuXHRcdHRoaXMudHlwZSA9ICdjb21wb25lbnQnO1xuXHR9XG5cblx0aGFzQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gT2JqZWN0LmtleXModGhpcy5vcHRpb24uYXR0cmlidXRlcykubGVuZ3RoID4gMFxuXHR9XG5cblx0Z2V0TmFtZShuYW1lID0gbnVsbClcblx0e1xuXHRcdGlmKG5hbWUgPT09IG51bGwpIHtcblx0XHRcdG5hbWUgPSB0aGlzLm5hbWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGBfY29tcG9uZW50XyR7IG5hbWUucmVwbGFjZSgvW14wLTlhLXpdL2dpLCAnJykgfSRgO1xuXHR9XG5cblx0Z2V0SW1wb3J0KHBhdGgsIGRlbGltZXRlcilcblx0e1xuXHRcdGxldCBuYW1lID0gdGhpcy5uYW1lLnJlcGxhY2UoL1teMC05YS16XS9naSwgJy8nKTtcblx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLm5hbWUsIG5hbWUpXG5cdFx0cmV0dXJuIGBpbXBvcnQgJHsgdGhpcy5nZXROYW1lKCkgfSBmcm9tIFwiJHtwYXRofS8keyBuYW1lIH0uaGF3YVwiO2Bcblx0XHRcblx0fVxuXG5cdGFkZENoaWxkKGNoaWxkKVxuXHR7XG5cdFx0bGV0IGJpbmQgPSB0aGlzO1xuXG5cdFx0aWYoIXRoaXMuaXNTbG90KGNoaWxkKSkge1xuXHRcdFx0YmluZCA9IHRoaXMuZ2V0RGVmYXVsdFNsb3QoKTtcblx0XHR9XG5cblx0XHRjaGlsZC5wYXJlbnQgPSBiaW5kO1xuXHRcdGJpbmQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRpc1Nsb3QoZW50aXR5LCBuYW1lID0gbnVsbClcblx0e1xuXHRcdHJldHVybiBlbnRpdHkudHlwZSA9PT0gJ25vZGUnICYmIGVudGl0eS50YWcgPT09ICd0ZW1wbGF0ZScgJiYgZW50aXR5LmF0dHJzLnNsb3Q7XG5cdH1cblxuXHRnZXREZWZhdWx0U2xvdCgpXG5cdHtcblx0XHRsZXQgZGVmYXVsdFNsb3QgPSBmYWxzZTtcblxuXHRcdGZvcihsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuXHRcdFx0aWYodGhpcy5pc1Nsb3QoY2hpbGQpKSB7XG5cdFx0XHRcdGlmKGNoaWxkLmF0dHJzLnNsb3QgPT09ICdkZWZhdWx0Jykge1xuXHRcdFx0XHRcdGRlZmF1bHRTbG90ID0gY2hpbGQ7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZighZGVmYXVsdFNsb3QpIHtcblx0XHRcdGRlZmF1bHRTbG90ID0gbmV3IE5vZGUoJ3RlbXBsYXRlJywge1xuXHRcdFx0XHRzbG90OiAnZGVmYXVsdCdcblx0XHRcdH0pO1xuXG5cdFx0XHRkZWZhdWx0U2xvdC5wYXJlbnQgPSB0aGlzO1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5wdXNoKGRlZmF1bHRTbG90KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmYXVsdFNsb3Q7XG5cdH1cbn1cbiIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4cHJlc3Npb24gZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHsgdHlwZSA9IG51bGwsIHZhbHVlID0gbnVsbCB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMudmFsdWUgPSB2YWx1ZTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XG5cdH1cblxuXHRcblxuXHRcblxuXHRcbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuaW1wb3J0IHsgYXR0cnMgYXMgcGFyc2VBdHRycyB9IGZyb20gJy4uL2F0dHJzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZSBleHRlbmRzIFR5cGVcbntcblx0Y29uc3RydWN0b3IodGFnLCBhdHRycylcblx0e1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLnRhZyA9IHRhZztcblx0XHR0aGlzLmF0dHJzID0gYXR0cnM7XG5cdFx0dGhpcy5vcHRpb24gPSBwYXJzZUF0dHJzKGF0dHJzKTtcblx0XHR0aGlzLmNoaWxkcmVuID0gW107XHRcblx0XHR0aGlzLnR5cGUgPSAnbm9kZSc7XG5cdH1cblxuXHRoYXNBdHRyaWJ1dGVzKClcblx0e1xuXHRcdHJldHVybiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbi5hdHRyaWJ1dGVzKS5sZW5ndGggPiAwXG5cdH1cbn0iLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbG90IGV4dGVuZHMgVHlwZVxue1xuXHRjb25zdHJ1Y3Rvcih7IG5hbWUgPSAnZGVmYXVsdCcsIHRhZyA9ICdzcGFuJyB9KVxuXHR7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMudGFnID0gdGFnO1xuXHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcdFxuXHRcdHRoaXMudHlwZSA9ICdzbG90Jztcblx0fVxuXHRcdFxuXHQvLyBtYWtlVGVtcGxhdGUob25seUNoaWxkcmVuID0gdHJ1ZSlcblx0Ly8ge1xuXHQvLyBcdGxldCB0ZW1wbGF0ZSA9IGA8JHt0aGlzLnRhZ31gO1xuXG5cdC8vIFx0dGVtcGxhdGUgKz0gJz4nO1xuXG5cdC8vIFx0bGV0IGNoaWxkVGVtcGxhdGUgPSB0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiBjaGlsZC5tYWtlVGVtcGxhdGUoZmFsc2UpKS5qb2luKCcnKTtcblxuXHQvLyBcdHRlbXBsYXRlICs9IGNoaWxkVGVtcGxhdGU7XG5cdFx0XG5cdC8vIFx0dGVtcGxhdGUgKz0gYDwvJHt0aGlzLnRhZ30+YDtcblxuXHQvLyBcdGlmKFsnc3RhdGVtZW50JywgJ2VhY2gnLCAnY29tcG9uZW50J10uaW5jbHVkZXModGhpcy50eXBlKSkge1xuXHQvLyBcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0Ly8gXHR9XG5cblx0Ly8gXHRpZighdGhpcy50YWcpIHtcblx0Ly8gXHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHQvLyBcdH1cblxuXHQvLyBcdHJldHVybiB0ZW1wbGF0ZTtcblx0Ly8gfVxufSIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHQgZXh0ZW5kcyBUeXBlXG57XG5cdGNvbnN0cnVjdG9yKHRleHQpXG5cdHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMudmFsdWUgPSB0ZXh0O1xuXHRcdHRoaXMudHlwZSA9ICd0ZXh0Jztcblx0fVxuXG5cdG1ha2VUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gdGhpcy52YWx1ZTtcblx0fVxuXG59IiwiaW1wb3J0IHsgcnVsZXMgfSBmcm9tICdAaGF3YS9jb21waWxlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0bWFwKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYodGhpcy5jaGlsZHJlbiAmJiB0aGlzLnR5cGUgIT09ICdzdGF0ZW1lbnQnKSB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjYWxsYmFjayk7XG5cdFx0fVxuXHR9XG5cblx0YWRkQ2hpbGQoY2hpbGQpXG5cdHtcblx0XHRjaGlsZC5wYXJlbnQgPSB0aGlzO1xuXHRcdHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cdH1cblxuXHRoYW5kbGUoY29udGV4dCwgb3B0aW9ucylcblx0e1xuXHRcdHJldHVybiBydWxlc1t0aGlzLnR5cGVdLmNhbGwodGhpcywgY29udGV4dCwgb3B0aW9ucyk7XG5cdH1cblxuXHRpc1Jvb3QoKVxuXHR7XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50ID09PSBudWxsO1xuXHR9XG5cblx0c2tpcEZpcnN0Q2hpbGRJbml0KClcblx0e1xuXHRcdGlmKHRoaXMuaXNUZW1wbGF0ZSgpKSB7XG5cdFx0XHRpZih0aGlzLmF0dHJzKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmF0dHJzLnNsb3QgPT09IHVuZGVmaW5lZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aXNUZW1wbGF0ZSgpXG5cdHtcblx0XHRyZXR1cm4gKHRoaXMudHlwZSA9PT0gJ25vZGUnICYmIHRoaXMudGFnID09PSAndGVtcGxhdGUnKTtcblx0fVxuXG5cdGhhc0Fsb25lVGVtcGxhdGUoKVxuXHR7XG5cdFx0bGV0IGFsb25lID0gdHJ1ZTtcblxuXHRcdGZvcihsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbikge1xuXHRcdFx0aWYoIWNoaWxkLmlzVGVtcGxhdGUoKSkge1xuXHRcdFx0XHRhbG9uZSA9IGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBhbG9uZTtcblx0fVxuXG5cdHNraXBJbml0KClcblx0e1xuXHRcdHJldHVybiBmYWxzZTsvL3RoaXMudHlwZSA9PT0gJ3Byb2dyYW0nIHx8IHRoaXMudHlwZSA9PT0gJ3Nsb3QnO1xuXHR9XG5cblx0bWFrZVRlbXBsYXRlKG9ubHlDaGlsZHJlbiA9IHRydWUpXG5cdHtcblx0XHRsZXQgdGVtcGxhdGUgPSBgPCR7dGhpcy50YWd9YDtcblx0XHRcblx0XHRsZXQgYXR0cnMgPSB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uLnN0YXRpY0F0dHJzIDoge307XG5cblx0XHRmb3IobGV0IGtleSBpbiBhdHRycykge1xuXHRcdFx0dGVtcGxhdGUgKz0gYCAke2tleX09XCIke2F0dHJzW2tleV19XCJgO1xuXHRcdH1cblxuXHRcdHRlbXBsYXRlICs9ICc+JztcblxuXHRcdGxldCBjaGlsZFRlbXBsYXRlID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQubWFrZVRlbXBsYXRlKGZhbHNlKSkuam9pbignJyk7XG5cblx0XHR0ZW1wbGF0ZSArPSBjaGlsZFRlbXBsYXRlO1xuXHRcdFxuXHRcdHRlbXBsYXRlICs9IGA8LyR7dGhpcy50YWd9PmA7XG5cblx0XHRpZihbJ3N0YXRlbWVudCcsICdlYWNoJywgJ2NvbXBvbmVudCddLmluY2x1ZGVzKHRoaXMudHlwZSkgJiYgIW9ubHlDaGlsZHJlbikge1xuXHRcdFx0cmV0dXJuICc8IS0tLS0+Jztcblx0XHR9XG5cblx0XHRpZighdGhpcy50YWcgfHwgdGhpcy5pc1RlbXBsYXRlKCkpIHtcblx0XHRcdHJldHVybiBjaGlsZFRlbXBsYXRlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0ZW1wbGF0ZTtcblx0fVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGV2ZW50cyhub2RlLCByZW5kZXIsIG9wdGlvbnMpIHtcblx0Zm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvcHRpb25zW2tleV0pXG5cdH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gbG9hZENvbXBvbmVudChjb21wb25lbnQsIG5vZGUsIHJlbmRlciwgb3B0aW9ucyA9IHt9KVxue1xuXHRsZXQgaW5zdGFuY2UgPSBuZXcgY29tcG9uZW50KG9wdGlvbnMsIHJlbmRlciA/IGZhbHNlIDogbm9kZSk7XG5cblx0bGV0IGNvbXBvbmVudE5vZGUgPSBpbnN0YW5jZS4kbm9kZTtcblxuXHRpZihyZW5kZXIpIHtcblxuXHRcdGxldCBtYXJrID0gY29tcG9uZW50Tm9kZS5sYXN0Q2hpbGQ7XG5cdFx0XG5cdFx0bm9kZS5yZXBsYWNlV2l0aChjb21wb25lbnROb2RlKTtcblxuXHRcdGNvbXBvbmVudE5vZGUgPSBtYXJrO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHQkbm9kZTogY29tcG9uZW50Tm9kZSxcblx0XHQkaG9va3M6IGluc3RhbmNlLiRob29rcyxcblx0fTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2xvdCgkc2xvdHMsIG5hbWUsIG5vZGUsIHJlbmRlciwgY2FsbGJhY2spIHtcblx0aWYgKCRzbG90c1tuYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0Y2FsbGJhY2sobm9kZSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0bGV0IHNsb3ROb2RlcyA9ICRzbG90c1tuYW1lXSgpO1xuXHQvLyBjb25zb2xlLmxvZyhub2RlLHNsb3ROb2RlcywgcmVuZGVyKVxuXHRpZihyZW5kZXIpIHtcblx0XHRub2RlLmlubmVySFRNTCA9ICcnO1xuXHRcdG5vZGUuYXBwZW5kQ2hpbGQoc2xvdE5vZGVzKTtcblx0fVxuXHRcblx0cmV0dXJuIG5vZGU7XG59IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSAnQGhhd2Evb2JzZXJ2YWJsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXJzdENvbmRpdGlvbihhcmdzKVxue1xuXHRsZXQgY3VycmVudENvbmRpdGlvbkluZGV4ID0gbnVsbDtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpICs9IDIpIHtcblx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRsZXQgcmVuZGVyRm4gPSBhcmdzW2kgKyAxXTtcblx0XHRpZiAoY29uZGl0aW9uKCkpIHtcblx0XHRcdGN1cnJlbnRDb25kaXRpb25JbmRleCA9IGk7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY3VycmVudENvbmRpdGlvbkluZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdGlhdGVkTm9kZXMoc3RhcnQsIGVuZClcbntcblx0bGV0IG5vZGVzID0gW107XG5cblx0bGV0IGN1cnJlbnQgPSBzdGFydDtcblx0ZG8ge1xuXHRcdGxldCB0bXAgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuXHRcdG5vZGVzLnB1c2goY3VycmVudCk7XG5cdFx0Y3VycmVudCA9IHRtcDtcblx0fSB3aGlsZShjdXJyZW50ICE9PSBlbmQgJiYgY3VycmVudCAhPT0gbnVsbCk7XG5cblx0bm9kZXMucHVzaChlbmQpO1xuXG5cdGlmKG5vZGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiBub2Rlc1swXTtcblx0fVxuXG5cdHJldHVybiBub2Rlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZChzdGFydCwgbm9kZSlcbntcblx0c3RhcnQuYWZ0ZXIobm9kZSk7XG5cdC8vIGNvbnNvbGUubG9nKCdhcHBlbmQnLCBzdGFydCwgbm9kZSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lKG5vZGUpXG57XG5cdGlmKG5vZGUubm9kZVR5cGUgPT09IDExKSB7XG5cdFx0bGV0IGFyciA9IFtdOy8vZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFxuXHRcdGZvciAobGV0IGNoaWxkIG9mIG5vZGUuY2hpbGRyZW4pIHtcblx0XHRcdGFyci5wdXNoKGNoaWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYXJyO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZW1lbnQobm9kZSwgcmVuZGVyLCBkZXBzLCAuLi5hcmdzKVxue1x0XG5cdC8vIGxldCBzdGFydE1hcmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdGxldCBlbmRNYXJrID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuXHRcblx0Ly8gbm9kZS5iZWZvcmUoc3RhcnRNYXJrKTtcblx0XG5cblx0bGV0IGxhc3RDb25kaXRpb24gPSByZW5kZXIgPyBudWxsIDogZ2V0Rmlyc3RDb25kaXRpb24oYXJncyk7XG5cblx0aWYocmVuZGVyICYmIGxhc3RDb25kaXRpb24gPT09IG51bGwpIHtcblx0XHRub2RlLmFmdGVyKGVuZE1hcmspO1xuXHR9XG5cblx0bGV0IGZpcnN0TG9hZCA9IHRydWU7XG5cblx0c3Vic2NyaWJlKGRlcHMsICgpID0+IHtcblx0XHRsZXQgcmV0dXJuTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXHRcdFxuXHRcdGxldCBoYXNDb25kaXRpb25SZW5kZXJlZCA9IGZhbHNlO1xuXHRcdGxldCBjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBudWxsO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSArPSAyKSB7XG5cdFx0XHRsZXQgY29uZGl0aW9uID0gYXJnc1tpXTtcblx0XHRcdGxldCByZW5kZXJGbiA9IGFyZ3NbaSArIDFdO1xuXHRcdFx0aWYgKGNvbmRpdGlvbigpKSB7XG5cdFx0XHRcdGxldCBzaG91bGRSZW5kZXIgPSBsYXN0Q29uZGl0aW9uICE9PSBpO1xuXHRcdFx0XHRyZXR1cm5Ob2RlID0gcmVuZGVyRm4obm9kZSwgc2hvdWxkUmVuZGVyKTtcblxuXHRcdFx0XHRjdXJyZW50Q29uZGl0aW9uSW5kZXggPSBpO1xuXG5cdFx0XHRcdGlmKHNob3VsZFJlbmRlcikge1xuXHRcdFx0XHRcdGhhc0NvbmRpdGlvblJlbmRlcmVkID0gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKCFyZW5kZXIgJiYgZmlyc3RMb2FkKSB7XG5cdFx0XHRyZXR1cm5Ob2RlLmFmdGVyKGVuZE1hcmspO1xuXHRcdFx0bm9kZSA9IGdldEluaXRpYXRlZE5vZGVzKG5vZGUsIHJldHVybk5vZGUpO1xuXHRcdH1cblxuXHRcdGZpcnN0TG9hZCA9IGZhbHNlO1xuXG5cdFx0bGV0IGlzU2FtZUNvbmRpdGlvbiA9IGN1cnJlbnRDb25kaXRpb25JbmRleCAgPT09IGxhc3RDb25kaXRpb247XG5cblx0XHRsYXN0Q29uZGl0aW9uID0gY3VycmVudENvbmRpdGlvbkluZGV4O1xuXG5cdFx0Ly8gSWYgc2FtZSBjb25kaXRpb24gdGhhdCBpdCB3YXMgaHlkcmF0ZWQgYW5kIHdlIGRvbnQgbmVlZCB0byByZXBsYWNlIG5vZGVzXG5cdFx0aWYoaXNTYW1lQ29uZGl0aW9uKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gY29uc29sZS53YXJuKCdbc3RhdGVtZW50XScsIG5vZGUsIHJldHVybk5vZGUpO1xuXG5cdFx0Ly8gY2xlYW51cChzdGFydE1hcmssIGVuZE1hcmspO1xuXHRcdC8vIGFwcGVuZChzdGFydE1hcmssIHJldHVybk5vZGUpO1xuXG5cdFx0XG5cdFx0aWYoQXJyYXkuaXNBcnJheShub2RlKSkge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjaGlsZCA9IG5vZGVbaV07XG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKGNoaWxkKTtcblx0XHRcdFx0aWYoaSA9PT0gMCkge1xuXHRcdFx0XHRcdGNoaWxkLnJlcGxhY2VXaXRoKHJldHVybk5vZGUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNoaWxkLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdG5vZGUgPSByZXR1cm5Ob2RlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgdG1wID0gY2xvbmUocmV0dXJuTm9kZSlcblx0XHRcdG5vZGUucmVwbGFjZVdpdGgocmV0dXJuTm9kZSk7XG5cdFx0XHRub2RlID0gdG1wO1xuXHRcdFx0Ly8gY29uc29sZS5sb2cocmV0dXJuTm9kZSwgcmV0dXJuTm9kZS5maXJzdENoaWxkKVxuXHRcdH1cblx0fSwgZmFsc2UpO1xuXG5cdC8vIGNvbnNvbGUuZXJyb3IoZW5kTWFyaywgZW5kTWFyay5wcmV2aW91c1NpYmxpbmcpXG5cblx0cmV0dXJuIGVuZE1hcms7XG59IiwiaW1wb3J0IHsgd2F0Y2gsIGNvbXB1dGVkLCBpc09ic2VydmFibGUgfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vZGUodGVtcGxhdGUsIG5vZGUsIHJlbmRlcikge1xuXHRpZiAocmVuZGVyKSB7XG5cdFx0cmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpXG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldFJlZigkcmVmcywgbm9kZSwgbmFtZSlcbntcblx0aWYoJHJlZnNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdCRyZWZzW25hbWVdID0gbm9kZTtcblx0fSBlbHNlIHtcblx0XHRpZihBcnJheS5pc0FycmF5KCRyZWZzW25hbWVdKSkge1xuXHRcdFx0JHJlZnNbbmFtZV0ucHVzaChub2RlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JHJlZnNbbmFtZV0gPSBbJHJlZnNbbmFtZV1dLmNvbmNhdChub2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEtleSgka2V5LCBub2RlLCByZW5kZXIpXG57XG5cdGlmKCRrZXkgPT09IG51bGwpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR3YXRjaCgka2V5LCAoKSA9PiB7XG5cdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEta2V5JywgJGtleSk7XG5cdH0sIHJlbmRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb3AoJHByb3BzLCBuYW1lLCBzZWVkKVxue1xuXHRpZigkcHJvcHNbbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRyZXR1cm4gc2VlZDtcblx0XHR9XG5cdH1cblxuXHRpZihpc09ic2VydmFibGUoJHByb3BzW25hbWVdKSkge1xuXHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdHJldHVybiAkcHJvcHNbbmFtZV07XG5cdFx0fVxuXHR9XG5cdC8vIHJldHVybiBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29udGV4dChjb250ZXh0KSB7XG5cdGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQgfHwgY29udGV4dCA9PT0gbnVsbCkge1xuXHRcdGNvbnRleHQgPSB7fTtcblx0fVxuXG5cdGxldCAkcHJvcHMgPSBjb250ZXh0LiRwcm9wcyB8fCB7fTtcblx0bGV0ICRzbG90cyA9IGNvbnRleHQuJHNsb3RzIHx8IHt9O1xuXHRsZXQgJGtleSA9IGNvbnRleHQuJGtleSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbnRleHQuJGtleTtcblxuXHRyZXR1cm4ge1xuXHRcdCRwcm9wcyxcblx0XHQkc2xvdHMsXG5cdFx0JGtleSwgXG5cdFx0JHJlZnM6IHt9LFxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==