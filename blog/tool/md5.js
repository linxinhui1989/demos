const {salt} = require("../config.js");
module.exports = (str)=>{
	const md5 = require("crypto").createHash("md5");
	md5.update(str + salt);
	return md5.digest('hex');
}