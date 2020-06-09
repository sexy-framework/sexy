(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./components/page.hawa":
/*!******************************!*\
  !*** ./components/page.hawa ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @hawa/observable */ "./packages/observable/dist/index.js");
/* harmony import */ var _hawa_observable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hawa/directives */ "./packages/directives/dist/index.js");
/* harmony import */ var _hawa_directives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hawa_directives__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hawa/transition */ "./packages/transition/dist/index.js");
/* harmony import */ var _hawa_transition__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hawa_transition__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_hawa_type_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.hawa?type=style */ "./components/page.hawa?type=style");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hawa/render */ "./packages/render/dist/index.js");
/* harmony import */ var _hawa_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hawa_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hawa/lifecycle */ "./packages/lifecycle/dist/index.js");
/* harmony import */ var _hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__);

		
		

		
		const _component_navcontainer$ = __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/nav/container.hawa */ "./components/nav/container.hawa"));

		

		

		

		_hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"]
		
		// templates
		let _tpl$1 = document.createElement("template");
_tpl$1.innerHTML = '<div><!----></div>';

let _tpl$2 = document.createElement("template");
_tpl$2.innerHTML = '<!----><div>check double</div><div>check tripple</div>';

let _tpl$3 = document.createElement("template");
_tpl$3.innerHTML = 'test {{ item }}';


		
		// component function
		function render(context, node = false) {
			let render = node === false;

			let { $props, $slots, $refs, $customInit } = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["parseContext"])(context);
			
			let $emit, $id;
			// code
			function faded() {} // let items = o(Array.from({ length: 3 }, (_, i) => i));
// let vv = o('test'); 2


let items = Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["observable"])(Array.from({
  length: 5
}, (_, i) => i));
; //o(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']);
// let showItems = o(true);
// let range = o(5);
// function eventd()
// {
// 	alert(1)
// }
// function mounted()
// {
// 	console.log('page mounted');
// 	// setTimeout(() => {
// 	// 	items(['one', 'seven', 'three', 'four', 'five', 'six', 'two', 'eight', 'nine', 'ten'])
// 	// }, 1000);
// }
// function unmounted()
// {
// 	console.log('page unmounted');
// }

let $hooks = {
  mounted: null,
  unmounted: null
};
			
			// render
			let _el$1 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$1, node, render);

let _el$2 = render ? _el$1.firstChild : _el$1;

$emit = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["emit"])(_el$2);

Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["call"])($customInit, $hooks, _el$2, render);

$id = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["createComponent"])(_el$2, render);

Object(_hawa_lifecycle__WEBPACK_IMPORTED_MODULE_5__["createHooks"])($hooks);

let _el$3 = _el$2.firstChild;

let _el$13 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["map"])(_el$3, Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["computed"])([items], () => {
  return items();
}), (item, key) => {
  return item;
}, (node, render, _eachNodeKey$, item, key) => {
  let _el$4 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$2, node, render);

  let _el$5 = render ? _el$4.firstChild : _el$4;

  let _el$6 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["loadComponent"])(_component_navcontainer$, _el$5, render, {
    $props: {
      "classed": "fade"
    },
    $customInit: ($hooks, node, render) => {
      Object(_hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"])(node, _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade', _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade');

      Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["setKey"])(_eachNodeKey$, node, render);
    },
    $slots: {
      "default": () => {
        let _el$7 = Object(_hawa_render__WEBPACK_IMPORTED_MODULE_4__["getNode"])(_tpl$3, node, render);

        let _el$8 = render ? _el$7.firstChild : _el$7;

        Object(_hawa_observable__WEBPACK_IMPORTED_MODULE_0__["subscribe"])([], () => {
          _el$8.nodeValue = `test ${item}`;
        }, !render);
        return render ? _el$7 : _el$8;
      }
    }
  });

  let _el$9 = _el$6.nextSibling;
  let _el$10 = _el$9.firstChild;
  let _el$11 = _el$9.nextSibling;

  Object(_hawa_transition__WEBPACK_IMPORTED_MODULE_2__["transition"])(_el$11, _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade', _hawa_transition__WEBPACK_IMPORTED_MODULE_2__["classed"], 'fade');

  let _el$12 = _el$11.firstChild;
  return render ? _el$4 : _el$11;
}, render);

return {
  node: render ? _el$1 : _el$2,
  hooks: $hooks
};
		}

		/* harmony default export */ __webpack_exports__["default"] = (render);
		

/***/ }),

/***/ "./components/page.hawa.css":
/*!**********************************!*\
  !*** ./components/page.hawa.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./components/page.hawa?type=style":
/*!*****************************************!*\
  !*** ./components/page.hawa?type=style ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/page.hawa.css */ "./components/page.hawa.css");
