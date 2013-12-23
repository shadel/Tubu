// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'home/item',
		'text!/tmpl/home/view.html' ], function($, _, Backbone, Config, Item,
		template) {
	
	var View = Backbone.View.extend({
		className: 'row',
		template: _.template(template),
		initialize : function(obj, app_router) {
			this.app = app_router;
			this.collection.on('add', this.appendTo, this);
		},
		
		render : function() {
			console.log('render');
			this.$el.html(this.template());
			this.collection.each(this.appendTo, this);
			return this;
		},
		
		appendTo: function(model, index) {
			this.$('.row').append((Item.initialize({model: model}, this.app)).render().$el);
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
