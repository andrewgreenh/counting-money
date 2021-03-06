const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['@babel/polyfill', './src/index.tsx'],
  module: {
    rules: [{ test: /\.jsx?|tsx?$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html')
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  }
};
