const item: IVersion = {
  name: "1",
};

console.log(item);

import arrayMap = require("../../dirRoot/lib/ArrayMap/index.js");

console.log(arrayMap([1, 2], item => item * 5));
