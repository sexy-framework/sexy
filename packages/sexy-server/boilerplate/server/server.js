const sexy = require('../.sexy/server/index.js');
const path = require('path');

const fastify = require('fastify')({
	// logger: true
})

// GZIP
fastify.register(require('fastify-compress'), {})

// Server static files
fastify.register(require('fastify-static'), {
  root: path.resolve(__dirname, '../.sexy/client'),
  prefix: '/', // optional: default '/'
})

// URL data
fastify.register(require('fastify-url-data'));

let cache = {};

function showPage(reply, page) {
	reply
		.type('text/html')
		.send(page);
}

sexy.routes((path, route) => {
	fastify.get(path, (request, reply) => {

		const url = request.urlData();
		const uid = url.path + url.query;

		if(cache[uid]) {
			return showPage(reply, cache[uid]);
		}

		sexy.build({
			route: path
		}, (page) => {
			cache[uid] = page;
			showPage(reply, page);
		});
	})
});

// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})
