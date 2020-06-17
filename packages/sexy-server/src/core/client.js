import fs from 'fs';
import path from 'path';
import { ensureDirectoryExistence } from './utils';

export function createClient({ paths, routes })
{
	let scriptPath = paths.internal('client.js');
	let middlewarePath = paths.compileBuild('client.js');

	let imports = [];

	let source = fs.readFileSync(scriptPath, 'utf8');

	for (let page of routes) {
		imports.push(`'${page.route}': import('${ page.component }')`)
	}

	source = source.replace(/__ROUTE__IMPORTS__/g, imports.join(','));

	ensureDirectoryExistence(middlewarePath);

	fs.writeFileSync(middlewarePath, source);
}
