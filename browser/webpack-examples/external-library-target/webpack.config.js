const path = require('path')

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: process.env.target + ".index.js",
    libraryTarget: process.env.target || undefined,
    // library: 'mylib'
  },

  optimization:{
    usedExports: true, // 开启 tree shaking
    minimize: false, // 默认 prod 时为 true
    sideEffects: true, // sideEffects: true 之后，webpack 在分析依赖时就会去识别 package.json 中的副作用标记 (sideEffects)
    concatenateModules: false
  },
  externals: [
    'react'
  ]
};

module.exports = config;
