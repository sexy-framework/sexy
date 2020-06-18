
const APP_ROUTES = {
	'/blog/:article': import('../pages/blog/_article.sexy'),
	'/blog/': import('../pages/blog/index.sexy'),
	'/home': import('../pages/home.sexy'),
	'/': import('../pages/index.sexy')
};

import { render, hydrate, refresh } from 'sexy-framework/render';

let PageComponent = APP_ROUTES['/'];

let layout = document.getElementById('layout');

// // import StaticComponent from '../components/static.sexy'
// import PageComponent from '../components/page.sexy'
import time from './time';


// // const PageComponent = import('../components/page.sexy')


// import { render, hydrate, refresh } from 'sexy-framework';



// let layout = document.getElementById('layout');

console.log('start render');
time('render');
let unmount = render(PageComponent, layout);
time('render');



setTimeout(() => {
	unmount();
	refresh(layout);

	console.log('start hydration');
	time('hydrate');
	
	unmount = hydrate(PageComponent, layout);
	
	time('hydrate');
}, 300)

