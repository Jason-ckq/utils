const { resolve } = require("path");
const { plugins } = require("./config/plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src",
  output: {
    filename: `./js/[name].js`,
    path: resolve(__dirname, "../dist"),
    publicPath: "/",
    clean: true,
  },
  devServer: {},
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins,
};
