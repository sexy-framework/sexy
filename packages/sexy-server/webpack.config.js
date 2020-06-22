const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {

	mode: isProduction ? 'production' : 'development',

	watch: !isProduction,
	// devtool: "source-map",

	entry: [
		'./src/index.js'
	],

	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'index.js',
		// library: '',
		libraryTarget: 'commonjs2',
		// globalObject: 'this',
	},

	target: 'node',

	node: {
		__filename: false,
		__dirname: false
	},
	
	externals: Object.keys(require('./package.json').dependencies),

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
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/,
			// 	use: [{
			// 		loader: 'babel-loader',
			// 	}],
			// },
		]
	},


}
