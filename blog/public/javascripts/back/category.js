$(function(){
	$("#category_cancel").on("click",function(){
		window.location.href = "/back/category";
	});
	$("#category_add").on("click",function(e){
		e.preventDefault();
		let categoryName = $(".category_name").val();
		let id = $(".category_id").val();
		if(categoryName == "" || categoryName == undefined){
			// 提示不可为空
			alert("提示不可为空")
		}else{
			// 发送ajax请求
			$.ajax({
				url:"/back/category/add",
				type:"post",
				data:{
					category_name:categoryName,
					id:id
				},
				success:function(res){
					if(res.success){
						// 添加成功
						alert(res.msg);
						window.location.href = "/back/category";
					}else{
						// 添加失败
						alert(res.msg);
					}
				}
			});
		}
	})
});