$(()=>{
	$("#admin_add").on("click",function(e){
		e.preventDefault();
		let adminName = $(".admin_name").val();
		let adminPwd = $(".admin_pwd").val();
		let adminConfirmPwd = $(".admin_confirm_pwd").val();
		let adminId = $(".admin_id").val();
		if(isNull(adminName) || isNull(adminPwd) || isNull(adminConfirmPwd)){
			alert("不可为空");
		}else if(adminPwd != adminConfirmPwd){
			alert("密码必须一致");
		}else{
			// 发送ajax请求
			$.ajax({
				url:"/back/admin/add",
				type:"post",
				data:{
					name:adminName,
					pwd:adminPwd,
					id:adminId
				},
				success:function(res){
					if(res.success){
						alert(res.msg);
						window.location.href = "/back/admin";
					}else{
						alert(res.msg);
					}
				}
			});
		}
	})
	function isNull(obj){
		return obj=="" || obj==undefined;
	}
});