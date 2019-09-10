const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

// 对于不同请求进行监听
app.get("/",(req,res)=>{
	// res.write("Hello");
	res.send({name:"lucy",age:33});
	res.end();
})