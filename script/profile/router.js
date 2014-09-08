// Filename: router.js
define([ 'jquery', 'underscore', 'backbone', 'config/config', 'viewManager',
    'profile/view', 'profile/story_winzar' ], function($, _, Backbone, Config, ViewManager, View, StoryWinzar) {
  var initialize = function(app_router) {

    var Model = Backbone.Model.extend({
      urlRoot : '/api/api/profiles/profile/id/'
    });
    
    var Collection = Backbone.Collection.extend({
      url: '/api/api/stories/owner/id/'
    });
    
    var StoryModel = Backbone.Model.extend({
      urlRoot : '/api/api/stories/add/'
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
          
          var storyWinzar = StoryWinzar.initialize({
            model: new StoryModel()
          }, app_router);

          var profileView = view.initialize({
            el : element,
            model : model,
            ownerCollection: ownerCollection
          }, app_router);
          
          profileView.setStoryWinzar(storyWinzar);
          
          return profileView;
        }
      });

      model.fetch();
    });

  };
  return {
    initialize : initialize
  };
});