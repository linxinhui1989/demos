const crypto = require("crypto");
crypto.pbkdf2("123456","xxxxx", 100000, 32, "md5",(error,res)=>{
	console.log(res.toString('hex'));
});
