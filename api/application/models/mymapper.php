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
	
	function save_as_new($object="", $ralted_field="") {
		$this->db->trans_start();
		$this->{$this->created_field} = date('Y-m-d H-i-s');
		
		$result = parent::save_as_new($object, $ralted_field);
		$insert_id = $this->db->insert_id();
		
		$this->get_by_id($insert_id);
		
		$this->db->trans_complete();
		return $result;
	}
}