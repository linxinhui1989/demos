const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const Link = require("../../model/Link.js");
const Comment = require("../../model/Comment.js");
const Hottag = require("../../model/Hottag.js");
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
		// 获取总的评论数
		let allCommentsNum = await Comment.getPassedNum();
		// 获取所有的热门标签
		let hotTags = await Hottag.hotList();
		res.render('front/index',{
			categorys,
			carousels,
			links,
			headBlog,
			lastBlogs,
			allCommentsNum,
			hotTags
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
		let {startNum,num} = req.query;
		let result = await Comment.getPassedLast({startNum,num});
		res.send(result)
	},
	async commentsPage(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取友情链接
		let links = await Link.list();
		let startNum = 0,num = 10;
		let comments = Comment.getPassedLast({startNum,num});
		res.render('front/comment_page',{comments,categorys,links});
	},
	/*获取对应的首页信息*/
	async getPics(req,res){
		let {id} = req.query;
		let blogs = await Blog.find({id});
		res.send(blogs);
	},
	/*其他分类的显示*/
	async otherCategory(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取所有的热门标签
		let hotTags = await Hottag.hotList();
		// 获取六条最新的博客信息
		let lastBlogs = await Blog.getLast();
		let {category_id:id} = req.query;
		let blogs = await Blog.find({id});
		let lanmu = {};
		if(blogs.length>0){
			lanmu = blogs[0];
		}
		res.render('front/other_category',{
			blogs,
			categorys,
			lanmu,
			hotTags,
			lastBlogs
		})
	}
}