const url = require("url");
const qs = require("querystring");
let obj = url.parse("http://www.baidu.com/login?name=lina#head");
console.log(obj.query);
let params = qs.parse(obj.query);
console.log(params);
