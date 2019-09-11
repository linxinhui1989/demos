const db = require("../components/db.js");
module.exports = {
	login:async({username,pwd})=>{
		let sql = `select username from users where
		 username="${username}" and pwd = "${pwd}"`;
		return await db.q(sql);
	},
}