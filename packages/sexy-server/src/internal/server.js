import { JSDOM } from 'jsdom';
import fs from 'fs';
import { render } from 'sexy/render';
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

process.on('message', ({ route, generation = false, options = {} }) => {

	options.generation = generation;

	build(route, options, (html) => {
		process.send({
			route,
			html,
		});
	}, false)
});

// stats -> namedChunkGroups | chunks | assetsByChunkName , for proload per page

export function make(route, page, options = {})
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

export function build(route, options, callback)
{
	global.$router = {
		getPathname: () => {
			if(options.request) {
				return options.request.pathname;
			}

			return '';
		}
	};

	global.window._sexy_generation = options.generation;
	
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
