<?php
class ChapterModel extends MyMapper {

	var $table = "chapter";

	function selectList($userId = null)
	{
		$chapterModel = new ChapterModel();
		
		if ($userId != null) {
			$this->db->where('create_user', $userId);
		}
		
		$chapter_list = $chapterModel->get();
		return $chapter_list;
	}
	
	function delete($id)
	{
		$this->db->where('id', $id);
		$this->db->delete($this->table);
	}
}
