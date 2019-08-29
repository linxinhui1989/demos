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
	// 触摸发生时，使得广告图进行翻转
	$(".experience .carousel .ad-detail").on("mousemove",function(){
		// 1. 获取到当前触摸点，在 .ad-detail div 上的位置
		var x = event.clientX - $(".ad-detail").offset().left;
		var y = event.clientY - $(".ad-detail").offset().top;
		var transformV;
		if(x<200){
			transformV = "rotateY(-7deg)"
		}else if(x>600){
			transformV = "rotateY(7deg)"
		}else if(x>=200&&x<=600&&y<170){
			transformV = "rotateX(7deg)"
		}else if(x>=200&&x<=600&&y>=170){
			transformV = "rotateX(-7deg)"
		}
		$(".experience .carousel .ad-detail").css({
			"transform":transformV,
			"transition": "transform 1s",
			"transform-style": "preserve-3d"
		});
	});
	// 触摸离开时，使得transform设置回原来位置
	$(".experience .carousel .ad-detail").on("mouseleave",function(){
		$(".experience .carousel .ad-detail").css({
			"transform":"rotateY(0deg) rotateX(0deg)",
			"transition": "transform 1s",
			"transform-style": "preserve-3d"
		});
	});

	// 点击指示器时，实现页面内容的切换
	var adIndex = 0;
	var adDatas = [
		{
			icon:"../images/jmyp.png",
			gs:"聚美优品（成都）",
			zhiwei:"资深前端工程师/前端负责人",
			time:"2017年4月~至今",
			info1:"负责聚美优品电商及增长FE团队的日常工作",
			info2:"参与街电CRM开发，美点无人货架C/S开发等",
			info3:"主导开发聚美等若干小程序/快应用及增长活动",
			info4:"优化重构聚美底层若干库如jumei-sdk等"
		},
		{
			icon:"../images/lantu.png",
			gs:"兰途科技",
			zhiwei:"web前端研发工程师",
			time:"2015年6月-2017年4月",
			info1:"负责高校校园移动APP相关的H5混合开发",
			info2:"负责快速构建高质量移动APP/PC/微信页面",
			info3:"根据业务需求设计合适的工程项目",
			info4:"高度组件化、模块化思维，拥有各平台调试能力"
		},
		{
			icon:"../images/zhuohuang.png",
			gs:"聚美优品（成都）",
			zhiwei:"资深前端工程师/前端负责人",
			time:"2017年4月~至今",
			info1:"负责聚美优品电商及增长FE团队的日常工作",
			info2:"参与街电CRM开发，美点无人货架C/S开发等",
			info3:"主导开发聚美等若干小程序/快应用及增长活动",
			info4:"优化重构聚美底层若干库如jumei-sdk等"
		}
	];
	$(".carousel .indicators p").on("click",function(){
		var index = $(this).index();
		var data = adDatas[index];
		$(".ad-detail .logo,.ad-detail .info").animate({
			"opacity":0.3
		},1000,function(){
			$(".carousel .indicators p").eq(index).addClass("selected")
				.siblings().removeClass("selected");
			var str = "";
				str += '<div class="logo">';
			   	  str += '<div class="icon"></div>';
			   	  str += '<h4>'+data.gs+'</h4>';
			   	  str += '<p>'+data.zhiwei+'</p>';
			   str += '</div>';
			   str += '<div class="info">';
			   	  str += '<h4>'+data.time+'</h4>';
			   	  str += '<p>'+data.info1+'</p>';
			   	  str += '<p>'+data.info2+'</p>';
			   	  str += '<p>'+data.info3+'</p>';
			   	  str += '<p>'+data.info4+'</p>';
			   str += '</div>';
			   $(".ad-detail").html(str); 
			   $(".ad-detail .logo,.ad-detail .info").css({opacity:0.3})
			   $(".ad-detail .logo,.ad-detail .info").animate({
					"opacity":1
			   },1000);
		});
	});
});

