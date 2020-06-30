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
global.$router = {
	getPathname: () => {
		return 'null';
	}
};

const chunks = relative('./chunks.js', buildPath);

process.on('message', ({ route, options }) => {

	build(route, options, (html) => {
		process.send({
			html,
		});
	}, false)
});

// stats -> namedChunkGroups | chunks | assetsByChunkName , for proload per page

function make(route, page, options = {})
{
	const components = require('./components');
	// console.log(components)
	components.register();

	let root = document.getElementById('_layout');

	serverLayout(render, page, root, options);

	return template(root.innerHTML, [
		chunks['app'],
		chunks[RouteChunks[route]]
	]);
}

export function build(route, options, callback, isProduction = true)
{
	global.$router = {
		getPathname: () => {
			return options.request.pathname;
		}
	};
	
	if(Routes[route] === undefined) {
		callback(null, new Error(`There is no page:${ route } ready`))
		return;
	}

	Routes[route]().then(page => {
		callback(make(route, page, options), null)
	});
}

export function routes(handler)
{
	for(let path in Routes) {
		handler(path, Routes[path]);
	}
}
