<?php
/**
 * REST response class
 *
 * Respone data of rest function
 *
 * @author  	shadel
 */
class TubuResponse {
	
	// Array to convert
	protected $_data = NULL;
	protected $_paging = null;
	protected $_errors = NULL;
	protected $_http_code = null;
	
	/**
	 * init RestResponse
	 */
	public function __construct($object = NULL) {
		if (is_null($object)) {
			return;
		}
		$class_name_obj = get_class ( $object );
		if ($class_name_obj == "TubuError") {
			$this->setError ( $object );
		} else if ($class_name_obj == "TubuHttpCode") {
			$this->setHttpCode ( $object );
		} else if ($class_name_obj == "TubuPaging") {
			$this->setPaging ( $object );
		} else {
			$this->setData ( $object );
		}
	}
	public function setError($obj) {
		$this->_errors = $obj;
	}
	public function setHttpCode($obj) {
		$this->_http_code = $obj;
	}
	public function setData($obj) {
		$this->_data = $obj;
	}
	public function setPaging($obj) {
		$this->_paging = $obj;
	}
	
	/**
	 * get html Code of action
	 * @return number
	 */
	public function getHttpCode() {
		if ($this->_http_code == null) {
			return TubuHttpCode::$HTTP_SUCCESS;
		}
		
		if ($this->_http_code->getValue () == null) {
			return TubuHttpCode::$HTTP_SUCCESS;
		}
		
		return $this->_http_code->getValue ();
	}
	/**
	 * get Respone of action
	 * @return multitype:multitype: NULL
	 */
	public function getResponse() {
		$data = array ();
		if (! is_null ( $this->_errors )) {
			$data ['error'] = $this->_errors->getValue ();
		}
		
		if (! is_null ( $this->_paging )) {
			$data ['paging'] = $this->_paging->getValue ();
		}
		
		if (! is_null ( $this->_data )) {
			if (is_array ( $this->_data )) {
				if (isset ( $this->_data [0] )) {
					if (method_exists ( $this->_data [0], "export_list" )) {
						$data ['data'] = $this->_data [0]->export_list ( $this->_data );
					} else {
						$data ['data'] = $this->_data;
					}
				} else {
					$data ['data'] = array ();
				}
			} else {
				if (method_exists ( $this->_data, "export" )) {
					
					$data ['data'] = $this->_data->export ();
				} else {
					$data ['data'] = $this->_data;
				}
			}
		}
		return $data;
	}
}

/* End of file format.php */
