import { JSDOM } from 'jsdom';
import { render } from 'sexy-framework/render';

const dom = new JSDOM('<div id="_layout"></div>');

const window = dom.window;
const document = window.document;

global.window = window
global.document = document;

// IMPORTS
let imports = {
	__ROUTE__IMPORTS__
}

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
	if(imports[route] === undefined) {
		throw new Error(`There is no page:${ route } ready`);
	}

	imports[route].then(module => {
		callback(make(module))
	});
}