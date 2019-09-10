const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

/*
这边对于路由对象理解，完全可以理解成另一个单独的 app 对象一样
a>> 对于请求中以 /user 开头的请求，都会被 userRouter 所捕获
b>> 对于 userRouter 的使用，就可以跟之前 服务对象使用一样
 */ 
const userRouter = express.Router();
app.use("/user",userRouter);
userRouter.get("/list",(req,res)=>{
	res.send("用户显示列表");
	res.end();
});
userRouter.get("/add",(req,res)=>{
	res.send("用户添加");
	res.end();
});
userRouter.get("/del",(req,res)=>{
	res.send("用户删除");
	res.end();
});
userRouter.get("/update",(req,res)=>{
	res.send("用户更新");
	res.end();
});
/*app.get("/user/list",(req,res)=>{
	res.send("用户显示列表");
	res.end();
});
app.get("/user/add",(req,res)=>{
	res.send("用户添加");
	res.end();
});
app.get("/user/del",(req,res)=>{
	res.send("用户删除");
	res.end();
});
app.get("/user/update",(req,res)=>{
	res.send("用户删除");
	res.end();
});
*/
