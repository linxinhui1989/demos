const Hottag = require("../../model/Hottag.js")
module.exports = {
	async home(req,res){
		let hottags = await Hottag.hotList();
		res.render("back/hot_list",{hottags});
	}
}