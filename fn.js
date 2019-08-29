// 定义一个函数，进行元素查找的优化
function $(val){
	/*
	形参(定义的时候，这个名称可以随意,当外部去调用这个函数，给这个函数传递参数时，传递的值会赋值给这个形参)
	1. 将这个val这个字符串的首字符取出，根据首字符进行判断
	*/
	var firstChar = val.charAt(0);
	if(firstChar == "#"){
		var id = val.substring(1);
		// 此时要根据 id 进行元素的查找em
		return document.getElementById(id);
	}else if(firstChar == "."){
		// 此时要根据 class 进行元素的查找
		var className = val.substring(1);
		return getEleByClass(className);
	}else{
		// 根据 tag 名称进行元素的查找
		return document.getElementsByTagName(val);
	}
}
// 再定义一个函数，专门处理根据 class 进行查找的实现
function getEleByClass(className){
	if(document.getElementsByClassName){
		return document.getElementsByClassName(className);
	}else{
		// 兼容 ie 版本浏览器的写法
		var allEles = $("*");
		// 准备一个空数组，用于保存满足className的结果
		var eles = [];
		for(var i=0;i<allEles.length;i++){
			var ele = allEles[i];
			/*
			获取到的元素上的class值可能是多个 --> 那就将这个元素上的多个class值进行拆分，拆分成若干个单独的字符串，然后再拿className 跟 这些单独的字符串进行比较
			*/
		    var classList = ele.className.split(" ");
		    /*
		     .sp red --> ["sp","red"]
		     */
		    for(var j=0;j<classList.length;j++){
		    	if(classList[j] == className){
		    		eles.push(ele);
		    		break; // 跳出这个里层循环
		    	}
		    }
		}
		return eles;
	}
}

// 定义一个函数，用于实现元素的运动
function aniMove(ele,target,step){
	/*
	传入哪个元素，就让哪个元素动起来，而不是在代码中固定指定让哪个元素动
	 */
	var current = ele.offsetLeft;
	/*
	再开启计时器之前，先把之前的停止
	*/
	clearInterval(ele.t);
	ele.t = setInterval(function(){
		current = ele.offsetLeft;
		current += (current<target)?step:-step;
		ele.style.left = current + "px";
		var dis = Math.abs(target - ele.offsetLeft);
		// 给定一个停止的条件
		if(dis <= step){
			// 设置元素偏移量就是终点值
			ele.style.left = target + "px";
			// 停止计时器
			clearInterval(ele.t);
		}
	},20);
}