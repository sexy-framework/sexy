




// import StaticComponent from '../components/static.sexy'
import PageComponent from '../components/page.sexy'
import time from './time';


// const PageComponent = import('../components/page.sexy')


import { render, hydrate, refresh } from 'sexy-framework';



let layout = document.getElementById('layout');

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

