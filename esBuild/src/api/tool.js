export const HostConfig = {
  apiPrefix: "/api",
  PROTOCOL: "http",
  API_HOST: "47.119.127.148",
  API_PORT: 8070,
  PORT: 4213,
};

// 请求方法
export const Methods = [
  "get",
  "delete",
  "head",
  "options",
  "put",
  "patch",
  "post",
];

// 混入：实现将b的方法混入a
export const Extends = (a, b, context) => {
  for (const key in b) {
    if (b.hasOwnProperty(key)) {
      if (typeof b[key] === "function") {
        a[key] = b[key].bind(context);
      } else {
        a[key] = b[key];
      }
    }
  }
};

// 1：添加请求拦截器
// 在我们发送一个请求的时候会先执行请求拦截器的代码，
// 然后再真正地执行我们发送的请求，这个过程会对config，
// 也就是我们发送请求时传送的参数进行一些操作。
// 2：添加响应拦截器
// 而当接收响应的时候，会先执行响应拦截器的代码，然后再把响应的数据返回来，
// 这个过程会对response，也就是响应的数据进行一系列操作。
// 用这个语句axios.interceptors.response.use和axios.interceptors.request.use

// 拦截器
export class Interceptors {
  constructor() {
    this.handers = [];
  }
  use(fullfield, rejected) {
    this.handers.push({
      fullfield,
      rejected,
    });
  }
}
