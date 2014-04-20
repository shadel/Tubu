<?php

class Story extends MyMapper {
	var $table = 'story';

    var $has_one = array('resource' => array(
    		'class' => 'resource'));
    var $has_many = array('storyCover' => array(
    		'class' => 'storyCover',
    		'other_field' => 'story',
    		'join_self_as' => 'story',
    		'join_other_as' => 'story_cover'));

    var $validation = array();

    function getById($id) {
    	$story = new Story();
    	$story->where('resource_id', $id);
    	$story->get();
    	
    	if (empty($story->resource_id)) {
    		return false;
    	} else {
    		$storyCover = new StoryCover();
    		$story->covers = $storyCover->getByStoryId ( $id );
    		return $story;
    	}
    }
    
    function getAll() {
    	$stories = new Story();
    	$stories->get();
    	 
    	if (empty($stories->id)) {
    		return false;
    	} else {
    		foreach ($stories as $story) {
    			
	    		$story->covers = $story->storyCover->get();
    		}
    		
    		return $stories;
    	}
    }
    
    function exportSingle() {
    	if ($this->covers) {
	    	$covers = $this->exportList($this->covers);
    	} else {
    		$covers = array();
    	}
    	
    	return  array (
				'id' => $this->resource_id,
				'title' => $this->name,
				'covers' => $covers
		);
    }
    
}