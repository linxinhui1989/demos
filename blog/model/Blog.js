let db = require("../tool/db.js");
class Blog{

	static instance(){
		if(Blog.Instance == null){
			Blog.Instance = new Blog();
		}
		return Blog.Instance;
	}

	static async blogList(){
		let sql = `select * from blog`;
		return await db.q(sql);
	}

	static async addIcon({newFileName,id}){
		let sql = `insert into imgs (img_src,blog_id) values
		 ("${newFileName}","${id}")`
		return await db.q(sql);
	}

	static async addInfo({title,category_id,introduce,detail,createtime}){
		let sql = `insert into blog (title,category_id,introduce,detail,createtime) values
		 ("${title}","${category_id}","${introduce}","${detail}",
		 "${createtime}")`;
		return await db.q(sql);
	}	
}

module.exports = Blog;