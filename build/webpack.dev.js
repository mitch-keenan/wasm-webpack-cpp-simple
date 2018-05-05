const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

const PORT = 4000;

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    port: PORT
  }
});
