"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item = {
    name: "1",
};
console.log(item);
var arrayMap = require("../../dirRoot/lib/ArrayMap/index.js");
console.log(arrayMap([1, 2], function (item) { return item * 5; }));
