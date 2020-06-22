import fs from 'fs';
import { ensureDirectoryExistence } from './utils';
import { getConfig } from './config';
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

export function createStyles(paths)
{
	let config = getConfig(paths);

	let importStyles = [];

	for(let style of config.styles) {
		importStyles.push(`import("${ style }");`);
	}

	let stylesPath = paths.rootBuild('styles.js');

	ensureDirectoryExistence(stylesPath);

	fs.writeFileSync(stylesPath, `
		${ importStyles.join('\n') }
	`);
}


export function createRoutes({ paths, routes })
{
	createStyles(paths);

	// paths.rootBuild
	let routesPath = paths.rootBuild('routes.js');

	let imports = [];

	for (let page of routes) {
		imports.push(`'${page.route}': () => { return import(/* webpackChunkName: "page.${ page.id }" */ '${ page.component }'); }`)
	}

	ensureDirectoryExistence(routesPath);

	fs.writeFileSync(routesPath, `
		export default { ${ imports.join(',') } };
	`);
}
