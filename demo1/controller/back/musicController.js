const musicModel = require("../../model/musicModel.js");
const path = require("path");
const fs = require("fs");
module.exports = {
	/*后端音乐列表页面*/
	async musicList(ctx,next){
		let musics = await musicModel.getMusics(ctx);
		ctx.render("back/music-list",{musics});
	},
	/*后端音乐添加页面*/
	async musicAdd(ctx,next){
		ctx.render("back/music-add")
	},
	/*结合ajax的上传文件的操作*/
	async musicDoAdd(ctx,next){
		let {music_singer:singer} = ctx.request.body;
		let result = await musicModel.insertData(ctx);
		let id = result.insertedId
		let files = ctx.files;
		for(let i = 0;i<files.length;i++){
			let file = files[i];
			let fieldName = file.fieldname;
			console.log(file)
			// 获取文件后缀
			let ext = path.extname(file.originalname);
			let newPathName = file.path + ext;
			// 要将已经保存到了uploads文件夹下的文件进行改名字
			fs.rename(file.path,newPathName,(error,data)=>{});
			// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
			let newFileName = file.filename + ext;
			await musicModel.update({newFileName,id,fieldName});
		}
		let obj = {success:1,error:0,msg:"添加成功"};
		ctx.body = obj;
	},
	/*后端音乐的具体添加操作*/
	async musicDoAdd1(ctx,next){
		let {music_singer:singer} = ctx.request.body;
		let result = await musicModel.insertData(ctx);
		let id = result.insertedId
		let files = ctx.files;
		for(let i = 0;i<files.length;i++){
			let file = files[i];
			let fieldName = file.fieldname;
			console.log(file)
			// 获取文件后缀
			let ext = path.extname(file.originalname);
			let newPathName = file.path + ext;
			// 要将已经保存到了uploads文件夹下的文件进行改名字
			fs.rename(file.path,newPathName,(error,data)=>{});
			// 当名字修改好后，再来将这个图片的存放路径保存到数据库中
			let newFileName = file.filename + ext;
			await musicModel.update({newFileName,id,fieldName});
		}
		ctx.redirect("/back/music-list")
	},
	/*音乐删除*/
	async musicDel(ctx,next){
		let {id} = ctx.request.body;
		console.log("id = " + id)
		let reg = /\"(\w+)\"/g;
		let result = reg.exec(id);
		console.log("xxxxxxxxxxx")
		console.log(result)
		await musicModel.del({id});
		ctx.redirect("/back/music-list");
	}
}
