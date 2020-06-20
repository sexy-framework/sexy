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

process.on('message', ({ route }) => {
	build({ route }, (html) => {
		process.send({
			html,
		});
	})
});

function make(module)
{
	let root = document.getElementById('_layout');

	try {
		render(module.default, root);
	} catch(err) {
		console.log('[ ERROR ]', err);
	}

	return template(root.innerHTML);
}

let cache = {};

export function build({ route }, callback)
{
	if(APP_ROUTES[route] === undefined) {
		throw new Error(`There is no page:${ route } ready`);
	}

	if(cache[route]) {
		callback(cache[route]);
		return;
	}

	APP_ROUTES[route]().then(module => {
		cache[route] = make(module);
		callback(cache[route])
	});
}

export function routes(handler)
{
	for(let path in APP_ROUTES) {
		handler(path, APP_ROUTES[path]);
	}
}
