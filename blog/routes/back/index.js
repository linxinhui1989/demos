const express = require('express');
const router = express.Router();

const userRouter = require("./user.js");
const artRouter = require("./art.js");
const categoryRouter = require("./category.js");
const linkRouter = require("./link.js");
const authorRouter = require("./author.js");
const blogRouter = require("./blog.js");
const adminRouter = require("./admin.js");

router.use("*",(req,res,next)=>{
	/*其中这个 * ，表示能够捕获到所有的请求*/
	if((req.session.user == undefined || req.session.user == "")
		&&(req.baseUrl != "/back/login")){
		// 没有登录 --> 重定向到 login 页面中
		res.redirect("/back/login");
	}else{
		next();
	}
})

router.use("/",userRouter);
router.use("/art",artRouter);
router.use("/category",categoryRouter);
router.use("/link",linkRouter);
router.use("/author",authorRouter);
router.use("/blog",blogRouter);
router.use("/admin",adminRouter);

module.exports = router;
