function ajax(options){
	// 1. 创建请求对象
	var req = new XMLHttpRequest();
	// 2. 设定请求发送的方式以及请求所对应的url
	var data = options.data || {};
	var paramsStr = joinParams(data);
	// 2.1 需要去判断请求的类型，是get还是post
	var method = options.method || "GET";
	// 将请求方法字符串都设置为大写
	method = method.toUpperCase();
	if(method == "GET"){
		var url = options.url + "?" + paramsStr;
		req.open(method,url,true);
		req.send();
	}else{
		req.open(method,options.url,true);
		req.setRequestHeader("CONTENT-TYPE","application/x-www-form-urlencoded");
		req.send(paramsStr);
	}
	// 对于状态改变时的操作
	req.onreadystatechange = function(){
		if(req.readyState == 4){
			if(req.status == 200){
				options.success(req);
			}else{
				options.fail();
			}
		}
	}
}
function joinParams(params){
	// 获取对应的当前时间
	var date = new Date();
	// 获取对应的随机数
	var randomNum = Math.random() + "";
	randomNum = randomNum.substr(2);
	// 将这个当前时间戳 以及 随机数 进行拼接，赋值给 params 上的名为 _ 的变量里，这样就能极大程度避免了 url 的重复
	params["_"] = date.getTime() + "_" + randomNum;
	var str = "";
	for(var key in params){
		str += key+"="+params[key] + "&";
	}
	str = str.substr(0,str.length-1);
	return str;
}