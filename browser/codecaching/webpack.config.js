const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // ... other webpack configuration options ...
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ]
};
