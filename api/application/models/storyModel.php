<?php
class StoryModel extends DataMapper {

	var $table = "story";

	function selectByFollow($userId) {
		$sql = "SELECT story.* ";
	}
	
	function delete($id)
	{
		$this->db->where('id', $id);
		$this->db->delete($this->table);
	}
	
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
