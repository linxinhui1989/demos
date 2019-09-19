const Comment = require("../../model/Comment.js");
module.exports = {
	async home(req,res){
		let comments = await Comment.getLast();
		res.render('back/comment_list',{comments});
	},
	async del(req,res){
		await Comment.del(req.query);
		res.redirect("/back/comment");
	},
	async pass(req,res){
		await Comment.pass(req.query);
		res.redirect("/back/comment");
	}
}