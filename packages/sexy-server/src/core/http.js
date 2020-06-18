import url from 'url';
import http from 'http';
import fs from 'fs';
import path from 'path';

const mediaTypes = {
	zip: 'application/zip',
	jpg: 'image/jpeg',
	html: 'text/html',
	js: 'text/javascript',
	json: 'application/json',
	css: 'text/css',
	/* add more media types */
}

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

export function findClientAsset(paths, { req, res }) {
	
	let u = req.url;

	u = u.replace(/^\/client/, '');

	const filepath = paths.rootBuild('./client/' + u);

	try {
		const data = fs.readFileSync(filepath, { encoding:'utf8' })

		let mediaType = 'text/html'
		const ext = path.extname(filepath);

		if (ext.length > 0 && mediaTypes.hasOwnProperty(ext.slice(1))) {
			mediaType = mediaTypes[ext.slice(1)]
		}

		res.setHeader('Content-Type', mediaType)
		res.end(data)

		return true;
	} catch(err) {
		return false;
	}

	return false;
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