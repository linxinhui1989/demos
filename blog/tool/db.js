const mysql = require("mysql");
const {mysqlConfig} = require("../config.js");
const pool  = mysql.createPool(mysqlConfig);
let db = {};
// 通过连接池，获取连接对象，然后再来执行对应的sql语句
db.q = (sql)=>{
	return new Promise((resolve,reject)=>{
		pool.getConnection((error,conn)=>{
			if (error) {reject(error);}
			// 这边就获取到了对应的连接对象
			conn.query(sql,(error,data)=>{
				// sql语句执行完成后，释放连接对象
				conn.release();
				if(error){reject(error);}
				resolve(data);
			});
		});
	});
}
module.exports = db;

