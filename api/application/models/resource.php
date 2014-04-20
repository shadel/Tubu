<?php

class Resource extends DataMapper {
	var $table = 'resource';
    var $has_one = array('story','storyCover');
    var $has_many = array(
    			'id' => array(
    					'class' => 'ResourceHasActiveObject')
    		);
    
    function getActiveObject($id) {
    	$data = new ResourceHasActiveObject();
    	$data->where('resource_id', $id);
    }
    
}

