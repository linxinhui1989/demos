let express = require('express');
let router = express.Router();

let categoryController = require("../../controller/back/categoryController.js");

/* GET home page. */
router.get('/', (req, res, next)=>{
	categoryController.categoryList(req,res);
})
// 这边进行列表的新增
.get('/add',(req,res,next)=>{
	res.render("back/category_add");
})
.post('/add',(req,res,next)=>{
	categoryController.add(req,res);
})
// 这边进行列表的修改
.get('/edit',(req,res,next)=>{
	categoryController.edit(req,res);
})
// 这边进行列表的删除
.get('/del',(req,res,next)=>{
	categoryController.del(req,res);
})

module.exports = router;