const fs = require("fs");
const path = require("path");
const goodsModel = require("../model/goodsModel.js");

module.exports = {
	async getGoodList(req,res){
		let goods = await goodsModel.goodList();
		res.render("goods.html",{goods:goods});
	},
	async addGood(req,res){
		const {goodsname,price,des} = req.body;
		let good = await goodsModel.addGoodInfo(req.body);
		let goodId = good.insertId;
		let files = req.files;
		for(let index in files){
			console.log(files[index]);
			let file = files[index];
			// 获取文件后缀
			let ext = path.extname(file.originalname);
			let newPathName = file.path + ext;
			// 要将已经保存到了uploads文件夹下的文件进行改名字
			fs.rename(file.path,newPathName,(error,data)=>{});
			// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
			let newFileName = file.filename + ext;
			await goodsModel.addGoodImgPath({newFileName,goodId});
		}
		// 插入成功后，重定向到index首页面
		res.redirect("/");
	}
}