const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.jsx$/, exclude: /node_modules/, use: ['babel-loader']},
      {test: /\.less$/, use: ['less-loader']}
    ]
  },
  devServer: {
    index: path.resolve(__dirname, 'index.html'),
    publicPath: "/dist/"
  }
}
