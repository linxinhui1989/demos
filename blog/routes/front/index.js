const express = require('express');
const router = express.Router();

const indexController = require("../../controller/front/indexController.js");

/* GET home page. */
router.get('/', (req, res, next)=>{
  indexController.home(req,res);
})
.post('/addComment',(req,res,next)=>{
	indexController.addComment(req,res);
})
.get('/getComments',(req,res,next)=>{
	indexController.getComments(req,res);
})
.get('/comments_page',(req, res, next)=>{
	indexController.commentsPage(req,res);
})
.get('/getPics',(req, res, next)=>{
	indexController.getPics(req,res);
})
/*对于其他分类中的点击操作*/
.get('/other_category',(req, res, next)=>{
	indexController.otherCategory(req,res);
})
/*对于搜索请求的实现*/
.post('/search',(req, res, next)=>{
	indexController.search(req,res);
})
/*对于个人简介的实现*/
.get('/personal',(req, res, next)=>{
	indexController.personal(req,res);
})
/*进入博客详情页面*/
.get('/blog_detail',(req, res, next)=>{
	indexController.blogDetail(req,res);
})
/*为指定文章添加评论*/
.post('/add_article_comment',(req, res, next)=>{
	indexController.addComment(req,res);
})
/*获取对应的评论*/
.get('/getArticleComments',(req, res, next)=>{
	indexController.getArticleComments(req,res);
})
/*浏览量的设置*/
.post('/add_browse',(req, res, next)=>{
	indexController.addBrowse(req,res);
})
module.exports = router;
