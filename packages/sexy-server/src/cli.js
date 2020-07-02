import c from 'chalk';
import sade from 'sade';

import path from 'path';
import fs from 'fs';

import consola from 'consola';

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
	box,
	Request,
} from './core';

import { ensureDirectoryExistence } from './core/utils';

import child_process from 'child_process';

const prog = sade('sexy');

let proc = null;
let routes = [];
let paths = envPaths();
let entrypoints = [];
let HTTP_RES;

/**
 * Cleanup build folder
 */
function cleanup(dir = null)
{
	if(dir === null) {
		dir = paths.rootBuild('');
	}

	fs.rmdirSync(dir, { recursive: true });
}


/**
 * Watch and start dev server
 */
function dev()
{
	cleanup();
	console.log(c.green(`Started to watch files: ${ paths.cwd }`));

	watcher(paths.cwd, () => {
		routes = api.routes(paths);
		// generate routes config
		createRoutes({ paths, routes });

		// console.log('');
		// consola.info(c.green('Sexy has changed...'));

		bundle('development');
	});

	
	startDevServer();
}

/**
 * Build project
 */
function build()
{
	cleanup();

	// console.log('');
	// consola.info(c.green().bold('Sexy started building'));

	routes = api.routes(paths);
	// generate routes config
	createRoutes({ paths, routes });

	bundle('production', {}, (kill) => {
		box('Bundle is ready')
		if(kill) {
			process.exit();
		}
	});
}

function start()
{
	box([c.rgb(170, 170, 170)('Listening:'), `http://localhost:3000`]);
	// let args = ['-P', 'asd'];

	proc = child_process.fork(paths.app('./server/server.js'), [
		paths.internal('./'),
		paths.rootBuild('./'),
	]);
}

function bundle(mode, options = {}, callback = () => {}, startProc = true)
{
	createBundles({ paths, mode, ...options }, (entrypoints, killable) => {

		createManifest(paths, {
			entrypoints,
		});
		
		if(startProc) {
			startRender();
		}

		callback(killable);
	});

}

function startRender(callback = null)
{
	if(proc) {
		proc.kill();
	}

	if(callback === null) {
		callback = ({ html }) => {
			HTTP_RES.writeHead(200);
			HTTP_RES.end(html);
		}
	}

	// console.log(c.green('Sexy-server-render has started'));
	
	let file = paths.serverBuild('index.js');

	proc = child_process.fork(file, [
		paths.internal('./'),
		paths.rootBuild('./'),
	]);

	proc.on('message', callback);
}

function startDevServer()
{
	let http = createHttp((req, res) => {
		
		HTTP_RES = res;

		if(!proc) {
			res.writeHead(200);
			return res.end('page is building...');
		}

		let { url, params, pathname } = parseUrl(req.url);

		let request = new Request(req);

		if(findClientAsset(paths, { req, res })) {
			return false;
		}

		let route = findRoute({
 			routes,
 			params,
 			pathname,
 		})

 		if(!route) {
 			return proc.send({
				route: '/error-404',
				options: {
	 				request,
	 			}
			});
 		}

 		proc.send({
 			route,
 			options: {
 				request,
 			}
 		});
	});
}

function generate()
{
	cleanup(paths.rootBuild(''));
	cleanup(paths.generateBuild(''));

	routes = api.routes(paths);

	let currentRoute = null;
	let currentIndex = routes.length - 1;

	// generate routes config
	createRoutes({ paths, routes });

	function successBuild() {
		if(currentIndex > 0) {
			return;
		}

		box('Static website generation has completed')

		proc.kill();
		process.exit();
	}

	bundle('production', {}, (kill) => {

		startRender((render) => {
			currentIndex--;

			let route = render.route;
			
			route = route.replace(/\/$/g, '/index');

			let filePath = paths.generateBuild(`./${ route }.html`);

			// console.log(filePath, currentIndex);

			ensureDirectoryExistence(filePath);

			fs.writeFileSync(filePath, render.html);

			successBuild();
		});

		for (let page of routes) {
			currentRoute = findRoute({
	 			routes,
	 			params: {},
	 			pathname: page.route,
	 		});

	 		if(!currentRoute) {
	 			currentRoute = '/error-404';
	 		}

	 		console.log(currentRoute);

	 		proc.send({
	 			route: currentRoute,
	 			generation: true,
	 		});

		}
	}, false);
	
	

	// let route = findRoute({
	// 	routes,
	// 	params: {},
	// 	pathname,
	// });

	// proc.send({
	// 	route,
	// 	options: {
	// 		request,
	// 	}
	// });


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
		.command('generate')
		.describe('start the source directory. Expects an `index.js` entry file.')
		.example('start app public -o main.js')
		.action((opts) => {
			generate();
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