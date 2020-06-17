import createConfig from '../config/webpack';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';


export function createBundles({ paths }, callback)
{
	let webpackConfig = createConfig(paths);

	let mode = 'development';

	let externals = Object.keys(require('../../package.json').dependencies)

	const compiler = webpack([
		server({ mode, webpackConfig, externals })
	]);

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
}


function server({ mode, webpackConfig, externals, }) {
	return  {
		mode,
		externals,
		target: 'node',

		cache: false,
		
		entry: webpackConfig.server.entry(),
		output: webpackConfig.server.output(),

		

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