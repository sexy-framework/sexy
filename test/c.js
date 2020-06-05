// import StaticComponent from '../components/static.hawa'
import PageComponent from '../components/page.hawa'
import time from './time';

import {
	dispatchHook,
	findAndDispatchHook,
} from '@hawa/lifecycle'

let layout = document.getElementById('layout');

console.log('start render');
layout.innerHTML = '';
time('render');

let c = PageComponent();
let ID = c.id;
dispatchHook(ID, 'mounted');
layout.appendChild(c.node);

time('render');



// setTimeout(() => {
// 	let tmp = layout.innerHTML;
// 	layout.innerHTML = tmp;
// 	findAndDispatchHook(layout, 'unmounted');

// 	console.log('start hydration');
// 	time('hydrate');
	
// 	let c = PageComponent(null, layout.firstChild);
// 	dispatchHook(c.id, 'mounted');
	
// 	time('hydrate');
// }, 300)


function createPipeline(parent = null)
{
	return {
		index: 0,
		parent,
		children: new Map(),
		register(fn, i = null) {
			if(i === null) {
				i = this.index++;
			}
			this.children.set(i, fn);
		},
		remove() {
			children.forEach((child) => child.remove());
		}
	}
}

// (start component)
let $p1 = createPipeline();
// attrs, classes and more
// (start if-statement)
(function() {
	let $p2 = createPipeline($p1);

	// subscribe

	$p1.register(() => {
		console.log('unsubscribe');
	})
})();


console.log($p1)
