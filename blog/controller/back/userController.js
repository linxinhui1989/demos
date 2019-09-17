let User = require("../../model/User.js");
let md5 = require("../../tool/md5.js");
module.exports = {
	// 对于登录操作的实现
	async login(req,res){
		let {username,password} = req.body;
		password = md5(password);
		let result = await User.login({username,password});
		if(result.length == 0){
			res.redirect("/back/login");
		}else{
			req.session.user = username;
			res.redirect("/back");
		}
	},
	// 对于登录成功后的首页面的显示
	async index(req,res){
		let username = req.session.user;
		res.render("back/index",{username});
	},
	// 对于退出登录操作的实现
	async logout(req,res){
		req.session.user = "";
		res.redirect("/back/login")
	}
}