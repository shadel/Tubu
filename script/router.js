// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config'
], function($, _, Backbone, Config){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '': 'main',
      '/projects': 'showProjects',
      '/users': 'showUsers'
    }
  });

  var initialize = function(){
	  console.log('aaaaaa');
    var app_router = new AppRouter;
    app_router.on('route:main', function(){
      console.log('main222');
    });
    
    app_router.on('route:showProjects', function(){
        console.log('showProjects');
      });
    
    Backbone.history.start({pushState: true, root: Config.root});
  };
  return {
    initialize: initialize
  };
});
