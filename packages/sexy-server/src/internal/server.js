import { JSDOM } from 'jsdom';
import { render } from 'sexy-framework/render';
import APP_ROUTES from 'sexy-routes';
import template from './template';

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

function make(module)
{
	const components = require('./components');
	// console.log(components)
	components.register();

	let root = document.getElementById('_layout');

	try {
		render(module.default, root);
	} catch(err) {
		console.log('[ ERROR ]', err);
	}

	return template(root.innerHTML);
}

export function build({ route }, callback, isProduction = true)
{
	if(APP_ROUTES[route] === undefined) {
		throw new Error(`There is no page:${ route } ready`);
	}

	APP_ROUTES[route]().then(module => {
		callback(make(module))
	});
}

export function routes(handler)
{
	for(let path in APP_ROUTES) {
		handler(path, APP_ROUTES[path]);
	}
}
