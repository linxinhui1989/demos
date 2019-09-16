let db = require("../tool/db.js");
class Category{

	static instance(){
		if(Category.Instance == null){
			Category.Instance = new Category();
		}
		return Category.Instance;
	}
	
	static async check({categoryName}){
		let sql = `select * from category where name="${categoryName}"`;
		return await db.q(sql);
	}

	static async add({categoryName}){
		let sql = `insert into category (name) values ("${categoryName}")`;
		return await db.q(sql);
	}
	
}

module.exports = Category;