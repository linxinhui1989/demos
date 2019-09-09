const http = require("http");
const server = http.createServer((req,res)=>{
	res.write("hello");
	res.end();
});
server.listen(8080,()=>{
	console.log("服务已经开启了...");
})