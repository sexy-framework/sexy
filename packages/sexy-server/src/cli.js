import c from 'kleur';
import sade from 'sade';

import path from 'path';
import fs from 'fs';

import * as api from './api';
import {
	watcher,
	createRoutes,
	createBundles,
	createHttp,
	createTemplate,
	parseUrl,
	envPaths,
	findRoute,
	findClientAsset,
	getScripts,
	createManifest,
	getManifest,
} from './core';

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


export function cleanup()
{
	let paths = envPaths();
	fs.rmdirSync(paths.rootBuild(''), { recursive: true });
}

let proc = null;
let routes = [];
let paths = envPaths();
let entrypoints = [];

/**
 * Watch and start dev server
 */
export function dev()
{
	cleanup();
	console.log(c.green().bold('Sexy server has started'));

	watcher(paths.cwd, () => {
		routes = api.routes(paths.routes);
		// generate routes config
		createRoutes({ paths, routes });

		console.log('');
		console.log(c.green('Sexy has changed...'));

		bundle('development');
	});

	
	start();
}

/**
 * Build project
 */
export function build()
{
	cleanup();

	console.log('');
	console.log(c.green().bold('Sexy started building'));

	routes = api.routes(paths.routes);
	// generate routes config
	createRoutes({ paths, routes });

	bundle('production', () => {
		process.exit();
	});
}

export function bundle(mode, callback = () => {})
{
	createBundles({ paths, mode }, (entrypoints) => {

		createManifest(paths, {
			entrypoints,
		});

		console.log(c.green('Bundle is ready'));
		
		startRender();

		callback();
	});

}

export function startRender()
{
	if(proc) {
		proc.kill();
	}

	console.log(c.green('Sexy-server-render has started'));
	
	let file = paths.serverBuild('index.js');

	proc = child_process.fork(file);
}

export function start()
{
	// startRender();

	let http = createHttp((req, res) => {

		let manifest = getManifest(paths);

		let templateData = { base: '', styles: '', head: '', html: 'not set', scripts: getScripts(manifest.entrypoints) };

		let template = createTemplate(paths, { req, res, templateData });

		if(!proc) {
			return template.building();
		}

		let { url, params, pathname } = parseUrl(req.url);


		if(findClientAsset(paths, { req, res })) {
			return false;
		}

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
 * CLI commands
 * @return {[type]} [description]
 */
export function cli()
{
	paths = envPaths();

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

	prog
		.command('start')
		.describe('start the source directory. Expects an `index.js` entry file.')
		.example('start app public -o main.js')
		.action((opts) => {
			start();
		});
	// console.log(type);
	prog.parse(process.argv);
}