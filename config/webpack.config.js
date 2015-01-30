var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  externals: {
    react: 'React'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: "jsx" }
    ]
  },
  output: {
    path: 'dist',
    filename: 'react-popover.js',
    library: 'ReactPopover'
  }
}
