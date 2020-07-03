import relative from 'require-relative';
import path from 'path';

export function getConfig(paths)
{
	let appConfig = relative(
		paths.app('./sexy.config.js'),
		path.resolve(paths.root, './components/a/'),
	);

	appConfig = Object.assign({
		analyzer: false,
		styles: [],
	}, appConfig);

	for(let i in appConfig.styles) {
		appConfig.styles[i] = paths.app(appConfig.styles[i]);
	}

	return appConfig;
}
