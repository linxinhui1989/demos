const express = require("express");
const app = express();

app.listen(8080,()=>{console.log("服务开启了...")});

// 单独对于 get 请求的操作
app.get("/index",(req,res,next)=>{
	console.log(req.headers.cookie);
	res.setHeader('Set-Cookie','username="lucy";')
	if(req.headers.cookie == undefined){
		res.write("please login first");
	}else{
		res.write("login success");
	}
	res.end();
});


