// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'chapter/view'
], function($, _, Backbone, Config, ViewManager, View){
  var initialize = function(app_router){
    app_router.on('route:showChapter', function(id){
    	console.log('route showChapter');
    	ViewManager.show({
    		view: View,
    		name: 'showChapter',
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
