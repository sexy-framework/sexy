
export default {
	// dev,

	client: {
		entry: () => {
			return {
				main: `${src}/client`
			};
		},

		output: () => {
			return {
				path: `${dest}/client`,
				filename: '[hash]/[name].js',
				chunkFilename: '[hash]/[name].[id].js',
				publicPath: `client/`
			};
		}
	},

	server: {
		entry: () => {
			return {
				server: `${src}/server`
			};
		},

		output: () => {
			return {
				path: `${dest}/server`,
				filename: '[name].js',
				chunkFilename: '[hash]/[name].[id].js',
				libraryTarget: 'commonjs2'
			};
		}
	},

	serviceworker: {
		entry: () => {
			return {
				'service-worker': `${src}/service-worker`
			};
		},

		output: () => {
			return {
				path: dest,
				filename: '[name].js',
				chunkFilename: '[name].[id].[hash].js'
			}
		}
	}
};

target: 'node' (Webpack needs this)
output.libraryTarget: 'commonjs' (makes Webpack use commonjs for unbundled libs)
externals: [ /^(?!\.|\/).+/i, ] (makes Webpack not bundle anything in node_modules, or anything that is not a relative path (starting with . or /)

// const path = require('path');
// const serverConfig = {
//   target: 'node',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.node.js'
//   }
//   //…
// };

// const clientConfig = {
//   target: 'web', // <=== can be omitted as default is 'web'
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.js'
//   }
//   //…
// };

// module.exports = [ serverConfig, clientConfig ];
