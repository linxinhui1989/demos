var http = require("http");
var app = http.createServer(function(req,res){
	res.end("Hello World!!! 8080");
});
app.listen(8080,function(){
	console.log("服务开启了.... 8080");
});