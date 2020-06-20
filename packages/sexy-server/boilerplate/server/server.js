const sexy = require('../.sexy/server/index.js');

const fastify = require('fastify')({
	logger: true
})

for(let path in sexy.routes) {
	console.log(path, sexy.routes[path]);
	fastify.get(path, (request, reply) => {
		sexy.build({
			route: path
		}, (page) => {
			reply.send(page);
		});
		
	})
}

// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})
