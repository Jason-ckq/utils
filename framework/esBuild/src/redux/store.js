import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./modules";
import { routerMiddleware } from "connected-react-router";
// 路由模式
export const history = createBrowserHistory();

// React Router v4 和 v5 的 Redux 绑定 =>  routerMiddleware(history)
const middleware = [routerMiddleware(history)];
const enhancers = [];

// 创建Store
const createStore = (initialState = {}) => {
  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState,
    middleware,
    enhancers,
  });
  store.asyncReducers = {};
  // 插入新的模块state
  store.injectReducer = asyncReducer => {
    store.asyncReducers = {
      ...store.asyncReducers,
      ...asyncReducer,
    };
    store.replaceReducer(createRootReducer(history, store.asyncReducers));
  };
  return store;
};

const store = createStore();

export default store;
