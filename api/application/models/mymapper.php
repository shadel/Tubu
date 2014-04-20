<?php

class MyMapper extends DataMapper {

    function exportSingle() {
    }
    
    function exportList($list) {
    	$array = array();
    	
    	foreach ($list as $item) {
    		array_push($array, $item->exportSingle());
    	}
    	
    	return $array;
    }
}