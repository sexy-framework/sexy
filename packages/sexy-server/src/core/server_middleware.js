import fs from 'fs';
import path from 'path';
import { routes } from '../api';

function ensureDirectoryExistence(filePath) {
	var dirname = path.dirname(filePath);
	if (fs.existsSync(dirname)) {
		return true;
	}
	ensureDirectoryExistence(dirname);
	fs.mkdirSync(dirname);
}

export function createServerMiddleware({ cwd, root }) {
	let scriptPath = path.resolve(root, './src/server/index.js');
	let middlewarePath = path.resolve(cwd, './.sexy/server/middleware.js');
	let pagesPath = path.resolve(cwd, './pages/');

	let imports = [];

	let source = fs.readFileSync(scriptPath, 'utf8');


	let pages = routes(pagesPath)

	for (let page of pages) {
		imports.push(`'${page.route}': import('${page.component}')`)
	}

	source = source.replace(/__ROUTE__IMPORTS__/g, imports.join(','));

	ensureDirectoryExistence(middlewarePath);
	fs.writeFileSync(middlewarePath, source)

	return middlewarePath;
}
