// 获取系统提供的 http 模块
let http = require("http");
// 读取外部定义好的读文件的模块
let fileTool = require("./fileTool.js");
let path = require("path");
let urlObj = require("url");
let qs = require("querystring");
let db = []; // [{username:"xxx",password:"xxx"}]
// 根据 http 对象创建node服务
http.createServer(async (req,res)=>{
	// 客户端发送的每一次请求，这边都可以获取到
	let url = req.url;
	if(url.indexOf("login")!=-1){
		console.log(url);
		let str = urlObj.parse(url).query;
		console.log(str);
		let paramsObj = qs.parse(str);
		let isExist = false;
		// 用来保存服务中所含有的那个用户信息
		let userInfo;
		// 在这个位置下，需要对于该名称的用户是否存在进行判断
		for(let i=0;i<db.length;i++){
			let params = db[i]; // 就是进行将所有用户的用户名跟输入的字符串进行比较
			if(params['username'] == paramsObj['username']){
				userInfo = params;
				isExist = true;
			}
		}
		let result;
		if(isExist){
			// 当用户名存在时，则要获取到该用户名所对应的那个密码
			if(userInfo["password"] == paramsObj["password"]){
				result = {"code":200,"error_code":0,"msg":"登录成功"}
			}else{
				result = {"code":200,"error_code":2,"msg":"密码有误"}
			}
		}else{
			result = {"code":200,"error_code":1,"msg":"用户不存在"}
		}
		res.write(JSON.stringify(result));
		res.end();
	}else if(url.indexOf("regist")!=-1){
		let str = urlObj.parse(url).query;
		let paramsObj = qs.parse(str);
		// 注册 --> 该用户是否已经注册过了
		let isExist = false;
		// 在这个位置下，需要对于该名称的用户是否存在进行判断
		for(let i=0;i<db.length;i++){
			let params = db[i]; // 就是进行将所有用户的用户名跟输入的字符串进行比较
			if(params['username'] == paramsObj['username']){
				isExist = true;
				break;
			}
		}
		// 在循环结束之后，根据 isExist 这个参数的状态来进行判断
		let result;
		if(isExist){
			result = {"code":200,"error_code":1,"msg":"该用户已存在"}
		}else{
			result = {"code":200,"error_code":0,"msg":"注册成功"};
			db.push({
				username:paramsObj["username"],
				password:paramsObj["password"]
			});
		}
		res.write(JSON.stringify(result));
		res.end();
	}else{
		if(url == "/"){
			let fileContent = await fileTool.read('public/index.html');
			res.write(fileContent);
		}else{
			let filePath = path.parse(url).base;  // public/index.html
			console.log(filePath);
			let fileContent = await fileTool.read('public/'+filePath);
			res.write(fileContent);
		}
		res.end();
	}
}).listen(8080,()=>{
	console.log("服务开启了...");
});

