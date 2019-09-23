const Koa = require("koa");
const app = new Koa();
const staticServer = require("koa-static");
app.listen(8080,()=>{console.log("8080被开启了...")});

/*express中的写法 app.use(express.static("路径"));*/

/*koa中的写法*/
app.use(staticServer("./public"));