const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015'
        },
        exclude: [/node_modules/],
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      // 直接@就行，不要@/，不然webpack在打包路径别名的文件时会报错
      '@': path.resolve(__dirname, 'src')  
    }
  }
}