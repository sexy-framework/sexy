import path from 'path';

export default function config(paths)
{
	let cwd = paths.cwd;
	let root = paths.root;

	return {
		
		client: {

			entry: () => {
				return {
					app: paths.internal('client.js'),
				};
			},

			output: () => {
				return {
					path: paths.clientBuild(''),
					publicPath: '/',
					filename: '[name].js',
					chunkFilename: '[name].chunk.js', // [hash]/[name].[id].js
				};
			}
		},

		server: {

			entry: () => {
				return {
					index: paths.internal('server.js'),
				};
			},

			output: () => {
				return {
					path: paths.serverBuild(''),
					filename: '[name].js',
					chunkFilename: '[name].js',
					libraryTarget: 'commonjs2',
					library: '',
					globalObject: 'this',
				};
			}
			
		}

	}
}