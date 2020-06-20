const sexy = require('../.sexy/server/index.js');
const path = require('path');

const fastify = require('fastify')({
	// logger: true
})

// console.log(__dirname);
fastify.register(require('fastify-compress'), {
	// global: false
})

fastify.register(require('fastify-static'), {
  root: path.resolve(__dirname, '../.sexy/client'),
  prefix: '/', // optional: default '/'
})

sexy.routes((path, route) => {
	fastify.get(path, (request, reply) => {
		sexy.build({
			route: path
		}, (page) => {
			reply
				.type('text/html')
				.send(page);
		});
	})
});

// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})
