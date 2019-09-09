const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const db = require("./tools/db.js");
const md5 = require("./tools/md5.js");

// 解析类似于 form 表单提交的方式传递过来的参数
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080,()=>{console.log("服务开启了...")});

// 对于post请求的处理
app.post("/regist",async (req,res)=>{
	console.log(req.body);
	const pwd = md5(req.body.pwd);
	let sql = `insert into users (username,pwd) 
	values ("${req.body.username}","${pwd}")`;
	await db.q(sql);
	res.send("注册成功了.....");
	res.end();
});

app.post("/login",async (req,res)=>{
	console.log(req.body);
	const pwd = md5(req.body.pwd);
	const username = req.body.username;
	let sql = `select username from users where username="${username}"
	 and pwd="${pwd}"`;
	let result = await db.q(sql); 
	res.send(result);
	res.end();
})

app.use(express.static("./public"));