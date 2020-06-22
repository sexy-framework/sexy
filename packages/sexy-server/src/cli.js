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
} from './core';

const prog = sade('sexy');

import child_process from 'child_process';

function cleanup()
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

	bundle('production', (kill) => {
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

function bundle(mode, callback = () => {})
{
	createBundles({ paths, mode }, (entrypoints, killable) => {

		createManifest(paths, {
			entrypoints,
		});
		
		startRender();

		callback(killable);
	});

}

function startRender()
{
	if(proc) {
		proc.kill();
	}

	// console.log(c.green('Sexy-server-render has started'));
	
	let file = paths.serverBuild('index.js');

	proc = child_process.fork(file, [
		paths.internal('./'),
		paths.rootBuild('./'),
	]);
}

function startDevServer()
{
	// startRender();

	let http = createHttp((req, res) => {

		if(!proc) {
			res.writeHead(200);
			return res.end('page is building...');
		}

		let { url, params, pathname } = parseUrl(req.url);

		if(findClientAsset(paths, { req, res })) {
			return false;
		}

		proc.on('message', ({ html }) => {
			res.writeHead(200);
			res.end(html);
		});

		let route = findRoute({
 			routes,
 			params,
 			pathname,
 		})

 		if(!route) {
 			return proc.send({
				route: '/error-404',
			});
 		}

 		proc.send({ route });
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