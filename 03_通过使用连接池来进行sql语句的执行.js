// 读取外部第三方mysql模块
const mysql = require("mysql");
const pool  = mysql.createPool({
	  host      : 'localhost', // 域名
	  user      : 'root',	   // 数据库用户名	
	  password  : 'root',	   // 数据库对应的密码	
	  database  : 'mall'	   // 所选的数据库名称	
});
// 先通过创建出来的连接池对象，来进行连接对象的获取
let sql = `select * from goods`;
pool.getConnection((error,conn)=>{
	if (error) {throw error;}
	// 这边就获取到了对应的连接对象
	conn.query(sql,(error,data)=>{
		// sql语句执行完成后，释放连接对象
		conn.release();
		if(error){throw error;}
		console.log(data);
	});
});