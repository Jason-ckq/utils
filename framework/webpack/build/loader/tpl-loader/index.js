const { tplReplace } = require("./utils");
const { getOptions } = require("loader-utils");

// tpl-loader
function tplLoader(source) {
  // 去除模板的空格字符
  source = source.replace(/\s+/g, "");
  const { log } = getOptions(this);
  const _log = log ? `console.log('compiled the file which is from')` : "";
  // options 就是调用 tpl(options) 时的参数信息
  return `
    export default (options) => {
      ${tplReplace.toString()}
      ${_log.toString()}
      return tplReplace('${source}',options)
    }
  `;
}

module.exports = tplLoader;
