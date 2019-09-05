const fs = require("fs");
let obj = {name:"lucy",age:22};
fs.writeFile("./04.txt",JSON.stringify(obj),(error)=>{
	if (error) {return;}
});