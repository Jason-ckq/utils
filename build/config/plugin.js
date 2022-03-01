const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    title: "管理输出",
  }),
  new MiniCssExtractPlugin({
    filename: "css/built.css",
  }),
];

module.exports = {
  plugins,
};
