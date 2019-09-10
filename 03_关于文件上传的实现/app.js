const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const db = require("./tools/db.js");

const artTemplate = require("express-art-template");

app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views","./views")

// 指定文件上传的具体文件夹位置
app.use(multer({dest:'./uploads'}).any());
// 解析类似于 form 表单提交的方式传递过来的参数
app.listen(8080,()=>{console.log("服务开启了...")});

app.post("/upload",async (req,res)=>{
	/*
		对于上传的文件进行特殊处理
		a>> 给上传的文件添加对应的文件后缀
		b>> 将这个文件的存放路径，保存到数据库中
	*/
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
		let sql = `insert into imgs (img_src) values ("${newFileName}")`;
		await db.q(sql);
	}
	let imgs = await db.q(`select * from imgs`);
	res.render("info.html",{imgs:imgs});
})

app.use(express.static("./public"))
app.use(express.static("./uploads"))

