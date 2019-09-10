const express = require("express");
const goodRouter = express.Router();

goodRouter.get("/",(req,res)=>{
	res.send("产品首页面");
	res.end();
})
.get("/add",(req,res)=>{
	res.send("产品add操作");
	res.end();
})
.get("/update",(req,res)=>{
	res.send("产品update操作");
	res.end();
})
.get("/del",(req,res)=>{
	res.send("产品del操作");
	res.end();
})

module.exports = goodRouter;