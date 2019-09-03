requirejs.config({
	// 这个baseUrl设置好之后，意味着对于模块的读取时，默认都是从 js 文件夹下开始
	baseUrl:"js",
	paths:{
		// 对于paths的配置，往往是用于常用的第三方库的配置
		"jquery":"jquery/jquery-3.4.1"
	}
});

require(["user/user","jquery"],(user,$)=>{
	console.log(user);
	$(".header-nav").html("xxxxxxxxxxxxx");
});
