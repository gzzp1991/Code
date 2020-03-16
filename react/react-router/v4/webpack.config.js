const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js"
  },
  output: {
    publicPath: "/",
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js"
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
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, "./dll/vendor-mainfest.json")
    }),
    new AddAssetHtmlWebpackPlugin({
      filepath: path.resolve(__dirname, "./dll/vendor.dll.js")
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./src"),
    compress: true,
    host: "0.0.0.0",
    port: 8888,
    historyApiFallback: true
  }
};
