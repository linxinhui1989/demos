$(function(){
	// 对Swiper进行初始化操作
	var swiper = new Swiper('.swiper-container', {
	  // 代码中设置方向
	  direction: 'vertical',
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },
	  // 设置是否可实现滚轮滚动特效
	  mousewheel: true,
	});
	// 点击实现中英切换
	var current = 0;
	$(".switch").on("click",function(){
		current ++;
		$(".switch .cover").animate({
			"left":(current%2?30:0)
		},function(){
			$(".switch .zh").css({color:(current%2?"rgba(0,0,0,.3)":"#fff")});
			$(".switch .en").css({color:(current%2?"#fff":"rgba(0,0,0,.3)")});
		});
	});
	// 通过书写 js 代码，去实现转动的操作
	$(".experience .carousel").css({
		"-webkit-perspective":1000
	});
	$(".experience .carousel .ad-detail").hover(function(event){
		// rotateY(5deg) rotateY(-5deg)  rotateX(5deg) rotateX(-5deg) 
		var transformV = "rotateY(5deg)";
		$(".experience .carousel .ad-detail").css({
			"transform":"rotateY(5deg)",
			"transition": "transform 1s",
			"transform-style": "preserve-3d"
		});
	},function(){
		$(".experience .carousel .ad-detail").css({
			"transform":"rotateY(0deg) rotateX(0deg)",
			"transition": "transform 1s",
			"transform-style": "preserve-3d"
		});
	});
});