const Category = require("../../model/Category.js");
const Blog = require("../../model/Blog.js");
const Link = require("../../model/Link.js");
const Comment = require("../../model/Comment.js");
const Hottag = require("../../model/Hottag.js");
const Author = require("../../model/Author.js");
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
		let blogs = await Blog.findItems({id});
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
	},
	/*搜索的实现*/
	async search(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取友情链接
		let links = await Link.list();
		// 获取所有的热门标签
		let hotTags = await Hottag.hotList();
		// 获取六条最新的博客信息
		let lastBlogs = await Blog.getLast();
		let {keyboard} = req.body;
		let blogs = await Blog.search({keyboard});
		res.render('front/search',{
			blogs,categorys,links,hotTags,lastBlogs
		})
	},
	/*个人简介的实现*/
	async personal(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取友情链接
		let links = await Link.list();
		// 获取所有的热门标签
		let hotTags = await Hottag.hotList();
		// 获取六条最新的博客信息
		let lastBlogs = await Blog.getLast();
		let authors = await Author.authorList();
		let author = authors[0];
		res.render('front/personal',{
			author,categorys,links,hotTags,lastBlogs
		});
	},
	/*显示博客详情页面*/
	async blogDetail(req,res){
		// 获取对应的头部分类信息
		let categorys = await Category.allList();
		// 获取友情链接
		let links = await Link.list();
		// 获取所有的热门标签
		let hotTags = await Hottag.hotList();
		// 获取六条最新的博客信息
		let lastBlogs = await Blog.getLast();
		let {id} = req.query;
		let blog = await Blog.findBlogById({id});
		let authors = await Author.authorList();
		let author = authors[0];
		let category = await Category.findbyCategoryId(blog["category_id"]);
		// 相关文章 --> 跟这篇文章的类别相同的文章
		let relateBlogs = await Blog.findRelate(blog["category_id"]);
		// 找到所有的博客的id
		let allBlogIds = await Blog.blogIdList();
		let prevId,nextId,index;
		for(let i=0;i<allBlogIds.length;i++){
			let itemId = allBlogIds[i].id;
			if(itemId == blog["id"]){
				index = i;
				break;
			}
		}
		prevId = allBlogIds[index - 1].id;
		nextId = allBlogIds[index + 1].id;
		// 上一篇博客
		let prevBlog = await Blog.findBlogById({id:prevId});
		// 下一篇博客
		let nextBlog = await Blog.findBlogById({id:nextId});
		// 获取总的评论数
		let allCommentsNum = await Comment.getArticlePassedNum(blog["id"]);
		// 文章所包含的标签的获取
		let articleTags = [];
		let tags = blog['tags'].split(',');
		for(let i=0;i<tags[i];i++){
			articleTags.push(await Hottag.getTag({id:tags[i]}));
		}
		res.render('front/blog_detail',{
			blog,
			categorys,
			links,
			hotTags,
			lastBlogs,
			category,
			author,
			relateBlogs,
			prevBlog,
			nextBlog,
			allCommentsNum,
			articleTags
		});
	},

	/*获取该文章对应的博客信息*/
	async getArticleComments(req,res){
		let {startNum,num,id} = req.query;
		let result = await Comment.getArticlePassedLast({startNum,num,id});
		res.send(result)
	},

	/*对于浏览量的变化*/
	async addBrowse(req,res){
		await Blog.addBrowse(req.body);
	}
}