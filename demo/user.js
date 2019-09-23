const userRouter = require("koa-router")();

userRouter.get("/user",(ctx,next)=>{
	ctx.body = "用户首页面 1";
})

module.exports = userRouter;