<?php

class StoryCover extends MyMapper {
	
	var $table = 'story_cover';

    var $has_one = array('resource', 'story' => array(
    		'class' => 'story',
    		'other_field' => 'storyCover'));
    var $has_many = array('chapter' => array(
    		'class' => 'chapter',
    		'other_field' => 'story_cover',
    		'join_self_as' => 'story_cover',
    		'join_other_as' => 'chapter'));

    var $validation = array();

    function getByStoryId($id) {
    	$story_cover = new StoryCover();
    	$story_cover->where('story_resource_id', $id);
    	$story_cover->get();
    	 
    	if (empty($story_cover->resource_id)) {
    		return false;
    	} else {
    		return $story_cover;
    	}
    }
    
    function exportSingle() {
    	 
    	return  array (
    				'id' => $this->resource_id,
					'img' => $this->image_cover,
					'introductory' => $this->introductory,
					'name' => $this->name 
    	);
    }
}