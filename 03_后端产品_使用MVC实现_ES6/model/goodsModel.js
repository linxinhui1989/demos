const db = require("../components/db.js");
module.exports = {
	async goodList(){
		let sql = `select good.*,icon.img_src from 
		goods good INNER JOIN imgs icon ON good.id=icon.good_id 
		order by good.id asc`;
		return await db.q(sql);
	},
	async addGoodInfo({goodsname,price,des}){
		let sql = `insert into goods (name,des,price) values 
		("${goodsname}","${des}","${price}")`;
		return await db.q(sql);
	},
	async addGoodImgPath({newFileName,goodId}){
		let sql = `insert into imgs (img_src,good_id) values ("${newFileName}","${goodId}")`;
		await db.q(sql);
	}
}