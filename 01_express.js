const express = require("express");
const app = express();
app.listen(8080,()=>{
	console.log("8080端口开启了...")
});
app.get("/",(req,res)=>{
	res.send("Hello World!!! ---> Express");
});