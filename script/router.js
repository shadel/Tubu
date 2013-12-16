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
      'detail': 'detail',
      '/users': 'showUsers'
    }
  });

  var initialize = function(){
	  console.log('aaaaaa');
    var app_router = new AppRouter;
    app_router.on('route:main', function(){
      console.log('main222');
    });
    
    app_router.on('route:detail', function(){
        console.log('showProjects');
      });
    
    Factory.initialize(app_router);
    
    Backbone.history.start({pushState: true, root: Config.root});
    
  };
  return {
    initialize: initialize
  };
});
