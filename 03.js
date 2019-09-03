// 1. 读取node中内置的 http 模块
let http = require("http");

// 2. 直接使用这个 http 变量，来进行服务的创建
let app = http.createServer(function(req,res){
	let params = req.url.split("?")[1];
	console.log(params);
	// 如果涉及到需要往前端发送多条数据，这个时候使用 res.write()
	res.write(params);
	res.end();
});
// 3. 开启服务，设定定义的监听端口
app.listen(8888,function(){
	console.log("服务已经开启了...");
});