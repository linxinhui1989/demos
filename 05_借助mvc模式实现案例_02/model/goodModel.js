const db = require("../tools/db.js");
module.exports = {
	getGoods:async (sql)=>{return await db.q(sql);},
	insertGood:async (sql)=>{return await db.q(sql);},
	deleteGood:async (sql)=>{await db.q(sql);},
	updateGood:async (sql)=>{await db.q(sql);}
}