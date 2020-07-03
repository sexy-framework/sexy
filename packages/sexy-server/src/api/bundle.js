import createConfig from '../config/webpack';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';

export function bundle({ cwd, root }, callback)
{
	let webpackConfig = createConfig(cwd, root);

	let mode = 'development';

	let config = {

		client: {
			mode,

			entry: webpackConfig.client.entry(),

			output: webpackConfig.client.output(),

			optimization: {
				splitChunks: {
					cacheGroups: {
						vendor: {
							test: /[\\/]packages[\\/]/,
							name: 'vendors',
							enforce: true,
							chunks: 'all'
						}
					}
				}
			},

			module: {
				rules: [

					{
						test: /\.sexy$/i,
						use: [{
							loader: 'sexy-loader',
							options: {
								path: path.resolve(cwd, './components'),
								styles: false
							}
						}]
					},

					{
						test: /routes.js$/,
						use: [{
							loader: `val-loader`,
							options: {
								path: path.resolve('./pages'),
							}
						}],
					},

					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: ['babel-loader'],
					},
				]
			},
		},

		server: {

			mode,

			cache: false,
			
			entry: webpackConfig.server.entry(),
			output: webpackConfig.server.output(),

			externals: Object.keys(require('../../package.json').dependencies),

			target: 'node',

			module: {
				rules: [

					{
						test: /\.sexy$/i,
						use: [{
							loader: 'sexy-loader',
							options: {
								path: '../components',
								styles: false
							}
						}]
					},

					{
						test: /routes.js$/,
						use: [{
							loader: `val-loader`,
							options: {
								path: path.resolve(cwd, './pages'),
							}
						}],
					},

					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: ['babel-loader'],
					},
				]
			},

			plugins: [

				new webpack.optimize.LimitChunkCountPlugin({
					maxChunks: 1
				})
			]

		}

	}

	const compiler = webpack([
		// config.client,
		config.server,
	]);

	// return () => {
		compiler.run((err, stats) => {
			if (err) {
				console.error(err);
				return;
			}

			callback();

			// console.log(stats.toString({
			// 	chunks: false,  // Makes the build much quieter
			// 	colors: true    // Shows colors in the console
			// }));
		});
	// };

}
