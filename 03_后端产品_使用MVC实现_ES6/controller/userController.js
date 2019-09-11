let userController = {};
let User = require("../model/User.js");
let md5 = require("../components/md5.js");
userController.index = async(req,res)=>{
	res.render("index.html",{user:req.session.user});
}

userController.getLogin = async(req,res)=>{
	res.render("login.html",{});
}

userController.doLogin = async(req,res)=>{
	// 获取得到post请求传递过来的参数
	let {username,pwd} = req.body;
	pwd = md5(pwd);
	let result = await User.toLogin({username,pwd});
	if(result.length == 0){
		res.redirect("/login");
	}else{
		req.session.user = username;
		res.redirect("/");
	}
}

userController.logout = async(req,res)=>{
	req.session.user = "";
	res.redirect("/login");
}

module.exports = userController;