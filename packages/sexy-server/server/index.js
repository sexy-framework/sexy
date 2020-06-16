import routes from '../routes.js';
import path from 'path';
import fs from 'fs';
import fastifyStatic from 'fastify-static';
import fastifyCompress from 'fastify-compress';
import { JSDOM } from 'jsdom';
import { render } from 'sexy-framework/render';

const ROOT_PATH = path.join(__dirname, '../', '../', '/.sexy');

let manifest = JSON.parse(fs.readFileSync(path.join(ROOT_PATH, 'client/manifest.json'), 'utf-8'))

const fastify = require('fastify')({
  logger: true
})

fastify.register(fastifyCompress, { threshold: 0 })


fastify.register(fastifyStatic, {
  root: ROOT_PATH,
})

let cache = {};

for(let item of routes) {
	fastify.get(item.route, async (request, reply) => {

		reply.type('text/html');

		if(cache[item.route]) {
			return cache[item.route];
		}

		const dom = new JSDOM(`
			<!DOCTYPE html>
			<html lang="ru">
			<head>
				<title>Test - ${ item.route }</title>
				<script src="${ manifest['vendors.js'] }" defer></script>
				<script src="${ manifest['main.js'] }" defer></script>
				<link href="/client/0.css" rel="stylesheet">
			</head>
			<body><div id="_sexy-framework"></div></body>
			</html>`);

		const window = dom.window;
		const document = window.document;

		let root = document.getElementById('_sexy-framework');

		global.window = window
		global.document = document;

		let component = await item.component();
		
		try {
			render(component.default, root);
		} catch(err) {
			console.log(err);
		}

		return cache[item.route] = dom.serialize();
	})
}

fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})




// fastify.get('/', async )

// routes[0].component().then((module) => {
// 	let component = module.default;

// 	let root = document.getElementById('_sexy-framework');
	
// 	render(component, root);

// 	let code = document.body.innerHTML;
// });

