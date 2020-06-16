const fs = require("fs")
const path = require('path');

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

module.exports = function (options, loaderContext)
{
	let regexp = new RegExp(options.path);
	let files = walk(options.path);
	//.map(path => path.replace(regexp, ''));

	let code = '';
	
	files.map(item => {
		let route = item
			.replace(regexp, '')
			.replace(/\_/g, ':')
			.replace(/([^\/]+)\.sexy-framework/g, '$1')
			.replace(/\/index\/?/g, '/')


		code += `{
			route: "${ route }",
			component: () => import('${ item }'),
		},`
	});

	return { code: `module.exports = [${ code }];` };
};
