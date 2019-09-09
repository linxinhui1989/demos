// 获取到所需的express模块
const express = require("express");
// 使用express这个方法，来进行服务的创建
const app = express();
// 为这个创建好的服务设定监听端口
app.listen(8080,()=>{console.log("express服务开启")});

app.get("/",(req,res)=>{
	res.send("这边是首页面");
	res.end();
});

// 在 express 中提供了快速简便读取静态文件的写法
app.use(express.static("./public"));
