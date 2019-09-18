let express = require('express');
let router = express.Router();
const authorController = require("../../controller/back/authorController.js");
/* GET home page. */
router.get('/', (req, res, next)=>{
	authorController.home(req,res);
})
.get('/add',(req,res,next)=>{
	authorController.add(req,res);
})
.post('/add',(req,res,next)=>{
	authorController.doAdd(req,res);
})
.get('/edit',(req,res,next)=>{
	// 显示编辑页面
})
.post('/edit',(req,res,next)=>{
	// 进行具体的编辑操作
})

module.exports = router;