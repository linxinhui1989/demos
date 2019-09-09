(async ()=>{
	const crypto = require("crypto");
	const Promise =require("bluebird");

	let md5 = Promise.promisify(crypto.pbkdf2);

	let s = await md5("123456","xxxxx", 100000, 32, "md5");
	
	console.log("s = " + s.toString("hex"));
})();

function md5(){
	return new Promise((resolve,reject)=>{
		crypto.pbkdf2("123456","xxxxx", 100000, 32, "md5",(error,data)=>{
			if (error) {reject error;}
			resolve(data);
		});
	});
}