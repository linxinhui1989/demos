const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

// 对于不同请求进行监听
app.get("/",(req,res)=>{
	res.send("这是GET首页面");
	res.end();
})
.post("/",(req,res)=>{
	res.send("这是POST首页面");
	res.end();
})