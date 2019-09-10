const express = require("express");
const cookieSession = require("cookie-session");
const app = express();

/*
  对于cookie的基础设置
  a>> cookie的随机生成不能过于简单
  b>> cookie应该具有一定的时效性
*/
let keys = ["xaxa","xax","xxxx","sdajkdal"];
app.use(cookieSession({
  name: 'session',
  keys: keys,
  maxAge: 15*60*1000
}))

app.listen(8080,()=>{console.log("服务开启了...")});

// 单独对于 get 请求的操作
app.get("/index",(req,res,next)=>{
	console.log(req.session.name);
	req.session.name = "lucy";
	res.write("please login first");
	res.end();
});


