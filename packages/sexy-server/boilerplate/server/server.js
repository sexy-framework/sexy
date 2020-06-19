const routes = require('@sexy/routes');
const middleware = require('@sexy/middleware');


const fastify = require('fastify')({
	logger: true
})

// routes
// Declare a route
fastify.get('/', (request, reply) => {
	reply.send({ hello: 'world' })
})

// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})
