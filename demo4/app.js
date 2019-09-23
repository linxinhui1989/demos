const Koa = require("koa");
const app = new Koa();
const staticServer = require("koa-static");
const bodyParser = require("koa-bodyparser");
app.use(bodyParser());
app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("koa-router")();

router.get("/index",(ctx,next)=>{
	ctx.body = "Index首页面";
})
.post("/login",(ctx,next)=>{
	console.log(ctx.request);
	const b = ctx.request.body;
	console.log(b)
	ctx.body = b;
})

app.use(router.routes());

/*koa中的写法*/
app.use(staticServer("./public"));