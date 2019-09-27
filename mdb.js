let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

let database = "music";

let obj = {};

obj.insert = (json)=>{
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, {  }, function(err, db) {
		  if (err) reject(err);
		  let dbo = db.db(database); // 连接对应名称的数据库
		  dbo.collection(json.table).insertOne(json.data,(error,data)=>{
		  	 if (error) reject(error);
		     resolve("插入成功");
		     db.close();
		  });
		});
	})
}

obj.update = (json)=>{
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, {}, function(err, db) {
		  if (err) reject(err);
		  let dbo = db.db(database); // 连接对应名称的数据库
		  dbo.collection(json.table).updateOne(json.where,{$set:json.update},(error,data)=>{
		  	 if (error) reject(error);
		     resolve(data);
		     db.close();
		  });
		});
	})
}

obj.delete = (json)=>{
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, {}, function(err, db) {
		  if (err) reject(err);
		  let dbo = db.db(database); // 连接对应名称的数据库
		  json.type?dbo.collection(json.table).deleteMany(json.where,(error,data)=>{
		  	 if (error) reject(error);
		     resolve(data);
		     db.close();
		  }):dbo.collection(json.table).deleteOne(json.where,(error,data)=>{
		  	 if (error) reject(error);
		     resolve(data);
		     db.close();
		  });
		});
	})
}

obj.find = (json)=>{
	return new Promise((resolve,reject)=>{
		MongoClient.connect(url, {  }, function(err, db) {
		  if (err) reject(err);
		  let dbo = db.db(database); // 连接对应名称的数据库
		  json.limit?dbo.collection(json.table)
		  	.find(json.where)
		  	.sort(json.sort)
		  	.limit(json.limit)
		  	.skip(json.skip).toArray(function(err, data) {
			      if (err) reject(err);
			  	  resolve(data);
			      db.close();
		  }):dbo.collection(json.table)
		  	.find(json.where)
		  	.sort(json.sort).toArray(function(err, data) {
			      if (err) reject(err);
			  	  resolve(data);
			      db.close();
		  })
		});
	})
}


module.exports = obj;






















