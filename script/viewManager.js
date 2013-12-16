// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'factory'
], function($, _){
	
	var addView = function(viewList, options){
		var selector = options.selector;
		var name = selector;
		
		if(options.name) {
    		name = options.name;
    	}
		
		if(options.noReplace) {
			var new_selector = selector + '-' + name;
			$('#' + selector).append('<div id="' + new_selector + '">');
			selector = new_selector;
		}
		
		viewList[options.selector] = viewList[options.selector] || {};
		viewList[options.selector][name] = options.initialize(options.view, $('#' + selector));
	}
	
  return {
	  viewList: {},
    show: function(options) {
    	
    	if(!this.viewList[options.selector] || !this.viewList[options.selector][options.name]) {
    		addView(this.viewList, options);
    	}
    	
    	var selector = options.selector;
		var name = selector;
		
		if(options.name) {
    		name = options.name;
    	}
    	
    	_.each(this.viewList[selector], function(view, key) {
    		if(key != name ) {
    			view.hide();
    		} else {
    			view.show();
    		}
    	});
    	
    }
  };
});
