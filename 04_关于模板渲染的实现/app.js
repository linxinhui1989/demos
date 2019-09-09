const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const artTemplate = require("express-art-template");
// 设定模板文件的后缀
app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views","./views")

const db = require("./tools/db.js");
const md5 = require("./tools/md5.js");

// 解析类似于 form 表单提交的方式传递过来的参数
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080,()=>{console.log("服务开启了...")});

app.get("/goodList",async (req,res)=>{
	let goods = await db.q(`select * from goods`);
	res.render("goods.html",{goods:goods});
});

app.use(express.static("./public"));