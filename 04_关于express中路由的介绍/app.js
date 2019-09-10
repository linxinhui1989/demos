const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

app.get("/user/list",(req,res)=>{
	res.send("用户显示列表");
	res.end();
});
app.get("/user/add",(req,res)=>{
	res.send("用户添加");
	res.end();
});
app.get("/user/del",(req,res)=>{
	res.send("用户删除");
	res.end();
});
app.get("/user/update",(req,res)=>{
	res.send("用户删除");
	res.end();
});

