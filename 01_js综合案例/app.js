let http = require("http");
let path = require("path");
let fs = require("fs");
http.createServer((req,res)=>{
	/*
		获取得到对应的 url，根据 url 上给定的不同的参数，
		实现不同文件的读取并显示
	*/
	let url = req.url;
	let filePath = path.parse(url).base;
	fs.readFile(filePath,(error,data)=>{
		if(error){
			fs.readFile("./404.html",(error,data)=>{
				res.write(data);
				res.end();
			});
			return;
		}
		res.write(data);
		res.end();
	})
}).listen(8080,()=>{
	console.log("服务开启....");
});
