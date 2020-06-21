import createConfig from '../webpack/config';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';
import WebpackBar from 'webpackbar';
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

		// console.log(stats.stats[0])
		// console.log(stats.stats[0].toString({
		// 	chunks: false,  // Makes the build much quieter
		// 	colors: true    // Shows colors in the console
		// }));

		callback(entrypoints);
	});
}


function client({ mode, webpackConfig, routesConfig, externals, })
{
	let isProduction = mode === 'production'
	let cssExtractLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
	// console.log(isProduction, cssExtractLoader)
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
				chunks: 'all',
        		name: false,
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

			new WebpackBar({
				name: 'Client',
			}),

			new MiniCssExtractPlugin({
				filename: '[name].css',
      			chunkFilename: '[id].css',
			}),

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

			new WebpackBar({
				name: 'Server',
				color: 'orange',
			}),

			new webpack.optimize.LimitChunkCountPlugin({
				maxChunks: 1
			})
		]

	}
}