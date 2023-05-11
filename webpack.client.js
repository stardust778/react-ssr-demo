const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 服务端的webpack
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client_build')
  },
})