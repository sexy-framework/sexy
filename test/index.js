import { parse } from '@hawa/parser';
import { compile } from '@hawa/compiler';






function test() {

	let _tpl$1 = document.createElement("template");
	_tpl$1.innerHTML = "<div>start</div><!---->end";

	let _tpl$2 = document.createElement("template");
	_tpl$2.innerHTML = "<div></div>asdad<!---->asdasd";

	let _tpl$3 = document.createElement("template");
	_tpl$3.innerHTML = "<div>iff2</div>";

	let _tpl$4 = document.createElement("template");
	_tpl$4.innerHTML = "1<!---->2<!---->3";

	let _tpl$5 = document.createElement("template");
	_tpl$5.innerHTML = "asd";

	function getNode(template, node, render)
	{
		if(render) {
			return template.content.cloneNode(true);
		}

		return node;
	}

	function each(node, ...args)
	{
		console.log(node, args);
		return node;
	}

	function statement(node, ...args)
	{
		let returnNode = false;

		for (var i = 0; i < args.length; i += 2) {
			if(args[i]) {
				returnNode = args[i + 1](node);
				break;
			}
		}

		if(returnNode === false) {
			return node;
		}

		node.replaceWith(returnNode);

		return returnNode;
	}

	function makeComponent(context, node = false) {
		let render = node === false;
		let _el$1 = getNode(_tpl$1, node, render);

		let _el$2 = render ? _el$1.firstChild : _el$1;

		let _el$3 = _el$2.nextSibling;

		let _el$25 = statement(_el$3, 1, node => {
			let _el$4 = getNode(_tpl$2, node, render);

			let _el$5 = render ? _el$4.firstChild : _el$4;

			let _el$6 = _el$5.nextSibling;
			let _el$7 = _el$6.nextSibling;

			let _el$11 = statement(_el$7, 2, node => {
				let _el$8 = getNode(_tpl$3, node, render);

				let _el$9 = render ? _el$8.firstChild : _el$8;

				let _el$10 = _el$9.nextSibling;
				return render ? _el$8 : _el$10;
			});

			let _el$12 = _el$11.nextSibling;
			return render ? _el$4 : _el$12;
		}, test, node => {
			let _el$13 = getNode(_tpl$4, node, render);

			let _el$14 = render ? _el$13.firstChild : _el$13;

			let _el$15 = _el$14.nextSibling;

			let _el$16 = getComponent("nativ", _el$15, render);

			makeAttrs(_el$16, render, {
				"data-p": "1"
			});
			let _el$17 = _el$16.nextSibling;
			let _el$18 = _el$17.nextSibling;

			let _el$20 = each(_el$18, 1, () => {
				let _el$19 = _el$18.nextSibling;
			}, () => {});

			let _el$21 = _el$20.nextSibling;
			return render ? _el$13 : _el$21;
		}, true, node => {
			let _el$22 = getNode(_tpl$5, node, render);

			let _el$23 = render ? _el$22.firstChild : _el$22;

			let _el$24 = _el$23.nextSibling;
			return render ? _el$22 : _el$24;
		});

		let _el$26 = _el$25.nextSibling;
		return render ? _el$1 : _el$26;
	}

	let d = makeComponent();

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
		<Nativ data-p="1">asd</Nativ>
		2
		@each(1)
		asdasd
		<slot>default text for slot</slot>
		@endeach
		3
		@else 
		asd
	@endif
	end
	`;

	let template = parse(html);

	compile(template);
	console.log(html);
}
