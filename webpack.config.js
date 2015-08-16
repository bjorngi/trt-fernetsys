module.exports = {
  entry: {
    main: ['./app/main.jsx'],
    fernet: ['./app/fernet/main.jsx']
  },
  output: {
    path: './build',
    filename: '[name].entry.js'
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less/, loader: 'style!css!less' },
      { test: /\.(png|woff|woff2|eot)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
