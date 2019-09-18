const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const Link = require("../../model/Link.js");
const Comment = require("../../model/Comment.js");
module.exports = {
	/*显示首页面*/
	async home(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取对应的轮播信息 --> 轮播也是属于博客中的内容
		let carousels = await Blog.getCarousels();
		// 获取友情链接
		let links = await Link.list();
		// 获取头条信息
		let headBlog = await Blog.getHead();
		// 获取六条最新的博客信息
		let lastBlogs = await Blog.getLast();
		res.render('front/index',{
			categorys,
			carousels,
			links,
			headBlog,
			lastBlogs
		});
	},
	/*对于评论的添加*/
	async addComment(req,res){
		let result = await Comment.addComment(req.body);
		let info = {success:1,msg:"评论成功"};
		res.send(info);
	},
	/*获取评论内容*/
	async getComments(req,res){
		let result = await Comment.getLast();
		res.send(result)
	}
}