let ejs = require("ejs");
let allData = {
	name:"lucy",
	goods:[
		{name:"iphone11","price":100},
		{name:"iphone11","price":200},
		{name:"iphone11","price":300},
		{name:"iphone11","price":400},
		{name:"iphone11","price":500},
		{name:"iphone11","price":600}
	]
}
// ejs 模块更多是用于实现页面渲染的
ejs.renderFile("./01.html",allData,(error,str)=>{
	console.log(error);
	console.log(str);
});
