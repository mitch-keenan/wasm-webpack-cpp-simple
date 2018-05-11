const webpack = require("webpack");
const path = require("path");
const homeDir = require("homedir");
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
            emccPath: path.join(
              homeDir(),
              "emsdk",
              "emscripten",
              "incoming",
              "emcc"
            ),
            emccFlags: ["-O3", "-std=c++11", "--bind"]
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
