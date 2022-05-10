const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: {
      keep: /\.git$/i,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Virtual keyboard',
      filename: 'index.html',
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new ESLintPlugin()
  ],
  module: {
    rules: [{
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    static: './dist',
  },
};