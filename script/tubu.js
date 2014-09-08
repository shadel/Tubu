define([ 'jquery', 'underscore', 'backbone','viewManager', 'config/config' ], function($, _,
    Backbone, ViewManager, Config) {

  var defaultView = {
    clickLink : function(event) {
      event.preventDefault();

      var url = $(event.currentTarget).attr('href');
      this.app.navigate(url, {
        trigger : true
      });
    },

    show : function() {
      this.render();
      this.$el.show();
    },

    hide : function() {
      this.$el.hide();
    }
  };

  var createView = function(obj) {
    obj = obj || {};

    var View = Backbone.View.extend(_.extend(defaultView, obj));

    var initialize = function(obj, app_router) {
      var view = new View(obj, app_router);
      return view;
    };
    return {
      initialize : initialize
    };
  };

  return {
    $ : $,
    _ : _,
    Backbone : Backbone,
    Config : Config,
    ViewManager: ViewManager,
    view : createView
  };
});