// 对于页面四上的特效处理
$(function(){
	// 准备显示所需的数据
	var datas = [
		{
			title:"黑米商场",
			info:"Vue全家桶实现的电商平台Vue全家桶实现的电商平台Vue全家桶实现的电商平台Vue全家桶实现的电商平台",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序2",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序3",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序4",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序5",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序6",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序7",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序8",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序9",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		},
		{
			title:"聚美优品+ 小程序10",
			info:"聚美优品+小程序是聚美集团电商业务在微信小程序上的实现，包括普通商品，拼团商品的销售流程及购物流程、用户中心等模块。",
			icon:"./images/jumei.jpg",
			notice:"（微信内长按识别）"
		}
	];
	// 通过for循环，进行动态生成li元素，并设置到 ul 上
	var str = "";
	for(var i in datas){
		var data = datas[i];
		str += '<li>';
  	  	   str += '<h4>'+data.title+'</h4>';
  	  	   str += '<p class="info">'+data.info+'</p>';
  	  	   str += '<img src="'+data.icon+'" alt="">';
  	  	   str += '<p class="notice">'+data.notice+'</p>';
  	    str += '</li>';
	}
	$(".center").html(str);
	// 此时li都已经加载到 ul 上了，所以这边就可以对于 ul 上的 li 进行属性设置
	var animationData = [];
	$.each($(".center li"),function(index,ele){
		var liScale = 1 - index*0.05;
		$(ele).css({transform:"scale("+liScale+")"});
		var w = $(".center").width();
		var h = $(".center").height();
		// var liW = w - index*10;
		var liH = $(ele).outerHeight();
		var liZIndex = 200 - index*3;
		var liLeft = index*25;
		animationData.push({
			"transform":"scale("+liScale+")",
			"z-index":liZIndex,
			"left":liLeft,
			"top":"50%",
			"margin-top":-1*liH/2
		});
		$(ele).css({
			"z-index":liZIndex,
			"left":liLeft,
			"top":"50%",
			"margin-top":-1*liH/2			
		});
	});
	// 点击发生时，使得列表动起来
	$(".works .ctrls .next").on("click",function(){
		// 使得右侧最少能保留最后的一个li
		if($(".center li").length == 1){ return; }
		// .center 列表中的第一个元素，向左运动，运动结束后，再设置到 .left列表上
		run(1);
		$(".center li").eq(0).stop().animate({
			"left":($(".center li").eq(0).outerWidth() + 10) * -1
		},500,function(){
			$(".center li").eq(0).css({"left":0});
			$(".works .left").append($(".center li").eq(0));
		});
	});
	$(".works .ctrls .prev").on("click",function(){
		// 如果左侧没有内容了，再点击也就不会生效
		if($(".works .left li").length == 0){ return; }
		// 让左侧的ul下的li进行运动 --> 向右运动 --> left 值
		var left = $(".works .left li").eq($(".works .left li").length-1).outerWidth() + 10;
		run(2);
		$(".works .left li").eq($(".works .left li").length-1).stop().animate({
			left:left
		},500,function(){
			$(".works .left li").eq($(".works .left li").length-1)
			.css({"left":0});
			$(".works .left li").eq($(".works .left li").length-1)
			.insertBefore($(".works .center li").eq(0));
		});
	});
	function run(tag){
		$.each($(".center li"),function(index,ele){
			if(tag == 1){
				/*
				这边的index>0的判断，是去除第一个参与运动,因为第一个有独立的运动
				第一个要运动到左侧的ul位置上，并修改对应的 left 值
				 */ 
				if(index > 0){
					/*
					数组中的第二个li要往前移，且要变大，那么就意味着需要使用这个li
					之前的li的样式，而此时第二个li的属性是在下标1的数组中，要找到
					上一个li的样式，就需要将下标往前移 1 位
					*/
					var data = animationData[index-1];
					$(ele).css({"transform":data["transform"]});
					$(ele).animate({
						"z-index":data["z-index"],
						"left":data["left"],
						"top":data["top"],
						"margin-top":data["margin-top"]			
					},300);
				}
			}else{
				var data = animationData[index+1];
				$(ele).css({"transform":data["transform"]});
				$(ele).animate({
					"z-index":data["z-index"],
					"left":data["left"],
					"top":data["top"],
					"margin-top":data["margin-top"]		
				},300);
			}
		});
	}
});

// 使用 js 设置指示器小点的图标
/*$(function(){
	$.each($(".swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet"),function(index,value){
		$(value).css({
			"background-image":"url(./images/page"+(index+1)+".svg)"
		});
	});
});*/