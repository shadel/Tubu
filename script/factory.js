// Filename: router.js
define([
  'underscore',
  'home/app',
  'detail/app'
], function(homeApp){
	var appList = Array.prototype.slice.call(arguments, 0);
	appList.shift();
	
  var initialize = function(appRoute){
	  _.each(appList, function(app){
		  app.initialize(appRoute);
	  });
  };
  return {
    initialize: initialize
  };
});
