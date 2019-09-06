const http = require("http");
const fs = require("fs");
const url = require("url");
const ejs = require("ejs");

// 引入自定义的模块
const fileTool = require("./tools/fileTool.js"); 
const db = require("./tools/db.js");
const ejsTool = require("./tools/template.js");


http.createServer(async (req,res)=>{
	let pathName = url.parse(req.url).pathname;
	if(pathName=="/favicon.ico") return;
	let data;
	if(pathName == "/index.html"){
		data = await fileTool.read("./public" + pathName);
	}else if(pathName == "/goodlist"){
		// 产品列表数据来自于数据库
		let tempObj = await db.q(`select * from goods`);
		// 直接使用ejs模块中提供的方法来进行渲染
		data = await ejsTool.render("./public/goodlist.html",
				{goods:tempObj});
	}
	res.write(data);
	res.end();
}).listen(8080,()=>{
	console.log("服务连接上了....");
});