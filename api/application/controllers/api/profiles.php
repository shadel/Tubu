<?php

defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' );

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package CodeIgniter
 * @subpackage Rest Server
 * @category Controller
 * @author Phil Sturgeon
 * @link http://philsturgeon.co.uk/code/
 *      
 */

// This can be removed if you use __autoload() in config.php OR use Modular
// Extensions
require APPPATH . '/libraries/REST_Controller.php';
class Profiles extends REST_Controller {
	function __construct() {
		parent::__construct ();
		$this->ci = & get_instance ();
	}

	function profile_get() {
		$userId = $this->get ( 'id' );
		if (! $userId) {
			$this->response ( NULL, 400 );
		}
		
		// Todo: get username in session
		$currentUser = $this->get ( 'id' );
		
		if ($userId == $currentUser) {
	 		$profileModel = new ProfileModel();
			$profile = $profileModel->get_by_userId($this->get ( 'id' ));
			$data = array();
			
			if ($profile) {
				$data['profile'] = $profile->export();
				$data['profile']['isAuthor'] = true;
				$data['profile']['isCurrentUser'] = true;
				$this->response ( $data, 200 ); // 200 being the HTTP response code
			} else {
				$this->response ( array (
						'error' => 'error.userNotFound'
				), 404 );
			}
		} else {
			$this->response ( array (
					'error' => 'error.accessDenied' 
			), 404 );
		}
	}
	
	function story_post() {
		// $this->some_model->updateUser( $this->get('id') );
		$message = array (
				'id' => $this->get ( 'id' ),
				'name' => $this->post ( 'name' ),
				'email' => $this->post ( 'email' ),
				'message' => 'ADDED!' 
		);
		
		$this->response ( $message, 200 ); // 200 being the HTTP response code
	}
	function story_delete() {
		// $this->some_model->deletesomething( $this->get('id') );
		$message = array (
				'id' => $this->get ( 'id' ),
				'message' => 'DELETED!' 
		);
		
		$this->response ( $message, 200 ); // 200 being the HTTP response code
	}
	function list_get() {
 		if (! $this->get ( 'key' )) {
 			$this->response ( NULL, 400 );
 		}
		
		$resource = new Resource( $this->get ( 'key' ));
		$storyCover = $resource->storyCover->get();
		$chapters = $storyCover->chapter->get();
		
		if ($chapters) {
			$this->response ( $chapters->exportList($chapters), 200 ); // 200 being the HTTP response code
		} 

		else {
			$this->response ( array (
					'error' => 'User could not be found' 
			), 404 );
		}
	}
	public function send_post() {
		var_dump ( $this->request->body );
	}
	public function send_put() {
		var_dump ( $this->put ( 'foo' ) );
	}
}