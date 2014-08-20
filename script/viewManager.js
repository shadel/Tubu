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
		
		// Todo: only chrome
		// after render force call render of window
		if (_.isFunction(viewList[options.selector][name].render)) {
		  var tempRender = viewList[options.selector][name].render;
		  viewList[options.selector][name].render = function() {
		    var result = tempRender.apply(viewList[options.selector][name], arguments);
		    forceRender(viewList[options.selector][name].$el);
		    return result;
		  }
		}
	}

	// Chrome can't render, must force call
	var forceRender = _.once(function($el) {
	  $el.css({'position': 'absolute'});
      setTimeout(function(){$el.css({'position': ''})}, 100);
	});
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
    	var resultView = null;
    	_.each(this.viewList[selector], function(view, key) {
    		if(key != name ) {
    			view.hide();
    		} else {
    			view.show();
    			resultView = view;
    		}
    	});
    	
    	return resultView;
    }
  };
});
