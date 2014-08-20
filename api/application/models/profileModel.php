<?php
class ProfileModel extends DataMapper {

	var $table = "profile";

	function selectList($userId = null)
	{
		$profileModel = new ProfileModel();
		
		if ($userId != null) {
			$this->db->where('create_user', $userId);
		}
		
		$profile_list = $profileModel->get();
		return $profile_list;
	}
	
	function selectListByCreater($userId) {
		
	}
	
	function delete($id)
	{
		$this->db->where('id', $id);
		$this->db->delete($this->table);
	}
	
	function export() {
		return  array (
				'id' => $this->id,
				'userId' => $this->userId,
				'email' => $this->email,
				'avatar' => $this->avatar,
				'name' => $this->name
		);
	}
}
