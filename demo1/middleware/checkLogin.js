module.exports = async(ctx,next)=>{
	/*
	给定一个判断,用户url不是 login 开头的，且没有登录，那么就不允许用户继续往下，
	而是重定向到登录首页面
	*/
	if(ctx.url.indexOf("/back/login")==-1 
		&& (ctx.session.user == ""||ctx.session.user == undefined )){
		ctx.redirect("/back/login")
	}else{
		await next();
	}
};

