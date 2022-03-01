const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// loader
const loader = {
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
};

module.exports = { loader };
