import colors from 'kleur';
import sade from 'sade';

import path from 'path';
import webpack from 'webpack';

import * as api from './api';
import { watcher, createRoutes, createBundles, createHttp, createTemplate, parseUrl, envPaths, findRoute } from './core';

const prog = sade('sexy');

import child_process from 'child_process';


// - routes_manifest (for client middleware)

// watcher
// 	routes = GetRoutes
// 	middleware = middleware(routes)

// 	bundle(middleware)
// 	proc = startCompiler();

// server
// 	find(routes)
// 	template = render(proc)




/**
 * Watch and start dev server
 */
export function dev()
{
	let proc = null;
	let routes = [];
	let paths = envPaths();

	watcher(paths.cwd, () => {
		routes = api.routes(paths.routes);
		// generate routes config
		createRoutes({ paths, routes });

		console.log('Watch emitted');

		createBundles({ paths }, () => {
			if(proc) {
				proc.kill();
			}

			console.log('Bundle ready');
			let file = paths.serverBuild('index.js');

			proc = child_process.fork(file);

		})
	});

	createHttp((req, res) => {
		let templateData = { base: '', styles: '', head: '', html: 'not set', scripts: '' };

		let template = createTemplate(paths, { req, res, templateData });

		if(!proc) {
			return template.building();
		}

		let { url, params, pathname } = parseUrl(req.url);

		let route = findRoute({
 			routes,
 			params,
 			pathname,
 		})

 		if(!route) {
 			return template.notFound();
 		}

 		proc.send({ route });

		proc.on('message', ({ code }) => {
			template.compile(code);
		});
	});

	

}

/**
 * Build project
 */
export function build()
{

}

/**
 * CLI commands
 * @return {[type]} [description]
 */
export function cli()
{
	let type = process.argv[2];

	

	prog
	  .version('1.0.0')
	  .option('--global, -g', 'An example global flag')
	  .option('-c, --config', 'Provide path to custom config', 'foo.config.js');

	prog
		.command('dev')
		.describe('Build the source directory. Expects an `index.js` entry file.')
		.example('build app public -o main.js')
		.action((opts) => {
			dev();
		});

	prog
		.command('build')
		.describe('Build the source directory. Expects an `index.js` entry file.')
		.example('build app public -o main.js')
		.action((opts) => {
			build();
		});
	// console.log(type);
	prog.parse(process.argv);
}