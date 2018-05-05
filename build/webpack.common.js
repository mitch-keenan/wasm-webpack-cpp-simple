const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "./bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(c|cpp)$/,
        use: {
          loader: "cpp-wasm-loader",
          options: {
            publicPath: "../dist/",
            emccPath: "emcc",
            emccFlags: ["-O3"]
          }
        }
      }
    ]
  },
  externals: {
    fs: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
