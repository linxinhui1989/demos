const fs = require("fs");
fs.readFile("./03.txt",(error,data)=>{
	if(error){ 
		console.log(error);
		return;
	}
	console.log(data.toString());
});
