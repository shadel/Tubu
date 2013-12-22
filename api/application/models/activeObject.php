<?php

class ActiveObject extends DataMapper {
var $table = 'active_object';
    var $has_one = array('user');
}

