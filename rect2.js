// 定义一个Rect的构造函数
function Rect(options){
	// 在这个构造函数中，去设定好对应的基础属性
	options = options || {};
	this.startX = options.startX || 0;
	this.startY = options.startY || 0;
	this.width = options.width || 100;
	this.height = options.height || 100;
	this.strokeStyle = options.strokeStyle || "";
	this.fillStyle = options.fillStyle || "#000";
	this.lineWidth = options.lineWidth || 10;
}
// 再来定义矩形的原型对象
Rect.prototype = {
	constructor:Rect,
	render:function(ctx){
		ctx.beginPath();
		ctx.rect(this.startX,this.startY,this.width,this.height);
		ctx.fillStyle = this.fillStyle;
		ctx.fill();
		if(this.strokeStyle != ""){
			// 外部创建这个对象时，有传入对应的 strokeStyle属性，那么就要进行空心渲染
			ctx.strokeStyle = this.strokeStyle;
			ctx.lineWidth = this.lineWidth;
			ctx.stroke();
		}
	}
}