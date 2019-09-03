/*
 这个写法，是默认从 app.js 作为起始路径进行访问	
 define(["user_detail"],function(){
	console.log("测试 run 模块下的 run 方法");
});
*/
define(["user/user_detail","user/user_login"],function(){
	console.log("测试 run 模块下的 run 方法");
});