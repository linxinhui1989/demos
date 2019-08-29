jQuery.fn.slideshow = function(allImgs){
	var index = 0;
	var ul = this;
	// 根据给定的图片，动态创建出若干个li 以及 img
	$.each(allImgs,function(index,value){
		var child = "<li><img src="+value+" ></li>";
		ul.append(child);
	});
	// 设置先后顺序
	$("li").each(function(index,value){
		$(this).css({"z-index":20-index});
	});
	ul.css({"position":"relative"})
	ul.children().css({
		"position":"absolute",
		"left":0,
		"top":0
	});
	$("li").children().css({
		"width":ul.width(),
		"height":ul.height(),
	});
	// 再来进行自动切换的实现
	setInterval(function(){
		$("li").eq(index).animate({
			"left":-1*ul.width()
		},100,"linear",function(){
			index++;
			if(index>=allImgs.length){
				index = 0;
				$("li").css("left",0)
			}
		});
	},2000);
}