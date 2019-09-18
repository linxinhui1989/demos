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
	
	/*获取最新的评论*/
	static async getLast(){
		let sql = `select * from comment`;
		return await db.q(sql);
	}

}

module.exports = Comment;