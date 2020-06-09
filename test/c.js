// import StaticComponent from '../components/static.hawa'
// import PageComponent from '../components/page.hawa'
import time from './time';


const PageComponent = import('../components/page.hawa')


import { render, hydrate, refresh } from '@hawa/render';

let layout = document.getElementById('layout');

console.log('start render');
time('render');
let unmount = render(PageComponent, layout);
time('render');



// setTimeout(() => {
// 	unmount();
// 	refresh(layout);

// 	console.log('start hydration');
// 	time('hydrate');
	
// 	unmount = hydrate(PageComponent, layout);
	
// 	time('hydrate');
// }, 300)

