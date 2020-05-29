const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

function camelize(str)
{
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

class PrintChunksPlugin {
    apply (compiler) {
        compiler.plugin('compilation', compilation => {
            compilation.plugin('after-optimize-chunk-assets', chunks => {
                console.log(chunks.map(chunk => ({
                    id: chunk.id,
                    name: chunk.name,
                    modules: Array.from(chunk._modules).map(module => module.id)
                })))
            })
        })
    }
}

module.exports = {

    mode: 'development',

    entry: [
        './test/index.js'
    ],

    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/', // path.resolve(__dirname, '../build'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
    },

    optimization: {
		// runtimeChunk: 'single',
	    splitChunks: {
	        cacheGroups: {
	            vendor: {
	                test: /[\\/]node_modules[\\/]/,
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
                test: /\.sin/,
                use: [
                    {
                    	loader: '@siph/loader',
                    	options: {
                    		parseName(file) {
                    			file = camelize(file);
                    			let rootPath = camelize(path.resolve(__dirname, '../'));

								let componentPath = file
									.split(rootPath)
									.join('')
									.replace(/\.sin/i, '')
									.replace(/Components/, '')
									.replace(/(\s|\/)/g, '');

								return componentPath;
							}
                    	}
                    }
                ]
            },

             {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },


	plugins: [

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