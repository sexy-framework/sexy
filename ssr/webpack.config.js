const fs = require("fs")
const path = require('path');
const webpack = require('webpack');

// const VirtualModulePlugin = require('virtual-module-webpack-plugin');
const ExtraWatchWebpackPlugin = require('extra-watch-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function config(type)
{
	return {
		mode: 'production',

		// watch: true,

		entry: [
			path.resolve(__dirname, './' + type + '/index.js')
		],

		output: {
			path: path.resolve(__dirname, '../.hawa/' + type),
			// publicPath: '/', 
			filename: '[name].js',
			chunkFilename: '[name].[id].js', // [hash]/[name].[id].js
		},

		externals: [
		    'path',
		    'jsdom',
		    'fastify',
		    'fastify-static',
		    'Navigo',
	    ],

		module: {
			rules: [

				{
					test: /\.hawa$/i,
					use: [{
						loader: 'hawa-loader',
						options: {
							loaders: ['css-loader', 'sass-loader'],
							path: '../components',
							delimeter: '-',
						}
					}]
				},

				{
					test: /routes.js$/,
					use: [{
						loader: `val-loader`,
						options: {
							path: path.resolve('./pages'),
						}
					}],
				},

				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: ['babel-loader'],
				},
			]
		},

		plugins: [

			new ExtraWatchWebpackPlugin({
				dirs: [
					path.resolve('../pages')
				],
			}),

			// new VirtualModulePlugin({
			// 	moduleName: 'routes.js',
			// 	contents: router.bind(null, path.resolve('../pages'))
			// })
		],
	}
}

let client = config('client');
let server = config('server');

client.output.publicPath = '/client/';
client.optimization = {
	// runtimeChunk: 'single',
	splitChunks: {
		cacheGroups: {
			vendor: {
				test: /[\\/]packages[\\/]/,
				name: 'vendors',
				enforce: true,
				chunks: 'all'
			}
		}
	}
}

client.module.rules.push({
	test: /\.s[ac]ss$/i,
	use: [
		MiniCssExtractPlugin.loader,
		// Translates CSS into CommonJS
		'css-loader',
		// Compiles Sass to CSS
		'sass-loader',
	],
})

client.module.rules.push({
	test: /\.css$/i,
	use: [MiniCssExtractPlugin.loader, 'css-loader'],
})

client.plugins.push(
	new MiniCssExtractPlugin()
);

server.output.filename = '[name].js';
server.output.libraryTarget = 'commonjs2'
server.output.library = '';
server.output.globalObject = 'this';
server.plugins.push(
	new webpack.optimize.LimitChunkCountPlugin({
		maxChunks: 1
	})
)

server.target = 'node';

server.node = {
	__filename: false,
	__dirname: false
};

client.module.rules[0].use[0].options.styles = false;


module.exports = [client, server];