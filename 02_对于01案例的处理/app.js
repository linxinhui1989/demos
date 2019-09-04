let http = require("http");
let path = require("path");
let fs = require("fs");
// 读取自己定义好的外部 js 模块
let fileTool = require("./fileTool.js");

http.createServer(async (req,res)=>{
	/*
		获取得到对应的 url，根据 url 上给定的不同的参数，
		实现不同文件的读取并显示
	*/
	let url = req.url;
	let filePath = path.parse(url).base;
	try{
		let data = await fileTool.read(filePath);
		res.write(data);
		res.end();
	}catch(error){
		let data = await fileTool.read("./404.html");
		res.write(data);
		res.end();
	}
}).listen(8080,()=>{
	console.log("服务开启....");
});
