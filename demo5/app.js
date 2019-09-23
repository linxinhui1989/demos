const Koa = require("koa");
const app = new Koa();
const staticServer = require("koa-static");
const artTemp = require("koa-art-template");

// 设置模板引擎的渲染位置以及渲染的文件后缀
artTemp(app, {
  root: "./views",
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
});

app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("koa-router")();

router.get("/index",(ctx,next)=>{
	let goods = [
		{price:110,num:10},
		{price:120,num:20},
		{price:130,num:30},
		{price:140,num:40},
		{price:150,num:50}
	]
	// ctx.render("index",{goods:goods});
	ctx.render("index",{goods});
})

app.use(router.routes());

/*koa中的写法*/
app.use(staticServer("./public"));