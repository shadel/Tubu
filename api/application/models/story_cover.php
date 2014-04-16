<?php

class Story_cover extends DataMapper {

    var $has_one = array('resource', 'story');

    var $validation = array();

    function getByStoryId($id) {
    	$story_cover = new Story_cover();
    	$story_cover->where('story_resource_id', $id);
    	$story_cover->get();
    	 
    	if (empty($story_cover->resource_id)) {
    		return false;
    	} else {
    		return $story_cover;
    	}
    }
}