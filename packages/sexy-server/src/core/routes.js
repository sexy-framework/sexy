import fs from 'fs';
import { ensureDirectoryExistence } from './utils';
import parse from 'regexparam';


export function findRoute({ routes, params, pathname })
{
	let foundRoute = null;

	for(let page of routes) {
		let { keys, pattern } = parse(page.route);

		let matches = pattern.exec(pathname);

		if (matches === null) {
			continue;
		}

		if (keys === false) {
			if (matches.groups !== void 0) {
				for (k in matches.groups) {
					params[k] = matches.groups[k];
				}
			}

			foundRoute = page.route;
		} else if (keys.length > 0) {
			for (let j = 0; j < keys.length;) {
				params[keys[j]] = matches[++j];
			}

			foundRoute = page.route;
		} else if (pattern.test(pathname)) {
			foundRoute = page.route;
		}
	}

	return foundRoute;
}

export function createRoutes({ paths, routes })
{
	let routesPath = paths.internal('routes.js');

	let imports = [];

	for (let page of routes) {
		imports.push(`'${page.route}': import(/* webpackChunkName: "page.${ page.id }" */ '${ page.component }')`)
	}

	ensureDirectoryExistence(routesPath);

	fs.writeFileSync(routesPath, `
		export default { ${ imports.join(',') } };
	`);
}
