<?php
class StoryModel extends MyMapper {

	var $table = "story";
	var $created_field = "createTime";

	function selectByFollow($userId, $storyId = null) {
		
		$sql = "";
		$sql .= "SELECT st.* ";
		$sql .= ", sf.status as followerStatus ";
		$sql .= ", ch.id as chapterId ";
		$sql .= ", ch.number as chapterNumber ";
		$sql .= ", ch.title as chapterTitle ";
		$sql .= "FROM story as st ";
		$sql .= "JOIN storyfollower as sf ";
		$sql .= "ON st.id = sf.storyId ";
		$sql .= "LEFT JOIN ";
		$sql .= "(SELECT storyId , MAX(id) as id ";
		$sql .= "FROM chapter as c2 ";
		$sql .= "GROUP BY storyId ";
		$sql .= ") as c ";
		$sql .= "ON c.storyId = st.id ";
		$sql .= "LEFT JOIN chapter as ch ";
		$sql .= "ON c.id = ch.id ";
		$sql .= "WHERE ";
		$sql .= "sf.userId = ? ";
		
		if (!is_null($storyId)) {
			$sql .= " AND sf.storyId = ? ";
		}
		
		$sql .= "ORDER BY st.title ";
		return $this->query($sql, array($userId, $storyId));
	}
	
	function delete($id)
	{
		$this->db->where('id', $id);
		$this->db->delete($this->table);
	}
	
}
