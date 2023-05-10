const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 服务端的webpack
module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: './server/index.ts',
  externals: [nodeExternals()],
  output: {
    file: '[name].js',
    path: path.resolve(__dirname, 'server_build')
  },
})