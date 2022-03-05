"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_dom_1 = __importDefault(require("react-dom"));
var App = function () {
    return (0, jsx_runtime_1.jsx)("div", { children: "halo React" });
};
react_dom_1.default.render((0, jsx_runtime_1.jsx)(App, {}), document.querySelector("#root"));
