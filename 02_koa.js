const Koa = require("koa");
const app = new Koa();
app.listen("9090",()=>{
	console.log("9090端口开启了...")
});
app.use(async(ctx) => {
	/*
	ctx对象上的 
	request 就是保存了客户端发送的请求的url以及参数
	response 就是对于当次请求的相应
	类似于 express 中的 req  res
	*/
	console.log(ctx.request);
	console.log(ctx.response);
	ctx.body = "H";
});
