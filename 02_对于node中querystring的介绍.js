let qs = require('querystring');
let urlObj = require("url");
let url = "http://localhost:8080/?name=lucy&age=23&sex=woman";
let params = urlObj.parse(url).query;
let obj = qs.parse(params);
console.log(obj);