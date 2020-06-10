(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/nav/container.hawa":
/*!***************************************!*\
  !*** ./components/nav/container.hawa ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/render */ "./packages/render/src/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hawa_transition__WEBPACK_IMPORTED_MODULE_3__);

		
		
		
		

		

		

		

		_hawa_transition__WEBPACK_IMPORTED_MODULE_3__["transition"]
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><span></span></div>';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["parseContext"])(context);
			
			let $emit, $id;
			// code
			let tick = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(24);

let test = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "test", null);

let value = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getProp"])($props, "value", null);

let classList = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick, tick, test], () => {
  return {
    red: tick() % 2 == 0,
    green: tick() % 3 == 0,
    some: test() === null
  };
});

function change() {
  // $emit('input', 2);
  alert(1);
} // function mounted()
// {
// 	console.log($id, 'container mounted');
// 	// console.log('default value: ', value()); 
// }
// function unmounted()
// {
// 	console.log($id, 'container unmounted');	
// }


let $hooks = {
  mounted: null,
  unmounted: null
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["call"])($customInit, $hooks, _el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_2__["createHooks"])($hooks);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["attrs"])(_el$2, render, {
  "class": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([classList, tick], () => {
    return [classList(), {
      active: tick() === 1
    }];
  }),
  "style": Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([tick], () => {
    return [{
      fontSize: tick() + 'px'
    }];
  })
});

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["events"])(_el$2, {
  "click": function (event) {
    return change();
  }
});

let _el$3 = _el$2.firstChild;

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_1__["slot"])($slots, "default", _el$3, render, node => {});

