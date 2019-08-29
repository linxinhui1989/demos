/**
 * 定义一个函数，进行元素查找的优化
 * @param  {[type]} val [传入给定的标签/id/className]
 * @return {[ELement]}     [返回获取到的元素]
 */
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

/**
 * 再定义一个函数，专门处理根据 class 进行查找的实现
 * @param  {[type]} className [description]
 * @return {[type]}           [description]
 */
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

/**
 * 定义一个函数，用于实现元素的运动
 * @param  {[type]} ele    [description]
 * @param  {[type]} target [description]
 * @param  {[type]} step   [description]
 * @return {[type]}        [description]
 */
function uniformMove(ele,target,step){
	step = step || 10;
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

// 在外部的工具 js 文件中，定义一个函数varSpeedMove
function varSpeedMove(ele,target,rate){
	rate = rate || 10;
	// 避免多次点击，开启多个计时器
	clearInterval(ele.t);
	// 调用函数，实现变速运动
	ele.t = setInterval(function(){
		/*
		因为距离在不断的减小，会导致 step 这个步长值会变得很小；想一个办法，使得 step 能够大于等于一个最小值且取整数
		*/
		var step = (target>ele.offsetLeft)
		?Math.ceil((target - ele.offsetLeft) / rate)
		:Math.floor((target - ele.offsetLeft) / rate);
		var dis = ele.offsetLeft + step;
		ele.style.left = dis + "px";
		var cha = Math.abs(target - dis);
		if(cha == 0){
			clearInterval(ele.t);
			console.log("停止计时器函数");
		}
	},20);
}

/**
 * 获取滚动的距离
 * @return {[Number]} [获取滚动的距离]
 */
function getScrollY(){
	if(document.documentElement){
		// ie 低版本浏览器的写法
		return document.documentElement.scrollTop;
	}else{
		// 非 ie 低版本浏览器的写法
		return window.pageYOffset;
	}
}

function animate(ele,target,rate){
	rate = rate || 10;
	// 避免多次点击，开启多个计时器
	clearInterval(ele.t);
	// 调用函数，实现变速运动
	ele.t = setInterval(function(){
		/*
		跟之前的差别是在于，在interval回调函数中，不再是只修改一个属性，而是要修改多个属性，这多个属性是来自于函数调用时，传入的那个target的key中-->意味着就需要对target中的所有key对应的属性进行设置 --> 要借助 for...in 循环，将 key 挨个取出，挨个处理
		*/
		var isOver = true; 
		for(var attrName in target){
			var current = getAttr(ele,attrName);
			if(attrName == "opacity"){
				// 针对透明度，进度特殊处理
				var res = target[attrName]*100 - current*100;
			}else{
				current = parseInt(current);
				var res = target[attrName] - current;
			}
			var step = (target[attrName]>current)?Math.ceil(res / rate):Math.floor(res / rate);
			var dis;
			if(attrName == "opacity"){
				// 对于opacity透明度单独处理
				dis = current * 100 + step;
				dis = dis / 100;
				ele.style[attrName] = dis;
			}else if(attrName == "z-index"){
				// 对于z-index单独处理
				dis = target[attrName];
				ele.style[attrName] = dis;
			}else{
				// 对于其他带有 px 单位样式的处理
				dis = current + step;
				ele.style[attrName] = dis + "px";
			}
			var cha = Math.abs(target[attrName] - dis);
			if(cha != 0){
				// 如果这个cha变量差值不为 0，表示动画还应该继续，不能停下来
				isOver = false;
			}
		}
		// 在循环外部，进行是否要停止计时器的判断
		if(isOver){
			clearInterval(ele.t);
			console.log("停止计时器...");
		}
	},20);
}
// 定义一个函数，用于获取指定的元素的指定属性
function getAttr(ele,attrName){
	return window.getComputedStyle(ele)[attrName];
}