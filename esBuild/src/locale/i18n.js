import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import zh from "./zh.json";
import en from "./en.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    //引入资源文件
    resources: {
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export const Language = ["ENGLISH", "简体中文"];

// 切换语言
export const changeLangage = params => {
  i18n.changeLanguage(+params === 1 ? "zh-CN" : "en-US");
};

export const lang = localStorage.getItem("i18nextLng");

export default i18n;
