const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HwpInlineRuntimeChunkPlugin } = require('hwp-inline-runtime-chunk-plugin');


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
    filename: "[name].[contenthash].js",
    //> this is required
    publicPath: './'
  },
  optimization: {
    minimize: false,
    runtimeChunk: "single"
  },
  plugins:[
    new HtmlWebpackPlugin(),
    //> inline runtime 不兼容 没有 publicPath 的场景
    new HwpInlineRuntimeChunkPlugin({ removeSourceMap: true })
  ]
};

module.exports = config;