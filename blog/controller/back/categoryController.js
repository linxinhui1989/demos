let Category = require("../../model/Category.js");
let {pageCount} = require("../../config.js");
module.exports = {
	async categoryList(req,res,next){
		let pageNum = req.query.page || 0;
		let count = await Category.count();
		let {count:allCount} = count[0];
		let categoryList = await Category.list(pageNum*pageCount,pageCount);
		let counts = [];
		for(let i=0;i<Math.ceil(allCount/pageCount);i++){
			counts.push(i);
		}
		res.render("back/category_list",{
			categoryList,
			counts,
			pageNum
		});
	},
	async add(req,res,next){
		let {id} = req.body;
		let {category_name:categoryName} = req.body;
		let obj = {};
		if(id==undefined || id==""){
			let result = await Category.check({categoryName});
			if(result.length > 0){
				// 这个数据已经存在了，不可再添加
				obj = {success:0,msg:"这个数据已经存在了，不可再添加"}
			}else{
				let result = await Category.add({categoryName});
				obj = {success:1,msg:"添加成功"}
			}
		}else{
			await Category.edit({id,categoryName})
			obj = {success:1,msg:"修改成功"}
		}
		res.send(obj);
	},
	async del(req,res){
		let {id} = req.query;
		await Category.del({id});
		// 再来重新刷新页面
		res.redirect("/back/category");
	},
	async edit(req,res){
		let {id} = req.query;
		let categoryObjs = await Category.showEdit({id});
		let categoryObj = categoryObjs[0];
		res.render("back/category_edit",{categoryObj:categoryObj});
	}
}
