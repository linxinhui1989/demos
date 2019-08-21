var http = require("http");
var app = http.createServer(function(req,res){
	res.end("Hello World!!! 8878");
});
app.listen(8878,function(){
	console.log("服务开启了.... 8878 ");
});