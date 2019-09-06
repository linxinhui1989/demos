// 读取外部第三方mysql模块
const mysql = require("mysql");
// 使用mysql对象进行数据库的连接创建
const conn = mysql.createConnection({
   host     : 'localhost',
   user     : 'root',
   password : 'root',
   database : 'mall'
});
// 创建好连接对象后，进行数据库的连接操作
conn.connect();
// 数据库连接完成后，再来进行sql语句的执行操作
let sql = `select * from goods`;
conn.query(sql,(error,data)=>{
	if(error) throw error;
	console.log(data);
	// 数据读取完成后，关闭连接
	conn.end();
});