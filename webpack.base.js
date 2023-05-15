const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015'
        },
        exclude: [/node_modules/],
        include: path.resolve(__dirname, 'src')
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