const autoprefixer = require("autoprefixer");
const postcssCssnext = require("postcss-cssnext");

module.exports = {
  plugins: [
    // autoprefixer, //css3自动添加前缀
    postcssCssnext, //包含autoprefixer功能
  ],
};
