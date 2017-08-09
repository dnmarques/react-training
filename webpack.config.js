const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

const SOURCE_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

const TEMPLATE_HTML = path.resolve(SOURCE_DIR, 'template.html');

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      path.resolve(SOURCE_DIR, 'entry.jsx'),
    ],
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: true
  },
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader?cacheDirectory'],
    }, {
      test: /\.(css|scss)$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE_HTML,
      inject: true,
    }),
    new HotModuleReplacementPlugin(),
  ],
};
