const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./tools/db.js");
const md5 = require("./tools/md5.js");
const artTemplate = require("express-art-template");

app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views","./views")

app.listen(8080,()=>{console.log("服务开启")});
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("./public"));

app.post("/login",async(req,res)=>{
	let {username,pwd} = req.body;
	pwd = md5(pwd);
	let sql = `select username from users where username="${username}"`;
	let result1 = await db.q(sql);
	let msg;
	if(result1.length == 0){
		msg = {info:"暂无该用户",code:-1,success:null};
	}else{
		let result2 = await db.q(`select username from users where username="${username}" and pwd="${pwd}"`);
		if(result2.length == 0){
			msg = {info:"密码有误",code:-2,success:null};
		}else{
			msg = {info:"登录成功",code:0,success:1};
		}
	}
	res.send(msg);
	res.end();
})
.post("/regist",async(req,res)=>{
	let {username,pwd} = req.body;
	pwd = md5(pwd);
	let sql = `select username from users where username="${username}"`;
	let result1 = await db.q(sql);
	let msg;
	if(result1.length == 0){
		// 该用户不存在，可以注册
		let sql = `insert into users (username,pwd) values ("${username}","${pwd}")`;
		await db.q(sql);
		msg = {info:"注册成功",code:0,success:1};
	}else{
		// 该用户已存在，不可注册
		msg = {info:"该用户已存在",code:-1,success:null};
	}
	res.send(msg);
	res.end();
})
.get("/home",async(req,res)=>{
	let goods = await db.q(`select * from goods`);
	res.render("home.html",{goods:goods});
})