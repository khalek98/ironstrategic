'use strict';

let path = require('path');

module.exports = {
  mode: 'production',
  entry: '/src/js/script.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist', '/js'),
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  debug: true,
                  useBuiltIns: 'usage',
                  corejs: '3.26',
                },
              ],
            ],
          },
        },
      },
    ],
  },
};
