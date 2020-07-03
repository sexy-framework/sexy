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


fastify.setNotFoundHandler(function (request, reply) {
	errorHandler({
		statusCode: 404
	}, request, reply)
})

// error handler
function errorHandler(err, request, reply) {

	const url = request.urlData();

	sexy.build(`/error-${ err.statusCode }`, {
		request: {
			pathname: url.path,
		},
	}, (page, err) => {
		if(err) {
			console.log(err);
			errorHandler({
				statusCode: 404
			}, request, reply);

			return;
		}

		showPage(reply, page);
	});
}

// set routes
sexy.routes((path, route) => {

	fastify.get(path, (request, reply) => {
		const url = request.urlData();
		const uid = url.path + (url.query || '_');

		cache(uid, (callback) => {
			sexy.build(path, {
				request: {
					pathname: url.path,
				},
			}, (html) => {
				callback(html);
			});
		}, (page) => {
			showPage(reply, page);
		})

	})
});

// server response
function showPage(reply, page) {
	reply
		.type('text/html')
		.send(page);
}

// cache
function cache(key, getValue, callback)
{
	fastify.cache.get(key, (err, result) => {
		if(result) {
			return callback(result.item);
		}

		getValue((html) => {
			fastify.cache.set(key, html, 10000, (err, result) => {
				if (err) return reply.send(err)
				callback(html);
			});
		});
	})
}


// Run the server!
fastify.listen(3000, (err, address) => {
	if (err) {
		console.log(err)
		throw err
	}
	fastify.log.info(`server listening on ${address}`)
})
