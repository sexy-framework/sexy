import { JSDOM } from 'jsdom';
import { render } from 'sexy-framework/render';
import APP_ROUTES from './routes';

const dom = new JSDOM('<div id="_layout"></div>');

const window = dom.window;
const document = window.document;

global.window = window
global.document = document;

process.on('message', ({ route }) => {
	build({ route }, (code) => {
		process.send({
			code,
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

	return root.innerHTML;
}

export function build({ route }, callback)
{
	if(APP_ROUTES[route] === undefined) {
		throw new Error(`There is no page:${ route } ready`);
	}

	APP_ROUTES[route].then(module => {
		callback(make(module))
	});
}

export function routes()
{
	return Object.keys(APP_ROUTES);
}