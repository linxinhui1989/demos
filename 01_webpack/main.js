import app from './app.js';// 引入外部的模块文件
import Vue from './vue.js';// 引入外部的vue文件

new Vue({
	el:"#app",
	components:{
		"app":app
	},
	template:"<app />"
});