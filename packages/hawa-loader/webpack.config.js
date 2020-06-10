const path = require('path');

module.exports = {

	mode: 'development',

	// devtool: "source-map",

	entry: [
		'./src/index.js'
	],

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		library: '',
		libraryTarget: 'commonjs2',
		globalObject: 'this',
	},


	resolve: {
		
	},

	externals: [
	    'path',
	    'loader-utils',
	    'querystring',
    ],

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
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		]
	},


	plugins: [

	

		// new PrintChunksPlugin()
	]



}
