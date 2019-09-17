let db = require("../tool/db.js");
class Blog{

	static instance(){
		if(Blog.Instance == null){
			Blog.Instance = new Blog();
		}
		return Blog.Instance;
	}

	static async blogList(){
		let sql = `select b.*,i.* from blog b INNER JOIN imgs i ON b.id=i.blog_id`;
		return await db.q(sql);
	}

	static async addIcon({newFileName,id}){
		let sql = `insert into imgs (img_src,blog_id) values
		 ("${newFileName}","${id}")`
		return await db.q(sql);
	}

	static async updateIcon({newFileName,id}){
		let sql = `update imgs set img_src="${newFileName}"
		 where blog_id="${id}"`;
		return await db.q(sql);
	}

	static async addInfo({title,category_id,introduce,detail,createtime}){
		let sql = `insert into blog (title,category_id,introduce,detail,createtime) values
		 ("${title}","${category_id}","${introduce}","${detail}",
		 "${createtime}")`;
		return await db.q(sql);
	}	

	/*修改信息*/
	static async updateInfo({title,category_id,introduce,detail,id}){
		let sql=`update blog set title="${title}",
		category_id="${category_id}",introduce="${introduce}",
		detail="${detail}" where id="${id}"`;
		await db.q(sql);
	}

	/*删除博客*/
	static async del({id}){
		console.log("删除操作" + id)
		// 先删除图片
		let sql1 = `delete from imgs where blog_id="${id}"`;
		await db.q(sql1);
		// 再来删除博客
		let sql2 = `delete from blog where id="${id}"`;
		await db.q(sql2);
	}

	static async find({id}){
		let sql = `select b.*,i.* from blog b,imgs i where b.id=i.blog_id and b.id="${id}"`;
		let results = await db.q(sql);
		return results[0];
	}


}

module.exports = Blog;