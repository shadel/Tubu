<?php 

class Snap_Controller extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -  
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in 
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
	
	public function _remap($method, $args) {
		// Call before action
		if($this->is_snapshot()) {

			call_user_func_array(array($this, $method), $args);
			
		} else {
			
			$this->show_user_view();
		}
	
		// Call after action
	}
	
	protected function is_snapshot() { 
		$input = $this->input->get('_escaped_fragment_');
	    return $input !== false;
	}
	
	protected function show_user_view() { 
		$this->load->view('backbone');
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */