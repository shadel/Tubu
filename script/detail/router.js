// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'config/config',
  'detail/view'
], function($, _, Backbone, Config, View){
  var initialize = function(app_router){
    app_router.on('route:detail', function(){
    	View.initialize({
    		el: $('#mainContainer')
    	}, app_router);
    });
    
  };
  return {
    initialize: initialize
  };
});