/* harmony import */ var _Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_MAMP_htdocs_hawa_components_page_hawa_css__WEBPACK_IMPORTED_MODULE_0__);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuaGF3YSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2UuaGF3YS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlLmhhd2E/NDBiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEVBQTRFO0FBQzVFLEVBQTBDO0FBQ0M7QUFDM0MsRUFBeUQ7QUFDekQsbUNBQW1DLHdKQUEwQzs7QUFFN0UsRUFnQndCOztBQUV4QixFQUUwQjs7QUFFMUIsRUFFMkI7O0FBRTNCLEVBQUUsMkRBQVk7O0FBRWQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsUUFBUTs7OztBQUluQztBQUNBO0FBQ0E7O0FBRUEsUUFBUSxxQ0FBcUMsR0FBRyxpRUFBWTs7QUFFNUQ7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEIsWUFBWTtBQUNoRSxzQkFBc0I7OztBQUd0QixZQUFZLG1FQUFVO0FBQ3RCO0FBQ0EsQ0FBQztBQUNELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDREQUFPOztBQUV0Qjs7QUFFQSxRQUFRLHlEQUFNOztBQUVkLHlEQUFNOztBQUVOLE1BQU0sb0VBQWlCOztBQUV2QixtRUFBYTs7QUFFYjs7QUFFQSxhQUFhLHdEQUFNLFFBQVEsaUVBQVE7QUFDbkM7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0QsY0FBYyw0REFBTzs7QUFFckI7O0FBRUEsY0FBYyxrRUFBYTtBQUMzQjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsTUFBTSxtRUFBWSxPQUFPLHdEQUFPLFVBQVUsd0RBQU87O0FBRWpELE1BQU0sMkRBQVE7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9CQUFvQiw0REFBTzs7QUFFM0I7O0FBRUEsUUFBUSxrRUFBUztBQUNqQixvQ0FBb0MsS0FBSztBQUN6QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUEsRUFBRSxtRUFBWSxTQUFTLHdEQUFPLFVBQVUsd0RBQU87O0FBRS9DO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBaUIscUVBQU0sRUFBQzs7Ozs7Ozs7Ozs7O0FDckp4Qix1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBIiwiZmlsZSI6IjAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cdFx0aW1wb3J0IHsgb2JzZXJ2YWJsZSwgY29tcHV0ZWQsIHN1YnNjcmliZSwgd2F0Y2ggfSBmcm9tICdAaGF3YS9vYnNlcnZhYmxlJztcblx0XHRpbXBvcnQgeyBiaW5kIH0gZnJvbSAnQGhhd2EvZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBjbGFzc2VkIH0gZnJvbSAnQGhhd2EvdHJhbnNpdGlvbic7XG5cdFx0aW1wb3J0IF9jb21wb25lbnRfc3R5bGVzJCBmcm9tIFwiLi9wYWdlLmhhd2E/dHlwZT1zdHlsZVwiXG5cdFx0Y29uc3QgX2NvbXBvbmVudF9uYXZjb250YWluZXIkID0gaW1wb3J0KFwiLi4vY29tcG9uZW50cy9uYXYvY29udGFpbmVyLmhhd2FcIik7XG5cblx0XHRpbXBvcnQge1xuXHRcdFx0YXR0cnMgYXMgX21ha2VBdHRycyQsXG5cdFx0XHRldmVudHMgYXMgX21ha2VFdmVudHMkLFxuXHRcdFx0c2xvdCBhcyBfc2xvdCQsXG5cdFx0XHRtYXAgYXMgX2VhY2gkLFxuXHRcdFx0c3RhdGVtZW50IGFzIF9zdGF0ZW1lbnQkLFxuXHRcdFx0ZGlyZWN0aXZlIGFzIF9kaXJlY3RpdmUkLFxuXHRcdFx0Z2V0Tm9kZSxcblx0XHRcdGdldFByb3AgYXMgX2dldFByb3AkLFxuXHRcdFx0c2V0UmVmIGFzIF9zZXRSZWYkLFxuXHRcdFx0c2V0S2V5IGFzIF9zZXRLZXkkLFxuXHRcdFx0ZW1pdCBhcyBfZW1pdCQsXG5cdFx0XHRjYWxsIGFzIF9jYWxsJCxcblx0XHRcdGNyZWF0ZUNvbXBvbmVudCBhcyBfY3JlYXRlQ29tcG9uZW50JCxcblx0XHRcdHBhcnNlQ29udGV4dCxcblx0XHRcdGxvYWRDb21wb25lbnQsXG5cdFx0fSBmcm9tICdAaGF3YS9yZW5kZXInO1xuXG5cdFx0aW1wb3J0IHtcblx0XHRcdGNyZWF0ZUhvb2tzIGFzIF9jcmVhdGVIb29rcyQsXG5cdFx0fSBmcm9tICdAaGF3YS9saWZlY3ljbGUnXG5cblx0XHRpbXBvcnQge1xuXHRcdFx0dHJhbnNpdGlvbiBhcyBfdHJhbnNpdGlvbiQsXG5cdFx0fSBmcm9tICdAaGF3YS90cmFuc2l0aW9uJ1xuXG5cdFx0X3RyYW5zaXRpb24kXG5cdFx0XG5cdFx0Ly8gdGVtcGxhdGVzXG5cdFx0bGV0IF90cGwkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMS5pbm5lckhUTUwgPSAnPGRpdj48IS0tLS0+PC9kaXY+JztcblxubGV0IF90cGwkMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMi5pbm5lckhUTUwgPSAnPCEtLS0tPjxkaXY+Y2hlY2sgZG91YmxlPC9kaXY+PGRpdj5jaGVjayB0cmlwcGxlPC9kaXY+JztcblxubGV0IF90cGwkMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbl90cGwkMy5pbm5lckhUTUwgPSAndGVzdCB7eyBpdGVtIH19JztcblxuXG5cdFx0XG5cdFx0Ly8gY29tcG9uZW50IGZ1bmN0aW9uXG5cdFx0ZnVuY3Rpb24gcmVuZGVyKGNvbnRleHQsIG5vZGUgPSBmYWxzZSkge1xuXHRcdFx0bGV0IHJlbmRlciA9IG5vZGUgPT09IGZhbHNlO1xuXG5cdFx0XHRsZXQgeyAkcHJvcHMsICRzbG90cywgJHJlZnMsICRjdXN0b21Jbml0IH0gPSBwYXJzZUNvbnRleHQoY29udGV4dCk7XG5cdFx0XHRcblx0XHRcdGxldCAkZW1pdCwgJGlkO1xuXHRcdFx0Ly8gY29kZVxuXHRcdFx0ZnVuY3Rpb24gZmFkZWQoKSB7fSAvLyBsZXQgaXRlbXMgPSBvKEFycmF5LmZyb20oeyBsZW5ndGg6IDMgfSwgKF8sIGkpID0+IGkpKTtcbi8vIGxldCB2diA9IG8oJ3Rlc3QnKTsgMlxuXG5cbmxldCBpdGVtcyA9IG9ic2VydmFibGUoQXJyYXkuZnJvbSh7XG4gIGxlbmd0aDogNVxufSwgKF8sIGkpID0+IGkpKTtcbjsgLy9vKFsnb25lJywgJ3R3bycsICd0aHJlZScsICdmb3VyJywgJ2ZpdmUnLCAnc2l4JywgJ3NldmVuJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJ10pO1xuLy8gbGV0IHNob3dJdGVtcyA9IG8odHJ1ZSk7XG4vLyBsZXQgcmFuZ2UgPSBvKDUpO1xuLy8gZnVuY3Rpb24gZXZlbnRkKClcbi8vIHtcbi8vIFx0YWxlcnQoMSlcbi8vIH1cbi8vIGZ1bmN0aW9uIG1vdW50ZWQoKVxuLy8ge1xuLy8gXHRjb25zb2xlLmxvZygncGFnZSBtb3VudGVkJyk7XG4vLyBcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gXHQvLyBcdGl0ZW1zKFsnb25lJywgJ3NldmVuJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnLCAndHdvJywgJ2VpZ2h0JywgJ25pbmUnLCAndGVuJ10pXG4vLyBcdC8vIH0sIDEwMDApO1xuLy8gfVxuLy8gZnVuY3Rpb24gdW5tb3VudGVkKClcbi8vIHtcbi8vIFx0Y29uc29sZS5sb2coJ3BhZ2UgdW5tb3VudGVkJyk7XG4vLyB9XG5cbmxldCAkaG9va3MgPSB7XG4gIG1vdW50ZWQ6IG51bGwsXG4gIHVubW91bnRlZDogbnVsbFxufTtcblx0XHRcdFxuXHRcdFx0Ly8gcmVuZGVyXG5cdFx0XHRsZXQgX2VsJDEgPSBnZXROb2RlKF90cGwkMSwgbm9kZSwgcmVuZGVyKTtcblxubGV0IF9lbCQyID0gcmVuZGVyID8gX2VsJDEuZmlyc3RDaGlsZCA6IF9lbCQxO1xuXG4kZW1pdCA9IF9lbWl0JChfZWwkMik7XG5cbl9jYWxsJCgkY3VzdG9tSW5pdCwgJGhvb2tzLCBfZWwkMiwgcmVuZGVyKTtcblxuJGlkID0gX2NyZWF0ZUNvbXBvbmVudCQoX2VsJDIsIHJlbmRlcik7XG5cbl9jcmVhdGVIb29rcyQoJGhvb2tzKTtcblxubGV0IF9lbCQzID0gX2VsJDIuZmlyc3RDaGlsZDtcblxubGV0IF9lbCQxMyA9IF9lYWNoJChfZWwkMywgY29tcHV0ZWQoW2l0ZW1zXSwgKCkgPT4ge1xuICByZXR1cm4gaXRlbXMoKTtcbn0pLCAoaXRlbSwga2V5KSA9PiB7XG4gIHJldHVybiBpdGVtO1xufSwgKG5vZGUsIHJlbmRlciwgX2VhY2hOb2RlS2V5JCwgaXRlbSwga2V5KSA9PiB7XG4gIGxldCBfZWwkNCA9IGdldE5vZGUoX3RwbCQyLCBub2RlLCByZW5kZXIpO1xuXG4gIGxldCBfZWwkNSA9IHJlbmRlciA/IF9lbCQ0LmZpcnN0Q2hpbGQgOiBfZWwkNDtcblxuICBsZXQgX2VsJDYgPSBsb2FkQ29tcG9uZW50KF9jb21wb25lbnRfbmF2Y29udGFpbmVyJCwgX2VsJDUsIHJlbmRlciwge1xuICAgICRwcm9wczoge1xuICAgICAgXCJjbGFzc2VkXCI6IFwiZmFkZVwiXG4gICAgfSxcbiAgICAkY3VzdG9tSW5pdDogKCRob29rcywgbm9kZSwgcmVuZGVyKSA9PiB7XG4gICAgICBfdHJhbnNpdGlvbiQobm9kZSwgY2xhc3NlZCwgJ2ZhZGUnLCBjbGFzc2VkLCAnZmFkZScpO1xuXG4gICAgICBfc2V0S2V5JChfZWFjaE5vZGVLZXkkLCBub2RlLCByZW5kZXIpO1xuICAgIH0sXG4gICAgJHNsb3RzOiB7XG4gICAgICBcImRlZmF1bHRcIjogKCkgPT4ge1xuICAgICAgICBsZXQgX2VsJDcgPSBnZXROb2RlKF90cGwkMywgbm9kZSwgcmVuZGVyKTtcblxuICAgICAgICBsZXQgX2VsJDggPSByZW5kZXIgPyBfZWwkNy5maXJzdENoaWxkIDogX2VsJDc7XG5cbiAgICAgICAgc3Vic2NyaWJlKFtdLCAoKSA9PiB7XG4gICAgICAgICAgX2VsJDgubm9kZVZhbHVlID0gYHRlc3QgJHtpdGVtfWA7XG4gICAgICAgIH0sICFyZW5kZXIpO1xuICAgICAgICByZXR1cm4gcmVuZGVyID8gX2VsJDcgOiBfZWwkODtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGxldCBfZWwkOSA9IF9lbCQ2Lm5leHRTaWJsaW5nO1xuICBsZXQgX2VsJDEwID0gX2VsJDkuZmlyc3RDaGlsZDtcbiAgbGV0IF9lbCQxMSA9IF9lbCQ5Lm5leHRTaWJsaW5nO1xuXG4gIF90cmFuc2l0aW9uJChfZWwkMTEsIGNsYXNzZWQsICdmYWRlJywgY2xhc3NlZCwgJ2ZhZGUnKTtcblxuICBsZXQgX2VsJDEyID0gX2VsJDExLmZpcnN0Q2hpbGQ7XG4gIHJldHVybiByZW5kZXIgPyBfZWwkNCA6IF9lbCQxMTtcbn0sIHJlbmRlcik7XG5cbnJldHVybiB7XG4gIG5vZGU6IHJlbmRlciA/IF9lbCQxIDogX2VsJDIsXG4gIGhvb2tzOiAkaG9va3Ncbn07XG5cdFx0fVxuXG5cdFx0ZXhwb3J0IGRlZmF1bHQgcmVuZGVyO1xuXHRcdCIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnL0FwcGxpY2F0aW9ucy9NQU1QL2h0ZG9jcy9oYXdhL2NvbXBvbmVudHMvcGFnZS5oYXdhLmNzcyc7Il0sInNvdXJjZVJvb3QiOiIifQ==