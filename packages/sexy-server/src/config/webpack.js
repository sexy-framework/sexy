import path from 'path';

export default function config(cwd, root)
{
	return {
		
		client: {

			entry: () => {
				return {
					main: `${root}/client`
				};
			},

			output: () => {
				return {
					path: path.resolve(cwd, './.sexy/client'),
					publicPath: '/client/', 
					filename: '[name].js',
					chunkFilename: '[name].[id].js', // [hash]/[name].[id].js
				};
			}
		},

		server: {

			entry: () => {
				return {
					index: path.resolve(cwd, './.sexy/server/middleware'),
				};
			},

			output: () => {
				return {
					path: path.resolve(cwd, './.sexy/server'),
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