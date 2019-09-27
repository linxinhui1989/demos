const indexModel = require("../../model/indexModel.js");
module.exports = {
	/*后端登录成功后的首页面*/
	async home(ctx,next){
		ctx.render("back/index")
	},
	/*后端登录页面*/
	async login(ctx,next){
		ctx.render("back/login")
	},
	/*后端登录操作*/
	async doLogin(ctx,next){
		let result = await indexModel.doLogin(ctx);
		if(result.length>0){
			// 成功
			ctx.session.user = ctx.request.body.username;
			ctx.redirect("/back")
		}else{
			// 失败
			ctx.redirect("/back/login")
		}
	},
	/*退出登录*/
	async logout(ctx,next){
		ctx.session.user = "";
		ctx.redirect("/back/login");
	}
}