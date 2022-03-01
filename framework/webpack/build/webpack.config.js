const path = require("path");
const { loader, resolve } = require("./config/loader");
const { plugins } = require("./config/plugin");

module.exports = {
  entry: "./src",
  output: {
    filename: `./js/[name].js`,
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  module: loader,
  devServer: {},
  plugins,
  resolve,
};
