const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 服务端的webpack
module.exports = merge(baseConfig, {
  // 为了不把 Node.js 内置的模块打包进输出文件中，例如 fs net 模块等
  target: 'node',
  mode: 'development',
  entry: './src/server/index.tsx',
  // 为了不把 node_modules 目录下的第三方模块打包进输出文件中
  externals: [nodeExternals()],
  output: {
    libraryTarget: 'commonjs2',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'server_build')
  },
})