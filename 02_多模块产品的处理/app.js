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
			// 产品列表数据来自于数据库
			let tempObj = await db.q(`select * from goods`);
			// 直接使用ejs模块中提供的方法来进行渲染
			data = await ejsTool.render("./public/goodlist.html",
					{goods:tempObj});
			res.write(data);
			res.end();
		}else{
			if(pathName.indexOf("add") != -1){
				let params = "";
				// 进行产品数据的添加
				req.on("data",(data)=>{
					params += data;
				});
				req.on("end",async ()=>{
					let paramsObj = qs.parse(params);
					/*
						这个是提交过来的新数据，需要插入到数据库中
					*/
					let sql = `insert into goods (name,price) 
						values ("${paramsObj.name}","${paramsObj.price}")`;
					await db.q(sql);
					let tempObj = await db.q(`select * from goods`);
					// 直接使用ejs模块中提供的方法来进行渲染
					data = await ejsTool.render("./public/goodlist.html",
							{goods:tempObj});
					res.write(data);
					res.end();
				})
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