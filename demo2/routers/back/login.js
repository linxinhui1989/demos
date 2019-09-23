const router = require("koa-router")();
router.get("/login",(ctx,next)=>{
	ctx.body = "后端登录页面";
})

module.exports = router;