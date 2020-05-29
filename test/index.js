import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';






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
		let body = document.createDocumentFragment();

		for (var i = 0; i < items.length; i++) {
			let node = fn(node, items[i], i);
			body.appendChild(node);
		}

		node.replaceWith(body);

		return body;
	}

	function statement(node, ...args) {
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

	let { render, templates } = gett();

	// console.log(render);
	// console.log(templates);
	// return;

	/**
	 * GENERATED CODE
	 */
	let _tpl$1 = document.createElement("template");
	_tpl$1.innerHTML = "<div><!----></div>";

	let _tpl$2 = document.createElement("template");
	_tpl$2.innerHTML = "<div class=\"button\"><span>Default button text</span></div>";

	function makeComponent(context, node = false) {
		let render = node === false;
		/**
		 * GENERATED CODE
		 */
		let _el$1 = getNode(_tpl$1, node, render);

		let _el$2 = render ? _el$1.firstChild : _el$1;


		let _el$3 = _el$2.firstChild;

		console.log(_el$3, _el$2);
		let _el$8 = each(_el$3, [1], (node, item, key) => {
			let _el$4 = getNode(_tpl$2, node, render);

			let _el$5 = render ? _el$4.firstChild : _el$4;

			let _el$6 = _el$5.firstChild;
			makeAttrs(_el$6, render, {
				"class": "button"
			});
			slot(context, "default", _el$6, node => {
				let _el$7 = _el$6.firstChild;
			});
			return render ? _el$4 : _el$7;
		});

		return render ? _el$1 : _el$8;
	}

	let d = makeComponent({
		$slots: {
			default: '1',
		}
	});

	let layout = document.getElementById('layout');
	layout.innerHTML = '';

	layout.appendChild(d);
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
	<div>
	@each(1)
	<div class="button">
		<slot>Default button text</slot>
	</div>
	@endeach
	</div>
	`
	let template = parse(html);

	return compile(template);
	// console.log(html);
}
