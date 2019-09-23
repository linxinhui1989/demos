const Koa = require("koa");
const app = new Koa();
app.listen("9090",()=>{
	console.log("9090端口开启了...")
});
app.use(async(ctx) => {
	let obj = {name:"lucy",age:22,sex:"woman"};
	// ctx.response.body = "Hello World!!";
	ctx.body = obj;
});
