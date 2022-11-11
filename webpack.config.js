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

  // module: {},
};
