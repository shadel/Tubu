<?php

class ResourceHasActiveObject extends DataMapper {
	var $table = "resource_has_active_object";
    var $has_one = array('user');
    
}

