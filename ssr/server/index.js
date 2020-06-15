import routes from '../routes.js';
import path from 'path';
import fastifyStatic from 'fastify-static';
import { JSDOM } from 'jsdom';
import { render } from 'hawa/render';

const fastify = require('fastify')({
  logger: true
})

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '../', '../', '/.hawa'),
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
				<script src="/client/vendors.0.js" defer></script>
				<script src="/client/main.js" defer></script>
				<link href="/client/0.css" rel="stylesheet">
			</head>
			<body><div id="_hawa"></div></body>
			</html>`);

		const window = dom.window;
		const document = window.document;

		let root = document.getElementById('_hawa');

		global.window = window
		global.document = document;

		let component = await item.component();
	
		render(component.default, root);

		

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

// 	let root = document.getElementById('_hawa');
	
// 	render(component, root);

// 	let code = document.body.innerHTML;
// });

