const sexy = require('../.sexy/server/index.js');

const fastify = require('fastify')({
	// logger: true
})

sexy.routes((path, route) => {
	fastify.get(path, (request, reply) => {
		sexy.build({
			route: path
		}, (page) => {
			console.log(page)
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
