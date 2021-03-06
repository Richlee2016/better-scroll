var path = require('path');
var webpack = require('webpack');
var version = require('./package.json').version;

module.exports = {
	entry: './src/index',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bscroll.js',
		library: 'BScroll',
		libraryTarget: 'umd',
		publicPath: '/assets/'
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{test: /\.js$/, loader: 'babel'}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__VERSION__: JSON.stringify(version)
		})
	]
};