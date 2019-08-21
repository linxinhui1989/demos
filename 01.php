<?php 
    $tag = $_GET["tag"];
    if($tag == 0){
		echo file_get_contents("./data/data1.txt");
    }else if($tag == 1){
		echo file_get_contents("./data/data2.txt");
    }else if($tag == 2){
		echo file_get_contents("./data/data3.txt");
    }else if($tag == 3){
		echo file_get_contents("./data/data4.txt");
    }else if($tag == 4){
		echo file_get_contents("./data/data5.txt");
    }
 ?>