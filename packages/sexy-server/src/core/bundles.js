import createConfig from '../webpack/config';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';

// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import IgnoreEmitPlugin from 'ignore-emit-webpack-plugin';
// import { MiniCssExtractPluginCleanup } from '../webpack/styles_cleanup.js';
  
export function createBundles({ paths, mode = 'development' }, callback)
{
	let webpackConfig = createConfig(paths);
	let routesConfig = paths.rootBuild('routes.js');
	let externals = Object.keys(require('../../package.json').dependencies)

	const compiler = webpack([
		client({ mode, webpackConfig, routesConfig, externals }),
		server({ mode, webpackConfig, routesConfig, externals })
	]);

	compiler.run((err, stats) => {
		if (err) {
			console.error(err);
			return;
		}

		// 0 because client
		let entrypoints = [];
		stats.stats[0].compilation.entrypoints.get('app').chunks.map(chunk => {
			entrypoints = entrypoints.concat(chunk.files);
		})

		callback(entrypoints);
		
		console.log(stats.stats[0].toString({
			chunks: false,  // Makes the build much quieter
			colors: true    // Shows colors in the console
		}));
	});
}


function client({ mode, webpackConfig, routesConfig, externals, })
{
	let isProduction = mode === 'production'
	let cssExtractLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';

	return  {
		mode,

		entry: webpackConfig.client.entry(),
		output: webpackConfig.client.output(),

		resolve: {
			alias: {
				'sexy-routes': routesConfig,
			}
		},

		optimization: {
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /\.css$/,
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},

		// optimization: {
		// 	// runtimeChunk: 'single',
		// 	splitChunks: {

		// 		// chunks: 'async',
		// 		// minSize: 10000,
		// 		// maxSize: 150000,
		// 		// minChunks: 2,
		// 		// maxAsyncRequests: 6,
		// 		// maxInitialRequests: 4,
		// 		// automaticNameDelimiter: '~',

		// 		cacheGroups: {

		// 			// default: false,

		// 			// vendor: {
		// 			// 	test: /[\\/](packages|node_modules)[\\/]/,
		// 			// 	name: 'vendors',
		// 			// 	enforce: true,
		// 			// 	chunks: 'all'
		// 			// },
					
		// 			styles: {
		// 				name: 'styles',
		// 				test: /\.s?css$/,
		// 				chunks: 'all',
		// 				// minChunks: 1,
		// 				// reuseExistingChunk: true,
		// 				enforce: true,
		// 			},
		// 		}
		// 	}
		// },

		// optimization: {
		// 	splitChunks: {
				// chunks: 'async',
				// minSize: 50000,
				// // minRemainingSize: 0,
				// maxSize: 150000,
				// minChunks: 2,
				// maxAsyncRequests: 6,
				// maxInitialRequests: 4,
				// automaticNameDelimiter: '~',
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
				// Sexy components
				{
					test: /\.sexy$/i,
					use: [{
						loader: 'sexy-loader',
						options: {
							path: '../components',
							styles: true
						}
					}]
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},

				// CSS
				{
					test: /\.s[ac]ss$/i,
					use: [
						cssExtractLoader,
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
				},

				{
					test: /\.css$/i,
					use: [cssExtractLoader, 'css-loader'],
				},
			]
		},

		plugins: [

			new MiniCssExtractPlugin({
				filename: '[name].css',
      			chunkFilename: '[id].css',
			}),

			// new IgnoreEmitPlugin('styles.js'),
			// new MiniCssExtractPluginCleanup([/\.css\.js(\.map)?$/])

		]

	}

}

function server({ mode, webpackConfig, routesConfig, externals, }) {
	return  {
		mode,
		externals,
		target: 'node',

		cache: false,
		
		entry: webpackConfig.server.entry(),
		output: webpackConfig.server.output(),

		resolve: {
			alias: {
				'sexy-routes': routesConfig,
			}
		},

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