import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export default function config(paths)
{
	let cwd = paths.cwd;
	let root = paths.root;

	return {
		
		optimization: (minimizer = [], obj = {}) => {
			minimizer.push(new TerserPlugin({
				terserOptions: {
					output: {
						inline_script: false,
					},
				},
			}));
			
			return Object.assign(obj, {
				minimize: true,
				minimizer: minimizer,
			})
		},


		client: {

			entry: () => {
				return {
					app: paths.internal('client.js'),
				};
			},

			output: ({ publicPath = '/' }) => {
				return {
					path: paths.clientBuild(''),
					publicPath,
					filename: '[hash].js',
					chunkFilename: 'sexy.[chunkhash].js', // [hash]/[name].[id].js
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