const merge = require('webpack-merge')
const path = require('path')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].[contenthash].js',
  },
})
