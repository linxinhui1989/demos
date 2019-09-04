let fs = require("fs");
/*
对于 node 中 fs 的介绍 --> 读文件  写文件
node设计方式：error优先原则
*/
fs.readFile("./04.txt",(error,data)=>{
	if(error){ 
		console.log(error);
		return;
	}
	console.log(data.toString());
});