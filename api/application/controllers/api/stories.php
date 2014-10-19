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
		$chapters = $chapterModel->get_by_storyId ( $this->get ( 'id' ) );
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
		$userName = $this->get ( 'id' );
		if (! $userName) {
			return TubuError::notFound ();
		}
	
		// Todo: get username in session
		$currentUser = $this->get ( 'id' );
	
		if ($userName != $currentUser) {
			return TubuError::accessDenied ();
		}
		$userId = 1;
		$storyModel = new StoryModel ();
		$stories = $storyModel->selectByFollow ( $userId );
		
		$data = $storyModel->export_list ( $stories );
		return new TubuResponse ( $data );
	}
	
	function togglereadflag_get() {
		$storyId = $this->get ( 'id' );

		// Todo: get username in session
		$userId = '1';
		
		$storyFollowerModel = new StoryFollowerModel();
		$storyFollowerModel->where('storyId', $storyId);
		$storyFollowerModel->where('userId', $userId);
		$storyFollowerModel->get();
		
		$storyFollowerModel->where('storyId', $storyId);
		$storyFollowerModel->where('userId', $userId);
		$storyFollowerModel->update(array(
				'status' => 1 - $storyFollowerModel->status));
		
		$storyModel = new StoryModel ();
		$stories = $storyModel->selectByFollow ( $userId, $storyId );
		
		return new TubuResponse ( $stories->export() );
	}
	
	function add_post() {
		
		$data = $this->request->body ;
		
		$userId = '1';
		
		$storyModel = new StoryModel ();
		
		$storyModel->title = $data['title'];
		$storyModel->storyType = $data['storyType'];
		$storyModel->createUser = $userId;
		
		try {
			if ($storyModel->save_as_new()) {
				return new TubuResponse ( $storyModel->export() );
			}
		return TubuError::fail();
		} catch (Exception $ex) {
			echo $ex->getMessage();
			return TubuError::fail();
		}
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