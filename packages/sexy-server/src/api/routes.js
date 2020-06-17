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

export function routes(routesPath)
{
	let regexp = new RegExp(routesPath);
	let files = walk(routesPath);

	return files.map(component => {
		let route = ('/' + path.relative(routesPath, component))
			.replace(regexp, '')
			.replace(/\_/g, ':')
			.replace(/([^\/]+)\.sexy/g, '$1')
			.replace(/\/index\/?/g, '/')
			

		let id = path.relative(routesPath, component)
			.replace(/([^\/]+)\.sexy/g, '$1')
			.replace(/([^\w])/g, '$')


		return {
			id,
			route,
			component,
		}
	});
};
