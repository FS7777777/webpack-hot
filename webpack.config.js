var path = require('path'),
	webpack = require('webpack'),
	HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: ['webpack/hot/dev-server', path.resolve(__dirname, './app.js')],
	output: {
		path: path.resolve(__dirname, './__build__'),
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		port: 8099
	},
	module: {
		// loaders: [{
		// 	test: /\.js?$/,
		// 	exclude: /(node_modules|bower_components)/,
		// 	loader: 'babel',
		// 	query: {
		// 		presets: ['es2015']
		// 	}

		// }]
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};