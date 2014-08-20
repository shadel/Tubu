// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'viewManager',
    'chapter/view' ], function($, _, Backbone, Config, ViewManager, View) {
  var Model = Backbone.Model.extend({
    urlRoot : '/api/api/chapters/chapter/id/'
  });
  var initialize = function(app_router) {
    app_router.on('route:showChapter', function(id) {
      var model = new Model();
      model.urlRoot += id;

      ViewManager.show({
        view : View,
        name : 'showChapter',
        selector : 'content',
        initialize : function(view, element) {

          return view.initialize({
            el : element,
            model : model
          }, app_router);
        }
      });
      model.fetch();
    });

  };
  return {
    initialize : initialize
  };
});
