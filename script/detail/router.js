// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'detail/view'
], function($, _, Backbone, Config, ViewManager, View){
  var initialize = function(app_router){
    app_router.on('route:detail', function(){
    	ViewManager.show({
    		view: View,
    		name: 'detail',
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
