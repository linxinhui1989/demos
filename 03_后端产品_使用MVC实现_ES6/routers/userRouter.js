const express = require("express");
const userRouter = express.Router();
const userController = require("../controller/userController.js");

userRouter.get("/",(req,res)=>{
	userController.index(req,res);
})
.get("/login",(req,res)=>{
	userController.getLogin(req,res);
})
.post("/login",(req,res)=>{
	userController.doLogin(req,res);
})
.get("/logout",(req,res)=>{
	userController.logout(req,res);
})

module.exports = userRouter;