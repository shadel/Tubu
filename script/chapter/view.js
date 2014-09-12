// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config',
		'text!/tmpl/chapter/view.html' ], function($, _, Backbone, Config,
		template) {
  
	var View = Backbone.View.extend({
	    id: 'content',
		template: _.template(template),
		initialize : function(obj, app_router) {
			this.app = app_router;
			this.model.on('change', this.render, this);
		},
		
		events: {
			'click': function(){
				// this.app.navigate('', {trigger: true});
			}
		},
		render : function() {
		  var values = {
		      body: 'Test coi có empty không'
		  };
		  
			this.$el.html(this.template(
			    _.extend(values, this.model.toJSON())));
			return this;
		},
		
		show: function() {
			this.render();
			this.$el.show();
		},
		
		hide: function() {
			this.$el.hide();
		}
	});

	var initialize = function(obj, app_router) {
		var view = new View(obj, app_router);
		return view;
	};
	return {
		initialize : initialize
	};
});
