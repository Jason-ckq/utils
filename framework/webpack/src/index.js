export const ENTRY = "react";
import "./style.css";

const bootstrap = () => {
  // 原生
  if (!ENTRY || ENTRY === "native") {
    import(/*webpackChunkName: "native"*/ "./native");
    return;
  }

  // ts相关
  if (ENTRY === "ts") {
    import(/*webpackChunkName: "ts-course"*/ "./ts");
    return;
  }

  // vue
  if (ENTRY === "vue") {
    import(/*webpackChunkName: "vue"*/ "./vue");
    return;
  }

  // react
  if (ENTRY === "react") {
    import(/*webpackChunkName: "react"*/ "./react");
    return;
  }
};

// 启动
bootstrap();
