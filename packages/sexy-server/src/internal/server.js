import { JSDOM } from 'jsdom';
import fs from 'fs';
import { render } from 'sexy-framework/render';
import { Routes, RouteChunks } from 'sexy-routes';
import template from './template';
import { serverLayout, Layout } from './layout';
import relative from 'require-relative';

const dom = new JSDOM('<div id="_layout"></div>');

const window = dom.window;
const document = window.document;

global.window = window
global.document = document;

global.templatePath = process.argv[2] || '/';
global.buildPath = process.argv[3] || '/';

const chunks = relative('./chunks.js', buildPath);

process.on('message', ({ route }) => {
	build({ route }, (html) => {
		process.send({
			html,
		});
	}, false)
});

// stats -> namedChunkGroups | chunks | assetsByChunkName , for proload per page

function make(route, page)
{
	const components = require('./components');
	// console.log(components)
	components.register();

	let root = document.getElementById('_layout');

	// try {
		serverLayout(render, page, root);
	// } catch(err) {
	// 	console.log('[ ERROR ]', err);
	// }


	// console.log(buildPath, '/chunks.js');

	return template(root.innerHTML, [
		chunks['app'],
		chunks[RouteChunks[route]]
	]);
}

export function build({ route }, callback, isProduction = true)
{
	if(Routes[route] === undefined) {
		callback(null, new Error(`There is no page:${ route } ready`))
		return;
	}

	Routes[route]().then(page => {
		callback(make(route, page), null)
	});
}

export function routes(handler)
{
	for(let path in Routes) {
		handler(path, Routes[path]);
	}
}
