/*数据插入*/
/*(async ()=>{
	let mdb = require("./mdb.js");
	let result = await mdb.insert({
		table:"singer",
		data:{
			name:"lucy",age:40,sex:"woman",email:"xxx@qq.com"
		}
	});
	console.log("result = " + result)
})();*/

/*数据修改*/
/*(async ()=>{
	let mdb = require("./mdb.js");
	let result = await mdb.update({
		table:"singer",
		where:{age:40},
		update:{name:"李磊&韩梅梅"}
	});
	console.log("result = " + result)
})();
*/
/*数据删除*/
/*(async ()=>{
	let mdb = require("./mdb.js");
	let result = await mdb.delete({
		table:"singer",
		where:{name:"lilei"}
	});
	console.log("result = " + result)
})();*/
/*查找数据*/
(async ()=>{
	let mdb = require("./mdb.js");
	let result = await mdb.find({
		table:"singer",
		where:{},
		sort:{age:1},
		skip:1,
		limit:3
	});
	console.log(result.length)
	console.log(result)
})();