const http = require("http");
const server = http.createServer((req,res)=>{
	console.log(req.method);
	if(req.method.toLowerCase() == "get"){
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		res.write("get中的hello");
		res.end();
	}else if(req.method.toLowerCase() == "post"){
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
		res.write("post中的hello");
		res.end();
	}
});
server.listen(8080,()=>{
	console.log("服务已经开启了...");
})