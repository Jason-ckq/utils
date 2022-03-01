const path = require("path");
const { loader, resolve } = require("./config/loader");
const { plugins } = require("./config/plugin");

const entry = "./src";

const output = {
  filename: `./js/[name].js`,
  path: path.resolve(__dirname, "../dist"),
  publicPath: "/",
  clean: true,
};

module.exports = {
  entry,
  output,
  module: loader,
  plugins,
  resolve,
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "loader")],
  },
};
