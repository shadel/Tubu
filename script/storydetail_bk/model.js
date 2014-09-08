// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config'
         ], function($, _, Backbone, Config) {
  var Model = Backbone.Model.extend({
    urlRoot: '/api/api/stories/story/id/',
    
    setupData: function() {
      var dataObj = this.attributes;
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
        model.summary = cover.introductory;
        model.coverName = cover.name; 
        model.covers = dataObj.covers;
        model.status = Config.story.status.PROCESSING;
        model.author = 'author';
     }
      
      this.set(model);
    }
  });

	var initialize = function(obj) {
		var model = new Model(obj);
		return model;
	};
	return {
		initialize : initialize
	};
});
