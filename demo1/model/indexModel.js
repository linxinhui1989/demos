let mdb = require("./mdb.js");
module.exports = {
	async doLogin(ctx){
		let {username,pwd} = ctx.request.body;
		// 根据这个用户名以及密码来数据库找那个查找是否含有满足添加的数据
		return await mdb.find({
			table:"user",
			where:{
				name:username,
				pwd
			}
		});
	}
}