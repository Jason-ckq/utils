// 模板替换函数，将template模板里的{{}} 用 replaceObj[key] 替换
function tplReplace(template, replaceObject) {
  return template.replace(/\{\{(.*?)\}\}/g, function (node, key) {
    return `${key}：${replaceObject[key]}`;
  });
}
module.exports = {
  tplReplace,
};
