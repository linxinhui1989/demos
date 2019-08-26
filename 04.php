<?php 
	$tag = $_GET["tag"];
	$filename = "";
	if($tag == 1){
		$filename = "http://pwtnmp3jh.bkt.clouddn.com/0826_data.txt";
	}else{
		$filename = "http://pwojk5oi9.bkt.clouddn.com/data.txt";
	}
	echo file_get_contents($filename);
 ?>
