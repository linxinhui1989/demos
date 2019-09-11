// 使用一个关键字 class 来表示一个类的设计
const db = require("../components/db.js");
class User{
	async login({username,pwd}){
		let sql = `select username from users where
		 username="${username}" and pwd = "${pwd}"`;
		return await db.q(sql);
	}
	async del(id){
		let sql = `delete from users where id = "${id}"`;
		return await db.q(sql);
	}
}
module.exports = User;

