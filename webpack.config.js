const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/ts/src/app.ts',
  devtool: 'inline-source-map', // `tsconfig.json`: `"sourceMap": true`
  output: {
    filename: 'bundle.js', // 可加 Hash 值：[contenthash]
    path: path.resolve(__dirname, 'src/ts/dist') // 必需为绝对路径
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};
