import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';
import { observable, computed, subscribe } from '@hawa/observable';
import { map as _each$ } from '@hawa/map';



import time from './time';


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

		let $props = context.$props || {};
		let $slots = context.$slots || {};

		return {
			$props,
			$slots,
		}
	}


	function _makeAttrs$() {

	}

	function _makeEvents$(node, render, options) {
		for (let key in options) {
			node.addEventListener(key, options[key])
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

	// function valueSubscribe(render, prop, fn)
	// {
	// 	if(!isObservable(prop)) {
	// 		if(hydrate) {
	// 			fn(prop);
	// 		}
	// 		return;
	// 	}

	// 	subscribe(prop, () => {
	// 		fn(prop());
	// 	}, !render);
	// }

	function _statement$(node, ...args) {
		let returnNode = false;

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

	// let { render, templates } = gett();
	// console.log(render);
	// console.log(templates);
	// return;

	/**
	 * GENERATED CODE
	 */
	let _tpl$1 = document.createElement("template");
	_tpl$1.innerHTML = '<div class="2"><!----></div>';

	let _tpl$2 = document.createElement("template");
	_tpl$2.innerHTML = '<div>Some test text ${ text1 } after</div><div class="button"><span>Default<b class="d">button</b>text</span></div>';

	function makeComponent(context, node = false) {
		let render = node === false;

		let { $props, $slots } = parseContext(context);
		/**
		 * Script tag
		 */
		let text1 = observable(1);
		let text2 = observable(1);
		let text3 = observable(1);
		let items = observable(Array.from({ length: 3 }, (_, i) => i));
		let time = 1235;

		let c = computed(text1, () => {
			return time + text1;
		});

		function method1() {
			console.log('test')
		}

		if(!render) {
			time = setTimeout(() => {
				console.log('----')
				items(Array.from({ length: 10 }, (_, i) => i));
			}, 2000)
		}
		/**
		 * GENERATED CODE
		 */
		let _el$1 = getNode(_tpl$1, node, render);

		let _el$2 = render ? _el$1.firstChild : _el$1;

		_makeAttrs$(_el$2, render, {
			"style": 1,
			"data-1": {
				test: text1
			},
			"data-2": text1,
			"class": computed([text1, text2], () => {
				return [text1(), {
					some: text2() === 2
				}, time];
			})
		});

		let _el$3 = _el$2.firstChild;
		console.error(_el$3);
		let _el$13 = _each$(_el$3, items, (item1, key1) => {
			return 'text-' + item1 + text1();
		}, (node, render, keyExpr, item1, key1) => {
			let _el$4 = getNode(_tpl$2, node, render);

			let _el$5 = render ? _el$4.firstChild : _el$4;

			subscribe([text1], () => {
				_el$5.setAttribute("data-key", 'text-' + item1 + text1());
			}, !render);

			_makeEvents$(_el$5, render, {
				"click": function(event) {
					return method1();
				},
				"mousedown": function(event) {
					return method1(event);
				}
			});

			let _el$6 = _el$5.firstChild;
			subscribe([text1], () => {
				_el$6.nodeValue = `Some test text ${text1()} after`;
			});
			let _el$7 = _el$5.nextSibling;
			console.log(node, _el$7);
			_makeEvents$(_el$7, render, {
				"mousedown": function(event) {
					return alert(2);
				}
			});

			let _el$8 = _el$7.firstChild;
			_slot$($slots, "default", _el$8, node => {
				let _el$9 = _el$8.firstChild;
				let _el$10 = _el$9.nextSibling;
				let _el$11 = _el$10.firstChild;
				let _el$12 = _el$10.nextSibling;
			});

			return render ? _el$4 : _el$7;
		}, render);

		return render ? _el$1 : _el$2;
	}



	let layout = document.getElementById('layout');
	layout.innerHTML = '';

	time('render');
	layout.appendChild(makeComponent());
	time('render');

	// return;

	let tmp = layout.innerHTML;
	layout.innerHTML = tmp;

	time('hydrate');
	makeComponent(null, layout.firstChild)
	time('hydrate');
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
	<div class="2" :style="1" :data-1="{ test: text1 }" :data-2="text1" :class="[text1, { some: text2 === 2 }, time]" :prop1="123">
	@each((item1, key1) in items)
	<template :key="'text-' + item1 + text1">
		<div @click="method1" @mousedown="method1(event)">
			Some test text \${ text1 } after
		</div>
		<div class="button" @mousedown="alert(2)">
			<slot>Default <b class="d">button</b> text</slot>
		</div>
	</template>
	@endeach
	

	<script>
	let text1 = $o(1);
	let text2 = $o(1);
	let text3 = $o(1);
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
