$(function(){
	$(".regist").on("click",function(e){
		// 阻止默认行为
		e.preventDefault();
		const username = $(".username").val();
		const pwd = $(".pwd").val();
		$.ajax({
			url:"./regist",
			type:"POST",
			data:{
				username,pwd
			},
			success:function(res){
				console.log(res);
				if(res.code == -1){
					// 暂无该用户
					notice("该用户已存在")
				}else{
					notice("注册成功")
					// 注册成功
					setTimeout(()=>{
						history.go(-1);
					},1000);
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