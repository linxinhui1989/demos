const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const path = require("path");
const fs = require("fs");
module.exports = {
	async home(req,res){
		let blogs = await Blog.blogList();
		res.render('back/blog_list',{blogs,username:req.session.user})
		// res.send(blogs);
	},
	async add(req,res){
		let categorys = await Category.allList();
		res.render('back/blog_add',{categorys,username:req.session.user})
	},
	async doAdd(req,res){
		let {
			title,
			category_id,
			introduce,
			detail,
			id,
			is_carousel,
			is_header
		} = req.body;
		is_carousel = is_carousel?1:0;
		is_header = is_header?1:0;
		let act = (id=="" || id==undefined)?"add":"edit";
		let files = req.files;
		let insertObj = {};
		let createtime = new Date();
		createtime = createtime.toLocaleTimeString();
		if(act == 'add'){
			// 在插入保存图片路径之前，先把其他基础信息保存起来，保存到数据库中
			insertObj = await Blog.addInfo({title,category_id,introduce,detail,createtime,is_carousel,is_header});
			id = insertObj.insertId;
		}else{
			await Blog.updateInfo({title,category_id,introduce,detail,id,is_carousel,is_header});
		}
		for(let index in files){
				let file = files[index];
				// 获取文件后缀
				let ext = path.extname(file.originalname);
				let newPathName = file.path + ext;
				// 要将已经保存到了uploads文件夹下的文件进行改名字
				fs.rename(file.path,newPathName,(error,data)=>{});
				// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
				let newFileName = file.filename + ext;
				act=="add"?await Blog.addIcon({newFileName,id}):
				await Blog.updateIcon({newFileName,id});
			}
		res.redirect("./");
	},
	async del(req,res){
		let {id} = req.query;
		await Blog.del({id});
		res.redirect("./");
	},
	/*显示编辑页面*/
	async edit(req,res){
		let {id} = req.query;
		let blog = await Blog.find({id});
		let categorys = await Category.allList();
		res.render('back/blog_edit',{blog,categorys,username:req.session.user})
	},
}