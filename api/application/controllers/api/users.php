<?php defined('BASEPATH') OR exit('No direct script access allowed');

require APPPATH.'/libraries/REST_Controller.php';

class Users extends REST_Controller
{
    
    public function __construct() { 
        parent::__construct ();
        $this->load->library ('session');
$this->load->library('encrypt');
$this->load->helper('date');
        
$this->load->model('ActiveObject');
$this->load->model('User');


parse_str ( $_SERVER ['QUERY_STRING'], $_REQUEST );
		$CI = & get_instance ();
		$CI->config->load ( "facebook", TRUE );
		$config = $CI->config->item ( 'facebook' );
		$this->load->library ( 'Facebook', $config );
		
		parse_str ( $_SERVER ['QUERY_STRING'], $_GET );


    }
    


	public function facebook_get() {
	
$userId = $this->facebook->getUser();
		if ($userId == 0) {
			$login_url = $this->facebook->getLoginUrl ( array (
					'scope' => 'email' 
			));
			header ( 'Location: ' . $login_url );
		} else {
			$user = $this->facebook->api ( '/me' );
			$data = array ();
			$data ['email'] = $user ['email'];
			$data ['username'] = $user ['username'];
			$data ['name'] = $user ['name'];
			$this->response(array('status' => 'success', 'info' => $data ));
			
		}



		
	}

    
    function user_post() {
        $user = new User();
        $user->username = $this->post('username');
        $user->password = md5($this->post('password'));
        $user->email =  $this->post('email');
        $user->confirm_password =  md5($this->post('confirm_password'));
        $user->validate();
        if ($user->valid) {
            $activeObject = new ActiveObject();
	    $activeObject->update_time = now();
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


    
    function login_post() {
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