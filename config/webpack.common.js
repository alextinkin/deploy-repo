const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

/** @type {import('webpack').Configuration}*/
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve( __dirname, '../dist'),
    filename: 'build.[contenthash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['','.ts','.tsx','.js','.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        type: 'asset',
        test: /\.(png|jpg|jpeg|svg|gif)$/i,
        generator: {
          filename: './static/img/[hash][ext][query]'
        },
      },
      // {
      //   test: /\.(ts|tsx)$/,
      //   exclude: /node_modules/,
      //   use: 'ts-loader',
      // },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};