const express = require("express");
const goodsRouter = express.Router();
const goodsController = require("../controller/goodsController.js");

goodsRouter.get("/",async(req,res)=>{
	goodsController.getGoodList(req,res);
});

goodsRouter.post("/add",async(req,res)=>{
	goodsController.addGood(req,res);
});

module.exports = goodsRouter;