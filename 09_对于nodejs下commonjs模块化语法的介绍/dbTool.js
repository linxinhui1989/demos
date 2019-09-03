let obj = {}
obj.find = async ()=>{
	console.log("find");
}

obj.del = (id)=>{
	console.log("del");
}

obj.clear = ()=>{
	console.log("clear");
}

module.exports = obj;