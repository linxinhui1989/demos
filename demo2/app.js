const Koa = require("koa");
const app = new Koa();
app.listen(8080,()=>{console.log("8080被开启了...")});

const router = require("./routers/index.js");

app.use(router.routes());
