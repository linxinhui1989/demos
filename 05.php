<?php 
	$app = $_GET['app'];
	$code = $_GET['code'];
	$t = $_GET['t'];
	$c = $_GET['c'];
	$url = "http://tq.360.cn/api/weatherquery/querys";
	$newUrl = $url."?_jsonp=renderData&app=".$app."&code=".$code."&t=".$t."&c=".$c;
	echo file_get_contents($newUrl);
 ?>