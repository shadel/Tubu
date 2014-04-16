// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config',
		'text!/tmpl/profile/view.html' ], function($, _, Backbone, Config,
		template) {
	var View = Backbone.View.extend({
		template: _.template(template),
		initialize : function(obj, app_router) {
			this.app = app_router;
			
		},
		
		events: {
			'click': function(){
				// this.app.navigate('', {trigger: true});
			}
		},
		render : function() {
			this.$el.html(this.template());
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
