const db = require("../tools/db.js");
module.exports = {
	getGoods:async (sql)=>{return await db.q(sql);},
	updateGood:async (sql)=>{return await db.q(sql);}
}