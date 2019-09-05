const fs = require("fs");
const fsTool = {};

fsTool.read = (filename)=>{
	return new Promise((resolve,reject)=>{
		fs.readFile(filename,(error,data)=>{
			if (error) {reject(error)};
			resolve(data);
		});
	});
}

module.exports = fsTool;



