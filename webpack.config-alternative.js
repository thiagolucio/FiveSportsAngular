webpack = require('webpack');

module.exports =  {
	devtool: 'source-map',
	entry: './src/js/main.js',
	output: {
		path: __dirname + '/dist',
		filename: 'app.bundle.js',
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader:'babel-loader',
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.(woff|woff2|ttf|svg|eot)$/,
				loader: 'url-loader?limit=100000',
			},
			{
				test: /\.(scss|sass)$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'],
			}
		]
	},
	devServer: {
		// host: '0.0.0.0',
		inline: true,
		watchOptions: {
			poll: true,
			aggregateTimeout: 300
		}
	}
}