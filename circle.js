function Circle(options){
	options = options || {};
	this.x = options.x || 0;
	this.y = options.y || 0;
	this.radius = options.radius || 100;
	this.startAngle = options.startAngle || 0;
	this.endAngle = options.endAngle || Math.PI*2;
	this.strokeStyle = options.strokeStyle;
	this.fillStyle = options.fillStyle;
	this.lineWidth = options.lineWidth || 10;
}

Circle.prototype = {
	contructor:Circle,
	render:function(ctx){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,false);
		ctx.fillStyle = this.fillStyle;
		ctx.strokeStyle = this.strokeStyle;
		ctx.lineWidth = this.lineWidth;
		this.fillStyle?ctx.fill():"";
		this.strokeStyle?ctx.stroke():"";
	},
	update:function(){}
}