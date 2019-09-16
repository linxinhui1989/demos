let Category = require("../../model/Category.js");
module.exports = {
	async categoryList(req,res,next){
		let categoryList = await Category.list();
		res.render("back/category_list",{categoryList});
	},
	async add(req,res,next){
		let {category_name:categoryName} = req.body;
		let result = await Category.check({categoryName});
		let obj = {};
		if(result.length > 0){
			// 这个数据已经存在了，不可再添加
			obj = {success:0,msg:"这个数据已经存在了，不可再添加"}
		}else{
			let result = await Category.add({categoryName});
			obj = {success:1,msg:"添加成功"}
		}
		res.send(obj);
	},
	async del(req,res){
		let {id} = req.query;
		await Category.del({id});
		// 再来重新刷新页面
		res.redirect("/back/category");
	}
}
