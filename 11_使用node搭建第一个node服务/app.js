// 1. 读取node中内置的 http 模块
let http = require("http");
// 2. 直接使用这个 http 变量，来进行服务的创建
let app = http.createServer(function(req,res){
	res.end("Hello World!!!");
});
// 3. 开启服务，设定定义的监听端口
app.listen(8888,function(){
	console.log("服务已经开启了...");
});