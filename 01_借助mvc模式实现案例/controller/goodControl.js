const goodModel = require("../model/goodModel.js");
const ejsTool = require("../tools/template.js");
const url = require("url");
const qs = require("querystring");
module.exports = {
	async show(res){
		// 产品列表数据来自于数据库
		let tempObj = await goodModel.getGoods("select * from goods");
		// 直接使用ejs模块中提供的方法来进行渲染
		let data = await ejsTool.render("./public/goodlist.html",
				{goods:tempObj});
		res.write(data);
		res.end();
	},
	async add(req,res){
		let params = "";
		// 进行产品数据的添加
		req.on("data",(data)=>{
			params += data;
		});
		req.on("end",async ()=>{
			let paramsObj = qs.parse(params);
			/*
				这个是提交过来的新数据，需要插入到数据库中
			*/
			let sql = `insert into goods (name,price) 
				values ("${paramsObj.name}","${paramsObj.price}")`;
			await goodModel.insertGood(sql);
			// this.show(res);
			res.writeHead(301, 
				{'Location': 'http://localhost:8080/goodlist'});
			res.end();
		})
	},
	async update(req,res){
		let params = "";
		// 进行产品数据的添加
		req.on("data",(data)=>{
			params += data;
		});
		req.on("end",async ()=>{
			let paramsObj = qs.parse(params);
			/*
				这个是提交过来的新数据，需要插入到数据库中
			*/
			let sql = `update goods set price="${paramsObj.price}" 
			where name="${paramsObj.name}"`;
			await goodModel.updateGood(sql);
			this.show(res);
			/*res.writeHead(301, {'Location': 'http://localhost:8080/goodlist'});
			res.end();*/
		})
	},
	async delete(req,res){
		let query = url.parse(req.url).query;
		let id = qs.parse(query).id;
		await goodModel.deleteGood(`delete from goods where id = ${id}`);
		res.writeHead(301, 
				{'Location': 'http://localhost:8080/goodlist/'});
		res.end();
	},
	init(req,res){
		let pathName = url.parse(req.url).pathname;
		let method = req.method.toLowerCase();

		if(method == "get" && pathName == "/goodlist"){
			this.show(res);
		}

		// 对于添加
		if(pathName.indexOf("add") != -1){
			this.add(req,res);
		}
		// 对于修改
		if(pathName.indexOf("update") != -1){
			this.update(req,res);
		}
		// update
		if(pathName.indexOf("delete") != -1){
			this.delete(req,res);
		}

	}
}