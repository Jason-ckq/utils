const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

// 插件
const plugins = [
  new HtmlWebpackPlugin({
    template: resolve(__dirname, "../../public/index.html"),
    minify: {
      collapseWhitespace: true,
      removeComments: true,
    },
  }),
  new MiniCssExtractPlugin({
    filename: "./css/built.css",
  }),
  new VueLoaderPlugin(),
];

module.exports = {
  plugins,
};
