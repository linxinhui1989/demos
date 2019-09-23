const Koa = require("koa");
const app = new Koa();
const session = require("koa-session");

app.keys = ['aa','bb','cc'];
const CONFIG = {
	key: 'koa:sess',
	maxAge: 365*24*3600*1000
}
app.use(session(CONFIG, app));

app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("koa-router")();

router.get("/",(ctx,next)=>{
	console.log(ctx.session.logined);
	if(ctx.session.logined == "" || ctx.session.logined == undefined){
		/*ctx.body = "还没登录，请先登录";*/
		ctx.redirect("/login");
	}else{
		ctx.body = "登录成功后的首页面";
	}
})
.get("/login",(ctx,next)=>{
	ctx.body = "登录页面";
})

app.use(router.routes());
