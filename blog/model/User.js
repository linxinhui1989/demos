let db = require("../tool/db.js");
class User{

	static instance(){
		if(User.Instance == null){
			User.Instance = new User();
		}
		return User.Instance;
	}

	static async login({username,password}){
		return await User.instance().login({username,password})
	}

	async login({username,password}){
		let sql = `select name,pwd from admin where 
			name="${username}" and pwd="${password}"`;
		return await db.q(sql);
	}
}

module.exports = User;