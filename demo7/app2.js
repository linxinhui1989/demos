const Koa = require("koa");
const app = new Koa();
const staticServer = require("koa-static");

const koaBody = require('koa-body');
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024,	// 设置上传文件大小最大限制，默认2M
    	uploadDir:"./uploads"
    }
}));

app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("koa-router")();

router.post("/upload",(ctx,next)=>{
	console.log(ctx.request.files);
	ctx.body = "图片上传";
})

app.use(router.routes());
app.use(staticServer("./public"))