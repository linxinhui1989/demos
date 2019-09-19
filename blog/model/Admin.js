let db = require("../tool/db.js");
class Admin{
	static instance(){
		if(Admin.Instance == null){
			Admin.Instance = new Admin();
		}
		return Admin.Instance;
	}

	static async allList(){
		let sql = `select * from admin`;
		return await db.q(sql);
	}

	/*检测是否存在该名称的用户*/
	static async checkAdmin({name}){
		let sql = `select * from admin where name="${name}"`;
		return await db.q(sql);
	}

	/*进行数据的插入*/
	static async doAdd({name,pwd}){
		let sql = `insert into admin (name,pwd) values ("${name}","${pwd}")`;
		await db.q(sql);
	}

	/*对于管理员的编辑*/
	static async showEdit({id}){
		let sql = `select * from admin where id="${id}"`;
		let results = await db.q(sql);
		return results[0];
	}

	static async doEdit({name,pwd,id}){
		let sql = `update admin set pwd="${pwd}" where id="${id}"`;
		await db.q(sql);
	}

	/*对于管理员信息的删除*/
	static async del({id}){
		let sql = `delete from admin where id="${id}"`;
		await db.q(sql);
	}
}

module.exports = Admin;
