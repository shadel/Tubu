// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config',
		'text!/tmpl/storylist/item.html' ], function($, _, Backbone, Config, 
		template) {
	
	var View = Backbone.View.extend({
		className: 'story-item list-group-item',
		tagName: 'li',
		template: _.template(template),
		initialize : function(obj, app_router) {
			this.app = app_router;
			this.model.on('change', this.render, this);
		},
		
		events: {
			'click a': function(event){
				event.preventDefault();
				
				var url = $(event.currentTarget).attr('href');
				this.app.navigate(url, {trigger: true});
			},
		},
		render : function() {
			this.$el.html(this.template(this.model.attributes));
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
