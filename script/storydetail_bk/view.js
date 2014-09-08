// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'storydetail/item',
		'text!/tmpl/storydetail/view.html', 'util/HTML.format' ], function($, _, Backbone, Config, Item,
		template, Format) {
	var View = Backbone.View.extend({
	    id: 'content',
		template: _.template(template),
		initialize : function(obj, app_router) {
			this.app = app_router;
			this.model.on('setupFinal', this.render, this);
			this.collection.on('add', this.append, this);
		},
		
		events: {
		    'click #storySummary' : 'toggleSummary'
		},
		render : function() {
		  var value = this.model.toJSON();
		  value.summary = Format.line(value.summary);
		  this.$el.html(this.template(_.extend(Config, value)));
		},
		
		append: function(model) {
		  this.$('#chapterList').append((Item.initialize({model: model}, this.app)).render().$el);
		},
		
		show: function() {
			this.$el.show();
		},
		
		hide: function() {
			this.$el.hide();
		},
		
		toggleSummary: function() {
		    if(this.$('#storySummary i').is('.fa-angle-down')) {
		      this.$('#storySummary i').removeClass('fa-angle-down').addClass('fa-angle-up');
		      this.$('#summaryDetail').show();
		    } else {
		      this.$('#storySummary i').removeClass('fa-angle-up').addClass('fa-angle-down');
		      this.$('#summaryDetail').hide();
		    }
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
