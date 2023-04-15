const path = require('path');
const webpack = require('webpack')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// F(cacheGroups, "default", () => ({
//   idHint: "",
//   reuseExistingChunk: true,
//   minChunks: 2,
//   priority: -20
// }));
// F(cacheGroups, "defaultVendors", () => ({
//   idHint: "vendors",
//   reuseExistingChunk: true,
//   test: NODE_MODULES_REGEXP,
//   priority: -10
// }));


/**
 * @type {{name: string, optimization: import("webpack/types").Configuration['optimization']}[]}
 */
const optimizationGroups = [
  // {
  //   name: 'case-0-1',
  //   optimization: {
  //     minimize: false,
  //     splitChunks: false,
  //     chunkIds: 'named',
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 0,
  //       minChunks: 1,
  //       name: false,
  //       cacheGroups: {
  //         default: {
  //           idHint: "default",
  //           reuseExistingChunk: true,
  //           priority: -20
  //         },
  //         defaultVendors: {
  //           idHint: "vendors",
  //           reuseExistingChunk: true,
  //           test: /[\\/]node_modules[\\/]/i,
  //           priority: -10
  //         }
  //       }
  //     }
  //   }
  // },
  // {
  //   name: 'debug-case-0-0',
  //   optimization: {
  //     minimize: false,
  //     splitChunks: false,
  //     chunkIds: 'named',
  //     splitChunks: {
  //       chunks: 'all',
  //       // 导致 f d y z 消失了
  //       minSize: 0,
  //       minChunks: 1,
  //       cacheGroups: {
  //         default: {
  //           idHint: "default",
  //           reuseExistingChunk: true,
  //           priority: -20
  //         },
  //         defaultVendors: {
  //           idHint: "vendors",
  //           reuseExistingChunk: true,
  //           test: /[\\/]node_modules[\\/]/i,
  //           priority: -10
  //         }
  //       }
  //     }
  //   }
  // },
  // {
  //   name: 'debug-case-0-1',
  //   optimization: {
  //     minimize: false,
  //     splitChunks: false,
  //     chunkIds: 'named',
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 0,
  //       minChunks: 1,
  //       cacheGroups: {
  //         default: {
  //           idHint: "default",
  //           reuseExistingChunk: true,
  //           priority: -20,
  //           minChunks: 2,
  //         },
  //         defaultVendors: {
  //           idHint: "vendors",
  //           reuseExistingChunk: true,
  //           test: /[\\/]node_modules[\\/]/i,
  //           priority: -10
  //         }
  //       }
  //     }
  //   }
  // },
  // {
  //   name: 'debug-case-0-2',
  //   optimization: {
  //     minimize: false,
  //     splitChunks: false,
  //     chunkIds: 'named',
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 0,
  //       minChunks: 1,
  //       cacheGroups: {
  //         default: {
  //           idHint: "default",
  //           reuseExistingChunk: true,
  //           priority: -20,
  //           minChunks: 2,
  //           //> 参考 chunkInfoMap-debug-case-0-2.md，虽然 d f 有共同的 chunks, async-b， async-c，但是由于 splitChunks 的算法限制，我们无法在 chunks all 的 chunk Filter 的策略下单独拆分处理 d f，所以 d f 的 chunk 一同消失了，splitChunks 的策略是在求取满足条件下 chunks 的最大公约数，不会考虑局部情况下的最优解（这种情况下 bundle 的总体积更小）
  //           minSize: 30,
  //         },
  //         defaultVendors: {
  //           idHint: "vendors",
  //           reuseExistingChunk: true,
  //           test: /[\\/]node_modules[\\/]/i,
  //           priority: -10
  //         }
  //       }
  //     }
  //   }
  // },
  {
    entry: {
      'main-1': './src/main-1',
      'main-2': './src/main-2'
    },
    name: 'debug-case-0-3',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 30,
        minChunks: 1,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20,
            minChunks: 2,
          },
          defaultVendors: {
            idHint: "vendors",
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/i,
            priority: -10
          }
        }
      }
    }
  },
  // {
  //   entry: {
  //     'main-1': './src/main-1',
  //     'main-2': './src/main-2'
  //   },
  //   name: 'debug-case-0-4',
  //   optimization: {
  //     minimize: false,
  //     splitChunks: false,
  //     chunkIds: 'named',
  //     mergeDuplicateChunks: false,
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 30,
  //       minChunks: 1,
  //       cacheGroups: {
  //         default: {
  //           idHint: "default",
  //           reuseExistingChunk: true,
  //           priority: -20,
  //           minChunks: 2,
  //         },
  //         defaultVendors: {
  //           idHint: "vendors",
  //           reuseExistingChunk: true,
  //           test: /[\\/]node_modules[\\/]/i,
  //           priority: -10
  //         }
  //       }
  //     }
  //   }
  // },
]

// splitChunks: {
//   chunks: 'all',
//   minSize: 0,
// }

/**
 * @type {import("webpack/types").Configuration}
 */
const config = 
  optimizationGroups.map(({entry, name, optimization}) => ({
    mode: 'production',
    entry: entry || {
      main: './src',
    },
    output: {
      path: path.join(__dirname, `dist/${name}`),
      filename: '[name].js',
      chunkFilename: '[name].js',
      clean: true,
    },
    optimization: {
      concatenateModules: false,
      minimize: false,
      ...optimization,
    },
    context: __dirname,
    plugins: [
      // new BundleAnalyzerPlugin(),
      /*
      如何使用 webpack IgnorePlugin
      webpack.IgnorePlugin 可以用来忽略掉一些不需要的模块，比如说你在代码中引入了某个模块，但是你知道这个模块在当前环境下是不需要的，那么你可以使用 webpack.IgnorePlugin 来忽略掉这个模块。

      使用方法如下：

      const webpack = require('webpack');

      module.exports = {
        plugins: [
          new webpack.IgnorePlugin({
            resourceRegExp: /^\.\/locale$/,
            contextRegExp: /moment$/,
          }),
        ],
      };
      其中 resourceRegExp 和 contextRegExp 分别是要忽略的模块的正则表达式，可以根据需要自行修改。

      在你的代码中引入了这个模块时，webpack 会自动忽略掉这个模块，不会将其打包进最终的输出文件中。

      在你的代码中引入了这个模块时，webpack 会自动忽略掉这个模块，不会将其打包进最终的输出文件中。

      参考文献：

      webpack 官方文档
      */
      new webpack.IgnorePlugin({
        resourceRegExp: /a\.css/
      })
    ]
  }))
;

module.exports = config;


