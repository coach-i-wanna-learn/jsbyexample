const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
  {
    name: 'case-0',
    optimization: {
      minimize: false,
      splitChunks: false 
    }
  },
  {
    name: 'case-0-1',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20,
            filename: `default.[name].js`
          },
          defaultVendors: {
            idHint: "vendors",
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/i,
            priority: -10,
            filename: `vendors.[name].js`
          }
        }
      }
    }
  },
  {
    name: 'case-1',
    optimization: {
      // Instruct webpack not to obfuscate the resulting code
      minimize: false,
      chunkIds: 'size',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      }
    }
  },
  {
    name: 'case-2',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      }
    }
  },
  {
    name: 'case-3',
    optimization: {
      minimize: false,
      chunkIds: 'deterministic',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20,
            filename: `default.[name].js`
          },
          defaultVendors: {
            idHint: "vendors",
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/i,
            priority: -10,
            filename: `vendors.[name].js`
          }
        }
      }
    }
  },
  {
    name: 'case-4',
    optimization: {
      minimize: false,
      chunkIds: 'natural',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      }
    }
  },
  {
    name: 'case-5',
    optimization: {
      minimize: false,
      chunkIds: 'total-size',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      }
    }
  },
  // 这个会报错
  // {
  //   name: 'case-6',
  //   optimization: {
  //     minimize: false,
  //     chunkIds: false,
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 0,
  //     }
  //   }
  // },
  // {
  //   name: 'case-6',
  //   optimization: {
  //     minimize: false,
  //     chunkIds: false,
  //     splitChunks: {
  //       chunks: 'all',
  //       minSize: 0,　              
  //     }
  //   }
  // },
  {
    entry: {
      main: './src',
    },
    name: 'case-7',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          defaultVendor: {
            test: /node_modules/,
            // idHint: 'common'
          },
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            minChunks: 2,
            priority: -20
          }
        }
      }
    }
  },
  {
    entry: {
      main: './src',
    },
    name: 'case-7-1',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          defaultVendor: {
            test: /node_modules/,
            // idHint: 'common'
          },
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            minChunks: 1,
            priority: -20
          }
        }
      }
    }
  },
  {
    entry: {
      'main-1': './src/main-1',
      'main-2': './src/main-2'
    },
    name: 'case-8-1',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      mergeDuplicateChunks: true,
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
  {
    entry: {
      'main-1': './src/main-1',
      'main-2': './src/main-2'
    },
    name: 'case-8-2',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      mergeDuplicateChunks: false,
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
  {
    name: 'case-0-0',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 50,
        minChunks: 1,
        cacheGroups: {
          default: {
            idHint: "",
            reuseExistingChunk: true,
            priority: -20
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
  {
    name: 'case-0-0-1',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 5000000,
        minChunks: 1,
        cacheGroups: {
          default: {
            idHint: "",
            reuseExistingChunk: true,
            priority: -20
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
  {
    name: 'case-0-1',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 30,
        minChunks: 1,
        name: false,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20
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
  {
    name: 'case-0-1-1',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 30,
        minChunks: 1,
        name: false,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20
          },
          libs: {
            name: "libs",
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/i,
            minSize: 0,
            priority: -15
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
  {
    name: 'case-0-1-2',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'all',
        minSize: 30,
        minChunks: 1,
        name: false,
        cacheGroups: {
          framework: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'framework',
            reuseExistingChunk: true,
            enforce: true, // 可选
          },
          'commons-dep': {
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
            priority: 2,
          },
          'common-dep-tiny': {
            test: /[\\/]node_modules[\\/]/,
            reuseExistingChunk: true,
            minSize: 0,
            name: 'commons',
            priority: 1,
          },
          commons: {
            minChunks: 4,
            reuseExistingChunk: true,
          },
          // 手动枚举默认 split chunk group 规则
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            reuseExistingChunk: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        }
      }
    }
  },
  {
    name: 'case-0-2',
    optimization: {
      minimize: false,
      splitChunks: false,
      chunkIds: 'named',
      splitChunks: {
        chunks: 'async',
        minSize: 0,
        minChunks: 1,
        name: false,
        cacheGroups: {
          default: {
            idHint: "default",
            reuseExistingChunk: true,
            priority: -20
          },
          defaultVendors: {
            idHint: "vendors",
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/i,
            priority: -10
          },
          common: {
            minChunks: 2,
            chunks: 'initial',
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/i,
            chunks: 'initial',
            priority: 10
          }
        }
      }
    }
  },

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
      'main-1': './src/main-1.js',
      'main-2': './src/main-2.js',
    },
    output: {
      path: path.join(__dirname, `dist/${name}`),
      filename: '[name].js',
      clean: true,
    },
    optimization: {
      concatenateModules: false,
      minimize: false,
      ...optimization,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        }
      ]
    },
    context: __dirname,
    plugins: [
      // new BundleAnalyzerPlugin(),
      new MiniCssExtractPlugin({
        filename: "[name].css",
      })
    ]
  }))
;

module.exports = config;
