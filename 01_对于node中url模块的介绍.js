// 1. 获取到系统内置的url模块
let urlObj = require("url");
let http = require("http");
// url模块对象中，提供了parse这样的方法，可以将字符串转为对应的js对象
http.createServer((req,res)=>{
	if("/favicon.ico".indexOf(req.url) == -1){
		let obj = urlObj.parse(req.url);
		let params = obj.query.split("&");
		for(let key in params){
			res.write(params[key]);
		}
		console.log(req.url);
	}
	res.end("hello");
}).listen(8080,()=>{
	console.log("启动了....");
});