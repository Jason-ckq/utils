import esbuild from "esbuild";
import chalk from "chalk";
import commandLineArgs from "command-line-args";
import getPort from "get-port";
import browserSync from "browser-sync";
import del from "del";
import ip from "ip";
import { createProxyMiddleware } from "http-proxy-middleware";
import { HostConfig } from "../src/api/tool.js";
import { plugins, loader } from "./config/plugin.js";

const { apiPrefix, PROTOCOL, API_HOST, API_PORT, PORT } = HostConfig;
const localip = ip.address();

// HTTP 代理跨域
const Proxy = createProxyMiddleware(apiPrefix, {
  target: `${PROTOCOL}://${API_HOST}:${API_PORT}`,
  changeOrigin: true,
  pathRewrite: {
    "^/api": "",
  },
  logLevel: "debug",
});

// 解构环境变量
const { dev } = commandLineArgs({ name: "dev", type: Boolean });

// 删除文件夹 public-dev 中的打包文件夹
del.sync("public/dist");

// 开始esbuild 打包
(async () => {
  const buildResult = await esbuild
    .build({
      format: "esm", // 设置生成的 JavaScript 文件的输出格式
      target: "es2017", // 编译转化版本
      entryPoints: ["src/index.js"], // 打包入口
      outdir: "public/dist", // 输出目录
      chunkNames: "chunks/[name].[hash]", // 打包出来的文件名
      incremental: dev, // 因为我们监听文件的改变重新打包，而且我们要开发环境使用esbuild 所以 dev 为 true
      minify: !dev, // 生成环境 压缩
      sourcemap: dev, // 生成环境 压缩
      bundle: true, // 捆绑文件意味着将任何导入的依赖项内联到文件本身中
      splitting: true, // 代码拆分目前仅适用于esm输出格式
      inject: ["public/react-shim.js"], // 将 React 作为全局变量导入esbuild
      loader,
      plugins,
    })
    .catch(err => {
      console.error(chalk.red(err));
      process.exit(1);
    });
  console.log(chalk.green("The build has finished! 📦\n"));
  // 获取可用的端口号
  const port =
    (await getPort({
      port: getPort.makeRange(3000, 4999),
    })) || PORT;

  // 创建服务器。
  const bs = browserSync.create();
  bs.init({
    startPath: "/", // 初始路径
    port, // 端口号
    logLevel: "silent", // 日志级别
    logFileChanges: true, // 日志文件更改
    notify: true, // 浏览器中的小弹出通知
    single: true, // 提供单独的 index.html
    server: {
      baseDir: "public", // 基础文件夹
      index: "index.html", // 设置服务器的入口文件
      middleware: [Proxy], // 代理
    },
    files: "src/", // 监听 src 下的文件
    open: false,
  });

  console.log(
    chalk.cyan(
      `Launching the local dev server at http://localhost:${port} or http://${localip}:${port} 🥾`
    )
  );

  // 监听 src 文件夹下的更改
  bs.watch(["src/"]).on("change", async filename => {
    console.log(`Source file changed - ${filename}`);
    // 重新打包
    buildResult.rebuild();
  });
})();
