import url from 'url';
import http from 'http';
import fs from 'fs';

export function parseUrl(full_url)
{
	let url_parts = url.parse(full_url, true);
	let params = Object.assign({}, url_parts.query);
	let pathname = url_parts.pathname;

	return {
		url: url_parts,
		params,
		pathname,
	}
}

export function createTemplate(paths, { req, res, templateData, })
{
	let data = {
		sexy: templateData
	}

	return {
		building(html) {
			res.writeHead(200);
			res.end(makeTemplate(paths, data, 'page is builind'));
		},

		compile(html) {
			res.writeHead(200);
			res.end(makeTemplate(paths, data, html));
		},

		notFound(html) {
			res.writeHead(200);
			res.end(makeTemplate(paths, data, 'not found'));
		},
	}
}

export function makeTemplate(paths, data, html)
{
	data['sexy']['html'] = html;

	let source = fs.readFileSync(paths.internal('template.html'), 'utf8');

	return source.replace(/\%([^\%].*)\%/g, (matched, index, original) => {
		let [ namespace, key ] = matched.replace(/\%/g, '').split('.');
		if(data[namespace] && data[namespace][key]) {
			return data[namespace][key];
		}

		return '';
	});
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