const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'production', // 最大限度压缩代码
  entry: './src/ts/src/ts/app.ts',
  devtool: false,
  output: {
    filename: 'bundle.[contenthash].js', // 文件名添加文件内容 Hash 值
    path: path.resolve(__dirname, 'src/ts/dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ts/src/test-ts.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css" // 文件名添加文件内容 Hash 值
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
