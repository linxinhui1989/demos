const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// 解析类似于 form 表单提交的方式传递过来的参数
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080,()=>{console.log("服务开启了...")});


app.post("/login",(req,res)=>{
	console.log(res.body);
	res.send("HEllo");
	res.end();
});

app.use(express.static("./public"));