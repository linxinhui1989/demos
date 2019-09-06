const http = require("http");
const url = require("url");
const qs = require("querystring");

http.createServer((req,res)=>{
	/*let obj = qs.parse(url.parse(req.url).query);	
	console.log(obj);
	res.write("Hello");
	res.end();*/
	/*对于 post 请求提交过来的数据的获取，
	需要借助 req 中设定对应的监听方法，一段一段获取数据
	最后将所有获取到数据进行拼接*/
	console.log(req.method);
	let str = "";
	req.on("data",(data)=>{
		str += data;
	});
	req.on("end",(data)=>{
		console.log(str);
		// 再来使用 qs 进行parse 解析
		let obj = qs.parse(str);
		console.log(obj);
		res.write("xxx");
		res.end();
	})
}).listen(8080,()=>{
	console.log(`服务连接上了`);
});