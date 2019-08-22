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
function jsonp(options){
	// 在创建之前，先去根据id找到是否含有这个属性值的script，如果有，就把这个找到script删了，再动态创建；如果没有，那就动态创建
	var script = document.querySelector("#jp");
	if(script != null){
		document.body.removeChild(script);
	}
	// 1. 动态创建一个script标签
	script = document.createElement("script");
	// 1.1 为这个动态创建好的 script 元素添加一个 id 属性
	script.setAttribute("id","jp");
	var data = options.data || {};
	var cbName = options.cbName || "cb";
	var randomName = "jquery_" + (Math.random()+"").substr(2);
	var methodName = options.callbackName || randomName;
	// 有了这个函数名之后，再来进行函数的动态创建
	window[methodName] = options.success;
	// 将 cb 属性设置到 parmas这个 json 格式的对象上
	data[cbName] = methodName;
	var paramStr = joinParams(data);
	// 2. 为这个script元素设置 src 属性
	script.src = options.url + "?" + paramStr;
	// 3. 将 script 标签添加到页面上
	document.body.appendChild(script);
}