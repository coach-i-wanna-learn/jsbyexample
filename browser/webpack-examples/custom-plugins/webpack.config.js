const path = require('path')

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: 'production',
  entry: {
    'main':'./src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: new RegExp(`.(js|tsx)$`),
        use: [
          {
            loader: path.resolve(__dirname, 'import.js'),
            options: {
              createFunctionName: '__createElement',
              path: path.resolve(__dirname, 'node_modules/react'),
            },
          }
        ],
        include: [
          path.resolve(__dirname, 'src'),
        ],
      }
    ]
  },

  optimization:{
    usedExports: true, // 开启 tree shaking
    minimize: false, // 默认 prod 时为 true
    sideEffects: true, // sideEffects: true 之后，webpack 在分析依赖时就会去识别 package.json 中的副作用标记 (sideEffects)
    concatenateModules: false,
    moduleIds: 'named'
  }
};

module.exports = config;
