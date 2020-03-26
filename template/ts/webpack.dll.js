const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pkg = require('./package.json');

module.exports = {
  mode: 'none',
  entry: {
    vendor: Object.keys(pkg.dependencies),
  },
  output: {
    path: path.resolve(__dirname, './dll'),
    filename: '[name].dll.js',
    library: '[name]',
  },
  plugins: [
    // new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ["dll"] }),
    new webpack.DllPlugin({
      path: path.resolve(__dirname, './dll/[name]-mainfest.json'),
      name: '[name]',
    }),
  ],
};
