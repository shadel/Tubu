<?php
class StoryFollowerModel extends MyMapper {

	var $table = "storyFollower";

	function delete($id)
	{
		$this->db->where('id', $id);
		$this->db->delete($this->table);
	}
	
}
