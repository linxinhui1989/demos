let db = require("../tool/db.js");
class Comment{
	static instance(){
		if(Comment.Instance == null){
			Comment.Instance = new Comment();
		}
		return Comment.Instance;
	}

	/*对于评论的添加*/
	static async addComment({msg,nickname,time}){
		let sql = `insert into comment (msg,nickname,time) values 
		('${msg}',"${nickname}","${time}")`;
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
}

module.exports = Comment;