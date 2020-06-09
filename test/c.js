// import StaticComponent from '../components/static.hawa'
import PageComponent from '../components/page.hawa'
import time from './time';


import { render, hydrate } from '@hawa/render';

let layout = document.getElementById('layout');

console.log('start render');
time('render');
let unmount = render(PageComponent, layout);
time('render');



// setTimeout(() => {
// 	unmount();

// 	console.log('start hydration');
// 	time('hydrate');
	
// 	unmount = hydrate(PageComponent, layout);
	
// 	time('hydrate');
// }, 300)

