;(async ()=>{
	console.log("a");
	let b = await new Promise((resolve,reject)=>{
		setTimeout(function(){
			resolve("b");
		},1000);
	});
	console.log(b);
	console.log("c");
})();