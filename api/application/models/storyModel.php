<?php
class StoryModel extends DataMapper {

	var $table = "story";

	function selectList($userId = null)
	{
		$storyModel = new StoryModel();
		
		if ($userId != null) {
			$this->db->where('create_user', $userId);
		}
		
		$story_list = $storyModel->get();
		return $story_list;
	}
	
	function selectListByCreater($userId) {
		
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
