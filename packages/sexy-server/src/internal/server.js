import { JSDOM } from 'jsdom';
import { render } from 'sexy-framework/render';
import { Routes } from 'sexy-routes';
import template from './template';
import { serverLayout, Layout } from './layout';

const dom = new JSDOM('<div id="_layout"></div>');

const window = dom.window;
const document = window.document;

global.window = window
global.document = document;

global.templatePath = process.argv[2] || '/';
global.buildPath = process.argv[3] || '/';

process.on('message', ({ route }) => {
	build({ route }, (html) => {
		process.send({
			html,
		});
	}, false)
});

function make(page)
{
	const components = require('./components');
	// console.log(components)
	components.register();

	let root = document.getElementById('_layout');

	try {
		serverLayout(render, page, root);
	} catch(err) {
		console.log('[ ERROR ]', err);
	}

	return template(root.innerHTML);
}

export function build({ route }, callback, isProduction = true)
{
	if(Routes[route] === undefined) {
		throw new Error(`There is no page:${ route } ready`);
	}

	Routes[route]().then(page => {
		callback(make(page))
	});
}

export function routes(handler)
{
	for(let path in Routes) {
		handler(path, Routes[path]);
	}
}
