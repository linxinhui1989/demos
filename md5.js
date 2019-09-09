module.exports = (str)=>{
	const crypto = require("crypto");
	const md5 = crypto.createHash("md5");
	const salt = "1hgxhjagj12t1y";
	md5.update(str + salt);
	let s = md5.digest('hex');
	return s;
}