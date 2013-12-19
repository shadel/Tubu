// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'storydetail/view'
], function($, _, Backbone, Config, ViewManager, View){
  var initialize = function(app_router){
    app_router.on('route:storyDetail', function(id){
    	console.log('route storyDetail');
    	ViewManager.show({
    		view: View,
    		name: 'storyDetail',
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
