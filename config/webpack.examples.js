var webpack = require('webpack');

module.exports = {
  entry: './examples/app.js',
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx" }
    ]
  },
  output: {
    path: 'examples/__build__/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: './examples'
  }
}
