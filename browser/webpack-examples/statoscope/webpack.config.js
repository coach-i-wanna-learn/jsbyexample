const path = require('path');

const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;

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
    name: 'case-1',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        minSize: 0
      }
    }
  },
  {
    entry: {
      main: './src',
      other: './src/other'
    },
    name: 'case-2',
    optimization: {
      minimize: false,
      chunkIds: 'named',
      splitChunks: {
        minSize: 0
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
    context: __dirname,
    plugins: [
      // new BundleAnalyzerPlugin(),
      new StatoscopeWebpackPlugin({
        saveReportTo: `dist/${name}/report-[name].html`,
        saveStatsTo: `dist/${name}/stats-[name].json`,
        normalizeStats: false,
        saveOnlyStats: false,
        disableReportCompression: false,
        statsOptions: name === 'case-0' ? {} : {
          /* any webpack stats options */
          preset: 'none',
          chunkRelations: true,
          children: false,
          chunks: true,
          depth: true,
          hash: false,
          ids: true,
          chunkModules: true,
          reasons: true
        },
        // additionalStats: ['stats.json'],
        watchMode: false,
        name: name,
        open: false,
        compressor: 'gzip',
        reports: [/* ... */],
        extensions: [/* ... */],
      })
    ]
  }))
;

module.exports = config;
