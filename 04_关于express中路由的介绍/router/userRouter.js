const express = require("express");
const userRouter = express.Router();
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
module.exports = userRouter;