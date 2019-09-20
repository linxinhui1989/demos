let db = require("../tool/db.js");
class Comment{
	static instance(){
		if(Comment.Instance == null){
			Comment.Instance = new Comment();
		}
		return Comment.Instance;
	}

	/*对于评论的添加*/
	static async addComment({msg,nickname,time,id}){
		let sql;
		if(id=="" || id==undefined){
			sql = `insert into comment (msg,nickname,time) values 
		('${msg}',"${nickname}","${time}")`;
		}else{
			sql = `insert into article_comment (msg,nickname,time,blog_id) values 
		('${msg}',"${nickname}","${time}","${id}")`;
		}
		console.log("sql = " + sql)
		return await db.q(sql);
	}

	/*获取总的评论数*/
	static async getPassedNum(){
		let sql = `select count(*) as count from comment`;
		let results = await db.q(sql);
		return results[0].count;
	}
	
	/*获取通过审核的评论*/
	static async getPassedLast({startNum,num}){
		let sql;
		if(startNum=="" || startNum == undefined || num=="" || num==undefined){
			sql = `select * from comment where is_pass = 1 order by id desc`;
		}else{
			sql = `select * from comment where is_pass = 1 limit ${startNum},${num}`;
		}
		return await db.q(sql);
	}

	/*获取最新的评论*/
	static async getLast(){
		let sql = `select * from comment order by id desc`;
		return await db.q(sql);
	}

	/*删除指定评论*/
	static async del({id}){
		let sql = `delete from comment where id="${id}"`
		await db.q(sql);
	}

	/*设置指定评论通过*/
	static async pass({id}){
		let sql = `update comment set is_pass = 1 where id="${id}"`
		await db.q(sql);
	}

	/*获取指定文章的总评论数*/
	static async getArticlePassedNum(id){
		let sql = `select count(*) as count from article_comment where 
		blog_id="${id}"`;
		let results = await db.q(sql);
		return results[0].count;
	}

	/*获取指定文章的评论*/
	static async getArticlePassedLast({startNum,num,id}){
		let sql;
		if(startNum=="" || startNum == undefined || num=="" || num==undefined){
			sql = `select * from article_comment where is_pass = 1 where blog_id="${id}"
			 order by id desc`;
		}else{
			sql = `select * from article_comment where is_pass = 1 and blog_id="${id}"
			 order by id desc limit ${startNum},${num}`;
		}
		return await db.q(sql);
	}
}

module.exports = Comment;