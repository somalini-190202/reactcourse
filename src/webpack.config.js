const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, 'dist')
  },
  devserver: {
    historyApiFallback: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}