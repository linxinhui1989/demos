const express = require("express");
const app = express();
app.listen(8080,()=>{console.log("服务开启了...")});

app.use(express.static("./public"));