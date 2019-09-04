let fs = require('fs');
let str = "aaa";
fs.writeFile('./08.txt',str,{flag:"a"},(error)=>{
	if(error) return;
});