// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'factory'
], function($, _, Backbone, Config, Factory){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'main',
      'control/addstory': 'addStory',
      'story/:id': 'storyDetail',
      'storylist/:key': 'storyList',
      'profile/:id': 'showProfile',
      'chapter/:id': 'showChapter',
      'author/:id': 'showAuthor'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    
    Factory.initialize(app_router);
    
    Backbone.history.start({pushState: true, root: Config.root});
    
  };
  return {
    initialize: initialize
  };
});
