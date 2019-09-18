const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const Link = require("../../model/Link.js");
module.exports = {
	async home(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取对应的轮播信息 --> 轮播也是属于博客中的内容
		let carousels = await Blog.getCarousels();
		// 获取友情链接
		let links = await Link.list();
		res.render('front/index',{
			categorys,
			carousels,
			links
		});
	}
}