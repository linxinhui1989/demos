const ejs = require("ejs");

let ejsTool = {};

ejsTool.render = (filePath,json)=>{
	return new Promise((resolve,reject)=>{
		ejs.renderFile(filePath,json,(error,data)=>{
			if(error){reject(error);}
			resolve(data);
		})
	});
};

module.exports = ejsTool;
