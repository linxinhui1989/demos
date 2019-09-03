define(["jquery"],function($){
	$(".cart").html("<h1>测试购物车</h1>");
	return {
		name:"xxx的购物车",
		// 添加购物车
		add(){
			console.log("添加购物车");
		},
		del(id){
			console.log("删除购物车");
		},
		clear(){
			console.log("清空购物车");
		}
	}
});