// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'topbar/view'
], function($, _, Backbone, Config, ViewManager, View){
	
	
  var initialize = function(app_router){
	  
    app_router.on('route:main', function(){
    	
    	
    	ViewManager.show({
    		view: View,
    		name: 'topbar',
    		selector: 'topbar',
    		noReplace: true,
    		initialize: function(view, element){
        		
    			console.log('sdfsdfsdf');
        		return view.initialize({
        			el: element,
        			collection: collection
        		}, app_router);
        	}
    	});
    });
    
    
  };
  return {
    initialize: initialize
  };
});
