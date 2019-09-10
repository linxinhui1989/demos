$(function(){
	$(".login").on("click",function(e){
		// 阻止默认行为
		e.preventDefault();
		const username = $(".username").val();
		const pwd = $(".pwd").val();
		$.ajax({
			url:"./login",
			type:"POST",
			data:{
				username,pwd
			},
			success:function(res){
				console.log(res);
				if(res.code == -1){
					// 暂无该用户
					notice("暂无该用户")
				}else{
					if(res.code == -2){
						// 登录密码有误
						notice("登录密码有误");
					}else{
						// 登录成功
						notice("登录成功");
						setTimeout(()=>{
							window.location.href = "./home";
						},3000);
					}
				}	
			}
		});
	});
	function notice(msg){
		$(".notice").show();
		$(".notice").html(msg);
		setTimeout(()=>{
			$(".notice").hide();
		},3000);
	}
});