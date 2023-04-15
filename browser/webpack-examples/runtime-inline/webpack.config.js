const path = require('path')

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    'main':'./index.js',
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js"
  },
  optimization: {
    minimize: false
  }
};

module.exports = config;