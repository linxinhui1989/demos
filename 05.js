let mysql = require("mysql");
pool = mysql.connectPool({});
pool.connection((error,con)=>{
	let name = '张三';
	let sql = `select boss_id from employ where name=${name}`;
	con.query(sql,(error,data)=>{
		let boss_id = data[0].boss_id;
		let sql2 = `select * from employ where id=${boss_id}`;
		con.query(sql2,(error,data)=>{
			// 老板是谁
		});
	})
});
pool.connection((error,con)=>{
	let name = '张三';
	let sql = `select d.name from employ e 
		left outer join employ d on e.boss_id=d.id where name=${name}`;
	con.query(sql,(error,data)=>{
		// 老板是谁
	});
});