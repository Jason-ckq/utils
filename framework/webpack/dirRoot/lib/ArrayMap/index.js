"use strict";
function arrayMap(array, callback) {
    var len = array.length;
    var i = -1;
    var resp = [];
    while (++i < len) {
        resp.push(callback(array[i], i, array));
    }
    return resp;
}
module.exports = arrayMap;
