var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {  }, function(err, db) {
  if (err) throw err;
  let dbo = db.db("music"); // 连接对应名称的数据库
  let obj = {name:"lilei",age:33};
  dbo.collection("singer").insertOne(obj,(error,data)=>{
  	if (err) throw err;
    console.log("文档插入成功");
    db.close();
  });
});

MongoClient.connect(url, {  }, function(err, db) {
  if (err) throw err;
  let dbo = db.db("music"); // 连接对应名称的数据库
  let obj = {name:"lilei",age:33};
  dbo.collection("singer").findOne(obj,(error,result)=>{
  	if (err) throw err;
    console.log("文档插入成功");
    db.close();
  });
});


