const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
/**
 * @type {import("webpack/types").Configuration}
 */
module.exports = {
 
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist1'),
    filename: '[name].js'
  },
  // ... other webpack configuration options ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxSize: 200 * 1024 * 5,
    }
  }
};
