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

const goodControl = require("./controller/goodControl.js");

http.createServer(async (req,res)=>{
	let pathName = url.parse(req.url).pathname;
	if(pathName=="/favicon.ico") return;
	console.log("pathName = " + pathName);
	let data;
	if(pathName == "/index.html" || pathName == "/"){
		pathName = "/index.html";
		data = await fileTool.read("./public" + pathName);
		res.write(data);
		res.end();
	}else if(pathName.indexOf("/goodlist") !=-1){
		let method = req.method.toLowerCase();
		if(method == "get"){
			goodControl.show(res);
		}else{
			if(pathName.indexOf("add") != -1){
				goodControl.add(req,res);
			}
		}
	}else{
		data = await fileTool.read("./public" + pathName);
		res.write(data);
		res.end();
	}
	
}).listen(config.port,()=>{
	console.log(`服务连接上了,端口是${config.port}....,使用http://localhost:${config.port}`);
});