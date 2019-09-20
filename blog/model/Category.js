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
	/*获取到所有的分类数据*/
	static async allList(){
		let sql = `select * from category order by id asc`;
		return await db.q(sql);
	}

	static async list(startIndex,pageCount){
		let sql = `select * from category order by id asc
		limit ${startIndex},${pageCount}`;
		return await db.q(sql);
	}

	static async del({id}){
		let sql = `delete from category where id="${id}"`;
		return await db.q(sql);
	}

	static async showEdit({id}){
		let sql = `select * from category where id= "${id}"`;
		return await db.q(sql);
	}

	static async edit({id,categoryName}){
		let sql = `update category set name="${categoryName}"
			where id="${id}"`;
		await db.q(sql);
	}

	static async count(){
		let sql = `select count(id) as count from category`;
		return await db.q(sql);
	}

	static async findbyCategoryId(category_id){
		let sql = `select * from category where id="${category_id}"`;
		let categorys = await db.q(sql);
		return categorys[0];
	}

}

module.exports = Category;