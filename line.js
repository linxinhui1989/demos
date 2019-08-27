// 定义一个名为 Line 的构造函数
function Line(options){
	options = options || {};
	this.startX = options.startX || 0;
	this.startY = options.startY || 0;
	this.endX = options.endX || 100;
	this.endY = options.endY || 100;
	this.strokeStyle = options.strokeStyle || "#000";
	this.lineWidth = options.lineWidth || 1;
}
Line.prototype = {
	constructor:Line,
	render : function(ctx){
		// 对于颜色生效 --> 避免颜色干扰
		ctx.beginPath();
		// 设定对应的起点
		ctx.moveTo(this.startX,this.startY);
		// 设定对应的终点
		ctx.lineTo(this.endX,this.endY);
		// 设定对应的颜色
		ctx.strokeStyle = this.strokeStyle;
		// 设定对应的粗细
		ctx.lineWidth = this.lineWidth;
		// 最后再来进行渲染
		ctx.stroke();
	}
}