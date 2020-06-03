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
<div @click="alert(1)" :class="[classList, { active: tick === 1 }]" :style="[{ fontSize: tick() + 'px' }]">
	<slot></slot>
</div>

<script>
let tick = o(24);
let test = p(null);
let items = Array.from({ length: 10 }, (_, i) => i);

let classList = () => {
	return {
		red: tick() % 2 == 0,
		green: tick() % 3 == 0,
		some: test() === null,
	}
}

let computedTmp = () => {
	tick;
	test;
}

setTimeout(() => {
	console.log(1);
}, 100);

function mounted()
{
	console.log('container mounted');
}

let mounted2 = function()
{
	console.log('container mounted');
}

function unmounted()
{
	console.log('container unmounted');	
}
</script>
	`
	let blocks = parse(html);

	return compile({
		path: '../components',
        delimeter: '-',
	}, blocks);
	// console.log(html);
}
