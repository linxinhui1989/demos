let db = require("../tool/db.js");
class Link{

	static instance(){
		if(Link.Instance == null){
			Link.Instance = new Link();
		}
		return Link.Instance;
	}

	static async list(){
		let sql = `select * from link`;
		return await db.q(sql);
	}

	static async del({id}){
		let sql = `delete from link where id="${id}"`;
		return await db.q(sql);
	}
	
	static async check({linkName}){
		let sql = `select * from link where link_name="${linkName}"`;
		return await db.q(sql);
	}

	static async add({linkName,linkUrl}){
		let sql = `insert into link (link_name,link_url) values ("${linkName}","${linkUrl}")`;
		return await db.q(sql);
	}

}

module.exports = Link;