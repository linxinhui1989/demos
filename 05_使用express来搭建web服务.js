// 获取到所需的express模块
const express = require("express");
// 使用express这个方法，来进行服务的创建
const server = express();
// 为这个创建好的服务设定监听端口
server.listen(8080,()=>{console.log("express服务开启")});

// 可以对于不同请求，设置不同的参数，实现不同的操作
server.get("/",(req,res)=>{
	res.write("Index");
	res.end();
});

server.get("/user",(req,res)=>{
	res.write("User");
	res.end();
});

server.get("/goods",(req,res)=>{
	res.write("Goods");
	res.end();
})