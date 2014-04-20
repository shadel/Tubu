// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'viewManager',
  'storylist/view'
], function($, _, Backbone, Config, ViewManager, View){
  
  var Model = Backbone.Model.extend({
    constructor: function(dataObj) {
      arguments[0] = this.convertDataFromServer(dataObj);
      Backbone.Model.apply(this, arguments);
    },
    
    convertDataFromServer: function(dataObj) {
      var modelDefault = {
        id: '',
        title: '',
        image: '',
        summary: '',
        coverName: ''
      };
      
      var model = _.extend(modelDefault, {
        id: dataObj.id,
        title: dataObj.title
      });
      
      if (dataObj.covers) {
        var cover = dataObj.covers[0];
        model.image = cover.img;
        model.sumary = cover.introductory;
        model.coverName = cover.name; 
        model.covers = dataObj.covers;
     }
      
      return model;
    }
  });
	var Collection = Backbone.Collection.extend({
	  url: '/api/api/stories/list',
	  model: Model
	});
	
  var initialize = function(app_router){
	  
    app_router.on('route:storyList', function(){
    	var collection = new Collection();
    	
    	ViewManager.show({
    		view: View,
    		name: 'storyList',
    		selector: 'mainContainer',
    		noReplace: true,
    		initialize: function(view, element){
        		
    			console.log(collection.toJSON());
        		return view.initialize({
        			el: element,
        			collection: collection
        		}, app_router);
        	}
    	});
    	collection.fetch();
    });
    
    
  };
  return {
    initialize: initialize
  };
});
