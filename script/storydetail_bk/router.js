// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'storydetail/view',
  'storydetail/model'
], function($, _, Backbone, Config, ViewManager, View, Model){
  var Collection = Backbone.Collection.extend({
    url: '/api/api/chapters/list/key/'
  });
  
  var initialize = function(app_router){
    app_router.on('route:storyDetail', function(id){
      var model = new Model.initialize();
      var collection = new Collection();
    	var view = ViewManager.show({
    		view: View,
    		name: 'storyDetail',
    		selector: 'content',
    		initialize: function(view, element){
        		
        		return view.initialize({
        			el: element,
        			model: model,
        			collection: collection
        		}, app_router);
        	}
    	});
    	if (view) {
    	  model = view.model;
    	  model.set({'id': id});
    	
        	model.fetch({
        	  success: function() {
        	    model.setupData();
        	    model.trigger('setupFinal');
        	    collection.url += model.get('covers')[0].id;
        	    collection.fetch();
        	  }
        	});
    	}
    });
    
  };
  return {
    initialize: initialize
  };
});
