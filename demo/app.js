const Koa = require("koa");
const app = new Koa();
app.listen(8080,()=>{console.log("8080被开启了...")});

const indexRouter = require("./index.js");
const userRouter = require("./user.js");

app.use(indexRouter.routes());
app.use(userRouter.routes());
