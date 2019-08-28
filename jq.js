function run(){
	// 在这函数中进行jQuery的编写
	var jQuery = function(selector){
		return new jQuery.fn.init(selector);
	}
	// 就是将jquery上的原型对象赋值给jQuery上的一个名为 fn 的属性
	jQuery.fn = jQuery.prototype = {
		constructor:jQuery,
		init:function(selector){
			// 此时的写法是将jquery.prototype.init 这个函数作为了构造函数
			var eles = document.querySelectorAll(selector);
			for(var i=0;i<eles.length;i++){
				this[i] = eles[i];
			}
			this.length = eles.length;
		}
	}
	jQuery.fn.extend = function(obj){
		for(var key in obj){
			this[key] = obj[key];
		}
	}
	jQuery.fn.extend({
		css:function(objs){
			for(var i=0;i<this.length;i++){
				for(var key in objs){
					this[i].style[key] = objs[key];
				}
			}
		},
		show:function(){
			for(var i=0;i<this.length;i++){
				this[i].style.display = "block";
			}
		},
		hide:function(){
			for(var i=0;i<this.length;i++){
				this[i].style.display = "none";
			}
		}
	});
	
	// 设置jquery构造函数上的原型对象作为 jquery.prototype.init 这个构造函数的原型对象
	jQuery.fn.init.prototype = jQuery.fn;
	// 要让外部能够访问jQuery这个内部函数
	window.jQuery = jQuery;
	window.$ = jQuery;
}
run();