const indexRouter = require("koa-router")();

indexRouter.get("/",(ctx,next)=>{
	ctx.body = "首页面 1";
})
.get("/index",(ctx,next)=>{
	ctx.body = "首页面 2";
})
.get("/goods",(ctx,next)=>{
	ctx.body = "商品显示的页面";
})

module.exports = indexRouter;

