const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./tools/db.js");

// 解析类似于 form 表单提交的方式传递过来的参数
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080,()=>{console.log("服务开启了...")});

// 对于post请求的处理
app.post("/regist",async (req,res)=>{
	console.log(req.body);
	let sql = `insert into users (username,pwd) 
	values ("${req.body.username}","${req.body.pwd}")`;
	await db.q(sql);
	res.send("注册成功了.....");
	res.end();
})

app.use(express.static("./public"));