<?php
/**
 * REST response class
 *
 * Respone data of rest function
 *
 * @author  	shadel
 */
class TubuError {
	// Array to convert
	protected $_errors = array ();
	
	/**
	 * init RestResponse
	 */
	public function __construct($obj = NULL) {
		if (is_null($obj)) {
			return;
		}
		if (is_array ( $obj ) && isset($obj[0])) {
			$this->_errors = array_merge ( $this->_errors, $obj );
		} else {
			array_push ( $this->_errors, $obj );
			
		}
	}
	public function addError($obj) {
		array_push ( $this->_errors, $obj );
	}
	
	public function getValue() {
		return $this->_errors;
	}
	
	public static function notFound() {
		$res =  new TubuResponse(new TubuError(array(
				'type' => 'error.notfound'
				)));
		$res->setHttpCode(new TubuHttpCode(TubuHttpCode::$HTTP_NOT_FOUND));
		return $res;
	}
	
	public static function accessDenied() {
		$res =  new TubuResponse(new TubuError(array(
				'type' => 'error.accessDenied'
		)));
		$res->setHttpCode(new TubuHttpCode(TubuHttpCode::$HTTP_NOT_FOUND));
		return $res;
	}
}

/* End of file format.php */
