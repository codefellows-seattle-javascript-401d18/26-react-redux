'use strict'

require('dotenv').config({ path:`${__dirname}/.dev.env`});
const production = process.env.NODE_ENV === 'production';

const { DefinePlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugIn = require('clean-webpack-plugin');
const UglifyPlugin = require('uglifyjs-webpack-plugin');

const plugins = [
  new EnvironmentPlugin('NODE_ENV'),
  new ExtractTextPlugin('bundle-[hash].css'),
  new HtmlPlugin({ template: `${__dirname}/src/index.html` });
  new DefinePlugin({
    __DEBUG__: JSON.stringify(!production),
  });
];

if(production)  {
  plugins = plugins.concat([new CleanPlugIn(), new UglifyPlugin()]);
}

module.exports = {
  plugins,
  devtool: production ? undefined : 'source-map',
  devServer: {
    historyApiFallBack: true,
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: process.env.CDN_URL,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(woff|woff2|tff|eot|glyph\.svg)$/,
        use: [
          {
            loader: 'url-loader',
            limit: 10000,
            name: 'font/[name].[ext]',
          }
        ]
      },
    ],
  },
};
