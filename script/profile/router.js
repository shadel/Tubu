// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'viewManager',
    'profile/view' ], function($, _, Backbone, Config, ViewManager, View) {
  var initialize = function(app_router) {

    var Model = Backbone.Model.extend({
      urlRoot : '/api/api/profiles/profile/id/'
    });
    
    var Collection = Backbone.Collection.extend({
      url: '/api/api/stories/owner/id/'
    });

    app_router.on('route:showProfile', function(id) {
      var model = new Model();
      model.urlRoot += id;
      
      var ownerCollection = new Collection();
      ownerCollection.url += id;

      ViewManager.show({
        view : View,
        name : 'profile',
        selector : 'content',
        initialize : function(view, element) {

          return view.initialize({
            el : element,
            model : model,
            ownerCollection: ownerCollection
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
