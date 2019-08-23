<?php 
	$key=$_GET["key"];
	$type=$_GET["type"];
	$url = "http://v.juhe.cn/toutiao/index?type=".$type."&key=".$key;
	echo file_get_contents($url);
 ?>