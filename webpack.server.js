const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 服务端的webpack
module.exports = merge(baseConfig, {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.tsx',
  externals: [nodeExternals()],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server_build')
  },
})