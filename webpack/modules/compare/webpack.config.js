const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: { app: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
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
                    modules: false,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()],
};
