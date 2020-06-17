import path from 'path';
import decache from 'decache';
import http from 'http';
import child_process from 'child_process';
import requireRelative from 'require-relative';
import { JSDOM } from 'jsdom';
import { render as sexyRender } from 'sexy-framework/render';

const cwd = process.cwd();
let PAGES = [];

export function getPages()
{
	let serverModule = path.resolve(cwd, './.sexy/server/index.js');

	// // const key = require.resolve(serverModule)

	// delete __non_webpack_require__.cache[serverModule];
	// // Object.keys(__non_webpack_require__.cache).forEach((key) => {
	// // 	if(key.match(/sexy/)) {
	// // 		console.log(key);
	// // 	}
	// // });
	// decache(serverModule);
	

	let proc = child_process.fork(serverModule, [], {
		cwd: cwd,
	});

	console.log(proc)

	proc.stdout.on('data', chunk => {
		console.log('stdout', chunk);
	});

	proc.stderr.on('data', chunk => {
		console.log('stderr', chunk);
	});

	proc.on('message', message => {
		// if (message.__sapper__ && message.event === 'basepath') {
			console.log('message', message);
		// }
	});

	// PAGES = server.pages;

}

export function startServer()
{
	const requestListener = function (req, res)
	{
		// let pages = getPages();
		let code = 'null';

		for(let page of PAGES) {
			render(res, page);
			return;
		}

		res.writeHead(200);
		res.end(code);
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

	return server;
}


export function render(res, page)
{
	const dom = new JSDOM(`
	<!DOCTYPE html>
	<html lang="ru">
	<head>
	<title>Test</title>

	</head>
	<body><div id="_layout"></div></body>
	</html>`);

	const window = dom.window;
	const document = window.document;

	let root = document.getElementById('_layout');

	global.window = window
	global.document = document;

	let component = page.component();

	component.then((module) => {
		try {
			sexyRender(module.default, root);
		} catch(err) {
			console.log('[ ERROR ]', err);
		}

		res.writeHead(200);
		res.end(dom.serialize());
	});
}
