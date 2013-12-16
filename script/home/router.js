// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'home/view'
], function($, _, Backbone, Config, ViewManager, View){
  var initialize = function(app_router){
    app_router.on('route:main', function(){
    	
    	ViewManager.show({
    		view: View,
    		name: 'home',
    		selector: 'mainContainer',
    		noReplace: true,
    		initialize: function(view, element){
        		
        		return view.initialize({
        			el: element
        		}, app_router);
        	}
    	});
    });
    
  };
  return {
    initialize: initialize
  };
});
