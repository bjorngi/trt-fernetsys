/*
    This file is used instead of running command
        webpack-dev-server --hot --inline

    as used in:
        https://github.com/gaearon/react-hot-boilerplate
*/

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

console.log('path: ' + config.output.path);
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8080, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8080');
});
