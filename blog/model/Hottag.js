let db = require("../tool/db.js");
class Hottag{
	static instance(){
		if(Hottag.Instance == null){
			Hottag.Instance = new Hottag();
		}
		return Hottag.Instance;
	}

	/*获取所有热门标签*/
	static async hotList(){
		let sql = `select * from hottag`;
		return await db.q(sql);
	} 

	static async updateNum(id){
		let sql = `select num from hottag where id="${id}"`;
		let results = await db.q(sql);
		let num = parseInt(results[0]["num"]);
		num++;
		sql = `update hottag set num="${num}" where id="${id}"`;
		await db.q(sql);
	}

	static async getTag({id}){
		let sql = `select title from hottag where id="${id}"`;
		let results = await db.q(sql);
		return results[0].title;
	}

}

module.exports = Hottag;
