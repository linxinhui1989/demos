var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next)=>{
	res.render("back/index");
	// res.send("用户首页")
})
.get('/login',(req,res,next)=>{
	res.render("back/login");
})
module.exports = router;