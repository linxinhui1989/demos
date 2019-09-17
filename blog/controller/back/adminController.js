const Admin = require("../../model/Admin.js");
const md5 = require("../../tool/md5.js");
module.exports = {
	/*列表显示出所有信息*/
	async home(req,res){
		let admins = await Admin.allList();
		res.render('back/admin_list',{admins,username:req.session.user})
	},
	/*添加管理员*/
	async add(req,res){
		res.render('back/admin_add');
	},
	async doAdd(req,res){
		let {name,pwd,id} = req.body;
		pwd = md5(pwd);
		let act = (id==""||id==undefined)?"add":"edit";
		let result1 = await Admin.checkAdmin({name});
		let result = {};
		if(act=="add"){
			if(result1.length>0){
				result = {success:0,msg:"这个用户已经存在了，不可再添加"}
			}else{
				await Admin.doAdd({name,pwd});
				result = {success:1,msg:"添加成功"}
			}
		}else{
			// 根据给定的id进行相对应的修改
			await Admin.doEdit({name,pwd,id});			
			result = {success:1,msg:"修改成功"}
		}
		res.send(result);
	},
	/*编辑管理员*/
	async edit(req,res){
		let {id} = req.query;
		let adminObj = await Admin.showEdit({id});
		res.render("back/admin_edit",{adminObj:adminObj,username:req.session.user});
	},

	/*删除管理员*/
	async del(req,res){
		let {id} = req.query;
		await Admin.del({id});
		// 再来重新刷新页面
		res.redirect("/back/admin");
	}
}