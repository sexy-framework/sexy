import createConfig from '../config/webpack';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';

// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


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

		// 0 because client
		let entrypoints = [];
		stats.stats[0].compilation.entrypoints.get('app').chunks.map(chunk => {
			entrypoints = entrypoints.concat(chunk.files);
		})

		callback(entrypoints);
		console.log(stats.toString({
			chunks: false,  // Makes the build much quieter
			colors: true    // Shows colors in the console
		}));
	});
}


function client({ mode, webpackConfig, externals, }) {

	return  {
		mode,

		entry: webpackConfig.client.entry(),
		output: webpackConfig.client.output(),

		optimization: {
			// runtimeChunk: 'single',
			splitChunks: {

				// chunks: 'async',
				// minSize: 10000,
				// maxSize: 150000,
				// minChunks: 2,
				// maxAsyncRequests: 6,
				// maxInitialRequests: 4,
				// automaticNameDelimiter: '~',

				cacheGroups: {

					// default: false,

					vendor: {
						test: /[\\/](packages|node_modules)[\\/]/,
						name: 'vendors',
						enforce: true,
						chunks: 'all'
					},
					
					styles: {
						name: 'styles',
						test: /\.s?css$/,
						chunks: 'all',
						// minChunks: 1,
						// reuseExistingChunk: true,
						enforce: true,
					},
				}
			}
		},

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
						MiniCssExtractPlugin.loader,
						// Translates CSS into CommonJS
						'css-loader',
						// Compiles Sass to CSS
						'sass-loader',
					],
				},

				{
					test: /\.css$/i,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
			]
		},

		plugins: [

			new MiniCssExtractPlugin(),

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