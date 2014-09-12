<?php
/**
 * REST response class
 *
 * Respone data of rest function
 *
 * @author  	shadel
 */
class TubuHttpCode {
	public static $HTTP_SUCCESS = 200;
	public static $HTTP_NOT_FOUND = 404;
	
	protected $_code;
	
	/**
	 * init RestResponse
	 */
	public function __construct($obj = NULL) {
		if (is_null($obj)) {
			return;
		}
		$this->_code = $obj;
	}
	
	public function getValue() {
		return $this->_code;
	}
}

/* End of file format.php */
