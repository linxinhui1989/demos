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

module.exports = router;
