// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'author/view'
], function($, _, Backbone, Config, ViewManager, View){
  var Model = Backbone.Model.extend({
    urlRoot: '/api/api/chapters/chapter/id/'
  });
  var initialize = function(app_router){
    app_router.on('route:showStoryManager', function(id){
      console.log('showStoryManager');
      var model = new Model();
      model.urlRoot += id;
      
      console.log(model);
    	ViewManager.show({
    		view: View,
    		name: 'showStoryManager',
    		selector: 'content',
    		initialize: function(view, element){
        		
        		return view.initialize({
        			el: element,
        			model: model
        		}, app_router);
        	}
    	});
    	model.fetch();
    });
    
  };
  return {
    initialize: initialize
  };
});
