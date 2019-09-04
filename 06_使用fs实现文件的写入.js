let fs = require("fs");
let str = "这边是测试数据测试数据测试数据测试数据";
fs.writeFile("./06.txt",str,(error)=>{
	if(error) return;
})
