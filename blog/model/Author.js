let db = require("../tool/db.js");
class Author{
	static instance(){
		if(Author.Instance == null){
			Author.Instance = new Author();
		}
		return Author.Instance;
	}

	static async authorList(){
		let sql = `select * from author`;
		return await db.q(sql);
	}

	static async addAvtor({newFileName,id}){
		let sql = `update author set avtor="${newFileName}" where id="${id}"`;
		return await db.q(sql);
	}

	static async addInfo({author_name,author_age,author_qq,author_webo,author_email,author_introduce
		,author_sex}){
		let sql = `insert into author (name,age,qq,webo,email,introduce,sex) values
		 ("${author_name}","${author_age}","${author_qq}","${author_webo}",
		 "${author_email}","${author_introduce}","${author_sex}")`;
		return await db.q(sql);
	}
}

module.exports = Author;