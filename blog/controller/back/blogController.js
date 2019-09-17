const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const path = require("path");
const fs = require("fs");
module.exports = {
	async home(req,res){
		let blogs = await Blog.blogList();
		res.render('back/blog_list',{blogs})
		// res.send(blogs);
	},
	async add(req,res){
		let categorys = await Category.allList();
		res.render('back/blog_add',{categorys})
	},
	async doAdd(req,res){
		let {
			title,
			category_id,
			introduce,
			detail
		} = req.body;
		let files = req.files;
		let insertObj = {};
		let createtime = new Date();
		createtime = createtime.toLocaleTimeString();
		// 在插入保存图片路径之前，先把其他基础信息保存起来，保存到数据库中
		insertObj = await Blog.addInfo({title,category_id,introduce,detail,createtime});
		// 这边已经实现了基本数据的插入，对于图片路径也要保存到这个 id 下
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
			await Blog.addIcon({newFileName,id});
		}
		res.redirect("./");
	}
}