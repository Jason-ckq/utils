// 入口
export const ENTRY = "vue";
import { ENTRY } from "./configure";

const bootstrap = () => {
  ENTRY === "vue"
    ? import(/* webpackChunkName: "vue" */ "./vue")
    : import(/* webpackChunkName: "react" */ "./react");
};

// 启动
bootstrap();
