const express = require("express");
const app = express();
// 解析类似于 form 表单提交的方式传递过来的参数

app.listen(8080,()=>{console.log("服务开启了...")});

// 单独对于 get 请求的操作
app.get("/home",(req,res,next)=>{
	console.log("home1 页面")
	// 将拦截到的请求，继续向下传递
	next();
});
app.get("/home",(req,res)=>{
	console.log("home 2 页面");
	res.end("结束");
});

