import { message } from "antd";
import { Timer } from "./api";
import { Methods, Extends, Interceptors } from "./tool";
// import moment from "moment";

// 创建Axios
class Axios {
  constructor() {
    this.interceptors = {
      request: new Interceptors(),
      response: new Interceptors(),
    };
  }
  // 执行网络请求
  send(config) {
    return new Promise((resolve, reject) => {
      let { url, method = "get", data = null } = config;
      // 创建xhr
      const xhr = new XMLHttpRequest();
      // get方式请求链
      const chain = ["get", "delete", "head", "options"].includes(method);
      // post请求参数
      if (chain && !!Object.keys(data).length) {
        url += "?";
        Object.keys(data).forEach((key, index) => {
          if (index === Object.keys(data).length - 1) {
            url += `${key}=${data[key]}`;
          } else {
            url += `${key}=${data[key]}&`;
          }
        });
      }
      // 初始化请求
      xhr.open(method.toUpperCase(), url, true);
      xhr.timeout = Timer * 1000;
      // 设置设置HTTP请求头部的方法。
      xhr.setRequestHeader("If-Modified-Since", 0);
      xhr.setRequestHeader("withCredentials", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.setRequestHeader("Accept", "application/json");
      xhr.setRequestHeader("Accept-Language", localStorage.language || "zh");
      xhr.setRequestHeader("Local-Server", true);
      // 判断是否为导出文件
      if (data.resType === "blob") xhr.responseType = "blob";
      // 方法用于发送 HTTP 请求。如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回；
      // 如果是同步请求，则此方法直到响应到达后才会返回。XMLHttpRequest.send() 方法接受一个可选的参数，
      // 其作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null。
      xhr.send(JSON.stringify({ ...data }));
      //load, XMLHttpRequest请求成功完成时触发。也可以使用 onload 属性.
      // xhr.onload = () => {
      //   resolve(xhr.responseText);
      // };

      // 检查状态
      // readyState
      // 0: 请求未初始化
      // 1: 服务器连接已建立
      // 2: 请求已接收
      // 3: 请求处理中
      // 4: 请求已完成，且响应已就绪
      // status
      // 200: "OK"
      // 404: 未找到页面

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status >= 200 && xhr.status < 300) {
            // 导出处理
            if (data.resType === "blob") {
              const reader = new FileReader();
              reader.readAsDataURL(xhr.response);
              reader.onload = function (e) {
                const filename = xhr.getResponseHeader("filename");
                const a = document.createElement("a");
                a.download = `${filename}`;
                a.href = e.target.result;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
              };
            }
            resolve(xhr.response);
          } else {
            reject(xhr);
          }
        }
      };
      // 请求超时。
      xhr.ontimeout = () => {
        message.error("请求超时!");
      };
      // 网络异常
      xhr.onerror = () => {
        message.error("网络异常!");
      };
    });
  }
  //请求解析
  request(config) {
    let chain = [this.send.bind(this), undefined];
    // 请求拦截
    this.interceptors.request.handers.forEach(interceptor => {
      chain.unshift(interceptor.fullfield, interceptor.rejected);
    });
    //  响应拦截
    this.interceptors.response.handers.forEach(interceptor => {
      chain.push(interceptor.fullfield, interceptor.rejected);
    });
    let promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
}

// 添加方法
Methods.forEach(method => {
  Axios.prototype[method] = function () {
    // 注意的是'get', 'delete', 'head', 'options'这些方法只接受两个参数。
    const chain = ["get", "delete", "head", "options"].includes(method);
    if (chain) {
      // 2个参数(url[, config])
      // axios  request() 方法
      return this.request({
        method,
        url: arguments[0],
        data: arguments[1] || {},
        ...arguments[2],
      });
    } else {
      // 3个参数(url[,data[,config]])
      return this.request({
        method,
        url: arguments[0],
        data: arguments[1] || {},
        ...(arguments[2] || {}),
      });
    }
  };
});

// 创建一个axios;
const createAxios = () => {
  const axios = new Axios();
  // // 定义解析方法
  const request = axios.request.bind(axios);
  // // 注：Axios.prototype的方法。混入request中
  Extends(request, Axios.prototype, axios);
  Extends(request, axios);
  return request;
};

export default createAxios();
