const { resolve } = require("path");
const { loader } = require("./config/loader");
const { plugins } = require("./config/plugin");

module.exports = {
  entry: "./src",
  output: {
    filename: `./js/[name].js`,
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: loader,
  devServer: {},
  plugins,
  resolve: {
    extensions: [".js", ".vue", ".json", ".css", ".less", ".tsx", ".ts"],
  },
};
