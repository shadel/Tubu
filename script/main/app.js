// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'main/router', // Request router.js
], function($, _, Backbone, Router){
  var initialize = function(appRouter){
    // Pass in our Router module and call it's initialize function
    Router.initialize(appRouter);
  }

  return {
    initialize: initialize
  };
});
