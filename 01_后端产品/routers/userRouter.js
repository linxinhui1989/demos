const express = require("express");
const md5 = require("../components/md5.js");
const db = require("../components/db.js");
const userRouter = express.Router();

userRouter.get("/",(req,res)=>{
	if(req.session.user == undefined || req.session.user == ""){
		res.redirect("/login");
	}else{
		res.render("index.html",{user:req.session.user});
	}
})
.get("/login",(req,res)=>{
	res.render("login.html",{});
})
.post("/login",async (req,res)=>{
	// 获取得到post请求传递过来的参数
	let {username,pwd} = req.body;
	pwd = md5(pwd);
	let sql = `select username from users where
		 username="${username}" and pwd = "${pwd}"`;
	let result = await db.q(sql);
	if(result.length == 0){
		res.redirect("/login");
	}else{
		req.session.user = username;
		res.redirect("/");
	}
})
.get("/logout",(req,res)=>{
	req.session.user = "";
	res.redirect("/login");
})

module.exports = userRouter;