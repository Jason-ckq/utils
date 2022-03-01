import api from "../api";
// 用户登录
export const authLogin = params => api.post("/api/login", params);
