define([ 'tubu', 'main/navi', 'main/menu' ], function(Tubu, Navi, Menu) {
  var Model = Tubu.Backbone.Model.extend({
    url : '/api/api/profiles/current/'
  });
  var initialize = function(app_router) {
    var model = new Model();
    model.fetch({
      success : function() {
        Tubu.ViewManager.show({
          view : Navi,
          name : 'navigate',
          selector : 'navigate',
          initialize : function(view, element) {

            return view.initialize({
              el : element,
              model : model
            }, app_router);
          }
        });

        Tubu.ViewManager.show({
          view : Menu,
          name : 'menu',
          selector : 'menu',
          initialize : function(view, element) {

            return view.initialize({
              el : element,
              model : model
            }, app_router);
          }
        });
      }
    });

  };
  return {
    initialize : initialize
  };
});
