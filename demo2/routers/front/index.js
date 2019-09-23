const router = require("koa-router")();
router.get("/",(ctx,next)=>{
	ctx.body = "前端首页面";
})

module.exports = router;