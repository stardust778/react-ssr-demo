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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 服务端渲染不能用 style-loader，因为 node 没有 document 对象，无法插入 style 标签
          // 服务端本来就不能渲染 dom，只是提供 html/css/js 代码给浏览器，交给浏览器去渲染
          // 服务端返回的 html 源码里，没有 style 标签
          // 而在浏览器中的 html 源码里，有 style 标签，是通过 js 插入进去的
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
                modules: true
            }
          }
        ]
      }
    ]
  }
})