let db = require("./db.js");
;(async function(){
	let sql = `select * from goods`;
	let data = await db.q(sql);
	console.log(data);
	let sql2 = `select name from goods where id=2`;
	let data2 = await db.q(sql2);
	console.log(data2);
})();