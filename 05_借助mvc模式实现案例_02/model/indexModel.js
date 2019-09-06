const fileTool = require("../tools/fileTool.js");
module.exports = {
	index:async(pathName)=>{return await fileTool.read(pathName);}
}