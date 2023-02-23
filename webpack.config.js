// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm install --save-dev mini-css-extract-plugin
// npm install --save-dev css-loader
// JS 代码中：`import '../css/style.css';`
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 打包生产环境代码则使用：`production`
  entry: './src/ts/src/ts/app.ts',
  devtool: 'inline-source-map', // `tsconfig.json`: `"sourceMap": true`
  output: {
    filename: 'bundle.js', // 生产环境中可添加文件内容 Hash 值: `[contenthash]`
    path: path.resolve(__dirname, 'src/ts/dist'), // 必需为绝对路径
    clean: true
  },
  devServer: {
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ts/src/test-ts.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css" // 类似 `webpackOptions.output`
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
