const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')



/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  entry: {
    main: './src/main'
  },
  output: {
    // publicPath: './',
    clean: true,
    publicPath: (module, ...args) => {
      console.log(args, module.issuer?.match('/.css$/'), module.issuer, module, '000')
      return module.issuer?.match('/\.css$/') ? './css/' : './js/'
    }
  },
  module: {
    strictExportPresence: false,
    rules: [
      {
        test: /\.css$/i,
        use: [{loader: MiniCssExtractPlugin.loader, options: {
          // not pass，it can also append publicPath
          publicPath: (resourcePath, context) => {
            return './gagaag/'
          },
        }}, "css-loader", 'postcss-loader'],
      },
      // {
      //   test: /\.svg/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'static/[contenthash][ext][query]',
      //   }
      // }
      {
        test: /\.svg/,
        loader: 'url-loader',
        options: {
          limit: 0,
          name: `module/static/[contenthash].[ext]`,
          publicPath: './haha/'
        },
        issuer: /\.(js|css)$/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'module/css/[contenthash].css',
      // publicPath: '../gagagaga/'
      // publicPath: '/dist/'
    }),
    new HtmlWebpackPlugin({  // Also generate a test.html
      filename: 'index.html',
      template: 'src/index.html'
    })
  ],
  optimization:{
    minimize: false
  }
}
module.exports = config