// import StaticComponent from '../components/static.hawa'
import PageComponent from '../components/page.hawa'
import time from './time';

import {
	dispatchHook,
} from '@hawa/lifecycle'

let layout = document.getElementById('layout');

console.log('start render');
layout.innerHTML = '';
time('render');

let c = PageComponent();
dispatchHook(c.firstChild, 'mounted');
layout.appendChild(c);

time('render');




// setTimeout(() => {
// 	let tmp = layout.innerHTML;
// 	layout.innerHTML = tmp;

// 	console.log('start hydration');
// 	time('hydrate');
	
// 	let c = PageComponent(null, layout.firstChild);
// 	dispatchHook(c, 'mounted');
// 	layout.appendChild(c);
	
// 	time('hydrate');
// }, 300)