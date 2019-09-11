const express = require("express");
const db = require("../components/db.js");
const path = require("path");
const fs = require("fs");

const goodsRouter = express.Router();

goodsRouter.get("/",async(req,res)=>{
	let sql = `select good.*,icon.img_src from 
		goods good INNER JOIN imgs icon ON good.id=icon.good_id`;
	let goods = await db.q(sql);
	res.render("goods.html",{goods:goods});
});

goodsRouter.post("/add",async (req,res)=>{
	const {goodsname,price,des} = req.body;
	let sql = `insert into goods (name,des,price) values 
	("${goodsname}","${des}","${price}")`;
	let good = await db.q(sql);
	let files = req.files;
	for(let index in files){
		console.log(files[index]);
		let file = files[index];
		// 获取文件后缀
		let ext = path.extname(file.originalname);
		let newPathName = file.path + ext;
		// 要将已经保存到了uploads文件夹下的文件进行改名字
		fs.rename(file.path,newPathName,(error,data)=>{});
		// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
		let newFileName = file.filename + ext;
		let sql = `insert into imgs (img_src,good_id) values ("${newFileName}","${good.insertId}")`;
		await db.q(sql);
	}
	// 插入成功后，重定向到index首页面
	res.redirect("/");
});

module.exports = goodsRouter;