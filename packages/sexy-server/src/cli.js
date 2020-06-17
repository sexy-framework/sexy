import colors from 'kleur';
import sade from 'sade';

import path from 'path';
import webpack from 'webpack';

import * as api from './api';
import { watcher, createServerMiddleware } from './core';

const prog = sade('sexy');
const config = 'sexy.config.js';

import child_process from 'child_process';
import http from 'http';
import url from 'url';
import parse from 'regexparam';

const cwd = process.cwd();
const root = path.resolve(__dirname, '../');

/**
 * Watch and start dev server
 */
export function dev()
{
	let proc = null;

	watcher(cwd, () => {
		let middleware = createServerMiddleware({
			cwd,
			root,
		});

		api.bundle({
			cwd,
			root: path.resolve(__dirname, '../'),
			server,
		}, () => {
			if(proc) {
				proc.kill();
			}

			let file = path.resolve(cwd, './.sexy/server/index.js');

			proc = child_process.fork(file);
		});
	});


	const requestListener = function (req, res)
	{
		if(!proc) {
			res.writeHead(200);
			res.end('loading');
			return;
		}

		let pages = api.routes(path.resolve(cwd, './pages'))
		// console.log(pages);

		let url_parts = url.parse(req.url, true);
		let params = Object.assign({}, url_parts.query);
		let pathname = url_parts.pathname;

		let foundRoute = null;
		 // 
		for(let page of pages) {
			let { keys, pattern } = parse(page.route);

			let matches = pattern.exec(pathname);

			if (matches === null) {
				continue;
			}

			if (keys === false) {
				if (matches.groups !== void 0) {
					for (k in matches.groups) {
						params[k] = matches.groups[k];
					}
				}

				foundRoute = page.route;
				// console.log('[RENDER 1]', pathname, 'with', page.route, params);
			} else if (keys.length > 0) {
				for (let j = 0; j < keys.length;) {
					params[keys[j]] = matches[++j];
				}

				foundRoute = page.route;
				// console.log('[RENDER 2]', pathname, 'with', page.route, params);
			} else if (pattern.test(pathname)) {
				foundRoute = page.route;
				// console.log('[RENDER 3]', pathname, 'with', page.route, params);
			}
		}
 		
 		if(!foundRoute) {
			res.writeHead(200);
			res.end('Not found');
			return;
 		}

		proc.send({ route: foundRoute });

		proc.on('message', ({ code }) => {
			res.writeHead(200);
			res.end(`
				<!DOCTYPE html>
				<html lang="ru">
				<head>
					<title>Test</title>
				</head>
				<body><div id="_layout">${ code }</div></body>
				</html>`
			);
		});
	}

	let server = http.createServer(requestListener).listen(3000, function(err) {
		if (err) {
			console.log(err);
		} else {
			const host = server.address().address;
			const port = server.address().port;
			console.log(`Server listening on ${host}:${port}`);
		}
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