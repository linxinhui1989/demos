const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

// 对于不同请求进行监听
app.get("/",(req,res)=>{
	res.write("Index首页面");
	res.end();
})
.get("/goods",(req,res)=>{
	res.write("goods产品页面");
	res.end();
});