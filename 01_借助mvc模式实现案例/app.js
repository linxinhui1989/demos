const http = require("http");
const fs = require("fs");
const url = require("url");
const ejs = require("ejs");
const qs = require("querystring");

// 引入自定义的模块
const fileTool = require("./tools/fileTool.js"); 
const db = require("./tools/db.js");
const ejsTool = require("./tools/template.js");

const config = require("./config.js");

http.createServer(async (req,res)=>{
	let pathName = url.parse(req.url).pathname;
	if(pathName=="/favicon.ico") return;
	console.log("pathName = " + pathName)
	// 首页
	if(pathName == "/index.html" || pathName == "/"){
		require("./controller/IndexControl.js").index(req,res);
	// 关于产品操作
	}else if(pathName.indexOf("/goodlist") !=-1){
		require("./controller/goodControl.js").init(req,res);
	}else{
		let data = await fileTool.read("./public" + pathName);
		res.write(data);
		res.end();
	}
}).listen(config.port,()=>{
	console.log(`服务连接上了,端口是${config.port}....,使用http://localhost:${config.port}`);
});