const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

	mode: 'development',

	watch: true,
	// devtool: "source-map",

	entry: {
		app: path.resolve(__dirname, './src/internal/client.js')
	},

	output: {
		path: path.resolve(__dirname, '../../.sexy/client'),
		publicPath: '/client/', 
		filename: '[name].js',
		chunkFilename: '[name].chunk.js', // [hash]/[name].[id].js
	},

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
	/**
	 * Module
	 *
	 * Determine how modules within the project are treated.
	 */
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
