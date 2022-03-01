export const ENTRY = null;
import "./style.css";

const bootstrap = () => {
  if (!ENTRY) {
    import(/*webpackChunkName: "native"*/ "./native");
    return;
  }

  // vue react
  ENTRY === "vue"
    ? import(/* webpackChunkName: "vue" */ "./vue")
    : import(/* webpackChunkName: "react" */ "./react");
};

// 启动
bootstrap();
