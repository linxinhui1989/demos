const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const artTemplate = require("express-art-template");
const db = require("./tools/db.js");
const md5 = require("./tools/md5.js");

app.listen(8080,()=>{console.log("服务开启了...")});
let keys = ["xaxa","xax","xxxx","sdajkdal"];
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'session',
  keys: keys,
  maxAge: 15*60*1000
}))

app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views","./public");

app.get("/",(req,res)=>{
	if(req.session.username == undefined || req.session.username == ""){
		res.redirect("/login");
	}else{
		res.render("index.html",{name:req.session.username});
	}
});
app.get("/goods",(req,res)=>{
	if(req.session.username == undefined || req.session.username == ""){
		res.redirect("/login");
	}else{
		res.render("goods.html",{});
	}
});
app.get("/login",(req,res)=>{
	if(req.session.username != undefined && req.session.username != ""){
		res.redirect("/");
		return;
	}
	res.render("login.html",{});
});
app.post("/login",async(req,res)=>{
	let {username,pwd} = req.body;
	pwd = md5(pwd);
	let sql = `select * from users where 
		username="${username}" and pwd="${pwd}"`;
	let results = await db.q(sql);
	if(results.length == 0){
		res.redirect("/login");
	}else{
		req.session.username = username;
		// 然后再来重定向到 index 上
		res.redirect("/");
	}
});
app.get("/logout",(req,res)=>{
	req.session.username = "";
	res.redirect("/login");
})

app.use(express.static("./public"))


