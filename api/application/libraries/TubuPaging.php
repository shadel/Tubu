<?php
/**
 * REST response class
 *
 * Respone data of rest function
 *
 * @author  	shadel
 */
class TubuPaging {
	public static $HTTP_SUCCESS = 200;
	
	// Array to convert
	protected $_errors = array ();
	
	/**
	 * init RestResponse
	 */
	public function __construct($obj = NULL) {
		if (is_null($obj)) {
			return;
		}
	}
	
	public function getValue() {
		return $this->_errors;
	}
}

/* End of file format.php */
