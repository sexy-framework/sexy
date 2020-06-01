// import StaticComponent from '../components/static.hawa'
import PageComponent from '../components/page.hawa'
import time from './time';


let layout = document.getElementById('layout');

console.log('start render');
layout.innerHTML = '';
time('render');
layout.appendChild(PageComponent());
time('render');




setTimeout(() => {
	let tmp = layout.innerHTML;
	layout.innerHTML = tmp;

	console.log('start hydration');
	time('hydrate');
	PageComponent(null, layout.firstChild)
	time('hydrate');
}, 300)