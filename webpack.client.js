const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 客户端的webpack
module.exports = merge(baseConfig, {
  mode: 'development',
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client_build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
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