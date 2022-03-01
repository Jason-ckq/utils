import React, { useEffect, useState } from "react";
import classes from "./style.module.less";
import { useTranslation } from "react-i18next";
import { Menu, Dropdown, Button, message } from "antd";
import { changeLangage, Language } from "../../../locale/i18n";
import logo from "./assets/logo.png";
import account from "./assets/account.svg";
import psd from "./assets/password.svg";
import { authLogin } from "@/api";
import { useHistory } from "react-router";
const Login = props => {
  const { t } = useTranslation();
  const history = useHistory();

  const [userName, setUserName] = useState();
  const [password, setPsd] = useState();

  // 用户登录
  const doLogin = async () => {
    if (!userName || !password) {
      message.warning(t("用户名或密码不能为空!"));
      return;
    }
    try {
      const params = { userName, password };
      const { isSuccess, msg, rows } = await authLogin({ ...params });
      if (isSuccess) {
        sessionStorage.setItem("userInfo", JSON.stringify({ ...rows[0] }));
        setTimeout(() => {
          history.push("/main/largescreen");
        }, 500);
      } else {
        message.error(msg);
      }
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <div className={classes.wrap}>
      <img src={logo} className={classes.logo} />
      {/* 登录页面 */}
      <div className={classes.container}>
        <header>{t("用户登录")}</header>
        <div>
          <img src={account} />
          <input
            type='text'
            placeholder={t("请输入用户名")}
            onKeyDown={e => {
              e.keyCode === 13 && doLogin();
            }}
            onChange={e => setUserName(e.target.value.trim())}
          />
        </div>
        <div>
          <img src={psd} />
          <input
            type='password'
            placeholder={t("请输入密码")}
            onKeyDown={e => {
              e.keyCode === 13 && doLogin();
            }}
            onChange={e => setPsd(e.target.value.trim())}
          />
        </div>
        <button type='button' onClick={doLogin}>
          {t("登录")}
        </button>
      </div>
      <Dropdown
        className={classes.plugin}
        overlay={() => (
          <Menu>
            {Language.map((value, index) => (
              <Menu.Item key={index} onClick={() => changeLangage(index)}>
                {value}
              </Menu.Item>
            ))}
          </Menu>
        )}
        placement='topLeft'
        arrow
      >
        <Button>{t("language")}</Button>
      </Dropdown>
    </div>
  );
};

export default Login;
