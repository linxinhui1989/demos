let fs = require("fs");
fs.rename("08_a.txt","08_a.js",(error,data)=>{
	console.log(error);
	console.log(data);
})
 // fs.rename(oldPath,newPath,callback)