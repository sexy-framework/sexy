import fs from 'fs';

function createTags(items)
{
	if(!Array.isArray(items)) {
		items = [];
	}

	let code = '';

	for(let item of items) {
		let attrs = [];

		for(let name in item) {
			if(name !== 'tag') {
				let value = `="${ item[name] }"`;

				if(item[name] === true) {
					value = '';
				}

				attrs.push(`${ name }${ value }`);	
			}
		}

		code += `<${ item.tag } ${ attrs.join(' ') }></${ item.tag }>\n`;
	}

	return code;
}


export function getScripts(files = ['vendors.js', 'app.js'])
{
	return files.map(file => {
		return {
			tag: 'script',
			src: `/client/${ file }`,
			defer: true
		}
	});
}

function prepareData(data)
{
	for(let key in data) {
		data[key] = createTags(data[key]);
	}

	return data;
}

export function createTemplate(paths, { req, res, templateData, })
{
	// templateData.scripts = getScripts();

	let data = {
		sexy: prepareData(templateData)
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