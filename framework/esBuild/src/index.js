import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { ConnectedRouter } from "connected-react-router";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import store, { history } from "./redux/store";
import moment from "moment";
import RootRoute from "./views";
import { lang } from "./locale/i18n.js";
import "./node_modules/antd/dist/antd.css";
import "./theme/index.less";
import "./locale/i18n.js";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

const App = () => {
  return (
    <ConfigProvider locale={lang === "zh-CN" ? zhCN : enUS}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <RootRoute />
        </ConnectedRouter>
      </Provider>
    </ConfigProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
