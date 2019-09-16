let express = require('express');
let router = express.Router();

let userController = require("../../controller/back/userController.js");

/* GET home page. */
router.get('/', (req, res, next)=>{
	userController.index(req,res);
})
.get('/login',(req,res,next)=>{
	res.render("back/login");
})
// 对于登录的post请求的实现
.post('/login',(req,res,next)=>{
	userController.login(req,res);
})
// 对于退出登录的实现
.get('/logout',(req,res,next)=>{
	userController.logout(req,res);
})
module.exports = router;