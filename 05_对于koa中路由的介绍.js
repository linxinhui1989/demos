const Koa = require("koa");
const router = require("koa-router")();
const app = new Koa();
app.listen(8080,()=>{console.log("8080被开启了...")});

router.get("/",(ctx,next)=>{
	ctx.body = "Index页面";
})
.get("/user",(ctx,next)=>{
	ctx.body = "User页面";
})

app.use(router.routes());
