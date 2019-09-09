// 获取到所需的express模块
const express = require("express");
// 使用express这个方法，来进行服务的创建
const server = express();
// 为这个创建好的服务设定监听端口
server.listen(8080,()=>{console.log("express服务开启")});

server.get("/",(req,res)=>{
	// res.write({"name":"lucy","age":18});
	res.send({"name":"lucy","age":18});
	res.end();
});