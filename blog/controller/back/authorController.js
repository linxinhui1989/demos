const path = require("path");
const fs = require("fs");
const Author = require("../../model/Author.js");
module.exports = {
	async home(req,res){
		let authors = await Author.authorList();
		res.render("back/author",{authors})		
	},
	async add(req,res){
		res.render("back/author_add")
	},
	async doAdd(req,res){
		let {
			author_name,
			author_age,
			author_qq,
			author_webo,
			author_email,
			author_introduce,
			author_sex
		} = req.body;
		let files = req.files;
		let insertObj = {};
		// 在插入保存图片路径之前，先把其他基础信息保存起来，保存到数据库中
		insertObj = await Author.addInfo({author_name,author_age,author_qq,author_webo,author_email,author_introduce
		,author_sex});// 这边已经实现了基本数据的插入，对于图片路径也要保存到这个 id 下
		const id = insertObj.insertId;
		for(let index in files){
			let file = files[index];
			// 获取文件后缀
			let ext = path.extname(file.originalname);
			let newPathName = file.path + ext;
			// 要将已经保存到了uploads文件夹下的文件进行改名字
			fs.rename(file.path,newPathName,(error,data)=>{});
			// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
			let newFileName = file.filename + ext;
			await Author.addAvtor({newFileName,id});
		}
		res.send("修改成功了....");
	}
}