const express = require("express");
const app = express();
// 解析类似于 form 表单提交的方式传递过来的参数

app.listen(8080,()=>{console.log("服务开启了...")});

// 单独对于 get 请求的操作
/*app.get("/home",(req,res)=>{
	res.send("home页面");
	res.end();
});
// 单独对于 post 请求的操作
app.post("/home",(req,res)=>{
	res.send("home页面");
	res.end();
});*/
// 如果不区分请求方式，不管哪个请求，我都要获取
app.use("/home",(req,res)=>{
	res.send("home页面");
	res.end();
});

app.use(express.static("./public"));
