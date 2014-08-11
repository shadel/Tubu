// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'author/router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(appRouter){
	  console.log('author aaaaaaa');
    // Pass in our Router module and call it's initialize function
    Router.initialize(appRouter);
  }

  return {
    initialize: initialize
  };
});
