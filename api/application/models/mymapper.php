<?php

class MyMapper extends DataMapper {

	function export() {
		$fields = $this->fields;
		$result = array();
		foreach($fields as $f)
		{
			$result[$f] = $this->{$f};
		}
		
		return $result;
	}
	
	function export_list($list) {
		$results = array();
		foreach ($list as $obj) {
			array_push($results, $obj->export());
		}
		
		return $results;
	}
}