import url from 'url';
import http from 'http';

export function parseUrl(url)
{
	let url_parts = url.parse(url, true);
	let params = Object.assign({}, url_parts.query);
	let pathname = url_parts.pathname;

	return {
		url: url_parts,
		params,
		pathname,
	}
}

export function createTemplate()
{

}

export function createHttp(handler)
{
	let server = http.createServer(handler).listen(3000, function(err) {
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