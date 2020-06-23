import createConfig from '../webpack/config';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';
import { getConfig } from './config';
import WebpackBar from 'webpackbar';
// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';  
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';  
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

let procKillable = true;


export async function createBundles({ paths, mode = 'development' }, callback)
{
	procKillable = true;

	let webpackConfig = createConfig(paths);
	let routesConfig = paths.rootBuild('routes.js');

	let externals = Object.keys(require('../../package.json').dependencies)

	const appConfig = getConfig(paths);

	const isProduction = mode === 'production';

	const compiler = webpack([
		client({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals }),
		server({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals })
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

		// console.log(entrypoints)
		// console.log(stats.stats[0].toString({
		// 	chunks: false,  // Makes the build much quieter
		// 	colors: true    // Shows colors in the console
		// }));

		callback(entrypoints, procKillable);
	});
}


function client({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals, })
{
	let cssExtractLoader = isProduction ? MiniCssExtractPlugin.loader : {
		loader: 'style-loader',
		options: {
			attributes: { 'data-to-remove': '' }
		}
	};
	// console.log(isProduction, cssExtractLoader)
	let minimizer = [];
	if(isProduction) {
		minimizer = [
			new TerserJSPlugin(),
			new OptimizeCSSAssetsPlugin()
		];
	}

	return  {
		mode: isProduction ? 'production' : 'development',

		entry: webpackConfig.client.entry(),
		output: webpackConfig.client.output(),

		resolve: {
			alias: {
				'sexy-routes': routesConfig,
				'sexy-styles': paths.rootBuild('styles.js'),
				'@layouts': paths.app('./layouts'),
			}
		},

		optimization: {
			minimizer,
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
							path: paths.app('./components'),
							pages: paths.app('./pages'),
							layouts: paths.app('./layouts'),
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
				name: 'Client'
			}),

			new MiniCssExtractPlugin({
				filename: '[hash].css',
      			chunkFilename: '[chunkhash].css',
			}),

			// new FriendlyErrorsWebpackPlugin(),
		]

	}

}

function server({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals, }) {

	let config = {
		
		mode: isProduction ? 'production' : 'development',

		externals,
		target: 'node',

		cache: false,
		
		entry: webpackConfig.server.entry(),
		output: webpackConfig.server.output(),

		resolve: {
			alias: {
				'sexy-routes': routesConfig,
				'@layouts': paths.app('./layouts'),
			}
		},

		module: {
			rules: [

				{
					test: /\.sexy$/i,
					use: [{
						loader: 'sexy-loader',
						options: {
							path: paths.app('./components'),
							pages: paths.app('./pages'),
							layouts: paths.app('./layouts'),
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
			}),

			// new FriendlyErrorsWebpackPlugin()
		]

	}

	// if(appConfig.analyzer && isProduction) {
	// 	procKillable = false;
	// 	config.plugins.push(new BundleAnalyzerPlugin());
	// }

	return config;
}