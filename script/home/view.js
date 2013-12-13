// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config',
		'text!/tmpl/home/view.html' ], function($, _, Backbone, Config,
		template) {
	var View = Backbone.View.extend({
		initialize : function(obj, app_router) {
			this.app = app_router;
			
		},
		
		events: {
			'click': function(){
				this.app.navigate('detail', {trigger: true});
			}
		},
		render : function() {
			this.$el.html(template);
		}
	});

	var initialize = function(obj, app_router) {
		var view = new View(obj, app_router);
		view.render();
	};
	return {
		initialize : initialize
	};
});
