import fs from 'fs';
import path from 'path';

function walk(dir) {
    let files = fs.readdirSync(dir);
    files = files.map(file => {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) return walk(filePath);
        else if(stats.isFile()) return filePath;
    });

    return files.reduce((all, folderContents) => all.concat(folderContents), []);
}

function technicalRoutes(paths)
{
	let defaultErrors = fs.readdirSync(
		path.resolve(paths.root, './pages/errors')
	); 

	let customErrors = [];

	try {
		customErrors = fs.readdirSync(
			path.resolve(paths.routes, './errors')
		); 
	} catch(err) {

	}

	let errors = {};

	defaultErrors.map((item) => {
		let code = item.replace(/\.sexy$/, '');
		errors[`error-${code}`] = path.resolve(paths.root, './pages/errors', item);
	});

	customErrors.map((item) => {
		let code = item.replace(/\.sexy$/, '');
		errors[`error-${code}`] = path.resolve(paths.routes, './errors', item);
	});

	return Object.keys(errors).map(function(key, index) {
		let item = errors[key];
		return {
			id: key,
			route: '/' + key,
			component: item,
		}
	});
}


export function routes(paths)
{
	let regexp = new RegExp(paths.routes);
	let files = walk(paths.routes);
	let techRoutes = technicalRoutes(paths);

	let routes = files.map(component => {
		let route = ('/' + path.relative(paths.routes, component))
			.replace(regexp, '')
			.replace(/\_/g, ':')
			.replace(/([^\/]+)\.sexy/g, '$1')
			.replace(/\/index\/?/g, '/')
			

		let id = path.relative(paths.routes, component)
			.replace(/([^\/]+)\.sexy/g, '$1')
			.replace(/([^\w])/g, '.')


		return {
			id,
			route,
			component,
		}
	});

	return Object.assign(routes, techRoutes);
};
