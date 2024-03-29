import createConfig from '../webpack/config';
import webpack from 'webpack';
import path from 'path';
import fs from 'fs';
import { routes } from './routes';
import { getConfig } from './config';
import WebpackBar from 'webpackbar';
// Plugins
import MiniCssExtractPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';  
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';  
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import statsPlugin from 'stats-webpack-plugin'

let procKillable = true;


export async function createBundles({ paths, mode = 'development', publicPath = '/' }, callback)
{
	procKillable = true;

	let webpackConfig = createConfig(paths);
	let routesConfig = paths.rootBuild('routes.js');

	let externals = Object.keys(require('../../package.json').dependencies)

	const appConfig = getConfig(paths);

	const isProduction = mode === 'production';

	let customErrorHandler =  errorHandler();

	const options = { paths, isProduction, publicPath, appConfig, webpackConfig, routesConfig, externals, customErrorHandler };

	const compiler = webpack([
		client(options),
		server(options)
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

		getDeps(paths, stats.stats[0]);

		// console.log(entrypoints)
		// console.log(stats.stats[0].toString({
		// 	chunks: false,  // Makes the build much quieter
		// 	colors: true    // Shows colors in the console
		// }));

		callback(entrypoints, procKillable);
	});
}

function getDeps(paths, clientStats)
{
	let deps = {};

	clientStats.compilation.namedChunkGroups.forEach((item, name) => {
		/*
		namedChunkGroups
		namedChunks
		chunks

		assetsInfo
		 */
		let files = [];
		for(let chunk of item.chunks) {
			files = files.concat(chunk.files);
		}

		deps[name] = {
			preload: files,
		};
	});

	fs.writeFileSync(paths.rootBuild('./chunks.js'), `module.exports = ${ JSON.stringify(deps) }`);
}

function getPrependCode(paths, isServer = false)
{
	if(isServer) {
		return `
		const $router = global.$router;
		`
	}

	return `
	import { router as $router } from '${ paths.internal('./router.js') }';
	`
}

function errorHandler()
{
	let plugin = new FriendlyErrorsWebpackPlugin({
		clearConsole: false,
	});

	plugin.displaySuccess = function() {}
	// console.log(plugin.displaySuccess);

	return plugin;
}

function client({ paths, isProduction, publicPath, appConfig, webpackConfig, routesConfig, externals, customErrorHandler })
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
			new OptimizeCSSAssetsPlugin()
		];
	}

	return  {
		mode: isProduction ? 'production' : 'development',

		bail: true,

		entry: webpackConfig.client.entry(),
		output: webpackConfig.client.output({ publicPath }),

		resolve: {
			extensions: [".js", '.sexy', ".json"],
			alias: {
				'sexy-routes': routesConfig,
				'sexy-styles': paths.rootBuild('styles.js'),
				'@layouts': paths.app('./layouts'),
			}
		},

		optimization: webpackConfig.optimization(minimizer, {
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
		}),

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
							prependCode: getPrependCode(paths, false),
							client: true,
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

			customErrorHandler,

		]

	}

}

function server({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals, customErrorHandler }) {

	let config = {
		
		mode: isProduction ? 'production' : 'development',

		externals,
		target: 'node',

		cache: false,
		
		entry: webpackConfig.server.entry(),
		output: webpackConfig.server.output(),

		optimization: webpackConfig.optimization(),

		resolve: {
			extensions: [".js", '.sexy', ".json"],
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
							prependCode: getPrependCode(paths, true),
							styles: false
						}
					}]
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							plugins: [
								'dynamic-import-webpack',
								'remove-webpack',
							]
						}
					}],
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

			customErrorHandler,
		]

	}

	// if(appConfig.analyzer && isProduction) {
	// 	procKillable = false;
	// 	config.plugins.push(new BundleAnalyzerPlugin());
	// }

	return config;
}
