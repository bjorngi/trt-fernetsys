var path = require("path");
var webpack = require('webpack');

module.exports = {
  watch: false,
  entry:{
    devserver: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server','./app/shotradar/main.jsx'], // WebpackDevServer host and port]
    main: ['./app/main.jsx'],
    shotradar: ['./app/shotradar/app.jsx']
  },
  output: {

    path: path.join(__dirname, 'build'),
    filename: '[name].entry.js',
    publicPath: '/build/'
  },

  module: {
    loaders: [
      //{
      //  test: /\.jsx?$/,
      //  loaders: ['react-hot', 'babel-loader'],
      //  include: path.join(__dirname, 'app')
      //},
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader', include: path.join(__dirname, 'app') },
      { test: /\.less/, loader: 'style!css!less', include: path.join(__dirname, 'app') },
      { test: /\.(png|woff|woff2|ttf|svg|JPG|eot)$/, loader: 'url-loader?limit=100000', include: path.join(__dirname, 'app') }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extentions: ['', '.js', '.jsx']
  }
};
