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
      { test: /\.jsx$/, loader: 'react-hot' }
    ]
  }
};
