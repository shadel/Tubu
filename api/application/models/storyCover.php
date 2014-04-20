<?php

class StoryCover extends MyMapper {
	
	var $table = 'story_cover';

    var $has_one = array('resource', 'story' => array(
    		'class' => 'story',
    		'other_field' => 'storyCover'));

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
					'img' => $this->image_cover,
					'introductory' => $this->introductory,
					'name' => $this->name 
    	);
    }
}