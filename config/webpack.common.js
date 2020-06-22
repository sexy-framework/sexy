const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

	mode: 'development',

	entry: [
		'./test/index.js'
	],

	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/', // path.resolve(__dirname, '../dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
	},

	optimization: {
		// runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/](packages|node_modules)[\\/]/,
					name: 'vendors',
					enforce: true,
					chunks: 'all'
				}
			}
		}
	},

	resolve: {
		alias: {
			'~/core/': path.resolve(__dirname, '../core/'),
		}
	},

	/**
	 * Module
	 *
	 * Determine how modules within the project are treated.
	 */
	module: {
		rules: [
			/**
			 * JavaScript
			 *
			 * Use Babel to transpile JavaScript files.
			 */


			{
				test: /\.sexy$/i,
				use: [{
					loader: 'sexy-loader',
					options: {
						// loaders: ['css-loader', 'sass-loader'],
						path: '../components',
						delimeter: '-',
						styles: true,
					}
				}]
			},

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

			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		]
	},


	plugins: [

		new MiniCssExtractPlugin({
			filename: '[name].css',
      		chunkFilename: '[id].css',
		}),
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Production',
			template: 'index.html',
			inject: 'head'
		}),

		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer',
			// preload: [/\.js$/],
		}),


		// new PrintChunksPlugin()
	]



}
