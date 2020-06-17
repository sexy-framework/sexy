import path from 'path';

export function envPaths()
{
	let cwd = process.cwd();
	let root = path.resolve(__dirname, '../');

	return {
		cwd,
		root,

		routes: path.resolve(cwd, './pages'),

		clientBuild: (src) => path.resolve(cwd, './.sexy/client/', src),
		serverBuild: (src) => path.resolve(cwd, './.sexy/server/', src),
		rootBuild: (src) => path.resolve(cwd, './.sexy/', src),

		internal: (src) => path.resolve(root, './src/internal/', src),

		middleware: 'middleware.js',
	}
}