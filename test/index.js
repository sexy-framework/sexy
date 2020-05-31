import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';
import { observable, computed, subscribe, watch } from '@hawa/observable';
import { map as _each$ } from '@hawa/map';

import {
	attrs as _makeAttrs$,
	events as _makeEvents$,
	slot as _slot$,
	statement as _statement$,
	getNode,
	parseContext,
} from '@hawa/render';

import time from './time';


/**
 * Frameworks methods
 */


/**
 * Execute
 * @return {[type]} [description]
 */
function test() {



	let { render, templates, script } = gett();
	// console.log(render);
	// console.log(templates);
	console.log(script);
	return;

	/**
	 * GENERATED CODE
	 */
	let _tpl$1 = document.createElement("template");
	_tpl$1.innerHTML = '<div class="2"><!----><div class="Test">${ text2 }</div></div>';

	let _tpl$2 = document.createElement("template");
	_tpl$2.innerHTML = '<!---->';

	let _tpl$3 = document.createElement("template");
	_tpl$3.innerHTML = '<div>Some test text ${ text1 } after</div><div class="button"><span>Default<b class="d">button</b>text</span></div>';

	let timer = null;

	function makeComponent(context, node = false) {
		let render = node === false;

		let { $props, $slots } = parseContext(context);
		/**
		 * Script tag
		 */
		let text1 = observable(12);
		let text2 = observable(2);
		let text3 = observable(1);
		let items = observable(Array.from({ length: 5 }, (_, i) => i));

		let c = computed(text1, () => {
			return time + text1;
		});

		function method1() {
			text1(text1() + 1);
		}

		// clearInterval(timer);
		// timer = setInterval(() => {
		// 	text2(text2() + 1);
		// }, 1000);

		// if(!render) {
		// 	time = setTimeout(() => {
		// 		items(Array.from({ length: 100 }, (_, i) => i));
		// 	}, 1000)
		// }
		/**
		 * GENERATED CODE
		 */
		let _el$1 = getNode(_tpl$1, node, render);

		let _el$2 = render ? _el$1.firstChild : _el$1;

		_makeAttrs$(_el$2, render, {
			"data-1": computed([text1], () => {
				return {
					test: text1()
				};
			}),
			"data-2": computed([text1], () => {
				return text1();
			}),
			"class": computed([text1, text2], () => {
				return [text1(), {
					some: text2() === 2
				}];
			})
		});

		let _el$3 = _el$2.firstChild;

		let _el$16 = _each$(_el$3, items, (item1, key1) => {
			return 'text-' + item1 + text1();
		}, (node, render, _keyExpr$, item1, key1) => {
			let _el$4 = getNode(_tpl$2, node, render);

			let _el$5 = render ? _el$4.firstChild : _el$4;

			let _el$15 = _statement$(_el$5, render, [text2], () => {
				return item1 % 2 === 0 && text2() % 2 === 0;
			}, (node, render) => {
				let _el$6 = getNode(_tpl$3, _el$5, render);

				let _el$7 = render ? _el$6.firstChild : _el$6;

				subscribe([text1], () => {
					_el$7.setAttribute("data-key", 'text-' + item1 + text1());
				}, !render);

				_makeEvents$(_el$7, render, {
					"click": function(event) {
						return method1();
					},
					"mousedown": function(event) {
						return method1(event);
					}
				});

				let _el$8 = _el$7.firstChild;
				subscribe([text1], () => {
					_el$8.nodeValue = `Some test text ${text1()} after`;
				}, !render);
				let _el$9 = _el$7.nextSibling;

				_makeEvents$(_el$9, render, {
					"mousedown": function(event) {
						return alert(2);
					}
				});

				let _el$10 = _el$9.firstChild;

				_slot$($slots, "default", _el$10, node => {
					let _el$11 = _el$10.firstChild;
					let _el$12 = _el$11.nextSibling;
					let _el$13 = _el$12.firstChild;
					let _el$14 = _el$12.nextSibling;
				});

				return render ? _el$6 : _el$9;
			});

			return render ? _el$4 : _el$15;
		}, render);

		let _el$17 = _el$16.nextSibling;
		let _el$18 = _el$17.firstChild;
		subscribe([text2], () => {
			_el$18.nodeValue = `${text2()}`;
		}, !render);
		return render ? _el$1 : _el$2;
	}



	let layout = document.getElementById('layout');


	// time('hydrate');
	// makeComponent(null, layout.firstChild)
	// time('hydrate');
	// return;

	console.log('start render');
	layout.innerHTML = '';
	time('render');
	layout.appendChild(makeComponent());
	time('render');

	return;



	setTimeout(() => {
		let tmp = layout.innerHTML;
		layout.innerHTML = tmp;

		console.log('start hydration');
		time('hydrate');
		makeComponent(null, layout.firstChild)
		time('hydrate');
	}, 300)
	// console.log(layout.innerHTML);
}

test();

function gett() {

	let html =
		`
	<div>start</div>
	@if(1)
	<div></div>
	asdad
		@if(2)
		<div>iff2</div>
		@endif
	asdasd
	@elseif(test)
	1
		2
		@each(1)
		asdasd
		<slot>default text for slot<b class="d">1</b></slot>
		@endeach
		3
		@else 
		asd
	@endif
	end
	`;

	html = `
	<div class="2" :data-1="{ test: text1 }" :data-2="text1" :class="[text1, { some: text2 === 2 }]" :prop1="123">
		@each(item1, key1 in items)
			@if(item1 % 2 === 0 && text2 % 2 === 0)
			<template :key="'text-' + item1 + text1">
				<div @click="method1" @mousedown="method1(event)">
					Some test text \${ text1 } after
				</div>
				<div class="button" @mousedown="alert(2)">
					<slot>Default <b class="d">button</b> text</slot>
				</div>
			</template>
			@endif
		@endeach
		<div class="Test">\${ text2 }</div>
	</div>

	<script>
	let text1 = o(1);
	let text2 = o(1);
	let text3 = o(1);
	let items = Array.from({ length: 1 }, (_, i) => i);
	let time = 1235;

	let c = () => {
		return time + text1;
	}

	function method1() {
		let d = text2();

		let text1 = 'some';

		text1;
	}
	</script>
	`
	let blocks = parse(html);

	return compile(blocks);
	// console.log(html);
}
