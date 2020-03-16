const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const openServer = process.env.OPENSERVER;

const option = {
  mode: "production",
  entry: {
    app: "./src/index.js"
  },
  output: {
    publicPath: "/",
    filename: "[name].[chunkhash:8].bundle.js",
    chunkFilename: "[name].[chunkhash:8].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: { browsers: ["last 2 versions", "Firefox ESR"] }
                  }
                ],
                ["@babel/preset-react"]
              ],
              plugins: [
                ["@babel/plugin-proposal-decorators", { legacy: true }],
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-proposal-optional-chaining",
                "@babel/plugin-transform-runtime"
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "首页",
      // <!-- 指定模板位置 -->
      template: "src/index.html",
      // <!-- 指定打包后的文件名字 -->
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    },
    runtimeChunk: "single",
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // Must be set to true if using source-maps in production
        terserOptions: {
          // https://github.com/webpack-contrib/terser-webpack-plugin#terseroptions
          compress: {
            drop_console: true
          }
        }
      })
    ]
  }
};

// 本地运行
if (openServer) {
  option.devServer = {
    contentBase: path.resolve(__dirname, "./src"),
    compress: true,
    host: "0.0.0.0",
    port: 8888,
    historyApiFallback: true
  };
}

module.exports = option;
