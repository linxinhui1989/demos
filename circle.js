function Circle(options){
	options = options || {};
	// 设计好对应的小球所需的基础属性
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.radius = options.radius || 100;
	this.strokeStyle = options.strokeStyle;
	this.fillStyle = options.fillStyle;
	this.lineWidth = options.lineWidth || 1;
	this.startAngle = options.startAngle || 0;
	this.endAngle = options.endAngle || Math.PI*2;
	// 再来给定一个属性，用来表示小球变化速率
	this.reduceStep = parseInt(Math.random()*-3) + (-1);
	this.xChange = parseInt(Math.random()*6) + (-3);
	this.yChange = parseInt(Math.random()*6) + (-3);
}
// 再来对原型对象进行相应的设置
Circle.prototype = {
	constructor:Circle,
	render:function(ctx){
		// 在这个 render 方法中，根据获取到的基础属性，进行图案的绘制
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,false);
		ctx.strokeStyle = this.strokeStyle;
		ctx.fillStyle = this.fillStyle;
		ctx.lineWidth = this.lineWidth;
		this.strokeStyle ? ctx.stroke() : "";
		this.fillStyle ? ctx.fill() : "";
	},
	update:function(ctx){
		/*
		如果都是 -- ，那么所有小球的半径变小步长都是 1 
		 */
		this.radius += this.reduceStep;
		this.x += this.xChange;
		this.y += this.yChange;
		// 对于案例的处理
		if(this.radius < 0){
			var index = 0;
			// 为了性能考虑，半径小于 0 的circle，其实就可以从数组中进行移除了
			for(var i=0;i<allCircles.length;i++){
				if(allCircles[i] == this){
					index = i;
					break;
				}
			}
			allCircles.splice(index,1);
		}else{
			this.render(ctx);
		}
	}
}