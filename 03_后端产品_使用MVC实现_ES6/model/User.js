// 使用一个关键字 class 来表示一个类的设计
const db = require("../components/db.js");
class User{
	async login({username,pwd}){
		let sql = `select username from users where
		 username="${username}" and pwd = "${pwd}"`;
		return await db.q(sql);
	}
	static async toLogin({username,pwd}){
		return await User.userInstance().login({username,pwd})
	}
	
	static userInstance(){
		if(User.instance == null){
			User.instance = new User();
		}
		return User.instance;
	}
}
module.exports = User;
