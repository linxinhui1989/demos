const indexModel = require("../model/indexModel.js")
module.exports = {
	index:async (req,res)=>{
		let pathName = "/index.html";
		let data = await indexModel.index("./public" + pathName);
		res.write(data);
		res.end();
	}
}