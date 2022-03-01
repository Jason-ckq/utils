import tpl from "./template/info.tpl";

const Dom = document.querySelector("#root");

const info = {
  name: "leezhi",
  career: "web页面工程师",
  hobby: "旅行、吉他、撸狗",
  age: 26,
};

Dom.innerHTML = tpl(info);
