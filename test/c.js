// import StaticComponent from '../components/static.hawa'
import PageComponent from '../components/page.hawa'
import time from './time';


let layout = document.getElementById('layout');

console.log('start render');
layout.innerHTML = '';
time('render');
let c = new PageComponent();
layout.appendChild(c.$node);
time('render');
c.$hooks.mounted()




setTimeout(() => {
	let tmp = layout.innerHTML;
	layout.innerHTML = tmp;

	console.log('start hydration');
	time('hydrate');
	let c = new PageComponent(null, layout.firstChild)
	time('hydrate');
	c.$hooks.mounted()
}, 300)