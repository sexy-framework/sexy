import createConfig from '../webpack/config';
import webpack from 'webpack';
import path from 'path';
import { routes } from './routes';
import WebpackBar from 'webpackbar';
import relative from 'require-relative';
// Plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';  
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';  

let procKillable = true;

export async function createBundles({ paths, mode = 'development' }, callback)
{
	procKillable = true;

	let webpackConfig = createConfig(paths);
	let routesConfig = paths.rootBuild('routes.js');
	let externals = Object.keys(require('../../package.json').dependencies)

	const appConfig = relative(
		paths.app('./sexy.config.js'),
		path.resolve(paths.root, './components/a/'),
	);

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

		// console.log(stats.stats[0])
		// console.log(stats.stats[0].toString({
		// 	chunks: false,  // Makes the build much quieter
		// 	colors: true    // Shows colors in the console
		// }));

		callback(entrypoints, procKillable);
	});
}


function client({ paths, isProduction, appConfig, webpackConfig, routesConfig, externals, })
{
	let cssExtractLoader = isProduction ? MiniCssExtractPlugin.loader : 'style-loader';
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
				'@': paths.root,
				'component-route': paths.components('route.sexy'),
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
				'@': paths.root,
				'component-route': paths.components('route.sexy'),
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

	if(appConfig.analyzer && isProduction) {
		procKillable = false;
		config.plugins.push(new BundleAnalyzerPlugin());
	}

	return config;
}