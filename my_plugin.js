/*
	这边就是我多年来编写无数项目总结出各种常用的方法 
	--> 如果直接写函数的名称，会造成变量污染的问题
	--> 所以这边选择去添加到 jQuery 框架中，避免了污染，而且也能够去对工具方法进行拓展
*/
$.extend({
	// 对于日志打印的扩展
	log:function(info){
		if(devModel){
			console.log(info); // 在项目发布后，不要再打印日志输出，因为性能问题
		}
	},
	// 对于颜色的随机
	randomColor:function(flag){
		var red = parseInt(Math.random()*255);
		var green = parseInt(Math.random()*255);
		var blue = parseInt(Math.random()*255);
		var alpha = Math.random();
		return flag
		?
		"rgba("+red+","+green+","+blue+","+alpha+")"
		:
		"rgb("+red+","+green+","+blue+")"
	},
	timeModel:function(time){
		var min = parseInt(time / 60);
		var sec = time % 60;
		min = min<10?("0"+min):min;
		sec = sec<10?("0"+sec):sec;
		return min + ":" + sec;
	},
	isPhone:function(){},
	isEmail:function(){}
});
