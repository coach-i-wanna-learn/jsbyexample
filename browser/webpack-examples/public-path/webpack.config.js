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
    // publicPath: (...args) => {
    //   console.log(args, '2222')
    // }
  },
  module: {
    strictExportPresence: false,
    // publicPath 优先级, module public > MiniCssExtractPlugin.loader publicPath > output publicPath
    rules: [
      {
        test: /\.css$/i,
        use: [{loader: MiniCssExtractPlugin.loader, options: {
          // not pass，it can also append publicPath
          publicPath: '../',
          // publicPath: (...args) => {
          //   console.log(args, '0000')
          //   return './gagag/'
          // }
        }}, 
        {
          loader: "css-loader",
        
        }, 'postcss-loader'],
      },
      {
        test: /\.svg/,
        type: 'asset/resource',
        use: [
          {
            loader: 'svgo-loader',
          },
        ],
        generator: {
          filename: 'static/[contenthash][ext][query]',
          // 这里可以通过 issuer 动态确定 publicPath
          // publicPath: ({module}, ...args) => {
          //   console.log(module.issuer.resource, args,'3333')
          //   // if (module.issuer.resource.match(/\.(css)$/)) {
          //   //   return './aaa/'
          //   // } else {
          //   //   return './bbb/'
          //   // }
          //   // return undefined // 返回 undefined 是不允许的
          //   return  ''
          // }
          publicPath: undefined // 这里返回 undefined 是可以的，相对于默认配置 output.publicPath
        },
      },
      // {
      //   test: /\.svg/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 0,
      //     name: `module/static/[contenthash].[ext]`,
      //     publicPath: (...args) => {
      //       console.log(argsq, '1111')
      //     }
      //   },
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'module/css/[contenthash].css'
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