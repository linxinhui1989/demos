const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

app.use("/user",require("./router/userRouter.js"));
app.use("/goods",require("./router/goodRouter.js"));

