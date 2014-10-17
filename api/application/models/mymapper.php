<?php

class MyMapper extends DataMapper {
	
	var $columns = array(); 
	
	public function _to_object($item, $row) {
		foreach ($row as $key => $value)
		{
			$item->columns[$key] = $value;
		}
		parent::_to_object($item, $row);
	}

	function export() {
		$fields = $this->columns;
		$result = array();
		foreach($fields as $k => $f)
		{
			$result[$k] = $this->{$k};
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