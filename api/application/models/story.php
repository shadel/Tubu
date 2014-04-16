<?php

class Story extends DataMapper {

    var $has_one = array('resource' => array());
    var $has_many = array('cover' => array(
    		'class' => 'story_cover'));

    var $validation = array();

    function getById($id) {
    	$story = new Story();
    	$story->where('resource_id', $id);
    	$story->get();
    	
    	if (empty($story->resource_id)) {
    		return false;
    	} else {
    		return $story;
    	}
    }
}