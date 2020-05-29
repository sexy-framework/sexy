const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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

    mode: 'production',

    entry: [
        './index.js'
    ],

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/', // path.resolve(__dirname, '../build'),
        filename: 'index.js',
        chunkFilename: 'index.js',
    },

    optimization: {
		// runtimeChunk: 'single',
	   
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
             {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    },


	plugins: [

	]



}