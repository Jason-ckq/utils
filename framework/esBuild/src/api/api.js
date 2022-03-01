import { message } from "antd";
import axios from "./axios";
// 请求超时时间
export const Timer = 15;

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 是否开启全局Loading？加载图标
    // if (config && config?.isLoading) {
    //   // Toast.loading(null, true);
    // }
    // config.data = getUsefulParams({
    // ...config.data,
    // });
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  res => {
    return (!!res && JSON.parse(res)) || null;
  },
  err => {
    const { status } = err;
    switch (status) {
      case 403:
        message.warning("登录信息失效，请重新登录!");
        return Promise.reject(null);
      case 400:
        message.warning("请求失败，请检查参数信息!");
        return Promise.reject(err);
      default:
        return Promise.reject(err);
    }
  }
);

export default axios;
