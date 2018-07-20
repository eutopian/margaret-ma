var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, '../client/src/index.js')
  ],
  output: {
    path: path.join(__dirname, "./build"),
    filename: 'webpack-bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    watchContentBase: true
  }
}
