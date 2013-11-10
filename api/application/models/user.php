<?php

class User extends DataMapper {

    var $has_one = array('active_object');

    var $validation = array(
        'username' => array(
            'label' => 'Username',
            'rules' => array('required', 'trim', 'unique', 'alpha_dash', 'min_length' => 3, 'max_length' => 20),
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
            'rules' => array('required', 'trim', 'valid_email')
        )
    );

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