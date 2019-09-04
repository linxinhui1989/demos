let fs = require('fs');
let stu = {
	name:"lucy",
	age:22,
	sex:"woman"
};
// 结合 JSON 中的方法，将 js 对象转为 json 格式的字符串
fs.writeFile("./07.txt",JSON.stringify(stu),(error)=>{
	if(error){return;}
});