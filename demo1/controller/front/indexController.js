const musicModel = require("../../model/musicModel.js");
module.exports = {
	/*后端登录成功后的首页面*/
	async home(ctx,next){
		let musics = await musicModel.getMusics(ctx);
		ctx.render("front/index",{musics})
	}
}