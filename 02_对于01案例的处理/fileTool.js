// 人为准备一个模块，这个模块专门用于文件处理
let fileTool = {};
let fs = require('fs');

fileTool.read = function(filePath){
	return new Promise((resolve,reject)=>{
		fs.readFile(filePath,(error,data)=>{
			if(error) reject(error);
			resolve(data);
		})
	});
}; 

module.exports = fileTool;