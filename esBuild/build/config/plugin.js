// import svgrPlugin from "esbuild-plugin-svgr";
// import { lessLoader } from "esbuild-plugin-less";
// import cssModulesPlugin from "esbuild-css-modules-plugin";
import path from "path";
import stylePlugin from "esbuild-style-plugin";
import aliasPlugin from "esbuild-plugin-path-alias";
import { __dirname } from "../../configure.js";

// 插件
export const plugins = [
  aliasPlugin({
    "@": path.resolve(__dirname, "./src"),
  }),
  stylePlugin({
    renderOptions: {
      lessOptions: {
        javascriptEnabled: true,
      },
    },
  }),
];

export const loader = {
  ".png": "dataurl",
  ".svg": "dataurl",
  ".js": "jsx",
  ".ttf": "dataurl",
  ".woff": "dataurl",
  ".OTF": "dataurl",
  ".mp3": "dataurl",
  ".mp4": "dataurl",
};
