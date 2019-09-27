let mdb = require("./mdb.js");
module.exports = {
	async getMusics(ctx){
		let {username,pwd} = ctx.request.body;
		// 根据这个用户名以及密码来数据库找那个查找是否含有满足添加的数据
		return await mdb.find({
			table:"music"
		});
	},
	async insertData(ctx){
		let {music_singer:singer} = ctx.request.body;
		// 根据这个用户名以及密码来数据库找那个查找是否含有满足添加的数据
		return await mdb.insert({
			table:"music",
			data:{
				singer:singer
			}
		});
	},
	async update({newFileName,id,fieldName}){
		let u = {};
		u[fieldName] = newFileName;
		await mdb.update({
			table:"music",
			where:{_id:id},
			update:u
		});
	},
	async del({id}){
		await mdb.delete({
			table:"music",
			where:{
				_id:id
			}
		})
	}
}