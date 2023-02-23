// npm install --save-dev html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// npm install --save-dev mini-css-extract-plugin
// npm install --save-dev css-loader
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 打包生产环境代码则使用 `production`
  entry: './src/ts/src/ts/app.ts',
  devtool: 'inline-source-map', // `tsconfig.json`: `"sourceMap": true`
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'src/ts/dist'), // 必需为绝对路径
    clean: true
  },
  devServer: {
    // http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename]
    static: [
      {
        directory: path.resolve(__dirname, 'src/ts/css'),
        publicPath: '/dist/css/'
      }
    ],
    port: 3000,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/ts/src/test-ts.html'
    }),
    new MiniCssExtractPlugin()
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
