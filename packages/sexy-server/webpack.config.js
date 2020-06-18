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

	resolve: {
		
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
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [{
					loader: 'babel-loader',
					options: {
						presets: [
					        [
					            '@babel/preset-env',
					            {
					                modules: false,
					                loose: true,
					                targets: {
					                    browsers: ['ie >= 9']
					                }
					            }
					        ]
					    ],
					    plugins: [
					        // ["@babel/plugin-transform-runtime",
					        //     {
					        //         "regenerator": true
					        //     }
					        // ],
					        // // ['@babel/plugin-transform-modules-commonjs'],
					        // ['@babel/plugin-transform-object-assign'],
					        // ['@babel/plugin-proposal-object-rest-spread', { 'loose': true }]
					    ],
					}
				}],
			},
		]
	},


	plugins: [

	

		// new PrintChunksPlugin()
	]



}
