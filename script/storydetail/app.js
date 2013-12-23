// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'storydetail/router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(appRouter){
	  console.log('detail aaaaaaa');
    // Pass in our Router module and call it's initialize function
    Router.initialize(appRouter);
  }

  return {
    initialize: initialize
  };
});
