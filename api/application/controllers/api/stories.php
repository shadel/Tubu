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
class Stories extends REST_Controller {
	function __construct() {
		parent::__construct ();
		$this->ci = & get_instance ();
		
		$this->load->model ( 'story' );
	}
	function detail_get() {
		if (! $this->get ( 'id' )) {
			$this->response ( NULL, 400 );
		}
		
		// Todo: get username in session
		$currentUser = 'test001';
		
		$storyModel = new StoryModel ();
		$story = $storyModel->get_by_id ( $this->get ( 'id' ) );
		$data = array ();
		
		if ($story) {
			$data ['story'] = $story->export ();
			$data ['story'] ['isAuthor'] = true;
			$data ['story'] ['isOwner'] = $story->owner == $currentUser;
			$this->response ( $data, 200 ); // 200 being the HTTP response code
		} else {
			$this->response ( array (
					'error' => 'error.storyNotFound' 
			), 404 );
		}
	}
	function chapter_get() {
		if (! $this->get ( 'id' )) {
			$this->response ( NULL, 400 );
		}
		
		// Todo: get username in session
		$currentUser = 'test001';
		
		$chapterModel = new ChapterModel ();
		$chapters = $chapterModel->get_by_story_id ( $this->get ( 'id' ) );
		$data = array ();
		
		if ($chapters) {
			$data = $chapterModel->export_list ( $chapters );
			$this->response ( $data, 200 ); // 200 being the HTTP response code
		} else {
			$this->response ( array (
					'error' => 'error.chapterNotFound' 
			), 404 );
		}
	}
	
	/**
	 * get story owner of user
	 * @return TubuResponse
	 */
	function owner_get() {
		$userId = $this->get ( 'id' );
		if (! $userId) {
			return TubuError::notFound ();
		}
		
		// Todo: get username in session
		$currentUser = $this->get ( 'id' );
		
		if ($userId != $currentUser) {
			return TubuError::accessDenied ();
		}
		$storyModel = new StoryModel ();
		$stories = $storyModel->get_by_owner ( $this->get ( 'id' ) );
		
		$data = $storyModel->export_list ( $stories );
		return new TubuResponse ( $data );
	}
	
	/**
	 * get story following of user
	 * @return TubuResponse
	 */
	function follow_get() {
		$userId = $this->get ( 'id' );
		if (! $userId) {
			return TubuError::notFound ();
		}
	
		// Todo: get username in session
		$currentUser = $this->get ( 'id' );
	
		if ($userId != $currentUser) {
			return TubuError::accessDenied ();
		}
		$storyModel = new StoryModel ();
		$stories = $storyModel->get_by_owner ( $this->get ( 'id' ) );
	
		$data = $storyModel->export_list ( $stories );
		return new TubuResponse ( $data );
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
		// if (! $this->get ( 'key' )) {
		// $this->response ( NULL, 400 );
		// }
		$stories = $this->story->getAll ();
		if ($stories) {
			$this->response ( $stories->exportList ( $stories ), 200 ); // 200
				                                                            // being
				                                                            // the HTTP
				                                                            // response
				                                                            // code
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