return {
  node: render ? _el$1 : _el$2,
  hooks: $hooks
};
		}

		/* harmony default export */ __webpack_exports__["default"] = (render);
		

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdi9jb250YWluZXIuaGF3YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEVBQTRFOzs7OztBQUs1RSxFQWdCd0I7O0FBRXhCLEVBRTBCOztBQUUxQixFQUUyQjs7QUFFM0IsRUFBRSwyREFBWTs7QUFFZDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxQ0FBcUMsR0FBRyxpRUFBWTs7QUFFNUQ7QUFDQTtBQUNBLGNBQWMsbUVBQVU7O0FBRXhCLFdBQVcsNERBQVM7O0FBRXBCLFlBQVksNERBQVM7O0FBRXJCLGdCQUFnQixpRUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDREQUFPOztBQUV0Qjs7QUFFQSxRQUFRLHlEQUFNOztBQUVkLHlEQUFNOztBQUVOLG1FQUFhOztBQUViLDBEQUFXO0FBQ1gsV0FBVyxpRUFBUTtBQUNuQjtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxXQUFXLGlFQUFRO0FBQ25CO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7O0FBRUQsMkRBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBLHlEQUFNLDZDQUE2Qzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFpQixxRUFBTSxFQUFDIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRcblx0XHRcblx0XHRcblxuXHRcdGltcG9ydCB7XG5cdFx0XHRhdHRycyBhcyBfbWFrZUF0dHJzJCxcblx0XHRcdGV2ZW50cyBhcyBfbWFrZUV2ZW50cyQsXG5cdFx0XHRzbG90IGFzIF9zbG90JCxcblx0XHRcdG1hcCBhcyBfZWFjaCQsXG5cdFx0XHRzdGF0ZW1lbnQgYXMgX3N0YXRlbWVudCQsXG5cdFx0XHRkaXJlY3RpdmUgYXMgX2RpcmVjdGl2ZSQsXG5cdFx0XHRnZXROb2RlLFxuXHRcdFx0Z2V0UHJvcCBhcyBfZ2V0UHJvcCQsXG5cdFx0XHRzZXRSZWYgYXMgX3NldFJlZiQsXG5cdFx0XHRzZXRLZXkgYXMgX3NldEtleSQsXG5cdFx0XHRlbWl0IGFzIF9lbWl0JCxcblx0XHRcdGNhbGwgYXMgX2NhbGwkLFxuXHRcdFx0Y3JlYXRlQ29tcG9uZW50IGFzIF9jcmVhdGVDb21wb25lbnQkLFxuXHRcdFx0cGFyc2VDb250ZXh0LFxuXHRcdFx0bG9hZENvbXBvbmVudCxcblx0XHR9IGZyb20gJ0BoYXdhL3JlbmRlcic7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0Y3JlYXRlSG9va3MgYXMgX2NyZWF0ZUhvb2tzJCxcblx0XHR9IGZyb20gJ0BoYXdhL2xpZmVjeWNsZSdcblxuXHRcdGltcG9ydCB7XG5cdFx0XHR0cmFuc2l0aW9uIGFzIF90cmFuc2l0aW9uJCxcblx0XHR9IGZyb20gJ0BoYXdhL3RyYW5zaXRpb24nXG5cblx0XHRfdHJhbnNpdGlvbiRcblx0XHRcblx0XHQvLyB0ZW1wbGF0ZXNcblx0XHRsZXQgX3RwbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRlbXBsYXRlXCIpO1xuX3RwbCQxLmlubmVySFRNTCA9ICc8ZGl2PjxzcGFuPjwvc3Bhbj48L2Rpdj4nO1xuXG5cblx0XHRcblx0XHQvLyBjb21wb25lbnQgZnVuY3Rpb25cblx0XHRmdW5jdGlvbiByZW5kZXIoY29udGV4dCwgbm9kZSA9IGZhbHNlKSB7XG5cdFx0XHRsZXQgcmVuZGVyID0gbm9kZSA9PT0gZmFsc2U7XG5cblx0XHRcdGxldCB7ICRwcm9wcywgJHNsb3RzLCAkcmVmcywgJGN1c3RvbUluaXQgfSA9IHBhcnNlQ29udGV4dChjb250ZXh0KTtcblx0XHRcdFxuXHRcdFx0bGV0ICRlbWl0LCAkaWQ7XG5cdFx0XHQvLyBjb2RlXG5cdFx0XHRsZXQgdGljayA9IG9ic2VydmFibGUoMjQpO1xuXG5sZXQgdGVzdCA9IF9nZXRQcm9wJCgkcHJvcHMsIFwidGVzdFwiLCBudWxsKTtcblxubGV0IHZhbHVlID0gX2dldFByb3AkKCRwcm9wcywgXCJ2YWx1ZVwiLCBudWxsKTtcblxubGV0IGNsYXNzTGlzdCA9IGNvbXB1dGVkKFt0aWNrLCB0aWNrLCB0ZXN0XSwgKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJlZDogdGljaygpICUgMiA9PSAwLFxuICAgIGdyZWVuOiB0aWNrKCkgJSAzID09IDAsXG4gICAgc29tZTogdGVzdCgpID09PSBudWxsXG4gIH07XG59KTtcblxuZnVuY3Rpb24gY2hhbmdlKCkge1xuICAvLyAkZW1pdCgnaW5wdXQnLCAyKTtcbiAgYWxlcnQoMSk7XG59IC8vIGZ1bmN0aW9uIG1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygkaWQsICdjb250YWluZXIgbW91bnRlZCcpO1xuLy8gXHQvLyBjb25zb2xlLmxvZygnZGVmYXVsdCB2YWx1ZTogJywgdmFsdWUoKSk7IFxuLy8gfVxuLy8gZnVuY3Rpb24gdW5tb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJGlkLCAnY29udGFpbmVyIHVubW91bnRlZCcpO1x0XG4vLyB9XG5cblxubGV0ICRob29rcyA9IHtcbiAgbW91bnRlZDogbnVsbCxcbiAgdW5tb3VudGVkOiBudWxsXG59O1xuXHRcdFx0XG5cdFx0XHQvLyByZW5kZXJcblx0XHRcdGxldCBfZWwkMSA9IGdldE5vZGUoX3RwbCQxLCBub2RlLCByZW5kZXIpO1xuXG5sZXQgX2VsJDIgPSByZW5kZXIgPyBfZWwkMS5maXJzdENoaWxkIDogX2VsJDE7XG5cbiRlbWl0ID0gX2VtaXQkKF9lbCQyKTtcblxuX2NhbGwkKCRjdXN0b21Jbml0LCAkaG9va3MsIF9lbCQyLCByZW5kZXIpO1xuXG5fY3JlYXRlSG9va3MkKCRob29rcyk7XG5cbl9tYWtlQXR0cnMkKF9lbCQyLCByZW5kZXIsIHtcbiAgXCJjbGFzc1wiOiBjb21wdXRlZChbY2xhc3NMaXN0LCB0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbY2xhc3NMaXN0KCksIHtcbiAgICAgIGFjdGl2ZTogdGljaygpID09PSAxXG4gICAgfV07XG4gIH0pLFxuICBcInN0eWxlXCI6IGNvbXB1dGVkKFt0aWNrXSwgKCkgPT4ge1xuICAgIHJldHVybiBbe1xuICAgICAgZm9udFNpemU6IHRpY2soKSArICdweCdcbiAgICB9XTtcbiAgfSlcbn0pO1xuXG5fbWFrZUV2ZW50cyQoX2VsJDIsIHtcbiAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICByZXR1cm4gY2hhbmdlKCk7XG4gIH1cbn0pO1xuXG5sZXQgX2VsJDMgPSBfZWwkMi5maXJzdENoaWxkO1xuXG5fc2xvdCQoJHNsb3RzLCBcImRlZmF1bHRcIiwgX2VsJDMsIHJlbmRlciwgbm9kZSA9PiB7fSk7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCJdLCJzb3VyY2VSb290IjoiIn0=