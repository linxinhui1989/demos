// 获取到所需的express模块
const express = require("express");
// 使用express这个方法，来进行服务的创建
const app = express();
// 为这个创建好的服务设定监听端口
app.listen(8080,()=>{console.log("express服务开启")});

app.get("/",(req,res)=>{
	res.send(req.query);
	res.end();
});

app.post("/",(req,res)=>{
	res.send("postpostpostpostpost");
	res.end();
})