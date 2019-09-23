const Koa = require("koa");
const app = new Koa();
app.listen("9090",()=>{
	console.log("9090端口开启了...")
});
app.use(async(ctx) => {
	let url = ctx.request.url;
	let query = ctx.request.query;
	let queryString = ctx.request.querystring;
	console.log(url);
	console.log(query);
	console.log(queryString);
	ctx.body = "Test";
});
