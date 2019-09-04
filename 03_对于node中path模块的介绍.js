let path = require("path");
let http = require("http");
let server = http.createServer((req,res)=>{
	let imgPath = "./images/a.png";
	let p = path.resolve(imgPath);
	res.end(p);
}).listen(8080,()=>{
	console.log("启动...");
});
/*let res1 = path.join("xxxx","/a/","/b/","/c/");
console.log(res1);*/
/*
let res2 = path.resolve("a");
console.log(res2);*/