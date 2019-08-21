<?php 
	// 获取到前端传递过来的函数的名称
	$cb = $_GET["cb"];
	$name = $_GET["name"];
	$age = $_GET["age"];
	// 再来去拼接对应的函数调用以及传参
	$info = $name."===>这边专门测试函数传参-----> 测试用数据".$age;
	echo $cb."('".$info."')";
 ?>