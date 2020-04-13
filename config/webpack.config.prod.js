const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}js/[name].[contenthash].js`,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}css/[name].[contenthash].css`,
    }),
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(prodWebpackConfig);
});