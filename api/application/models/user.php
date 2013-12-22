<?php

class User extends DataMapper {
var $table = 'user';
    var $has_one = array('active_object');

    var $validation = array(
        'username' => array(
            'label' => 'Username',
            'rules' => array('required', 'trim', 'alpha_dash', 'min_length' => 3, 'max_length' => 20, 'username_check'),
        ),
        'password' => array(
            'label' => 'Password',
            'rules' => array('required', 'min_length' => 6, 'encrypt'),
        ),
        'confirm_password' => array(
            'label' => 'Confirm Password',
            'rules' => array('required', 'encrypt', 'matches' => 'password'),
        ),
        'email' => array(
            'label' => 'Email Address',
            'rules' => array('required', 'trim', 'valid_email', 'email_check')
        )
    );

function _username_check($field)
	{
$user = new User();
$user->where('username', $this->{$field});
$user->get();
		
			
        if (empty($user->active_object_id)) {
            return true;
        } else {
		
            return 'username already exists.';
        }
		
	}

function _email_check($field)
	{
$user = new User();
$user->where('email', $this->{$field});
$user->get();
		
			
        if (empty($user->active_object_id)) {
            return true;
        } else {
		
            return 'email already exists.';
        }
		
	}

    function login() {
        $user = new User();
        $user->where('username', $this->username);
        $user->where('password', md5($this->password));
        $user->get();
        
        if (empty($user->active_object_id)) {
            return false;
        } else {
            return $user;
        }
    }
}