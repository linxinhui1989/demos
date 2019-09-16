let Category = require("../../model/Category.js");
module.exports = {
	async categoryList(req,res,next){
		res.render("back/category_list");
	},
	async add(req,res,next){
		let {category_name:categoryName} = req.body;
		let result = await Category.check({categoryName});
		if(result.length > 0){
			// 这个数据已经存在了，不可再添加
			res.send("已经存在，不可再添加了....")
		}else{
			let result = await Category.add({categoryName});
			res.send(result);
		}
	}
}
