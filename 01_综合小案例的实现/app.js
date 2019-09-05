const http = require("http");
const fs = require("fs");
const fsTool = require("./fsTool.js");
const urlObj = require("url");
http.createServer(async(req,res)=>{
	let url = req.url;
	if(url == "/favicon.ico") return;
	try{
		let pathname = urlObj.parse(url).pathname.substr(1);
		console.log(pathname);
		let data = await fsTool.read(pathname);
		res.write(data);
		res.end();
	}catch(error){
		let data = await fsTool.read("./404.html");
		res.write(data);
		res.end();
	}
}).listen(8080);