import createConfig from '../config/webpack';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';


export function createBundles({ paths, mode = 'development' }, callback)
{
	let webpackConfig = createConfig(paths);

	let externals = Object.keys(require('../../package.json').dependencies)

	const compiler = webpack([
		client({ mode, webpackConfig, externals }),
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


function client({ mode, webpackConfig, externals, }) {

	return  {
		mode,

		// cache: false,
		
		entry: webpackConfig.client.entry(),
		output: webpackConfig.client.output(),

		optimization: {
			// runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					vendor: {
						test: /[\\/](packages|node_modules)[\\/]/,
						name: 'vendors',
						enforce: true,
						chunks: 'all',
					    priority: 20
					},
				}
			}
		},

		// optimization: {
		// 	splitChunks: {
		// 		chunks: 'async',
		// 		minSize: 50000,
		// 		// minRemainingSize: 0,
		// 		maxSize: 150000,
		// 		minChunks: 2,
		// 		maxAsyncRequests: 6,
		// 		maxInitialRequests: 4,
		// 		automaticNameDelimiter: '~',
		// 		cacheGroups: {
		// 			defaultVendors: {
  //        				reuseExistingChunk: true,
		// 				test: /[\\/](node_modules|packages)[\\/]/,
		// 				priority: -10
		// 			},
		// 			default: {
		// 				minChunks: 2,
		// 				priority: -20,
		// 				reuseExistingChunk: true
		// 			}
		// 		}
		// 	}
		// },

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

		]

	}

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