import { parse } from '@sexy-framework/parser';
import { compile } from '@sexy-framework/compiler';
import { observable, computed, subscribe, watch } from '@sexy-framework/observable';

import {
	attrs as _makeAttrs$,
	events as _makeEvents$,
	slot as _slot$,
	statement as _statement$,
	getNode,
	parseContext,
} from '@sexy-framework/render';

import time from './time';


/**
 * Frameworks methods
 */


/**
 * Execute
 * @return {[type]} [description]
 */
function test() {



	let { imports, render, templates, script } = gett();
	console.log(render);
	// console.log(templates);
	// console.log(script);
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
<div>
	@each(item, key in items)
		<nav.container ref="test" :key="item.v" :test="d" (model)="v" @input="mounted" transition:fade>
			test {{ item.v }}
		</nav.container>
	@endeach
	<input type="text" transition:fade.in />
	@if(d === 1)
	<nav.container >
	test if
	</nav.container>
	@endif
</div>

<script>
import govno from 'govno'

let d = o(1);
let items = o([{
	v: 'a'
}, {
	v: 'b'
}]);

let timers = [];
//Array.from({ length: 2 }, (_, i) => i);

function mounted() {
	console.log('page mounted');
	let i = items();
	let t0 = i[0];
	let t1 = i[1];

	timers.push(
		setTimeout(() => {
			items([t1]);
		}, 1000)
	);

	timers.push(
		setTimeout(() => {
			d(0)
			console.log('d=', d());
		}, 1000)
	)

	timers.push(
		setTimeout(() => {
			d(1)
			console.log('d=', d());
		}, 2000)
	)
}

function unmounted()
{
	console.log('page unmounted');

	for(let time of timers) {
		clearTimeout(time);
		clearInterval(time);
	}
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
