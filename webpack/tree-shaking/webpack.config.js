const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [
  //     new TerserPlugin({
  //       cache: true,
  //       parallel: true,
  //       terserOptions: {
  //         // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
  //       },
  //     }),
  //   ],
  //   usedExports: true,
  //   providedExports: true,
  //   // concatenateModules: true,
  //   moduleIds: 'natural',
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      browsers: ['last 2 versions', 'Firefox ESR'],
                    },
                    modules: 'cjs',
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
