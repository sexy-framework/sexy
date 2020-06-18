const path = require('path');


const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

	mode: isProduction ? 'production' : 'development',

	watch: !isProduction,
	// devtool: "source-map",

	entry: [
		'./src/module.js'
	],

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'sexy.js',
		library: '',
		libraryTarget: 'commonjs2',
		// globalObject: 'this',
	},


	resolve: {
		
	},

	externals: [
	   
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
