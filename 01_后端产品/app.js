const express = require("express");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const artTemplate = require("express-art-template");
const path = require("path");
const url = require("url");

const {fileDir,uploadDir,port,renderDir,keys} = require("./config.js");

app.listen(port,()=>{console.log(`监听到了${port}服务开启`)});
app.engine('html', artTemplate);
// 设置render 方法中默认的渲染文件夹
app.set("views",renderDir);
app.use(multer({dest:uploadDir}).any());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieSession({
  name: 'session',
  keys: keys,
  maxAge: 24*60*60*1000
}));
// 读取静态文件 --> css / js
app.use(express.static(fileDir));
// 图片上传时，前端要显示时读取的路径
app.use(express.static(uploadDir));

/*对于其他路由编写*/
app.use("*",(req,res,next)=>{
	/*其中这个 * ，表示能够捕获到所有的请求*/
	if((req.session.user == undefined || req.session.user == "")
		&&(req.baseUrl != "/login")){
		// 没有登录 --> 重定向到 login 页面中
		res.redirect("/login");
	}else{
		next();
	}
});
app.use("/",require("./routers/userRouter.js"));
app.use("/goods",require("./routers/goodsRouter.js"));
