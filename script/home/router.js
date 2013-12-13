// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'home/view'
], function($, _, Backbone, Config, View){
  var initialize = function(app_router){
    app_router.on('route:main', function(){
    	View.initialize({
    		el: $('#mainContainer')
    	}, app_router);
    });
    
  };
  return {
    initialize: initialize
  };
});
