// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'home/newitem', 'home/hotitem',
		'text!/tmpl/home/view.html' ], function($, _, Backbone, Config, NewItem, HotItem,
		template) {
	
	var View = Backbone.View.extend({
	    id: 'content',
		template: _.template(template),
		initialize : function(obj, app_router) {
		    this.newCollection = obj.newCollection;
		    this.hotCollection = obj.hotCollection;
			this.app = app_router;
			this.newCollection.on('add', this.appendToNew, this);
			this.hotCollection.on('add', this.appendToHot, this);
		},
		
		render : function() {
			this.$el.html(this.template(Config));
			this.newCollection.each(this.appendToNew, this);
			this.hotCollection.each(this.appendToHot, this);
			return this;
		},
		
		appendToNew: function(model, index) {
			this.$('#newStory').append((NewItem.initialize({model: model}, this.app)).render().$el);
		},
		
		appendToHot: function(model, index) {
          this.$('#hotStory').append((HotItem.initialize({model: model}, this.app)).render().$el);
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
