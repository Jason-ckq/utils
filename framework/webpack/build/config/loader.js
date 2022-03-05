const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonCssLoader = [
  // 创建style标签，将样式放入
  // "style-loader",
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: "../",
    },
  },
  // "css-loader",
  {
    loader: "css-loader",
    options: {
      // modules: true, // 模块化
    },
  },
  "postcss-loader",
];

const tplLoader = {
  test: /\.tpl$/,
  use: [
    "babel-loader",
    {
      loader: "tpl-loader",
      options: {
        log: true,
      },
    },
  ],
};

// 插件loader
const loader = {
  rules: [
    {
      test: /\.css$/,
      use: [...commonCssLoader],
    },
    {
      test: /\.less$/,
      use: [...commonCssLoader, "less-loader"],
    },
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
    {
      test: /\.vue$/,
      exclude: /node_modules/,
      use: ["vue-loader"],
    },
    {
      test: /\.(ts|tsx)$/, // .ts、.tsx
      use: ["ts-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
    {
      test: /\.(csv|tsv)$/i,
      use: ["csv-loader"],
    },
    {
      test: /\.xml$/i,
      use: ["xml-loader"],
    },
    tplLoader,
  ],
};

const resolve = {
  extensions: [".js", ".vue", ".ts", ".json", ".css", ".less", ".tsx"],
};

module.exports = { loader, resolve };
