$(function(){
	$("#link_cancel").on("click",function(){
		window.location.href = "/back/link";
	});
	$("#link_add").on("click",function(e){
		e.preventDefault();
		let linkName = $(".link_name").val();
		let linkUrl = $(".link_url").val();
		let id = $(".link_id").val();
		if(linkName == "" || linkName == undefined 
			|| linkUrl == "" || linkUrl == undefined 
			){
			// 提示不可为空
			alert("提示不可为空")
		}else{
			// 发送ajax请求
			$.ajax({
				url:"/back/link/add",
				type:"post",
				data:{
					link_name:linkName,
					link_url:linkUrl,
					id:id
				},
				success:function(res){
					if(res.success){
						// 添加成功
						alert(res.msg);
						window.location.href = "/back/link";
					}else{
						// 添加失败
						alert(res.msg);
					}
				}
			});
		}
	})
});