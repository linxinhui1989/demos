<?php 
	// 获取到前端发送的ajax请求中传递的参数
	$username = $_GET["username"];
	$password = $_GET["password"];
	if($username == "admin" && $password == "admin"){
		echo "成功了...";
	}else{
		echo "账号密码有误!!!";
	}
?>