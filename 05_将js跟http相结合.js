let http = require("http");
let fs = require("fs");
http.createServer((req,res)=>{
	fs.readFile("./05.html",(error,data)=>{
		if(error) return;
		res.write(data);
		res.end();
	});
}).listen(8080,()=>{
	console.log("服务已经开启");
});
