// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'profile/view'
], function($, _, Backbone, Config, ViewManager, View){
  var initialize = function(app_router){
    app_router.on('route:showProfile', function(id){
    	console.log('route showProfile');
    	ViewManager.show({
    		view: View,
    		name: 'profile',
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
