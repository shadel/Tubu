<?php

class Chapter extends MyMapper {
	var $table = 'chapter';

    var $has_one = array(
    		'resource' => array(
    			'class' => 'resource'), 
    		'story_cover' => array(
    				'class' => 'storyCover',
    				'other_field' => 'chapter'));

    var $validation = array();
    
    function exportSingle() {
    	return  array (
				'id' => $this->resource_id,
				'title' => $this->title,
    			'body' => $this->body,
    			'summary' => $this->summary,
    			'index' => $this->index
		);
    }
    
}