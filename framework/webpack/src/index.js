export const ENTRY = "vue";

const bootstrap = () => {
  ENTRY === "vue"
    ? import(/* webpackChunkName: "vue" */ "./vue")
    : import(/* webpackChunkName: "react" */ "./react");
};

// 启动
bootstrap();
