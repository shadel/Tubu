<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Users extends REST_Controller
{
    
    public function __construct() {
        parent::__construct ();
        $this->load->library ('session');
        $this->load->model('User');
    }
    
    
    function user_post() {
        $user = new User();
        $user->username = $this->post('username');
        $user->password = $this->post('password');
        $user->email =  $this->post('email');
        $user->confirm_password =  $this->post('confirm_password');
        
        $user->validate();
        if ($user->valid) {
            $activeObject = new ActiveObject();
            $activeObject->save();
            $user->active_object_id = $activeObject->id;
            if ($user->skip_validation()->save()) {
                $this->response(array('status' => 'success'));
            } else {
                $this->response(array('status' => 'failed', 'errors' => $user->error));
            }
        } else {
            $this->response(array('status' => 'failed', 'errors' => $user->error));
        }
        
        
    }
    
    function login() {
        $user = new User();
    
        $user->username = $this->input->post('username');
        $user->password = $this->input->post('password');
        
        $user_data = $user->login();
        if ($user_data) {
            $this->session->set_userdata ('login_user', $user_data);
            $this->response(array('status' => 'success'));
        } else {
            $error = $user->error->login;
            $this->response(array('status' => 'failed', 'errors' => $error));
        }
    }
}
?>