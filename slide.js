/**
 * [slide description]
 * @param  {[type]} options [用于传入轮播控制的参数]
*          imgs:图片路径
*          normalColor：指示器默认颜色
*          activeColor：指示器选中后的颜色         
*          indW：指示器宽度
*          indeH：指示器高度
*          showIndicator：是否显示指示器
*          duration：自动播放的间隔时间
*          animateType：动画特效   fade  slide  show     
 * @return {[type]}         [description]
 */
jQuery.fn.slide = function(options){
	var box = this;
	// 先对于 options 进行个判断
	options = options || {};
	var imgs = options.imgs || ["./images/1.jpg","./images/2.png","./images/3.jpg"];
	var normalColor = options.normalColor || "green";
	var activeColor = options.activeColor || "blue";
	var indW = options.indW || 20;
	var indH = options.indH || 20;
	var showIndicator = options.showIndicator || true;
	if(options.showIndicator != undefined && options.showIndicator == false){
		showIndicator = false;
	}
	var duration = options.duration || 3000;
	var autoplay = options.autoplay || true;
	if(options.autoplay != undefined && options.autoplay == false){
		autoplay = false;
	}
	var animateType = options.animateType || "slide";
	// 2. 进行轮播图上的ul的创建
	var ulIcons = "<ul class='ulIcons'></ul>";
	box.append(ulIcons);
	// 2.1 为轮播图上的ul，再来根据给定的图片资源，动态创建出若干个 li 以及 img 元素
	$.each(imgs,function(index,value){
		// 2.2 在这个each函数中，进行li 以及 img 元素的动态创建
		var ele = '<li><img src="'+value+'" /></li>';
		box.find(".ulIcons").append(ele);
	});
	// 2.3 为ul 以及 li 设置对应的基础样式
	box.find(".ulIcons").css(
		{
			"width":box.width(),
			"height":box.height(),
			"position":"relative"
	});
	box.find(".ulIcons").children("li").css({
		"width":box.width(),
		"height":box.height(),
		"position":"absolute",
		"left":0,
		"top":0
	}).children().css({
		"width":box.width(),
		"height":box.height()
	});

	// 对于 li 上的 z-index 进行动态设置，避免最后添加的li遮盖前面的li
	box.find(".ulIcons").children("li").each(function(index,value){
		$(this).css({
			"z-index":2*imgs.length-index
		});
	});

	// 3. 根据图片资源，动态创建轮播图指示器
	var indicatorUl = "<ul class='indicators'></ul>";
	showIndicator?box.append(indicatorUl):"";
	// 3.1 再来动态创建li，并添加到indicatorUl上
	$.each(imgs,function(index,value){
		var indicator = "<li></li>";
		box.find(".indicators").append(indicator);
	});
	// 3.2 设置ul以及li的属性
	box.find(".indicators").children().css({
		"float":"left",
		"width":indW,
		"height":indH,
		"background-color":normalColor,
		"margin-right":10,
		"border-radius":"50%",
		"cursor":"pointer"
	});
	box.css({"position":"relative"}).find(".indicators").css({
		"width":(indW+10)*imgs.length,
		"position":"absolute",
		"left":"50%",
		"bottom":"20px",
		"margin-left":-1*(indW+10)*imgs.length/2,
		"z-index":5*imgs.length
	});
	// 4. 动态创建左右两侧的控制按钮
	var ctrlDiv = "<div class='ctrls'></div>";
	box.append(ctrlDiv);
	// 4.2 创建按钮
	box.find(".ctrls").append("<p class='prev'></p>");
	box.find(".ctrls").append("<p class='next'></p>");
	box.find(".prev").css({
		"position":"absolute",
		"cursor":"pointer",
		"left":0,
		"top":0,
		"width":30,
		"height":60,
		"background-color":"rgba(0,0,0,0.3)"
	});
	box.find(".next").css({
		"position":"absolute",
		"cursor":"pointer",
		"right":0,
		"top":0,
		"width":30,
		"height":60,
		"background-color":"rgba(0,0,0,0.3)"
	});
	// 4.3 设置按钮的基础样式
	box.find(".ctrls").css({
		"width":box.width(),
		"height":box.find(".next").height(),
		"position":"absolute",
		"left":0,
		"top":"50%",
		"margin-top":-1*box.find(".next").height()/2,
		"z-index":3*imgs.length
	});
	
	// 要有下标去表示轮播图所在的具体位置
	var currentIndex = 0;
	indicatorAct();
	// 5. 通过左右两侧的按钮，去实现轮播图的切换
	$(".next").on("click",function(){
		animateType=="slide"?$(".ulIcons li").eq(currentIndex).slideUp(500,function(){
			currentIndex++;
			indicatorAct();
		}):$(".ulIcons li").eq(currentIndex).fadeOut(500,function(){
			currentIndex++;
			indicatorAct();
		});
	});
	$(".prev").on("click",function(){
		currentIndex--;
		animateType=="slide"?$(".ulIcons li").eq(currentIndex).slideDown(500,function(){
			indicatorAct();
		}):$(".ulIcons li").eq(currentIndex).fadeIn(500,function(){
			indicatorAct();
		});
	});
	
	// 6. 添加指示器的触摸修改
	$(".indicators li").on("mouseover",function(){
		currentIndex = $(this).index();
		animateType=="slide"?$(".ulIcons li").eq(currentIndex).stop().slideDown(500,function(){
				indicatorAct();
			}).siblings().stop().slideUp(500):$(".ulIcons li").eq(currentIndex).stop().slideDown(500,function(){
				indicatorAct();
			}).siblings().stop().fadeOut(500);
	});
	
	// 对于指示器颜色的切换
	function indicatorAct(){
		$(".indicators li").eq(currentIndex).css({
			"background-color":activeColor
		}).siblings().css({
			"background-color":normalColor
		});
	}

	// 添加自动滚动的实现
	autoplay?setInterval(function(){
		animateType=="slide"?$(".ulIcons li").eq(currentIndex).slideUp(500,function(){
			currentIndex++;
			indicatorAct();
		}):$(".ulIcons li").eq(currentIndex).fadeOut(500,function(){
			currentIndex++;
			indicatorAct();
		});
	},duration):"";
}