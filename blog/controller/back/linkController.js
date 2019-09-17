let md5 = require("../../tool/md5.js");
let Link = require("../../model/Link.js");
module.exports = {
	async list(req,res){
		let links = await Link.list();
		res.render("back/link_list",{links});
	},
	async del(req,res){
		let {id} = req.query;
		await Link.del({id});
		// 再来重新刷新页面
		res.redirect("/back/link");
	},
	async add(req,res,next){
		let {id} = req.body;
		let {link_name:linkName,link_url:linkUrl} = req.body;
		let obj = {};
		if(id==undefined || id==""){
			let result = await Link.check({linkName});
			if(result.length > 0){
				// 这个数据已经存在了，不可再添加
				obj = {success:0,msg:"这个数据已经存在了，不可再添加"}
			}else{
				let result = await Link.add({linkName,linkUrl});
				obj = {success:1,msg:"添加成功"}
			}
		}else{
			await Link.edit({id,linkName,linkUrl})
			obj = {success:1,msg:"修改成功"}
		}
		res.send(obj);
	},
	async edit(req,res){
		let {id} = req.query;
		let linkObjs = await Link.showEdit({id});
		let linkObj = linkObjs[0];
		res.render("back/link_edit",{linkObj:linkObj});
	}
}