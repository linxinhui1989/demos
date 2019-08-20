<?php 
	/*
	在php中，系统内置了一些常见的方法，用于获取前端传递过来的数据
	例如：获取get请求中的参数   $_GET[""];
		 获取 post 请求中的参数  $_POST[""];
	*/
	$userName = $_POST["username"];
	$pwd = $_POST["pwd"];
	if($userName == "admin" && $pwd == "admin"){
		echo "成功...";
	}else{
		echo "失败...";
	}
 ?>