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
class Chapters extends REST_Controller {
	function __construct() {
		parent::__construct ();
		$this->ci = & get_instance ();
		
		$this->load->model ( 'chapter' );
		$this->load->model ( 'resource' );
	}
	function chapter_get() {
		if (! $this->get ( 'id' )) {
			$this->response ( NULL, 400 );
		}
		
 		$resource = new Resource( $this->get ( 'id' ));
		$chapter = $resource->chapter->get();
		
		if ($chapter) {
			$this->response ( $chapter->exportSingle(), 200 ); // 200 being the HTTP response code
		} 

		else {
			$this->response ( array (
					'error' => 'User could not be found' 
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