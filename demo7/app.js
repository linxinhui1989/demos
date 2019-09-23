const Koa = require("koa");
const app = new Koa();
const staticServer = require("koa-static");
const multer = require('@koa/multer');
app.use(multer({dest:"./uploads"}).any());
app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("koa-router")();

router.post("/upload",(ctx,next)=>{
	console.log(ctx.files);
	ctx.body = "图片上传";
})

app.use(router.routes());
app.use(staticServer("./public"))