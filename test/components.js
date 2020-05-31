import StaticComponent from '../components/static.hawa'
import time from './time';


let layout = document.getElementById('layout');

console.log('start render');
layout.innerHTML = '';
time('render');
layout.appendChild(StaticComponent());
time('render');




setTimeout(() => {
	let tmp = layout.innerHTML;
	layout.innerHTML = tmp;

	console.log('start hydration');
	time('hydrate');
	StaticComponent(null, layout.firstChild)
	time('hydrate');
}, 300)