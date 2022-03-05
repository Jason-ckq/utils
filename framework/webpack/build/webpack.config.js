const path = require("path");
const { loader, resolve } = require("./config/loader");
const { plugins } = require("./config/plugin");

const entry = "./src";

const output = {
  filename: `./js/[name].js`,
  path: path.resolve(__dirname, "../dist"),
  clean: true,
};

module.exports = {
  entry,
  output,
  module: loader,
  plugins,
  resolve,
  devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
  resolveLoader: {
    modules: ["./node_modules", path.resolve(__dirname, "loader")],
  },
};
