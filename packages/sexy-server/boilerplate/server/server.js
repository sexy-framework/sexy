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

// Route caching
fastify.register(
	require('fastify-caching'), {},  (err) => {
		if (err) throw err
	}
)

// URL data
fastify.register(require('fastify-url-data'));

function showPage(reply, page) {
	reply
		.type('text/html')
		.send(page);
}

function cache(key, getValue, callback)
{
	let cache = fastify.cache.get(key, (err, result) => {
		if(result) {
			return result.item
		}

		return null;
	})

	if(cache) {
		callback(cache);
	} else {
		cache = getValue((html) => {
			fastify.cache.set(key, html, 10000, (err, result) => {
				if (err) return reply.send(err)
				callback(html);
			});
		});
		
	}
}

sexy.routes((path, route) => {
	fastify.get(path, (request, reply) => {

		const url = request.urlData();
		const uid = url.path + url.query;

		cache(uid, (callback) => {
			sexy.build({ route: path }, (html) => {
				callback(html);
			});
		}, (page) => {
			showPage(reply, page);
		})

	})
});

// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) throw err
	fastify.log.info(`server listening on ${address}`)
})
