const db2 = require("./db2.js");
;(async function(){
	try{
		let data = await db2.q(`select * from goods limit 2,2`);
		console.log(data);
	}catch(error){
		console.log(error);
	}
})();