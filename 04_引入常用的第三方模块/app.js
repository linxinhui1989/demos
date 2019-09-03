// 关于 requirejs 下配置属性的介绍
requirejs.config({
	paths:{
		"jquery":"jquery-3.4.1"
	}
});
require(["jquery","cart","goods"],function($,cart,goods){
	/*
	关于第三方库的引入时，往往会带有对应的版本号，如果使用单纯的 require引入时，需要将
	版本号去除，然后再在 require 中进行引入
	 */ 
	console.log($);
	$("p").html("测试显示");
});